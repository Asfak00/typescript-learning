# Table of content

- [Introduction](#What-is-TypeScript)
- [Installation](#TypeScript-Install)
- [How works TypeScript](#How-works-TypeScript)

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
