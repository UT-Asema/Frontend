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
    <div className="overflow-auto grid items-center mb-12">
      <div className="hideel grid items-center min-h-screen text-center text-2xl overflow-auto">
        <section className="hidel m-0 bg-[#ba45b4]">
          <Top />
        </section>
        <section className="hidel m-0">
          <Middle />
        </section>
        <section className="hidel m-0 bg-[#ba45b4]">
          <Bottom />
        </section>
      </div>
    </div>
  );
};

export default Homepage;
