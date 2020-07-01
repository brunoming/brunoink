import React from 'react';
import BackIndex from '../component/backindex'
import '../style/content-header.sass'

class ContentHeader extends React.Component {
  constructor() {
    super();
    this.state = {
      someKey: 'someValue'
    };
  }

  render() {
    return <header>
        <BackIndex></BackIndex>
        <h1>{this.props.headline}</h1>
    </header>;
  }

  componentDidMount() {
    this.setState({
      someKey: 'otherValue'
    });
  }
}

export default ContentHeader;
