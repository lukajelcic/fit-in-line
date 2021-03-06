import React, { Component } from 'react';

import './Question.css';

class QuestionRight extends Component {
    constructor() {
        super();
        this.state = {
            opened: false
        }
    }

    toggle = () => {
        this.setState({
            opened: !this.state.opened
        })
    }

    render() {
        return (
            <div>
                <div className="toggle-card" onClick={this.toggle}>
                    <h5 className="toggle-title">{this.props.item.title}</h5>
                    <div className={this.state.opened ? "toggle-conent" : "hide-content"}>
                        <p>{this.props.item.text}</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default QuestionRight;