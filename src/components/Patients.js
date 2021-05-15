import React from 'react'
import arrowup from '../images/arrow-up.png'
import arrowdown from '../images/arrow-down.png'
import '../styles/patients.css';
import { Table } from 'rsuite';

const { Column, HeaderCell, Cell, Pagination } = Table;

function Patients() {
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
                    <div>GRAPH</div>
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
                    <div>GRAPH</div>
                </div>
                </div>
            </section>
        </div>
    )
}

export default Patients
