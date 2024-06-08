import Image from 'next/image';
//import { FaCartPlus } from 'react-icons/fa';
import styles from './Product.module.css';

const Product = ({ src, alt, title, price }) => {
    return (
        <div className={styles.card}>
            <img src={src} alt={alt} width={200} height={200} className={styles.image} />
            <div className={styles.title}>{title}</div>
            <div className={styles.footer}>
                <span className={styles.price}>${price}</span>
                {/* <FaCartPlus className={styles.icon} /> */}
                <svg width="20" height="20" style={{marginRight : '10px'}} viewBox="0 0 31 36" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M24.1815 9.02827H30.7028V29.6788C30.7028 31.1733 30.1593 32.464 29.0725 33.5508C27.9856 34.6377 26.7629 35.1132 25.2684 35.1132H5.70471C4.21026 35.1132 2.9196 34.6377 1.83273 33.5508C0.745855 32.464 0.270349 31.1733 0.270349 29.6788V9.02827H6.79158C6.79158 7.4659 7.13123 6.03938 7.94638 4.68079C8.69361 3.3222 9.71255 2.30325 11.0711 1.4881C12.4297 0.740875 13.8562 0.333298 15.4866 0.333298C17.0489 0.333298 18.4755 0.740875 19.834 1.4881C21.1926 2.30325 22.2116 3.3222 23.0267 4.68079C23.774 6.03938 24.1815 7.4659 24.1815 9.02827ZM15.4866 2.50704C13.6525 2.50704 12.0901 3.18634 10.8674 4.40907C9.57669 5.69973 8.96533 7.26211 8.96533 9.02827H22.0078C22.0078 7.26211 21.3285 5.69973 20.1058 4.40907C18.8151 3.18634 17.2527 2.50704 15.4866 2.50704ZM28.529 29.6788V11.202H24.1815V14.4626C24.1815 14.8023 24.0457 15.074 23.8419 15.2778C23.6381 15.4816 23.3664 15.5495 23.0947 15.5495C22.755 15.5495 22.4833 15.4816 22.2795 15.2778C22.0757 15.074 22.0078 14.8023 22.0078 14.4626V11.202H8.96533V14.4626C8.96533 14.8023 8.82947 15.074 8.62568 15.2778C8.42189 15.4816 8.15017 15.5495 7.87845 15.5495C7.53881 15.5495 7.26709 15.4816 7.0633 15.2778C6.85951 15.074 6.79158 14.8023 6.79158 14.4626V11.202H2.44409V29.6788C2.44409 30.6299 2.71581 31.3771 3.39511 31.9884C4.00647 32.6677 4.7537 32.9395 5.70471 32.9395H25.2684C26.1515 32.9395 26.8987 32.6677 27.578 31.9884C28.1894 31.3771 28.529 30.6299 28.529 29.6788Z" fill="#E5DFD9"/>
</svg>

            </div>
        </div>
    );
}

export default Product;
