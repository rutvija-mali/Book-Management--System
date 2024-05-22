import "./App.css"
import Navbar from "./components/navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import Categories from "../src/Pages/Categories/Categories"
import Suppliers from "../src/Pages/supplier/Suppliers"
import Home from "./Pages/home/Home";


function App() {
  

 

  return (
    <div className="main-container">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/categories" element={<Categories/>}/>
        <Route path="/suppliers" element={<Suppliers/>}/>
      </Routes>

      
    </div>
  )
}

export default App;
