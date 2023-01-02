import { GiFlowerPot } from 'react-icons/gi';
import { IoIosHome } from 'react-icons/io';
import { MdFavorite } from 'react-icons/md';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import React from 'react'

function Category() {
    return (
        <List>
            <SLink to={"/mylibrary/favorite"}>
                <MdFavorite />
                <h4>Favorite</h4>
            </SLink>

            <SLink to={"/mylibrary/flower"}>
                <GiFlowerPot />
                <h4>Flowers</h4>
            </SLink>

            <SLink to={"/"}>
                <IoIosHome />
                <h4>Home</h4>
            </SLink>
        </List>
    )
}

const List = styled.div`
    display:flex;
    justify-content: center;
    margin: 2rem 0rem;
`;
const SLink = styled(NavLink)`
    display: flex;
    flex-direction: column;
    justify-content:center;
    align-items:center;
    border-radius:50%;
    margin-right:4rem;
    text-decoration:nine;
    background: linear-gradient(35deg, #494949, #313131);
    width:6rem;
    height:6rem;
    cursor:pointer;
    transform: scale(0.8);

    h4{
        text-align: center;
        font-size:0.8rem;
        color:white;
    }

    svg{
        color: white;
        font-size:3rem;
    }

    &.active{
        background: linear-gradient(to right, #f27121,#e94057);

        svg{
            color: white;
        }

        h4{
            color:white;
        }
    }
    `;

export default Category
