import "./App.css";
import LocomotiveScroll from "locomotive-scroll";
import About from "./components/About";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";

const scroller = new LocomotiveScroll({
  el: document.querySelector("[data-scroll-container]"),
  smooth: true,
});

const bg_img = require("./images/bg_img.jpg");

function App() {
  return (
    <div
      className="App flex flex-col"
      data-scroll-container
      data-scroll-speed="0"
    >
      <img src={bg_img} alt="" className="isolate absolute top-0" />
      <NavBar />
      <About />
      <Footer />
    </div>
  );
}

export default App;
