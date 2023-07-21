import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Categories from './pages/Categories';
import styles from './styles/App.module.css';

function App() {
  return (
    <>
      <main className={styles.app}>
        <div className={styles.content}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="categories" element={<Categories />} />
          </Routes>
        </div>
      </main>
    </>
  );
}

export default App;
