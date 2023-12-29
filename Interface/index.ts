interface IUser {
  id: number;
  name: string;
  age: number;
}

let users: IUser[] = [];

let user1: IUser = {
  id: 10,
  name: "Rahi Ahmed",
  age: 19,
};

let user2: IUser = {
  id: 15,
  name: "Alamin Ahmed",
  age: 20,
};

users.push(user1);
users.push(user2);

let printAllUserInfo = (user: IUser) => {
  console.log(
    `User Id is ${user.id}, User Name is ${user.name} and User Age is ${user.age}`
  );
};

users.forEach((user) => printAllUserInfo(user));
