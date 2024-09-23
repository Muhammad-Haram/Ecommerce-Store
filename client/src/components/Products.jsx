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

  const [SingleProduct, setSingleProduct] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`http://localhost:8000/api/products?category=${category}`, {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        });
        setSingleProduct(res.data);
        console.log("use effect main hon")
      } catch (error) {
        console.error('Error fetching data:', error);
        console.log("use effect main hon")
      }
    };

    fetchData();
  }, [category]);

  return (
    <Container>
      {SingleProduct.map((item) => (

        <Product item={item} />

      ))}
    </Container>
  );
};

export default Products;
