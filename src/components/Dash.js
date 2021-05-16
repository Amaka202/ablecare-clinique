import React from 'react'
import '../styles/dash.css';
import Chart from "react-apexcharts";
import car from '../images/car.png'
import house from '../images/house.png'
import patients from '../images/patients.png'
import nurse from '../images/nurse.png'
import notice from '../images/notice.png'
import arrow from '../images/Vector.png'

function Dash() {
    const config = {
        series: [{
          name: "Male",
          data: [20, 34, 81, 97, 200, 93, 20, 84, 98]
        },
        {
            name: "Female",
            data: [100, 21, 35, 41, 59, 62, 79, 81, 98]
        }
        ],
        options: {
          chart: {
            stacked: true,
            toolbar: {
              show: false
            },
            animations: {
                enabled: true,
                easing: "linear",
                dynamicAnimation: {
                  enabled: true,
                  speed: 300
                }
              },
          },
      
          dataLabels: {
            enabled: true
          },   
        
          stroke: {
            curve: "smooth"
          },
         
          title: {
            text: 'Patients Statistics',
            align: 'left'
          },
          
          colors:['#FA824C', '#9FD356'],
          
          fill: {
            colors: [ '#FA824C', '#9FD356' ]
          },
        
          xaxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
            title: {
              text: 'Month'
            }
          },
      
          yaxis: {
            title: {
              text: 'Patients Performance'
            }
          }
        }
      }

    return (
        <div className='dash-container'>
            <main>
                <section>
                    <h5 className='section-title'>DASHBOARD</h5>
                    <div className='top-stats-container'>
                            <div className='top-stats'>
                                <div className='top-stats-img-div'>
                                    <img src={patients} alt='patient icon'/>
                                </div>
                                <div>
                                    <p>Total Patients</p>
                                    <h5>20000</h5>
                                </div>
                            </div>
                            <div className='top-stats'>
                                <div className='top-stats-img-div'>
                                <img src={nurse} alt='patient icon'/>

                                </div>
                                <div>
                                    <p>Total Staff</p>
                                    <h5>1500</h5>
                                </div>
                            </div>
                            <div className='top-stats'>
                                <div className='top-stats-img-div'>
                                <img src={house} alt='patient icon'/>

                                </div>
                                <div>
                                    <p>Total Rooms</p>
                                    <h5>200</h5>
                                </div>
                            </div>
                            <div className='top-stats'>
                                <div className='top-stats-img-div'>
                                <img src={car} alt='patient icon'/>

                                </div>
                                <div>
                                    <p>Total Cars</p>
                                    <h5>400</h5>
                                </div>
                            </div>
                    </div>
                </section>
                <section className='chart-container'>
                <h5 className='section-title'>PATIENTS STATISTICS</h5>

                    <div className='chart-div'>
                    <Chart 
                        options={config.options} 
                        series={config.series} 
                        type="area"
                        height='500'
                    />
                    </div>
                </section>
            </main>
            <aside>
                <h5 className='section-title'>REPORTS</h5>
                 <div className='reports-container'>
                    <div className='report-text'>
                        <div className='report-text-img-div'>
                            <img src={notice} alt='exclaimation'/>
                        </div>
                        <p>Second floor bathroom had a broken door</p>
                    </div>
                    <div className='report-time'>
                        <p>1 minuite ago</p>
                        <div>
                            <span>Details</span>
                            <img src={arrow} alt='arrow right'/>
                        </div>
                    </div>
                 </div>
                 <div className='reports-container'>
                    <div className='report-text'>
                        <div className='report-text-img-div'>
                            <img src={notice} alt='exclaimation'/>
                        </div>
                        <p>Fire outbreak in the administrative block</p>
                    </div>
                    <div className='report-time'>
                        <p>10 minuite ago</p>
                        <div>
                            <span>Details</span>
                            <img src={arrow} alt='arrow right'/>
                        </div>
                    </div>
                 </div>
                 <div className='reports-container'>
                    <div className='report-text'>
                        <div className='report-text-img-div'>
                            <img src={notice} alt='exclaimation'/>
                        </div>
                        <p>Security Breach at the theatre</p>
                    </div>
                    <div className='report-time'>
                        <p>1 hour ago</p>
                        <div>
                            <span>Details</span>
                            <img src={arrow} alt='arrow right'/>
                        </div>
                    </div>
                 </div>
            </aside>
        </div>
    )
}

export default Dash;
