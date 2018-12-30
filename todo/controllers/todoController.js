const bodyParser = require("body-parser");

let data = [
  { item: "get milk" },
  { item: "walk dog" },
  { item: "kick some coding ass" }
];
const urlencodeParser = bodyParser.urlencoded({ extended: false });

module.exports = function(app) {
  app.get("/todo", function(req, res) {
    res.render("todo", { todos: data });
  });

  app.post("/todo", urlencodeParser, function(req, res) {
    data.push(req.body);
    res.json(data);
  });

  app.delete("/todo/:item", function(req, res) {
    data = data.filter(todo => {
      // replace space with -  and filter data
      return todo.item.replace(/ /g, "-") !== req.params.item;
    });
    res.json(data);
  });
};
