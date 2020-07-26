import React, {Component} from 'react';
import {ABOUT_ME_TEXT, MY_PIC} from "../config/configuration";

class AboutMe extends Component {
    render() {
        return (
            <div className={'about-me container-fluid'}>
                <div className={'container text-center'}>
                    <div className={'row pt-5'}>
                        <img src={MY_PIC} alt="#" className={'col-sm-12 col-md-6 offset-md-3 col-lg-4 offset-lg-4 pic'}/>
                        <div className={'row pt-5'}>
                            <div className={'col-sm-12 col-md-12 pb-5'}>
                                <p className={'text'}>
                                    {ABOUT_ME_TEXT}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default AboutMe;