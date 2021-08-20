const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const { mongoose } = require('./database');

const app = express();

// Settings
app.set('port', process.env.PORT || 3000);

// Middlewares
app.use(morgan('dev')); //morgan nos dice el tipo de peticiones que vienen al servidor y el resultado, resupuesta... AYUDA PETICIONS HTTP
app.use(cors());//permite comunicar entre puertos diferentes, en nuestro caso la web de angular contra el servidor.
app.use(express.json());//PERMITE que nuestro servidor trabaje con archivos json

// Routes
app.use('/api/series', require('./routes/seriesRoute'));

//Start server
app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'))
});
