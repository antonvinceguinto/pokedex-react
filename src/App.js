import React from 'react';
import Home from './pages/Home';

const styles = {
  container: 'flex min-h-screen items-center justify-center',
};

function App() {
  return (
    <div className={styles.container}>
      <Home />
    </div>
  );
}

export default App;
