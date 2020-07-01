import React from 'react';
import {
    BrowserRouter,
    Switch,
    Router,
    Route,
    Link,
    Redirect,
    useLocation,
    useParams,
    withRouter
  } from "react-router-dom";
import IndexSlider from './indexSlider'

class WelcomeRight extends React.Component {
    constructor() {
        super();
        this.state = {
            someKey: 'someValue'
        };
    }

    render() {
        return <div className="app-right">
            <Router>
                <Route path='*' component={IndexSlider} />
            </Router>
        </div>;
    }

    componentDidMount() {
        this.setState({
            someKey: 'otherValue'
        });
    }
}

export default WelcomeRight;