import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'

import style from './Product.module.css'

export const Product = ({ products }) => {
    const { id } = useParams()

    const product = products.find((prod) => prod.id === parseInt(id))

    const navigate = useNavigate()

    const goBack = () => {
        navigate(-1)
    }

    return (
        <div className={style.product}>
            <div className={style.productContainer}>
                <h1>Product Details</h1>
                {!product && <p>Product not found</p>}
                {product && <p className={style.productId}>Product ID: {product.id}</p>}
                {!product && <button onClick={goBack} className={style.backBtn}>Go Back</button>}
                {product && (
                    <div className={style.productDetails}>
                        <img src={product.image} alt={product.title} />
                        <h2>{product.title}</h2>
                        <p>{product.description}</p>
                        <span className={style.productPrice}>{`Price: ${product.price.toFixed(2)}$`}</span>
                    </div>
                )}
                {product && <button onClick={goBack} className={style.backBtn}>Go Back</button>}
            </div>
        </div>
    )
}