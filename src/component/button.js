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
        return <button className={this.props.className} style={this.props.style}>
            <span>
                {this.props.text}
            </span>
        </button>;
    }

    componentDidMount() {
        this.setState({
            someKey: 'otherValue'
        });
    }
}

export default Button;
