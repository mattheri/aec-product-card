import React from "react";
import Card from "../Card/Card";
import Image from "../Image/Image";
import Title from "../Title/Title";
import Text from "../Text/Text";
import Price from "../Price/Price";
import Button from "../Button/Button";

const ProdutCard = (props) => {
  const imageProps = props.image;
  const priceProps = props.price;

  return (
    <Card>
      <Image
        src={imageProps.src}
        alt={imageProps.alt}
        width={imageProps.width}
        height={imageProps.height}
      />
      <Title as="h5">{props.subtitle}</Title>
      <Title>{props.title}</Title>
      <Text>{props.description}</Text>
      <Price priceOnSale={priceProps.priceOnSale}>{priceProps.price}</Price>
      <Button>{props.label}</Button>
    </Card>
  );
};

export default ProdutCard;
