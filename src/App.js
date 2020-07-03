import React from 'react';

import './App.sass'
import "swiper/css/swiper.css";
import { BrowserRouter as Router, Route, Switch, BrowserRouter, useLocation } from "react-router-dom";
import { SwitchTransition, CSSTransition } from 'react-transition-group'
import Home from './module/home'
import Blog from './module/blog'
import About from './module/about'
import Contact from './module/contact'
import Notfound from './module/notfound'
import { CloseButton } from './component/button'
import IndexSlider from './module/indexSlider'
import BlogArticle from './module/blog-article'
import { TouchBallLoading } from 'react-loadingg';

function AppLeft() {
  let location = useLocation();
  return <div className="app-left">
    <SwitchTransition mode={'out-in'}>
      <CSSTransition 
      classNames='fade'
      timeout={300}
      key={location.pathname.split('/').slice(0, 2).join('/')}>
        <Switch location={location}>
          <Route exact path='/' component={Home} />
          <Route path='/blog' component={Blog} />
          <Route path='/about-me' component={About} />
          <Route path='/contact' component={Contact} />
          <Route component={Notfound} />
        </Switch>
      </CSSTransition>
      </SwitchTransition>
  </div>
}


function AppRight() {
  return <div className="app-right">
    <Switch>
      <Route component={IndexSlider} />
    </Switch>
  </div>;
}

function AppContent() {
  let location = useLocation();
  return <div className="app-content">
    <CloseButton href="/blog"></CloseButton>
    <Switch>
      <Route exact path='/blog/article/:source' component={BlogArticle} />
    </Switch>
  </div>
}

export default class App extends React.Component {
  state = { show: true };
  onToggle = () => this.setState({ show: !this.state.show });
  render() {
    const { show } = this.state;
    return (
      <main>
        <BrowserRouter basename="/">
          <AppLeft></AppLeft>
          <AppRight></AppRight>
          <Switch>
            <Route path='/blog/article' component={AppContent}/>
          </Switch>
        </BrowserRouter>
      </main>
    );
  }
}