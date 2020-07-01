import React from 'react';
import BackIndex from '../component/backindex'
import ContentHeader from './content-header'

class AboutContent extends React.Component {
  constructor() {
    super();
    this.state = {
      someKey: 'someValue'
    };
  }

  render() {
    return <div className="content" data-aos="fade-left">
      <ContentHeader headline="About Me"></ContentHeader>
    </div>;
  }

  componentDidMount() {
    this.setState({
      someKey: 'otherValue'
    });
    window.scrollTo(0,0)
  }
}

export default AboutContent;
