const Blockchain = require("./blockchain");
const bitcoin = new Blockchain();
const previousBlockHash = "ofhbjsgdnvs";
const currentBlockData = [
  {
    amount: 300,
    sender: "idhgdslk",
    recipient: "dohbfs",
  },
  {
    amount: 378,
    sender: "idhgdslk",
    recipient: "dohbfs",
  },
];
const nonce = 100;
// bitcoin.hashBlock(previousBlockHash,currentBlockData,nonce);

// bitcoin.createNewBlock(1333, "suiebjsi", "oudishdg");

// bitcoin.createNewTransaction(100, "ALEXOUHSBHGYB", "JENI9SDUYTEDG");
// bitcoin.createNewBlock(7967, "grddtjn", "jgfxx");

console.log(bitcoin.proofOfWork(previousBlockHash, currentBlockData));
