import styles from './HeaderCartButton.module.css'
import CartIcon from '../Cart/CartIcon'
import { useContext } from 'react'
import CardContext from '../../store/card-context'


const HeaderCardButton = (props) => {
    const cartContext = useContext(CardContext)

    const itemAmount = cartContext.items.reduce((acc, item) => {
        return acc + item.amount
    }, 0)

    return <button onClick={props.onClick} className={styles.button}>
        <span className={styles.icon}>
            <CartIcon />
        </span>
        <span>Корзина</span>
        <span className={styles.badge}>{itemAmount}</span>
    </button>
}

export default HeaderCardButton