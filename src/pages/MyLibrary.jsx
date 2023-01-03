import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

function MyLibrary() {
    const [mylibrary, setMyLibrary] = useState([]);
    let params = useParams();

    const getMyLibrary = async (name) => {
        const api = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${name}&printType=books`);
        const data = await api.json();
        setMyLibrary(data.items);
    };

    // use effect invokes the `getMyLibrary` function.
    useEffect(() => {
        getMyLibrary(params.type)
        console.log(params.type);
    }, [params.type]);

    return (
        <Grid>
            {mylibrary.map((book) => {
                return (
                    <Card key={book.id}>
                        <img src={book.volumeInfo.imageLinks.smallThumbnail} alt={book.volumeInfo.title} />
                        <h4>{book.volumeInfo.title}</h4>
                    </Card>
                );
            })}
        </Grid>
    )
}

const Grid = styled.div`
    display:grid;
    grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
    grid-gap: 3rem;
}`;

const Card = styled.div`
    img{
        width:100%;
        border-radius:2rem;
    }
    a{
        text-decoration:none;
    }
    h4{
        text-align: center;
        padding:1rem;
    }
`;



export default MyLibrary