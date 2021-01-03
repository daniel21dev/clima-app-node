const { getClima } = require('./clima/clima')
const {getLugarLatLng} = require('./lugar/lugar')

const argv = require('yargs').options({
    direccion:{
        alias: 'd',
        desc: 'Direccion de la ciudad para obtener el clima',
        demand: true
    }
}).argv
/*
getLugarLatLng( argv.direccion )
    .then( console.log ) 

getClima( 40.750000, -74.000000)
    .then( console.log )
    .catch( console.log ) */

getInfo = async( direccion ) => {
    
    const {lat,lng} = await getLugarLatLng( argv.direccion )
    
    if( !lat || !lng){
        throw new Error(`no se encontro ${ direccion }`)
    }
    const temperatura = await getClima(lat, lng)

    if( !temperatura ){
        throw new Error(`no hay datos de temperatura para ${ direccion }`)
    }

    return `la temperatura en ${direccion} es ${temperatura} C°`
    
}

getInfo( argv.direccion )
    .then( console.log )
    .catch( console.log ) 
