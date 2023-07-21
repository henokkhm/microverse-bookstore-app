import styles from '../styles/AddBookForm.module.css';

function AddBookForm() {
  return (
    <section>
      <h2>Add New Book</h2>
      <form action="#" className={styles.addBookForm}>
        <label className={styles.inputWrapper} htmlFor="title">
          <span className={styles.label}>Title</span>
          <input
            className={styles.inputs}
            type="text"
            id="title"
            name="title"
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
            placeholder="J.R.R. Tolkien"
            required
          />
        </label>

        <label className={styles.inputWrapper} htmlFor="category">
          <span className={styles.label}>Category</span>
          <input
            className={styles.inputs}
            type="text"
            id="category"
            name="category"
            placeholder="Fantasy"
            required
          />
        </label>

        <label className={styles.inputWrapper} htmlFor="percentCompleted">
          <span className={styles.label}>Percent Completed</span>
          <input
            className={styles.inputs}
            type="number"
            id="percentCompleted"
            name="percentCompleted"
            placeholder="50"
            min="0"
            max="100"
            required
          />
        </label>

        <button className={styles.btn} type="submit">Add</button>
      </form>
    </section>
  );
}

export default AddBookForm;
