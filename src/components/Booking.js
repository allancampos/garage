import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';


function Booking(){
    const [value, onChange] = useState(new Date());

    return(
       <Container>
           <Form style={{marginLeft:100, marginRight:100, marginTop:50}}>
                <Form.Group controlId="exampleForm.ControlSelect1">
                    <Form.Label>Select a service</Form.Label>
                    <Form.Control as="select" > 
                    <option>Major Service</option>
                    <option>Annual Service</option>
                    <option>Repair/Fault</option>
                    <option>Major Repair</option>
                    </Form.Control>
                </Form.Group>
                <Form.Row>
                    <Form.Group as={Col} controlId="validationCustom01">
                        <Form.Label>Vehicle make</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            placeholder="Ex: BMW"
                            style={{width: 300}}
                        />  
                    </Form.Group>
                    <Form.Group as={Col} controlId="exampleForm.ControlSelect1" style={{marginLeft:50}}>
                        <Form.Label>Engine type</Form.Label>
                        <Form.Control as="select" style={{width: 300}}>
                        <option>Petrol</option>
                        <option>Diesel</option>
                        <option>Eletric</option>
                        <option>Hybrid</option>
                        </Form.Control>
                    </Form.Group>  
                </Form.Row>
                <Form.Row>
                    <Form.Group  as={Col} controlId="validationCustom01">
                        <Form.Label>Vehicle model</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            placeholder="Ex: i30, A5"
                            style={{width: 300}}
                        />  
                    </Form.Group>

                    <Form.Group  as={Col} controlId="validationCustom01" style={{marginLeft:50}}>
                        <Form.Label>Vehicle license number</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            placeholder="license number"
                            style={{width: 300}}
                        />  
                    </Form.Group>
                    
                </Form.Row>

                <Form.Group>
                        <Form.Label>Select a date</Form.Label>
                        <Calendar
                            onChange={onChange}
                            value={value}
                        />
                </Form.Group>
                
                <Form.Group controlId="comments">
                    <Form.Label>Comments</Form.Label>
                    <Form.Control type="textarea" as="textarea" rows="5" placeholder="note or description about the problem"  />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
            
           </Form>
       </Container>
    );
}

export default Booking;