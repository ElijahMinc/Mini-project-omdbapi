import { useDispatch, useSelector } from "react-redux";
import MoviesSearchListPage from "./MoviesSearchListPage";
import styles from './MoviesSearchPage.module.css';


const MoviesSearchPage = () => {
   const { movies } = useSelector((state) => state.reposReducer);
   return (
      <div className={styles.movies}>
         <ul className={styles.movies__list}>
            {movies.Search && movies.Search.map(({ Poster, Title, Year, Type, imbdID }, index) => {
               return (
                  <MoviesSearchListPage
                     key={index}
                     Poster={Poster}
                     Title={Title}
                     Year={Year}
                     Type={Type}
                     imbdID={imbdID}
                  />
               )
            })}
         </ul>
      </div>
   )
}

export default MoviesSearchPage;