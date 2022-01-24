const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')


geocode('Boston', (error, data) => {
    console.log('Error: ' , error);
    console.log('Data', data);
})

forecast(-71.059,42.3605, (error, data) =>{
    console.log('Error: ' , error);
    console.log('Data', data);
})