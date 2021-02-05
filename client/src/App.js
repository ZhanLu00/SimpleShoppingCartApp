import React from 'react';
import './App.css';
import Navbar from './React-Components/Navbar';
import AppContainer from './React-Components/AppContainer';
import { getSubtotal, checkout } from './Actions/action';

class Item{
	constructor(name, quantity, price, id){
		this.name = name;
		this.quantity = quantity;
		this.price = price;
		this.id = id;
	}

	decreaseId(){
		this.id-=1;
	}
}

class App extends React.Component{

	constructor(props){
		super(props);
		this.state = {
			regionCode: 0,
			itemInputs: {
				name: "",
				quantity: 1,
				price: 9.99,
			},
			itemList: [],
			itemId:0,
			total:0,
			promoCode:"",
			discount:0
		}
		this.onInputChange = this.onInputChange.bind(this);
		this.addItem = this.addItem.bind(this);
		this.addRandom = this.addRandom.bind(this);
		this.removeItem = this.removeItem.bind(this);
		this.addPromo = this.addPromo.bind(this);
		this.changeRegion = this.changeRegion.bind(this);
		this.changeTotal = this.changeTotal.bind(this);
		this.checkout = this.checkout.bind(this);
	}
	
	onInputChange(name, value, type){
		if (type===1){	
		    const { itemInputs } = { ...this.state };
		    const currentState = itemInputs;
		    currentState[name] = value;
		    this.setState({ itemInputs: currentState });
		}else{
			this.setState({[name]:value})
		}
	}

	changeTotal(amount){
	 	getSubtotal(this.state.total, amount).then((newTot)=>{
	 		if (newTot){
	 			const newT = newTot.newsub
	 			if (newT>=0){
	 				let newTotal = parseFloat(newT).toFixed(4)
	 				this.setState({total:newTotal});
	 			}
	 			
	 		}
	 	});
	}

	addItem(name, quantity, price){
	 	// add to the array
	 	let id = this.state.itemId;
	 	const newItem = new Item(name, parseInt(quantity, 10), parseFloat(price).toFixed(2), id);
	 	let items = this.state.itemList.push(newItem);
	 	id = id + 1;
	 	this.setState({itemLists:items});
	 	this.setState({itemId:id});
	 	this.changeTotal(price);

	}

	addRandom(addItem){
		const liquorType = ["Whiskey", "Brandy", "Beer", "Gin", "Rum", 
							"Vodka", "Tequila"]

		const liquor = Math.floor(Math.random()*liquorType.length);
		const price = Math.ceil(Math.random()*(liquor+1)*10);
		const quantity = Math.ceil(Math.random()*10);

		addItem(liquorType[liquor], quantity, price);
		alert(quantity + " bottles of " + liquorType[liquor] + " for $" + price+
			" has been added to your cart");
		this.changeTotal(price);
	}

	removeItem(id){
		let itemList = this.state.itemList;
		let price = 0;
		var i=0;
		for (;i<itemList.length;i++){
			if (itemList[i].id === id){//found
				price = itemList[i].price;
				itemList.splice(i, 1);
				break;
			}
		}
		for  (;i<itemList.length;i++){
			itemList[i].decreaseId();
		}
		this.setState({itemList:itemList});
		this.changeTotal(-price);

	}

	addPromo(code){
		const codes = {'20discount': 20, '30discount': 30};
		if (code in codes){
			const discount = codes[code]
			this.setState({discount:discount})
			alert(codes[code] + "% off will be added to your total!");
		}else{
			alert("This promo code does not exist")
		}
		

	}

	changeRegion(regionCode){
		if (regionCode !== this.state.regionCode){
			this.setState({regionCode:regionCode});
		}
	}

	checkout(){
		if (!this.state.total){
			alert("Your Cart is empty!")
		}else if (!this.state.regionCode){
			alert("Please choose your region")
		}else{
			checkout(this.state.total, this.state.discount, this.state.regionCode)
				.then((re)=>{
					if (re){
						const total = re.total.toFixed(2);
						alert("Your total is "+ total);
					}
				})

		}
	}

	render(){
		return (
		    <div className="App">
		      	<Navbar regionCode={this.state.regionCode}
		      			changeRegion={this.changeRegion}
		      			addPromo={this.addPromo} 
		      			promoCode={this.state.promoCode}
		      			onInputChange={this.onInputChange}/>
		      	<AppContainer itemInputs={this.state.itemInputs}
		      				  itemList={this.state.itemList}
		      				  onInputChange={this.onInputChange}
		      				  addItem={this.addItem}
		      				  addRandom={this.addRandom}
		      				  removeItem={this.removeItem}
		      				  total={this.state.total}
		      				  checkout={this.checkout}
		      				  />
		    </div>
		);
	}
  
}

export default App;
