import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Home from './home';
import Licenses from './licenses';
import Releases from './releases';
import Settings from './settings';
import './index.scss';
import { Button, Dialog, IconButton } from '@material-ui/core';
import { Input, Popover, Select } from 'antd';
import { Close, Menu } from '@material-ui/icons';

const { Option } = Select;

export default class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            type: '',
            showCreateRelease: false,
            showGenerateLicense: false,
            showMenu: false
        };
        this.contentMenu = (<div className="popover-menu">
            <div className="item" onClick={this.onClickGenerateLicense}>Generate License</div>
            <div className="item" onClick={this.onClickCreateRelease}>Create Release</div>
        </div>);
    }

    onClickHome = () => {
        this.props.history.push('/dashboard/home');
    }

    onClickLicenses = () => {
        this.props.history.push('/dashboard/licenses');
    }

    onClickReleases = () => {
        this.props.history.push('/dashboard/releases');
    }

    onClickSettings = () => {
        this.props.history.push('/dashboard/settings');
    }

    onClickGenerateLicense = () => {
        this.setState({ showGenerateLicense: true, showMenu: false });
    }

    onClickCreateRelease = () => {
        this.setState({ showCreateRelease: true, showMenu: false });
    }

    onChangeType = (type) => {
        this.setState({ type });
    }

    render() {
        return (<React.Fragment>
            <div className="dashboard-page">
                <div className="header-content">
                    <div className="header-title">
                        <img src={require('../../assets/images/logo.png').default} alt="logo" />
                        <div className="title">Dashboard</div>
                    </div>
                    <div className="user-info">
                        <div className="name">Alexhehe94#0001</div>
                        <div className="avatar">
                            <img src={require('../../assets/images/logo.png').default} alt="avatar" />
                        </div>
                        <Button className="btn-logout">
                            <img src={require('../../assets/images/logout.svg').default} alt="logout" />
                            <span className="text">Logout</span>
                        </Button>
                    </div>
                </div>
                <div className="page-tab-content">
                    <div className="tab-content">
                        <div className={this.state.type === 'home' ? "tab-item active" : "tab-item"} onClick={this.onClickHome}>Home</div>
                        <div className={this.state.type === 'licenses' ? "tab-item active" : "tab-item"} onClick={this.onClickLicenses}>Licenses</div>
                        <div className={this.state.type === 'releases' ? "tab-item active" : "tab-item"} onClick={this.onClickReleases}>Releases</div>
                        <div className={this.state.type === 'settings' ? "tab-item active" : "tab-item"} onClick={this.onClickSettings}>Settings</div>
                    </div>
                    <div className="other-content">
                        <Button variant="outlined" color="primary" className="btn-action"
                            onClick={() => this.setState({ showGenerateLicense: true })}>Generate License</Button>
                        <Button variant="contained" color="primary" className="btn-action"
                            onClick={() => this.setState({ showCreateRelease: true })}>Create Release</Button>

                        <Popover onVisibleChange={(visible) => this.setState({ showMenu: visible })} trigger="click" content={this.contentMenu}
                            placement="bottomRight" visible={this.state.showMenu}>
                            <IconButton className="btn-menu">
                                <Menu fontSize="large" />
                            </IconButton>
                        </Popover>
                    </div>
                </div>
                <Route path="/dashboard/home" render={() => <Home changeType={this.onChangeType} {...this.props} />} />
                <Route path="/dashboard/licenses" render={() => <Licenses changeType={this.onChangeType} {...this.props} />} />
                <Route path="/dashboard/releases" render={() => <Releases changeType={this.onChangeType} {...this.props} />} />
                <Route path="/dashboard/settings" render={() => <Settings changeType={this.onChangeType} {...this.props} />} />
                <div className="bottom">© Joker Tools 2021 - All Rights Reserved</div>
            </div>

            <Dialog open={this.state.showCreateRelease} className="dialog-create-release">
                <div className="title-content">
                    <div className="title">create release</div>
                </div>
                <IconButton className="btn-close" onClick={() => this.setState({ showCreateRelease: false })}><Close /></IconButton>
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
                        <div className="label">Subcription Price</div>
                        <Input />
                    </div>
                </div>
                <Button variant="contained" color="primary" className="btn-submit"
                    onClick={() => this.setState({ showCreateRelease: false })}>Create Release</Button>
            </Dialog>

            <Dialog open={this.state.showGenerateLicense} className="dialog-generate-license">
                <div className="title-content">generate license</div>
                <IconButton className="btn-close" onClick={() => this.setState({ showGenerateLicense: false })}><Close /></IconButton>

                <div className="input-item">
                    <div className="label">Type of License</div>
                    <Select>
                        <Option value="weekly">Weekly</Option>
                    </Select>
                </div>
                <div className="input-item">
                    <div className="label">Email Address</div>
                    <Input placeholder="Email Address" />
                </div>

                <Button variant="contained" color="primary" className="btn-submit"
                    onClick={() => this.setState({ showGenerateLicense: false })}>Generate</Button>
            </Dialog>
        </React.Fragment>);
    }
}