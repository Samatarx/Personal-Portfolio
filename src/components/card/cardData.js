import top100 from "../../images/top100.PNG";
import jordans from "../../images/jordans.PNG";
import stripe from "../../images/stripe.PNG";
import personal from "../../images/personal.PNG";
import movie from "../../images/movie.PNG";

const renderImage = (path) => {
  return <img src={path} alt="fsdffsd" className="card-image" />;
};

const cardData = [
  {
    id: "0",
    name: "Top 100 Crypto",
    image: renderImage(top100),
    url: "https://top100cryptocurrencies.netlify.app/",
    github: "https://github.com/Samatarx/Crypto-Dashboard",
    tech: ["HTML", "CSS", "JS", "React", "API", "Netlify"],
    desc: " I created a dashboard that displays the current prices and price changes of the top 100 coins. I found an amazing free API and I leveraged my React.js skills to build an elegant dashboard.",
  },
  {
    id: "1",
    name: "Personal Site",
    image: renderImage(personal),
    url: "null",
    github: "https://github.com/Samatarx/Personal-Portfolio",
    tech: ["HTML", "CSS", "JS", "React", "Netlify", "Figma", "Jest"],
    figma:
      "https://www.figma.com/file/2xkXhjaSkSbtAKJHFeEyYb/Portfolio?node-id=0%3A1",
    desc: "Made my personal portfolio using React and leveraged the use of external animation libraries like React Spring. Furthermore, I used useRef to create seamless navigation between different components and unit tested some of the components using Jest and the React Testing Library. The project was able to obtain a 100 score for desktop devices on the Lighthouse test and also uses Google Analytics to track the number of page visits and their locations.",
  },
  {
    id: "2",
    name: "Sneaker Drop",
    image: renderImage(jordans),
    url: "https://sneaker-drop.netlify.app/",
    github: "https://github.com/Samatarx/Sneaker-Launch",
    tech: ["HTML", "CSS", "JS", "Bootstrap", "React", "AWS"],
    desc: "I built a sneaker launch website to demonstrate my ability to use React, React-Router and Bootstrap. I have previously used react-router in tutorials and I wanted to try it myself and put my own spin on it. The project was intially hosted on AWS, using the AWS Amplify feature. It is now hosted on Netlify",
  },
  {
    id: "3",
    name: "Stripe Clone",
    image: renderImage(stripe),
    url: "https://samatars-react-stripe-clone.netlify.app",
    github: "https://github.com/Samatarx/Stripe-Clone",
    tech: ["HTML", "CSS", "JS", "React", "Netlify"],
    desc: "Developed a site clone of the Stripe landing page using React Hooks with a particular focus on using the Context API to move props and state values between different components",
  },
  {
    id: "4",
    name: "Movie Database",
    image: renderImage(movie),
    url: "https://50projects50days-17th.netlify.app/",
    github: "https://github.com/Samatarx/Movie-App",
    tech: ["HTML", "CSS", "JS", "API", "Netlify"],
    desc: "Created a movie database using HTML, CSS and JavaScript from data fetched from an API using an asynchronous function. Extracted the images, titles and movie ratings from the JSON file and made the website fully responsive on all screens",
  },
];

export default cardData;
