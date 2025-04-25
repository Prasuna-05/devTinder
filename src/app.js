console.log("Started DevTinder UI Project......");

const express = require("express");
const app = express();

//order of the routes matters
// the first matching route will be executed and the rest will be ignored

app.get("/user/:userId/:name/:password", (req,res) => {
  console.log(req.params);
  res.send("{firstName: 'John', lastName: 'Doe'}");
});

app.use("/user/3", (req,res) => {
  res.send("Hello from User 3");
});

app.use("/user", (req,res) => {
  res.send("Hello from User");
});

app.use("/test/4", (req,res) => {
  res.send("Hello from User test 4");
});

app.use("/test", (req,res) => {
  res.send("Hello from User test");
});

app.get("/getStudentDetails", (req,res) => {
  res.send({firstname:"John", lastname:"Doe"});
});

app.post("/createStudentDetails", async(req,res) => {
  console.log(req.body);
    res.send("Data successfully saved to DB.......");
}); 

app.delete("/deleteStudentDetails", (req,res) => {
    res.send("Deleted successfully.......");
}); 

app.get(/^\/a(b+c+)?d$/, (req, res) => {
  res.send("Hello from User ab");
});

app.use("/", (req,res) => {
  res.send("Hello");
});
    
app.listen(7777, () => {
  console.log("Server is running on port 7777");
});