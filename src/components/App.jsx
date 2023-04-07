import Container from 'react-bootstrap/Container';
import CustomNavbar from './CustomNavbar'
import Footer from './Footer'
import ArticleBig from './ArticleBig';
import Weather from './Weather';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import PageArticle from './PageArticle';
import PageWeather from './PageWeather';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PageArticle />} />\
          <Route path="/weather" element={<PageWeather/>} />
        </Routes >
    </BrowserRouter >
    </div>
  );
}

export default App;
