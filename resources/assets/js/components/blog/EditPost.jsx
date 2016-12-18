import React, {
    Component,
    PropTypes,
} from 'react';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import { editPost } from '../../actions/blogActions';

@connect(() => ({}))
class EditPost extends Component {
    componentWillMount() {
        this.props.dispatch(editPost(this.props.params.id));
    }

    render() {
        return (
            <div></div>
        );
    }
}

EditPost.propTypes    = {};
EditPost.defaultProps = {};

export default EditPost;
