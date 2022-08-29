import React from "react";

const Header = ({ heading }) => {
  return <h1 className="text-3xl">{heading || "Applications"}</h1>;
};

export default Header;
