import React, { Component } from 'react';

class Banner extends Component {
    render() {
        return (
            <div className="page-banner-area" style={{ backgroundImage: 'url(assets/images/bg/page-bg.jpg)' }}>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="page-content text-center">
                                <h1>KINGS OF THE <br /> WARRIORS</h1>
                                <a className="df-btn" href="#">Buy now</a>
                                <ul className="page-breadcrumb">
                                    <li>Home</li>
        <li>{this.props.path}</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default Banner;