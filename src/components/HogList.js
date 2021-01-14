import React from "react";
import Hog from "./Hog.js"

function HogList({hogs}){

    const hogItems = hogs.map((hog) =>{
        return (
        <Hog 
            key={hog.name}
            name={hog.name}
        />
        )
    })

    return(
        <div className="ui grid container">
            {hogItems}
        </div>
        
    )

}

export default HogList