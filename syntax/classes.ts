class Vehicle {
  constructor(public color: string) {
  }

  protected honk(): void {
    console.log("beep");
  }
}

const vehicle = new Vehicle('orange');
console.log(vehicle.color);


class Car extends Vehicle {
  constructor(public wheels: number, color: string) {
    super(color);  
  }

  private drive(): void {
    console.log('vroom');
  }

  startDrivingProcess(): void {
    this.drive();
    this.honk();
  }
}

const car = new Car(4, 'red');
car.startDrivingProcess();

// public: called everywhere
// private: only methods in the class
// protected:  only methods of class and child classes
// overriding cannot modifier in child class