const aksesRepository = require("../repository/akses.repository.js")

exports.createNewAkses = async (payload) => {
    const akses = {
        id_user : payload.fields.id_user,
        id_kursus : payload.fields.id_kursus
    }

    return await aksesRepository.save(akses)
}

exports.findAllAkses = async () => {
    return await aksesRepository.findAll()
}

exports.findAksesById = async (id) => {
    return await aksesRepository.findById(id)
}

exports.updateAkses = async (payload, ids) => {
    const akses = {
        id_user : payload.fields.id_user,
        id_kursus : payload.fields.id_kursus
    }

    return await aksesRepository.update(akses, ids);
}

exports.deleteAkses = async (akses) => {
    aksesRepository.delete(akses)
}