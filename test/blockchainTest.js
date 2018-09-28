const assert = require('chai').assert;
const expect = require('chai').expect;
const  Blockchain = require('../dev/blockchain');

const myNewCoin = new Blockchain();


describe('Blockchain createNewBlock', ()=>{
    it('should return a new block with the gived hash', ()=>{

        let block1 = myNewCoin.createNewBlock(2389,'OINDDFFDASDFASDFASDFA', 'D8795DASDFASDFASDFA' );
        
        assert.equal(block1.hash, "D8795DASDFASDFASDFA" );
        assert.equal(block1.previousBlockHash, "OINDDFFDASDFASDFASDFA" );
    })

    it('should add a second block and add it to the chain', ()=>{
        let block2 = myNewCoin.createNewBlock(65987,'DFGDFGDFGDASDFAASDFSSF', 'ASDFASFDSADASDFASDFASDFA' );
        
        assert.equal(block2.hash, "ASDFASFDSADASDFASDFASDFA" );
        assert.equal(block2.previousBlockHash, "DFGDFGDFGDASDFAASDFSSF" );

        assert.equal(myNewCoin.chain.length, 2);
    })
})


describe('Blockchain getLastBlock', ()=>{
    it('should return the last block added', ()=>{
        let lastBlock = myNewCoin.getLastBlock();
        assert.equal(lastBlock.index, myNewCoin.chain[myNewCoin.chain.length-1].index );       
    })
})


describe('Blockchain createNewTransaction', ()=>{
    it('should create a new transaction and add it to pending transactions', ()=>{
        myNewCoin.createNewTransaction(100, 'OSV1988303DDF', 'SUS8383JDKDHDH');
        expect(myNewCoin).to.have.property('pendingTransactions').with.length(1);
        assert.equal(myNewCoin.pendingTransactions[0].amount, 100);
    })

    it('should stablish a second transaction also as pending transaction', ()=>{
        myNewCoin.createNewTransaction(200, 'ISA1988303DDF', 'SUS8383JDKDHDH');
        assert.equal(myNewCoin.pendingTransactions.length, 2);
    })
    it('should stablish correctly the address of the sender', ()=>{
        assert.equal(myNewCoin.pendingTransactions[1].sender, 'ISA1988303DDF');
    })
})
