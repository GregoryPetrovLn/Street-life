import React, {Component} from 'react';
import {BY_THE_WAY, INDIA, JERUSALEM, PATH_GALLERY, TELAVIV} from "../config/configuration";
import {Link} from "react-router-dom";


class Main extends Component {
    render() {
        return (
            <div className={'content'}>
                <div className={'container-fluid main'}>
                    <div className={'container pt-5'}>
                        <div className={'row'}>
                            <div className={'col-md-8 offset-md-2 col-sm-12 text-center main-header'}>
                                <h1>Gregory Petrov</h1>
                                <h3 className={'pt-5'}>on the other side</h3>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={'main-content container-fluid h-100 pb-lg-5'}>
                    <div className={'first-line container '}>
                        <div className={'row pt-lg-5 pt-5'}>
                            <div className={'col-md-5 offset-md-1 mt-lg-5 mt-md-5  text-center'}>
                                <img src={TELAVIV}alt={'#'}/>
                                <span>Crazy Tel-Aviv</span>
                                <br/>
                                <Link to={PATH_GALLERY} className="nav-link click">
                                    <span>Click to see more</span>
                                </Link>
                            </div>
                            <div className={'col-md-4 offset-md-2 pt-md-5  text-center'}>
                                <img src={JERUSALEM} alt={'#'} className={'pt-md-5'}/>
                                <span>Middle-earth Jerusalem</span>
                                <br/>
                                <Link to={PATH_GALLERY} className="nav-link click">
                                    <span>Click to see more</span>
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className={'second-line container mt-md-5 pt-md-5 pb-md-5'}>
                        <div className={'row'}>
                            <div className={'col-md-5 text-center mt-lg-5 pt-lg-5'}>
                                <img src={INDIA} className={'mt-lg-5 pt-lg-2 pt-md-5 india'} alt={'#'}/>
                                <span>Incredible India</span>
                                <br/>
                                <Link to={PATH_GALLERY} className="nav-link click">
                                    <span>Click to see more</span>
                                </Link>
                            </div>
                            <div className={'col-md-5 offset-md-2 text-center'}>
                                <img src={BY_THE_WAY} alt={'#'}/>
                                <span>By the way</span>
                                <br/>
                                <Link to={PATH_GALLERY} className="nav-link click">
                                    <span>Click to see more</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default Main;