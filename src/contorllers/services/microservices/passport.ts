import passport from "passport";
import { Strategy } from "passport-local";

export const myPassport = (passport: passport.PassportStatic) => {
  passport.use(new Strategy((username, password, done) => {}));
};
