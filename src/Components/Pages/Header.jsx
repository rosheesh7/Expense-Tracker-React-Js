import React from "react";

const Header = () => {
  return (
    <>
      <div className="Navbar-Container">
        <div className="Header-Container">
          <div className="Header-Logo">
            <img src="./images/Wallet.png" href="#" alt="[_-_]"/>
          </div>

          <div className="Header-TitleAll">
            <span className="Header-Title">Expense Tracker </span>
            <span className="Header-Desc">
              Take your expense tracking to next level
            </span>
          </div>
        
        </div>

        <div className="Header-Author">
            <span className="Header-Title" href="#">Rosis Sharma</span>
        </div>
      </div>
    </>
  );
};

export default Header;
