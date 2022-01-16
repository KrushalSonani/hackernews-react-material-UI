import './App.css';
import { Header } from './components/header';
import { useEffect, useState } from 'react';
import { Route, Routes,  BrowserRouter as Router, useParams } from "react-router-dom";
import News from './components/news';
import { Container } from '@mui/material';
import { Footer } from './components/footer';

function App() {
  const [isLoading, setLoadingState] = useState(true);

  return (
    <div className="App">
       <Container fixed>
    <Router>
      <Header/>
      <Routes>
          <Route path="/" element={<News/>}/>
          <Route path="news/:type" element={<News/>}/>
          <Route path="*" element={<NotFound/>}/>
      </Routes>
      <Footer/>
    </Router>
    </Container>
    </div>
  )}

export default App;

const NotFound =()=>{
  return <Container>
           <h1> 404 Not Found</h1>
         </Container>
}
