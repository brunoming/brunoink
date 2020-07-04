import React from 'react';

import './App.sass'
import "swiper/css/swiper.css";
import { BrowserRouter as Router, Route, Switch, BrowserRouter, useLocation} from "react-router-dom";

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

/* var clientWidth = document.documentElement.clientWidth // 根据设备宽度判断引用移动端 或 desktop转场

console.log(clientWidth)

if (clientWidth > 735) {
  require('./style/_transition-group.sass')
} else if ( clientWidth <= 735 ) {
  require('./style/_transition-group-mobile.sass')
} */

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


class AppRight extends React.Component {
  render() {
    return <div className="app-right">
      <Switch>
        <Route component={IndexSlider} />
      </Switch>
    </div>
  }
}

function AppContent() { // 渲染 AppContent 内的内容
  let location = useLocation()
  console.log(location.pathname.split('/').slice(0,2).join('/'))
  return <div className="app-content">
    <CloseButton className="tertiary-dark" href={location.pathname.split('/').slice(0,2).join('/')}></CloseButton>
    <SwitchTransition>
      <CSSTransition
        key={location.pathname}
        classNames='article-fade'
        timeout={600}
      >
        <Switch location={location}>
          <Route exact path='/blog/article/:source' component={BlogArticle} />
        </Switch>
      </CSSTransition>
    </SwitchTransition>
  </div>
}


function AppContentSwitch() { // 渲染 AppContent 容器
  let location = useLocation()
  return <SwitchTransition>
    <CSSTransition
      key={location.pathname.split('/').slice(2,3)}
      classNames='app-content-fade'
      timeout={600}
    >
      <Switch location={location} >
        <Route path="/blog/article" component={AppContent} />
      </Switch>
    </CSSTransition>
  </SwitchTransition>
}

export default class App extends React.Component {
  state = { show: true };
  onToggle = () => this.setState({ show: !this.state.show });
  render() {
    const { show } = this.state;
    return (
      <main>
        <BrowserRouter>
          <AppLeft />
          <AppRight />
          <AppContentSwitch />
        </BrowserRouter>
      </main>
    );
  }
}