import React, { useState, useEffect } from "react";
import "./Middle.css"

function Middle () {
  const chapters = useState('5')
  const rating = useState(256)
  const title1 = useState('This is an example roadmap')
  const title2 = useState('This is an example roadmap 2')
  const title3 = useState('This is an example roadmap 3')

  return (
    <div>
      <head>
        <title>Middle part of the page</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css" integrity="sha512-MV7K8+y+gLIBoVD59lQIYicR65iaqukzvf/nwasF0nqhPay5w/9lJmVM2hMDcnK1OnMGCdVK+iQrJ7lzPJQd1w==" crossorigin="anonymous" referrerpolicy="no-referrer" />
      </head>
      <body>
        <div className="overflow-auto">
        <h2 className="text-2xl font-semibol font-serif flex justify-start bg-gray-500 rounded-xl p-3 w-fit text-center">Endorsed</h2>
        <div className="flex mt-10">
          <div className="hideel w-fit h-fit p-6 shadow-lg rounded-xl bg-gray-500 text-center float-left mr-5">
            <h1>{title1}</h1>
            <p className="text-left text-sm">{chapters} chapters</p>
            <p className="text-left"><i class="fa-solid fa-chart-simple"></i> {rating} upvotes</p>
          </div>
          <div className="hideel w-fit h-fit p-6 shadow-lg rounded-xl bg-gray-500 text-center float-none">
            <h1>{title2}</h1>
            <p className="text-left text-sm">{chapters} chapters</p>
            <p className="text-left"><i class="fa-solid fa-chart-simple"></i> {rating} upvotes</p>
          </div>
          <div className="hideel w-fit p-6 h-fit shadow-lg rounded-xl bg-gray-500 float-right ml-5">
            <h1>{title3}</h1>
            <p className="text-left text-sm">{chapters} chapters</p>
            <p className="text-left" ><i class="fa-solid fa-chart-simple"></i> {rating} upvotes</p>
          </div>
        </div>
      </div>
      </body>
      <p>This is a test</p>
    </div>
  );
};

export default Middle;
