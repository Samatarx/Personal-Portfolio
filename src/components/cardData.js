import images from "../images.js";
import imaged from '../images/IMG_0188.JPEG'

const renderImage = (path) => {
  return <img src={path} alt="fsdffsd" width='100px'/>
}

const cardData = [
  {
    id: "0",
    name: "Cryptocurrency Dashboard",
    image: renderImage(imaged),
    url: "https://top100cryptocurrencies.netlify.app/",
    github: "https://github.com/Samatarx/Crypto-Dashboard",
    tech: ["HTML", "CSS", "JS", "React", "Netlify", "API"],
    desc:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt quidem vel accusamus labore fugiat alias dignissimos dolor optio debitis dolorem laborum quis repellendus",
  },
  {
    id: "1",
    name: "Sneaker Drop",
    image: "../images/IMG_0290.JPEG",
    url: "https://www.sneaker-drop.xyz/",
    github: "https://github.com/Samatarx/Sneaker-Launch",
    tech: ["HTML", "CSS", "JS", "React", "AWS", "Bootstrap"],
    desc:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt quidem vel accusamus labore fugiat alias dignissimos dolor optio debitis dolorem laborum quis repellendus",
  },
  {
    id: "2",
    name: "Stripe Clone",
    // image: "",
    url: "https://samatars-react-stripe-clone.netlify.app",
    github: "https://github.com/Samatarx/Stripe-Clone",
    tech: ["HTML", "CSS", "JS", "React", "Netlify"],
    desc:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt quidem vel accusamus labore fugiat alias dignissimos dolor optio debitis dolorem laborum quis repellendus",
  },
  {
    id: "3",
    name: "Personal Site",
    // image: "",
    url: "null",
    github: "https://github.com/Samatarx/Personal-Portfolio",
    tech: ["HTML", "CSS", "JS", "React", "Netlify", "Figma"],
    desc:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt quidem vel accusamus labore fugiat alias dignissimos dolor optio debitis dolorem laborum quis repellendus",
  },
  {
    id: "5",
    name: "Movie Database",
    // image: "",
    url: "https://50projects50days-17th.netlify.app/",
    github: "https://github.com/Samatarx/Movie-App",
    tech: ["HTML", "CSS", "JS", "API", "Netlify"],
    desc:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt quidem vel accusamus labore fugiat alias dignissimos dolor optio debitis dolorem laborum quis repellendus",
  },
];

export default cardData;
