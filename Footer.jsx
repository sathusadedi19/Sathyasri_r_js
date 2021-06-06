import React from "react";
function Footer() {
  var currentyear = new Date().getFullYear();
  return (
    <footer>
      <p>Copyright @ {currentyear}</p>
    </footer>
  );
}
export default Footer;
