
import './App.css';
// import Container from 'react-bootstrap/Container';
// import Navbar from 'react-bootstrap/Navbar';
// import Nav from 'react-bootstrap/Nav';
import Navbar from './components/Navbar'
import { Routes, Route } from 'react-router-dom';
import Home from './routes/Home';
import How from './routes/How';
import Menu from './routes/Menu';
import Plan from './routes/Plan';
import Contact from './routes/Contact';
import Login from './routes/Login';
import Register from './routes/Register';
import FullMenu from './routes/FullMenu';
import Searched from './routes/Searched';
import MenuDescription from './routes/MenuDescription';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/how-it-works' element={<How />} />
        <Route path='/our-menu' element={<Menu />} />
        <Route path='/choose-plan' element={<Plan />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/our-full-menu' element={<FullMenu />} />
        <Route path='/searched/:search' element={<Searched />} />
        <Route path='/recipe/:id' element={<MenuDescription />} />
      </Routes>
      <Navbar />
    </div>
  );
}

export default App;
