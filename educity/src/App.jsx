// import './App.css'

import Hero from "./Components/Hero/Hero";
import Navbar from "./Components/Navbar/Navbar";
import Program from "./Components/Programs/Program";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      {/* <div className="container">
        <Program />
      </div> */}
      <Program />
    </>
  );
}

export default App;
