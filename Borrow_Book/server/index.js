const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

//Middleware

app.use(bodyParser.json());
app.use(cors());

const posts = require('./routes/api/posts');

app.use('/api/posts',posts);

app.use('/',(req , res) => {
    res.send('<h1>This is Home page</h1>') 
});

const port = process.env.PORT || 5000;

app.listen(port,() => console.log(`Server listen on port ${port}`));


