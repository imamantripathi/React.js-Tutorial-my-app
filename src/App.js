// import "./App.css";
import React, { useState } from "react";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";
import Alert from "./components/Alert";
import {
  BrowserRouter as Router,
  Routes,
  Switch ,
  Route,
   Link
} from "react-router-dom";

function App() {
  const [mode, setmode] = useState("light");
  const [darkMode, setdarkMode] = useState("Enable Dark Mode");
  const [alert, setalert] = useState(null);
  const [successMode, setsuccessMode] = useState("primary");
  const setAlert = (message, type) => {
    setalert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setalert(null);
    }, 1500);
  };
  const toggleMode = () => {
    if (mode === "light") {
      setmode("dark");
      // setsuccessMode('primary');
      setdarkMode("Enable Light Mode");
      document.body.style.backgroundColor = "black";
      setAlert("Dark mode has been Enable", "success");
      // document.title = "TextUtils - Dark Mode";

      // setInterval(() => {
      //   document.title= 'TextUtils is Amazing 🔥🔥'
      // }, 2000);
      // setInterval(() => {
      //   document.title= 'Install Now !!🔥🔥'
      // }, 1500);
    } else {
      setmode("light");
      setdarkMode("Enable Dark Mode");
      // setsuccessMode('light');
      document.body.style.backgroundColor = "white";
      setAlert("Light mode has been Enable", "success");
      // document.title = "TextUtils - Light Mode";
    }
  };
  const toggleSuccess = () => {
    if (mode === "light") {
      setmode("dark");
      setdarkMode("Enable Light Mode");
      setsuccessMode("light");
      document.body.style.backgroundColor = "green";
      // document.title = "TextUtils - Dark Mode";
      setAlert("Nature mode has been Enable !", "success");
    } else {
      setmode("light");
      setsuccessMode("primary");
      setdarkMode("Enable Dark Mode");
      document.body.style.backgroundColor = "white";
      setAlert("Light mode has been Enable", "success");
      // document.title = "TextUtils - Light Mode";
    }
  };
  const toggleWarning = () => {
    if (mode === "light") {
      setmode("warning");
      setdarkMode("Enable Light Mode");
      setsuccessMode("dark");
      document.body.style.backgroundColor = "#F6BE00";
      // document.title = "TextUtils - Dark Mode";
      setAlert("Happy mode has been Enable !", "success");
    } else {
      setmode("light");
      setsuccessMode("primary");
      setdarkMode("Enable Dark Mode");
      document.body.style.backgroundColor = "white";
      setAlert("Light mode has been Enable", "success");
      // document.title = "TextUtils - Light Mode";
    }
  };
  const toggleSecondary = () => {
    if (mode === "light") {
      setmode("dark");
      setdarkMode("Enable Light Mode");
      setsuccessMode("dark");
      document.body.style.backgroundColor = "#414a4c";
      // document.title = "TextUtils - Dark Mode";
      setAlert("Light Dark mode has been Enable !", "success");
    } else {
      setmode("light");
      setsuccessMode("primary");
      setdarkMode("Enable Dark Mode");
      document.body.style.backgroundColor = "white";
      setAlert("Light mode has been Enable", "success");
      // document.title = "TextUtils - Light Mode";
    }
  };
  const toggleDanger = () => {
    if (mode === "light") {
      setmode("dark");
      setdarkMode("Enable Light Mode");
      setsuccessMode("danger");
      document.body.style.backgroundColor = "#8b0000";
      document.title = "TextUtils - Dark Mode";
      setAlert("Danger mode has been Enable !", "success");
    } else {
      setmode("light");
      setsuccessMode("primary");
      setdarkMode("Enable Dark Mode");
      document.body.style.backgroundColor = "white";
      setAlert("Light mode has been Enable", "success");
      document.title = "TextUtils - Light Mode";
    }
  };
  return (
    <>
      <Router>
        <Navbar
          title="TextUtils"
          home="Home"
          about="About Us"
          mode={mode}
          toggleMode={toggleMode}
          toggleSuccess={toggleSuccess}
          toggleWarning={toggleWarning}
          toggleSecondary={toggleSecondary}
          toggleDanger={toggleDanger}
          darkMode={darkMode}
        />
        <Alert alert={alert} />
        <div className="container my-4">
          <Switch>
            <Route exact path="/about">
              <About  mode={mode} />
            </Route>

            <Route exact path="/">
              <TextForm
                setAlert={setAlert}
                successMode={successMode}
                mode={mode}
                h1="Try TextUtils - Word Counter, Character Counter, Remove extra spaces"
              />
            </Route>
          </Switch>
        </div>
      </Router>
  
    </>
  );
}

export default App;
