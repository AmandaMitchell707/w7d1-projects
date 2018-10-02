export const allTodos = function(state) {
  const keys = Object.keys(state.todos);
  return keys.map((el) => state.todos[el]);
};
