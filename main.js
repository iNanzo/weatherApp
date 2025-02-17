import { weatherReport } from './weatherFunction.js';

const city = "Seattle";
const temperature = 65; 
const condition = "Partly Cloudy";

const report = weatherReport(city, temperature, condition);

document.getElementById('output').textContent = report;
