import React from 'react'
import { useSelector, useDispatch } from 'react-redux' //nya sättet. hooks
import { increment, decrement } from '../store/actions'

export default () => {
    const counter = useSelector(state => state.counter) //mapState(['counter']) i VUE
    //counterReducer är samma som vi har i combineReducer index-filen

    const dispatch = useDispatch() //mapAction() i VUE

    return (
        <div>
            <h3>COUNTER</h3>  
            <p>Counter is = { counter }</p>
            <button onClick={() => dispatch(increment())}>+</button>
            <button onClick={() => dispatch(decrement())}>-</button>
        </div>
    )
}

