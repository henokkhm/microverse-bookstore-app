import { useSelector } from 'react-redux';

import Book from './Book';
import styles from '../styles/BookList.module.css';

function BookList() {
  const { booksList, isLoadingAllBooks } = useSelector((state) => state.books);

  if (isLoadingAllBooks) {
    return <div className={styles.msg}>Loading books...</div>;
  }

  if (!booksList.length) {
    return (
      <div className={styles.msg}>
        You have no books yet! Please use the form below to add a book.
      </div>
    );
  }

  return (
    <ul className={styles.bookList}>
      {booksList.map((book) => (
        <Book
          key={book.id}
          id={book.id}
          title={book.title}
          author={book.author}
          category={book.category}
        />
      ))}
    </ul>
  );
}

export default BookList;
