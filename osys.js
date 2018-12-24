const os = require("os");
console.log("====================================");
console.log(os.freemem()); //  free system memory
console.log(os.homedir()); // home directory of the current user
console.log(os.hostname()); // host name
console.log(os.endianness()); // cpu type
console.log(os.loadavg()); // method returns an array containing the 1, 5, and 15 minute load averages
console.log(os.platform()); // paltform
console.log(os.release()); // kernel release
console.log(os.tmpdir()); // tmp directory
console.log(os.totalmem()); // total Memory
console.log(os.type()); // os type
console.log(os.uptime()); // os up time
console.log("====================================");
