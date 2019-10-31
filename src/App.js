import React from 'react';
import css from './App.module.css';

let App = () => {
    return <div className={css.appWrapper}>
        <div className={css.appWrapperContent}>
            <div className={css.name}>
                <h1 >Todo list</h1>
            </div>
            <div className={css.list}>
                <ul className={css.items}>
                    <li>List 1</li>
                    <li>List 1</li>
                    <li>List 1</li>
                    <li>List 1</li>
                    <li>List 1</li>
                    <li>List 1</li>
                </ul>
                <button className={css.button}>+</button>
            </div>
        </div>
    </div>
};
export default App;
