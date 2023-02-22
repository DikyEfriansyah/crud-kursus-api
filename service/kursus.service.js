const kursusRepository = require("../repository/kursus.repository.js")

exports.createNewKursus = async (payload) => {
    const kursus = {
        judul : payload.fields.judul,
        id_kategori : payload.fields.id_kategori
    }

    return await kursusRepository.save(kursus)
}

exports.findAllKursus = async () => {
    return await kursusRepository.findAll()
}

exports.findKursusById = async (id) => {
    return await kursusRepository.findById(id)
}

exports.updateKursus = async (payload, ids) => {
    const kursus = {
        judul : payload.fields.judul,
        id_kategori : payload.fields.id_kategori
    }

    return await kursusRepository.update(kursus, ids);
}

exports.deleteKursus = async (kursus) => {
    kursusRepository.delete(kursus)
}