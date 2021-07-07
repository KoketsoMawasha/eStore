import React from "react";
import { Link } from "react-router-dom";
import { Row, Col, Image, ListGroup, Card, Button } from "react-bootstrap";
import Rating from "../components/Rating";
import products from "../products";

const ProductScreen = ({ match }) => {
  const product = products.find((product) => product._id === match.params.id);
  return (
    <>
      <Link to="/" className="btn my-3">
        Back
      </Link>
      <Row>
        <Col md={5} className="mb-3">
          <Image src={product.image} alt={product.name} fluid />
        </Col>

        <Col md={4}>
          <ListGroup varient="flush">
            <ListGroup.Item>
              <h3>{product.name}</h3>
            </ListGroup.Item>

            <ListGroup.Item>
              <Rating
                value={product.rating}
                text={`Reviewed by ${product.numReviews} people`}
              />
            </ListGroup.Item>

            {/* <ListGroup.Item>
              <p>Price: ${product.price}</p>
            </ListGroup.Item> */}
            <ListGroup.Item>
              <h3>Description</h3>
              <p>{product.description}</p>
            </ListGroup.Item>
          </ListGroup>
        </Col>

        <Col md={3}>
          <Card>
            <ListGroup varient="flush">
              <ListGroup.Item>
                <Row>
                  <Col>Price</Col>
                  <Col>
                    <strong>${product.price}</strong>
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Status</Col>
                  <Col>
                    {product.countInStock ? "In Stock" : "Out of Stock"}
                  </Col>
                </Row>
              </ListGroup.Item>

              <ListGroup.Item>
                <Button
                  style={{
                    borderRadius: "0",
                    backgroundColor: "rgb(101, 193, 78)",
                    color: "white",
                    width: "100%",
                  }}
                  className="btn btn-dark"
                  type="button"
                  disabled={product.countInStock === 0 ? true : false}
                >
                  Add to Cart
                </Button>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default ProductScreen;
