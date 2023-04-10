import React from 'react'

function ColorBox({ color }) {
    return (
        <>
            <span className="colorbox rowfadein" style={{backgroundColor: color}}></span>
        </>
    )
}

export default ColorBox
