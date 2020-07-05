import React from 'react';
import '../style/tooltip.sass'

class Tooltip extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imgURL: this.props.imgURL
    };
  }

  render() {
    return <div className="tooltip-container">
      <img src={this.state.imgURL} ></img>
    </div>;
  }

}

export default Tooltip;
