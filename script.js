import { greet } from "./modules/greet.js";

greet("Дмитрий");

import { celsiusToFahrenheit } from "./modules/celsiusToFahrenheit.js";

console.log(celsiusToFahrenheit(20));

import { calculateFallDistance } from "./modules/calculateFallDistance.js";

console.log(calculateFallDistance(5));

import { calculateAverage } from "./modules/calculateAverage.js";

console.log(calculateAverage(45, 50, 65));

import { concatStrings } from "./modules/concatStrings.js";

console.log(concatStrings("Первое", "слово"));

const celsius = 25;
const fahrenheit = celsiusToFahrenheit(celsius);
console.log("${celsius}°C = ${fahrenheit}°F");

// Пример использования функции для расчета расстояния падения
const time = 3; // время в секундах
const distance = calculateFallDistance(time);
console.log("Объект упал на расстояние: ${distance} м");

