const Token=artifacts.require("token");
const TokenSale=artifacts.require("tokensale");
var kyc=artifacts.require("./kyccontract.sol");
var chai =require("chai");
const BN=web3.utils.BN;
const chaibn=require("chai-bn")(BN);
chai.use(chaibn);
var chaiaspromised=require("chai-as-promised");
chai.use(chaiaspromised);
const expect=chai.expect;


contract("TokenSale test",async(accounts)=>{
	const[deployaccount,receipt,otheraccount]=accounts;

	it("should do not have any amount of in deployaccount",async()=>{
		console.log("hello world");
		let instance=await Token.deployed();
		const amount=await instance.balanceOf(deployaccount);
		console.log(amount.toNumber());
		assert.equal(amount.toNumber(),0,"value should be zero");

	});
	it("all tokens should be in TokenSale accounts",async()=>{
		let instance=await Token.deployed();

		
		let balance= await  instance.balanceOf(TokenSale.address);
		console.log(balance);
		let balancoftokensale=await instance.balanceOf(TokenSale.address);
		let baloftoken=await instance.balanceOf(Token.address);
		console.log(balancoftokensale);
		console.log("break")
		console.log(baloftoken);


		// console.log(balancoftokensale);
		let totalsupply=await instance.totalSupply();
		console.log(totalsupply);
		console.log("hello");

		console.log(totalsupply);
		console.log("break");
		const a=balancoftokensale.toNumber();
		const b=totalsupply.toNumber();
		assert.equal(a,b,"value must be same");
		







	})
	// it("it should possible to buy the tokens",async()=>{
	// 	let instance=await Token.deployed();
	// 	let tokemsaleinstance= await TokenSale.deployed();
	// 	let balancebefore=await instance.balanceOf(deployaccount);
	// 	let kycinstance=await kyc.deployed();
	// 	// kycinstance.setkyccomplete(deployaccount).from({});
	// 	// console.log("khvj");

	// 	console.log(balancebefore);
	// 	// tokemsaleinstance.sendTransaction({from:deployaccount,value:1000});
	// 	// console.log("bal after")
	// 	// let balanceafter=await instance.balanceOf(deployaccount);
	// 	// console.log(balanceafter);




	// })

	// run the function before deploying test

	


});