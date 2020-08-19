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
            assert.equal(e[2].toN