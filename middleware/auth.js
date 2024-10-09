const authAdmin = (req, res, next) => {
  console.log("middleware running");
  const token = req.body?.token || "xyz";

  const isAuthenticated = token === "xyz";

  !isAuthenticated ? res.status(401).send("Unauthorized request") : next();
};
const authUser = (req, res, next) => {
  console.log("middleware user running");
  const token = req.body?.token || "xyz";

  const isAuthenticated = token === "xyz";

  !isAuthenticated ? res.status(401).send("Unauthorized request") : next();
};

module.exports = { authAdmin, authUser };
