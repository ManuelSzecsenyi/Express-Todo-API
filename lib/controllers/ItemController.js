"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _Item = _interopRequireDefault(require("../models/Item"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Item = {
  create: function create(req, res) {
    if (!req.body.text && !req.body.done) {
      return res.status(400).send({
        'message': 'All fields are required'
      });
    }

    var item = _Item["default"].create(req.body);

    return res.status(201).send(item);
  },
  getAll: function getAll(req, res) {
    var items = _Item["default"].getAll();

    console.log("Fetched items", items.length, "items.");
    return res.status(200).send(items);
  },
  updateItem: function updateItem(req, res) {
    if (!req.body.text && !req.body.done) {
      return res.status(400).send({
        'message': 'All fields are required'
      });
    }

    var item = _Item["default"].update(req.body);

    return res.status(200).send(item);
  }
};
var _default = Item;
exports["default"] = _default;