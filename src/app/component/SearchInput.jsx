import React,{useContext} from 'react';
import styled from 'styled-components'
import {AiOutlineSearch} from 'react-icons/ai';
import WeatherContext from '../context/context';


const Input = styled.div`  
    width: 100%;
    position: relative;
    color:#E7E7EB;
    svg {
        /* color:#E7E7EB;    */
        position: absolute;
        top: 14px;
        left: 10px;
        height: 17px;
        width: 17px;
    }
    input {
        width: 95%;
        font-family: sans-serif;
        padding: 12px 20px 12px 35px;
        background: #1E213A;
        border: 1px solid #E7E7EB;
        font-weight: 500;
        font-size: 16px;
        line-height: 19px;
        color:#E7E7EB;
        &:focus {
        outline: none;
        border: 1px solid #fffb8f;
    }
    }
`

const SearchInput = () => {
    const {enter, setEnter} = useContext(WeatherContext);
    return (
      <Input>
          <AiOutlineSearch />
          <input  placeholder='search location' value={enter} onChange={(e) => {setEnter(e.target.value)}}/>
      </Input>
  );
};

export default SearchInput;
