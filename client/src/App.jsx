import './App.css';
import Dashboard from './Pages/Dashboard';
import { Route, Routes } from 'react-router-dom';

import Login from './Pages/Login';
import UpdateUserPage from './Pages/UpdateUserPage';

import UpdateOrderPage from './Pages/UpdateOrderPage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/edit/:id" element={<UpdateUserPage />} />
        <Route path="/editOrder/:id" element={<UpdateOrderPage />} />
      </Routes>
    </div>
  );
}

export default App;
