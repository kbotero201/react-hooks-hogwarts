import React from "react";
import Hog from "./Hog.js"
import Filter from "./Filter"

function HogList({hogs}){

    const hogItems = hogs.map((hog) =>{
        return (
        <Hog 
            key={hog.name}
            name={hog.name}
            image={hog.image}
            specialty= {hog.specialty}
            weight= {hog.weight}
            highest= {hog["highest medal achieved"]}

        />
        )
    })

    return(
        <div className="ui grid container">
            <div>
            <Filter />
            </div>
            <div>
                {hogItems}
            </div>
        </div>
        
    )

}

export default HogList