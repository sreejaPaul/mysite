import React from 'react';
import './Sidenavbar.css';
import companylogo from './Images/companylogo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faShieldAlt } from '@fortawesome/free-solid-svg-icons';
import { faSquare } from '@fortawesome/free-regular-svg-icons';
import { Link } from 'react-router-dom';

class Sidenavbar extends React.Component {
    constructor() {
        super();
        this.state = {
            backgroundColor: "#EAE9E9",
            borderLeft: "none",
            color: "grey",
        }
    }
    accessclick = () => {
        this.setState({ backgroundColor: "#C6A5F8" });
        this.setState({ borderLeft: "10px solid #9D0BEE" });
        this.setState({ color: "#9D0BEE" });
    }
    render() {
        const fontawsomestyle = { display: "inline-block" };
        const accessstyle = { backgroundColor: this.state.backgroundColor, borderLeft: this.state.borderLeft, color: this.state.color };
        return (
            <div id="sidenav">
                <div className="navitems" style={{ backgroundColor: "white" }}>
                    <img src={companylogo} alt="logo" id="logo" />
                </div>
                <div className="navitems">
                    <div style={fontawsomestyle}><FontAwesomeIcon icon={faSquare} /></div>
                    <div className="navtext">{"Projects"}</div>
                </div>
                <div className="navitems">
                    <div style={fontawsomestyle}><FontAwesomeIcon icon={faBriefcase} /></div>
                    <div className="navtext">{"Organisation Profile"}</div>
                </div>
                <Link to="/Access-Control">
                    <div className="navitems" onClick={this.accessclick} style={accessstyle}>
                        <div style={fontawsomestyle}><FontAwesomeIcon icon={faShieldAlt} /></div>
                        <div className="navtext">{"Access Control"}</div>
                    </div>
                </Link>


            </div>
        );
    }
}
export default Sidenavbar;