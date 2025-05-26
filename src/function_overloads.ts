function getLength(val: string): string;
function getLength(val: any[]): number;
function getLength(val: string | any[]) {
  if (typeof val === "string") {
    return `${val.split(" ").length} words`;
  }
  return val.length;
}

const numofWords = getLength("Bui Van Nhat Truong");
const numItems = getLength(["Sports", "Cooking"]);

//index types
type DataStore = {
  [prop: string]: string | number;
};
let store: DataStore = {};
let someObj: Record<string, string | number> = {};
someObj.id = 5;
store.id = 5;
store.name = "Max";
console.log(store);
store.role = "user";
store.age = 23;
console.log(store);

let roles = ["admin", "guest"] as const;
// roles.push('user')
