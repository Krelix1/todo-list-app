import React, {useState} from 'react';
import css from './ListItem.module.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faTrashAlt} from '@fortawesome/free-solid-svg-icons';

const ListItem = ({todo,darkTheme, ...props}) => {
    let [show, setShowToggle] = useState(false);
    let toggle = () => {
        let toggle = !show;
        setShowToggle(toggle)
    };
    let taskPreview = todo.task.slice(0, 10) + "...";
    let remove = (id) => {
        (window.confirm('Are you sure?') && props.removeTask(id))
    };

    let classNames = {
        list: darkTheme ? css.list_dark : css.list_light,
        icon: darkTheme ? css.icon_dark : css.icon_light,
        date: darkTheme ? css.date_dark : css.date_light,
        task: darkTheme ? css.task_dark : css.task_light,
        information: show? darkTheme? css.information_dark : css.information_light : css.hidden,
        time: darkTheme ? css.time_dark : css.time_light
    };
    return <>
        <div className={classNames.list}>
            <div className={classNames.icon} tabIndex={0} onKeyPress={() => remove(todo.id)}
                 onClick={() => remove(todo.id)}>
                <FontAwesomeIcon icon={faTrashAlt}/>
            </div>
            {todo.date && <p className={classNames.date}>{todo.date}</p>}
            <p className={classNames.task} onClick={toggle} onKeyPress={toggle} tabIndex={0}>{taskPreview}</p>
        </div>
        <section className={classNames.information}>
            <p>{todo.task}</p>
            {todo.time && <p className={classNames.time}>{todo.time}</p>}
        </section>
    </>
};

export default ListItem;