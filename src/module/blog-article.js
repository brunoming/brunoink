import React from 'react';
import Markdown from 'react-markdown'
import '../style/blog-article.sass'
import { withRouter } from 'react-router-dom'
import { Button, CloseButton } from '../component/button'

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
                <Markdown
                    source={markdown}
                    transformImageUri={uri =>
                        uri.startsWith("http") ? uri : `${process.env.REACT_IMAGE_BASE_URL}${uri}`
                      }/>
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
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            type: '',
            date: '',
        }
    }

    render() {
        const { params } = this.props.match;
        return (
            <div className="blog-article">
                <article className="blog-article-container">
                <BlogArticleMain url={params.source}></BlogArticleMain>
                </article>
            </div>
        )
    }


}

export default withRouter(BlogArticle);
