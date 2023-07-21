import books from '../data/books.json';

function BookList() {
  return (
    <div>
      <pre>{JSON.stringify(books, null, 2)}</pre>
    </div>
  );
}

export default BookList;
