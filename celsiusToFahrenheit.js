export function celsiusToFahrenheit(celsius) {
  return (celsius * 9) / 5 + 32;
}

// Модуль для расчета расстояния падения
export function calculateFallDistance(time) {
  const g = 9.8; // Ускорение свободного падения
  return 0.5 * g * time * time;
}
