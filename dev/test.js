const Blockchain = require('./blockchain');

const bitcoin = new Blockchain();

bitcoin.createNewBlock(2389,'OINDDFFDASDFASDFASDFA', 'D8795DASDFASDFASDFA' );
bitcoin.createNewBlock(65987,'DFGDFGDFGDASDFAASDFSSF', 'ASDFASFDSADASDFASDFASDFA' );

console.log(bitcoin);