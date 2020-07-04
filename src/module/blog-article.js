import React from 'react';
import Markdown from 'react-markdown'
import '../style/blog-article.sass'
import { withRouter } from 'react-router-dom'
import hljs from 'highlight.js/lib/core';
import javascript from 'highlight.js/lib/languages/javascript';

hljs.registerLanguage('javascript', javascript);

class BlogArticleMain extends React.PureComponent {

    constructor(props) { // 初始化
        super(props)

        this.state = {
            markdown: '',
            opacity: 1,
            transition: 'all 0.6s ease-in-out'
        }

        const articlePath = require('../data/blog/' + this.props.url + '.md') // 传递 props 中的 md 路径
        fetch(articlePath)
            .then(res => res.text())
            .then(text => this.setState({ markdown: text }));
    }

    render() {
        const { markdown } = this.state;
        return (
            <div style={{
                opacity: this.state.opacity,
                transition: this.state.transition
            }}>
                <Markdown
                    source={markdown}
                />
            </div>
        );
    }

    componentDidMount() { // 更新时执行
    }

    componentDidUpdate(){
        const articlePath = require('../data/blog/' + this.props.url + '.md') // 传递 props 中的 md 路径
        fetch(articlePath)
            .then(res => res.text())
            .then(text => this.setState({ markdown: text }));
        hljs.registerLanguage('javascript', javascript);
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
{/*                 <div className="article-contact">
                <a href="mailto:brunoming1996@gmail.com" style={{display: 'block', marginTop: '48px'}}>通过邮件联系 Bruno</a>
                </div> */}
                </article>
            </div>
        )
    }


}

export default withRouter(BlogArticle);
