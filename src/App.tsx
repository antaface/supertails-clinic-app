import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { WireframeProvider } from './contexts/WireframeContext';
import { AppBar } from './components/AppBar';
import { BottomTabs } from './components/BottomTabs';
import { Home } from './pages/Home';
import { Book } from './pages/Book';
import { Prescriptions } from './pages/Prescriptions';
import { Reports } from './pages/Reports';
import { Records } from './pages/Records';
import { Billing } from './pages/Billing';

function AppContent() {
  const location = useLocation();
  
  const getPageTitle = () => {
    switch (location.pathname) {
      case '/': return 'Supertails Clinic';
      case '/book': return 'Book Appointment';
      case '/prescriptions': return 'Prescriptions';
      case '/reports': return 'Diagnostic Reports';
      case '/records': return 'Medical Records';
      case '/billing': return 'Billing & History';
      default: return 'Supertails Clinic';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 max-w-mobile mx-auto relative">
      <AppBar title={getPageTitle()} />
      
      <div className="pt-14 pb-16">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/book" element={<Book />} />
          <Route path="/prescriptions" element={<Prescriptions />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/records" element={<Records />} />
          <Route path="/billing" element={<Billing />} />
        </Routes>
      </div>
      
      <BottomTabs />
    </div>
  );
}

function App() {
  return (
    <WireframeProvider>
      <Router>
        <AppContent />
      </Router>
    </WireframeProvider>
  );
}

export default App;
