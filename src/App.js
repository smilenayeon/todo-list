import './App.css';
import { ItemProvider } from './components/item-context/ItemContext';
import Navbar from '../src/components/layouts/navbar/Navbar';
import Add from './components/pages/add-todo/Add';
import Home from './components/pages/home/Home';
import Progress from './components/pages/progress/Progress';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Calendar from './components/pages/calendar/Calendar';

function App() {
  return (
    <BrowserRouter>
    <ItemProvider>
    <div>
    <Navbar/>
    <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/add" element={<Add />} />
            <Route path="/calendar" element={<Calendar/>}/>
            <Route path="/progress" element={<Progress/>}/>
            <Route path="/add" element={<Add/>}/>
          </Routes>
    </div>
     </ItemProvider>
     </BrowserRouter>
  );
 
}

export default App;
