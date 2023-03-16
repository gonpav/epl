const express = require('express');

const app = express();

const cors = require("cors");
app.use(cors({
    origin: "*"
}))

app.get('/', (req, res) => {
    console.log('here');
    res.send('all good in home page')
})

app.get('/login', (req, res) => {
    console.log('here');
    res.send('all good in Get /login')
})

// app.get('/logging', (req, res) => {
//     console.log('logging here');
//     res.send('logging')
// })

app.post('./login', (req, res) => {
    res.send('all good')
})

const port = process.env.PORT || 3001;
app.listen(port,  () => console.log(`Twitch auth sample listening on ${port}`));