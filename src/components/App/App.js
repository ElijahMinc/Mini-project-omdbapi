import React from "react";
import { API_URL } from "../../constants/root";
import { useDispatch, useSelector } from "react-redux";
import {
  getSearchRepose,
  getRepose,
  setCurrentMovies,
  setStatusOpenModal
} from "../../store/actions/actions";
import idMovies from "../../constants/idMovies";
import { Context } from "../../context/context";

import SearchForm from "../SearchFormPage";

import MoviesSearchPage from "../MoviesSearchPage";
import MoviesPage from '../MoviesPage';
import PaginationPage from "../PaginationPage";
import Preloader from './../Preloader';
import styles from "./App.module.css";
import ModalPage from "../ModalPage/ModalPage";
import NotFoundPage from './../NotFoundPage';

const App = () => {
  const dispatch = useDispatch();
  const { movies, isFetching, isOpenModal, prevPage, nextPage, searchPagination } = useSelector((state) => state.reposReducer);
  const [inputValue, setInputValue] = React.useState('')
  const trackNullInputValue = inputValue === '';

  const debounce = (fn, ms) => {
    let timeout;
    return (...args) => {
      console.log(...args)
      clearTimeout(timeout)
      timeout = setTimeout(() => fn(...args), ms)
    }
  }

  const handlerInputValue = React.useCallback(
    debounce((event) => {
      setInputValue(event.target.value)
    }, 200),
    []
  )

  React.useEffect(() => {
    dispatch(getSearchRepose(API_URL, inputValue))
  }, [inputValue])

  React.useEffect(() => {
    dispatch(getRepose(API_URL, prevPage, nextPage))
  }, [trackNullInputValue, prevPage, nextPage])

  console.log(trackNullInputValue)

  const handlerClickForBtn = (currentMovies) => {
    dispatch(setCurrentMovies(currentMovies))
    dispatch(setStatusOpenModal())
  }
  console.log(Math.ceil(idMovies.length / 12))
  console.log(
    +movies.totalResults
  )
  console.log(movies, inputValue);
  return (
    <Context.Provider value={{ handlerClickForBtn }}>
      <div className={styles.wrapper}>
        <SearchForm
          onInput={handlerInputValue}
        />
        {
          movies.Search
            ?
            <PaginationPage
              case="search"
              inputValue={inputValue}
            />
            :
            <PaginationPage
              case="default"
            />
        }
        {movies.length && !isFetching
          &&
          <div className={styles.page}><span>{nextPage}</span>/{Math.ceil(idMovies.length / 12)}</div>
        }
        {movies.Search && !isFetching
          &&
          <div className={styles.page}><span>{searchPagination}</span>/{Math.floor(+movies.totalResults / 10)}</div>
        }
        {isFetching && <Preloader />}

        {!movies.Search && !movies.length && !isFetching && < NotFoundPage />}

        {movies.Search && !isFetching && <MoviesSearchPage />}

        {movies.length && !isFetching && <MoviesPage />}

      </div>
      {isOpenModal && <ModalPage />}
    </ Context.Provider >
  );
};

export default App;
