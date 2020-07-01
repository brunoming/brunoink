import React from 'react';
import '../style/notfound.sass'
import Button from '../component/button'

class Notfound extends React.Component {
  constructor() {
    super();
    this.state = {
      someKey: 'someValue'
    };
  }

  render() {
    return <div className="notfound content">
        <h1>404<br></br>Not<br></br>Found</h1>
        <Button
            className="secondary-light xxl icon-right"
            text="Back to Home"
            href="/brunoink">
        </Button>
        </div>
;
  }

  componentDidMount() {
    this.setState({
      someKey: 'otherValue'
    });
  }
}

export default Notfound;
