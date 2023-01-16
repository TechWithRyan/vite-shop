import styled from "styled-components";
import axios from "axios";
import React, { useState, useEffect } from 'react';
import './Store.css';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import UpdateIcon from '@mui/icons-material/Update';
import { Link } from 'react-router-dom';


function Store() {
    const [products, setProducts] = useState([])
    useEffect(() => {
        const fetchAllProducts = async () => {
            try {
                const res = await axios.get('http://localhost:8080/products')
                setProducts(res.data)
            } catch (err) {
                console.log(err)
            }
        }

        fetchAllProducts();

    }, [])
    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:8080/products/${id}`);
            window.location.reload();
        } catch (err) {
            console.log(err);
        }
    };

    return (

        <>
            <div className="hero-image">
                {products.map((product) => (
                    <div className="box-1">
                        <div key={product.Key} className="single-box" />
                        <div className="title">{product.Title}</div>
                        <div className="image-box"><img className="image" src={product.Img} alt="training shoes" /></div>
                        <div className="description">{product.Description}</div>
                        <div className="price">{product.Price} kr</div>
                        <div className="store-icon">
                            <Link onClick={() => handleDelete(product.id)}><DeleteForeverIcon /></Link>
                        </div>
                        <div className="store-icon">
                            <Link onClick={() => handleUpdate(product.id)}><UpdateIcon /></Link>
                        </div>

                    </div>
                ))}
            </div>
        </>

    );
};



export default Store;