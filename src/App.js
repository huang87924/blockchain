import React, { Component } from 'react';
import './App.css';
import web3 from './web3';
import virtual_item from './virtual_item';
//import logo from './logo.svg'
import ItemRows from './item_rows'


class App extends Component {
  
  constructor(props) {
	  super(props);
	  
	  this.state={
			// input item attributes
			gameName:'gameName',
			amount:1,
			itemIndex:'itemIndex',
			price:'price',
			
			// id of item you want to buy
			checkOutItemId:'checkOutItemId' ,
			
			// seach by index
			searchIndex:0,
			
			// total items amount
			itemNum:0,
			
			// all items
			all_item:[],
			
			// cart pic
			cartSrc:'./diagram/not_found.jpg',
			

		};
		
		
		
	};
	
	async componentDidMount() {

	  const accounts = await window.ethereum.enable();
	  
	  const allItems = await virtual_item.methods.getNumItem().call();
	  
	  this.setState({itemNum:allItems});
	  
	  const items = await Promise.all(
	  		Array(parseInt(this.state.itemNum))
				.fill()
				.map( (element,index) => {return virtual_item.methods.item_list(index).call()} )
		);

	  this.setState({all_item:items});
	  
	  
	  
	}
	
	
	
	onSubmit = async (event) => {
		event.preventDefault();
		console.log("the new item -> " + this.state.gameName );
		const accounts = await web3.eth.getAccounts();
		this.setState({status: "Updating..."});
		await virtual_item.methods.add_to_pool(this.state.gameName,this.state.amount,this.state.itemIndex,this.state.price).send({
		  from: accounts[0]
		});
		
		console.log("completed ");
		
	};
	
	
	
	
	checkOut = async () => {
	  const accounts = await web3.eth.getAccounts();
	  this.setState({checkOutItemId:'0001'});
	  console.log(this.state.checkOutItemId);
	  await virtual_item.methods.moneyTransfer(this.state.checkOutItemId).send({
	    from: accounts[0],
		value: web3.utils.toWei('2000','wei')
	  });
	
	  console.log("completed ");
	
	};
	
	callItem = async () => {
	  const accounts = await web3.eth.getAccounts();
	  let item = await virtual_item.methods.item_list(this.state.searchIndex).call({
	    from: accounts[0],
	  });
	
	  console.log(item);
	  console.log(this.state.searchIndex);
	  console.log(this.state.all_item);
	
	};
	
	onClick= () => {
		console.log('add to chart');
		
		this.setState({cartSrc:'./diagram/w2.jpg'});
		
		console.log(this.state.cartSrc);
	
	};


  render() {
	  
	  
    return (
		<body className="p">
		<div>
			<h1 className="b">Virtual Goods Trade Center
		    <button className="button2"><img src={require('./diagram/1.png')} alt="" width="30px" height="28px" /></ button>
		    <button className="button2"><img src={require('./diagram/2.png')} alt="" width="30px" height="28px" /></ button>
			<button className="button1">Sign up</button>
			<button className="button1">Log in</button>
			</h1>
		</div>
		
		<div className="test-1 test"> <div className="games" > <div className="scrollbar">
			 <div><img src={require('./diagram/game1.jpg')} alt="" width="150px" height="200px" /></div>
		     <div><img src={require('./diagram/game2.jpg')} alt="" width="150px" height="200px" /></div>
		     <div><img src={require('./diagram/game3.jpg')} alt="" width="150px" height="200px" /></div>
		     <div><img src={require('./diagram/game4.jpg')} alt="" width="150px" height="200px" /></div>
		     <div><img src={require('./diagram/game5.jpg')} alt="" width="150px" height="200px" /></div>
		     <div><img src={require('./diagram/game6.jpg')} alt="" width="150px" height="200px" /></div>
		     <div><img src={require('./diagram/game7.jpg')} alt="" width="150px" height="200px" /></div>
		</div>
		</div>
		</div>
		
	
		
		
		<form onSubmit={this.onSubmit} className='enter'>
		<div> 
			<h>Game Name: </h>
			<input onChange={(event) => this.setState({gameName:event.target.value})}  /> <br />
			<h>Amount: </h>
			<input onChange={(event) => this.setState({amount:event.target.value})}    /> <br />
			<h>Item ID: </h>
			<input onChange={(event) => this.setState({itemIndex:event.target.value})} /> <br />
			<h>Price: </h>
			<input onChange={(event) => this.setState({price:event.target.value})}     /> <br />
		</div>
		
		<input type="submit" value="add item" />
		</ form>
		
		
		<div>
			<button className="button6" onClick={this.showItem}>Games</button>
		</div>
		<div>	
			<button className="button6" onClick={this.callItem}><img src={require('./diagram/3.png')} alt="" width="20" height="15" /></button>
			<input className="button6" onChange={(event) => this.setState({searchIndex:event.target.value})} />
		</ div>
		
		
		<div>
			<button className="button7">Term</button>
			<button className="button7" ><img src={require('./diagram/5.jpg')} alt="" width="20" height="15" /></button>
			<button className="button7" >Sort by</button>
			<button className="button7"><img src={require('./diagram/4.png')} alt="" width="20" height="15" /></button>
		</div>
		
		<br />
		<div class="test-1 test">
		<div class="scrollbar">
		<div class="flex-container">
		
		<div class='flex-item'> <img src={require('./diagram/w3.jpg')} alt="" width="160" height="120"/> </div>
		<div class='flex-item'> <img src={require('./diagram/w4.jpg')} alt="" width="160" height="120"/> </div>
		<div class='flex-item'> <img src={require('./diagram/w5.jpg')} alt="" width="160" height="120"/> </div>
		<div class='flex-item'> <img src={require('./diagram/w6.jpg')} alt="" width="160" height="120"/> </div>
		<div class='flex-item'> <img src={require('./diagram/w7.jpg')} alt="" width="160" height="120"/> </div>
		<div class='flex-item'> <img src={require('./diagram/w8.jpg')} alt="" width="160" height="120"/> </div>
		<div class='flex-item'> <img src={require('./diagram/w9.jpg')} alt="" width="160" height="120"/> </div>
		<div class='flex-item'> <img src={require('./diagram/w10.jpg')} alt="" width="160" height="120"/> </div>
		<div class='flex-item'> <img src={require('./diagram/w11.jpg')} alt="" width="160" height="120"/> </div>
		<div class='flex-item'> <img src={require('./diagram/w12.jpg')} alt="" width="160" height="120"/> </div>
		<div class='flex-item'> <img src={require('./diagram/w13.jpg')} alt="" width="160" height="120"/> </div>
		<div class='flex-item'> <img src={require('./diagram/w14.jpg')} alt="" width="160" height="120"/> </div>
		
		<ItemRows item_list={this.state.all_item} onClick={this.onClick}/>
		
		</div>
		</div>
		</div>
		<br />
		
		<div class="table1">
		  <div class="cart">
		  <img src={require('./diagram/cart.jpg')} alt="" width="150px" height="150px" />
		  <img src={require(''+ this.state.cartSrc)} alt="None" width="160" height="120" />
		  <div class="d">    Totoal Price:</div>
		  <div><button class="button10" onClick={this.checkOut}>Check out</button></div>
		
		  
		</div>
		</div>
		
		
		<onClick />
		<br />
		<br />
		
		
		
		</ body>
    );
  }

}

export default App;
