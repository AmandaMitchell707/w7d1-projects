import {connect} from 'react-redux';
import {receiveTodo, receiveTodos} from '../../actions/todo_actions';
import TodoList from './todo_list';
import { allTodos } from '../../reducers/selectors';


const mapStateToProps = reduxState => {
  return {
    todos: allTodos(reduxState),
  };
};

const mapDispatchToProps = reduxDispatch => {
  return {
    receiveTodo: todo => reduxDispatch(receiveTodo(todo)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
