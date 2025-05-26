let names: Array<string> = ["max", "trường"];

type DataStore<T> = {
  [key: string]: T;
};

type ArrayCT<T> = T[];

let store: DataStore<any> = {};
store.id = 5;
store.isTrue = false;
store.name = "store";

let id: ArrayCT<number> = [0, 1, 2];

function merge<T, U>(a: T, b: U) {
  return [a, b];
}

console.log(merge("Trường", 23));

function mergeObj<T extends object, U extends object>(a: T, b: U) {
  return { ...a, ...b };
}

console.log(mergeObj({ 1: 2 }, { 2: 3 }));

class User<T> {
  constructor(public id: T) {}
}

const user = new User({ id1: 12345 });
console.log(user.id);
