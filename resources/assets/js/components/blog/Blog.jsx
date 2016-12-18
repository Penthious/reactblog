import React, {
    Component,
    PropTypes,
} from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

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

    renderPosts = posts =>
        posts.map(post => <div>
            <Link to={`posts/${post.id}`}>
                {post.name}
            </Link>
        </div>);

    render() {
        const { posts, loading, error } = this.props.postsList;
        if (loading === true) {
            return <div className="loader" />;
        }
        return (
            <div>
                <p>test</p>
                {this.renderPosts(posts)}
            </div>
        );
    }
}

Blog.propTypes    = {};
Blog.defaultProps = {};

export default Blog;
