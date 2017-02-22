class Vehicle {

  constructor(name,type){
    this.name=name;
    this.type=type;
  }
  
  getName(){
    return this.name;
  }
  getType(){
    return this.type;
  }

}

//***********************************************************

class Car extends Vehicle{
  constructor(name,type){
    super(name,type);
  }

  getName () {
    return super.getName();
  }
  getType () {
    return  super.getType();
  }
}

let myCar = new Car('Celerio','Hatchback');
console.log(myCar.getName() + " is of the type " + myCar.getType() );

//***********************************************************

class Bus extends Vehicle{
  constructor(name,type){
    super(name,type);
  }

  getName () {
    return  super.getName();
  }
  getType () {
    return  super.getType();
  }
}

let myBus = new Bus('Volvo','Multi Axle');
console.log(myBus.getName() + " is of the type " + myBus.getType() );
//***********************************************************

class Scooter extends Vehicle{
  constructor(name,type){
    super(name,type);
  }

  getName () {
    return super.getName();
  }
  getType () {
    return  super.getType();
  }
}

let myScooter = new Scooter('Activa','Non geared');
console.log(myScooter.getName() + " is of the type " + myScooter.getType() ); 