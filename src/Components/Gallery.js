import React, {Component} from 'react';
import {
    I1,
    I2,
    I3,
    I4,
    INDIA,
    J1,
    J2,
    J3,
    J4,
    J5,
    T1,
    T2,
    T3,
    T4,
    T5,
    T6,
    W1,
    W2,
    W3,
    W4, W5
} from "../config/configuration";
import Preload from "./Preload";
import {Placeholder, Preloader} from "react-preloading-screen";

class Gallery extends Component {
    render() {
        return (
            <Preloader>
                <div className={'container-fluid gallery h-100'}>
                    <div className={'container'}>
                        <div className={'row'}>
                            <div className={'col-md-6 offset-md-3'}>
                                <div className={'first pt-5'}>
                                    <div id="demo" className="carousel slide " data-ride="carousel">

                                        <ul className="carousel-indicators">
                                            <li data-target="#demo" data-slide-to="0" className="active"/>
                                            <li data-target="#demo" data-slide-to="1"/>
                                            <li data-target="#demo" data-slide-to="2"/>
                                            <li data-target="#demo" data-slide-to="3"/>
                                            <li data-target="#demo" data-slide-to="4"/>
                                            <li data-target="#demo" data-slide-to="5"/>
                                        </ul>

                                        <div className="carousel-inner">
                                            <div className="carousel-item active">
                                                <img src={T2} alt="#"/>
                                            </div>
                                            <div className="carousel-item">
                                                <img src={T1} alt="#"/>
                                            </div>
                                            <div className="carousel-item">
                                                <img src={T3} alt="#"/>
                                            </div>
                                            <div className="carousel-item">
                                                <img src={T4} alt="#"/>
                                            </div>
                                            <div className="carousel-item">
                                                <img src={T5} alt="#"/>
                                            </div>
                                            <div className="carousel-item">
                                                <img src={T6} alt="#"/>
                                            </div>
                                        </div>

                                        <a className="carousel-control-prev" href="#demo" data-slide="prev">
                                            <span className="carousel-control-prev-icon"/>
                                        </a>
                                        <a className="carousel-control-next" href="#demo" data-slide="next">
                                            <span className="carousel-control-next-icon"/>
                                        </a>

                                    </div>
                                </div>


                                <div className={'first pt-5 pb-5'}>
                                    <div id="demo1" className="carousel slide" data-ride="carousel">

                                        <ul className="carousel-indicators">
                                            <li data-target="#demo1" data-slide-to="0" className="active"/>
                                            <li data-target="#demo1" data-slide-to="1"/>
                                            <li data-target="#demo1" data-slide-to="2"/>
                                            <li data-target="#demo1" data-slide-to="3"/>
                                            <li data-target="#demo1" data-slide-to="4"/>
                                        </ul>

                                        <div className="carousel-inner">
                                            <div className="carousel-item active">
                                                <img src={J1} alt="#"/>
                                            </div>
                                            <div className="carousel-item">
                                                <img src={J2} alt="#"/>
                                            </div>
                                            <div className="carousel-item">
                                                <img src={J3} alt="#"/>
                                            </div>
                                            <div className="carousel-item">
                                                <img src={J4} alt="#"/>
                                            </div>
                                            <div className="carousel-item">
                                                <img src={J5} alt="#"/>
                                            </div>

                                        </div>

                                        <a className="carousel-control-prev" href="#demo1" data-slide="prev">
                                            <span className="carousel-control-prev-icon"/>
                                        </a>
                                        <a className="carousel-control-next" href="#demo1" data-slide="next">
                                            <span className="carousel-control-next-icon"/>
                                        </a>

                                    </div>
                                </div>


                                <div className={'first pt-5 pb-5'}>
                                    <div id="demo2" className="carousel slide" data-ride="carousel">

                                        <ul className="carousel-indicators">
                                            <li data-target="#demo2" data-slide-to="0" className="active"/>
                                            <li data-target="#demo2" data-slide-to="1"/>
                                            <li data-target="#demo2" data-slide-to="2"/>
                                            <li data-target="#demo2" data-slide-to="3"/>
                                            <li data-target="#demo2" data-slide-to="4"/>

                                        </ul>

                                        <div className="carousel-inner">
                                            <div className="carousel-item active">
                                                <img src={INDIA} alt="#"/>
                                            </div>
                                            <div className="carousel-item">
                                                <img src={I1} alt="#"/>
                                            </div>
                                            <div className="carousel-item">
                                                <img src={I2} alt="#"/>
                                            </div>
                                            <div className="carousel-item">
                                                <img src={I3} alt="#"/>
                                            </div>
                                            <div className="carousel-item">
                                                <img src={I4} alt="#"/>
                                            </div>
                                        </div>

                                        <a className="carousel-control-prev" href="#demo2" data-slide="prev">
                                            <span className="carousel-control-prev-icon"/>
                                        </a>
                                        <a className="carousel-control-next" href="#demo2" data-slide="next">
                                            <span className="carousel-control-next-icon"/>
                                        </a>

                                    </div>
                                </div>


                                <div className={'first pt-5 pb-5'}>
                                    <div id="demo3" className="carousel slide" data-ride="carousel">

                                        <ul className="carousel-indicators">
                                            <li data-target="#demo3" data-slide-to="0" className="active"/>
                                            <li data-target="#demo3" data-slide-to="1"/>
                                            <li data-target="#demo3" data-slide-to="2"/>
                                            <li data-target="#demo3" data-slide-to="3"/>
                                            <li data-target="#demo3" data-slide-to="4"/>

                                        </ul>

                                        <div className="carousel-inner">
                                            <div className="carousel-item active">
                                                <img src={W1} alt="#"/>
                                            </div>
                                            <div className="carousel-item">
                                                <img src={W2} alt="#"/>
                                            </div>
                                            <div className="carousel-item">
                                                <img src={W3} alt="#"/>
                                            </div>
                                            <div className="carousel-item">
                                                <img src={W4} alt="#"/>
                                            </div>
                                            <div className="carousel-item">
                                                <img src={W5} alt="#"/>
                                            </div>
                                        </div>

                                        <a className="carousel-control-prev" href="#demo3" data-slide="prev">
                                            <span className="carousel-control-prev-icon"/>
                                        </a>
                                        <a className="carousel-control-next" href="#demo3" data-slide="next">
                                            <span className="carousel-control-next-icon"/>
                                        </a>

                                    </div>
                                </div>


                            </div>
                        </div>

                    </div>

                </div>

                <Placeholder>
                    <Preload/>
                </Placeholder>

            </Preloader>
        );
    }
}

export default Gallery;