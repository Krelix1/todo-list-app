import React,{useState} from 'react';
import css from './ListItem.module.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faTrashAlt} from '@fortawesome/free-solid-svg-icons';

const ListItem = ({todo, ...props}) => {
    let [show,setShowToggle]=useState(false);
    let toggle=()=>{
        let toggle=!show;
        setShowToggle(toggle)
    };
    let taskPreview = todo.task.slice(0,10) + "...";
    return <div >
        <div className={css.list}>
            <div className={css.icon} onClick={()=>(props.deleteTask(todo.id))}><FontAwesomeIcon icon={faTrashAlt}/></div>
            <li className={css.task} onClick={toggle} tabIndex={0}>{taskPreview}</li>
        </div>
        <div className={show ? css.information : css.hidden}>
            <p>{todo.task}</p>
            <p>{todo.date}</p>
            <p>{todo.time}</p>
        </div>
    </div>
};

export default ListItem;