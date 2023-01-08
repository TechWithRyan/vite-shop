import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Addproducts.css';

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
}
const handleClick = async (e) => {
    e.preventDefault();
    try {
        await axios.post("http://localhost:8080/products", products);
        navigate("/Store");
    } catch (err) {
        console.log(err);
        setError(true)
    }

    return (
        <div>
            <div className='box-form'>
                Banan
                <input type="text" onChange={handleChange} name="Title" />
                <textarea type="text" row={5} onChange={handleChange} name="Description" />
                <input type="number" onChange={handleChange} name="Price" />
                <input type="text" onChange={handleChange} name="Img" />
                <button onClick={handleClick}>Submit</button>
            </div>
        </div>

    );
};


export default Addproducts