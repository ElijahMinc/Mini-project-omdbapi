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
   SET_RESET_SEARCH_MOVIES
} from "../actions/actionTypes";

const initialState = {
   movies: [],
   currentMovies: [],
   isFetching: true,
   isOpenModal: false,
   prevPage: 0,
   nextPage: 1,
   searchPagination: 1,
};

const reposReducer = (state = initialState, action) => {
   switch (action.type) {
      case SET_REPOSE:
         return {
            ...state,
            movies: action.payload,
            isFetching: false
         };
      case CHANGE_FETCH:
         return {
            ...state,
            isFetching: action.payload
         };
      case CURRENT_MOVIES:
         return {
            ...state,
            currentMovies: action.payload
         };
      case IS_OPEN_MODAL:
         return {
            ...state,
            isOpenModal: !state.isOpenModal
         };
      case PREV_PAGE:
         return {
            ...state,
            prevPage: state.prevPage - 1,
            nextPage: state.nextPage - 1
         };
      case NEXT_PAGE:
         return {
            ...state,
            prevPage: state.prevPage + 1,
            nextPage: state.nextPage + 1
         };
      case SEARCH_PAGINATION_PREV:
         return {
            ...state,
            searchPagination: state.searchPagination - 1
         };
      case SEARCH_PAGINATION_NEXT:
         return {
            ...state,
            searchPagination: state.searchPagination + 1
         };
      case REMOVE_PAGE:
         return {
            ...state,
            movies: action.payload
         };
      case SET_RESET_MOVIES:
         return {
            ...state,
            prevPage: 0,
            nextPage: 1
         };
      case SET_RESET_SEARCH_MOVIES:
         return {
            ...state,
            searchPagination: action.payload
         };
      default:
         return state;
   }
};

export default reposReducer;
