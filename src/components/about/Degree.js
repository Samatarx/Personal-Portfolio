import { degree } from "./certificateData";
import { v4 as uuidv4 } from "uuid";

const Degree = ({ colour }) => {
  return (
    <summary>
      <h4>Degrees:</h4>
      {degree.map((cert) => {
        return (
          <p key={uuidv4()}>
            {cert.title} - <span className={`${colour}`}>{cert.grade}</span>
          </p>
        );
      })}
    </summary>
  );
};

export default Degree;
