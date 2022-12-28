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
                        return (<div key={book.id}>
                            <p>
                                {book.volumeInfo.title}
                            </p>
                        </div>)
            })}
        </div>;
    
}

const Wrapper = styled.div`margin: 4rem 0 rem;`;
export default Popular