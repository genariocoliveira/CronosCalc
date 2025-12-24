
import React from 'react';
import { AppView } from '../types';
import Button from './Button';

interface SelectionModalProps {
  onSelect: (view: AppView) => void;
}

const SelectionModal: React.FC<SelectionModalProps> = ({ onSelect }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm animate-in fade-in duration-300">
      <div className="bg-white rounded-3xl p-8 shadow-2xl max-w-md w-full border border-slate-100 transform animate-in slide-in-from-bottom-4 duration-500">
        <h2 className="text-2xl font-bold text-slate-800 mb-2 text-center">Como posso ajudar hoje?</h2>
        <p className="text-slate-500 text-center mb-8">Escolha o tipo de cálculo que deseja realizar.</p>
        
        <div className="grid gap-4">
          <Button 
            onClick={() => onSelect(AppView.CALC_DIFF)} 
            className="w-full text-lg h-24 flex-col items-center justify-center text-center"
          >
            <div className="flex items-center gap-3">
              <span className="text-2xl">⏳</span>
              <div className="text-left">
                <div className="font-semibold">Cálculo de Horas</div>
                <div className="text-xs font-normal opacity-80">Diferença entre dois horários</div>
              </div>
            </div>
          </Button>

          <Button 
            variant="secondary"
            onClick={() => onSelect(AppView.CALC_ADD)} 
            className="w-full text-lg h-24 flex-col items-center justify-center text-center"
          >
             <div className="flex items-center gap-3">
              <span className="text-2xl">➕</span>
              <div className="text-left">
                <div className="font-semibold">Cálculo de Tempo</div>
                <div className="text-xs font-normal opacity-80 text-slate-500">Somar minutos a um horário</div>
              </div>
            </div>
          </Button>
        </div>

        <div className="mt-8 text-center">
          <p className="text-[10px] text-slate-400 uppercase tracking-widest font-bold">CronosCalc Engine v1.0</p>
        </div>
      </div>
    </div>
  );
};

export default SelectionModal;
