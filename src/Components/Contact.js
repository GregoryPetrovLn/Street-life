import React, {Component} from 'react';
import * as emailjs from 'emailjs-com'
import {SERVICE_ID, TEMPLATE_ID, USER_ID} from "../config/configuration";

class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            text: ''
        }
    }

    handleChange = (e) => {
        e.preventDefault();
        let email = e.target.value;
        this.setState({
            email
        })
    };

    handleChangeTextArea = (e) => {
        e.preventDefault();
        let text = e.target.value;
        this.setState({
            text
        })
    };

    resetForm = () => {
        this.setState({
            email: '',
            subject: '',
            text: '',
        });
        document.getElementById('email').value = '';
        document.getElementById('text').value = '';
    };

    handleSubmit = () => {
        let templateParams = {
            from_name: this.state.email,
            message_html: this.state.text
        };

        emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, USER_ID)
            .then(function(response) {
                console.log('SUCCESS!', response.status, response.text);
            }, function(error) {
                console.log('FAILED...', error);
            });

        this.resetForm();
    };




    render() {
        return (
            <div className={'container-fluid contact h-100 pb-5'}>
                <div className={'container'}>

                    <div className={'contact-text p-5'}>
                        <h2>Hey dear,</h2>
                        <br/>
                        <h3>If you'd like to work together, or for any other reason, fell free to text me</h3>
                    </div>

                    <div className={'container forms row'}>
                        <input id={'email'} onChange={this.handleChange}
                               type={'email'} placeholder={'Email'}
                               className={'col-md-8 col-12 offset-md-2 text-center'}/>
                        <br/>
                        <textarea id={'text'} onChange={this.handleChangeTextArea}
                                  className={"col-md-8 col-12 offset-md-2 mt-3"}/>
                        <br/>
                        <button onClick={this.handleSubmit} className={'col-md-2 col-sm-2 offset-sm-2 offset-md-5 mt-3 button'}>Send</button>
                    </div>

                </div>
            </div>
        );
    }
}

export default Contact;