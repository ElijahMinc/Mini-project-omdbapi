import { useDispatch, useSelector } from 'react-redux';
import { setStatusOpenModal } from '../../store/actions/actions'
import styles from './ModalPage.module.css';


const ModalPage = () => {
   const dispatch = useDispatch();
   const { currentMovies } = useSelector((state) => state.reposReducer)
   console.log(currentMovies)
   const {
      Title,
      Year,
      Actors,
      Awards,
      BoxOffice,
      Country,
      DVD,
      Director,
      Genre,
      Language,
      Plot,
      Released,
      Runtime,
      imdbRating,
      Writer,
      Poster,
      Ratings
   } = currentMovies
   return (
      <div className={styles.modal}>
         <div className={styles.modal__wrapper}>
            <div className={styles.modal__item}>
               <div className={styles.modal__img}>
                  <img src={Poster} alt="poster" />
               </div>
            </div>
            <div className={styles.modal__item}>
               <h3>{Title}</h3>
               <p><span>Actors: </span>{Actors}</p>
               <p><span>Plot: </span> {Plot}</p>
               <p><span>Language: </span> {Language}</p>
               <p><span>Year: </span> {Year}</p>
               <p><span>Country: </span> {Country}</p>
               <p><span>Writen by: </span>{Writer}</p>
               <p><span>Directed by: </span>{Director}</p>
               <p><span>BoxOffice: </span>{BoxOffice}</p>
               <p><span>Released: </span>{Released}</p>
               <p><span>Genre: </span>{Genre}</p>
               <p><span>Runtime: </span>{Runtime}</p>
               <p><span>DVD: </span>{DVD}</p>
               <div className={styles.ratings}>
                  <h4>Ratings: </h4>
                  <ul className={styles.ratings__list}>
                     {Ratings && Ratings.map(({ Source, Value }, index) => {
                        return (
                           <li key={index}>
                              <span>{Source}: </span>
                              {Value}
                           </li>
                        )
                     })}
                  </ul>
               </div>
            </div>
         </div>
         <div
            onClick={() => dispatch(setStatusOpenModal())}
            className={styles.modal__closeBtn}>
            &#10006;
         </div>
      </div>
   )
}

// Ratings: Array(3)
// 0: {Source: "Internet Movie Database", Value: "9.2/10"}
// 1: {Source: "Rotten Tomatoes", Value: "97%"}


// Actors: "Tim Robbins, Morgan Freeman, Bob Gunton"
// Awards: "Nominated for 7 Oscars. 21 wins & 43 nominations total"
// BoxOffice: "$28,699,976"
// Country: "United States"
// DVD: "15 Aug 2008"
// Director: "Frank Darabont"
// Genre: "Drama"
// Language: "English"
// Metascore: "80"
// Plot: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency."
// Poster: "https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg"
// Production: "Columbia Pictures, Castle Rock Entertainment"
// Rated: "R"
// Ratings: (3) [{…}, {…}, {…}]
// Released: "14 Oct 1994"
// Response: "True"
// Runtime: "142 min"
// Title: "The Shawshank Redemption"
// Type: "movie"
// Website: "N/A"
// Writer: "Stephen King, Frank Darabont"
// Year: "1994"
// imdbID: "tt0111161"
// imdbRating: "9.3"
// imdbVotes: "2,414,547"




export default ModalPage;