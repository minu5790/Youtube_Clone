import React from 'react';
import styles from './search_header.module.css'

const SearchHeader= (props) => {
    const formRef = React.createRef();
    const inputRef = React.createRef();

    const onSubmit =(e)=>{
        e.preventDefault();
        const search = inputRef.current.value;
        console.log(search)
        formRef.current.reset();
    }
    return(
        <>
        <header className={styles.header}>
          <div className={styles.logo}>
            <img className={styles.img} src="/images/logo.png" alt="logo"/>
            <h1 className={styles.title}>TUBE</h1>

          </div>
          <input ref={inputRef} className={styles.input}type="text" placeholder="Search.."></input>
            <button className={styles.btn} type="submit">
              <img className={styles.btnImg} src="/images/search.png" alt="search"/>
            </button>
        </header>

            
          
        </>
    )
}

export default SearchHeader;