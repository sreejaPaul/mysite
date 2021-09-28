import React from 'react';
import './Management.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faToggleOn, faToggleOff, faArrowLeft, faPen } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

class Sidenavbar extends React.Component {
    constructor() {
        super();
        this.state = {
            resstate: { backgroundColor: "#FBCFD8", color: "red", borderRadius: "20px", border: "1px solid red", display: "inline-block", padding: "5px 10px 5px 10px" },
            notresstate: { backgroundColor: "lightgreen", color: "green", borderRadius: "20px", border: "1px solid green", display: "inline-block", padding: "5px 10px 5px 10px" },
            noaccess: { backgroundColor: "lightgrey", color: "grey", borderRadius: "20px", border: "1px solid grey", display: "inline-block", padding: "5px 10px 5px 10px" },
            Budgetcolor: "No Access",
            Biddingcolor: "No Access",
            Vendorcolor: "No Access",
            Purchasecolor: "No Access",
            Organisationalcolor: "No Access",
            Permissionscolor: "No Access",

            Budgetcheckbox: "grey",
            Biddingcheckbox: "grey",
            Vendorcheckbox: "grey",
            Purchasecheckbox: "grey",
            Organisationalcheckbox: "grey",
            Permissionscheckbox: "grey",

            Budgetopenorclose: "+",
            Biddingopenorclose: "+",
            Vendoropenorclose: "+",
            Purchaseopenorclose: "+",
            Organisationalopenorclose: "+",
            Permissionsopenorclose: "+",

            Budgetdiv: "none",
            Biddingdiv: "none",
            Vendordiv: "none",
            Purchasediv: "none",
            Organisationaldiv: "none",
            Permissionsdiv: "none",

            Budgetdisplay: [],
            Biddingdisplay: [],
            Vendordisplay: [],
            Purchasedisplay: [],
            Organisationaldisplay: [],
            Permissionsdisplay: [],
        }

    }
    handleclick = (ev) => {
        switch (ev.target.value) {
            case "Budgetaccess":
                this.setState({ Budgetcolor: "All Access" });
                break;
            case "Budgetrestricted":
                this.setState({ Budgetcolor: "Restricted Access" });
                break;
            case "Biddingaccess":
                this.setState({ Biddingcolor: "All Access" });
                break;
            case "Biddingrestricted":
                this.setState({ Biddingcolor: "Restricted Access" });
                break;
            case "Vendor Portalaccess":
                this.setState({ Vendorcolor: "All Access" });
                break;
            case "Vendor Portalrestricted":
                this.setState({ Vendorcolor: "Restricted Access" });
                break;
            case "Purchase Order/Work Orderaccess":
                this.setState({ Purchasecolor: "All Access" });
                break;
            case "Purchase Order/Work Orderrestricted":
                this.setState({ Purchasecolor: "Restricted Access" });
                break;
            case "Organisational Profileaccess":
                this.setState({ Organisationalcolor: "All Access" });
                break;
            case "Organisational Profilerestricted":
                this.setState({ Organisationalcolor: "Restricted Access" });
                break;
            case "Permissions & Access Controlaccess":
                this.setState({ Permissionscolor: "All Access" });
                break;
            case "Permissions & Access Controlrestricted":
                this.setState({ Permissionscolor: "Restricted Access" });
                break;
            default:
                this.setState({ Budgetcolor: "No Access" });
                this.setState({ Biddingcolor: "No Access" });
                this.setState({ Vendorcolor: "No Access" });
                this.setState({ Purchasecolor: "No Access" });
                this.setState({ Organisationalcolor: "No Access" });
                this.setState({ Permissionscolor: "No Access" });
                break;
        }

    }
    colorcheck = (data) => {
        if (data === "Budget") {
            return this.state.Budgetcolor;
        } else if (data === "Bidding") {
            return this.state.Biddingcolor;
        } else if (data === "Vendor Portal") {
            return this.state.Vendorcolor;
        } else if (data === "Purchase Order/Work Order") {
            return this.state.Purchasecolor;
        } else if (data === "Organisational Profile") {
            return this.state.Organisationalcolor;
        } else if (data === "Permissions & Access Control") {
            return this.state.Permissionscolor;
        }
    }
    workcheck = (data) => {
        if (data === "Budget") {
            return this.state.Budgetcheckbox;
        } else if (data === "Bidding") {
            return this.state.Biddingcheckbox;
        } else if (data === "Vendor Portal") {
            return this.state.Vendorcheckbox;
        } else if (data === "Purchase Order/Work Order") {
            return this.state.Purchasecheckbox;
        } else if (data === "Organisational Profile") {
            return this.state.Organisationalcheckbox;
        } else if (data === "Permissions & Access Control") {
            return this.state.Permissionscheckbox;
        }
    }

