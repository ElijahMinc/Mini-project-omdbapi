import React from 'react'
import { useDispatch } from 'react-redux';
import { setCurrentMovies, setStatusOpenModal } from '../../../store/actions/actions'
import { Context } from '../../../context/context';
import styles from './MoviesListPage.module.css';

const MoviesListPage = ({ imbdID, Title, Year, Type, Poster, currentMovies }) => {
  const { handlerClickForBtn } = React.useContext(Context)
  return (
    <li className={styles.movies__item}>
      <div className={styles.movies__info}>
        <h2 className={styles.movies__title}>{Title}</h2>
        <p className={styles.movies__year}>{Year}</p>
        <p className={styles.movies__type}>{Type}</p>
        <button className={styles.movies__btn}
          onClick={() => handlerClickForBtn(currentMovies)}
        >
          Show more
        </button>
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


export default MoviesListPage;