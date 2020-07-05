import React from 'react';
import ContentHeader from './content-header'
import '../style/blog.sass'
import { NavLink } from 'react-router-dom'
import blogArticle from './blog-article';

class BlogList extends React.Component {

  render() {

    return <NavLink
      className="blog-list-container"
      to={this.props.url}
      activeClassName="active">
      <li className="blog-list">
        <p className="blog-list-type">{this.props.type}</p>
        <h2 className="blog-list-headline">{this.props.title}</h2>
        <p className="blog-list-date">{this.props.date}</p>
      </li></NavLink>

  }
}

class BlogContent extends React.Component {

  constructor() {
    super()
    this.state = {
      blogContent: require('../data/blog/blog-content.json'),
      blogListCount: 0
    }

  }

  render() {

    return this.state.blogContent.map(blogListItem => (
        <BlogList data-aos="fade-up" title={blogListItem.title} date={blogListItem.date} type={blogListItem.type} url={"/blog/article/" + blogListItem.url}></BlogList>
      ));
  }

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
