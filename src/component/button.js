import React from 'react';
import '../style/button.sass'
import Popover from './popover'

class Button extends React.Component {
    constructor() {
        super();
        this.state = {
            popoverIsToggleOn: false,
        }
    }

    render() {
        return <div className="button-container">
            <Popover className="hide" qrcode="../img/wechat-qrcode.png"></Popover>
            <a className="button-link" href={this.props.href} target={this.props.target}>
                <button
                    className={this.props.className}
                    style={this.props.style}
                    title={this.props.title}>
                    <span>
                        {this.props.text}
                    </span>
                </button>
            </a>
        </div>
    };

    componentDidMount() {

    }
}

export default Button;
