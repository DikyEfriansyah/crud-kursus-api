const db = require('../models/index.js')
const Kategori = db.kategori

exports.save = async (kategori) => {
    return await Kategori.create(kategori);
  };
  
  exports.findAll = async () => {
    return await Kategori.findAll();
  };
  
  exports.findById = async (id) => {
    return await Kategori.findByPk(id);
  };
  
  exports.update = async (kategori, ids) => {
    return await Kategori.update(kategori, { where: { id: ids }});
  };
  
  exports.delete = async (kategori) => {
    kategori.destroy();
  };