import React from 'react'
import Png from '../../assets/sushi.jpg'
import styles from './Header.module.css'
import HeaderCardButton from './HeaderCardButton'

const Header = () => {
    return <React.Fragment>
        <header className={styles.header}>
            <h1>Black Dragon</h1>
            <HeaderCardButton />
        </header>
        <div className={styles['main-image']}>
            <img src={Png} alt="Meals of Japanese Kitchen" />
        </div>
    </React.Fragment>
}

export default Header