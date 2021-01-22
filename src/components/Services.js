import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './Services.css';

function Services(){
    return(
      <Container fluid="md" >
        <Row style={{marginTop: "100px"}}>
          <Col lg className="text-center">
            <Card style={{ width: '18rem', height: '380px' }}>
	            <Card.Body>
                    <Card.Title><h3>Repair/Fault or Major Repair</h3></Card.Title>
                    <Card.Text className="text-left">
                        <br/>
                        <h4><span>Full Support:&nbsp;</span><span>No</span></h4>
                        <h4><span>Duration:&nbsp;</span><span>depending of the issue</span></h4>
                        <h4><span>Booking:&nbsp;</span><span>any time available</span></h4>
                                            
                    </Card.Text>
                    <h4>€20</h4> 
                    <Button variant="success">Buy</Button>
                </Card.Body>
            </Card>
          </Col>
          <Col lg className="text-center">
            <Card style={{ width: '18rem', height: '380px' }}>
	            <Card.Body>
                    <Card.Title><h3>Major Service</h3></Card.Title>
                    <Card.Text className="text-left">
                        <br/>
                        <h4><span>Full Support:&nbsp;</span><span>Yes</span></h4>
                        <h4><span>Duration:&nbsp;</span><span>1 or 2 Day</span></h4>
                        <h4><span>Booking:&nbsp;</span><span>any time available check out on the booking page</span></h4>
                        <br/>
                        
                    </Card.Text>
                    <h4>€40</h4>
                    <Button variant="success">Buy</Button>
                </Card.Body>
            </Card>
          </Col>
          <Col lg className="text-center">
            <Card style={{ width: '18rem', height: '380px'}}>
	            <Card.Body>
                    <Card.Title><h3>Annual Service</h3></Card.Title>
                    <Card.Text className="text-left">
                        <br></br>
                        <h4><span>Full Support:&nbsp;</span><span>Yes</span></h4>
                        <h4><span>Duration:&nbsp;</span><span>1 year</span></h4>
                        <h4><span>Book:&nbsp;</span><span>pré-book without time wating</span></h4>
                        <br/><br/>
                    </Card.Text>
                    <h4>€125</h4>
                    <Button variant="success">Buy</Button>
                </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    );
}

export default Services;