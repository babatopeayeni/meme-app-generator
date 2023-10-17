import "./index.css"
import React from "react"
import memesData from "./memesData.js"

export default function Meme(){

  const [memeImage, setMemeImage] = React.useState(" ")

  function getMemeImage(){
    const memesArray = memesData.data.memes
    const randomNumber = Math.floor(Math.random() * memesArray.length)
    setMemeImage( memesArray[randomNumber].url )// created a url object with ".url" specifically selecting data from "url"

  }


  return(
  <main>
    <div className="form" >
     <div className="textbox-bar">
        <div className="textboxes">
            <div>
              <input className="textbox1" type="text" placeholder="Top text"></input>
            </div>
            <div>
              <input className="textbox2" type="text" placeholder="Bottom text"></input>
            </div>
        </div>
     </div>
            <button className="middle-bar-button" onClick={getMemeImage}>Get a new meme image 🖼</button>
     </div>
     <img src={memeImage}  className="meme-image" />
  </main>
  )
}