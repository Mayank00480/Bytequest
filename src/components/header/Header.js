import Buttons from '../Buttons/Buttons';
import SubComponent from '../Subcomponent/Subcomponent';
import Navbar from '../navbar/Navbar';
import styles from './Header.module.css';

const Header = () => {
    const componentsData = [
        { src: '/one.png', alt: 'Image 1'},
        { src: '/two.png', alt: 'Image 2'},
        { src: '/three.png', alt: 'Image 3' },
        { src: '/four.png', alt: 'Image 4' },
        { src: '/five.png', alt: 'Image 5'},
        { src: '/six.png', alt: 'Image 6'},
        { src: '/seven.png', alt: 'Image 7' },
        { src: '/eight.png', alt: 'Image 8'}
    ];

    return (
        <>
        <Navbar/>
        <Buttons/>
        <div className={styles.container}>
            {componentsData.map((data, index) => (
                <SubComponent key={index} src={data.src} alt={data.alt}  />
            ))}
        </div>
        </>
    );
}

export default Header;
