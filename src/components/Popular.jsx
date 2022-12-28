import { useEffect } from "react";

function Popular(){
    useEffect(() => {
        getPopular();
    },[]);

    const getPopular = async() =>
    {
        const api = await fetch('https://www.googleapis.com/books/v1/volumes?q=quilting');
        const data = await api.json();
        console.log(data);
    }
    return (
        <div>Popular</div>
    )
}
export default Popular