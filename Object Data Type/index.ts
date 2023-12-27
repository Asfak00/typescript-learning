// this is a object and it will return single object
let names: Object;
names = { name: "John", age: 30 };

// this is a array of object and it will return muiltiple object
let users: Object[];
users = [
  { name: "John", age: 30 },
  { name: "Jane", age: 30 },
  { name: "Mark", age: 30 },
];

// here we are defining the type of object
let newUser: { name: string; age: number };

// here we are creating a new object and pushing it to the array
newUser = { name: "Rahi", age: 19 };
users.push(newUser);

// here we are looping through the array and printing the object
users.forEach((user) => console.log(user));
