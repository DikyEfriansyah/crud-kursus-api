const express = require("express");
const cors = require("cors");
const router = express.Router();
const authMiddleware = require("../middleware/middleware.js");
const adminController = require("../controller/admin.controller");
const kategoriController = require("../controller/kategori.controller.js");
const userController = require("../controller/user.controller");
const kursusController = require("../controller/kursus.controller");
const aksesController = require("../controller/akses.controller");

var corsOptions = {
    origin: "*",
    optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
  };
  
  router.use(cors(corsOptions));
  
  router.get("/", (request, response) => {
    response.json("Index page");
  });
  //register login admin
  router.post("/api/authadmin/signup", adminController.createNewAdminApi);
  router.post("/api/authadmin/signin", adminController.signAdminApi);

  // CRUD Kategori
  router.get("/api/kategori", kategoriController.findAllKategoriApi);
  router.post("/api/kategori", kategoriController.createNewKategoriApi);
  router.get("/api/kategori/:id", kategoriController.findKategoriByIdApi);
  router.put("/api/kategori/:id", kategoriController.updateKategoriApi);
  router.delete("/api/kategori/:id", kategoriController.deleteKategoriApi);

  // CRUD kursus
  router.get("/api/kursus", kursusController.findAllKursusApi);
  router.post("/api/kursus", kursusController.createNewKursusApi);
  router.get("/api/kursus/:id", kursusController.findKursusByIdApi);
  router.put("/api/kursus/:id", kursusController.updateKursusApi);
  router.delete("/api/kursus/:id", kursusController.deleteKursusApi);

  //register login user 
  router.post("/api/auth/signup", userController.createNewUserApi);
  router.post("/api/auth/signin", userController.signUserApi);

  // CRUD Akses kursus
  router.get("/api/akses", aksesController.findAllAksesApi);
  router.post("/api/akses", aksesController.createNewAksesApi);
  router.get("/api/akses/:id", aksesController.findAksesByIdApi);
  router.put("/api/akses/:id", aksesController.updateAksesApi);
  router.delete("/api/akses/:id", aksesController.deleteAksesApi);


  module.exports = router;