import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import styles from './AnimatedButton.module.css';
import { Link } from 'react-router-dom';

const AnimatedButton = () => {
  return (
    <div className={styles['link-container']}> 
      <Link to='/generate' className={styles['link-animation']}>
        <FontAwesomeIcon icon={faArrowRight} className={styles['fa-arrow-right']} />
        Create
      </Link>
    </div>
  );
};

export default AnimatedButton;
