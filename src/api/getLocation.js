import axios from "axios";
const options = {
  method: 'GET',
  url: '/backend/ws/location/v1/ip?key=S6OBZ-JHPK6-5UCSA-ES6WQ-56OT3-ZDFA4'
};

 const getLocation = async () => {
        let data  = await axios.request(options).then(function (response) {
            return response.data.result.location;
        }).catch(function (error) {
            console.error(error);
        });
        return data
    }

export default getLocation
