import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setRemovePage } from '../../../store/actions/actions'
import { Context } from '../../../context/context';
import NonPoster from '../../MoviesSearchPage/MoviesSearchListPage/img/non_poster.jpg';
import styles from './MoviesListPage.module.css';

const MoviesListPage = ({ imdbID, Title, Year, Type, Poster, currentMovies }) => {
  const dispatch = useDispatch();
  const { movies } = useSelector((state) => state.reposReducer);
  const { handlerClickForBtn } = React.useContext(Context);
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
      <button className={styles.movies__remove}
        onClick={() => dispatch(setRemovePage(movies, imdbID))}
      >
        Remove
      </button>
      {Poster !== 'N/A' ?
        <img src={Poster} className={styles.movies__poster} alt="poster" />
        :
        <img src={NonPoster} className={styles.movies__poster} alt='N/A' />
      }
    </li>
  )
}


export default MoviesListPage;