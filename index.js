//import the path module and express module
const path = require("path");
const express = require("express");

//execute the function that creates an Express application and store it in  a variable named app
const app = express();

//define a port variable that assumes the value of a defined environment variable proccess.env.PORT or 8000
const port = process.env.PORT || "8000";

//create a route that handles GET HTTP requests made to the root path, /, and replies with a string
app.get("/", (req, res) => {
  res.status(200).send("WHATABYTE: Food For Devs");
});

//setup the Express app to listen for HTTP requests on the previously defined port
app.listen(port, () => {
  console.log('Listening to requests on http://localhost:${port}');
});
