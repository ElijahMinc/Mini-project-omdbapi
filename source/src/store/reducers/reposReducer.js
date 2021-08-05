import { SET_REPOSE, CHANGE_FETCH, CURRENT_MOVIES, IS_OPEN_MODAL, PREV_PAGE, NEXT_PAGE } from "../actions/actionTypes";

const initialState = {
   movies: [],
   currentMovies: [],
   isFetching: true,
   isOpenModal: false,
   prevPage: 1,
   nextPage: 2
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
      default:
         return state;
   }
};

export default reposReducer;
