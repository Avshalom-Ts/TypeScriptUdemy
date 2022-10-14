//Class with Functions
class Vehicle{
  drive(): void{
    console.log('chugga chugga');
  };
  
  honk(): void{
    console.log('beep');
  };
};

//Extend the Vehicle Class Above
class Car extends Vehicle{
  drive(): void {
    //We can also redefine the propertis from Vehicle
    console.log('Im driving');
  }
};

//Creating new Vehicle instence
const vehicle = new Vehicle();
// vehicle.drive();
// vehicle.honk();

//Creating new Car instence Extended from Vehicle
const car = new Car();

//Now in the car instence we can use vehicle propertis
car.drive();
car.honk();


/////////////////////////////////
//initial a class with the constructor if we wont to decler is proprety from outside the class
class Vehicle2{
  color: string = 'red';//can asigne inside the class
  constructor(color: string) {
    //Every property of the claas that will declar in the constructor can be call from outside the class
    this.color = color;
  }
}

//now we can Asigne the value to the class property
const vehicle2 = new Vehicle2('orange');

////////////////////////////////////////////////////
//Shorter way to creat the class 
class Vehicle3{
  constructor(public color: string) {
    //To derlare public in the constructor insed of decler it and then asign in like Above
  }
}

const vehicle4 = new Vehicle3('blue');

class Car2 extends Vehicle3{
  constructor(public wheels: number, color: string) {
    //Color property dont have a public infront bcouse he belong to the parent Vehicle3
    super(color);//Becouse the color is belong to the parent class Vehicle3 we must ads super() add pass argument
    //Or
    // super('purple');

  }
}
//Now we can asign value thru the child to parent class
const vehicle5 = new Car2(4, 'purple');