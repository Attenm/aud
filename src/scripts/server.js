const express = require('express');
const fs = require('fs');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res)=>{
    fs.readFile('../../index.html', (err, data)=>{
        try{
            res.send(data)
        } catch(err){
            throw new Error('something is wrong, 11');
        }
    })
})
app.get('/text', (req, res)=>{
    res.send(
        '<h2>ok</h2>'
    )
})

app.listen(PORT, ()=>{
    console.log(`server is running on http://localhost:${PORT}`);
})

