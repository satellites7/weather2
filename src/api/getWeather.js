import axios from "axios";
const getOptions = (location, name) => {
  if (name) {
    return {
      method: 'GET',
      url: 'https://community-open-weather-map.p.rapidapi.com/forecast/daily',
      params: { q: name, cnt: '6', units: 'metric' },
      headers: {
        'x-rapidapi-host': 'community-open-weather-map.p.rapidapi.com',
        'x-rapidapi-key': 'a0ff0abb43mshc390319bd673b37p1ebca8jsne3a2cea4fea7'
      }
    };
  } else {
    return {
      method: 'GET',
      url: 'https://community-open-weather-map.p.rapidapi.com/forecast/daily',
      params: {
        lat: location.lat,lon: location.lng, cnt: '6', units: 'metric'
      },
      headers: {
        'x-rapidapi-host': 'community-open-weather-map.p.rapidapi.com',
        'x-rapidapi-key': 'a0ff0abb43mshc390319bd673b37p1ebca8jsne3a2cea4fea7'
      }
    };
  }

};

const getWeather = async (location, name) => {
  let options = getOptions(location,name);
  let data = await axios.request(options).then(function (response) {
    return response.data;
  }).catch(function (error) {
    console.error(error);
    alert('havent find this place')
  });
  return data
};
export default getWeather



