const axios = require('axios')

const getLugarLatLng = async( dir ) => {
    
    const encodedUrl = encodeURI(dir)

    const instance = axios.create({
        baseURL: `https://wft-geo-db.p.rapidapi.com/v1/geo/cities?namePrefix=${encodedUrl}`,
        headers:{
            "x-rapidapi-key":"91b149c105msha07d0beecab78d1p198063jsn559e74707c83",
            "x-rapidapi-host": "wft-geo-db.p.rapidapi.com",
            "useQueryString": true
        }
    })

    const resp = await instance.get()

    if( resp.data.data.length === 0 ){
        throw new Error(`No hay resultados para ${ dir }`)
    }
    
    const data = resp.data.data[0]
    const {name:direccion, latitude:lat, longitude:lng} = data

    return {
        direccion,
        lat,
        lng
    }
}

module.exports = {
    getLugarLatLng
}
