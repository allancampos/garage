import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import { Formik } from 'formik';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';

const  Signup = ( user = { usertype: 'customer'}) => {
    const [isLoading, setIsLoading] = useState();
    const [initialValues, setInitialValues] = useState(user);

    /* onSubmit - function creates an user account using POST method(API) */
    const onSubmit = async (data) => {
        setIsLoading(true);
        const result = await fetch('https://fields-garage-api.herokuapp.com/users', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
            body: JSON.stringify(data),
        });

        const json = await result.json();
        /* If n == 1, The user account was created */
        if (json.result.n === '1') {
            setInitialValues({});
            alert('Account sucessfully created');
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
        initialValues={initialValues}
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
    <Container fluid="md" className="align-items-center">
        <div style={{marginLeft:180, marginRight:100, marginTop:50}}>
        <Form noValidate onSubmit={handleSubmit} style={{marginLeft:100, marginRight:100, marginTop:50}}>
                
                    <Form.Group as={Row} controlId="validationCustom01">
                        <Form.Label column sm={2}>Name</Form.Label>
                        <Col sm={10}>
                        <Form.Control  disabled={isLoading} onChange={handleChange}
                            required
                            type="text"
                            style={{width: 500}}
                            placeholder="Name"
                            name="name" value={values.name}
                        />  </Col>
                    </Form.Group>
                    <Form.Group as={Row} controlId="exampleForm.ControlSelect1" >
                        <Form.Label column sm={2}>Email</Form.Label>
                        <Col sm={10}>
                        <Form.Control  disabled={isLoading} onChange={handleChange}
                            required
                            type="email"
                            placeholder="Email"
                            style={{width: 500}}
                            name="email" value={values.email}
                        /> </Col>
                    </Form.Group>  
                
                    <Form.Group  as={Row} controlId="validationCustom01">
                        <Form.Label column sm={2}>Address</Form.Label>
                        <Col sm={10}>
                        <Form.Control  disabled={isLoading} onChange={handleChange}
                            required
                            type="text"
                            placeholder="Address"
                            style={{width: 500}}
                            name="address" value={values.address}
                        />  </Col> 
                    </Form.Group>

                    <Form.Group  as={Row} controlId="validationCustom01" >
                        <Form.Label column sm={2}>Phone</Form.Label>
                        <Col sm={10}>
                        <Form.Control  disabled={isLoading} onChange={handleChange}
                            required
                            type="text"
                            placeholder="Phone"
                            style={{width: 500}}
                            name="phone" value={values.phone}
                        />  </Col>
                    </Form.Group>

                    <Form.Group as={Row} controlId="formHorizontalPassword">
                    <Form.Label column sm={2}>
                    Password
                    </Form.Label>
                    <Col sm={10}>
                    <Form.Control disabled={isLoading} onChange={handleChange} 
                    type="password" placeholder="Password" style={{width: "500px"}} name="key" value={values.key} />
                    </Col>
                    </Form.Group>
                <br/>
                <Button variant="primary" type="submit" disabled={isLoading}>
                    Sign Up
                </Button>
            
        </Form>
        </div>
    </Container>
    )}
   </Formik>
    );
}

export default Signup;