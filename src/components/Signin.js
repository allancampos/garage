import React from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Signin(){
    return(
       <Container fluid="md" className="align-items-center" >
           <div style={{marginLeft:180, marginRight:100, marginTop:150}}>
            <Form >
                
                <Form.Group as={Row} controlId="formHorizontalEmail">
                    <Form.Label column sm={2}>
                    Email
                    </Form.Label>
                    <Col sm={10}>
                    <Form.Control type="email" placeholder="Email" style={{width: "500px"}} />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} controlId="formHorizontalPassword">
                    <Form.Label column sm={2}>
                    Password
                    </Form.Label>
                    <Col sm={10}>
                    <Form.Control type="password" placeholder="Password" style={{width: "500px"}} />
                    </Col>
                </Form.Group>
                
                <Form.Group as={Row} controlId="formHorizontalCheck">
                    <Col sm={{ span: 10, offset: 2 }}>
                    <Form.Check label="Remember me" />
                    </Col>
                </Form.Group>

                <Form.Group as={Row}>
                    <Col sm={{ span: 3, offset: 2 }}>
                    <Button type="submit">Sign in</Button>
                    </Col>
                    <Col >
                    Don't have account? &nbsp;
                    <Button type="submit">Sign up</Button>
                    </Col>
                </Form.Group>
                
            </Form>
            </div>  
       </Container>
    );
}

export default Signin;
