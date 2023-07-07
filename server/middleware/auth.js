const passport = require("passport");
const jwt = require("jsonwebtoken");
const auth = (req, res, next) => {
  passport.authenticate("jwt", { session: false }, (err, user, info) => {
    // console.log("here", user);

    if (err) {
      // Handle any authentication errors
      return res.status(500).json({ message: "Internal Server Error" });
    }

    if (!user) {
      // User is not authorized
      return res.status(401).json({ message: "Unauthorized" });
    }

    // User is authorized, continue to the next middleware or route handler
    req.user = user;
    next();
  })(req, res, next);
};

module.exports = auth;
