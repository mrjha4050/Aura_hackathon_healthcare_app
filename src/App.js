
 


import { BrowserRouter , Routes, Route } from "react-router-dom";






import "./App.css";
import OvulationCalculator from "./components/OvulationCalculator";
import BMICalculator from "./components/BMI.Calculator";
import MealSuggestions from "./components/MealSuggestions";
import Navbar from "./components/Navbar";
import Start from "./components/Start";
import Photos from "./components/Photos";
import Footer from "./components/Footer";

function App() {
  

  return (
    <div >
        <BrowserRouter>
        <Navbar/>
        <Routes>
            <Route path="/home" element={<Start/>}/>
          <Route path="/Ovulation Calculator" element={<OvulationCalculator/>}/>
          <Route path="/BMI Calculator" element={<BMICalculator/>}/>
          <Route path="/Meal Suggestions" element={<MealSuggestions/>}/>
        </Routes>
        <Photos/>
        <Footer/>
        </BrowserRouter>
    </div>
  );
}

export default App;