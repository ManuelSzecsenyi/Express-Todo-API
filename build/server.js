"use strict";

var _express = _interopRequireDefault(require("express"));

var _ItemController = _interopRequireDefault(require("../src/controllers/ItemController"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var app = (0, _express["default"])();
app.use(_express["default"].json());
app.get("/", _ItemController["default"].getAll);
app.post("/", _ItemController["default"].create);
app.put("/", _ItemController["default"].updateItem);
app.listen(process.env.PORT || 5000)
console.log('Express API running on port ', 3000);