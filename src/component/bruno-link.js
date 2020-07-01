import React from 'react';
import '../style/_link.sass';
import { Link } from 'react-router-dom'

class BrunoLink extends React.Component {

  render() {
    return <Link onClick={this.onToggle} to={this.props.to} style={{fontWeight:'600'}} type={this.props.type} className={this.props.className} title={this.props.title}>
        {this.props.text}
    </Link>;
  }

  componentDidMount() {
    this.setState({
      someKey: 'otherValue'
    });
  }
}

export default BrunoLink;
