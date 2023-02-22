const adminService = require("../service/admin.service.js");
const jwtUtill = require("../util/jwt.util.js");

exports.createNewAdminApi = async (req, res) => {
  const admin = await adminService.createAdmin(req);

  res.status(201).json({ data: admin });
  console.log(admin);
};

exports.signAdminApi = async (req, res) => {
  const admin = await adminService.signInAdmin(req);
  if (admin) {
    const payloadToken = {
      id: admin.id,
      email: admin.email,
    };

    const tokens = await jwtUtill.generateToken(payloadToken);

    res.status(200).json({ token: tokens });
  } else {
    res.status(401).json({ error: "Unauthorized access" });
  }
};