import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AppLayout } from './pages/AppLayout.tsx';
import { Create } from './pages/Create.tsx';
import { List } from './pages/List.tsx';
import { Highest } from './pages/Highest.tsx';
import { Sort } from './pages/Sort.tsx';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<AppLayout />}/>
        <Route path='list' element={<List />}/>
        <Route path='create' element={<Create />}/>
        <Route path='sort' element={<Sort />}/>
        <Route path='check' element={<Highest />}/>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
