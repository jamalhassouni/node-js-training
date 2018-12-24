 const crypto = require("crypto");

// const secret = "Jamal";

// const hash = crypto
//   .createHmac("sha256", secret)
//   .update("Welcome in NodeJs")
//   .digest("hex");

// console.log(hash);


/**
 * Ensure that a user-provided `secret` is 32 bytes long (the length required
 * for an AES256 key) by hashing it with SHA256.
 *
 * @param {*} input
 * @param {string} secret
 * @param {string|Buffer} secret
 */
function createSecret(secret) {
  const hash = crypto.createHash("sha256");
  hash.update(secret);
  return hash.digest();
}

/**
 * Create an initialization vector for AES256.
 *
 * @return {Buffer}
 */
function createIv() {
  return crypto.randomBytes(16);
}

/**
 * Encrypt a buffer or string with AES256 and a random iv.
 *
 * @param {string} input
 * @param {string|Buffer} secret
 * @return {string} Ciphertext as a hex string, prefixed with 32 hex characters containing the iv.
 */
function encrypt(input, secret) {
  const iv = createIv();
  const cipher = crypto.createCipheriv("aes256", createSecret(secret), iv);
  let encrypted = iv.toString("hex");
  encrypted += cipher.update(input, "utf8", "hex");
  encrypted += cipher.final("hex");
  return encrypted;
}

/**
 * Decrypt an iv-prefixed or string with AES256. The iv should be in the first 32 hex characters.
 *
 * @param {string} encrypted
 * @param {string|Buffer} secret
 * @return {string} Decrypted value.
 */
function decrypt(encrypted, secret) {
  // Need at least 32 chars for the iv
  if (encrypted.length < 32) {
    throw new Error(
      "Invalid encrypted value. Maybe it was generated with an old Companion version?"
    );
  }

  const iv = Buffer.from(encrypted.slice(0, 32), "hex");
  const decipher = crypto.createDecipheriv("aes256", createSecret(secret), iv);
  let decrypted = decipher.update(encrypted.slice(32), "hex", "utf8");
  decrypted += decipher.final("utf8");
  return decrypted;
}
let passwordEncrypted = encrypt("Welcome in NodeJs", "jamal");
let passwordDecrypted = decrypt(passwordEncrypted, "jamal");

console.log("String: ", passwordDecrypted);
console.log("String encrypted: ", passwordEncrypted);
