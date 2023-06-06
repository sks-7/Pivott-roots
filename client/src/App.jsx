import './App.css';
import Dashboard from './Pages/Dashboard';
import { Route, Routes } from 'react-router-dom';

import Login from './Pages/Login';
import UpdateUserPage from './Pages/UpdateUserPage';

import UpdateOrderPage from './Pages/UpdateOrderPage';
import UpdateItemsPage from './Pages/UpdateItemsPage';
import PrivetRoute from './PrivateRoute/privateRoute';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route
          path="/dashboard"
          element={
            <PrivetRoute>
              <Dashboard />
            </PrivetRoute>
          }
        />
        <Route
          path="/edit/:id"
          element={
            <PrivetRoute>
              <UpdateUserPage />
            </PrivetRoute>
          }
        />
        <Route
          path="/editOrder/:id"
          element={
            <PrivetRoute>
              <UpdateOrderPage />
            </PrivetRoute>
          }
        />
        <Route
          path="/editItem/:id"
          element={
            <PrivetRoute>
              <UpdateItemsPage />
            </PrivetRoute>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
