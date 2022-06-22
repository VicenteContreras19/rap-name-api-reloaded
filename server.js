const express = require('express')
const app = express()
const PORT = 8000

const rappers = {
    '21 savage': {
    "birthName": 'Sheeya Bin Abraham-Joseph',
    "birthLocation": 'London,UK',
    "birthAge": '29',
},
 
"chance the rapper":{
    "birthName": 'Chancelor Bennett',
    "birthLocation": 'Chicago,Illinois',
    "birthAge": '29',
 },
    'unknown':{
     "birthName": 'unknown',
    "birthLocation": 'unknown',
    "birthAge": 'unknown',

    }
}

app.get('/', (request,response)=>{
    response.sendFile (__dirname + '/index.html')
})




app.listen(PORT,() =>{
    console.log(`Port is now running on port ${PORT} Betta go catch that thang.`)
})

app.get('/api/:name',(request,response)=>{
   const rapperName = request.params.name.toLowerCase()
    if (rappers[rapperName]){
        response.json(rappers[rapperName])
    }else{
        response.json(rappers['unknown'])
    }
})