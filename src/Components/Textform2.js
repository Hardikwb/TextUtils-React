// rfcp
// rfc is shortcut
// shift+tab to adjust the document to left by select the given text
import React, { useState } from 'react'
import PropTypes from 'prop-types' // impt

export default function Textform_02(props) {
  const [text, setText] = useState("Enter your Text Here");
  //// text="new text" // Wrong Way 
  //// setText("new text") // Correct Way

  const handleUpClick = () => {
    // console.log("Upper Case was CLicked"+text);
    let upcase = text.toUpperCase();
    setText(upcase)
    // props.showAlert("Converted to Uppercase!!! ", "success")
  }


  // To enable type in setText->>
  const handleONChange = (event) => {
    setText(event.target.value)
    // ek particular moment par koi word type toh text ko jo phle se hai + jo enter uske barabar kar do
  }


  const handlelowClick = () => {
    console.log("Lower Case was CLicked" + text);
    let lowcase = text.toLowerCase();
    // setText("You have clicked on handleUpcCLick")
    setText(lowcase)
    // props.showAlert("Converted to Lowercase!!! ", "success")
  }


  const copytext = () => {
    navigator.clipboard.writeText(text)
      .then(() => {
        alert("Text copied!");
        setText("");
        // props.showAlert("Copied to Clipboard ", "success")
      })
      .catch((err) => {
        // props.showAlert("Copied to Clipboard ", "danger")
        console.error("Failed to copy text: ", err);
      });
  };


  function convertMinutes(rdtime) {
    const minutes = Math.floor(rdtime / 60);
    const seconds = Math.round(rdtime % 60);
    if (minutes === 0) {
      return `${seconds} sec`;

    }
    return `${minutes} min ${seconds} sec`;
  }

  return (
    <>
      <div className="container" style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>
        <h1 className='mb-4'>{props.heading}</h1>
        <div className="form-floating mb-3">
          <textarea className="form-control" value={text} onChange={handleONChange} id="floatingTextarea" rows="8"
        //                             fvnjfnv  💥💥💥💥💥💥💥💥💥💥💥💥💥💥
        style={{ backgroundColor: props.mode === 'dark' ? '#13466e' : 'white', color: props.mode === 'dark' ? 'white' : '#042743' }} ></textarea>
        </div>
        <button className="btn btn-primary mx-2 my-2" onClick={handleUpClick}>Convert to UpperCase</button>
        <button className="btn btn-primary mx-2 my-2" onClick={handlelowClick}>Convert to LowerCase</button>
        <button className="btn btn-primary mx-2 my-2" onClick={copytext}>Copy Text</button>
        <div className="container">
          <h1>Your's Text Summary</h1>

          <p style={{ color: props.mode == 'dark' ? 'white' : 'dark' }}>{text.split(" ").length} words and {text.length} characters and {convertMinutes(text.length)}  to read the text</p>
        </div>
      </div>

    </>

  )
}