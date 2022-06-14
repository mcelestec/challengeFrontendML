const express = require('express');
require('dotenv').config();
var cors = require('cors');

// crear el servidor de express
const app = express();

// CORS 
app.use('/api', cors());

// rutas
app.use('/api/items', require('./routes/items'));

// escuchar peticiones
app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`);
})