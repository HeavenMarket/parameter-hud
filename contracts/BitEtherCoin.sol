
pragma solidity ^0.4.4;

contract BitEtherCoin {

    event Transfer(address indexed _from, address indexed _to, uint256 _value);
    event Approval(address indexed _owner, address indexed _spender, uint256 _value);
    event Reward(address indexed _miner, uint256 _value, bool _current);

    uint256 public totalSupply;
    mapping (address => uint256) balances;
    mapping (address => mapping (address => uint256)) allowed;

    uint256 minedBlock = 0;
    address satoshi;

    string public name = "BitEtherCoin";
    uint8  public decimals = 8;
    string public symbol = "BEC";

    // Initial reward per Ethereum Block is 2,
    // for 25 block it gives same reward as for Bitcoin first era (2 * 25 == 50)
    //
    //                   2.00000000
    uint256 rewardBase = 200000000;

    uint256  eraSize =    5250000;
    uint256  startBlock = 2726892;

    function BitEtherCoin() {
        satoshi = msg.sender;
    }

    // Mining Operations

    function claim() returns (uint256) {
        var (eraId, eraBlock, reward, prevReward) = getEra();
        if (minedBlock >= block.number) {
            Reward(block.coinbase, reward, false);
        } else if (eraId > 0 && eraId < 30) {
            uint256 unclaimed = getUnclaimed(eraBlock, minedBlock, block.number, prevReward, reward);

            if (reward > 0) {