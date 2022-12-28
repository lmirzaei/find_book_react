import { useEffect, useState } from "react";
import styled from "styled-components";

function Popular(){
const [popular, setPopular] = useState([]);

    useEffect(() => {
        getPopular();
    },[]);

    const getPopular = async() =>
    {
        const api = await fetch('https://www.googleapis.com/books/v1/volumes?q=quilting');
        const data = await api.json();
        console.log(data);

        setPopular(data.items);
    };

    return  <div>
            { popular.map ( (book) => {
                        return (
                        // <div key={book.id}>
                        //     <p>
                        //         {book.volumeInfo.title}
                        //     </p>
                        // </div>
                        <Wrapper>
                            <h3>Popular Books</h3>
                            {popular.map((book) => {
                                return(
                                    <Card>
                                        <p>{book.volumeInfo.title}</p>
                                        <img src={book.volumeInfo.imageLinks.smallThumbnail} alt={book.volumeInfo.title} />
                                    </Card>
                                );
                            })}
                        </Wrapper>
                        )
            })}
        </div>;
    
}

const Wrapper = styled.div`margin: 4rem 0 rem;`;

const Card = styled.div` 
        min-height: 25 rem;
        border-radius: 3rem;
        background: #f2bbe6;
        padding: 1rem;
        margin: 1rem;
        overflow: hidden;
        img{
            border-radius:1rem;
        }
`;

export default Popular