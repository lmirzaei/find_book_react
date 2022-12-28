import { useEffect, useState } from "react";
import styled from "styled-components";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

function Popular() {
    const [popular, setPopular] = useState([]);

    useEffect(() => {
        getPopular();
    }, []);

    const getPopular = async () => {
        const api = await fetch('https://www.googleapis.com/books/v1/volumes?q=quilting');
        const data = await api.json();
        console.log(data);

        setPopular(data.items);
    };

    return (
        <div>
            <Wrapper>
                <h3>Popular Books</h3>

                <Splide options={{
                    perPage: 5,
                    arrows: false,
                    pagination: true,
                    drag: "free",
                    gap: "0.5rem"
                }} >
                    {popular.map((book) => {
                        return (
                            <SplideSlide key={book.id}>
                                <Card>
                                    <p>{book.volumeInfo.title}</p>
                                    <img src={book.volumeInfo.imageLinks.smallThumbnail} alt={book.volumeInfo.title} />
                                    < Gradient/>
                                </Card>
                            </SplideSlide>
                        );
                    })}

                </Splide>

            </Wrapper>

        </div>
    )
}

const Wrapper = styled.div`margin: 4rem 0 rem;`;

const Card = styled.div` 
        min-height: 15rem;
        border-radius: 1rem;
        background: #f2bbe6;
        padding: 1rem;
        margin: 1rem;
        overflow: hidden;
        position: relative;
        img{
            border-radius:3rem;
            position: absolute;
            top: 40px;
            left: 10px;
            width: 100%;
            height: 70%;
            object-fit: contain;
        }
        p{
            position: absolute;
            z-index: 10;
            left: 50%;
            right:50%;
            bottom: 0%;
            transform: translate(-50%, 0%);
            color: Blue;
            width: 90%;
            text-algin: center;
            font-weight: 600;
            font-size: 1rem;
            height: 40%;
            display: flex;
            justify-content: center;
            align-items: center;
        }
`;

const Gradient = styled.div`
            z-index: 3;
            position: absolute;
            width: 100%;
            height: 100%;
            background: linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0.5));
            `;

export default Popular