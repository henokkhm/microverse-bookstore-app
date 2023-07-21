import PropTypes from 'prop-types';

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
