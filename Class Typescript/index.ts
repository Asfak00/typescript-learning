class User {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  Show() {
    console.log(`username: ${this.name}, age: ${this.age}`);
  }
}

let user = new User("John", 20);
user.Show();

let user2 = new User("Jane", 30);
user2.Show();
