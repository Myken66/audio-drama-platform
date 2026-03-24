import { Router, Route } from 'wouter';
import HomePage from './pages/HomePage';
import BookDetailPage from './pages/BookDetailPage';
import './index.css';

function App() {
  return (
    <Router>
      <Route path="/" component={HomePage} />
      <Route path="/book/:id" component={BookDetailPage} />
    </Router>
  );
}

export default App;
