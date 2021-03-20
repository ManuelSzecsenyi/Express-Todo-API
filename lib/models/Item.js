"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _uuid = require("uuid");

var _dayjs = _interopRequireDefault(require("dayjs"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var TodoItems = /*#__PURE__*/function () {
  function TodoItems() {
    _classCallCheck(this, TodoItems);

    this.todoItems = [];
  }

  _createClass(TodoItems, [{
    key: "create",
    value: function create(item) {
      var newItem = {
        id: (0, _uuid.v4)(),
        text: item.text,
        done: item.done,
        createdAt: (0, _dayjs["default"])()
      };
      this.todoItems.push(newItem);
      return newItem;
    }
  }, {
    key: "getAll",
    value: function getAll() {
      return this.todoItems;
    }
  }, {
    key: "update",
    value: function update(updatedItem) {
      var item = this.todoItems.find(function (item) {
        return item.id === updatedItem.id;
      });
      var index = this.todoItems.indexOf(item);
      this.todoItems[index].text = updatedItem.text;
      this.todoItems[index].done = updatedItem.done;
      return this.todoItems[index];
    }
  }]);

  return TodoItems;
}();

var _default = new TodoItems();

exports["default"] = _default;