const axios = require('axios')


const getClima = async(lat, lng) => {
    
    const instance = axios.create({
        baseURL: `https://community-open-weather-map.p.rapidapi.com/weather?units=metric&lon=${lng}&lat=${lat}`,
        headers:{
            "x-rapidapi-key": "91b149c105msha07d0beecab78d1p198063jsn559e74707c83",
            "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
            "useQueryString": true
        }
    })

    const resp = await instance.get()

    return resp.data.main.temp
} 


module.exports = {
    getClima
}