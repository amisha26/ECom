import React, { useState, useEffect } from "react"; //useEffect makes a request to the backend
import { Row, Col } from "react-bootstrap";
//import products from '../products';
import Product from "../components/Product";
import axios from "axios";

  const HomeScreen = () => {
  const [products, setProducts] = useState([]);

  //useEffect takes an arrow func. whatever we put in useEffect is going to run as soon as the component loads.
  // we can use axios.get() but instead we create another func inside useEffect
  useEffect(() => {
    const fetchProducts = async () => {
      //async() = an asynchronous function
      const { data } = await axios.get("/api/products"); // const res= ---
      setProducts(data); // setProducts(res.data) 
    }
    fetchProducts()
  },[]); //for second argument we pass in dependency

  return (
    <div>
      <h1>Latest Products</h1>
      <Row>
        {products.map((product) => (
          <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
            <Product product={product} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default HomeScreen;
