const request = require('request')

const forcast = (latitude,longitude,callback)=>{
    request({url:`http://api.weatherstack.com/current?access_key=773c3c9ff4aa40eec52e453b6412429d&query=${latitude},${longitude}`,json:true},(error,{body})=>{
   if(error){
       callback('unable to connect',undefined)
   }else if(body.error){
       callback(body.error.info,undefined)
   }else{
         callback(undefined,body.current.temperature) 
   }
})  
}

module.exports = forcast