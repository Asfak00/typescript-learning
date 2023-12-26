# Table of content

- [Introduction](#What-is-TypeScript)
- [Installation](#TypeScript-Install)
- [How works TypeScript](#How-works-TypeScript)
- [Data Types](#Data-Types)

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
let Number = 013; // Number
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
