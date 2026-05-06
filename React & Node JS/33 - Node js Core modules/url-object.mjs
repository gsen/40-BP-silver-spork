import querystring from "querystring";
const url = new URL("https://lms.com/course/1/lecture?role=student");

console.log(url);
console.log(url.hostname);
console.log(url.pathname);
console.log(url.searchParams.get("role"))
console.log(querystring.parse("role=student"))
console.log(querystring.stringify({ name: "gaurav", age: 21 }))