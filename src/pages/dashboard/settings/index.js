import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Connections from './connections';
import './index.scss';
import Main from './main';
import Options from './options';
import Others from './others';
import Theme from './theme';

export default class Settings extends Component {
    constructor(props) {
        super(props);
        this.state = {
            type: ''
        };
    }

    componentDidMount() {
        this.props.changeType('settings');
    }

    onChangeType = (type) => {
        this.setState({ type });
    }

    onClickMain = () => {
        this.props.history.push('/dashboard/settings/main');
    }

    onClickOptions = () => {
        this.props.history.push('/dashboard/settings/options');
    }

    onClickTheme = () => {
        this.props.history.push('/dashboard/settings/theme');
    }

    onClickConnections = () => {
        this.props.history.push('/dashboard/settings/connections');
    }

    onClickOthers = () => {
        this.props.history.push('/dashboard/settings/others');
    }


    render() {
        return (<div className="dashboard-settings-page">
            <div className="tab-content">
                <div className={this.state.type === "main" ? "tab-item active" : "tab-item"} onClick={this.onClickMain}>Main Settings</div>
                <div className="divider"></div>
                <div className={this.state.type === "options" ? "tab-item active" : "tab-item"} onClick={this.onClickOptions}>Options</div>
                <div className="divider"></div>
                <div className={this.state.type === "connections" ? "tab-item active" : "tab-item"} onClick={this.onClickConnections}>Connections</div>
                <div className="divider"></div>
                <div className={this.state.type === "theme" ? "tab-item active" : "tab-item"} onClick={this.onClickTheme}>Theme</div>
                <div className="divider"></div>
                <div className={this.state.type === "others" ? "tab-item active" : "tab-item"} onClick={this.onClickOthers}>Others</div>
            </div>
            <div className="settings-content">
                <Route path="/dashboard/settings/main" render={() => <Main changeType={this.onChangeType} />} />
                <Route path="/dashboard/settings/options" render={() => <Options changeType={this.onChangeType} />} />
                <Route path="/dashboard/settings/connections" render={() => <Connections changeType={this.onChangeType} />} />
                <Route path="/dashboard/settings/theme" render={() => <Theme changeType={this.onChangeType} />} />
                <Route path="/dashboard/settings/others" render={() => <Others changeType={this.onChangeType} />} />
            </div>
        </div>);
    }
}