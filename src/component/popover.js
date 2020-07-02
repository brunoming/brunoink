import React from 'react';
import '../style/popover.sass'

class Popover extends React.Component {
  constructor() {
    super();
    this.state = {
      visible: 'false'
    };
  }

  render() {
    return <div className={"popover-container " + this.props.className}>
        <div className="popover-qr-code">
            <img src={this.props.qrcode} alt={this.props.alt}></img>
        </div>
    </div>;
  }

  componentDidMount() {
    this.setState({
      someKey: 'otherValue'
    });
  }
}

export default Popover;
