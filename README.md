# Table of content ( click to navigate )

- [Introduction](#What-is-TypeScript)
- [Installation](#TypeScript-Install)
- [How works TypeScript](#How-works-TypeScript)
- [TypeScript Configuration](#TypeScript-Configuration)
- [Data Types](#Data-Types)
- [Class](#Class-Typescript)
- [Inheritance](#Inheritance)
- [Abstract Class](#Abstract-Class)
- [Encapsulation](#Encapsulation)
- [Function Signature](#Function-Signature)
- [Interface](#Interface)
- [Generic Type](#Generic)

</br>

# What is TypeScript?

types / additional features + javascript মিলেই কিন্তু TypeScript গঠিত। TypeScript ব্যাবহার করার মাধ্যমে আমরা টাইপ ফ্রি কোড লিখতে পারি ( মানে কোন variable এর ডেটা টাইপ কেমন হবে )। TypeScript ২০১২ সালে ডেভেলপ করা হয়েছে এবং এটি মাইক্রোসফট তৈরি করেছে এবং মেইনটেইন করছে।

# TypeScript Install

**First Step:**
Check node install or not: node --version

</br>

**Second Step**

```js
// global
npm install -g typescript

// local
npm install --save-dev typescript
```

Check installed or not: tsc --version

# How works TypeScript

<img src="./Diagram images/how works.png" alt="image">

</br>

**উপরের Diagram লক্ষ করলেই বুঝা যাচ্ছে যে TypeScript program run করার সেটা Compile হয় এবং তারপর সেটি Javascript এ রুপান্তর হয়ে Output দেখায়। আর এটা করার জন্য আমাদের কোড ইডিটরের কমান্ড লাইনে যে কমান্ড দিতে হয় সেটা নিচে দেওয়া হলো...**

```js
tsc file-name

// আর আপনি যদি চান না যে বার বার এই কমান্ড রান করবেন তাহলে নিচের কমান্ড দিতে পারেন।
tsc file-name --watch
```

</br>

# TypeScript Configuration

- create src, public folder
- Inside public folder create index.html, style.css and inside src folder create index.ts or other ts files
- in terminal -> tsc --init
- edit tsconfig.json as shown in the following example

```json
{
  "compilerOptions": {
    "target": "es5",
    "module": "commonjs",
    "rootDir": "./src",
    "outDir": "./public",
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true
  },
  "include": ["./src"],
  "files": ["./src/index.ts", "./src/app.ts"]
}
```

</br>

# Data Types

Data Types এর মধ্যে **any** হচ্ছে সুপার ডেটা টাইপ এবং এর মধ্যে রয়েছে Built-in data types ও user define data types।

### Built-in data types

<ul>
    <li>Number</li>
    <li>String</li>
    <li>Boolean</li>
    <li>Undefined</li>
    <li>Null</li>
    <li>Void</li>
</ul>

**সব ডেটা টাইপের একটা করে example নিচে দেখানো হলোঃ**

```js
let name = "Rahi Ahmed"; // String
let Number = 123; // Number
let isMale = true; // Boolean
let hasMoney = null; // Null
let houseAddress = undefined; // Undefined
```

> উপরে যে ডেটা টাইপের সাথে পরিচয় করানো হলো এগুলো হচ্ছে any এর built-in ডেটা টাইপ। এগুলো আমরা ব্যবহার করে অভ্যস্ত।

### User define data types

<ul>
    <li>Arrays</li>
    <li>Enums</li>
    <li>Classes</li>
    <li>Interfaces</li>
</ul>

### Union Data Type

কোনো সময় আমাদের একই variable অথবা function এর মধ্যে ১ এর অধিক ডেটা টাইপ আসতে পারে তখন আমরা ইউনিয়ন (Union) ব্যাবহার করবো সেটা হ্যান্ডেল করার জন্য। Union এর মাধ্যমে আমরা কয়েকটি ডেটা টাইপকে একত্রিত করতে পারি। নিচে তার example দেওয়া হলোঃ

```js
let person: string | number;

person = "John";
person = 123;
```

উপরে person নামের variable টি ২টি ডেটা টাইপ নিতে পারবে string এবং number এবং ২টি আলাদা ডেটা টাইপ নেওয়ার সময় কোনো error দিবে না কারণ আমরা Union data type এর মাধ্যমে সেটা বলে দিয়েছি যে আমাদের ২টি ডেটা টাইপ লাগবে।

একইভাবে function এর মধ্যে ও আমরা Union ব্যবহার করতে পারবো। নিচে example দেওয়া হলোঃ

```js
function clientId(id: string | number) {
  console.log(id);
}

clientId("123");
clientId(123);
```

উপরে clientId নামের function টি id নামে যে পেরামিটার নিবে সেখানে ইনপুট হিসেবে ২টি ডেটা টাইপ দেওয়া যাবে string এবং number এবং ২টি আলাদা ডেটা টাইপ নেওয়ার সময় কোনো error দিবে না কারণ আমরা Union data type এর মাধ্যমে সেটা বলে দিয়েছি যে আমাদের ২টি ডেটা টাইপ লাগবে।

> উদাহরণে ২টি ডেটা টাইপ কম্বাইন করে দেখানো হয়েছে কিন্তু Union এর মাধ্যমে যতগুলো ডেটা টাইপ ইচ্ছা আমরা কম্বাইন করতে পারবো।

### Array Type

Array type তো আমরা ডিফাইন করতে পারি আমরা, কিন্তু typescript এ কিভাবে টাইপের সাথে array ডিফাইন করতে হয় সেটা এখানে দেখানো হচ্ছে।

```js
let info = ["Rahi", "Alamin", "Naim"]; // যখন আমরা ভেলু সহ array ডিফাইন করছি তখন typescript ইন্টেলিজেন্স বুঝে যাচ্ছে এটার ডেটা টাইপ এবং এখানে এই array এর ডেটা টাইপ হচ্ছে string।

let info: string[]; // কিন্তু যখন আমরা ভেলু না দিয়ে শুধু array টি ডিফাইন করে রাখি তখন আমরা typescript এ এভাবে ডেটা টাইপ বলে দেই।
```

> আমরা চাইলে Union এর মাধ্যমে ডেটা টাইপ কম্বাইন করতে পারি array এর জন্য ও। নিচে example দেওয়া হলো।

```js
let info: (string | number)[];

info = ["Rahi", 23];
```

### Tuple Data Type

অনেক সময় আমাদের (key, value) নিয়ে array তে কাজ করার প্রয়োজন হতে পারে মাল্টিপল টাইপের ডাটা নিয়ে তখন আমরা এই **টাপল** ডাটা টাইপ ব্যবহার করে সেটা করতে পারি।
নিচে উদাহরণ দেওয়া হলোঃ

```js
let data: [number, string];
data = [101, "Rahi"];
data.push(303, "Alamin");

console.log(data);
```

Tuple data type এ আমরা variable define করে নিবো এবং সেই variable এর ডেটা টাইপ বলে দিবো ( [] ) থার্ড ব্র্যাকেট এর মধ্যে ( , ) এর মাধ্যমে ( যদি ১ এর অধিক ডেটা টাইপ দেওয়া হয় তাহলে )। এরপর নরমাল array তে যেভাবে কাজ করা হয় ওইভাবেই যেকোনো অপারেশন চালানো যাবে কিন্তু যেহেতু এটা typescript তাই আমরা variable define করার সময় যে order এ ডেটা টাইপ দিয়েছি সেই order এ কিন্তু আমাদের ডেটা পুশ করতে হবে array তে।

</br>

### Enum Data Type

অনেক সময় আমাদের প্রোগ্রামে এমন কিছু variable থাকে যেগুলোর value সব একই থাকে এবং আমরা সেগুলো বিভিন্ন জায়গায় ব্যবহার করে থাকি এই কাজটি রিডেবল করতে typescript আমাদের দিচ্ছে Enum Data Type নামে একটি ডেটা টাইপ যেটার মধ্যে আমরা আমাদের constant variable গুলো রাখতে পারবো। এবং array তে আমরা যেভাবে প্রতিটি item ধরতে পারতাম ঠিক সেইমভাবে Enum Data Type এ ও ধরতে পারবো। আমরা Enum Data Type switch statements, comparisons এবং আর অনেক জায়গায় ব্যবহার করতে পারবো। Enum Data Type এর মাধ্যমে আমরা আমাদের কোডকে আর বেশি readable করতে পারবো। **Enum Data Type এ আমরা duplicate কোনো কিছু দিতে পারবো না।** Enum Data Type এ আমরা কোনো variable declear করলে সেটার value অটোমেটিক সেট হয়ে যায় ( ০ থেকে শুরু হয়ে যতগুলো item থাকবে তত পর্যন্ত ১ -> ১ করে বাড়তে থাকবে ) কিন্তু আমরা চাইলে নিজেদের value দিতে পারবো ( ওইটা ডিফল্ট হিসেবে সেট হয় )।

**Enum Data Type ৩ ধরনের**

- Numeric Enums - ( এটিতে আমরা সংখ্যা এবং মৌলিক সংখ্যা রাখতে পারবো )

- String Enums - ( এটিতে আমরা string রাখতে পারবো )

- Heterogeneous Enums - ( এটিতে আমরা Numeric Enums এবং String Enums সমন্বয় করে রাখতে পারবো )

</br>

**Enum Data Type Syntax**

</br>
<img src="./Diagram images/enum systax.png" alt="image">

উপরের কিভাবে আমরা নিজেরা কোনো variable এর value সেট করবো সেটা দেখানো হয় নি! **নিচে সেটা দেখানো হবে**

</br>

**Set The Value In Enum Variable**

</br>
<img src="./Diagram images/set value enum variable.png" alt="image">

এভাবে আমরা যেকোনো variable এ value সেট করতে পারি আর যদি কোনো value সেট না করি তাহলে Enum ডিফল্ট ভাবে একটি নাম্বার value সেট করে দেয়।

</br>

### Any Data Type

Any Data Type তখনই আমাদের প্রয়োজন হয় যখন আমি জানি না যে আমাদের এই ফাংশন এর জন্য কোন ধরণের ডেটা আসতে পারে ( মানে হয়তো আমার string এর ও প্রয়োজন আছে সাথে number, object, array or boolean etc প্রয়োজন রয়েছে ) সেক্ষেত্রে আমরা Data Type হিসেবে Any ব্যবহার করতে পারি তাহলে যেকোনো ধরণের ডেটা আসলেও কোনো error দিবে না।

```js
let form: any;
form = 10;
form = "string";
form = true;
form = {};
form = [];
form = function () {};
form = null;
form = undefined;
```

</br>

### Object Data Type

নিচে দেখানো হলো যে typescript এ আমরা কিভাবে object ডিফাইন করতে পারি ডেটা টাইপের সঙ্গে।

```js
let names: Object;
names = { name: "John", age: 30 };
```

উপরে যেই কোডটি দেখানো হয়েছে সেখানে names নামের variable যে একটা object এটা বলে দেওয়া হচ্ছে টাইপ এর মাধ্যমে এবং আমরা যখন ওই names এর মধ্যে কোনো value রাখতে যাবো তখন আমাদের object রাখতে হবে না হলে আমাদের প্রোগ্রামে error দিবে।

**এখন দেখে নেই কিভাবে আমরা array of object এর ডেটা টাইপ লিখতে ডিফাইন করবো। নিচে তা দেখানো হলোঃ**

```js
let users: Object[];
users = [
  { name: "John", age: 30 },
  { name: "Jane", age: 30 },
  { name: "Mark", age: 30 },
];
```

উপরে যে কোড দেখানো হয়েছে সেটা হচ্ছে array of object মানে এর মধ্যে আমরা অনেক গুলো object রাখতে পারবো এবং সেটা একটি array এর মধ্যে হবে। আর তার জন্য আমাদের ডেটা টাইপ এভাবে লিখতে হবে `Object[]`।

**কিভাবে object ডেটা টাইপ ডিফাইন করতে হয় জেনে নিলাম এবং কিভাবে array of object ডেটা টাইপ ডিফাইন করতে হয় জেনে নিলাম কিন্তু কিভাবে আমরা একটি object এর মধ্যে যে entires গুলো থাকবে সেগুলোর আলাদা আলাদা ডেটা টাইপ দিতে হয় সেটা জানি না সেটা নিচে দেওয়া হলোঃ**

```js
let newUser: { name: string, age: number };

newUser = { name: "Rahi", age: 19 };
```

উপরে আমরা newUser নামে একটি object declear করেছি এবং এর মধ্যে যে entries গুলো থাকবে সেগুলোর আলাদা আলাদা করে ডেটা টাইপ ডিফাইন করে দিলাম এবং নিচে সেই অবজেক্ট এর মধ্যে ২টি value এসাইন করলাম। **কিন্তু আমরা যদি চাই যে উপরে যে অবজেক্ট রয়েছে তার মধ্যের age কে দিলে ও হবে না দিলে ও হবে মানে অপশনাল রাখতে চাইলে `?` এটা ব্যবহার করতে পারি। তার সিনট্যাক্স এইরকম হবে `age?: number`। তাহলে আমাদের এই প্রপার্টি টি অপশনাল হয়ে যাবে এবং এই প্রপার্টি যদি না দেওয়া হয় তাহলে কোনো error দিবে না।**

</br>

### Custom Data Type

যখন বড় প্রোগ্রাম বানানো হয় তখন একই ডেটা টাইপ নিয়ে অনেক বার লিখতে হয় যার জন্য টাইপস্কিপ্ট আমাদের দিচ্ছে নিজের কাস্টম ডেটা টাইপ বানানোর সুযোগ। কাস্টম ডেটা টাইপ এর সবচেয়ে বড় সুবিধা হচ্ছে এটি আমাদের কোডকে অনেক বেশি রিডেবল বানিয়ে দেয় এবং বাগ ফ্রি বানায় কোডকে। কাস্টম ডেটা টাইপ আমরা সবকিছুর জন্য বানাতে পারবো যেমন - ( function, variable, object, class etc )। নিচে কোডগুলোর সাহায্যে দেখানো হলোঃ

```js
type myCustomDataType = {
  name: string,
  age: number,
  isMarried: boolean,
  kids: string[],
  job: {
    title: string,
    salary: number,
  },
};
```

উপরে একটি custom data type বানানো হয়েছে এবং অবশ্যই আমরা যখন custom data type বানাবো তখন আমাদের `type` keyword লিখতে হবে। উপরে যে ডেটা টাইপ বানানো হয়েছে সেটা একটি অবজেক্ট।

```js
// এখানে allUsers নামে একটি variable এর ডেটা টাইপ হিসেবে দেওয়া হয়েছে myCustomDataType কে এবং এটিকে একটি array of object বানানো হয়েছে।
let allUsers: myCustomDataType[];

// allUsers কে ডিফাইন করা হয়েছে শুধু এখানে।
allUsers = [];

// এখানে একটি নতুন user বানানোর জন্য newUser variable এর ডেটা টাইপ হিসেবে myCustomDataType কে দেওয়া হয়েছে কারণ myCustomDataType এর মধ্যে যে যে প্রপার্টি রয়েছে আমার সব প্রপার্টি দরকার এর জন্যই।
let newUser: myCustomDataType;

// এখানে newUser এর প্রপার্টি গুলোর value দেওয়া হচ্ছে এবং যেহেতু আমরা newUser এর ডেটা টাইপ হিসেবে myCustomDataType দিয়েছি তাই myCustomDataType এর মধ্যে যে যে প্রপার্টি রয়েছে সব এই newUser এর মধ্যে চলে এসেছে এবং এখন যখন আমি newUser এর value দিতে যাচ্ছি তখন আমাদের ওই সব প্রপার্টি এর value দিতে হবে যেগুলো রয়েছে myCustomDataType এর মধ্যে।
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

// সবার শেষে আমরা এই newUser কে পুশ করে দিচ্ছি allUsers এর মধ্যে। এবং এখন যদি আমরা allUsers কে console.log করি তাহলে একটি object পাবো।
allUsers.push(newUser);
```

**উপরে তো আমরা একটি অবজেক্টের জন্য custom data type বানিয়ে দেখেছি কিন্তু আমরা custom data type সব কিছুর জন্য বানাতে পারবো (variable, function, class etc )।**

</br>

# Class Typescript

Typescript এ জাভাস্কিপ্টের সবকিছুর Syntax সেইম শুধু পরিবর্তন হয় ডেটা টাইপ বলে দেওয়ার ধরনটা। তেমনি ভাবে এখন দেখবো Typescript এ কিভাবে Class ডিফাইন করতে হয় এবং কিভাবে Class এর মধ্যে থাকা Property গুলোর ডেটা টাইপ বলে দেওয়া যায়। নিচে দেখানো হলোঃ

```js
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
```

উপরে একটি Class তৈরি করা হয়েছে। তার মধ্যে name, age ২টি Property দেওয়া হয়েছে এবং সেগুলোর ডেটা টাইপ বলে দেওয়া হয়েছে। তারপর আউটপুট দেখার জন্য Show নামে একটি ফাংশন বানানো হয়েছে এবং তার মধ্যে Console করা হয়েছে।

</br>

# Inheritance

Inheritance হলো একটি অবজেক্ট বা ক্লাস যা অন্য একটি অবজেক্ট বা ক্লাস থেকে একটি বা একাধিক প্রপার্টি ব্যবহার করতে সাহায্য করে। ধরুন, আপনার একটি ক্লাস বানানো রয়েছে এবং ওই ক্লাসের মধ্যে যতগুলো প্রপার্টি দেওয়া আছে সবগুলো প্রপার্টি অন্য আরেকটি কাজের জন্য আপনার প্রয়োজন। তাহলে একটি ক্লাস যখন রয়েছে সেটা ব্যবহার করা গেলে কোড রিডেবল হবে তাই না? আর ওইসময় Inheritance ব্যাবহার করার মাধ্যমে আগের ক্লাস কপি করে আনা যায় নতুন ক্লাস এর মধ্যে। Inheritance করার জন্য আমাদের ক্লাসের নাম দেওয়ার পর `extends` keyword দিতে হবে এবং এর পরে যে ক্লাসকে Inheritance করতে চাচ্ছি তার নাম দিতে হবে। নিচে কোড দেওয়া হলোঃ

```js
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

const user = new User("John", 20);
user.Show();

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

const student = new Student("rahi", 19, 502386, "male");
student.Show();
```

উপরের উদাহরণে প্রথমে একটি ক্লাস তৈরি করা হয়েছে User নামে এবং তার মধ্যে ২টি প্রপার্টি এবং আউটপুট দেখার জন্য একটি ফাংশন রয়েছে। আর নিচে আরেকটি ক্লাস তৈরি করা হয়েছে Student নামে যেখানেও একটি Student এর নাম, বয়স এর তথ্য লাগবে যার কারণে উপর থেকে User ক্লাস কে কপি করে নিয়ে আসা হয়েছে Student ক্লাস এর মধ্যে এবং Student ক্লাসে আর নতুন ২টি প্রপার্টি যুক্ত করা হয়েছে User ক্লাসে থাকা প্রপার্টি গুলোর সাথে। Student ক্লাসের মধ্যে যে `super()` দেখতে পাচ্ছেন, এটা হচ্ছে একটি keyword এবং এটি constructor প্যারেন্টের মধ্যে ব্যবহার করা হয় চাইল্ড কে আনার জন্য। এখানে name, age কে আনার জন্য ব্যবহার করা হয়েছে।

</br>

# Abstract Class

Abstract আমাদের প্রোগ্রাম থেকে কোনো কিছু লুকিয়ে রাখতে সাহায্য করে। যেমনঃ আমরা এমন একটি প্রোগ্রাম তৈরি করেছি যেটার ভিতরে কি হচ্ছে সেটা ইউজারকে জানতে দেওয়া যাবে না এইরকম ক্ষেত্রে Abstract ব্যবহার করা হয়। Abstract ব্যাবহার করার জন্য অবশ্যই আমাদের `bstract` keyowrd দিতে হবে। নিচে দেখে নেই কিভাবে Abstract ক্লাস তৈরি করতে হয়,

```js
abstract class Person {
  name: string;
  age: number;
  gender: string;
  constructor(name: string, age: number, gender: string) {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }
}
```

উপরে যেভাবে দেখানো হয়েছে সেভাবে আমরা Abstract ক্লাস তৈরি করতে পারবো কিন্তু আমরা Abstract ক্লাসের মধ্যে object দিতে পারবো না তাহলে error দিবে। আর আমরা চাইলে Abstract ক্লাসের মধ্যে Abstract মেথড তৈরি করতে পারি। কিন্তু Abstract মেথড কোনো কিছু রিটার্ন করে না। নিচে দেখানো হলোঃ

```js
abstract class Person {
  name: string;
  age: number;
  gender: string;
  constructor(name: string, age: number, gender: string) {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }

  // Abstract method
  abstract show(): void;
}
```

এভাবে Abstract তৈরি করা যাবে। কিন্তু একটা জিনিস যে যদি আমরা Abstract ক্লাসের মধ্যে Abstract মেথড তৈরি করি তাহলে আমরা যখন এই Abstract ক্লাস Inheritance করবো তখন অবশ্যই আমাদের Abstract মেথড ব্যবহার করতে হবে না হলে error দিবে। এবং যে এই Abstract ক্লাসকে Inheritance করবে সে তার মতো করে Abstract মেথডগুলোকে বলে দিতে পারবে যে তারা কি কাজ করবে তাদের ফাংশনালিটি কি।

</br>

# Encapsulation

Encapsulation হচ্ছে Object-Oriented Programming এর ৪টি ফান্ডামেন্টাল এর মধ্যে একটি। এর দ্বারা একটি অব্জেক্টের আসল ফাংশন অথবা মেথডগুলো লুকিয়ে রাখা যায় ( পাবলিক, প্রাইভেট ) ইত্যাদি এর মাধ্যমে। Encapsulation ব্যবহারের মাধ্যমে ডাটার এক্সেস কনট্রোল করা সম্ভব। এর মাধ্যমে ডাটাকে প্রটেক্টেট রাখা সম্ভব। Encapsulation এর ৩টি key principles রয়েছে নিচে দেওয়া হলোঃ

- Data Hiding
- Access Control
- Modularity

### Data Hiding

Encapsulation এর মুল উদ্দেশ্য হচ্ছে ডাটাকে সুরক্ষিত রাখা। যার জন্য Data Hiding ব্যবহার করা হয়। এর মাধ্যমে আমাদের যেসব implementation রয়েছে দেগুলোকে বাহিরের থেকে লুকিয়ে রাখা যায়। যেগুলোকে বাহিরে প্রদর্শন করতে চাই না সেগুলোকে প্রাইভেট করে দিতে পারি এবং সেগুলোকে এক্সেস করার জন্য ২টি পাবলিক মেথড তৈরি করতে পারি ( সেট এবং গেট ) নামে। Data Hiding unauthorized আক্সেস গুলো প্রতিরোধে সাহায্য করে।

### Access Control

Access Control এর মাধ্যমে আমাদের ডাটাগুলোর আক্সেস রাখতে পারি ( পাবলিক, প্রাইভেট, প্রটেক্টেড, রিডঅনলি )। Access Control এর মাধ্যমে এটা নিশ্চিত করা যায় যে ক্লাসে থাকা একটি নির্দিষ্ট প্রপার্টিকে বাহিরে থেকে আক্সেস করা সম্ভব অথবা না।

### Modularity

Modularity হলো একটি প্রোগ্রামিং প্যারাডাইম যা প্রোগ্রামকে ছোট একক ভাগে ভাগ করে তাদেরকে আলাদা আলাদা মডিউলে অর্থাৎ মডিউলার ইউনিটগুলি তৈরি করে। এই মডিউলার ইউনিটগুলি নিযে নিজের কাজ করতে পারে এবং একে অপরের উপর নির্ভরশীল না থাকতে হয় না।

**নিচে Encapsulation এর Access Control থেকে ( Public, Private, Protected, ReadOnly ) দ্বারা কিভাবে একটি ডাটা মেইনটেইন করতে হয় তা দেখানো হলোঃ**

```js
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
```

- Public
  </br>
  আমরা সাধারণত যে কোড করে থাকি সেগুলো হচ্ছে পাবলিক। পাবলিক করা কোডগুলো আমরা read করতে পারি update করতে পারি এবং access করতে পারি।

- Private
  </br>
  Private করা কোড আমরা শুধুমাত্র ক্লাসের ভিতর থেকে access, read, update করতে পারবো বাহিরে থেকে পারবো না। সেক্ষেত্রে আমাদের মেথড তৈরি করতে হবে সেটাকে edit or access করার জন্য।

- Protected
  </br>
  Protected করা কোড আমরা বাহিরে থেকে access করতে পারবো না কিন্তু আমরা যদি extends করি অর্থাৎ Inheritance করি ওই ক্লাসকে তাহলে সেই Protected কোডকে আমরা access, read, update করতে পারবো।

- ReadOnly
  </br>
  ReadOnly করা থাকলে আমরা শুধুমাত্র read করতে পারবো ডাটা কিন্তু কোনো update করতে পারবো না।

</br>

# Function Signature

Function Signature দ্বারা আমরা বলে দিতে পারি যে আমাদের ফাংশনটি কতগুলো প্যারামিটার নিবে, কি রিটার্ন করবে, প্যারামিটারগুলো কোন টাইপের হবে এইগুলো। এতে করে আমাদের কোডগুলো রিডেবল হয় এবং আমরা যখন ফাংশনটি ব্যবহার করতে যাবো তখন অটোমেটিক আমাদের সাজেস্ট করা হয় যে তোমার ফাংশন এই এই জিনিসগুলো চায় তোমাকে এইগুলোই দিতে হবে। এবং এর মাধ্যমে ইরর কমে যায়। নিচে ২টি এক্সাম্পল দেওয়া হলোঃ

```js
// Example 1
let greet: (name: string) => void;

greet = (name: string) => {
  console.log(`My name is ${name}`);
};
greet("John");

// Example 2
let calc: (a: number, b: number, c: string) => number;

calc = (numOne: number, numTwo: number, action: string) => {
  if (action === "add") {
    return numOne + numTwo;
  } else {
    return numOne - numTwo;
  }
};
calc(5, 10, "add");
```

যখন আমরা Function Signature ব্যাবহার করবো কোনো ফাংশনের জন্য তখন আমাদের আগে ফাংশনটি ডিফাইন করে নিতে হয় সে কি কি কাজ করবে ( মানে তার বডি কি হবে ), সে কোন কোন টাইপের প্যারামিটার গ্রহণ করবে এবং কি রিটার্ন করবে এগুলো দিয়ে। তারপর যখন আমরা সেই ফাংশন ব্যবহার করতে যাবো তখন আমাদেরকে সাজেস্ট করা হবে যে এই ফাংশনে আমাদের এই এই জিনিস দিতে হবে আর না দিলে ইরর দেওয়া হবে আমাদের।

</br>

# Interface

Interface এর মাধ্যমে ডেটা টাইপ টেম্পলেট তৈরি করতে পারবো। যেটা আমরা চাই অনেক জায়গায় ব্যবহার করতে। এর মাধ্যমে আমাদের বারবার একই টাইপ লিখার প্রয়োজন হবে না আমরা একটি জায়গায় Interface এর সাহায্যে টেম্পলেট তৈরি করে রেখে দিবো তারপর বার বার ব্যবহার করতে পারবো। নিচে তার কোড দেখানো হলোঃ

```js
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
```

উপরে Interface এর সাহায্যে একটি ডেটা টাইপ টেম্পলেট বানানো হয়েছে যেটা অনেক জায়গায় ব্যবহার করা হয়েছে।

</br>

# Generic

Generic ব্যবহার করে আমরা আমাদের ডেটা টাইপ এমন করতে পারবো যে যেকোনো ডেটা দিলেও প্রোগ্রামে কোনো ইরর আসবে না। মানে যখন আমাদের প্রোগ্রামে যেকোনো টাইপের ডেটা আসতে পারে সম্ভাবনা রয়েছে সেক্ষেত্রে আমরা Generic ব্যবহার করতে পারি কারণ এটি আমাদের যেকোনো রকমের ডেটা টাইপ রিসিব করতে সাহায্য করে। নিচে ৩টি example দেওয়া হলোঃ

```js
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
```

Generic ডিফাইন করার জন্য আমাদের `<>` দিতে হবে এবং এর মধ্যে আমাদের যে নাম দেওয়ার সেটা দিবো ( নামটি ডেটা টাইপের জায়গায় ব্যবহার করা হবে )। এবং মাল্টিপলের জন্যও দেখানো হয়েছে।
