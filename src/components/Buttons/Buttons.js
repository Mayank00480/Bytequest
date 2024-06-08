import styles from './Buttons.module.css';

const Buttons = () => {
    return (
        <div className={styles.container}>
            <button className={styles.button}>Bags</button>
            <button className={styles.button}>Travel</button>
            <button className={styles.button}>Accessories</button>
            <button className={styles.button}>Gifting</button>
            <button className={styles.button}>Jewellery</button>
        </div>
    );
}

export default Buttons;
