import React, { Component } from 'react';

export default class Theme extends Component {
    componentDidMount() {
        this.props.changeType('theme');
    }

    render() {
        return (<div></div>);
    }
}