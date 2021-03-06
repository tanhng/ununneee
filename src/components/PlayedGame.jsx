import React, { Component } from 'react';

class PlayedGame extends Component {
    render() {
        return (
            <li>
                <div className="rc-post-thumb">
                    <a href="#"><img src="assets/images/rc-img/rc-img1.jpg" alt="" /></a>
                </div>
                <div className="rc-post-content">
                    <h3><a href="#">{this.props.name}</a></h3>
                    <div className="widget-date">{this.props.time}</div>
                </div>
            </li>
        );
    }
}

export default PlayedGame;