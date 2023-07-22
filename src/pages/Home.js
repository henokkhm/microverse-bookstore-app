import BookList from '../components/BookList';
import AddBookForm from '../components/AddBookForm';

function Home() {
  return (
    <section>
      <h1>Home</h1>
      <BookList />
      <AddBookForm />
    </section>
  );
}

export default Home;
