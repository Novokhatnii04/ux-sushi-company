import styles from './Cart.module.css'
import Modal from '../UI/Modal'
import { useContext } from 'react'
import CardContext from '../../store/card-context'

const Cart = (props) => {
    const cartContext = useContext(CardContext)
    const totalAmount = `$${cartContext.totalAmount.toFixed(2)}`
    const hasItems = cartContext.items.length > 0

    const drop = () => {
        console.log(cartContext)
    }
    const cartItems = (<ul className={styles['cart-items']}>
        {cartContext.items.map(item => <li>{item.name}</li>)}
    </ul>)

    return <Modal onHideCart={props.onHideCart}>
        {cartItems}
        <div className={styles.total}>
            <span>Итого</span>
            <span>{totalAmount}</span>
        </div>
        <div className={styles.actions}>
            <button onClick={props.onHideCart} className={styles['button-alt']}>Закрыть</button>
            {hasItems && <button onClick={drop} className={styles.button}>Заказать</button>}
        </div>
    </Modal>
}

export default Cart