import React, {
    Component,
    PropTypes,
} from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import classNames from 'classnames';

import { fetchAllPosts, deletePost } from '../../actions/blogActions';
import '../../../sass/blog.sass';

@connect(store =>
    ({
        postsList: store.blog.postsList,
        auth: store.auth.authenticated,
    }))
class Blog extends Component {
    componentWillMount() {
        this.props.dispatch(fetchAllPosts());
    }

    // this needs to change to redux dont forget!!!!
    handleOnClick = (index) => {
        const post    = this.props.postsList.posts[index];
        // change this to redux !!!!!!!!!
        post.isActive = !post.isActive;
        // console.log(this.props.postsList.posts[id - 1]);
        this.forceUpdate();
    };

    handleHiddenClass = active =>
        classNames({
            'card-content': true,
            'is-hidden': !active,
        });
    handleCardArrow   = (active) =>
        classNames({
            fa: true,
            'fa-angle-down': active,
            'fa-angle-right': !active,
        });

    handleDelete = (id) => {
        if (confirm('Are you sure you want to Delete this post?')) {
            this.props.dispatch(deletePost(id));
        }
    };

    renderPosts = (posts) => {
        const { auth } = this.props;
        return (<div className="container">
            {posts.map((post, index) =>
                <div className="card is-fullwidth blog--card" key={post.id}>
                    <header className="card-header">
                        <p className="card-header-title">
                            {post.name}
                        </p>
                        <a className="card-header-icon" onClick={() => this.handleOnClick(index)}>
                            <i className={this.handleCardArrow(post.isActive)} />
                        </a>
                    </header>
                    <div className={this.handleHiddenClass(post.isActive)}>
                        <div className="content">
                            {post.body}
                            <br />
                            <small>{post.created_at}</small>
                        </div>
                    </div>
                    <footer className="card-footer">
                        <Link to={`blog/show/${post.id}`} className="card-footer-item">View</Link>
                        { auth ? <Link
                            to={`api/edit/${post.id}`}
                            className="card-footer-item"
                        >
                            Edit
                        </Link> : null }
                        { auth ? <a
                            onClick={() => this.handleDelete(post.id)}
                            className="card-footer-item"
                        >
                            Delete
                        </a> : null }
                    </footer>
                </div>)}
        </div>);
    };

    render() {
        if (this.props.children) {
            return this.props.children;
        }
        const { posts, loading } = this.props.postsList;
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

Blog.propTypes    = {
    postsList: PropTypes.arrayOf(PropTypes.shape),
    auth: PropTypes.bool,
    dispatch: PropTypes.func,
    children: React.PropTypes.oneOfType([
        React.PropTypes.arrayOf(React.PropTypes.node),
        React.PropTypes.node,
    ]),
};
Blog.defaultProps = {};

export default Blog;
