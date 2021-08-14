import React from 'react';
import NotFoundIMG from './img/NotFound.png'
import styles from './NotFoundPage.module.css';

const NotFoundPage = () => {
   return (
      <div className={styles.notFound}>
         <img src={NotFoundIMG} alt="Not Found" />
      </div>
   )
}

export default NotFoundPage;