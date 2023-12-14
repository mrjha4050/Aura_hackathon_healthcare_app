import React from 'react'
import OvulationCalculator from './OvulationCalculator'
import {Navigate} from "react-router-dom"


export default function Photos() {
  const[goToOvo,setGoToOvo]=React.useState(false);

  if(goToOvo){
    return <Navigate to="/OvulationCalculator" />
  }
  return (
    <>
    <div className="grid grid-cols-3 mt-10 ml-20 gap-y-10   justify-evenly mb-4 ">

     <div>
    <img src="./images/mensu.png" className="w-60 border-2 border-black rounded-full ml-6 " alt="img1"></img>
    </div>

    <div>
        <img src="./images/bmi.png" className="w-60  border-2 border-black  rounded-full ml-6" alt='img2'></img>
        </div>

        <div>
        <img src="./images/meal.png" className="w-60  border-2 border-black  rounded-full ml-6s" alt='img3'></img>
        </div>
        
        
    </div>
    </>
  )
}
