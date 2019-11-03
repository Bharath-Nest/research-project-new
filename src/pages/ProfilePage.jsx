import React, { Component } from 'react';
import { InputGroup, FormControl } from 'react-bootstrap'


export default class ProfilePage extends Component {
    render() {
        return (
            <div>
                <h1>ProfilePage Page</h1>
                <h4>This is a Profile page</h4>

                <InputGroup>
                    <FormControl
                        placeholder="Username"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                    />
                </InputGroup>
            </div>
        )
    }
}