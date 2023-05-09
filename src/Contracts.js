const contractAdr = '0x8e9f494a0e94909f94697A42dd0b4899505FeCBF';
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

const proxyAdr = "0x4Af21DF2DC80F617cC1F496A77Bd2310685F1710";

export { contractAdr, contractABI, proxyAdr }