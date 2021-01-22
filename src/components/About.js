import React from 'react';
import Container from 'react-bootstrap/Container';
import img from '../image/aboutgarage.jpg';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function About(){
    return(
       <Container fluid="md" >
           <Row style={{marginLeft:100, marginRight:100, marginTop:100}}>
               <Col>
               
                Ger's garage was founded in 2020 in Dublin. Small garage that provides automotive services 
                by well qualified specialists to service vehicles such as cars, small vans, 
                motorcycles and small buses. Despite being a new and small company, 
                Ger's garage is one of the favorites of the celebrities who live around and 
                well evaluated by the magazine car drive.
               </Col>
               <Col>
                <img src={img} alt="image" style={{width:"100%"}} />
               </Col>

           </Row>
           
           
       </Container>
    );
}

export default About;