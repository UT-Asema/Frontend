import React from "react";
import { Link } from 'react-router-dom';
import "./Bottom.css";


const Bottom = () => {
  const ExploreButton = ({name, pageLink}) => {
    return (
      <div className="trimite">
        <Link to={pageLink}>{name}</Link>
      </div>
    );
  };
  return (
    <div>
      <head>
        <title>Bottom Part of Homepage</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css" integrity="sha512-MV7K8+y+gLIBoVD59lQIYicR65iaqukzvf/nwasF0nqhPay5w/9lJmVM2hMDcnK1OnMGCdVK+iQrJ7lzPJQd1w==" crossorigin="anonymous" referrerpolicy="no-referrer" />
      </head>
      <body>
        <div>
          <div class=" m-3 p-6 shadow-lg rounded-md bg-white text-center object-contain h-56 w-1/2 fixed top-20 left-0 right-0">
            <h2 className="font-semibold">Never in the dark about bright ideas</h2>
            <p>

This software builds up on our own experience as both educators and long-time learners.
Using a flexible roadmap system, you can make your plans reality.
Static systems are a thing of the past - so we bring on the <em className="font-semibold">future</em></p>
            <img src="src/Pages/Login/login_image.png" alt="login_image"/>
          </div>
          <div class="w-fit h-fit fixed ml-12 p-6 shadow-lg rounded-md bg-white text-center">
            <div><p>Finding the best learning path is hard,</p><p className="italic font-semibold"> that's why we do it for you;)</p></div>
            <hr className="p-6 opacity-0"></hr>
            <p>Here you can find the best knowledge roadmap,</p><p className="italic font-semibold relative"> with help from everyone else</p>
            <hr className="p-6 opacity-0"></hr>
            <p>By searching the subject and sorting by upvotes,</p><p className="italic font-semibold relative"> you finally get to studying</p>
            <hr className="p-6 opacity-0"></hr>
            <p>We know you already have some unique skills,</p><p className="italic font-semibold relative"> this is your chance to share!</p>
            <hr className="p-6 opacity-0"></hr>
            <h1 className="text-center font-semibold">Join our community!</h1>
            <div className="flex justify-center rounded-xl relative left-1/4 borde-2 border-indigo-700 bg-[#ba45b4] font-semibold py-1 w-6/12 p-3 hover:scale-110 duration-300">
              <ExploreButton name={'Explore'} pageLink={'explore'}/>
            </div>
          </div>
        </div>
      </body>
    </div>
  );
};

export default Bottom;
