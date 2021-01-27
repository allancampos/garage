import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';


function Admin(){
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
      (async () => {
        fetch("https://fields-garage-api.herokuapp.com/bookings")
        .then(res => res.json())
        .then(
          (result) => {
            setIsLoaded(true);
            setItems(result);
          },
          (error) => {
            setIsLoaded(true);
            setError(error);
          }
        )
          
      })();
    
  }, []);

  
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

    const updateLocalItem = (booking, status) => {
      const newItems = [...items];
      const index = newItems.indexOf(booking);
      newItems.splice(index, 1, { ...booking, status });
      setItems(newItems);
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
      {items.map(item => (
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
       </Container>
    );
    }
}

export default Admin;
