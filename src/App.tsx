import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { FormProvider } from './context/FormContext';
import PersonalInfoPage from './pages/PersonalInfoPage';
import DishPage from './pages/DishPage';
import SummaryPage from './pages/SummaryPage';

function App() {
  return (
    <FormProvider>
      <Router>
        <Routes>
          <Route path="/" element={<PersonalInfoPage />} />
          <Route path="/dish" element={<DishPage />} />
          <Route path="/summary" element={<SummaryPage />} />
        </Routes>
      </Router>
    </FormProvider>
  );
}

export default App;