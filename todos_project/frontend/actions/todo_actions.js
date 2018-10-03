export const RECEIVE_TODOS = 'RECEIVE_TODOS';
export const RECEIVE_TODO = 'RECEIVE_TODO';

export const receiveTodos = (todos) => ({ //array
  type: RECEIVE_TODOS,
  todos,
});

export const receiveTodo = (todo) => ({ //obj {id: , body: , title: }
  type: RECEIVE_TODO,
  todo,
});

// export const createTodo = (todo) => dispatch => ({
//   return
// });
