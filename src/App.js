import "./App.css";
import { useState, useRef } from "react";
import Nav from "./components/Nav";
import Header from "./components/Header";
import About from "./components/About";
import TechStack from "./components/TechStack";
import Cards from "./components/Cards";
import Carousel from "./components/Carousel";
import Contact from "./components/Contact";

function App() {
  const [nav, setNav] = useState(true);
  const [colour, setColour] = useState("yellow");

  const changeNav = (boolean) => {
    setNav(boolean);
  };

  const changeColour = (colour) => {
    setColour(colour);
  };

  const pageRefs = useRef({});

  const handleBackClick = (type) => {
    pageRefs.current[type].scrollIntoView();
    console.log(pageRefs.current[type].style.width);
  };

  return (
    <main className="App">
      <Nav
        nav={nav}
        colour={colour}
        changeNav={changeNav}
        changeColour={changeColour}
        handleBackClick={handleBackClick}
      />

      <Header
        colour={colour}
        handleBackClick={handleBackClick}
        pageRefs={pageRefs}
      />

      <section
        ref={(el) => (pageRefs.current = { ...pageRefs.current, about: el })}
      >
        <div className="full-image image-1">
          {/* <div className="overlay yellow-bg"></div> */}
        </div>

        <div className="text  effects-1">
          <About colour={colour} />
        </div>
      </section>

      <section
        ref={(el) => (pageRefs.current = { ...pageRefs.current, projects: el })}
        className="card-container"
      >
        <div className="cards">
          <Cards />
        </div>
        <div className="text">
          <TechStack colour={colour} />
        </div>
      </section>

      <section>
        <Carousel/>
        
      </section>

      <section
        ref={(el) => (pageRefs.current = { ...pageRefs.current, contact: el })}
      >
        <div className="full-image image-2">
          {/* <div className="overlay red-bg"></div> */}
        </div>
        <div className="text">
          <Contact/>
        </div>
      </section>
    </main>
  );
}

export default App;
