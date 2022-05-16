import React from 'react'

export default function Circle({ imgurl, width="50px", height="50px",border=true, borderColor="red" }) {
    return (
        <div>
            <img style={{ objectFit:'cover', width: width, height: height, border: border ? `1px solid ${borderColor}` : "", borderRadius:"50%" , margin: "2px 6px" , padding: "2px"}} src={imgurl}></img>            
        </div>
    )
}
