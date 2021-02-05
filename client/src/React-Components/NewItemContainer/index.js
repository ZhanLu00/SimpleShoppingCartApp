import React from 'react';
import './style.css';
import NewItemForm from '../NewItemForm/index.js';

class NewItemContainer extends React.Component{

	render(){
		const { itemInputs, onInputChange, addItem, addRandom } = this.props;

		return(
			<div className="newItemContainer">
				
				<NewItemForm className="containerForm" 
							 itemName={itemInputs.name}
							 itemQuantity={itemInputs.quantity}
							 itemPrice={itemInputs.price}
							 inputChange={onInputChange}
							 itemSubmit={addItem}
							 itemRandom={addRandom}/>
			</div>
		);
	}
}

export default NewItemContainer;