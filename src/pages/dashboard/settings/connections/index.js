import React, { Component } from 'react';

export default class Connections extends Component {
    componentDidMount() {
        this.props.changeType('connections');
    }

    render() {
        return (<div></div>);
    }
}