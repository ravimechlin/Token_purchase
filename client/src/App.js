import React, { Component } from "react";
import SimpleStorageContract from "./contracts/SimpleStorage.json";
import token from "./contracts/token.json";
import Kyccontract from "./contracts/Kyccontract.json";
import tokensale from "./contracts/tokensale.json"

import getWeb3 from "./getWeb3";

import "./App.css";

class App extends Component {
  state = {loaded:false,kycaddress:null,Kyccontract:null,tokensaleaddress:null,updated_bal:0,ts:null,tokeninstance:null};

  componentDidMount = async () => {
    try {
      // Get network provider and web3 instance.
      const web3 = await getWeb3();


      // Use web3 to get the user's accounts.
      this.accounts = await web3.eth.getAccounts();
      console.log(this.accounts[0]);

      // Get the contract instance.
      const networkId = await web3.eth.net.getId();
      const deployedNetwork = token.networks[networkId];
       const tokeninstance = new web3.eth.Contract(
        token.abi,
        token.networks[networkId] && token.networks[networkId].address,
      ); 
      

       const kycinstance = new web3.eth.Contract(
        Kyccontract.abi,
        Kyccontract.networks[networkId] && Kyccontract.networks[networkId].address,
      );


      const tokensaleinsatnce = new web3.eth.Contract(
        tokensale.abi,
        tokensale.networks[networkId] && tokensale.networks[networkId].address,
      );


   


      
     

      // Set web3, accounts, and contract to the state, and then proceed with an
      // example of interacting with the contract's methods.
      // this.listentokentransfer();
      this.setState({loaded:true,Kyccontract:kycinstance,tokensaleaddress:tokensale.networks[networkId].address,tokeninstance:tokeninstance,ts:tokensaleinsatnce},this.updateusertoken);

      
    } catch (error) {
      // Catch any errors for any of the above operations.
      alert(
        `Failed to load web3, accounts, or contract. Check console for details.`,
      );
      console.error(error);
    }
  };

  // listentokentransfer=()=>{
  //   const {tokeninstance}=this.state;
  //   tokeninstance.events.Transfer({to:this.accounts[0]}).on("data",this.updateusertoken);

  // }

  updateusertoken=async()=>{
    console.log("moving this side");
    const {tokeninstance}=this.state;
    let usertoken=await tokeninstance.methods.balanceOf(this.accounts[0]).call();
    this.setState({updated_bal:usertoken});
  }
  onchange=(event)=>{
    const target=event.target;
    const value=target.type==="checkbox"?target.checked:target.value;
    const name=target.name;
    this.setState({
      kycaddress:value
    });

  }

  addkyc=async()=>{
    console.log("helllo");


    const {kycaddress,Kyccontract}=this.state;
    console.log(kycaddress);
    console.log(this.accounts[0]);

    const kl=await Kyccontract.methods.setkyccomplete(kycaddress).send({from:this.accounts[0],gas:300000});
    console.log(kl);
    this.updateusertoken();

  }


  buytokens=async()=>{
       const {kycaddress,Kyccontract,ts}=this.state;
       console.log(ts);

       const it=await ts.methods.buyTokens(this.accounts[0]).send({from:this.accounts[0],value:1000,gas:1200000});
       console.log(it);
       this.updateusertoken();




      

  }



 

  render() {
    if (!this.state.loaded) {
      return <div>Loading Web3, accounts, and contract...</div>;
    }
    return (
      <div className="App">
      <h1>Welcome To The Coffe Cup Tokens</h1>
      <h4>Kyc Whitelisting</h4>
      <input type="text" value={this.state.kycaddress} onChange={this.onchange}></input>
      <br></br>
      <br></br>
      <button  onClick={this.addkyc}>add the kyc</button>
      <p>send wei to buy tokens:{this.state.tokensaleaddress}</p>
      <p>token balance is {this.state.updated_bal}</p>
      <button onClick={this.buytokens}>buy  1000 tokens</button>

      </div>
    );
  }
}

export default App;
