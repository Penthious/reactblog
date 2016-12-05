import React, {
    Component,
    PropTypes,
} from 'react';

class TodosListHeader extends Component {
    render() {
        return (
            <thead>
                <tr>
                    <td>Task</td>
                    <td>Action</td>
                </tr>
            </thead>
        );
    }
}

TodosListHeader.propTypes    = {};
TodosListHeader.defaultProps = {};

export default TodosListHeader;
