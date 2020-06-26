import React from 'react';
import '../style/navigation.sass';
import Button from '../component/button';

class WebsiteNavItem extends React.Component {
    constructor() {
        super();
        this.state = {
            someKey: 'someValue'
        };
    }

    render() {
        return <li>
            <a href="">{this.props.text}</a>
        </li>;
    }

    componentDidMount() {
        this.setState({
            someKey: 'otherValue'
        });
    }
}

class WebsiteNav extends React.Component {

    render() {
        return <nav>
            <ul>
                <WebsiteNavItem text="about-us"></WebsiteNavItem>
            </ul>
        </nav>;
    }
}

class Navigation extends React.Component {
    constructor() {
        super();
        this.state = {
            someKey: 'someValue'
        };
    }

    render() {
        return(
        <header>
            <container>
                <div className="nav-title">
                    <p className="title">Bruno.ink</p>
                </div>
                <div className="nav-action">
                    <Button text="Contact Us" className="button-primary button-lg" style={{}}></Button>
                </div>
            </container>
        </header>
        );
    }

    componentDidMount() {
        this.setState({
            someKey: 'otherValue'
        });
    }
}


export default Navigation;

