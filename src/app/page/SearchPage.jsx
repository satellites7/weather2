import React, { useContext, useState } from 'react';
import Sider from '../component/Layout/Sider';
import SearchButton from '../component/Button/SearchButton';
import SearchInput from '../component/SearchInput';
import Close from '../component/Button/Close';
import styled from 'styled-components'

import WeatherContext from '../context/context';


const Fix = styled.div`
    position:fixed;
    width:30%;
    top:0;
    bottom:0;
    /* background: #1E213A; */
    background-image: url(require('../../assest/Cloud-background.png'));
    @media (max-width: 960px) {
    width: 100%;
    position: relative;
  }
    .box {
      display: flex;
      width: 80%;
      flex-direction: column;
      margin: 15px auto 0;
    }
    .top {
      display: flex;
      justify-content: space-between;
      margin-top: 30px;
    }
    span {
      align-self: flex-end;
      cursor: pointer;
    }
    .list {
      margin-top: 10px;
      p {
        display: flex;
        justify-content: space-between;
        font-size: 16px;
        line-height: 19px;
        font-weight: 700;
        color: #E7E7EB;
        padding: 23px;
      }
      span {
        color: #616475;
        display: none;
      }
      &:hover {
        p {
          border: 1px solid #616475;
        }
        span {
          display: block;
        }
      }
    }
`

const SearchPage = () => {
  const {setWeather,searchData} = useContext(WeatherContext);
  const [list, setList] = useState('');

  
  return (
    <Sider>
      <Fix>
        <div className="box">
          <span><Close /></span>
          <div className='top'>
            <SearchInput />
            <SearchButton setList={setList} list={list}/>
          </div>
          { list && list.map((item, index) => {
            return (
              <div className="list" key={index} onClick={() => setWeather(searchData)}>
                <p>{item} <span>→</span></p>
              </div>
            )
          })}
        </div>
      </Fix>
    </Sider>
  );
};

export default SearchPage;
