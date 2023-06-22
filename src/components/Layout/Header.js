import React from 'react'
import Png from '../../assets/sushi.jpg'
import styles from './Header.module.css'
import HeaderCardButton from './HeaderCardButton'



const Header = (props) => {

    return <React.Fragment>
        <header className={styles.header}>
            <h1>Black Dragon</h1>
            <HeaderCardButton onClick={props.onCard} />
        </header>
        <div className={styles['main-image']}>
            <img src={Png} alt="Meals of Japanese Kitchen" />
        </div>
    </React.Fragment>
}

export default Header