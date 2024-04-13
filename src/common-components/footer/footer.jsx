import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/img/logo.png";


const Footer = (props) => {

    return(
        <footer className="footer">
        <div className="container-fluid">
            <div className="row text-muted">
                <div className="col-4 text-start">
                    <p className="mb-0">
                       <Link className="text-muted" href={"/"} target="_blank"><strong>Betluck</strong></Link>								&copy;
                    </p>
                </div>
                <div className="col-8 text-end">
                    <ul className="list-inline">
                        <li className="list-inline-item">
                            <Link className="text-muted" to={"#"} target="_blank">Support</Link>
                        </li>                      
                    </ul>
                </div>
            </div>
        </div>
    </footer>
    )
}

export default Footer;