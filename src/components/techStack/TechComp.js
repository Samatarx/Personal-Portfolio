import { v4 as uuidv4 } from "uuid";

const TechComp = ({ colour, data }) => {
    var mainCss = ''
    if (data.length > 3) {
        mainCss = 'main-area'
    }

  return (
    <div className={`tech-icons ${mainCss}`}>
      {data.map((tech) => {
        return (
          <div key={uuidv4()} className="tech-icon">
            <tech.icon className={`tech-icon-logo ${colour}`} />
            <p className="tech-icon-name">{tech.name}</p>
          </div>
        );
      })}
    </div>
  );
};

export default TechComp;
