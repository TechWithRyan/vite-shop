import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Addproducts.css';
import axios from 'axios';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { Link } from 'react-router-dom';

const Addproducts = () => {

    const [products, setProducts] = useState({
        Title: "",
        Description: "",
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


console.log(products);
    return (
        <div>
                <input type="text" className='box-form' onChange={handleChange} name="Title" placeholder='Title' />
                <input type="number" className='box-form' onChange={handleChange} name="Price" placeholder='Price'/>
                <input type="text" className='box-form' onChange={handleChange} name="Img" placeholder='Img URL'/>
                <textarea type="textarea" row={5} onChange={handleChange} name="Description" placeholder='Description'/>
                <button className='box-form submit-btn' onClick={handleClick}>Submit</button>
                <Link ><DeleteForeverIcon /></Link>
        </div>

);
};

export default Addproducts