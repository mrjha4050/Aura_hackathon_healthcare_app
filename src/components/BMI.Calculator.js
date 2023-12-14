import React, { useState } from 'react';


const BMICalculator = () => {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmi, setBMI] = useState(null);

  const calculateBMI = () => {
    if (weight && height) {
      const heightInMeters = height / 100;
      const bmiValue = (weight / (heightInMeters * heightInMeters)).toFixed(2);
      if(bmiValue>30)
      {
      setBMI("you are Obese 😔"+bmiValue);
      }
      else if(bmiValue>=25 && bmiValue<=30){
        setBMI("you are Overweight 🥴"+bmiValue)
      }

      else if(bmiValue>=18.5 && bmiValue<=25)
      {
        setBMI("you are Normal 😆"+bmiValue)
      }
      else {
        setBMI("you are Underweight 😔"+bmiValue)
      }
    }
  };

  return (
    <div className="text-center bg-gradient-to-r from-gray-500 to-white h-screen pt-10 ">
       <div className="rounded border-2 border-white h-[600px] w-[580px] ml-[550px] bg-white">
      <h1 className="text-[28px]  text-black mb-10  font-bold pt-8">BMI Calculator</h1>
      <div className="input-container">
        <label className="text-[25px] my-4  ">Weight (kg):</label><br/><br/>
        <input
         className=" rounded-md border-2 border-white h-10 bg-gray-300 text-black text-xl text-center"
          type="number"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
        /><br/><br/>
      </div>
      <div className="input-container">
        <label className="text-[25px] ">Height (cm):</label><br/><br/>
        <input
        className=" rounded-md border-2 border-white h-10 bg-gray-300 text-black text-xl text-center border-none "
          type="number"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
        />
      </div>
      <button onClick={calculateBMI} className="text-2xl mt-10 rounded-md border-2 border-white bg-blue-300 text-black w-[210px] h-[50px] hover:-translate-y-1 hover:scale-110 hover:bg-blue-300 duration-300">Calculate BMI</button>
      {bmi && (
        <div className="result-container mt-6">
          <h2 className="text-2xl">Your BMI:</h2>
          <p className="text-2xl">{bmi}</p>
        </div>
      )}
      </div>
    </div>
  );
};

export default BMICalculator;