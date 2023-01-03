import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom';
import styled from 'styled-components';

function Searched() {
  const [searchedBooks, setSearchedBooks] = useState([]);
  let params = useParams();

  const getSearched = async (name) => {
    const api = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${name}&maxResults=20&printType=books`);
    const data = await api.json();
    setSearchedBooks(data.items);
  };

  // use effect invokes the `getSearched` function.
  useEffect(() => {
    getSearched(params.search)
  }, [params.search]);

  return (
    <Grid>
      {searchedBooks.map((book) => {
        return (
          <Card key={book.id}>
            <h1>{book.id}</h1>
            <Link to={"/book/" + book.id}>
              <img src={book.volumeInfo.imageLinks.smallThumbnail} alt={book.volumeInfo.title} />
              <h4>{book.volumeInfo.title}</h4>
            </Link>
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
    h1{
      text-align: center;
      padding:1rem;
      color: red;
  }
`;

export default Searched