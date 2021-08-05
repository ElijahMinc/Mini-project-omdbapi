import { useSelector, useDispatch } from 'react-redux';
import { DEFAULT_LIMIT } from '../../constants/root';
import { setNextPage, setPrevPage } from '../../store/actions/actions';
import idMovies from '../../constants/idMovies';
import styles from './PaginationPage.module.css';

const PaginationPage = () => {
   const dispatch = useDispatch();
   const { prevPage, nextPage } = useSelector((state) => state.reposReducer)
   // пагинация - длина массива, деленная на 12. 
   console.log(Math.floor(idMovies.length / 12))
   console.log(nextPage === Math.floor(idMovies.length / 12))
   // const filterMovies = idMovies.slice(prevPage * DEFAULT_LIMIT, nextPage * DEFAULT_LIMIT)
   // console.log(filterMovies)
   return (
      <div className={styles.pagination}>
         <div className={styles.pagination__wrapper}>
            <button
               disabled={prevPage === 1 && 'disabled'}
               onClick={() => dispatch(setPrevPage())}
               className={styles.pagination__btn}
            >
               Prev
            </button>
            <button
               disabled={nextPage === Math.ceil(idMovies.length / DEFAULT_LIMIT) && 'disabled'}
               onClick={() => dispatch(setNextPage())}
               className={styles.pagination__btn}
            >
               Next
            </button>
         </div>
      </div >
   )
}


export default PaginationPage;