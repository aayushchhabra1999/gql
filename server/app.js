const express = require('express');

const app = express();

app.listen(4000, ()=>{
    console.log('Listening for requests on 4000');
})