import React from "react";
import "./Top.css";

const Top = () => {
  return (
    <div>
      <body className="">
        <div class="flex justify-center items-center h-screen bg-[#ba45b4]">
          <h1 class="text-3xl fixed top-16 left-0 right-96 font-semibold m-10"> <i class="fa-solid fa-right-to-bracket"></i>    EXPLORE NEW LEARNING PATHS AND DESIGN YOUR OWN</h1>
          <h3 class="text-2xl fixed top-48 left-0 right-96 font-semibold"> <i class="fa-solid fa-right-to-bracket"></i>    Master new subjects and bring your own skills to the table</h3>
          <div class="object-contain h-64 w-3/5  fixed top-24 left-96 right-0 m-10"><img src="src/Pages/Homepage/Parts/Assets/home_page_ilustration.png" alt="login_image"/></div>
        </div>
      </body>
    </div>
  );
};

export default Top;
