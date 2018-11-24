import React, { Component } from 'react';
import { Route, Link } from "react-router-dom";
import ContractPage from './components/contractPage';
import ContractForm from './components/ContractForm';
import Charts from './components/chart';
import Payment from './components/payment'
// import SingleContract from './components/singlecontract'
class App extends Component {
  renderpay(){
    return<Payment/>
  }
  header(){
    return(
      <nav>
      <div className="nav-wrapper">
        <a href="/" className="brand-logo">CRUD APP</a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li><Payment>ADD MONEY</Payment></li>
        </ul>
      </div>
    </nav>
    );
  }
  render() {
    return (
      <div >
      {this.header()}
      <div className="ui container">
        <div className='ui three item menu'>
           <Link className= 'item'to="/" >Home</Link>
           <Link className= 'item'to="/contracts">Contracts</Link>
           <Link className= 'item'to="/contracts/new">Add New Contact</Link>       
        </div>
        <Route exact  path='/' component={Charts}/>
        <Route exact  path='/contracts' component={ContractPage}/>
        <Route exact  path='/contracts/new' component={ContractForm}/>
        <Route exact  path='/contract/:_id' component={ContractForm}/>
      </div>
      </div>
    );
  }
}

export default App;
