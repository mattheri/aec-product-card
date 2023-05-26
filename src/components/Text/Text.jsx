import React from "react";
import Title from "../Title/Title";

const Text = (props) => {
  const classnames = ["text"];
  const asProps = ["p", "span", "div", "strong", "em", "small", "s"];

  if (props.className) {
    classnames.push(props.className);
  }

  if (props.as && !asProps.includes(props.as)) {
    throw new Error(
      `Invalid prop 'as' of value '${
        props.as
      }' supplied to 'Text', expected one of ${asProps.join(", ")}.`
    );
  }

  return (
    <Title className={classnames.join(" ")} as={props.as || "p"}>
      {props.children}
    </Title>
  );
};

export default Text;
