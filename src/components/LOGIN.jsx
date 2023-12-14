// import React from 'react'
// import { FaFacebookF } from "react-icons/fa";
// import { FaXTwitter } from "react-icons/fa6";
// import { FcGoogle } from "react-icons/fc";
// import { auth } from "../../firebase";
// function Login() {
//     const navigate = useNavigate();
//     const [values, setValues] = useState({
//       email: "",
//       pass: "",
//     });
//     const [errorMsg, setErrorMsg] = useState("");
//     const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);
  
//     const handleSubmission = () => {
//       if (!values.email || !values.pass) {
//         setErrorMsg("Fill all fields");
//         return;
//       }
//       setErrorMsg("");
  
//       setSubmitButtonDisabled(true);
//       signInWithEmailAndPassword(auth, values.email, values.pass)
//         .then(async (res) => {
//           setSubmitButtonDisabled(false);
          
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
//        <img className="w-[500px] h-[500px] mt- ml-20 object-cover" src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg" alt="" />
//        </div>

//        <div className=" flex flex-col justify-center">
//         <form action="" className="max-w-[400px] w-full mx-auto   rounded-lg ">
//             <div>
           
//             <input className="rounded w-96 h-12 mb-10 bg-slate-100 text-black" placeholder="Email" type="email" />
//             </div>
//             <div>
            
//             <input className="rounded w-96 h-12 mb-10 bg-slate-100 text-black" placeholder="Password" type="password" />
//             </div>
//             <div className="flex justify-between text-gray-600 py-2" type="checkbox">
//             <p> <input type="checkbox" /> Remember Me</p>
//             <a href="#"><p>Forgot password</p></a>
//             </div>
//             <button className="w-96 my-5 py-2 bg-blue-600 shadow-lg   text-white">Login</button>

//             <div className="divider d-flex align-items-center my-4">
//             <p className="text-center fw-bold mx-3 mb-0">OR</p>
//           </div>
//           <button className="w-96 mb-2 py-2 bg-white shadow-lg border-[2px] border-black text-black"><FcGoogle className="ml-[100px]" /><p className="mt-[-20px]">Login with Google</p></button>
//           <button className="w-96 mb-2 py-2 bg-blue-600 shadow-lg  border-[2px] border-black text-white"><FaFacebookF className="ml-[70px]" /><p className="mt-[-20px]">Login with facebook</p></button>
//           <button className="w-96 mb-2 py-2 bg-black shadow-lg  border-[2px] border-black text-white"><FaXTwitter className="ml-[120px]" /><p className="mt-[-20px]">Login with X</p></button>

//         </form>
//        </div>
//     </div>
//   )
// }

// export default Login;
