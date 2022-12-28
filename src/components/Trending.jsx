import { useEffect, useState } from "react";
import styled from "styled-components";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

function Trending() {
    const [trending, setTrending] = useState([]);

    useEffect(() => {
        getTrending();
    }, []);

    const getTrending = async () => {
        const check = localStorage.getItem('trending'); // check to see if trending is already in the local storage
        if (check) {
            setTrending(JSON.parse(check)); // Local storage saves data only in String format, not array or list format.
        }
        else {

            const api = await fetch('https://www.googleapis.com/books/v1/volumes?q=flowers');
            const data = await api.json();
            localStorage.setItem("trending", JSON.stringify(data.items));
            setTrending(data.items);
            console.log(data);
        }


    };

    return (
        <div>
            <Wrapper>
                <h3>Trending Books</h3>

                <Splide options={{
                    perPage: 5,
                    arrows: false,
                    pagination: true,
                    drag: "free",
                    gap: "0.5rem"
                }} >
                    {trending.map((book) => {
                        return (
                            <SplideSlide key={book.id}>
                                <Card>
                                    <p>{book.volumeInfo.title}</p>
                                    <img src={book.volumeInfo.imageLinks.smallThumbnail} alt={book.volumeInfo.title} />
                                    < Gradient />
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
        min-height: 25rem;
        border-radius: 1rem;
        background: #c6f5e3;
        overflow: hidden;
        position: relative;
        img{
            border-radius:3rem;
            position: absolute;
            top: 40px;
            left: 0px;
            width: 100%;
            height: 100%;
            object-fit: contain;
        }
        p{
            position: absolute;
            z-index: 10;
            left: 50%;
            right:50%;
            bottom: 0%;
            transform: translate(-50%, 0%);
            color: White;
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


export default Trending