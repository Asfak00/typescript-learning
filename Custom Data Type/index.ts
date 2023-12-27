// creating a custom data type
type myCustomDataType = {
  name: string;
  age: number;
  isMarried: boolean;
  kids: string[];
  job: {
    title: string;
    salary: number;
  };
};

let allUsers: myCustomDataType[];
allUsers = [];

// creating a new user
let newUser: myCustomDataType;

newUser = {
  name: "John",
  age: 25,
  isMarried: false,
  kids: ["Jane", "Jack"],
  job: {
    title: "Software Engineer",
    salary: 100000,
  },
};

// adding a new user to the array
allUsers.push(newUser);

// we can make custom data type for functions as well
type myCustomFunctionType = (a: number, b: number) => number;

let myCustomFunction: myCustomFunctionType;

myCustomFunction = (a, b) => {
  return a + b;
};

// and we can make custom data type for a class as well
type myCustomClassType = {
  name: string;
  age: number;
  isMarried: boolean;
  kids: string[];
  job: {
    title: string;
    salary: number;
  };
  sayHi: () => void;
};

class myCustomClass implements myCustomClassType {
  name: string;
  age: number;
  isMarried: boolean;
  kids: string[];
  job: {
    title: string;
    salary: number;
  };

  constructor(
    name: string,
    age: number,
    isMarried: boolean,
    kids: string[],
    job: {
      title: string;
      salary: number;
    }
  ) {
    this.name = name;
    this.age = age;
    this.isMarried = isMarried;
    this.kids = kids;
    this.job = job;
  }

  sayHi() {
    console.log(`Hi, my name is ${this.name}`);
  }
}

let myCustomClassInstance: myCustomClassType;

myCustomClassInstance = new myCustomClass("John", 25, false, ["Jane", "Jack"], {
  title: "Software Engineer",
  salary: 100000,
});

myCustomClassInstance.sayHi(); // Hi, my name is John

// and oviously we can make custom data type for a variable as well
type myCustomVariableType = string | number | boolean;

let myCustomVariable: myCustomVariableType;

myCustomVariable = "John";
myCustomVariable = 25;
myCustomVariable = false;
