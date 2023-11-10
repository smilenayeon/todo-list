import './App.css';
import { ItemProvider } from './components/item-context/ItemContext';
import Navbar from '../src/components/layouts/navbar/Navbar';
import Add from './components/pages/add-todo/Add';
import Home from './components/pages/home/Home';

function App() {
  return (
    <ItemProvider>
    <div>
    <Navbar/>
    <Add/>
    <Home/>
    </div>
     </ItemProvider>
  );
 
}

export default App;
