import React, { Component } from 'react';
import { Col, Row} from 'react-bootstrap'
import { Link } from "react-router-dom";
import Sidebar from './Sidebar';
// import '../../styles/combain.scss'

 class MainLayout extends Component {
    render() {
        const { children } = this.props;
        return (
            <div className="conatiner-fluid">
                <Row>
                    <Sidebar/>
                    <Col lg="3" md="6" xs="12" className="sidebg">
                        <Link to="/">Dashboard</Link> <br/>
                        <Link to="/profilepage">Profile</Link>    <br/>
                        <Link to="/sitepage">SitePage</Link>                    
                    </Col>
                    <Col lg="8" md="6" xs="12" className="mainbg">
                        {children}
                    </Col>
                </Row>
            </div>
        )
    }
}

export default MainLayout;