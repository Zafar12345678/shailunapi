const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require("cors");

mongoose.connect("mongodb+srv://merningday123:merningday123@cluster0.jtxz4yj.mongodb.net/software?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: "software"
});

app.use(cors());

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', function() {
    console.log('Connected to MongoDB');
});

const basic_route = require("./routes/basicRoute");
app.use("/api", basic_route);

app.listen(5000, function() {
    console.log("Server is ready on port 5000");
}); 

// const express = require("express");
// const app = express();
// const cors  = require("cors");
// const mongoose = require("mongoose");
// mongoose.connect("mongodb+srv://merningday123:merningday123@cluster0.jtxz4yj.mongodb.net/software?retryWrites=true&w=majority")

// app.use(cors());
// const db = mongoose.connection;
// db.on('error', console.error.bind(console, 'MongoDB connection error:'));
// db.once('open', function() {
//     console.log('Connected to MongoDB');
// });
// app.listen(5000, function() {
//     console.log("Server is ready on port 5000");
// }); 