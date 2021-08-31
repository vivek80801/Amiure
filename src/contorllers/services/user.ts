import { saveToDatabase } from "./microservices/user";
export module User {
  export class myUser {
    username: string;
    email: string;
    password: string;
    constructor(username: string, email: string, password: string) {
      this.username = username;
      this.email = email;
      this.password = password;
    }
    save() {
      saveToDatabase(this.username, this.email, this.password);
    }
  }
}
