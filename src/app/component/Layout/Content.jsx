import React, { useContext } from 'react';
import WeatherContext from '../../context/context';
import RoundBtn from '../Button/RoundButton';
import Card from '../Card';
import styled from 'styled-components'
import { FaLocationArrow } from 'react-icons/fa';
import { WeatherStates } from '../../../api/weatherModel';


const Main = styled.div`
  min-width: 70%;
  height: 900px;
  background-color: #100E1D;
  @media (max-width: 960px) {
    height: 100%;
  }
  .round {
    margin-right: 10px;
    display: inline-block;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: #A09FB1;
    svg {
      color:#E7E7EB;
      font-size: 12px;
      transform: translateY(2px);
    }
  }
  .top {
    display: flex;
    gap: 12px;
    align-self: flex-end;
    margin-top: 30px;
    @media (max-width: 960px) {
    display: none;
  }
  }
  .box {
    width: 80%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
  }
  .middle {
    gap:20px;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    @media (max-width: 960px) {
    margin-top: 40px;
  }
  }
  .title {
    font-weight:900;
    font-size: 24px;
    line-height: 28px;
    color: #E7E7EB;
  }
  .highlights {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 48px 0;
  }
  .footer {
    color: #A09FB1;
    text-align: center;
    /* transform: translateY(30px); */
    @media (max-width: 960px) {
    margin-top: 30px;
  }
  }
  .item {
    font-weight: 900;
    font-size: 16px;
    line-height: 19px;
    text-align: center;
    color: #E7E7EB;
    span {
      color: #A09FB1;
      margin-left: 10px;
    }
  }
  .lgItem {
    margin: 0;
    text-align: center;
    font-weight: 900;
    font-size: 64px;
    line-height: 75px;
    color: #E7E7EB;
    span {
      font-size: 36px;
    }
  }
  img {
    display: block;
    width: 70px;
    height: 70px;
    margin: 0 auto;
    transform: translateY(-5px);
  }
  .sign {
    width: 250px;
    display: flex;
    justify-content:space-between ;
    font-weight: bold;
    font-size: 12px;
    line-height: 14px;
    text-align: center;
    color: #A09FB1;
    margin: 5px auto;
  }
  .bar {
    margin: 0px auto 0;
    width: 250px;
    height: 10px;
    background-color: #E7E7EB;
    border-radius: 80px;
    .inside {
      width: ${props => props.num * 2.5}px;
      height: 100%;
      background-color: #FFEC65;
      border-radius: 80px;
    }
  }
`

const Content = () => {
  const { weather, time, tempType } = useContext(WeatherContext);
  const { list } = weather;
  return (
    <>
      <Main num={list[0].humidity}>
        <div className="box">
          <div className="top">
            <RoundBtn type='celsius' />
            <RoundBtn type='Fahrenheit' />
          </div>
          <div className="middle">
            <Card>
              <p className="item">Tomorrow</p>
              <img src={WeatherStates(list[1].weather[0].description)} alt="" />
              <p className="item">{Math.round(list[1].temp.max)}{tempType} <span>{Math.round(list[1].temp.min)}{tempType}</span></p>
            </Card>
            {list.slice(2).map((item, index) => {
              return (
                <Card key={index}>
                  <p className="item">{time[index + 2].week}, {time[index + 2].day} {time[index + 2].month}</p>
                  {/* <img src={img} alt="" /> */}
                  <img src={WeatherStates(item.weather[0].description)} alt="" />
                  <p className="item">{Math.round(item.temp.max)}{tempType} <span>{Math.round(item.temp.min)}{tempType}</span></p>
                </Card>
              )
            })}
          </div>
          <div>
            <p className="title">
              Today’s Hightlights
            </p>
            <div className="highlights">
              <Card mode='h1'>
                <p className="item">Wind status</p>
                <p className="lgItem">{list[0].speed}<span>mph</span></p>
                <p className="item"><span className="round"><FaLocationArrow /></span>wsw</p>
              </Card>
              <Card mode='h1'>
                <p className="item">Humidity</p>
                <p className="lgItem">{list[0].humidity}<span>%</span></p>
                <p className="sign"><span>0</span><span>50</span><span>100</span></p>
                <div className="bar">
                  <div className="inside"></div>
                </div>
                <p className="sign" style={{ justifyContent: 'flex-end' }}>%</p>
              </Card>
              <Card mode='h2'>
                <p className="item">Pop</p>
                <p className="lgItem">{list[0].pop * 100}%</p>
              </Card>
              <Card mode='h2'>
                <p className="item">Air Pressure</p>
                <p className="lgItem">{list[0].pressure}<span>mb</span></p>
              </Card>
            </div>
          </div>
          <p className='footer'>created by <span style={{ fontWeight: 700 }}>satellites7</span> - devChallenges.io</p>
        </div>
      </Main>
    </>
  );
};

export default Content;
