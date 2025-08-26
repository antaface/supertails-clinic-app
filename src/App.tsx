import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AppShell } from './app/AppShell';
import { Home } from './pages/Home';
import { Book } from './pages/Book';
import { Prescriptions } from './pages/Prescriptions';
import { Reports } from './pages/Reports';
import { Records } from './pages/Records';
import { Billing } from './pages/Billing';

function App() {
  return (
    <Router>
      <AppShell>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/book" element={<Book />} />
          <Route path="/prescriptions" element={<Prescriptions />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/records" element={<Records />} />
          <Route path="/billing" element={<Billing />} />
        </Routes>
      </AppShell>
    </Router>
  );
}

export default App;
