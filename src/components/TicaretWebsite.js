import React, { Component } from "react";
import {HashRouter, Route, NavLink} from "react-router-dom"

import '../css/ticaret.css'

import Home from './Home'
import Location from './Location'
import Login from './Login'
import Profile from './Profile'
import AboutUs from '../components/AboutUs'
import TicketHistory from '../components/TicketHistory'
import CustomerHelp from '../components/CustomerHelp'

import LocationIcon from '../assets/header/location.svg'
import UserIcon from '../assets/header/user.svg'


class Header extends Component {
    render() {
        return (
            <div className="ticaret-container">
                <HashRouter>
                    <header>
                        <div className="logo-container">
                            <NavLink to="/" className="nav-link">
                                <svg xmlns="http://www.w3.org/2000/svg" width="144.84" height="60" viewBox="0 0 155.84 60" className="logo">
                                    <g id="Group_191" data-name="Group 191" transform="translate(102 417)">
                                    <g id="Group_5" data-name="Group 5" transform="translate(22 -410.645)">
                                        <circle id="Ellipse_7" data-name="Ellipse 7" cx="1.495" cy="1.495" r="1.495" transform="translate(10 6.468) rotate(-9)" fill="#fff"/>
                                        <circle id="Ellipse_6" data-name="Ellipse 6" cx="1.495" cy="1.495" r="1.495" transform="translate(13.42 9.953) rotate(-9)" fill="#fff"/>
                                    </g>
                                    <g id="Group_3" data-name="Group 3" transform="translate(-58.343 -399.994)">
                                        <path id="Path_3781" data-name="Path 3781" d="M772.287,480.577s-3.519-1.459-5.361.687-2.932,11.97,0,13.708,7.783,1.171,9.547,0c0,0-3.767,1.918.024-.017s12.7-24.967,13.112-25.269a3.281,3.281,0,0,1,3.187,0c.994.78,1.246,25.924,1.246,25.924" transform="translate(-760.112 -469.261)" fill="none" stroke="#ff2424" stroke-linecap="round" stroke-width="3"/>
                                        <path id="Path_3782" data-name="Path 3782" d="M2844.48-665.825c-.506-.127-4.877,0-4.877,0" transform="translate(-2813.51 678.681)" fill="none" stroke="#ff2424" stroke-linecap="round" stroke-width="3"/>
                                    </g>
                                    <g id="Group_4" data-name="Group 4" transform="translate(-102 -417)">
                                        <text id="T" transform="translate(9 44)" fill="#fff" font-size="35" font-style="italic"><tspan x="0" y="0">T</tspan></text>
                                        <text id="i" transform="translate(30.794 44)" fill="#fff" font-size="35" font-style="italic"><tspan x="0" y="0">i</tspan></text>
                                        <text id="r" transform="translate(79.367 44)" fill="#fff" font-size="34" font-style="italic"><tspan x="0" y="0">r</tspan></text>
                                        <text id="e" transform="translate(95.398 45)" fill="#fff" font-size="35" font-style="italic"><tspan x="0" y="0">e</tspan></text>
                                        <text id="t-2" data-name="t" transform="translate(118.696 45)" fill="#fff" font-size="35" font-style="italic"><tspan x="0" y="0">t</tspan></text>
                                    </g>
                                    </g>
                                </svg>
                            </NavLink>
                        </div>
                        <div className="options-container">
                            <NavLink to="/location" className="nav-link location">
                                <img src={LocationIcon} alt="location" />
                            </NavLink>
                            <NavLink to="/login" className="nav-link login">
                                Login
                            </NavLink>
                            <NavLink to="/profile" className="nav-link profile">
                                <i className="fa fa-bars"></i>
                                <img src={UserIcon} alt="profile" className="profile-icon" />
                            </NavLink>
                        </div>
                    </header>
                    <article className="main">
                        <Route exact path="/" component={Home} />
                        <Route path="/location" component={Location} />
                        <Route path="/login" component={Login} />
                        <Route path="/profile" component={Profile} />
                    </article>
                </HashRouter>
                <footer>
                    <div className="btm-logo-container">
                        <svg xmlns="http://www.w3.org/2000/svg" width="144.84" height="60" viewBox="0 0 155.84 60" className="logo">
                            <g id="Group_191" data-name="Group 191" transform="translate(102 417)">
                            <g id="Group_5" data-name="Group 5" transform="translate(22 -410.645)">
                                <circle id="Ellipse_7" data-name="Ellipse 7" cx="1.495" cy="1.495" r="1.495" transform="translate(10 6.468) rotate(-9)" fill="#fff"/>
                                <circle id="Ellipse_6" data-name="Ellipse 6" cx="1.495" cy="1.495" r="1.495" transform="translate(13.42 9.953) rotate(-9)" fill="#fff"/>
                            </g>
                            <g id="Group_3" data-name="Group 3" transform="translate(-58.343 -399.994)">
                                <path id="Path_3781" data-name="Path 3781" d="M772.287,480.577s-3.519-1.459-5.361.687-2.932,11.97,0,13.708,7.783,1.171,9.547,0c0,0-3.767,1.918.024-.017s12.7-24.967,13.112-25.269a3.281,3.281,0,0,1,3.187,0c.994.78,1.246,25.924,1.246,25.924" transform="translate(-760.112 -469.261)" fill="none" stroke="#ff2424" stroke-linecap="round" stroke-width="3"/>
                                <path id="Path_3782" data-name="Path 3782" d="M2844.48-665.825c-.506-.127-4.877,0-4.877,0" transform="translate(-2813.51 678.681)" fill="none" stroke="#ff2424" stroke-linecap="round" stroke-width="3"/>
                            </g>
                            <g id="Group_4" data-name="Group 4" transform="translate(-102 -417)">
                                <text id="T" transform="translate(9 44)" fill="#fff" font-size="35" font-style="italic"><tspan x="0" y="0">T</tspan></text>
                                <text id="i" transform="translate(30.794 44)" fill="#fff" font-size="35" font-style="italic"><tspan x="0" y="0">i</tspan></text>
                                <text id="r" transform="translate(79.367 44)" fill="#fff" font-size="34" font-style="italic"><tspan x="0" y="0">r</tspan></text>
                                <text id="e" transform="translate(95.398 45)" fill="#fff" font-size="35" font-style="italic"><tspan x="0" y="0">e</tspan></text>
                                <text id="t-2" data-name="t" transform="translate(118.696 45)" fill="#fff" font-size="35" font-style="italic"><tspan x="0" y="0">t</tspan></text>
                            </g>
                            </g>
                        </svg>
                    </div>
                    <div className="btm-options-container">
                        <HashRouter>
                            <div className="btm-options1">
                                <NavLink className="nav-link" to="/ticket-history">Ticket History</NavLink>
                                <NavLink className="nav-link" to="/about-us">About Us</NavLink>
                                <NavLink className="nav-link" to="/customer-help">Customer Help</NavLink>
                            </div>
                            <div className="btm-options2">
                                <NavLink className="nav-link" to="/facebook">Facebook</NavLink>
                                <NavLink className="nav-link" to="/twiter">Twitter</NavLink>
                                <NavLink className="nav-link" to="/instagram">Instagram</NavLink>
                                <NavLink className="nav-link" to="/linkedin">Linkedin</NavLink>
                            </div>
                            <div className="main">
                                <Route path="/ticket-history" component={TicketHistory} />
                                <Route path="/about-us" component={AboutUs} />
                                <Route path="/customer-help" component={CustomerHelp} />
                            </div>
                        </HashRouter>
                    </div>
                </footer>
            </div>
        );
    }
}

export default Header;