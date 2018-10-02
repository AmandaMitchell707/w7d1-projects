import {RECEIVE_TODOS, RECEIVE_TODO} from '../actions/todo_actions';
import merge from 'lodash/merge';

const initialState = {
  1: {
    id: 1,
    title: 'wash car',
    body: 'with soap',
    done: false
  },
  2: {
    id: 2,
    title: 'wash dog',
    body: 'with shampoo',
    done: true
  },
};

export const todosReducer = (state = initialState, action) => {
  Object.freeze(state);
  const newState = {};
  switch(action.type) {
    case RECEIVE_TODOS:
      action.todos.forEach((el) => {
        const id = el.id;
        newState[id] = el;
        });
      return newState;
    case RECEIVE_TODO:
      let nextState = merge({}, state);
      const id = action.todo.id;
      nextState[id] = action.todo;
      return nextState;
    default:
      return state;
  }
};
