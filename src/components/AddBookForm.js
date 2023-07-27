import { useState } from 'react';
import styles from '../styles/AddBookForm.module.css';

function AddBookForm() {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('form submitted');
  };

  return (
    <section>
      <h2>Add New Book</h2>
      <form action="#" onSubmit={handleSubmit} className={styles.addBookForm}>
        <label className={styles.inputWrapper} htmlFor="title">
          <span className={styles.label}>Title</span>
          <input
            className={styles.inputs}
            type="text"
            id="title"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="The Hobbit"
            required
          />
        </label>

        <label className={styles.inputWrapper} htmlFor="author">
          <span className={styles.label}>Author</span>
          <input
            className={styles.inputs}
            type="text"
            id="author"
            name="author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            placeholder="J.R.R. Tolkien"
            required
          />
        </label>

        <button className={styles.btn} type="submit">
          Add
        </button>
      </form>
    </section>
  );
}

export default AddBookForm;
