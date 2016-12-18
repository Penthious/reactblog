import React, {
    Component,
    PropTypes,
} from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import classNames from 'classnames';

import { fetchAllPosts } from '../../actions/blogActions';

@connect((store) => {
    return {
        postsList: store.blog.postsList,
    };
})
class Blog extends Component {
    componentWillMount() {
        this.props.dispatch(fetchAllPosts());
    }

    // this needs to change to redux dont forget!!!!
    handleOnClick = (id) => {
        let post = this.props.postsList.posts[id - 1];
        // change this to redux !!!!!!!!!
        post.isActive = !post.isActive;
        //console.log(this.props.postsList.posts[id - 1]);
        this.forceUpdate();
    };

    handleHiddenClass = (active) =>
        classNames({
            'card-content': true,
            'is-hidden': active,
        });

    renderPosts = posts => {

        return (<div className="container">
            {posts.map(post =>
                <div className="card is-fullwidth" key={post.id}>
                    <header className="card-header">
                        <p className="card-header-title">
                            {post.name}
                        </p>
                        <a className="card-header-icon" onClick={() => this.handleOnClick(post.id)}>
                            <i className="fa fa-angle-down" />
                        </a>
                    </header>
                    <div className={this.handleHiddenClass(post.isActive)} ref={post.id}>
                        <div className="content">
                            {post.body}
                            <br />
                            <small>11:09 PM - 1 Jan 2016</small>
                        </div>
                    </div>
                    <footer className="card-footer">
                        <Link to={`blog/show/${post.id}`} className="card-footer-item">View</Link>
                        <a className="card-footer-item">Edit</a>
                        <a className="card-footer-item">Delete</a>
                    </footer>
                </div>)}
        </div>);
    }

    render() {
        const { posts, loading, error } = this.props.postsList;
        if (loading === true) {
            return <div className="loader" />;
        }
        return (
            <div>
                {this.renderPosts(posts)}
            </div>
        );
    }
}

Blog.propTypes = {};
Blog.defaultProps = {};

export default Blog;