    checkboxclick = (e, data) => {
        console.log(e);
        const budgv = document.getElementById("Budgetview");
        const budge = document.getElementById("Budgetedit");
        const budgc = document.getElementById("Budgetcreate");
        const budgd = document.getElementById("Budgetdelete");

        const bidv = document.getElementById("Biddingview");
        const bide = document.getElementById("Biddingedit");
        const bidc = document.getElementById("Biddingcreate");
        const bidd = document.getElementById("Biddingdelete");

        const vendorv = document.getElementById("Vendorview");
        const vendore = document.getElementById("Vendoredit");
        const vendorc = document.getElementById("Vendorcreate");
        const vendord = document.getElementById("Vendordelete");

        const purchasev = document.getElementById("Purchaseview");
        const purchasee = document.getElementById("Purchaseedit");
        const purchasec = document.getElementById("Purchasecreate");
        const purchased = document.getElementById("Purchasedelete");

        const Organisationalv = document.getElementById("Organisationalview");
        const Organisationale = document.getElementById("Organisationaledit");
        const Organisationalc = document.getElementById("Organisationalcreate");
        const Organisationald = document.getElementById("Organisationaldelete");

        const Permissionsv = document.getElementById("Permissionsview");
        const Permissionse = document.getElementById("Permissionsedit");
        const Permissionsc = document.getElementById("Permissionscreate");
        const Permissionsd = document.getElementById("Permissionsdelete");

        const value = e.target.value;
        const check = e.target.checked;
        if (data === "Budget") {
            if (budgv.checked === true || budge.checked === true || budgc.checked === true || budgd.checked === true) {
                this.setState({ Budgetcheckbox: "green" });
                this.workdisplay(value, check, data);
            } else if (budgv !== true && budge !== true && budgc !== true && budgd.checked !== true) {
                this.setState({ Budgetcheckbox: "grey" });
                this.workdisplay("none", data);
            }
        } else if (data === "Bidding") {
            if (bidv.checked === true || bide.checked === true || bidc.checked === true || bidd.checked === true) {
                this.setState({ Biddingcheckbox: "green" });
                this.workdisplay(value, check, data);
            } else if (bidv.checked !== true && bide.checked !== true && bidc.checked !== true && bidd.checked !== true) {
                this.setState({ Biddingcheckbox: "grey" });
                this.workdisplay("none", data);
            }
        } else if (data === "Vendor Portal") {
            if (vendorv === true || vendore.checked === true || vendorc.checked === true || vendord.checked === true) {
                this.setState({ Vendorcheckbox: "green" });
                this.workdisplay(value, check, data);
            } else if (vendorv.checked !== true && vendore.checked !== true && vendorc.checked !== true && vendord.checked !== true) {
                this.setState({ Vendorcheckbox: "grey" });
                this.workdisplay("none", data);
            }
        } else if (data === "Purchase Order/Work Order") {
            if (purchasev === true || purchasee.checked === true || purchasec.checked === true || purchased.checked === true) {
                this.setState({ Purchasecheckbox: "green" });
                this.workdisplay(value, check, data);
            } else if (purchasev.checked !== true && purchasee.checked !== true && purchasec.checked !== true && purchased.checked !== true) {
                this.setState({ Purchasecheckbox: "grey" });
                this.workdisplay("none", data);
            }
        } else if (data === "Organisational Profile") {
            if (Organisationalv === true || Organisationale.checked === true || Organisationalc.checked === true || Organisationald.checked === true) {
                this.setState({ Organisationalcheckbox: "green" });
                this.workdisplay(value, check, data);
            } else if (Organisationalv.checked !== true && Organisationale.checked !== true && Organisationalc.checked !== true && Organisationald.checked !== true) {
                this.setState({ Organisationalcheckbox: "grey" });
                this.workdisplay("none", data);
            }
        } else if (data === "Permissions & Access Control") {
            if (Permissionsv === true || Permissionse.checked === true || Permissionsc.checked === true || Permissionsd.checked === true) {
                this.setState({ Permissionscheckbox: "green" });
                this.workdisplay(value, check, data);
            } else if (Permissionsv.checked !== true && Permissionse.checked !== true && Permissionsc.checked !== true && Permissionsd.checked !== true) {
                this.setState({ Permissionscheckbox: "grey" });
                this.workdisplay("none", data);
            }
        }

    }
    removedata = (arr, val) => {
        return arr.filter((data) => {
            return data !== val;
        })
    }
    workdisplay = (value, check, data) => {
        if (value !== "none") {
            if (data === "Budget") {
                if (check === true)
                    this.setState({ Budgetdisplay: [...this.state.Budgetdisplay, value] });
                else
                    this.setState({ Budgetdisplay: this.removedata(this.state.Budgetdisplay, value) });
            } else if (data === "Bidding") {
                if (check === true)
                    this.setState({ Biddingdisplay: [...this.state.Biddingdisplay, value] });
                else
                    this.setState({ Biddingdisplay: this.removedata(this.state.Biddingdisplay, value) });
            } else if (data === "Vendor Portal") {
                if (check === true)
                    this.setState({ Vendordisplay: [...this.state.Vendordisplay, value] });
                else
                    this.setState({ Vendordisplay: this.removedata(this.state.Vendordisplay, value) });
            } else if (data === "Purchase Order/Work Order") {
                if (check === true)
                    this.setState({ Purchasedisplay: [...this.state.Purchasedisplay, value] });
                else
                    this.setState({ Purchasedisplay: this.removedata(this.state.Purchasedisplay, value) });
            } else if (data === "Organisational Profile") {
                if (check === true)
                    this.setState({ Organisationaldisplay: [...this.state.Organisationaldisplay, value] });
                else
                    this.setState({ Organisationaldisplay: this.removedata(this.state.Organisationaldisplay, value) });
            } else if (data === "Permissions & Access Control") {
                if (check === true)
                    this.setState({ Permissionsdisplay: [...this.state.Permissionsdisplay, value] });
                else
                    this.setState({ Permissionsdisplay: this.removedata(this.state.Permissionsdisplay, value) });
            }
        } else {
            this.setState({ Budgetdisplay: [] });
            this.setState({ Biddingdisplay: [] });
            this.setState({ Vendordisplay: [] });
            this.setState({ Purchasedisplay: [] });
            this.setState({ Organisationaldisplay: [] });
            this.setState({ Permissionsdisplay: [] });
        }
    }
    workdisplaycheck = (data) => {
        if (data === "Budget") {
            return this.state.Budgetdisplay + " ";
        } else if (data === "Bidding") {
            return this.state.Biddingdisplay + " ";
        } else if (data === "Vendor Portal") {
            return this.state.Vendordisplay + " ";
        } else if (data === "Purchase Order/Work Order") {
            return this.state.Purchasedisplay + " ";
        } else if (data === "Organisational Profile") {
            return this.state.Organisationaldisplay + " ";
        } else if (data === "Permissions & Access Control") {
            return this.state.Permissionsdisplay + " ";
        }
    }
    openorclose = (data) => {
        if (data === "Budget") {
            return this.state.Budgetopenorclose;
        } else if (data === "Bidding") {
            return this.state.Biddingopenorclose;
        } else if (data === "Vendor Portal") {
            return this.state.Vendoropenorclose;
        } else if (data === "Purchase Order/Work Order") {
            return this.state.Purchaseopenorclose;
        } else if (data === "Organisational Profile") {
            return this.state.Organisationalopenorclose;
        } else if (data === "Permissions & Access Control") {
            return this.state.Permissionsopenorclose;
        }
    }
    divvisible = (data) => {
        if (data === "Budget") {
            return this.state.Budgetdiv;
        } else if (data === "Bidding") {
            return this.state.Biddingdiv;
        } else if (data === "Vendor Portal") {
            return this.state.Vendordiv;
        } else if (data === "Purchase Order/Work Order") {
            return this.state.Purchasediv;
        } else if (data === "Organisational Profile") {
            return this.state.Organisationaldiv;
        } else if (data === "Permissions & Access Control") {
            return this.state.Permissionsdiv;
        }
    }
    visible = (e) => {
        const value = e.target.value.split("/");
        if (value[0] === "Budget") {
            if (value[1] === "+") {
                this.setState({ Budgetopenorclose: "-" });
                this.setState({ Budgetdiv: "block" });
            }
            else if (value[1] === "-") {
                this.setState({ Budgetopenorclose: "+" });
                this.setState({ Budgetdiv: "none" });
            }
        } else if (value[0] === "Bidding") {
            if (value[1] === "+") {
                this.setState({ Biddingopenorclose: "-" });
                this.setState({ Biddingdiv: "block" });
            }
            else if (value[1] === "-") {
                this.setState({ Biddingopenorclose: "+" });
                this.setState({ Biddingdiv: "none" });
            }
        } else if (value[0] === "Vendor") {
            if (value[1] === "+") {
                this.setState({ Vendoropenorclose: "-" });
                this.setState({ Vendordiv: "block" });
            }
            else if (value[1] === "-") {
                this.setState({ Vendoropenorclose: "+" });
                this.setState({ Vendordiv: "none" });
            }
        } else if (value[0] === "Purchase") {
            if (value[1] === "+") {
                this.setState({ Purchaseopenorclose: "-" });
                this.setState({ Purchasediv: "block" });
            }
            else if (value[1] === "-") {
                this.setState({ Purchaseopenorclose: "+" });
                this.setState({ Purchasediv: "none" });
            }
        } else if (value[0] === "Organisational") {
            if (value[1] === "+") {
                this.setState({ Organisationalopenorclose: "-" });
                this.setState({ Organisationaldiv: "block" });
            }
            else if (value[1] === "-") {
                this.setState({ Organisationalopenorclose: "+" });
                this.setState({ Organisationaldiv: "none" });
            }
        } else if (value[0] === "Permissions") {
            if (value[1] === "+") {
                this.setState({ Permissionsopenorclose: "-" });
                this.setState({ Permissionsdiv: "block" });
            }
            else if (value[1] === "-") {
                this.setState({ Permissionsopenorclose: "+" });
                this.setState({ Permissionsdiv: "none" });
            }
        }
    }

