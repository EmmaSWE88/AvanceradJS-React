import React from 'react'
import { useSelector, useDispatch } from 'react-redux' //nya sättet. hooks
import { increment, decrement } from '../store/actions/quantityActions'

export default () => {
    const quantity = useSelector(state => state.quantity) //mapState(['counter']) i VUE
    //counterReducer är samma som vi har i combineReducer index-filen

    const dispatch = useDispatch() //mapAction() i VUE

    return (
        <div>
            <h3>QUANTITY</h3>  
            <p>Quantity is = { quantity }</p>
            <button onClick={() => dispatch(increment())}>+</button>
            <button onClick={() => dispatch(decrement())}>-</button>
        </div>
    )
}

