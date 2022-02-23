import React,{useContext} from 'react';
import WeatherContext from '../../context/context';
import styled from 'styled-components'
import getWeather from '../../../api/getWeather';

const Button = styled.button`
    transform: translateY(-1px);
    padding:14px;
    background: #3C47E9;
    font-weight: 600;
    font-size: 16px;
    /* line-height: 19px; */
    color: #E7E7EB;
    border: none;
    cursor: pointer;
    transition: background-color 0.2s;
    &:hover {
        background-color: #1d39c4;
    }
`

const SearchButton = (props) => {
  const {enter,setSearchData} = useContext(WeatherContext);
  const {setList} = props;
  let arr = []
  const handleSubmit = async () => {
    let weatherData = await getWeather('',enter)
    weatherData && arr.push(enter) && setList(arr);
    weatherData && setSearchData(weatherData);
  };
  
  return <Button onClick={handleSubmit}>Search</Button>;
};

export default SearchButton;
