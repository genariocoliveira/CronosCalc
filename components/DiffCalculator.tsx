
import React, { useState } from 'react';
import Button from './Button';
import { getDiffBetweenTimes } from '../utils/time';

interface DiffCalculatorProps {
  onBack: () => void;
}

const DiffCalculator: React.FC<DiffCalculatorProps> = ({ onBack }) => {
  const [time1, setTime1] = useState('08:00');
  const [time2, setTime2] = useState('17:00');
  const [result, setResult] = useState<{ hours: number; minutes: number } | null>(null);

  const handleCalculate = (e: React.FormEvent) => {
    e.preventDefault();
    const diff = getDiffBetweenTimes(time1, time2);
    setResult(diff);
  };

  return (
    <div className="max-w-md mx-auto animate-in slide-in-from-right-4 duration-500">
      <div className="mb-8 flex items-center justify-between">
        <h1 className="text-2xl font-bold text-slate-800">Diferença de Horas</h1>
        <button 
          onClick={onBack}
          className="text-indigo-600 hover:underline font-medium text-sm flex items-center gap-1"
        >
          ← Início
        </button>
      </div>

      <div className="bg-white rounded-3xl p-8 shadow-xl border border-slate-100">
        <form onSubmit={handleCalculate} className="space-y-6">
          <div>
            <label className="block text-sm font-semibold text-slate-600 mb-2">Horário de Início</label>
            <input 
              type="time" 
              value={time1}
              onChange={(e) => setTime1(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-slate-50 transition-all text-lg font-medium"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-slate-600 mb-2">Horário de Término</label>
            <input 
              type="time" 
              value={time2}
              onChange={(e) => setTime2(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-slate-50 transition-all text-lg font-medium"
              required
            />
          </div>

          <Button type="submit" className="w-full">Calcular Diferença</Button>
        </form>

        {result && (
          <div className="mt-8 p-6 bg-indigo-50 rounded-2xl border border-indigo-100 animate-in zoom-in-95 duration-300">
            <p className="text-center text-indigo-900 font-medium mb-1">Resultado:</p>
            <div className="text-center">
              <span className="text-4xl font-bold text-indigo-600">{result.hours}h</span>
              <span className="text-4xl font-bold text-indigo-600 ml-2">{result.minutes}min</span>
            </div>
            <p className="text-center text-xs text-indigo-400 mt-2 uppercase tracking-wide">Tempo Total Decorrido</p>
          </div>
        )}
      </div>

    </div>
  );
};

export default DiffCalculator;
