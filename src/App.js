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
import ReactTooltip from 'react-tooltip'

import AOS from 'aos'
import 'aos/dist/aos.css';

AOS.init({
  once: true,
  duration: 800,
});

// var clientWidth = document.documentElement.clientWidth // 获取可视范围宽度

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
    <div className="app-content-header">
      <CloseButton className="tertiary-dark" href={location.pathname.split('/').slice(0,2).join('/')}></CloseButton>
    </div>
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
          <ReactTooltip />
        </BrowserRouter>
      </main>
    );
  }
}