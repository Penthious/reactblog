import React, {
    Component,
    PropTypes,
} from 'react';

import './todo.sass';
import todos from './todos';
import TodosList from './TodosList';
import CreateTodo from './CreateTodo';


class Todo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todos,
        };
    }

    createTask = (task) => {
        this.state.todos.push({
            task,
            isCompleted: false,
        });
        this.setState({todos: this.state.todos});
    };

    toggleTask = (task) => {
        const foundTodo = this.state.todos.find(todo => todo.task === task);

        foundTodo.isCompleted = !foundTodo.isCompleted;
        this.setState({todos: this.state.todos});
    };

    saveTask = (oldTask, newTask) => {
        const foundTodo = this.state.todos.find(todo => todo.task === oldTask);

        foundTodo.task = newTask;
        this.setState({todos: this.state.todos});
    };

    deleteTask = (taskToDelete) => {
        console.log(taskToDelete);
        const foundTodo = this.state.todos.find(todo => todo.task === taskToDelete);
        this.state.todos.splice(foundTodo, 1);
        this.setState({todos: this.state.todos});

    };

    render() {
        return (
            <div>
                <div className="columns">
                    <div className="column is-offset-5 is-offset-3-mobile">
                        <h1 className="is-1 todo--title">Todo List</h1>
                    </div>
                </div>

                <div className="columns">
                    <div className="column is-offset-3 is-6">
                        <CreateTodo
                            todos={this.state.todos}
                            createTask={this.createTask}
                        />

                    </div>

                </div>
                <div className="columns">
                    <div className="column is-offset-3 is-6">
                        <TodosList
                            todos={this.state.todos}
                            toggleTask={this.toggleTask}
                            saveTask={this.saveTask}
                            deleteTask={this.deleteTask}
                        />
                    </div>

                </div>
            </div>
        );
    }
}

Todo.propTypes    = {};
Todo.defaultProps = {};

export default Todo;
