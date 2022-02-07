import { Button } from '@material-ui/core';
import { Input, Select } from 'antd';
import React, { Component } from 'react';
import './index.scss';

const { Option } = Select;

export default class Main extends Component {
    componentDidMount() {
        this.props.changeType('main');
    }

    render() {
        return <React.Fragment>
            <div className="title">Main Settings</div>
            <div className="main-settings-content">
                <div className="input-content">
                    <div className="input-item">
                        <div className="label">Release Name</div>
                        <Input />
                    </div>
                    <div className="input-item">
                        <div className="label">Stock Number</div>
                        <Input />
                    </div>
                    <div className="input-item">
                        <div className="label">Password</div>
                        <Input />
                    </div>
                    <div className="input-item">
                        <div className="label">Release Mode</div>
                        <Select>
                            <Option value="raffle">Raffle</Option>
                        </Select>
                    </div>
                    <div className="input-item">
                        <div className="label">Upfront Price</div>
                        <Input />
                    </div>
                    <div className="input-item">
                        <div className="label">Subscription Price</div>
                        <Input placeholder="empty" />
                    </div>
                </div>
                <Button variant="contained" color="primary" className="btn-save">Save Settings</Button>
            </div>
        </React.Fragment>
    }
}