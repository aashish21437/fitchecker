import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { FormContextProvider } from './context/FormContext';
import PersonalInfoPage from './pages/PersonalInfoPage';
import DishPage from './pages/DishPage';
import SummaryPage from './pages/SummaryPage';

const App: React.FC = () => {
  return (
    <FormContextProvider>
      <Router>
        <Routes>
          <Route path="/" element={<PersonalInfoPage />} />
          <Route path="/dish" element={<DishPage />} />
          <Route path="/summary" element={<SummaryPage />} />
        </Routes>
      </Router>
    </FormContextProvider>
  );
};

export default App;