    render() {
        const roles = ["Budget", "Bidding", "Vendor Portal", "Purchase Order/Work Order", "Organisational Profile", "Permissions & Access Control"];
        const lastupdate = ["1 min ago", "1 min ago", "1 min ago", "1 min ago", "1 min ago"];

        return (
            <div id="body">
                <div id="manage">
                    <div id="delete">
                        <Link to="/Access-Control">
                            <FontAwesomeIcon icon={faArrowLeft} size="lg" style={{ cursor: "pointer", color: "grey" }} />
                        </Link>
                    </div>
                    <div style={{ display: "inline-block", color: "#9D0BEE" }}><b>{"Management Team"}</b></div>
                    <div id="pen"><FontAwesomeIcon icon={faPen} size="lg" style={{ cursor: "pointer", color: "grey" }} /></div>
                </div>

                <div id="seconddiv">
                    <div style={{ borderRight: "1px solid  grey", display: "inline-block", margin: "5px", padding: "15px", color: "#9D0BEE" }}><b>{"Access Control"}</b></div>
                    <div style={{ display: "inline-block", margin: "5px", padding: "15px" }}>{"Assigned Members"}</div>
                    <hr ></hr>
                    <hr id="hr" />
                </div>

                <div id="managetable">
                    <table>
                        <thead>

                            <tr>
                                <td className="clm">{""}</td>
                                <td className="clm">{"Department/Role Name"}</td>
                                <td className="clm">{"Access Level"}</td>
                                <td className="clm">{"Summary"}</td>
                                <td className="clm">{"Last Updated"}</td>
                                <td className="clm">{""}</td>
                            </tr>
                        </thead>
                        <tbody>
                            {roles.map((data, index) => {
                                const firstref = data.split(" ");
                                return (
                                    <>
                                        <tr  key={index + data}>
                                            <td id="pls"><button id="pmbtn" value={firstref[0] + "/" + this.openorclose(data)} onClick={(e) => this.visible(e)}>{this.openorclose(data)}</button></td>
                                            <td className="clm">{data}</td>
                                            <td className="clm">
                                                <div style={this.colorcheck(data) === "All Access" ? this.state.notresstate : (this.colorcheck(data) === "Restricted Access" ? this.state.resstate : this.state.noaccess)}>
                                                    {this.colorcheck(data)}
                                                </div></td>
                                            <td className="clm">{this.workdisplaycheck(data)}</td>
                                            <td className="clm">{lastupdate[index]}</td>
                                            <td className="clm">
                                                <div>
                                                    {(this.workcheck(data) === "green") ? <FontAwesomeIcon icon={faToggleOn} id={firstref[0] + "green"} size="lg" style={{ color: "green" }} /> :
                                                        <FontAwesomeIcon icon={faToggleOff} id={firstref[0] + "grey"} size="lg" style={{ color: "grey" }} />}
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>{""}</td>
                                            <td colSpan="5" className="clm">
                                                <div style={{ height: "300px", textAlign: "left", display: this.divvisible(data) }}>
                                                    {"All aspects in the bidding module"}
                                                    <p></p>
                                                    <div id="leftaccess">
                                                        {"Access Control"}
                                                        <br />

                                                        <div style={{ display: "inline-block" }}>
                                                            <input type="radio" name={data} value={data + "access"} onClick={(e) => this.handleclick(e)} />
                                                        </div>
                                                        <div style={{ display: "inline-block", padding: "10px" }}>
                                                            {"All Access"}<br /><span className="little">{"Can access all items"}</span>
                                                        </div>
                                                        <p></p>
                                                        <div style={{ display: "inline-block" }}>
                                                            <input type="radio" name={data} value={data + "restricted"} onClick={(e) => this.handleclick(e)} />
                                                        </div>
                                                        <div style={{ display: "inline-block", padding: "10px" }}>
                                                            {"Restricted Access"}<br /><span className="little">{"Can access only assigned or created items"}</span>
                                                        </div>
                                                    </div>
                                                    <div id="rightpermission">
                                                        {"Permissions"}
                                                        <p></p>
                                                        <div><input type="checkbox" id={firstref[0] + "view"} value={"view"} onClick={(e) => this.checkboxclick(e, data)} />{"View items in access"}</div><p></p>
                                                        <div><input type="checkbox" id={firstref[0] + "edit"} value={"edit"} onClick={(e) => this.checkboxclick(e, data)} />{"Edit items in access"}</div><p></p>
                                                        <div><input type="checkbox" id={firstref[0] + "create"} value={"create"} onClick={(e) => this.checkboxclick(e, data)} />{"create items in access"}</div><p></p>
                                                        <div><input type="checkbox" id={firstref[0] + "delete"} value={"delete"} onClick={(e) => this.checkboxclick(e, data)} />{"Delete items in access"}</div><p></p>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                    </>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}
export default Sidenavbar;