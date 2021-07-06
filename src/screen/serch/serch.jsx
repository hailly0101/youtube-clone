import React, { useReducer, useRef } from 'react';
import styles from './serch.module.css';

const Serch = ({onSearch}) => {

    const inputRef = useRef();
    const handleSearch = ()=>{
        const value = inputRef.current.value;
        onSearch(value);
    }
    const onClick =() =>{
        handleSearch();
    }

    const onKeyPress = (event) =>{
        if(event.key === 'Enter'){
            handleSearch();
        }
    }
    return(
        <header className={styles.header}>
            <div className={styles.logos}>
            <img className={styles.logo} src="/img/logo.png" alt="logo"/>
            <h1 className={styles.title}>Youtube</h1>
            </div>
            <input 
            ref = {inputRef}
            className={styles.serch} 
            type="serch" 
            placeholder="Search..."
            onKeyPress={onKeyPress}
            />
            <button className={styles.submitBtn} type="submit" onClick={onClick}>
                <img className={styles.serchIcon} src="/img/search.png" alt="serach"/>
            </button>
        </header>
    )
}

export default Serch;