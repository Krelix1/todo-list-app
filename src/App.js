import React, {useState, useEffect} from 'react';
import css from './App.module.css';
import ListItem from "./components/ListItem/ListItem";
import TaskCreator from "./components/TaskCreator/TaskCreator";

const App = () => {
    let [showApp, setShowToggle] = useState(false);
    let [showItemCreator, setShowItemCreator] = useState(false);
    let toggle = () => {
        let toggle = !showItemCreator;
        setShowItemCreator(toggle)
    };
    let tasks = localStorage.getItem('tasks');
    let [todo, setTodo] = useState( tasks ? [...JSON.parse(tasks)] : []);
    const addTask = (task) => {
        setTodo([...todo, task]);
    };


    useEffect(() => {
        setShowToggle(true)
    }, []);
    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(todo));
    }, [todo]);
    let deleteTask = (id) => {
        setTodo(todo.filter(task => task.id !== id));
    };

    return <div className={css.appWrapper}>
        <div className={css.appWrapperContent}>
            <div className={showApp ? css.name : css.hideName}>
                <h1>Todo list</h1>
            </div>
            <div className={showApp ? css.list : css.hideList}>
                <ul className={css.items}>
                    {
                        todo.length ? todo.map((task, index) => <ListItem key={index} todo={task}
                                                                       deleteTask={deleteTask}/>) : "No tasks"}
                </ul>
                <TaskCreator showItemCreator={showItemCreator} toggle={toggle} addTask={addTask}
                             todo={todo}/>
                <button className={showApp ? css.button : css.hideButton} onClick={toggle} tabIndex={0}>+</button>
            </div>
        </div>
    </div>
};
export default App;
