import './App.css';
import { Routes, Route, Link } from 'react-router-dom';

import MainPage from './components/MainPage'
import PaintersList from './components/PaintersList'
import Painter from './components/Painter'
import Picture from './components/Picture'
import About from './components/About'
import Contacts from './components/Contacts'
import Favourites from './components/Favourites'

import Login from './components/Login'
import Registration from './components/Registration'
import UsersAccount from './components/UsersAccount'
import PaintersAccount from './components/PaintersAccount'

import logo from './logo.png';

function App() {
  return (
    <div className="container">

    <div className="header gabriola">
      <div className="logo">
        <Link to='/'>
          <img className="logo-image" src= {logo} alt="LOGO" />
        </Link>
        Pet-проект
      </div>

      <div className="main-menu-item"><Link to='/painters' className="main-menu-button"> Художники </Link></div>
      <div className="main-menu-item"><Link to='/painter' className="main-menu-button"> Художник </Link></div>
      <div className="main-menu-item"><Link to='/pictures' className="main-menu-button"> Картины </Link></div>
      <div className="main-menu-item"><Link to='/user' className="main-menu-button"> Личный кабинет </Link></div>
      <div className="main-menu-item"><Link to='/painter-info' className="main-menu-button"> Для художника </Link></div>
      <div className="main-menu-item"><Link to='/favourites' className="main-menu-button"> Избранное </Link></div>
      <div className="main-menu-item"><Link to='/contacts' className="main-menu-button"> Контакты </Link></div>
      <div className="main-menu-item-small"><Link to='/about' className="main-menu-button"> О нас </Link></div>
      <div className="main-menu-item-small"><Link to='/login' className="main-menu-button"> Войти </Link></div>
      <div className="main-menu-item"><Link to='/new-user' className="main-menu-button"> Регистрация </Link></div>
      
    </div>

    <Routes>

      <Route path = "/painters" element={<PaintersList /> }/>
      <Route path = "/painter" element={<Painter /> }/>

      <Route path = "/pictures" element={ <Picture /> }/>

      <Route path = "/about" element={ <About /> }/>
      <Route path = "/contacts" element={ <Contacts /> }/>
      <Route path = "/favourites" element={ <Favourites /> }/>

      <Route path = "/login" element={ <Login /> }/>
      <Route path = "/new-user" element={ <Registration /> }/>
      <Route path = "/user" element={ <UsersAccount /> }/>
      <Route path = "/painter-info" element={ <PaintersAccount /> }/>

      <Route path = "/" element={<MainPage /> }/>

    </Routes>

  </div>
  );
}

export default App;
