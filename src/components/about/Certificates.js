import certificateData from "./certificateData";
import { AiOutlineLink } from "react-icons/ai";
import { v4 as uuidv4 } from "uuid";

const Certificates = ({ colour }) => {
  return (
    <summary>
      <h4>Certificates:</h4>
      {certificateData.map((cert) => {
        return (
          <p key={uuidv4()}>
            {cert.title} - <span className={`${colour}`}>{cert.span}</span>
            <a
              href={cert.link}
              target="_blank"
              rel="noreferrer"
              aria-label="Website Link"
            >
              <AiOutlineLink />
            </a>
          </p>
        );
      })}
    </summary>
  );
};

export default Certificates;
