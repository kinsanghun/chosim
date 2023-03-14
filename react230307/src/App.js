import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from 'components/Header';
import './App.css';
import About from 'pages/About';
import Work from 'pages/Work';
import Contact from 'pages/Contact';
import Main from 'pages/Main';
import NotFound from 'pages/NotFound';
import Footer from 'components/Footer';

function App() {

  return (
    <main className="App">
      <BrowserRouter>
				<Header/>
				<Routes>
					<Route path="/" element={<Main />}></Route>
					<Route path="/about" element={<About />}></Route>
					<Route path="/work" element={<Work />}></Route>
					<Route path="/contact" element={<Contact />}></Route>
					<Route path="*" element={<NotFound />}></Route>
				</Routes>
				<Footer/>
			</BrowserRouter>
    </main>
  );
}

export default App;
