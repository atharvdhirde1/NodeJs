//request is depricated
const request = require('postman-request')

const url='http://api.weatherstack.com/current?access_key=1417c02c8c6a138f7d82973dd11b6b78&query=37.8267,-122.4233'

request({ url:url},(error, response)=>{
    const data=JSON.parse(response.body)
    console.log(data)
})