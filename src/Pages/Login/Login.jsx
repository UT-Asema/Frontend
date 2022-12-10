import React from "react";

function Login() {


  return (
    <div>

      <head>
        <title>Animated Login Form</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css" integrity="sha512-MV7K8+y+gLIBoVD59lQIYicR65iaqukzvf/nwasF0nqhPay5w/9lJmVM2hMDcnK1OnMGCdVK+iQrJ7lzPJQd1w==" crossorigin="anonymous" referrerpolicy="no-referrer" />
      </head>

      <body>
        <div class="flex justify-center items-center h-screen bg-split-accent-white">
          <div class="object-contain h-56 w-1/2  fixed top-20 left-0 right-0"><img src="src/Pages/Login/login_image.png" alt="login_image"/></div>
          <div class="w-96 p-6 shadow-lg rounded-md bg-white right-28 absolute">
            <h1 class="text-3xl block text-center font-semibold"> <i class="fa-solid fa-right-to-bracket"></i> Login</h1>
            <div class='mt-3'>
              <label for="Email" class="block text-base mb-2">Email</label>
              <input type="email" id='email' class="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0" placeholder="Enter Your Email"/>
            </div>
            <div class='mt-3'>
              <label for="password" class="block text-base mb-2">Password</label>
              <input type="password" id='password' class="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0" placeholder="Enter Your Password"/>
            </div>
            <div class="mt-3 flex justify-between items-center">
              <div>
                <input type="checkbox"></input>
                <label> Remember Me</label>
              </div>
              <div>
                {/* Aici vin ancora de la forgot password */}
                <a href="#">Forgot Password?</a>
              </div>
            </div>
            <div class="mt-5">
              <button type="submit" class="borde-2 py-1 w-full rounded-md hover:text-white border-[#ba45b4] bg-[#ba45b4] font-semibold">Login</button>
            </div>
          </div>
        </div>
      </body>

    </div>
  );
};

export default Login;
