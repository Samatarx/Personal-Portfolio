import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";

const iconArray = [
  {
    href: "https://www.linkedin.com/in/samatarxasan",
    aria: "LinkedIn",
    icon: AiFillLinkedin,
  },
  {
    href: "https://github.com/samatarx",
    aria: "Github",
    icon: AiFillGithub,
  }
];

function IconLinks({ colour, phase }) {
  return (
    <div className={phase ? "quick-social-contact" : "quick-social"}>
      {iconArray.map((arr) => {
        return (
          <a href={arr.href} target="blank" aria-label={arr.aria}>
            <arr.icon className={`${colour} social-link`} />
          </a>
        );
      })}
    </div>
  );
}

export default IconLinks;
