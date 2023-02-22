const { request, response } = require("express")
const aksesService = require("../service/akses.service.js")

exports.createNewAksesApi = async (request, response) => {
    const akses = await aksesService.createNewAkses(request)

    response.status(201).json({ data: akses });
}

exports.findAllAksesApi = async (request, response) => {
    const akses = await aksesService.findAllAkses()

    response.status(201).json({ data: akses });
}

exports.findAksesByIdApi = async (request, response) => {
    const akses = await aksesService.findAksesById(request.params.id);

    if (akses != null) {
        response.status(201).json({ data: akses });
    } else {
        response.status(404).json({ error: `Akses not found with id ${request.params.id}` });
    }
}

exports.updateAksesApi = async (request, response) => {
    const akses = await aksesService.updateAkses(request, request.params.id);
  
    if (akses == null) {
      response.status(404).json({ error: "You're not seller or Kategori not found!!" });
    } else {
      response.status(201).json({ message: "Updated successfully" });
    }
  };

  exports.deleteAksesApi = async (request, response) => {
    const aksesById = await aksesService.findAksesById(request.params.id);
  
    if (aksesById == null) {
      response.status(404).json({ error: `Akses not found with ids : ${request.params.id}` });
    } else {
      aksesService.deleteAkses(aksesById);
      response.json({ message: "Deleted successfully" });
    }
  };