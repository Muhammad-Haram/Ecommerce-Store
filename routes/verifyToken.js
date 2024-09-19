import jwt from "jsonwebtoken";

export const verifyToken = (req, res, next) => {
  const authHeader = req.headers.token;

  if (authHeader) {
    jwt.verify(token, process.env.JWT_SEC, (err, user) => {
      if (err) {
        res.status(401).json("token is not valid");
      }

      req.user = user;
      next();
    });
  } else {
    res.status(401).json("you are not authenticated");
  }
};
