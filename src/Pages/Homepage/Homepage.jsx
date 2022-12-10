import React, { useEffect } from "react";

import Top from "./Parts/Top";
import Bottom from "./Parts/Bottom";
import Middle from "./Parts/Middle";
import "./Homepage.css"

function Homepage () {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      console.log(entry);
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
      }
      else {
        entry.target.classList.remove('show');
      }
    })
  })
  useEffect(() => {
    const hiddenElenents = document.querySelectorAll('.hidel');
    hiddenElenents.forEach((el) => observer.observe(el));
  }, [])

  return (
    <div className="items-center justify-center">
      <div className="hideel grid items-center text-center text-2xl">
        <section className="hidel bg-gradient-to-b from-[#ba45b4] to-white">
          <Top />
        </section>
        <section className="hidel mt-10">
          <Middle />
        </section>
        <section className="hidel h-screen w-screen bg-gradient-to-b from-white to-[#ba45b4]">
          <Bottom />
        </section>
      </div>
    </div>
  );
};

export default Homepage;
