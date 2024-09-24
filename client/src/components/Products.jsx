import styled from "styled-components";
import { popularProducts } from "../data";
import Product from "./Product";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;

const Products = ({ category }) => {

  const [product, setProduct] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get(
          category ? `http://localhost:8000/api/products?category=${category}` : `http://localhost:8000/api/products`, {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        });
        setProduct(res.data);
        console.log("use effect main hon")
      } catch (error) {
        console.error('Error fetching data:', error);
        console.log("use effect main hon")
      }
    };

    getProducts();
  }, [category]);

  return (
    <Container>
      {product.map((item) => (

        <Product item={item} />

      ))}
    </Container>
  );
};

export default Products;
