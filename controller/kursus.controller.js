const { request, response } = require("express")
const kursusService = require("../service/kursus.service.js")

exports.createNewKursusApi = async (request, response) => {
    const kursus = await kursusService.createNewKursus(request)

    response.status(201).json({ data: kursus });
}

exports.findAllKursusApi = async (request, response) => {
    const kursus = await kursusService.findAllKursus()

    response.status(201).json({ data: kursus });
}

exports.findKursusByIdApi = async (request, response) => {
    const kursus = await kursusService.findKursusById(request.params.id);

    if (kursus != null) {
        response.status(201).json({ data: kursus });
    } else {
        response.status(404).json({ error: `Kursus not found with id ${request.params.id}` });
    }
}

exports.updateKursusApi = async (request, response) => {
    const kursus = await kursusService.updateKursus(request, request.params.id);
  
    if (kursus == null) {
      response.status(404).json({ error: "You're not seller or Kursus not found!!" });
    } else {
      response.status(201).json({ message: "Updated successfully" });
    }
  };

  exports.deleteKursusApi = async (request, response) => {
    const kursusById = await kursusService.findKursusById(request.params.id);
  
    if (kursusById == null) {
      response.status(404).json({ error: `Kursus not found with ids : ${request.params.id}` });
    } else {
      kursusService.deleteKursus(kursusById);
      response.json({ message: "Deleted successfully" });
    }
  };