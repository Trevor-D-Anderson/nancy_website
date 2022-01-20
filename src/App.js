import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import Reviews from "./components/Reviews";

import React, { useState, useEffect } from "react";

const bg_img = require("./images/bg2_img.jpg");

const title = "Overall Office \n Solutions LLC ";

function App() {
  const [offset, setOffset] = useState(0);
  const [aboutUs, setAboutUs] = useState("");

  useEffect(() => {
    const onScroll = () => setOffset(window.pageYOffset);
    // clean up code
    window.removeEventListener("scroll", onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (offset >= 885 && offset <= 2125) {
      setAboutUs("fixed top-[96px]");
    } else if (offset < 885) {
      setAboutUs("relative top-[625px]");
    } else {
      setAboutUs("relative top-[1875px]");
    }
  }, [offset]);

  console.log(offset);

  return (
    <div className="App flex flex-col">
      <img src={bg_img} alt="" className="isolate absolute top-0 z-[-10]" />
      <span className="h-[100px] snap-start"></span>
      <pre className="font-mono font-bold text-white text-8xl text-right mr-48 mt-16">
        {title}
      </pre>
      <NavBar offset={offset} />
      <h1
        className={`${aboutUs} h-16 pl-8 text-5xl w-screen font-['Brush_Script_MT'] bg-slate-100`}
      >
        About Us <span className=" text-orange-300 text-6xl">-</span>
      </h1>
      <About offset={offset} />
      <Reviews />
      <Contact />
      <span className="h-[10000px]"></span>
      <Footer />
    </div>
  );
}

export default App;
