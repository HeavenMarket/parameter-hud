contract('Calculate Era', function(accounts) {

    var addrClient = accounts[1];

    it("block        1 - not started - 0", function(done) {
        var coin = BitEtherCoin.deployed();
        coin.getEraForBlock.call(1).then((e) => {
            assert.equal(e[0].toNumber(), 0);
            assert.equal(e[1].toNumber(), 0);
            asser