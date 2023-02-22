const db = require("../models/index.js");
const Admin = db.admin;

exports.save =  async (payload) => {
    const admin = await Admin.create(payload);
  
    return admin;
  };

  exports.findByEmail = async (email) => {
    const adminByEmail = await Admin.findOne({ where: { email: email } });
  
    return adminByEmail;
  };