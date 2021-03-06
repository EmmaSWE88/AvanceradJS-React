import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

export default function ProductDetails() {
    const { id } = useParams()
    const [product, setProduct] = useState('')

    //Version 3 - match i ProductDetails(match) hör hit
    useEffect(() =>{
        // console.log('useParams: ' + id);
        // console.log('match.params.id : ' + match.params.id);
        // console.log(match);
        setProduct(id)  
    }, [id])

    //Version 1
    // useEffect(() => {
    //     setProduct(id)
    // }, [id])

    // //Version 2
    // useEffect( () => {
    //   getProduct()
    // },[])

    // const getProduct = async () => {
    // // const data = (await fetch('http://localhost:9998/api/products/' + id)).json()
    // // setProduct(data) //har inte installerat axios

    // //Om vi inte har ett API:
    // const data = id
    // setProduct(data)

    // }

   

    return (
        <div>
            Product Details { product }
        </div>
    )
}