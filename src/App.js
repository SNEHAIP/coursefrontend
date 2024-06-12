import logo from './logo.svg';
import './App.css';
import AddCourse from './components/AddCourse';
import SearchCourse from './components/SearchCourse';
import ViewAll from './components/ViewAll';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';

function App() {
  return (
   <BrowserRouter>
   <Routes>
    <Route path='/'element={<AddCourse/>}/>
    <Route path='/Search'element={<SearchCourse/>}/>
    <Route path='/View'element={<ViewAll/>}/>
    </Routes>
   </BrowserRouter>
  );
}

export default App;
