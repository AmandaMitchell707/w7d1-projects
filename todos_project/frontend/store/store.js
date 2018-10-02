import {
  createStore,
  applyMiddleware
} from 'redux';
// import {logger} from 'redux-logger';
import {rootReducer} from '../reducers/root_reducer';
import {receiveTodo, receiveTodos} from '../actions/todo_actions';

export default function configureStore() {
  return createStore(
    rootReducer
    // applyMiddleware(logger)
  );
}
