import React from 'react';
import '../style/button.sass'
import ReactTooltip from 'react-tooltip';
import { Link } from 'react-router-dom'

class CloseButton extends React.PureComponent {

    render() {
        return <Link className="button-link close-button" to={this.props.href} target={this.props.target}>
                <button
                    className={"tertiary-light"}
                    style={this.props.style}
                    title={this.props.title}>
                    <span>
                        {this.props.text}
                    </span>
                </button>
            </Link>
    }
}

class QRCodeButton extends React.PureComponent {

    render() {
        return <div data-clickable={true} data-tip = {"<img src='" + require('../img/wechat-qrcode.png') + "'/>"} data-class={'popover'} data-effect={'solid'} data-place={'top'} data-type={'light'} data-html={true} className="button-container">
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
            <ReactTooltip />
        </div>
    };
}

class Button extends React.PureComponent {

    render() {
        return <div className="button-container">
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
            <ReactTooltip/>
        </div>
    };

    componentDidMount() {
        function togglePopoverVisible(){

        }
    }
}

export { Button , QRCodeButton , CloseButton};
