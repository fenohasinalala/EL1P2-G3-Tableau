import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Datatable from './components/Datatable.js';
import Barre_menu from './components/Barre_menu';



function App() {
  return (
    <div>      
      <BrowserRouter>
          <Routes>
            <Route exact path='/' element={<Barre_menu />} />
            <Route exact path='/components/Datatable' element={<Datatable/>} />
            <Route exact path='*' element={<Datatable/>} />
          </Routes>
        </BrowserRouter>

    </div>

  );
}

export default App;
