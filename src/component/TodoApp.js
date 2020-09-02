import React from "react";
import todoData from "./todoData";
import TodoList from "./TodoList";

class TodoApp extends React.Component {
  constructor() {
    super();
    this.state = {
      todo: todoData,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(id) {
    this.setState((prevState) => {
      const updateTodo = prevState.todo.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      });
      return {
        todo: updateTodo,
      };
    });
  }

  render() {
    const todoComponents = this.state.todo.map((todos) => (
      <TodoList key={todos.id} todo={todos} handleChange={this.handleChange} />
    ));

    return <div className="todo-list">{todoComponents}</div>;
  }
}

// class TodoApp extends React.Component{
//     constructor(){
//         super()
//         this.state = {
//             count: 0
//         }
//         this.handleClick = this.handleClick.bind(this)
//     }

//     handleClick(){
//         this.setState (prevState => {
//             return {
//                 count: prevState.count + 1
//             }
//         })
//     }

//     render(){
//         return (
//             <div>
//                 <h1>{this.state.count}</h1>
//                 <button onClick={this.handleClick}>Change!</button>
//             </div>
//         )
//     }
// }

export default TodoApp;
