import React from 'react';
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Button = styled(Link)`
    width: 160px;
    text-align: center;
    text-decoration: none;
    height: 40px;
    background: #6E707A;
    font-size: 16px;
    line-height: 40px;
    color: #E7E7EB;
    font-weight: 700;
    border: none;
    cursor: pointer;
    transition: background-color 0.2s;
    &:hover {
        background-color: rgba(74,75,82);
    }
`

const ShowSearch = () => {
    return <Button to="/search">Seach for places</Button>;
};

export default ShowSearch;
