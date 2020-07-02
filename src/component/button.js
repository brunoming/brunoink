import React from 'react';
import '../style/button.sass'
import ReactTooltip from 'react-tooltip';

class QRCodeButton extends React.PureComponent {

    render() {
        return <div data-tip = {"<img src='" + require('../img/wechat-qrcode.png') + "'/>"} data-class={'popover'} data-effect={'solid'} data-place={'top'} data-type={'light'} data-html={true} className="button-container">
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

    componentDidMount() {
        function togglePopoverVisible(){

        }
    }
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

export { Button , QRCodeButton };
