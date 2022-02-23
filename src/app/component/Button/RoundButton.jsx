import React,{useContext} from 'react';
import styled from 'styled-components'
import WeatherContext from '../../context/context';
import { BiCurrentLocation } from 'react-icons/bi';


const RoundIcon = styled.div`
    font-weight: bold;
    font-size: 18px;
    line-height: 21px;
    width: 40px;
    height: 40px;
    background-color: ${props => props.type === 'celsius' ? '#E7E7EB' : '#6E707A'};
    color:${props => props.type === 'celsius' ? '#110E3C' : '#E7E7EB'};
    border-radius: 50%;
    display: flex;
    justify-content: center;
    transition: background-color 0.3s;
    cursor: pointer;
    &:hover {
        background-color: ${props => props.type === 'celsius' ? 'rgba(189,189,200)' : 'rgba(74,75,82)'};
    }
    .icon {/*  */
        width: 25px;
        height: 25px;
        align-self: center;
    }
    .symbol {
        width: 25px;
        height: 25px;
        align-self: center;
        margin-top: 5px;
        margin-left: 5px;
    }
`

const RoundButton = ({ type }) => {
    const {handleC,handleF,getCurrentLocationWeather} = useContext(WeatherContext);
    // handleC()
    let inside = ''
    switch (type) {
        case 'location':
            inside = <BiCurrentLocation className='icon' onClick={getCurrentLocationWeather}/>
            break;
        case 'celsius':
            inside = <span className='symbol' onClick={handleF}>℃</span>
            break;
        case 'Fahrenheit':
            inside = <span className='symbol' onClick={handleC}>℉</span>
            break;
        default:
            break;
    }

    return (
        <RoundIcon type={type}>
            {inside}
        </RoundIcon>
    );
};

export default RoundButton;
