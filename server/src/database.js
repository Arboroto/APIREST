const mongoose = require('mongoose');

const URI = 'mongodb+srv://root:root@cluster0.zz47w.mongodb.net/SeriesDB?retryWrites=true&w=majority';
const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
};

mongoose.connect(URI)
.then(db =>  console.log('Base de datos de las SERIES ha tenido una conexión exitosa'))
.catch(err =>  console.error(err));

module.exports = mongoose;
