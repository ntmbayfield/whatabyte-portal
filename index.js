//import the path module and express module
const path = require("path");
const express = require("express");

//execute the function that creates an Express application and store it in  a variable named app
const app = express();

//define a port variable that assumes the value of a defined environment variable proccess.env.PORT or 8000
const port = process.env.PORT || "8000";

//configures Express to use the views directory as a source for view templates.  the path.join() method joins the given path segments together using the specific separator of your operating system as a delimiter and then normalizes the resulting path
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

//create a route that handles GET HTTP requests made to the root path, /, and renders the index.pug template as the client response
app.get("/", (req, res) => {
  res.render("index", {title: "Home"});
});

//setup the Express app to listen for HTTP requests on the previously defined port
app.listen(port, () => {
  console.log('Listening to requests on http://localhost:${port}');
});
