import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Perfil(){
    return(
       <Container fluid="md">
           <div style={{marginTop:20}}> 
            <h4>Perfil Information</h4>
           <Row style={{height:200, border: '1px solid', borderRadius: 10}} className="block-example border border-primary">
            
           </Row>
           <br/>
           <h4>History</h4>
           <Row style={{height:300, border: '1px solid', borderRadius: 10}} className="block-example border border-primary">
            
           </Row>
           </div>
       </Container>
    );
}

export default Perfil;