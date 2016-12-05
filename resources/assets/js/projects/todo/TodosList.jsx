import React, {
    Component,
    PropTypes,
} from 'react';

import TodosListHeader from './TodosListHeader';
import TodosListItem from './TodosListItem';


class todosList extends Component {

    render() {
        console.log(this.props);
        return (
            <table>
                <TodosListHeader />
                <tbody>
                {this.props.todos.map((todo, index) => <TodosListItem
                    key={index} {...todo} {...this.props} />)}
                </tbody>
            </table>
        );
    }
}

todosList.propTypes    = {};
todosList.defaultProps = {};

export default todosList;
