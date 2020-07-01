import React from 'react';

import './App.sass'
import "swiper/css/swiper.css";

import { BrowserRouter as Router, Route, Link, Switch, withRouter, BrowserRouter ,useLocation} from "react-router-dom";
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
      <BrowserRouter>
        <Switch>
          <Route exact path='/brunoink' component={Home} />
          <Route path={['/brunoink/blog','/brunoink/blog/article']} component={Blog} />
          <Route path='/brunoink/about-me' component={About} />
          <Route path='/brunoink/contact' component={Contact} />
          <Route path='/brunoink/wechat' component={WechatQRCode} />
          <Route component={Notfound} />
        </Switch>
      </BrowserRouter>
    </div>
  }
}

class AppRight extends React.Component {
  render() {
    return <div className="app-right">
      <BrowserRouter>
        <Switch>
          <Route path='/brunoink/blog/article' render={() => (
            <BlogArticle url={"test1"}></BlogArticle>
          )} />
          <Route component={IndexSlider} />
        </Switch>
      </BrowserRouter>
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
        <AppLeft></AppLeft>
        <AppRight></AppRight>
      </main>
    );
  }
}