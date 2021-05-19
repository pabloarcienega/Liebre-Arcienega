const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;
const publicPath = path.resolve(__dirname, './public');
app.use(express.static(publicPath));
app.get('/', (req, res) => {
    //console.log(path.resolve(__dirname, './views/home.html'));
    res.sendFile(path.resolve(__dirname, './views/home.html'))
    //res.send('Hola mundo');

})

app.listen(3000, ()=>{console.log('Server running en http://localhost:${port}')});

