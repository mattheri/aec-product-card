import React from "react";
import Title from "../Title/Title";
import Text from "../Text/Text";

import "./Price.css";

const Price = (props) => {
  const classnames = ["price"];
  let isSale = false;

  if (props.className) {
    classnames.push(props.className);
  }

  const price = Number(props.children);

  if (props.priceOnSale) {
    if (Number(props.priceOnSale) < price) {
      isSale = true;
    }
  }

  if (isSale) {
    return (
      <div className={classnames.join(" ")}>
        <Title className="price" as="h3">
          ${props.priceOnSale}
        </Title>
        <Text className="price-reduced" as="s">
          ${props.children}
        </Text>
      </div>
    );
  }

  return (
    <div className={classnames.join(" ")}>
      <Title className="price" as="h3">
        ${props.children}
      </Title>
    </div>
  );
};

export default Price;
