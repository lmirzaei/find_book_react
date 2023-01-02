import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

function Searched() {
  const [searchedBooks, setSearchedBookks] = useState([]);
    let params = useParams();

    const getSearched = async (name) => {
        const api = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${name}`);
        const data = await api.json();
        setSearchedBookks(data.items);
    };

    // use effect invokes the `getSearched` function.
    useEffect(() => {
      getSearched(params.search)
    }, [params.search]);

    return (
        <div>
            {searchedBooks.map((book) => {
                return (
                    <div key={book.id}>
                        <img src={book.volumeInfo.imageLinks.smallThumbnail} alt={book.volumeInfo.title} />
                        <h4>{book.volumeInfo.title}</h4>
                    </div>
                );
            })}
        </div>
    )
}

export default Searched