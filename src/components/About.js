import React, { useState } from "react";

export default function About(props) {
  // const [myStyle, setMyStyle] = useState({
  // color: "black",
  // backgroundColor: "white",
  // });
  // const [btnText, setbtnText] = useState("Enable Dark Mode");
  // const toggleStyle = () => {
  //   if (myStyle.color === "black") {
  //     setMyStyle({
  //       color: "white",
  //       backgroundColor: "black",
  //       border: "1px solid white",
  //     });
  //     setbtnText("Enable Light Mode");
  //   } else {
  //     setMyStyle({
  //       color: "black",
  //       backgroundColor: "white",
  //     });
  //     setbtnText("Enable Dark Mode");
  //   }
  // };
  let myStyle ={
color: props.mode==='dark'?'white':'black',
backgroundColor: props.mode==='dark'?'black':'white'
,border: '1px solid ',
borderColor: props.mode === 'dark'?'white':'black'
  }
  return (
    <>
      <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
        <h1 className="my-3">About us</h1>
        <div
          className="accordion"
          id="accordionPanelsStayOpenExample"
          style={myStyle}
        >
          <div className="accordion-item" style={myStyle}>
            <h2 className="accordion-header" id="panelsStayOpen-headingOne">
              <button
                style={myStyle}
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#panelsStayOpen-collapseOne"
                aria-expanded="true"
                aria-controls="panelsStayOpen-collapseOne"
              >
               <strong> Analyze Your text
               </strong>          </button>
            </h2>
            <div
              style={myStyle}
              id="panelsStayOpen-collapseOne"
              className="accordion-collapse collapse show"
              aria-labelledby="panelsStayOpen-headingOne"
            >
              <div className="accordion-body" style={myStyle}>
                Textutils gives you away to analyze your text quickly and
                efficiently, be it word count, character count or
              </div>
            </div>
          </div>
          <div className="accordion-item" style={myStyle}>
            <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
              <button
                style={myStyle}
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#panelsStayOpen-collapseTwo"
                aria-expanded="false"
                aria-controls="panelsStayOpen-collapseTwo"
              >
                <strong>Free To Use</strong>
              </button>
            </h2>
            <div
              id="panelsStayOpen-collapseTwo"
              className="accordion-collapse collapse"
              aria-labelledby="panelsStayOpen-headingTwo"
              style={myStyle}
            >
              <div className="accordion-body" style={myStyle}>
                textUtils is a free character counter tool that provides instant
                character count & word count statistics for a given text.
                TextUtils reports the number of words and characters. thus it is
                suitable for writing text with words/ character limit.
              </div>
            </div>
          </div>
          <div className="accordion-item" style={myStyle}>
            <h2 className="accordion-header" id="panelsStayOpen-headingThree">
              <button
                style={myStyle}
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#panelsStayOpen-collapseThree"
                aria-expanded="false"
                aria-controls="panelsStayOpen-collapseThree"
              >
              <strong>  Browser Compatible</strong>
              </button>
            </h2>
            <div
              style={myStyle}
              id="panelsStayOpen-collapseThree"
              className="accordion-collapse collapse"
              aria-labelledby="panelsStayOpen-headingThree"
            >
              <div className="accordion-body" style={myStyle}>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit
                praesentium, sapiente debitis nesciunt quia voluptates aut rem
                ullam aspernatur neque in atque dolore doloribus, similique qui
                corrupti suscipit et deserunt?
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="container my-3">
        <button onClick={toggleStyle} className="btn btn-primary">
          {btnText}
        </button>
      </div> */}
    </>
  );
}
