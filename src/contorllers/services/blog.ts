import { saveBlogToDatabase } from "./microservices/blog";
export module Blog {
  export class myBlog {
    title: string;
    discreaption: string;
    user: any;
    constructor(title: string, discreaption: string, user: any) {
      this.title = title;
      this.discreaption = discreaption;
      this.user = user;
    }
    save() {
      console.log("saving user");
      saveBlogToDatabase(this.title, this.discreaption, this.user);
    }
  }
}
