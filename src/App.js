import React, {Component} from 'react';
import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom";
import {PATH_ABOUT, PATH_CONTACT, PATH_GALLERY, PATH_MAIN} from "./config/configuration";
import AboutMe from "./Components/AboutMe";
import Gallery from "./Components/Gallery";
import Main from "./Components/Main";
import Contact from "./Components/Contact";
import './App.css';
import './ElementsAndLinks.css'
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Preload from "./Components/Preload";
import {Placeholder, Preloader} from "react-preloading-screen";



class App extends Component {
    render() {
        return (
            <Preloader>

                <BrowserRouter>

                    <Header/>
                    <Switch>
                        <Route path={PATH_MAIN} exact render={() => {
                            return <Main/>
                        }}/>

                        <Route path={PATH_GALLERY} exact render={() => {
                            return <Gallery/>
                        }}/>

                        <Route path={PATH_ABOUT} exact render={() => {
                            return <AboutMe/>
                        }}/>

                        <Route path={PATH_CONTACT} exact render={() => {
                            return <Contact/>
                        }}/>

                        <Redirect to={PATH_MAIN}/>
                    </Switch>
                    <Footer/>
                </BrowserRouter>


                <Placeholder>
                    <Preload/>
                </Placeholder>
            </Preloader>
        )
    }
}

export default App;