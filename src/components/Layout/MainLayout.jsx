import React, { Component } from 'react';
import { Col, Row, Card } from 'react-bootstrap'
import { Link, Switch, Route } from "react-router-dom";
import Sidebar from './Sidebar';

import DashboardIcon from '../../assets/icons/dashboard.svg';
import UserIcon from '../../assets/icons/profile.svg';
import ProfileIcon from '../../assets/icons/team.svg';
import ProfilePic from '../ProfilePic';
import {Active, InActive} from '../Status';

const Items = [
    {
        id: 1,
        name: 'Dashboard',
        icon: DashboardIcon,
        path: '/',
    },
    {
        id: 2,
        name: 'Profile',
        icon: ProfileIcon,
        path: '/profilepage',
    },
    {
        id: 3,
        name: 'Team',
        icon: UserIcon,
        path: '/profilepage',
    },
    {
        id: 4,
        name: 'Recruitment',
        icon: DashboardIcon,
        path: '/',
    },
    {
        id: 5,
        name: 'Study Protocol',
        icon: ProfileIcon,
        path: '/profilepage',
    },
    {
        id: 6,
        name: 'Fields Setup',
        icon: UserIcon,
        path: '/profilepage',
    },
    {
        id: 7,
        name: 'Sites',
        icon: DashboardIcon,
        path: '/',
    },
    {
        id: 8,
        name: 'Communications',
        icon: ProfileIcon,
        path: '/profilepage',
    },
    {
        id: 9,
        name: 'Advance',
        icon: UserIcon,
        path: '/profilepage',
    }
];

const SideNav = () => {
    return (
        <div>
            <div className="side-list col">
                <ProfilePic
                    src="https://images.pexels.com/photos/2896837/pexels-photo-2896837.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
                    className="profile-pic-side-list"
                />
            </div>
            <div className="side-user-status">
              <h6>Study Name 3</h6>
              <Active/>
            </div>
            {
                Items.map((item, index) => {
                    return (
                        <div key={index} className="">
                            <Link to={item.path} className="list-item"><span><img className="listicons" src={item.icon} /></span>{item.name}</Link>
                        </div>
                    )
                })
            }
        </div>
    );
}

class MainLayout extends Component {
    render() {
        const { children } = this.props;
        return (
            <div className="conatiner-fluid">
                <Row>
                    <Sidebar />
                    <Col lg="3" md="6" xs="12" className="sidebg">
                        <SideNav />
                    </Col>
                    <Col lg={{ size: 1, offset: 0.1 }} md="6" xs="12" className="mainbg">
                        {children}
                    </Col>
                </Row>
            </div>
        )
    }
}

export default MainLayout;