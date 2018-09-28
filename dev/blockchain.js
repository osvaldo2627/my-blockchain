
function Blockchain(){
    this.chain = [];
    this.pendingTransactions = [];
}

/**
 * 
 * @param {*} nonce 
 * @param {*} previousBlockHash 
 * @param {*} hash 
 */
Blockchain.prototype.createNewBlock = function(nonce, previousBlockHash, hash ){
    
    const newBlock = {
        index : this.chain.length+1,
        timestamp: Date.now(),
        transactions: this.pendingTransactions,
        nonce: nonce,
        hash: hash,
        previousBlockHash: previousBlockHash
    }

    this.pendingTransactions = [];
    this.chain.push(newBlock);

    return newBlock;
}

/**
 * 
 */
Blockchain.prototype.getLastBlock = function(){
    return this.chain[this.chain.length - 1];
}

/**
 * 
 * @param {*} amount 
 * @param {*} sender 
 * @param {*} recepient 
 */
Blockchain.prototype.createNewTransaction = function( amount, sender, recepient ){

    const newTransaction = {
        amount: amount,
        sender: sender,
        recepient: recepient
    };

    this.pendingTransactions.push(newTransaction);

    return this.getLastBlock()['index'] + 1;
}

module.exports = Blockchain;