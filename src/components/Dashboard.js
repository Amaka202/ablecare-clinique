import React from 'react'
import Logo from './Logo';
import { useHistory, Link} from 'react-router-dom';
import '../styles/dashboard.css';
import CustomFooter from './CustomFooter';
import Chart from "react-apexcharts";
import mask from '../images/mask.png'
import house from '../images/house.png'
import patients from '../images/patients.png'
import nurse from '../images/nurse.png'
import notice from '../images/notice.png'
import arrow from '../images/Vector.png'
import CustomButton from './CustomButton';
import '../styles/dash.css';
import '../styles/patients.css';
import {config, incomeData, expenseData} from './graghconfiq';
import arrowup from '../images/arrow-up.png'
import arrowdown from '../images/arrow-down.png'

function Dashboard() {
    const history = useHistory();
    
    const handleLogOut = () => {
        sessionStorage.removeItem('isAuth');
        history.push('/login');
    }

    return (
        <div className='dashboard-container'>
            <header className='dashboard-header'>
                    <Link to='/' style={{color: '#2D3047', textDecoration: 'none', marginLeft: '0.5rem'}} className='dash-logo'>
                    <Logo />
                    
                    </Link>

                <div>
                <CustomButton handleClick={handleLogOut} text='SIGN OUT' />

                </div>
            </header>
            <main className='dashboard-main'>
                <section>

                </section>
                <div className='dashboard-flex'>
                <section className='left-flex'>
                <section className='summary-section'>
                    <h5 className='section-title'>Summary</h5>
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
                                <img src={mask} alt='patient icon'/>

                                </div>
                                <div>
                                    <p>Covid cases </p>
                                    <h5>12000</h5>
                                </div>
                            </div>
                    </div>
                </section>
                <section className='chart-container'>
                <h5 className='section-title'>Patient Statistics</h5>

                    <div className='chart-div'>
                    <Chart 
                        options={config.options} 
                        series={config.series} 
                        type="area"
                        height='500'
                    />
                    </div>
                </section>
                <section className='table-section'>
                <h5 className='section-title'>Patients Data</h5>

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
                    <tr>
                        <td>004</td>
                        <td>Nene Leakes</td>
                        <td>30</td>
                        <td>USA</td>
                        <td>Female</td>
                    </tr>
                    <tr>
                        <td>005</td>
                        <td>Flowa Shaw</td>
                        <td>78</td>
                        <td>Germany</td>
                        <td>Female</td>
                    </tr>
                    <tr>
                        <td>006</td>
                        <td>Khloe Kardashian</td>
                        <td>38</td>
                        <td>USA</td>
                        <td>Female</td>
                    </tr>
                    <tr>
                        <td>007</td>
                        <td>Kelechi Ihenanacho</td>
                        <td>27</td>
                        <td>London</td>
                        <td>Male</td>
                    </tr>
                    {/* <tr>
                        <td>008</td>
                        <td>Drake Aubrey</td>
                        <td>35</td>
                        <td>Canada</td>
                        <td>Male</td>
                    </tr> */}
                </table>
                </div>
                    </section>
                        </section>
                        <section className='right-flex'>
                        <section className='report-section'>
                        <h5 className='section-title'>Reports</h5>
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
                            <hr />
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
                            <hr />
                        </div>
                        <div className='reports-container'>
                            <div className='report-text'>
                                <div className='report-text-img-div'>
                                    <img src={notice} alt='exclaimation'/>
                                </div>
                                <p>A staff invected with covid 19</p>
                            </div>
                            <div className='report-time'>
                                <p>20 minuite ago</p>
                                <div>
                                    <span>Details</span>
                                    <img src={arrow} alt='arrow right'/>
                                </div>
                            </div>
                            <hr />
                        </div>
                       
                    </section>
                    <section className='balance-section'>
                        <h5 className='section-title'>Balance</h5>
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
                </section>
                </div>
            </main>
            <CustomFooter />
        </div>
    )
}

export default Dashboard;
