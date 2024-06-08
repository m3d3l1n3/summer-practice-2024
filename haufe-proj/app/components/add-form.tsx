'use client'
import React from "react";
import {useState} from 'react'
import Reco from "./recommandations";
export function AddForm() {
    const[coverURL, setCoverURL] = useState('');
    const[movieURL, setMovieURL] = useState('');
    const[messageText, setMessage] = useState('');
    const[extraText, setExtra] = useState('');
    const[ratingText, setRating] = useState('');

   {/* const SubmitButton(e) {
        e.preventDefault()
       // console.log("Submit")
    }*/}
    function loadNewRecommandation(){
        return <Reco message = {messageText}  imgURL = {coverURL} movieURL={movieURL} extra= {extraText} rating = {ratingText}></Reco>
    }
    const entry = async()=>{
      //  e.preventDefault()
       console.log("Submit")
        await fetch("http://127.0.0.1:8090/api/collections/movies/records",{
            method: 'POST',
            headers:{
                'Content-Type': 'application/json',
            },body: JSON.stringify({
                messageText,
                coverURL,
                movieURL,
                extraText,
                ratingText,

            }),
        });
        loadNewRecommandation();
        setRating('');
        setExtra('');
        setMovieURL('');
        setCoverURL('');
        setMessage('');
    }

    return (
    <form onSubmit={entry}><br/>
    <label htmlFor="coverURL">
        Please put the link to the cover:
    </label><br />
    <input id="coverURL" type= "text" value = {coverURL} onChange={(e)=>{setCoverURL(e.target.value)}} className="text-black"/><br/>
    <label htmlFor="movieURL">
        Please insert the link to the movie:
    </label> <br/>
    <input id="movieURL" className="text-black" type="text" value={movieURL} onChange={(e)=>{setMovieURL(e.target.value)}}/> <br/>
    <label htmlFor="message">Add a message:</label>
    <br/>
    <input className="text-black" type="text" id="message" value={messageText} onChange={(e)=>{setMessage(e.target.value)}}/> <br />
    <label htmlFor="rating"> Add rating:</label>
    <br />
    <input id="rating" className="text-black" type="text" value={ratingText} onChange={(e)=>{setRating(e.target.value)}}/><br/>
    
    <label htmlFor="extra"> Add any extra details:</label>
    <br />
    <input id="extra" className="text-black" type="text" value={extraText} onChange={(e)=>{setExtra(e.target.value)}}/><br/>
    <br/>
    <button type="submit" className="border-2 border-white"> Submit </button> <br/>
    </form>
    );
  }




  