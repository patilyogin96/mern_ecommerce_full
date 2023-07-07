const check =
  (...roles) =>
  (req, res, next) => {
    console.log("ROlesss", ...roles, req.user);
    if (!req.user) {
      return res.status(401).send("Unauthorized");
    }

    const hasRole = roles.find((role) => req.user.role === role);
    if (!hasRole) {
      return res.status(403).send("You are not allowed to make this request.");
    }

    return next();
  };

const role = { check };
module.exports = role;

// study
// JavaScript function that creates a middleware function for role-based authorization in an Express.js application. It utilizes higher-order functions and closures to create a reusable middleware.
