function AddBookForm() {
  return (
    <section>
      <h1>Add New Book</h1>
      <form action="#">
        <label htmlFor="title">
          <span>Title</span>
          <input
            type="text"
            id="title"
            name="title"
            placeholder="The Hobbit"
            required
          />
        </label>

        <label htmlFor="author">
          <span>Author</span>
          <input
            type="text"
            id="author"
            name="author"
            placeholder="J.R.R. Tolkien"
            required
          />
        </label>

        <label htmlFor="category">
          <span>Category</span>
          <input
            type="text"
            id="category"
            name="category"
            placeholder="Fantasy"
            required
          />
        </label>

        <label htmlFor="percentCompleted">
          <span>Percent Completed</span>
          <input
            type="number"
            id="percentCompleted"
            name="percentCompleted"
            placeholder="50"
            min="0"
            max="100"
            required
          />
        </label>

        <button type="submit">Add</button>
      </form>
    </section>
  );
}

export default AddBookForm;
