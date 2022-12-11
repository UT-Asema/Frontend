import React, { useState } from 'react';
import "./Explore.css"

const Explore = () => {
  const chapters = useState('5')
  const rating1 = useState('18.3K')
  const rating2 = useState('2.4K')
  const rating3 = useState(984)
  const title1 = useState('Learn React')
  const title2 = useState('Learn JavaScript')
  const title3 = useState('Software Design')

  return (
    <div className="h-screen w-screen flex justify-center overflow-auto items-center">
      <head>
        <title>Middle part of the page</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css" integrity="sha512-MV7K8+y+gLIBoVD59lQIYicR65iaqukzvf/nwasF0nqhPay5w/9lJmVM2hMDcnK1OnMGCdVK+iQrJ7lzPJQd1w==" crossorigin="anonymous" referrerpolicy="no-referrer" />
      </head>
      <body>
        <div className="search-bar float-none rounded-xl">
          <input type="text" placeholder="Search for roadmaps" />
          <button className='rounded-xl m-1 p-3 hover:scale-110 duration-300'>Search</button>
          <button className='rounded-xl m-1 p-3 hover:scale-110 duration-300'>Filters</button>
        </div>
        <div className="flex top-1/2 mt-10">
              <div className="hideel w-96 h-fit p-6 shadow-lg rounded-xl text-3xl bg-[#1C142B] text-center float-left mr-5">
                <h1 className="text-[#9AE6B4] p-6 text-4xl"><i class="fa-brands fa-react text-[#9AE6B4]"></i>  {title1}</h1>
                <p className="text-left text-base text-[#E2E8F0] p-6">{chapters} chapters</p>
                <p className="text-left text-[#E2E8F0] p-6"><i class="fa-solid fa-chart-simple"></i> {rating1} upvotes</p>
                <button className='text-[#E2E8F0] float-left left-6 relative hover:scale-110 duration-300'><i class="fa-regular fa-heart"></i></button>

              </div>
              <div className="hideel w-96 h-fit p-6 shadow-lg rounded-xl bg-[#1C142B] text-3xl text-center float-none">
                <h1 className="text-[#F7DF1C] mb-6 mt-6 text-4xl"><i class="fa-brands fa-square-js"></i>  {title2}</h1>
                <p className="text-left text-base text-[#E2E8F0] p-6">{chapters} chapters</p>
                <p className="text-left text-[#E2E8F0] p-6"><i class="fa-solid fa-chart-simple"></i> {rating2} upvotes</p>
                <button className='text-[#E2E8F0] float-left left-6 relative hover:scale-110 duration-300'><i class="fa-regular fa-heart"></i></button>



              </div>
              <div className="hideel w-96 p-6 h-fit shadow-lg rounded-xl bg-[#1C142B] text-3xl float-right ml-5">
                <h1 className="text-[#FEB2B2] p-6 text-4xl">{title3}</h1>
                <p className="text-left text-base p-6 text-[#E2E8F0]">{chapters} chapters</p>
                <p className="text-left text-[#E2E8F0] p-6" ><i class="fa-solid fa-chart-simple"></i> {rating3} upvotes</p>
                <button className='text-[#E2E8F0] float-left left-6 relative hover:scale-110 duration-300'><i class="fa-regular fa-heart"></i></button>



              </div>
          </div>
          <div className="flex top-1/2 mt-10">
              <div className="hideel w-96 h-fit p-6 shadow-lg rounded-xl text-3xl bg-[#1C142B] text-center float-left mr-5">
                <h1 className="text-[#9AE6B4] p-6 text-4xl"><i class="fa-brands fa-react text-[#9AE6B4]"></i>  {title1}</h1>
                <p className="text-left text-base text-[#E2E8F0] p-6">{chapters} chapters</p>
                <p className="text-left text-[#E2E8F0] p-6"><i class="fa-solid fa-chart-simple"></i> {rating1} upvotes</p>
                <button className='text-[#E2E8F0] float-left left-6 relative hover:scale-110 duration-300'><i class="fa-regular fa-heart"></i></button>



              </div>
              <div className="hideel w-96 h-fit p-6 shadow-lg rounded-xl bg-[#1C142B] text-3xl text-center float-none">
                <h1 className="text-[#F7DF1C] mb-6 mt-6 text-4xl"><i class="fa-brands fa-square-js"></i>  {title2}</h1>
                <p className="text-left text-base text-[#E2E8F0] p-6">{chapters} chapters</p>
                <p className="text-left text-[#E2E8F0] p-6"><i class="fa-solid fa-chart-simple"></i> {rating2} upvotes</p>
                <button className='text-[#E2E8F0] float-left left-6 relative hover:scale-110 duration-300'><i class="fa-regular fa-heart"></i></button>



              </div>
              <div className="hideel w-96 p-6 h-fit shadow-lg rounded-xl bg-[#1C142B] text-3xl float-right ml-5">
                <h1 className="text-[#FEB2B2] p-6 text-4xl">{title3}</h1>
                <p className="text-left text-base p-6 text-[#E2E8F0]">{chapters} chapters</p>
                <p className="text-left text-[#E2E8F0] p-6" ><i class="fa-solid fa-chart-simple"></i> {rating3} upvotes</p>
                <button className='text-[#E2E8F0] float-left left-6 relative hover:scale-110 duration-300'><i class="fa-regular fa-heart"></i></button>


              </div>
          </div>
      </body>
    </div>
  );
};

export default Explore;
