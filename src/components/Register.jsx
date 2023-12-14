// import React from 'react'
// import { auth } from "../../firebase";
// import { Link, useNavigate } from "react-router-dom";
// import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";

// function Signup() {
//     const navigate = useNavigate();
//     const [values, setValues] = useState({
//       name: "",
//       email: "",
//       pass: "",
//     });
//     const [errorMsg, setErrorMsg] = useState("");
//     const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);
  
//     const handleSubmission = () => {
//       if (!values.name || !values.email || !values.pass) {
//         setErrorMsg("Fill all fields");
//         return;
//       }
//       setErrorMsg("");
  
//       setSubmitButtonDisabled(true);
//       createUserWithEmailAndPassword(auth, values.email, values.pass)
//         .then(async (res) => {
//           setSubmitButtonDisabled(false);
//           const user = res.user;
//           await updateProfile(user, {
//             displayName: values.name,
//           });
//           navigate("/");
//         })
//         .catch((err) => {
//           setSubmitButtonDisabled(false);
//           setErrorMsg(err.message);
//         });
//     };
      
//   return (
//     <div className="grid grid-cols-1 sm:grid-cols-2 h-screen w-full">
//       <div className="hidden sm:block">
//        <img className="w-[500px] h-[500px] mt-20 ml-20 object-cover" src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg" alt="" />
//        </div>

//        <div className=" flex flex-col justify-center">
//         <form action="" className="max-w-[400px] w-full mx-auto   rounded-lg ">
//            <div>
//             <input className="rounded w-96 h-12 mb-10 bg-slate-100 text-black" placeholder="Name" required type="text" />
//             </div>
//             <div>
//             <input className="rounded w-96 h-12 mb-10 bg-slate-100 text-black" placeholder="Last Name" required type="text" />
//             </div>
//             <div>
//             <input className="rounded w-96 h-12 mb-10 bg-slate-100 text-black" placeholder="Email" required type="email" />
//             </div>
//             <div>
//              <input className="rounded w-96 h-12 mb-10 bg-slate-100 text-black" placeholder="Password" required type="password" />
//             </div>
//             <div>
//              <input className="rounded w-96 h-12 mb-10 bg-slate-100 text-black" placeholder="Confirm Password" required type="password" />
//             </div>
            
            
           
//             <button className="w-96 my-5 py-2 bg-blue-600 shadow-lg   text-white">Sign up</button>

//             <div className="divider d-flex align-items-center my-4">
         
//           </div>
          
//         </form>
//        </div>
//     </div>
//   )
// }
// export default Signup;