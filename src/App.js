// import './App.css';
import JoinRoom from './pages/JoinRoom';
import StudentTable from './pages/StudentTable';
import ExamList from './pages/ExamList';

import Header from './components/Header';
import Footer from './components/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';



function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/joinroom' element={<JoinRoom/>}/>
        <Route path='/studenttable' element={<StudentTable/>}/>
        <Route path='/examlist' element={<ExamList/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
