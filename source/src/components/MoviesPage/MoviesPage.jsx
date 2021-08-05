
import styles from './MoviesPage.module.css';
import { useDispatch, useSelector } from "react-redux";
import MoviesListPage from "./MoviesListPage";


const MoviesPage = () => {
   const { movies } = useSelector((state) => state.reposReducer);
   console.log(movies)
   return (
      <div className={styles.movies}>
         <ul className={styles.movies__list}>
            {movies.length && movies.map((moviesInfo, index) => {
               const { Poster, Title, Year, Type, imbdID } = moviesInfo
               return (
                  <MoviesListPage
                     key={index}
                     Poster={Poster}
                     Title={Title}
                     Year={Year}
                     Type={Type}
                     imbdID={imbdID}
                     currentMovies={moviesInfo}
                  />
               )
            })}
         </ul>
      </div>
   )
}

export default MoviesPage;