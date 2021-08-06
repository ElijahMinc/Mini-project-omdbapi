
import styles from './MoviesPage.module.css';
import { useSelector } from "react-redux";
import MoviesListPage from "./MoviesListPage";


const MoviesPage = () => {
   const { movies } = useSelector((state) => state.reposReducer);
   return (
      <div className={styles.movies}>
         <ul className={styles.movies__list}>
            {movies.length && movies.map((moviesInfo, index) => {
               const { Poster, Title, Year, Type, imdbID } = moviesInfo
               return (
                  <MoviesListPage
                     key={index}
                     Poster={Poster}
                     Title={Title}
                     Year={Year}
                     Type={Type}
                     imdbID={imdbID}
                     currentMovies={moviesInfo}
                  />
               )
            })}
         </ul>
      </div>
   )
}

export default MoviesPage;