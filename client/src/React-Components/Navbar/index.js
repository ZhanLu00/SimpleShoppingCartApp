import './style.css';
import React from 'react';
import NavbarRB from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import NavDropdown from 'react-bootstrap/NavDropdown';

class Navbar extends React.Component{
	constructor(props){
		super(props);
		this.addPromo = this.addPromo.bind(this);
		this.onInputChange = this.onInputChange.bind(this);
		this.changeRegion = this.changeRegion.bind(this);
	}
	
	addPromo(event){
		if (this.props.promoCode!==""){
			event.preventDefault();
			this.props.addPromo(this.props.promoCode);
		}

	}

	onInputChange(event){
		this.props.onInputChange(event.target.id, event.target.value, 2);
	}

	changeRegion(event){
		this.props.changeRegion(event);
	}



	render(){
		const { regionCode, promoCode } = this.props;
		const regionsList = ["Select Region", "Alberta", "British Columbia", "Manitoba", "New Brunswick", 
		"Newfoundland", "Northwest Territories", "Nova Scotia", 
		"Nunavut", "Ontario", "Prince Edward Island", "Quebec", "Saskatchewan",
		"Yukon"];

		const regionSelect = regionsList.map((value, index)=>
			<NavDropdown.Item className={regionCode===index ? "selected":"unselected"}
							key={index} eventKey={index} value={index}>
				{value}
			</NavDropdown.Item>
		);
		
		const curRegion = regionCode ? regionsList[regionCode] :"Select Region";
		
		return (
			<div>
			<NavbarRB sticky="top" variant="dark" bg="dark" expand="sm">
			  <NavbarRB.Brand className="navbarBrand" href="">
				<img 
			        alt=""
			        src="https://cdn.clipart.email/d8a63873616061abe7766d804101fd26_online-shopping-cart-logo-png-png-image_256-256.png"
			        className="d-inline-block align-top"
			      />{' '}
			      Checkout App
			    </NavbarRB.Brand>
			  <NavbarRB.Toggle aria-controls="basic-navbar-nav" />
			  <NavbarRB.Collapse id="basic-navbar-nav">
			    <Nav className="mr-auto">
			      	<Nav.Link href="">Home</Nav.Link>
			      	<NavDropdown title={curRegion}   onSelect={this.changeRegion} id="basic-nav-dropdown">
				        {regionSelect}
				    </NavDropdown>
			    </Nav>
			    <Form inline>
			    <div className="nav-discount">
			      <FormControl type="text" placeholder="promo code"
			      				value={promoCode} onChange={this.onInputChange} id="promoCode" 
			      				required className="mr-sm-2 nav-discount-input" size="sm"/>

			      <Button variant="outline-success" type="submit" size="sm"
			      			onClick={this.addPromo} className="nav-discount-submit">
			      			Discount</Button>
			     </div>
			    </Form>
			  </NavbarRB.Collapse>
			</NavbarRB>
			</div>

		)
	}
}

export default Navbar;