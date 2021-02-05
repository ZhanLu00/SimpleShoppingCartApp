import React from 'react';
import { Modal, Form, Col, Row, Button } from 'react-bootstrap';


class ChangeRegion extends React.Component{
	constructor(props){
		super(props);
		this.handleClose() = this.handleClose().bind(this);
		this.
	}
	handleClose(event){
		this.props.closeRegions();
	}

	render(){
		const { showRegions, closeRegions, updateCloseRegions } = this.props;
		return(
			<Modal show={showRegions} onHide={this.handleClose}>
				<Modal.Header closeButton>
		          	<Modal.Title>Change Region</Modal.Title>
		        </Modal.Header>
		        <Modal.Body>
		        	<Form>
		        		<Form.Row>
		        			<Col><Form.Check inline id="0r" label="Alberta" type="checkbox"/></Col>
		        			<Col><Form.Check inline id="1r" label="British Columbia" type="checkbox"/></Col>
		        			<Col><Form.Check inline id="2r" label="Manitoba" type="checkbox"/></Col>
		        			<Col><Form.Check inline id="3r" label="New Brunswick" type="checkbox"/></Col>
		        		</Form.Row>
		        		<Form.Row>
		        			<Col><Form.Check inline id="4r" label="Newfoundland and Labrador" type="checkbox"/></Col>
		        			<Col><Form.Check inline id="5r" label="Northwest Territories" type="checkbox"/></Col>
		        			<Col><Form.Check inline id="6r" label="Nova Scotia" type="checkbox"/></Col>
		        			<Col><Form.Check inline id="7r" label="Nunavut" type="checkbox"/></Col>
		        		</Form.Row>
		        		<Form.Row>
		        			<Col><Form.Check inline id="8r" label="Ontario" type="checkbox"/></Col>
		        			<Col><Form.Check inline id="9r" label="Prince Edward Island" type="checkbox"/></Col>
		        			<Col><Form.Check inline id="10r" label="Quebec" type="checkbox"/></Col>
		        			<Col><Form.Check inline id="11r" label="Saskatchewan" type="checkbox"/></Col>
		        		</Form.Row>
		        		<Form.Row>
		        			<Col><Form.Check inline id="8r" label="Yukon" type="checkbox"/></Col>
		        			<Col></Col>
		        			<Col></Col>
		        			<Col></Col>
		        		</Form.Row>
		        	</Form>
		        </Modal.Body>
		        <Modal.Footer>
		          	<Button variant="secondary" onClick={this.closeRegions}>
		            	Close
		          	</Button>
		          	<Button variant="primary" onClick={this.updateCloseRegions}>
		            	Save Changes
		          	</Button>
		        </Modal.Footer>
			</Modal>
		);
	}
}

export default ChangeRegion;