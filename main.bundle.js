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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./src/css/base.scss":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./src/css/base.scss ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".add-booking-button {\n  font-family: \"Spectral SC\", serif;\n  margin-top: 20px;\n  margin-bottom: 0px;\n  width: 200px;\n  outline: none;\n  border: solid black 1px; }\n\n.add-booking-button:hover {\n  background-color: darkgrey;\n  cursor: pointer; }\n\n.back-to-book-button {\n  font-family: \"Spectral SC\", serif;\n  margin: 0px;\n  width: 200px;\n  height: 30px;\n  outline: none;\n  border: solid black 1px; }\n\n.back-to-book-button:hover {\n  background-color: darkgrey;\n  cursor: pointer; }\n\n.booked-room {\n  margin: 20px;\n  background-color: #4d79ff;\n  font-family: \"Spectral SC\", serif;\n  border-radius: 5px;\n  color: white;\n  width: 100px; }\n\n.cannot-delete {\n  font-family: \"Spectral SC\", serif;\n  margin: 20px;\n  width: 100px;\n  background-color: lightgrey;\n  outline: none;\n  border: solid black 1px; }\n\n.customer-book-button {\n  font-family: \"Spectral SC\", serif;\n  margin: 20px;\n  width: 100px;\n  outline: none;\n  border: solid black 1px; }\n\n.customer-book-button:hover {\n  background-color: darkgrey;\n  cursor: pointer; }\n\n.delete-booking-button {\n  font-family: \"Spectral SC\", serif;\n  margin: 5px 10px 10px 10px;\n  outline: none;\n  border: solid black 1px; }\n\n.delete-booking-button:hover {\n  background-color: darkgrey;\n  cursor: pointer; }\n\n.deleted-room {\n  margin: 5px 20px 5px;\n  padding: 10px;\n  width: 100px;\n  background-color: darkred;\n  font-family: \"Spectral SC\", serif;\n  border-radius: 5px;\n  color: white;\n  width: 100px; }\n\n.filter-button {\n  font-family: \"Spectral SC\", serif;\n  font-size: 15px;\n  width: 150px;\n  margin-left: 28%;\n  margin-top: 10px;\n  outline: none;\n  border: solid black 1px; }\n\n.filter-button:hover {\n  background-color: darkgrey;\n  cursor: pointer; }\n\n.search-button {\n  font-family: \"Spectral SC\", serif;\n  margin: 40px 10px 40px 0px;\n  width: 100px;\n  outline: none;\n  border: solid black 1px; }\n\n.search-button:hover {\n  background-color: darkgrey;\n  cursor: pointer; }\n\n.signout-button {\n  position: absolute;\n  left: 90%;\n  top: 3%;\n  width: 100px;\n  font-family: \"Spectral SC\", serif;\n  outline: none;\n  border: solid black 1px; }\n\n.signout-button:hover {\n  background-color: darkgrey;\n  cursor: pointer; }\n\n.submit-button {\n  font-family: \"Spectral SC\", serif;\n  margin-top: 30px;\n  margin-bottom: 10px;\n  outline: none;\n  border: solid black 1px; }\n\n.submit-button:hover {\n  background-color: darkgrey;\n  cursor: pointer; }\n\n.tag-button {\n  padding: 0px;\n  margin: 0px;\n  display: none;\n  outline: none;\n  border: solid black 1px; }\n\n.tag-button:hover {\n  background-color: darkgrey;\n  cursor: pointer; }\n\n.view-bookings-button {\n  display: flex;\n  padding: 0px 40px 0px 40px;\n  border: solid 1px;\n  border-radius: 5px;\n  height: 30px;\n  outline: none;\n  border: solid black 1px; }\n\n.view-bookings-button:hover {\n  background-color: darkgrey;\n  cursor: pointer; }\n\n.today-booking-card {\n  display: flex;\n  border: solid black 1px;\n  border-radius: 5px;\n  margin: 10px 5% 10px 5%;\n  font-family: \"Spectral SC\", serif; }\n\n.booking-info {\n  width: 75%;\n  padding-left: 20px; }\n\n.manager-booking-card {\n  display: flex;\n  font-family: \"Spectral SC\", serif; }\n\n.manager-booking-date {\n  width: 200px;\n  margin: 10px 0px 10px 100px; }\n\n.manager-booking-roomtype {\n  width: 250px;\n  margin: 10px 0px 10px 0px; }\n\n.manager-booking-roomnum {\n  width: 100px;\n  margin: 10px 40px 10px 0px; }\n\n.manager-booking-cost {\n  width: 150px;\n  margin: 10px 40px 10px 5px; }\n\n.manager-booking-id {\n  width: 180px;\n  margin: 10px 40px 10px 0px; }\n\n.manager-booking-roomtype2 {\n  width: 200px;\n  margin: 10px 40px 10px 70px; }\n\n.manager-booking-numbeds {\n  width: 100px;\n  margin: 10px 40px 10px 0px; }\n\n.manager-booking-bidet {\n  width: 100px;\n  margin: 10px 15px 10px 0px; }\n\n.manager-booking-roomnum2 {\n  width: 100px;\n  margin: 10px 20px 10px 20px; }\n\n.manager-booking-cost2 {\n  width: 80px;\n  margin: 10px 10px 10px 0px; }\n\n.no-bookings {\n  display: flex;\n  justify-content: center;\n  font-family: \"Spectral SC\", serif;\n  font-size: 20px;\n  margin-top: 10%; }\n\n.room-type {\n  font-size: 30px;\n  margin-bottom: 0px;\n  margin-top: 5px; }\n\n.room-number {\n  margin-bottom: 0px;\n  margin-top: 10px; }\n\n.room-price {\n  font-family: \"Spectral SC\", serif;\n  font-size: 35px;\n  margin-right: 22px; }\n\n.stay-date {\n  margin-bottom: 0px;\n  margin-top: 0px; }\n\n.customer-name {\n  margin-bottom: 0px;\n  margin-top: 0px; }\n\n.confirmation-number {\n  margin-bottom: 0px;\n  margin-top: 0px; }\n\n.delete-booking {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding-left: 30px;\n  border-left: solid black 1px; }\n\n.book-room {\n  font-family: \"Spectral SC\", serif;\n  margin: 0px 10px 10px 10px; }\n\n.display-customer-rooms {\n  background-color: #fefefe;\n  width: 90%;\n  font-size: 16px; }\n\n.booking-card-img {\n  height: 150px;\n  width: 200px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin: 20px;\n  border-radius: 5px; }\n\n.customer-booking {\n  border-left: solid black 1px;\n  width: 30%;\n  margin-left: 20px; }\n\n.customer-price {\n  font-family: \"Spectral SC\", serif;\n  font-size: 25px;\n  display: flex;\n  justify-content: center;\n  margin-top: 50px; }\n\n.modal {\n  display: none;\n  position: fixed;\n  z-index: 1;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  overflow: auto;\n  background-color: rgba(0, 0, 0, 0.4);\n  overflow: scroll; }\n\n.modal-content {\n  background-color: #fefefe;\n  margin: 10% auto;\n  padding: 10px;\n  border: 1px solid #888;\n  border-radius: 5px;\n  width: 80%;\n  height: 65%;\n  overflow: scroll; }\n\n.modal-title {\n  font-size: 35px;\n  margin-bottom: 10px;\n  margin-top: 20px; }\n\n.modal-banner {\n  object-fit: cover;\n  height: 350px; }\n\n.modal-header {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  font-family: \"Spectral SC\", serif;\n  padding: 2px 16px; }\n\n.modal-date {\n  width: 150px; }\n\n.modal-body {\n  padding: 2px 16px;\n  overflow: scroll; }\n\n.enter-credentials {\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  min-width: 150px;\n  width: 25%;\n  height: 340px;\n  margin-left: 38%;\n  margin-top: 6%;\n  border-radius: 5px;\n  background-color: white;\n  opacity: 0.7; }\n\n.username-login {\n  font-family: \"Open Sans\", sans-serif;\n  font-size: 16px;\n  margin: 20px 0px 10px 0px; }\n\n.password-login {\n  font-family: \"Open Sans\", sans-serif;\n  font-size: 16px;\n  margin: 30px 0px 10px 0px; }\n\n.error-message {\n  font-family: \"Open Sans\", sans-serif;\n  font-size: 13px;\n  color: black;\n  margin-left: 10px; }\n\nh2 {\n  font-family: \"Open Sans\", sans-serif;\n  margin-bottom: 5px; }\n\nh4 {\n  font-family: \"Spectral SC\", serif;\n  margin-bottom: 5px; }\n\n.login-info {\n  width: 75%;\n  outline: none; }\n\ninput[type=\"password\"] {\n  -webkit-text-security: disc; }\n\nbody {\n  background: url(\"https://www.jetsetter.com/wp-content/uploads/sites/7/2018/04/h-PooSFA.jpeg\");\n  background-size: 100%; }\n\nheader {\n  display: flex;\n  justify-content: center;\n  border-top-left-radius: 5px;\n  border-top-right-radius: 5px;\n  background-color: white;\n  opacity: 0.7; }\n\nh1 {\n  display: flex;\n  font-family: \"Spectral SC\", serif;\n  font-size: 40px;\n  margin-top: 20px;\n  margin-bottom: 0px; }\n\n.hotel-crest {\n  display: flex;\n  height: 100px;\n  width: 100px; }\n\n.hotel-info {\n  display: flex;\n  justify-content: center;\n  font-family: \"Open Sans\", sans-serif;\n  font-size: 12px;\n  margin-top: 0px;\n  padding-bottom: 10px;\n  border-bottom-left-radius: 5px;\n  border-bottom-right-radius: 5px;\n  background-color: white;\n  opacity: 0.7; }\n\n.manager-view {\n  border-radius: 5px;\n  background-color: white;\n  opacity: 0.7; }\n\n.overview-title {\n  font-family: \"Spectral SC\", serif;\n  display: inline-block;\n  margin: 40px 5px 40px 20px; }\n\n.hotel-overview-date {\n  margin: 40px 20px 40px 20px;\n  min-width: 120px; }\n\n.today-overview {\n  display: flex;\n  align-items: flex-start;\n  flex-wrap: wrap;\n  border-bottom: solid black 1px; }\n\n.overview-default {\n  display: flex;\n  flex-direction: column;\n  font-family: \"Spectral SC\", serif;\n  margin: 40px 40px 10px 10px; }\n\n.hotel-summary {\n  margin-right: 60px;\n  font-family: \"Spectral SC\", serif; }\n\n#overview-info {\n  display: flex;\n  flex-direction: column; }\n\n.overview {\n  display: flex;\n  justify-content: space-around;\n  font-family: \"Spectral SC\", serif; }\n\n.customer-search-bar {\n  display: flex;\n  margin-top: 0px;\n  font-size: 15px;\n  border-left: solid black 1px;\n  height: 110px; }\n\n.search-title {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin-top: 40px; }\n\n.search-customers {\n  margin: 40px 0px 0px 20px; }\n\nh3 {\n  font-family: \"Spectral SC\", serif;\n  margin-left: 30px; }\n\n.search-customer-name {\n  margin: 40px 10px 40px 20px;\n  width: 300px; }\n\nh5 {\n  font-family: \"Spectral SC\", serif;\n  font-size: 35px;\n  margin: 0px 0px 5px 0px;\n  display: flex;\n  justify-content: center; }\n\n.customer-info-headers {\n  list-style: none;\n  display: flex;\n  justify-content: space-around;\n  border: solid black 1px;\n  margin-left: 3.5%;\n  margin-right: 3.5%;\n  border-radius: 5px;\n  padding-top: 10px;\n  padding-bottom: 10px;\n  font-family: \"Spectral SC\", serif; }\n\n.view-information {\n  height: 350px;\n  border: solid black 1px;\n  margin: 0px 40px 0px 40px;\n  border-radius: 5px;\n  overflow: scroll; }\n\n.view-information::-webkit-scrollbar {\n  -webkit-appearance: none;\n  width: 7px; }\n\n::-webkit-scrollbar-thumb {\n  border-radius: 5px;\n  background-color: rgba(0, 0, 0, 0.5);\n  box-shadow: 0 0 1px rgba(255, 255, 255, 0.5); }\n\n#total-spent {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  font-family: \"Spectral SC\", serif;\n  font-size: 20px;\n  margin-top: 0px; }\n\n.customer-error-message {\n  font-family: \"Spectral SC\", serif;\n  font-size: 14px;\n  margin: 50px; }\n\n.footer {\n  height: 60px;\n  background-color: white;\n  opacity: 0.7; }\n\n.confirmation-message {\n  font-family: \"Spectral SC\", serif; }\n\n.customer-welcome {\n  height: 50px;\n  border-top-left-radius: 5px;\n  border-top-right-radius: 5px;\n  font-size: 35px;\n  font-family: \"Spectral SC\", serif;\n  display: flex;\n  justify-content: center;\n  padding-top: 10px;\n  margin-top: 5px;\n  margin-bottom: 0px;\n  background-color: white;\n  opacity: 0.7; }\n\n.customer-status {\n  font-family: \"Spectral SC\", serif;\n  margin-top: 20px;\n  margin-bottom: 0px;\n  padding-top: 0px;\n  border-bottom-left-radius: 5px;\n  border-bottom-right-radius: 5px;\n  display: flex;\n  justify-content: space-around;\n  font-size: 18px;\n  background-color: white;\n  opacity: 0.7; }\n\n.Gold {\n  height: 30px;\n  margin: 18px 0px 0px 0px;\n  display: flex;\n  padding: 0px 40px 0px 40px;\n  border: solid 1px;\n  border-radius: 5px;\n  color: #995c00;\n  background-color: #FFDF00; }\n\n.Silver {\n  height: 30px;\n  margin: 18px 0px 0px 0px;\n  display: flex;\n  padding: 0px 40px 0px 40px;\n  border: solid 1px;\n  border-radius: 5px;\n  color: black;\n  background-color: darkgrey; }\n\n.Bronze {\n  height: 30px;\n  margin: 18px 0px 0px 0px;\n  display: flex;\n  padding: 0px 40px 0px 40px;\n  border: solid 1px;\n  border-radius: 5px;\n  color: white;\n  background-color: #cd7f32; }\n\n.Blue {\n  height: 30px;\n  margin: 18px 0px 0px 0px;\n  display: flex;\n  padding: 0px 40px 0px 40px;\n  border: solid 1px;\n  border-radius: 5px;\n  color: white;\n  background-color: royalblue; }\n\n.filter-rooms {\n  height: 370px;\n  display: flex;\n  flex-direction: column;\n  margin-top: 20px;\n  padding-left: 0px;\n  border-radius: 5px;\n  width: 25%;\n  background-color: white;\n  opacity: 0.7; }\n\n.filter-title {\n  margin-left: 25%;\n  font-size: 25px; }\n\n.tag-image {\n  height: 80px;\n  width: 120px;\n  border-radius: 5px; }\n\n.tag-image:hover {\n  cursor: pointer; }\n\n.grow img {\n  transition: 1s ease; }\n\n.grow img:hover {\n  -webkit-transform: scale(1.2);\n  -ms-transform: scale(1.2);\n  transform: scale(1.2);\n  transition: 1s ease; }\n\n.tag-row {\n  display: flex;\n  justify-content: space-around; }\n\n.tag-name {\n  display: flex;\n  justify-content: space-around;\n  margin-bottom: 10px;\n  font-size: 12px;\n  list-style: none;\n  font-family: \"Spectral SC\", serif;\n  font-size: 15px; }\n\ninput[type=radio]:checked + label {\n  opacity: 0.2;\n  font-style: normal; }\n\n.view-available-rooms {\n  display: flex;\n  flex-direction: row; }\n\n.book-a-room {\n  font-family: \"Spectral SC\", serif;\n  margin: 20px 0px 5px 20px;\n  border-radius: 5px;\n  width: 75%;\n  font-size: 35px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  background-color: white;\n  opacity: 0.7; }\n\n.book-room-date {\n  width: 150px;\n  margin-bottom: 20px; }\n\n.filter-status {\n  font-family: \"Spectral SC\", serif;\n  font-size: 15px;\n  width: 80%;\n  margin-top: 30%;\n  margin-left: 30px; }\n\n.hidden {\n  display: none; }\n", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return '@media ' + item[2] + '{' + content + '}';
      } else {
        return content;
      }
    }).join('');
  }; // import a list of modules into the list


  list.i = function (modules, mediaQuery) {
    if (typeof modules === 'string') {
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    for (var i = 0; i < this.length; i++) {
      var id = this[i][0];

      if (id != null) {
        alreadyImportedModules[id] = true;
      }
    }

    for (i = 0; i < modules.length; i++) {
      var item = modules[i]; // skip already imported module
      // this implementation is not 100% perfect for weird media query combinations
      // when a module is imported multiple times with different media queries.
      // I hope this will never occur (Hey this way we have smaller bundles)

      if (item[0] == null || !alreadyImportedModules[item[0]]) {
        if (mediaQuery && !item[2]) {
          item[2] = mediaQuery;
        } else if (mediaQuery) {
          item[2] = '(' + item[2] + ') and (' + mediaQuery + ')';
        }

        list.push(item);
      }
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || '';
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */';
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;
  return '/*# ' + data + ' */';
}

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target, parent) {
  if (parent){
    return parent.querySelector(target);
  }
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target, parent) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target, parent);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertAt.before, target);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	if(options.attrs.nonce === undefined) {
		var nonce = getNonce();
		if (nonce) {
			options.attrs.nonce = nonce;
		}
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function getNonce() {
	if (false) {}

	return __webpack_require__.nc;
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = typeof options.transform === 'function'
		 ? options.transform(obj.css) 
		 : options.transform.default(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "./src/Booking.js":
/*!************************!*\
  !*** ./src/Booking.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Booking; });
class Booking {
  constructor(bookingData) {
    this.id = bookingData.id;
    this.userID = bookingData.userID;
    this.date = bookingData.date;
    this.roomNumber = bookingData.roomNumber;
    this.roomServiceCharges = bookingData.roomServiceCharges;
  }
}


/***/ }),

/***/ "./src/DOMelements.js":
/*!****************************!*\
  !*** ./src/DOMelements.js ***!
  \****************************/
/*! exports provided: backToBooking, bookARoom, bookingModal, bookRoomDate, bookRoomHeader, customerRooms, customerStatus, customerView, customerWelcome, enterCredentials, errorMessage, filterCategories, filterRefreshButton, filterSection, filterSubmitButton, hotelOverviewDate, managerView, modalContent, modalDate, modalTitle, overviewInfo, passwordInput, searchCustomerButton, searchCustomerInput, searchTitle, signOutButton, submitButton, usernameInput, viewBookingInfo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "backToBooking", function() { return backToBooking; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bookARoom", function() { return bookARoom; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bookingModal", function() { return bookingModal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bookRoomDate", function() { return bookRoomDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bookRoomHeader", function() { return bookRoomHeader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "customerRooms", function() { return customerRooms; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "customerStatus", function() { return customerStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "customerView", function() { return customerView; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "customerWelcome", function() { return customerWelcome; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "enterCredentials", function() { return enterCredentials; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "errorMessage", function() { return errorMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filterCategories", function() { return filterCategories; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filterRefreshButton", function() { return filterRefreshButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filterSection", function() { return filterSection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filterSubmitButton", function() { return filterSubmitButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hotelOverviewDate", function() { return hotelOverviewDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "managerView", function() { return managerView; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "modalContent", function() { return modalContent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "modalDate", function() { return modalDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "modalTitle", function() { return modalTitle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "overviewInfo", function() { return overviewInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "passwordInput", function() { return passwordInput; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "searchCustomerButton", function() { return searchCustomerButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "searchCustomerInput", function() { return searchCustomerInput; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "searchTitle", function() { return searchTitle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "signOutButton", function() { return signOutButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "submitButton", function() { return submitButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "usernameInput", function() { return usernameInput; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "viewBookingInfo", function() { return viewBookingInfo; });
let backToBooking = document.querySelector('.back-to-booking');
let bookARoom = document.querySelector('.book-a-room');
let bookingModal = document.querySelector('#add-booking-modal');
let bookRoomDate = document.querySelector('.book-room-date');
let bookRoomHeader = document.querySelector('.book-room-header');
let customerRooms = document.querySelector('.display-customer-rooms');
let customerStatus = document.querySelector('.customer-status');
let customerView = document.querySelector('.customer-view');
let customerWelcome = document.querySelector('.customer-welcome');
let enterCredentials = document.querySelector('.enter-credentials');
let errorMessage = document.querySelector('.error-message');
let filterCategories = document.getElementById('filter-categories');
let filterRefreshButton = document.querySelector('.filter-status');
let filterSection = document.querySelector('.filter-rooms');
let filterSubmitButton = document.querySelector('.filter-button');
let hotelOverviewDate = document.querySelector('.hotel-overview-date');
let managerView = document.querySelector('.manager-view');
let modalContent = document.querySelector('#modal-content');
let modalDate = document.querySelector('.modal-date');
let modalTitle = document.querySelector('.modal-title');
let overviewInfo = document.querySelector('#overview-info');
let passwordInput = document.querySelector('.password');
let searchCustomerButton = document.querySelector('#search-customer-button');
let searchCustomerInput = document.querySelector('.search-customer-name');
let searchTitle = document.querySelector('.search-title');
let signOutButton = document.querySelector('.signout-button');
let submitButton = document.querySelector('.submit-button');
let usernameInput = document.querySelector('.username');
let viewBookingInfo = document.querySelector('.view-information');


/***/ }),

/***/ "./src/Hotel-Service.js":
/*!******************************!*\
  !*** ./src/Hotel-Service.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return HotelService; });
/* harmony import */ var _User_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./User.js */ "./src/User.js");
/* harmony import */ var _Room_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Room.js */ "./src/Room.js");
/* harmony import */ var _Booking_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Booking.js */ "./src/Booking.js");




class HotelService {
  constructor(userData, roomData, bookingData) {
    this.rawUserData = userData;
    this.rawRoomData = roomData;
    this.rawBookingData = bookingData;
    this.allUsers = [];
    this.allRooms = [];
    this.allBookings = [];
  }

  start() {
    this.addUsers();
    this.addRooms();
    this.addBookings();
  }

  addUsers() {
    return this.rawUserData.map(data => {
      let user = new _User_js__WEBPACK_IMPORTED_MODULE_0__["default"](data);
      this.allUsers.push(user);
    })
  }

  addRooms() {
    return this.rawRoomData.map(data => {
      let room = new _Room_js__WEBPACK_IMPORTED_MODULE_1__["default"](data);
      this.allRooms.push(room);
    })
  }

  addBookings() {
    return this.rawBookingData.map(data => {
      let booking = new _Booking_js__WEBPACK_IMPORTED_MODULE_2__["default"](data);
      this.allBookings.push(booking);
    })
  }

  findUserName(username) {
    let findUserID = username.split(/(\d+)/);
    let userID = parseInt(findUserID[1]);
    let findName = this.allUsers.find(user => {
      return user.id === userID;
    })
    return findName.name;
  }

  findNameFromID(id) {
    let findName = this.allUsers.find(user => {
      return user.id === id;
    })
    return findName.name;
  }

  findUserId(name) {
    let findName = this.allUsers.find(user => {
      return user.name === name;
    })
    if (findName) {
      return findName.id;
    } else {
      return 'We have no record of the user searched. Please search for another user.'
    }
  }

  findRoomDetails(roomNumber) {
    return this.allRooms.find(room => {
      return room.number === roomNumber;
    })
  }

  filterRoomByType(rooms, roomType) {
    return rooms.filter(room => {
      return room.roomType === roomType;
    })
  }

  calculateNumberAvailableRooms(date) {
    if (typeof this.findAvailableRooms(date) === 'string') {
      return 0;
    } else {
      return this.findAvailableRooms(date).length
    }
  }

  findAvailableRooms(date) {
    let roomsBooked = this.allBookings.reduce((roomNums, booking) => {
      if (booking.date === date) {
        roomNums.push(booking.roomNumber)
      }
      return roomNums;
    }, [])

    let rooms = [...this.allRooms];

    rooms.forEach(roomNum => {
      if (roomNum > 25 || roomNum < 1) {
        let index = rooms.indexOf(roomNum);
        rooms.splice(index, 1);
      }
    })

    if (roomsBooked.length < rooms.length) {
      rooms.forEach(roomNum => {
        rooms.forEach(room => {
          if (roomNum === room.number) {
            let index = rooms.indexOf(room);
            rooms.splice(index, 1);
          }
        })
      })
      return rooms;
    } else {
      return 'Sorry, there are no available rooms for the selected date. We sincerely apologize. Please select a different date and try again.'
    }
  }

  findCustomerBookings(id) {
    return this.allBookings.reduce((allUserBookings, booking) => {
      if (booking.userID == id && booking.roomNumber > 1) {
        this.allRooms.forEach(room => {
          if (room.number === booking.roomNumber) {
            booking.roomType = room.roomType;
            booking.costPerNight = room.costPerNight;
          }
        })
        this.allUsers.forEach(user => {
          if (user.id === booking.userID) {
            booking.guestName = user.name;
          }
        })
        allUserBookings.push(booking);
      }
      return allUserBookings;
    }, [])
  }

  findBookings(date) {
    let todayBookings = this.allBookings.reduce((todayBookings, booking) => {
      if (booking.roomNumber > 0 && booking.date === date) {
        this.allRooms.forEach(room => {
          if (room.number == booking.roomNumber) {
            booking.roomType = room.roomType;
            booking.costPerNight = room.costPerNight;
          }
        })
        this.allUsers.forEach(user => {
          if (user.id === booking.userID) {
            booking.guestName = user.name;
          }
        })
        todayBookings.push(booking);
      }
      return todayBookings;
    }, [])

    if (todayBookings.length > 0) {
      return todayBookings;
    } else {
      return 'No bookings for the selected date.'
    }
  }

  calculatePercentageOccupied(date) {
    let dateBookings = this.allBookings.filter(booking => {
      return booking.date === date;
    })

    let percent = (dateBookings.length / this.allRooms.length) * 100;

    return percent.toFixed(0);
  }

  calculateTotalRevenue(date) {
    let dateBookings = this.allBookings.reduce((dateBookings, booking) => {
      if (booking.date === date) {
        dateBookings.push(booking.roomNumber);
      }
      return dateBookings;
    }, [])

    return this.allRooms.reduce((totalRevenue, room) => {
      dateBookings.forEach(roomNum => {
        if (roomNum === room.number) {
          totalRevenue += room.costPerNight;
        }
      })
      return totalRevenue;
    }, 0).toFixed(2)
  }

  calculateNumberOfStays(id) {
    let userRoomNumbers = [];
    this.allBookings.forEach(booking => {
      if (booking.userID == id) {
        userRoomNumbers.push(booking.roomNumber);
      }
    })
    return userRoomNumbers.length;
  }

  calculateTotalSpent(id) {
    let userRoomNumbers = [];
    this.allBookings.forEach(booking => {
      if (booking.userID == id) {
        userRoomNumbers.push(booking.roomNumber);
      }
    })
    return this.allRooms.reduce((totalSpent, room) => {
      userRoomNumbers.forEach(roomNum => {
        if (roomNum === room.number) {
          totalSpent += room.costPerNight;
        }
      })
      return totalSpent;
    }, 0)
  }

  sortBookingsByDate(bookings) {
    if (bookings.length > 0) {
      return bookings.sort((a, b) => {
        return new Date(b.date) - new Date(a.date);
      })
    } else {
      return 'Sorry, no rooms available for the selected dates.'
    }
  }

  sortBookingsByRoomNumber(bookings) {
    return bookings.sort((a, b) => {
      return a.roomNumber - b.roomNumber;
    })
  }

