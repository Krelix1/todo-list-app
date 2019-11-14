import React from 'react';
import css from "../../App.module.css";
import ListItem from "../ListItem/ListItem";

const List = ({todo, toggle, ...props}) => {
    return <div className={css.items}>
        {todo.length ? todo.map((task, index) => <ListItem key={index} todo={task} darkTheme={props.darkTheme} removeTask={props.removeTask}/>) : <p className={props.showApp?css.noTask:css.hideNoTask}>No task</p>}
    </div>
};

export default List;