const { Timestamp } = require("mongodb");
const mongoose = require("../db.js");

const menuItemsSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  price: {
    type: Number,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  imageUrl: {
    type: String
  },
});
menuItemsSchema.set("toJSON", {
  virtuals: true
});
// menu model
const MenuItems = mongoose.model("MenuItems", menuItemsSchema);

const getAll = async () => {
  try {
    const menuItems = await MenuItems.find();
    return menuItems;
  } catch (error) {
    return error;
  }
};

const getOne = async (id) => {
  try {
    const menuItem = await MenuItems.findById(id);
    return menuItem;
  } catch (error) {
    return error;
  }
};

const create = async (body) => {
  try {
    const menuItem = await MenuItems.create(body);
    return menuItem;
  } catch (error) {
    return error;
  }
};

const updateMenuItem = async (id, body) => {
  try {
    const updatedMenuItem = await MenuItems.findByIdAndUpdate(id,{$set:body},{new:true}); // Esto asegura que devuelva el documento actualizado);
    return updatedMenuItem;
  } catch (error) {
    return error;
  }
};

const deleteMenuItem = async (id) => {
  try {   
    const ItemDeleted = await MenuItems.findByIdAndDelete(id);
    return ItemDeleted;
  } catch (error) {
    return error;
  }
};

const serchByDescription = async (query) => {
  try {
    const menuItem = await MenuItems.find(query);
    return menuItem;
  } catch (error) {
    return error;
  }
};

module.exports = { getAll, getOne, create, updateMenuItem, deleteMenuItem, serchByDescription, MenuItems };
