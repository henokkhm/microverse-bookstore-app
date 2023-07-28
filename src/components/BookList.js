import { useSelector } from 'react-redux';

import Book from './Book';

function BookList() {
  const { booksList, isLoadingAllBooks } = useSelector((state) => state.books);

  if (isLoadingAllBooks) {
    return (
      <div>Loading books...</div>
    );
  }

  if (!booksList.length) {
    return (
      <div>You have no books yet! Please use the form below to add a book.</div>
    );
  }

  return (
    <div>
      <h2>My List of Books</h2>
      <ul>
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
    </div>
  );
}

export default BookList;
