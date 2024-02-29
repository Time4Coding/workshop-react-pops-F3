import { useState } from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import PropTypes from "prop-types";

export default function ProductCard({ product, name }) {
  const { imgURL, title, price, desc } = product;

  return (
    <Card
      style={{ width: "18rem" }}
      onClick={() => alert("This is a click event")}
    >
      <Card.Img variant="top" src={imgURL} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{desc}</Card.Text>
      </Card.Body>

      <Card.Body>
        <Card.Link href="#">{price} DT</Card.Link>
      </Card.Body>
      {name}
    </Card>
  );
}

ProductCard.propTypes = {
  product: PropTypes.object,
  name: PropTypes.string,
};

ProductCard.defaultProps = {
  product: {
    imgURL: "This is image",
    title: "this is product title",
    desc: "this is product descreption",
    price: "this is product price",
  },
  name: "Hamza",
};
