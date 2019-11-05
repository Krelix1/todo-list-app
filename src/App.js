import React, {useState, useEffect} from 'react';
import css from './App.module.css';
import TaskCreator from "./components/TaskCreator/TaskCreator";
import List from "./components/List/List";

const App = () => {
    const [showApp, setShowToggle] = useState(false);
    const [showItemCreator, setShowItemCreator] = useState(false);
    const [todo, setTodo] = useState(() => {
        const tasks = localStorage.getItem('tasks');
        return tasks ? [...JSON.parse(tasks)] : []
    });

    useEffect(() => {
        setShowToggle(true)
    }, []);
    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(todo));
    }, [todo]);


    const toggle = () => {
        let toggle = !showItemCreator;
        setShowItemCreator(toggle)
    };
    const addTask = (task) => {
        setTodo([...todo, task]);
    };
    const removeTask = (id) => {
        setTodo(todo.filter(task => task.id !== id));
    };


    return <div className={css.appWrapperContent}>
        <header className={showApp ? css.title : css.hideTitle}>
            Todo list
        </header>
        <main className={showApp ? css.list : css.hideList}>
            <List todo={todo} removeTask={removeTask} showApp={showApp} toggle={toggle}/>
            <TaskCreator showItemCreator={showItemCreator} showApp={showApp} toggle={toggle} addTask={addTask}
                         todo={todo}/>
        </main>
    </div>
};
export default App;
