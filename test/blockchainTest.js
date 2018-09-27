const assert = require('chai').assert;
const  Blockchain = require('../dev/blockchain');

const myNewCoin = new Blockchain();

describe('Blockchain createNewBlock', ()=>{
    it('should return a new block', ()=>{

        let block1 = myNewCoin.createNewBlock(2389,'OINDDFFDASDFASDFASDFA', 'D8795DASDFASDFASDFA' );
        let block2 = myNewCoin.createNewBlock(65987,'DFGDFGDFGDASDFAASDFSSF', 'ASDFASFDSADASDFASDFASDFA' );

        assert.equal(block1.hash, "D8795DASDFASDFASDFA" );
        assert.equal(block1.previousBlockHash, "OINDDFFDASDFASDFASDFA" );
    })
})
