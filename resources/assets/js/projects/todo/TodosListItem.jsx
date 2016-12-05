import React, {
    Component,
    PropTypes,
} from 'react';

class TodosListItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isEditing: false,
        };
    }

    onEditClick = () => {
        this.setState({isEditing: true});
    };

    onCancelClick = () => {
        this.setState({isEditing: false});
    };

    onSaveClick = (e) => {
        e.preventDefault;
        const oldTask = this.props.task;
        const newTask = this.refs.editInput.value;
        this.props.saveTask(oldTask, newTask);
        this.setState({ isEditing: false });
    };

    renderTasksSection() {
        console.log(this.props);
        const { task, isCompleted } = this.props;
        const taskStyle = {
            color: isCompleted ? 'green' : 'red',
            cursor: 'pointer',
        };
        if(this.state.isEditing){
            return (
                <td>
                    <form onSubmit={this.onSaveClick} className="todo--input">
                        <input type="text" defaultValue={task} ref="editInput" />
                    </form>
                </td>
            )
        }
        return (
            <td
                className="todo--item"
                style={taskStyle}
                onClick={() => this.props.toggleTask(task)}
             >
                {task}
            </td>
        );
    }

    renderActionSection() {
        if (this.state.isEditing) {
            return (
                <td>
                    <button onClick={this.onSaveClick}>Save</button>
                    <button onClick={this.onCancelClick}>Cancel</button>
                </td>
            );
        }
        return (
            <td>
                <button onClick={this.onEditClick}>Edit</button>
                <button onClick={() => this.props.deleteTask(this.props.task)}>Delete</button>
            </td>
        );
    }

    render() {
        return (
            <tr className="todo--item">
                {this.renderTasksSection()}
                {this.renderActionSection()}
            </tr>
        );
    }
}

TodosListItem.propTypes    = {};
TodosListItem.defaultProps = {};

export default TodosListItem;
