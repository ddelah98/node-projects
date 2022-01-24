const request = require('request');

const forecast = (logitude, latitude, callback) => {
const url = 'http://api.weatherstack.com/current?access_key=c14e90871493aea185b797232b08bdf7&query=' + latitude + ',' + logitude +'&units=f'

request({url, json:true}, (error, response) =>{
    if(error){
        callback('Unable to connect to weather service')
    }else if(response.body.error){
        callback('Unable to find location')
    }else{
        callback(undefined, {
            description: response.body.current.weather_descriptions,
            temperature: response.body.current.temperature
        })
    }
 })
}

module.exports = forecast
