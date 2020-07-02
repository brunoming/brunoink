import React from 'react';
import Markdown from 'react-markdown'
import '../style/blog-article.sass'
import { Router, Route, useLocation, withRouter } from 'react-router-dom'

class BlogArticleMain extends React.PureComponent {

    constructor() {
        super()
        this.state = {
            markdown: ''
        }
    }

    render() {
        const { markdown } = this.state;
        return (
            <div>
                <Markdown source={markdown}></Markdown>
            </div>
           
        );
    }

    componentWillMount() { // 初始化时执行
        const articlePath = require('../data/blog/' + this.props.url + '.md') // 传递 props 中的 md 路径
        fetch(articlePath)
            .then(res => res.text())
            .then(text => this.setState({ markdown: text }));
    }

    componentDidUpdate() { // 更新时执行
        const articlePath = require('../data/blog/' + this.props.url + '.md') // 传递 props 中的 md 路径
        fetch(articlePath)
            .then(res => res.text())
            .then(text => this.setState({ markdown: text }));
    }
}

class BlogArticle extends React.PureComponent {
    constructor() {
        super();
    }

    render() {
        const { params } = this.props.match;
        return (
            <div className="blog-article">
                <article className="blog-article-container" data-aos="fade-up">
                    <BlogArticleMain url={params.source}></BlogArticleMain>
                </article>
            </div>
        )
    }

}

export default withRouter(BlogArticle);
