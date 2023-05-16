import React from "react";

const year = new Date().getFullYear();

function Footer() {
  return <p className="mt-5 mb-3 text-muted">Copyright © {year}</p>;
}

export default Footer;
