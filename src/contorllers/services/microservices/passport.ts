import crypto from "crypto";
import passport from "passport";
import { Strategy } from "passport-local";
import { UserModal } from "../../../modals/user";
import { seceret } from "../../../contorllers/index";

export const myPassport = (passport: passport.PassportStatic) => {
  passport.use(
    new Strategy((username, password, done) => {
      UserModal.findOne({ username: username })
        .then((user) => {
          if (!user) {
            return done(JSON.stringify({ msg: "can not find user" }), false);
          } else {
            const newPassword = crypto
              .createHmac("sha256", seceret)
              .update(password)
              .digest("hex");
            if (user.password === newPassword) {
              return done(null, user);
            } else {
              return done(
                JSON.stringify({ msg: "password did not matched" }),
                false
              );
            }
          }
        })
        .catch((err) => console.log(err));
    })
  );
  passport.serializeUser((user: any, done) => {
    console.log(`Attempting to serialize ${user.id}`);
    done(null, user.id);
  });
  passport.deserializeUser((userId, done) => {
    console.log(`Attempting to deserialize id ${userId}`);
    UserModal.findById(userId)
      .then((user) => {
        if (!user) {
          return done(JSON.stringify({ msg: "can not find user" }), false);
        } else {
          return done(null, user);
        }
      })
      .catch((err) => console.log(err));
  });
};
