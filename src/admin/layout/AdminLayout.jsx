import React, { useEffect } from 'react';
import Header from '../partials/Header.jsx';
import Footer from '../partials/Footer.jsx';
import { Outlet, ScrollRestoration, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const AdminLayout = () => {
  const navigate = useNavigate();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('login');
    } else {
      // navigate('/admin/profile/payment-settings'); // extra link space
      navigate('dashboard');
    }
  }, [isAuthenticated,navigate]);

  return (
    <div className="admin_layout layout">
      {isAuthenticated && <Header />}
      <main>
        <ScrollRestoration />
        <Outlet />
      </main>
      {isAuthenticated && <Footer />}
    </div>
  );
};

export default AdminLayout;
