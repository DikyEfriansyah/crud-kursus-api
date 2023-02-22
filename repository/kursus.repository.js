const db = require('../models/index.js')
const Kursus = db.kursus
const Kategori = db.kategori

exports.save = async (kursus) => {
    return await Kursus.create(kursus);
  };
  
  exports.findAll = async () => {
    return await Kursus.findAll({include : {model : Kategori}});
  };
  
  exports.findById = async (id) => {
    return await Kursus.findByPk(id, {include : {model : Kategori}});
  };
  
  exports.update = async (kursus, ids) => {
    return await Kursus.update(kursus, { where: { id: ids }});
  };
  
  exports.delete = async (kursus) => {
    kursus.destroy();
  };