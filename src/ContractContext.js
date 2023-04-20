import { createContext, useContext } from "react";
import Web3 from "web3";
import WalletContext from "./WalletContext";

const ContractContext = createContext();

export function ContractProvider({ children }) {

  const { account } = useContext(WalletContext);

  // Contract
  const contractAdr = '0xD3ea4434d62Abc941397f1A09f72517cBE31E7F2';
  const contractABI = [
    {
      "inputs": [],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "inputs": [],
      "name": "dist",
      "outputs": [
        {
          "internalType": "int128",
          "name": "",
          "type": "int128"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint8",
          "name": "_tokenId",
          "type": "uint8"
        },
        {
          "internalType": "string",
          "name": "_name",
          "type": "string"
        },
        {
          "internalType": "int128[3][]",
          "name": "_vertices",
          "type": "int128[3][]"
        },
        {
          "internalType": "bool[]",
          "name": "_adjacency_matrix",
          "type": "bool[]"
        },
        {
          "internalType": "uint8[]",
          "name": "_face_list",
          "type": "uint8[]"
        },
        {
          "internalType": "uint8",
          "name": "_face_polygon",
          "type": "uint8"
        }
      ],
      "name": "solidStruct_IMU",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "id",
          "type": "uint256"
        },
        {
          "internalType": "int128[3]",
          "name": "_observer",
          "type": "int128[3]"
        },
        {
          "internalType": "uint256",
          "name": "_compressed",
          "type": "uint256"
        },
        {
          "internalType": "bytes",
          "name": "_colorlist",
          "type": "bytes"
        }
      ],
      "name": "setMinimalSetting",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "id",
          "type": "uint256"
        }
      ],
      "name": "getGeneralSetting",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        },
        {
          "components": [
            {
              "internalType": "int128[3]",
              "name": "observer",
              "type": "int128[3]"
            },
            {
              "internalType": "uint8",
              "name": "opacity",
              "type": "uint8"
            },
            {
              "internalType": "bool",
              "name": "rotating_mode",
              "type": "bool"
            },
            {
              "internalType": "uint16",
              "name": "angular_speed_deg",
              "type": "uint16"
            },
            {
              "internalType": "bool",
              "name": "dist_v_normalize",
              "type": "bool"
            },
            {
              "internalType": "bool",
              "name": "face_or_wire",
              "type": "bool"
            },
            {
              "internalType": "uint24",
              "name": "back_color",
              "type": "uint24"
            },
            {
              "internalType": "uint24",
              "name": "wire_color",
              "type": "uint24"
            },
            {
              "internalType": "uint24[]",
              "name": "color_list",
              "type": "uint24[]"
            }
          ],
          "internalType": "struct PlatonicRebornV4.GeneralSetting",
          "name": "",
          "type": "tuple"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "id",
          "type": "uint256"
        }
      ],
      "name": "getMinimalSetting",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        },
        {
          "components": [
            {
              "internalType": "int128[3]",
              "name": "observer",
              "type": "int128[3]"
            },
            {
              "internalType": "uint256",
              "name": "compressed",
              "type": "uint256"
            },
            {
              "internalType": "bytes",
              "name": "colorlist",
              "type": "bytes"
            }
          ],
          "internalType": "struct PlatonicRebornV4.MinimalSetting",
          "name": "",
          "type": "tuple"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "components": [
            {
              "internalType": "uint64[]",
              "name": "pix",
              "type": "uint64[]"
            },
            {
              "internalType": "uint256[]",
              "name": "sorted_index",
              "type": "uint256[]"
            },
            {
              "internalType": "uint8[]",
              "name": "face_list",
              "type": "uint8[]"
            },
            {
              "internalType": "uint24[]",
              "name": "color_list",
              "type": "uint24[]"
            },
            {
              "internalType": "uint8",
              "name": "opacity",
              "type": "uint8"
            },
            {
              "internalType": "uint8",
              "name": "polygon",
              "type": "uint8"
            },
            {
              "internalType": "uint24",
              "name": "back_color",
              "type": "uint24"
            }
          ],
          "internalType": "struct PlatonicRebornV4.poly_struct",
          "name": "pls0",
          "type": "tuple"
        }
      ],
      "name": "svgPolygon",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "components": [
            {
              "internalType": "uint64[]",
              "name": "pix",
              "type": "uint64[]"
            },
            {
              "internalType": "bool[]",
              "name": "adj",
              "type": "bool[]"
            },
            {
              "internalType": "uint24",
              "name": "wire_color",
              "type": "uint24"
            },
            {
              "internalType": "uint256",
              "name": "lenVertices",
              "type": "uint256"
            },
            {
              "internalType": "uint24",
              "name": "back_color",
              "type": "uint24"
            }
          ],
          "internalType": "struct PlatonicRebornV4.wire_struct",
          "name": "wrs0",
          "type": "tuple"
        }
      ],
      "name": "svgWireframe",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "tid",
          "type": "uint256"
        },
        {
          "internalType": "int128[3]",
          "name": "_observerP",
          "type": "int128[3]"
        },
        {
          "internalType": "uint256",
          "name": "_compressedP",
          "type": "uint256"
        },
        {
          "internalType": "bytes",
          "name": "_colorlistP",
          "type": "bytes"
        }
      ],
      "name": "previewTokenById",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "tokenURI",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "tid",
          "type": "uint256"
        }
      ],
      "name": "renderTokenById",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes",
          "name": "colorlist",
          "type": "bytes"
        }
      ],
      "name": "color_listConverter",
      "outputs": [
        {
          "internalType": "uint24[]",
          "name": "",
          "type": "uint24[]"
        }
      ],
      "stateMutability": "pure",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "sss",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ];

  const web3 = new Web3("https://testnode.outofcontext.tech");
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
    console.log(colorListToBytes(settings.color_list.slice(0, shapes[tid%5].faces)))
    try {
      const prev = await contract.methods.previewTokenById(
        tid,
        settings.observer.map(p => BigInt(p)),
        compressSettings(settings),
        colorListToBytes(settings.color_list.slice(0, shapes[tid%5].faces))
      ).call();
      return prev;
    } catch (e) {
      throw new Error(e);
    }
  }

  return (
    <ContractContext.Provider value={{
      contractAdr: contractAdr,
      contractABI: contractABI,
      getTokenURI: getTokenURI,
      renderTokenById: renderTokenById,
      getSetting: getSetting,
      getTokenPreview: getTokenPreview,
    }}>
      {children}
    </ContractContext.Provider>
  );
}

export default ContractContext;