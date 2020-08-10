const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  const token = req.header("auth-token");
  if (!token) return res.status(404).send({ token: "No token found!" });

  try {
    const verifiedUser = jwt.verify(token, process.env.SECRET_TOKEN);
    req.user = verifiedUser;
    next();
  } catch (e) {
    return res.status(400).send({ token: "Invalid" });
  }
};
