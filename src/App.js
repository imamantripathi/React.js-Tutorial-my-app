// import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
function App() {
  return (
    <>
      <Navbar title="TextUtils" home="Home" about="About Us" />
      <div className="container my-4">
      <TextForm h1="Enter the Text to Analyze Below" />
      </div>
     
    </>
  );
}

export default App;
