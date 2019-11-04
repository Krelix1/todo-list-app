import React, {useState} from "react";
import css from "./TaskCreator.module.css";
import uuid from 'uuid/v1';

let TaskCreator = ({showItemCreator, toggle, ...props}) => {
    let [task, setTask] = useState("");
    let [date, setDate] = useState("");
    let [time, setTime] = useState("");
    let submit = () => {
        if (task || date || time) {
            let todo ={task, date, time,id:uuid()};
            props.addTask(todo);
            setTask('');
            setDate('');
            setTime('');
            toggle();
        }
    };
    return <div className={showItemCreator ? css.itemCreator : css.hideItemCreator}>
        <textarea cols="30" rows="10" className={css.inputText} onChange={(e)=>setTask(e.target.value)}
                  placeholder={"Write some task"} value={task}/>
        <div className={css.inputDate}>
            <label>Choose date: </label>
            <input type="date" onChange={(e)=>setDate(e.target.value)} value={date}/>
        </div>
        <div className={css.inputDate}>
            <label>Choose time: </label>
            <input type="time" onChange={(e)=>setTime(e.target.value)} value={time}/>
        </div>
        <button className={css.taskButton} onClick={submit}>Add task</button>
    </div>
};


export default TaskCreator;