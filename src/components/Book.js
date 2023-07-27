import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/booksSlice';

import styles from '../styles/Book.module.css';

function Book({
  id, title, author, category,
}) {
  const dispatch = useDispatch();

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
        <span>{50}</span>
      </div>
      <button
        className={styles.deleteBtn}
        type="button"
        onClick={() => dispatch(removeBook({ id }))}
      >
        Delete
      </button>
    </li>
  );
}

Book.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};

export default Book;
