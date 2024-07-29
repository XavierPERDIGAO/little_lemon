import './App.css';

import ConfirmedBooking from './pages/ConfirmedBooking';
import NoPage from './pages/NoPage';
import Booking from './pages/Booking';
import Home from './pages/Home'
import Layout from './pages/Layout'
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="booking" element={<Booking />} />
          <Route path="confirmedBooking" element={<ConfirmedBooking />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  );
}

// <Route path="blogs" element={<Blogs />} />
// <Route path="*" element={<NoPage />} />

export default App;
