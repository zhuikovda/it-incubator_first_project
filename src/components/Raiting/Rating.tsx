import React from "react";

type RatingPropsType = {
    val: number
}


export function Rating(props: RatingPropsType) {
    console.log("Rating rendering");
    if (props.val === 1) {
    return (
        <div>
            <Star sel = {true}/>
            <Star sel = {false}/>
            <Star sel = {false}/>
            <Star sel = {false}/>
            <Star sel = {false}/>
        </div>
    )}
    if (props.val === 2) {
    return (
        <div>
            <Star sel = {true}/>
            <Star sel = {true}/>
            <Star sel = {false}/>
            <Star sel = {false}/>
            <Star sel = {false}/>
        </div>
    )}
    if (props.val === 3) {
    return (
        <div>
            <Star sel = {true}/>
            <Star sel = {true}/>
            <Star sel = {true}/>
            <Star sel = {false}/>
            <Star sel = {false}/>
        </div>
    )}
    if (props.val === 4) {
    return (
        <div>
            <Star sel = {true}/>
            <Star sel = {true}/>
            <Star sel = {true}/>
            <Star sel = {true}/>
            <Star sel = {false}/>
        </div>
    )}
    if (props.val === 5) {
    return (
        <div>
            <Star sel = {true}/>
            <Star sel = {true}/>
            <Star sel = {true}/>
            <Star sel = {true}/>
            <Star sel = {true}/>
        </div>
    )}
    return (
        <div>
            <Star sel = {false}/>
            <Star sel = {false}/>
            <Star sel = {false}/>
            <Star sel = {false}/>
            <Star sel = {false}/>
        </div>
    )
}

type StarPropsType = {
    sel: boolean;
}

function Star(props: StarPropsType) {
    console.log("Star rendering")
    if (props.sel === true) {
        return <span><b>star</b> </span>;
    } else {
        return <span>star </span>;
    }

}