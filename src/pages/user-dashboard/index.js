import { Button } from '@material-ui/core';
import React, { Component } from 'react';
import './index.scss';

export default class UserDashboard extends Component {
    onClickDashboard = () => {
        this.props.history.push('/dashboard/home');
    }

    render() {
        return (<div className="user-dashboard-page">
            <div className="header-bar">
                <div className="header-title">
                    <img src={require('../../assets/images/logo.png').default} alt="logo" />
                    <div className="title">Dashboard</div>
                </div>
                <div className="user-info">
                    <div className="info">
                        <div className="name">Alexhehe94#0001</div>
                        <div className="detail">User since 6 months.</div>
                    </div>
                    <div className="avatar">
                        <img src={require('../../assets/images/logo.png').default} alt="avatar" />
                    </div>
                </div>
                <img src={require('../../assets/images/user-header.png').default} className="background-image" alt="background" />
                <div className="transparent"></div>
            </div>
            <div className="dashboard-content">
                <div className="user-info-content">
                    <div className="title">User Informations</div>
                    <div className="card">
                        <img src={require('../../assets/images/card.png').default} className="card-img" alt="card" />
                        <img src={require('../../assets/images/mastercard.png').default} className="mastercard" alt="mastercard" />
                        <div className="number">**** **** **** 1289</div>
                        <div className="date">02/03</div>
                    </div>
                    <Button variant="contained" color="secondary" className="btn-cancel">Cancel Subscription</Button>
                    <div className="email-title">your email</div>
                    <div className="email">joker.tools@gmail.com</div>
                </div>
                <div className="other-content">
                    <div className="license-information">
                        <div className="title">License Informations</div>
                        <div className="key-title">your license key</div>
                        <div className="input-content">
                            <div className="password">
                                <input type="password" />
                                <img src={require('../../assets/images/key.svg').default} className="key" alt="key" />
                                <img src={require('../../assets/images/eye.svg').default} className="eye" alt="eye" />
                                <img src={require('../../assets/images/copy.svg').default} className="copy" alt="copy" />
                            </div>
                            <Button variant="contained" color="secondary" className="btn-unbind">Unbind Key</Button>
                        </div>
                        <div className="description">Your license key will expire in 40 days.</div>
                    </div>

                    <Button className="btn-primary" startIcon={<img src={require('../../assets/images/chat.svg').default} alt="chat" style={{ width: 21 }} />}>Join Discord</Button>
                    <Button className="btn-primary" startIcon={<img src={require('../../assets/images/download.svg').default} alt="download" style={{ width: 16 }} />}>Download Software</Button>
                    <Button className="btn-secondary" startIcon={<img src={require('../../assets/images/logout.svg').default} alt="logout" style={{ width: 28 }} />}>Logout</Button>
                </div>
            </div>
            <div className="bottom" onClick={this.onClickDashboard}>© Joker Tools 2021 - All Rights Reserved</div>
        </div>);
    }
}