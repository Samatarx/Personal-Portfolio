import "./App.css";
import { useState, useRef } from "react";
import Nav from "./components/Nav";
import { AiOutlineDown } from "react-icons/ai";

function App() {
  const [nav, setNav] = useState(true);
  const [colour, setColour] = useState("red");

  const changeNav = (boolean) => {
    setNav(boolean);
  };

  const changeColour = (colour) => {
    setColour(colour);
  };

  const pageRefs = useRef({});

  const handleBackClick = (type) => {
    pageRefs.current[type].scrollIntoView();
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

      <article
        ref={(el) => (pageRefs.current = { ...pageRefs.current, home: el })}
      >
        <div className="centre">
          <h1>Hi</h1>
          <h2>I'm Samatar Xasan</h2>
          <h3 className={`${colour}`}>Front end developer</h3>
        </div>
        <div className="down-icon">
          <AiOutlineDown
            onClick={() => {
              handleBackClick("about");
            }}
          />
        </div>
      </article>
      <section
        ref={(el) => (pageRefs.current = { ...pageRefs.current, about: el })}
      >
        <div className="full-image image-1">
          {/* <div className="overlay yellow-bg"></div> */}
        </div>
        <div className="text  effects-1">
          <h1>Hi</h1>
          <p className={`${colour}`}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
            dolores, quasi nostrum delectus et voluptates laboriosam impedit
            libero quidem quas adipisci consectetur modi placeat nobis iste
            harum repudiandae deserunt sapiente ea nam! Mollitia quaerat
            temporibus est labore veniam cumque officia corporis, aut
            reiciendis, voluptate consectetur saepe repudiandae, corrupti harum
            id.
          </p>
          <p className={`${colour}`}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
            dolores, quasi nostrum delectus et voluptates laboriosam impedit
            libero quidem quas adipisci consectetur modi placeat nobis iste
            harum repudiandae deserunt sapiente ea nam! Mollitia quaerat
            temporibus est labore veniam cumque officia corporis, aut
            reiciendis, voluptate consectetur saepe repudiandae, corrupti harum
            id.
          </p>
          <p className={`${colour}`}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
            dolores, quasi nostrum delectus et voluptates laboriosam impedit
            libero quidem quas adipisci consectetur modi placeat nobis iste
            harum repudiandae deserunt sapiente ea nam! Mollitia quaerat
            temporibus est labore veniam cumque officia corporis, aut
            reiciendis, voluptate consectetur saepe repudiandae, corrupti harum
            id.
          </p>
          <p className={`${colour}`}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
            dolores, quasi nostrum delectus et voluptates laboriosam impedit
            libero quidem quas adipisci consectetur modi placeat nobis iste
            harum repudiandae deserunt sapiente ea nam! Mollitia quaerat
            temporibus est labore veniam cumque officia corporis, aut
            reiciendis, voluptate consectetur saepe repudiandae, corrupti harum
            id.
          </p>

          <button>Contact me</button>
          <h1>About Me</h1>
          <p className={`${colour}`}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
            dolores, quasi nostrum delectus et voluptates laboriosam impedit
            libero quidem quas adipisci consectetur modi placeat nobis iste
            harum repudiandae deserunt sapiente ea nam! Mollitia quaerat
            temporibus est labore veniam cumque officia corporis, aut
            reiciendis, voluptate consectetur saepe repudiandae, corrupti harum
            id.
          </p>
          <h2>Work History</h2>
          <p className={`${colour}`}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
            dolores, quasi nostrum delectus et voluptates laboriosam impedit
            libero quidem quas adipisci consectetur modi placeat nobis iste
            harum repudiandae deserunt sapiente ea nam! Mollitia quaerat
            temporibus est labore veniam cumque officia corporis, aut
            reiciendis, voluptate consectetur saepe repudiandae, corrupti harum
            id.
          </p>
          <p className={`${colour}`}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
            dolores, quasi nostrum delectus et voluptates laboriosam impedit
            libero quidem quas adipisci consectetur modi placeat nobis iste
            harum repudiandae deserunt sapiente ea nam! Mollitia quaerat
            temporibus est labore veniam cumque officia corporis, aut
            reiciendis, voluptate consectetur saepe repudiandae, corrupti harum
            id.
          </p>
          <p className={`${colour}`}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
            dolores, quasi nostrum delectus et voluptates laboriosam impedit
            libero quidem quas adipisci consectetur modi placeat nobis iste
            harum repudiandae deserunt sapiente ea nam! Mollitia quaerat
            temporibus est labore veniam cumque officia corporis, aut
            reiciendis, voluptate consectetur saepe repudiandae, corrupti harum
            id.
          </p>
          <p className={`${colour}`}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
            dolores, quasi nostrum delectus et voluptates laboriosam impedit
            libero quidem quas adipisci consectetur modi placeat nobis iste
            harum repudiandae deserunt sapiente ea nam! Mollitia quaerat
            temporibus est labore veniam cumque officia corporis, aut
            reiciendis, voluptate consectetur saepe repudiandae, corrupti harum
            id.
          </p>
        </div>
      </section>

      <section
        ref={(el) => (pageRefs.current = { ...pageRefs.current, projects: el })}
        className="card-container"
      >
        <div className={`cards ${colour}-bg`}>
          <h2>key projects</h2>
        </div>
        <div className="text">
          <h2>Tech Stack</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
            dolores, quasi nostrum delectus et voluptates laboriosam impedit
            libero quidem quas adipisci consectetur modi placeat nobis iste
            harum repudiandae deserunt sapiente ea nam! Mollitia quaerat
            temporibus est labore veniam cumque officia corporis, aut
            reiciendis, voluptate consectetur saepe repudiandae, corrupti harum
            id.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
            dolores, quasi nostrum delectus et voluptates laboriosam impedit
            libero quidem quas adipisci consectetur modi placeat nobis iste
            harum repudiandae deserunt sapiente ea nam! Mollitia quaerat
            temporibus est labore veniam cumque officia corporis, aut
            reiciendis, voluptate consectetur saepe repudiandae, corrupti harum
            id.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
            dolores, quasi nostrum delectus et voluptates laboriosam impedit
            libero quidem quas adipisci consectetur modi placeat nobis iste
            harum repudiandae deserunt sapiente ea nam! Mollitia quaerat
            temporibus est labore veniam cumque officia corporis, aut
            reiciendis, voluptate consectetur saepe repudiandae, corrupti harum
            id.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
            dolores, quasi nostrum delectus et voluptates laboriosam impedit
            libero quidem quas adipisci consectetur modi placeat nobis iste
            harum repudiandae deserunt sapiente ea nam! Mollitia quaerat
            temporibus est labore veniam cumque officia corporis, aut
            reiciendis, voluptate consectetur saepe repudiandae, corrupti harum
            id.
          </p>
          <p className={`${colour}`}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
            dolores, quasi nostrum delectus et voluptates laboriosam impedit
            libero quidem quas adipisci consectetur modi placeat nobis iste
            harum repudiandae deserunt sapiente ea nam! Mollitia quaerat
            temporibus est labore veniam cumque officia corporis, aut
            reiciendis, voluptate consectetur saepe repudiandae, corrupti harum
            id.
          </p>
          <p className={`${colour}`}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
            dolores, quasi nostrum delectus et voluptates laboriosam impedit
            libero quidem quas adipisci consectetur modi placeat nobis iste
            harum repudiandae deserunt sapiente ea nam! Mollitia quaerat
            temporibus est labore veniam cumque officia corporis, aut
            reiciendis, voluptate consectetur saepe repudiandae, corrupti harum
            id.
          </p>
          <p className={`${colour}`}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
            dolores, quasi nostrum delectus et voluptates laboriosam impedit
            libero quidem quas adipisci consectetur modi placeat nobis iste
            harum repudiandae deserunt sapiente ea nam! Mollitia quaerat
            temporibus est labore veniam cumque officia corporis, aut
            reiciendis, voluptate consectetur saepe repudiandae, corrupti harum
            id.
          </p>
          <p className={`${colour}`}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
            dolores, quasi nostrum delectus et voluptates laboriosam impedit
            libero quidem quas adipisci consectetur modi placeat nobis iste
            harum repudiandae deserunt sapiente ea nam! Mollitia quaerat
            temporibus est labore veniam cumque officia corporis, aut
            reiciendis, voluptate consectetur saepe repudiandae, corrupti harum
            id.
          </p>
        </div>
      </section>

      <section>
        <h1>Carousel</h1>
        <p className={`${colour}`}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero suscipit
          odio maxime explicabo eaque vitae, maiores repudiandae quaerat libero
          alias cupiditate, eius, porro dolores est ipsam sint tempore aliquam
          praesentium harum aperiam repellat eligendi ratione. Inventore
          doloribus, magnam ducimus iure aspernatur debitis blanditiis
          voluptatibus consequatur minima sapiente cupiditate doloremque nisi
          fugiat modi distinctio, atque reiciendis. Animi dolore voluptatum
          soluta fuga eaque, quae illum nisi doloribus voluptates fugiat
          perspiciatis accusamus obcaecati qui, provident earum asperiores nobis
          aut ipsa id ullam iusto sed facere! Cupiditate recusandae numquam,
          ipsum temporibus velit beatae nemo sed ipsam perspiciatis, aut
          inventore maiores nulla, expedita consectetur incidunt aspernatur
          exercitationem consequuntur iure earum accusantium esse dolorum fugit.
          Repudiandae itaque, excepturi tempora maxime voluptates,
          necessitatibus, minus eaque voluptatem blanditiis deserunt saepe
          magnam quibusdam quisquam quis velit id beatae inventore facilis.
        </p>
      </section>

      <section
        ref={(el) => (pageRefs.current = { ...pageRefs.current, contact: el })}
      >
        <div className="full-image image-2">
          {/* <div className="overlay red-bg"></div> */}
        </div>
        <div className="text">
          <h3>Contact me</h3>
          <p className={`${colour}`}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
            dolores, quasi nostrum delectus et voluptates laboriosam impedit
            libero quidem quas adipisci consectetur modi placeat nobis iste
            harum repudiandae deserunt sapiente ea nam! Mollitia quaerat
            temporibus est labore veniam cumque officia corporis, aut
            reiciendis, voluptate consectetur saepe repudiandae, corrupti harum
            id.
          </p>
        </div>
      </section>
    </main>
  );
}

export default App;
