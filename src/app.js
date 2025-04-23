console.log("Started DevTinder UI Project......");

const express = require("express");
const app = express();

app.get("/", (req,res) => {
  res.send("Hello from the dashboard");
});

app.get("/hello", (req,res) => {
    res.send("Hello from the Server.......");
}); 

app.get("/test", (req,res) => {
    res.send("Hello from the Test.......");
}); 
    
app.listen(7777, () => {
  console.log("Server is running on port 7777");
});