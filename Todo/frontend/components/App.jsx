import React from 'react';
import Todo from './todos/todo';
import TodoContainer from './todos/todo_container';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <TodoContainer/>
    )
  }
}

export default App;