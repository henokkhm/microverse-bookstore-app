import Book from './Book';
import books from '../data/books.json';

function BookList() {
  return (
    <div>
      <h2>My List of Books</h2>
      <ul>
        {books.map((book) => (
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
