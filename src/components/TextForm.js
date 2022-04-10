import React, { useState } from "react";

export default function TextForm(props) {
  
  let [text, setText] = useState("");

  const handleUpperCase = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.setAlert("Text converted in to uppercase", "success");
  };
  const handleLowerCase = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.setAlert("Text converted in to lowercase", "success");
  };

  const handleToErase = () => {
    let newText = "";
    setText(newText);
    props.setAlert("Text has been Erased", "success");
  };
  const handleToRemoveSpace = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.setAlert("Space has been removed ", "success");
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
    props.setAlert("Text converted in to Capitalized", "success");
  };
  // handleToCapitalize end here...

  let handleOnChange = (event) => {
    setText(event.target.value);
  };
  let handleToCopy = () => {
    navigator.clipboard.writeText(text);
    // alert("Copied 👍");
    // text.select();
    // text.setSelectionRange(0,9999);
    props.setAlert("Text has been Copied", "success");
  };

  return (
    <>
      <div
        className="Container "
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <div className="form-group">
          <h1 className="my-4">{props.h1}</h1>
          <textarea
            style={{
              backgroundColor: props.mode === "dark" ? "black" : "white",
              color: props.mode === "dark" ? "white" : "black",
            }}
            placeholder="Enter Your Text Here !!"
            className="form-control "
            id="myBox"
            value={text}
            onChange={handleOnChange}
            rows="8"
          ></textarea>
        </div>
        <button disabled={text.length===0} className={`btn btn-${props.successMode} my-2 mx-2`} onClick={handleUpperCase}>
          Convert to UpperCase
        </button>
        <button disabled={text.length===0} className={`btn btn-${props.successMode} my-2 mx-2`} onClick={handleLowerCase}>
          Convert to LowerCase
        </button>
        <button disabled={text.length===0} className={`btn btn-${props.successMode} my-2 mx-2`} onClick={handleToErase}>
          Erase this Text
        </button>
        <button
        disabled={text.length===0}
          className={`btn btn-${props.successMode} my-2 mx-2`}
          onClick={handleToCapitalized}
        >
          Convert to Capitalized
        </button>
        <button disabled={text.length===0} className={`btn btn-${props.successMode} my-2 mx-2`} onClick={handleToCopy}>
          Click to Copy 📋
        </button>
        <button
        disabled={text.length===0}
          className={`btn btn-${props.successMode} my-2 mx-2`}
          onClick={handleToRemoveSpace}
        >
          Remove Extra Space
        </button>
      </div>
      <div
        className="container my-3"
        style={{
          backgroundColor: props.mode === "dark" ? "black" : "white",
          color: props.mode === "dark" ? "white" : "black",
        }}
      >
        <h2>Your Text Summary</h2>
        <p>
          {text.split(/\s+/).filter((element)=>{return element.length!==0}).length} Words And {text.length} Characters
        </p>
        <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes to read</p>
        <h2>Preview</h2>
        <p>
          {text.length > 0
            ? text
            : "Nothing to Preview "}
        </p>
      </div>
    </>
  );
}
