const kategoriRepository = require("../repository/kategori.repository.js")

exports.createNewKategori = async (payload) => {
    const kategori = {
        name : payload.fields.name
    }

    return await kategoriRepository.save(kategori)
}

exports.findAllKategori = async () => {
    return await kategoriRepository.findAll()
}

exports.findKategoriById = async (id) => {
    return await kategoriRepository.findById(id)
}

exports.updateKategori = async (payload, ids) => {
    const kategori = {
        name : payload.fields.name
    }

    return await kategoriRepository.update(kategori, ids);
}

exports.deleteKategori = async (id) => {
    return await kategoriRepository.delete(id)
}