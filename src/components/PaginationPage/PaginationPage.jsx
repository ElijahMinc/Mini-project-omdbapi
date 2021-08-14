import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { DEFAULT_LIMIT } from '../../constants/root';
import {
   setNextPage,
   setPrevPage,
   searchPaginationPrev,
   searchPaginationNext,
   setResetPageMovies,
   setResetPageSearchMovies
} from '../../store/actions/actions';
import idMovies from '../../constants/idMovies';
import styles from './PaginationPage.module.css';
import { getSearchRepose } from '../../store/actions/actions';
import { API_URL } from '../../constants/root';



const PaginationPage = (props) => {

   const dispatch = useDispatch();

   const { movies, prevPage, nextPage, searchPagination } = useSelector((state) => state.reposReducer)

   React.useEffect(() => {
      dispatch(getSearchRepose(API_URL, props.inputValue, searchPagination))
   }, [searchPagination])

   return (
      <div className={styles.pagination}>
         <div className={styles.pagination__wrapper}>
            <button
               disabled={props.case === 'default' && prevPage === 0 && 'disabled'
                  ||
                  props.case === 'search' && searchPagination === 1 && 'disabled'
               }
               onClick={() => {
                  if (props.case === 'default') {
                     dispatch(setPrevPage())
                  } else if (props.case === 'search') {
                     dispatch(searchPaginationPrev())
                  }
               }}
               className={styles.pagination__btn}
            >
               Prev
            </button>
            <button
               disabled={
                  props.case === 'default'
                  && nextPage === Math.ceil(idMovies.length / DEFAULT_LIMIT)
                  &&
                  'disabled'
                  ||
                  props.case === 'search'
                  &&
                  searchPagination === Math.floor(Number(movies?.totalResults) / Number(movies?.Search?.length))
                  &&
                  'disabled'
               }
               onClick={() => {
                  if (props.case === 'default') {
                     dispatch(setNextPage())
                  } else if (props.case === 'search') {
                     dispatch(searchPaginationNext())
                  }
               }}
               className={styles.pagination__btn}
            >
               Next
            </button>
         </div>
      </div >
   )
}


export default PaginationPage;