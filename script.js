import {
  greet,
  celsiusToFahrenheit,
  calculateFallDistance,
  calculateAverage,
  concatStrings,
} from "./modules.js";

greet("Дмитрий");

// Пример использования функции для конвертации температур
const celsius = 25;
const fahrenheit = celsiusToFahrenheit(celsius);
console.log("${celsius}°C = ${fahrenheit}°F");

// Пример использования функции для расчета расстояния падения
const time = 3; // время в секундах
const distance = calculateFallDistance(time);
console.log("Объект упал на расстояние: ${distance} м");

// Пример использования функции для расчета среднего
const average = calculateAverage(5, 10, 15);
console.log("Среднее значение: ${average}");

// Пример использования функции для конкатенации строк
const result = concatStrings("Привет", "Мир");
console.log(result);
