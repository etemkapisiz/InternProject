"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var NotesAPI =
/*#__PURE__*/
function () {
  function NotesAPI() {
    _classCallCheck(this, NotesAPI);
  }

  _createClass(NotesAPI, null, [{
    key: "getAllNotes",
    value: function getAllNotes() {
      var notes = JSON.parse(localStorage.getItem("notesapp-notes") || "[]");
    }
  }, {
    key: "saveNote",
    value: function saveNote(noteToSave) {}
  }, {
    key: "deleteNote",
    value: function deleteNote(id) {}
  }]);

  return NotesAPI;
}();

exports["default"] = NotesAPI;