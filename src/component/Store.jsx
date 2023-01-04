import styled from "styled-components";
import axios from "axios";
import React, { useState, useEffect } from 'react';
import './Store.css';

const Container = styled.div`
    
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

            <>
    <div className="hero-image">
        {product.map((product) => (
            <div className="box-1">
                <div key={product.Key} />
            
            <div className="title">{product.Title}</div>
            <div className="image-box"><img className="image" src={product.Img} alt="training shoes"/></div>
            <div className="description">{product.Description}</div>
            <div className="price">{product.Price} SEK</div>
            </div>
        ))}
        </div>
    {/* <div className="hero-image-2"></div>
    <div className="hero-image-3">Part 3</div> */}
            </>

    );
};



export default Store;