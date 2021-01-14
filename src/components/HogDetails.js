import React from "react";

function HogDetails({specialty, weight, greased, highest}){

    console.log("test:" + highest)

    return(
        <>
        <p> {specialty}</p>
        <p> {weight} </p>
        <p> {greased} </p>
        <p> Hightest medal acheived: {highest} </p>
        </>
    )
}

export default HogDetails 