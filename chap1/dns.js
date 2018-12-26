// const dns = require("dns");

// dns.lookup("www.google.com", (err, addresses, family) => {
//   console.log("addresses: ", addresses);
//   console.log("family: ", family);
// });

// const dns = require("dns");

// dns.resolve4("www.google.com", (err, addresses) => {
//   if (err) throw err;
//   console.log(`addresses: ${JSON.stringify(addresses)}`);
//   addresses.forEach(a => {
//     dns.reverse(a, (err, hostnames) => {
//       if (err) {
//         throw err;
//       }

//       console.log(`reserve for ${a}:${JSON.stringify(hostnames)}`);
//     });
//   });
// });

const dns = require("dns");
dns.lookupService("216.58.205.132", 21, (err, hostname, service) => {
  console.log(hostname, service);
});
