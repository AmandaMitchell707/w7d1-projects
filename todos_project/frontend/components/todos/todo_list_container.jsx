

const mapStateToProps = state => ({
  todos: state.todos,
});

const mapDispatchToProps = dispatch => ({
  receiveTodos: todos => dispatch(receiveTodos(todos)),
});
