import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Addproducts.css';
import axios from 'axios';

const Addproducts = () => {

    const [products, setProducts] = useState({
        Title: "",
        Desription: "",
        Price: null,
        Img: "",
    });

    // Try and catch, waiting for post. Error handling. Watch videos.
    const [error, setError] = useState(false);
    const navigate = useNavigate();
    const handleChange = (e) => {
        setProducts((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

const handleClick = async (e) => {
    e.preventDefault();
    try {
        await axios.post("http://localhost:8080/products", products);
        navigate("/Store");
    } catch (err) {
        console.log(err);
        setError(true)
    }
};
    return (
        <div>
                <input type="text" className='box-form' onChange={handleChange} name="Title" placeholder='Title' />
                <textarea type="text" className='box-form' row={7} onChange={handleChange} name="Description" placeholder='Description'/>
                <input type="number" className='box-form' onChange={handleChange} name="Price" placeholder='Price'/>
                <input type="text" className='box-form' onChange={handleChange} name="Img" placeholder='Img URL'/>
                <button onClick={handleClick} className='box-form submit-btn'>Submit</button>
        </div>
      

);
};


export default Addproducts