  getTodayDate() {
    let today = new Date();
    let dd = today.getDate();

    let mm = today.getMonth() + 1;
    let yyyy = today.getFullYear();

    if (dd < 10) {
      dd = '0' + dd;
    }
    if (mm < 10) {
      mm = '0' + mm;
    }
    return today = yyyy + '/' + mm + '/' + dd;
  }

  getDashedTodayDate() {
    let today = new Date();
    let dd = today.getDate();

    let mm = today.getMonth() + 1;
    let yyyy = today.getFullYear();

    if (dd < 10) {
      dd = '0' + dd;
    }
    if (mm < 10) {
      mm = '0' + mm;
    }
    return today = yyyy + '-' + mm + '-' + dd;
  }

  addNewBooking(userID, date, roomNumber) {
    let bookingInfo = this.allRooms.reduce((bookingDetails, room) => {
      if (room.number == roomNumber) {
        bookingDetails.userID = parseInt(userID);
        bookingDetails.date = date;
        bookingDetails.roomNumber = room.number;
      }
      return bookingDetails;
    }, {})
    return bookingInfo;
  }

  deleteBooking(deleteBooking) {
    let todayDate = this.getTodayDate();
    if (deleteBooking.date > todayDate) {
      this.allBookings.forEach(booking => {
        if (booking.id === deleteBooking.id) {
          let index = this.allBookings.indexOf(booking);
          this.allBookings.splice(index, 1);
        }
      })
    } else {
      return 'Oops! You cannot delete a booking from the past. Select another booking and try again.'
    }
  }
}


/***/ }),

/***/ "./src/Room.js":
/*!*********************!*\
  !*** ./src/Room.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Room; });
class Room {
  constructor(roomData) {
    this.number = roomData.number;
    this.roomType = roomData.roomType;
    this.bidet = roomData.bidet;
    this.bedSize = roomData.bedSize;
    this.numBeds = roomData.numBeds;
    this.costPerNight = roomData.costPerNight;
  }
}


/***/ }),

/***/ "./src/User.js":
/*!*********************!*\
  !*** ./src/User.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return User; });
class User {
  constructor(userData) {
    this.id = userData.id;
    this.name = userData.name;
  }
}


/***/ }),

/***/ "./src/css/base.scss":
/*!***************************!*\
  !*** ./src/css/base.scss ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/lib/loader.js!./base.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./src/css/base.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/images/room0.jpg":
/*!******************************!*\
  !*** ./src/images/room0.jpg ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "images/room0.jpg";

/***/ }),

/***/ "./src/images/room1.jpg":
/*!******************************!*\
  !*** ./src/images/room1.jpg ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "images/room1.jpg";

/***/ }),

/***/ "./src/images/room10.jpg":
/*!*******************************!*\
  !*** ./src/images/room10.jpg ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "images/room10.jpg";

/***/ }),

/***/ "./src/images/room11.jpg":
/*!*******************************!*\
  !*** ./src/images/room11.jpg ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "images/room11.jpg";

/***/ }),

/***/ "./src/images/room12.jpg":
/*!*******************************!*\
  !*** ./src/images/room12.jpg ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "images/room12.jpg";

/***/ }),

/***/ "./src/images/room13.jpg":
/*!*******************************!*\
  !*** ./src/images/room13.jpg ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "images/room13.jpg";

/***/ }),

/***/ "./src/images/room14.jpg":
/*!*******************************!*\
  !*** ./src/images/room14.jpg ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "images/room14.jpg";

/***/ }),

/***/ "./src/images/room15.jpg":
/*!*******************************!*\
  !*** ./src/images/room15.jpg ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "images/room15.jpg";

/***/ }),

/***/ "./src/images/room16.jpg":
/*!*******************************!*\
  !*** ./src/images/room16.jpg ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "images/room16.jpg";

/***/ }),

/***/ "./src/images/room2.jpg":
/*!******************************!*\
  !*** ./src/images/room2.jpg ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "images/room2.jpg";

/***/ }),

/***/ "./src/images/room3.jpg":
/*!******************************!*\
  !*** ./src/images/room3.jpg ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "images/room3.jpg";

/***/ }),

/***/ "./src/images/room4.jpg":
/*!******************************!*\
  !*** ./src/images/room4.jpg ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "images/room4.jpg";

/***/ }),

/***/ "./src/images/room5.jpg":
/*!******************************!*\
  !*** ./src/images/room5.jpg ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "images/room5.jpg";

/***/ }),

/***/ "./src/images/room6.jpg":
/*!******************************!*\
  !*** ./src/images/room6.jpg ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "images/room6.jpg";

/***/ }),

/***/ "./src/images/room7.jpg":
/*!******************************!*\
  !*** ./src/images/room7.jpg ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "images/room7.jpg";

/***/ }),

/***/ "./src/images/room8.jpg":
/*!******************************!*\
  !*** ./src/images/room8.jpg ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "images/room8.jpg";

/***/ }),

/***/ "./src/images/room9.jpg":
/*!******************************!*\
  !*** ./src/images/room9.jpg ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "images/room9.jpg";

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_base_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css/base.scss */ "./src/css/base.scss");
/* harmony import */ var _css_base_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_base_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _images_room0_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/room0.jpg */ "./src/images/room0.jpg");
/* harmony import */ var _images_room0_jpg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_images_room0_jpg__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _images_room1_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/room1.jpg */ "./src/images/room1.jpg");
/* harmony import */ var _images_room1_jpg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_images_room1_jpg__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _images_room2_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/room2.jpg */ "./src/images/room2.jpg");
/* harmony import */ var _images_room2_jpg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_images_room2_jpg__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _images_room3_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./images/room3.jpg */ "./src/images/room3.jpg");
/* harmony import */ var _images_room3_jpg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_images_room3_jpg__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _images_room4_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./images/room4.jpg */ "./src/images/room4.jpg");
/* harmony import */ var _images_room4_jpg__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_images_room4_jpg__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _images_room5_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./images/room5.jpg */ "./src/images/room5.jpg");
/* harmony import */ var _images_room5_jpg__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_images_room5_jpg__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _images_room6_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./images/room6.jpg */ "./src/images/room6.jpg");
/* harmony import */ var _images_room6_jpg__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_images_room6_jpg__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _images_room7_jpg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./images/room7.jpg */ "./src/images/room7.jpg");
/* harmony import */ var _images_room7_jpg__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_images_room7_jpg__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _images_room8_jpg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./images/room8.jpg */ "./src/images/room8.jpg");
/* harmony import */ var _images_room8_jpg__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_images_room8_jpg__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _images_room9_jpg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./images/room9.jpg */ "./src/images/room9.jpg");
/* harmony import */ var _images_room9_jpg__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_images_room9_jpg__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _images_room10_jpg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./images/room10.jpg */ "./src/images/room10.jpg");
/* harmony import */ var _images_room10_jpg__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_images_room10_jpg__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _images_room11_jpg__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./images/room11.jpg */ "./src/images/room11.jpg");
/* harmony import */ var _images_room11_jpg__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_images_room11_jpg__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _images_room12_jpg__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./images/room12.jpg */ "./src/images/room12.jpg");
/* harmony import */ var _images_room12_jpg__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_images_room12_jpg__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _images_room13_jpg__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./images/room13.jpg */ "./src/images/room13.jpg");
/* harmony import */ var _images_room13_jpg__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_images_room13_jpg__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _images_room14_jpg__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./images/room14.jpg */ "./src/images/room14.jpg");
/* harmony import */ var _images_room14_jpg__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_images_room14_jpg__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _images_room15_jpg__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./images/room15.jpg */ "./src/images/room15.jpg");
/* harmony import */ var _images_room15_jpg__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_images_room15_jpg__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _images_room16_jpg__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./images/room16.jpg */ "./src/images/room16.jpg");
/* harmony import */ var _images_room16_jpg__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_images_room16_jpg__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _Hotel_Service_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./Hotel-Service.js */ "./src/Hotel-Service.js");
/* harmony import */ var _DOMelements_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./DOMelements.js */ "./src/DOMelements.js");






















window.onload = fetchAllData();

let hotelService;
let modal;
let todayDate;
let userID;

_DOMelements_js__WEBPACK_IMPORTED_MODULE_19__["backToBooking"].addEventListener('click', backToCustomerBooking);
_DOMelements_js__WEBPACK_IMPORTED_MODULE_19__["bookARoom"].addEventListener('click', customerAddBookings)
_DOMelements_js__WEBPACK_IMPORTED_MODULE_19__["customerStatus"].addEventListener('click', displayCustomerBookings);
_DOMelements_js__WEBPACK_IMPORTED_MODULE_19__["filterSection"].addEventListener('click', refreshFilter);
_DOMelements_js__WEBPACK_IMPORTED_MODULE_19__["filterSubmitButton"].addEventListener('click', getFilterValue);
_DOMelements_js__WEBPACK_IMPORTED_MODULE_19__["searchCustomerButton"].addEventListener('click', displayCustomerInfo);
_DOMelements_js__WEBPACK_IMPORTED_MODULE_19__["signOutButton"].addEventListener('click', signOut);
_DOMelements_js__WEBPACK_IMPORTED_MODULE_19__["submitButton"].addEventListener('click', validateCredentials);
_DOMelements_js__WEBPACK_IMPORTED_MODULE_19__["usernameInput"].addEventListener('input', clearErrorMessage);
_DOMelements_js__WEBPACK_IMPORTED_MODULE_19__["viewBookingInfo"].addEventListener('click', deleteBooking);
window.addEventListener('click', openModal);
window.addEventListener('click', handleModal);
_DOMelements_js__WEBPACK_IMPORTED_MODULE_19__["bookRoomDate"].addEventListener('change', (event) => {
  let formatDate = `${event.target.value}`.split('-');
  todayDate = formatDate.join('/');
  displayCustomerRooms(todayDate);
});
_DOMelements_js__WEBPACK_IMPORTED_MODULE_19__["bookingModal"].addEventListener('change', (event) => {
  let formatDate = `${event.target.value}`.split('-');
  todayDate = formatDate.join('/');
  displayManagerRooms(todayDate);
});
_DOMelements_js__WEBPACK_IMPORTED_MODULE_19__["hotelOverviewDate"].addEventListener('change', (event) => {
  let formatDate = `${event.target.value}`.split('-');
  todayDate = formatDate.join('/');
  displayHotelOverview(todayDate);
  displayTodayBookings(todayDate);
});


function getRandomIndex() {
  return Math.floor(Math.random() * 10);
}

function fetchAllData() {
  let userPromise =
  fetch('https://fe-apps.herokuapp.com/api/v1/overlook/1904/users/users')
    .then(response => response.json())
    .then(data => data.users)
    .catch(err => console.log(err))

  let roomPromise = fetch('https://fe-apps.herokuapp.com/api/v1/overlook/1904/rooms/rooms')
    .then(response => response.json())
    .then(data => data.rooms)
    .catch(err => console.log(err))

  let bookingPromise = fetch('https://fe-apps.herokuapp.com/api/v1/overlook/1904/bookings/bookings')
    .then(response => response.json())
    .then(data => data.bookings)
    .catch(err => console.log(err))

  Promise.all([userPromise, roomPromise, bookingPromise])
    .then(data => hotelService = new _Hotel_Service_js__WEBPACK_IMPORTED_MODULE_18__["default"](data[0], data[1], data[2]))
    .then(() => loadData())
    .catch(err => console.log(err))
}

function loadData() {
  hotelService.start();
  todayDate = hotelService.getTodayDate();
}

function validateCredentials() {
  if (_DOMelements_js__WEBPACK_IMPORTED_MODULE_19__["usernameInput"].value === 'manager' && _DOMelements_js__WEBPACK_IMPORTED_MODULE_19__["passwordInput"].value === 'overlook2020') {
    createUserDropDown();
    _DOMelements_js__WEBPACK_IMPORTED_MODULE_19__["enterCredentials"].classList.add('hidden');
    _DOMelements_js__WEBPACK_IMPORTED_MODULE_19__["managerView"].classList.remove('hidden');
    _DOMelements_js__WEBPACK_IMPORTED_MODULE_19__["signOutButton"].classList.remove('hidden');
    _DOMelements_js__WEBPACK_IMPORTED_MODULE_19__["usernameInput"].value = '';
    _DOMelements_js__WEBPACK_IMPORTED_MODULE_19__["passwordInput"].value = '';
  } else if (_DOMelements_js__WEBPACK_IMPORTED_MODULE_19__["usernameInput"].value.includes('customer') && _DOMelements_js__WEBPACK_IMPORTED_MODULE_19__["passwordInput"].value === 'overlook2020') {
    let findUserID = _DOMelements_js__WEBPACK_IMPORTED_MODULE_19__["usernameInput"].value.split(/(\d+)/);
    userID = findUserID[1];
    loadUserPage();
  } else {
    alertLogInError();
  }
}

function loadUserPage() {
  hotelService.allUsers.forEach(user => {
    if (user.id == userID) {
      _DOMelements_js__WEBPACK_IMPORTED_MODULE_19__["enterCredentials"].classList.add('hidden');
      _DOMelements_js__WEBPACK_IMPORTED_MODULE_19__["customerView"].classList.remove('hidden');
      _DOMelements_js__WEBPACK_IMPORTED_MODULE_19__["signOutButton"].classList.remove('hidden');
      _DOMelements_js__WEBPACK_IMPORTED_MODULE_19__["filterCategories"].classList.add('hidden');
      _DOMelements_js__WEBPACK_IMPORTED_MODULE_19__["filterSubmitButton"].classList.add('hidden');
      todayDate = hotelService.getDashedTodayDate();
      _DOMelements_js__WEBPACK_IMPORTED_MODULE_19__["bookRoomDate"].setAttribute('value', todayDate);
      _DOMelements_js__WEBPACK_IMPORTED_MODULE_19__["bookRoomDate"].setAttribute('min', todayDate);
      loadCustomerInfo();
      _DOMelements_js__WEBPACK_IMPORTED_MODULE_19__["usernameInput"].value = '';
      _DOMelements_js__WEBPACK_IMPORTED_MODULE_19__["passwordInput"].value = '';
    } else {
      alertLogInError();
    }
  })
}

function alertLogInError() {
  _DOMelements_js__WEBPACK_IMPORTED_MODULE_19__["usernameInput"].value = '';
  _DOMelements_js__WEBPACK_IMPORTED_MODULE_19__["passwordInput"].value = '';
  let message = `<b>The username and/or password you entered was not recognized. Please try again.</b>`
  _DOMelements_js__WEBPACK_IMPORTED_MODULE_19__["errorMessage"].insertAdjacentHTML('beforeend', message);
}

function clearErrorMessage() {
  _DOMelements_js__WEBPACK_IMPORTED_MODULE_19__["errorMessage"].innerText = '';
}

function createUserDropDown() {
  let dropDown = document.getElementById('customers');
  let sortCustomerNames = hotelService.allUsers.sort((a, b) => {
    return a.name < b.name ? -1 : 1;
  })
  let customerNames = sortCustomerNames.map(user => {
    return `<option value="${user.name}">`
  }).join('');
  dropDown.insertAdjacentHTML('afterbegin', customerNames);
}

function signOut() {
  debugger
  _DOMelements_js__WEBPACK_IMPORTED_MODULE_19__["signOutButton"].classList.add('hidden');
  _DOMelements_js__WEBPACK_IMPORTED_MODULE_19__["customerStatus"].innerHTML = '';
  _DOMelements_js__WEBPACK_IMPORTED_MODULE_19__["managerView"].classList.add('hidden');
  _DOMelements_js__WEBPACK_IMPORTED_MODULE_19__["customerView"].classList.add('hidden');
  _DOMelements_js__WEBPACK_IMPORTED_MODULE_19__["enterCredentials"].classList.remove('hidden');
  clearErrorMessage();
  bookRoomHeader = 'Book a Room';
  _DOMelements_js__WEBPACK_IMPORTED_MODULE_19__["backToBooking"].innerHTML = '';
  _DOMelements_js__WEBPACK_IMPORTED_MODULE_19__["customerRooms"].innerHTML = '';
}

function loadCustomerInfo() {
  let status;
  _DOMelements_js__WEBPACK_IMPORTED_MODULE_19__["customerWelcome"].innerText = `Welcome Back, ${hotelService.findUserName(userID)}!`
  let totalSpent = hotelService.calculateTotalSpent(userID).toFixed(2);
  if (totalSpent > 10000) {
    status = 'Gold';
  } else if (totalSpent < 10000 && totalSpent > 8000) {
    status = 'Silver';
  } else if (totalSpent < 8000 && totalSpent > 5000) {
    status = 'Bronze';
  } else {
    status = 'Blue';
  }
  displayCustomerStats(status, totalSpent)
}

function displayCustomerStats(status, totalSpent) {
  let statusInfo = `
  <p class="${status}"><b>${status} Level Preferred</b></p>
  <p>Total Spent: $${totalSpent}</p><button class="view-bookings-button customer-status">View Bookings</button>`;
  _DOMelements_js__WEBPACK_IMPORTED_MODULE_19__["customerStatus"].insertAdjacentHTML('afterbegin', statusInfo);
}

function displayHotelOverview(date) {
  let todayRevenue = hotelService.calculateTotalRevenue(date);
  let availableRooms = hotelService.calculateNumberAvailableRooms(date);
  let percentOccupied = hotelService.calculatePercentageOccupied(date);
  let overview = `Revenue &nbsp; $${todayRevenue} <br>
  Rooms Available &nbsp; ${availableRooms} <br>
  Percentage Occupied &nbsp; ${percentOccupied}%`;
  _DOMelements_js__WEBPACK_IMPORTED_MODULE_19__["overviewInfo"].classList.remove('overview-default');
  _DOMelements_js__WEBPACK_IMPORTED_MODULE_19__["overviewInfo"].classList.add('hotel-summary');
  _DOMelements_js__WEBPACK_IMPORTED_MODULE_19__["overviewInfo"].innerHTML = overview;
}

function displayTodayBookings(date) {
  _DOMelements_js__WEBPACK_IMPORTED_MODULE_19__["viewBookingInfo"].innerHTML = '';
  _DOMelements_js__WEBPACK_IMPORTED_MODULE_19__["searchTitle"].innerHTML = '';
  let bookings = hotelService.findBookings(date);
  if (typeof bookings !== 'string') {
    let sortedBookings = hotelService.sortBookingsByRoomNumber(bookings);
    let todaysBookingInfo = sortedBookings.map(booking => {
      return `<article class="manager-booking-card" id="${booking.id}">
      <section class="manager-booking-date">
        ${booking.date}
      </section>
      <section class="manager-booking-roomtype">
        ${booking.roomType.toUpperCase()}
      </section>
      <section class="manager-booking-roomnum">
        ${booking.roomNumber}
      </section>
      <section class="manager-booking-cost">
        $${booking.costPerNight.toFixed(2)}
      </section>
      <section class="manager-booking-id">
        ${booking.id}
      </section>
        ${determineBookingDate(booking)}
      </article>`
    }).join(' ')
    _DOMelements_js__WEBPACK_IMPORTED_MODULE_19__["viewBookingInfo"].insertAdjacentHTML('beforeend', todaysBookingInfo);
    _DOMelements_js__WEBPACK_IMPORTED_MODULE_19__["searchTitle"].innerText = `Bookings for ${date}`;
  } else {
    _DOMelements_js__WEBPACK_IMPORTED_MODULE_19__["searchTitle"].innerText = 'Bookings for --';
    _DOMelements_js__WEBPACK_IMPORTED_MODULE_19__["viewBookingInfo"].innerHTML = `<h5 class="no-bookings">${bookings}</h5>`;
  }
}

function determineBookingDate(booking) {
  if (booking.date > hotelService.getTodayDate()) {
    return `<button type="button" class="delete-booking-button ${booking.id} ${typeof booking.id}">DELETE BOOKING</button>`
  } else {
    return '<button type="button" class="cannot-delete">-</button>';
  }
}

function displayCustomerInfo() {
  _DOMelements_js__WEBPACK_IMPORTED_MODULE_19__["viewBookingInfo"].innerHTML = '';
  userID = hotelService.findUserId(_DOMelements_js__WEBPACK_IMPORTED_MODULE_19__["searchCustomerInput"].value);
  let bookings = hotelService.findCustomerBookings(userID);
  let sortedBookings = hotelService.sortBookingsByDate(bookings);
  if (sortedBookings.length > 0) {
    let todaysBookingInfo = sortedBookings.map(booking => {
      return `<article class="manager-booking-card">
        <section class="manager-booking-date">
          ${booking.date}
        </section>
        <section class="manager-booking-roomtype">
          ${booking.roomType.toUpperCase()}
        </section>
        <section class="manager-booking-roomnum">
          ${booking.roomNumber}
        </section>
        <section class="manager-booking-cost">
          $${booking.costPerNight.toFixed(2)}
        </section>
        <section class="manager-booking-id">
          ${booking.id}
        </section>
          ${determineBookingDate(booking)}
        </section>
        </article>`
    }).join(' ')
    _DOMelements_js__WEBPACK_IMPORTED_MODULE_19__["viewBookingInfo"].insertAdjacentHTML('beforeend', todaysBookingInfo);
    formatCustomerInfo();
  } else {
    _DOMelements_js__WEBPACK_IMPORTED_MODULE_19__["searchTitle"].innerText = `Bookings for ${_DOMelements_js__WEBPACK_IMPORTED_MODULE_19__["searchCustomerInput"].value}`;
    _DOMelements_js__WEBPACK_IMPORTED_MODULE_19__["viewBookingInfo"].innerHTML = `<p class="customer-error-message"><b>We have no information for the customer ${_DOMelements_js__WEBPACK_IMPORTED_MODULE_19__["searchCustomerInput"].value}. Please enter another name and try again.</b></p>`;
  }
}

function formatCustomerInfo() {
  _DOMelements_js__WEBPACK_IMPORTED_MODULE_19__["searchTitle"].innerText = `Bookings for ${_DOMelements_js__WEBPACK_IMPORTED_MODULE_19__["searchCustomerInput"].value}`;
  _DOMelements_js__WEBPACK_IMPORTED_MODULE_19__["searchTitle"].insertAdjacentHTML('beforeend', `<p id="total-spent">Total Spent: $ ${hotelService.calculateTotalSpent(userID).toFixed(2)} <br><button class="add-booking-button">ADD BOOKING</button>`)
  _DOMelements_js__WEBPACK_IMPORTED_MODULE_19__["searchCustomerInput"].value = '';
}

function displayManagerRooms(date) {
  let availableRooms = hotelService.findAvailableRooms(date);
  if (typeof availableRooms !== 'string') {
    let sortedAvailableRooms = hotelService.sortBookingsByDate(availableRooms);
    _DOMelements_js__WEBPACK_IMPORTED_MODULE_19__["modalContent"].innerHTML = `
      <ul class="customer-info-headers">
        <li>Room Type</li>
        <li>Num Beds</li>
        <li>Bed Type</li>
        <li>Room #</li>
        <li>Bidet</li>
        <li>Price</li>
        <li>Add</li>
      </ul>`
    let allRooms = sortedAvailableRooms.map(room => {
      return `
        <article class="manager-booking-card">
          <p class="manager-booking-roomtype2">${room.roomType}</p>
          <p class="manager-booking-numbeds"> ${room.numBeds}</p>
          <p class="manager-booking-roomnum">${room.bedSize}</p>
          <p class="manager-booking-roomnum2">${room.number}</p>
          <p class="manager-booking-bidet"> ${room.bidet}</p>
          <p class="manager-booking-cost2">$${room.costPerNight.toFixed(2)}</p>
          <button type="button" class="book-room ${room.number}">BOOK ROOM</button>
        </article>`
    }).join(' ')
    _DOMelements_js__WEBPACK_IMPORTED_MODULE_19__["modalContent"].insertAdjacentHTML('beforeend', allRooms);
  } else {
    _DOMelements_js__WEBPACK_IMPORTED_MODULE_19__["modalContent"].innerHTML = `<h5 class="no-bookings">${availableRooms}</h5>`;
  }
}

function openModal(event) {
  if (event.target.classList.contains('add-booking-button')) {
    modal = _DOMelements_js__WEBPACK_IMPORTED_MODULE_19__["bookingModal"];
    modal.style.display = 'block';      _DOMelements_js__WEBPACK_IMPORTED_MODULE_19__["modalDate"].classList.remove('hidden');
    _DOMelements_js__WEBPACK_IMPORTED_MODULE_19__["modalTitle"].innerText = 'Available Rooms';
    _DOMelements_js__WEBPACK_IMPORTED_MODULE_19__["modalContent"].innerHTML = `
      <ul class="customer-info-headers">
        <li>Room Type</li>
        <li>Num Beds</li>
        <li>Bed Type</li>
        <li>Room #</li>
        <li>Bidet</li>
        <li>Price</li>
        <li>Add</li>
      </ul>`;
  } else if (event.target.classList.contains('delete-booking-button')) {
    event.target.classList.add('deleted-room');
    event.target.disabled = true;
    event.target.innerText = 'DELETED!'
  }
}

function handleModal(event) {
  if (event.target.classList.contains('book-room')) {
    let newBooking = hotelService.addNewBooking(userID, todayDate, event.target.classList[1]);
    let eventTarget = event.target;
    postNewBooking(newBooking, eventTarget);
    _DOMelements_js__WEBPACK_IMPORTED_MODULE_19__["modalDate"].classList.add('hidden');
    _DOMelements_js__WEBPACK_IMPORTED_MODULE_19__["modalTitle"].innerText = 'Success';
    _DOMelements_js__WEBPACK_IMPORTED_MODULE_19__["modalContent"].innerText = 'The booking has successfully been added. Please refresh the page to see the updated bookings.';
  } else if (event.target === modal) {
    modal.style.display = 'none';
  }
}

function postNewBooking(newBooking) {
  return fetch('https://fe-apps.herokuapp.com/api/v1/overlook/1904/bookings/bookings', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(newBooking)
  })
    .then(response => console.log(response.json()))
    .then(() => {
      fetchAllData();
    })
    .catch(err => console.log(err))
}

function deleteBooking(event) {
  let deleteBody;
  if (event.target.classList[2] === 'number') {
    deleteBody = {id: parseInt(event.target.classList[1])}
  } else {
    deleteBody = {id: event.target.classList[1]};
  }
  if (event.target.classList.contains('delete-booking-button')) {
    return fetch('https://fe-apps.herokuapp.com/api/v1/overlook/1904/bookings/bookings', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(deleteBody)
    })
      .then(response => console.log(response.json()))
      .then(() => updateBookings(event.target.classList[1]))
      .catch(err => console.log(err))
  }
}

function updateBookings(id) {
  fetchAllData();
  setTimeout(removeElement(id), 4000)
}

function removeElement(bookingID) {
  document.getElementById(bookingID).remove();
}

function displayCustomerRooms(date) {
  fetchAllData();
  _DOMelements_js__WEBPACK_IMPORTED_MODULE_19__["filterCategories"].classList.remove('hidden');
  _DOMelements_js__WEBPACK_IMPORTED_MODULE_19__["filterSubmitButton"].classList.remove('hidden');
  _DOMelements_js__WEBPACK_IMPORTED_MODULE_19__["bookRoomHeader"].innerText = `All Available Rooms`;
  let availableRooms = hotelService.findAvailableRooms(date);
  if (typeof availableRooms !== 'string') {
    let sortedAvailableCustRooms = hotelService.sortBookingsByDate(availableRooms);
    let allRooms = sortedAvailableCustRooms.map(room => {
      return `
        <article class="today-booking-card">
          <img src="./images/room${getRandomIndex()}.jpg" alt="room picture" class="booking-card-img">
          <section class="booking-info">
            <p class="room-type">${room.roomType}</p>
            <p class="room-number"><b>Room Number:</b> ${room.number}</p>
            <p class="stay-date"><b>Bidet:</b> ${room.bidet}</p>
            <p class="customer-name"><b>Bed Type:</b> ${room.bedSize}</p>
            <p class="customer-name"><b>Number of Beds: </b> ${room.numBeds}</p>
          </section>
          <section class="customer-booking">
            <p class="customer-price">$${room.costPerNight.toFixed(2)}</p>
            <button type="button" class="customer-book-button ${room.number}">BOOK ROOM</button>
          </section>
        </article>`
    }).join(' ')
    _DOMelements_js__WEBPACK_IMPORTED_MODULE_19__["customerRooms"].insertAdjacentHTML('afterbegin', allRooms);
  } else {
    _DOMelements_js__WEBPACK_IMPORTED_MODULE_19__["customerRooms"].innerText = `${availableRooms}`;
  }
}

