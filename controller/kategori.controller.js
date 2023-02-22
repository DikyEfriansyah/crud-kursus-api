const { request, response } = require("express")
const kategoriService = require("../service/kategori.service.js")

exports.createNewKategoriApi = async (request, response) => {
    const kategori = await kategoriService.createNewKategori(request)

    response.status(201).json({ data: kategori });
}

exports.findAllKategoriApi = async (request, response) => {
    const kategori = await kategoriService.findAllKategori()

    response.status(201).json({ data: kategori });
}

exports.findKategoriByIdApi = async (request, response) => {
    const kategori = await kategoriService.findKategoriById(request.params.id);

    if (kategori != null) {
        response.status(201).json({ data: kategori });
    } else {
        response.status(404).json({ error: `Kategori not found with id ${request.params.id}` });
    }
}

exports.updateKategoriApi = async (request, response) => {
    const kategori = await kategoriService.updateKategori(request, request.params.id);
  
    if (kategori == null) {
      response.status(404).json({ error: "You're not seller or Kategori not found!!" });
    } else {
      response.status(201).json({ message: "Updated successfully" });
    }
  };

  exports.deleteKategoriApi = async (request, response) => {
    const kategoriById = await kategoriService.findKategoriById(request.params.id);
  
    if (kategoriById == null) {
      response.status(404).json({ error: `Kategori not found with ids : ${request.params.id}` });
    } else {
      kategoriService.deleteKategori(kategoriById);
      response.json({ message: "Deleted successfully" });
    }
  };