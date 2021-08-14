import styles from './Preloader.module.css';
import preloader from './img/preload.svg';


const Preloader = () => {
   return (
      <div className={styles.preloader}>
         <img src={preloader} alt="preloader" />
      </div>
   )
}


export default Preloader;