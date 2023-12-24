let person: string | number;

person = "John";
person = 123;

function clientId(id: string | number) {
  console.log(id);
}

clientId("123");
clientId(123);
