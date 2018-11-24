import React,{Component} from 'react';
import ContractCard from './contractCard'
// import { Table } from 'reactstrap';
class ContractList extends Component {
     emptyMessage(){
        return <h3>thers is no contarcts yet in your collection.</h3>;
     }
     contractLis(){
         return (<div className='ui four cards' >
           
                {this.props.contracts.map((oneCollect)=>{
                    return(
                        <ContractCard data={oneCollect} key={oneCollect._id} />
                    );
                })}
      
         </div>);
     }
   render() {
        return (
            <div style={{textAlign: "center"}}>
              {this.props.contracts.length===0?this.emptyMessage():this.contractLis()}
            </div>
        );
    }
}

export default ContractList;