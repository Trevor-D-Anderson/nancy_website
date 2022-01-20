import React, { useState, useEffect } from "react";

const About = (props) => {
  const { offset } = props;
  const [aboutFixed, setAboutFixed] = useState("");
  const [shadowOne, setShadowOne] = useState("");
  const [shadowTwo, setShadowTwo] = useState("");
  const [shadowThree, setShadowThree] = useState("");

  useEffect(() => {
    if (offset >= 885 && offset <= 2125) {
      setAboutFixed("fixed top-[160px]");
    } else if (offset < 885) {
      setAboutFixed("relative top-[625px]");
    } else {
      setAboutFixed("relative top-[1875px]");
    }
    if (offset >= 885 && offset <= 1297) {
      setShadowOne("shadow-[0_15px_25px_-10px_rgba(0,0,0,0.75)]");
      setShadowTwo("shadow-xl");
      setShadowThree("shadow-xl");
    } else if (offset > 1297 && offset <= 1709) {
      setShadowOne("shadow-xl");
      setShadowTwo("shadow-[0_15px_25px_-10px_rgba(0,0,0,0.75)]");
      setShadowThree("shadow-xl");
    } else if (offset > 1709 && offset <= 2125) {
      setShadowOne("shadow-xl");
      setShadowTwo("shadow-xl");
      setShadowThree("shadow-[0_15px_25px_-10px_rgba(0,0,0,0.75)]");
    }
  }, [offset]);

  return (
    <div
      className={`bg-slate-300 h-[85vh] w-screen ${aboutFixed} flex flex-row justify-around flex-wrap`}
    >
      <div
        className={`border-4 rounded-xl border-solid border-slate-100 mt-24 h-3/4 w-1/4 bg-slate-100 ${shadowOne}`}
      >
        <h2 className=" text-center text-4xl font-mono mt-4">What We Do</h2>
        <ul>
          <li className=" text-2xl pl-8 pr-8 pt-8">
            &#10003; Bookkeeping: Data Entry,{" "}
            <span className="pl-6">Reconciliations, Accounts </span>
            <span className="pl-6">Receivable, Accounts Payable</span>
          </li>
          <li className=" text-2xl pl-8 pr-8 pt-8">
            &#10003; Payroll & Payroll Taxes
          </li>
          <li className=" text-2xl pl-8 pr-8 pt-8">
            &#10003; State and Local Excise Tax{" "}
            <span className="pl-6">Reporting</span>
          </li>
          <li className=" text-2xl pl-8 pr-8 pt-8">
            &#10003; QuickBooks Certified ProAdvisor
          </li>
        </ul>
      </div>
      <div
        className={`border-4 rounded-xl border-solid border-slate-100 mt-24 h-3/4 w-1/4 bg-slate-100 ${shadowTwo}`}
      >
        <h2 className=" text-center text-4xl font-mono mt-4">
          About the Owner
        </h2>
        <div className=" float-left flex flex-col">
          <img
            className="object-cover w-[165px] h-[165px] rounded-full ml-4 mt-4 float-left mr-4"
            src={require("../images/nancy.jpg")}
            alt="Profile Pic"
          />
          <label className="ml-5 text-2xl font-bold">Nancy Morelli</label>
        </div>
        <p className="clear-right m-4 text-lg">
          Nancy holds a Bachelor of Science in Accounting from City University
          and a MBA from Keller School of Management and is a QuickBooks Pro
          Advisor.She has been in the administrative/accounting field for over
          20 years and loves helping people get their books in order so that
          they can understand them. She is part of the monthly QuickSource
          Meet-Up group with other accountant and bookkeepers which allows her
          to keep up on the current trends and technology in accounting.
        </p>
      </div>
      <div
        className={`border-4 rounded-xl border-solid border-slate-100 mt-24 h-3/4 w-1/4 bg-slate-100 ${shadowThree}`}
      >
        <h2 className=" text-center text-4xl font-mono mt-4">
          Services Offered
        </h2>
      </div>
    </div>
  );
};

export default About;
