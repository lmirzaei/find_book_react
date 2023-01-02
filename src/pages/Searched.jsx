import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom';
import styled from 'styled-components';

function Searched() {
  const [searchedBooks, setSearchedBookks] = useState([]);
  let params = useParams();

  const getSearched = async (name) => {
    const api = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${name}&maxResults=20`);
    const data = await api.json();
    setSearchedBookks(data.items);
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
            <Link to={"/book/"+ book.volumeInfo.id}>
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
`;

export default Searched