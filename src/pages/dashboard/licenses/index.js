import { Button } from '@material-ui/core';
import { Input, Popover } from 'antd';
import React, { Component } from 'react';
import './index.scss';

export default class Licenses extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataList: Array(50).fill(''),
        };
        this.content = (<div className="popover-license-detail">
            <div className="item">Clear metadata</div>
            <div className="item">Send email receipt</div>
            <div className="item">Shuffle key</div>
            <div className="item">Gift days</div>
            <div className="divider"></div>
            <div className="item">Unbind license</div>
            <div className="item">Revoke license</div>
        </div>);
    }

    componentDidMount() {
        this.props.changeType('licenses');
    }

    render() {
        return (<div className="dashboard-licenses-page">
            <div className="title-content">
                <div className="title">all licenses</div>
                <div className="count">1.323</div>
                <div className="search-input">
                    <img src={require('../../../assets/images/search.svg').default} alt="search" />
                    <Input placeholder="Search" />
                </div>
            </div>
            <div className="table">
                <div className="thead">
                    <div className="tr">
                        <div className="th">LICENSE</div>
                        <div className="th">EMAIL</div>
                        <div className="th">STATUS</div>
                        <div className="th">PLAN</div>
                        <div className="th">USER</div>
                        <div className="th">CREATED</div>
                        <div className="th">&nbsp;</div>
                    </div>
                </div>
                <div className="tbody">
                    {this.state.dataList.map((item, index) => <div key={index} className="tr">
                        <div className="td">JOKER-1239-8492-0332-3233</div>
                        <div className="td">piahoffg340@gmail.com</div>
                        <div className="td">Active</div>
                        <div className="td">25 / Month</div>
                        <div className="td">alexheh94#001</div>
                        <div className="td">June1, 5:35 AM</div>
                        <div className="td">
                            <Popover trigger="click" placement="bottomRight" content={this.content}>
                                <Button className="btn-detail" aria-describedby={`detail${index}`}>
                                    <img src={require('../../../assets/images/detail.svg').default} alt="detail" />
                                </Button>
                            </Popover>
                            {/* <Popover id={id} open={open} anchorEl={this.state.anchorEl} onClose={() => this.setState({ anchorEl: null })}
                                anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }} transformOrigin={{ vertical: 'top', horizontal: 'right' }}></Popover> */}
                        </div>
                    </div>)}
                </div>
            </div>
        </div>);
    }
}