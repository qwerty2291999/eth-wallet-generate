const crypto = require("crypto");
const createKeccakHash = require("keccak");
const secp256k1 = require("secp256k1");

const privateKey = crypto.randomBytes(32);
const pubKey = secp256k1.publicKeyCreate(privateKey, false).slice(1);
const address = createKeccakHash("keccak256")
  .update(Buffer.from(pubKey))
  .digest()
  .slice(-20)
  .toString("hex");
console.log("0x" + address, privateKey.toString("hex"));
