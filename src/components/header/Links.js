import PDF from "../../images/Samatar_Xasan_Resume.pdf";

const linkArray = ["About", "Project", "Contact", "Resume"];

function Links({ handleBackClick }) {
  return (
    <div className="quick-page-list">
      {linkArray.map((link) => {
        return link !== "Resume" ? (
          <span
            className="quick-link"
            onClick={() => {
              handleBackClick(`${link.toLowerCase()}`);
            }}
          >
            {link}
          </span>
        ) : (
          <span className="quick-link">
            <a href={PDF} target="_blank" rel="noreferrer" aria-label="CV">
              Resume
            </a>
          </span>
        );
      })}
    </div>
  );
}

export default Links;
