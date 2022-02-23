import React, { useEffect, useState } from 'react';
import getTime from '../../api/getTime';
import getWeather from '../../api/getWeather';
import getLocation from '../../api/getLocation';



const WeatherContext = React.createContext({})
export const WeatherContextProvider = ({ children }) => {
    const [weather, setWeather] = useState('');
    const [location, setLocation] = useState('');
    const [tempType, setTimeType] = useState('℃');
    const [loading, setLoading] = useState(false);
    const [enter, setEnter] = useState('')
    const [searchData, setSearchData] = useState('')
    const { list } = weather;
    const time = weather ? getTime(weather.list[0].dt) : '';
    const handleC = () => {
        if (tempType === '℃') {
            setTimeType('℉');
            for (let item of list) {
                item.temp.day = Math.round(1.8 * item.temp.day + 32);
                item.temp.min = Math.round(1.8 * item.temp.min + 32);
                item.temp.max = Math.round(1.8 * item.temp.max + 32);
            }
        }
    };
    const handleF = () => {
        if (tempType === '℉') {
            setTimeType('℃');
            for (let item of list) {
                item.temp.day = Math.round((item.temp.day - 32) / 1.8);
                item.temp.min = Math.round((item.temp.min - 32) / 1.8);
                item.temp.max = Math.round((item.temp.max - 32) / 1.8);
            }
        }
    };
    const getCurrentLocationWeather = async () => {
        setLoading(true)
        let weatherData = await getWeather(location);
        weatherData && setLoading(false);
        setWeather(weatherData)
    };

    useEffect(() => {
        (async function () {
            let locationData = await getLocation();
            setLocation(locationData);
            let weatherData = await getWeather(locationData);
            setWeather(weatherData)
        })()
    }, []);
    return (
        <WeatherContext.Provider value={{
            weather, tempType, location, time, loading, enter, searchData,
            setWeather,setEnter, getCurrentLocationWeather, setSearchData, handleC, handleF
        }}>
            {children}
        </WeatherContext.Provider>
    )
};

export default WeatherContext;