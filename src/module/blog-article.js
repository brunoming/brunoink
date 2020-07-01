import React from 'react';
import Markdown from 'react-markdown'
import '../style/blog-article.sass'
import { useLocation } from 'react-router-dom'

class BlogArticleMain extends React.Component {

    constructor(){
        super()
        this.state = {
            markdown: ''
        }
    }

    render() {
        const { markdown } = this.state;
        return (
            <Markdown source={markdown}></Markdown> // 渲染获取的 markdown 文档
        );
    }

    componentDidMount(){
        const articlePath = require('../data/blog/' + this.props.source + '.md') // 传递 props 中的 md 路径
        fetch(articlePath)
            .then(res => res.text())
            .then(text => this.setState({ markdown: text }));
    }

}

class BlogArticle extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className="blog-article">
                <article className="blog-article-container">
                    <BlogArticleMain source={this.props.url}></BlogArticleMain>
                </article>
            </div>
        )
    }

}

export default BlogArticle;
