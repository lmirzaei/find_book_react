import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

function Book() {
    const [book, setBook] = useState([]);
    let params = useParams();

    const getBook = async (book) => {
        // console.log(book)
        const api = await fetch(`https://www.googleapis.com/books/v1/volumes/${book}`);
        const bookDetails = await api.json();
        console.log(bookDetails);
        setBook(bookDetails);
    };
    // useEffect invokes the `getBook` function.
    useEffect(() => {
        getBook(params.id)
    }, [params.id]);

    return (
        <div>
            <h1>This is a book details page!</h1>
        </div>
    )
}

export default Book