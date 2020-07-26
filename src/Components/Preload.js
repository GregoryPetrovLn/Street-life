import React from 'react';

export default class Preload extends React.Component {
    render() {
        return (
            <div className={'container-fluid preload'}>
                <div className={'row'}>
                    <div className={"col-md-2 offset-md-5 col-sm-8 offset-sm-2 justify-content-center text-center"}>
                        <div className={'spinner-border'}/>
                    </div>
                </div>
            </div>
        );
    }
}