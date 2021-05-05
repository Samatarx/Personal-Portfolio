import "./App.css";
import { useState, useRef } from "react";
import Nav from "../nav/Nav";
import Header from "../header/Header";
import About from "../about/About";
import TechStack from "../techStack/TechStack";
import Cards from "../card/Cards";
import CarouselComp from "../carousel/CarouselComp";
import Contact from "../contact/Contact";

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
    pageRefs.current[type].scrollIntoView({ behavior: "smooth" });
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
        <div className="full-image image-1"></div>

        <div className="text  effects-1">
          <About colour={colour} />
        </div>
      </section>

      <section
        ref={(el) => (pageRefs.current = { ...pageRefs.current, projects: el })}
        className="card-container"
      >
        <div className="cards">
          <Cards colour={colour} />
        </div>
        <div className="text">
          <TechStack colour={colour} />
        </div>
      </section>

      <section>
        <CarouselComp colour={colour} />
      </section>

      <section
        ref={(el) => (pageRefs.current = { ...pageRefs.current, contact: el })}
      >
        <div className="full-image image-2"></div>
        <div className="text">
          <Contact colour={colour} handleBackClick={handleBackClick} />
        </div>
      </section>
    </main>
  );
}

export default App;
