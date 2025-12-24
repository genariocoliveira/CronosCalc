
export const parseTimeToMinutes = (timeStr: string): number => {
  const [hours, minutes] = timeStr.split(':').map(Number);
  return (hours * 60) + minutes;
};

export const formatMinutesToTime = (totalMinutes: number): string => {
  // Handle negative or circular time if needed (e.g., overflow 24h)
  const positiveMinutes = ((totalMinutes % 1440) + 1440) % 1440;
  const h = Math.floor(positiveMinutes / 60);
  const m = positiveMinutes % 60;
  return `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}`;
};

export const getDiffBetweenTimes = (timeA: string, timeB: string): { hours: number; minutes: number } => {
  const minA = parseTimeToMinutes(timeA);
  const minB = parseTimeToMinutes(timeB);
  
  // Calculate absolute difference
  const diff = Math.abs(minB - minA);
  const h = Math.floor(diff / 60);
  const m = diff % 60;
  
  return { hours: h, minutes: m };
};

export const addMinutesToTime = (time: string, minutesToAdd: number): string => {
  const initialMinutes = parseTimeToMinutes(time);
  const totalMinutes = initialMinutes + minutesToAdd;
  return formatMinutesToTime(totalMinutes);
};
