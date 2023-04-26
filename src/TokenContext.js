import { createContext, useState } from "react";

const TokenContext = createContext();

const settingProperties = [
    {
        title: "Observer Position",
        key: "observer",
        type: "number",
        unit: "",
        multiplier: 2**64,
        num: 3,
        names: ["X", "Y", "Z"],
        min: -99,
        max: 99,
    },
    {
        title: "Opacity",
        key: "opacity",
        type: "number",
        unit: "%",
        multiplier: 1,
        num: 1,
        min: 0,
        max: 99,
    },
    {
        title: "Rotating Mode",
        key: "rotating_mode",
        type: "toggle",
        toggleNames: ["ON", "OFF"],
    },
    {
        title: "Angular Speed",
        key: "angular_speed_deg",
        type: "number",
        multiplier: 1,
        unit: "deg / 15 minutes",
        num: 1,
        min: 0,
        max: 359,
    },
    {
        title: "View Mode: Distance",
        key: "dist_v_normalize",
        type: "toggle",
        toggleNames: ["Distance", "Normalized"],
    },
    {
        title: "View Mode: Faces",
        key: "face_or_wire",
        type: "toggle",
        toggleNames: ["Faces", "Wireframe"],
    },
    {
        title: "Wireframe Color",
        key: "wire_color",
        type: "color",
    },
    {
        title: "Background Color",
        key: "back_color",
        type: "color",
    },
    {
        title: "Face Colors",
        key: "color_list",
        type: "colorlist",
    },
];

const shapes = [
    { name: "Tetrahedron", faces: 4 },
    { name: "Cube", faces: 6 },
    { name: "Octahedron", faces: 8 },
    { name: "Dodecahedron", faces: 12 },
    { name: "Icosahedron", faces: 20 },
]

const defaultColors = [
    16761600,
    15158332,
    3447003,
    3066993,
    10181046,
    15844367,
    2600544,
    2719929,
    9323693,
    15965202,
    12597547,
    1752220,
    3426654,
    8359053,
    1482885,
    13849600,
    12436423,
    2899536,
    15787660,
    16101441
];


export function TokenProvider({ children }) {

    const [token, setToken] = useState({ tid: 0, svg: "", settings: [] });
    const [preview, setPreview] = useState({});

    return (
        <TokenContext.Provider value={{
            token: token,
            setToken: setToken,
            preview: preview,
            setPreview: setPreview,
            settingProperties: settingProperties,
            shapes: shapes,
            defaultColors: defaultColors,
        }}>
            {children}
        </TokenContext.Provider>
    )
}

export default TokenContext;