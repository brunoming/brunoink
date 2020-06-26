import React from 'react';
import '../style/_brunolink.sass';

class BrunoLink extends React.Component {
  constructor() {
    super();
    this.state = {
      someKey: 'someValue'
    };
    var fontWeight = '900'
  }

  render() {
    return <a data-aos="fade-up" data-aos-delay={this.props.delay} style={{fontWeight:'600'}} href={this.props.href} type={this.props.type} className={this.props.className} title={this.props.title}>
        {this.props.text}
    </a>;
  }

  componentDidMount() {
    this.setState({
      someKey: 'otherValue'
    });
  }
}

export default BrunoLink;
