"use client"

import { useEffect,useState } from "react"
import Product from "../Product/Product"
import axios from "axios";
import styles from './Products.module.css';
const Products = () => {
 
    const [productData , setProductData] = useState([]);
    useEffect(() => {
        axios.get('https://fakestoreapi.com/products')
        .then(resp => {
            const {data = []} = resp;
            console.log(data , 'result' , resp)
            setProductData(data);
            
        })
        .catch(err => {
            console.log(err , 'error');
        })
    } ,[])

    return (
        <ul className={styles.productList}>
        {productData && productData.map((item, index) => (
            <li key={index} className={styles.productItem}>
                <Product
                    src={item?.image}
                    title={item?.category}
                    alt={item?.description}
                    price={item?.price}
                />
            </li>
        ))}
    </ul>
  )
}

export default Products
