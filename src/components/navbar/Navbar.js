import Image from 'next/image';
import styles from './Navbar.module.css';

const Navbar = () => {
    return (
        <nav className={styles.navbar}>
            <div className={styles.left}>
                <span>T&nbsp;A&nbsp;N&nbsp;N&nbsp;&nbsp;&nbsp;T&nbsp;R&nbsp;I&nbsp;M</span>
            </div>
            <div className={styles.right}>
            <svg width="18" height="18" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M17.8945 17.1953C17.9648 17.2656 18 17.3711 18 17.4766C18 17.6172 17.9648 17.7227 17.8945 17.793L17.543 18.1094C17.4375 18.2148 17.332 18.25 17.2266 18.25C17.0859 18.25 17.0156 18.2148 16.9453 18.1094L12.4102 13.5742C12.3047 13.5039 12.2695 13.4336 12.2695 13.293V12.9414C11.6016 13.5742 10.8281 14.0312 9.98438 14.3828C9.14062 14.7344 8.22656 14.875 7.3125 14.875C5.97656 14.875 4.74609 14.5586 3.62109 13.8906C2.49609 13.2578 1.61719 12.3789 0.984375 11.2539C0.316406 10.1289 0 8.89844 0 7.5625C0 6.22656 0.316406 5.03125 0.984375 3.90625C1.61719 2.78125 2.49609 1.90234 3.62109 1.23438C4.74609 0.601562 5.97656 0.25 7.3125 0.25C8.64844 0.25 9.84375 0.601562 10.9688 1.23438C12.0938 1.90234 12.9727 2.78125 13.6406 3.90625C14.2734 5.03125 14.625 6.22656 14.625 7.5625C14.625 8.51172 14.4492 9.42578 14.0977 10.2695C13.7461 11.1133 13.2891 11.8867 12.6914 12.5195H13.043C13.1484 12.5195 13.2539 12.5898 13.3594 12.6602L17.8945 17.1953ZM7.3125 13.75C8.4375 13.75 9.45703 13.5039 10.4062 12.9414C11.3555 12.3789 12.0938 11.6406 12.6562 10.6914C13.2188 9.74219 13.5 8.6875 13.5 7.5625C13.5 6.4375 13.2188 5.41797 12.6562 4.46875C12.0938 3.51953 11.3555 2.78125 10.4062 2.21875C9.45703 1.65625 8.4375 1.375 7.3125 1.375C6.1875 1.375 5.13281 1.65625 4.18359 2.21875C3.23438 2.78125 2.49609 3.51953 1.93359 4.46875C1.37109 5.41797 1.125 6.4375 1.125 7.5625C1.125 8.6875 1.37109 9.74219 1.93359 10.6914C2.49609 11.6406 3.23438 12.3789 4.18359 12.9414C5.13281 13.5039 6.1875 13.75 7.3125 13.75Z" fill="#E5DFD9"/>
</svg>

<svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 4.375C11.2969 4.375 10.6289 4.55078 10.0312 4.90234C9.39844 5.25391 8.94141 5.74609 8.58984 6.34375C8.23828 6.97656 8.0625 7.60938 8.0625 8.3125C8.0625 9.01562 8.23828 9.68359 8.58984 10.2812C8.94141 10.9141 9.39844 11.3711 10.0312 11.7227C10.6289 12.0742 11.2969 12.25 12 12.25C12.7031 12.25 13.3359 12.0742 13.9688 11.7227C14.5664 11.3711 15.0586 10.9141 15.4102 10.2812C15.7617 9.68359 15.9375 9.01562 15.9375 8.3125C15.9375 7.60938 15.7617 6.97656 15.4102 6.34375C15.0586 5.74609 14.5664 5.25391 13.9688 4.90234C13.3359 4.55078 12.7031 4.375 12 4.375ZM16.5 15.625C15.7617 15.625 15.1641 15.6602 14.7422 15.7305C14.4609 15.8008 14.1445 15.8711 13.8281 15.9414C13.5117 16.0469 13.2656 16.1172 13.125 16.1172C12.8086 16.1875 12.4219 16.1875 12 16.1875C11.543 16.1875 11.1562 16.1875 10.875 16.1172C10.6992 16.1172 10.4883 16.0469 10.207 15.9414C9.85547 15.8711 9.53906 15.8008 9.25781 15.7305C8.80078 15.6602 8.20312 15.625 7.5 15.625C6.55078 15.625 5.74219 15.9766 5.10938 16.6094C4.44141 17.2773 4.125 18.0859 4.125 19V20.125H19.875V19C19.875 18.0859 19.5234 17.2773 18.8906 16.6094C18.2227 15.9766 17.4141 15.625 16.5 15.625ZM12 3.25C12.9141 3.25 13.7578 3.49609 14.5312 3.95312C15.3047 4.41016 15.9023 5.00781 16.3594 5.78125C16.8164 6.55469 17.0625 7.39844 17.0625 8.3125C17.0625 9.22656 16.8164 10.0703 16.3594 10.8438C15.9023 11.6172 15.3047 12.25 14.5312 12.707C13.7578 13.1641 12.9141 13.375 12 13.375C11.0859 13.375 10.2422 13.1641 9.46875 12.707C8.69531 12.25 8.0625 11.6172 7.60547 10.8438C7.14844 10.0703 6.9375 9.22656 6.9375 8.3125C6.9375 7.39844 7.14844 6.55469 7.60547 5.78125C8.0625 5.00781 8.69531 4.41016 9.46875 3.95312C10.2422 3.49609 11.0859 3.25 12 3.25ZM16.5 14.5C17.3086 14.5 18.0469 14.7109 18.75 15.0977C19.4531 15.5195 19.9805 16.0469 20.4023 16.75C20.7891 17.4531 21 18.1914 21 19V20.125C21 20.4414 20.8594 20.7227 20.6484 20.9336C20.4375 21.1445 20.1562 21.25 19.875 21.25H4.125C3.80859 21.25 3.52734 21.1445 3.31641 20.9336C3.10547 20.7227 3 20.4414 3 20.125V19C3 18.1914 3.17578 17.4531 3.59766 16.75C3.98438 16.0469 4.51172 15.5195 5.21484 15.0977C5.91797 14.7109 6.65625 14.5 7.46484 14.5C8.27344 14.5 8.94141 14.5352 9.43359 14.6055C9.71484 14.6758 10.0312 14.7461 10.3828 14.8164C10.6289 14.9219 10.8398 14.9922 11.0156 14.9922C11.2617 15.0625 11.5781 15.0625 12 15.0625C12.3867 15.0625 12.7031 15.0625 12.9844 14.9922C13.125 14.9922 13.3359 14.9219 13.6172 14.8164C13.9688 14.7461 14.2852 14.6758 14.5664 14.6055C15.0586 14.5352 15.6914 14.5 16.5 14.5Z" fill="#E5DFD9"/>
</svg>

<svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M17.0625 3.25C17.5195 3.25 17.9062 3.42578 18.2578 3.74219C18.5742 4.09375 18.75 4.48047 18.75 4.9375V21.25L12 17.3125L5.25 21.25V4.9375C5.25 4.48047 5.39062 4.09375 5.74219 3.74219C6.05859 3.42578 6.44531 3.25 6.9375 3.25H17.0625ZM17.625 19.2812V4.9375C17.625 4.79688 17.5547 4.65625 17.4492 4.55078C17.3438 4.44531 17.2031 4.375 17.0625 4.375H6.9375C6.76172 4.375 6.62109 4.44531 6.51562 4.55078C6.41016 4.65625 6.375 4.79688 6.375 4.9375V19.2812L12 16.0117L17.625 19.2812Z" fill="#E5DFD9"/>
</svg>

<svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16.5 7.75H19.875V18.4375C19.875 19.2109 19.5938 19.8789 19.0312 20.4414C18.4688 21.0039 17.8359 21.25 17.0625 21.25H6.9375C6.16406 21.25 5.49609 21.0039 4.93359 20.4414C4.37109 19.8789 4.125 19.2109 4.125 18.4375V7.75H7.5C7.5 6.94141 7.67578 6.20312 8.09766 5.5C8.48438 4.79688 9.01172 4.26953 9.71484 3.84766C10.418 3.46094 11.1562 3.25 12 3.25C12.8086 3.25 13.5469 3.46094 14.25 3.84766C14.9531 4.26953 15.4805 4.79688 15.9023 5.5C16.2891 6.20312 16.5 6.94141 16.5 7.75ZM12 4.375C11.0508 4.375 10.2422 4.72656 9.60938 5.35938C8.94141 6.02734 8.625 6.83594 8.625 7.75H15.375C15.375 6.83594 15.0234 6.02734 14.3906 5.35938C13.7227 4.72656 12.9141 4.375 12 4.375ZM18.75 18.4375V8.875H16.5V10.5625C16.5 10.7383 16.4297 10.8789 16.3242 10.9844C16.2188 11.0898 16.0781 11.125 15.9375 11.125C15.7617 11.125 15.6211 11.0898 15.5156 10.9844C15.4102 10.8789 15.375 10.7383 15.375 10.5625V8.875H8.625V10.5625C8.625 10.7383 8.55469 10.8789 8.44922 10.9844C8.34375 11.0898 8.20312 11.125 8.0625 11.125C7.88672 11.125 7.74609 11.0898 7.64062 10.9844C7.53516 10.8789 7.5 10.7383 7.5 10.5625V8.875H5.25V18.4375C5.25 18.9297 5.39062 19.3164 5.74219 19.6328C6.05859 19.9844 6.44531 20.125 6.9375 20.125H17.0625C17.5195 20.125 17.9062 19.9844 18.2578 19.6328C18.5742 19.3164 18.75 18.9297 18.75 18.4375Z" fill="#E5DFD9"/>
</svg>

            </div>
        </nav>
    );
}

export default Navbar;