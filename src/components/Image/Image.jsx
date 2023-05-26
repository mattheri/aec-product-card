import React from "react";
import "./Image.css";

const Image = (props) => {
  let loading = "lazy";
  const classnames = ["image"];

  if (props.className) {
    classnames.push(props.className);
  }

  if (props.loading) loading = props.loading;

  return (
    <img
      src={props.src}
      alt={props.alt}
      className={classnames.join(" ")}
      loading={loading}
      width={props.width}
      height={props.height}
    />
  );
};

export default Image;
