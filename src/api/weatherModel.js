import Clear from "./../assest/Clear.png";
// import Hail from "./../assets/Hail.png";
import HeavyCloud from "./../assest/HeavyCloud.png";
import HeavyRain from "./../assest/HeavyRain.png";
import LightCloud from "./../assest/LightCloud.png";
import LightRain from "./../assest/LightRain.png";
import Shower from "./../assest/Shower.png";
import Sleet from "./../assest/Sleet.png";
import Snow from "./../assest/Snow.png";
import Thunderstorm from "./../assest/Thunderstorm.png";

export const WeatherStates = (Abbreviation) => {
    const WEATHER_STATES = {
        'light snow': Snow,
        'heavey snow': Snow,
        'snow': Snow,
        'rain and snow':Sleet,
        'rain and thunder':Thunderstorm,
        'thunder and rain':Thunderstorm,
        'heavy rain': HeavyRain,
        'moderate rain': HeavyRain,
        'light rain': LightRain,
        Shower,
        'overcast clouds': HeavyCloud,
        'broken clouds': LightCloud,
        'scattered clouds': LightCloud,
        'sky is clear':Clear,
        'few clouds':Clear
    };
    return WEATHER_STATES[Abbreviation];
};

