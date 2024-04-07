// import express
const express = require("express");

// create an instance of express called app
const app = express();

// import our todos router
const router = require("./routes");

// use /api to prefix our endpoints
app.use("/api", router);

// create a port variable
const port = 5000;

// listen to our server on our localhost
app.listen(port, () => {
    console.log(`Server is listening on http://localhost:${port}`);
})
