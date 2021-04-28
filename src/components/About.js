import { useState } from "react";

function About({ colour }) {
  const [about, setAbout] = useState([]);
  return (
    <summary>
      <h1>About Me</h1>
      <form className="bio-length-control">
        <fieldset>
          <legend>Bio Length:</legend>
          <div className="bio-options-lengths">
            <div className="bio-option">
              <input type="radio" className="bio-input" />
            </div>
          </div>
        </fieldset>
      </form>
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
      <p className={`${colour}`}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam dolores,
        quasi nostrum delectus et voluptates laboriosam impedit libero quidem
        quas adipisci consectetur modi placeat nobis iste harum repudiandae
        deserunt sapiente ea nam! Mollitia quaerat temporibus est labore veniam
        cumque officia corporis, aut reiciendis, voluptate consectetur saepe
        repudiandae, corrupti harum id.
      </p>
      <h2>Education</h2>
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

export default About;
