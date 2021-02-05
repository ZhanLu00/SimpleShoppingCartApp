import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import Item from './React-Components/Item'
import renderer from 'react-test-renderer';
import ReactDOM from 'react-dom';

test('components renders properly', () => {
	const app = renderer.create(
	  <App />,
	);
	let tree = app.toJSON();
	expect(tree).toMatchSnapshot();

  	const item = renderer.create(
		<Item itemName="Chips" itemQuantity={1} itemPrice={2} itemId={1}>
		</Item>,
  	);
  	tree = item.toJSON();
  	expect(tree).toMatchSnapshot();

});

it('Checking itemlists after adding 2 items ', () => {
	 const wrapper = renderer.create(<App />);
	 const testInstance = wrapper.getInstance();

	let item1 = { name: "chips",
				quantity: 1,
				price: 9.99};
	let item2 = { name: "fried chicken",
				quantity: 2,
				price: 20.00};

	testInstance.setState({ itemInputs: item1 });
	testInstance.addItem(item1.name, item1.quantity, item1.price);
	
	testInstance.setState({ itemInputs: item2 });
	testInstance.addItem(item2.name, item2.quantity, item2.price);
	
	expect(testInstance.state.itemList.length).toBe(2);

});


