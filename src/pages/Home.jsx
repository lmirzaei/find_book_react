import Trending from "../components/Trending";
import Popular from "../components/Popular";

import React from 'react'

function Home() {
  return (
    <div>
        <h1>This is the Home React Page</h1>
        <Popular />
        <Trending />
    </div>
  )
}

export default Home
