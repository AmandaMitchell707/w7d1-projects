import React from 'react';
import uniqueId from '../../utils/uniqueId';

class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { id: uniqueId(), title: "", body: "", done: false};
    this.updateTitle = this.updateTitle.bind(this);
    this.updateBody = this.updateBody.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  updateTitle(e) {
    this.setState({title:e.currentTarget.value});
  }

  updateBody(e) {
    this.setState({body:e.currentTarget.value});
  }

  handleSubmit(e) {
    e.preventDefault();

    const todo = Object.assign({}, this.state);
    this.props.receiveTodo(todo);

    this.setState({id: uniqueId(), title: '', body: ''});
  }

  // handleChange(e) {
  //   const body = e.currentTarget
  // }

  render() {
    return (
      <div>
        <form onSubmit = {this.handleSubmit}>
          <label>Title
            <input type='text' onChange={this.updateTitle} value={this.state.title}/>
          </label>

          <label>Body
            <input type='text' onChange={this.updateBody} value={this.state.body}/>
          </label>

          <button>Add todo</button>
        </form>
      </div>
    );
  }
}

export default TodoForm;
