import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-regular-svg-icons';
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons';
import './Body.css';
import {Link} from 'react-router-dom';

class Sidenavbar extends React.Component {
    constructor() {
        super();
        this.state = {
            resstate: { backgroundColor: "#FBCFD8", color: "red", borderRadius: "20px", border: "1px solid red", display: "inline-block",padding:"5px 10px 5px 10px"},
            notresstate: { backgroundColor: "lightgreen", color: "green", borderRadius: "20px",border: "1px solid green", display: "inline-block",padding:"5px 10px 5px 10px"}
        }
    }

    render() {
        const roles = ["Management Team", "Procurement Team", "Project Team", "IT Team", "Super Admin"];
        const access = ["All Access", "Restricted Access", "Restricted Access", "Restricted Access", "All Access"];
        const member = [4, 8, 16, 4, 1];
        const lastupdate = ["1 min ago", "1 min ago", "1 min ago", "1 min ago", "1 min ago"];

        return (
            <div id="body">
                <div id="toptable">
                    <div style={{display:"inline-block"}}><button id="addbtn">{" + Add Role"}</button></div>
                    <div id="pen"><FontAwesomeIcon icon={faPen} size="lg" style={{cursor:"pointer",color:"grey"}}/></div>
                    <div id="delete"><FontAwesomeIcon icon={faTrash} size="lg" style={{cursor:"pointer",color:"grey"}}/></div>
                </div>
                <div id="ftable">
                    <table>
                        <thead>
                            <tr>
                                <td>{"Department/Role Name"}</td>
                                <td>{"Access Level"}</td>
                                <td>{"No of numbers"}</td>
                                <td>{"Last Updated"}</td>
                                <td>{""}</td>
                            </tr>
                        </thead>
                        <tbody>
                            <>
                                {roles.map((data, index) => {
                                    return (
                                        <tr key={index + data}>
                                            <td key={index + data}>{data}</td>
                                            <td key={index + access[index]} >
                                                <div style={access[index] === "All Access" ? this.state.notresstate : this.state.resstate}>
                                                    {access[index]}
                                                </div></td>
                                            <td key={index + member[index]}>{member[index]}</td>
                                            <td key={index + lastupdate[index]}>{lastupdate[index]}</td>
                                            <td>
                                                {(index === 0) ?
                                                <Link to="/Access-Control/Management-Team">
                                                    <FontAwesomeIcon icon={faEye} style={{cursor:"pointer"}}/>
                                                </Link> : <FontAwesomeIcon icon={faEye} style={{cursor:"pointer"}}/>}
                                                </td>
                                        </tr>
                                    )

                                })}
                            </>


                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}
export default Sidenavbar;