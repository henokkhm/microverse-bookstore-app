import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteBookFromAPI } from '../redux/books/booksSlice';

import styles from '../styles/Book.module.css';
import progressImg from '../assets/progress.png';

function Book({
  id, title, author, category,
}) {
  const dispatch = useDispatch();

  const percentCompleted = Math.floor(100 * Math.random());
  const currentChapter = Math.floor(20 * Math.random());

  return (
    <li className={styles.bookCard}>
      <div className={styles.summary}>
        <div>
          <p className={styles.category}>{category}</p>
          <p className={styles.title}>{title}</p>
          <p className={styles.author}>{author}</p>
        </div>
        <div className={styles.actions}>
          <button className={styles.actionBtn} type="button">
            Comments
          </button>
          <button
            className={styles.actionBtn}
            type="button"
            onClick={() => dispatch(deleteBookFromAPI({ id }))}
          >
            Remove
          </button>
          <button className={styles.actionBtn} type="button">
            Edit
          </button>
        </div>
      </div>
      <div className={styles.progress}>
        <img
          className={styles.progressPieChart}
          src={progressImg}
          alt={`pie chart showing ${percentCompleted}% completion`}
        />
        <div className={styles.progressStats}>
          <p className={styles.progressPercentage}>
            {percentCompleted.toFixed(0)}
            %
          </p>
          <p className={styles.progressPercentageLabel}>completed</p>
        </div>
      </div>
      <div className={styles.currentChapter}>
        <p className={styles.currentChapterLabel}>current chapter</p>
        <p className={styles.currentChapterValue}>
          Chapter
          {' '}
          {currentChapter.toFixed(0)}
        </p>
        <button type="button" className={styles.updateProgressBtn}>
          update progress
        </button>
      </div>
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
