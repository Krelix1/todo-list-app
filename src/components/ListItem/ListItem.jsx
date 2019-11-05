import React, {useState} from 'react';
import css from './ListItem.module.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faTrashAlt} from '@fortawesome/free-solid-svg-icons';

const ListItem = ({todo, ...props}) => {
    let [show, setShowToggle] = useState(false);
    let toggle = () => {
        let toggle = !show;
        setShowToggle(toggle)
    };
    let taskPreview = todo.task.slice(0, 10) + "...";
    return <>
        <div className={css.list}>
            <div className={css.icon} onClick={() => (window.confirm('Are you sure?') && props.removeTask(todo.id))}>
                <FontAwesomeIcon icon={faTrashAlt}/>
            </div>
            {todo.date && <p className={css.date}>{todo.date}</p>}
            <p className={css.task} onClick={toggle} tabIndex={0}>{taskPreview}</p>
        </div>
        <section className={show ? css.information : css.hidden}>
            <p>{todo.task}</p>
            {todo.time && <p className={css.time}>{todo.time}</p>}
        </section>
    </>
};

export default ListItem;