import React from 'react';
import TodoListItem from '../todo_list/todo_list_item';
import TodoForm from '../todo_list/todo_form';
// const TodoList = ({todos, receiveTodo}) => (
//     <section>
//       <h3>Todo List!</h3>
//
//       <ul>
//         {todos.map((todo) => (<li key = {todo.id}>{todo.title}</li>))}
//       </ul>
//     </section>
//   )


class TodoList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { todos, receiveTodo } = this.props;
    const todoItems = todos.map((todo) =>(
      <TodoListItem key={todo.id} todo={todo} receiveTodo={receiveTodo} />
    ));

    return (
      <section>
        <h3>Todo List</h3>
        <TodoForm receiveTodo={receiveTodo}/>
        <ul>
          {todoItems}
        </ul>
      </section>);
  }
}

export default TodoList;
