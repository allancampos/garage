import React, { useState } from 'react';
import { Formik } from 'formik';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';


const Booking = ({ booking = { status: 'Booked', mechanic: 'Patrick', iduser: 'frontend' } }) => {
    const [isLoading, setIsLoading] = useState();
    const [initialValues, setInitialValues] = useState(booking);
    
    // Creates a booking by customer using POST method (API)
    const onSubmit = async (data) => {
        setIsLoading(true);
        const result = await fetch('https://fields-garage-api.herokuapp.com/bookings', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
            body: JSON.stringify(data),
        });

        const json = await result.json();

        if (json.result.n === '1') {
            setInitialValues({});
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
            initialValues={initialValues}>
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
        <Container>

            <Form noValidate onSubmit={handleSubmit} style={{marginLeft:100, marginRight:100, marginTop:50}}>
                    <Form.Group controlId="service">
                        <Form.Label>Select a service</Form.Label>
                        <Form.Control  disabled={isLoading} onChange={handleChange} as="select" name="service" value={values.service}> 
                            <option value="Major Service">Major Service</option>
                            <option value="Annual Service">Annual Service</option>
                            <option value="Repair/Fault">Repair/Fault</option>
                            <option value="Major Repair">Major Repair</option>
                        </Form.Control>
                    </Form.Group>
                    <Form.Row>
                        <Form.Group as={Col} controlId="validationCustom01">
                            <Form.Label>Vehicle make</Form.Label>
                            <Form.Control  disabled={isLoading} onChange={handleChange}
                                required
                                type="text"
                                placeholder="Ex: BMW"
                                style={{width: 300}}
                                name="vehiclemake" value={values.vehiclemake}
                            />  
                        </Form.Group>
                        <Form.Group as={Col} controlId="exampleForm.ControlSelect1" style={{marginLeft:50}}>
                            <Form.Label>Engine type</Form.Label>
                            <Form.Control  disabled={isLoading} onChange={handleChange} as="select" style={{width: 300}} name="enginetype" value={values.enginetype}>
                            <option value="Petrol">Petrol</option>
                            <option value="Diesel">Diesel</option>
                            <option value="Electric">Electric</option>
                            <option value="Hybrid">Hybrid</option>
                            </Form.Control>
                        </Form.Group>  
                    </Form.Row>
                    <Form.Row>
                        <Form.Group  as={Col} controlId="validationCustom01">
                            <Form.Label>Vehicle model</Form.Label>
                            <Form.Control  disabled={isLoading} onChange={handleChange}
                                required
                                type="text"
                                placeholder="Ex: i30, A5"
                                style={{width: 300}}
                                name="vehiclemodel" value={values.vehiclemodel}
                            />  
                        </Form.Group>

                        <Form.Group  as={Col} controlId="validationCustom01" style={{marginLeft:50}}>
                            <Form.Label>Vehicle license number</Form.Label>
                            <Form.Control  disabled={isLoading} onChange={handleChange}
                                required
                                type="text"
                                placeholder="license number"
                                style={{width: 300}}
                                name="licensenumber" value={values.licensenumber}
                            />  
                        </Form.Group>
                        
                    </Form.Row>

                    <Form.Group>
                            <Form.Label>Select a date</Form.Label>
                             <Calendar
                                disabled={isLoading}
                                onChange={(date) => setFieldValue('date', date.toISOString())}
                                tileDisabled={(props) => props.date.getDay() === 0}
                                name="date"
                                value={new Date(values.date)}
                                activeStartDate={new Date()}
                                minDate={new Date()}
                                
                            />
                          
                    </Form.Group>
                        
                   
                    
                    <Form.Group controlId="comments">
                        <Form.Label>Comments</Form.Label>
                        <Form.Control  disabled={isLoading} onChange={handleChange} type="textarea" as="textarea" rows="5" placeholder="note or description about the problem" name="comments"
                                value={values.comments} />
                    </Form.Group>

                    <Button variant="primary" type="submit" disabled={isLoading}>
                        Submit
                    </Button>
                
            </Form>
            
            
        </Container>
        )}
       </Formik>
       
    );
}

export default Booking;