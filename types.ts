
export enum AppView {
  HOME = 'home',
  CALC_DIFF = 'calc_diff',
  CALC_ADD = 'calc_add'
}

export interface TimeResult {
  hours: number;
  minutes: number;
  totalMinutes: number;
  formatted: string;
}
