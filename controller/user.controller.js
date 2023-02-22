const userService = require("../service/user.service.js");
const jwtUtill = require("../util/jwt.util.js");

exports.createNewUserApi = async (req, res) => {
  const user = await userService.createUser(req);

  res.status(201).json({ data: user });
  console.log(user);
};

exports.signUserApi = async (req, res) => {
  const user = await userService.signInUser(req);
  if (user) {
    const payloadToken = {
      id: user.id,
      email: user.email,
    };

    const tokens = await jwtUtill.generateToken(payloadToken);

    res.status(200).json({ token: tokens });
  } else {
    res.status(401).json({ error: "Unauthorized access" });
  }
};
