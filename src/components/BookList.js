import { useSelector } from 'react-redux';

import Book from './Book';

function BookList() {
  const { booksList } = useSelector((state) => state.books);

  return (
    <div>
      <h2>My List of Books</h2>
      <ul>
        {booksList.map((book) => (
          <Book
            key={book.id}
            title={book.title}
            author={book.author}
            category={book.category}
            percentCompleted={book.percentRead}
          />
        ))}
      </ul>
    </div>
  );
}

export default BookList;
