import React, {  memo, useRef } from 'react';
import styles from './search_header.module.css'

const SearchHeader= memo(
  ({onSearch}) => {

  const inputRef = useRef();


  const handleSearch =()=>{
    const value = inputRef.current.value;
    onSearch(value);
  }
  const onClick =(e)=>{
      e.preventDefault();
      handleSearch();
  }
  const onKeyPress =(e)=>{
      if(e.key ==='Enter'){
        handleSearch();
      }
  }

  return(
      <>
      <header className={styles.header}>
        <div className={styles.logo}>
          <img className={styles.img} src="/images/logo.png" alt="logo"/>
          <h1 className={styles.title}>TUBE</h1>

        </div>
        <input ref={inputRef} className={styles.input}type="text" placeholder="Search.." onKeyPress={onKeyPress}></input>
          <button className={styles.btn} type="submit" onClick={onClick}>
            <img className={styles.btnImg} src="/images/search.png" alt="search"/>
          </button>
      </header>
      </>
  )
})

export default SearchHeader;