import React from 'react'

function TokenSVG({ data, tid, shape, thumbnail }) {

    const svg = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink= "http://www.w3.org/1999/xlink" viewBox="0 0 1000 1000">${data.replace(/&lt;/g,"<").replace(/&gt;/g,">")}</svg>`

    return (
        <>
        {
            !thumbnail &&
            <h5>Token #{tid} ({shape})</h5>
        }
            <br />
            <img className="tokenimg" src={'data:image/svg+xml;base64,'+window.btoa(unescape(encodeURIComponent( svg )))} alt="token"  />
        {
            thumbnail &&
            <p>Token #{tid} ({shape})</p>
        }
        </>
    )
}

export default TokenSVG
