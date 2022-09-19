import React from 'react'
import { useState } from 'react'

const TextForm = (props) => {
    const [text,setText]=useState("Enter text here")

    const handleUpClick=()=>{
        let newText=text.toUpperCase()
        setText(newText)
        props.showAlert("Converted to UpperCase!","success")

    }
    const handleLoClick=()=>{
        let newText=text.toLowerCase()
        setText(newText)
        props.showAlert("Converted to LowerCase!","success")
    }
    const handleClear=()=>{
        let newText=''
        setText(newText)
        props.showAlert("Text Cleared","success")
    }
    const handleCopy=()=>{
        let text=document.getElementById("myBox")
        text.select()
        navigator.clipboard.writeText(text.value)
        props.showAlert("Copy to Clipboard!","success")
    }

    const handleOnChange=(e)=>{
        setText(e.target.value)
    }
    const handleExtraSpaces=()=>{
        let newText= text.split(/[ ]+/);
        setText(newText.join(" "))
       props.showAlert("Extra spaces Removed","success") 
    }

  return (
    <>
        <div className='container' style={{color:props.mode === 'dark'? 'white' : 'black' }}>
            <h2>{props.heading}</h2>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode === 'dark'? '#042743' : 'white' ,color:props.mode === 'dark'? 'white' : 'black' }} id="myBox" rows="8"></textarea>
            </div>
            <button className='btn btn-primary' onClick={handleUpClick}>Convert to Uppercase</button>
            <button className='btn btn-primary mx-1 my-1' onClick={handleLoClick} >Convert to Lowercase</button>
            <button className='btn btn-primary mx-1 my-1' onClick={handleClear} >Clear</button>
            <button className='btn btn-primary mx-1 my-1' onClick={handleCopy} >Copy Text</button>
            <button className='btn btn-primary mx-1 my-1' onClick={handleExtraSpaces} >Remove Extra Spaces</button>
        </div>
        <div  className='container'  style={{color:props.mode === 'dark'? 'white' : 'black' }}>
            <h4>Your text summary</h4>
            <p>{text.split(/\s+/).filter((el)=>{return el.length!==0}).length} words and {text.length} characters</p>
            <p>{0.008 * text.split(" ").length} Minutes read</p>
            <h4>Preview</h4>
            <p>{text.length>0 ? text:"Enter something in the textbox to preview it here"}</p>
        </div>
    </>
  )
}

export default TextForm