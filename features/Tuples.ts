//The Object Exemple
const drink = {
  color: 'brown',
  carbonated: true,
  sugar: 40
};

//Regular Array
const pepsi = ['brown', true, 40];

//Adding Anotetion to make an Tuple Array alias
const cola: [string, boolean, number] = ['brown', true, 40];

//Declare a Tuple array TYPE
type Drink = [string, boolean, number];

//Now insted of declaring annotetion we can creat array like
const soda: Drink = ['brown', true, 40];
