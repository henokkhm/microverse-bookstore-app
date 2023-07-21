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

        <button className={styles.btn} type="submit">Add</button>
      </form>
    </section>
  );
}

export default AddBookForm;
