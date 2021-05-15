import React from 'react'
import '../styles/dash.css';
import { FlexboxGrid, Col } from 'rsuite';
import car from '../images/car.png'
import house from '../images/house.png'
import patients from '../images/patients.png'
import nurse from '../images/nurse.png'
import notice from '../images/notice.png'
import arrow from '../images/Vector.png'

function Dash() {
    return (
        <div className='dash-container'>
            <main>
                <section>
                    <p className='section-title'>DASHBOARD</p>
                    <div className='top-stats-container'>
                    <FlexboxGrid>
                        <FlexboxGrid.Item componentClass={Col} colspan={24} md={6}>
                            <div className='top-stats'>
                                <div className='top-stats-img-div'>
                                    <img src={patients} alt='patient icon'/>
                                </div>
                                <div>
                                    <p>Total Patients</p>
                                    <h5>20000</h5>
                                </div>
                            </div>
                        </FlexboxGrid.Item>
                        <FlexboxGrid.Item componentClass={Col} colspan={24} md={6}>
                            <div className='top-stats'>
                                <div className='top-stats-img-div'>
                                <img src={nurse} alt='patient icon'/>

                                </div>
                                <div>
                                    <p>Total Staff</p>
                                    <h5>20000</h5>
                                </div>
                            </div>
                        </FlexboxGrid.Item>
                        <FlexboxGrid.Item componentClass={Col} colspan={24} md={6}>
                            <div className='top-stats'>
                                <div className='top-stats-img-div'>
                                <img src={house} alt='patient icon'/>

                                </div>
                                <div>
                                    <p>Total Rooms</p>
                                    <h5>20000</h5>
                                </div>
                            </div>
                        </FlexboxGrid.Item>
                        <FlexboxGrid.Item componentClass={Col} colspan={24} md={6}>
                            <div className='top-stats'>
                                <div className='top-stats-img-div'>
                                <img src={car} alt='patient icon'/>

                                </div>
                                <div>
                                    <p>Total Cars</p>
                                    <h5>20000</h5>
                                </div>
                            </div>
                        </FlexboxGrid.Item>
                    </FlexboxGrid>
                    </div>
                </section>
                <section>

                </section>
            </main>
            <aside>
                <p className='section-title'>REPORTS</p>
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
