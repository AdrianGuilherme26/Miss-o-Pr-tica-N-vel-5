const mongoose = require('mongoose');

const url = 'mongodb://127.0.0.1:27017/livraria'; // URL local
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true
};

mongoose.connect(url, options);

module.exports = mongoose;
