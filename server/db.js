const mongoose = require('mongoose')

const connectDB = async () => {

    try
    {
        const conn =await mongoose.connect(
            'mongodb+srv://samcoeur:Sberber2024@cluster0.km4j3.mongodb.net/POST?retryWrites=true&w=majority&appName=Cluster0'
        );
        console.log("cnnected successfully to " + conn.connection.host)
    }
    catch(error)
    {
       console.log(error)
    }
}
module.exports = connectDB;