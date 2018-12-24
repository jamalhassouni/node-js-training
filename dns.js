// const dns = require("dns");

// dns.lookup("www.google.com", (err, addresses, family) => {
//   console.log("addresses: ", addresses);
//   console.log("family: ", family);
// });

const dns = require("dns");

dns.resolve4("www.google.com", (err, addresses) => {
  if (err) throw err;
  console.log(`addresses: ${JSON.stringify(addresses)}`);
  addresses.forEach(a => {
    dns.reverse(a, (err, hostnames) => {
      if (err) {
        throw err;
      }

      console.log(`reserve for ${a}:${JSON.stringify(hostnames)}`);
    });
  });
});
