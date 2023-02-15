const path = require('path')
const express = require('express')

// console.log(__dirname) // tells the folder name
// console.log(__filename) // tells the file name
const app= express()
const publicDirectoryPath= path.join(__dirname, '../public')

app.use(express.static(publicDirectoryPath))



app.get('/weather',(req,res)=>{
    res.send({
        'forecast':'It is sunny',
        'location':'India'
        })
})

app.listen(3000,()=>{
    console.log('server is up on port 3000')
})