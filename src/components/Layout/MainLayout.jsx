import React, { Component } from 'react';
import {Container, Col, Row} from 'react-bootstrap'
import { Link } from "react-router-dom";
import Sidebar from './Sidebar';
// import '../../styles/combain.scss'

 class MainLayout extends Component {
    render() {
        const { children } = this.props;
        return (
            <Container fluid>
                <Row>
                    <Sidebar/>
                    <Col lg="2" md="6" xs="12" className="sidebg">
                        <Link to="/">Dashboard</Link> <br/>
                        <Link to="/profilepage">Profile</Link>    <br/>
                        <Link to="/sitepage">SitePage</Link>                    
                    </Col>
                    <Col lg="9" md="6" xs="12" className="mainbg">
                        {children}
                    </Col>
                </Row>
                
            </Container>
        )
    }
}

export default MainLayout;