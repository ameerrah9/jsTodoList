import React from 'react';
import ReactDOM from 'react-dom';

class List extends React.Component {

    constructor() {
        super();

        this.state = {
            todos: [
                {id: 1, content: "Task #1"},
                {id: 2, content: "Task #2"}
            ]
        };

    }

    componentDidMount() {
        // this method is called AFTER the component is rendered onto the DOM
    }

    deleteTodo = id => {
        const todos = this.state.todos.filter(todo => {
            return todo.id !== id
        });

        this.setState({
            todos
        })
    }
    render() {
        return(
            <div className="List">
                <h1 className="center blue-text">Todo's</h1>
                <Todos todos={this.state.todos} deleteTodo={this.deleteTodo} />
            </div>
        );
    }
}

// ===================================================

const Todos = ({ todos, deleteTodo }) => {

    const todoList = todos.length ? (
        todos.map(todo => {
            return (
                <div className="collection-item" key={todo.id}>
                    <span onClick={() => {deleteTodo(todo.id)}}>{todo.content}</span>
                </div>
            )
        })
    ) : (
        <p className="center">You have no todo's left</p>
    )

    return (
        <div className="todos collection">
            {todoList}
        </div>
    )
}

// ===================================================

ReactDOM.render(
    <List />,
    document.getElementById('root')
);
