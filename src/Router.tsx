import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import MainLayout from './layout/MainLayout/MainLayout';
import Home from './pages/Home/Home';
import NotFound from './pages/NotFound/NotFound';

export default function Router() {
  return (
    <Routes>
      <Route path="/page" element={<MainLayout />}>
        <Route index element={<Navigate to="/page/1" />} />
        <Route path=":page" element={<Home />} />
      </Route>
      <Route path="/" element={<Navigate to="/page/1" />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
