const db = require('../models/index.js')
const Akses = db.akses
const User = db.user
const Kursus = db.kursus

exports.save = async (akses) => {
    return await Akses.create(akses);
  };
  
  exports.findAll = async () => {
    return await Akses.findAll({include : [{model : User}, {model : Kursus}]});
  };
  
  exports.findById = async (id) => {
    return await Akses.findByPk(id, {include : [{model : User}, {model : Kursus}]});
  };
  
  exports.update = async (akses, ids) => {
    return await Akses.update(akses, { where: { id: ids }});
  };
  
  exports.delete = async (akses) => {
    akses.destroy();
  };