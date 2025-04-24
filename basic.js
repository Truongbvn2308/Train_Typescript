function add(a, b) {
  return a + b;
}
function log(message) {
  console.log(message);
}
function logAndThrow(errorMessage) {
  console.log(errorMessage);
  throw new Error(errorMessage);
}
function typeFunction(fn) {
  fn("akl"); //sdfsdsfdjkhbjkhbbjxzsdgsfdgsdfd11111
}
typeFunction(log);
console.log(add(0, 1));
var hobbies = ["sports", 5];
hobbies.push("cooking");
hobbies.splice(1, 1);
console.log(hobbies);
var users = [];
var user = {
  name: "truong",
  age: 23,
  hobbies: ["sports", "cooking"],
  role: {
    description: "admin",
    id: 102190343,
  },
};
users.push(user);
console.log(user.role.description);
var record;
record = { name: 0 };
// enum
var Role;
(function (Role) {
  Role[(Role["Admin"] = 1)] = "Admin";
  Role[(Role["editor"] = 2)] = "editor";
  Role[(Role["Guest"] = 3)] = "Guest";
})(Role || (Role = {}));
var userRole = 1;
// Literal Types: đặt các giá trị cụ thể làm kiểu dữ liệu
var roleUser;
roleUser = "editor";
var math;
math = { name: "Toán 11", id: 0 };
