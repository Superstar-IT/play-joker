import React, { Component } from 'react';

export default class Options extends Component {
    componentDidMount() {
        this.props.changeType('options');
    }

    render() {
        return (<div></div>);
    }
}