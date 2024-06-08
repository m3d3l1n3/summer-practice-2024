import React from "react";
import Image from "next/image";
import Link from "next/link"
import ReactStars from "react-stars"
interface propsType
{
    imgURL: string,
    movieURL: string,
    message: string,
    extra: string;
    rating: string;
}

export default function Reco(props:propsType){
    return(
        <div className="border-solid border-2 w-1/5 h-1/5" >    
            <img className="align-middle" src={props.imgURL} alt ="Cover" width={500} height={500}/>
            <p>{props.message}</p>
            <Link href={props.movieURL}></Link>
            <p>{props.extra}</p>
            <p className="font-italic"> Rating: {props.rating}/10</p>
           {/*} <ReactStars 
            count={5} 
            size={24} 
            color2={'#ffd700'} /> */}
        </div>

        
)
}
