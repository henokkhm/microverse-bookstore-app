import axios from 'axios';

const BASE_URL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi';
const APP_ID = 'KBj9FtvQ085rhxWgZn5k';

export const getAllBooks = async () => {
  const url = `${BASE_URL}/apps/${APP_ID}/books`;

  const response = await axios.get(url);

  // Check if the response was successful
  if (response.status >= 200 && response.status < 300) {
    return response.data;
  }
  // Handle other non-successful status codes
  throw new Error(
    `Get all books request failed with status code ${response.status}`,
  );
};

export const postNewBook = async ({ title, author, id }) => {
  const url = `${BASE_URL}/apps/${APP_ID}/books`;

  const data = { title, author, id };

  const response = await axios.post(url, data);

  // Check if the response was successful
  if (response.status >= 200 && response.status < 300) {
    // Return the response data
    return response.data;
  }
  // Handle other non-successful status codes
  throw new Error(
    `Post new book request failed with status code ${response.status}`,
  );
};

export const deleteBook = async ({ bookId }) => {
  const url = `${BASE_URL}/apps/${APP_ID}/books/${bookId}`;

  const response = await axios.delete(url);

  // Check if the response was successful
  if (response.status >= 200 && response.status < 300) {
    return response.data;
  }
  // Handle other non-successful status codes
  throw new Error(
    `Delete book request failed with status code ${response.status}`,
  );
};
