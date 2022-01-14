const express = require('express');

const path = require("path")
const app = express();


//Cors setup
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
    );
    res.setHeader(
      "Access-Control-Allow-Methods",
      "GET, POST, PUT, DELETE, PATCH, OPTIONS"
    );
    next();
});

//defining routes
const userRoutes = require("./app/routes/user");
const postRoutes = require("./app/routes/post");

//Routes
app.use(express.json())
app.use("/api/auth", userRoutes);
app.use("/api/auth", postRoutes);
app.use('./app/uploads', express.static(path.join(__dirname, 'app/uploads')));

module.exports = app;