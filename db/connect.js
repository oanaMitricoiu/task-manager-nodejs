const mongoose = require("mongoose");

// const connectionString =
//     "mongodb+srv://oana:Mitricoiu01@cluster0.4esbfu7.mongodb.net/task-manager?retryWrites=true&w=majority&appName=Cluster0";

const connectDB = (url) => {
    return mongoose.connect(url, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology: true,
    });
};

module.exports = connectDB;
