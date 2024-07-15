import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './App';
import About from './components/About';
import Contact from './components/Contact';
import Header from './components/Header';
import Footer from './components/Footer';

import reportWebVitals from './reportWebVitals';

const styles = {
  html: {
    height: '100%',
    margin: '0',
    padding: '0',
    backgroundColor: '#f1f1f1',
  },
  body: {
    height: '100%',
    margin: '0',
    padding: '0',
    display: 'flex',
    flexDirection: 'column',
  },
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  },
  mainContent: {
    flex: '1',
    display: 'flex',
    flexDirection: 'column',
  }
};

// Apply styles to html and body
document.documentElement.style.height = styles.html.height;
document.body.style.height = styles.body.height;
document.body.style.margin = styles.body.margin;
document.body.style.padding = styles.body.padding;
document.body.style.display = styles.body.display;
document.body.style.flexDirection = styles.body.flexDirection;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Header />
      <div style={styles.root}>
        <div style={styles.mainContent}>
          <Routes>
            <Route path="/" element={<App />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
        <Footer/>
      </div>
    </Router>
  </React.StrictMode>
);

reportWebVitals();
