import React,{useState,useEffect} from 'react';
import css from './App.module.css';
import ListItem from "./components/ListItem/ListItem";

const App = () => {
    let [showApp,setShowToggle]=useState(false);
    let [showItemCreator,setShowItemCreator]=useState(false);
    let [task,setTask]=useState("");
    let newTask=(e)=>{
        setTask(e.target.value);
    };
    let toggle=()=>{
        let toggle=!showItemCreator;
        setShowItemCreator(toggle)
    };
    useEffect(()=>{setShowToggle(true)},[]);
    return <div className={css.appWrapper}>
        <div className={css.appWrapperContent}>
            <div className={showApp?css.name:css.hideName} >
                <h1 >Todo list</h1>
            </div>
            <div className={showApp?css.list:css.hideList}>
                <ul className={css.items}>
                    <ListItem task={"Позавтракать..."}/>
                    <ListItem task={"Позавтракать..."}/>
                    <ListItem task={"Позавтракать..."}/>
                    <ListItem task={"Позавтракать..."}/>
                </ul>
                <div className={showItemCreator?css.itemCreator:css.hideItemCreator}>
                    <input type="text" placeholder={"Write some task"} onChange={newTask} className={css.inputText} maxLength={5}/>
                    {task}
                </div>
                <button className={showApp?css.button:css.hideButton} onClick={toggle} tabIndex={0} >+</button>
            </div>
        </div>
    </div>
};
export default App;
