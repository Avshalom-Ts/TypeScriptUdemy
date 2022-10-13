const add = (a: number, b: number): number => {
  return a + b;
};

//Its very good practice to put the annotetion to the riturn function
//to make shore whe adding return value if that is the purpose of the function
//Exemple for Arow function
const subsract = (a: number, b: number): number => {
  return a - b;
};

//Exemple for regular function
function divide(a: number, b: number): number{
  return a / b;
};

//Exemple for Anonimous function
const multiply = function (a: number, b: number): number {
  return a * b;
};

//Function that not returning a vlue
const logger = (massege: string): void => {
  console.log(massege);
};

//function that will never return a value
const throwEror = (massege: string): never => {
  throw new Error(massege);
};

//Function that return null
const throwEror2 = (massege: string): null => {
  throw new Error(massege);
  return null;
};

//Function that return undefined
const throwEror3 = (massege: string): undefined => {
  throw new Error(massege);
  return undefined;
};

const todayWeather = {
  date: new Date(),
  weather: 'sunny'
};

//Function that get an object with type of Date and string and return void
const logWeather = (forecast: { date: Date, weather: string }): void => {
  console.log(forecast.date);
  console.log(forecast.weather);
};

//Function that get an object with type of Date and string and return void with type annotetion ES6
const logWeather2 = ({ date, weather }: { date: Date, weather: string }): void => {
  console.log(date);
  console.log(weather);
};

//Call the function with the parameter
logWeather(todayWeather);