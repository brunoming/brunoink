import React from 'react';
import '../style/button.sass'

class Button extends React.Component {
    constructor() {
        super();
        this.state = {
            someKey: 'someValue'
        };
    }

    render() {
        return <a className="button-link" href={this.props.href} target={this.props.target}>
            <button
            className={this.props.className}
            style={this.props.style}
            title={this.props.title}>
            <span>
                {this.props.text}
            </span>
        </button>
        </a>;
    }

    componentDidMount() {
        this.setState({
            someKey: 'otherValue'
        });
    }
}

export default Button;
