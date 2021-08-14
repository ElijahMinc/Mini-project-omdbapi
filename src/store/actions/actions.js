import { DEFAULT_LIMIT } from '../../constants/root';
import {
   SET_REPOSE,
   CHANGE_FETCH,
   CURRENT_MOVIES,
   IS_OPEN_MODAL,
   PREV_PAGE,
   NEXT_PAGE,
   SEARCH_PAGINATION_PREV,
   SEARCH_PAGINATION_NEXT,
   REMOVE_PAGE,
   SET_RESET_MOVIES,
   SET_RESET_SEARCH_MOVIES,
} from "./actionTypes";
import idMovies from "../../constants/idMovies";


export const setResetPageMovies = () =>
   ({ type: SET_RESET_MOVIES })

export const setResetPageSearchMovies = (resetValue) =>
   ({ type: SET_RESET_SEARCH_MOVIES, payload: resetValue })



export const setRepose = (data) =>
   (({ type: SET_REPOSE, payload: data }));

export const changeStatusFetch = (statusFetch) =>
   ({ type: CHANGE_FETCH, payload: statusFetch })

export const setCurrentMovies = (currentMovies) =>
   ({ type: CURRENT_MOVIES, payload: currentMovies })


export const setStatusOpenModal = () =>
   ({ type: IS_OPEN_MODAL })

export const setNextPage = () =>
   ({ type: NEXT_PAGE });

export const setPrevPage = () =>
   ({ type: PREV_PAGE })

export const searchPaginationNext = () =>
   ({ type: SEARCH_PAGINATION_NEXT })

export const searchPaginationPrev = () =>
   ({ type: SEARCH_PAGINATION_PREV })

export const removePage = (filterMovies) =>
   ({ type: REMOVE_PAGE, payload: filterMovies })


export const setRemovePage = (movies, id) => dispatch => {
   const newStateMovies = movies.filter(movie => movie.imdbID !== id)
   dispatch(removePage(newStateMovies))
}


export const getSearchRepose =
   (API_URL, sValue, pagination = 1) =>
      async (dispatch) => {
         dispatch(changeStatusFetch(true))
         try {
            const response = await fetch(
               `${API_URL}&s=${sValue}&page=${pagination}`
            );
            if (response.ok) {
               const request = await response.json();
               dispatch(setRepose(request));
               dispatch(changeStatusFetch(false));
            } else {
               console.log(response.status);
            }
         } catch (error) {
            dispatch(setRepose(error))
         }
      };

export const getRepose =
   (API_URL, prevPage = 0, nextPage = 1) =>
      async (dispatch) => {
         dispatch(setResetPageSearchMovies(1))
         const filterIdMovies = idMovies.slice(
            prevPage * DEFAULT_LIMIT,
            nextPage * DEFAULT_LIMIT
         );

         let repose = [];
         for (let id of filterIdMovies) {
            dispatch(changeStatusFetch(true))

            await fetch(`${API_URL}&i=${id}`)
               .then(request => request.json())
               .then(response => repose.push(response))
               .catch(error => console.log(error))
         }
         dispatch(setRepose(repose))
         dispatch(changeStatusFetch(false))
      };

