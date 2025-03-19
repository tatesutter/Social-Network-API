const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO || 'mongodb+srv://tatesutter04:9buWJs9Jp5Oyk0PO@mongo.7ge7l.mongodb.net/?retryWrites=true&w=majority&appName=mongo', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

module.exports = mongoose.connection;
