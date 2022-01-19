import React from "react";

const logo = require("../images/OverallOfficeSolutions_logo.png");
const f_logo = require("../images/social_logos/f_logo_RGB-White_100.png");
const t_logo = require("../images/social_logos/twitter.png");
const l_logo = require("../images/social_logos/linkedin.png");

const NavBar = () => {
  return (
    <div className="bg-slate-500/25 flex flex-row justify-between fixed top-0 w-screen">
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
        <img
          className="w-12 hover:cursor-pointer bg-slate-400 hover:bg-slate-600 p-2 rounded-full"
          src={f_logo}
          alt="Facebook Logo"
        />
        <img
          className="w-12 hover:cursor-pointer bg-slate-400 hover:bg-slate-600 p-2 rounded-full"
          src={t_logo}
          alt="Twitter Logo"
        />
        <img
          className="w-12 hover:cursor-pointer bg-slate-400 hover:bg-slate-600 p-2 rounded-full"
          src={l_logo}
          alt="Linkedin Logo"
        />
      </div>
    </div>
  );
};

export default NavBar;
