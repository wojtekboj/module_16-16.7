import React from 'react';
import ReactDOM from 'react-dom';
import App from './../containers/App';
import Option from './Todo';
import style from './TodoList.css';

const TodoList = (props) => (
    <ul>
        {
            props.list.map(element => (
                <Option
                    text={element.text}
                    remove={props.remove}
                    id={element.id}
                />
            ))
        }
    </ul>
);

export default TodoList;