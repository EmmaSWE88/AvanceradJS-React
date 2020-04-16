import React,{ useRef } from 'react'
import { v4 as uuidv4 } from 'uuid'

export default function AddProductForm({ addProductCallback }) {
   const productName = useRef()
   const productDesc = useRef()

    function onSubmit(e){
        e.preventDefault()
        if(productName.current.value === '')
        return

        addProductCallback({
            id: uuidv4(), 
            name: productName.current.value,
            desc: productDesc.current.value
        
        })
        productName.current.value = null
        productDesc.current.value = null
        
    }

    return (
        <form onSubmit={onSubmit}>
           <input type="text" ref={productName} />
           <input type="text" ref={productDesc} />
           <button>Lägg till</button>
        </form>
    )
}
