import Chart  from 'react-apexcharts'
import React, { Component } from 'react';
import { connect } from 'react-redux';

 class Charts extends Component {
     constructor(props) {
         super(props);
         this.state = {
            options: {
              chart: {
                id: 'just-for-test'
              },
              xaxis: {
                categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998]
              }
            },
            series: [{
              name: 'series-1',
              data: [30, 40, 45, 50, 49, 60, 70, 91]
            }]
          }
        }
     
    render() {
        
        return (
            <div className='ui container'style={{textAlign:'center'}}>
             {this.props.contracts? <Chart options={this.state.options} series={this.state.series} type="bar" width={500} height={320} />:<h1>Firstly Add Your Contarcts To Display The Graph</h1>}
            </div>
        );
    }
}
function mapStateToProps(state){
    return {
        contracts: state.contracts
    }
}
export default connect(mapStateToProps)(Charts);
