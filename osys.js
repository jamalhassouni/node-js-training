const os = require("os");
console.log("====================================");
console.log("free memory : ", os.freemem()); //  free system memory
console.log("home dir : ", os.homedir()); // home directory of the current user
console.log("hostname : ", os.hostname()); // host name
console.log("cpu type : ", os.endianness()); // cpu type
console.log("loadavg : ", os.loadavg()); // method returns an array containing the 1, 5, and 15 minute load averages
console.log("platform : ", os.platform()); // paltform
console.log("release : ", os.release()); // kernel release
console.log("tmpdir : ", os.tmpdir()); // tmp directory
console.log("total memory : ", os.totalmem()); // total Memory
console.log("os type : ", os.type()); // os type
console.log("up time : ", secondsToHms(os.uptime())); // os up time
console.log("cpu : ", os.cpus()); //  information about each logical CPU core
console.log("arch : ", os.arch()); // operating system CPU architecture
console.log("network interfaces : ", os.networkInterfaces()); // network interfaces
console.log("====================================");

function secondsToHms(d) {
  d = Number(d);
  var h = Math.floor(d / 3600);
  var m = Math.floor((d % 3600) / 60);
  var s = Math.floor((d % 3600) % 60);

  var hDisplay = h > 0 ? h + (h == 1 ? " hour, " : " hours, ") : "";
  var mDisplay = m > 0 ? m + (m == 1 ? " minute, " : " minutes, ") : "";
  var sDisplay = s > 0 ? s + (s == 1 ? " second" : " seconds") : "";
  return hDisplay + mDisplay + sDisplay;
}
