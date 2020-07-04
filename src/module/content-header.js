import React from 'react';
import BackIndex from '../component/backindex'
import '../style/content-header.sass'

class ContentHeader extends React.Component {

  constructor() {
    super();
    this.state = {
      HideH1: '',
      H1deH2: 'none'
    };
  }

  render() {
    return <header>
        <BackIndex></BackIndex>
        <h1 style={{display: (this.state.HideH1)}}>{this.props.headline}</h1>
    </header>;
  }

  componentDidMount() {

  }
}

export default ContentHeader;
