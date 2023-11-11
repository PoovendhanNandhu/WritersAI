// AboutUs.jsx
import React from 'react';
import styles from './Aboutus.module.css'; // Assuming you have a corresponding CSS module for styling
import { Link } from 'react-router-dom';

const Aboutus = () => {
  return (
    <div className={styles.aboutUsContainer}>
      <h1>About Us</h1>
      <p>
        Welcome to WritersAi, your source for all things like creating stories, content, and more. We're dedicated to giving you the best of AI, with a focus on uniqueness and generative AI.
      </p>
      <p>
        Founded in 2023 by Poovendhan, WritersAi has come a long way from its beginnings in a closed room. Poovendhan's passion for generative AI text creation sparked the inception of a website powered by GPT-4. WritersAi is dedicated to offering you the ability to create stories and content with a single click. We are constantly exploring new horizons and will be rolling out new features soon. Stay tuned for an enhanced creative writing experience with WritersAi.
      </p>
      <p>
        We hope you enjoy our products as much as we enjoy offering them to you. If you have any questions or comments, please don't hesitate to contact us.
      </p>
      <p>
        Sincerely,
      </p>
      <p>
        Poovendhan
      </p>
      <div>
        <Link to="/" style={{ color: 'black', fontFamily: "'Edu TAS Beginner', cursive", cursor: 'pointer' }}>
          Home
        </Link>
      </div>
    </div>
  );
};

export default Aboutus;
