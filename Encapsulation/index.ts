// public access control
class User {
  public name: string;
  public age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  Show() {
    console.log(`username: ${this.name}, age: ${this.age}`);
  }
}

// private access control
class User2 {
  private name: string;
  private age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  Show() {
    console.log(`username: ${this.name}, age: ${this.age}`);
  }

  GetAge() {
    return this.age;
  }

  SetAge(age: number) {
    this.age = age;
  }

  GetName() {
    return this.name;
  }

  SetName(name: string) {
    this.name = name;
  }
}

// protected access control

class User3 {
  protected name: string;
  protected age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  Show() {
    console.log(`username: ${this.name}, age: ${this.age}`);
  }
}

class Employee extends User3 {
  private salary: number;

  constructor(name: string, age: number, salary: number) {
    super(name, age);
    this.salary = salary;
  }

  Show() {
    console.log(
      `username: ${this.name}, age: ${this.age}, salary: ${this.salary}`
    );
  }
}

// readonly access control
class User4 {
  readonly name: string;
  readonly age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  Show() {
    console.log(`username: ${this.name}, age: ${this.age}`);
  }
}

// static access control
class User5 {
  static username: string;
  static age: number;

  static Show() {
    console.log(`username: ${this.username}, age: ${this.age}`);
  }
}

// abstract access control
abstract class User6 {
  abstract name: string;
  abstract age: number;

  abstract Show(): void;
}

class Employee2 extends User6 {
  name: string;
  age: number;
  salary: number;

  constructor(name: string, age: number, salary: number) {
    super();
    this.name = name;
    this.age = age;
    this.salary = salary;
  }

  Show() {
    console.log(
      `username: ${this.name}, age: ${this.age}, salary: ${this.salary}`
    );
  }
}
