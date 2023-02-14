//request is depricated
const request = require('postman-request')

const url='http://api.weatherstack.com/current?access_key=1417c02c8c6a138f7d82973dd11b6b78&query=37.8267,-122.4233'

request({ url:url, json:true},(error, response)=>{
    // console.log(data.current)
    console.log("It is currently "+ response.body.current.temperature +" degress out. It feels like "+ response.body.current.feelslike+" degree" )
})