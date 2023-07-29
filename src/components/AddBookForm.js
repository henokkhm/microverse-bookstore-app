import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { postBookToAPI } from '../redux/books/booksSlice';

import styles from '../styles/AddBookForm.module.css';

function AddBookForm() {
  const dispatch = useDispatch();

  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(postBookToAPI({ title, author }));
    setTitle('');
    setAuthor('');
  };

  return (
    <section className={styles.formWrapper}>
      <h2 className={styles.formHeader}>Add New Book</h2>
      <form action="#" onSubmit={handleSubmit} className={styles.addBookForm}>
        <input
          className={styles.inputs}
          type="text"
          id="title"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
          required
        />

        <input
          className={styles.inputs}
          type="text"
          id="author"
          name="author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          placeholder="Author"
          required
        />

        <button className={styles.btn} type="submit">
          Add
        </button>
      </form>
    </section>
  );
}

export default AddBookForm;
