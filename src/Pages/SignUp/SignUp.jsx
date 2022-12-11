import React, { useState } from "react";
import $ from 'jquery';
import { register, login } from '../../api/requests.js'

function SignUp() {
  const [user, setUser] = useState('')
  const [email, setEmail] =  useState('')
  const [pass, setPass] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email); // trimitere in baza de date
    console.log(user);
    console.log(pass);

    // post request to backend
    // if success, login and redirect to homepage
    // if fail, display error message
    if (register(user, pass, email)) {
      console.log("registered");
      // redirect to homepage
      login(user, pass);
      window.location.href = "/";
    } else {
      console.log("not registered");
    }
  }

  return (
    <div>

      <head>
        <title>Animated SignUp Form</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css" integrity="sha512-MV7K8+y+gLIBoVD59lQIYicR65iaqukzvf/nwasF0nqhPay5w/9lJmVM2hMDcnK1OnMGCdVK+iQrJ7lzPJQd1w==" crossorigin="anonymous" referrerpolicy="no-referrer" />
      </head>

      <body>
        <div class="flex justify-center items-center h-screen rounded-xl">
          <div class="w-96 p-6 shadow-lg rounded-md bg-white text-center">
            <h1 class="text-2xl inline-block text-center font-semibold bg-[#ba45b4] w-9/12 p-3 rounded-xl"> <i class="fa-solid fa-user-plus"></i> Sign Up</h1>
            <div className="auth-form-container">
              <form onSubmit={handleSubmit} action="" className="flex flex-col">
                <div class='mt-3'>
                  <div class='mt-3'>
                    <label for="Username" class="block text-base mb-2">Username</label>
                    <input required value={user} onChange={(e) => setUser(e.target.value)} type="username" id='username' class="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0" placeholder="Enter Your Username..."/>
                  </div>
                    <label for="Email" class="block text-base mb-2">Email</label>
                    <input required value={email} onChange={(e) => setEmail(e.target.value)} type="email" id='email' class="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0" placeholder="Enter Your Email..."/>
                </div>
                <div class='mt-3'>
                  <label for="password" class="block text-base mb-2">Password</label>
                  <input required value={pass} onChange={(e) => setPass(e.target.value)} type="password" id='password' class="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0" placeholder="Enter Your Password..."/>
                </div>
                <div className="mt-5">
                  <button type="submit" className="borde-2 border-indigo-700 bg-[#D9D9D9] text-black py-1 w-6/12 p-3 hover:scale-110 duration-300">Sign Up</button>
                </div> 
                <div className="mt-5 grid grid-cols-3 items-center text-gray-500">
                  <hr className="border-[#D9D9D9]"></hr>
                  <p className="text-center">OR</p>
                  <hr className="border-[#D9D9D9]"></hr>
                </div>
                <button className="bg-white border py-2 w-full mt-5 flex justify-center items-center text-sm hover:scale-110 duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-google mr-3" viewBox="0 0 16 16">
                  <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z"/>
                  </svg>
                Continue With Google</button>
              </form>
            </div>
          </div>
        </div>
      </body>

    </div>
  ); 
};

export default SignUp;
