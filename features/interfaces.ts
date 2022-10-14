//Adding the interface So it will be bether to use the object
interface Vehicle {
  name: string;
  year: number;
  broken: boolean;
  onRoud: Date;//We are not restricted only to primitive types
  summary(): string;//Aplly function that return a string 
}

//Adding interface with function to mach more objects
interface reportable{
  summary(): string;
};


//Object
const oldCivic = {
  name: 'civic',
  year: 2000,
  broken: true,
  onRoud: new Date(),
  summary(): string{
    return `Name: ${this.name}`;
  }
};

const drink = {
  name: 'cola',
  year: 2022,
  broken: false,
  onRoud: new Date(),
  summary(): string{
    return `This ${this.name} Also used by reportable`;
  }
}

//Funtion taking an Object And print is content
const printVehicle = (vehicle: { name: string; year: number; broken: boolean }): void => {
  console.log(`
  Name: ${vehicle.name}
  Year: ${vehicle.year}
  Broken: ${vehicle.broken}
  `)
};
//The Same Function but with the INTERFACE TYPE
const printVehicleInterface = (vehicle: Vehicle ): void => {
  console.log(`
  Name: ${vehicle.name}
  Year: ${vehicle.year}
  Broken: ${vehicle.broken}
  on Roud: ${vehicle.onRoud}
  `);
  //Can be implement insted of the lines Above
  console.log(vehicle.summary());
};

//Applying the Function on the Object
printVehicle(oldCivic);

//A function that get object with rportable TYPE
const printSummary = (reportable: reportable): void => {
  console.log(reportable.summary());
} 

//Now i can call both of the objects with that Function 
//Becouse they both have the reportable Type in them
printSummary(oldCivic);
printSummary(drink);
