
import React, { useState } from 'react';
import Button from './Button';
import { addMinutesToTime } from '../utils/time';

interface AdditionCalculatorProps {
  onBack: () => void;
}

const AdditionCalculator: React.FC<AdditionCalculatorProps> = ({ onBack }) => {
  const [startTime, setStartTime] = useState('12:00');
  const [minutes, setMinutes] = useState<number>(30);
  const [result, setResult] = useState<string | null>(null);

  const handleCalculate = (e: React.FormEvent) => {
    e.preventDefault();
    const finalTime = addMinutesToTime(startTime, minutes);
    setResult(finalTime);
  };

  return (
    <div className="max-w-md mx-auto animate-in slide-in-from-right-4 duration-500">
      <div className="mb-8 flex items-center justify-between">
        <h1 className="text-2xl font-bold text-slate-800">Somar Tempo</h1>
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
            <label className="block text-sm font-semibold text-slate-600 mb-2">Horário Base</label>
            <input 
              type="time" 
              value={startTime}
              onChange={(e) => setStartTime(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-slate-50 transition-all text-lg font-medium"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-slate-600 mb-2">Minutos para Adicionar</label>
            <input 
              type="number" 
              value={minutes}
              onChange={(e) => setMinutes(Number(e.target.value))}
              className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-slate-50 transition-all text-lg font-medium"
              placeholder="Ex: 45"
              required
              min="0"
            />
          </div>

          <Button type="submit" className="w-full">Somar Minutos</Button>
        </form>

        {result && (
          <div className="mt-8 p-6 bg-teal-50 rounded-2xl border border-teal-100 animate-in zoom-in-95 duration-300">
            <p className="text-center text-teal-900 font-medium mb-1">Horário Final:</p>
            <div className="text-center">
              <span className="text-5xl font-bold text-teal-600">{result}</span>
            </div>
            <p className="text-center text-xs text-teal-400 mt-2 uppercase tracking-wide">Novo horário calculado</p>
          </div>
        )}
      </div>

    </div>
  );
};

export default AdditionCalculator;
