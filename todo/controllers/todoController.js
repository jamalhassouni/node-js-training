const bodyParser = require("body-parser");
const mongoose = require("mongoose");
// Connect to the database

mongoose.connect(
  "mongodb://test:7wU9xYUJLPPuzmq@ds145434.mlab.com:45434/todolist",
  { useNewUrlParser: true }
);

// Create a schema - this is like a blueprint

let todoSchema = new mongoose.Schema({
  item: String
});

// Create Todo Model
let Todo = mongoose.model("Todo", todoSchema);

// var itemOne = Todo({ item: "buy flowers" }).save(function(err) {
//   if (err) throw err;
//   console.log("item saved");
// });

// let data = [
//   { item: "get milk" },
//   { item: "walk dog" },
//   { item: "kick some coding ass" }
// ];
const urlencodeParser = bodyParser.urlencoded({ extended: false });

module.exports = function(app) {
  app.get("/todo", function(req, res) {
    // get data from mongodb and pass it to view
    Todo.find({}, function(err, data) {
      if (err) throw err;
      res.render("todo", { todos: data });
    });
  });

  app.post("/todo", urlencodeParser, function(req, res) {
    // get data from the view and add it to mongodb
    Todo(req.body).save(function(err, data) {
      if (err) throw err;

      res.json(data);
    });
  });

  app.delete("/todo/:item", function(req, res) {
    // delete the requested item from mongodb
    Todo.find({ item: req.params.item.replace(/\-/g, " ") }).deleteOne(function(
      err,
      data
    ) {
      if (err) throw err;
      res.json(data);
    });
    // data = data.filter(todo => {
    //   // replace space with -  and filter data
    //   return todo.item.replace(/ /g, "-") !== req.params.item;
    // });
  });
};
