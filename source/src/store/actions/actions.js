import { DEFAULT_LIMIT } from '../../constants/root';
import { SET_REPOSE, CHANGE_FETCH, CURRENT_MOVIES, IS_OPEN_MODAL, PREV_PAGE, NEXT_PAGE, REMOVE_PAGE } from "./actionTypes";
import { useSelector } from 'react-redux';
import idMovies from "../../constants/idMovies";



export const setRepose = (data) => (({ type: SET_REPOSE, payload: data }));

export const changeStatusFetch = (statusFetch) => {
   return {
      type: CHANGE_FETCH,
      payload: statusFetch
   }
}

export const setCurrentMovies = (currentMovies) => {
   return {
      type: CURRENT_MOVIES,
      payload: currentMovies
   }
}

export const setStatusOpenModal = () => {
   return {
      type: IS_OPEN_MODAL
   }
}

export const setNextPage = () => {
   return {
      type: NEXT_PAGE
   }
}
export const setPrevPage = () => {
   return {
      type: PREV_PAGE
   }
}
export const removePage = (filterMovies) => {
   return {
      type: REMOVE_PAGE,
      payload: filterMovies
   }
}

export const setRemovePage = (movies, id) => dispatch => {
   const newStateMovies = movies.filter(movie => movie.imdbID !== id)
   dispatch(removePage(newStateMovies))
}



export const getSearchRepose = (API_URL, sValue) => {
   return async (dispatch) => {
      dispatch(changeStatusFetch(true))
      try {
         const response = await fetch(
            `${API_URL}&s=${sValue}`
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
};


export const getRepose =
   (API_URL, prevPage = 0, nextPage = 1) =>
      async (dispatch) => {
         dispatch(changeStatusFetch(true))

         const filterIdMovies = idMovies.slice(
            prevPage * DEFAULT_LIMIT,
            nextPage * DEFAULT_LIMIT
         );

         let repose = [];

         for (let id of filterIdMovies) {
            await fetch(`${API_URL}&i=${id}`)
               .then(request => request.json())
               .then(response => repose.push(response))
               .catch(error => console.log(error))
         }

         dispatch(setRepose(repose))
         dispatch(changeStatusFetch(false))
      };

