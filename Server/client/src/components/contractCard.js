
import React from 'react';
import {  Link } from "react-router-dom";
import { connect } from 'react-redux';
import * as actions from '../actions/index';
class ContractCard extends React.Component {

  getLocation(){
    return '/contract/'+this.props.data._id;
  }
    render() {
        return (
           <div className='ui card'>
           <div className='content'>
           <div className='header'>User Name:</div>
           <div className='meta'>{this.props.data.user.fusername+" "+this.props.data.user.susername}</div>
           <div className='description'>
             Date :<strong>{this.props.data.date}</strong>
           </div>
           <div className='description'>
           Currency :<strong>{this.props.data.currency}$</strong>
           </div>
         </div>
         <div className='extra content'>
           <div className='ui two buttons'>
             <Link to={this.getLocation()} className='ui green basic button' >
               EDITE
             </Link>
             <button className='ui red basic button' onClick={()=>this.props.deleteContract(this.props.data._id)}>
               DELETE
             </button>
           </div>
         </div>
           </div>
        );
    }
}

export default connect(null,actions)(ContractCard);