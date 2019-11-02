import React, { Component } from 'react';
import {Link} from 'react-router-dom'

import AddFacilityModal from './AddFacilityModal';
import AddStudyModal from './AddStudyModal';

export default class SitePage extends Component {
    render() {
        return (
            <div>

                <AddFacilityModal/>

                <h1>Dashboard Page</h1>
                <h4>This is a Dashboard page</h4>

                <AddStudyModal/>

                <Link to="/createloginpage">createstudy</Link>
            </div>
        )
    }
}