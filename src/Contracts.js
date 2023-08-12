const contractAdr = '0xA78633C18d7dD1e15A9C0161BD262411BA131B49';
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

const proxyAdr = "0x51102701d1B362fF0fe4eb1Fe5837a87C2cdA7bB";

const proxyABI = [{ "inputs": [], "stateMutability": "nonpayable", "type": "constructor" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "owner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "approved", "type": "address" }, { "indexed": true, "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "Approval", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "owner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "operator", "type": "address" }, { "indexed": false, "internalType": "bool", "name": "approved", "type": "bool" }], "name": "ApprovalForAll", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "uint256", "name": "_tokenId", "type": "uint256" }], "name": "MetadataUpdate", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "previousOwner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "newOwner", "type": "address" }], "name": "OwnershipTransferred", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "from", "type": "address" }, { "indexed": true, "internalType": "address", "name": "to", "type": "address" }, { "indexed": true, "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "Transfer", "type": "event" }, { "inputs": [], "name": "_maxSupply", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "_price", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "_saleDuration", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "_startTime", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "approve", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "owner", "type": "address" }], "name": "balanceOf", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "getApproved", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "owner", "type": "address" }, { "internalType": "address", "name": "operator", "type": "address" }], "name": "isApprovedForAll", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "numberOfTokens", "type": "uint256" }], "name": "mintToken", "outputs": [], "stateMutability": "payable", "type": "function" }, { "inputs": [], "name": "name", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "owner", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "ownerOf", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "_tokenId", "type": "uint256" }], "name": "pokeMetadataUpdate", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "remainingTime", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "renounceOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "from", "type": "address" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "safeTransferFrom", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "from", "type": "address" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "tokenId", "type": "uint256" }, { "internalType": "bytes", "name": "data", "type": "bytes" }], "name": "safeTransferFrom", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "operator", "type": "address" }, { "internalType": "bool", "name": "approved", "type": "bool" }], "name": "setApprovalForAll", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "_renderer", "type": "address" }], "name": "setMetadataRenderer", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "bytes4", "name": "interfaceId", "type": "bytes4" }], "name": "supportsInterface", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "symbol", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "index", "type": "uint256" }], "name": "tokenByIndex", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "owner", "type": "address" }, { "internalType": "uint256", "name": "index", "type": "uint256" }], "name": "tokenOfOwnerByIndex", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "tokenURI", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "totalSupply", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "from", "type": "address" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "transferFrom", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "newOwner", "type": "address" }], "name": "transferOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "withdraw", "outputs": [], "stateMutability": "nonpayable", "type": "function" }];

export { contractAdr, contractABI, proxyAdr, proxyABI }