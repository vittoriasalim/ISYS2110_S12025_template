import { useEffect, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';

import Loader from './common/Loader';
import PageTitle from './components/PageTitle';

import Home from './pages/Home';
import Dashboard from './pages/Dashboard';

import DefaultLayout from './layout/DefaultLayout';
import NavigationItem1 from './pages/NavigationItem1';

function App() {
  const [loading, setLoading] = useState<boolean>(true);
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return loading ? (
    <Loader />
  ) : (
    <DefaultLayout>
      <Routes>
     
        <Route
          path="/"
          element={
            <>
              <PageTitle title="ISYS2110 | Project Dashboard" />
              <Home />
            </>
          }
        />
        <Route
          path="/dashboard"
          element={
            <>
              <PageTitle title="ISYS2110 | Project Dashboard" />
              <Dashboard />
            </>
          }
        />
        <Route
          path="/nav1"
          element={
            <>
              <PageTitle title="ISYS2110 | Project Dashboard" />
              <NavigationItem1/>
            </>
          }
        />
      
  
      </Routes>
    </DefaultLayout>
  );
}

export default App;
