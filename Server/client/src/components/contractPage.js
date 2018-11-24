import React,{Component} from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/index';
import ContractList from './contractList';


class ContractsPage extends Component {
    componentDidMount(){
        this.props.fetchContracts();
    }
   render() { 
        return ( 
            <div>
               <ContractList contracts={this.props.contracts} ></ContractList>
            </div>
         );
    }
}

//to get state from redux and pass it into component as props 
function  mapStateToProps(state){
     return {
         contracts: state.contracts
     }
 }
export default connect(mapStateToProps,actions)(ContractsPage);