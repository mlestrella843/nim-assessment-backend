const MenuItems = require("../db/models/menuItems.js");

const getAll = async (req, res) => {
  try {
    const menu = await MenuItems.getAll();
    res.send(menu);
  } catch (error) {
    res.status(500).send(error);
  }
};

const getOne = async (req, res) => {
  try {
    const menu = await MenuItems.getOne(req.params.id);
    res.send(menu);
  } catch (error) {
    res.status(500).send(error);
  }
};

const create = async (req, res) => {
  try {
    const menu = await MenuItems.create(req.body);
    res.send(menu);
  } catch (error) {
    res.status(500).send(error);
  }
};

const updated = async (req, res) => {
  try {
    const { id } = req.params;
    const { body } = req;
    const menu = await MenuItems.updateMenuItem(id, body);
    res.send(menu);
    // console.log("This is the new menu:", menu);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};

const deleteItem = async (req, res) => {
  try {
    const { id } = req.params;
    const item = await MenuItems.deleteMenuItem(id);
    console.log("This is the Item deleted:", item);
    console.log("Item was deleted!", id);
    res.send(id);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};

const searchItem = async (req, res) => {
  const { q } = req.query;
  try {
    const itemByQuery = await MenuItems.searchByDescription(q);
    res.send(itemByQuery);
  } catch (error) {
    res.status(500).json({ error: "Error searching" });
  }
};

module.exports = { getAll, getOne, create, updated, deleteItem, searchItem };
