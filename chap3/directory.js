const fs = require("fs");

if (fs.existsSync("myapp")) {
  console.log("Directory already created");
} else {
  fs.mkdir("myapp", err => {
    if (err) {
      console.error(err);
    } else {
      console.log("Directory Created Successfully");
    }
  });
}
