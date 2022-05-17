pragma solidity ^0.6.2;
import "./crowdsal.sol";
import "./kyccontract.sol";
contract tokensale is Crowdsale {
    Kyccontract kyc;
    constructor(
        uint256 rate,    // rate in TKNbits

        // transfer the wallet etherS



        address payable wallet,   
        // token
        IERC20 token,
        Kyccontract _kyc
    )
        
        Crowdsale(rate, wallet, token)
        public
    {
        kyc= _kyc;

    }

     function _preValidatePurchase(address beneficiary, uint256 weiAmount) internal view  override{
        super._preValidatePurchase(beneficiary,weiAmount);
        require(kyc.kyccomplete(msg.sender),"Kyc is not completed purchase not allowed");
      
    }
}