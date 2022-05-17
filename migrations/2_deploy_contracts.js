var Token=artifacts.require("./token.sol");
var kyc=artifacts.require("./kyccontract.sol");
var tokensale=artifacts.require("./tokensale.sol")
var kl=artifacts.require("SimpleStorage");
// require("dotenv").config({"../.env"});
// console.log(process.env);
module.exports=async function(deployer){

  await deployer.deploy(kl);

  var account=await web3.eth.getAccounts();
  await deployer.deploy(Token,10000000);
  await deployer.deploy(kyc);
  await deployer.deploy(tokensale,1,account[0],Token.address,kyc.address);
  let instamce=await Token.deployed();

 
  await instamce.transfer(tokensale.address,10000000);

}