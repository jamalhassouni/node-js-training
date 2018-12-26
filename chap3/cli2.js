const Person = require("./lib/clib");

let jamal = new Person("Jamal Hassouni");
let ahmed = new Person("Ahmed Oussama");

jamal.on("says", said => {
  console.log(`${jamal.name} -> ${said}`);
});
ahmed.on("says", said => {
  console.log(`${ahmed.name} -> ${said}`);
});

jamal.emit("says", "hi my name is Jamal Hassouni. ");
ahmed.emit("says", "Hi my name is Ahmed Oussama");
