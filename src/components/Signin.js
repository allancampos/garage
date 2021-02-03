import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Formik } from 'formik';
import {Link} from 'react-router-dom';


function Signin(){
    const [isLoading, setIsLoading] = useState();

    /* onSubmit - function get user by email from API*/
    const onSubmit = async (data) => {
        setIsLoading(true);
        const result = await fetch('https://fields-garage-api.herokuapp.com/users', {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
            body: JSON.stringify(data),
        });

        const json = await result.json();

        if (json.result.n === '1') {
            //setInitialValues({});
            alert('Login successful');
        } else {
            if (json.error) {
                console.log(json);
            }
        }

        setIsLoading(false);
    }


    return(
        <Formik
        // validationSchema={schema}
        onSubmit={onSubmit}
        >
        {({
            handleSubmit,
            handleChange,
            setFieldValue,
            handleBlur,
            values,
            touched,
            isValid,
            errors,
        }) => (
       <Container fluid="md" className="align-items-center" >
           <div style={{marginLeft:180, marginRight:100, marginTop:150}}>
            {/*<Form noValidate onSubmit={handleSubmit}>*/}
            <Form>
                <Form.Group as={Row} controlId="formHorizontalEmail">
                    <Form.Label column sm={2}>
                    Email
                    </Form.Label>
                    <Col sm={10}>
                    <Form.Control disabled={isLoading} onChange={handleChange} name="email"  type="email" placeholder="Email" style={{width: "500px"}} />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} controlId="formHorizontalPassword">
                    <Form.Label column sm={2}>
                    Password
                    </Form.Label>
                    <Col sm={10}>
                    <Form.Control disabled={isLoading} onChange={handleChange}  type="password" placeholder="Password" style={{width: "500px"}}  />
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
                    <Link to="/Signup">
                    <Button type="submit">Sign up</Button>
                    </Link>
                    
                    </Col>
                </Form.Group>
                
            </Form>
            </div>  
       </Container>
    )}
    </Formik>
    );
}

export default Signin;
