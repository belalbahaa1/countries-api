import React from "react";

const Header = () => {
  return (
    <>
      <header className="header">
        <div>
          <h1>Where in the World?</h1>
        </div>
        <div>
          <i className="far fa-moon" style={{ cursor: "pointer" }}>
            Dark Mode
          </i>
        </div>
      </header>
    </>
  );
};

export default Header;
