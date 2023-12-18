import React from 'react';
import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import AppLayout from './layouts/AppLayout';
import PrivateRoutes from './Routes/Routes';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <div className="App">
      <AppLayout>
        <PrivateRoutes />
        <ToastContainer
          position="top-right"
          autoClose={2500}
          hideProgressBar={false}
          newestOnTop={true}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </AppLayout>
    </div>
  );
}

export default App;
