import React, { useEffect, useState } from "react";

const logo = require("../images/OverallOfficeSolutions_logo.png");
const f_logo = require("../images/social_logos/f_logo_RGB-White_100.png");
const t_logo = require("../images/social_logos/twitter.png");
const l_logo = require("../images/social_logos/linkedin.png");

// javascript: (function(){window.scroll({top:13050})}());

const NavBar = (props) => {
  const { offset } = props;
  const [change, setChange] = useState("bg-slate-500/50");

  useEffect(() => {
    if (offset >= 885 && offset < 2125) {
      setChange("bg-slate-400");
    } else if (offset >= 2125) {
      setChange("bg-slate-400 shadow-[0_25px_50px_-12px_rgb(0,0,0,0.35)]");
    } else {
      setChange("bg-slate-500/50");
    }
  }, [offset]);

  return (
    <div
      className={`${change} flex flex-row justify-between fixed top-0 w-screen z-20`}
    >
      {/* {offset >= 480 ? setChange("bg-slate-500") : setChange("bg-slate-500/50")} */}
      <div className="flex flex-row">
        <img
          className="p-2 m-2 rounded-2xl hover:cursor-pointer h-20 bg-slate-300/75"
          src={logo}
          alt="Logo"
        />
        <p className="text-white text-xl font-bold self-center">
          &#10088;206&#10089; 605-8762
        </p>
      </div>
      <div className="flex flex-row items-end w-48 justify-between mb-1 mr-8">
        <a
          href="https://www.facebook.com/overallos/?fref=ts"
          target={"_blank"}
          rel="noreferrer"
        >
          <img
            className="w-12 hover:cursor-pointer bg-slate-500 hover:bg-slate-600 p-2 rounded-full"
            src={f_logo}
            alt="Facebook Logo"
          />
        </a>
        <a
          href="https://twitter.com/MorelliNancy"
          target={"_blank"}
          rel="noreferrer"
        >
          <img
            className="w-12 hover:cursor-pointer bg-slate-500 hover:bg-slate-600 p-2 rounded-full"
            src={t_logo}
            alt="Twitter Logo"
          />
        </a>
        <a
          href="https://www.linkedin.com/in/nancy-morelli-a30bb032/"
          target={"_blank"}
          rel="noreferrer"
        >
          <img
            className="w-12 hover:cursor-pointer bg-slate-500 hover:bg-slate-600 p-2 rounded-full"
            src={l_logo}
            alt="Linkedin Logo"
          />
        </a>
      </div>
    </div>
  );
};

export default NavBar;
