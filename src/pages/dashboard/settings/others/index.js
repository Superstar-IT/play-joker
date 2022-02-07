import React, { Component } from 'react';

export default class Others extends Component {
    componentDidMount() {
        this.props.changeType('others');
    }

    render() {
        return (<div></div>);
    }
}