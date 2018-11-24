import React,{Component } from 'react';
import * as actions from '../actions/index';
import classnames from 'classnames';
import {Redirect} from 'react-router-dom'
import { connect } from 'react-redux';
class ContractForm extends Component {

    constructor(props) {
        super(props);
        
        this.state={
                fusername:this.props.contract?this.props.contract.user.fusername:'',
                susername:this.props.contract?this.props.contract.user.susername:'',
                _id:this.props.contract?this.props.contract._id:null,
                currency:this.props.contract?this.props.contract.currency:0,
                errors:{},
                 loading:false
        }
        // console.log(this.state);
    }
    //get data and set them
    componentWillReceiveProps(nextprops){
        this.setState({
            fusername:nextprops.contract.user.fusername,
            susername:nextprops.contract.user.susername,
            _id:nextprops.contract._id,
            currency:nextprops.contract.currency,
        });
    }
    //get specific item
    componentDidMount(){
        if(this.props.match.params._id){
            this.props.fetchItem(this.props.match.params._id);
        }
    }
    //handel input changing
    handelChange=(event)=>{
       if(this.state.errors[event.target.name])
       {
         var errors=Object.assign({},this.state.errors);
        delete errors[event.target.name]
        this.setState({
            [event.target.name]:event.target.value,
            errors
        });
    }else{
        this.setState({
            [event.target.name]:event.target.value,
        });
    }
}
//add validation when submited
    handelSubmit=(evant)=>{
        evant.preventDefault();
        var errors={};
        if(this.state.fusername==='') errors.fusername="First name can't be empty";
        if(this.state.susername==='') errors.susername="Second name can't be empty";
        if(this.state.currency===0) errors.currency="Please add cost  ";
        this.setState({
            errors
        });
        //is valid to continue
        if(Object.keys(errors).length===0){
            const{fusername,susername,_id,currency}=this.state;
            // this.setState({loading:true})
            if(_id){
                var date = new Date().toLocaleString();
                this.props.UpdateItem({fusername,susername,_id,currency,date})
            }else{
                this.props.saveContract({fusername,susername,currency});
                
              }
              this.setState({loading:true})
            }
           
}
    render() {
        const Form=(
            <form className='ui form' onSubmit={this.handelSubmit}>
            <h1>Add New Contarct</h1>
            <div className={classnames('field',{error:!!this.state.errors.fusername})}>
               <label htmlFor='fusername'>First Name:</label>
               <input
                 name='fusername'
                 id='fusername'
                 value={this.state.fusername}
                 onChange={this.handelChange}
               />
               <span>{this.state.errors.fusername}</span>
            </div>
            <div className={classnames('field',{error:!!this.state.errors.susername})}>
               <label htmlFor='susername'>Second Name:</label>
               <input
                 name='susername'
                 id='susername'
                 value={this.state.susername}
                 onChange={this.handelChange}
               />
               <span>{this.state.errors.fusername}</span>
            </div>
            <div className={classnames('field',{error:!!this.state.errors.currency})}>
               <label htmlFor='currency'>Currency:</label>
               <input
                 name='currency'
                 id='currency'
                 value={this.state.currency}
                 onChange={this.handelChange}
               />
               <span>{this.state.errors.currency}</span>
            </div>
            <div className='icons'>
                 <button className="btn waves-effect waves-light" type="submit" value="Submit" >Submit
                 <i className="material-icons right">send</i>
                 </button>
            </div>
           

         </form >
        );
        return (
           <div>
               {this.state.loading?<Redirect to='/contracts'/>:Form} 
          </div>
        );
    }
}
function mapStateToProps (state, props){
    if(props.match.params._id){
        return{
            contract:state.contracts.find((item)=>item._id===props.match.params._id)
        }
    }else{
        return {contract:null}
    }
}
export default connect(mapStateToProps,actions)(ContractForm);