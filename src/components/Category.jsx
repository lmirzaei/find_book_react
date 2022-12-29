import { GiFlowerPot } from 'react-icons/gi';
import { IoIosHome } from 'react-icons/io';
import { MdOutlineFavorite, MdCategory, MdFavorite } from 'react-icons/md';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import React from 'react'

function Category() {
    return (
        <List>
            <div>
                <MdFavorite />
                <h4>Favorite</h4>
            </div>

            <div>
                <GiFlowerPot />
                <h4>Flowers</h4>
            </div>

            <div>
                <IoIosHome />
                <h4>Home</h4>
            </div>
        </List>
    )
}

const List = styled.div`
    display:flex;
    justify-content: center;
    margin: 2rem 0rem;
`;

export default Category
