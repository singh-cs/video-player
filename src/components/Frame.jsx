import React from "react";

export default function Frame(props){
    return(
        <video
            loop 
            controls 
            autoPlay 
            src={props.source} 
            className="vid-frame" 
        />
    )
}