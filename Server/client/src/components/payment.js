import  React ,{Component} from 'react';
import StripeCheckout from 'react-stripe-checkout';
// import function from './../reducer/authReducer';
// import * as actions from '../action';
// import { connect } from 'react-redux';

class Payment extends Component{
   render(){
       return(
           <StripeCheckout
               name={"Emaily"}
               description={"Add 10 LE  for one time"}
               currency={"USD"}
               amount={1000}
               token={()=>{}}
               stripeKey={'pk_test_RcC64UCmCEEt4d9KSuFy95E6'}
               panelLabel="Give Money" 
               ComponentClass="div"
               reconfigureOnUpdate={false}
           >
           <button className="btn btn-primary">
           Add Your Credit
         </button>
           </StripeCheckout>
       );
   }

}

export default Payment;