function customerAddBookings(event) {
  if (event.target.classList.contains('customer-book-button')) {
    let newBooking = hotelService.addNewBooking(userID, todayDate, event.target.classList[1]);
    _DOMelements_js__WEBPACK_IMPORTED_MODULE_19__["customerStatus"].innerHTML = ''
    postNewBooking(newBooking);
    loadCustomerInfo();
    event.target.classList.remove('customer-book-button');
    event.target.classList.add('booked-room');
    event.target.innerText = 'BOOKED!';
    event.target.disabled = true;
  }
}

function displayCustomerBookings(event) {
  if (event.target.classList.contains('view-bookings-button')) {
    _DOMelements_js__WEBPACK_IMPORTED_MODULE_19__["customerRooms"].innerHTML = '';
    _DOMelements_js__WEBPACK_IMPORTED_MODULE_19__["bookRoomDate"].classList.add('hidden');
    _DOMelements_js__WEBPACK_IMPORTED_MODULE_19__["bookRoomHeader"].innerText = `Your Bookings`;
    _DOMelements_js__WEBPACK_IMPORTED_MODULE_19__["backToBooking"].insertAdjacentHTML('beforeend', `<button class="back-to-book-button">Book a Room</button>`);
    let bookings = hotelService.findCustomerBookings(userID);
    let sortedBookings = hotelService.sortBookingsByDate(bookings);
    if (sortedBookings.length > 0) {
      let todaysBookingInfo = sortedBookings.map(booking => {
        return `
        <article class="today-booking-card">
          <img src="./images/room${getRandomIndex()}.jpg" alt="room picture" class="booking-card-img">
          <section class="booking-info">
            <p class="room-type">${booking.roomType}</p>
            <p class="room-number"><b>Room Number:</b> ${booking.roomNumber}</p>
            <p class="stay-date"><b>Date Booked:</b> ${booking.date}</p>
            <p class="confirmation-number"><b>Confirmation:</b>${booking.id}</p>
          </section>
          <section class="delete-booking">
            <p class="room-price">$${booking.costPerNight.toFixed(2)}</p>
          </section>
          </article>`
      }).join(' ')
      _DOMelements_js__WEBPACK_IMPORTED_MODULE_19__["customerRooms"].insertAdjacentHTML('beforeend', todaysBookingInfo);
    }
  }
  document.querySelector('.view-bookings-button').disabled = true;
}

function backToCustomerBooking() {
  _DOMelements_js__WEBPACK_IMPORTED_MODULE_19__["customerRooms"].innerHTML = '';
  _DOMelements_js__WEBPACK_IMPORTED_MODULE_19__["bookRoomDate"].classList.remove('hidden');
  _DOMelements_js__WEBPACK_IMPORTED_MODULE_19__["bookRoomHeader"].innerText = 'Book a Room';
  _DOMelements_js__WEBPACK_IMPORTED_MODULE_19__["backToBooking"].innerHTML = '';
  document.querySelector('.view-bookings-button').disabled = false;
}

function getFilterValue() {
  let calendarDate = document.getElementById('book-room-date').value;
  let formatCalendarDate = calendarDate.split('-').join('/');
  let availableRooms = hotelService.findAvailableRooms(formatCalendarDate);
  let sortedAvailableCustRooms = hotelService.sortBookingsByDate(availableRooms);
  _DOMelements_js__WEBPACK_IMPORTED_MODULE_19__["customerRooms"].innerHTML = '';
  if (_DOMelements_js__WEBPACK_IMPORTED_MODULE_19__["filterCategories"].elements[0].value === 'residential') {
    let residentialSuites = hotelService.filterRoomByType(sortedAvailableCustRooms, 'residential suite');
    formatFilteredView('Residential Suites', residentialSuites);
  } else if (_DOMelements_js__WEBPACK_IMPORTED_MODULE_19__["filterCategories"].elements[1].value === 'suite') {
    let suites = hotelService.filterRoomByType(sortedAvailableCustRooms, 'suite');
    formatFilteredView('Suites', suites);
  } else if (_DOMelements_js__WEBPACK_IMPORTED_MODULE_19__["filterCategories"].elements[2].value === 'junior') {
    let juniorSuites = hotelService.filterRoomByType(sortedAvailableCustRooms, 'junior suite');
    formatFilteredView('Junior Suites', juniorSuites);
  } else if (_DOMelements_js__WEBPACK_IMPORTED_MODULE_19__["filterCategories"].elements[3].value === 'single') {
    let singleRooms = hotelService.filterRoomByType(sortedAvailableCustRooms, 'single room');
    formatFilteredView('Single Rooms', singleRooms);
  }
  clearFormValues();
}


function formatFilteredView(roomType, sortedRooms) {
  displayFilteredRooms(sortedRooms);
  _DOMelements_js__WEBPACK_IMPORTED_MODULE_19__["bookRoomHeader"].innerText = `Available ${roomType}`;
  _DOMelements_js__WEBPACK_IMPORTED_MODULE_19__["filterCategories"].classList.add('hidden');
  _DOMelements_js__WEBPACK_IMPORTED_MODULE_19__["filterSubmitButton"].classList.add('hidden');
  _DOMelements_js__WEBPACK_IMPORTED_MODULE_19__["filterRefreshButton"].classList.remove('hidden');
}

function clearFormValues() {
  _DOMelements_js__WEBPACK_IMPORTED_MODULE_19__["filterCategories"].elements['residential'].checked = false;
  _DOMelements_js__WEBPACK_IMPORTED_MODULE_19__["filterCategories"].elements['suite'].checked = false;
  _DOMelements_js__WEBPACK_IMPORTED_MODULE_19__["filterCategories"].elements['junior'].checked = false;
  _DOMelements_js__WEBPACK_IMPORTED_MODULE_19__["filterCategories"].elements['single'].checked = false;
}

function displayFilteredRooms(rooms) {
  _DOMelements_js__WEBPACK_IMPORTED_MODULE_19__["customerRooms"].innerText = '';
  let sortedFilteredRooms = hotelService.sortBookingsByDate(rooms);
  let allRooms = sortedFilteredRooms.map(room => {
    return `<article class="today-booking-card">
    <img src="./images/room${getRandomIndex()}.jpg" alt="room picture" class="booking-card-img">
    <section class="booking-info">
      <p class="room-type">${room.roomType}</p>
      <p class="room-number"><b>Room Number:</b> ${room.number}</p>
      <p class="stay-date"><b>Bidet:</b> ${room.bidet}</p>
      <p class="customer-name"><b>Bed Type:</b> ${room.bedSize}</p>
      <p class="customer-name"><b>Number of Beds: </b> ${room.numBeds}</p>
    </section>
    <section class="customer-booking">
      <p class="customer-price">$${room.costPerNight.toFixed(2)}</p>
      <button type="button" class="customer-book-button ${room.number}">BOOK ROOM</button>
    </section>
    </article>`
  }).join(' ')

  _DOMelements_js__WEBPACK_IMPORTED_MODULE_19__["customerRooms"].insertAdjacentHTML('afterbegin', allRooms);
}

