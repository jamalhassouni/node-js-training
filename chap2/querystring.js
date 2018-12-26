const queryString = require("querystring");

const someText = queryString.parse("name=jamal & lastname=hassouni");

console.log(someText);

const someJson = queryString.stringify({
  name: "jamal",
  lastname: "hassouni"
});

console.log(someJson);
