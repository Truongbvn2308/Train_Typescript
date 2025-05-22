interface Authenticatable {
  email: string;
  password: string;

  login(): void;
  logout(): void;
}

class AuthenticatableUser implements Authenticatable {
  constructor(
    public username: string,
    public email: string,
    public password: string
  ) {}
  login() {
    //...
  }
  logout() {
    //...
  }
}
// merging interfaces
// interface Authenticatable {
//   role: string;
// }

function authenticate(user: Authenticatable) {
  user.login();
}
let user: Authenticatable;

user = {
  email: "truong@gmail.com",
  password: "123456",
  login() {
    // reach out to a database, check credentials, create a session
  },
  logout() {
    // clear the session
  },
};
