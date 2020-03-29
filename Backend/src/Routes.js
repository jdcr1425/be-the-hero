const express = require("express");
const ongController = require("./controllers/ongController");
const incidentController = require("./controllers/incidentController");
const sessionController = require("./controllers/sessionController");

const routes = express.Router();

routes.get("/ongs",ongController.index);

routes.post("/ongs", ongController.create);

routes.post("/incidents", incidentController.create);
routes.get("/incidents",incidentController.index);
routes.delete("/incidents/:id",incidentController.delete);
routes.get("/incidentes",incidentController.IncidentsByOng);

routes.post("/session", sessionController.create);



module.exports = routes;