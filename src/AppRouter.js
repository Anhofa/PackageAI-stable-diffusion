import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Package from './pages/Package/Package';
import Editing from './pages/Editing/Editing';
import Fabric from './pages/Fabric/Fabric';
import Idea from './pages/Idea/Idea';
import Pattern from './pages/Pattern/Pattern';
import Login from './pages/Login/Login';
import User from './pages/User/User';

const AppRouter = () => {
  return (
    <Router>
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/Package" element={<Package/>} />
            <Route path="/Editing" element={<Editing/>} />
            <Route path="/Fabric" element={<Fabric/>} />
            <Route path="/Idea" element={<Idea/>} />
            <Route path="/Pattern" element={<Pattern/>} />
            <Route path="/User" element={<User/>} />
        </Routes>    
    </Router>
  );
};
export default AppRouter;