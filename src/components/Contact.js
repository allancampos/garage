import React from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';

function Contact(){

    return(
       <Container fluid="md" >
         <Form style={{marginLeft:100, marginRight:100, marginTop:50}}>
         <div className="text-center">
            <h4>Write to us</h4>
         </div>
            <Form.Group  controlId="validationCustom01">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        placeholder="Name"
                        style={{width:500}}
                    />  
            </Form.Group>  

            <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" style={{width:500}} />
            </Form.Group>
            <Form.Group controlId="formBasic">
                <Form.Label>Message</Form.Label>
                <Form.Control type="textarea" as="textarea" rows="5" placeholder="Message..."  />
            </Form.Group>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
       </Container>
    );

}

export default Contact;