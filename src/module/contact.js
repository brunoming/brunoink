import React from 'react';
import BackIndex from '../component/backindex'

class ContactContent extends React.Component {
  constructor() {
    super();
    this.state = {
      someKey: 'someValue'
    };
  }

  render() {
    return <div className="content">
      <BackIndex></BackIndex>
      <h1>Contact</h1>
    </div>;
  }

  componentDidMount() {
    this.setState({
      someKey: 'otherValue'
    });
    window.scrollTo(0,0)
  }
}

export default ContactContent;
