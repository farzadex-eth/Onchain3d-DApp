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
        max: 100,
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
        }}>
            {children}
        </TokenContext.Provider>
    )
}

export default TokenContext;