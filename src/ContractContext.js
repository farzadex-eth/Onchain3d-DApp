import { createContext, useContext } from "react";
import Web3 from "web3";
import WalletContext from "./WalletContext";

const ContractContext = createContext();

export function ContractProvider({ children }) {

    const { account } = useContext(WalletContext);

    // Tiny Dinos (eth) contract example
    const contractAdr = '0xF358D13917349FBcEdB22BCc7213c5172685ab35';
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
              "internalType": "uint8",
              "name": "_opacity",
              "type": "uint8"
            },
            {
              "internalType": "bool",
              "name": "_rotating_mode",
              "type": "bool"
            },
            {
              "internalType": "uint8",
              "name": "_angular_speed_deg",
              "type": "uint8"
            },
            {
              "internalType": "bool",
              "name": "_dist_v_normalize",
              "type": "bool"
            },
            {
              "internalType": "bool",
              "name": "_face_or_wire",
              "type": "bool"
            },
            {
              "internalType": "uint24",
              "name": "_wire_color",
              "type": "uint24"
            },
            {
              "internalType": "uint24[]",
              "name": "_color_list",
              "type": "uint24[]"
            }
          ],
          "name": "setSetting",
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
          "name": "getSetting",
          "outputs": [
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
                  "name": "wire_color",
                  "type": "uint24"
                },
                {
                  "internalType": "uint24[]",
                  "name": "color_list",
                  "type": "uint24[]"
                }
              ],
              "internalType": "struct PlatonicRebornV3.GeneralSetting",
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
                }
              ],
              "internalType": "struct PlatonicRebornV3.poly_struct",
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
                  "internalType": "string",
                  "name": "headstring",
                  "type": "string"
                }
              ],
              "internalType": "struct PlatonicRebornV3.wire_struct",
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
              "internalType": "uint8",
              "name": "_opacityP",
              "type": "uint8"
            },
            {
              "internalType": "bool",
              "name": "_rotating_modeP",
              "type": "bool"
            },
            {
              "internalType": "uint8",
              "name": "_angular_speed_degP",
              "type": "uint8"
            },
            {
              "internalType": "bool",
              "name": "_dist_v_normalizeP",
              "type": "bool"
            },
            {
              "internalType": "bool",
              "name": "_face_or_wireP",
              "type": "bool"
            },
            {
              "internalType": "uint24",
              "name": "_wire_colorP",
              "type": "uint24"
            },
            {
              "internalType": "uint24[]",
              "name": "_color_listP",
              "type": "uint24[]"
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
          "inputs": [],
          "name": "sss",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        }
      ];

    const web3 = new Web3("http://testnode.outofcontext.tech:8989");
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
            const settings = await contract.methods.getSetting(tokenId).call();
            return settings;
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
        }}>
            {children}
        </ContractContext.Provider>
    );
}

export default ContractContext;