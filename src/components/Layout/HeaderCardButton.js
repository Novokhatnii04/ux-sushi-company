import styles from './HeaderCartButton.module.css'
import CartIcon from '../Cart/CartIcon'

const HeaderCardButton = () => {
    return <button className={styles.button}>
        <span className={styles.icon}>
            <CartIcon />
        </span>
        <span>Корзина</span>
        <span className={styles.badge}>2</span>
    </button>
}

export default HeaderCardButton