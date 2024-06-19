const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')));


app.get('/', (req, res)=>{
    const dirName = path.join(__dirname, 'index.html')
    fs.readFile(dirName, (err, data) => {
        if(err){
            throw new Error(err);
        }
        res.write(data);
    });
})

app.get('/audio', (req, res) => {
    const folderPath = path.join(__dirname, 'public', 'audio');
    console.log(folderPath)
    fs.readdir(folderPath, (err, files) => {
        if (err) {
            return res.status(500).json({ error: 'Could not read list of songs' });
        }
        files.map(fileName => {
            console.log(fileName);
        })
        const songs = files.map(fileName => {
            return {
                path: `${encodeURIComponent(fileName)}`,
                name: fileName
            };
        });
        res.json({result: songs});
    });
});

app.listen(PORT, ()=>{
    console.log(`server is running on http://localhost:${PORT}`);
})

