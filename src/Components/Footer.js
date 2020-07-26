import React, {Component} from 'react';
import {LINK_FACEBOOK, LINK_INSTAGRAM, LINK_LINKEDIN} from "../config/configuration";

class Footer extends Component {
    render() {
        return (
            <div className={'footer container-fluid '}>
                <div className={'container nav justify-content-end'}>
                    <ul className={'nav justify-content-end'}>
                        <li className={'nav-item nav-footer'}>
                            <a href={LINK_INSTAGRAM} rel="noopener noreferrer" target={"_blank"} className="nav-link">
                                <span className={'link'}>Instagram</span>
                            </a>
                        </li>

                        <li className={'nav-item nav-footer'}>
                            <a href={LINK_FACEBOOK} rel="noopener noreferrer" target={'_blank'} className="nav-link">
                                <span className={'link'}>Facebook</span>
                            </a>
                        </li>

                        <li className={'nav-item nav-footer'}>
                            <a href={LINK_LINKEDIN} rel="noopener noreferrer" target={'_blank'} className="nav-link">
                                <span className={'link'}>LinkedIn</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default Footer;