import React, { Component } from 'react';
import {Link} from 'react-router-dom'

export default class DashboardPage extends Component {
    render() {
        return (
            <div>
                <h1>Dashboard Page</h1>
                <h4>This is a Dashboard page</h4>
                <Link to="/createstudy">createstudy</Link>
            </div>
        )
    }
}