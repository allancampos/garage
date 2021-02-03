import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import { Formik } from 'formik';



function Admin({ user = { usertype: 'staff', key: 'staff123'}}){
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [booking, setBooking] = useState([]);
  const [isLoading, setIsLoading] = useState();
  const [initialValues, setInitialValues] = useState(user);
  const [items,setItems] = useState();

  // Get all bookings from API
  useEffect(() => {
      (async () => {
        fetch("https://fields-garage-api.herokuapp.com/bookings")
        .then(res => res.json())
        .then(
          (result) => {
            setIsLoaded(true);
            setBooking(result);
          },
          (error) => {
            setIsLoaded(true);
            setError(error);
          }
        )
          
      })();
    
  }, []);

 
  
  
  // Create a staff account using POST method (API)
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

      // If n == 1, The staff account was created
      if (json.result.n === '1') {
          setInitialValues({});
          alert('Staff added');
      } else {
          if (json.error) {
              console.log(json);
          }
      }

      setIsLoading(false);
  }
    // Change a specific booking status 
    const changeStatus = async ({ _id, status }) => {
      setIsLoaded(false);
      const response = await fetch('https://fields-garage-api.herokuapp.com/bookings/updateStatus', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ _id, status }),
      });

      const result = await response.json();
      if (result.n === '1') {
        // show success
        
      } else {
        setIsLoaded(true);
        setError(result && result.error);
      }

      setIsLoaded(true);
    };

    // Update Booking List after change a bookings status
    const updateLocalItem = (bk, status) => {
      const newItems = [...booking];
      const index = newItems.indexOf(bk);
      newItems.splice(index, 1, { ...bk, status });
      setBooking(newItems);
    };

     // Change a specific booking status 
     const addItems = async (data) => {
      setIsLoaded(false);
      const response = await fetch('https://fields-garage-api.herokuapp.com/items', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      if (result.n === '1') {
        // show success
        
      } else {
        setIsLoaded(true);
        setError(result && result.error);
      }

      setIsLoaded(true);
    };

    if(error){
        return <div>Error: {error.message}</div>;
    } 
    else if (!isLoaded) {
        return <div>Loading...</div>;
    }else{ 
    return(
       <Container fluid="md" className="align-items-center" >
         <div style={{marginLeft:180, marginRight:100, marginTop:50}}>
          <div style={{padding: 10, border: '1px solid', borderRadius: 10, borderColor: '#007bff'}}>
         <h2 style={{color:'#007bff'}}>ADD STAFF</h2>
           
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
    <Container fluid="md" className="align-items-center">
        <div >
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
                <br/>
                <Button variant="primary" type="submit" disabled={isLoading}>
                    Add
                </Button>
            
        </Form>
        </div>
    </Container>
    )}
   </Formik>

           </div>
           <br/>
           {/*
            <div>
            <h2 style={{color:'#007bff'}}>ADD ITEMS</h2><br/>
            <Formik
        // validationSchema={schema}
        onSubmit={addItems}
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
    <Container fluid="md" className="align-items-center">
        <div >
        <Form noValidate onSubmit={handleSubmit} style={{marginLeft:100, marginRight:100, marginTop:50}}>
                
                    <Form.Group as={Row} controlId="validationCustom01">
                        <Form.Label column sm={2}>Item type</Form.Label>
                        <Col sm={10}>
                        <Form.Control  disabled={isLoading} onChange={handleChange}
                            required
                            type="text"
                            style={{width: 500}}
                            placeholder="Item type"
                            name="itemtype" value={values.itemtype}
                        />  </Col>
                    </Form.Group>
                    <Form.Group as={Row} controlId="exampleForm.ControlSelect1" >
                        <Form.Label column sm={2}>Item</Form.Label>
                        <Col sm={10}>
                        <Form.Control  disabled={isLoading} onChange={handleChange}
                            required
                            type="text"
                            placeholder="Item"
                            style={{width: 500}}
                            name="item" value={values.item}
                        /> </Col>
                    </Form.Group>  
                
                    <Form.Group  as={Row} controlId="validationCustom01">
                        <Form.Label column sm={2}>Price (EUR)</Form.Label>
                        <Col sm={10}>
                        <Form.Control  disabled={isLoading} onChange={handleChange}
                            required
                            type="number"
                            placeholder="0"
                            style={{width: 100}}
                            name="cost" value={values.cost}
                        />  </Col> 
                    </Form.Group>
                <br/>
                <Button variant="primary" type="submit" disabled={isLoading}>
                    Add
                </Button>
            
        </Form>
        </div>
    </Container>
    )}
   </Formik>
            </div> 
        */}
            <br/>
           <div style={{padding: 10, border: '1px solid', borderRadius: 10, borderColor: '#007bff'}}>
         <h2 style={{color:'#007bff'}}>BOOKINGS</h2><br/>
         {/*
        <ul>
          <div>
        {items.map(item => (
          <li key={item._id}>
            {item.vehiclemake}{item.vehiclemodel}{item.status}
            <select value={item.status} onChange={(ev) => updateLocalItem(item, ev.target.value)}>
              <option value="Booked">Booked</option>
              <option value="Service">In Service</option>
              <option value="Fixed/Completed">Fixed/Completed</option>
              <option value="Collected">Collected</option>
              <option value="Unrepairable/Scrapped">Unrepairable/Scrapped</option>
            </select>
            <button onClick={() => changeStatus(item)}>Update status</button>
          </li>
        ))}
        </div>
      </ul>
        */}
      {booking.map(item => (
        <Card key={item._id}>
        
          <Card.Header>{item.date}</Card.Header>
          <Card.Body>
            <Card.Title>{item.vehiclemake}</Card.Title>
            <Card.Text>
              <b>Vehicle model:</b> {item.vehiclemodel} &nbsp;
              <b>Vehicle engine type:</b> {item.enginetype} &nbsp;
              <b>License number: </b> {item.licensenumber}<br/>
              <b>Comments: </b>{item.comments}<br/>
              <b>Mechanic: </b> {item.mechanic}<br/>
            </Card.Text>
            <select value={item.status} onChange={(ev) => updateLocalItem(item, ev.target.value)}>
              <option value="Booked">Booked</option>
              <option value="Service">In Service</option>
              <option value="Fixed/Completed">Fixed/Completed</option>
              <option value="Collected">Collected</option>
              <option value="Unrepairable/Scrapped">Unrepairable/Scrapped</option>
            </select>
            &nbsp;&nbsp;
            <Button variant="primary" onClick={() => changeStatus(item)}>Update status</Button>
          </Card.Body>
        
      </Card>
      ))}

      </div>
      </div>
       </Container>
    );
    }
}

export default Admin;
