import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";

const Contact = ({colour}) => {
    return (
        <summary>
            <h2 className='sub-heading' >Contact Me</h2>
            <div className="quick-social">
          <a href="https://www.linkedin.com/in/samatarxasan/" target="blank">
            <AiFillLinkedin className={`${colour}`} />
          </a>
          <a href="https://github.com/samatarx" target="blank">
            <AiFillGithub className={`${colour}`} />
          </a>
        </div>
        </summary>
    )
}

export default Contact