function refreshFilter(event) {
  if (event.target.classList.contains('filter-status')) {
    _DOMelements_js__WEBPACK_IMPORTED_MODULE_19__["customerRooms"].innerText = '';
    let calendarDate = document.getElementById('book-room-date').value;
    let formatCalendarDate = calendarDate.split('-').join('/');
    displayCustomerRooms(formatCalendarDate);
    _DOMelements_js__WEBPACK_IMPORTED_MODULE_19__["filterCategories"].classList.remove('hidden');
    _DOMelements_js__WEBPACK_IMPORTED_MODULE_19__["filterRefreshButton"].classList.add('hidden');
    _DOMelements_js__WEBPACK_IMPORTED_MODULE_19__["filterSubmitButton"].classList.remove('hidden');
  }
}


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Nzcy9iYXNlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvdXJscy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvQm9va2luZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvRE9NZWxlbWVudHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0hvdGVsLVNlcnZpY2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1Jvb20uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1VzZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Nzcy9iYXNlLnNjc3M/YTIzOCIsIndlYnBhY2s6Ly8vLi9zcmMvaW1hZ2VzL3Jvb20wLmpwZyIsIndlYnBhY2s6Ly8vLi9zcmMvaW1hZ2VzL3Jvb20xLmpwZyIsIndlYnBhY2s6Ly8vLi9zcmMvaW1hZ2VzL3Jvb20xMC5qcGciLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltYWdlcy9yb29tMTEuanBnIiwid2VicGFjazovLy8uL3NyYy9pbWFnZXMvcm9vbTEyLmpwZyIsIndlYnBhY2s6Ly8vLi9zcmMvaW1hZ2VzL3Jvb20xMy5qcGciLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltYWdlcy9yb29tMTQuanBnIiwid2VicGFjazovLy8uL3NyYy9pbWFnZXMvcm9vbTE1LmpwZyIsIndlYnBhY2s6Ly8vLi9zcmMvaW1hZ2VzL3Jvb20xNi5qcGciLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltYWdlcy9yb29tMi5qcGciLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltYWdlcy9yb29tMy5qcGciLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltYWdlcy9yb29tNC5qcGciLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltYWdlcy9yb29tNS5qcGciLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltYWdlcy9yb29tNi5qcGciLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltYWdlcy9yb29tNy5qcGciLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltYWdlcy9yb29tOC5qcGciLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltYWdlcy9yb29tOS5qcGciLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ2xGQSwyQkFBMkIsbUJBQU8sQ0FBQyx3R0FBbUQ7QUFDdEY7QUFDQSxjQUFjLFFBQVMsd0JBQXdCLHdDQUF3QyxxQkFBcUIsdUJBQXVCLGlCQUFpQixrQkFBa0IsNEJBQTRCLEVBQUUsK0JBQStCLCtCQUErQixvQkFBb0IsRUFBRSwwQkFBMEIsd0NBQXdDLGdCQUFnQixpQkFBaUIsaUJBQWlCLGtCQUFrQiw0QkFBNEIsRUFBRSxnQ0FB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OztBQUVBLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLGdCQUFnQixpQkFBaUI7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7O0FBRWQsa0RBQWtELHNCQUFzQjtBQUN4RTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjs7QUFFQTtBQUNBLEtBQUssS0FBd0MsRUFBRSxFQUU3Qzs7QUFFRixRQUFRLHNCQUFpQjtBQUN6Qjs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtB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QUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsT0FBTztBQUNQO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtB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bUQsWUFBWTtBQUMvRCwyQ0FBMkMsV0FBVztBQUN0RCxrREFBa0QsYUFBYTtBQUMvRCx5REFBeUQsYUFBYTtBQUN0RTtBQUNBO0FBQ0EsbUNBQW1DLDZCQUE2QjtBQUNoRSwwREFBMEQsWUFBWTtBQUN0RTtBQUNBO0FBQ0EsR0FBRzs7QUFFSCxFQUFFLDhEQUFhO0FBQ2Y7O0FBRUE7QUFDQTtBQUNBLElBQUksOERBQWE7QUFDakI7QUFDQTtBQUNBO0FBQ0EsSUFBSSxpRUFBZ0I7QUFDcEIsSUFBSSxvRUFBbUI7QUFDdkIsSUFBSSxtRUFBa0I7QUFDdEI7QUFDQSIsImZpbGUiOiJtYWluLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIikoZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuYWRkLWJvb2tpbmctYnV0dG9uIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiU3BlY3RyYWwgU0NcXFwiLCBzZXJpZjtcXG4gIG1hcmdpbi10b3A6IDIwcHg7XFxuICBtYXJnaW4tYm90dG9tOiAwcHg7XFxuICB3aWR0aDogMjAwcHg7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgYm9yZGVyOiBzb2xpZCBibGFjayAxcHg7IH1cXG5cXG4uYWRkLWJvb2tpbmctYnV0dG9uOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGRhcmtncmV5O1xcbiAgY3Vyc29yOiBwb2ludGVyOyB9XFxuXFxuLmJhY2stdG8tYm9vay1idXR0b24ge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJTcGVjdHJhbCBTQ1xcXCIsIHNlcmlmO1xcbiAgbWFyZ2luOiAwcHg7XFxuICB3aWR0aDogMjAwcHg7XFxuICBoZWlnaHQ6IDMwcHg7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgYm9yZGVyOiBzb2xpZCBibGFjayAxcHg7IH1cXG5cXG4uYmFjay10by1ib29rLWJ1dHRvbjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrZ3JleTtcXG4gIGN1cnNvcjogcG9pbnRlcjsgfVxcblxcbi5ib29rZWQtcm9vbSB7XFxuICBtYXJnaW46IDIwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNGQ3OWZmO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJTcGVjdHJhbCBTQ1xcXCIsIHNlcmlmO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgd2lkdGg6IDEwMHB4OyB9XFxuXFxuLmNhbm5vdC1kZWxldGUge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJTcGVjdHJhbCBTQ1xcXCIsIHNlcmlmO1xcbiAgbWFyZ2luOiAyMHB4O1xcbiAgd2lkdGg6IDEwMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmV5O1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGJvcmRlcjogc29saWQgYmxhY2sgMXB4OyB9XFxuXFxuLmN1c3RvbWVyLWJvb2stYnV0dG9uIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiU3BlY3RyYWwgU0NcXFwiLCBzZXJpZjtcXG4gIG1hcmdpbjogMjBweDtcXG4gIHdpZHRoOiAxMDBweDtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBib3JkZXI6IHNvbGlkIGJsYWNrIDFweDsgfVxcblxcbi5jdXN0b21lci1ib29rLWJ1dHRvbjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrZ3JleTtcXG4gIGN1cnNvcjogcG9pbnRlcjsgfVxcblxcbi5kZWxldGUtYm9va2luZy1idXR0b24ge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJTcGVjdHJhbCBTQ1xcXCIsIHNlcmlmO1xcbiAgbWFyZ2luOiA1cHggMTBweCAxMHB4IDEwcHg7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgYm9yZGVyOiBzb2xpZCBibGFjayAxcHg7IH1cXG5cXG4uZGVsZXRlLWJvb2tpbmctYnV0dG9uOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGRhcmtncmV5O1xcbiAgY3Vyc29yOiBwb2ludGVyOyB9XFxuXFxuLmRlbGV0ZWQtcm9vbSB7XFxuICBtYXJnaW46IDVweCAyMHB4IDVweDtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICB3aWR0aDogMTAwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrcmVkO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJTcGVjdHJhbCBTQ1xcXCIsIHNlcmlmO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgd2lkdGg6IDEwMHB4OyB9XFxuXFxuLmZpbHRlci1idXR0b24ge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJTcGVjdHJhbCBTQ1xcXCIsIHNlcmlmO1xcbiAgZm9udC1zaXplOiAxNXB4O1xcbiAgd2lkdGg6IDE1MHB4O1xcbiAgbWFyZ2luLWxlZnQ6IDI4JTtcXG4gIG1hcmdpbi10b3A6IDEwcHg7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgYm9yZGVyOiBzb2xpZCBibGFjayAxcHg7IH1cXG5cXG4uZmlsdGVyLWJ1dHRvbjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrZ3JleTtcXG4gIGN1cnNvcjogcG9pbnRlcjsgfVxcblxcbi5zZWFyY2gtYnV0dG9uIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiU3BlY3RyYWwgU0NcXFwiLCBzZXJpZjtcXG4gIG1hcmdpbjogNDBweCAxMHB4IDQwcHggMHB4O1xcbiAgd2lkdGg6IDEwMHB4O1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGJvcmRlcjogc29saWQgYmxhY2sgMXB4OyB9XFxuXFxuLnNlYXJjaC1idXR0b246aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogZGFya2dyZXk7XFxuICBjdXJzb3I6IHBvaW50ZXI7IH1cXG5cXG4uc2lnbm91dC1idXR0b24ge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbGVmdDogOTAlO1xcbiAgdG9wOiAzJTtcXG4gIHdpZHRoOiAxMDBweDtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiU3BlY3RyYWwgU0NcXFwiLCBzZXJpZjtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBib3JkZXI6IHNvbGlkIGJsYWNrIDFweDsgfVxcblxcbi5zaWdub3V0LWJ1dHRvbjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrZ3JleTtcXG4gIGN1cnNvcjogcG9pbnRlcjsgfVxcblxcbi5zdWJtaXQtYnV0dG9uIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiU3BlY3RyYWwgU0NcXFwiLCBzZXJpZjtcXG4gIG1hcmdpbi10b3A6IDMwcHg7XFxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGJvcmRlcjogc29saWQgYmxhY2sgMXB4OyB9XFxuXFxuLnN1Ym1pdC1idXR0b246aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogZGFya2dyZXk7XFxuICBjdXJzb3I6IHBvaW50ZXI7IH1cXG5cXG4udGFnLWJ1dHRvbiB7XFxuICBwYWRkaW5nOiAwcHg7XFxuICBtYXJnaW46IDBweDtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgYm9yZGVyOiBzb2xpZCBibGFjayAxcHg7IH1cXG5cXG4udGFnLWJ1dHRvbjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrZ3JleTtcXG4gIGN1cnNvcjogcG9pbnRlcjsgfVxcblxcbi52aWV3LWJvb2tpbmdzLWJ1dHRvbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgcGFkZGluZzogMHB4IDQwcHggMHB4IDQwcHg7XFxuICBib3JkZXI6IHNvbGlkIDFweDtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGhlaWdodDogMzBweDtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBib3JkZXI6IHNvbGlkIGJsYWNrIDFweDsgfVxcblxcbi52aWV3LWJvb2tpbmdzLWJ1dHRvbjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrZ3JleTtcXG4gIGN1cnNvcjogcG9pbnRlcjsgfVxcblxcbi50b2RheS1ib29raW5nLWNhcmQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGJvcmRlcjogc29saWQgYmxhY2sgMXB4O1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgbWFyZ2luOiAxMHB4IDUlIDEwcHggNSU7XFxuICBmb250LWZhbWlseTogXFxcIlNwZWN0cmFsIFNDXFxcIiwgc2VyaWY7IH1cXG5cXG4uYm9va2luZy1pbmZvIHtcXG4gIHdpZHRoOiA3NSU7XFxuICBwYWRkaW5nLWxlZnQ6IDIwcHg7IH1cXG5cXG4ubWFuYWdlci1ib29raW5nLWNhcmQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiU3BlY3RyYWwgU0NcXFwiLCBzZXJpZjsgfVxcblxcbi5tYW5hZ2VyLWJvb2tpbmctZGF0ZSB7XFxuICB3aWR0aDogMjAwcHg7XFxuICBtYXJnaW46IDEwcHggMHB4IDEwcHggMTAwcHg7IH1cXG5cXG4ubWFuYWdlci1ib29raW5nLXJvb210eXBlIHtcXG4gIHdpZHRoOiAyNTBweDtcXG4gIG1hcmdpbjogMTBweCAwcHggMTBweCAwcHg7IH1cXG5cXG4ubWFuYWdlci1ib29raW5nLXJvb21udW0ge1xcbiAgd2lkdGg6IDEwMHB4O1xcbiAgbWFyZ2luOiAxMHB4IDQwcHggMTBweCAwcHg7IH1cXG5cXG4ubWFuYWdlci1ib29raW5nLWNvc3Qge1xcbiAgd2lkdGg6IDE1MHB4O1xcbiAgbWFyZ2luOiAxMHB4IDQwcHggMTBweCA1cHg7IH1cXG5cXG4ubWFuYWdlci1ib29raW5nLWlkIHtcXG4gIHdpZHRoOiAxODBweDtcXG4gIG1hcmdpbjogMTBweCA0MHB4IDEwcHggMHB4OyB9XFxuXFxuLm1hbmFnZXItYm9va2luZy1yb29tdHlwZTIge1xcbiAgd2lkdGg6IDIwMHB4O1xcbiAgbWFyZ2luOiAxMHB4IDQwcHggMTBweCA3MHB4OyB9XFxuXFxuLm1hbmFnZXItYm9va2luZy1udW1iZWRzIHtcXG4gIHdpZHRoOiAxMDBweDtcXG4gIG1hcmdpbjogMTBweCA0MHB4IDEwcHggMHB4OyB9XFxuXFxuLm1hbmFnZXItYm9va2luZy1iaWRldCB7XFxuICB3aWR0aDogMTAwcHg7XFxuICBtYXJnaW46IDEwcHggMTVweCAxMHB4IDBweDsgfVxcblxcbi5tYW5hZ2VyLWJvb2tpbmctcm9vbW51bTIge1xcbiAgd2lkdGg6IDEwMHB4O1xcbiAgbWFyZ2luOiAxMHB4IDIwcHggMTBweCAyMHB4OyB9XFxuXFxuLm1hbmFnZXItYm9va2luZy1jb3N0MiB7XFxuICB3aWR0aDogODBweDtcXG4gIG1hcmdpbjogMTBweCAxMHB4IDEwcHggMHB4OyB9XFxuXFxuLm5vLWJvb2tpbmdzIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiU3BlY3RyYWwgU0NcXFwiLCBzZXJpZjtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG4gIG1hcmdpbi10b3A6IDEwJTsgfVxcblxcbi5yb29tLXR5cGUge1xcbiAgZm9udC1zaXplOiAzMHB4O1xcbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xcbiAgbWFyZ2luLXRvcDogNXB4OyB9XFxuXFxuLnJvb20tbnVtYmVyIHtcXG4gIG1hcmdpbi1ib3R0b206IDBweDtcXG4gIG1hcmdpbi10b3A6IDEwcHg7IH1cXG5cXG4ucm9vbS1wcmljZSB7XFxuICBmb250LWZhbWlseTogXFxcIlNwZWN0cmFsIFNDXFxcIiwgc2VyaWY7XFxuICBmb250LXNpemU6IDM1cHg7XFxuICBtYXJnaW4tcmlnaHQ6IDIycHg7IH1cXG5cXG4uc3RheS1kYXRlIHtcXG4gIG1hcmdpbi1ib3R0b206IDBweDtcXG4gIG1hcmdpbi10b3A6IDBweDsgfVxcblxcbi5jdXN0b21lci1uYW1lIHtcXG4gIG1hcmdpbi1ib3R0b206IDBweDtcXG4gIG1hcmdpbi10b3A6IDBweDsgfVxcblxcbi5jb25maXJtYXRpb24tbnVtYmVyIHtcXG4gIG1hcmdpbi1ib3R0b206IDBweDtcXG4gIG1hcmdpbi10b3A6IDBweDsgfVxcblxcbi5kZWxldGUtYm9va2luZyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwYWRkaW5nLWxlZnQ6IDMwcHg7XFxuICBib3JkZXItbGVmdDogc29saWQgYmxhY2sgMXB4OyB9XFxuXFxuLmJvb2stcm9vbSB7XFxuICBmb250LWZhbWlseTogXFxcIlNwZWN0cmFsIFNDXFxcIiwgc2VyaWY7XFxuICBtYXJnaW46IDBweCAxMHB4IDEwcHggMTBweDsgfVxcblxcbi5kaXNwbGF5LWN1c3RvbWVyLXJvb21zIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZWZlZmU7XFxuICB3aWR0aDogOTAlO1xcbiAgZm9udC1zaXplOiAxNnB4OyB9XFxuXFxuLmJvb2tpbmctY2FyZC1pbWcge1xcbiAgaGVpZ2h0OiAxNTBweDtcXG4gIHdpZHRoOiAyMDBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBtYXJnaW46IDIwcHg7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7IH1cXG5cXG4uY3VzdG9tZXItYm9va2luZyB7XFxuICBib3JkZXItbGVmdDogc29saWQgYmxhY2sgMXB4O1xcbiAgd2lkdGg6IDMwJTtcXG4gIG1hcmdpbi1sZWZ0OiAyMHB4OyB9XFxuXFxuLmN1c3RvbWVyLXByaWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiU3BlY3RyYWwgU0NcXFwiLCBzZXJpZjtcXG4gIGZvbnQtc2l6ZTogMjVweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIG1hcmdpbi10b3A6IDUwcHg7IH1cXG5cXG4ubW9kYWwge1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHotaW5kZXg6IDE7XFxuICBsZWZ0OiAwO1xcbiAgdG9wOiAwO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBvdmVyZmxvdzogYXV0bztcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC40KTtcXG4gIG92ZXJmbG93OiBzY3JvbGw7IH1cXG5cXG4ubW9kYWwtY29udGVudCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmVmZWZlO1xcbiAgbWFyZ2luOiAxMCUgYXV0bztcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjODg4O1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgd2lkdGg6IDgwJTtcXG4gIGhlaWdodDogNjUlO1xcbiAgb3ZlcmZsb3c6IHNjcm9sbDsgfVxcblxcbi5tb2RhbC10aXRsZSB7XFxuICBmb250LXNpemU6IDM1cHg7XFxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbiAgbWFyZ2luLXRvcDogMjBweDsgfVxcblxcbi5tb2RhbC1iYW5uZXIge1xcbiAgb2JqZWN0LWZpdDogY292ZXI7XFxuICBoZWlnaHQ6IDM1MHB4OyB9XFxuXFxuLm1vZGFsLWhlYWRlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBmb250LWZhbWlseTogXFxcIlNwZWN0cmFsIFNDXFxcIiwgc2VyaWY7XFxuICBwYWRkaW5nOiAycHggMTZweDsgfVxcblxcbi5tb2RhbC1kYXRlIHtcXG4gIHdpZHRoOiAxNTBweDsgfVxcblxcbi5tb2RhbC1ib2R5IHtcXG4gIHBhZGRpbmc6IDJweCAxNnB4O1xcbiAgb3ZlcmZsb3c6IHNjcm9sbDsgfVxcblxcbi5lbnRlci1jcmVkZW50aWFscyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBtaW4td2lkdGg6IDE1MHB4O1xcbiAgd2lkdGg6IDI1JTtcXG4gIGhlaWdodDogMzQwcHg7XFxuICBtYXJnaW4tbGVmdDogMzglO1xcbiAgbWFyZ2luLXRvcDogNiU7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIG9wYWNpdHk6IDAuNzsgfVxcblxcbi51c2VybmFtZS1sb2dpbiB7XFxuICBmb250LWZhbWlseTogXFxcIk9wZW4gU2Fuc1xcXCIsIHNhbnMtc2VyaWY7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICBtYXJnaW46IDIwcHggMHB4IDEwcHggMHB4OyB9XFxuXFxuLnBhc3N3b3JkLWxvZ2luIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiT3BlbiBTYW5zXFxcIiwgc2Fucy1zZXJpZjtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIG1hcmdpbjogMzBweCAwcHggMTBweCAwcHg7IH1cXG5cXG4uZXJyb3ItbWVzc2FnZSB7XFxuICBmb250LWZhbWlseTogXFxcIk9wZW4gU2Fuc1xcXCIsIHNhbnMtc2VyaWY7XFxuICBmb250LXNpemU6IDEzcHg7XFxuICBjb2xvcjogYmxhY2s7XFxuICBtYXJnaW4tbGVmdDogMTBweDsgfVxcblxcbmgyIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiT3BlbiBTYW5zXFxcIiwgc2Fucy1zZXJpZjtcXG4gIG1hcmdpbi1ib3R0b206IDVweDsgfVxcblxcbmg0IHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiU3BlY3RyYWwgU0NcXFwiLCBzZXJpZjtcXG4gIG1hcmdpbi1ib3R0b206IDVweDsgfVxcblxcbi5sb2dpbi1pbmZvIHtcXG4gIHdpZHRoOiA3NSU7XFxuICBvdXRsaW5lOiBub25lOyB9XFxuXFxuaW5wdXRbdHlwZT1cXFwicGFzc3dvcmRcXFwiXSB7XFxuICAtd2Via2l0LXRleHQtc2VjdXJpdHk6IGRpc2M7IH1cXG5cXG5ib2R5IHtcXG4gIGJhY2tncm91bmQ6IHVybChcXFwiaHR0cHM6Ly93d3cuamV0c2V0dGVyLmNvbS93cC1jb250ZW50L3VwbG9hZHMvc2l0ZXMvNy8yMDE4LzA0L2gtUG9vU0ZBLmpwZWdcXFwiKTtcXG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJTsgfVxcblxcbmhlYWRlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA1cHg7XFxuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogNXB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBvcGFjaXR5OiAwLjc7IH1cXG5cXG5oMSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZm9udC1mYW1pbHk6IFxcXCJTcGVjdHJhbCBTQ1xcXCIsIHNlcmlmO1xcbiAgZm9udC1zaXplOiA0MHB4O1xcbiAgbWFyZ2luLXRvcDogMjBweDtcXG4gIG1hcmdpbi1ib3R0b206IDBweDsgfVxcblxcbi5ob3RlbC1jcmVzdCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgaGVpZ2h0OiAxMDBweDtcXG4gIHdpZHRoOiAxMDBweDsgfVxcblxcbi5ob3RlbC1pbmZvIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiT3BlbiBTYW5zXFxcIiwgc2Fucy1zZXJpZjtcXG4gIGZvbnQtc2l6ZTogMTJweDtcXG4gIG1hcmdpbi10b3A6IDBweDtcXG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogNXB4O1xcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDVweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgb3BhY2l0eTogMC43OyB9XFxuXFxuLm1hbmFnZXItdmlldyB7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIG9wYWNpdHk6IDAuNzsgfVxcblxcbi5vdmVydmlldy10aXRsZSB7XFxuICBmb250LWZhbWlseTogXFxcIlNwZWN0cmFsIFNDXFxcIiwgc2VyaWY7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBtYXJnaW46IDQwcHggNXB4IDQwcHggMjBweDsgfVxcblxcbi5ob3RlbC1vdmVydmlldy1kYXRlIHtcXG4gIG1hcmdpbjogNDBweCAyMHB4IDQwcHggMjBweDtcXG4gIG1pbi13aWR0aDogMTIwcHg7IH1cXG5cXG4udG9kYXktb3ZlcnZpZXcge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbiAgYm9yZGVyLWJvdHRvbTogc29saWQgYmxhY2sgMXB4OyB9XFxuXFxuLm92ZXJ2aWV3LWRlZmF1bHQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBmb250LWZhbWlseTogXFxcIlNwZWN0cmFsIFNDXFxcIiwgc2VyaWY7XFxuICBtYXJnaW46IDQwcHggNDBweCAxMHB4IDEwcHg7IH1cXG5cXG4uaG90ZWwtc3VtbWFyeSB7XFxuICBtYXJnaW4tcmlnaHQ6IDYwcHg7XFxuICBmb250LWZhbWlseTogXFxcIlNwZWN0cmFsIFNDXFxcIiwgc2VyaWY7IH1cXG5cXG4jb3ZlcnZpZXctaW5mbyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgfVxcblxcbi5vdmVydmlldyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICBmb250LWZhbWlseTogXFxcIlNwZWN0cmFsIFNDXFxcIiwgc2VyaWY7IH1cXG5cXG4uY3VzdG9tZXItc2VhcmNoLWJhciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgbWFyZ2luLXRvcDogMHB4O1xcbiAgZm9udC1zaXplOiAxNXB4O1xcbiAgYm9yZGVyLWxlZnQ6IHNvbGlkIGJsYWNrIDFweDtcXG4gIGhlaWdodDogMTEwcHg7IH1cXG5cXG4uc2VhcmNoLXRpdGxlIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIG1hcmdpbi10b3A6IDQwcHg7IH1cXG5cXG4uc2VhcmNoLWN1c3RvbWVycyB7XFxuICBtYXJnaW46IDQwcHggMHB4IDBweCAyMHB4OyB9XFxuXFxuaDMge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJTcGVjdHJhbCBTQ1xcXCIsIHNlcmlmO1xcbiAgbWFyZ2luLWxlZnQ6IDMwcHg7IH1cXG5cXG4uc2VhcmNoLWN1c3RvbWVyLW5hbWUge1xcbiAgbWFyZ2luOiA0MHB4IDEwcHggNDBweCAyMHB4O1xcbiAgd2lkdGg6IDMwMHB4OyB9XFxuXFxuaDUge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJTcGVjdHJhbCBTQ1xcXCIsIHNlcmlmO1xcbiAgZm9udC1zaXplOiAzNXB4O1xcbiAgbWFyZ2luOiAwcHggMHB4IDVweCAwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7IH1cXG5cXG4uY3VzdG9tZXItaW5mby1oZWFkZXJzIHtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICBib3JkZXI6IHNvbGlkIGJsYWNrIDFweDtcXG4gIG1hcmdpbi1sZWZ0OiAzLjUlO1xcbiAgbWFyZ2luLXJpZ2h0OiAzLjUlO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgcGFkZGluZy10b3A6IDEwcHg7XFxuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiU3BlY3RyYWwgU0NcXFwiLCBzZXJpZjsgfVxcblxcbi52aWV3LWluZm9ybWF0aW9uIHtcXG4gIGhlaWdodDogMzUwcHg7XFxuICBib3JkZXI6IHNvbGlkIGJsYWNrIDFweDtcXG4gIG1hcmdpbjogMHB4IDQwcHggMHB4IDQwcHg7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBvdmVyZmxvdzogc2Nyb2xsOyB9XFxuXFxuLnZpZXctaW5mb3JtYXRpb246Oi13ZWJraXQtc2Nyb2xsYmFyIHtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXG4gIHdpZHRoOiA3cHg7IH1cXG5cXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcXG4gIGJveC1zaGFkb3c6IDAgMCAxcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpOyB9XFxuXFxuI3RvdGFsLXNwZW50IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBmb250LWZhbWlseTogXFxcIlNwZWN0cmFsIFNDXFxcIiwgc2VyaWY7XFxuICBmb250LXNpemU6IDIwcHg7XFxuICBtYXJnaW4tdG9wOiAwcHg7IH1cXG5cXG4uY3VzdG9tZXItZXJyb3ItbWVzc2FnZSB7XFxuICBmb250LWZhbWlseTogXFxcIlNwZWN0cmFsIFNDXFxcIiwgc2VyaWY7XFxuICBmb250LXNpemU6IDE0cHg7XFxuICBtYXJnaW46IDUwcHg7IH1cXG5cXG4uZm9vdGVyIHtcXG4gIGhlaWdodDogNjBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgb3BhY2l0eTogMC43OyB9XFxuXFxuLmNvbmZpcm1hdGlvbi1tZXNzYWdlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiU3BlY3RyYWwgU0NcXFwiLCBzZXJpZjsgfVxcblxcbi5jdXN0b21lci13ZWxjb21lIHtcXG4gIGhlaWdodDogNTBweDtcXG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDVweDtcXG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA1cHg7XFxuICBmb250LXNpemU6IDM1cHg7XFxuICBmb250LWZhbWlseTogXFxcIlNwZWN0cmFsIFNDXFxcIiwgc2VyaWY7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBwYWRkaW5nLXRvcDogMTBweDtcXG4gIG1hcmdpbi10b3A6IDVweDtcXG4gIG1hcmdpbi1ib3R0b206IDBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgb3BhY2l0eTogMC43OyB9XFxuXFxuLmN1c3RvbWVyLXN0YXR1cyB7XFxuICBmb250LWZhbWlseTogXFxcIlNwZWN0cmFsIFNDXFxcIiwgc2VyaWY7XFxuICBtYXJnaW4tdG9wOiAyMHB4O1xcbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xcbiAgcGFkZGluZy10b3A6IDBweDtcXG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDVweDtcXG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA1cHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICBmb250LXNpemU6IDE4cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIG9wYWNpdHk6IDAuNzsgfVxcblxcbi5Hb2xkIHtcXG4gIGhlaWdodDogMzBweDtcXG4gIG1hcmdpbjogMThweCAwcHggMHB4IDBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBwYWRkaW5nOiAwcHggNDBweCAwcHggNDBweDtcXG4gIGJvcmRlcjogc29saWQgMXB4O1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgY29sb3I6ICM5OTVjMDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZERjAwOyB9XFxuXFxuLlNpbHZlciB7XFxuICBoZWlnaHQ6IDMwcHg7XFxuICBtYXJnaW46IDE4cHggMHB4IDBweCAwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgcGFkZGluZzogMHB4IDQwcHggMHB4IDQwcHg7XFxuICBib3JkZXI6IHNvbGlkIDFweDtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGNvbG9yOiBibGFjaztcXG4gIGJhY2tncm91bmQtY29sb3I6IGRhcmtncmV5OyB9XFxuXFxuLkJyb256ZSB7XFxuICBoZWlnaHQ6IDMwcHg7XFxuICBtYXJnaW46IDE4cHggMHB4IDBweCAwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgcGFkZGluZzogMHB4IDQwcHggMHB4IDQwcHg7XFxuICBib3JkZXI6IHNvbGlkIDFweDtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNjZDdmMzI7IH1cXG5cXG4uQmx1ZSB7XFxuICBoZWlnaHQ6IDMwcHg7XFxuICBtYXJnaW46IDE4cHggMHB4IDBweCAwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgcGFkZGluZzogMHB4IDQwcHggMHB4IDQwcHg7XFxuICBib3JkZXI6IHNvbGlkIDFweDtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJveWFsYmx1ZTsgfVxcblxcbi5maWx0ZXItcm9vbXMge1xcbiAgaGVpZ2h0OiAzNzBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgbWFyZ2luLXRvcDogMjBweDtcXG4gIHBhZGRpbmctbGVmdDogMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgd2lkdGg6IDI1JTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgb3BhY2l0eTogMC43OyB9XFxuXFxuLmZpbHRlci10aXRsZSB7XFxuICBtYXJnaW4tbGVmdDogMjUlO1xcbiAgZm9udC1zaXplOiAyNXB4OyB9XFxuXFxuLnRhZy1pbWFnZSB7XFxuICBoZWlnaHQ6IDgwcHg7XFxuICB3aWR0aDogMTIwcHg7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7IH1cXG5cXG4udGFnLWltYWdlOmhvdmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjsgfVxcblxcbi5ncm93IGltZyB7XFxuICB0cmFuc2l0aW9uOiAxcyBlYXNlOyB9XFxuXFxuLmdyb3cgaW1nOmhvdmVyIHtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xcbiAgLW1zLXRyYW5zZm9ybTogc2NhbGUoMS4yKTtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4yKTtcXG4gIHRyYW5zaXRpb246IDFzIGVhc2U7IH1cXG5cXG4udGFnLXJvdyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7IH1cXG5cXG4udGFnLW5hbWUge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG4gIGZvbnQtc2l6ZTogMTJweDtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICBmb250LWZhbWlseTogXFxcIlNwZWN0cmFsIFNDXFxcIiwgc2VyaWY7XFxuICBmb250LXNpemU6IDE1cHg7IH1cXG5cXG5pbnB1dFt0eXBlPXJhZGlvXTpjaGVja2VkICsgbGFiZWwge1xcbiAgb3BhY2l0eTogMC4yO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsOyB9XFxuXFxuLnZpZXctYXZhaWxhYmxlLXJvb21zIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93OyB9XFxuXFxuLmJvb2stYS1yb29tIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiU3BlY3RyYWwgU0NcXFwiLCBzZXJpZjtcXG4gIG1hcmdpbjogMjBweCAwcHggNXB4IDIwcHg7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICB3aWR0aDogNzUlO1xcbiAgZm9udC1zaXplOiAzNXB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBvcGFjaXR5OiAwLjc7IH1cXG5cXG4uYm9vay1yb29tLWRhdGUge1xcbiAgd2lkdGg6IDE1MHB4O1xcbiAgbWFyZ2luLWJvdHRvbTogMjBweDsgfVxcblxcbi5maWx0ZXItc3RhdHVzIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiU3BlY3RyYWwgU0NcXFwiLCBzZXJpZjtcXG4gIGZvbnQtc2l6ZTogMTVweDtcXG4gIHdpZHRoOiA4MCU7XFxuICBtYXJnaW4tdG9wOiAzMCU7XFxuICBtYXJnaW4tbGVmdDogMzBweDsgfVxcblxcbi5oaWRkZW4ge1xcbiAgZGlzcGxheTogbm9uZTsgfVxcblwiLCBcIlwiXSk7XG5cbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVzZVNvdXJjZU1hcCkge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCk7XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIHJldHVybiAnQG1lZGlhICcgKyBpdGVtWzJdICsgJ3snICsgY29udGVudCArICd9JztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBjb250ZW50O1xuICAgICAgfVxuICAgIH0pLmpvaW4oJycpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gKG1vZHVsZXMsIG1lZGlhUXVlcnkpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09ICdzdHJpbmcnKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCAnJ11dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZCA9IHRoaXNbaV1bMF07XG5cbiAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKGkgPSAwOyBpIDwgbW9kdWxlcy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGl0ZW0gPSBtb2R1bGVzW2ldOyAvLyBza2lwIGFscmVhZHkgaW1wb3J0ZWQgbW9kdWxlXG4gICAgICAvLyB0aGlzIGltcGxlbWVudGF0aW9uIGlzIG5vdCAxMDAlIHBlcmZlY3QgZm9yIHdlaXJkIG1lZGlhIHF1ZXJ5IGNvbWJpbmF0aW9uc1xuICAgICAgLy8gd2hlbiBhIG1vZHVsZSBpcyBpbXBvcnRlZCBtdWx0aXBsZSB0aW1lcyB3aXRoIGRpZmZlcmVudCBtZWRpYSBxdWVyaWVzLlxuICAgICAgLy8gSSBob3BlIHRoaXMgd2lsbCBuZXZlciBvY2N1ciAoSGV5IHRoaXMgd2F5IHdlIGhhdmUgc21hbGxlciBidW5kbGVzKVxuXG4gICAgICBpZiAoaXRlbVswXSA9PSBudWxsIHx8ICFhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGlmIChtZWRpYVF1ZXJ5ICYmICFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhUXVlcnk7XG4gICAgICAgIH0gZWxzZSBpZiAobWVkaWFRdWVyeSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSAnKCcgKyBpdGVtWzJdICsgJykgYW5kICgnICsgbWVkaWFRdWVyeSArICcpJztcbiAgICAgICAgfVxuXG4gICAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59O1xuXG5mdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV0gfHwgJyc7XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh1c2VTb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgPT09ICdmdW5jdGlvbicpIHtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IHRvQ29tbWVudChjc3NNYXBwaW5nKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuICcvKiMgc291cmNlVVJMPScgKyBjc3NNYXBwaW5nLnNvdXJjZVJvb3QgKyBzb3VyY2UgKyAnICovJztcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKCdcXG4nKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbignXFxuJyk7XG59IC8vIEFkYXB0ZWQgZnJvbSBjb252ZXJ0LXNvdXJjZS1tYXAgKE1JVClcblxuXG5mdW5jdGlvbiB0b0NvbW1lbnQoc291cmNlTWFwKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKTtcbiAgdmFyIGRhdGEgPSAnc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsJyArIGJhc2U2NDtcbiAgcmV0dXJuICcvKiMgJyArIGRhdGEgKyAnICovJztcbn0iLCIvKlxuXHRNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuXHRBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuXG52YXIgc3R5bGVzSW5Eb20gPSB7fTtcblxudmFyXHRtZW1vaXplID0gZnVuY3Rpb24gKGZuKSB7XG5cdHZhciBtZW1vO1xuXG5cdHJldHVybiBmdW5jdGlvbiAoKSB7XG5cdFx0aWYgKHR5cGVvZiBtZW1vID09PSBcInVuZGVmaW5lZFwiKSBtZW1vID0gZm4uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcblx0XHRyZXR1cm4gbWVtbztcblx0fTtcbn07XG5cbnZhciBpc09sZElFID0gbWVtb2l6ZShmdW5jdGlvbiAoKSB7XG5cdC8vIFRlc3QgZm9yIElFIDw9IDkgYXMgcHJvcG9zZWQgYnkgQnJvd3NlcmhhY2tzXG5cdC8vIEBzZWUgaHR0cDovL2Jyb3dzZXJoYWNrcy5jb20vI2hhY2stZTcxZDg2OTJmNjUzMzQxNzNmZWU3MTVjMjIyY2I4MDVcblx0Ly8gVGVzdHMgZm9yIGV4aXN0ZW5jZSBvZiBzdGFuZGFyZCBnbG9iYWxzIGlzIHRvIGFsbG93IHN0eWxlLWxvYWRlclxuXHQvLyB0byBvcGVyYXRlIGNvcnJlY3RseSBpbnRvIG5vbi1zdGFuZGFyZCBlbnZpcm9ubWVudHNcblx0Ly8gQHNlZSBodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlci9pc3N1ZXMvMTc3XG5cdHJldHVybiB3aW5kb3cgJiYgZG9jdW1lbnQgJiYgZG9jdW1lbnQuYWxsICYmICF3aW5kb3cuYXRvYjtcbn0pO1xuXG52YXIgZ2V0VGFyZ2V0ID0gZnVuY3Rpb24gKHRhcmdldCwgcGFyZW50KSB7XG4gIGlmIChwYXJlbnQpe1xuICAgIHJldHVybiBwYXJlbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuICB9XG4gIHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG59O1xuXG52YXIgZ2V0RWxlbWVudCA9IChmdW5jdGlvbiAoZm4pIHtcblx0dmFyIG1lbW8gPSB7fTtcblxuXHRyZXR1cm4gZnVuY3Rpb24odGFyZ2V0LCBwYXJlbnQpIHtcbiAgICAgICAgICAgICAgICAvLyBJZiBwYXNzaW5nIGZ1bmN0aW9uIGluIG9wdGlvbnMsIHRoZW4gdXNlIGl0IGZvciByZXNvbHZlIFwiaGVhZFwiIGVsZW1lbnQuXG4gICAgICAgICAgICAgICAgLy8gVXNlZnVsIGZvciBTaGFkb3cgUm9vdCBzdHlsZSBpLmVcbiAgICAgICAgICAgICAgICAvLyB7XG4gICAgICAgICAgICAgICAgLy8gICBpbnNlcnRJbnRvOiBmdW5jdGlvbiAoKSB7IHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Zvb1wiKS5zaGFkb3dSb290IH1cbiAgICAgICAgICAgICAgICAvLyB9XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB0YXJnZXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0YXJnZXQoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcblx0XHRcdHZhciBzdHlsZVRhcmdldCA9IGdldFRhcmdldC5jYWxsKHRoaXMsIHRhcmdldCwgcGFyZW50KTtcblx0XHRcdC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cdFx0XHRpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG5cdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0Ly8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcblx0XHRcdFx0XHQvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuXHRcdFx0XHRcdHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG5cdFx0XHRcdH0gY2F0Y2goZSkge1xuXHRcdFx0XHRcdHN0eWxlVGFyZ2V0ID0gbnVsbDtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0bWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG5cdFx0fVxuXHRcdHJldHVybiBtZW1vW3RhcmdldF1cblx0fTtcbn0pKCk7XG5cbnZhciBzaW5nbGV0b24gPSBudWxsO1xudmFyXHRzaW5nbGV0b25Db3VudGVyID0gMDtcbnZhclx0c3R5bGVzSW5zZXJ0ZWRBdFRvcCA9IFtdO1xuXG52YXJcdGZpeFVybHMgPSByZXF1aXJlKFwiLi91cmxzXCIpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGxpc3QsIG9wdGlvbnMpIHtcblx0aWYgKHR5cGVvZiBERUJVRyAhPT0gXCJ1bmRlZmluZWRcIiAmJiBERUJVRykge1xuXHRcdGlmICh0eXBlb2YgZG9jdW1lbnQgIT09IFwib2JqZWN0XCIpIHRocm93IG5ldyBFcnJvcihcIlRoZSBzdHlsZS1sb2FkZXIgY2Fubm90IGJlIHVzZWQgaW4gYSBub24tYnJvd3NlciBlbnZpcm9ubWVudFwiKTtcblx0fVxuXG5cdG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuXG5cdG9wdGlvbnMuYXR0cnMgPSB0eXBlb2Ygb3B0aW9ucy5hdHRycyA9PT0gXCJvYmplY3RcIiA/IG9wdGlvbnMuYXR0cnMgOiB7fTtcblxuXHQvLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cblx0Ly8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxuXHRpZiAoIW9wdGlvbnMuc2luZ2xldG9uICYmIHR5cGVvZiBvcHRpb25zLnNpbmdsZXRvbiAhPT0gXCJib29sZWFuXCIpIG9wdGlvbnMuc2luZ2xldG9uID0gaXNPbGRJRSgpO1xuXG5cdC8vIEJ5IGRlZmF1bHQsIGFkZCA8c3R5bGU+IHRhZ3MgdG8gdGhlIDxoZWFkPiBlbGVtZW50XG4gICAgICAgIGlmICghb3B0aW9ucy5pbnNlcnRJbnRvKSBvcHRpb25zLmluc2VydEludG8gPSBcImhlYWRcIjtcblxuXHQvLyBCeSBkZWZhdWx0LCBhZGQgPHN0eWxlPiB0YWdzIHRvIHRoZSBib3R0b20gb2YgdGhlIHRhcmdldFxuXHRpZiAoIW9wdGlvbnMuaW5zZXJ0QXQpIG9wdGlvbnMuaW5zZXJ0QXQgPSBcImJvdHRvbVwiO1xuXG5cdHZhciBzdHlsZXMgPSBsaXN0VG9TdHlsZXMobGlzdCwgb3B0aW9ucyk7XG5cblx0YWRkU3R5bGVzVG9Eb20oc3R5bGVzLCBvcHRpb25zKTtcblxuXHRyZXR1cm4gZnVuY3Rpb24gdXBkYXRlIChuZXdMaXN0KSB7XG5cdFx0dmFyIG1heVJlbW92ZSA9IFtdO1xuXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBpdGVtID0gc3R5bGVzW2ldO1xuXHRcdFx0dmFyIGRvbVN0eWxlID0gc3R5bGVzSW5Eb21baXRlbS5pZF07XG5cblx0XHRcdGRvbVN0eWxlLnJlZnMtLTtcblx0XHRcdG1heVJlbW92ZS5wdXNoKGRvbVN0eWxlKTtcblx0XHR9XG5cblx0XHRpZihuZXdMaXN0KSB7XG5cdFx0XHR2YXIgbmV3U3R5bGVzID0gbGlzdFRvU3R5bGVzKG5ld0xpc3QsIG9wdGlvbnMpO1xuXHRcdFx0YWRkU3R5bGVzVG9Eb20obmV3U3R5bGVzLCBvcHRpb25zKTtcblx0XHR9XG5cblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IG1heVJlbW92ZS5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGRvbVN0eWxlID0gbWF5UmVtb3ZlW2ldO1xuXG5cdFx0XHRpZihkb21TdHlsZS5yZWZzID09PSAwKSB7XG5cdFx0XHRcdGZvciAodmFyIGogPSAwOyBqIDwgZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspIGRvbVN0eWxlLnBhcnRzW2pdKCk7XG5cblx0XHRcdFx0ZGVsZXRlIHN0eWxlc0luRG9tW2RvbVN0eWxlLmlkXTtcblx0XHRcdH1cblx0XHR9XG5cdH07XG59O1xuXG5mdW5jdGlvbiBhZGRTdHlsZXNUb0RvbSAoc3R5bGVzLCBvcHRpb25zKSB7XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIGl0ZW0gPSBzdHlsZXNbaV07XG5cdFx0dmFyIGRvbVN0eWxlID0gc3R5bGVzSW5Eb21baXRlbS5pZF07XG5cblx0XHRpZihkb21TdHlsZSkge1xuXHRcdFx0ZG9tU3R5bGUucmVmcysrO1xuXG5cdFx0XHRmb3IodmFyIGogPSAwOyBqIDwgZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0ZG9tU3R5bGUucGFydHNbal0oaXRlbS5wYXJ0c1tqXSk7XG5cdFx0XHR9XG5cblx0XHRcdGZvcig7IGogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdGRvbVN0eWxlLnBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSwgb3B0aW9ucykpO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHR2YXIgcGFydHMgPSBbXTtcblxuXHRcdFx0Zm9yKHZhciBqID0gMDsgaiA8IGl0ZW0ucGFydHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0cGFydHMucHVzaChhZGRTdHlsZShpdGVtLnBhcnRzW2pdLCBvcHRpb25zKSk7XG5cdFx0XHR9XG5cblx0XHRcdHN0eWxlc0luRG9tW2l0ZW0uaWRdID0ge2lkOiBpdGVtLmlkLCByZWZzOiAxLCBwYXJ0czogcGFydHN9O1xuXHRcdH1cblx0fVxufVxuXG5mdW5jdGlvbiBsaXN0VG9TdHlsZXMgKGxpc3QsIG9wdGlvbnMpIHtcblx0dmFyIHN0eWxlcyA9IFtdO1xuXHR2YXIgbmV3U3R5bGVzID0ge307XG5cblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIGl0ZW0gPSBsaXN0W2ldO1xuXHRcdHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuXHRcdHZhciBjc3MgPSBpdGVtWzFdO1xuXHRcdHZhciBtZWRpYSA9IGl0ZW1bMl07XG5cdFx0dmFyIHNvdXJjZU1hcCA9IGl0ZW1bM107XG5cdFx0dmFyIHBhcnQgPSB7Y3NzOiBjc3MsIG1lZGlhOiBtZWRpYSwgc291cmNlTWFwOiBzb3VyY2VNYXB9O1xuXG5cdFx0aWYoIW5ld1N0eWxlc1tpZF0pIHN0eWxlcy5wdXNoKG5ld1N0eWxlc1tpZF0gPSB7aWQ6IGlkLCBwYXJ0czogW3BhcnRdfSk7XG5cdFx0ZWxzZSBuZXdTdHlsZXNbaWRdLnBhcnRzLnB1c2gocGFydCk7XG5cdH1cblxuXHRyZXR1cm4gc3R5bGVzO1xufVxuXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQgKG9wdGlvbnMsIHN0eWxlKSB7XG5cdHZhciB0YXJnZXQgPSBnZXRFbGVtZW50KG9wdGlvbnMuaW5zZXJ0SW50bylcblxuXHRpZiAoIXRhcmdldCkge1xuXHRcdHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0SW50bycgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuXHR9XG5cblx0dmFyIGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wID0gc3R5bGVzSW5zZXJ0ZWRBdFRvcFtzdHlsZXNJbnNlcnRlZEF0VG9wLmxlbmd0aCAtIDFdO1xuXG5cdGlmIChvcHRpb25zLmluc2VydEF0ID09PSBcInRvcFwiKSB7XG5cdFx0aWYgKCFsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcCkge1xuXHRcdFx0dGFyZ2V0Lmluc2VydEJlZm9yZShzdHlsZSwgdGFyZ2V0LmZpcnN0Q2hpbGQpO1xuXHRcdH0gZWxzZSBpZiAobGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AubmV4dFNpYmxpbmcpIHtcblx0XHRcdHRhcmdldC5pbnNlcnRCZWZvcmUoc3R5bGUsIGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wLm5leHRTaWJsaW5nKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcblx0XHR9XG5cdFx0c3R5bGVzSW5zZXJ0ZWRBdFRvcC5wdXNoKHN0eWxlKTtcblx0fSBlbHNlIGlmIChvcHRpb25zLmluc2VydEF0ID09PSBcImJvdHRvbVwiKSB7XG5cdFx0dGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcblx0fSBlbHNlIGlmICh0eXBlb2Ygb3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJvYmplY3RcIiAmJiBvcHRpb25zLmluc2VydEF0LmJlZm9yZSkge1xuXHRcdHZhciBuZXh0U2libGluZyA9IGdldEVsZW1lbnQob3B0aW9ucy5pbnNlcnRBdC5iZWZvcmUsIHRhcmdldCk7XG5cdFx0dGFyZ2V0Lmluc2VydEJlZm9yZShzdHlsZSwgbmV4dFNpYmxpbmcpO1xuXHR9IGVsc2Uge1xuXHRcdHRocm93IG5ldyBFcnJvcihcIltTdHlsZSBMb2FkZXJdXFxuXFxuIEludmFsaWQgdmFsdWUgZm9yIHBhcmFtZXRlciAnaW5zZXJ0QXQnICgnb3B0aW9ucy5pbnNlcnRBdCcpIGZvdW5kLlxcbiBNdXN0IGJlICd0b3AnLCAnYm90dG9tJywgb3IgT2JqZWN0LlxcbiAoaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIjaW5zZXJ0YXQpXFxuXCIpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudCAoc3R5bGUpIHtcblx0aWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHJldHVybiBmYWxzZTtcblx0c3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG5cblx0dmFyIGlkeCA9IHN0eWxlc0luc2VydGVkQXRUb3AuaW5kZXhPZihzdHlsZSk7XG5cdGlmKGlkeCA+PSAwKSB7XG5cdFx0c3R5bGVzSW5zZXJ0ZWRBdFRvcC5zcGxpY2UoaWR4LCAxKTtcblx0fVxufVxuXG5mdW5jdGlvbiBjcmVhdGVTdHlsZUVsZW1lbnQgKG9wdGlvbnMpIHtcblx0dmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuXG5cdGlmKG9wdGlvbnMuYXR0cnMudHlwZSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0b3B0aW9ucy5hdHRycy50eXBlID0gXCJ0ZXh0L2Nzc1wiO1xuXHR9XG5cblx0aWYob3B0aW9ucy5hdHRycy5ub25jZSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0dmFyIG5vbmNlID0gZ2V0Tm9uY2UoKTtcblx0XHRpZiAobm9uY2UpIHtcblx0XHRcdG9wdGlvbnMuYXR0cnMubm9uY2UgPSBub25jZTtcblx0XHR9XG5cdH1cblxuXHRhZGRBdHRycyhzdHlsZSwgb3B0aW9ucy5hdHRycyk7XG5cdGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zLCBzdHlsZSk7XG5cblx0cmV0dXJuIHN0eWxlO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVMaW5rRWxlbWVudCAob3B0aW9ucykge1xuXHR2YXIgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaW5rXCIpO1xuXG5cdGlmKG9wdGlvbnMuYXR0cnMudHlwZSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0b3B0aW9ucy5hdHRycy50eXBlID0gXCJ0ZXh0L2Nzc1wiO1xuXHR9XG5cdG9wdGlvbnMuYXR0cnMucmVsID0gXCJzdHlsZXNoZWV0XCI7XG5cblx0YWRkQXR0cnMobGluaywgb3B0aW9ucy5hdHRycyk7XG5cdGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zLCBsaW5rKTtcblxuXHRyZXR1cm4gbGluaztcbn1cblxuZnVuY3Rpb24gYWRkQXR0cnMgKGVsLCBhdHRycykge1xuXHRPYmplY3Qua2V5cyhhdHRycykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG5cdFx0ZWwuc2V0QXR0cmlidXRlKGtleSwgYXR0cnNba2V5XSk7XG5cdH0pO1xufVxuXG5mdW5jdGlvbiBnZXROb25jZSgpIHtcblx0aWYgKHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyA9PT0gJ3VuZGVmaW5lZCcpIHtcblx0XHRyZXR1cm4gbnVsbDtcblx0fVxuXG5cdHJldHVybiBfX3dlYnBhY2tfbm9uY2VfXztcbn1cblxuZnVuY3Rpb24gYWRkU3R5bGUgKG9iaiwgb3B0aW9ucykge1xuXHR2YXIgc3R5bGUsIHVwZGF0ZSwgcmVtb3ZlLCByZXN1bHQ7XG5cblx0Ly8gSWYgYSB0cmFuc2Zvcm0gZnVuY3Rpb24gd2FzIGRlZmluZWQsIHJ1biBpdCBvbiB0aGUgY3NzXG5cdGlmIChvcHRpb25zLnRyYW5zZm9ybSAmJiBvYmouY3NzKSB7XG5cdCAgICByZXN1bHQgPSB0eXBlb2Ygb3B0aW9ucy50cmFuc2Zvcm0gPT09ICdmdW5jdGlvbidcblx0XHQgPyBvcHRpb25zLnRyYW5zZm9ybShvYmouY3NzKSBcblx0XHQgOiBvcHRpb25zLnRyYW5zZm9ybS5kZWZhdWx0KG9iai5jc3MpO1xuXG5cdCAgICBpZiAocmVzdWx0KSB7XG5cdCAgICBcdC8vIElmIHRyYW5zZm9ybSByZXR1cm5zIGEgdmFsdWUsIHVzZSB0aGF0IGluc3RlYWQgb2YgdGhlIG9yaWdpbmFsIGNzcy5cblx0ICAgIFx0Ly8gVGhpcyBhbGxvd3MgcnVubmluZyBydW50aW1lIHRyYW5zZm9ybWF0aW9ucyBvbiB0aGUgY3NzLlxuXHQgICAgXHRvYmouY3NzID0gcmVzdWx0O1xuXHQgICAgfSBlbHNlIHtcblx0ICAgIFx0Ly8gSWYgdGhlIHRyYW5zZm9ybSBmdW5jdGlvbiByZXR1cm5zIGEgZmFsc3kgdmFsdWUsIGRvbid0IGFkZCB0aGlzIGNzcy5cblx0ICAgIFx0Ly8gVGhpcyBhbGxvd3MgY29uZGl0aW9uYWwgbG9hZGluZyBvZiBjc3Ncblx0ICAgIFx0cmV0dXJuIGZ1bmN0aW9uKCkge1xuXHQgICAgXHRcdC8vIG5vb3Bcblx0ICAgIFx0fTtcblx0ICAgIH1cblx0fVxuXG5cdGlmIChvcHRpb25zLnNpbmdsZXRvbikge1xuXHRcdHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrO1xuXG5cdFx0c3R5bGUgPSBzaW5nbGV0b24gfHwgKHNpbmdsZXRvbiA9IGNyZWF0ZVN0eWxlRWxlbWVudChvcHRpb25zKSk7XG5cblx0XHR1cGRhdGUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIGZhbHNlKTtcblx0XHRyZW1vdmUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIHRydWUpO1xuXG5cdH0gZWxzZSBpZiAoXG5cdFx0b2JqLnNvdXJjZU1hcCAmJlxuXHRcdHR5cGVvZiBVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBVUkwuY3JlYXRlT2JqZWN0VVJMID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgVVJMLnJldm9rZU9iamVjdFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIEJsb2IgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCJcblx0KSB7XG5cdFx0c3R5bGUgPSBjcmVhdGVMaW5rRWxlbWVudChvcHRpb25zKTtcblx0XHR1cGRhdGUgPSB1cGRhdGVMaW5rLmJpbmQobnVsbCwgc3R5bGUsIG9wdGlvbnMpO1xuXHRcdHJlbW92ZSA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG5cblx0XHRcdGlmKHN0eWxlLmhyZWYpIFVSTC5yZXZva2VPYmplY3RVUkwoc3R5bGUuaHJlZik7XG5cdFx0fTtcblx0fSBlbHNlIHtcblx0XHRzdHlsZSA9IGNyZWF0ZVN0eWxlRWxlbWVudChvcHRpb25zKTtcblx0XHR1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGUpO1xuXHRcdHJlbW92ZSA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG5cdFx0fTtcblx0fVxuXG5cdHVwZGF0ZShvYmopO1xuXG5cdHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZSAobmV3T2JqKSB7XG5cdFx0aWYgKG5ld09iaikge1xuXHRcdFx0aWYgKFxuXHRcdFx0XHRuZXdPYmouY3NzID09PSBvYmouY3NzICYmXG5cdFx0XHRcdG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmXG5cdFx0XHRcdG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXBcblx0XHRcdCkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdHVwZGF0ZShvYmogPSBuZXdPYmopO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZW1vdmUoKTtcblx0XHR9XG5cdH07XG59XG5cbnZhciByZXBsYWNlVGV4dCA9IChmdW5jdGlvbiAoKSB7XG5cdHZhciB0ZXh0U3RvcmUgPSBbXTtcblxuXHRyZXR1cm4gZnVuY3Rpb24gKGluZGV4LCByZXBsYWNlbWVudCkge1xuXHRcdHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudDtcblxuXHRcdHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO1xuXHR9O1xufSkoKTtcblxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyAoc3R5bGUsIGluZGV4LCByZW1vdmUsIG9iaikge1xuXHR2YXIgY3NzID0gcmVtb3ZlID8gXCJcIiA6IG9iai5jc3M7XG5cblx0aWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcblx0XHRzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKTtcblx0fSBlbHNlIHtcblx0XHR2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcyk7XG5cdFx0dmFyIGNoaWxkTm9kZXMgPSBzdHlsZS5jaGlsZE5vZGVzO1xuXG5cdFx0aWYgKGNoaWxkTm9kZXNbaW5kZXhdKSBzdHlsZS5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSk7XG5cblx0XHRpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcblx0XHRcdHN0eWxlLmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHN0eWxlLmFwcGVuZENoaWxkKGNzc05vZGUpO1xuXHRcdH1cblx0fVxufVxuXG5mdW5jdGlvbiBhcHBseVRvVGFnIChzdHlsZSwgb2JqKSB7XG5cdHZhciBjc3MgPSBvYmouY3NzO1xuXHR2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG5cblx0aWYobWVkaWEpIHtcblx0XHRzdHlsZS5zZXRBdHRyaWJ1dGUoXCJtZWRpYVwiLCBtZWRpYSlcblx0fVxuXG5cdGlmKHN0eWxlLnN0eWxlU2hlZXQpIHtcblx0XHRzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG5cdH0gZWxzZSB7XG5cdFx0d2hpbGUoc3R5bGUuZmlyc3RDaGlsZCkge1xuXHRcdFx0c3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG5cdFx0fVxuXG5cdFx0c3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG5cdH1cbn1cblxuZnVuY3Rpb24gdXBkYXRlTGluayAobGluaywgb3B0aW9ucywgb2JqKSB7XG5cdHZhciBjc3MgPSBvYmouY3NzO1xuXHR2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuXHQvKlxuXHRcdElmIGNvbnZlcnRUb0Fic29sdXRlVXJscyBpc24ndCBkZWZpbmVkLCBidXQgc291cmNlbWFwcyBhcmUgZW5hYmxlZFxuXHRcdGFuZCB0aGVyZSBpcyBubyBwdWJsaWNQYXRoIGRlZmluZWQgdGhlbiBsZXRzIHR1cm4gY29udmVydFRvQWJzb2x1dGVVcmxzXG5cdFx0b24gYnkgZGVmYXVsdC4gIE90aGVyd2lzZSBkZWZhdWx0IHRvIHRoZSBjb252ZXJ0VG9BYnNvbHV0ZVVybHMgb3B0aW9uXG5cdFx0ZGlyZWN0bHlcblx0Ki9cblx0dmFyIGF1dG9GaXhVcmxzID0gb3B0aW9ucy5jb252ZXJ0VG9BYnNvbHV0ZVVybHMgPT09IHVuZGVmaW5lZCAmJiBzb3VyY2VNYXA7XG5cblx0aWYgKG9wdGlvbnMuY29udmVydFRvQWJzb2x1dGVVcmxzIHx8IGF1dG9GaXhVcmxzKSB7XG5cdFx0Y3NzID0gZml4VXJscyhjc3MpO1xuXHR9XG5cblx0aWYgKHNvdXJjZU1hcCkge1xuXHRcdC8vIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9hLzI2NjAzODc1XG5cdFx0Y3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIiArIGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSkgKyBcIiAqL1wiO1xuXHR9XG5cblx0dmFyIGJsb2IgPSBuZXcgQmxvYihbY3NzXSwgeyB0eXBlOiBcInRleHQvY3NzXCIgfSk7XG5cblx0dmFyIG9sZFNyYyA9IGxpbmsuaHJlZjtcblxuXHRsaW5rLmhyZWYgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGJsb2IpO1xuXG5cdGlmKG9sZFNyYykgVVJMLnJldm9rZU9iamVjdFVSTChvbGRTcmMpO1xufVxuIiwiXG4vKipcbiAqIFdoZW4gc291cmNlIG1hcHMgYXJlIGVuYWJsZWQsIGBzdHlsZS1sb2FkZXJgIHVzZXMgYSBsaW5rIGVsZW1lbnQgd2l0aCBhIGRhdGEtdXJpIHRvXG4gKiBlbWJlZCB0aGUgY3NzIG9uIHRoZSBwYWdlLiBUaGlzIGJyZWFrcyBhbGwgcmVsYXRpdmUgdXJscyBiZWNhdXNlIG5vdyB0aGV5IGFyZSByZWxhdGl2ZSB0byBhXG4gKiBidW5kbGUgaW5zdGVhZCBvZiB0aGUgY3VycmVudCBwYWdlLlxuICpcbiAqIE9uZSBzb2x1dGlvbiBpcyB0byBvbmx5IHVzZSBmdWxsIHVybHMsIGJ1dCB0aGF0IG1heSBiZSBpbXBvc3NpYmxlLlxuICpcbiAqIEluc3RlYWQsIHRoaXMgZnVuY3Rpb24gXCJmaXhlc1wiIHRoZSByZWxhdGl2ZSB1cmxzIHRvIGJlIGFic29sdXRlIGFjY29yZGluZyB0byB0aGUgY3VycmVudCBwYWdlIGxvY2F0aW9uLlxuICpcbiAqIEEgcnVkaW1lbnRhcnkgdGVzdCBzdWl0ZSBpcyBsb2NhdGVkIGF0IGB0ZXN0L2ZpeFVybHMuanNgIGFuZCBjYW4gYmUgcnVuIHZpYSB0aGUgYG5wbSB0ZXN0YCBjb21tYW5kLlxuICpcbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3MpIHtcbiAgLy8gZ2V0IGN1cnJlbnQgbG9jYXRpb25cbiAgdmFyIGxvY2F0aW9uID0gdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiAmJiB3aW5kb3cubG9jYXRpb247XG5cbiAgaWYgKCFsb2NhdGlvbikge1xuICAgIHRocm93IG5ldyBFcnJvcihcImZpeFVybHMgcmVxdWlyZXMgd2luZG93LmxvY2F0aW9uXCIpO1xuICB9XG5cblx0Ly8gYmxhbmsgb3IgbnVsbD9cblx0aWYgKCFjc3MgfHwgdHlwZW9mIGNzcyAhPT0gXCJzdHJpbmdcIikge1xuXHQgIHJldHVybiBjc3M7XG4gIH1cblxuICB2YXIgYmFzZVVybCA9IGxvY2F0aW9uLnByb3RvY29sICsgXCIvL1wiICsgbG9jYXRpb24uaG9zdDtcbiAgdmFyIGN1cnJlbnREaXIgPSBiYXNlVXJsICsgbG9jYXRpb24ucGF0aG5hbWUucmVwbGFjZSgvXFwvW15cXC9dKiQvLCBcIi9cIik7XG5cblx0Ly8gY29udmVydCBlYWNoIHVybCguLi4pXG5cdC8qXG5cdFRoaXMgcmVndWxhciBleHByZXNzaW9uIGlzIGp1c3QgYSB3YXkgdG8gcmVjdXJzaXZlbHkgbWF0Y2ggYnJhY2tldHMgd2l0aGluXG5cdGEgc3RyaW5nLlxuXG5cdCAvdXJsXFxzKlxcKCAgPSBNYXRjaCBvbiB0aGUgd29yZCBcInVybFwiIHdpdGggYW55IHdoaXRlc3BhY2UgYWZ0ZXIgaXQgYW5kIHRoZW4gYSBwYXJlbnNcblx0ICAgKCAgPSBTdGFydCBhIGNhcHR1cmluZyBncm91cFxuXHQgICAgICg/OiAgPSBTdGFydCBhIG5vbi1jYXB0dXJpbmcgZ3JvdXBcblx0ICAgICAgICAgW14pKF0gID0gTWF0Y2ggYW55dGhpbmcgdGhhdCBpc24ndCBhIHBhcmVudGhlc2VzXG5cdCAgICAgICAgIHwgID0gT1Jcblx0ICAgICAgICAgXFwoICA9IE1hdGNoIGEgc3RhcnQgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICg/OiAgPSBTdGFydCBhbm90aGVyIG5vbi1jYXB0dXJpbmcgZ3JvdXBzXG5cdCAgICAgICAgICAgICAgICAgW14pKF0rICA9IE1hdGNoIGFueXRoaW5nIHRoYXQgaXNuJ3QgYSBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgICAgIHwgID0gT1Jcblx0ICAgICAgICAgICAgICAgICBcXCggID0gTWF0Y2ggYSBzdGFydCBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgICAgICAgICBbXikoXSogID0gTWF0Y2ggYW55dGhpbmcgdGhhdCBpc24ndCBhIHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAgICAgXFwpICA9IE1hdGNoIGEgZW5kIHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICApICA9IEVuZCBHcm91cFxuICAgICAgICAgICAgICAqXFwpID0gTWF0Y2ggYW55dGhpbmcgYW5kIHRoZW4gYSBjbG9zZSBwYXJlbnNcbiAgICAgICAgICApICA9IENsb3NlIG5vbi1jYXB0dXJpbmcgZ3JvdXBcbiAgICAgICAgICAqICA9IE1hdGNoIGFueXRoaW5nXG4gICAgICAgKSAgPSBDbG9zZSBjYXB0dXJpbmcgZ3JvdXBcblx0IFxcKSAgPSBNYXRjaCBhIGNsb3NlIHBhcmVuc1xuXG5cdCAvZ2kgID0gR2V0IGFsbCBtYXRjaGVzLCBub3QgdGhlIGZpcnN0LiAgQmUgY2FzZSBpbnNlbnNpdGl2ZS5cblx0ICovXG5cdHZhciBmaXhlZENzcyA9IGNzcy5yZXBsYWNlKC91cmxcXHMqXFwoKCg/OlteKShdfFxcKCg/OlteKShdK3xcXChbXikoXSpcXCkpKlxcKSkqKVxcKS9naSwgZnVuY3Rpb24oZnVsbE1hdGNoLCBvcmlnVXJsKSB7XG5cdFx0Ly8gc3RyaXAgcXVvdGVzIChpZiB0aGV5IGV4aXN0KVxuXHRcdHZhciB1bnF1b3RlZE9yaWdVcmwgPSBvcmlnVXJsXG5cdFx0XHQudHJpbSgpXG5cdFx0XHQucmVwbGFjZSgvXlwiKC4qKVwiJC8sIGZ1bmN0aW9uKG8sICQxKXsgcmV0dXJuICQxOyB9KVxuXHRcdFx0LnJlcGxhY2UoL14nKC4qKSckLywgZnVuY3Rpb24obywgJDEpeyByZXR1cm4gJDE7IH0pO1xuXG5cdFx0Ly8gYWxyZWFkeSBhIGZ1bGwgdXJsPyBubyBjaGFuZ2Vcblx0XHRpZiAoL14oI3xkYXRhOnxodHRwOlxcL1xcL3xodHRwczpcXC9cXC98ZmlsZTpcXC9cXC9cXC98XFxzKiQpL2kudGVzdCh1bnF1b3RlZE9yaWdVcmwpKSB7XG5cdFx0ICByZXR1cm4gZnVsbE1hdGNoO1xuXHRcdH1cblxuXHRcdC8vIGNvbnZlcnQgdGhlIHVybCB0byBhIGZ1bGwgdXJsXG5cdFx0dmFyIG5ld1VybDtcblxuXHRcdGlmICh1bnF1b3RlZE9yaWdVcmwuaW5kZXhPZihcIi8vXCIpID09PSAwKSB7XG5cdFx0ICBcdC8vVE9ETzogc2hvdWxkIHdlIGFkZCBwcm90b2NvbD9cblx0XHRcdG5ld1VybCA9IHVucXVvdGVkT3JpZ1VybDtcblx0XHR9IGVsc2UgaWYgKHVucXVvdGVkT3JpZ1VybC5pbmRleE9mKFwiL1wiKSA9PT0gMCkge1xuXHRcdFx0Ly8gcGF0aCBzaG91bGQgYmUgcmVsYXRpdmUgdG8gdGhlIGJhc2UgdXJsXG5cdFx0XHRuZXdVcmwgPSBiYXNlVXJsICsgdW5xdW90ZWRPcmlnVXJsOyAvLyBhbHJlYWR5IHN0YXJ0cyB3aXRoICcvJ1xuXHRcdH0gZWxzZSB7XG5cdFx0XHQvLyBwYXRoIHNob3VsZCBiZSByZWxhdGl2ZSB0byBjdXJyZW50IGRpcmVjdG9yeVxuXHRcdFx0bmV3VXJsID0gY3VycmVudERpciArIHVucXVvdGVkT3JpZ1VybC5yZXBsYWNlKC9eXFwuXFwvLywgXCJcIik7IC8vIFN0cmlwIGxlYWRpbmcgJy4vJ1xuXHRcdH1cblxuXHRcdC8vIHNlbmQgYmFjayB0aGUgZml4ZWQgdXJsKC4uLilcblx0XHRyZXR1cm4gXCJ1cmwoXCIgKyBKU09OLnN0cmluZ2lmeShuZXdVcmwpICsgXCIpXCI7XG5cdH0pO1xuXG5cdC8vIHNlbmQgYmFjayB0aGUgZml4ZWQgY3NzXG5cdHJldHVybiBmaXhlZENzcztcbn07XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBCb29raW5nIHtcbiAgY29uc3RydWN0b3IoYm9va2luZ0RhdGEpIHtcbiAgICB0aGlzLmlkID0gYm9va2luZ0RhdGEuaWQ7XG4gICAgdGhpcy51c2VySUQgPSBib29raW5nRGF0YS51c2VySUQ7XG4gICAgdGhpcy5kYXRlID0gYm9va2luZ0RhdGEuZGF0ZTtcbiAgICB0aGlzLnJvb21OdW1iZXIgPSBib29raW5nRGF0YS5yb29tTnVtYmVyO1xuICAgIHRoaXMucm9vbVNlcnZpY2VDaGFyZ2VzID0gYm9va2luZ0RhdGEucm9vbVNlcnZpY2VDaGFyZ2VzO1xuICB9XG59XG4iLCJleHBvcnQgbGV0IGJhY2tUb0Jvb2tpbmcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYmFjay10by1ib29raW5nJyk7XG5leHBvcnQgbGV0IGJvb2tBUm9vbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ib29rLWEtcm9vbScpO1xuZXhwb3J0IGxldCBib29raW5nTW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYWRkLWJvb2tpbmctbW9kYWwnKTtcbmV4cG9ydCBsZXQgYm9va1Jvb21EYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJvb2stcm9vbS1kYXRlJyk7XG5leHBvcnQgbGV0IGJvb2tSb29tSGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJvb2stcm9vbS1oZWFkZXInKTtcbmV4cG9ydCBsZXQgY3VzdG9tZXJSb29tcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kaXNwbGF5LWN1c3RvbWVyLXJvb21zJyk7XG5leHBvcnQgbGV0IGN1c3RvbWVyU3RhdHVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmN1c3RvbWVyLXN0YXR1cycpO1xuZXhwb3J0IGxldCBjdXN0b21lclZpZXcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY3VzdG9tZXItdmlldycpO1xuZXhwb3J0IGxldCBjdXN0b21lcldlbGNvbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY3VzdG9tZXItd2VsY29tZScpO1xuZXhwb3J0IGxldCBlbnRlckNyZWRlbnRpYWxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmVudGVyLWNyZWRlbnRpYWxzJyk7XG5leHBvcnQgbGV0IGVycm9yTWVzc2FnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lcnJvci1tZXNzYWdlJyk7XG5leHBvcnQgbGV0IGZpbHRlckNhdGVnb3JpZXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZmlsdGVyLWNhdGVnb3JpZXMnKTtcbmV4cG9ydCBsZXQgZmlsdGVyUmVmcmVzaEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5maWx0ZXItc3RhdHVzJyk7XG5leHBvcnQgbGV0IGZpbHRlclNlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZmlsdGVyLXJvb21zJyk7XG5leHBvcnQgbGV0IGZpbHRlclN1Ym1pdEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5maWx0ZXItYnV0dG9uJyk7XG5leHBvcnQgbGV0IGhvdGVsT3ZlcnZpZXdEYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhvdGVsLW92ZXJ2aWV3LWRhdGUnKTtcbmV4cG9ydCBsZXQgbWFuYWdlclZpZXcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFuYWdlci12aWV3Jyk7XG5leHBvcnQgbGV0IG1vZGFsQ29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtb2RhbC1jb250ZW50Jyk7XG5leHBvcnQgbGV0IG1vZGFsRGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbC1kYXRlJyk7XG5leHBvcnQgbGV0IG1vZGFsVGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwtdGl0bGUnKTtcbmV4cG9ydCBsZXQgb3ZlcnZpZXdJbmZvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI292ZXJ2aWV3LWluZm8nKTtcbmV4cG9ydCBsZXQgcGFzc3dvcmRJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wYXNzd29yZCcpO1xuZXhwb3J0IGxldCBzZWFyY2hDdXN0b21lckJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzZWFyY2gtY3VzdG9tZXItYnV0dG9uJyk7XG5leHBvcnQgbGV0IHNlYXJjaEN1c3RvbWVySW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2VhcmNoLWN1c3RvbWVyLW5hbWUnKTtcbmV4cG9ydCBsZXQgc2VhcmNoVGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2VhcmNoLXRpdGxlJyk7XG5leHBvcnQgbGV0IHNpZ25PdXRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2lnbm91dC1idXR0b24nKTtcbmV4cG9ydCBsZXQgc3VibWl0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN1Ym1pdC1idXR0b24nKTtcbmV4cG9ydCBsZXQgdXNlcm5hbWVJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy51c2VybmFtZScpO1xuZXhwb3J0IGxldCB2aWV3Qm9va2luZ0luZm8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudmlldy1pbmZvcm1hdGlvbicpO1xuIiwiaW1wb3J0IFVzZXIgZnJvbSAnLi9Vc2VyLmpzJztcbmltcG9ydCBSb29tIGZyb20gJy4vUm9vbS5qcyc7XG5pbXBvcnQgQm9va2luZyBmcm9tICcuL0Jvb2tpbmcuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIb3RlbFNlcnZpY2Uge1xuICBjb25zdHJ1Y3Rvcih1c2VyRGF0YSwgcm9vbURhdGEsIGJvb2tpbmdEYXRhKSB7XG4gICAgdGhpcy5yYXdVc2VyRGF0YSA9IHVzZXJEYXRhO1xuICAgIHRoaXMucmF3Um9vbURhdGEgPSByb29tRGF0YTtcbiAgICB0aGlzLnJhd0Jvb2tpbmdEYXRhID0gYm9va2luZ0RhdGE7XG4gICAgdGhpcy5hbGxVc2VycyA9IFtdO1xuICAgIHRoaXMuYWxsUm9vbXMgPSBbXTtcbiAgICB0aGlzLmFsbEJvb2tpbmdzID0gW107XG4gIH1cblxuICBzdGFydCgpIHtcbiAgICB0aGlzLmFkZFVzZXJzKCk7XG4gICAgdGhpcy5hZGRSb29tcygpO1xuICAgIHRoaXMuYWRkQm9va2luZ3MoKTtcbiAgfVxuXG4gIGFkZFVzZXJzKCkge1xuICAgIHJldHVybiB0aGlzLnJhd1VzZXJEYXRhLm1hcChkYXRhID0+IHtcbiAgICAgIGxldCB1c2VyID0gbmV3IFVzZXIoZGF0YSk7XG4gICAgICB0aGlzLmFsbFVzZXJzLnB1c2godXNlcik7XG4gICAgfSlcbiAgfVxuXG4gIGFkZFJvb21zKCkge1xuICAgIHJldHVybiB0aGlzLnJhd1Jvb21EYXRhLm1hcChkYXRhID0+IHtcbiAgICAgIGxldCByb29tID0gbmV3IFJvb20oZGF0YSk7XG4gICAgICB0aGlzLmFsbFJvb21zLnB1c2gocm9vbSk7XG4gICAgfSlcbiAgfVxuXG4gIGFkZEJvb2tpbmdzKCkge1xuICAgIHJldHVybiB0aGlzLnJhd0Jvb2tpbmdEYXRhLm1hcChkYXRhID0+IHtcbiAgICAgIGxldCBib29raW5nID0gbmV3IEJvb2tpbmcoZGF0YSk7XG4gICAgICB0aGlzLmFsbEJvb2tpbmdzLnB1c2goYm9va2luZyk7XG4gICAgfSlcbiAgfVxuXG4gIGZpbmRVc2VyTmFtZSh1c2VybmFtZSkge1xuICAgIGxldCBmaW5kVXNlcklEID0gdXNlcm5hbWUuc3BsaXQoLyhcXGQrKS8pO1xuICAgIGxldCB1c2VySUQgPSBwYXJzZUludChmaW5kVXNlcklEWzFdKTtcbiAgICBsZXQgZmluZE5hbWUgPSB0aGlzLmFsbFVzZXJzLmZpbmQodXNlciA9PiB7XG4gICAgICByZXR1cm4gdXNlci5pZCA9PT0gdXNlcklEO1xuICAgIH0pXG4gICAgcmV0dXJuIGZpbmROYW1lLm5hbWU7XG4gIH1cblxuICBmaW5kTmFtZUZyb21JRChpZCkge1xuICAgIGxldCBmaW5kTmFtZSA9IHRoaXMuYWxsVXNlcnMuZmluZCh1c2VyID0+IHtcbiAgICAgIHJldHVybiB1c2VyLmlkID09PSBpZDtcbiAgICB9KVxuICAgIHJldHVybiBmaW5kTmFtZS5uYW1lO1xuICB9XG5cbiAgZmluZFVzZXJJZChuYW1lKSB7XG4gICAgbGV0IGZpbmROYW1lID0gdGhpcy5hbGxVc2Vycy5maW5kKHVzZXIgPT4ge1xuICAgICAgcmV0dXJuIHVzZXIubmFtZSA9PT0gbmFtZTtcbiAgICB9KVxuICAgIGlmIChmaW5kTmFtZSkge1xuICAgICAgcmV0dXJuIGZpbmROYW1lLmlkO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gJ1dlIGhhdmUgbm8gcmVjb3JkIG9mIHRoZSB1c2VyIHNlYXJjaGVkLiBQbGVhc2Ugc2VhcmNoIGZvciBhbm90aGVyIHVzZXIuJ1xuICAgIH1cbiAgfVxuXG4gIGZpbmRSb29tRGV0YWlscyhyb29tTnVtYmVyKSB7XG4gICAgcmV0dXJuIHRoaXMuYWxsUm9vbXMuZmluZChyb29tID0+IHtcbiAgICAgIHJldHVybiByb29tLm51bWJlciA9PT0gcm9vbU51bWJlcjtcbiAgICB9KVxuICB9XG5cbiAgZmlsdGVyUm9vbUJ5VHlwZShyb29tcywgcm9vbVR5cGUpIHtcbiAgICByZXR1cm4gcm9vbXMuZmlsdGVyKHJvb20gPT4ge1xuICAgICAgcmV0dXJuIHJvb20ucm9vbVR5cGUgPT09IHJvb21UeXBlO1xuICAgIH0pXG4gIH1cblxuICBjYWxjdWxhdGVOdW1iZXJBdmFpbGFibGVSb29tcyhkYXRlKSB7XG4gICAgaWYgKHR5cGVvZiB0aGlzLmZpbmRBdmFpbGFibGVSb29tcyhkYXRlKSA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHJldHVybiAwO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gdGhpcy5maW5kQXZhaWxhYmxlUm9vbXMoZGF0ZSkubGVuZ3RoXG4gICAgfVxuICB9XG5cbiAgZmluZEF2YWlsYWJsZVJvb21zKGRhdGUpIHtcbiAgICBsZXQgcm9vbXNCb29rZWQgPSB0aGlzLmFsbEJvb2tpbmdzLnJlZHVjZSgocm9vbU51bXMsIGJvb2tpbmcpID0+IHtcbiAgICAgIGlmIChib29raW5nLmRhdGUgPT09IGRhdGUpIHtcbiAgICAgICAgcm9vbU51bXMucHVzaChib29raW5nLnJvb21OdW1iZXIpXG4gICAgICB9XG4gICAgICByZXR1cm4gcm9vbU51bXM7XG4gICAgfSwgW10pXG5cbiAgICBsZXQgcm9vbXMgPSBbLi4udGhpcy5hbGxSb29tc107XG5cbiAgICByb29tcy5mb3JFYWNoKHJvb21OdW0gPT4ge1xuICAgICAgaWYgKHJvb21OdW0gPiAyNSB8fCByb29tTnVtIDwgMSkge1xuICAgICAgICBsZXQgaW5kZXggPSByb29tcy5pbmRleE9mKHJvb21OdW0pO1xuICAgICAgICByb29tcy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH0pXG5cbiAgICBpZiAocm9vbXNCb29rZWQubGVuZ3RoIDwgcm9vbXMubGVuZ3RoKSB7XG4gICAgICByb29tcy5mb3JFYWNoKHJvb21OdW0gPT4ge1xuICAgICAgICByb29tcy5mb3JFYWNoKHJvb20gPT4ge1xuICAgICAgICAgIGlmIChyb29tTnVtID09PSByb29tLm51bWJlcikge1xuICAgICAgICAgICAgbGV0IGluZGV4ID0gcm9vbXMuaW5kZXhPZihyb29tKTtcbiAgICAgICAgICAgIHJvb21zLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgfSlcbiAgICAgIHJldHVybiByb29tcztcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuICdTb3JyeSwgdGhlcmUgYXJlIG5vIGF2YWlsYWJsZSByb29tcyBmb3IgdGhlIHNlbGVjdGVkIGRhdGUuIFdlIHNpbmNlcmVseSBhcG9sb2dpemUuIFBsZWFzZSBzZWxlY3QgYSBkaWZmZXJlbnQgZGF0ZSBhbmQgdHJ5IGFnYWluLidcbiAgICB9XG4gIH1cblxuICBmaW5kQ3VzdG9tZXJCb29raW5ncyhpZCkge1xuICAgIHJldHVybiB0aGlzLmFsbEJvb2tpbmdzLnJlZHVjZSgoYWxsVXNlckJvb2tpbmdzLCBib29raW5nKSA9PiB7XG4gICAgICBpZiAoYm9va2luZy51c2VySUQgPT0gaWQgJiYgYm9va2luZy5yb29tTnVtYmVyID4gMSkge1xuICAgICAgICB0aGlzLmFsbFJvb21zLmZvckVhY2gocm9vbSA9PiB7XG4gICAgICAgICAgaWYgKHJvb20ubnVtYmVyID09PSBib29raW5nLnJvb21OdW1iZXIpIHtcbiAgICAgICAgICAgIGJvb2tpbmcucm9vbVR5cGUgPSByb29tLnJvb21UeXBlO1xuICAgICAgICAgICAgYm9va2luZy5jb3N0UGVyTmlnaHQgPSByb29tLmNvc3RQZXJOaWdodDtcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIHRoaXMuYWxsVXNlcnMuZm9yRWFjaCh1c2VyID0+IHtcbiAgICAgICAgICBpZiAodXNlci5pZCA9PT0gYm9va2luZy51c2VySUQpIHtcbiAgICAgICAgICAgIGJvb2tpbmcuZ3Vlc3ROYW1lID0gdXNlci5uYW1lO1xuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgYWxsVXNlckJvb2tpbmdzLnB1c2goYm9va2luZyk7XG4gICAgICB9XG4gICAgICByZXR1cm4gYWxsVXNlckJvb2tpbmdzO1xuICAgIH0sIFtdKVxuICB9XG5cbiAgZmluZEJvb2tpbmdzKGRhdGUpIHtcbiAgICBsZXQgdG9kYXlCb29raW5ncyA9IHRoaXMuYWxsQm9va2luZ3MucmVkdWNlKCh0b2RheUJvb2tpbmdzLCBib29raW5nKSA9PiB7XG4gICAgICBpZiAoYm9va2luZy5yb29tTnVtYmVyID4gMCAmJiBib29raW5nLmRhdGUgPT09IGRhdGUpIHtcbiAgICAgICAgdGhpcy5hbGxSb29tcy5mb3JFYWNoKHJvb20gPT4ge1xuICAgICAgICAgIGlmIChyb29tLm51bWJlciA9PSBib29raW5nLnJvb21OdW1iZXIpIHtcbiAgICAgICAgICAgIGJvb2tpbmcucm9vbVR5cGUgPSByb29tLnJvb21UeXBlO1xuICAgICAgICAgICAgYm9va2luZy5jb3N0UGVyTmlnaHQgPSByb29tLmNvc3RQZXJOaWdodDtcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIHRoaXMuYWxsVXNlcnMuZm9yRWFjaCh1c2VyID0+IHtcbiAgICAgICAgICBpZiAodXNlci5pZCA9PT0gYm9va2luZy51c2VySUQpIHtcbiAgICAgICAgICAgIGJvb2tpbmcuZ3Vlc3ROYW1lID0gdXNlci5uYW1lO1xuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgdG9kYXlCb29raW5ncy5wdXNoKGJvb2tpbmcpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRvZGF5Qm9va2luZ3M7XG4gICAgfSwgW10pXG5cbiAgICBpZiAodG9kYXlCb29raW5ncy5sZW5ndGggPiAwKSB7XG4gICAgICByZXR1cm4gdG9kYXlCb29raW5ncztcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuICdObyBib29raW5ncyBmb3IgdGhlIHNlbGVjdGVkIGRhdGUuJ1xuICAgIH1cbiAgfVxuXG4gIGNhbGN1bGF0ZVBlcmNlbnRhZ2VPY2N1cGllZChkYXRlKSB7XG4gICAgbGV0IGRhdGVCb29raW5ncyA9IHRoaXMuYWxsQm9va2luZ3MuZmlsdGVyKGJvb2tpbmcgPT4ge1xuICAgICAgcmV0dXJuIGJvb2tpbmcuZGF0ZSA9PT0gZGF0ZTtcbiAgICB9KVxuXG4gICAgbGV0IHBlcmNlbnQgPSAoZGF0ZUJvb2tpbmdzLmxlbmd0aCAvIHRoaXMuYWxsUm9vbXMubGVuZ3RoKSAqIDEwMDtcblxuICAgIHJldHVybiBwZXJjZW50LnRvRml4ZWQoMCk7XG4gIH1cblxuICBjYWxjdWxhdGVUb3RhbFJldmVudWUoZGF0ZSkge1xuICAgIGxldCBkYXRlQm9va2luZ3MgPSB0aGlzLmFsbEJvb2tpbmdzLnJlZHVjZSgoZGF0ZUJvb2tpbmdzLCBib29raW5nKSA9PiB7XG4gICAgICBpZiAoYm9va2luZy5kYXRlID09PSBkYXRlKSB7XG4gICAgICAgIGRhdGVCb29raW5ncy5wdXNoKGJvb2tpbmcucm9vbU51bWJlcik7XG4gICAgICB9XG4gICAgICByZXR1cm4gZGF0ZUJvb2tpbmdzO1xuICAgIH0sIFtdKVxuXG4gICAgcmV0dXJuIHRoaXMuYWxsUm9vbXMucmVkdWNlKCh0b3RhbFJldmVudWUsIHJvb20pID0+IHtcbiAgICAgIGRhdGVCb29raW5ncy5mb3JFYWNoKHJvb21OdW0gPT4ge1xuICAgICAgICBpZiAocm9vbU51bSA9PT0gcm9vbS5udW1iZXIpIHtcbiAgICAgICAgICB0b3RhbFJldmVudWUgKz0gcm9vbS5jb3N0UGVyTmlnaHQ7XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICByZXR1cm4gdG90YWxSZXZlbnVlO1xuICAgIH0sIDApLnRvRml4ZWQoMilcbiAgfVxuXG4gIGNhbGN1bGF0ZU51bWJlck9mU3RheXMoaWQpIHtcbiAgICBsZXQgdXNlclJvb21OdW1iZXJzID0gW107XG4gICAgdGhpcy5hbGxCb29raW5ncy5mb3JFYWNoKGJvb2tpbmcgPT4ge1xuICAgICAgaWYgKGJvb2tpbmcudXNlcklEID09IGlkKSB7XG4gICAgICAgIHVzZXJSb29tTnVtYmVycy5wdXNoKGJvb2tpbmcucm9vbU51bWJlcik7XG4gICAgICB9XG4gICAgfSlcbiAgICByZXR1cm4gdXNlclJvb21OdW1iZXJzLmxlbmd0aDtcbiAgfVxuXG4gIGNhbGN1bGF0ZVRvdGFsU3BlbnQoaWQpIHtcbiAgICBsZXQgdXNlclJvb21OdW1iZXJzID0gW107XG4gICAgdGhpcy5hbGxCb29raW5ncy5mb3JFYWNoKGJvb2tpbmcgPT4ge1xuICAgICAgaWYgKGJvb2tpbmcudXNlcklEID09IGlkKSB7XG4gICAgICAgIHVzZXJSb29tTnVtYmVycy5wdXNoKGJvb2tpbmcucm9vbU51bWJlcik7XG4gICAgICB9XG4gICAgfSlcbiAgICByZXR1cm4gdGhpcy5hbGxSb29tcy5yZWR1Y2UoKHRvdGFsU3BlbnQsIHJvb20pID0+IHtcbiAgICAgIHVzZXJSb29tTnVtYmVycy5mb3JFYWNoKHJvb21OdW0gPT4ge1xuICAgICAgICBpZiAocm9vbU51bSA9PT0gcm9vbS5udW1iZXIpIHtcbiAgICAgICAgICB0b3RhbFNwZW50ICs9IHJvb20uY29zdFBlck5pZ2h0O1xuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgcmV0dXJuIHRvdGFsU3BlbnQ7XG4gICAgfSwgMClcbiAgfVxuXG4gIHNvcnRCb29raW5nc0J5RGF0ZShib29raW5ncykge1xuICAgIGlmIChib29raW5ncy5sZW5ndGggPiAwKSB7XG4gICAgICByZXR1cm4gYm9va2luZ3Muc29ydCgoYSwgYikgPT4ge1xuICAgICAgICByZXR1cm4gbmV3IERhdGUoYi5kYXRlKSAtIG5ldyBEYXRlKGEuZGF0ZSk7XG4gICAgICB9KVxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gJ1NvcnJ5LCBubyByb29tcyBhdmFpbGFibGUgZm9yIHRoZSBzZWxlY3RlZCBkYXRlcy4nXG4gICAgfVxuICB9XG5cbiAgc29ydEJvb2tpbmdzQnlSb29tTnVtYmVyKGJvb2tpbmdzKSB7XG4gICAgcmV0dXJuIGJvb2tpbmdzLnNvcnQoKGEsIGIpID0+IHtcbiAgICAgIHJldHVybiBhLnJvb21OdW1iZXIgLSBiLnJvb21OdW1iZXI7XG4gICAgfSlcbiAgfVxuXG4gIGdldFRvZGF5RGF0ZSgpIHtcbiAgICBsZXQgdG9kYXkgPSBuZXcgRGF0ZSgpO1xuICAgIGxldCBkZCA9IHRvZGF5LmdldERhdGUoKTtcblxuICAgIGxldCBtbSA9IHRvZGF5LmdldE1vbnRoKCkgKyAxO1xuICAgIGxldCB5eXl5ID0gdG9kYXkuZ2V0RnVsbFllYXIoKTtcblxuICAgIGlmIChkZCA8IDEwKSB7XG4gICAgICBkZCA9ICcwJyArIGRkO1xuICAgIH1cbiAgICBpZiAobW0gPCAxMCkge1xuICAgICAgbW0gPSAnMCcgKyBtbTtcbiAgICB9XG4gICAgcmV0dXJuIHRvZGF5ID0geXl5eSArICcvJyArIG1tICsgJy8nICsgZGQ7XG4gIH1cblxuICBnZXREYXNoZWRUb2RheURhdGUoKSB7XG4gICAgbGV0IHRvZGF5ID0gbmV3IERhdGUoKTtcbiAgICBsZXQgZGQgPSB0b2RheS5nZXREYXRlKCk7XG5cbiAgICBsZXQgbW0gPSB0b2RheS5nZXRNb250aCgpICsgMTtcbiAgICBsZXQgeXl5eSA9IHRvZGF5LmdldEZ1bGxZZWFyKCk7XG5cbiAgICBpZiAoZGQgPCAxMCkge1xuICAgICAgZGQgPSAnMCcgKyBkZDtcbiAgICB9XG4gICAgaWYgKG1tIDwgMTApIHtcbiAgICAgIG1tID0gJzAnICsgbW07XG4gICAgfVxuICAgIHJldHVybiB0b2RheSA9IHl5eXkgKyAnLScgKyBtbSArICctJyArIGRkO1xuICB9XG5cbiAgYWRkTmV3Qm9va2luZyh1c2VySUQsIGRhdGUsIHJvb21OdW1iZXIpIHtcbiAgICBsZXQgYm9va2luZ0luZm8gPSB0aGlzLmFsbFJvb21zLnJlZHVjZSgoYm9va2luZ0RldGFpbHMsIHJvb20pID0+IHtcbiAgICAgIGlmIChyb29tLm51bWJlciA9PSByb29tTnVtYmVyKSB7XG4gICAgICAgIGJvb2tpbmdEZXRhaWxzLnVzZXJJRCA9IHBhcnNlSW50KHVzZXJJRCk7XG4gICAgICAgIGJvb2tpbmdEZXRhaWxzLmRhdGUgPSBkYXRlO1xuICAgICAgICBib29raW5nRGV0YWlscy5yb29tTnVtYmVyID0gcm9vbS5udW1iZXI7XG4gICAgICB9XG4gICAgICByZXR1cm4gYm9va2luZ0RldGFpbHM7XG4gICAgfSwge30pXG4gICAgcmV0dXJuIGJvb2tpbmdJbmZvO1xuICB9XG5cbiAgZGVsZXRlQm9va2luZyhkZWxldGVCb29raW5nKSB7XG4gICAgbGV0IHRvZGF5RGF0ZSA9IHRoaXMuZ2V0VG9kYXlEYXRlKCk7XG4gICAgaWYgKGRlbGV0ZUJvb2tpbmcuZGF0ZSA+IHRvZGF5RGF0ZSkge1xuICAgICAgdGhpcy5hbGxCb29raW5ncy5mb3JFYWNoKGJvb2tpbmcgPT4ge1xuICAgICAgICBpZiAoYm9va2luZy5pZCA9PT0gZGVsZXRlQm9va2luZy5pZCkge1xuICAgICAgICAgIGxldCBpbmRleCA9IHRoaXMuYWxsQm9va2luZ3MuaW5kZXhPZihib29raW5nKTtcbiAgICAgICAgICB0aGlzLmFsbEJvb2tpbmdzLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiAnT29wcyEgWW91IGNhbm5vdCBkZWxldGUgYSBib29raW5nIGZyb20gdGhlIHBhc3QuIFNlbGVjdCBhbm90aGVyIGJvb2tpbmcgYW5kIHRyeSBhZ2Fpbi4nXG4gICAgfVxuICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBSb29tIHtcbiAgY29uc3RydWN0b3Iocm9vbURhdGEpIHtcbiAgICB0aGlzLm51bWJlciA9IHJvb21EYXRhLm51bWJlcjtcbiAgICB0aGlzLnJvb21UeXBlID0gcm9vbURhdGEucm9vbVR5cGU7XG4gICAgdGhpcy5iaWRldCA9IHJvb21EYXRhLmJpZGV0O1xuICAgIHRoaXMuYmVkU2l6ZSA9IHJvb21EYXRhLmJlZFNpemU7XG4gICAgdGhpcy5udW1CZWRzID0gcm9vbURhdGEubnVtQmVkcztcbiAgICB0aGlzLmNvc3RQZXJOaWdodCA9IHJvb21EYXRhLmNvc3RQZXJOaWdodDtcbiAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgVXNlciB7XG4gIGNvbnN0cnVjdG9yKHVzZXJEYXRhKSB7XG4gICAgdGhpcy5pZCA9IHVzZXJEYXRhLmlkO1xuICAgIHRoaXMubmFtZSA9IHVzZXJEYXRhLm5hbWU7XG4gIH1cbn1cbiIsIlxudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL2Jhc2Uuc2Nzc1wiKTtcblxuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5cbnZhciB0cmFuc2Zvcm07XG52YXIgaW5zZXJ0SW50bztcblxuXG5cbnZhciBvcHRpb25zID0ge1wiaG1yXCI6dHJ1ZX1cblxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbm9wdGlvbnMuaW5zZXJ0SW50byA9IHVuZGVmaW5lZDtcblxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscztcblxuaWYobW9kdWxlLmhvdCkge1xuXHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9iYXNlLnNjc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL2Jhc2Uuc2Nzc1wiKTtcblxuXHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXG5cdFx0dmFyIGxvY2FscyA9IChmdW5jdGlvbihhLCBiKSB7XG5cdFx0XHR2YXIga2V5LCBpZHggPSAwO1xuXG5cdFx0XHRmb3Ioa2V5IGluIGEpIHtcblx0XHRcdFx0aWYoIWIgfHwgYVtrZXldICE9PSBiW2tleV0pIHJldHVybiBmYWxzZTtcblx0XHRcdFx0aWR4Kys7XG5cdFx0XHR9XG5cblx0XHRcdGZvcihrZXkgaW4gYikgaWR4LS07XG5cblx0XHRcdHJldHVybiBpZHggPT09IDA7XG5cdFx0fShjb250ZW50LmxvY2FscywgbmV3Q29udGVudC5sb2NhbHMpKTtcblxuXHRcdGlmKCFsb2NhbHMpIHRocm93IG5ldyBFcnJvcignQWJvcnRpbmcgQ1NTIEhNUiBkdWUgdG8gY2hhbmdlZCBjc3MtbW9kdWxlcyBsb2NhbHMuJyk7XG5cblx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdH0pO1xuXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsIm1vZHVsZS5leHBvcnRzID0gXCJpbWFnZXMvcm9vbTAuanBnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcImltYWdlcy9yb29tMS5qcGdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiaW1hZ2VzL3Jvb20xMC5qcGdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiaW1hZ2VzL3Jvb20xMS5qcGdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiaW1hZ2VzL3Jvb20xMi5qcGdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiaW1hZ2VzL3Jvb20xMy5qcGdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiaW1hZ2VzL3Jvb20xNC5qcGdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiaW1hZ2VzL3Jvb20xNS5qcGdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiaW1hZ2VzL3Jvb20xNi5qcGdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiaW1hZ2VzL3Jvb20yLmpwZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCJpbWFnZXMvcm9vbTMuanBnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcImltYWdlcy9yb29tNC5qcGdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiaW1hZ2VzL3Jvb201LmpwZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCJpbWFnZXMvcm9vbTYuanBnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcImltYWdlcy9yb29tNy5qcGdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiaW1hZ2VzL3Jvb204LmpwZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCJpbWFnZXMvcm9vbTkuanBnXCI7IiwiaW1wb3J0ICcuL2Nzcy9iYXNlLnNjc3MnO1xuaW1wb3J0ICcuL2ltYWdlcy9yb29tMC5qcGcnXG5pbXBvcnQgJy4vaW1hZ2VzL3Jvb20xLmpwZydcbmltcG9ydCAnLi9pbWFnZXMvcm9vbTIuanBnJ1xuaW1wb3J0ICcuL2ltYWdlcy9yb29tMy5qcGcnXG5pbXBvcnQgJy4vaW1hZ2VzL3Jvb200LmpwZydcbmltcG9ydCAnLi9pbWFnZXMvcm9vbTUuanBnJ1xuaW1wb3J0ICcuL2ltYWdlcy9yb29tNi5qcGcnXG5pbXBvcnQgJy4vaW1hZ2VzL3Jvb203LmpwZydcbmltcG9ydCAnLi9pbWFnZXMvcm9vbTguanBnJ1xuaW1wb3J0ICcuL2ltYWdlcy9yb29tOS5qcGcnXG5pbXBvcnQgJy4vaW1hZ2VzL3Jvb20xMC5qcGcnXG5pbXBvcnQgJy4vaW1hZ2VzL3Jvb20xMS5qcGcnXG5pbXBvcnQgJy4vaW1hZ2VzL3Jvb20xMi5qcGcnXG5pbXBvcnQgJy4vaW1hZ2VzL3Jvb20xMy5qcGcnXG5pbXBvcnQgJy4vaW1hZ2VzL3Jvb20xNC5qcGcnXG5pbXBvcnQgJy4vaW1hZ2VzL3Jvb20xNS5qcGcnXG5pbXBvcnQgJy4vaW1hZ2VzL3Jvb20xNi5qcGcnXG5pbXBvcnQgSG90ZWxTZXJ2aWNlIGZyb20gJy4vSG90ZWwtU2VydmljZS5qcyc7XG5cbmltcG9ydCB7YmFja1RvQm9va2luZywgYm9va0FSb29tLCBib29raW5nTW9kYWwsIGJvb2tSb29tRGF0ZSwgYm9va1Jvb21IZWFkZXIsIGN1c3RvbWVyUm9vbXMsIGN1c3RvbWVyU3RhdHVzLCBjdXN0b21lclZpZXcsIGN1c3RvbWVyV2VsY29tZSwgZW50ZXJDcmVkZW50aWFscywgZXJyb3JNZXNzYWdlLCBmaWx0ZXJDYXRlZ29yaWVzLCBmaWx0ZXJSZWZyZXNoQnV0dG9uLCBmaWx0ZXJTZWN0aW9uLCBmaWx0ZXJTdWJtaXRCdXR0b24sIGhvdGVsT3ZlcnZpZXdEYXRlLCBtYW5hZ2VyVmlldywgbW9kYWxDb250ZW50LCBtb2RhbERhdGUsIG1vZGFsVGl0bGUsIG92ZXJ2aWV3SW5mbywgcGFzc3dvcmRJbnB1dCwgc2VhcmNoQ3VzdG9tZXJCdXR0b24sIHNlYXJjaEN1c3RvbWVySW5wdXQsIHNlYXJjaFRpdGxlLCBzaWduT3V0QnV0dG9uLCBzdWJtaXRCdXR0b24sIHVzZXJuYW1lSW5wdXQsIHZpZXdCb29raW5nSW5mb30gZnJvbSAnLi9ET01lbGVtZW50cy5qcyc7XG5cbndpbmRvdy5vbmxvYWQgPSBmZXRjaEFsbERhdGEoKTtcblxubGV0IGhvdGVsU2VydmljZTtcbmxldCBtb2RhbDtcbmxldCB0b2RheURhdGU7XG5sZXQgdXNlcklEO1xuXG5iYWNrVG9Cb29raW5nLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYmFja1RvQ3VzdG9tZXJCb29raW5nKTtcbmJvb2tBUm9vbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGN1c3RvbWVyQWRkQm9va2luZ3MpXG5jdXN0b21lclN0YXR1cy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGRpc3BsYXlDdXN0b21lckJvb2tpbmdzKTtcbmZpbHRlclNlY3Rpb24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCByZWZyZXNoRmlsdGVyKTtcbmZpbHRlclN1Ym1pdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGdldEZpbHRlclZhbHVlKTtcbnNlYXJjaEN1c3RvbWVyQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZGlzcGxheUN1c3RvbWVySW5mbyk7XG5zaWduT3V0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc2lnbk91dCk7XG5zdWJtaXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB2YWxpZGF0ZUNyZWRlbnRpYWxzKTtcbnVzZXJuYW1lSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCBjbGVhckVycm9yTWVzc2FnZSk7XG52aWV3Qm9va2luZ0luZm8uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBkZWxldGVCb29raW5nKTtcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIG9wZW5Nb2RhbCk7XG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoYW5kbGVNb2RhbCk7XG5ib29rUm9vbURhdGUuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKGV2ZW50KSA9PiB7XG4gIGxldCBmb3JtYXREYXRlID0gYCR7ZXZlbnQudGFyZ2V0LnZhbHVlfWAuc3BsaXQoJy0nKTtcbiAgdG9kYXlEYXRlID0gZm9ybWF0RGF0ZS5qb2luKCcvJyk7XG4gIGRpc3BsYXlDdXN0b21lclJvb21zKHRvZGF5RGF0ZSk7XG59KTtcbmJvb2tpbmdNb2RhbC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoZXZlbnQpID0+IHtcbiAgbGV0IGZvcm1hdERhdGUgPSBgJHtldmVudC50YXJnZXQudmFsdWV9YC5zcGxpdCgnLScpO1xuICB0b2RheURhdGUgPSBmb3JtYXREYXRlLmpvaW4oJy8nKTtcbiAgZGlzcGxheU1hbmFnZXJSb29tcyh0b2RheURhdGUpO1xufSk7XG5ob3RlbE92ZXJ2aWV3RGF0ZS5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoZXZlbnQpID0+IHtcbiAgbGV0IGZvcm1hdERhdGUgPSBgJHtldmVudC50YXJnZXQudmFsdWV9YC5zcGxpdCgnLScpO1xuICB0b2RheURhdGUgPSBmb3JtYXREYXRlLmpvaW4oJy8nKTtcbiAgZGlzcGxheUhvdGVsT3ZlcnZpZXcodG9kYXlEYXRlKTtcbiAgZGlzcGxheVRvZGF5Qm9va2luZ3ModG9kYXlEYXRlKTtcbn0pO1xuXG5cbmZ1bmN0aW9uIGdldFJhbmRvbUluZGV4KCkge1xuICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xufVxuXG5mdW5jdGlvbiBmZXRjaEFsbERhdGEoKSB7XG4gIGxldCB1c2VyUHJvbWlzZSA9XG4gIGZldGNoKCdodHRwczovL2ZlLWFwcHMuaGVyb2t1YXBwLmNvbS9hcGkvdjEvb3Zlcmxvb2svMTkwNC91c2Vycy91c2VycycpXG4gICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgIC50aGVuKGRhdGEgPT4gZGF0YS51c2VycylcbiAgICAuY2F0Y2goZXJyID0+IGNvbnNvbGUubG9nKGVycikpXG5cbiAgbGV0IHJvb21Qcm9taXNlID0gZmV0Y2goJ2h0dHBzOi8vZmUtYXBwcy5oZXJva3VhcHAuY29tL2FwaS92MS9vdmVybG9vay8xOTA0L3Jvb21zL3Jvb21zJylcbiAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgLnRoZW4oZGF0YSA9PiBkYXRhLnJvb21zKVxuICAgIC5jYXRjaChlcnIgPT4gY29uc29sZS5sb2coZXJyKSlcblxuICBsZXQgYm9va2luZ1Byb21pc2UgPSBmZXRjaCgnaHR0cHM6Ly9mZS1hcHBzLmhlcm9rdWFwcC5jb20vYXBpL3YxL292ZXJsb29rLzE5MDQvYm9va2luZ3MvYm9va2luZ3MnKVxuICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAudGhlbihkYXRhID0+IGRhdGEuYm9va2luZ3MpXG4gICAgLmNhdGNoKGVyciA9PiBjb25zb2xlLmxvZyhlcnIpKVxuXG4gIFByb21pc2UuYWxsKFt1c2VyUHJvbWlzZSwgcm9vbVByb21pc2UsIGJvb2tpbmdQcm9taXNlXSlcbiAgICAudGhlbihkYXRhID0+IGhvdGVsU2VydmljZSA9IG5ldyBIb3RlbFNlcnZpY2UoZGF0YVswXSwgZGF0YVsxXSwgZGF0YVsyXSkpXG4gICAgLnRoZW4oKCkgPT4gbG9hZERhdGEoKSlcbiAgICAuY2F0Y2goZXJyID0+IGNvbnNvbGUubG9nKGVycikpXG59XG5cbmZ1bmN0aW9uIGxvYWREYXRhKCkge1xuICBob3RlbFNlcnZpY2Uuc3RhcnQoKTtcbiAgdG9kYXlEYXRlID0gaG90ZWxTZXJ2aWNlLmdldFRvZGF5RGF0ZSgpO1xufVxuXG5mdW5jdGlvbiB2YWxpZGF0ZUNyZWRlbnRpYWxzKCkge1xuICBpZiAodXNlcm5hbWVJbnB1dC52YWx1ZSA9PT0gJ21hbmFnZXInICYmIHBhc3N3b3JkSW5wdXQudmFsdWUgPT09ICdvdmVybG9vazIwMjAnKSB7XG4gICAgY3JlYXRlVXNlckRyb3BEb3duKCk7XG4gICAgZW50ZXJDcmVkZW50aWFscy5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcbiAgICBtYW5hZ2VyVmlldy5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcbiAgICBzaWduT3V0QnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xuICAgIHVzZXJuYW1lSW5wdXQudmFsdWUgPSAnJztcbiAgICBwYXNzd29yZElucHV0LnZhbHVlID0gJyc7XG4gIH0gZWxzZSBpZiAodXNlcm5hbWVJbnB1dC52YWx1ZS5pbmNsdWRlcygnY3VzdG9tZXInKSAmJiBwYXNzd29yZElucHV0LnZhbHVlID09PSAnb3Zlcmxvb2syMDIwJykge1xuICAgIGxldCBmaW5kVXNlcklEID0gdXNlcm5hbWVJbnB1dC52YWx1ZS5zcGxpdCgvKFxcZCspLyk7XG4gICAgdXNlcklEID0gZmluZFVzZXJJRFsxXTtcbiAgICBsb2FkVXNlclBhZ2UoKTtcbiAgfSBlbHNlIHtcbiAgICBhbGVydExvZ0luRXJyb3IoKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBsb2FkVXNlclBhZ2UoKSB7XG4gIGhvdGVsU2VydmljZS5hbGxVc2Vycy5mb3JFYWNoKHVzZXIgPT4ge1xuICAgIGlmICh1c2VyLmlkID09IHVzZXJJRCkge1xuICAgICAgZW50ZXJDcmVkZW50aWFscy5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcbiAgICAgIGN1c3RvbWVyVmlldy5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcbiAgICAgIHNpZ25PdXRCdXR0b24uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XG4gICAgICBmaWx0ZXJDYXRlZ29yaWVzLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICAgICAgZmlsdGVyU3VibWl0QnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICAgICAgdG9kYXlEYXRlID0gaG90ZWxTZXJ2aWNlLmdldERhc2hlZFRvZGF5RGF0ZSgpO1xuICAgICAgYm9va1Jvb21EYXRlLnNldEF0dHJpYnV0ZSgndmFsdWUnLCB0b2RheURhdGUpO1xuICAgICAgYm9va1Jvb21EYXRlLnNldEF0dHJpYnV0ZSgnbWluJywgdG9kYXlEYXRlKTtcbiAgICAgIGxvYWRDdXN0b21lckluZm8oKTtcbiAgICAgIHVzZXJuYW1lSW5wdXQudmFsdWUgPSAnJztcbiAgICAgIHBhc3N3b3JkSW5wdXQudmFsdWUgPSAnJztcbiAgICB9IGVsc2Uge1xuICAgICAgYWxlcnRMb2dJbkVycm9yKCk7XG4gICAgfVxuICB9KVxufVxuXG5mdW5jdGlvbiBhbGVydExvZ0luRXJyb3IoKSB7XG4gIHVzZXJuYW1lSW5wdXQudmFsdWUgPSAnJztcbiAgcGFzc3dvcmRJbnB1dC52YWx1ZSA9ICcnO1xuICBsZXQgbWVzc2FnZSA9IGA8Yj5UaGUgdXNlcm5hbWUgYW5kL29yIHBhc3N3b3JkIHlvdSBlbnRlcmVkIHdhcyBub3QgcmVjb2duaXplZC4gUGxlYXNlIHRyeSBhZ2Fpbi48L2I+YFxuICBlcnJvck1lc3NhZ2UuaW5zZXJ0QWRqYWNlbnRIVE1MKCdiZWZvcmVlbmQnLCBtZXNzYWdlKTtcbn1cblxuZnVuY3Rpb24gY2xlYXJFcnJvck1lc3NhZ2UoKSB7XG4gIGVycm9yTWVzc2FnZS5pbm5lclRleHQgPSAnJztcbn1cblxuZnVuY3Rpb24gY3JlYXRlVXNlckRyb3BEb3duKCkge1xuICBsZXQgZHJvcERvd24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY3VzdG9tZXJzJyk7XG4gIGxldCBzb3J0Q3VzdG9tZXJOYW1lcyA9IGhvdGVsU2VydmljZS5hbGxVc2Vycy5zb3J0KChhLCBiKSA9PiB7XG4gICAgcmV0dXJuIGEubmFtZSA8IGIubmFtZSA/IC0xIDogMTtcbiAgfSlcbiAgbGV0IGN1c3RvbWVyTmFtZXMgPSBzb3J0Q3VzdG9tZXJOYW1lcy5tYXAodXNlciA9PiB7XG4gICAgcmV0dXJuIGA8b3B0aW9uIHZhbHVlPVwiJHt1c2VyLm5hbWV9XCI+YFxuICB9KS5qb2luKCcnKTtcbiAgZHJvcERvd24uaW5zZXJ0QWRqYWNlbnRIVE1MKCdhZnRlcmJlZ2luJywgY3VzdG9tZXJOYW1lcyk7XG59XG5cbmZ1bmN0aW9uIHNpZ25PdXQoKSB7XG4gIGRlYnVnZ2VyXG4gIHNpZ25PdXRCdXR0b24uY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG4gIGN1c3RvbWVyU3RhdHVzLmlubmVySFRNTCA9ICcnO1xuICBtYW5hZ2VyVmlldy5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcbiAgY3VzdG9tZXJWaWV3LmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICBlbnRlckNyZWRlbnRpYWxzLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xuICBjbGVhckVycm9yTWVzc2FnZSgpO1xuICBib29rUm9vbUhlYWRlciA9ICdCb29rIGEgUm9vbSc7XG4gIGJhY2tUb0Jvb2tpbmcuaW5uZXJIVE1MID0gJyc7XG4gIGN1c3RvbWVyUm9vbXMuaW5uZXJIVE1MID0gJyc7XG59XG5cbmZ1bmN0aW9uIGxvYWRDdXN0b21lckluZm8oKSB7XG4gIGxldCBzdGF0dXM7XG4gIGN1c3RvbWVyV2VsY29tZS5pbm5lclRleHQgPSBgV2VsY29tZSBCYWNrLCAke2hvdGVsU2VydmljZS5maW5kVXNlck5hbWUodXNlcklEKX0hYFxuICBsZXQgdG90YWxTcGVudCA9IGhvdGVsU2VydmljZS5jYWxjdWxhdGVUb3RhbFNwZW50KHVzZXJJRCkudG9GaXhlZCgyKTtcbiAgaWYgKHRvdGFsU3BlbnQgPiAxMDAwMCkge1xuICAgIHN0YXR1cyA9ICdHb2xkJztcbiAgfSBlbHNlIGlmICh0b3RhbFNwZW50IDwgMTAwMDAgJiYgdG90YWxTcGVudCA+IDgwMDApIHtcbiAgICBzdGF0dXMgPSAnU2lsdmVyJztcbiAgfSBlbHNlIGlmICh0b3RhbFNwZW50IDwgODAwMCAmJiB0b3RhbFNwZW50ID4gNTAwMCkge1xuICAgIHN0YXR1cyA9ICdCcm9uemUnO1xuICB9IGVsc2Uge1xuICAgIHN0YXR1cyA9ICdCbHVlJztcbiAgfVxuICBkaXNwbGF5Q3VzdG9tZXJTdGF0cyhzdGF0dXMsIHRvdGFsU3BlbnQpXG59XG5cbmZ1bmN0aW9uIGRpc3BsYXlDdXN0b21lclN0YXRzKHN0YXR1cywgdG90YWxTcGVudCkge1xuICBsZXQgc3RhdHVzSW5mbyA9IGBcbiAgPHAgY2xhc3M9XCIke3N0YXR1c31cIj48Yj4ke3N0YXR1c30gTGV2ZWwgUHJlZmVycmVkPC9iPjwvcD5cbiAgPHA+VG90YWwgU3BlbnQ6ICQke3RvdGFsU3BlbnR9PC9wPjxidXR0b24gY2xhc3M9XCJ2aWV3LWJvb2tpbmdzLWJ1dHRvbiBjdXN0b21lci1zdGF0dXNcIj5WaWV3IEJvb2tpbmdzPC9idXR0b24+YDtcbiAgY3VzdG9tZXJTdGF0dXMuaW5zZXJ0QWRqYWNlbnRIVE1MKCdhZnRlcmJlZ2luJywgc3RhdHVzSW5mbyk7XG59XG5cbmZ1bmN0aW9uIGRpc3BsYXlIb3RlbE92ZXJ2aWV3KGRhdGUpIHtcbiAgbGV0IHRvZGF5UmV2ZW51ZSA9IGhvdGVsU2VydmljZS5jYWxjdWxhdGVUb3RhbFJldmVudWUoZGF0ZSk7XG4gIGxldCBhdmFpbGFibGVSb29tcyA9IGhvdGVsU2VydmljZS5jYWxjdWxhdGVOdW1iZXJBdmFpbGFibGVSb29tcyhkYXRlKTtcbiAgbGV0IHBlcmNlbnRPY2N1cGllZCA9IGhvdGVsU2VydmljZS5jYWxjdWxhdGVQZXJjZW50YWdlT2NjdXBpZWQoZGF0ZSk7XG4gIGxldCBvdmVydmlldyA9IGBSZXZlbnVlICZuYnNwOyAkJHt0b2RheVJldmVudWV9IDxicj5cbiAgUm9vbXMgQXZhaWxhYmxlICZuYnNwOyAke2F2YWlsYWJsZVJvb21zfSA8YnI+XG4gIFBlcmNlbnRhZ2UgT2NjdXBpZWQgJm5ic3A7ICR7cGVyY2VudE9jY3VwaWVkfSVgO1xuICBvdmVydmlld0luZm8uY2xhc3NMaXN0LnJlbW92ZSgnb3ZlcnZpZXctZGVmYXVsdCcpO1xuICBvdmVydmlld0luZm8uY2xhc3NMaXN0LmFkZCgnaG90ZWwtc3VtbWFyeScpO1xuICBvdmVydmlld0luZm8uaW5uZXJIVE1MID0gb3ZlcnZpZXc7XG59XG5cbmZ1bmN0aW9uIGRpc3BsYXlUb2RheUJvb2tpbmdzKGRhdGUpIHtcbiAgdmlld0Jvb2tpbmdJbmZvLmlubmVySFRNTCA9ICcnO1xuICBzZWFyY2hUaXRsZS5pbm5lckhUTUwgPSAnJztcbiAgbGV0IGJvb2tpbmdzID0gaG90ZWxTZXJ2aWNlLmZpbmRCb29raW5ncyhkYXRlKTtcbiAgaWYgKHR5cGVvZiBib29raW5ncyAhPT0gJ3N0cmluZycpIHtcbiAgICBsZXQgc29ydGVkQm9va2luZ3MgPSBob3RlbFNlcnZpY2Uuc29ydEJvb2tpbmdzQnlSb29tTnVtYmVyKGJvb2tpbmdzKTtcbiAgICBsZXQgdG9kYXlzQm9va2luZ0luZm8gPSBzb3J0ZWRCb29raW5ncy5tYXAoYm9va2luZyA9PiB7XG4gICAgICByZXR1cm4gYDxhcnRpY2xlIGNsYXNzPVwibWFuYWdlci1ib29raW5nLWNhcmRcIiBpZD1cIiR7Ym9va2luZy5pZH1cIj5cbiAgICAgIDxzZWN0aW9uIGNsYXNzPVwibWFuYWdlci1ib29raW5nLWRhdGVcIj5cbiAgICAgICAgJHtib29raW5nLmRhdGV9XG4gICAgICA8L3NlY3Rpb24+XG4gICAgICA8c2VjdGlvbiBjbGFzcz1cIm1hbmFnZXItYm9va2luZy1yb29tdHlwZVwiPlxuICAgICAgICAke2Jvb2tpbmcucm9vbVR5cGUudG9VcHBlckNhc2UoKX1cbiAgICAgIDwvc2VjdGlvbj5cbiAgICAgIDxzZWN0aW9uIGNsYXNzPVwibWFuYWdlci1ib29raW5nLXJvb21udW1cIj5cbiAgICAgICAgJHtib29raW5nLnJvb21OdW1iZXJ9XG4gICAgICA8L3NlY3Rpb24+XG4gICAgICA8c2VjdGlvbiBjbGFzcz1cIm1hbmFnZXItYm9va2luZy1jb3N0XCI+XG4gICAgICAgICQke2Jvb2tpbmcuY29zdFBlck5pZ2h0LnRvRml4ZWQoMil9XG4gICAgICA8L3NlY3Rpb24+XG4gICAgICA8c2VjdGlvbiBjbGFzcz1cIm1hbmFnZXItYm9va2luZy1pZFwiPlxuICAgICAgICAke2Jvb2tpbmcuaWR9XG4gICAgICA8L3NlY3Rpb24+XG4gICAgICAgICR7ZGV0ZXJtaW5lQm9va2luZ0RhdGUoYm9va2luZyl9XG4gICAgICA8L2FydGljbGU+YFxuICAgIH0pLmpvaW4oJyAnKVxuICAgIHZpZXdCb29raW5nSW5mby5pbnNlcnRBZGphY2VudEhUTUwoJ2JlZm9yZWVuZCcsIHRvZGF5c0Jvb2tpbmdJbmZvKTtcbiAgICBzZWFyY2hUaXRsZS5pbm5lclRleHQgPSBgQm9va2luZ3MgZm9yICR7ZGF0ZX1gO1xuICB9IGVsc2Uge1xuICAgIHNlYXJjaFRpdGxlLmlubmVyVGV4dCA9ICdCb29raW5ncyBmb3IgLS0nO1xuICAgIHZpZXdCb29raW5nSW5mby5pbm5lckhUTUwgPSBgPGg1IGNsYXNzPVwibm8tYm9va2luZ3NcIj4ke2Jvb2tpbmdzfTwvaDU+YDtcbiAgfVxufVxuXG5mdW5jdGlvbiBkZXRlcm1pbmVCb29raW5nRGF0ZShib29raW5nKSB7XG4gIGlmIChib29raW5nLmRhdGUgPiBob3RlbFNlcnZpY2UuZ2V0VG9kYXlEYXRlKCkpIHtcbiAgICByZXR1cm4gYDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiZGVsZXRlLWJvb2tpbmctYnV0dG9uICR7Ym9va2luZy5pZH0gJHt0eXBlb2YgYm9va2luZy5pZH1cIj5ERUxFVEUgQk9PS0lORzwvYnV0dG9uPmBcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gJzxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiY2Fubm90LWRlbGV0ZVwiPi08L2J1dHRvbj4nO1xuICB9XG59XG5cbmZ1bmN0aW9uIGRpc3BsYXlDdXN0b21lckluZm8oKSB7XG4gIHZpZXdCb29raW5nSW5mby5pbm5lckhUTUwgPSAnJztcbiAgdXNlcklEID0gaG90ZWxTZXJ2aWNlLmZpbmRVc2VySWQoc2VhcmNoQ3VzdG9tZXJJbnB1dC52YWx1ZSk7XG4gIGxldCBib29raW5ncyA9IGhvdGVsU2VydmljZS5maW5kQ3VzdG9tZXJCb29raW5ncyh1c2VySUQpO1xuICBsZXQgc29ydGVkQm9va2luZ3MgPSBob3RlbFNlcnZpY2Uuc29ydEJvb2tpbmdzQnlEYXRlKGJvb2tpbmdzKTtcbiAgaWYgKHNvcnRlZEJvb2tpbmdzLmxlbmd0aCA+IDApIHtcbiAgICBsZXQgdG9kYXlzQm9va2luZ0luZm8gPSBzb3J0ZWRCb29raW5ncy5tYXAoYm9va2luZyA9PiB7XG4gICAgICByZXR1cm4gYDxhcnRpY2xlIGNsYXNzPVwibWFuYWdlci1ib29raW5nLWNhcmRcIj5cbiAgICAgICAgPHNlY3Rpb24gY2xhc3M9XCJtYW5hZ2VyLWJvb2tpbmctZGF0ZVwiPlxuICAgICAgICAgICR7Ym9va2luZy5kYXRlfVxuICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgIDxzZWN0aW9uIGNsYXNzPVwibWFuYWdlci1ib29raW5nLXJvb210eXBlXCI+XG4gICAgICAgICAgJHtib29raW5nLnJvb21UeXBlLnRvVXBwZXJDYXNlKCl9XG4gICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgPHNlY3Rpb24gY2xhc3M9XCJtYW5hZ2VyLWJvb2tpbmctcm9vbW51bVwiPlxuICAgICAgICAgICR7Ym9va2luZy5yb29tTnVtYmVyfVxuICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgIDxzZWN0aW9uIGNsYXNzPVwibWFuYWdlci1ib29raW5nLWNvc3RcIj5cbiAgICAgICAgICAkJHtib29raW5nLmNvc3RQZXJOaWdodC50b0ZpeGVkKDIpfVxuICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgIDxzZWN0aW9uIGNsYXNzPVwibWFuYWdlci1ib29raW5nLWlkXCI+XG4gICAgICAgICAgJHtib29raW5nLmlkfVxuICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgICAgJHtkZXRlcm1pbmVCb29raW5nRGF0ZShib29raW5nKX1cbiAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICA8L2FydGljbGU+YFxuICAgIH0pLmpvaW4oJyAnKVxuICAgIHZpZXdCb29raW5nSW5mby5pbnNlcnRBZGphY2VudEhUTUwoJ2JlZm9yZWVuZCcsIHRvZGF5c0Jvb2tpbmdJbmZvKTtcbiAgICBmb3JtYXRDdXN0b21lckluZm8oKTtcbiAgfSBlbHNlIHtcbiAgICBzZWFyY2hUaXRsZS5pbm5lclRleHQgPSBgQm9va2luZ3MgZm9yICR7c2VhcmNoQ3VzdG9tZXJJbnB1dC52YWx1ZX1gO1xuICAgIHZpZXdCb29raW5nSW5mby5pbm5lckhUTUwgPSBgPHAgY2xhc3M9XCJjdXN0b21lci1lcnJvci1tZXNzYWdlXCI+PGI+V2UgaGF2ZSBubyBpbmZvcm1hdGlvbiBmb3IgdGhlIGN1c3RvbWVyICR7c2VhcmNoQ3VzdG9tZXJJbnB1dC52YWx1ZX0uIFBsZWFzZSBlbnRlciBhbm90aGVyIG5hbWUgYW5kIHRyeSBhZ2Fpbi48L2I+PC9wPmA7XG4gIH1cbn1cblxuZnVuY3Rpb24gZm9ybWF0Q3VzdG9tZXJJbmZvKCkge1xuICBzZWFyY2hUaXRsZS5pbm5lclRleHQgPSBgQm9va2luZ3MgZm9yICR7c2VhcmNoQ3VzdG9tZXJJbnB1dC52YWx1ZX1gO1xuICBzZWFyY2hUaXRsZS5pbnNlcnRBZGphY2VudEhUTUwoJ2JlZm9yZWVuZCcsIGA8cCBpZD1cInRvdGFsLXNwZW50XCI+VG90YWwgU3BlbnQ6ICQgJHtob3RlbFNlcnZpY2UuY2FsY3VsYXRlVG90YWxTcGVudCh1c2VySUQpLnRvRml4ZWQoMil9IDxicj48YnV0dG9uIGNsYXNzPVwiYWRkLWJvb2tpbmctYnV0dG9uXCI+QUREIEJPT0tJTkc8L2J1dHRvbj5gKVxuICBzZWFyY2hDdXN0b21lcklucHV0LnZhbHVlID0gJyc7XG59XG5cbmZ1bmN0aW9uIGRpc3BsYXlNYW5hZ2VyUm9vbXMoZGF0ZSkge1xuICBsZXQgYXZhaWxhYmxlUm9vbXMgPSBob3RlbFNlcnZpY2UuZmluZEF2YWlsYWJsZVJvb21zKGRhdGUpO1xuICBpZiAodHlwZW9mIGF2YWlsYWJsZVJvb21zICE9PSAnc3RyaW5nJykge1xuICAgIGxldCBzb3J0ZWRBdmFpbGFibGVSb29tcyA9IGhvdGVsU2VydmljZS5zb3J0Qm9va2luZ3NCeURhdGUoYXZhaWxhYmxlUm9vbXMpO1xuICAgIG1vZGFsQ29udGVudC5pbm5lckhUTUwgPSBgXG4gICAgICA8dWwgY2xhc3M9XCJjdXN0b21lci1pbmZvLWhlYWRlcnNcIj5cbiAgICAgICAgPGxpPlJvb20gVHlwZTwvbGk+XG4gICAgICAgIDxsaT5OdW0gQmVkczwvbGk+XG4gICAgICAgIDxsaT5CZWQgVHlwZTwvbGk+XG4gICAgICAgIDxsaT5Sb29tICM8L2xpPlxuICAgICAgICA8bGk+QmlkZXQ8L2xpPlxuICAgICAgICA8bGk+UHJpY2U8L2xpPlxuICAgICAgICA8bGk+QWRkPC9saT5cbiAgICAgIDwvdWw+YFxuICAgIGxldCBhbGxSb29tcyA9IHNvcnRlZEF2YWlsYWJsZVJvb21zLm1hcChyb29tID0+IHtcbiAgICAgIHJldHVybiBgXG4gICAgICAgIDxhcnRpY2xlIGNsYXNzPVwibWFuYWdlci1ib29raW5nLWNhcmRcIj5cbiAgICAgICAgICA8cCBjbGFzcz1cIm1hbmFnZXItYm9va2luZy1yb29tdHlwZTJcIj4ke3Jvb20ucm9vbVR5cGV9PC9wPlxuICAgICAgICAgIDxwIGNsYXNzPVwibWFuYWdlci1ib29raW5nLW51bWJlZHNcIj4gJHtyb29tLm51bUJlZHN9PC9wPlxuICAgICAgICAgIDxwIGNsYXNzPVwibWFuYWdlci1ib29raW5nLXJvb21udW1cIj4ke3Jvb20uYmVkU2l6ZX08L3A+XG4gICAgICAgICAgPHAgY2xhc3M9XCJtYW5hZ2VyLWJvb2tpbmctcm9vbW51bTJcIj4ke3Jvb20ubnVtYmVyfTwvcD5cbiAgICAgICAgICA8cCBjbGFzcz1cIm1hbmFnZXItYm9va2luZy1iaWRldFwiPiAke3Jvb20uYmlkZXR9PC9wPlxuICAgICAgICAgIDxwIGNsYXNzPVwibWFuYWdlci1ib29raW5nLWNvc3QyXCI+JCR7cm9vbS5jb3N0UGVyTmlnaHQudG9GaXhlZCgyKX08L3A+XG4gICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJib29rLXJvb20gJHtyb29tLm51bWJlcn1cIj5CT09LIFJPT008L2J1dHRvbj5cbiAgICAgICAgPC9hcnRpY2xlPmBcbiAgICB9KS5qb2luKCcgJylcbiAgICBtb2RhbENvbnRlbnQuaW5zZXJ0QWRqYWNlbnRIVE1MKCdiZWZvcmVlbmQnLCBhbGxSb29tcyk7XG4gIH0gZWxzZSB7XG4gICAgbW9kYWxDb250ZW50LmlubmVySFRNTCA9IGA8aDUgY2xhc3M9XCJuby1ib29raW5nc1wiPiR7YXZhaWxhYmxlUm9vbXN9PC9oNT5gO1xuICB9XG59XG5cbmZ1bmN0aW9uIG9wZW5Nb2RhbChldmVudCkge1xuICBpZiAoZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnYWRkLWJvb2tpbmctYnV0dG9uJykpIHtcbiAgICBtb2RhbCA9IGJvb2tpbmdNb2RhbDtcbiAgICBtb2RhbC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJzsgICAgICBtb2RhbERhdGUuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XG4gICAgbW9kYWxUaXRsZS5pbm5lclRleHQgPSAnQXZhaWxhYmxlIFJvb21zJztcbiAgICBtb2RhbENvbnRlbnQuaW5uZXJIVE1MID0gYFxuICAgICAgPHVsIGNsYXNzPVwiY3VzdG9tZXItaW5mby1oZWFkZXJzXCI+XG4gICAgICAgIDxsaT5Sb29tIFR5cGU8L2xpPlxuICAgICAgICA8bGk+TnVtIEJlZHM8L2xpPlxuICAgICAgICA8bGk+QmVkIFR5cGU8L2xpPlxuICAgICAgICA8bGk+Um9vbSAjPC9saT5cbiAgICAgICAgPGxpPkJpZGV0PC9saT5cbiAgICAgICAgPGxpPlByaWNlPC9saT5cbiAgICAgICAgPGxpPkFkZDwvbGk+XG4gICAgICA8L3VsPmA7XG4gIH0gZWxzZSBpZiAoZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnZGVsZXRlLWJvb2tpbmctYnV0dG9uJykpIHtcbiAgICBldmVudC50YXJnZXQuY2xhc3NMaXN0LmFkZCgnZGVsZXRlZC1yb29tJyk7XG4gICAgZXZlbnQudGFyZ2V0LmRpc2FibGVkID0gdHJ1ZTtcbiAgICBldmVudC50YXJnZXQuaW5uZXJUZXh0ID0gJ0RFTEVURUQhJ1xuICB9XG59XG5cbmZ1bmN0aW9uIGhhbmRsZU1vZGFsKGV2ZW50KSB7XG4gIGlmIChldmVudC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdib29rLXJvb20nKSkge1xuICAgIGxldCBuZXdCb29raW5nID0gaG90ZWxTZXJ2aWNlLmFkZE5ld0Jvb2tpbmcodXNlcklELCB0b2RheURhdGUsIGV2ZW50LnRhcmdldC5jbGFzc0xpc3RbMV0pO1xuICAgIGxldCBldmVudFRhcmdldCA9IGV2ZW50LnRhcmdldDtcbiAgICBwb3N0TmV3Qm9va2luZyhuZXdCb29raW5nLCBldmVudFRhcmdldCk7XG4gICAgbW9kYWxEYXRlLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICAgIG1vZGFsVGl0bGUuaW5uZXJUZXh0ID0gJ1N1Y2Nlc3MnO1xuICAgIG1vZGFsQ29udGVudC5pbm5lclRleHQgPSAnVGhlIGJvb2tpbmcgaGFzIHN1Y2Nlc3NmdWxseSBiZWVuIGFkZGVkLiBQbGVhc2UgcmVmcmVzaCB0aGUgcGFnZSB0byBzZWUgdGhlIHVwZGF0ZWQgYm9va2luZ3MuJztcbiAgfSBlbHNlIGlmIChldmVudC50YXJnZXQgPT09IG1vZGFsKSB7XG4gICAgbW9kYWwuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgfVxufVxuXG5mdW5jdGlvbiBwb3N0TmV3Qm9va2luZyhuZXdCb29raW5nKSB7XG4gIHJldHVybiBmZXRjaCgnaHR0cHM6Ly9mZS1hcHBzLmhlcm9rdWFwcC5jb20vYXBpL3YxL292ZXJsb29rLzE5MDQvYm9va2luZ3MvYm9va2luZ3MnLCB7XG4gICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgaGVhZGVyczoge1xuICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgIH0sXG4gICAgYm9keTogSlNPTi5zdHJpbmdpZnkobmV3Qm9va2luZylcbiAgfSlcbiAgICAudGhlbihyZXNwb25zZSA9PiBjb25zb2xlLmxvZyhyZXNwb25zZS5qc29uKCkpKVxuICAgIC50aGVuKCgpID0+IHtcbiAgICAgIGZldGNoQWxsRGF0YSgpO1xuICAgIH0pXG4gICAgLmNhdGNoKGVyciA9PiBjb25zb2xlLmxvZyhlcnIpKVxufVxuXG5mdW5jdGlvbiBkZWxldGVCb29raW5nKGV2ZW50KSB7XG4gIGxldCBkZWxldGVCb2R5O1xuICBpZiAoZXZlbnQudGFyZ2V0LmNsYXNzTGlzdFsyXSA9PT0gJ251bWJlcicpIHtcbiAgICBkZWxldGVCb2R5ID0ge2lkOiBwYXJzZUludChldmVudC50YXJnZXQuY2xhc3NMaXN0WzFdKX1cbiAgfSBlbHNlIHtcbiAgICBkZWxldGVCb2R5ID0ge2lkOiBldmVudC50YXJnZXQuY2xhc3NMaXN0WzFdfTtcbiAgfVxuICBpZiAoZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnZGVsZXRlLWJvb2tpbmctYnV0dG9uJykpIHtcbiAgICByZXR1cm4gZmV0Y2goJ2h0dHBzOi8vZmUtYXBwcy5oZXJva3VhcHAuY29tL2FwaS92MS9vdmVybG9vay8xOTA0L2Jvb2tpbmdzL2Jvb2tpbmdzJywge1xuICAgICAgbWV0aG9kOiAnREVMRVRFJyxcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgfSxcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGRlbGV0ZUJvZHkpXG4gICAgfSlcbiAgICAgIC50aGVuKHJlc3BvbnNlID0+IGNvbnNvbGUubG9nKHJlc3BvbnNlLmpzb24oKSkpXG4gICAgICAudGhlbigoKSA9PiB1cGRhdGVCb29raW5ncyhldmVudC50YXJnZXQuY2xhc3NMaXN0WzFdKSlcbiAgICAgIC5jYXRjaChlcnIgPT4gY29uc29sZS5sb2coZXJyKSlcbiAgfVxufVxuXG5mdW5jdGlvbiB1cGRhdGVCb29raW5ncyhpZCkge1xuICBmZXRjaEFsbERhdGEoKTtcbiAgc2V0VGltZW91dChyZW1vdmVFbGVtZW50KGlkKSwgNDAwMClcbn1cblxuZnVuY3Rpb24gcmVtb3ZlRWxlbWVudChib29raW5nSUQpIHtcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYm9va2luZ0lEKS5yZW1vdmUoKTtcbn1cblxuZnVuY3Rpb24gZGlzcGxheUN1c3RvbWVyUm9vbXMoZGF0ZSkge1xuICBmZXRjaEFsbERhdGEoKTtcbiAgZmlsdGVyQ2F0ZWdvcmllcy5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcbiAgZmlsdGVyU3VibWl0QnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xuICBib29rUm9vbUhlYWRlci5pbm5lclRleHQgPSBgQWxsIEF2YWlsYWJsZSBSb29tc2A7XG4gIGxldCBhdmFpbGFibGVSb29tcyA9IGhvdGVsU2VydmljZS5maW5kQXZhaWxhYmxlUm9vbXMoZGF0ZSk7XG4gIGlmICh0eXBlb2YgYXZhaWxhYmxlUm9vbXMgIT09ICdzdHJpbmcnKSB7XG4gICAgbGV0IHNvcnRlZEF2YWlsYWJsZUN1c3RSb29tcyA9IGhvdGVsU2VydmljZS5zb3J0Qm9va2luZ3NCeURhdGUoYXZhaWxhYmxlUm9vbXMpO1xuICAgIGxldCBhbGxSb29tcyA9IHNvcnRlZEF2YWlsYWJsZUN1c3RSb29tcy5tYXAocm9vbSA9PiB7XG4gICAgICByZXR1cm4gYFxuICAgICAgICA8YXJ0aWNsZSBjbGFzcz1cInRvZGF5LWJvb2tpbmctY2FyZFwiPlxuICAgICAgICAgIDxpbWcgc3JjPVwiLi9pbWFnZXMvcm9vbSR7Z2V0UmFuZG9tSW5kZXgoKX0uanBnXCIgYWx0PVwicm9vbSBwaWN0dXJlXCIgY2xhc3M9XCJib29raW5nLWNhcmQtaW1nXCI+XG4gICAgICAgICAgPHNlY3Rpb24gY2xhc3M9XCJib29raW5nLWluZm9cIj5cbiAgICAgICAgICAgIDxwIGNsYXNzPVwicm9vbS10eXBlXCI+JHtyb29tLnJvb21UeXBlfTwvcD5cbiAgICAgICAgICAgIDxwIGNsYXNzPVwicm9vbS1udW1iZXJcIj48Yj5Sb29tIE51bWJlcjo8L2I+ICR7cm9vbS5udW1iZXJ9PC9wPlxuICAgICAgICAgICAgPHAgY2xhc3M9XCJzdGF5LWRhdGVcIj48Yj5CaWRldDo8L2I+ICR7cm9vbS5iaWRldH08L3A+XG4gICAgICAgICAgICA8cCBjbGFzcz1cImN1c3RvbWVyLW5hbWVcIj48Yj5CZWQgVHlwZTo8L2I+ICR7cm9vbS5iZWRTaXplfTwvcD5cbiAgICAgICAgICAgIDxwIGNsYXNzPVwiY3VzdG9tZXItbmFtZVwiPjxiPk51bWJlciBvZiBCZWRzOiA8L2I+ICR7cm9vbS5udW1CZWRzfTwvcD5cbiAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgICAgPHNlY3Rpb24gY2xhc3M9XCJjdXN0b21lci1ib29raW5nXCI+XG4gICAgICAgICAgICA8cCBjbGFzcz1cImN1c3RvbWVyLXByaWNlXCI+JCR7cm9vbS5jb3N0UGVyTmlnaHQudG9GaXhlZCgyKX08L3A+XG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImN1c3RvbWVyLWJvb2stYnV0dG9uICR7cm9vbS5udW1iZXJ9XCI+Qk9PSyBST09NPC9idXR0b24+XG4gICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICA8L2FydGljbGU+YFxuICAgIH0pLmpvaW4oJyAnKVxuICAgIGN1c3RvbWVyUm9vbXMuaW5zZXJ0QWRqYWNlbnRIVE1MKCdhZnRlcmJlZ2luJywgYWxsUm9vbXMpO1xuICB9IGVsc2Uge1xuICAgIGN1c3RvbWVyUm9vbXMuaW5uZXJUZXh0ID0gYCR7YXZhaWxhYmxlUm9vbXN9YDtcbiAgfVxufVxuXG5mdW5jdGlvbiBjdXN0b21lckFkZEJvb2tpbmdzKGV2ZW50KSB7XG4gIGlmIChldmVudC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdjdXN0b21lci1ib29rLWJ1dHRvbicpKSB7XG4gICAgbGV0IG5ld0Jvb2tpbmcgPSBob3RlbFNlcnZpY2UuYWRkTmV3Qm9va2luZyh1c2VySUQsIHRvZGF5RGF0ZSwgZXZlbnQudGFyZ2V0LmNsYXNzTGlzdFsxXSk7XG4gICAgY3VzdG9tZXJTdGF0dXMuaW5uZXJIVE1MID0gJydcbiAgICBwb3N0TmV3Qm9va2luZyhuZXdCb29raW5nKTtcbiAgICBsb2FkQ3VzdG9tZXJJbmZvKCk7XG4gICAgZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5yZW1vdmUoJ2N1c3RvbWVyLWJvb2stYnV0dG9uJyk7XG4gICAgZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ2Jvb2tlZC1yb29tJyk7XG4gICAgZXZlbnQudGFyZ2V0LmlubmVyVGV4dCA9ICdCT09LRUQhJztcbiAgICBldmVudC50YXJnZXQuZGlzYWJsZWQgPSB0cnVlO1xuICB9XG59XG5cbmZ1bmN0aW9uIGRpc3BsYXlDdXN0b21lckJvb2tpbmdzKGV2ZW50KSB7XG4gIGlmIChldmVudC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCd2aWV3LWJvb2tpbmdzLWJ1dHRvbicpKSB7XG4gICAgY3VzdG9tZXJSb29tcy5pbm5lckhUTUwgPSAnJztcbiAgICBib29rUm9vbURhdGUuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG4gICAgYm9va1Jvb21IZWFkZXIuaW5uZXJUZXh0ID0gYFlvdXIgQm9va2luZ3NgO1xuICAgIGJhY2tUb0Jvb2tpbmcuaW5zZXJ0QWRqYWNlbnRIVE1MKCdiZWZvcmVlbmQnLCBgPGJ1dHRvbiBjbGFzcz1cImJhY2stdG8tYm9vay1idXR0b25cIj5Cb29rIGEgUm9vbTwvYnV0dG9uPmApO1xuICAgIGxldCBib29raW5ncyA9IGhvdGVsU2VydmljZS5maW5kQ3VzdG9tZXJCb29raW5ncyh1c2VySUQpO1xuICAgIGxldCBzb3J0ZWRCb29raW5ncyA9IGhvdGVsU2VydmljZS5zb3J0Qm9va2luZ3NCeURhdGUoYm9va2luZ3MpO1xuICAgIGlmIChzb3J0ZWRCb29raW5ncy5sZW5ndGggPiAwKSB7XG4gICAgICBsZXQgdG9kYXlzQm9va2luZ0luZm8gPSBzb3J0ZWRCb29raW5ncy5tYXAoYm9va2luZyA9PiB7XG4gICAgICAgIHJldHVybiBgXG4gICAgICAgIDxhcnRpY2xlIGNsYXNzPVwidG9kYXktYm9va2luZy1jYXJkXCI+XG4gICAgICAgICAgPGltZyBzcmM9XCIuL2ltYWdlcy9yb29tJHtnZXRSYW5kb21JbmRleCgpfS5qcGdcIiBhbHQ9XCJyb29tIHBpY3R1cmVcIiBjbGFzcz1cImJvb2tpbmctY2FyZC1pbWdcIj5cbiAgICAgICAgICA8c2VjdGlvbiBjbGFzcz1cImJvb2tpbmctaW5mb1wiPlxuICAgICAgICAgICAgPHAgY2xhc3M9XCJyb29tLXR5cGVcIj4ke2Jvb2tpbmcucm9vbVR5cGV9PC9wPlxuICAgICAgICAgICAgPHAgY2xhc3M9XCJyb29tLW51bWJlclwiPjxiPlJvb20gTnVtYmVyOjwvYj4gJHtib29raW5nLnJvb21OdW1iZXJ9PC9wPlxuICAgICAgICAgICAgPHAgY2xhc3M9XCJzdGF5LWRhdGVcIj48Yj5EYXRlIEJvb2tlZDo8L2I+ICR7Ym9va2luZy5kYXRlfTwvcD5cbiAgICAgICAgICAgIDxwIGNsYXNzPVwiY29uZmlybWF0aW9uLW51bWJlclwiPjxiPkNvbmZpcm1hdGlvbjo8L2I+JHtib29raW5nLmlkfTwvcD5cbiAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgICAgPHNlY3Rpb24gY2xhc3M9XCJkZWxldGUtYm9va2luZ1wiPlxuICAgICAgICAgICAgPHAgY2xhc3M9XCJyb29tLXByaWNlXCI+JCR7Ym9va2luZy5jb3N0UGVyTmlnaHQudG9GaXhlZCgyKX08L3A+XG4gICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICAgIDwvYXJ0aWNsZT5gXG4gICAgICB9KS5qb2luKCcgJylcbiAgICAgIGN1c3RvbWVyUm9vbXMuaW5zZXJ0QWRqYWNlbnRIVE1MKCdiZWZvcmVlbmQnLCB0b2RheXNCb29raW5nSW5mbyk7XG4gICAgfVxuICB9XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy52aWV3LWJvb2tpbmdzLWJ1dHRvbicpLmRpc2FibGVkID0gdHJ1ZTtcbn1cblxuZnVuY3Rpb24gYmFja1RvQ3VzdG9tZXJCb29raW5nKCkge1xuICBjdXN0b21lclJvb21zLmlubmVySFRNTCA9ICcnO1xuICBib29rUm9vbURhdGUuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XG4gIGJvb2tSb29tSGVhZGVyLmlubmVyVGV4dCA9ICdCb29rIGEgUm9vbSc7XG4gIGJhY2tUb0Jvb2tpbmcuaW5uZXJIVE1MID0gJyc7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy52aWV3LWJvb2tpbmdzLWJ1dHRvbicpLmRpc2FibGVkID0gZmFsc2U7XG59XG5cbmZ1bmN0aW9uIGdldEZpbHRlclZhbHVlKCkge1xuICBsZXQgY2FsZW5kYXJEYXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Jvb2stcm9vbS1kYXRlJykudmFsdWU7XG4gIGxldCBmb3JtYXRDYWxlbmRhckRhdGUgPSBjYWxlbmRhckRhdGUuc3BsaXQoJy0nKS5qb2luKCcvJyk7XG4gIGxldCBhdmFpbGFibGVSb29tcyA9IGhvdGVsU2VydmljZS5maW5kQXZhaWxhYmxlUm9vbXMoZm9ybWF0Q2FsZW5kYXJEYXRlKTtcbiAgbGV0IHNvcnRlZEF2YWlsYWJsZUN1c3RSb29tcyA9IGhvdGVsU2VydmljZS5zb3J0Qm9va2luZ3NCeURhdGUoYXZhaWxhYmxlUm9vbXMpO1xuICBjdXN0b21lclJvb21zLmlubmVySFRNTCA9ICcnO1xuICBpZiAoZmlsdGVyQ2F0ZWdvcmllcy5lbGVtZW50c1swXS52YWx1ZSA9PT0gJ3Jlc2lkZW50aWFsJykge1xuICAgIGxldCByZXNpZGVudGlhbFN1aXRlcyA9IGhvdGVsU2VydmljZS5maWx0ZXJSb29tQnlUeXBlKHNvcnRlZEF2YWlsYWJsZUN1c3RSb29tcywgJ3Jlc2lkZW50aWFsIHN1aXRlJyk7XG4gICAgZm9ybWF0RmlsdGVyZWRWaWV3KCdSZXNpZGVudGlhbCBTdWl0ZXMnLCByZXNpZGVudGlhbFN1aXRlcyk7XG4gIH0gZWxzZSBpZiAoZmlsdGVyQ2F0ZWdvcmllcy5lbGVtZW50c1sxXS52YWx1ZSA9PT0gJ3N1aXRlJykge1xuICAgIGxldCBzdWl0ZXMgPSBob3RlbFNlcnZpY2UuZmlsdGVyUm9vbUJ5VHlwZShzb3J0ZWRBdmFpbGFibGVDdXN0Um9vbXMsICdzdWl0ZScpO1xuICAgIGZvcm1hdEZpbHRlcmVkVmlldygnU3VpdGVzJywgc3VpdGVzKTtcbiAgfSBlbHNlIGlmIChmaWx0ZXJDYXRlZ29yaWVzLmVsZW1lbnRzWzJdLnZhbHVlID09PSAnanVuaW9yJykge1xuICAgIGxldCBqdW5pb3JTdWl0ZXMgPSBob3RlbFNlcnZpY2UuZmlsdGVyUm9vbUJ5VHlwZShzb3J0ZWRBdmFpbGFibGVDdXN0Um9vbXMsICdqdW5pb3Igc3VpdGUnKTtcbiAgICBmb3JtYXRGaWx0ZXJlZFZpZXcoJ0p1bmlvciBTdWl0ZXMnLCBqdW5pb3JTdWl0ZXMpO1xuICB9IGVsc2UgaWYgKGZpbHRlckNhdGVnb3JpZXMuZWxlbWVudHNbM10udmFsdWUgPT09ICdzaW5nbGUnKSB7XG4gICAgbGV0IHNpbmdsZVJvb21zID0gaG90ZWxTZXJ2aWNlLmZpbHRlclJvb21CeVR5cGUoc29ydGVkQXZhaWxhYmxlQ3VzdFJvb21zLCAnc2luZ2xlIHJvb20nKTtcbiAgICBmb3JtYXRGaWx0ZXJlZFZpZXcoJ1NpbmdsZSBSb29tcycsIHNpbmdsZVJvb21zKTtcbiAgfVxuICBjbGVhckZvcm1WYWx1ZXMoKTtcbn1cblxuXG5mdW5jdGlvbiBmb3JtYXRGaWx0ZXJlZFZpZXcocm9vbVR5cGUsIHNvcnRlZFJvb21zKSB7XG4gIGRpc3BsYXlGaWx0ZXJlZFJvb21zKHNvcnRlZFJvb21zKTtcbiAgYm9va1Jvb21IZWFkZXIuaW5uZXJUZXh0ID0gYEF2YWlsYWJsZSAke3Jvb21UeXBlfWA7XG4gIGZpbHRlckNhdGVnb3JpZXMuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG4gIGZpbHRlclN1Ym1pdEJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcbiAgZmlsdGVyUmVmcmVzaEJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcbn1cblxuZnVuY3Rpb24gY2xlYXJGb3JtVmFsdWVzKCkge1xuICBmaWx0ZXJDYXRlZ29yaWVzLmVsZW1lbnRzWydyZXNpZGVudGlhbCddLmNoZWNrZWQgPSBmYWxzZTtcbiAgZmlsdGVyQ2F0ZWdvcmllcy5lbGVtZW50c1snc3VpdGUnXS5jaGVja2VkID0gZmFsc2U7XG4gIGZpbHRlckNhdGVnb3JpZXMuZWxlbWVudHNbJ2p1bmlvciddLmNoZWNrZWQgPSBmYWxzZTtcbiAgZmlsdGVyQ2F0ZWdvcmllcy5lbGVtZW50c1snc2luZ2xlJ10uY2hlY2tlZCA9IGZhbHNlO1xufVxuXG5mdW5jdGlvbiBkaXNwbGF5RmlsdGVyZWRSb29tcyhyb29tcykge1xuICBjdXN0b21lclJvb21zLmlubmVyVGV4dCA9ICcnO1xuICBsZXQgc29ydGVkRmlsdGVyZWRSb29tcyA9IGhvdGVsU2VydmljZS5zb3J0Qm9va2luZ3NCeURhdGUocm9vbXMpO1xuICBsZXQgYWxsUm9vbXMgPSBzb3J0ZWRGaWx0ZXJlZFJvb21zLm1hcChyb29tID0+IHtcbiAgICByZXR1cm4gYDxhcnRpY2xlIGNsYXNzPVwidG9kYXktYm9va2luZy1jYXJkXCI+XG4gICAgPGltZyBzcmM9XCIuL2ltYWdlcy9yb29tJHtnZXRSYW5kb21JbmRleCgpfS5qcGdcIiBhbHQ9XCJyb29tIHBpY3R1cmVcIiBjbGFzcz1cImJvb2tpbmctY2FyZC1pbWdcIj5cbiAgICA8c2VjdGlvbiBjbGFzcz1cImJvb2tpbmctaW5mb1wiPlxuICAgICAgPHAgY2xhc3M9XCJyb29tLXR5cGVcIj4ke3Jvb20ucm9vbVR5cGV9PC9wPlxuICAgICAgPHAgY2xhc3M9XCJyb29tLW51bWJlclwiPjxiPlJvb20gTnVtYmVyOjwvYj4gJHtyb29tLm51bWJlcn08L3A+XG4gICAgICA8cCBjbGFzcz1cInN0YXktZGF0ZVwiPjxiPkJpZGV0OjwvYj4gJHtyb29tLmJpZGV0fTwvcD5cbiAgICAgIDxwIGNsYXNzPVwiY3VzdG9tZXItbmFtZVwiPjxiPkJlZCBUeXBlOjwvYj4gJHtyb29tLmJlZFNpemV9PC9wPlxuICAgICAgPHAgY2xhc3M9XCJjdXN0b21lci1uYW1lXCI+PGI+TnVtYmVyIG9mIEJlZHM6IDwvYj4gJHtyb29tLm51bUJlZHN9PC9wPlxuICAgIDwvc2VjdGlvbj5cbiAgICA8c2VjdGlvbiBjbGFzcz1cImN1c3RvbWVyLWJvb2tpbmdcIj5cbiAgICAgIDxwIGNsYXNzPVwiY3VzdG9tZXItcHJpY2VcIj4kJHtyb29tLmNvc3RQZXJOaWdodC50b0ZpeGVkKDIpfTwvcD5cbiAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiY3VzdG9tZXItYm9vay1idXR0b24gJHtyb29tLm51bWJlcn1cIj5CT09LIFJPT008L2J1dHRvbj5cbiAgICA8L3NlY3Rpb24+XG4gICAgPC9hcnRpY2xlPmBcbiAgfSkuam9pbignICcpXG5cbiAgY3VzdG9tZXJSb29tcy5pbnNlcnRBZGphY2VudEhUTUwoJ2FmdGVyYmVnaW4nLCBhbGxSb29tcyk7XG59XG5cbmZ1bmN0aW9uIHJlZnJlc2hGaWx0ZXIoZXZlbnQpIHtcbiAgaWYgKGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2ZpbHRlci1zdGF0dXMnKSkge1xuICAgIGN1c3RvbWVyUm9vbXMuaW5uZXJUZXh0ID0gJyc7XG4gICAgbGV0IGNhbGVuZGFyRGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdib29rLXJvb20tZGF0ZScpLnZhbHVlO1xuICAgIGxldCBmb3JtYXRDYWxlbmRhckRhdGUgPSBjYWxlbmRhckRhdGUuc3BsaXQoJy0nKS5qb2luKCcvJyk7XG4gICAgZGlzcGxheUN1c3RvbWVyUm9vbXMoZm9ybWF0Q2FsZW5kYXJEYXRlKTtcbiAgICBmaWx0ZXJDYXRlZ29yaWVzLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xuICAgIGZpbHRlclJlZnJlc2hCdXR0b24uY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG4gICAgZmlsdGVyU3VibWl0QnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9