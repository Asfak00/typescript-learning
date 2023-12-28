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

class Student extends User {
  studentId: number;
  studentGender: string;

  constructor(
    name: string,
    age: number,
    studentId: number,
    studentGender: string
  ) {
    super(name, age);
    this.studentId = studentId;
    this.studentGender = studentGender;
  }

  Show() {
    console.log(
      `username: ${this.name}, age: ${this.age} studentId: ${this.studentId}, studentGender: ${this.studentGender}`
    );
  }
}

const user = new User("John", 20);
user.Show();

const student = new Student("rahi", 19, 502386, "male");
student.Show();
