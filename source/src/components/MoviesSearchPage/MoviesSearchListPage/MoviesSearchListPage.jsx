import styles from './MoviesSearchListPage.module.css';

const MoviesSearchListPage = ({ imbdID, Title, Year, Type, Poster }) => {
   return (
      <li className={styles.movies__item}>
         <div className={styles.movies__info}>
            <h2 className={styles.movies__title}>{Title}</h2>
            <p className={styles.movies__year}>{Year}</p>
            <p className={styles.movies__type}>{Type}</p>
         </div>
         {Poster !== 'N/A' ?
            // <div className={styles.movies__poster}>
            <img src={Poster} className={styles.movies__poster} alt="poster" />
            // </div>
            : <div>
               Not Poster
            </div>
         }
      </li>
   )
}


export default MoviesSearchListPage;