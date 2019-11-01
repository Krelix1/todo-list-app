import React,{useState} from 'react';
import css from './ListItem.module.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faTrashAlt} from '@fortawesome/free-solid-svg-icons';

const ListItem = ({task, ...props}) => {
    let [show,setShowToggle]=useState(false);
    let toggle=()=>{
        let toggle=!show;
        setShowToggle(toggle)
    };
    return <div className={css.listItem}>
        <div className={css.list}>
            <div className={css.icon}><FontAwesomeIcon icon={faTrashAlt}/></div>
            <li className={css.task} onClick={toggle} tabIndex={0}>{task}</li>
        </div>
        <div className={show ? css.information : css.hidden}>
            <p>Позавтракать, собрать детей в садик, посетить совещание</p>
        </div>
    </div>
};

export default ListItem;