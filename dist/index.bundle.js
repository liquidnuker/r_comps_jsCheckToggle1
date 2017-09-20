/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "dist/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__styles_main_scss__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__styles_main_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__styles_main_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__js_jschecktoggle1_js__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__js_jschecktoggle1_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__js_jschecktoggle1_js__);




/***/ }),
/* 1 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 2 */
/***/ (function(module, exports) {

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var CheckToggle1 = function () {
  function CheckToggle1(opts) {
    _classCallCheck(this, CheckToggle1);

    // this.items = [];
    this.selectedItems = [];

    this.checkBoxes = opts.checkBoxes;
    this.selectedItemHolder = opts.selectedItemHolder;
    this.btnCheckAll = opts.btnCheckAll;
    this.btnUncheckAll = opts.btnUncheckAll;

    this.checkedAll = opts.checkedAll;
  }

  _createClass(CheckToggle1, [{
    key: "init",
    value: function init() {
      this.items = document.querySelectorAll(this.checkBoxes);
      this.addEvents();
      this.checkAll(this.checkedAll);
    }
  }, {
    key: "addEvents",
    value: function addEvents() {
      var _this = this;

      var itemArr = Array.prototype.slice.call(this.items);

      var self = this;
      itemArr.forEach(function (i) {
        i.addEventListener("click", function (event) {
          self.check(event.target);
        });
      });

      document.getElementById(this.btnCheckAll).addEventListener("click", function () {
        _this.checkAll(true);
      });

      document.getElementById(this.btnUncheckAll).addEventListener("click", function () {
        _this.checkAll(false);
      });
    }
  }, {
    key: "check",
    value: function check(item) {
      var selectedItems = this.selectedItems;

      if (item.checked) {
        selectedItems.push(item.value);
      } else {
        var index = selectedItems.indexOf(item.value);
        selectedItems.splice(index, 1);
      }
      this.refresh();
    }
  }, {
    key: "checkAll",
    value: function checkAll(checked) {
      var selectedItems = this.selectedItems;
      var items = this.items;

      for (var i in items) {
        items[i].checked = checked;
      }

      // push / empty selectedItems
      if (checked) {
        selectedItems = [];
        // for NodeList
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = items[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var _i = _step.value;

            selectedItems.push(_i.value);
          }
        } catch (err) {
          _didIteratorError = true;
          _iteratorError = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion && _iterator.return) {
              _iterator.return();
            }
          } finally {
            if (_didIteratorError) {
              throw _iteratorError;
            }
          }
        }
      } else {
        selectedItems = [];
      }

      this.items = items;
      this.selectedItems = selectedItems;
      this.refresh();
    }
  }, {
    key: "refresh",
    value: function refresh() {
      document.getElementById(this.selectedItemHolder).innerHTML = this.selectedItems;
    }
  }]);

  return CheckToggle1;
}();

// jscheck1-01


var CT1 = new CheckToggle1({
  checkBoxes: ".jscheck1-01 > input",
  selectedItemHolder: "jscheck1-01_selectedItems",
  btnCheckAll: "jscheck1-01_btn_checkAll",
  btnUncheckAll: "jscheck1-01_btn_unCheckAll",
  checkedAll: true // default
});
CT1.init();

// jscheck1-02
var CT2 = new CheckToggle1({
  checkBoxes: ".jscheck1-02 > input",
  selectedItemHolder: "jscheck1-02_selectedItems",
  btnCheckAll: "jscheck1-02_btn_checkAll",
  btnUncheckAll: "jscheck1-02_btn_unCheckAll",
  checkedAll: true // default
});
CT2.init();

// jscheck1-03
var CT3 = new CheckToggle1({
  checkBoxes: ".jscheck1-03 > input",
  selectedItemHolder: "jscheck1-03_selectedItems",
  btnCheckAll: "jscheck1-03_btn_checkAll",
  btnUncheckAll: "jscheck1-03_btn_unCheckAll",
  checkedAll: true // default
});
CT3.init();

/***/ })
/******/ ]);