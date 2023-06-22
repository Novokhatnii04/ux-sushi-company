import { useRef, useState } from 'react'

import styles from './MealItemForm.module.css'
import Input from '../../UI/Input'

const MealItemForm = (props) => {
    const [isAmountValid, setIsAmountValid] = useState(true)
    const amountInputRef = useRef()

    const submitHandler = (event) => {
        event.preventDefault()
        const inputAmount = amountInputRef.current.value
        if (inputAmount.lenght === 0 || +inputAmount < 0 || +inputAmount > 10) {
            setIsAmountValid(false)
            return
        }
        setIsAmountValid(true)
        props.onAddToCart(+inputAmount)
    }

    return <form onSubmit={submitHandler} className={styles.form}>
        <Input label='Количество' ref={amountInputRef} input={{
            id: props.id,
            type: 'number',
            min: '1',
            step: '1',
            defaultValue: '1'
        }} />
        <button type='submit'>Добавить</button>
        {!isAmountValid && <p>Пожалуйста введите количество от 1 до 10</p>}
    </form>
}

export default MealItemForm