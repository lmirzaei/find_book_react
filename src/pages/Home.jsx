import Trending from "../components/Trending";
import Popular from "../components/Popular";

import React from 'react';

function Home() {
  return (
    <div>
        <h3>This is the Home of a React Page to display books from Google Books API</h3>
        <Popular />
        <Trending />
    </div>
  )
}

export default Home
