
import React,{useState} from 'react'


export default function Todo() {

const[fname,setfname]=useState("")
const[lname,setlname]=useState("")
const[salary,setsalary]=useState("")

    const handleSubmit=(e)=>{
        e.preventDefault();
setfname("First Name is: "+e.target.fname.value)
setlname("Last Name is: "+e.target.lname.value)
setsalary("Your Salary is: "+e.target.salary.value)
    }
 
  return (
    <>
    <div >
        <form onSubmit={(e)=>handleSubmit(e)}>
            <label htmlFor="firstname"  > First Name:</label><br/>
            <input type='text' id="firstname" placeholder="First Name" name='fname' className="rounded-sm bottom-2" /><br/>

            <label htmlFor="lastname" > Last Name:</label><br/>
            <input type='text' id="lastname" placeholder="Last Name" name="lname"  /><br/>

            <label htmlFor="salary"> Enter Your Salary:</label><br/>
            <input type='text' id="salary" placeholder="Salary" name="salary"  /><br/>


            <button type='submit'>Submit</button>
        </form>

        <p>{fname}</p>
        <p>{lname}</p>
        <p>{salary}</p>

        
    </div>
    </>
  )
}
