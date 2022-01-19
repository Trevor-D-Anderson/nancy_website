import React from "react";

const About = () => {
  return (
    <div className="bg-slate-300 h-screen w-screen relative top-[689px] flex flex-row justify-around">
      <div className="border-4 rounded-xl border-solid border-slate-100 mt-24 h-3/5 w-1/4 bg-slate-100 shadow-lg">
        <h2 className=" text-center text-5xl font-mono mt-4">About us</h2>
      </div>
      <div className="border-4 rounded-xl border-solid border-slate-100 mt-24 h-3/5 w-1/4 bg-slate-100 shadow-lg">
        <h2 className=" text-center text-5xl font-mono mt-4">
          About the Owner
        </h2>
      </div>
      <div className="border-4 rounded-xl border-solid border-slate-100 mt-24 h-3/5 w-1/4 bg-slate-100 shadow-lg">
        <h2 className=" text-center text-5xl font-mono mt-4">
          Services Offered
        </h2>
      </div>
    </div>
  );
};

export default About;
