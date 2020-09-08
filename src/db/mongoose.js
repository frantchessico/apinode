const mongoose = require('mongoose');

const urlMdb = 'mongodb://localhost/todo';
const prodUrl = 'mongodb+srv://nodeapi:nodeapi@cluster0.vx5qo.mongodb.net/nodeapi?retryWrites=true&w=majority'

mongoose.connect(prodUrl,{
   useNewUrlParser: true,
   useUnifiedTopology: true
}).then(() => console.log('Database is connected'))
.catch(err => console.log('Database is not connected', err))