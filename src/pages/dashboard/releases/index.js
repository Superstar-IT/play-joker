import { Button } from '@material-ui/core';
import { Popover } from 'antd';
import React, { Component } from 'react';
import BorderLinearProgress from '../../../components/border-linear-progress';
import './index.scss';

export default class Releases extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataList: Array(34).fill('')
        };
        this.content = (<div className="popover-release-detail">
            <div className="item">Edit Release</div>
            <div className="item">DeleteRelease</div>
        </div>);
    }

    componentDidMount() {
        this.props.changeType('releases');
    }

    render() {
        return (<div className="dashboard-releases-page">
            <div className="title-content">
                <div className="title">all releases</div>
                <div className="count">34</div>
            </div>
            <div className="releases-content">
                {this.state.dataList.map((item, index) => <div className="release-item" key={index}>
                    <img src={require('../../../assets/images/logo.png').default} alt="logo" className="item-img" />
                    <div className="value">
                        <div className="main-value">340</div>
                        <div className="total-value">/2140</div>
                    </div>
                    <BorderLinearProgress variant="determinate" value={50} />
                    <div className="label">DEMO RELEASE</div>
                    <div className="date">May 23, 03:34 PM</div>
                    <Popover trigger="click" placement="bottomRight" content={this.content}>
                        <Button className="btn-detail">
                            <img src={require('../../../assets/images/detail.svg').default} alt="detail" />
                        </Button>
                    </Popover>
                </div>)}
            </div>
        </div>);
    }
}