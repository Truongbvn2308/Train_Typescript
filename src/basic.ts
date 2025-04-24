function add(a: number, b: number): number {
  return a + b;
}

function log(message: string) {
  console.log(message);
}

function logAndThrow(errorMessage: string): never {
  console.log(errorMessage);
  throw new Error(errorMessage);
}

function typeFunction(fn: (m: string) => void) {
  fn("akl");
}
typeFunction(log);

console.log(add(0, 1));
let hobbies = ["sports", 5];
hobbies.push("cooking");
hobbies.splice(1, 1);

console.log(hobbies);
let users: Array<object> = [];
let user = {
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

let record: Record<string, any>;
record = { name: 0 };

// enum
enum Role {
  Admin = 1,
  editor,
  Guest,
}
let userRole: Role = 1;

// Literal Types: đặt các giá trị cụ thể làm kiểu dữ liệu
let roleUser: "admin" | "editor" | "guest";
roleUser = "editor";

// Alliasc& custom type
type Lesson = {
  name: string;
  id: number;
};
let math: Lesson;
math = { name: "Toán 11", id: 0 };
