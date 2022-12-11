contract('Calculate Unclaimed', function(accounts) {

    it("just started", function (done) {
        var coin = BitEtherCoin.deployed();
        coin.getUnclaimed.call(2726892, 0, 2726892, 0, 250000000).then((e) => {
            assert.equal(e.toNumber(), 0);
        }).then(done).catch(done);
    });

    it("0 unclaimed just started", function (done) {
        var coin = BitEtherCoin.deployed();
        coin.getUnclaimed.call(2726892, 0, 2726893, 0, 250000000).then((e) => {
            assert.equal(e