import Image from 'next/image';
import styles from './SubComponent.module.css';

const SubComponent = ({ src, alt }) => {
    return (
        <div className={styles.container}>
            <Image src={src} alt={alt} width={100} height={100} className={styles.image} />
            
        </div>
    );
}

export default SubComponent;
