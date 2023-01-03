import styled from "styled-components";
import './index.scss';
import axios from "axios";
import React, { useState, useEffect } from 'react';


const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;



function Store (){
    const [product, setProduct] = useState([])
useEffect(() => {
    const fetchAllProducts = async () => {
        try{
            const res = await axios.get('http://localhost:8080/products')
            setProduct(res.data)
        } catch(err) {
            console.log(err)
        }
    }
    fetchAllProducts();
    
},[])
console.log(product)
    return (
        <div>
        
        <Container className="hero-image">

        {product.map((product) => (
            <>

            <div key={product.Key} />
            <div>{product.Title}</div>
            <div>{product.Description}</div>
            <div>{product.Price}</div>
            <div><img src={product.Img} alt="training shoes" width="50%"/></div>

            </>

        ))}
        </Container>
        </div>
    );
};



export default Store;