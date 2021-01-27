// Components
import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Menu from './components/Menu';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import Booking from './components/Booking';
import Perfil from './components/Perfil';
import Signin from './components/Signin';
import Admin from './components/Admin';
import Signup from './components/Signup';
import Container from 'react-bootstrap/Container';

// CSS
import './App.css';


class App  extends React.Component {
  render(){
    return ( 
    <Router>
      <div> 
        <Menu/>
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/Services" exact component={Services}/>
          <Route path="/About" exact component={About}/>
          <Route path="/Contact" exact component={Contact}/>
          <Route  path="/Booking" exact component={Booking}/>
          <Route path="/Perfil" exact component={Perfil}/>
          <Route path="/Admin" exact component={Admin}/>
          <Route path="/Signin" exact component={Signin}/>
          <Route path="/Signup" exact component={Signup}/>
        </Switch>
      </div>
    </Router>
  );
}
}

const Home = () => (
  <Container fluid="md">
    <div className="home-body" style={{marginTop: "200px"}}>
      <h1> Welcome to Ger's Garage</h1>
      <h6> We are the best brand in Ireland to fix and repair vehicles.</h6>
    </div>
    
  </Container>
)
export default App;


