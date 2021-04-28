import React from "react";
import { AiOutlineClose, AiOutlineHome, AiOutlineMenu } from "react-icons/ai";

const coloursArray = ["red", "yellow", "green"];

function Nav({ nav, colour, changeNav, changeColour, handleBackClick }) {
  console.log(colour);
  return (
    <nav className="icon">
      {nav ? (
        <div className={`icon-m ${colour}-bg`}>
          <AiOutlineMenu onClick={() => changeNav(false)} />
        </div>
      ) : (
        <div className="menu-wrapper">
          <div className="icon-x">
            <AiOutlineHome
              onClick={() => {
                handleBackClick("home");
              }}
            />
            <AiOutlineClose onClick={() => changeNav(true)} />
          </div>
          <div className="nav-drop ">
            <ul>
              <li
                onClick={() => {
                  handleBackClick("about");
                }}
              >
                About
              </li>
              <li
                onClick={() => {
                  handleBackClick("projects");
                }}
              >
                Projects
              </li>
              <li
                onClick={() => {
                  handleBackClick("contact");
                }}
              >
                Contact
              </li>
              <li className="themes">Themes</li>
            </ul>
          </div>

          <div className="colours">
            {coloursArray.map((colour, idx) => {
              return (
                <div
                  key={idx}
                  className={`${colour}-bg ${colour}-btn`}
                  onClick={() => changeColour(colour)}
                ></div>
              );
            })}
          </div>
        </div>
      )}
    </nav>
  );
}

export default Nav;
