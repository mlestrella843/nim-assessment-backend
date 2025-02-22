const { Router } = require("express");
const menuController = require("../controllers/menuController");

const menuRouter = Router();

menuRouter.get("/", menuController.getAll);
menuRouter.get("/:id", menuController.getOne);
// menuRouter.get("/search", menuController.searchItem);
menuRouter.post("/", menuController.create);
menuRouter.put("/:id", menuController.updated);
menuRouter.delete("/:id", menuController.deleteItem);

module.exports = menuRouter;
