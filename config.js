const mongoose = require('mongoose');

const url = 'mongodb+srv://niththish:niththish@cluster0.nb017.mongodb.net/crimeReport?retryWrites=true&w=majority';

const connectDB = async () => {
    await mongoose.connect(url,{ useUnifiedTopology: true,  useNewUrlParser: true });
    console.log("connected");
}

module.exports = connectDB;