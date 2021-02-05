import React from 'react';
import './style.css';
import Item from '../Item/index.js';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';

class ItemContainer extends React.Component{
	constructor(props){
		super(props);
		this.checkout = this.checkout.bind(this);
	}

	checkout(event){
		this.props.checkout();
	}

	render(){
		const { itemList, removeItem, total } = this.props;
		const theList = itemList.map((item)=>
			<Item key={item.id} itemName={item.name} itemQuantity={item.quantity} 
				itemPrice={item.price} itemId={item.id} removeItem={removeItem}>
			</Item>
		)

		return(
			<div className="itemContainer">
				<Navbar className="itemNav" bg="info" variant="dark">
				    <Navbar.Brand>Your Cart</Navbar.Brand>
				</Navbar>
				<div className="itemList">
					{theList}
				</div>
				<Navbar className="itemTotal" bg="danger" variant="dark" 
						fixed="buttom" sticky="bottom">
				    <Navbar.Brand>Your Subtotal: ${parseFloat(total).toFixed(2)}</Navbar.Brand>
				    <Navbar.Collapse className="justify-content-end">
				    	<Button variant="light" type="submit" onClick={this.checkout}>Checkout</Button>
				  	</Navbar.Collapse>
				</Navbar>
			</div>
		)
	}
}

export default ItemContainer;