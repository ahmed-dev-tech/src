import React from "react";

const Footer = () => {
  var d = new Date();
  return (
    <div className="footer">
      <div className="copyright">
        <p>
          Copyright © Designed &amp; Developed by{" "}
          <a href="http://alanma.com/" target="_blank">
            Alan Ma
          </a>{" "}
          2021
        </p>
      </div>
    </div>
  );
};

export default Footer;
