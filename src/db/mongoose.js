const mongoose = require('mongoose');

const urlMdb = 'mongodb://localhost/todo';

mongoose.connect(urlMdb,{
   useNewUrlParser: true,
   useUnifiedTopology: true
}).then(() => console.log('Database is connected'))
.catch(err => console.log('Database is not connected', err))