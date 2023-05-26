import React from "react";
import Container from "../Container/Container";

import "./Card.css";

const Card = (props) => {
  return <Container className="card">{props.children}</Container>;
};

export default Card;
