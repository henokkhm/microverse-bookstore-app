import PropTypes from 'prop-types';

import styles from '../styles/Book.module.css';

function Book({
  title, author, category, percentCompleted,
}) {
  return (
    <li>
      <div>
        <span>Title: </span>
        <span>{title}</span>
      </div>
      <div>
        <span>Author: </span>
        <span>{author}</span>
      </div>
      <div>
        <span>Category: </span>
        <span>{category}</span>
      </div>
      <div>
        <span>Percent Read: </span>
        <span>{percentCompleted}</span>
      </div>
      <button className={styles.deleteBtn} type="button">Delete</button>
    </li>
  );
}

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  percentCompleted: PropTypes.number.isRequired,
};

export default Book;
