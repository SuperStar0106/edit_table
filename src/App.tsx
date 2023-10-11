import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider} from '@mui/material';

import {
  HomePage,
  TablePage,
  ChartPage
} from './pages';
import { darkTheme } from './styles';

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <BrowserRouter>
        <Routes>
          <Route path='/table' element={<TablePage />}></Route>
          <Route path='/chart' element={<ChartPage />}></Route>
          <Route path='*' element={<HomePage />}></Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
