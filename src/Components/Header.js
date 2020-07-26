import React, {Component} from 'react';
import Navigation from "./Navigation";
import {Link} from "react-router-dom";
import {PATH_MAIN} from "../config/configuration";
// <div className={'col-md-3 d-none d-md-block'}>

class Header extends Component {
    render() {
        return (
            <div className={'nav sticky-top h-100'}>

                <div className={'container-fluid header sticky-top '}>
                    <div className={'container'}>
                        <nav className={'nav row justify-content-between'}>


                            <div className={'col-md-3 d-none d-md-block'}>
                                <Link to={PATH_MAIN}>
                                     <span className={'navbar-text text-center'}>
                                         <span>All photos are</span>
                                         <br/>
                                         <span>taken with fujifilm</span>
                                     </span>
                                </Link>
                            </div>



                            <div className={"col-md-7 "}>
                                <Navigation/>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        );

    }
}

export default Header;







