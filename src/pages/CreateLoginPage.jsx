import React, { Component } from 'react';
import {Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';

export default class CreateLoginPage extends Component {
    render() {
        return (
            <div>
               <Button> <Link style={{color:'white'}} to="/">go Dashboard</Link> </Button>
            </div>
        )
    }
}