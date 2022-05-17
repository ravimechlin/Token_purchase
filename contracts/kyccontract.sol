pragma solidity  ^0.6.2;


import "@openzeppelin/contracts/access/Ownable.sol";


contract Kyccontract is Ownable{
	mapping(address=>bool) allowed;

	function setkyccomplete(address _addr) public onlyOwner{
		allowed[_addr]=true;

	}

	function setkycrevoke(address _addr) public onlyOwner{
		allowed[_addr]=false;
	}

	function kyccomplete(address _addr) public view returns(bool) {
		return allowed[_addr];
	}

	function kl() public returns(string memory){

	return "vvev";
	}
}