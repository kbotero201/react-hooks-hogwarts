import React, {useState} from "react";
import HogDetails from "./HogDetails"

import augustus_gloop from "../assets/augustus_gloop.jpg";
import babe from "../assets/babe.jpg";
import bailey from "../assets/bailey.jpg";
import cherub from "../assets/cherub.jpg";
import galaxy_note from "../assets/galaxy_note.jpg";
import leggo_my_eggo from "../assets/leggo_my_eggo.jpg";
import peppa from "../assets/peppa.jpg";
import piggy_smalls from "../assets/piggy_smalls.jpg";
import piglet from "../assets/piglet.jpg";
import porkchop from "../assets/porkchop.jpg";
import trouble from "../assets/trouble.jpg";
import truffle_shuffle from "../assets/truffle_shuffle.jpg"; 

const imageMap = {
    augustus_gloop: augustus_gloop,
    babe: babe,
    bailey: bailey,
    cherub: cherub,
    galaxy_note: galaxy_note,
    leggo_my_eggo: leggo_my_eggo,
    peppa: peppa,
    piggy_smalls: piggy_smalls,
    piglet: piglet,
    porkchop: porkchop,
    trouble: trouble,
    truffle_shuffle: truffle_shuffle,
  }



function Hog({name, image, specialty, weight, highest}){

    const imageFileName = name.split(" ").join("_").toLowerCase()

    const hogImage = imageMap[imageFileName]

    const [isShowing, setIsShowing] = useState(false)

    function handleClick(){
        setIsShowing(isShowing => !isShowing)
        console.log("clicked")
    }



    return(
        <div onClick={handleClick} className="ui eight wide column">
            <div className="pigTile">
                <h1>{name}</h1>
                <div className="image">
                    <img src={hogImage} alt={name}></img>
                </div>
                {isShowing? <HogDetails specialty={specialty} weight={weight} highest={highest} /> : null}
            </div>
    
        </div>
    )

}

export default Hog