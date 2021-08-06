
import styles from './SearchFormPage.module.css';
const SearchFormPage = ({ onInput }) => {
   return (
      <div className={styles.formSearch}>
         <h2 className={styles.formSearch__title}>Search For Any Movie</h2>
         <form className={styles.formSearch__form}>
            <input
               onInput={event => onInput(event)}
               className={styles.formSearch__input} type="text" />
         </form>
      </div>
   )
}

export default SearchFormPage;