const contractAdr = '0x045bD7F6928525f88B573241df51e4Cb36a1C9f6';
const contractABI = [{ "inputs": [], "stateMutability": "nonpayable", "type": "constructor" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "previousOwner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "newOwner", "type": "address" }], "name": "OwnershipTransferred", "type": "event" }, { "inputs": [], "name": "contractURI", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "id", "type": "uint256" }], "name": "getGeneralSetting", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }, { "components": [{ "internalType": "int128[3]", "name": "observer", "type": "int128[3]" }, { "internalType": "uint24", "name": "back_color", "type": "uint24" }, { "internalType": "uint24", "name": "wire_color", "type": "uint24" }, { "internalType": "uint16", "name": "angular_speed_deg", "type": "uint16" }, { "internalType": "uint8", "name": "opacity", "type": "uint8" }, { "internalType": "bool", "name": "rotating_mode", "type": "bool" }, { "internalType": "bool", "name": "dist_v_normalize", "type": "bool" }, { "internalType": "bool", "name": "face_or_wire", "type": "bool" }, { "internalType": "uint24[]", "name": "color_list", "type": "uint24[]" }], "internalType": "struct TokenSettings.GeneralSetting", "name": "", "type": "tuple" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "id", "type": "uint256" }], "name": "getMinimalSetting", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }, { "components": [{ "internalType": "uint256", "name": "observer", "type": "uint256" }, { "internalType": "bytes", "name": "colorlist", "type": "bytes" }], "internalType": "struct TokenSettings.MinimalSetting", "name": "", "type": "tuple" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "_solidNumber", "type": "uint256" }], "name": "getUnPackedSolid", "outputs": [{ "components": [{ "internalType": "string", "name": "name", "type": "string" }, { "internalType": "int128[3][]", "name": "vertices", "type": "int128[3][]" }, { "internalType": "uint8[]", "name": "face_list", "type": "uint8[]" }, { "internalType": "uint8", "name": "face_polygon", "type": "uint8" }], "internalType": "struct SolidData.Solid", "name": "", "type": "tuple" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "bytes", "name": "", "type": "bytes" }], "name": "initializeWithData", "outputs": [], "stateMutability": "pure", "type": "function" }, { "inputs": [], "name": "owner", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "tid", "type": "uint256" }, { "internalType": "int128[3]", "name": "_observerP", "type": "int128[3]" }, { "internalType": "uint256", "name": "_compressedP", "type": "uint256" }, { "internalType": "bytes", "name": "_colorlistP", "type": "bytes" }], "name": "previewTokenById", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "tid", "type": "uint256" }], "name": "renderTokenById", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "renounceOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "string", "name": "_uri", "type": "string" }], "name": "setContractURI", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "id", "type": "uint256" }, { "internalType": "int128[3]", "name": "_observer", "type": "int128[3]" }, { "internalType": "uint256", "name": "_compressed", "type": "uint256" }, { "internalType": "bytes", "name": "_colorlist", "type": "bytes" }], "name": "setMinimalSetting", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "contract IERC721mini", "name": "_targetAddress", "type": "address" }], "name": "setTargetAddress", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint8", "name": "_tokenId", "type": "uint8" }, { "internalType": "string", "name": "_name", "type": "string" }, { "internalType": "uint256[]", "name": "_vertices", "type": "uint256[]" }, { "internalType": "bytes", "name": "_face_list", "type": "bytes" }, { "internalType": "uint8", "name": "_face_polygon", "type": "uint8" }], "name": "solidStruct_IMU", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "targetContract", "outputs": [{ "internalType": "contract IERC721mini", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "tokenURI", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "newOwner", "type": "address" }], "name": "transferOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" }];

const proxyAdr = "0xa2804c5C55e9ab18458CB6A17D600E76a15C7f2A";

export { contractAdr, contractABI, proxyAdr }