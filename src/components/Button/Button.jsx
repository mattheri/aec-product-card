import React from "react";

const Button = (props) => {
  let type = "button";

  if (props.type) {
    type = props.type;
  }

  const classnames = ["button"];

  if (props.className) {
    classnames.push(props.className);
  }

  return (
    <button className={classnames.join(" ")} type={type}>
      {props.children}
    </button>
  );
};

export default Button;
