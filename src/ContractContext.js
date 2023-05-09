import { createContext, useContext, useState } from "react";
import Web3 from "web3";
import WalletContext from "./WalletContext";
import { Alert, AlertTitle, Box, Button, Link, Modal, Typography } from "@mui/material";
import { ZDK, ZDKNetwork, ZDKChain } from "@zoralabs/zdk";
import { contractAdr, contractABI, proxyAdr } from "./Contracts";


const networkInfo = {
  network: ZDKNetwork.Ethereum,
  chain: ZDKChain.Goerli,
}

const API_ENDPOINT = "https://api.zora.co/graphql";
const args = {
  endPoint: API_ENDPOINT,
  networks: [networkInfo],
}

const zdk = new ZDK(args) 

const ContractContext = createContext();

export function ContractProvider({ children }) {

  const { account } = useContext(WalletContext);

  const web3 = new Web3("https://ethereum-goerli-rpc.allthatnode.com");
  const contract = new web3.eth.Contract(contractABI, contractAdr);

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
  const compressSettings = (settings) => {
    const compressed = 0n +
      BigInt(settings.rotating_mode * 1) +
      BigInt(settings.dist_v_normalize * 2) +
      BigInt(settings.face_or_wire * 2 ** 2) +
      BigInt(settings.opacity * 2 ** 8) +
      BigInt(settings.angular_speed_deg * 2 ** 16) +
      BigInt(settings.wire_color * 2 ** 32) +
      BigInt(settings.back_color * 2 ** 56);

    return compressed;
  }

  const colorListToBytes = (arr) => {
    let hexString = "0x";
    arr.forEach((num) => {
      hexString += web3.utils.padLeft(web3.utils.numberToHex(num), 6).replace('0x', '');
    })
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
    console.log(settings)
    try {
      const prev = await contract.methods.previewTokenById(
        tid,
        settings.observer.map(p => BigInt(p)),
        compressSettings(settings),
        colorListToBytes(settings.color_list.slice(0, shapes[tid % 5].faces))
      ).call();
      return prev;
    } catch (e) {
      throw new Error(e);
    }
  }

  const [changed, setChanged] = useState(false);
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
    setError(false);
    setTxhash('');

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

  const getTokensOfAddress = async (ownerAdr) => {
    const where = {
      collectionAddresses: proxyAdr,
      ownerAddresses: ownerAdr,
    }
    const tokens = await zdk.tokens(
      {
        where: where,
      }
    )
    return tokens;
  }

  const totalMinted = async () => {
    const where = {
      collectionAddresses: proxyAdr,
    }
    const stat = await zdk.nftCount(
      {
        where: where,
      }
    )
    return stat.aggregateStat.nftCount;
  }



  return (
    <ContractContext.Provider value={{
      contractAdr: contractAdr,
      contractABI: contractABI,
      getTokenURI: getTokenURI,
      renderTokenById: renderTokenById,
      getSetting: getSetting,
      getTokenPreview: getTokenPreview,
      setTokenSettings: setTokenSettings,
      getTokensOfAddress: getTokensOfAddress,
      totalMinted: totalMinted,
    }}>
      <Modal
        open={open}
        disableEscapeKeyDown
        onClose={handleModalClose}
      >
        <Box className="tx-modal">
          <Typography variant='title' display='block' sx={{ textAlign: 'center', color: 'black' }}>Submit changes to token</Typography>
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
            !error && !changed && txhash &&
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
                {/* <Link href={'https://opensea.io/assets/ethereum/0xc3120f76424c21a4019a10fbc90af0481b267123/' + ostid} underline="none" target="_blank">
                  View On OpenSea
                </Link> */}
              </Alert>
            </>
          }
          {
            (error || changed) &&
            <Button variant='contained' color='warning' onClick={closeModal} fullWidth>Close</Button>
          }

        </Box>
      </Modal>
      {children}
    </ContractContext.Provider>
  );
}

export default ContractContext;