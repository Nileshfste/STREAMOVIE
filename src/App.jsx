import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from './components/Main'; // New component for main content
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import MovieDetails from './pages/MovieDetails';
import Test from './components/Test';

export default function App() {
  return (
    <Router>
      <Main />
    </Router>
  );
}