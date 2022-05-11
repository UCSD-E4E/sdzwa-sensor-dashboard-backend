const express = require('express');
const routes = require('./routes/users');

const app = express();
const port = 5000;

app.use(express.json());

app.use('/', routes); // to use routes

// app.get('/', (req, res) => {
    // res.send('Hello World!');
// })

// app.use('/api/sensor', require('./routes/sensor'));
// app.use('/api/post', require('./routes/post'));

app.listen(port, () => {
    console.log('Server is running on port 5000. Docker on 41960');
})

