import React from 'react';
import ContentHeader from './content-header'
import '../style/blog.sass'
import { NavLink } from 'react-router-dom'

class BlogList extends React.Component {
  render() {
    return <NavLink
              className="blog-list-container"
              to={this.props.url}
              activeClassName="active">
                <li className="blog-list">
      <h2 className="blog-list-headline">{this.props.title}</h2>
      <p className="blog-list-date">{this.props.date}</p>
    </li></NavLink>
  }
}

class BlogContent extends React.Component {

  state={
    blogContent: require('../data/blog/blog-content.json')
  }

  render() {
    return this.state.blogContent.map( blogListItem => (
        <BlogList title={blogListItem.title} date={blogListItem.date} url={"/blog/article/" + blogListItem.url}></BlogList>
      ));
    }
    /* const bloglistItem = []
    for (let list of blogContent) {
      bloglistItem.push( // 循环每个用户，构建 JSX，push 到数组中
        <BlogList title={list.title} date={list.date}></BlogList>
      )
    }

    return <ul className="blog-content">
      {bloglistItem}
    </ul> */
}

class Blog extends React.Component {

  render() {
    return <div className="content" data-aos="fade-left">
      <ContentHeader headline="Blog"></ContentHeader>
      <ul className="blog-content"><BlogContent></BlogContent></ul>
    </div>;
  }

  componentDidMount() {
    window.scrollTo(0, 0)
  }
}

export default Blog;
