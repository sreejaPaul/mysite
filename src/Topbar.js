import React from 'react';
import "./Topbar.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWifi, faSyncAlt, faTh } from '@fortawesome/free-solid-svg-icons';
import { faBell, faQuestionCircle } from '@fortawesome/free-regular-svg-icons';

class Topbar extends React.Component {
    render() {
        const topright = { display: "inline-block", marginRight: "25px" };
        const normadisplay = { display:"inline-block"};
        return (
            <div id="top">
                <div style={{ float:"right"}}>
                    <div id="other">
                        <div style={topright} ><h3>{"Kishore"}</h3></div>
                        <div style={topright}><FontAwesomeIcon icon={faBell} size="lg" style={{ color: "grey" }} /></div>
                        <div style={topright}><FontAwesomeIcon icon={faQuestionCircle} size="lg" style={{ color: "grey" }} /></div>
                    </div>
                    <div id="profile"></div>
                </div>
                <div id="secondtop">
                    <div style={{display:"inline-block"}}>
                        <div style={normadisplay}><FontAwesomeIcon icon={faWifi} size="lg" style={{ color: "#9D0BEE" }} /></div>
                        <div style={{borderRight: "1px solid  grey",display:"inline-block",margin:"5px",padding:"15px",color:"#9D0BEE"}}><b>{"Permissions"}</b></div>
                        
                        <div style={normadisplay}><FontAwesomeIcon icon={faTh} size="lg" style={{ color: "grey" }} /></div>
                        <div style={{display:"inline-block",margin:"5px",padding:"15px"}}>{"Approval Matrix"}</div>
                    </div>
                    <div style={{ float: "right"}}>
                        <div style={{display:"inline-block",padding:"10px"}}><FontAwesomeIcon icon={faSyncAlt} size="lg" style={{ color: "grey" }} /></div>
                        <div style={{display:"inline-block",padding:"10px",marginRight:"50px"}}>{"Last synced 15 mins ago"}</div>
                    </div>
                    
                    <hr id="fullhr"></hr>
                    <hr id="hr"/>
                </div>

            </div>
        );
    }
}

export default Topbar;