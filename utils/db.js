const mongoose = require('mongoose');

const Uri = process.env.MONGO_URI || "mongodb+srv://kg5724443:Cncxf6rRJKOsRWqb@cluster0.00bsf.mongodb.net/portfolio?retryWrites=true&w=majority&appName=Cluster0";

const Dbconnection = async () => {
    try {
        await mongoose.connect(Uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("DB Connection successful");
    } catch (err) {
        console.log("DB Connection failed !!");
        console.log(err);
        process.exit(0);
    }
}

module.exports = Dbconnection;
