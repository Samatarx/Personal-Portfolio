import React from 'react';
import certificateData from './certificateData';
import { AiOutlineLink } from "react-icons/ai";

const Certificates = ({colour}) => {
    // const [data] = useState(certificateData)
    return (
      <summary>
        {certificateData.map((cert) => {
          return (
            <p>
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
}

export default Certificates
