import React, { useState } from 'react';
// import './App.css'; // Import your CSS file for styling

const OvulationCalculator = () => {
  const [lastPeriodDate, setLastPeriodDate] = useState('');
  const [nextPeriod, setNextPeriod] = useState('');
  const [fertileWindow, setFertileWindow] = useState('');

  const calculateCycle = () => {
    const lastPeriod = new Date(lastPeriodDate);
    const nextPeriodDate = new Date(lastPeriod);
    nextPeriodDate.setDate(lastPeriod.getDate() + 28);

    const fertileStartDate = new Date(lastPeriod);
    fertileStartDate.setDate(lastPeriod.getDate() + 10);
    const fertileEndDate = new Date(fertileStartDate);
    fertileEndDate.setDate(fertileStartDate.getDate() + 5);

    setNextPeriod(formatDate(nextPeriodDate));
    setFertileWindow(`${formatDate(fertileStartDate)} to ${formatDate(fertileEndDate)}`);
  };

  const formatDate = (date) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString(undefined, options);
  };

  return (
   
    <div className="text-center bg-gradient-to-r from-gray-500 to-white h-screen pt-10  ">
        <div className="rounded border-2 border-white h-[600px] w-[580px] ml-[550px] bg-white ">
       
      <h1 className="text-6xl  text-pink-600 mb-10 font-[Merriweather]  ">Ovulation Calculator</h1>

      <label htmlFor="" className="text-2xl ">Enter the first day of your last menstrual period:</label>
      <div><input className="bg-pink-600 text-white border-2 border-black rounded px-2 py-2 mt-10"
        type="date"
        id="lastPeriodDate"
        value={lastPeriodDate}
        onChange={(e) => setLastPeriodDate(e.target.value)}
        required
      />
      </div>

      <button className=" text-white border-none px-2 py-2 text-[16px] rounded-2xl mt-[30px]  transition ease-in-out delay-150 bg-pink-600 hover:-translate-y-1 hover:scale-110 hover:bg-pink-900 duration-300" onClick={calculateCycle}>Calculate</button>

      <div className="mt-[30px]">
        <h2 className="text-3xl m-4">Results:</h2>
        <p className="mt-[30px]">
          <strong className="text-2xl">Next Period Start Date:</strong> <p className="text-pink-600 text-2xl">{nextPeriod}</p> 
        </p>
        <p className="mt-[30px]">
          <strong className=" text-2xl ">Fertile Window:</strong> <p className="text-pink-600 text-2xl"> {fertileWindow}</p>
        </p>
      </div>
      </div>
    </div>
   
  );
};

export default OvulationCalculator;