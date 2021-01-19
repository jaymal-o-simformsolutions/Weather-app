const request = require('request')


  const geolocation = (adderess,callback)=>{
       const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${adderess}.json?access_token=pk.eyJ1IjoiamF5bWFsMTEiLCJhIjoiY2tqeHphbTZ5MHRoOTJvbWxqZzBteWlwbCJ9.d_xTOSbEJLrs9JSns8O0vw&limit=1`
       request({url,json:true},(error,{body})=>{
        if(error){
            callback('unable to connect',undefined)
        }else if(body.features.length === 0){
            callback('unable fetch weather data',undefined)
        }else{
              callback(undefined,{
                latitude:body.features[0].center[0],
                longitude:body.features[0].center[1],  
                location:body.features[0].text
              })
        }
       })


  }

  module.exports = geolocation