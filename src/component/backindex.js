import React from 'react';
import { NavLink } from 'react-router-dom'
import '../style/_backindex.sass';

class Backindex extends React.Component {
  constructor() {
    super();
    this.state = {
      someKey: 'someValue'
    };
  }

  render() {
    return <NavLink to="/" className="backindex">Back</NavLink>;
  }

  componentDidMount() {
    this.setState({
      someKey: 'otherValue'
    });
  }
}

export default Backindex;
