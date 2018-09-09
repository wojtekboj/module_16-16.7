import React from 'react';
import ReactDOM from 'react-dom';
import style from './../containers/App.css';

const Title = props => (
    <h1 className={style.Title} >{props.title} ({props.qty})</h1>
);

export default Title;