import React from 'react';

import './App.sass'
import "swiper/css/swiper.css";

import { BrowserRouter as Router, Route, Link, Switch, withRouter, BrowserRouter ,useLocation ,IndexRouter} from "react-router-dom";
import Home from './module/home'
import Blog from './module/blog'
import About from './module/about'
import Contact from './module/contact'
import WechatQRCode from './module/wechat-qrcode'
import Notfound from './module/notfound'
import IndexSlider from './module/indexSlider'
import BlogArticle from './module/blog-article';

class AppLeft extends React.Component {

  render() {

    return <div className="app-left">
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path={['/blog','/blog/article']} component={Blog} />
          <Route path='/about-me' component={About} />
          <Route path='/contact' component={Contact} />
          <Route path='/wechat' component={WechatQRCode} />
          <Route component={Notfound} />
        </Switch>
    </div>
  }
}

class AppRight extends React.Component {
  render() {
    return <div className="app-right">
        <Switch>
          <Route path='/blog/article/:source' component={BlogArticle} />
          <Route component={IndexSlider} />
        </Switch>
    </div>;
  }
}

export default class App extends React.Component {
  state = { show: true };
  onToggle = () => this.setState({ show: !this.state.show });
  render() {
    const { show } = this.state;
    return (
      <main>
        <Router basename="/">
          <AppLeft></AppLeft>
          <AppRight></AppRight>
        </Router>
      </main>
    );
  }
}