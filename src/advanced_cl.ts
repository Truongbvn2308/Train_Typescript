// setters-getters
class User {
  protected firstName: string = "";
  private lastName: string = "";
  set FirstName(name: string) {
    this.firstName = name;
  }
  set LastName(name: string) {
    this.lastName = name;
  }
  get fullName() {
    return this.firstName + " " + this.lastName;
  }

  static eid = "USER";
  static greet() {
    console.log("Hello!");
  }
}

const Max = new User();
Max.FirstName = "Truong";
Max.LastName = "Bui";
console.log(Max.fullName);
console.log(User.eid);
User.greet();

//Ke thua
class Employee extends User {
  constructor(public jobTitle: string) {
    super();
  }

  work() {
    this.firstName;
  }
}

//Lop truu tuong
abstract class UIElement {
  constructor(public identifier: string) {}
  clone(targetLocation: string) {}
}
// let uiElement = new UIElement()

class SideDrawerElement extends UIElement {
  constructor(public id: string, public position: "left" | "right") {
    super(id);
  }
}
