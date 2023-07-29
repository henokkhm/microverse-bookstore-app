import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { getAllBooksFromAPI } from './redux/books/booksSlice';
import Home from './pages/Home';
import Authors from './pages/Authors';
import Navbar from './components/Navbar';
import styles from './styles/App.module.css';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllBooksFromAPI());
  }, [dispatch]);

  return (
    <div className={styles.app}>
      <Navbar />
      <main>
        <div className={styles.container}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="authors" element={<Authors />} />
          </Routes>
        </div>
      </main>
    </div>
  );
}

export default App;
