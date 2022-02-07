import { Button } from '@material-ui/core';
import { Popover } from 'antd';
import React, { Component } from 'react';
import ScrollContainer from 'react-indiana-drag-scroll';
import BorderLinearProgress from '../../../components/border-linear-progress';
import './index.scss';

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataList: Array(10).fill('')
        };
        this.content = (<div className="popover-release-detail">
            <div className="item">Edit Release</div>
            <div className="item">DeleteRelease</div>
        </div>);
    }

    componentDidMount() {
        this.props.changeType('home');
    }

    onClickViewReleases = () => {
        this.props.history.push('/dashboard/releases');
    }

    render() {
        return (<div className="dashboard-home-page">
            <div className="total-content">
                <div className="total-item">
                    <div className="label">RETENTION RATE</div>
                    <div className="value">85%</div>
                </div>
                <div className="total-item">
                    <div className="label">TOTAL MEMBERS</div>
                    <div className="value">1.325</div>
                </div>
                <div className="total-item">
                    <div className="label">MONTHLY REVENUE</div>
                    <div className="value">$34.025</div>
                </div>
                <div className="total-item cancel">
                    <div className="label">CANCELLATIONS</div>
                    <div className="value">12</div>
                </div>
            </div>
            <div className="data-content">
                <div className="title-content">
                    <div className="title">RECENT RELEASES</div>
                    <div className="count">13</div>
                    <Button className="btn-release" onClick={this.onClickViewReleases}>{`VIEW ALL RELEASES >`}</Button>
                </div>
                <div className="scroll-content">
                    <ScrollContainer vertical={false}>
                        <div className="release-content">
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
                    </ScrollContainer>
                    <div className="mask"></div>
                </div>
            </div>
        </div>);
    }
}