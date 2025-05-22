class User {
  readonly role = "admin";
  constructor(public name: string, public age: number) {}
}

let Max = new User("Max", 36);
// Max.role = 'user'
console.log(Max);
