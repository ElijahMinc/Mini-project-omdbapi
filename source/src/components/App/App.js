import React from "react";
import { API_URL } from "../../constants/root";
import { useDispatch, useSelector } from "react-redux";
import {
  getSearchRepose,
  getRepose,
  changeStatusFetch,
  setCurrentMovies,
  setStatusOpenModal
} from "../../store/actions/actions";

import { Context } from "../../context/context";

import SearchForm from "../SearchFormPage";

import MoviesSearchPage from "../MoviesSearchPage";
import MoviesPage from '../MoviesPage';
import PaginationPage from "../PaginationPage";
import Preloader from './../Preloader';
import styles from "./App.module.css";
import ModalPage from "../ModalPage/ModalPage";


const App = () => {
  const dispatch = useDispatch();
  const { movies, isFetching, isOpenModal, prevPage, nextPage } = useSelector((state) => state.reposReducer);
  const [inputValue, setInputValue] = React.useState("")
  const trackNullInputValue = inputValue === '';



  const handlerInputValue = (event) => {
    setInputValue(event.target.value)
  }

  React.useEffect(() => {
    dispatch(getSearchRepose(API_URL, inputValue))
  }, [inputValue])


  React.useEffect(() => {
    dispatch(getRepose(API_URL, prevPage, nextPage))
  }, [trackNullInputValue, prevPage, nextPage])


  const handlerClickForBtn = (currentMovies) => {
    dispatch(setCurrentMovies(currentMovies))
    dispatch(setStatusOpenModal())
  }

  console.log(movies, inputValue);
  return (
    <Context.Provider value={{ handlerClickForBtn }}>
      <div className={styles.wrapper}>
        <SearchForm
          onInput={handlerInputValue}
        />
        <PaginationPage />
        {isFetching ? <Preloader /> : null}
        {movies.Search && !isFetching && <MoviesSearchPage />}
        {movies.length && !isFetching && <MoviesPage />}
      </div>
      {isOpenModal && <ModalPage />}
    </ Context.Provider >
  );
};

export default App;
