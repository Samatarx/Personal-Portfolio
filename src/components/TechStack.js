import { AiFillHtml5, AiFillGithub } from "react-icons/ai";
import { DiCss3 } from "react-icons/di";
import {
  SiJavascript,
  SiBootstrap,
  SiRedux,
  SiFirebase,
  SiCsharp,
  SiNetlify,
  SiDotNet,
  SiPython,
  SiUnity,
  SiGit,
  SiGatsby,
  SiMaterialUi,
  SiPostgresql,
} from "react-icons/si";
import { FaReact, FaAws } from "react-icons/fa";
function TechStack({ colour }) {
  return (
    <summary className='tech-summary' >
      <h2>Tech Stack</h2>
      <p>I have experience with the following technologies:</p>
      <div className="tech-icons">
        <AiFillHtml5 />
        <DiCss3 />
        <SiJavascript />
        <FaReact />
        <SiRedux />
        <SiBootstrap />
        <SiMaterialUi />
        <FaAws />
        <SiFirebase />
        <SiNetlify />
        <SiGit />
        <AiFillGithub />
      </div>
      <p>I am Currently learning the following:</p>
      <div className="tech-icons">
        <SiGatsby />
        <SiCsharp />
        <SiDotNet />
        <SiPython />
        <SiUnity />
        <SiPostgresql />
      </div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam dolores,
        quasi nostrum delectus et voluptates laboriosam impedit libero quidem
        quas adipisci consectetur modi placeat nobis iste harum repudiandae
        deserunt sapiente ea nam! Mollitia quaerat temporibus est labore veniam
        cumque officia corporis, aut reiciendis, voluptate consectetur saepe
        repudiandae, corrupti harum id.
      </p>
      <p className={`${colour}`}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam dolores,
        quasi nostrum delectus et voluptates laboriosam impedit libero quidem
        quas adipisci consectetur modi placeat nobis iste harum repudiandae
        deserunt sapiente ea nam! Mollitia quaerat temporibus est labore veniam
        cumque officia corporis, aut reiciendis, voluptate consectetur saepe
        repudiandae, corrupti harum id.
      </p>
      <p className={`${colour}`}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam dolores,
        quasi nostrum delectus et voluptates laboriosam impedit libero quidem
        quas adipisci consectetur modi placeat nobis iste harum repudiandae
        deserunt sapiente ea nam! Mollitia quaerat temporibus est labore veniam
        cumque officia corporis, aut reiciendis, voluptate consectetur saepe
        repudiandae, corrupti harum id.
      </p>
      <p className={`${colour}`}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam dolores,
        quasi nostrum delectus et voluptates laboriosam impedit libero quidem
        quas adipisci consectetur modi placeat nobis iste harum repudiandae
        deserunt sapiente ea nam! Mollitia quaerat temporibus est labore veniam
        cumque officia corporis, aut reiciendis, voluptate consectetur saepe
        repudiandae, corrupti harum id.
      </p>
      <p className={`${colour}`}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam dolores,
        quasi nostrum delectus et voluptates laboriosam impedit libero quidem
        quas adipisci consectetur modi placeat nobis iste harum repudiandae
        deserunt sapiente ea nam! Mollitia quaerat temporibus est labore veniam
        cumque officia corporis, aut reiciendis, voluptate consectetur saepe
        repudiandae, corrupti harum id.
      </p>
    </summary>
  );
}

export default TechStack;
