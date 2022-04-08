import React, { useState } from "react";

export default function TextForm(props) {
  let [text, setText] = useState(" ");

  const handleUpperCase = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };
  const handleLowerCase = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };

  const handleToErase = () => {
    let newText = " ";
    setText(newText);
  };
  const handleToRemoveSpace = () => {
    let newText = text.trim();
    setText(newText);
  };

  //   To Capitalize First Letter Of Word

  const handleToCapitalized = () => {
    let newText = "";
    for (let i = 0; i < text.split(" ").length; i++) {
      let words = text.split(" ");
      newText =
        newText +
        words[i].charAt(0).toUpperCase() +
        words[i].substring(1) +
        " ";
    }
    console.log(newText);
    setText(newText);
  };
  // handleToCapitalize end here...

  let handleOnChange = (event) => {
    setText(event.target.value);
  };
  let handleToCopy = () => {
    navigator.clipboard.writeText(text);
    alert("Copied 👍");
  };

  return (
    <>

      <div className="Container">
        <div className="form-group">
          <h1 className="my-4">{props.h1}</h1>
          <textarea
            placeholder="Enter Your Text Here !!"
            className="form-control "
            id="myBox"
            value={text}
            onChange={handleOnChange}
            rows="8"
          ></textarea>
        </div>
        <button className="btn btn-primary my-2 mx-2" onClick={handleUpperCase}>
          Convert to UpperCase
        </button>
        <button className="btn btn-primary my-2 mx-2" onClick={handleLowerCase}>
          Convert to LowerCase
        </button>
        <button className="btn btn-primary my-2 mx-2" onClick={handleToErase}>
          Erase this Text
        </button>
        <button
          className="btn btn-primary my-2 mx-2"
          onClick={handleToCapitalized}
        >
          Convert to Capitalized
        </button>
        <button className="btn btn-primary my-2 mx-2" onClick={handleToCopy}>
          Click to Copy 📋
        </button>
        <button className="btn btn-primary my-2 mx-2" onClick={handleToRemoveSpace}>
          Remove Extra Space 
        </button>
      </div>
      <div className="container my-3">
        <h2>Your Text Summary</h2>
        <p>
          {text.split(" ").length} Words And {text.length} Characters
        </p>
        <p>{0.008 * text.split(" ").length} Minutes to read</p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  );
}
