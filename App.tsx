
import React, { useState } from 'react';
import { AppView } from './types';
import SelectionModal from './components/SelectionModal';
import DiffCalculator from './components/DiffCalculator';
import AdditionCalculator from './components/AdditionCalculator';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<AppView>(AppView.HOME);

  const handleGoHome = () => setCurrentView(AppView.HOME);

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col items-center py-12 px-4 selection:bg-indigo-100 selection:text-indigo-700">
      
      {/* Background decoration elements */}
      <div className="fixed top-0 left-0 w-full h-1 bg-indigo-600 z-10"></div>
      <div className="fixed -top-24 -left-24 w-96 h-96 bg-indigo-200/20 rounded-full blur-3xl pointer-events-none"></div>
      <div className="fixed -bottom-24 -right-24 w-96 h-96 bg-teal-200/20 rounded-full blur-3xl pointer-events-none"></div>

      <div className="w-full max-w-lg relative z-10">
        {/* Render logic based on view */}
        {currentView === AppView.HOME && (
          <SelectionModal onSelect={(view) => setCurrentView(view)} />
        )}

        {currentView === AppView.CALC_DIFF && (
          <DiffCalculator onBack={handleGoHome} />
        )}

        {currentView === AppView.CALC_ADD && (
          <AdditionCalculator onBack={handleGoHome} />
        )}

        {/* Persistent Branding */}
        <footer className="mt-12 text-center text-slate-400 text-sm">
          <p>© {new Date().getFullYear()} CronosCalc. Simplicidade no controle do tempo.</p>
        </footer>
      </div>
    </div>
  );
};

export default App;
