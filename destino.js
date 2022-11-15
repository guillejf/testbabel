"use strict";

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
var array = [1, 2, 3, 4];
array.map(function (num) {
  return num * 10;
}).forEach(function (res) {
  return console.log(res);
});
var Persona = /*#__PURE__*/_createClass(function Persona() {
  _classCallCheck(this, Persona);
  this.name = "guille";
  this.edad = 40;
});
var guille = new Persona();
console.log(JSON.stringify(guille));
