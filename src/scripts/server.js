const express = require('express');
const app = express();
const PORT = process.env.PORT;

app.get('/', (req, res)=>{
    res.send(
        '<h2>ok</h2>'
    )
})

app.listen(PORT, ()=>{
    console.log('server is running');
})

