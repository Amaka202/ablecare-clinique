import React from 'react'
import arrowup from '../images/arrow-up.png'
import arrowdown from '../images/arrow-down.png'
import '../styles/patients.css';
import Chart from "react-apexcharts";


function Patients() {

    const incomeData = {
        series: [{
            name: "",
            data: [250, 134, 81, 200]
          }
          ],
          options: {
            chart: {
              stacked: true,
              toolbar: {
                show: false
              },
            },
        
            dataLabels: {
              enabled: false
            },   
          
            stroke: {
              curve: "smooth"
            },
            
            colors:['#9FD356'],
            
            fill: {
              colors: [ '#9FD356']
            },
          
            xaxis: {
              categories: ['Jan', 'Feb', 'Mar', 'Apr'],
              label: {
                  show: false,
              },
              title: {
                text: ''
              }
            },
        
            yaxis: {
                show: false,
              title: {
                text: ''
              }
            }
          }
      }

      const expenseData = {
        series: [{
          name: "",
          data: [200, 81, 120, 197]
        }
        ],
        options: {
          chart: {
            stacked: true,
            toolbar: {
              show: false
            },
          },
      
          dataLabels: {
            enabled: false
          },   
        
          stroke: {
            curve: "smooth"
          },
          
          colors:['#FA824C'],
          
          fill: {
            colors: [ '#FA824C']
          },
        
          xaxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr'],
            show: false,
            title: {
              text: ''
            }
          },
      
          yaxis: {
            show: false,
            title: {
              text: ''
            }
          }
        }
      }
    return (
        <div className='patients-container'>
            <section>
                <p className='section-title'>PATIENTS</p>

                <div className='table-div'>
                <table style={{width:'100%'}}>
                    <tr>
                        <th>S/N</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Country</th>
                        <th>Gender</th>
                    </tr>
                    <tr>
                        <td>001</td>
                        <td>John Smith</td>
                        <td>50</td>
                        <td>Ghana</td>
                        <td>Male</td>

                    </tr>
                    <tr>
                        <td>002</td>
                        <td>Jackson Janet</td>
                        <td>34</td>
                        <td>USA</td>
                        <td>Female</td>
                    </tr>
                    <tr>
                        <td>003</td>
                        <td>Kim Kardashian</td>
                        <td>38</td>
                        <td>USA</td>
                        <td>Female</td>
                    </tr>
                </table>
                </div>
            </section>
            <section>
                <p className='section-title'>BALANCE</p>
                <div className='balance-container'>
                <div className='green-sec'>
                    <div className='inner-flex'>
                        <div className='balance-sec-img-div'>
                            <img src={arrowup} alt='arrow'/>
                        </div>
                        <div>
                            <p>Income</p>
                            <h6>$200,000</h6>
                        </div>
                    </div>
                    <div>
                    <Chart 
                        options={incomeData.options} 
                        series={incomeData.series} 
                        type="area"
                        height="200"

                    />
                    </div>
                </div>
                <div className='red-sec'>
                    <div className='inner-flex'>
                        <div className='balance-sec-img-div'>
                            <img src={arrowdown} alt='arrow'/>
                        </div>
                        <div>
                            <p>Expenses</p>
                            <h6>$100,000</h6>
                        </div>
                    </div>
                    <div>
                    <Chart 
                        options={expenseData.options} 
                        series={expenseData.series} 
                        type="area"
                        height="200"

                    />
                    </div>
                </div>
                </div>
            </section>
        </div>
    )
}

export default Patients
