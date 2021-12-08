import React, { Component } from "react";
import Chart from "react-apexcharts";
import MainNavbar from '../NavBar/MainNavbar.js';
import axios from 'axios';
import './Graph.css';
class Graph extends Component {
  constructor(props) {
    super(props);

    this.state = {
      
    
    };
  }
  componentDidMount = () => {
    axios.get(`http://localhost:5000/ShowVacations`).then((response) => {
        this.Arry = response.data;
        console.log(this.Arry);
        this.setState({vacations:this.Arry})
  } ) 
}
  render() {
      const dataY=[]
    const dataX=[]
      if(this.state.vacations){
          this.state.vacations.map(item=>{
              if (item.follow>0){
              dataY.push(item.name)
              }
          })
      }

   const options= {
        chart: {
          id: "basic-bar"
        },
        xaxis: {
          categories: dataY
        }
      }

      const series= [
        {
          name: "series-1",
          data: dataX
        }
      ]
      if(this.state.vacations){
        this.state.vacations.map(item=>{
            if (item.follow>0){
            dataX.push(item.follow)
            }
        })
    }

    return (
        
      <div className="app">
          <MainNavbar />
        <div className="row">
            <div className="col-12">
          <div className="mixed-chart">
            <Chart
              options={options}
              series={series}
              type="bar"
              width="1800"
              height="700"
            />
          </div>
        </div>
        </div>
      </div>
    );
  }
}

export default Graph;