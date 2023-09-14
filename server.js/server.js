const express = require('express');

const api = express();

 

api.get('/api/teste', (request, response) => {

    response.send('teste')

})

api.listen(3001, () => console.log('api teste'));