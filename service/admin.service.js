const bcrypt = require("bcrypt");
const adminRepository = require("../repository/admin.repository");

exports.createAdmin = async (payload) => {
    const salt = await bcrypt.genSalt(10);
    const encryptedPassword = await bcrypt.hash(payload.fields.password, salt);
  
    const user = {
      name: payload.fields.name,
      email: payload.fields.email,
      password: encryptedPassword
    };
  
    return await adminRepository.save(user);
  };

  exports.signInAdmin = async (payload) => {
    const admin = await adminRepository.findByEmail(payload.fields.email);
  
    if (admin != null) {
      const checkPassword = await bcrypt.compare(payload.fields.password, admin.password);
  
      if (checkPassword) {
        return admin;
      } else {
        return null;
      }
    } else {
      return null;
    }
  };