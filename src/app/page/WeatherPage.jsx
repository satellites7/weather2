import React,{useContext} from 'react';
import WeatherContext from '../context/context';
import Sider from '../component/Layout/Sider';
import ShowSearch from '../component/Button/ShowSearch';
import RoundButton from '../component/Button/RoundButton';
import styled from 'styled-components'
import {IoLocationSharp} from 'react-icons/io5';
import { WeatherStates } from '../../api/weatherModel';


const Img = styled.img`
  width: 230px;
  height: 230px;
`
const Box = styled.div`
  width: 80%;
  height: 90%;
  margin: 42px auto 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  .top {
    width: 100%;
    display:flex;
    justify-content: space-between;
  }
  .middle {
    font-weight: 800;
    font-size: 144px;
    line-height: 169px;
    color: #E7E7EB;
    span {
      font-size:48px;
      color: #A09FB1;
      font-weight: 500;
    }
  }
  p {
    font-size: 36px;
    font-weight:bold;
    line-height: 42px;
    text-align: center;
    color: #A09FB1;
  }
  .bottom {
    font-size: 20px;
    color:#88869D;
    font-weight: bold;
    div {
      text-align: center;
      margin-top: 30px;
    }
  }
`


const WeatherPage = () => {
  const {weather,time,tempType} = useContext(WeatherContext)
  const {city,list} = weather;
  return (
    <Sider>
      <Box>
        <div className='top'>
          <ShowSearch />
          <RoundButton type='location' />
        </div>
        <Img src={WeatherStates(list[0].weather[0].description)} />
        <span className='middle'>{Math.round(list[0].temp.day)}<span>{tempType}</span></span>
        <p>{list[0].weather[0].description}</p>
        <div className="bottom">
          <span>Today • {time[0].week}, {time[0].day} {time[0].month}</span>
          <div>
            <IoLocationSharp /> <span>{city.name}</span>
          </div>
        </div>
      </Box>
    </Sider>
  );
};

export default WeatherPage;
