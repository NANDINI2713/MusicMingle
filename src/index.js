import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import Login from './components/Login';
import Register from './components/Register';
import Home from './components/Home';
import Artists from './components/Artists';
import ArtistSong from './components/ArtistSong';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Routes>
    <Route index element={<App />} />
        <Route path="Login" element={<Login />} />
        <Route path="Register" element={<Register/>}/>
        <Route path="Home" element={<Home/>}/>
        <Route path='Artists' element={<Artists/>}/>
        <Route path='ArtistSong' element={<ArtistSong/>}/>

</Routes>

</BrowserRouter>

);
reportWebVitals();
