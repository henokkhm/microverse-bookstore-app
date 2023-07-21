import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Authors from './pages/Authors';
import Navbar from './components/Navbar';
import styles from './styles/App.module.css';

function App() {
  return (
    <>
      <Navbar />
      <main className={styles.app}>
        <div className={styles.content}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="authors" element={<Authors />} />
          </Routes>
        </div>
      </main>
    </>
  );
}

export default App;
