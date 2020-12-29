contract('Calculate Era', function(accounts) {

    var addrClient = accounts[1];

    it("block        1 - not started - 0", function(done) {
        var coin = BitEtherCoin.deployed();
        coin.getEraForBlock.call(1).then((e) => {
            assert.equal(e[0].toNumber(), 0);
            assert.equal(e[1].toNumber(), 0);
            assert.equal(e[2].toNumber(), 0);
            assert.equal(e[3].toNumber(), 0);
        }).then(done).catch(done);
    });

    it("block  1000000 - not started - 0", function(done) {
        var coin = BitEtherCoin.deployed();
        coin.getEraForBlock.call(1000000).then((e) => {
            assert.equal(e[0].toNumber(), 0);
            assert.equal(e[1].toNumber(), 0);
            assert.equal(e[2].toNumber(), 0);
            assert.equal(e[3].toNumber(), 0);
        }).then(done).catch(done);
    });

    it("block  1500000 - not started - 0", function(done) {
        var coin = BitEtherCoin.deployed();
        coin.getEraForBlock.call(1500000).then((e) => {
            assert.equal(e[0].toNumber(), 0);
            assert.equal(e[1].toNumber(), 0);
            assert.equal(e[2].toNumber(), 0);
            assert.equal(e[3].toNumber(), 0);
        }).then(done).catch(done);
    });

    it("block  2000000 - not started - 0", function(done) {
        var coin = BitEtherCoin.deployed();
        coin.getEraForBlock.call(2000000).then( (e) => {
            assert.equal(e[0].toNumber(), 0);
            assert.equal(e[1].toNumber(), 0);
            assert.equal(e[2].toNumber(), 0);
            assert.equal(e[3].toNumber(), 0);
        }).then(done).catch(done);
    });

    it("block  2726892 - first era - 2", function(done) {
        var coin = BitEtherCoin.deployed();
        coin.getEraForBlock.call(2750000).then( (e) => {
            assert.equal(e[0].toNumber(), 1);
            assert.equal(e[1].toNumber(), 2726892);
            assert.equal(e[2].toNumber(), 200000000);
            assert.equal(e[3].toNumber(), 0);
        }).then(done).catch(done);
    });

    it("block  2726893 - first era - 2", function(done) {
        var coin = BitEtherCoin.deployed();
        coin.getEraForBlock.call(2750001).then( (e) => {
            assert.equal(e[0].toNumber(), 1);
            assert.equal(e[1].toNumber(), 2726892);
            assert.equal(e[2].toNumber(), 200000000);
            assert.equal(e[3].toNumber(), 0);
        }).then(done).catch(done);
    });

    it("block  3000000 - first era - 2", function(done) {
        var coin = BitEtherCoin.deployed();
        coin.getEraForBlock.call(3000000).then( (e) => {
            assert.equal(e[0].toNumber(), 1);
            assert.equal(e[1].toNumber(), 2726892);
            assert.equal(e[2].toNumber(), 200000000);
            assert.equal(e[3].toNumber(), 0);
        }).then(done).catch(done);
    });

    it("block  4796368 - first era - 2", function(done) {
        var coin = BitEtherCoin.deployed();
        coin.getEraForBlock.call(4796368).then( (e) => {
            assert.equal(e[0].toNumber(), 1);
            assert.equal(e[1].toNumber(), 2726892);
            assert.equal(e[2].toNumber(), 200000000);
            assert.equal(e[3].toNumber(), 0);
        }).then(done).catch(done);
    });

    it("block  5674538 - first era - 2", function(done) {
        var coin = BitEtherCoin.deployed();
        coin.getEraForBlock.call(5674538).then( (e) => {
            assert.equal(e[0].toNumber(), 1);
            assert.equal(e[1].toNumber(), 2726892);
            assert.equal(e[2].toNumber(), 200000000);
            assert.equal(e[3].toNumber(), 0);
        }).then(done).catch(done);
    });


    it("block  6899999 - first era - 2", function(done) {
        var coin = BitEtherCoin.deployed();
        coin.getEraForBlock.call(6899999).then( (e) => {
            assert.equal(e[0].toNumber(), 1);
            assert.equal(e[1].toNumber(), 2726892);
            assert.equal(e[2].toNumber(), 200000000);
            assert.equal(e[3].toNumber(), 0);
        }).then(done).catch(done);
    });

    it("block  7976892 - second era - 1",