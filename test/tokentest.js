
const Token=artifacts.require("token");
const TokenSale=artifacts.require("tokensale");
var chai =require("chai");
const BN=web3.utils.BN;
const chaibn=require("chai-bn")(BN);
chai.use(chaibn);
var chaiaspromised=require("chai-as-promised");
chai.use(chaiaspromised);
const expect=chai.expect;


contract("Token test",async(accounts)=>{
	const[deployaccount,receipt,otheraccount]=accounts;

	// run the function before deploying test

	beforeEach(async()=>{
		this.Token=await  Token.new(100000);

	});
	it("all token in my account",async()=>{
		let instance=await this.Token;
			console.log("hi");
		let totalsupply=await instance.totalSupply();
		console.log("break");
		const l=await instance.balanceOf(deployaccount);
		expect(await instance.balanceOf(deployaccount)).to.be.a.bignumber.equal(totalsupply);

	});



	// it("sending token betweeen the account",async()=>{
	// 	let instance=await this.Token;
	// 	const sendtikens=1;
	// 	let totalsupply=await instance.totalSupply();
	// 	expect(await instance.balanceOf(deployaccount)).to.be.a.bignumber.equal(totalsupply);
	// 	expect(instance.transfer(receipt,sendtikens)).to.be.fulfilled;
	// 	expect(instance.balanceOf(deployaccount)).to.be.a.bignumber.equal(totalsupply.sub(new BN(sendtikens)));
	// 	expect(instance.balanceOf(receipt)).to.be.a.bignumber.equal(new BN(sendtikens));

	// });
	// it("it is not possible to transfer  token more than available tokes",async()=>{
	// 			let instance=await this.Token;
	// 			let balanceofdeployer=await instance.balanceOf(deployaccount);
	// 			expect(instance.transfer(receipt,new BN(balanceofdeployer+1))).to.eventually.be.rejected;
	// 			expect(instance.balanceOf(deployaccount)).to.eventually.be.a.bignumber.equal(balanceofdeployer);

	// });


});