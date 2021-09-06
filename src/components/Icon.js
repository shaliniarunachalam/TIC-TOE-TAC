import React from "react";
import { FaTimes, FaPen, FaRegCircle } from "react-icons/fa";

const Icon = ({ name }) => {
  switch (name) {
    case "circle":
      return <FaRegCircle className="icons" style={{color:"green"}}/>;
    case "cross":
      return <FaTimes className="icons" style={{color:"red"}} />;
    default:
      return <FaPen className="icons" />;
  }
};

export default Icon;
