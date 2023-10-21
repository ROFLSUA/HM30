// src/App.js
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import UserList from './components/UserList';
import UserDetails from './components/UserDetails';
import AlbumsList from './components/AlbumsList';
import PhotosList from './components/PhotosList';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<UserList />} />
          <Route path="/user/:id" element={<UserDetails />} />
          <Route path="/user/:id/albums" element={<AlbumsList />} />
          <Route path="/user/:id/albums/:albumId" element={<PhotosList />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
