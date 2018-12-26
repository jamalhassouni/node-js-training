const EventEmitter = require("events");
const util = require("util");

// let Person = function(name) {
//   this.name = name;
// };
// util.inherits(Person, EventEmitter);
class Person extends EventEmitter {
  constructor(name) {
    super(name);
    this.name = name;
  }
}

module.exports = Person;
