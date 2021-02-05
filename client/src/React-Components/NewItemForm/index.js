import React from 'react';
import './style.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';

class NewItemForm extends React.Component{
	
	constructor(props){
		super(props);
		this.inputChange = this.inputChange.bind(this);
		this.itemSubmit = this.itemSubmit.bind(this);
		this.itemRandom = this.itemRandom.bind(this);
	}
		
	inputChange(event){
		this.props.inputChange(event.target.id, event.target.value, 1);
	    
	}

	itemSubmit(event){
	 	// add to the array
	 	const { itemName, itemQuantity, itemPrice } = this.props;
	 	if (itemName && itemQuantity>=1 && itemPrice>0){
	 		event.preventDefault();
	 		this.props.itemSubmit(itemName, itemQuantity, itemPrice)
	 	}
	 
	 	console.log(event)
	}

	itemRandom(submit){
		this.props.itemRandom(this.props.itemSubmit);
	}

	render(){
		const { itemName, itemQuantity, itemPrice } = this.props;
		return(
			<Form className="newItemForm">
			  	<Form.Group>
				    <Form.Label>Item Name</Form.Label>
				    <Form.Control id="name" type="text" required 
				    value={itemName} onChange={this.inputChange} 
				    placeholder="Enter Item Name" />
			  	</Form.Group>

			  	<Form.Row>
				    <Col sm="6" md="12" lg="6">
				      	<Form.Group>
							<Form.Label>Item Quantity</Form.Label>
						    <Form.Control id="quantity" type="number" min={1}
						    required value={itemQuantity} 
						    onChange={this.inputChange}  />
						</Form.Group>
				    </Col>
				    <Col sm="6" md="12" lg="6">
				     	<Form.Group>
						    <Form.Label>Item Price</Form.Label>
						    <Form.Control id="price" type="number" required 
						    value={itemPrice} onChange={this.inputChange} 
						    min={0.01} step={0.05} />
						</Form.Group>

				    </Col>
				  </Form.Row>
			  
			  <Button variant="primary" type="submit" onClick={this.itemSubmit}>
			    Add to your chart
			  </Button>
			  <Form.Text>
			  	Or
			  </Form.Text>
			  <Button variant="primary" type="button" onClick={this.itemRandom}>
			    Add Random
			  </Button>
			</Form>
		);
	}
}

export default NewItemForm;