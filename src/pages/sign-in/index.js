import { Button } from '@material-ui/core';
import React, { Component } from 'react';
import './index.scss';

export default class SignIn extends Component {
    onClickContinue = () => {
        this.props.history.push('/user-dashboard');
    }
    
    render() {
        return (<div className="sign-in-page">
            <div className="sign-in-content">
                <div className="header-content">
                    <img src={require('../../assets/images/logo.png').default} alt="logo" />
                    <div className="title">Dashboard</div>
                </div>
                <div className="joker-tools-title">
                    <div className="access-to-title">access to</div>
                    <div className="title">
                        <span className="tools">JOKER Automation&nbsp;</span>
                        <span className="white">Dashboard</span>
                    </div>
                </div>
                <div className="input-content">
                    <div className="description">Enter your License Key</div>
                    <input placeholder="License Key" />
                    <Button variant="contained" color="primary" onClick={this.onClickContinue}>Continue</Button>
                </div>
                <div className="bottom">© Joker Tools 2021 - All Rights Reserved</div>
            </div>
            <div className="image-content">
            </div>
        </div>);
    }
}