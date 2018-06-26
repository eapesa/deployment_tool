const auth = {};

auth.checkBasic = function(req, res, next) {
  const authHeader = req.headers["authorization"];
  if (authHeader === "AUTHORIZED_USER") {
    next();
  } else {
    res.status(401).send({
      code: "AUTH_FAILED",
      message: "Authorization failed"
    });
  }
}

export default auth;
