import React, {useState} from 'react'
 
export default function TextForm(props) {
    const handleUpperClick = ()=>{
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to UpperCase.", "success")
    }
    const handleLowerClick = ()=>{
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to LowerCase.", "success")
    }
    const handleClearText = ()=>{
        let newText = '';
        setText(newText);
        props.showAlert("Text Cleared.", "success")
    }
    const handleExtraSpaces = ()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Extra Spaces Removed.", "success")
    }
    const handleCopy = ()=>{
        navigator.clipboard.writeText(text);
        props.showAlert("Text Copied to Clipboard.", "success")
    }
    const handleOnChange = (event)=>{
        setText(event.target.value);
    }
    const [text, setText] = useState('');
    return (
        <>
        <div className='container' style = {{color: props.mode === 'light'?'#042743':'white'}}> 
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea 
                    className= "form-control" 
                    value = {text}
                    onChange= {handleOnChange} 
                    style= {{backgroundColor: props.mode === 'dark'?'#13466e':'white', color: props.mode === 'light'?'#042743':'white'}}
                    id= "myText" 
                    rows= "5">
                </textarea>
            </div>
            <button disabled = {text.length===0} className="btn btn-primary mx-1 my-1" onClick= {handleUpperClick}>Convert to Uppercase</button>
            <button disabled = {text.length===0} className="btn btn-primary mx-1 my-1" onClick= {handleLowerClick}>Convert to Lowercase</button>
            <button disabled = {text.length===0} className="btn btn-primary mx-1 my-1" onClick= {handleClearText}>Clear Text</button>
            <button disabled = {text.length===0} className="btn btn-primary mx-1 my-1" onClick= {handleCopy}>Copy Text</button> 
            <button disabled = {text.length===0} className="btn btn-primary mx-1 my-1" onClick= {handleExtraSpaces}>Remove Extra Spaces</button>
        </div>
        <div className="container my-3" style = {{color: props.mode === 'light'?'#042743':'white'}}>
            <h2>Your Text Summary</h2>
            <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} Words and {text.length} Characters</p>
            <p>You can read this text in {0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Enter Text to Preview here"}</p>
        </div>
        </>    
    )
}
