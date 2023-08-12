import { createContext, useContext, useState } from "react";
import Web3 from "web3";
import WalletContext from "./WalletContext";
import { Alert, AlertTitle, Box, Button, Modal, Typography, Link } from "@mui/material";
import { contractAdr, contractABI, proxyAdr, proxyABI } from "./Contracts";

const ContractContext = createContext();

export function ContractProvider({ children }) {

  const { account } = useContext(WalletContext);


  const web3 = new Web3("https://ethereum-goerli-rpc.allthatnode.com");
  const contract = new web3.eth.Contract(contractABI, contractAdr);
  const proxy = new web3.eth.Contract(proxyABI, proxyAdr);

  const MINT_PRICE = 0.002;

  const getTokenURI = async (tokenId) => {
    try {
      const uri = await contract.methods.tokenURI(tokenId).call();
      return uri;
    } catch (e) {
      throw new Error(e);
    }
  }

  const renderTokenById = async (tokenId) => {
    try {
      const img = await contract.methods.renderTokenById(tokenId).call();
      return img;
    } catch (e) {
      throw new Error(e);
    }
  }

  const getSetting = async (tokenId) => {
    try {
      const settings = await contract.methods.getGeneralSetting(tokenId).call();
      return settings;
    } catch (e) {
      throw new Error(e);
    }
  }

  /* global BigInt */
  const colorCompressor = (color) => {
    const r = (color & 0xF0) >>> 4;
    const g = (color & 0xF000) >>> 8;
    const b = (color & 0xF00000) >>> 12;
    return (r + g+ b);
  }

  const compressSettings = (settings) => {
    const compressed = 0n +
      BigInt(settings.rotating_mode * 1) +
      BigInt(settings.dist_v_normalize * 2) +
      BigInt(settings.face_or_wire * 2 ** 2) +
      BigInt(settings.opacity * 2 ** 8) +
      BigInt(settings.angular_speed_deg * 2 ** 16) +
      BigInt(colorCompressor(settings.wire_color) * 2 ** 32) +
      BigInt(colorCompressor(settings.back_color) * 2 ** 48);

    return compressed;
  }

  const colorListToBytes = (arr) => {
    let hexString = "0x";
    arr.forEach((num) => {
      hexString += web3.utils.padLeft(web3.utils.numberToHex(num), 6).replace('0x', '');
    })
    // return web3.utils.hexToBytes(hexString);
    return hexString;
  }

  const shapes = [
    { name: "Tetrahedron", faces: 4 },
    { name: "Cube", faces: 6 },
    { name: "Octahedron", faces: 8 },
    { name: "Dodecahedron", faces: 12 },
    { name: "Icosahedron", faces: 20 },
  ]

  const getTokenPreview = async (tid, settings) => {
    // console.log(settings)
    try {
      const prev = await contract.methods.previewTokenById(
        tid,
        settings.observer.map(p => BigInt(p)),
        compressSettings(settings),
        colorListToBytes(settings.color_list.slice(0, shapes[tid % 5].faces))
      ).call();
      console.log(prev)
      return prev;
    } catch (e) {
      throw new Error(e);
    }
  }

  const [writeMode, setWriteMode] = useState("mint");
  const [changed, setChanged] = useState(false);
  const [minted, setMinted] = useState(false);
  const [mintNum, setMintNum] = useState(0);
  const [error, setError] = useState('');
  const [open, setOpen] = useState(false);
  const [txhash, setTxhash] = useState('');

  const createTxHashLink = () => {
    const base = "https://goerli.etherscan.io/tx/"
    return base + txhash;
  }

  const closeModal = () => {
    setOpen(false);
  }

  const handleModalClose = (event, reason) => {
  }

  const setTokenSettings = async (tid, settings) => {

    setOpen(true);
    setChanged(false);
    setMinted(false);
    setError(false);
    setTxhash('');
    setWriteMode("settings");

    const w = new Web3(window.ethereum);
    const c = new w.eth.Contract(contractABI, contractAdr);

    c.methods.setMinimalSetting(
      tid,
      settings.observer.map(p => BigInt(p)),
      compressSettings(settings),
      colorListToBytes(settings.color_list.slice(0, shapes[tid % 5].faces))
    ).send(
      {
        from: account,
      }
    )
      .on('transactionHash', (hash) => {
        console.log(hash);
        setTxhash(hash);
      })
      .on('receipt', (rec) => {
        console.log(rec);
        setChanged(true);
      })
      .on('error', (error, receipt) => {
        console.log(error);
        setError(error.message);
      })

  }

  const mintTokens = async (num) => {

    setOpen(true);
    setChanged(false);
    setMinted(false);
    setError(false);
    setTxhash('');
    setMintNum(num);
    setWriteMode("mint");

    const w = new Web3(window.ethereum);
    const c = new w.eth.Contract(proxyABI, proxyAdr);

    c.methods.mintToken(num).send(
      {
        from: account,
        value: web3.utils.toWei(String(num * MINT_PRICE), 'ether')
      }
    )
      .on('transactionHash', (hash) => {
        console.log(hash);
        setTxhash(hash);
      })
      .on('receipt', (rec) => {
        console.log(rec);
        setMinted(true);
      })
      .on('error', (error, receipt) => {
        console.log(error);
        setError(error.message);
      })

  }

  const getTokensOfAddress = async (ownerAdr) => {
    let tokens = [];
    try {
      const balance = await proxy.methods.balanceOf(ownerAdr).call();
      for (let i = 0; i < balance; i++) {
        const tid = await proxy.methods.tokenOfOwnerByIndex(ownerAdr, i).call();
        tokens.push(tid);
      }
    } catch (e) {
      throw new Error(e);
    }
    return tokens;
  }

  const totalMinted = async () => {
    try {
      const total = await proxy.methods.totalSupply().call();
      return total;
    } catch (e) {
      throw new Error(e);
    }
  }



  return (
    <ContractContext.Provider value={{
      contractAdr: contractAdr,
      contractABI: contractABI,
      MINT_PRICE: MINT_PRICE,
      getTokenURI: getTokenURI,
      renderTokenById: renderTokenById,
      getSetting: getSetting,
      getTokenPreview: getTokenPreview,
      setTokenSettings: setTokenSettings,
      mintTokens: mintTokens,
      getTokensOfAddress: getTokensOfAddress,
      totalMinted: totalMinted,
    }}>
      <Modal
        open={open}
        disableEscapeKeyDown
        onClose={handleModalClose}
      >
        <Box className="tx-modal">
          <Typography variant='title' display='block' sx={{ textAlign: 'center', color: 'black' }}>
            {
              writeMode === "settings" &&
              <span>Submit changes to token</span>
            }
            {
              writeMode === "mint" &&
              <span>Minting {mintNum} Tokens</span>
            }
          </Typography>
          {
            txhash &&
            <>
              <Alert sx={{ my: '1rem', fontFamily: 'inherit' }} severity="info">
                <AlertTitle sx={{ fontFamily: 'inherit' }}>Tx Hash</AlertTitle>
                <p>{txhash}</p>
                <Link href={createTxHashLink()} underline="none" target="_blank">
                  View On Etherscan
                </Link>
              </Alert>
            </>
          }
          {
            !(error || changed || minted) && txhash &&
            <div>
              <img src='txloading.jpg' className='loadinganimw' alt="tx-waiting" />
            </div>
          }
          {
            error &&
            <>
              <Alert severity='error' sx={{ my: '1rem', fontFamily: 'inherit' }}>
                <AlertTitle sx={{ fontFamily: 'inherit' }}>Error</AlertTitle>
                {error}
              </Alert>
            </>
          }
          {
            changed &&
            <>
              <Alert severity='success' sx={{ my: '1rem', fontFamily: 'inherit' }}>
                <AlertTitle sx={{ fontFamily: 'inherit' }}>Changes Submitted Successfully</AlertTitle>
              </Alert>
            </>
          }
          {
            minted &&
            <>
              <Alert severity='success' sx={{ my: '1rem', fontFamily: 'inherit' }}>
                <AlertTitle sx={{ fontFamily: 'inherit' }}>Tokens Minted Successfully</AlertTitle>
                You can view your tokens in <a href="/mytokens">My Tokens</a> page
              </Alert>
            </>
          }
          {
            (error || changed || minted) &&
            <Button variant='contained' color='warning' onClick={closeModal} fullWidth>Close</Button>
          }

        </Box>
      </Modal>
      {children}
    </ContractContext.Provider>
  );
}

export default ContractContext;