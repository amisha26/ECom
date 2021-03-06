import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import { Card, Button, Row, Col, ListGroup, Image } from "react-bootstrap";
//import products from "../products";
import Rating from "../components/Rating";
import axios from "axios";

const ProductScreen = ({ match }) => {
//(fetches from frontend products.js) const product = products.find((p) => p._id === match.params.id);
const [product, setProduct] = useState([])
useEffect(() => {
   const fetchProduct = async () =>{
     const {data} = await axios.get(`/api/products/${match.params.id}`)
     setProduct(data)
   }
   fetchProduct() 
  },[match])

  return (
    <div>
      <Link className="btn btn-light my-3">Go Back</Link>
      <Row>
        <Col md={6}>
          <Image src={product.image} alt={product.name} fluid />
        </Col>
        <Col md={3}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h3>{product.name}</h3>
            </ListGroup.Item>

            <ListGroup.Item>
              <Rating
                value={product.rating}
                text={`${product.numReviews} reviews`}
              />
            </ListGroup.Item>

            <ListGroup.Item>Price: ${product.price}</ListGroup.Item>

            <ListGroup.Item>Description: {product.description}</ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={3} /*className='border'*/>
        <Card>
          <ListGroup variant="flush">
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
                  {product.countInStock > 0 ? "In stock" : "out of stock"}
                </Col>
              </Row>
            </ListGroup.Item>
            <ListGroup.Item>
              <Button
                className="btn-block"
                type="Button"
                disabled={product.countInStock === 0}
              >
                Add to cart
              </Button>
            </ListGroup.Item>
          </ListGroup>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default ProductScreen;
