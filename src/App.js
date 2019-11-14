import React, {useState, useEffect} from 'react';
import css from './App.module.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faMoon,faSun,faPlus} from '@fortawesome/free-solid-svg-icons';
import TaskCreator from "./components/TaskCreator/TaskCreator";
import List from "./components/List/List";

const App = () => {
    const [showApp, setShowToggle] = useState(false);
    const [showItemCreator, setShowItemCreator] = useState(false);
    const [darkTheme,setTheme] = useState(() => {
        const theme = localStorage.getItem('theme');
        return theme ? JSON.parse(theme) : false
    });
    const [todo, setTodo] = useState(() => {
        const tasks = localStorage.getItem('tasks');
        return tasks ? [...JSON.parse(tasks)] : []
    });

    useEffect(() => {
        setShowToggle(true)
    }, [showApp]);
    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(todo));
        localStorage.setItem('theme',JSON.stringify(darkTheme))
    }, [todo, darkTheme]);


    const toggleShowItemCreator = () => {
        setShowItemCreator(!showItemCreator);
    };
    const toggleTheme = () => {
        setTheme(!darkTheme);
    };
    const addTask = (task) => {
        setTodo([...todo, task]);
    };
    const removeTask = (id) => {
        setTodo(todo.filter(task => task.id !== id));
    };

    let classNames={
        appWrapper: darkTheme? css.appWrapper_dark: css.appWrapper_light,
        button: showApp ? darkTheme? css.button_dark : css.button_light : css.hideButton,
        list: showApp ?  darkTheme? css.list_dark : css.list_light : css.hideList,
        title: showApp ?  darkTheme? css.title_dark : css.title_light : css.hideTitle,
        nav : showApp ? darkTheme? css.nav_dark : css.nav_light : css.hideList
    };

    return <div className={classNames.appWrapper}>
        <div className={css.appWrapperContent}>
            <header className={classNames.title}>
                Todo list
            </header>
            <main className={classNames.list}>
                <List todo={todo} removeTask={removeTask} darkTheme={darkTheme} showApp={showApp}/>
                <TaskCreator showItemCreator={showItemCreator} darkTheme={darkTheme} showApp={showApp}
                             toggle={toggleShowItemCreator} addTask={addTask}
                             todo={todo}/>
            </main>
            <nav className={classNames.nav}>
                <button className={classNames.button} onClick={toggleTheme}>{darkTheme ?
                    <FontAwesomeIcon icon={faSun}/> : <FontAwesomeIcon icon={faMoon}/>}</button>
                <button className={classNames.button} onClick={toggleShowItemCreator} tabIndex={0}><FontAwesomeIcon
                    icon={faPlus}/></button>
            </nav>
        </div>
    </div>
};
export default App;
