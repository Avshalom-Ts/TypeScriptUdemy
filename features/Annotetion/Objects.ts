const profile = {
  _name: 'alex',
  age: 20,
  //Nested Object
  coords: {
    lat: 0,
    lng: 15
  },
  setAge(age: number): void {
    this.age = age;
  }
};

//Insted of 
// const age = profile.age;

//With no Annotation
// const { age } = profile;

//With Annotetion (can be distructuring in the future)
const { age, _name }: { age: number; _name: string } = profile;

//Plain Distruction
// const { coords: { lat, lng } } = profile;

//With Annotetion
const { coords: { lat, lng } }: { coords: { lat: number, lng: number } } = profile;

