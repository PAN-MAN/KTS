// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Contact from './components/Contact/Contact';
import Blog from './components/Blog/Blogs';
import Courses from './components/Courses/Courses';
import One from './components/Alumni/one'
import Two from './components/Alumni/two'
import ErrorPage from './components/Error/Error'
import Alumni from './components/Alumni/Alumni';
import Bartender from './components/Bartender/Bartender';
import Certificate from './components/Certificate/Certificate';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/alumni" element={<Alumni />} />
        <Route path="/2079-80" element={<One />} />
        <Route path="/2080-81" element={<Two />} />
        <Route path='*' element={<ErrorPage />} />
        <Route path='/bartender' element={<Bartender />} />
        <Route path='/certificate' element={<Certificate />} />
      </Routes>
    </Router>
  );
}

export default App;
