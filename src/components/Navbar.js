import React from 'react'
import { Link } from 'react-router-dom'



export default function () {
  return (
    <>
    <div>
    <nav>
        <div className=" flex bg-[#88AB8E] h-20 ">
            <h3  className="  text-4xl mt-5 font-bold justify-left sm:justify-left text-white ml-6">Harmony Heaven</h3>
        
      
        <ul className="flex flex-auto  mt-6 text-[20px] font-semibold ml-96 text-white justify-evenly">

        <Link to='/home' >
        <li className=" hover:text-white ">
          Home
          </li>
          </Link>

        <Link to='/Ovulation Calculator' >
        <li className=" hover:text-white ">
          Ovulation Calculator
          </li>
          </Link>
        
          <Link to='/BMI Calculator' >
        <li className=" hover:text-white ">
          Bmi Calculator
          </li>
          </Link>

          <Link to='/Meal Suggestions' >
        <li className=" hover:text-white ">
        Meal Suggestions
          </li>
          </Link>

       

        
        
        </ul>
        </div>
        </nav>
        </div>
        </>
  )
}
