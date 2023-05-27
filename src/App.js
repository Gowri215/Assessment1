import { Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import TableS from './components/TableS';
import Add from './components/Add';


function App() {
  return (
   
    <div>
      <NavBar />
      <Routes>
        <Route path='/' element={<TableS />} />
        <Route path='/add' element={<Add />} />
      </Routes>

    </div>
  );
}

export default App;