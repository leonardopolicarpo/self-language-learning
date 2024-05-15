import { ProgressProvider } from '../src/hooks/context';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { Home } from './pages/Home';

function App() {

  return (
    <ProgressProvider>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </Router>
    </ProgressProvider>
  )
}

export default App
