import React from 'react';
import '../style/index-section-hero.sass'

class IndexSectionHero extends React.Component {
  constructor() {
    super();
    this.state = {
      someKey: 'someValue'
    };
  }

  render() {
    return <section className="index-section-hero">
        <div className="hero-left"></div>
        <div className="hero-right"></div>
    </section>;
  }

  componentDidMount() {
    this.setState({
      someKey: 'otherValue'
    });
  }
}

export default IndexSectionHero;
