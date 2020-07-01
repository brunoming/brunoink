import React from 'react';
import BackIndex from '../component/backindex'
import '../style/wechat-qrcode.sass'

class WechatQRCode extends React.Component {
  constructor() {
    super();
    this.state = {
      someKey: 'someValue'
    };
  }

  render() {
    return <div className="content">
      <BackIndex></BackIndex>
      <div className="QRCode"></div>
    </div>;
  }

  componentDidMount() {
    this.setState({
      someKey: 'otherValue'
    });
  }
}

export default WechatQRCode;
