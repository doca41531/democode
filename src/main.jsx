import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Mainpage from './App.jsx';

createRoot(document.getElementById('root')).render(
    <BrowserRouter  >
    <Routes>
        <Route path="/" element={<Mainpage />}></Route>
    </Routes>
</BrowserRouter>
)
