import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Update = () => {
    const [book, setBook] = useState({
        title: "",
        desc: "",
        price: "",
        cover: "",
    });

    const navigate = useNavigate();
    const location = useLocation();
    const bookId = location.pathname.split("/")[2];

    // Ambil data buku berdasarkan ID
    useEffect(() => {
        const fetchBook = async () => {
            try {
                const res = await axios.get(`http://localhost:8800/books/${bookId}`);
                setBook(res.data);
            } catch (err) {
                console.log(err);
            }
        };
        fetchBook();
    }, [bookId]);

    const handleChange = (e) => {
        setBook((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleClick = async (e) => {
        e.preventDefault();
        try {
            await axios.put(`http://localhost:8800/books/${bookId}`, book);
            navigate("/");
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div className="form">
            <h1>Update This Book</h1>
            <input
                type="text"
                placeholder="title"
                onChange={handleChange}
                name="title"
                value={book.title || ""}
            />
            <input
                type="text"
                placeholder="desc"
                onChange={handleChange}
                name="desc"
                value={book.desc || ""}
            />
            <input
                type="number"
                placeholder="price"
                onChange={handleChange}
                name="price"
                value={book.price || ""}
            />
            <input
                type="text"
                placeholder="cover"
                onChange={handleChange}
                name="cover"
                value={book.cover || ""}
            />

            <button onClick={handleClick} className="formButton">
                Update
            </button>
        </div>
    );
};

export default Update;
