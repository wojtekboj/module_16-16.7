import React from 'react';
import uuid from 'uuid-v4';
import style from './App.css';
import Title from './../components/Title';
import TodoList from './../components/TodoList';
import AddOption from './../components/TodoForm';

class App extends React.Component {
    constructor(props){
        super(props);
        this.addTodo = this.addTodo.bind(this);
        this.removeTodo = this.removeTodo.bind(this);
        this.state = {
            data: [{
                id: 1,
                    text: 'clean room'
            }, {
                id: 2,
                    text: 'wash the dishes'
            }, {
                id: 3,
                    text: 'feed my cat'
            }]
        };
    }
    addTodo(val){
        const todo = {
            text: val,
            id: uuid(),
        };
        const data = [...this.state.data, todo];
        this.setState({data});
    }
    removeTodo(id) {
        const remainder = this.state.data.filter(todo => todo.id !== id);
        this.setState({data: remainder});
    }
    render() {
        return (
            <div className={style.TodoApp}>
                <Title title={"Tytuł"} qty={this.state.data.length} />
                <AddOption handleAddOption={this.addTodo} />
                <TodoList list={this.state.data} remove={this.removeTodo} />
            </div>
        )
    }
};

export default App;