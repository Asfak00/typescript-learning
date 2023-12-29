// Generic with a single parameter
function userInfo1<x>(user: x) {
  console.log(user);
}

userInfo1("Rahi");

// Generic with nultiple single parameter
function userInfo2<x, y>(user: x, active: y) {
  if (active) {
    console.log(user);
  }
}

userInfo2("Alamin", true);

// user generic with arrow function
const userInfo3 = <x, y>(user: x, active: y) => {
  if (active) {
    console.log(user);
  }
};

userInfo2("Naim", false);
