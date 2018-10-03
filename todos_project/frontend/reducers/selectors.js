export const allTodos = function(state) {
  const keys = Object.keys(state.todos);
  const all_todos = [];

  for (let i = keys.length - 1; i >= 0; i--) {
    const key = keys[i];
    const todo = state.todos[key];
    all_todos.push(todo);
  }
  return all_todos;
  // return keys.map((el) => state.todos[el]);
};
