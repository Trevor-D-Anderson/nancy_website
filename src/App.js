import "./App.css";
import About from "./components/About";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";

const bg_img = require("./images/bg2_img.jpg");

const title = "Overall Office \n Solutions LLC ";

function App() {
  return (
    <div className="App flex flex-col">
      <img src={bg_img} alt="" className="isolate absolute top-0 z-[-10]" />
      <span className="h-[100px] snap-start"></span>
      <pre className="font-mono font-bold text-white text-8xl text-right">
        {title}
      </pre>
      <NavBar />
      <About />
      <span className="h-screen"></span>
      <Footer />
    </div>
  );
}

export default App;
