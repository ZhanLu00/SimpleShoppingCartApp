import React from 'react';
import './style.css';
import { Container, Col, Row } from 'react-bootstrap';
import NewItemContainer from '../NewItemContainer/index.js';
import ItemContainer from '../ItemContainer/index.js';

class AppContainer extends React.Component{

	render(){
		const { itemInputs, itemList, onInputChange, addItem, addRandom, 
				removeItem, total, checkout } = this.props;
		return(
			<Container className="appContainer">
				<Row>
					<Col className='newItemContainer' sm='12' md="4" lg='6' xl='5'>
						<NewItemContainer itemInputs={itemInputs}
		      				  onInputChange={onInputChange}
		      				  addItem={addItem}
		      				  addRandom={addRandom}/>
					</Col>
					<Col className='checkoutContainer' sm='12' md="8" lg='6' xl='7'>
						<ItemContainer itemList={itemList} addItem={addItem} 
						removeItem={removeItem} total={total} checkout={checkout}/>
					</Col>
				</Row>

			</Container>
		)
	}
}

export default AppContainer;