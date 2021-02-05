import React from 'react';
import './style.css';
import { Row, Col, Button, Card } from 'react-bootstrap';

class Item extends React.Component{

	constructor(props){
		super(props)
		this.state={
			itemId: this.props.itemId
		}
		this.removeItem = this.removeItem.bind(this);
	}

	removeItem(){
		this.props.removeItem(this.state.itemId)
	}

	render(){
		const { itemName, itemQuantity, itemPrice } = this.props;

		return(
			<Card border="info">
				<Row className="itemRow">
					<Col>{itemName}
					</Col>
					<Col>
						Quantity: {itemQuantity}
					</Col>
					<Col>${itemPrice}
					</Col>
					<Col>
						<Button variant="outline-danger" 
								size="sm"
								onClick={this.removeItem}>
							Delete
						</Button>
					</Col>
				</Row>
			</Card>
		)
	}
}

export default Item;