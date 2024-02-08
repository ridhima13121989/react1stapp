import logo from './logo.svg';
import 'animate.css/animate.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Homepage from './Components/Home/Homepage';

function App() {
  return (
   <BrowserRouter>
   <Header/>
   <div className='app'>
   <Routes>
    <Route path='/' element={<Homepage/>}/>
    <Route path='/learn' element={<h1>Learn page</h1>}/>
    <Route path='/reference' element={<h1>referencepage</h1>}/>
    <Route path='/community' element={<h1>Community page</h1>}/>
    <Route path='/mycommunity' element={<h1>My community</h1>}/>
    <Route path='/ourcommunity' element={<h1> Our Community</h1>}/>
    <Route path='/blog' element={<h1>Blog page</h1>}/>
    <Route path='/git' element={<h1>Git page</h1>}/>
    <Route path='/register' element={<h1>register page</h1>}/>



   </Routes>
   </div>
   <Footer/>
   </BrowserRouter>
  );
}

export default App;
