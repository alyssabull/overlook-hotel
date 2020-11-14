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
exports.push([module.i, "body {\n  background: url(\"https://www.jetsetter.com/wp-content/uploads/sites/7/2018/04/h-PooSFA.jpeg\");\n  background-size: 100%; }\n\nheader {\n  display: flex;\n  justify-content: space-between;\n  background-color: white;\n  height: 100%;\n  width: 100%;\n  margin: 0px;\n  border-radius: 10px; }\n\n.header-name {\n  display: flex;\n  flex-direction: column;\n  font-family: 'Comfortaa', cursive;\n  font-size: 30px;\n  padding-left: 20px;\n  padding-top: 2px; }\n\n.header-buttons {\n  display: flex;\n  height: 100%;\n  align-items: center; }\n\n.header-button {\n  height: 18%;\n  font-family: 'Comfortaa', cursive;\n  font-size: 11px;\n  background-color: white;\n  border: none;\n  outline: none;\n  border-radius: 10px;\n  margin-right: 30px; }\n\n.header-button:hover {\n  cursor: pointer;\n  color: darkgrey; }\n\n.enter-credentials {\n  font-family: 'Comfortaa', cursive;\n  display: flex;\n  align-items: center;\n  background-color: white;\n  margin: 5% 35% 5% 35%;\n  flex-direction: column;\n  font-size: 15px;\n  border-radius: 5px; }\n\n.credentials {\n  margin-top: 2%; }\n\n.login-info {\n  display: flex;\n  width: 50%;\n  height: 18%;\n  margin: 3% 0% 5% 0%;\n  outline: none; }\n\n.login-button {\n  font-family: 'Comfortaa', cursive;\n  margin-top: 5%;\n  padding: 2%;\n  width: 40%;\n  border-radius: 10px;\n  outline: none;\n  border: solid darkgrey 1px; }\n\n.login-button:hover {\n  cursor: pointer;\n  background-color: lightgrey; }\n\n.error-message {\n  font-family: 'Comfortaa', cursive;\n  font-size: 12px;\n  margin-left: 4%; }\n\n.today-hotel-overview {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  font-family: 'Comfortaa', cursive;\n  font-size: 18px;\n  margin: 3% 20% 0% 20%;\n  height: 130px;\n  background-color: white;\n  border-radius: 10px; }\n\n#hotel-overview-info {\n  display: flex;\n  align-items: center;\n  flex-direction: space-around;\n  margin-bottom: 3%;\n  font-size: 14px; }\n\n.today-info-details {\n  display: flex;\n  flex-direction: row; }\n\n.today-hotel-bookings {\n  background-color: white;\n  border-radius: 10px;\n  margin: 0% 7% 0% 7%; }\n\n.today-hotel-bookings-title {\n  font-family: 'Comfortaa', cursive;\n  font-size: 20px;\n  display: flex;\n  justify-content: center;\n  padding-top: 1%; }\n\n.grid-container {\n  display: flex;\n  justify-content: space-around;\n  grid-template-rows: repeat(7, 1fr);\n  font-family: 'Comfortaa', cursive; }\n\n.grid-item {\n  margin-bottom: 2%;\n  width: 150px;\n  text-align: center;\n  font-size: 12px; }\n\n.grid-header {\n  margin-bottom: 3%;\n  width: 150px;\n  text-align: center;\n  font-size: 14px; }\n\n#grid-column {\n  display: flex;\n  flex-direction: column; }\n\n.grid-row {\n  display: flex;\n  justify-content: space-around;\n  font-size: 12px; }\n\n.book-room {\n  font-family: 'Comfortaa', cursive;\n  font-size: 11px;\n  border-radius: 5px;\n  padding: 5px;\n  outline: none; }\n\n.book-room:hover {\n  cursor: pointer;\n  background-color: lightgrey;\n  border-radius: 5px; }\n\n.delete-booking-button {\n  font-family: 'Comfortaa', cursive;\n  font-size: 11px;\n  border-radius: 5px;\n  padding: 5px; }\n\n.delete-booking-button:hover {\n  cursor: pointer;\n  background-color: lightgrey;\n  border-radius: 5px; }\n\n.customer-booking-search-bar {\n  display: flex;\n  flex-direction: column;\n  font-family: 'Comfortaa', cursive;\n  font-size: 15px;\n  background-color: white;\n  border-radius: 10px;\n  margin: 2% 23% 0% 23%; }\n\n.search-customers {\n  display: flex;\n  justify-content: center;\n  margin-bottom: 4%; }\n\n.search-customer-name {\n  width: 35%;\n  margin-left: 20%;\n  margin-bottom: 5%; }\n\n.customer-view-buttons {\n  display: flex;\n  justify-content: center; }\n\n#search-customer-button {\n  font-family: 'Comfortaa', cursive;\n  width: 20%;\n  min-width: 120px;\n  margin: 0% 5% 5% 5%;\n  border-radius: 10px;\n  border: solid black 1px;\n  padding: 5px;\n  outline: none; }\n\n#search-customer-button:hover {\n  cursor: pointer;\n  background-color: lightgrey;\n  border-radius: 10px;\n  margin: 0% 5% 5% 5%;\n  width: 20%;\n  outline: none;\n  border: solid black 1px; }\n\n#view-customer-bookings-button {\n  font-family: 'Comfortaa', cursive;\n  width: 20%;\n  min-width: 120px;\n  margin: 0% 5% 5% 5%;\n  border-radius: 10px;\n  border: solid black 1px;\n  padding: 5px;\n  outline: none; }\n\n#view-customer-bookings-button:hover {\n  cursor: pointer;\n  background-color: lightgrey;\n  border-radius: 10px;\n  margin: 0% 5% 5% 5%;\n  width: 20%;\n  outline: none;\n  border: solid black 1px; }\n\n.refresh-customers {\n  font-family: 'Comfortaa', cursive;\n  width: 15%;\n  min-width: 120px;\n  margin: 0% 5% 5% 2%;\n  border-radius: 10px;\n  border: solid black 1px;\n  padding: 5px;\n  outline: none; }\n\n.refresh-customers:hover {\n  cursor: pointer;\n  background-color: lightgrey;\n  border-radius: 10px;\n  margin: 0% 5% 5% 2%;\n  width: 15%;\n  outline: none;\n  border: solid black 1px; }\n\n.view-available-rooms {\n  background-color: white;\n  margin: 2% 10% 0% 10%;\n  border-radius: 10px;\n  font-family: 'Comfortaa', cursive; }\n\n.manage-customer-bookings {\n  background-color: white;\n  margin: 2% 10% 0% 10%;\n  border-radius: 10px;\n  font-family: 'Comfortaa', cursive; }\n\n.customer-booking-grid {\n  padding-top: 2%; }\n\n.customer-bookings-header {\n  display: flex;\n  justify-content: center;\n  padding-top: 2%; }\n\n#current-customer-bookings {\n  display: flex;\n  flex-direction: column; }\n\n.bookings-for-title {\n  display: flex;\n  justify-content: center; }\n\n#manager-book-room-date {\n  margin: 3.5% 0% 5% 2%;\n  min-width: 150px; }\n\n.manager-book-room-header {\n  padding-top: 2%; }\n\n#customer-bookings {\n  display: flex; }\n\n#managerview-customer-bookings {\n  display: flex; }\n\n.no-bookings {\n  font-family: 'Comfortaa', cursive;\n  display: flex;\n  justify-content: center;\n  padding: 5%;\n  font-size: 14px; }\n\n.header-info {\n  display: flex;\n  flex-direction: column; }\n\n.customer-header {\n  display: flex;\n  justify-content: flex-end;\n  font-family: 'Comfortaa', cursive;\n  border-bottom: solid black 1px; }\n\n.customer-status {\n  display: flex;\n  align-items: center;\n  margin-left: 5%;\n  margin-right: 6%;\n  margin-top: 2%; }\n\n.customer-welcome {\n  font-size: 22px;\n  margin-bottom: 2%; }\n\n.card-date {\n  font-size: 18px; }\n\n.gold {\n  font-size: 11px;\n  color: goldenrod; }\n\n.silver {\n  font-size: 11px;\n  color: lightgrey; }\n\n.bronze {\n  font-size: 11px;\n  color: sienna; }\n\n.blue {\n  font-size: 11px;\n  color: cornflowerblue; }\n\n.customer-view-available-rooms {\n  width: 100%;\n  margin: 0%;\n  padding-bottom: 5%; }\n\n.filter-rooms {\n  display: flex; }\n\n.book-room-header {\n  display: flex;\n  justify-content: center;\n  padding-top: 1%; }\n\n.book-room-search {\n  display: flex;\n  justify-content: center;\n  padding-bottom: 2%;\n  border-bottom: solid darkgrey 1px; }\n\n.book-room-date {\n  margin-right: 2%; }\n\n.search-rooms-button {\n  font-family: 'Comfortaa', cursive;\n  border-radius: 10px;\n  border: solid black 1px;\n  width: 100px;\n  min-width: 75px;\n  background-color: lightblue;\n  outline: none; }\n\n.search-rooms-button:hover {\n  cursor: pointer;\n  background-color: lightgrey;\n  border-radius: 10px;\n  outline: none;\n  border: solid black 1px; }\n\n.customer-room-search {\n  display: flex; }\n\n.all-room-cards {\n  width: 150%; }\n\n.room-booking-card {\n  border: solid black 1px;\n  border-radius: 5px;\n  margin: 5%;\n  box-shadow: 5px 8px lightgrey;\n  min-width: 700px; }\n\n.room-booking-card:hover {\n  -webkit-transform: scale(1.05);\n  -ms-transform: scale(1.05);\n  transform: scale(1.05);\n  transition: 1s ease; }\n\n.room-card-header {\n  display: flex;\n  align-items: center;\n  font-size: 25px;\n  margin: 0%;\n  padding-left: 2%;\n  height: 50px;\n  border-bottom: solid black 1px; }\n\n.room-type {\n  margin: 1% 0% 1% 0%; }\n\n.room-card-body {\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 2%;\n  margin-top: 0%; }\n\n.room-image {\n  height: 160px;\n  width: 220px;\n  margin: 10% 0% 0% 10%;\n  border-radius: 5px; }\n\n.room-card-details {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  font-size: 13px;\n  margin-top: 1%; }\n\n.room-card-price {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  margin-right: 5%;\n  margin-bottom: 4%; }\n\n.room-price {\n  font-size: 25px; }\n\n.customer-book-button {\n  font-family: 'Comfortaa', cursive;\n  border-radius: 10px;\n  border: solid black 1px;\n  width: 175px;\n  min-width: 120px;\n  padding: 5px;\n  background-color: lightgrey; }\n\n.customer-book-button:hover {\n  cursor: pointer;\n  background-color: lightblue;\n  border-radius: 10px;\n  outline: none;\n  padding: 5px;\n  border: solid black 1px; }\n\n.cancellation-policy {\n  font-size: 8px;\n  margin-top: 10%; }\n\n.filter-rooms {\n  width: 25%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin-top: 2%; }\n\n#filter-categories {\n  display: flex;\n  flex-direction: column;\n  margin-top: 3%;\n  margin-bottom: 4%;\n  font-size: 13px; }\n\n.tag-button {\n  margin-bottom: 15%; }\n\n.tag-button:hover {\n  cursor: pointer; }\n\ninput[type=radio]:checked + label {\n  color: lightgrey;\n  font-style: normal; }\n\n.filter-button {\n  font-family: 'Comfortaa', cursive;\n  border-radius: 10px;\n  border: solid black 1px;\n  outline: none;\n  width: 150px;\n  min-width: 120px;\n  padding: 2%; }\n\n.filter-button:hover {\n  cursor: pointer;\n  border-radius: 10px;\n  outline: none;\n  border: solid black 1px;\n  background-color: lightgrey; }\n\n.past-bookings {\n  font-family: 'Comfortaa', cursive;\n  background-color: white;\n  border-radius: 10px;\n  padding-bottom: 1%; }\n\n.past-bookings-header {\n  display: flex;\n  justify-content: center;\n  padding-top: 2%;\n  margin-bottom: 0%; }\n\n.appreciation {\n  display: flex;\n  justify-content: center;\n  font-size: 12px; }\n\n.upcoming-bookings {\n  font-family: 'Comfortaa', cursive;\n  background-color: white;\n  border-radius: 10px;\n  padding-bottom: 1%; }\n\n.upcoming-bookings-header {\n  display: flex;\n  justify-content: center;\n  padding-top: 2%;\n  margin-bottom: 0%; }\n\n.hidden {\n  display: none; }\n", ""]);



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
/*! exports provided: allRoomCards, bookARoomButton, bookingHistoryButton, customerBookRoomDate, customerViewRooms, currentCustomerBookings, customerDirectoryButton, customerHeader, customerBookingSearchBar, customerNameInput, customerStatus, customerView, customerWelcome, updateCustomerBookings, dropDown, enterCredentials, errorMessage, filterCategories, filterRefreshButton, filterSection, filterSubmitButton, gridColumn, homeButton, loginButton, managerBookRoomDate, managerBookRoomHeader, manageCustomerBookings, managerView, managerViewCustomerBookings, hotelOverviewInfo, hotelOverviewTitle, passwordInput, pastBookingsDisplay, refreshCustomerButton, searchRoomsButton, searchCustomerNameDropDown, searchCustomersForBookingButton, signOutButton, todayHotelBookings, todayHotelBookingsTitle, todayHotelOverview, usernameInput, upcomingBookingsButton, upcomingBookingsDisplay, viewAvailableRooms, viewCustomerBookingsButton, viewPastBookings, viewUpcomingBookings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "allRoomCards", function() { return allRoomCards; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bookARoomButton", function() { return bookARoomButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bookingHistoryButton", function() { return bookingHistoryButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "customerBookRoomDate", function() { return customerBookRoomDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "customerViewRooms", function() { return customerViewRooms; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "currentCustomerBookings", function() { return currentCustomerBookings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "customerDirectoryButton", function() { return customerDirectoryButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "customerHeader", function() { return customerHeader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "customerBookingSearchBar", function() { return customerBookingSearchBar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "customerNameInput", function() { return customerNameInput; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "customerStatus", function() { return customerStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "customerView", function() { return customerView; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "customerWelcome", function() { return customerWelcome; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateCustomerBookings", function() { return updateCustomerBookings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dropDown", function() { return dropDown; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "enterCredentials", function() { return enterCredentials; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "errorMessage", function() { return errorMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filterCategories", function() { return filterCategories; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filterRefreshButton", function() { return filterRefreshButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filterSection", function() { return filterSection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filterSubmitButton", function() { return filterSubmitButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gridColumn", function() { return gridColumn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "homeButton", function() { return homeButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loginButton", function() { return loginButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "managerBookRoomDate", function() { return managerBookRoomDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "managerBookRoomHeader", function() { return managerBookRoomHeader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "manageCustomerBookings", function() { return manageCustomerBookings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "managerView", function() { return managerView; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "managerViewCustomerBookings", function() { return managerViewCustomerBookings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hotelOverviewInfo", function() { return hotelOverviewInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hotelOverviewTitle", function() { return hotelOverviewTitle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "passwordInput", function() { return passwordInput; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pastBookingsDisplay", function() { return pastBookingsDisplay; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "refreshCustomerButton", function() { return refreshCustomerButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "searchRoomsButton", function() { return searchRoomsButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "searchCustomerNameDropDown", function() { return searchCustomerNameDropDown; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "searchCustomersForBookingButton", function() { return searchCustomersForBookingButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "signOutButton", function() { return signOutButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "todayHotelBookings", function() { return todayHotelBookings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "todayHotelBookingsTitle", function() { return todayHotelBookingsTitle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "todayHotelOverview", function() { return todayHotelOverview; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "usernameInput", function() { return usernameInput; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "upcomingBookingsButton", function() { return upcomingBookingsButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "upcomingBookingsDisplay", function() { return upcomingBookingsDisplay; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "viewAvailableRooms", function() { return viewAvailableRooms; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "viewCustomerBookingsButton", function() { return viewCustomerBookingsButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "viewPastBookings", function() { return viewPastBookings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "viewUpcomingBookings", function() { return viewUpcomingBookings; });
let allRoomCards = document.getElementById('all-room-cards');
let bookARoomButton = document.querySelector('.book-a-room');
let bookingHistoryButton = document.querySelector('.booking-history');
let customerBookRoomDate = document.getElementById('book-room-date');
let customerViewRooms = document.getElementById('customer-view-rooms');
let currentCustomerBookings = document.getElementById('current-customer-bookings');
let customerDirectoryButton = document.querySelector('.customer-directory-button');
let customerHeader = document.querySelector('.customer-header');
let customerBookingSearchBar = document.querySelector('.customer-booking-search-bar');
let customerNameInput = document.querySelector('.search-customer-name');
let customerStatus = document.querySelector('.customer-status');
let customerView = document.querySelector('.customer-view');
let customerWelcome = document.querySelector('.customer-welcome');
let updateCustomerBookings = document.getElementById('update-customer-bookings');
let dropDown = document.getElementById('customers');
let enterCredentials = document.querySelector('.enter-credentials');
let errorMessage = document.querySelector('.error-message');
let filterCategories = document.getElementById('filter-categories');
let filterRefreshButton = document.querySelector('.filter-button');
let filterSection = document.querySelector('.filter-rooms');
let filterSubmitButton = document.querySelector('.filter-button');
let gridColumn = document.getElementById('grid-column');
let homeButton = document.querySelector('.home-button');
let loginButton = document.querySelector('.login-button');
let managerBookRoomDate = document.querySelector('#manager-book-room-date');
let managerBookRoomHeader = document.querySelector('.manager-book-room-header');
let manageCustomerBookings = document.querySelector('.manage-customer-bookings');
let managerView = document.querySelector('.manager-view');
let managerViewCustomerBookings = document.getElementById('managerview-customer-bookings');
let hotelOverviewInfo = document.querySelector('#hotel-overview-info');
let hotelOverviewTitle = document.querySelector('.hotel-overview-title');
let passwordInput = document.querySelector('.password');
let pastBookingsDisplay = document.getElementById('past-bookings-display');
let refreshCustomerButton = document.querySelector('.refresh-customers');
let searchRoomsButton = document.querySelector('.search-rooms-button');
let searchCustomerNameDropDown = document.querySelector('.search-customer-name');
let searchCustomersForBookingButton = document.querySelector('.search-customers-forbooking-button');
let signOutButton = document.querySelector('.signout-button');
let todayHotelBookings = document.querySelector('.today-hotel-bookings');
let todayHotelBookingsTitle = document.querySelector('.today-hotel-bookings-title');
let todayHotelOverview = document.querySelector('.today-hotel-overview');
let usernameInput = document.querySelector('.username');
let upcomingBookingsButton = document.querySelector('.upcoming-bookings');
let upcomingBookingsDisplay = document.getElementById('upcoming-bookings-display');
let viewAvailableRooms = document.querySelector('.view-available-rooms');
let viewCustomerBookingsButton = document.getElementById('view-customer-bookings-button');
let viewPastBookings = document.querySelector('.view-past-bookings');
let viewUpcomingBookings =
document.querySelector('.view-upcoming-bookings');



// export let backToBooking = document.querySelector('.back-to-booking');
// export let bookARoom = document.querySelector('.book-a-room');

// export let bookingModal = document.querySelector('#add-booking-modal');
// export let bookRoomDate = document.querySelector('.book-room-date');
// export let bookRoomHeader = document.querySelector('.book-room-header');
// export let customerRooms = document.querySelector('.display-customer-rooms');




// export let hotelOverviewDate = document.querySelector('.hotel-overview-date');
// export let modalContent = document.querySelector('#modal-content');
// export let modalDate = document.querySelector('.modal-date');
// export let modalTitle = document.querySelector('.modal-title');
// export let searchCustomerInput = document.querySelector('.search-customer-name');
// export let gridContainer = document.querySelector('#customer-bookings');


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
    this.allBookings = [];
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
    let percent = this.calculatePercentageOccupied(date) / 100;
    let occupiedRooms = percent * 25;
    return 25 - occupiedRooms;
  }

  findAvailableRooms(date) {
    let roomsBooked = this.allBookings.reduce((roomNums, booking) => {
      if (booking.date === date && typeof booking.roomNumber === 'number') {
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
      roomsBooked.forEach(roomNum => {
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
            booking.bidet = room.bidet;
            booking.bedSize = room.bedSize;
            booking.numBeds = room.numBeds;
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
            booking.bedSize = room.bedSize;
            booking.bidet = room.bidet;
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

/***/ "./src/apiCalls.js":
/*!*************************!*\
  !*** ./src/apiCalls.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
let url = `https://fe-apps.herokuapp.com/api/v1/overlook/1904/`

let apiCalls = {
  fetchData(key) {
    return fetch(`${url}${key}/${key}`)
      .then(response => response.json())
      .then(data => data[key])
      .catch(err => err)
  },

  postData(newPost, onSuccess) {
    return fetch(`${url}bookings/bookings`, {
      method: 'POST',
      headers: {
  	    'Content-Type': 'application/json'
      },
      body: JSON.stringify(newPost)
    })
      .then(response => response.json())
      .then(json => {
        console.log(json)
        onSuccess();
      })
      .catch(err => console.log(err))
  },

  deleteData(deleteRequest, onSuccess) {
    return fetch(`${url}bookings/bookings`, {
      method: 'DELETE',
      headers: {
  	    'Content-Type': 'application/json'
      },
      body: JSON.stringify(deleteRequest)
    })
      .then(response => response.json())
      .then(json => {
      console.log(json);
      onSuccess();
    })
      .catch(err => console.log(err))
  }
}

/* harmony default export */ __webpack_exports__["default"] = (apiCalls);


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
/* harmony import */ var _apiCalls__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./apiCalls */ "./src/apiCalls.js");
/* harmony import */ var _Hotel_Service_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Hotel-Service.js */ "./src/Hotel-Service.js");
/* harmony import */ var _DOMelements_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./DOMelements.js */ "./src/DOMelements.js");




window.onload = fetchAllData();

let hotelService;
let userID;



//make header buttons hidden after they work


_DOMelements_js__WEBPACK_IMPORTED_MODULE_3__["loginButton"].addEventListener('click', validateCredentials);
_DOMelements_js__WEBPACK_IMPORTED_MODULE_3__["usernameInput"].addEventListener('input', clearErrorMessage);
_DOMelements_js__WEBPACK_IMPORTED_MODULE_3__["signOutButton"].addEventListener('click', signOut);
_DOMelements_js__WEBPACK_IMPORTED_MODULE_3__["customerDirectoryButton"].addEventListener('click', displayBookARoomView);
_DOMelements_js__WEBPACK_IMPORTED_MODULE_3__["searchCustomersForBookingButton"].addEventListener('click', displayRoomSearch);
_DOMelements_js__WEBPACK_IMPORTED_MODULE_3__["viewAvailableRooms"].addEventListener('click', bookARoom);
_DOMelements_js__WEBPACK_IMPORTED_MODULE_3__["homeButton"].addEventListener('click', goHomeManagerView);
_DOMelements_js__WEBPACK_IMPORTED_MODULE_3__["viewCustomerBookingsButton"].addEventListener('click', viewCustomerBookings);
_DOMelements_js__WEBPACK_IMPORTED_MODULE_3__["manageCustomerBookings"].addEventListener('click', deleteBooking);
_DOMelements_js__WEBPACK_IMPORTED_MODULE_3__["refreshCustomerButton"].addEventListener('click', refreshCustomerDropDown);
_DOMelements_js__WEBPACK_IMPORTED_MODULE_3__["bookARoomButton"].addEventListener('click', showBookRoomView);
_DOMelements_js__WEBPACK_IMPORTED_MODULE_3__["searchRoomsButton"].addEventListener('click', displayAvailableRoomsForCustomer);
_DOMelements_js__WEBPACK_IMPORTED_MODULE_3__["filterSection"].addEventListener('click', filterRoomsByType);
_DOMelements_js__WEBPACK_IMPORTED_MODULE_3__["filterRefreshButton"].addEventListener('click', clearFilter);
_DOMelements_js__WEBPACK_IMPORTED_MODULE_3__["allRoomCards"].addEventListener('click', bookRoomCustomerView);
_DOMelements_js__WEBPACK_IMPORTED_MODULE_3__["bookingHistoryButton"].addEventListener('click', viewCustomerBookingHistory);
_DOMelements_js__WEBPACK_IMPORTED_MODULE_3__["upcomingBookingsButton"].addEventListener('click', viewCustomerUpcomingBookings);

_DOMelements_js__WEBPACK_IMPORTED_MODULE_3__["searchCustomerNameDropDown"].addEventListener('change', (event) => {
  _DOMelements_js__WEBPACK_IMPORTED_MODULE_3__["viewCustomerBookingsButton"].classList.remove('hidden');
  _DOMelements_js__WEBPACK_IMPORTED_MODULE_3__["searchCustomersForBookingButton"].classList.remove('hidden');
  _DOMelements_js__WEBPACK_IMPORTED_MODULE_3__["searchCustomersForBookingButton"].disabled = false;
  _DOMelements_js__WEBPACK_IMPORTED_MODULE_3__["viewCustomerBookingsButton"].disabled = false;
  _DOMelements_js__WEBPACK_IMPORTED_MODULE_3__["refreshCustomerButton"].disabled = false;
})
_DOMelements_js__WEBPACK_IMPORTED_MODULE_3__["managerBookRoomDate"].addEventListener('change', (event) => {
  let formatDate = `${event.target.value}`.split('-');
  let calendarDate = formatDate.join('/');
  displayAvailableRooms(calendarDate);
});

function fetchAllData() {
  if (_DOMelements_js__WEBPACK_IMPORTED_MODULE_3__["managerView"].classList.contains('hidden')) {
    _DOMelements_js__WEBPACK_IMPORTED_MODULE_3__["signOutButton"].disabled = true;
  }
  let roomsPromise = _apiCalls__WEBPACK_IMPORTED_MODULE_1__["default"].fetchData('rooms');
  let bookingsPromise = _apiCalls__WEBPACK_IMPORTED_MODULE_1__["default"].fetchData('bookings');
  let usersPromise = _apiCalls__WEBPACK_IMPORTED_MODULE_1__["default"].fetchData('users');

  Promise.all([roomsPromise, bookingsPromise, usersPromise])
    .then(data => hotelService = new _Hotel_Service_js__WEBPACK_IMPORTED_MODULE_2__["default"](data[2], data[0], data[1]))
    .then(() => loadData())
    .catch(err => console.log(err))
}

function updateBookingData() {
  let bookingsPromise = _apiCalls__WEBPACK_IMPORTED_MODULE_1__["default"].fetchData('bookings');

  Promise.all([bookingsPromise])
    .then(data => hotelService.rawBookingData = data[0])
    .then(() => hotelService.addBookings())
    .catch(err => console.log(err))
}

function loadData() {
  hotelService.start();
}

function validateCredentials() {
  if (_DOMelements_js__WEBPACK_IMPORTED_MODULE_3__["usernameInput"].value === 'manager' && _DOMelements_js__WEBPACK_IMPORTED_MODULE_3__["passwordInput"].value === 'overlook2020') {
    createUserDropDown();
    displayHotelOverview();
    let todayDate = hotelService.getDashedTodayDate();
    _DOMelements_js__WEBPACK_IMPORTED_MODULE_3__["managerBookRoomDate"].setAttribute('value', todayDate);
    _DOMelements_js__WEBPACK_IMPORTED_MODULE_3__["managerBookRoomDate"].setAttribute('min', todayDate);
    _DOMelements_js__WEBPACK_IMPORTED_MODULE_3__["homeButton"].classList.remove('hidden');
    _DOMelements_js__WEBPACK_IMPORTED_MODULE_3__["customerDirectoryButton"].classList.remove('hidden');
    _DOMelements_js__WEBPACK_IMPORTED_MODULE_3__["enterCredentials"].classList.add('hidden');
    _DOMelements_js__WEBPACK_IMPORTED_MODULE_3__["managerView"].classList.remove('hidden');
    _DOMelements_js__WEBPACK_IMPORTED_MODULE_3__["signOutButton"].disabled = false;
    _DOMelements_js__WEBPACK_IMPORTED_MODULE_3__["homeButton"].disabled = true;
    _DOMelements_js__WEBPACK_IMPORTED_MODULE_3__["customerDirectoryButton"].classList.remove('hidden');
    _DOMelements_js__WEBPACK_IMPORTED_MODULE_3__["todayHotelOverview"].classList.remove('hidden');
    _DOMelements_js__WEBPACK_IMPORTED_MODULE_3__["todayHotelBookings"].classList.remove('hidden');
    _DOMelements_js__WEBPACK_IMPORTED_MODULE_3__["usernameInput"].value = '';
    _DOMelements_js__WEBPACK_IMPORTED_MODULE_3__["passwordInput"].value = '';
  }
  else if (_DOMelements_js__WEBPACK_IMPORTED_MODULE_3__["usernameInput"].value.includes('customer')
  && _DOMelements_js__WEBPACK_IMPORTED_MODULE_3__["passwordInput"].value === 'overlook2020'
  ) {
    _DOMelements_js__WEBPACK_IMPORTED_MODULE_3__["signOutButton"].disabled = false;
    _DOMelements_js__WEBPACK_IMPORTED_MODULE_3__["customerView"].classList.remove('hidden');
    _DOMelements_js__WEBPACK_IMPORTED_MODULE_3__["bookARoomButton"].classList.remove('hidden');
    _DOMelements_js__WEBPACK_IMPORTED_MODULE_3__["bookingHistoryButton"].classList.remove('hidden');
    _DOMelements_js__WEBPACK_IMPORTED_MODULE_3__["upcomingBookingsButton"].classList.remove('hidden');
    _DOMelements_js__WEBPACK_IMPORTED_MODULE_3__["customerHeader"].classList.remove('hidden');
    let findUserID = _DOMelements_js__WEBPACK_IMPORTED_MODULE_3__["usernameInput"].value.split(/(\d+)/);
    userID = findUserID[1];
    loadUserPage();
  }
  else {
    alertLogInError();
  }
}

function alertLogInError() {
  _DOMelements_js__WEBPACK_IMPORTED_MODULE_3__["usernameInput"].value = '';
  _DOMelements_js__WEBPACK_IMPORTED_MODULE_3__["passwordInput"].value = '';
  let message = `<b>The username and/or password you entered was not recognized. Please try again.</b>`
  _DOMelements_js__WEBPACK_IMPORTED_MODULE_3__["errorMessage"].insertAdjacentHTML('beforeend', message);
}

function clearErrorMessage() {
  _DOMelements_js__WEBPACK_IMPORTED_MODULE_3__["errorMessage"].innerText = '';
}

function loadUserPage() {
  hotelService.allUsers.forEach(user => {
    if (user.id == userID) {
      _DOMelements_js__WEBPACK_IMPORTED_MODULE_3__["enterCredentials"].classList.add('hidden');
      _DOMelements_js__WEBPACK_IMPORTED_MODULE_3__["customerView"].classList.remove('hidden');
      _DOMelements_js__WEBPACK_IMPORTED_MODULE_3__["signOutButton"].disabled = false;
      _DOMelements_js__WEBPACK_IMPORTED_MODULE_3__["filterCategories"].classList.add('hidden');
      _DOMelements_js__WEBPACK_IMPORTED_MODULE_3__["filterSubmitButton"].classList.add('hidden');
      loadCustomerInfo();
      _DOMelements_js__WEBPACK_IMPORTED_MODULE_3__["usernameInput"].value = '';
      _DOMelements_js__WEBPACK_IMPORTED_MODULE_3__["passwordInput"].value = '';
    } else {
      alertLogInError();
    }
  })
}

function loadCustomerInfo() {
  let status;
  _DOMelements_js__WEBPACK_IMPORTED_MODULE_3__["customerHeader"].innerHTML = `<h2 class="customer-welcome">${hotelService.findUserName(userID).toUpperCase()}</h2>`
  let totalSpent = hotelService.calculateTotalSpent(userID).toFixed(2);
  if (totalSpent > 10000) {
    status = 'gold';
  } else if (totalSpent < 10000 && totalSpent > 8000) {
    status = 'silver';
  } else if (totalSpent < 8000 && totalSpent > 5000) {
    status = 'bronze';
  } else {
    status = 'blue';
  }
  displayCustomerStats(status, totalSpent)
}

function displayCustomerStats(status, totalSpent) {
  let statusInfo = `
  <p class="customer-status ${status}"><b>${status.toUpperCase()} LEVEL PREFERRED</b></p>`;
  _DOMelements_js__WEBPACK_IMPORTED_MODULE_3__["customerHeader"].insertAdjacentHTML('beforeend', statusInfo);
}

function showBookRoomView() {
  let todayDate = hotelService.getDashedTodayDate();
  _DOMelements_js__WEBPACK_IMPORTED_MODULE_3__["customerBookRoomDate"].setAttribute('value', todayDate);
  _DOMelements_js__WEBPACK_IMPORTED_MODULE_3__["customerBookRoomDate"].setAttribute('min', todayDate);
  _DOMelements_js__WEBPACK_IMPORTED_MODULE_3__["bookARoomButton"].disabled = true;
  _DOMelements_js__WEBPACK_IMPORTED_MODULE_3__["filterRefreshButton"].disabled = true;
  _DOMelements_js__WEBPACK_IMPORTED_MODULE_3__["customerViewRooms"].classList.remove('hidden');
  _DOMelements_js__WEBPACK_IMPORTED_MODULE_3__["bookingHistoryButton"].disabled = false;
  _DOMelements_js__WEBPACK_IMPORTED_MODULE_3__["upcomingBookingsButton"].disabled = false;
  _DOMelements_js__WEBPACK_IMPORTED_MODULE_3__["viewUpcomingBookings"].classList.add('hidden');
  _DOMelements_js__WEBPACK_IMPORTED_MODULE_3__["viewPastBookings"].classList.add('hidden');
}

function displayAvailableRoomsForCustomer() {
  _DOMelements_js__WEBPACK_IMPORTED_MODULE_3__["filterRefreshButton"].disabled = false;
  let date = _DOMelements_js__WEBPACK_IMPORTED_MODULE_3__["customerBookRoomDate"].value;
  let bookRoomDate = date.split('-').join('/');
  let availableRooms = hotelService.findAvailableRooms(bookRoomDate);
  if (typeof availableRooms !== 'string') {
    let sortedAvailableCustRooms = hotelService.sortBookingsByDate(availableRooms);
    let allRooms = sortedAvailableCustRooms.map(room => {
      let bidetStatus;
      let roomPicture;
      if (room.bidet === true) {
        bidetStatus = 'fa fa-check';
      } else if (room.bidet === false) {
        bidetStatus = 'fa fa-ban';
      }
      if (room.roomType === 'residential suite') {
        roomPicture = 'room1';
      } else if (room.roomType === 'suite') {
        roomPicture = 'room2';
      } else if (room.roomType === 'junior suite') {
        roomPicture = 'room5';
      } else if (room.roomType === 'single room') {
        roomPicture = 'room3';
      }
      return `
      <section class="room-booking-card">
      <section class="room-card-header">
        <p class="room-type">${room.roomType.toUpperCase()}</p>
      </section>
      <section class="room-card-body">
        <article class="room-card-image">
          <img src="./images/${roomPicture}.jpg" alt="" class="room-image">
        </article>
        <article class="room-card-details">
          <p class="room-info"><i class="fa fa-bed" aria-hidden="true"></i> ${room.numBeds} ${room.bedSize.toUpperCase()}</p>
          <p class="room-info"><i class="${bidetStatus}" aria-hidden="true"></i> <b>BIDET</b></p>
          <p class="room-info"><i class="fa fa-wifi" aria-hidden="true"></i> FREE WIFI</p>
          <p class="room-info"><i class="fa fa-coffee" aria-hidden="true"></i> BREAKFAST FOR 2 </p>
        </article>
        <article class="room-card-price">
          <p class="room-price">$${room.costPerNight.toFixed(2)}</p>
          <button type="button" class="customer-book-button ${room.number}" id="button-${room.number}">BOOK ROOM</button>
          <p class="cancellation-policy">FREE CANCELLATION</p>
        </article>
      </section>
      </section>`
    }).join(' ')
    _DOMelements_js__WEBPACK_IMPORTED_MODULE_3__["allRoomCards"].insertAdjacentHTML('afterbegin', allRooms);
  } else {
    _DOMelements_js__WEBPACK_IMPORTED_MODULE_3__["allRoomCards"].innerText = `${availableRooms}`;
  }
}

function filterRoomsByType(event) {
  let calendarDate = document.getElementById('book-room-date').value;
  let formatCalendarDate = calendarDate.split('-').join('/');
  let availableRooms = hotelService.findAvailableRooms(formatCalendarDate);
  let sortedAvailableCustRooms = hotelService.sortBookingsByDate(availableRooms);
  debugger
  if (event.target.value === 'residential') {
    let residentialSuites = hotelService.filterRoomByType(sortedAvailableCustRooms, 'residential suite');
    displayFilteredRooms(residentialSuites);
  } else if (event.target.value === 'suite') {
    let suites = hotelService.filterRoomByType(sortedAvailableCustRooms, 'suite');
    displayFilteredRooms(suites);
  } else if (event.target.value === 'junior') {
    let juniorSuites = hotelService.filterRoomByType(sortedAvailableCustRooms, 'junior suite');
    displayFilteredRooms(juniorSuites);
  } else if (event.target.value === 'single') {
    let singleRooms = hotelService.filterRoomByType(sortedAvailableCustRooms, 'single room');
    displayFilteredRooms(singleRooms);
  }
}

function displayFilteredRooms(rooms) {
  _DOMelements_js__WEBPACK_IMPORTED_MODULE_3__["allRoomCards"].innerHTML = '';
  let sortedFilteredRooms = hotelService.sortBookingsByDate(rooms);
  let allRooms = sortedFilteredRooms.map(room => {
    let bidetStatus;
    let roomPicture;
    if (room.bidet === true) {
      bidetStatus = 'fa fa-check';
    } else if (room.bidet === false) {
      bidetStatus = 'fa fa-ban';
    }
    if (room.roomType === 'residential suite') {
      roomPicture = 'room1';
    } else if (room.roomType === 'suite') {
      roomPicture = 'room2';
    } else if (room.roomType === 'junior suite') {
      roomPicture = 'room5';
    } else if (room.roomType === 'single room') {
      roomPicture = 'room3';
    }
    return `
    <section class="room-booking-card">
    <section class="room-card-header">
      <p class="room-type">${room.roomType.toUpperCase()}</p>
    </section>
    <section class="room-card-body">
      <article class="room-card-image">
        <img src="./images/${roomPicture}.jpg" alt="" class="room-image">
      </article>
      <article class="room-card-details">
        <p class="room-info"><i class="fa fa-bed" aria-hidden="true"></i> ${room.numBeds} ${room.bedSize.toUpperCase()}</p>
        <p class="room-info"><i class="${bidetStatus}" aria-hidden="true"></i> <b>BIDET</b></p>
        <p class="room-info"><i class="fa fa-wifi" aria-hidden="true"></i> FREE WIFI</p>
        <p class="room-info"><i class="fa fa-coffee" aria-hidden="true"></i> BREAKFAST FOR 2 </p>
      </article>
      <article class="room-card-price">
        <p class="room-price">$${room.costPerNight.toFixed(2)}</p>
        <button type="button" class="customer-book-button ${room.number}" id="button-${room.number}">BOOK ROOM</button>
        <p class="cancellation-policy">FREE CANCELLATION</p>
      </article>
    </section>
    </section>`
  }).join(' ')
  _DOMelements_js__WEBPACK_IMPORTED_MODULE_3__["allRoomCards"].insertAdjacentHTML('afterbegin', allRooms);
}


function clearFilter() {
  _DOMelements_js__WEBPACK_IMPORTED_MODULE_3__["filterCategories"].elements['residential'].checked = false;
  _DOMelements_js__WEBPACK_IMPORTED_MODULE_3__["filterCategories"].elements['suite'].checked = false;
  _DOMelements_js__WEBPACK_IMPORTED_MODULE_3__["filterCategories"].elements['junior'].checked = false;
  _DOMelements_js__WEBPACK_IMPORTED_MODULE_3__["filterCategories"].elements['single'].checked = false;
  displayAvailableRoomsForCustomer();
}

function bookRoomCustomerView(event) {
  let bookingDate = _DOMelements_js__WEBPACK_IMPORTED_MODULE_3__["customerBookRoomDate"].value.split('-').join('/');
  let roomNumber = event.target.classList[1];
  let newBooking = hotelService.addNewBooking(userID, bookingDate, roomNumber);
  postNewBooking(newBooking, roomNumber);
}

function viewCustomerBookingHistory() {
  _DOMelements_js__WEBPACK_IMPORTED_MODULE_3__["bookARoomButton"].disabled = false;
  _DOMelements_js__WEBPACK_IMPORTED_MODULE_3__["bookingHistoryButton"].disabled = true;
  _DOMelements_js__WEBPACK_IMPORTED_MODULE_3__["customerViewRooms"].classList.add('hidden');
  _DOMelements_js__WEBPACK_IMPORTED_MODULE_3__["viewPastBookings"].classList.remove('hidden');
  _DOMelements_js__WEBPACK_IMPORTED_MODULE_3__["viewUpcomingBookings"].classList.add('hidden');
  _DOMelements_js__WEBPACK_IMPORTED_MODULE_3__["upcomingBookingsButton"].disabled = false;
  displayPastBookings();
}

function viewCustomerUpcomingBookings() {
  _DOMelements_js__WEBPACK_IMPORTED_MODULE_3__["bookARoomButton"].disabled = false;
  _DOMelements_js__WEBPACK_IMPORTED_MODULE_3__["bookingHistoryButton"].disabled = false;
  _DOMelements_js__WEBPACK_IMPORTED_MODULE_3__["upcomingBookingsButton"].disabled = true;
  _DOMelements_js__WEBPACK_IMPORTED_MODULE_3__["customerViewRooms"].classList.add('hidden');
  _DOMelements_js__WEBPACK_IMPORTED_MODULE_3__["viewPastBookings"].classList.add('hidden');
  _DOMelements_js__WEBPACK_IMPORTED_MODULE_3__["viewUpcomingBookings"].classList.remove('hidden');
  displayUpcomingBookings();
}

function displayPastBookings() {
  let todayDate = hotelService.getTodayDate();
  let allBookings = hotelService.findCustomerBookings(1);
  let filteredBookings = allBookings.filter(booking => {
    return booking.date < todayDate;
  })
  let sortedFilteredBookings = hotelService.sortBookingsByDate(filteredBookings);
  let pastBookings = sortedFilteredBookings.map(room => {
    let bidetStatus;
    let roomPicture;
    if (room.bidet === true) {
      bidetStatus = 'fa fa-check';
    } else if (room.bidet === false) {
      bidetStatus = 'fa fa-ban';
    }
    if (room.roomType === 'residential suite') {
      roomPicture = 'room1';
    } else if (room.roomType === 'suite') {
      roomPicture = 'room2';
    } else if (room.roomType === 'junior suite') {
      roomPicture = 'room5';
    } else if (room.roomType === 'single room') {
      roomPicture = 'room3';
    }
    return `
    <section class="room-booking-card">
    <section class="room-card-header">
      <p class="room-type">${room.roomType.toUpperCase()} <span class="card-date"> - ${room.date}</span></p>
    </section>
    <section class="room-card-body">
      <article class="room-card-image">
        <img src="./images/${roomPicture}.jpg" alt="" class="room-image">
      </article>
      <article class="room-card-details">
        <p class="room-info"><i class="fa fa-bed" aria-hidden="true"></i> ${room.numBeds} ${room.bedSize.toUpperCase()}</p>
        <p class="room-info"><i class="${bidetStatus}" aria-hidden="true"></i> <b>BIDET</b></p>
        <p class="room-info"><i class="fa fa-wifi" aria-hidden="true"></i> FREE WIFI</p>
        <p class="room-info"><i class="fa fa-coffee" aria-hidden="true"></i> BREAKFAST FOR 2 </p>
      </article>
      <article class="room-card-price">
        <p class="room-price">$${room.costPerNight.toFixed(2)}</p>
      </article>
    </section>
    </section>`
  }).join('');
  _DOMelements_js__WEBPACK_IMPORTED_MODULE_3__["pastBookingsDisplay"].insertAdjacentHTML('afterbegin', pastBookings);
}

function displayUpcomingBookings() {
  _DOMelements_js__WEBPACK_IMPORTED_MODULE_3__["upcomingBookingsDisplay"].innerHTML = '';
  let todayDate = hotelService.getTodayDate();
  let allBookings = hotelService.findCustomerBookings(userID);
  let filteredBookings = allBookings.filter(booking => {
    return booking.date >= todayDate;
  })
  if (filteredBookings.length > 0) {
    let pastBookings = filteredBookings.map(room => {
      let bidetStatus;
      let roomPicture;
      if (room.bidet === true) {
        bidetStatus = 'fa fa-check';
      } else if (room.bidet === false) {
        bidetStatus = 'fa fa-ban';
      }
      if (room.roomType === 'residential suite') {
        roomPicture = 'room1';
      } else if (room.roomType === 'suite') {
        roomPicture = 'room2';
      } else if (room.roomType === 'junior suite') {
        roomPicture = 'room5';
      } else if (room.roomType === 'single room') {
        roomPicture = 'room3';
      }
      return `
      <section class="room-booking-card">
      <section class="room-card-header">
        <p class="room-type">${room.roomType.toUpperCase()}</p>
      </section>
      <section class="room-card-body">
        <article class="room-card-image">
          <img src="./images/${roomPicture}.jpg" alt="" class="room-image">
        </article>
        <article class="room-card-details">
          <p class="room-info"><i class="fa fa-bed" aria-hidden="true"></i> ${room.numBeds} ${room.bedSize.toUpperCase()}</p>
          <p class="room-info"><i class="${bidetStatus}" aria-hidden="true"></i> <b>BIDET</b></p>
          <p class="room-info"><i class="fa fa-wifi" aria-hidden="true"></i> FREE WIFI</p>
          <p class="room-info"><i class="fa fa-coffee" aria-hidden="true"></i> BREAKFAST FOR 2 </p>
        </article>
        <article class="room-card-price">
          <p class="room-price">$${room.costPerNight.toFixed(2)}</p>
        </article>
      </section>
      </section>`
    }).join('');
    _DOMelements_js__WEBPACK_IMPORTED_MODULE_3__["upcomingBookingsDisplay"].insertAdjacentHTML('afterbegin', pastBookings);
  } else {
    _DOMelements_js__WEBPACK_IMPORTED_MODULE_3__["upcomingBookingsDisplay"].innerText = 'No upcoming bookings to display at this time.';
  }
}

























function createUserDropDown() {
  let sortCustomerNames = hotelService.allUsers.sort((a, b) => {
    return a.name < b.name ? -1 : 1;
  })
  let customerNames = sortCustomerNames.map(user => {
    return `<option value="${user.name}">`
  }).join('');
  _DOMelements_js__WEBPACK_IMPORTED_MODULE_3__["dropDown"].insertAdjacentHTML('afterbegin', customerNames);
}

function refreshCustomerDropDown() {
  _DOMelements_js__WEBPACK_IMPORTED_MODULE_3__["viewCustomerBookingsButton"].classList.add('hidden');
  _DOMelements_js__WEBPACK_IMPORTED_MODULE_3__["searchCustomersForBookingButton"].classList.add('hidden');
  _DOMelements_js__WEBPACK_IMPORTED_MODULE_3__["customerNameInput"].value = '';
  _DOMelements_js__WEBPACK_IMPORTED_MODULE_3__["refreshCustomerButton"].disabled = true;
}

function goHomeManagerView() {
  _DOMelements_js__WEBPACK_IMPORTED_MODULE_3__["gridColumn"].innerHTML = '';
  _DOMelements_js__WEBPACK_IMPORTED_MODULE_3__["customerNameInput"].value = '';
  displayHotelOverview();
  _DOMelements_js__WEBPACK_IMPORTED_MODULE_3__["homeButton"].disabled = true;
  _DOMelements_js__WEBPACK_IMPORTED_MODULE_3__["customerDirectoryButton"].disabled = false;
  _DOMelements_js__WEBPACK_IMPORTED_MODULE_3__["todayHotelOverview"].classList.remove('hidden');
  _DOMelements_js__WEBPACK_IMPORTED_MODULE_3__["todayHotelBookings"].classList.remove('hidden');
  _DOMelements_js__WEBPACK_IMPORTED_MODULE_3__["manageCustomerBookings"].classList.add('hidden');
  _DOMelements_js__WEBPACK_IMPORTED_MODULE_3__["customerBookingSearchBar"].classList.add('hidden');
  _DOMelements_js__WEBPACK_IMPORTED_MODULE_3__["viewAvailableRooms"].classList.add('hidden');
}

function displayHotelOverview() {
  let date = hotelService.getTodayDate();
  _DOMelements_js__WEBPACK_IMPORTED_MODULE_3__["hotelOverviewTitle"].innerText = `Hotel Overview for ${date}`;
  let todayRevenue = hotelService.calculateTotalRevenue(date);
  let availableRooms = hotelService.calculateNumberAvailableRooms(date);
  let percentOccupied = hotelService.calculatePercentageOccupied(date);
  let overview = `
      <b>Today Revenue:</b> &nbsp; $${todayRevenue} &nbsp; &nbsp; &nbsp; &nbsp;
      <b>Rooms Available:</b> &nbsp; ${availableRooms} &nbsp; &nbsp; &nbsp; &nbsp;
      <b>Percentage Occupied:</b> &nbsp; ${percentOccupied}%
    `;
  _DOMelements_js__WEBPACK_IMPORTED_MODULE_3__["hotelOverviewInfo"].innerHTML = overview;
  displayTodayBookings();
}

function displayTodayBookings() {
  let date = hotelService.getTodayDate();
  _DOMelements_js__WEBPACK_IMPORTED_MODULE_3__["todayHotelBookingsTitle"].innerHTML = '';
  let bookings = hotelService.findBookings(date);
  if (typeof bookings !== 'string') {
    let sortedBookings = hotelService.sortBookingsByRoomNumber(bookings);
    let todaysBookingInfo = sortedBookings.map(booking => {
      return `<article class="manager-booking-card" id="${booking.id}">
      <br>
      <div class="grid-container">
        <div class="grid-item">${booking.date}</div>
        <div class="grid-item">${booking.guestName}</div>
        <div class="grid-item">${booking.roomType.toUpperCase()}</div>
        <div class="grid-item">${booking.roomNumber}</div>
        <div class="grid-item">${booking.bedSize.toUpperCase()}</div>
        <div class="grid-item">$${booking.costPerNight.toFixed(2)}</div>
        <div class="grid-item">${booking.id}</div>
      </div>`
    }).join(' ')
    _DOMelements_js__WEBPACK_IMPORTED_MODULE_3__["todayHotelBookings"].insertAdjacentHTML('beforeend', todaysBookingInfo);
    _DOMelements_js__WEBPACK_IMPORTED_MODULE_3__["todayHotelBookingsTitle"].innerText = `Bookings for ${date}`;
  } else {
    _DOMelements_js__WEBPACK_IMPORTED_MODULE_3__["todayHotelBookingsTitle"].innerText = 'Bookings for --';
    _DOMelements_js__WEBPACK_IMPORTED_MODULE_3__["todayHotelBookings"].innerHTML = `<h5 class="no-bookings">${bookings}</h5>`;
  }
}

function displayBookARoomView() {
  _DOMelements_js__WEBPACK_IMPORTED_MODULE_3__["refreshCustomerButton"].disabled = true;
  _DOMelements_js__WEBPACK_IMPORTED_MODULE_3__["homeButton"].disabled = false;
  _DOMelements_js__WEBPACK_IMPORTED_MODULE_3__["customerDirectoryButton"].disabled = true;
  _DOMelements_js__WEBPACK_IMPORTED_MODULE_3__["viewCustomerBookingsButton"].classList.add('hidden');
  _DOMelements_js__WEBPACK_IMPORTED_MODULE_3__["searchCustomersForBookingButton"].classList.add('hidden');
  _DOMelements_js__WEBPACK_IMPORTED_MODULE_3__["todayHotelOverview"].classList.add('hidden');
  _DOMelements_js__WEBPACK_IMPORTED_MODULE_3__["todayHotelBookings"].classList.add('hidden');
  _DOMelements_js__WEBPACK_IMPORTED_MODULE_3__["customerBookingSearchBar"].classList.remove('hidden');
}

function displayRoomSearch() {
  _DOMelements_js__WEBPACK_IMPORTED_MODULE_3__["updateCustomerBookings"].innerHTML = '';
  _DOMelements_js__WEBPACK_IMPORTED_MODULE_3__["viewCustomerBookingsButton"].disabled = false;
  _DOMelements_js__WEBPACK_IMPORTED_MODULE_3__["manageCustomerBookings"].classList.add('hidden');
  userID = hotelService.findUserId(_DOMelements_js__WEBPACK_IMPORTED_MODULE_3__["customerNameInput"].value);
  _DOMelements_js__WEBPACK_IMPORTED_MODULE_3__["viewAvailableRooms"].classList.remove('hidden');
  _DOMelements_js__WEBPACK_IMPORTED_MODULE_3__["managerBookRoomHeader"].innerText = `Book a Room for ${_DOMelements_js__WEBPACK_IMPORTED_MODULE_3__["customerNameInput"].value} on`;
  _DOMelements_js__WEBPACK_IMPORTED_MODULE_3__["searchCustomersForBookingButton"].disabled = true;
}

function displayAvailableRooms(date) {
  _DOMelements_js__WEBPACK_IMPORTED_MODULE_3__["viewAvailableRooms"].classList.remove('hidden');
  _DOMelements_js__WEBPACK_IMPORTED_MODULE_3__["manageCustomerBookings"].classList.remove('hidden');
  let gridColumn = document.getElementById('grid-column');
  gridColumn.innerHTML = '';
  let availableRooms = hotelService.findAvailableRooms(date);
  if (typeof availableRooms !== 'string') {
    let sortedAvailableRooms = hotelService.sortBookingsByDate(availableRooms);
    let allRooms = sortedAvailableRooms.map(room => {
      return `
      <div class="grid-row">
        <div class="grid-item">${room.roomType.toUpperCase()}</div>
        <div class="grid-item">${room.number}</div>
        <div class="grid-item">${room.bedSize.toUpperCase()}</div>
        <div class="grid-item">${room.bidet.toString().toUpperCase()}</div>
        <div class="grid-item">$${room.costPerNight.toFixed(2)}</div>
        <div class="grid-item">
        <button type="button" class="book-room ${room.number}" id="button-${room.number}">BOOK ROOM</button></div>
      </div>`
    }).join(' ')
    gridColumn.insertAdjacentHTML('beforeend', allRooms);
  } else {
    gridColumn.innerHTML = `<h5 class="no-bookings">${availableRooms}</h5>`;
  }
}

function viewCustomerBookings() {
  _DOMelements_js__WEBPACK_IMPORTED_MODULE_3__["refreshCustomerButton"].disabled = false;
  let customerBookingsHeader = document.querySelector('.customer-bookings-header');
  let username = _DOMelements_js__WEBPACK_IMPORTED_MODULE_3__["searchCustomerNameDropDown"].value;
  customerBookingsHeader.innerText = `Bookings for ${username}`;
  displayCustomerBookingsSection();
  let userID = hotelService.findUserId(username);
  let bookings = hotelService.findCustomerBookings(userID);
  let sortedBookings = hotelService.sortBookingsByDate(bookings);
  (console.log('bookings num', sortedBookings.length))
  if (sortedBookings.length > 0) {
    let todaysBookingInfo = sortedBookings.map(booking => {
      return `
      <div class="grid-row" id="${booking.id}">
        <div class="grid-item">${booking.date}</div>
        <div class="grid-item">${booking.id}</div>
        <div class="grid-item">${booking.roomType.toUpperCase()}</div>
        <div class="grid-item">${booking.roomNumber}</div>
        <div class="grid-item">${booking.bedSize.toUpperCase()}</div>
        <div class="grid-item">${booking.bidet.toString().toUpperCase()}</div>
        <div class="grid-item">$${booking.costPerNight.toFixed(2)}</div>
        <div class="grid-item"><button type="button" class="delete-booking-button ${booking.id} ${typeof booking.id}" id="room-${booking.id}">DELETE BOOKING</button></div>
      </div>`
    }).join(' ')
    _DOMelements_js__WEBPACK_IMPORTED_MODULE_3__["updateCustomerBookings"].insertAdjacentHTML('beforeend', todaysBookingInfo);
  }
}

function displayCustomerBookingsSection() {
  _DOMelements_js__WEBPACK_IMPORTED_MODULE_3__["refreshCustomerButton"].disabled = false;
  _DOMelements_js__WEBPACK_IMPORTED_MODULE_3__["updateCustomerBookings"].innerHTML = `<div class="grid-container" id="current-customer-bookings">`;
  _DOMelements_js__WEBPACK_IMPORTED_MODULE_3__["viewCustomerBookingsButton"].disabled = true;
  _DOMelements_js__WEBPACK_IMPORTED_MODULE_3__["searchCustomersForBookingButton"].disabled = false;
  _DOMelements_js__WEBPACK_IMPORTED_MODULE_3__["manageCustomerBookings"].classList.remove('hidden');
  _DOMelements_js__WEBPACK_IMPORTED_MODULE_3__["viewAvailableRooms"].classList.add('hidden');
}

function bookARoom(event) {
  if (event.target.classList.contains('book-room')) {
    let roomNumber = event.target.classList[1];
    let calendarDate = _DOMelements_js__WEBPACK_IMPORTED_MODULE_3__["managerBookRoomDate"].value;
    let bookingDate = calendarDate.split('-').join('/');
    let newBooking = hotelService.addNewBooking(userID, bookingDate, roomNumber);
    postNewBooking(newBooking, roomNumber);
  }
}

function postNewBooking(newBooking, roomNumber) {
  let onSuccess = () => {
    let bookedButton = document.getElementById(`button-${roomNumber}`)
    bookedButton.innerText = 'BOOKED!';
    bookedButton.disabled = true;
    updateBookingData();
  }
  _apiCalls__WEBPACK_IMPORTED_MODULE_1__["default"].postData(newBooking, onSuccess);
}

function deleteBooking(event) {
  let onSuccess = () => {
    updateDeletedBookings(event.target.classList[1]);
  }
  let deleteBody;
  if (event.target.classList[2] === 'number') {
    deleteBody = {id: parseInt(event.target.classList[1])}
  } else {
    deleteBody = {id: event.target.classList[1]};
  }
  if (event.target.classList.contains('delete-booking-button')) {
    _apiCalls__WEBPACK_IMPORTED_MODULE_1__["default"].deleteData(deleteBody, onSuccess);
    updateBookingData();
  }
}

function updateDeletedBookings(bookingID) {
  fadeOutEffect(bookingID);
}

function fadeOutEffect(bookingID) {
  let fadeTarget = document.getElementById(bookingID);
  let fadeEffect = setInterval(function () {
    if (!fadeTarget.style.opacity) {
      fadeTarget.style.opacity = 1;
    }
    if (fadeTarget.style.opacity > 0) {
      fadeTarget.style.opacity -= 0.1;
    } else {
      clearInterval(fadeEffect);
      document.getElementById(bookingID).remove();
    }
  }, 100);
}

function signOut() {
  _DOMelements_js__WEBPACK_IMPORTED_MODULE_3__["signOutButton"].disabled = true;
  _DOMelements_js__WEBPACK_IMPORTED_MODULE_3__["customerDirectoryButton"].disabled = false;
  _DOMelements_js__WEBPACK_IMPORTED_MODULE_3__["gridColumn"].innerHTML = '';
  _DOMelements_js__WEBPACK_IMPORTED_MODULE_3__["customerNameInput"].value = '';
  _DOMelements_js__WEBPACK_IMPORTED_MODULE_3__["managerView"].classList.add('hidden');
  _DOMelements_js__WEBPACK_IMPORTED_MODULE_3__["viewAvailableRooms"].classList.add('hidden');
  _DOMelements_js__WEBPACK_IMPORTED_MODULE_3__["customerBookingSearchBar"].classList.add('hidden');
  _DOMelements_js__WEBPACK_IMPORTED_MODULE_3__["enterCredentials"].classList.remove('hidden');
  _DOMelements_js__WEBPACK_IMPORTED_MODULE_3__["todayHotelBookings"].classList.add('hidden');
  _DOMelements_js__WEBPACK_IMPORTED_MODULE_3__["homeButton"].classList.add('hidden');
  _DOMelements_js__WEBPACK_IMPORTED_MODULE_3__["customerDirectoryButton"].classList.add('hidden');
  _DOMelements_js__WEBPACK_IMPORTED_MODULE_3__["customerView"].classList.add('hidden');
  clearErrorMessage();
  _DOMelements_js__WEBPACK_IMPORTED_MODULE_3__["bookARoomButton"].classList.add('hidden');
  _DOMelements_js__WEBPACK_IMPORTED_MODULE_3__["upcomingBookingsButton"].classList.add('hidden');
  _DOMelements_js__WEBPACK_IMPORTED_MODULE_3__["customerHeader"].classList.add('hidden');
  _DOMelements_js__WEBPACK_IMPORTED_MODULE_3__["bookingHistoryButton"].classList.add('hidden');
}


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Nzcy9iYXNlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvdXJscy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvQm9va2luZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvRE9NZWxlbWVudHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0hvdGVsLVNlcnZpY2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1Jvb20uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1VzZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwaUNhbGxzLmpzIiwid2VicGFjazovLy8uL3NyYy9jc3MvYmFzZS5zY3NzP2EyMzgiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtB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OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1REFBdUQ7QUFDdkQ7O0FBRUEsNkJBQTZCLG1CQUFtQjs7QUFFaEQ7O0FBRUE7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7OztBQzlZQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3Q0FBd0MsV0FBVyxFQUFFO0FBQ3JELHdDQUF3QyxXQUFXLEVBQUU7O0FBRXJEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0Esc0NBQXNDO0FBQ3RDLEdBQUc7QUFDSDtBQUNBLDhEQUE4RDtBQUM5RDs7QUFFQTtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUN4RkE7QUFBQTtBQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ1JBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQU87QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ1A7Ozs7QUFJQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ3BFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQTZCO0FBQ0E7QUFDTTs7QUFFcEI7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHFCQUFxQixnREFBSTtBQUN6QjtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0EscUJBQXFCLGdEQUFJO0FBQ3pCO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixtREFBTztBQUMvQjtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULE9BQU87QUFDUDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSyxJQUFJO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQzFTQTtBQUFBO0FBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNUQTtBQUFBO0FBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDTEE7QUFBQTs7QUFFQTtBQUNBO0FBQ0Esb0JBQW9CLElBQUksRUFBRSxJQUFJLEdBQUcs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QzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHlEQUF5RCxXQUFXO0FBQ3BFO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRSxpREFBUTtBQUNWOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQixHQUFHO0FBQ0gsa0JBQWtCO0FBQ2xCO0FBQ0E7QUFDQSxJQUFJLGlEQUFRO0FBQ1o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBLEVBQUUsNkRBQWE7QUFDZixFQUFFLHVFQUF1QjtBQUN6QixFQUFFLDBEQUFVO0FBQ1osRUFBRSxpRUFBaUI7QUFDbkIsRUFBRSwyREFBVztBQUNiLEVBQUUsa0VBQWtCO0FBQ3BCLEVBQUUsd0VBQXdCO0FBQzFCLEVBQUUsZ0VBQWdCO0FBQ2xCLEVBQUUsa0VBQWtCO0FBQ3BCLEVBQUUsMERBQVU7QUFDWixFQUFFLHVFQUF1QjtBQUN6QixFQUFFLDREQUFZO0FBQ2Q7QUFDQSxFQUFFLCtEQUFlO0FBQ2pCLEVBQUUsc0VBQXNCO0FBQ3hCLEVBQUUsOERBQWM7QUFDaEIsRUFBRSxvRUFBb0I7QUFDdEIiLCJmaWxlIjoibWFpbi5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiYm9keSB7XFxuICBiYWNrZ3JvdW5kOiB1cmwoXFxcImh0dHBzOi8vd3d3LmpldHNldHRlci5jb20vd3AtY29udGVudC91cGxvYWRzL3NpdGVzLzcvMjAxOC8wNC9oLVBvb1NGQS5qcGVnXFxcIik7XFxuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCU7IH1cXG5cXG5oZWFkZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtYXJnaW46IDBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7IH1cXG5cXG4uaGVhZGVyLW5hbWUge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBmb250LWZhbWlseTogJ0NvbWZvcnRhYScsIGN1cnNpdmU7XFxuICBmb250LXNpemU6IDMwcHg7XFxuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XFxuICBwYWRkaW5nLXRvcDogMnB4OyB9XFxuXFxuLmhlYWRlci1idXR0b25zIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBhbGlnbi1pdGVtczogY2VudGVyOyB9XFxuXFxuLmhlYWRlci1idXR0b24ge1xcbiAgaGVpZ2h0OiAxOCU7XFxuICBmb250LWZhbWlseTogJ0NvbWZvcnRhYScsIGN1cnNpdmU7XFxuICBmb250LXNpemU6IDExcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgbWFyZ2luLXJpZ2h0OiAzMHB4OyB9XFxuXFxuLmhlYWRlci1idXR0b246aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgY29sb3I6IGRhcmtncmV5OyB9XFxuXFxuLmVudGVyLWNyZWRlbnRpYWxzIHtcXG4gIGZvbnQtZmFtaWx5OiAnQ29tZm9ydGFhJywgY3Vyc2l2ZTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBtYXJnaW46IDUlIDM1JSA1JSAzNSU7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZm9udC1zaXplOiAxNXB4O1xcbiAgYm9yZGVyLXJhZGl1czogNXB4OyB9XFxuXFxuLmNyZWRlbnRpYWxzIHtcXG4gIG1hcmdpbi10b3A6IDIlOyB9XFxuXFxuLmxvZ2luLWluZm8ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHdpZHRoOiA1MCU7XFxuICBoZWlnaHQ6IDE4JTtcXG4gIG1hcmdpbjogMyUgMCUgNSUgMCU7XFxuICBvdXRsaW5lOiBub25lOyB9XFxuXFxuLmxvZ2luLWJ1dHRvbiB7XFxuICBmb250LWZhbWlseTogJ0NvbWZvcnRhYScsIGN1cnNpdmU7XFxuICBtYXJnaW4tdG9wOiA1JTtcXG4gIHBhZGRpbmc6IDIlO1xcbiAgd2lkdGg6IDQwJTtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgYm9yZGVyOiBzb2xpZCBkYXJrZ3JleSAxcHg7IH1cXG5cXG4ubG9naW4tYnV0dG9uOmhvdmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JleTsgfVxcblxcbi5lcnJvci1tZXNzYWdlIHtcXG4gIGZvbnQtZmFtaWx5OiAnQ29tZm9ydGFhJywgY3Vyc2l2ZTtcXG4gIGZvbnQtc2l6ZTogMTJweDtcXG4gIG1hcmdpbi1sZWZ0OiA0JTsgfVxcblxcbi50b2RheS1ob3RlbC1vdmVydmlldyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGZvbnQtZmFtaWx5OiAnQ29tZm9ydGFhJywgY3Vyc2l2ZTtcXG4gIGZvbnQtc2l6ZTogMThweDtcXG4gIG1hcmdpbjogMyUgMjAlIDAlIDIwJTtcXG4gIGhlaWdodDogMTMwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7IH1cXG5cXG4jaG90ZWwtb3ZlcnZpZXctaW5mbyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGZsZXgtZGlyZWN0aW9uOiBzcGFjZS1hcm91bmQ7XFxuICBtYXJnaW4tYm90dG9tOiAzJTtcXG4gIGZvbnQtc2l6ZTogMTRweDsgfVxcblxcbi50b2RheS1pbmZvLWRldGFpbHMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7IH1cXG5cXG4udG9kYXktaG90ZWwtYm9va2luZ3Mge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgbWFyZ2luOiAwJSA3JSAwJSA3JTsgfVxcblxcbi50b2RheS1ob3RlbC1ib29raW5ncy10aXRsZSB7XFxuICBmb250LWZhbWlseTogJ0NvbWZvcnRhYScsIGN1cnNpdmU7XFxuICBmb250LXNpemU6IDIwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBwYWRkaW5nLXRvcDogMSU7IH1cXG5cXG4uZ3JpZC1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoNywgMWZyKTtcXG4gIGZvbnQtZmFtaWx5OiAnQ29tZm9ydGFhJywgY3Vyc2l2ZTsgfVxcblxcbi5ncmlkLWl0ZW0ge1xcbiAgbWFyZ2luLWJvdHRvbTogMiU7XFxuICB3aWR0aDogMTUwcHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDEycHg7IH1cXG5cXG4uZ3JpZC1oZWFkZXIge1xcbiAgbWFyZ2luLWJvdHRvbTogMyU7XFxuICB3aWR0aDogMTUwcHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDE0cHg7IH1cXG5cXG4jZ3JpZC1jb2x1bW4ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47IH1cXG5cXG4uZ3JpZC1yb3cge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgZm9udC1zaXplOiAxMnB4OyB9XFxuXFxuLmJvb2stcm9vbSB7XFxuICBmb250LWZhbWlseTogJ0NvbWZvcnRhYScsIGN1cnNpdmU7XFxuICBmb250LXNpemU6IDExcHg7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBwYWRkaW5nOiA1cHg7XFxuICBvdXRsaW5lOiBub25lOyB9XFxuXFxuLmJvb2stcm9vbTpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyZXk7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7IH1cXG5cXG4uZGVsZXRlLWJvb2tpbmctYnV0dG9uIHtcXG4gIGZvbnQtZmFtaWx5OiAnQ29tZm9ydGFhJywgY3Vyc2l2ZTtcXG4gIGZvbnQtc2l6ZTogMTFweDtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIHBhZGRpbmc6IDVweDsgfVxcblxcbi5kZWxldGUtYm9va2luZy1idXR0b246aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmV5O1xcbiAgYm9yZGVyLXJhZGl1czogNXB4OyB9XFxuXFxuLmN1c3RvbWVyLWJvb2tpbmctc2VhcmNoLWJhciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGZvbnQtZmFtaWx5OiAnQ29tZm9ydGFhJywgY3Vyc2l2ZTtcXG4gIGZvbnQtc2l6ZTogMTVweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIG1hcmdpbjogMiUgMjMlIDAlIDIzJTsgfVxcblxcbi5zZWFyY2gtY3VzdG9tZXJzIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIG1hcmdpbi1ib3R0b206IDQlOyB9XFxuXFxuLnNlYXJjaC1jdXN0b21lci1uYW1lIHtcXG4gIHdpZHRoOiAzNSU7XFxuICBtYXJnaW4tbGVmdDogMjAlO1xcbiAgbWFyZ2luLWJvdHRvbTogNSU7IH1cXG5cXG4uY3VzdG9tZXItdmlldy1idXR0b25zIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgfVxcblxcbiNzZWFyY2gtY3VzdG9tZXItYnV0dG9uIHtcXG4gIGZvbnQtZmFtaWx5OiAnQ29tZm9ydGFhJywgY3Vyc2l2ZTtcXG4gIHdpZHRoOiAyMCU7XFxuICBtaW4td2lkdGg6IDEyMHB4O1xcbiAgbWFyZ2luOiAwJSA1JSA1JSA1JTtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBib3JkZXI6IHNvbGlkIGJsYWNrIDFweDtcXG4gIHBhZGRpbmc6IDVweDtcXG4gIG91dGxpbmU6IG5vbmU7IH1cXG5cXG4jc2VhcmNoLWN1c3RvbWVyLWJ1dHRvbjpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyZXk7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgbWFyZ2luOiAwJSA1JSA1JSA1JTtcXG4gIHdpZHRoOiAyMCU7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgYm9yZGVyOiBzb2xpZCBibGFjayAxcHg7IH1cXG5cXG4jdmlldy1jdXN0b21lci1ib29raW5ncy1idXR0b24ge1xcbiAgZm9udC1mYW1pbHk6ICdDb21mb3J0YWEnLCBjdXJzaXZlO1xcbiAgd2lkdGg6IDIwJTtcXG4gIG1pbi13aWR0aDogMTIwcHg7XFxuICBtYXJnaW46IDAlIDUlIDUlIDUlO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIGJvcmRlcjogc29saWQgYmxhY2sgMXB4O1xcbiAgcGFkZGluZzogNXB4O1xcbiAgb3V0bGluZTogbm9uZTsgfVxcblxcbiN2aWV3LWN1c3RvbWVyLWJvb2tpbmdzLWJ1dHRvbjpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyZXk7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgbWFyZ2luOiAwJSA1JSA1JSA1JTtcXG4gIHdpZHRoOiAyMCU7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgYm9yZGVyOiBzb2xpZCBibGFjayAxcHg7IH1cXG5cXG4ucmVmcmVzaC1jdXN0b21lcnMge1xcbiAgZm9udC1mYW1pbHk6ICdDb21mb3J0YWEnLCBjdXJzaXZlO1xcbiAgd2lkdGg6IDE1JTtcXG4gIG1pbi13aWR0aDogMTIwcHg7XFxuICBtYXJnaW46IDAlIDUlIDUlIDIlO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIGJvcmRlcjogc29saWQgYmxhY2sgMXB4O1xcbiAgcGFkZGluZzogNXB4O1xcbiAgb3V0bGluZTogbm9uZTsgfVxcblxcbi5yZWZyZXNoLWN1c3RvbWVyczpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyZXk7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgbWFyZ2luOiAwJSA1JSA1JSAyJTtcXG4gIHdpZHRoOiAxNSU7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgYm9yZGVyOiBzb2xpZCBibGFjayAxcHg7IH1cXG5cXG4udmlldy1hdmFpbGFibGUtcm9vbXMge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBtYXJnaW46IDIlIDEwJSAwJSAxMCU7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgZm9udC1mYW1pbHk6ICdDb21mb3J0YWEnLCBjdXJzaXZlOyB9XFxuXFxuLm1hbmFnZS1jdXN0b21lci1ib29raW5ncyB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIG1hcmdpbjogMiUgMTAlIDAlIDEwJTtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBmb250LWZhbWlseTogJ0NvbWZvcnRhYScsIGN1cnNpdmU7IH1cXG5cXG4uY3VzdG9tZXItYm9va2luZy1ncmlkIHtcXG4gIHBhZGRpbmctdG9wOiAyJTsgfVxcblxcbi5jdXN0b21lci1ib29raW5ncy1oZWFkZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgcGFkZGluZy10b3A6IDIlOyB9XFxuXFxuI2N1cnJlbnQtY3VzdG9tZXItYm9va2luZ3Mge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47IH1cXG5cXG4uYm9va2luZ3MtZm9yLXRpdGxlIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgfVxcblxcbiNtYW5hZ2VyLWJvb2stcm9vbS1kYXRlIHtcXG4gIG1hcmdpbjogMy41JSAwJSA1JSAyJTtcXG4gIG1pbi13aWR0aDogMTUwcHg7IH1cXG5cXG4ubWFuYWdlci1ib29rLXJvb20taGVhZGVyIHtcXG4gIHBhZGRpbmctdG9wOiAyJTsgfVxcblxcbiNjdXN0b21lci1ib29raW5ncyB7XFxuICBkaXNwbGF5OiBmbGV4OyB9XFxuXFxuI21hbmFnZXJ2aWV3LWN1c3RvbWVyLWJvb2tpbmdzIHtcXG4gIGRpc3BsYXk6IGZsZXg7IH1cXG5cXG4ubm8tYm9va2luZ3Mge1xcbiAgZm9udC1mYW1pbHk6ICdDb21mb3J0YWEnLCBjdXJzaXZlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgcGFkZGluZzogNSU7XFxuICBmb250LXNpemU6IDE0cHg7IH1cXG5cXG4uaGVhZGVyLWluZm8ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47IH1cXG5cXG4uY3VzdG9tZXItaGVhZGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbiAgZm9udC1mYW1pbHk6ICdDb21mb3J0YWEnLCBjdXJzaXZlO1xcbiAgYm9yZGVyLWJvdHRvbTogc29saWQgYmxhY2sgMXB4OyB9XFxuXFxuLmN1c3RvbWVyLXN0YXR1cyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIG1hcmdpbi1sZWZ0OiA1JTtcXG4gIG1hcmdpbi1yaWdodDogNiU7XFxuICBtYXJnaW4tdG9wOiAyJTsgfVxcblxcbi5jdXN0b21lci13ZWxjb21lIHtcXG4gIGZvbnQtc2l6ZTogMjJweDtcXG4gIG1hcmdpbi1ib3R0b206IDIlOyB9XFxuXFxuLmNhcmQtZGF0ZSB7XFxuICBmb250LXNpemU6IDE4cHg7IH1cXG5cXG4uZ29sZCB7XFxuICBmb250LXNpemU6IDExcHg7XFxuICBjb2xvcjogZ29sZGVucm9kOyB9XFxuXFxuLnNpbHZlciB7XFxuICBmb250LXNpemU6IDExcHg7XFxuICBjb2xvcjogbGlnaHRncmV5OyB9XFxuXFxuLmJyb256ZSB7XFxuICBmb250LXNpemU6IDExcHg7XFxuICBjb2xvcjogc2llbm5hOyB9XFxuXFxuLmJsdWUge1xcbiAgZm9udC1zaXplOiAxMXB4O1xcbiAgY29sb3I6IGNvcm5mbG93ZXJibHVlOyB9XFxuXFxuLmN1c3RvbWVyLXZpZXctYXZhaWxhYmxlLXJvb21zIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWFyZ2luOiAwJTtcXG4gIHBhZGRpbmctYm90dG9tOiA1JTsgfVxcblxcbi5maWx0ZXItcm9vbXMge1xcbiAgZGlzcGxheTogZmxleDsgfVxcblxcbi5ib29rLXJvb20taGVhZGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHBhZGRpbmctdG9wOiAxJTsgfVxcblxcbi5ib29rLXJvb20tc2VhcmNoIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHBhZGRpbmctYm90dG9tOiAyJTtcXG4gIGJvcmRlci1ib3R0b206IHNvbGlkIGRhcmtncmV5IDFweDsgfVxcblxcbi5ib29rLXJvb20tZGF0ZSB7XFxuICBtYXJnaW4tcmlnaHQ6IDIlOyB9XFxuXFxuLnNlYXJjaC1yb29tcy1idXR0b24ge1xcbiAgZm9udC1mYW1pbHk6ICdDb21mb3J0YWEnLCBjdXJzaXZlO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIGJvcmRlcjogc29saWQgYmxhY2sgMXB4O1xcbiAgd2lkdGg6IDEwMHB4O1xcbiAgbWluLXdpZHRoOiA3NXB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRibHVlO1xcbiAgb3V0bGluZTogbm9uZTsgfVxcblxcbi5zZWFyY2gtcm9vbXMtYnV0dG9uOmhvdmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JleTtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgYm9yZGVyOiBzb2xpZCBibGFjayAxcHg7IH1cXG5cXG4uY3VzdG9tZXItcm9vbS1zZWFyY2gge1xcbiAgZGlzcGxheTogZmxleDsgfVxcblxcbi5hbGwtcm9vbS1jYXJkcyB7XFxuICB3aWR0aDogMTUwJTsgfVxcblxcbi5yb29tLWJvb2tpbmctY2FyZCB7XFxuICBib3JkZXI6IHNvbGlkIGJsYWNrIDFweDtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIG1hcmdpbjogNSU7XFxuICBib3gtc2hhZG93OiA1cHggOHB4IGxpZ2h0Z3JleTtcXG4gIG1pbi13aWR0aDogNzAwcHg7IH1cXG5cXG4ucm9vbS1ib29raW5nLWNhcmQ6aG92ZXIge1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xcbiAgLW1zLXRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xcbiAgdHJhbnNpdGlvbjogMXMgZWFzZTsgfVxcblxcbi5yb29tLWNhcmQtaGVhZGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZm9udC1zaXplOiAyNXB4O1xcbiAgbWFyZ2luOiAwJTtcXG4gIHBhZGRpbmctbGVmdDogMiU7XFxuICBoZWlnaHQ6IDUwcHg7XFxuICBib3JkZXItYm90dG9tOiBzb2xpZCBibGFjayAxcHg7IH1cXG5cXG4ucm9vbS10eXBlIHtcXG4gIG1hcmdpbjogMSUgMCUgMSUgMCU7IH1cXG5cXG4ucm9vbS1jYXJkLWJvZHkge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIG1hcmdpbi1ib3R0b206IDIlO1xcbiAgbWFyZ2luLXRvcDogMCU7IH1cXG5cXG4ucm9vbS1pbWFnZSB7XFxuICBoZWlnaHQ6IDE2MHB4O1xcbiAgd2lkdGg6IDIyMHB4O1xcbiAgbWFyZ2luOiAxMCUgMCUgMCUgMTAlO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4OyB9XFxuXFxuLnJvb20tY2FyZC1kZXRhaWxzIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBmb250LXNpemU6IDEzcHg7XFxuICBtYXJnaW4tdG9wOiAxJTsgfVxcblxcbi5yb29tLWNhcmQtcHJpY2Uge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBtYXJnaW4tcmlnaHQ6IDUlO1xcbiAgbWFyZ2luLWJvdHRvbTogNCU7IH1cXG5cXG4ucm9vbS1wcmljZSB7XFxuICBmb250LXNpemU6IDI1cHg7IH1cXG5cXG4uY3VzdG9tZXItYm9vay1idXR0b24ge1xcbiAgZm9udC1mYW1pbHk6ICdDb21mb3J0YWEnLCBjdXJzaXZlO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIGJvcmRlcjogc29saWQgYmxhY2sgMXB4O1xcbiAgd2lkdGg6IDE3NXB4O1xcbiAgbWluLXdpZHRoOiAxMjBweDtcXG4gIHBhZGRpbmc6IDVweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JleTsgfVxcblxcbi5jdXN0b21lci1ib29rLWJ1dHRvbjpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGJsdWU7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIHBhZGRpbmc6IDVweDtcXG4gIGJvcmRlcjogc29saWQgYmxhY2sgMXB4OyB9XFxuXFxuLmNhbmNlbGxhdGlvbi1wb2xpY3kge1xcbiAgZm9udC1zaXplOiA4cHg7XFxuICBtYXJnaW4tdG9wOiAxMCU7IH1cXG5cXG4uZmlsdGVyLXJvb21zIHtcXG4gIHdpZHRoOiAyNSU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBtYXJnaW4tdG9wOiAyJTsgfVxcblxcbiNmaWx0ZXItY2F0ZWdvcmllcyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIG1hcmdpbi10b3A6IDMlO1xcbiAgbWFyZ2luLWJvdHRvbTogNCU7XFxuICBmb250LXNpemU6IDEzcHg7IH1cXG5cXG4udGFnLWJ1dHRvbiB7XFxuICBtYXJnaW4tYm90dG9tOiAxNSU7IH1cXG5cXG4udGFnLWJ1dHRvbjpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7IH1cXG5cXG5pbnB1dFt0eXBlPXJhZGlvXTpjaGVja2VkICsgbGFiZWwge1xcbiAgY29sb3I6IGxpZ2h0Z3JleTtcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDsgfVxcblxcbi5maWx0ZXItYnV0dG9uIHtcXG4gIGZvbnQtZmFtaWx5OiAnQ29tZm9ydGFhJywgY3Vyc2l2ZTtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBib3JkZXI6IHNvbGlkIGJsYWNrIDFweDtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICB3aWR0aDogMTUwcHg7XFxuICBtaW4td2lkdGg6IDEyMHB4O1xcbiAgcGFkZGluZzogMiU7IH1cXG5cXG4uZmlsdGVyLWJ1dHRvbjpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGJvcmRlcjogc29saWQgYmxhY2sgMXB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmV5OyB9XFxuXFxuLnBhc3QtYm9va2luZ3Mge1xcbiAgZm9udC1mYW1pbHk6ICdDb21mb3J0YWEnLCBjdXJzaXZlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgcGFkZGluZy1ib3R0b206IDElOyB9XFxuXFxuLnBhc3QtYm9va2luZ3MtaGVhZGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHBhZGRpbmctdG9wOiAyJTtcXG4gIG1hcmdpbi1ib3R0b206IDAlOyB9XFxuXFxuLmFwcHJlY2lhdGlvbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBmb250LXNpemU6IDEycHg7IH1cXG5cXG4udXBjb21pbmctYm9va2luZ3Mge1xcbiAgZm9udC1mYW1pbHk6ICdDb21mb3J0YWEnLCBjdXJzaXZlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgcGFkZGluZy1ib3R0b206IDElOyB9XFxuXFxuLnVwY29taW5nLWJvb2tpbmdzLWhlYWRlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBwYWRkaW5nLXRvcDogMiU7XFxuICBtYXJnaW4tYm90dG9tOiAwJTsgfVxcblxcbi5oaWRkZW4ge1xcbiAgZGlzcGxheTogbm9uZTsgfVxcblwiLCBcIlwiXSk7XG5cbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVzZVNvdXJjZU1hcCkge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCk7XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIHJldHVybiAnQG1lZGlhICcgKyBpdGVtWzJdICsgJ3snICsgY29udGVudCArICd9JztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBjb250ZW50O1xuICAgICAgfVxuICAgIH0pLmpvaW4oJycpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gKG1vZHVsZXMsIG1lZGlhUXVlcnkpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09ICdzdHJpbmcnKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCAnJ11dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZCA9IHRoaXNbaV1bMF07XG5cbiAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKGkgPSAwOyBpIDwgbW9kdWxlcy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGl0ZW0gPSBtb2R1bGVzW2ldOyAvLyBza2lwIGFscmVhZHkgaW1wb3J0ZWQgbW9kdWxlXG4gICAgICAvLyB0aGlzIGltcGxlbWVudGF0aW9uIGlzIG5vdCAxMDAlIHBlcmZlY3QgZm9yIHdlaXJkIG1lZGlhIHF1ZXJ5IGNvbWJpbmF0aW9uc1xuICAgICAgLy8gd2hlbiBhIG1vZHVsZSBpcyBpbXBvcnRlZCBtdWx0aXBsZSB0aW1lcyB3aXRoIGRpZmZlcmVudCBtZWRpYSBxdWVyaWVzLlxuICAgICAgLy8gSSBob3BlIHRoaXMgd2lsbCBuZXZlciBvY2N1ciAoSGV5IHRoaXMgd2F5IHdlIGhhdmUgc21hbGxlciBidW5kbGVzKVxuXG4gICAgICBpZiAoaXRlbVswXSA9PSBudWxsIHx8ICFhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGlmIChtZWRpYVF1ZXJ5ICYmICFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhUXVlcnk7XG4gICAgICAgIH0gZWxzZSBpZiAobWVkaWFRdWVyeSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSAnKCcgKyBpdGVtWzJdICsgJykgYW5kICgnICsgbWVkaWFRdWVyeSArICcpJztcbiAgICAgICAgfVxuXG4gICAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59O1xuXG5mdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV0gfHwgJyc7XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh1c2VTb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgPT09ICdmdW5jdGlvbicpIHtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IHRvQ29tbWVudChjc3NNYXBwaW5nKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuICcvKiMgc291cmNlVVJMPScgKyBjc3NNYXBwaW5nLnNvdXJjZVJvb3QgKyBzb3VyY2UgKyAnICovJztcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKCdcXG4nKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbignXFxuJyk7XG59IC8vIEFkYXB0ZWQgZnJvbSBjb252ZXJ0LXNvdXJjZS1tYXAgKE1JVClcblxuXG5mdW5jdGlvbiB0b0NvbW1lbnQoc291cmNlTWFwKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKTtcbiAgdmFyIGRhdGEgPSAnc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsJyArIGJhc2U2NDtcbiAgcmV0dXJuICcvKiMgJyArIGRhdGEgKyAnICovJztcbn0iLCIvKlxuXHRNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuXHRBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuXG52YXIgc3R5bGVzSW5Eb20gPSB7fTtcblxudmFyXHRtZW1vaXplID0gZnVuY3Rpb24gKGZuKSB7XG5cdHZhciBtZW1vO1xuXG5cdHJldHVybiBmdW5jdGlvbiAoKSB7XG5cdFx0aWYgKHR5cGVvZiBtZW1vID09PSBcInVuZGVmaW5lZFwiKSBtZW1vID0gZm4uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcblx0XHRyZXR1cm4gbWVtbztcblx0fTtcbn07XG5cbnZhciBpc09sZElFID0gbWVtb2l6ZShmdW5jdGlvbiAoKSB7XG5cdC8vIFRlc3QgZm9yIElFIDw9IDkgYXMgcHJvcG9zZWQgYnkgQnJvd3NlcmhhY2tzXG5cdC8vIEBzZWUgaHR0cDovL2Jyb3dzZXJoYWNrcy5jb20vI2hhY2stZTcxZDg2OTJmNjUzMzQxNzNmZWU3MTVjMjIyY2I4MDVcblx0Ly8gVGVzdHMgZm9yIGV4aXN0ZW5jZSBvZiBzdGFuZGFyZCBnbG9iYWxzIGlzIHRvIGFsbG93IHN0eWxlLWxvYWRlclxuXHQvLyB0byBvcGVyYXRlIGNvcnJlY3RseSBpbnRvIG5vbi1zdGFuZGFyZCBlbnZpcm9ubWVudHNcblx0Ly8gQHNlZSBodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlci9pc3N1ZXMvMTc3XG5cdHJldHVybiB3aW5kb3cgJiYgZG9jdW1lbnQgJiYgZG9jdW1lbnQuYWxsICYmICF3aW5kb3cuYXRvYjtcbn0pO1xuXG52YXIgZ2V0VGFyZ2V0ID0gZnVuY3Rpb24gKHRhcmdldCwgcGFyZW50KSB7XG4gIGlmIChwYXJlbnQpe1xuICAgIHJldHVybiBwYXJlbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuICB9XG4gIHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG59O1xuXG52YXIgZ2V0RWxlbWVudCA9IChmdW5jdGlvbiAoZm4pIHtcblx0dmFyIG1lbW8gPSB7fTtcblxuXHRyZXR1cm4gZnVuY3Rpb24odGFyZ2V0LCBwYXJlbnQpIHtcbiAgICAgICAgICAgICAgICAvLyBJZiBwYXNzaW5nIGZ1bmN0aW9uIGluIG9wdGlvbnMsIHRoZW4gdXNlIGl0IGZvciByZXNvbHZlIFwiaGVhZFwiIGVsZW1lbnQuXG4gICAgICAgICAgICAgICAgLy8gVXNlZnVsIGZvciBTaGFkb3cgUm9vdCBzdHlsZSBpLmVcbiAgICAgICAgICAgICAgICAvLyB7XG4gICAgICAgICAgICAgICAgLy8gICBpbnNlcnRJbnRvOiBmdW5jdGlvbiAoKSB7IHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Zvb1wiKS5zaGFkb3dSb290IH1cbiAgICAgICAgICAgICAgICAvLyB9XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB0YXJnZXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0YXJnZXQoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcblx0XHRcdHZhciBzdHlsZVRhcmdldCA9IGdldFRhcmdldC5jYWxsKHRoaXMsIHRhcmdldCwgcGFyZW50KTtcblx0XHRcdC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cdFx0XHRpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG5cdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0Ly8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcblx0XHRcdFx0XHQvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuXHRcdFx0XHRcdHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG5cdFx0XHRcdH0gY2F0Y2goZSkge1xuXHRcdFx0XHRcdHN0eWxlVGFyZ2V0ID0gbnVsbDtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0bWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG5cdFx0fVxuXHRcdHJldHVybiBtZW1vW3RhcmdldF1cblx0fTtcbn0pKCk7XG5cbnZhciBzaW5nbGV0b24gPSBudWxsO1xudmFyXHRzaW5nbGV0b25Db3VudGVyID0gMDtcbnZhclx0c3R5bGVzSW5zZXJ0ZWRBdFRvcCA9IFtdO1xuXG52YXJcdGZpeFVybHMgPSByZXF1aXJlKFwiLi91cmxzXCIpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGxpc3QsIG9wdGlvbnMpIHtcblx0aWYgKHR5cGVvZiBERUJVRyAhPT0gXCJ1bmRlZmluZWRcIiAmJiBERUJVRykge1xuXHRcdGlmICh0eXBlb2YgZG9jdW1lbnQgIT09IFwib2JqZWN0XCIpIHRocm93IG5ldyBFcnJvcihcIlRoZSBzdHlsZS1sb2FkZXIgY2Fubm90IGJlIHVzZWQgaW4gYSBub24tYnJvd3NlciBlbnZpcm9ubWVudFwiKTtcblx0fVxuXG5cdG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuXG5cdG9wdGlvbnMuYXR0cnMgPSB0eXBlb2Ygb3B0aW9ucy5hdHRycyA9PT0gXCJvYmplY3RcIiA/IG9wdGlvbnMuYXR0cnMgOiB7fTtcblxuXHQvLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cblx0Ly8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxuXHRpZiAoIW9wdGlvbnMuc2luZ2xldG9uICYmIHR5cGVvZiBvcHRpb25zLnNpbmdsZXRvbiAhPT0gXCJib29sZWFuXCIpIG9wdGlvbnMuc2luZ2xldG9uID0gaXNPbGRJRSgpO1xuXG5cdC8vIEJ5IGRlZmF1bHQsIGFkZCA8c3R5bGU+IHRhZ3MgdG8gdGhlIDxoZWFkPiBlbGVtZW50XG4gICAgICAgIGlmICghb3B0aW9ucy5pbnNlcnRJbnRvKSBvcHRpb25zLmluc2VydEludG8gPSBcImhlYWRcIjtcblxuXHQvLyBCeSBkZWZhdWx0LCBhZGQgPHN0eWxlPiB0YWdzIHRvIHRoZSBib3R0b20gb2YgdGhlIHRhcmdldFxuXHRpZiAoIW9wdGlvbnMuaW5zZXJ0QXQpIG9wdGlvbnMuaW5zZXJ0QXQgPSBcImJvdHRvbVwiO1xuXG5cdHZhciBzdHlsZXMgPSBsaXN0VG9TdHlsZXMobGlzdCwgb3B0aW9ucyk7XG5cblx0YWRkU3R5bGVzVG9Eb20oc3R5bGVzLCBvcHRpb25zKTtcblxuXHRyZXR1cm4gZnVuY3Rpb24gdXBkYXRlIChuZXdMaXN0KSB7XG5cdFx0dmFyIG1heVJlbW92ZSA9IFtdO1xuXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBpdGVtID0gc3R5bGVzW2ldO1xuXHRcdFx0dmFyIGRvbVN0eWxlID0gc3R5bGVzSW5Eb21baXRlbS5pZF07XG5cblx0XHRcdGRvbVN0eWxlLnJlZnMtLTtcblx0XHRcdG1heVJlbW92ZS5wdXNoKGRvbVN0eWxlKTtcblx0XHR9XG5cblx0XHRpZihuZXdMaXN0KSB7XG5cdFx0XHR2YXIgbmV3U3R5bGVzID0gbGlzdFRvU3R5bGVzKG5ld0xpc3QsIG9wdGlvbnMpO1xuXHRcdFx0YWRkU3R5bGVzVG9Eb20obmV3U3R5bGVzLCBvcHRpb25zKTtcblx0XHR9XG5cblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IG1heVJlbW92ZS5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGRvbVN0eWxlID0gbWF5UmVtb3ZlW2ldO1xuXG5cdFx0XHRpZihkb21TdHlsZS5yZWZzID09PSAwKSB7XG5cdFx0XHRcdGZvciAodmFyIGogPSAwOyBqIDwgZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspIGRvbVN0eWxlLnBhcnRzW2pdKCk7XG5cblx0XHRcdFx0ZGVsZXRlIHN0eWxlc0luRG9tW2RvbVN0eWxlLmlkXTtcblx0XHRcdH1cblx0XHR9XG5cdH07XG59O1xuXG5mdW5jdGlvbiBhZGRTdHlsZXNUb0RvbSAoc3R5bGVzLCBvcHRpb25zKSB7XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIGl0ZW0gPSBzdHlsZXNbaV07XG5cdFx0dmFyIGRvbVN0eWxlID0gc3R5bGVzSW5Eb21baXRlbS5pZF07XG5cblx0XHRpZihkb21TdHlsZSkge1xuXHRcdFx0ZG9tU3R5bGUucmVmcysrO1xuXG5cdFx0XHRmb3IodmFyIGogPSAwOyBqIDwgZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0ZG9tU3R5bGUucGFydHNbal0oaXRlbS5wYXJ0c1tqXSk7XG5cdFx0XHR9XG5cblx0XHRcdGZvcig7IGogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdGRvbVN0eWxlLnBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSwgb3B0aW9ucykpO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHR2YXIgcGFydHMgPSBbXTtcblxuXHRcdFx0Zm9yKHZhciBqID0gMDsgaiA8IGl0ZW0ucGFydHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0cGFydHMucHVzaChhZGRTdHlsZShpdGVtLnBhcnRzW2pdLCBvcHRpb25zKSk7XG5cdFx0XHR9XG5cblx0XHRcdHN0eWxlc0luRG9tW2l0ZW0uaWRdID0ge2lkOiBpdGVtLmlkLCByZWZzOiAxLCBwYXJ0czogcGFydHN9O1xuXHRcdH1cblx0fVxufVxuXG5mdW5jdGlvbiBsaXN0VG9TdHlsZXMgKGxpc3QsIG9wdGlvbnMpIHtcblx0dmFyIHN0eWxlcyA9IFtdO1xuXHR2YXIgbmV3U3R5bGVzID0ge307XG5cblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIGl0ZW0gPSBsaXN0W2ldO1xuXHRcdHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuXHRcdHZhciBjc3MgPSBpdGVtWzFdO1xuXHRcdHZhciBtZWRpYSA9IGl0ZW1bMl07XG5cdFx0dmFyIHNvdXJjZU1hcCA9IGl0ZW1bM107XG5cdFx0dmFyIHBhcnQgPSB7Y3NzOiBjc3MsIG1lZGlhOiBtZWRpYSwgc291cmNlTWFwOiBzb3VyY2VNYXB9O1xuXG5cdFx0aWYoIW5ld1N0eWxlc1tpZF0pIHN0eWxlcy5wdXNoKG5ld1N0eWxlc1tpZF0gPSB7aWQ6IGlkLCBwYXJ0czogW3BhcnRdfSk7XG5cdFx0ZWxzZSBuZXdTdHlsZXNbaWRdLnBhcnRzLnB1c2gocGFydCk7XG5cdH1cblxuXHRyZXR1cm4gc3R5bGVzO1xufVxuXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQgKG9wdGlvbnMsIHN0eWxlKSB7XG5cdHZhciB0YXJnZXQgPSBnZXRFbGVtZW50KG9wdGlvbnMuaW5zZXJ0SW50bylcblxuXHRpZiAoIXRhcmdldCkge1xuXHRcdHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0SW50bycgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuXHR9XG5cblx0dmFyIGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wID0gc3R5bGVzSW5zZXJ0ZWRBdFRvcFtzdHlsZXNJbnNlcnRlZEF0VG9wLmxlbmd0aCAtIDFdO1xuXG5cdGlmIChvcHRpb25zLmluc2VydEF0ID09PSBcInRvcFwiKSB7XG5cdFx0aWYgKCFsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcCkge1xuXHRcdFx0dGFyZ2V0Lmluc2VydEJlZm9yZShzdHlsZSwgdGFyZ2V0LmZpcnN0Q2hpbGQpO1xuXHRcdH0gZWxzZSBpZiAobGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AubmV4dFNpYmxpbmcpIHtcblx0XHRcdHRhcmdldC5pbnNlcnRCZWZvcmUoc3R5bGUsIGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wLm5leHRTaWJsaW5nKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcblx0XHR9XG5cdFx0c3R5bGVzSW5zZXJ0ZWRBdFRvcC5wdXNoKHN0eWxlKTtcblx0fSBlbHNlIGlmIChvcHRpb25zLmluc2VydEF0ID09PSBcImJvdHRvbVwiKSB7XG5cdFx0dGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcblx0fSBlbHNlIGlmICh0eXBlb2Ygb3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJvYmplY3RcIiAmJiBvcHRpb25zLmluc2VydEF0LmJlZm9yZSkge1xuXHRcdHZhciBuZXh0U2libGluZyA9IGdldEVsZW1lbnQob3B0aW9ucy5pbnNlcnRBdC5iZWZvcmUsIHRhcmdldCk7XG5cdFx0dGFyZ2V0Lmluc2VydEJlZm9yZShzdHlsZSwgbmV4dFNpYmxpbmcpO1xuXHR9IGVsc2Uge1xuXHRcdHRocm93IG5ldyBFcnJvcihcIltTdHlsZSBMb2FkZXJdXFxuXFxuIEludmFsaWQgdmFsdWUgZm9yIHBhcmFtZXRlciAnaW5zZXJ0QXQnICgnb3B0aW9ucy5pbnNlcnRBdCcpIGZvdW5kLlxcbiBNdXN0IGJlICd0b3AnLCAnYm90dG9tJywgb3IgT2JqZWN0LlxcbiAoaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIjaW5zZXJ0YXQpXFxuXCIpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudCAoc3R5bGUpIHtcblx0aWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHJldHVybiBmYWxzZTtcblx0c3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG5cblx0dmFyIGlkeCA9IHN0eWxlc0luc2VydGVkQXRUb3AuaW5kZXhPZihzdHlsZSk7XG5cdGlmKGlkeCA+PSAwKSB7XG5cdFx0c3R5bGVzSW5zZXJ0ZWRBdFRvcC5zcGxpY2UoaWR4LCAxKTtcblx0fVxufVxuXG5mdW5jdGlvbiBjcmVhdGVTdHlsZUVsZW1lbnQgKG9wdGlvbnMpIHtcblx0dmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuXG5cdGlmKG9wdGlvbnMuYXR0cnMudHlwZSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0b3B0aW9ucy5hdHRycy50eXBlID0gXCJ0ZXh0L2Nzc1wiO1xuXHR9XG5cblx0aWYob3B0aW9ucy5hdHRycy5ub25jZSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0dmFyIG5vbmNlID0gZ2V0Tm9uY2UoKTtcblx0XHRpZiAobm9uY2UpIHtcblx0XHRcdG9wdGlvbnMuYXR0cnMubm9uY2UgPSBub25jZTtcblx0XHR9XG5cdH1cblxuXHRhZGRBdHRycyhzdHlsZSwgb3B0aW9ucy5hdHRycyk7XG5cdGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zLCBzdHlsZSk7XG5cblx0cmV0dXJuIHN0eWxlO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVMaW5rRWxlbWVudCAob3B0aW9ucykge1xuXHR2YXIgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaW5rXCIpO1xuXG5cdGlmKG9wdGlvbnMuYXR0cnMudHlwZSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0b3B0aW9ucy5hdHRycy50eXBlID0gXCJ0ZXh0L2Nzc1wiO1xuXHR9XG5cdG9wdGlvbnMuYXR0cnMucmVsID0gXCJzdHlsZXNoZWV0XCI7XG5cblx0YWRkQXR0cnMobGluaywgb3B0aW9ucy5hdHRycyk7XG5cdGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zLCBsaW5rKTtcblxuXHRyZXR1cm4gbGluaztcbn1cblxuZnVuY3Rpb24gYWRkQXR0cnMgKGVsLCBhdHRycykge1xuXHRPYmplY3Qua2V5cyhhdHRycykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG5cdFx0ZWwuc2V0QXR0cmlidXRlKGtleSwgYXR0cnNba2V5XSk7XG5cdH0pO1xufVxuXG5mdW5jdGlvbiBnZXROb25jZSgpIHtcblx0aWYgKHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyA9PT0gJ3VuZGVmaW5lZCcpIHtcblx0XHRyZXR1cm4gbnVsbDtcblx0fVxuXG5cdHJldHVybiBfX3dlYnBhY2tfbm9uY2VfXztcbn1cblxuZnVuY3Rpb24gYWRkU3R5bGUgKG9iaiwgb3B0aW9ucykge1xuXHR2YXIgc3R5bGUsIHVwZGF0ZSwgcmVtb3ZlLCByZXN1bHQ7XG5cblx0Ly8gSWYgYSB0cmFuc2Zvcm0gZnVuY3Rpb24gd2FzIGRlZmluZWQsIHJ1biBpdCBvbiB0aGUgY3NzXG5cdGlmIChvcHRpb25zLnRyYW5zZm9ybSAmJiBvYmouY3NzKSB7XG5cdCAgICByZXN1bHQgPSB0eXBlb2Ygb3B0aW9ucy50cmFuc2Zvcm0gPT09ICdmdW5jdGlvbidcblx0XHQgPyBvcHRpb25zLnRyYW5zZm9ybShvYmouY3NzKSBcblx0XHQgOiBvcHRpb25zLnRyYW5zZm9ybS5kZWZhdWx0KG9iai5jc3MpO1xuXG5cdCAgICBpZiAocmVzdWx0KSB7XG5cdCAgICBcdC8vIElmIHRyYW5zZm9ybSByZXR1cm5zIGEgdmFsdWUsIHVzZSB0aGF0IGluc3RlYWQgb2YgdGhlIG9yaWdpbmFsIGNzcy5cblx0ICAgIFx0Ly8gVGhpcyBhbGxvd3MgcnVubmluZyBydW50aW1lIHRyYW5zZm9ybWF0aW9ucyBvbiB0aGUgY3NzLlxuXHQgICAgXHRvYmouY3NzID0gcmVzdWx0O1xuXHQgICAgfSBlbHNlIHtcblx0ICAgIFx0Ly8gSWYgdGhlIHRyYW5zZm9ybSBmdW5jdGlvbiByZXR1cm5zIGEgZmFsc3kgdmFsdWUsIGRvbid0IGFkZCB0aGlzIGNzcy5cblx0ICAgIFx0Ly8gVGhpcyBhbGxvd3MgY29uZGl0aW9uYWwgbG9hZGluZyBvZiBjc3Ncblx0ICAgIFx0cmV0dXJuIGZ1bmN0aW9uKCkge1xuXHQgICAgXHRcdC8vIG5vb3Bcblx0ICAgIFx0fTtcblx0ICAgIH1cblx0fVxuXG5cdGlmIChvcHRpb25zLnNpbmdsZXRvbikge1xuXHRcdHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrO1xuXG5cdFx0c3R5bGUgPSBzaW5nbGV0b24gfHwgKHNpbmdsZXRvbiA9IGNyZWF0ZVN0eWxlRWxlbWVudChvcHRpb25zKSk7XG5cblx0XHR1cGRhdGUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIGZhbHNlKTtcblx0XHRyZW1vdmUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIHRydWUpO1xuXG5cdH0gZWxzZSBpZiAoXG5cdFx0b2JqLnNvdXJjZU1hcCAmJlxuXHRcdHR5cGVvZiBVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBVUkwuY3JlYXRlT2JqZWN0VVJMID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgVVJMLnJldm9rZU9iamVjdFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIEJsb2IgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCJcblx0KSB7XG5cdFx0c3R5bGUgPSBjcmVhdGVMaW5rRWxlbWVudChvcHRpb25zKTtcblx0XHR1cGRhdGUgPSB1cGRhdGVMaW5rLmJpbmQobnVsbCwgc3R5bGUsIG9wdGlvbnMpO1xuXHRcdHJlbW92ZSA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG5cblx0XHRcdGlmKHN0eWxlLmhyZWYpIFVSTC5yZXZva2VPYmplY3RVUkwoc3R5bGUuaHJlZik7XG5cdFx0fTtcblx0fSBlbHNlIHtcblx0XHRzdHlsZSA9IGNyZWF0ZVN0eWxlRWxlbWVudChvcHRpb25zKTtcblx0XHR1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGUpO1xuXHRcdHJlbW92ZSA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG5cdFx0fTtcblx0fVxuXG5cdHVwZGF0ZShvYmopO1xuXG5cdHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZSAobmV3T2JqKSB7XG5cdFx0aWYgKG5ld09iaikge1xuXHRcdFx0aWYgKFxuXHRcdFx0XHRuZXdPYmouY3NzID09PSBvYmouY3NzICYmXG5cdFx0XHRcdG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmXG5cdFx0XHRcdG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXBcblx0XHRcdCkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdHVwZGF0ZShvYmogPSBuZXdPYmopO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZW1vdmUoKTtcblx0XHR9XG5cdH07XG59XG5cbnZhciByZXBsYWNlVGV4dCA9IChmdW5jdGlvbiAoKSB7XG5cdHZhciB0ZXh0U3RvcmUgPSBbXTtcblxuXHRyZXR1cm4gZnVuY3Rpb24gKGluZGV4LCByZXBsYWNlbWVudCkge1xuXHRcdHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudDtcblxuXHRcdHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO1xuXHR9O1xufSkoKTtcblxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyAoc3R5bGUsIGluZGV4LCByZW1vdmUsIG9iaikge1xuXHR2YXIgY3NzID0gcmVtb3ZlID8gXCJcIiA6IG9iai5jc3M7XG5cblx0aWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcblx0XHRzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKTtcblx0fSBlbHNlIHtcblx0XHR2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcyk7XG5cdFx0dmFyIGNoaWxkTm9kZXMgPSBzdHlsZS5jaGlsZE5vZGVzO1xuXG5cdFx0aWYgKGNoaWxkTm9kZXNbaW5kZXhdKSBzdHlsZS5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSk7XG5cblx0XHRpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcblx0XHRcdHN0eWxlLmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHN0eWxlLmFwcGVuZENoaWxkKGNzc05vZGUpO1xuXHRcdH1cblx0fVxufVxuXG5mdW5jdGlvbiBhcHBseVRvVGFnIChzdHlsZSwgb2JqKSB7XG5cdHZhciBjc3MgPSBvYmouY3NzO1xuXHR2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG5cblx0aWYobWVkaWEpIHtcblx0XHRzdHlsZS5zZXRBdHRyaWJ1dGUoXCJtZWRpYVwiLCBtZWRpYSlcblx0fVxuXG5cdGlmKHN0eWxlLnN0eWxlU2hlZXQpIHtcblx0XHRzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG5cdH0gZWxzZSB7XG5cdFx0d2hpbGUoc3R5bGUuZmlyc3RDaGlsZCkge1xuXHRcdFx0c3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG5cdFx0fVxuXG5cdFx0c3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG5cdH1cbn1cblxuZnVuY3Rpb24gdXBkYXRlTGluayAobGluaywgb3B0aW9ucywgb2JqKSB7XG5cdHZhciBjc3MgPSBvYmouY3NzO1xuXHR2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuXHQvKlxuXHRcdElmIGNvbnZlcnRUb0Fic29sdXRlVXJscyBpc24ndCBkZWZpbmVkLCBidXQgc291cmNlbWFwcyBhcmUgZW5hYmxlZFxuXHRcdGFuZCB0aGVyZSBpcyBubyBwdWJsaWNQYXRoIGRlZmluZWQgdGhlbiBsZXRzIHR1cm4gY29udmVydFRvQWJzb2x1dGVVcmxzXG5cdFx0b24gYnkgZGVmYXVsdC4gIE90aGVyd2lzZSBkZWZhdWx0IHRvIHRoZSBjb252ZXJ0VG9BYnNvbHV0ZVVybHMgb3B0aW9uXG5cdFx0ZGlyZWN0bHlcblx0Ki9cblx0dmFyIGF1dG9GaXhVcmxzID0gb3B0aW9ucy5jb252ZXJ0VG9BYnNvbHV0ZVVybHMgPT09IHVuZGVmaW5lZCAmJiBzb3VyY2VNYXA7XG5cblx0aWYgKG9wdGlvbnMuY29udmVydFRvQWJzb2x1dGVVcmxzIHx8IGF1dG9GaXhVcmxzKSB7XG5cdFx0Y3NzID0gZml4VXJscyhjc3MpO1xuXHR9XG5cblx0aWYgKHNvdXJjZU1hcCkge1xuXHRcdC8vIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9hLzI2NjAzODc1XG5cdFx0Y3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIiArIGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSkgKyBcIiAqL1wiO1xuXHR9XG5cblx0dmFyIGJsb2IgPSBuZXcgQmxvYihbY3NzXSwgeyB0eXBlOiBcInRleHQvY3NzXCIgfSk7XG5cblx0dmFyIG9sZFNyYyA9IGxpbmsuaHJlZjtcblxuXHRsaW5rLmhyZWYgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGJsb2IpO1xuXG5cdGlmKG9sZFNyYykgVVJMLnJldm9rZU9iamVjdFVSTChvbGRTcmMpO1xufVxuIiwiXG4vKipcbiAqIFdoZW4gc291cmNlIG1hcHMgYXJlIGVuYWJsZWQsIGBzdHlsZS1sb2FkZXJgIHVzZXMgYSBsaW5rIGVsZW1lbnQgd2l0aCBhIGRhdGEtdXJpIHRvXG4gKiBlbWJlZCB0aGUgY3NzIG9uIHRoZSBwYWdlLiBUaGlzIGJyZWFrcyBhbGwgcmVsYXRpdmUgdXJscyBiZWNhdXNlIG5vdyB0aGV5IGFyZSByZWxhdGl2ZSB0byBhXG4gKiBidW5kbGUgaW5zdGVhZCBvZiB0aGUgY3VycmVudCBwYWdlLlxuICpcbiAqIE9uZSBzb2x1dGlvbiBpcyB0byBvbmx5IHVzZSBmdWxsIHVybHMsIGJ1dCB0aGF0IG1heSBiZSBpbXBvc3NpYmxlLlxuICpcbiAqIEluc3RlYWQsIHRoaXMgZnVuY3Rpb24gXCJmaXhlc1wiIHRoZSByZWxhdGl2ZSB1cmxzIHRvIGJlIGFic29sdXRlIGFjY29yZGluZyB0byB0aGUgY3VycmVudCBwYWdlIGxvY2F0aW9uLlxuICpcbiAqIEEgcnVkaW1lbnRhcnkgdGVzdCBzdWl0ZSBpcyBsb2NhdGVkIGF0IGB0ZXN0L2ZpeFVybHMuanNgIGFuZCBjYW4gYmUgcnVuIHZpYSB0aGUgYG5wbSB0ZXN0YCBjb21tYW5kLlxuICpcbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3MpIHtcbiAgLy8gZ2V0IGN1cnJlbnQgbG9jYXRpb25cbiAgdmFyIGxvY2F0aW9uID0gdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiAmJiB3aW5kb3cubG9jYXRpb247XG5cbiAgaWYgKCFsb2NhdGlvbikge1xuICAgIHRocm93IG5ldyBFcnJvcihcImZpeFVybHMgcmVxdWlyZXMgd2luZG93LmxvY2F0aW9uXCIpO1xuICB9XG5cblx0Ly8gYmxhbmsgb3IgbnVsbD9cblx0aWYgKCFjc3MgfHwgdHlwZW9mIGNzcyAhPT0gXCJzdHJpbmdcIikge1xuXHQgIHJldHVybiBjc3M7XG4gIH1cblxuICB2YXIgYmFzZVVybCA9IGxvY2F0aW9uLnByb3RvY29sICsgXCIvL1wiICsgbG9jYXRpb24uaG9zdDtcbiAgdmFyIGN1cnJlbnREaXIgPSBiYXNlVXJsICsgbG9jYXRpb24ucGF0aG5hbWUucmVwbGFjZSgvXFwvW15cXC9dKiQvLCBcIi9cIik7XG5cblx0Ly8gY29udmVydCBlYWNoIHVybCguLi4pXG5cdC8qXG5cdFRoaXMgcmVndWxhciBleHByZXNzaW9uIGlzIGp1c3QgYSB3YXkgdG8gcmVjdXJzaXZlbHkgbWF0Y2ggYnJhY2tldHMgd2l0aGluXG5cdGEgc3RyaW5nLlxuXG5cdCAvdXJsXFxzKlxcKCAgPSBNYXRjaCBvbiB0aGUgd29yZCBcInVybFwiIHdpdGggYW55IHdoaXRlc3BhY2UgYWZ0ZXIgaXQgYW5kIHRoZW4gYSBwYXJlbnNcblx0ICAgKCAgPSBTdGFydCBhIGNhcHR1cmluZyBncm91cFxuXHQgICAgICg/OiAgPSBTdGFydCBhIG5vbi1jYXB0dXJpbmcgZ3JvdXBcblx0ICAgICAgICAgW14pKF0gID0gTWF0Y2ggYW55dGhpbmcgdGhhdCBpc24ndCBhIHBhcmVudGhlc2VzXG5cdCAgICAgICAgIHwgID0gT1Jcblx0ICAgICAgICAgXFwoICA9IE1hdGNoIGEgc3RhcnQgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICg/OiAgPSBTdGFydCBhbm90aGVyIG5vbi1jYXB0dXJpbmcgZ3JvdXBzXG5cdCAgICAgICAgICAgICAgICAgW14pKF0rICA9IE1hdGNoIGFueXRoaW5nIHRoYXQgaXNuJ3QgYSBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgICAgIHwgID0gT1Jcblx0ICAgICAgICAgICAgICAgICBcXCggID0gTWF0Y2ggYSBzdGFydCBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgICAgICAgICBbXikoXSogID0gTWF0Y2ggYW55dGhpbmcgdGhhdCBpc24ndCBhIHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAgICAgXFwpICA9IE1hdGNoIGEgZW5kIHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICApICA9IEVuZCBHcm91cFxuICAgICAgICAgICAgICAqXFwpID0gTWF0Y2ggYW55dGhpbmcgYW5kIHRoZW4gYSBjbG9zZSBwYXJlbnNcbiAgICAgICAgICApICA9IENsb3NlIG5vbi1jYXB0dXJpbmcgZ3JvdXBcbiAgICAgICAgICAqICA9IE1hdGNoIGFueXRoaW5nXG4gICAgICAgKSAgPSBDbG9zZSBjYXB0dXJpbmcgZ3JvdXBcblx0IFxcKSAgPSBNYXRjaCBhIGNsb3NlIHBhcmVuc1xuXG5cdCAvZ2kgID0gR2V0IGFsbCBtYXRjaGVzLCBub3QgdGhlIGZpcnN0LiAgQmUgY2FzZSBpbnNlbnNpdGl2ZS5cblx0ICovXG5cdHZhciBmaXhlZENzcyA9IGNzcy5yZXBsYWNlKC91cmxcXHMqXFwoKCg/OlteKShdfFxcKCg/OlteKShdK3xcXChbXikoXSpcXCkpKlxcKSkqKVxcKS9naSwgZnVuY3Rpb24oZnVsbE1hdGNoLCBvcmlnVXJsKSB7XG5cdFx0Ly8gc3RyaXAgcXVvdGVzIChpZiB0aGV5IGV4aXN0KVxuXHRcdHZhciB1bnF1b3RlZE9yaWdVcmwgPSBvcmlnVXJsXG5cdFx0XHQudHJpbSgpXG5cdFx0XHQucmVwbGFjZSgvXlwiKC4qKVwiJC8sIGZ1bmN0aW9uKG8sICQxKXsgcmV0dXJuICQxOyB9KVxuXHRcdFx0LnJlcGxhY2UoL14nKC4qKSckLywgZnVuY3Rpb24obywgJDEpeyByZXR1cm4gJDE7IH0pO1xuXG5cdFx0Ly8gYWxyZWFkeSBhIGZ1bGwgdXJsPyBubyBjaGFuZ2Vcblx0XHRpZiAoL14oI3xkYXRhOnxodHRwOlxcL1xcL3xodHRwczpcXC9cXC98ZmlsZTpcXC9cXC9cXC98XFxzKiQpL2kudGVzdCh1bnF1b3RlZE9yaWdVcmwpKSB7XG5cdFx0ICByZXR1cm4gZnVsbE1hdGNoO1xuXHRcdH1cblxuXHRcdC8vIGNvbnZlcnQgdGhlIHVybCB0byBhIGZ1bGwgdXJsXG5cdFx0dmFyIG5ld1VybDtcblxuXHRcdGlmICh1bnF1b3RlZE9yaWdVcmwuaW5kZXhPZihcIi8vXCIpID09PSAwKSB7XG5cdFx0ICBcdC8vVE9ETzogc2hvdWxkIHdlIGFkZCBwcm90b2NvbD9cblx0XHRcdG5ld1VybCA9IHVucXVvdGVkT3JpZ1VybDtcblx0XHR9IGVsc2UgaWYgKHVucXVvdGVkT3JpZ1VybC5pbmRleE9mKFwiL1wiKSA9PT0gMCkge1xuXHRcdFx0Ly8gcGF0aCBzaG91bGQgYmUgcmVsYXRpdmUgdG8gdGhlIGJhc2UgdXJsXG5cdFx0XHRuZXdVcmwgPSBiYXNlVXJsICsgdW5xdW90ZWRPcmlnVXJsOyAvLyBhbHJlYWR5IHN0YXJ0cyB3aXRoICcvJ1xuXHRcdH0gZWxzZSB7XG5cdFx0XHQvLyBwYXRoIHNob3VsZCBiZSByZWxhdGl2ZSB0byBjdXJyZW50IGRpcmVjdG9yeVxuXHRcdFx0bmV3VXJsID0gY3VycmVudERpciArIHVucXVvdGVkT3JpZ1VybC5yZXBsYWNlKC9eXFwuXFwvLywgXCJcIik7IC8vIFN0cmlwIGxlYWRpbmcgJy4vJ1xuXHRcdH1cblxuXHRcdC8vIHNlbmQgYmFjayB0aGUgZml4ZWQgdXJsKC4uLilcblx0XHRyZXR1cm4gXCJ1cmwoXCIgKyBKU09OLnN0cmluZ2lmeShuZXdVcmwpICsgXCIpXCI7XG5cdH0pO1xuXG5cdC8vIHNlbmQgYmFjayB0aGUgZml4ZWQgY3NzXG5cdHJldHVybiBmaXhlZENzcztcbn07XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBCb29raW5nIHtcbiAgY29uc3RydWN0b3IoYm9va2luZ0RhdGEpIHtcbiAgICB0aGlzLmlkID0gYm9va2luZ0RhdGEuaWQ7XG4gICAgdGhpcy51c2VySUQgPSBib29raW5nRGF0YS51c2VySUQ7XG4gICAgdGhpcy5kYXRlID0gYm9va2luZ0RhdGEuZGF0ZTtcbiAgICB0aGlzLnJvb21OdW1iZXIgPSBib29raW5nRGF0YS5yb29tTnVtYmVyO1xuICAgIHRoaXMucm9vbVNlcnZpY2VDaGFyZ2VzID0gYm9va2luZ0RhdGEucm9vbVNlcnZpY2VDaGFyZ2VzO1xuICB9XG59XG4iLCJleHBvcnQgbGV0IGFsbFJvb21DYXJkcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhbGwtcm9vbS1jYXJkcycpO1xuZXhwb3J0IGxldCBib29rQVJvb21CdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYm9vay1hLXJvb20nKTtcbmV4cG9ydCBsZXQgYm9va2luZ0hpc3RvcnlCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYm9va2luZy1oaXN0b3J5Jyk7XG5leHBvcnQgbGV0IGN1c3RvbWVyQm9va1Jvb21EYXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Jvb2stcm9vbS1kYXRlJyk7XG5leHBvcnQgbGV0IGN1c3RvbWVyVmlld1Jvb21zID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2N1c3RvbWVyLXZpZXctcm9vbXMnKTtcbmV4cG9ydCBsZXQgY3VycmVudEN1c3RvbWVyQm9va2luZ3MgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY3VycmVudC1jdXN0b21lci1ib29raW5ncycpO1xuZXhwb3J0IGxldCBjdXN0b21lckRpcmVjdG9yeUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jdXN0b21lci1kaXJlY3RvcnktYnV0dG9uJyk7XG5leHBvcnQgbGV0IGN1c3RvbWVySGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmN1c3RvbWVyLWhlYWRlcicpO1xuZXhwb3J0IGxldCBjdXN0b21lckJvb2tpbmdTZWFyY2hCYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY3VzdG9tZXItYm9va2luZy1zZWFyY2gtYmFyJyk7XG5leHBvcnQgbGV0IGN1c3RvbWVyTmFtZUlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlYXJjaC1jdXN0b21lci1uYW1lJyk7XG5leHBvcnQgbGV0IGN1c3RvbWVyU3RhdHVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmN1c3RvbWVyLXN0YXR1cycpO1xuZXhwb3J0IGxldCBjdXN0b21lclZpZXcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY3VzdG9tZXItdmlldycpO1xuZXhwb3J0IGxldCBjdXN0b21lcldlbGNvbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY3VzdG9tZXItd2VsY29tZScpO1xuZXhwb3J0IGxldCB1cGRhdGVDdXN0b21lckJvb2tpbmdzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3VwZGF0ZS1jdXN0b21lci1ib29raW5ncycpO1xuZXhwb3J0IGxldCBkcm9wRG93biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjdXN0b21lcnMnKTtcbmV4cG9ydCBsZXQgZW50ZXJDcmVkZW50aWFscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lbnRlci1jcmVkZW50aWFscycpO1xuZXhwb3J0IGxldCBlcnJvck1lc3NhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZXJyb3ItbWVzc2FnZScpO1xuZXhwb3J0IGxldCBmaWx0ZXJDYXRlZ29yaWVzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ZpbHRlci1jYXRlZ29yaWVzJyk7XG5leHBvcnQgbGV0IGZpbHRlclJlZnJlc2hCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZmlsdGVyLWJ1dHRvbicpO1xuZXhwb3J0IGxldCBmaWx0ZXJTZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZpbHRlci1yb29tcycpO1xuZXhwb3J0IGxldCBmaWx0ZXJTdWJtaXRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZmlsdGVyLWJ1dHRvbicpO1xuZXhwb3J0IGxldCBncmlkQ29sdW1uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2dyaWQtY29sdW1uJyk7XG5leHBvcnQgbGV0IGhvbWVCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaG9tZS1idXR0b24nKTtcbmV4cG9ydCBsZXQgbG9naW5CdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubG9naW4tYnV0dG9uJyk7XG5leHBvcnQgbGV0IG1hbmFnZXJCb29rUm9vbURhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbWFuYWdlci1ib29rLXJvb20tZGF0ZScpO1xuZXhwb3J0IGxldCBtYW5hZ2VyQm9va1Jvb21IZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFuYWdlci1ib29rLXJvb20taGVhZGVyJyk7XG5leHBvcnQgbGV0IG1hbmFnZUN1c3RvbWVyQm9va2luZ3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFuYWdlLWN1c3RvbWVyLWJvb2tpbmdzJyk7XG5leHBvcnQgbGV0IG1hbmFnZXJWaWV3ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1hbmFnZXItdmlldycpO1xuZXhwb3J0IGxldCBtYW5hZ2VyVmlld0N1c3RvbWVyQm9va2luZ3MgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFuYWdlcnZpZXctY3VzdG9tZXItYm9va2luZ3MnKTtcbmV4cG9ydCBsZXQgaG90ZWxPdmVydmlld0luZm8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaG90ZWwtb3ZlcnZpZXctaW5mbycpO1xuZXhwb3J0IGxldCBob3RlbE92ZXJ2aWV3VGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaG90ZWwtb3ZlcnZpZXctdGl0bGUnKTtcbmV4cG9ydCBsZXQgcGFzc3dvcmRJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wYXNzd29yZCcpO1xuZXhwb3J0IGxldCBwYXN0Qm9va2luZ3NEaXNwbGF5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Bhc3QtYm9va2luZ3MtZGlzcGxheScpO1xuZXhwb3J0IGxldCByZWZyZXNoQ3VzdG9tZXJCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmVmcmVzaC1jdXN0b21lcnMnKTtcbmV4cG9ydCBsZXQgc2VhcmNoUm9vbXNCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2VhcmNoLXJvb21zLWJ1dHRvbicpO1xuZXhwb3J0IGxldCBzZWFyY2hDdXN0b21lck5hbWVEcm9wRG93biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWFyY2gtY3VzdG9tZXItbmFtZScpO1xuZXhwb3J0IGxldCBzZWFyY2hDdXN0b21lcnNGb3JCb29raW5nQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlYXJjaC1jdXN0b21lcnMtZm9yYm9va2luZy1idXR0b24nKTtcbmV4cG9ydCBsZXQgc2lnbk91dEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaWdub3V0LWJ1dHRvbicpO1xuZXhwb3J0IGxldCB0b2RheUhvdGVsQm9va2luZ3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9kYXktaG90ZWwtYm9va2luZ3MnKTtcbmV4cG9ydCBsZXQgdG9kYXlIb3RlbEJvb2tpbmdzVGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9kYXktaG90ZWwtYm9va2luZ3MtdGl0bGUnKTtcbmV4cG9ydCBsZXQgdG9kYXlIb3RlbE92ZXJ2aWV3ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZGF5LWhvdGVsLW92ZXJ2aWV3Jyk7XG5leHBvcnQgbGV0IHVzZXJuYW1lSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudXNlcm5hbWUnKTtcbmV4cG9ydCBsZXQgdXBjb21pbmdCb29raW5nc0J1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy51cGNvbWluZy1ib29raW5ncycpO1xuZXhwb3J0IGxldCB1cGNvbWluZ0Jvb2tpbmdzRGlzcGxheSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd1cGNvbWluZy1ib29raW5ncy1kaXNwbGF5Jyk7XG5leHBvcnQgbGV0IHZpZXdBdmFpbGFibGVSb29tcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy52aWV3LWF2YWlsYWJsZS1yb29tcycpO1xuZXhwb3J0IGxldCB2aWV3Q3VzdG9tZXJCb29raW5nc0J1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd2aWV3LWN1c3RvbWVyLWJvb2tpbmdzLWJ1dHRvbicpO1xuZXhwb3J0IGxldCB2aWV3UGFzdEJvb2tpbmdzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnZpZXctcGFzdC1ib29raW5ncycpO1xuZXhwb3J0IGxldCB2aWV3VXBjb21pbmdCb29raW5ncyA9XG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudmlldy11cGNvbWluZy1ib29raW5ncycpO1xuXG5cblxuLy8gZXhwb3J0IGxldCBiYWNrVG9Cb29raW5nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJhY2stdG8tYm9va2luZycpO1xuLy8gZXhwb3J0IGxldCBib29rQVJvb20gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYm9vay1hLXJvb20nKTtcblxuLy8gZXhwb3J0IGxldCBib29raW5nTW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYWRkLWJvb2tpbmctbW9kYWwnKTtcbi8vIGV4cG9ydCBsZXQgYm9va1Jvb21EYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJvb2stcm9vbS1kYXRlJyk7XG4vLyBleHBvcnQgbGV0IGJvb2tSb29tSGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJvb2stcm9vbS1oZWFkZXInKTtcbi8vIGV4cG9ydCBsZXQgY3VzdG9tZXJSb29tcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kaXNwbGF5LWN1c3RvbWVyLXJvb21zJyk7XG5cblxuXG5cbi8vIGV4cG9ydCBsZXQgaG90ZWxPdmVydmlld0RhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaG90ZWwtb3ZlcnZpZXctZGF0ZScpO1xuLy8gZXhwb3J0IGxldCBtb2RhbENvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbW9kYWwtY29udGVudCcpO1xuLy8gZXhwb3J0IGxldCBtb2RhbERhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwtZGF0ZScpO1xuLy8gZXhwb3J0IGxldCBtb2RhbFRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsLXRpdGxlJyk7XG4vLyBleHBvcnQgbGV0IHNlYXJjaEN1c3RvbWVySW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2VhcmNoLWN1c3RvbWVyLW5hbWUnKTtcbi8vIGV4cG9ydCBsZXQgZ3JpZENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjdXN0b21lci1ib29raW5ncycpO1xuIiwiaW1wb3J0IFVzZXIgZnJvbSAnLi9Vc2VyLmpzJztcbmltcG9ydCBSb29tIGZyb20gJy4vUm9vbS5qcyc7XG5pbXBvcnQgQm9va2luZyBmcm9tICcuL0Jvb2tpbmcuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIb3RlbFNlcnZpY2Uge1xuICBjb25zdHJ1Y3Rvcih1c2VyRGF0YSwgcm9vbURhdGEsIGJvb2tpbmdEYXRhKSB7XG4gICAgdGhpcy5yYXdVc2VyRGF0YSA9IHVzZXJEYXRhO1xuICAgIHRoaXMucmF3Um9vbURhdGEgPSByb29tRGF0YTtcbiAgICB0aGlzLnJhd0Jvb2tpbmdEYXRhID0gYm9va2luZ0RhdGE7XG4gICAgdGhpcy5hbGxVc2VycyA9IFtdO1xuICAgIHRoaXMuYWxsUm9vbXMgPSBbXTtcbiAgICB0aGlzLmFsbEJvb2tpbmdzID0gW107XG4gIH1cblxuICBzdGFydCgpIHtcbiAgICB0aGlzLmFkZFVzZXJzKCk7XG4gICAgdGhpcy5hZGRSb29tcygpO1xuICAgIHRoaXMuYWRkQm9va2luZ3MoKTtcbiAgfVxuXG4gIGFkZFVzZXJzKCkge1xuICAgIHJldHVybiB0aGlzLnJhd1VzZXJEYXRhLm1hcChkYXRhID0+IHtcbiAgICAgIGxldCB1c2VyID0gbmV3IFVzZXIoZGF0YSk7XG4gICAgICB0aGlzLmFsbFVzZXJzLnB1c2godXNlcik7XG4gICAgfSlcbiAgfVxuXG4gIGFkZFJvb21zKCkge1xuICAgIHJldHVybiB0aGlzLnJhd1Jvb21EYXRhLm1hcChkYXRhID0+IHtcbiAgICAgIGxldCByb29tID0gbmV3IFJvb20oZGF0YSk7XG4gICAgICB0aGlzLmFsbFJvb21zLnB1c2gocm9vbSk7XG4gICAgfSlcbiAgfVxuXG4gIGFkZEJvb2tpbmdzKCkge1xuICAgIHRoaXMuYWxsQm9va2luZ3MgPSBbXTtcbiAgICByZXR1cm4gdGhpcy5yYXdCb29raW5nRGF0YS5tYXAoZGF0YSA9PiB7XG4gICAgICBsZXQgYm9va2luZyA9IG5ldyBCb29raW5nKGRhdGEpO1xuICAgICAgdGhpcy5hbGxCb29raW5ncy5wdXNoKGJvb2tpbmcpO1xuICAgIH0pXG4gIH1cblxuICBmaW5kVXNlck5hbWUodXNlcm5hbWUpIHtcbiAgICBsZXQgZmluZFVzZXJJRCA9IHVzZXJuYW1lLnNwbGl0KC8oXFxkKykvKTtcbiAgICBsZXQgdXNlcklEID0gcGFyc2VJbnQoZmluZFVzZXJJRFsxXSk7XG4gICAgbGV0IGZpbmROYW1lID0gdGhpcy5hbGxVc2Vycy5maW5kKHVzZXIgPT4ge1xuICAgICAgcmV0dXJuIHVzZXIuaWQgPT09IHVzZXJJRDtcbiAgICB9KVxuICAgIHJldHVybiBmaW5kTmFtZS5uYW1lO1xuICB9XG5cbiAgZmluZE5hbWVGcm9tSUQoaWQpIHtcbiAgICBsZXQgZmluZE5hbWUgPSB0aGlzLmFsbFVzZXJzLmZpbmQodXNlciA9PiB7XG4gICAgICByZXR1cm4gdXNlci5pZCA9PT0gaWQ7XG4gICAgfSlcbiAgICByZXR1cm4gZmluZE5hbWUubmFtZTtcbiAgfVxuXG4gIGZpbmRVc2VySWQobmFtZSkge1xuICAgIGxldCBmaW5kTmFtZSA9IHRoaXMuYWxsVXNlcnMuZmluZCh1c2VyID0+IHtcbiAgICAgIHJldHVybiB1c2VyLm5hbWUgPT09IG5hbWU7XG4gICAgfSlcbiAgICBpZiAoZmluZE5hbWUpIHtcbiAgICAgIHJldHVybiBmaW5kTmFtZS5pZDtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuICdXZSBoYXZlIG5vIHJlY29yZCBvZiB0aGUgdXNlciBzZWFyY2hlZC4gUGxlYXNlIHNlYXJjaCBmb3IgYW5vdGhlciB1c2VyLidcbiAgICB9XG4gIH1cblxuICBmaW5kUm9vbURldGFpbHMocm9vbU51bWJlcikge1xuICAgIHJldHVybiB0aGlzLmFsbFJvb21zLmZpbmQocm9vbSA9PiB7XG4gICAgICByZXR1cm4gcm9vbS5udW1iZXIgPT09IHJvb21OdW1iZXI7XG4gICAgfSlcbiAgfVxuXG4gIGZpbHRlclJvb21CeVR5cGUocm9vbXMsIHJvb21UeXBlKSB7XG4gICAgcmV0dXJuIHJvb21zLmZpbHRlcihyb29tID0+IHtcbiAgICAgIHJldHVybiByb29tLnJvb21UeXBlID09PSByb29tVHlwZTtcbiAgICB9KVxuICB9XG5cbiAgY2FsY3VsYXRlTnVtYmVyQXZhaWxhYmxlUm9vbXMoZGF0ZSkge1xuICAgIGxldCBwZXJjZW50ID0gdGhpcy5jYWxjdWxhdGVQZXJjZW50YWdlT2NjdXBpZWQoZGF0ZSkgLyAxMDA7XG4gICAgbGV0IG9jY3VwaWVkUm9vbXMgPSBwZXJjZW50ICogMjU7XG4gICAgcmV0dXJuIDI1IC0gb2NjdXBpZWRSb29tcztcbiAgfVxuXG4gIGZpbmRBdmFpbGFibGVSb29tcyhkYXRlKSB7XG4gICAgbGV0IHJvb21zQm9va2VkID0gdGhpcy5hbGxCb29raW5ncy5yZWR1Y2UoKHJvb21OdW1zLCBib29raW5nKSA9PiB7XG4gICAgICBpZiAoYm9va2luZy5kYXRlID09PSBkYXRlICYmIHR5cGVvZiBib29raW5nLnJvb21OdW1iZXIgPT09ICdudW1iZXInKSB7XG4gICAgICAgIHJvb21OdW1zLnB1c2goYm9va2luZy5yb29tTnVtYmVyKVxuICAgICAgfVxuICAgICAgcmV0dXJuIHJvb21OdW1zO1xuICAgIH0sIFtdKVxuXG4gICAgbGV0IHJvb21zID0gWy4uLnRoaXMuYWxsUm9vbXNdO1xuXG4gICAgcm9vbXMuZm9yRWFjaChyb29tTnVtID0+IHtcbiAgICAgIGlmIChyb29tTnVtID4gMjUgfHwgcm9vbU51bSA8IDEpIHtcbiAgICAgICAgbGV0IGluZGV4ID0gcm9vbXMuaW5kZXhPZihyb29tTnVtKTtcbiAgICAgICAgcm9vbXMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgaWYgKHJvb21zQm9va2VkLmxlbmd0aCA8IHJvb21zLmxlbmd0aCkge1xuICAgICAgcm9vbXNCb29rZWQuZm9yRWFjaChyb29tTnVtID0+IHtcbiAgICAgICAgcm9vbXMuZm9yRWFjaChyb29tID0+IHtcbiAgICAgICAgICBpZiAocm9vbU51bSA9PT0gcm9vbS5udW1iZXIpIHtcbiAgICAgICAgICAgIGxldCBpbmRleCA9IHJvb21zLmluZGV4T2Yocm9vbSk7XG4gICAgICAgICAgICByb29tcy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgIH0pXG4gICAgICByZXR1cm4gcm9vbXM7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiAnU29ycnksIHRoZXJlIGFyZSBubyBhdmFpbGFibGUgcm9vbXMgZm9yIHRoZSBzZWxlY3RlZCBkYXRlLiBXZSBzaW5jZXJlbHkgYXBvbG9naXplLiBQbGVhc2Ugc2VsZWN0IGEgZGlmZmVyZW50IGRhdGUgYW5kIHRyeSBhZ2Fpbi4nXG4gICAgfVxuICB9XG5cbiAgZmluZEN1c3RvbWVyQm9va2luZ3MoaWQpIHtcbiAgICByZXR1cm4gdGhpcy5hbGxCb29raW5ncy5yZWR1Y2UoKGFsbFVzZXJCb29raW5ncywgYm9va2luZykgPT4ge1xuICAgICAgaWYgKGJvb2tpbmcudXNlcklEID09IGlkICYmIGJvb2tpbmcucm9vbU51bWJlciA+IDEpIHtcbiAgICAgICAgdGhpcy5hbGxSb29tcy5mb3JFYWNoKHJvb20gPT4ge1xuICAgICAgICAgIGlmIChyb29tLm51bWJlciA9PT0gYm9va2luZy5yb29tTnVtYmVyKSB7XG4gICAgICAgICAgICBib29raW5nLnJvb21UeXBlID0gcm9vbS5yb29tVHlwZTtcbiAgICAgICAgICAgIGJvb2tpbmcuY29zdFBlck5pZ2h0ID0gcm9vbS5jb3N0UGVyTmlnaHQ7XG4gICAgICAgICAgICBib29raW5nLmJpZGV0ID0gcm9vbS5iaWRldDtcbiAgICAgICAgICAgIGJvb2tpbmcuYmVkU2l6ZSA9IHJvb20uYmVkU2l6ZTtcbiAgICAgICAgICAgIGJvb2tpbmcubnVtQmVkcyA9IHJvb20ubnVtQmVkcztcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIHRoaXMuYWxsVXNlcnMuZm9yRWFjaCh1c2VyID0+IHtcbiAgICAgICAgICBpZiAodXNlci5pZCA9PT0gYm9va2luZy51c2VySUQpIHtcbiAgICAgICAgICAgIGJvb2tpbmcuZ3Vlc3ROYW1lID0gdXNlci5uYW1lO1xuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgYWxsVXNlckJvb2tpbmdzLnB1c2goYm9va2luZyk7XG4gICAgICB9XG4gICAgICByZXR1cm4gYWxsVXNlckJvb2tpbmdzO1xuICAgIH0sIFtdKVxuICB9XG5cbiAgZmluZEJvb2tpbmdzKGRhdGUpIHtcbiAgICBsZXQgdG9kYXlCb29raW5ncyA9IHRoaXMuYWxsQm9va2luZ3MucmVkdWNlKCh0b2RheUJvb2tpbmdzLCBib29raW5nKSA9PiB7XG4gICAgICBpZiAoYm9va2luZy5yb29tTnVtYmVyID4gMCAmJiBib29raW5nLmRhdGUgPT09IGRhdGUpIHtcbiAgICAgICAgdGhpcy5hbGxSb29tcy5mb3JFYWNoKHJvb20gPT4ge1xuICAgICAgICAgIGlmIChyb29tLm51bWJlciA9PSBib29raW5nLnJvb21OdW1iZXIpIHtcbiAgICAgICAgICAgIGJvb2tpbmcucm9vbVR5cGUgPSByb29tLnJvb21UeXBlO1xuICAgICAgICAgICAgYm9va2luZy5jb3N0UGVyTmlnaHQgPSByb29tLmNvc3RQZXJOaWdodDtcbiAgICAgICAgICAgIGJvb2tpbmcuYmVkU2l6ZSA9IHJvb20uYmVkU2l6ZTtcbiAgICAgICAgICAgIGJvb2tpbmcuYmlkZXQgPSByb29tLmJpZGV0O1xuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgdGhpcy5hbGxVc2Vycy5mb3JFYWNoKHVzZXIgPT4ge1xuICAgICAgICAgIGlmICh1c2VyLmlkID09PSBib29raW5nLnVzZXJJRCkge1xuICAgICAgICAgICAgYm9va2luZy5ndWVzdE5hbWUgPSB1c2VyLm5hbWU7XG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICB0b2RheUJvb2tpbmdzLnB1c2goYm9va2luZyk7XG4gICAgICB9XG4gICAgICByZXR1cm4gdG9kYXlCb29raW5ncztcbiAgICB9LCBbXSlcblxuICAgIGlmICh0b2RheUJvb2tpbmdzLmxlbmd0aCA+IDApIHtcbiAgICAgIHJldHVybiB0b2RheUJvb2tpbmdzO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gJ05vIGJvb2tpbmdzIGZvciB0aGUgc2VsZWN0ZWQgZGF0ZS4nXG4gICAgfVxuICB9XG5cbiAgY2FsY3VsYXRlUGVyY2VudGFnZU9jY3VwaWVkKGRhdGUpIHtcbiAgICBsZXQgZGF0ZUJvb2tpbmdzID0gdGhpcy5hbGxCb29raW5ncy5maWx0ZXIoYm9va2luZyA9PiB7XG4gICAgICByZXR1cm4gYm9va2luZy5kYXRlID09PSBkYXRlO1xuICAgIH0pXG5cbiAgICBsZXQgcGVyY2VudCA9IChkYXRlQm9va2luZ3MubGVuZ3RoIC8gdGhpcy5hbGxSb29tcy5sZW5ndGgpICogMTAwO1xuXG4gICAgcmV0dXJuIHBlcmNlbnQudG9GaXhlZCgwKTtcbiAgfVxuXG4gIGNhbGN1bGF0ZVRvdGFsUmV2ZW51ZShkYXRlKSB7XG4gICAgbGV0IGRhdGVCb29raW5ncyA9IHRoaXMuYWxsQm9va2luZ3MucmVkdWNlKChkYXRlQm9va2luZ3MsIGJvb2tpbmcpID0+IHtcbiAgICAgIGlmIChib29raW5nLmRhdGUgPT09IGRhdGUpIHtcbiAgICAgICAgZGF0ZUJvb2tpbmdzLnB1c2goYm9va2luZy5yb29tTnVtYmVyKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBkYXRlQm9va2luZ3M7XG4gICAgfSwgW10pXG5cbiAgICByZXR1cm4gdGhpcy5hbGxSb29tcy5yZWR1Y2UoKHRvdGFsUmV2ZW51ZSwgcm9vbSkgPT4ge1xuICAgICAgZGF0ZUJvb2tpbmdzLmZvckVhY2gocm9vbU51bSA9PiB7XG4gICAgICAgIGlmIChyb29tTnVtID09PSByb29tLm51bWJlcikge1xuICAgICAgICAgIHRvdGFsUmV2ZW51ZSArPSByb29tLmNvc3RQZXJOaWdodDtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIHJldHVybiB0b3RhbFJldmVudWU7XG4gICAgfSwgMCkudG9GaXhlZCgyKVxuICB9XG5cbiAgY2FsY3VsYXRlTnVtYmVyT2ZTdGF5cyhpZCkge1xuICAgIGxldCB1c2VyUm9vbU51bWJlcnMgPSBbXTtcbiAgICB0aGlzLmFsbEJvb2tpbmdzLmZvckVhY2goYm9va2luZyA9PiB7XG4gICAgICBpZiAoYm9va2luZy51c2VySUQgPT0gaWQpIHtcbiAgICAgICAgdXNlclJvb21OdW1iZXJzLnB1c2goYm9va2luZy5yb29tTnVtYmVyKTtcbiAgICAgIH1cbiAgICB9KVxuICAgIHJldHVybiB1c2VyUm9vbU51bWJlcnMubGVuZ3RoO1xuICB9XG5cbiAgY2FsY3VsYXRlVG90YWxTcGVudChpZCkge1xuICAgIGxldCB1c2VyUm9vbU51bWJlcnMgPSBbXTtcbiAgICB0aGlzLmFsbEJvb2tpbmdzLmZvckVhY2goYm9va2luZyA9PiB7XG4gICAgICBpZiAoYm9va2luZy51c2VySUQgPT0gaWQpIHtcbiAgICAgICAgdXNlclJvb21OdW1iZXJzLnB1c2goYm9va2luZy5yb29tTnVtYmVyKTtcbiAgICAgIH1cbiAgICB9KVxuICAgIHJldHVybiB0aGlzLmFsbFJvb21zLnJlZHVjZSgodG90YWxTcGVudCwgcm9vbSkgPT4ge1xuICAgICAgdXNlclJvb21OdW1iZXJzLmZvckVhY2gocm9vbU51bSA9PiB7XG4gICAgICAgIGlmIChyb29tTnVtID09PSByb29tLm51bWJlcikge1xuICAgICAgICAgIHRvdGFsU3BlbnQgKz0gcm9vbS5jb3N0UGVyTmlnaHQ7XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICByZXR1cm4gdG90YWxTcGVudDtcbiAgICB9LCAwKVxuICB9XG5cbiAgc29ydEJvb2tpbmdzQnlEYXRlKGJvb2tpbmdzKSB7XG4gICAgaWYgKGJvb2tpbmdzLmxlbmd0aCA+IDApIHtcbiAgICAgIHJldHVybiBib29raW5ncy5zb3J0KChhLCBiKSA9PiB7XG4gICAgICAgIHJldHVybiBuZXcgRGF0ZShiLmRhdGUpIC0gbmV3IERhdGUoYS5kYXRlKTtcbiAgICAgIH0pXG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiAnU29ycnksIG5vIHJvb21zIGF2YWlsYWJsZSBmb3IgdGhlIHNlbGVjdGVkIGRhdGVzLidcbiAgICB9XG4gIH1cblxuICBzb3J0Qm9va2luZ3NCeVJvb21OdW1iZXIoYm9va2luZ3MpIHtcbiAgICByZXR1cm4gYm9va2luZ3Muc29ydCgoYSwgYikgPT4ge1xuICAgICAgcmV0dXJuIGEucm9vbU51bWJlciAtIGIucm9vbU51bWJlcjtcbiAgICB9KVxuICB9XG5cbiAgZ2V0VG9kYXlEYXRlKCkge1xuICAgIGxldCB0b2RheSA9IG5ldyBEYXRlKCk7XG4gICAgbGV0IGRkID0gdG9kYXkuZ2V0RGF0ZSgpO1xuXG4gICAgbGV0IG1tID0gdG9kYXkuZ2V0TW9udGgoKSArIDE7XG4gICAgbGV0IHl5eXkgPSB0b2RheS5nZXRGdWxsWWVhcigpO1xuXG4gICAgaWYgKGRkIDwgMTApIHtcbiAgICAgIGRkID0gJzAnICsgZGQ7XG4gICAgfVxuICAgIGlmIChtbSA8IDEwKSB7XG4gICAgICBtbSA9ICcwJyArIG1tO1xuICAgIH1cbiAgICByZXR1cm4gdG9kYXkgPSB5eXl5ICsgJy8nICsgbW0gKyAnLycgKyBkZDtcbiAgfVxuXG4gIGdldERhc2hlZFRvZGF5RGF0ZSgpIHtcbiAgICBsZXQgdG9kYXkgPSBuZXcgRGF0ZSgpO1xuICAgIGxldCBkZCA9IHRvZGF5LmdldERhdGUoKTtcblxuICAgIGxldCBtbSA9IHRvZGF5LmdldE1vbnRoKCkgKyAxO1xuICAgIGxldCB5eXl5ID0gdG9kYXkuZ2V0RnVsbFllYXIoKTtcblxuICAgIGlmIChkZCA8IDEwKSB7XG4gICAgICBkZCA9ICcwJyArIGRkO1xuICAgIH1cbiAgICBpZiAobW0gPCAxMCkge1xuICAgICAgbW0gPSAnMCcgKyBtbTtcbiAgICB9XG4gICAgcmV0dXJuIHRvZGF5ID0geXl5eSArICctJyArIG1tICsgJy0nICsgZGQ7XG4gIH1cblxuICBhZGROZXdCb29raW5nKHVzZXJJRCwgZGF0ZSwgcm9vbU51bWJlcikge1xuICAgIGxldCBib29raW5nSW5mbyA9IHRoaXMuYWxsUm9vbXMucmVkdWNlKChib29raW5nRGV0YWlscywgcm9vbSkgPT4ge1xuICAgICAgaWYgKHJvb20ubnVtYmVyID09IHJvb21OdW1iZXIpIHtcbiAgICAgICAgYm9va2luZ0RldGFpbHMudXNlcklEID0gcGFyc2VJbnQodXNlcklEKTtcbiAgICAgICAgYm9va2luZ0RldGFpbHMuZGF0ZSA9IGRhdGU7XG4gICAgICAgIGJvb2tpbmdEZXRhaWxzLnJvb21OdW1iZXIgPSByb29tLm51bWJlcjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBib29raW5nRGV0YWlscztcbiAgICB9LCB7fSlcbiAgICByZXR1cm4gYm9va2luZ0luZm87XG4gIH1cblxuICBkZWxldGVCb29raW5nKGRlbGV0ZUJvb2tpbmcpIHtcbiAgICBsZXQgdG9kYXlEYXRlID0gdGhpcy5nZXRUb2RheURhdGUoKTtcbiAgICBpZiAoZGVsZXRlQm9va2luZy5kYXRlID4gdG9kYXlEYXRlKSB7XG4gICAgICB0aGlzLmFsbEJvb2tpbmdzLmZvckVhY2goYm9va2luZyA9PiB7XG4gICAgICAgIGlmIChib29raW5nLmlkID09PSBkZWxldGVCb29raW5nLmlkKSB7XG4gICAgICAgICAgbGV0IGluZGV4ID0gdGhpcy5hbGxCb29raW5ncy5pbmRleE9mKGJvb2tpbmcpO1xuICAgICAgICAgIHRoaXMuYWxsQm9va2luZ3Muc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuICdPb3BzISBZb3UgY2Fubm90IGRlbGV0ZSBhIGJvb2tpbmcgZnJvbSB0aGUgcGFzdC4gU2VsZWN0IGFub3RoZXIgYm9va2luZyBhbmQgdHJ5IGFnYWluLidcbiAgICB9XG4gIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFJvb20ge1xuICBjb25zdHJ1Y3Rvcihyb29tRGF0YSkge1xuICAgIHRoaXMubnVtYmVyID0gcm9vbURhdGEubnVtYmVyO1xuICAgIHRoaXMucm9vbVR5cGUgPSByb29tRGF0YS5yb29tVHlwZTtcbiAgICB0aGlzLmJpZGV0ID0gcm9vbURhdGEuYmlkZXQ7XG4gICAgdGhpcy5iZWRTaXplID0gcm9vbURhdGEuYmVkU2l6ZTtcbiAgICB0aGlzLm51bUJlZHMgPSByb29tRGF0YS5udW1CZWRzO1xuICAgIHRoaXMuY29zdFBlck5pZ2h0ID0gcm9vbURhdGEuY29zdFBlck5pZ2h0O1xuICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBVc2VyIHtcbiAgY29uc3RydWN0b3IodXNlckRhdGEpIHtcbiAgICB0aGlzLmlkID0gdXNlckRhdGEuaWQ7XG4gICAgdGhpcy5uYW1lID0gdXNlckRhdGEubmFtZTtcbiAgfVxufVxuIiwibGV0IHVybCA9IGBodHRwczovL2ZlLWFwcHMuaGVyb2t1YXBwLmNvbS9hcGkvdjEvb3Zlcmxvb2svMTkwNC9gXG5cbmxldCBhcGlDYWxscyA9IHtcbiAgZmV0Y2hEYXRhKGtleSkge1xuICAgIHJldHVybiBmZXRjaChgJHt1cmx9JHtrZXl9LyR7a2V5fWApXG4gICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgICAudGhlbihkYXRhID0+IGRhdGFba2V5XSlcbiAgICAgIC5jYXRjaChlcnIgPT4gZXJyKVxuICB9LFxuXG4gIHBvc3REYXRhKG5ld1Bvc3QsIG9uU3VjY2Vzcykge1xuICAgIHJldHVybiBmZXRjaChgJHt1cmx9Ym9va2luZ3MvYm9va2luZ3NgLCB7XG4gICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgIGhlYWRlcnM6IHtcbiAgXHQgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgfSxcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KG5ld1Bvc3QpXG4gICAgfSlcbiAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAgIC50aGVuKGpzb24gPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhqc29uKVxuICAgICAgICBvblN1Y2Nlc3MoKTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goZXJyID0+IGNvbnNvbGUubG9nKGVycikpXG4gIH0sXG5cbiAgZGVsZXRlRGF0YShkZWxldGVSZXF1ZXN0LCBvblN1Y2Nlc3MpIHtcbiAgICByZXR1cm4gZmV0Y2goYCR7dXJsfWJvb2tpbmdzL2Jvb2tpbmdzYCwge1xuICAgICAgbWV0aG9kOiAnREVMRVRFJyxcbiAgICAgIGhlYWRlcnM6IHtcbiAgXHQgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgfSxcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGRlbGV0ZVJlcXVlc3QpXG4gICAgfSlcbiAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAgIC50aGVuKGpzb24gPT4ge1xuICAgICAgY29uc29sZS5sb2coanNvbik7XG4gICAgICBvblN1Y2Nlc3MoKTtcbiAgICB9KVxuICAgICAgLmNhdGNoKGVyciA9PiBjb25zb2xlLmxvZyhlcnIpKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGFwaUNhbGxzO1xuIiwiXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vYmFzZS5zY3NzXCIpO1xuXG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcblxudmFyIHRyYW5zZm9ybTtcbnZhciBpbnNlcnRJbnRvO1xuXG5cblxudmFyIG9wdGlvbnMgPSB7XCJobXJcIjp0cnVlfVxuXG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxub3B0aW9ucy5pbnNlcnRJbnRvID0gdW5kZWZpbmVkO1xuXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5cbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuXG5pZihtb2R1bGUuaG90KSB7XG5cdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL2Jhc2Uuc2Nzc1wiLCBmdW5jdGlvbigpIHtcblx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vYmFzZS5zY3NzXCIpO1xuXG5cdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cblx0XHR2YXIgbG9jYWxzID0gKGZ1bmN0aW9uKGEsIGIpIHtcblx0XHRcdHZhciBrZXksIGlkeCA9IDA7XG5cblx0XHRcdGZvcihrZXkgaW4gYSkge1xuXHRcdFx0XHRpZighYiB8fCBhW2tleV0gIT09IGJba2V5XSkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRpZHgrKztcblx0XHRcdH1cblxuXHRcdFx0Zm9yKGtleSBpbiBiKSBpZHgtLTtcblxuXHRcdFx0cmV0dXJuIGlkeCA9PT0gMDtcblx0XHR9KGNvbnRlbnQubG9jYWxzLCBuZXdDb250ZW50LmxvY2FscykpO1xuXG5cdFx0aWYoIWxvY2FscykgdGhyb3cgbmV3IEVycm9yKCdBYm9ydGluZyBDU1MgSE1SIGR1ZSB0byBjaGFuZ2VkIGNzcy1tb2R1bGVzIGxvY2Fscy4nKTtcblxuXHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0fSk7XG5cblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiaW1wb3J0ICcuL2Nzcy9iYXNlLnNjc3MnO1xuaW1wb3J0IGFwaUNhbGxzIGZyb20gJy4vYXBpQ2FsbHMnO1xuaW1wb3J0IEhvdGVsU2VydmljZSBmcm9tICcuL0hvdGVsLVNlcnZpY2UuanMnO1xuXG53aW5kb3cub25sb2FkID0gZmV0Y2hBbGxEYXRhKCk7XG5cbmxldCBob3RlbFNlcnZpY2U7XG5sZXQgdXNlcklEO1xuXG5pbXBvcnQge2FsbFJvb21DYXJkcywgYm9va0FSb29tQnV0dG9uLCBib29raW5nSGlzdG9yeUJ1dHRvbiwgY3VzdG9tZXJCb29rUm9vbURhdGUsIGN1c3RvbWVySGVhZGVyLCBjdXJyZW50Q3VzdG9tZXJCb29raW5ncywgY3VzdG9tZXJEaXJlY3RvcnlCdXR0b24sIGN1c3RvbWVyQm9va2luZ1NlYXJjaEJhciwgY3VzdG9tZXJOYW1lSW5wdXQsIGN1c3RvbWVyU3RhdHVzLCBjdXN0b21lclZpZXcsIGN1c3RvbWVyVmlld1Jvb21zLCBjdXN0b21lcldlbGNvbWUsIGRyb3BEb3duLCBlbnRlckNyZWRlbnRpYWxzLCBlcnJvck1lc3NhZ2UsIGZpbHRlckNhdGVnb3JpZXMsIGZpbHRlclJlZnJlc2hCdXR0b24sIGZpbHRlclNlY3Rpb24sIGZpbHRlclN1Ym1pdEJ1dHRvbiwgZ3JpZENvbHVtbiwgaG9tZUJ1dHRvbiwgaG90ZWxPdmVydmlld0luZm8sIGhvdGVsT3ZlcnZpZXdUaXRsZSwgbG9naW5CdXR0b24sIG1hbmFnZXJCb29rUm9vbURhdGUsIG1hbmFnZXJCb29rUm9vbUhlYWRlciwgbWFuYWdlQ3VzdG9tZXJCb29raW5ncywgbWFuYWdlclZpZXcsIG1hbmFnZXJWaWV3Q3VzdG9tZXJCb29raW5ncywgcGFzc3dvcmRJbnB1dCwgcGFzdEJvb2tpbmdzRGlzcGxheSwgcmVmcmVzaEN1c3RvbWVyQnV0dG9uLCBzZWFyY2hSb29tc0J1dHRvbiwgc2VhcmNoQ3VzdG9tZXJzRm9yQm9va2luZ0J1dHRvbiwgc2VhcmNoQ3VzdG9tZXJOYW1lRHJvcERvd24sIHNpZ25PdXRCdXR0b24sIHRvZGF5SG90ZWxCb29raW5ncywgdG9kYXlIb3RlbEJvb2tpbmdzVGl0bGUsIHRvZGF5SG90ZWxPdmVydmlldywgdXBkYXRlQ3VzdG9tZXJCb29raW5ncywgdXBjb21pbmdCb29raW5nc0J1dHRvbiwgdXNlcm5hbWVJbnB1dCwgdXBjb21pbmdCb29raW5nc0Rpc3BsYXksIHZpZXdBdmFpbGFibGVSb29tcywgdmlld0N1c3RvbWVyQm9va2luZ3NCdXR0b24sIHZpZXdQYXN0Qm9va2luZ3MsIHZpZXdVcGNvbWluZ0Jvb2tpbmdzfSBmcm9tICcuL0RPTWVsZW1lbnRzLmpzJztcblxuLy9tYWtlIGhlYWRlciBidXR0b25zIGhpZGRlbiBhZnRlciB0aGV5IHdvcmtcblxuXG5sb2dpbkJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHZhbGlkYXRlQ3JlZGVudGlhbHMpO1xudXNlcm5hbWVJbnB1dC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIGNsZWFyRXJyb3JNZXNzYWdlKTtcbnNpZ25PdXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzaWduT3V0KTtcbmN1c3RvbWVyRGlyZWN0b3J5QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZGlzcGxheUJvb2tBUm9vbVZpZXcpO1xuc2VhcmNoQ3VzdG9tZXJzRm9yQm9va2luZ0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGRpc3BsYXlSb29tU2VhcmNoKTtcbnZpZXdBdmFpbGFibGVSb29tcy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGJvb2tBUm9vbSk7XG5ob21lQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZ29Ib21lTWFuYWdlclZpZXcpO1xudmlld0N1c3RvbWVyQm9va2luZ3NCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB2aWV3Q3VzdG9tZXJCb29raW5ncyk7XG5tYW5hZ2VDdXN0b21lckJvb2tpbmdzLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZGVsZXRlQm9va2luZyk7XG5yZWZyZXNoQ3VzdG9tZXJCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCByZWZyZXNoQ3VzdG9tZXJEcm9wRG93bik7XG5ib29rQVJvb21CdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzaG93Qm9va1Jvb21WaWV3KTtcbnNlYXJjaFJvb21zQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZGlzcGxheUF2YWlsYWJsZVJvb21zRm9yQ3VzdG9tZXIpO1xuZmlsdGVyU2VjdGlvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZpbHRlclJvb21zQnlUeXBlKTtcbmZpbHRlclJlZnJlc2hCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjbGVhckZpbHRlcik7XG5hbGxSb29tQ2FyZHMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBib29rUm9vbUN1c3RvbWVyVmlldyk7XG5ib29raW5nSGlzdG9yeUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHZpZXdDdXN0b21lckJvb2tpbmdIaXN0b3J5KTtcbnVwY29taW5nQm9va2luZ3NCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB2aWV3Q3VzdG9tZXJVcGNvbWluZ0Jvb2tpbmdzKTtcblxuc2VhcmNoQ3VzdG9tZXJOYW1lRHJvcERvd24uYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKGV2ZW50KSA9PiB7XG4gIHZpZXdDdXN0b21lckJvb2tpbmdzQnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xuICBzZWFyY2hDdXN0b21lcnNGb3JCb29raW5nQnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xuICBzZWFyY2hDdXN0b21lcnNGb3JCb29raW5nQnV0dG9uLmRpc2FibGVkID0gZmFsc2U7XG4gIHZpZXdDdXN0b21lckJvb2tpbmdzQnV0dG9uLmRpc2FibGVkID0gZmFsc2U7XG4gIHJlZnJlc2hDdXN0b21lckJ1dHRvbi5kaXNhYmxlZCA9IGZhbHNlO1xufSlcbm1hbmFnZXJCb29rUm9vbURhdGUuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKGV2ZW50KSA9PiB7XG4gIGxldCBmb3JtYXREYXRlID0gYCR7ZXZlbnQudGFyZ2V0LnZhbHVlfWAuc3BsaXQoJy0nKTtcbiAgbGV0IGNhbGVuZGFyRGF0ZSA9IGZvcm1hdERhdGUuam9pbignLycpO1xuICBkaXNwbGF5QXZhaWxhYmxlUm9vbXMoY2FsZW5kYXJEYXRlKTtcbn0pO1xuXG5mdW5jdGlvbiBmZXRjaEFsbERhdGEoKSB7XG4gIGlmIChtYW5hZ2VyVmlldy5jbGFzc0xpc3QuY29udGFpbnMoJ2hpZGRlbicpKSB7XG4gICAgc2lnbk91dEJ1dHRvbi5kaXNhYmxlZCA9IHRydWU7XG4gIH1cbiAgbGV0IHJvb21zUHJvbWlzZSA9IGFwaUNhbGxzLmZldGNoRGF0YSgncm9vbXMnKTtcbiAgbGV0IGJvb2tpbmdzUHJvbWlzZSA9IGFwaUNhbGxzLmZldGNoRGF0YSgnYm9va2luZ3MnKTtcbiAgbGV0IHVzZXJzUHJvbWlzZSA9IGFwaUNhbGxzLmZldGNoRGF0YSgndXNlcnMnKTtcblxuICBQcm9taXNlLmFsbChbcm9vbXNQcm9taXNlLCBib29raW5nc1Byb21pc2UsIHVzZXJzUHJvbWlzZV0pXG4gICAgLnRoZW4oZGF0YSA9PiBob3RlbFNlcnZpY2UgPSBuZXcgSG90ZWxTZXJ2aWNlKGRhdGFbMl0sIGRhdGFbMF0sIGRhdGFbMV0pKVxuICAgIC50aGVuKCgpID0+IGxvYWREYXRhKCkpXG4gICAgLmNhdGNoKGVyciA9PiBjb25zb2xlLmxvZyhlcnIpKVxufVxuXG5mdW5jdGlvbiB1cGRhdGVCb29raW5nRGF0YSgpIHtcbiAgbGV0IGJvb2tpbmdzUHJvbWlzZSA9IGFwaUNhbGxzLmZldGNoRGF0YSgnYm9va2luZ3MnKTtcblxuICBQcm9taXNlLmFsbChbYm9va2luZ3NQcm9taXNlXSlcbiAgICAudGhlbihkYXRhID0+IGhvdGVsU2VydmljZS5yYXdCb29raW5nRGF0YSA9IGRhdGFbMF0pXG4gICAgLnRoZW4oKCkgPT4gaG90ZWxTZXJ2aWNlLmFkZEJvb2tpbmdzKCkpXG4gICAgLmNhdGNoKGVyciA9PiBjb25zb2xlLmxvZyhlcnIpKVxufVxuXG5mdW5jdGlvbiBsb2FkRGF0YSgpIHtcbiAgaG90ZWxTZXJ2aWNlLnN0YXJ0KCk7XG59XG5cbmZ1bmN0aW9uIHZhbGlkYXRlQ3JlZGVudGlhbHMoKSB7XG4gIGlmICh1c2VybmFtZUlucHV0LnZhbHVlID09PSAnbWFuYWdlcicgJiYgcGFzc3dvcmRJbnB1dC52YWx1ZSA9PT0gJ292ZXJsb29rMjAyMCcpIHtcbiAgICBjcmVhdGVVc2VyRHJvcERvd24oKTtcbiAgICBkaXNwbGF5SG90ZWxPdmVydmlldygpO1xuICAgIGxldCB0b2RheURhdGUgPSBob3RlbFNlcnZpY2UuZ2V0RGFzaGVkVG9kYXlEYXRlKCk7XG4gICAgbWFuYWdlckJvb2tSb29tRGF0ZS5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgdG9kYXlEYXRlKTtcbiAgICBtYW5hZ2VyQm9va1Jvb21EYXRlLnNldEF0dHJpYnV0ZSgnbWluJywgdG9kYXlEYXRlKTtcbiAgICBob21lQnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xuICAgIGN1c3RvbWVyRGlyZWN0b3J5QnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xuICAgIGVudGVyQ3JlZGVudGlhbHMuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG4gICAgbWFuYWdlclZpZXcuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XG4gICAgc2lnbk91dEJ1dHRvbi5kaXNhYmxlZCA9IGZhbHNlO1xuICAgIGhvbWVCdXR0b24uZGlzYWJsZWQgPSB0cnVlO1xuICAgIGN1c3RvbWVyRGlyZWN0b3J5QnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xuICAgIHRvZGF5SG90ZWxPdmVydmlldy5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcbiAgICB0b2RheUhvdGVsQm9va2luZ3MuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XG4gICAgdXNlcm5hbWVJbnB1dC52YWx1ZSA9ICcnO1xuICAgIHBhc3N3b3JkSW5wdXQudmFsdWUgPSAnJztcbiAgfVxuICBlbHNlIGlmICh1c2VybmFtZUlucHV0LnZhbHVlLmluY2x1ZGVzKCdjdXN0b21lcicpXG4gICYmIHBhc3N3b3JkSW5wdXQudmFsdWUgPT09ICdvdmVybG9vazIwMjAnXG4gICkge1xuICAgIHNpZ25PdXRCdXR0b24uZGlzYWJsZWQgPSBmYWxzZTtcbiAgICBjdXN0b21lclZpZXcuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XG4gICAgYm9va0FSb29tQnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xuICAgIGJvb2tpbmdIaXN0b3J5QnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xuICAgIHVwY29taW5nQm9va2luZ3NCdXR0b24uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XG4gICAgY3VzdG9tZXJIZWFkZXIuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XG4gICAgbGV0IGZpbmRVc2VySUQgPSB1c2VybmFtZUlucHV0LnZhbHVlLnNwbGl0KC8oXFxkKykvKTtcbiAgICB1c2VySUQgPSBmaW5kVXNlcklEWzFdO1xuICAgIGxvYWRVc2VyUGFnZSgpO1xuICB9XG4gIGVsc2Uge1xuICAgIGFsZXJ0TG9nSW5FcnJvcigpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGFsZXJ0TG9nSW5FcnJvcigpIHtcbiAgdXNlcm5hbWVJbnB1dC52YWx1ZSA9ICcnO1xuICBwYXNzd29yZElucHV0LnZhbHVlID0gJyc7XG4gIGxldCBtZXNzYWdlID0gYDxiPlRoZSB1c2VybmFtZSBhbmQvb3IgcGFzc3dvcmQgeW91IGVudGVyZWQgd2FzIG5vdCByZWNvZ25pemVkLiBQbGVhc2UgdHJ5IGFnYWluLjwvYj5gXG4gIGVycm9yTWVzc2FnZS5pbnNlcnRBZGphY2VudEhUTUwoJ2JlZm9yZWVuZCcsIG1lc3NhZ2UpO1xufVxuXG5mdW5jdGlvbiBjbGVhckVycm9yTWVzc2FnZSgpIHtcbiAgZXJyb3JNZXNzYWdlLmlubmVyVGV4dCA9ICcnO1xufVxuXG5mdW5jdGlvbiBsb2FkVXNlclBhZ2UoKSB7XG4gIGhvdGVsU2VydmljZS5hbGxVc2Vycy5mb3JFYWNoKHVzZXIgPT4ge1xuICAgIGlmICh1c2VyLmlkID09IHVzZXJJRCkge1xuICAgICAgZW50ZXJDcmVkZW50aWFscy5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcbiAgICAgIGN1c3RvbWVyVmlldy5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcbiAgICAgIHNpZ25PdXRCdXR0b24uZGlzYWJsZWQgPSBmYWxzZTtcbiAgICAgIGZpbHRlckNhdGVnb3JpZXMuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG4gICAgICBmaWx0ZXJTdWJtaXRCdXR0b24uY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG4gICAgICBsb2FkQ3VzdG9tZXJJbmZvKCk7XG4gICAgICB1c2VybmFtZUlucHV0LnZhbHVlID0gJyc7XG4gICAgICBwYXNzd29yZElucHV0LnZhbHVlID0gJyc7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFsZXJ0TG9nSW5FcnJvcigpO1xuICAgIH1cbiAgfSlcbn1cblxuZnVuY3Rpb24gbG9hZEN1c3RvbWVySW5mbygpIHtcbiAgbGV0IHN0YXR1cztcbiAgY3VzdG9tZXJIZWFkZXIuaW5uZXJIVE1MID0gYDxoMiBjbGFzcz1cImN1c3RvbWVyLXdlbGNvbWVcIj4ke2hvdGVsU2VydmljZS5maW5kVXNlck5hbWUodXNlcklEKS50b1VwcGVyQ2FzZSgpfTwvaDI+YFxuICBsZXQgdG90YWxTcGVudCA9IGhvdGVsU2VydmljZS5jYWxjdWxhdGVUb3RhbFNwZW50KHVzZXJJRCkudG9GaXhlZCgyKTtcbiAgaWYgKHRvdGFsU3BlbnQgPiAxMDAwMCkge1xuICAgIHN0YXR1cyA9ICdnb2xkJztcbiAgfSBlbHNlIGlmICh0b3RhbFNwZW50IDwgMTAwMDAgJiYgdG90YWxTcGVudCA+IDgwMDApIHtcbiAgICBzdGF0dXMgPSAnc2lsdmVyJztcbiAgfSBlbHNlIGlmICh0b3RhbFNwZW50IDwgODAwMCAmJiB0b3RhbFNwZW50ID4gNTAwMCkge1xuICAgIHN0YXR1cyA9ICdicm9uemUnO1xuICB9IGVsc2Uge1xuICAgIHN0YXR1cyA9ICdibHVlJztcbiAgfVxuICBkaXNwbGF5Q3VzdG9tZXJTdGF0cyhzdGF0dXMsIHRvdGFsU3BlbnQpXG59XG5cbmZ1bmN0aW9uIGRpc3BsYXlDdXN0b21lclN0YXRzKHN0YXR1cywgdG90YWxTcGVudCkge1xuICBsZXQgc3RhdHVzSW5mbyA9IGBcbiAgPHAgY2xhc3M9XCJjdXN0b21lci1zdGF0dXMgJHtzdGF0dXN9XCI+PGI+JHtzdGF0dXMudG9VcHBlckNhc2UoKX0gTEVWRUwgUFJFRkVSUkVEPC9iPjwvcD5gO1xuICBjdXN0b21lckhlYWRlci5pbnNlcnRBZGphY2VudEhUTUwoJ2JlZm9yZWVuZCcsIHN0YXR1c0luZm8pO1xufVxuXG5mdW5jdGlvbiBzaG93Qm9va1Jvb21WaWV3KCkge1xuICBsZXQgdG9kYXlEYXRlID0gaG90ZWxTZXJ2aWNlLmdldERhc2hlZFRvZGF5RGF0ZSgpO1xuICBjdXN0b21lckJvb2tSb29tRGF0ZS5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgdG9kYXlEYXRlKTtcbiAgY3VzdG9tZXJCb29rUm9vbURhdGUuc2V0QXR0cmlidXRlKCdtaW4nLCB0b2RheURhdGUpO1xuICBib29rQVJvb21CdXR0b24uZGlzYWJsZWQgPSB0cnVlO1xuICBmaWx0ZXJSZWZyZXNoQnV0dG9uLmRpc2FibGVkID0gdHJ1ZTtcbiAgY3VzdG9tZXJWaWV3Um9vbXMuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XG4gIGJvb2tpbmdIaXN0b3J5QnV0dG9uLmRpc2FibGVkID0gZmFsc2U7XG4gIHVwY29taW5nQm9va2luZ3NCdXR0b24uZGlzYWJsZWQgPSBmYWxzZTtcbiAgdmlld1VwY29taW5nQm9va2luZ3MuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG4gIHZpZXdQYXN0Qm9va2luZ3MuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG59XG5cbmZ1bmN0aW9uIGRpc3BsYXlBdmFpbGFibGVSb29tc0ZvckN1c3RvbWVyKCkge1xuICBmaWx0ZXJSZWZyZXNoQnV0dG9uLmRpc2FibGVkID0gZmFsc2U7XG4gIGxldCBkYXRlID0gY3VzdG9tZXJCb29rUm9vbURhdGUudmFsdWU7XG4gIGxldCBib29rUm9vbURhdGUgPSBkYXRlLnNwbGl0KCctJykuam9pbignLycpO1xuICBsZXQgYXZhaWxhYmxlUm9vbXMgPSBob3RlbFNlcnZpY2UuZmluZEF2YWlsYWJsZVJvb21zKGJvb2tSb29tRGF0ZSk7XG4gIGlmICh0eXBlb2YgYXZhaWxhYmxlUm9vbXMgIT09ICdzdHJpbmcnKSB7XG4gICAgbGV0IHNvcnRlZEF2YWlsYWJsZUN1c3RSb29tcyA9IGhvdGVsU2VydmljZS5zb3J0Qm9va2luZ3NCeURhdGUoYXZhaWxhYmxlUm9vbXMpO1xuICAgIGxldCBhbGxSb29tcyA9IHNvcnRlZEF2YWlsYWJsZUN1c3RSb29tcy5tYXAocm9vbSA9PiB7XG4gICAgICBsZXQgYmlkZXRTdGF0dXM7XG4gICAgICBsZXQgcm9vbVBpY3R1cmU7XG4gICAgICBpZiAocm9vbS5iaWRldCA9PT0gdHJ1ZSkge1xuICAgICAgICBiaWRldFN0YXR1cyA9ICdmYSBmYS1jaGVjayc7XG4gICAgICB9IGVsc2UgaWYgKHJvb20uYmlkZXQgPT09IGZhbHNlKSB7XG4gICAgICAgIGJpZGV0U3RhdHVzID0gJ2ZhIGZhLWJhbic7XG4gICAgICB9XG4gICAgICBpZiAocm9vbS5yb29tVHlwZSA9PT0gJ3Jlc2lkZW50aWFsIHN1aXRlJykge1xuICAgICAgICByb29tUGljdHVyZSA9ICdyb29tMSc7XG4gICAgICB9IGVsc2UgaWYgKHJvb20ucm9vbVR5cGUgPT09ICdzdWl0ZScpIHtcbiAgICAgICAgcm9vbVBpY3R1cmUgPSAncm9vbTInO1xuICAgICAgfSBlbHNlIGlmIChyb29tLnJvb21UeXBlID09PSAnanVuaW9yIHN1aXRlJykge1xuICAgICAgICByb29tUGljdHVyZSA9ICdyb29tNSc7XG4gICAgICB9IGVsc2UgaWYgKHJvb20ucm9vbVR5cGUgPT09ICdzaW5nbGUgcm9vbScpIHtcbiAgICAgICAgcm9vbVBpY3R1cmUgPSAncm9vbTMnO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGBcbiAgICAgIDxzZWN0aW9uIGNsYXNzPVwicm9vbS1ib29raW5nLWNhcmRcIj5cbiAgICAgIDxzZWN0aW9uIGNsYXNzPVwicm9vbS1jYXJkLWhlYWRlclwiPlxuICAgICAgICA8cCBjbGFzcz1cInJvb20tdHlwZVwiPiR7cm9vbS5yb29tVHlwZS50b1VwcGVyQ2FzZSgpfTwvcD5cbiAgICAgIDwvc2VjdGlvbj5cbiAgICAgIDxzZWN0aW9uIGNsYXNzPVwicm9vbS1jYXJkLWJvZHlcIj5cbiAgICAgICAgPGFydGljbGUgY2xhc3M9XCJyb29tLWNhcmQtaW1hZ2VcIj5cbiAgICAgICAgICA8aW1nIHNyYz1cIi4vaW1hZ2VzLyR7cm9vbVBpY3R1cmV9LmpwZ1wiIGFsdD1cIlwiIGNsYXNzPVwicm9vbS1pbWFnZVwiPlxuICAgICAgICA8L2FydGljbGU+XG4gICAgICAgIDxhcnRpY2xlIGNsYXNzPVwicm9vbS1jYXJkLWRldGFpbHNcIj5cbiAgICAgICAgICA8cCBjbGFzcz1cInJvb20taW5mb1wiPjxpIGNsYXNzPVwiZmEgZmEtYmVkXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9pPiAke3Jvb20ubnVtQmVkc30gJHtyb29tLmJlZFNpemUudG9VcHBlckNhc2UoKX08L3A+XG4gICAgICAgICAgPHAgY2xhc3M9XCJyb29tLWluZm9cIj48aSBjbGFzcz1cIiR7YmlkZXRTdGF0dXN9XCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9pPiA8Yj5CSURFVDwvYj48L3A+XG4gICAgICAgICAgPHAgY2xhc3M9XCJyb29tLWluZm9cIj48aSBjbGFzcz1cImZhIGZhLXdpZmlcIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L2k+IEZSRUUgV0lGSTwvcD5cbiAgICAgICAgICA8cCBjbGFzcz1cInJvb20taW5mb1wiPjxpIGNsYXNzPVwiZmEgZmEtY29mZmVlXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9pPiBCUkVBS0ZBU1QgRk9SIDIgPC9wPlxuICAgICAgICA8L2FydGljbGU+XG4gICAgICAgIDxhcnRpY2xlIGNsYXNzPVwicm9vbS1jYXJkLXByaWNlXCI+XG4gICAgICAgICAgPHAgY2xhc3M9XCJyb29tLXByaWNlXCI+JCR7cm9vbS5jb3N0UGVyTmlnaHQudG9GaXhlZCgyKX08L3A+XG4gICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJjdXN0b21lci1ib29rLWJ1dHRvbiAke3Jvb20ubnVtYmVyfVwiIGlkPVwiYnV0dG9uLSR7cm9vbS5udW1iZXJ9XCI+Qk9PSyBST09NPC9idXR0b24+XG4gICAgICAgICAgPHAgY2xhc3M9XCJjYW5jZWxsYXRpb24tcG9saWN5XCI+RlJFRSBDQU5DRUxMQVRJT048L3A+XG4gICAgICAgIDwvYXJ0aWNsZT5cbiAgICAgIDwvc2VjdGlvbj5cbiAgICAgIDwvc2VjdGlvbj5gXG4gICAgfSkuam9pbignICcpXG4gICAgYWxsUm9vbUNhcmRzLmluc2VydEFkamFjZW50SFRNTCgnYWZ0ZXJiZWdpbicsIGFsbFJvb21zKTtcbiAgfSBlbHNlIHtcbiAgICBhbGxSb29tQ2FyZHMuaW5uZXJUZXh0ID0gYCR7YXZhaWxhYmxlUm9vbXN9YDtcbiAgfVxufVxuXG5mdW5jdGlvbiBmaWx0ZXJSb29tc0J5VHlwZShldmVudCkge1xuICBsZXQgY2FsZW5kYXJEYXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Jvb2stcm9vbS1kYXRlJykudmFsdWU7XG4gIGxldCBmb3JtYXRDYWxlbmRhckRhdGUgPSBjYWxlbmRhckRhdGUuc3BsaXQoJy0nKS5qb2luKCcvJyk7XG4gIGxldCBhdmFpbGFibGVSb29tcyA9IGhvdGVsU2VydmljZS5maW5kQXZhaWxhYmxlUm9vbXMoZm9ybWF0Q2FsZW5kYXJEYXRlKTtcbiAgbGV0IHNvcnRlZEF2YWlsYWJsZUN1c3RSb29tcyA9IGhvdGVsU2VydmljZS5zb3J0Qm9va2luZ3NCeURhdGUoYXZhaWxhYmxlUm9vbXMpO1xuICBkZWJ1Z2dlclxuICBpZiAoZXZlbnQudGFyZ2V0LnZhbHVlID09PSAncmVzaWRlbnRpYWwnKSB7XG4gICAgbGV0IHJlc2lkZW50aWFsU3VpdGVzID0gaG90ZWxTZXJ2aWNlLmZpbHRlclJvb21CeVR5cGUoc29ydGVkQXZhaWxhYmxlQ3VzdFJvb21zLCAncmVzaWRlbnRpYWwgc3VpdGUnKTtcbiAgICBkaXNwbGF5RmlsdGVyZWRSb29tcyhyZXNpZGVudGlhbFN1aXRlcyk7XG4gIH0gZWxzZSBpZiAoZXZlbnQudGFyZ2V0LnZhbHVlID09PSAnc3VpdGUnKSB7XG4gICAgbGV0IHN1aXRlcyA9IGhvdGVsU2VydmljZS5maWx0ZXJSb29tQnlUeXBlKHNvcnRlZEF2YWlsYWJsZUN1c3RSb29tcywgJ3N1aXRlJyk7XG4gICAgZGlzcGxheUZpbHRlcmVkUm9vbXMoc3VpdGVzKTtcbiAgfSBlbHNlIGlmIChldmVudC50YXJnZXQudmFsdWUgPT09ICdqdW5pb3InKSB7XG4gICAgbGV0IGp1bmlvclN1aXRlcyA9IGhvdGVsU2VydmljZS5maWx0ZXJSb29tQnlUeXBlKHNvcnRlZEF2YWlsYWJsZUN1c3RSb29tcywgJ2p1bmlvciBzdWl0ZScpO1xuICAgIGRpc3BsYXlGaWx0ZXJlZFJvb21zKGp1bmlvclN1aXRlcyk7XG4gIH0gZWxzZSBpZiAoZXZlbnQudGFyZ2V0LnZhbHVlID09PSAnc2luZ2xlJykge1xuICAgIGxldCBzaW5nbGVSb29tcyA9IGhvdGVsU2VydmljZS5maWx0ZXJSb29tQnlUeXBlKHNvcnRlZEF2YWlsYWJsZUN1c3RSb29tcywgJ3NpbmdsZSByb29tJyk7XG4gICAgZGlzcGxheUZpbHRlcmVkUm9vbXMoc2luZ2xlUm9vbXMpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGRpc3BsYXlGaWx0ZXJlZFJvb21zKHJvb21zKSB7XG4gIGFsbFJvb21DYXJkcy5pbm5lckhUTUwgPSAnJztcbiAgbGV0IHNvcnRlZEZpbHRlcmVkUm9vbXMgPSBob3RlbFNlcnZpY2Uuc29ydEJvb2tpbmdzQnlEYXRlKHJvb21zKTtcbiAgbGV0IGFsbFJvb21zID0gc29ydGVkRmlsdGVyZWRSb29tcy5tYXAocm9vbSA9PiB7XG4gICAgbGV0IGJpZGV0U3RhdHVzO1xuICAgIGxldCByb29tUGljdHVyZTtcbiAgICBpZiAocm9vbS5iaWRldCA9PT0gdHJ1ZSkge1xuICAgICAgYmlkZXRTdGF0dXMgPSAnZmEgZmEtY2hlY2snO1xuICAgIH0gZWxzZSBpZiAocm9vbS5iaWRldCA9PT0gZmFsc2UpIHtcbiAgICAgIGJpZGV0U3RhdHVzID0gJ2ZhIGZhLWJhbic7XG4gICAgfVxuICAgIGlmIChyb29tLnJvb21UeXBlID09PSAncmVzaWRlbnRpYWwgc3VpdGUnKSB7XG4gICAgICByb29tUGljdHVyZSA9ICdyb29tMSc7XG4gICAgfSBlbHNlIGlmIChyb29tLnJvb21UeXBlID09PSAnc3VpdGUnKSB7XG4gICAgICByb29tUGljdHVyZSA9ICdyb29tMic7XG4gICAgfSBlbHNlIGlmIChyb29tLnJvb21UeXBlID09PSAnanVuaW9yIHN1aXRlJykge1xuICAgICAgcm9vbVBpY3R1cmUgPSAncm9vbTUnO1xuICAgIH0gZWxzZSBpZiAocm9vbS5yb29tVHlwZSA9PT0gJ3NpbmdsZSByb29tJykge1xuICAgICAgcm9vbVBpY3R1cmUgPSAncm9vbTMnO1xuICAgIH1cbiAgICByZXR1cm4gYFxuICAgIDxzZWN0aW9uIGNsYXNzPVwicm9vbS1ib29raW5nLWNhcmRcIj5cbiAgICA8c2VjdGlvbiBjbGFzcz1cInJvb20tY2FyZC1oZWFkZXJcIj5cbiAgICAgIDxwIGNsYXNzPVwicm9vbS10eXBlXCI+JHtyb29tLnJvb21UeXBlLnRvVXBwZXJDYXNlKCl9PC9wPlxuICAgIDwvc2VjdGlvbj5cbiAgICA8c2VjdGlvbiBjbGFzcz1cInJvb20tY2FyZC1ib2R5XCI+XG4gICAgICA8YXJ0aWNsZSBjbGFzcz1cInJvb20tY2FyZC1pbWFnZVwiPlxuICAgICAgICA8aW1nIHNyYz1cIi4vaW1hZ2VzLyR7cm9vbVBpY3R1cmV9LmpwZ1wiIGFsdD1cIlwiIGNsYXNzPVwicm9vbS1pbWFnZVwiPlxuICAgICAgPC9hcnRpY2xlPlxuICAgICAgPGFydGljbGUgY2xhc3M9XCJyb29tLWNhcmQtZGV0YWlsc1wiPlxuICAgICAgICA8cCBjbGFzcz1cInJvb20taW5mb1wiPjxpIGNsYXNzPVwiZmEgZmEtYmVkXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9pPiAke3Jvb20ubnVtQmVkc30gJHtyb29tLmJlZFNpemUudG9VcHBlckNhc2UoKX08L3A+XG4gICAgICAgIDxwIGNsYXNzPVwicm9vbS1pbmZvXCI+PGkgY2xhc3M9XCIke2JpZGV0U3RhdHVzfVwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT4gPGI+QklERVQ8L2I+PC9wPlxuICAgICAgICA8cCBjbGFzcz1cInJvb20taW5mb1wiPjxpIGNsYXNzPVwiZmEgZmEtd2lmaVwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT4gRlJFRSBXSUZJPC9wPlxuICAgICAgICA8cCBjbGFzcz1cInJvb20taW5mb1wiPjxpIGNsYXNzPVwiZmEgZmEtY29mZmVlXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9pPiBCUkVBS0ZBU1QgRk9SIDIgPC9wPlxuICAgICAgPC9hcnRpY2xlPlxuICAgICAgPGFydGljbGUgY2xhc3M9XCJyb29tLWNhcmQtcHJpY2VcIj5cbiAgICAgICAgPHAgY2xhc3M9XCJyb29tLXByaWNlXCI+JCR7cm9vbS5jb3N0UGVyTmlnaHQudG9GaXhlZCgyKX08L3A+XG4gICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiY3VzdG9tZXItYm9vay1idXR0b24gJHtyb29tLm51bWJlcn1cIiBpZD1cImJ1dHRvbi0ke3Jvb20ubnVtYmVyfVwiPkJPT0sgUk9PTTwvYnV0dG9uPlxuICAgICAgICA8cCBjbGFzcz1cImNhbmNlbGxhdGlvbi1wb2xpY3lcIj5GUkVFIENBTkNFTExBVElPTjwvcD5cbiAgICAgIDwvYXJ0aWNsZT5cbiAgICA8L3NlY3Rpb24+XG4gICAgPC9zZWN0aW9uPmBcbiAgfSkuam9pbignICcpXG4gIGFsbFJvb21DYXJkcy5pbnNlcnRBZGphY2VudEhUTUwoJ2FmdGVyYmVnaW4nLCBhbGxSb29tcyk7XG59XG5cblxuZnVuY3Rpb24gY2xlYXJGaWx0ZXIoKSB7XG4gIGZpbHRlckNhdGVnb3JpZXMuZWxlbWVudHNbJ3Jlc2lkZW50aWFsJ10uY2hlY2tlZCA9IGZhbHNlO1xuICBmaWx0ZXJDYXRlZ29yaWVzLmVsZW1lbnRzWydzdWl0ZSddLmNoZWNrZWQgPSBmYWxzZTtcbiAgZmlsdGVyQ2F0ZWdvcmllcy5lbGVtZW50c1snanVuaW9yJ10uY2hlY2tlZCA9IGZhbHNlO1xuICBmaWx0ZXJDYXRlZ29yaWVzLmVsZW1lbnRzWydzaW5nbGUnXS5jaGVja2VkID0gZmFsc2U7XG4gIGRpc3BsYXlBdmFpbGFibGVSb29tc0ZvckN1c3RvbWVyKCk7XG59XG5cbmZ1bmN0aW9uIGJvb2tSb29tQ3VzdG9tZXJWaWV3KGV2ZW50KSB7XG4gIGxldCBib29raW5nRGF0ZSA9IGN1c3RvbWVyQm9va1Jvb21EYXRlLnZhbHVlLnNwbGl0KCctJykuam9pbignLycpO1xuICBsZXQgcm9vbU51bWJlciA9IGV2ZW50LnRhcmdldC5jbGFzc0xpc3RbMV07XG4gIGxldCBuZXdCb29raW5nID0gaG90ZWxTZXJ2aWNlLmFkZE5ld0Jvb2tpbmcodXNlcklELCBib29raW5nRGF0ZSwgcm9vbU51bWJlcik7XG4gIHBvc3ROZXdCb29raW5nKG5ld0Jvb2tpbmcsIHJvb21OdW1iZXIpO1xufVxuXG5mdW5jdGlvbiB2aWV3Q3VzdG9tZXJCb29raW5nSGlzdG9yeSgpIHtcbiAgYm9va0FSb29tQnV0dG9uLmRpc2FibGVkID0gZmFsc2U7XG4gIGJvb2tpbmdIaXN0b3J5QnV0dG9uLmRpc2FibGVkID0gdHJ1ZTtcbiAgY3VzdG9tZXJWaWV3Um9vbXMuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG4gIHZpZXdQYXN0Qm9va2luZ3MuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XG4gIHZpZXdVcGNvbWluZ0Jvb2tpbmdzLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICB1cGNvbWluZ0Jvb2tpbmdzQnV0dG9uLmRpc2FibGVkID0gZmFsc2U7XG4gIGRpc3BsYXlQYXN0Qm9va2luZ3MoKTtcbn1cblxuZnVuY3Rpb24gdmlld0N1c3RvbWVyVXBjb21pbmdCb29raW5ncygpIHtcbiAgYm9va0FSb29tQnV0dG9uLmRpc2FibGVkID0gZmFsc2U7XG4gIGJvb2tpbmdIaXN0b3J5QnV0dG9uLmRpc2FibGVkID0gZmFsc2U7XG4gIHVwY29taW5nQm9va2luZ3NCdXR0b24uZGlzYWJsZWQgPSB0cnVlO1xuICBjdXN0b21lclZpZXdSb29tcy5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcbiAgdmlld1Bhc3RCb29raW5ncy5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcbiAgdmlld1VwY29taW5nQm9va2luZ3MuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XG4gIGRpc3BsYXlVcGNvbWluZ0Jvb2tpbmdzKCk7XG59XG5cbmZ1bmN0aW9uIGRpc3BsYXlQYXN0Qm9va2luZ3MoKSB7XG4gIGxldCB0b2RheURhdGUgPSBob3RlbFNlcnZpY2UuZ2V0VG9kYXlEYXRlKCk7XG4gIGxldCBhbGxCb29raW5ncyA9IGhvdGVsU2VydmljZS5maW5kQ3VzdG9tZXJCb29raW5ncygxKTtcbiAgbGV0IGZpbHRlcmVkQm9va2luZ3MgPSBhbGxCb29raW5ncy5maWx0ZXIoYm9va2luZyA9PiB7XG4gICAgcmV0dXJuIGJvb2tpbmcuZGF0ZSA8IHRvZGF5RGF0ZTtcbiAgfSlcbiAgbGV0IHNvcnRlZEZpbHRlcmVkQm9va2luZ3MgPSBob3RlbFNlcnZpY2Uuc29ydEJvb2tpbmdzQnlEYXRlKGZpbHRlcmVkQm9va2luZ3MpO1xuICBsZXQgcGFzdEJvb2tpbmdzID0gc29ydGVkRmlsdGVyZWRCb29raW5ncy5tYXAocm9vbSA9PiB7XG4gICAgbGV0IGJpZGV0U3RhdHVzO1xuICAgIGxldCByb29tUGljdHVyZTtcbiAgICBpZiAocm9vbS5iaWRldCA9PT0gdHJ1ZSkge1xuICAgICAgYmlkZXRTdGF0dXMgPSAnZmEgZmEtY2hlY2snO1xuICAgIH0gZWxzZSBpZiAocm9vbS5iaWRldCA9PT0gZmFsc2UpIHtcbiAgICAgIGJpZGV0U3RhdHVzID0gJ2ZhIGZhLWJhbic7XG4gICAgfVxuICAgIGlmIChyb29tLnJvb21UeXBlID09PSAncmVzaWRlbnRpYWwgc3VpdGUnKSB7XG4gICAgICByb29tUGljdHVyZSA9ICdyb29tMSc7XG4gICAgfSBlbHNlIGlmIChyb29tLnJvb21UeXBlID09PSAnc3VpdGUnKSB7XG4gICAgICByb29tUGljdHVyZSA9ICdyb29tMic7XG4gICAgfSBlbHNlIGlmIChyb29tLnJvb21UeXBlID09PSAnanVuaW9yIHN1aXRlJykge1xuICAgICAgcm9vbVBpY3R1cmUgPSAncm9vbTUnO1xuICAgIH0gZWxzZSBpZiAocm9vbS5yb29tVHlwZSA9PT0gJ3NpbmdsZSByb29tJykge1xuICAgICAgcm9vbVBpY3R1cmUgPSAncm9vbTMnO1xuICAgIH1cbiAgICByZXR1cm4gYFxuICAgIDxzZWN0aW9uIGNsYXNzPVwicm9vbS1ib29raW5nLWNhcmRcIj5cbiAgICA8c2VjdGlvbiBjbGFzcz1cInJvb20tY2FyZC1oZWFkZXJcIj5cbiAgICAgIDxwIGNsYXNzPVwicm9vbS10eXBlXCI+JHtyb29tLnJvb21UeXBlLnRvVXBwZXJDYXNlKCl9IDxzcGFuIGNsYXNzPVwiY2FyZC1kYXRlXCI+IC0gJHtyb29tLmRhdGV9PC9zcGFuPjwvcD5cbiAgICA8L3NlY3Rpb24+XG4gICAgPHNlY3Rpb24gY2xhc3M9XCJyb29tLWNhcmQtYm9keVwiPlxuICAgICAgPGFydGljbGUgY2xhc3M9XCJyb29tLWNhcmQtaW1hZ2VcIj5cbiAgICAgICAgPGltZyBzcmM9XCIuL2ltYWdlcy8ke3Jvb21QaWN0dXJlfS5qcGdcIiBhbHQ9XCJcIiBjbGFzcz1cInJvb20taW1hZ2VcIj5cbiAgICAgIDwvYXJ0aWNsZT5cbiAgICAgIDxhcnRpY2xlIGNsYXNzPVwicm9vbS1jYXJkLWRldGFpbHNcIj5cbiAgICAgICAgPHAgY2xhc3M9XCJyb29tLWluZm9cIj48aSBjbGFzcz1cImZhIGZhLWJlZFwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT4gJHtyb29tLm51bUJlZHN9ICR7cm9vbS5iZWRTaXplLnRvVXBwZXJDYXNlKCl9PC9wPlxuICAgICAgICA8cCBjbGFzcz1cInJvb20taW5mb1wiPjxpIGNsYXNzPVwiJHtiaWRldFN0YXR1c31cIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L2k+IDxiPkJJREVUPC9iPjwvcD5cbiAgICAgICAgPHAgY2xhc3M9XCJyb29tLWluZm9cIj48aSBjbGFzcz1cImZhIGZhLXdpZmlcIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L2k+IEZSRUUgV0lGSTwvcD5cbiAgICAgICAgPHAgY2xhc3M9XCJyb29tLWluZm9cIj48aSBjbGFzcz1cImZhIGZhLWNvZmZlZVwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT4gQlJFQUtGQVNUIEZPUiAyIDwvcD5cbiAgICAgIDwvYXJ0aWNsZT5cbiAgICAgIDxhcnRpY2xlIGNsYXNzPVwicm9vbS1jYXJkLXByaWNlXCI+XG4gICAgICAgIDxwIGNsYXNzPVwicm9vbS1wcmljZVwiPiQke3Jvb20uY29zdFBlck5pZ2h0LnRvRml4ZWQoMil9PC9wPlxuICAgICAgPC9hcnRpY2xlPlxuICAgIDwvc2VjdGlvbj5cbiAgICA8L3NlY3Rpb24+YFxuICB9KS5qb2luKCcnKTtcbiAgcGFzdEJvb2tpbmdzRGlzcGxheS5pbnNlcnRBZGphY2VudEhUTUwoJ2FmdGVyYmVnaW4nLCBwYXN0Qm9va2luZ3MpO1xufVxuXG5mdW5jdGlvbiBkaXNwbGF5VXBjb21pbmdCb29raW5ncygpIHtcbiAgdXBjb21pbmdCb29raW5nc0Rpc3BsYXkuaW5uZXJIVE1MID0gJyc7XG4gIGxldCB0b2RheURhdGUgPSBob3RlbFNlcnZpY2UuZ2V0VG9kYXlEYXRlKCk7XG4gIGxldCBhbGxCb29raW5ncyA9IGhvdGVsU2VydmljZS5maW5kQ3VzdG9tZXJCb29raW5ncyh1c2VySUQpO1xuICBsZXQgZmlsdGVyZWRCb29raW5ncyA9IGFsbEJvb2tpbmdzLmZpbHRlcihib29raW5nID0+IHtcbiAgICByZXR1cm4gYm9va2luZy5kYXRlID49IHRvZGF5RGF0ZTtcbiAgfSlcbiAgaWYgKGZpbHRlcmVkQm9va2luZ3MubGVuZ3RoID4gMCkge1xuICAgIGxldCBwYXN0Qm9va2luZ3MgPSBmaWx0ZXJlZEJvb2tpbmdzLm1hcChyb29tID0+IHtcbiAgICAgIGxldCBiaWRldFN0YXR1cztcbiAgICAgIGxldCByb29tUGljdHVyZTtcbiAgICAgIGlmIChyb29tLmJpZGV0ID09PSB0cnVlKSB7XG4gICAgICAgIGJpZGV0U3RhdHVzID0gJ2ZhIGZhLWNoZWNrJztcbiAgICAgIH0gZWxzZSBpZiAocm9vbS5iaWRldCA9PT0gZmFsc2UpIHtcbiAgICAgICAgYmlkZXRTdGF0dXMgPSAnZmEgZmEtYmFuJztcbiAgICAgIH1cbiAgICAgIGlmIChyb29tLnJvb21UeXBlID09PSAncmVzaWRlbnRpYWwgc3VpdGUnKSB7XG4gICAgICAgIHJvb21QaWN0dXJlID0gJ3Jvb20xJztcbiAgICAgIH0gZWxzZSBpZiAocm9vbS5yb29tVHlwZSA9PT0gJ3N1aXRlJykge1xuICAgICAgICByb29tUGljdHVyZSA9ICdyb29tMic7XG4gICAgICB9IGVsc2UgaWYgKHJvb20ucm9vbVR5cGUgPT09ICdqdW5pb3Igc3VpdGUnKSB7XG4gICAgICAgIHJvb21QaWN0dXJlID0gJ3Jvb201JztcbiAgICAgIH0gZWxzZSBpZiAocm9vbS5yb29tVHlwZSA9PT0gJ3NpbmdsZSByb29tJykge1xuICAgICAgICByb29tUGljdHVyZSA9ICdyb29tMyc7XG4gICAgICB9XG4gICAgICByZXR1cm4gYFxuICAgICAgPHNlY3Rpb24gY2xhc3M9XCJyb29tLWJvb2tpbmctY2FyZFwiPlxuICAgICAgPHNlY3Rpb24gY2xhc3M9XCJyb29tLWNhcmQtaGVhZGVyXCI+XG4gICAgICAgIDxwIGNsYXNzPVwicm9vbS10eXBlXCI+JHtyb29tLnJvb21UeXBlLnRvVXBwZXJDYXNlKCl9PC9wPlxuICAgICAgPC9zZWN0aW9uPlxuICAgICAgPHNlY3Rpb24gY2xhc3M9XCJyb29tLWNhcmQtYm9keVwiPlxuICAgICAgICA8YXJ0aWNsZSBjbGFzcz1cInJvb20tY2FyZC1pbWFnZVwiPlxuICAgICAgICAgIDxpbWcgc3JjPVwiLi9pbWFnZXMvJHtyb29tUGljdHVyZX0uanBnXCIgYWx0PVwiXCIgY2xhc3M9XCJyb29tLWltYWdlXCI+XG4gICAgICAgIDwvYXJ0aWNsZT5cbiAgICAgICAgPGFydGljbGUgY2xhc3M9XCJyb29tLWNhcmQtZGV0YWlsc1wiPlxuICAgICAgICAgIDxwIGNsYXNzPVwicm9vbS1pbmZvXCI+PGkgY2xhc3M9XCJmYSBmYS1iZWRcIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L2k+ICR7cm9vbS5udW1CZWRzfSAke3Jvb20uYmVkU2l6ZS50b1VwcGVyQ2FzZSgpfTwvcD5cbiAgICAgICAgICA8cCBjbGFzcz1cInJvb20taW5mb1wiPjxpIGNsYXNzPVwiJHtiaWRldFN0YXR1c31cIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L2k+IDxiPkJJREVUPC9iPjwvcD5cbiAgICAgICAgICA8cCBjbGFzcz1cInJvb20taW5mb1wiPjxpIGNsYXNzPVwiZmEgZmEtd2lmaVwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT4gRlJFRSBXSUZJPC9wPlxuICAgICAgICAgIDxwIGNsYXNzPVwicm9vbS1pbmZvXCI+PGkgY2xhc3M9XCJmYSBmYS1jb2ZmZWVcIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L2k+IEJSRUFLRkFTVCBGT1IgMiA8L3A+XG4gICAgICAgIDwvYXJ0aWNsZT5cbiAgICAgICAgPGFydGljbGUgY2xhc3M9XCJyb29tLWNhcmQtcHJpY2VcIj5cbiAgICAgICAgICA8cCBjbGFzcz1cInJvb20tcHJpY2VcIj4kJHtyb29tLmNvc3RQZXJOaWdodC50b0ZpeGVkKDIpfTwvcD5cbiAgICAgICAgPC9hcnRpY2xlPlxuICAgICAgPC9zZWN0aW9uPlxuICAgICAgPC9zZWN0aW9uPmBcbiAgICB9KS5qb2luKCcnKTtcbiAgICB1cGNvbWluZ0Jvb2tpbmdzRGlzcGxheS5pbnNlcnRBZGphY2VudEhUTUwoJ2FmdGVyYmVnaW4nLCBwYXN0Qm9va2luZ3MpO1xuICB9IGVsc2Uge1xuICAgIHVwY29taW5nQm9va2luZ3NEaXNwbGF5LmlubmVyVGV4dCA9ICdObyB1cGNvbWluZyBib29raW5ncyB0byBkaXNwbGF5IGF0IHRoaXMgdGltZS4nO1xuICB9XG59XG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cbmZ1bmN0aW9uIGNyZWF0ZVVzZXJEcm9wRG93bigpIHtcbiAgbGV0IHNvcnRDdXN0b21lck5hbWVzID0gaG90ZWxTZXJ2aWNlLmFsbFVzZXJzLnNvcnQoKGEsIGIpID0+IHtcbiAgICByZXR1cm4gYS5uYW1lIDwgYi5uYW1lID8gLTEgOiAxO1xuICB9KVxuICBsZXQgY3VzdG9tZXJOYW1lcyA9IHNvcnRDdXN0b21lck5hbWVzLm1hcCh1c2VyID0+IHtcbiAgICByZXR1cm4gYDxvcHRpb24gdmFsdWU9XCIke3VzZXIubmFtZX1cIj5gXG4gIH0pLmpvaW4oJycpO1xuICBkcm9wRG93bi5pbnNlcnRBZGphY2VudEhUTUwoJ2FmdGVyYmVnaW4nLCBjdXN0b21lck5hbWVzKTtcbn1cblxuZnVuY3Rpb24gcmVmcmVzaEN1c3RvbWVyRHJvcERvd24oKSB7XG4gIHZpZXdDdXN0b21lckJvb2tpbmdzQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICBzZWFyY2hDdXN0b21lcnNGb3JCb29raW5nQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICBjdXN0b21lck5hbWVJbnB1dC52YWx1ZSA9ICcnO1xuICByZWZyZXNoQ3VzdG9tZXJCdXR0b24uZGlzYWJsZWQgPSB0cnVlO1xufVxuXG5mdW5jdGlvbiBnb0hvbWVNYW5hZ2VyVmlldygpIHtcbiAgZ3JpZENvbHVtbi5pbm5lckhUTUwgPSAnJztcbiAgY3VzdG9tZXJOYW1lSW5wdXQudmFsdWUgPSAnJztcbiAgZGlzcGxheUhvdGVsT3ZlcnZpZXcoKTtcbiAgaG9tZUJ1dHRvbi5kaXNhYmxlZCA9IHRydWU7XG4gIGN1c3RvbWVyRGlyZWN0b3J5QnV0dG9uLmRpc2FibGVkID0gZmFsc2U7XG4gIHRvZGF5SG90ZWxPdmVydmlldy5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcbiAgdG9kYXlIb3RlbEJvb2tpbmdzLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xuICBtYW5hZ2VDdXN0b21lckJvb2tpbmdzLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICBjdXN0b21lckJvb2tpbmdTZWFyY2hCYXIuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG4gIHZpZXdBdmFpbGFibGVSb29tcy5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcbn1cblxuZnVuY3Rpb24gZGlzcGxheUhvdGVsT3ZlcnZpZXcoKSB7XG4gIGxldCBkYXRlID0gaG90ZWxTZXJ2aWNlLmdldFRvZGF5RGF0ZSgpO1xuICBob3RlbE92ZXJ2aWV3VGl0bGUuaW5uZXJUZXh0ID0gYEhvdGVsIE92ZXJ2aWV3IGZvciAke2RhdGV9YDtcbiAgbGV0IHRvZGF5UmV2ZW51ZSA9IGhvdGVsU2VydmljZS5jYWxjdWxhdGVUb3RhbFJldmVudWUoZGF0ZSk7XG4gIGxldCBhdmFpbGFibGVSb29tcyA9IGhvdGVsU2VydmljZS5jYWxjdWxhdGVOdW1iZXJBdmFpbGFibGVSb29tcyhkYXRlKTtcbiAgbGV0IHBlcmNlbnRPY2N1cGllZCA9IGhvdGVsU2VydmljZS5jYWxjdWxhdGVQZXJjZW50YWdlT2NjdXBpZWQoZGF0ZSk7XG4gIGxldCBvdmVydmlldyA9IGBcbiAgICAgIDxiPlRvZGF5IFJldmVudWU6PC9iPiAmbmJzcDsgJCR7dG9kYXlSZXZlbnVlfSAmbmJzcDsgJm5ic3A7ICZuYnNwOyAmbmJzcDtcbiAgICAgIDxiPlJvb21zIEF2YWlsYWJsZTo8L2I+ICZuYnNwOyAke2F2YWlsYWJsZVJvb21zfSAmbmJzcDsgJm5ic3A7ICZuYnNwOyAmbmJzcDtcbiAgICAgIDxiPlBlcmNlbnRhZ2UgT2NjdXBpZWQ6PC9iPiAmbmJzcDsgJHtwZXJjZW50T2NjdXBpZWR9JVxuICAgIGA7XG4gIGhvdGVsT3ZlcnZpZXdJbmZvLmlubmVySFRNTCA9IG92ZXJ2aWV3O1xuICBkaXNwbGF5VG9kYXlCb29raW5ncygpO1xufVxuXG5mdW5jdGlvbiBkaXNwbGF5VG9kYXlCb29raW5ncygpIHtcbiAgbGV0IGRhdGUgPSBob3RlbFNlcnZpY2UuZ2V0VG9kYXlEYXRlKCk7XG4gIHRvZGF5SG90ZWxCb29raW5nc1RpdGxlLmlubmVySFRNTCA9ICcnO1xuICBsZXQgYm9va2luZ3MgPSBob3RlbFNlcnZpY2UuZmluZEJvb2tpbmdzKGRhdGUpO1xuICBpZiAodHlwZW9mIGJvb2tpbmdzICE9PSAnc3RyaW5nJykge1xuICAgIGxldCBzb3J0ZWRCb29raW5ncyA9IGhvdGVsU2VydmljZS5zb3J0Qm9va2luZ3NCeVJvb21OdW1iZXIoYm9va2luZ3MpO1xuICAgIGxldCB0b2RheXNCb29raW5nSW5mbyA9IHNvcnRlZEJvb2tpbmdzLm1hcChib29raW5nID0+IHtcbiAgICAgIHJldHVybiBgPGFydGljbGUgY2xhc3M9XCJtYW5hZ2VyLWJvb2tpbmctY2FyZFwiIGlkPVwiJHtib29raW5nLmlkfVwiPlxuICAgICAgPGJyPlxuICAgICAgPGRpdiBjbGFzcz1cImdyaWQtY29udGFpbmVyXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJncmlkLWl0ZW1cIj4ke2Jvb2tpbmcuZGF0ZX08L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImdyaWQtaXRlbVwiPiR7Ym9va2luZy5ndWVzdE5hbWV9PC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJncmlkLWl0ZW1cIj4ke2Jvb2tpbmcucm9vbVR5cGUudG9VcHBlckNhc2UoKX08L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImdyaWQtaXRlbVwiPiR7Ym9va2luZy5yb29tTnVtYmVyfTwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiZ3JpZC1pdGVtXCI+JHtib29raW5nLmJlZFNpemUudG9VcHBlckNhc2UoKX08L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImdyaWQtaXRlbVwiPiQke2Jvb2tpbmcuY29zdFBlck5pZ2h0LnRvRml4ZWQoMil9PC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJncmlkLWl0ZW1cIj4ke2Jvb2tpbmcuaWR9PC9kaXY+XG4gICAgICA8L2Rpdj5gXG4gICAgfSkuam9pbignICcpXG4gICAgdG9kYXlIb3RlbEJvb2tpbmdzLmluc2VydEFkamFjZW50SFRNTCgnYmVmb3JlZW5kJywgdG9kYXlzQm9va2luZ0luZm8pO1xuICAgIHRvZGF5SG90ZWxCb29raW5nc1RpdGxlLmlubmVyVGV4dCA9IGBCb29raW5ncyBmb3IgJHtkYXRlfWA7XG4gIH0gZWxzZSB7XG4gICAgdG9kYXlIb3RlbEJvb2tpbmdzVGl0bGUuaW5uZXJUZXh0ID0gJ0Jvb2tpbmdzIGZvciAtLSc7XG4gICAgdG9kYXlIb3RlbEJvb2tpbmdzLmlubmVySFRNTCA9IGA8aDUgY2xhc3M9XCJuby1ib29raW5nc1wiPiR7Ym9va2luZ3N9PC9oNT5gO1xuICB9XG59XG5cbmZ1bmN0aW9uIGRpc3BsYXlCb29rQVJvb21WaWV3KCkge1xuICByZWZyZXNoQ3VzdG9tZXJCdXR0b24uZGlzYWJsZWQgPSB0cnVlO1xuICBob21lQnV0dG9uLmRpc2FibGVkID0gZmFsc2U7XG4gIGN1c3RvbWVyRGlyZWN0b3J5QnV0dG9uLmRpc2FibGVkID0gdHJ1ZTtcbiAgdmlld0N1c3RvbWVyQm9va2luZ3NCdXR0b24uY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG4gIHNlYXJjaEN1c3RvbWVyc0ZvckJvb2tpbmdCdXR0b24uY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG4gIHRvZGF5SG90ZWxPdmVydmlldy5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcbiAgdG9kYXlIb3RlbEJvb2tpbmdzLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICBjdXN0b21lckJvb2tpbmdTZWFyY2hCYXIuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XG59XG5cbmZ1bmN0aW9uIGRpc3BsYXlSb29tU2VhcmNoKCkge1xuICB1cGRhdGVDdXN0b21lckJvb2tpbmdzLmlubmVySFRNTCA9ICcnO1xuICB2aWV3Q3VzdG9tZXJCb29raW5nc0J1dHRvbi5kaXNhYmxlZCA9IGZhbHNlO1xuICBtYW5hZ2VDdXN0b21lckJvb2tpbmdzLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICB1c2VySUQgPSBob3RlbFNlcnZpY2UuZmluZFVzZXJJZChjdXN0b21lck5hbWVJbnB1dC52YWx1ZSk7XG4gIHZpZXdBdmFpbGFibGVSb29tcy5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcbiAgbWFuYWdlckJvb2tSb29tSGVhZGVyLmlubmVyVGV4dCA9IGBCb29rIGEgUm9vbSBmb3IgJHtjdXN0b21lck5hbWVJbnB1dC52YWx1ZX0gb25gO1xuICBzZWFyY2hDdXN0b21lcnNGb3JCb29raW5nQnV0dG9uLmRpc2FibGVkID0gdHJ1ZTtcbn1cblxuZnVuY3Rpb24gZGlzcGxheUF2YWlsYWJsZVJvb21zKGRhdGUpIHtcbiAgdmlld0F2YWlsYWJsZVJvb21zLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xuICBtYW5hZ2VDdXN0b21lckJvb2tpbmdzLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xuICBsZXQgZ3JpZENvbHVtbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdncmlkLWNvbHVtbicpO1xuICBncmlkQ29sdW1uLmlubmVySFRNTCA9ICcnO1xuICBsZXQgYXZhaWxhYmxlUm9vbXMgPSBob3RlbFNlcnZpY2UuZmluZEF2YWlsYWJsZVJvb21zKGRhdGUpO1xuICBpZiAodHlwZW9mIGF2YWlsYWJsZVJvb21zICE9PSAnc3RyaW5nJykge1xuICAgIGxldCBzb3J0ZWRBdmFpbGFibGVSb29tcyA9IGhvdGVsU2VydmljZS5zb3J0Qm9va2luZ3NCeURhdGUoYXZhaWxhYmxlUm9vbXMpO1xuICAgIGxldCBhbGxSb29tcyA9IHNvcnRlZEF2YWlsYWJsZVJvb21zLm1hcChyb29tID0+IHtcbiAgICAgIHJldHVybiBgXG4gICAgICA8ZGl2IGNsYXNzPVwiZ3JpZC1yb3dcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImdyaWQtaXRlbVwiPiR7cm9vbS5yb29tVHlwZS50b1VwcGVyQ2FzZSgpfTwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiZ3JpZC1pdGVtXCI+JHtyb29tLm51bWJlcn08L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImdyaWQtaXRlbVwiPiR7cm9vbS5iZWRTaXplLnRvVXBwZXJDYXNlKCl9PC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJncmlkLWl0ZW1cIj4ke3Jvb20uYmlkZXQudG9TdHJpbmcoKS50b1VwcGVyQ2FzZSgpfTwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiZ3JpZC1pdGVtXCI+JCR7cm9vbS5jb3N0UGVyTmlnaHQudG9GaXhlZCgyKX08L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImdyaWQtaXRlbVwiPlxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJvb2stcm9vbSAke3Jvb20ubnVtYmVyfVwiIGlkPVwiYnV0dG9uLSR7cm9vbS5udW1iZXJ9XCI+Qk9PSyBST09NPC9idXR0b24+PC9kaXY+XG4gICAgICA8L2Rpdj5gXG4gICAgfSkuam9pbignICcpXG4gICAgZ3JpZENvbHVtbi5pbnNlcnRBZGphY2VudEhUTUwoJ2JlZm9yZWVuZCcsIGFsbFJvb21zKTtcbiAgfSBlbHNlIHtcbiAgICBncmlkQ29sdW1uLmlubmVySFRNTCA9IGA8aDUgY2xhc3M9XCJuby1ib29raW5nc1wiPiR7YXZhaWxhYmxlUm9vbXN9PC9oNT5gO1xuICB9XG59XG5cbmZ1bmN0aW9uIHZpZXdDdXN0b21lckJvb2tpbmdzKCkge1xuICByZWZyZXNoQ3VzdG9tZXJCdXR0b24uZGlzYWJsZWQgPSBmYWxzZTtcbiAgbGV0IGN1c3RvbWVyQm9va2luZ3NIZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY3VzdG9tZXItYm9va2luZ3MtaGVhZGVyJyk7XG4gIGxldCB1c2VybmFtZSA9IHNlYXJjaEN1c3RvbWVyTmFtZURyb3BEb3duLnZhbHVlO1xuICBjdXN0b21lckJvb2tpbmdzSGVhZGVyLmlubmVyVGV4dCA9IGBCb29raW5ncyBmb3IgJHt1c2VybmFtZX1gO1xuICBkaXNwbGF5Q3VzdG9tZXJCb29raW5nc1NlY3Rpb24oKTtcbiAgbGV0IHVzZXJJRCA9IGhvdGVsU2VydmljZS5maW5kVXNlcklkKHVzZXJuYW1lKTtcbiAgbGV0IGJvb2tpbmdzID0gaG90ZWxTZXJ2aWNlLmZpbmRDdXN0b21lckJvb2tpbmdzKHVzZXJJRCk7XG4gIGxldCBzb3J0ZWRCb29raW5ncyA9IGhvdGVsU2VydmljZS5zb3J0Qm9va2luZ3NCeURhdGUoYm9va2luZ3MpO1xuICAoY29uc29sZS5sb2coJ2Jvb2tpbmdzIG51bScsIHNvcnRlZEJvb2tpbmdzLmxlbmd0aCkpXG4gIGlmIChzb3J0ZWRCb29raW5ncy5sZW5ndGggPiAwKSB7XG4gICAgbGV0IHRvZGF5c0Jvb2tpbmdJbmZvID0gc29ydGVkQm9va2luZ3MubWFwKGJvb2tpbmcgPT4ge1xuICAgICAgcmV0dXJuIGBcbiAgICAgIDxkaXYgY2xhc3M9XCJncmlkLXJvd1wiIGlkPVwiJHtib29raW5nLmlkfVwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiZ3JpZC1pdGVtXCI+JHtib29raW5nLmRhdGV9PC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJncmlkLWl0ZW1cIj4ke2Jvb2tpbmcuaWR9PC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJncmlkLWl0ZW1cIj4ke2Jvb2tpbmcucm9vbVR5cGUudG9VcHBlckNhc2UoKX08L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImdyaWQtaXRlbVwiPiR7Ym9va2luZy5yb29tTnVtYmVyfTwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiZ3JpZC1pdGVtXCI+JHtib29raW5nLmJlZFNpemUudG9VcHBlckNhc2UoKX08L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImdyaWQtaXRlbVwiPiR7Ym9va2luZy5iaWRldC50b1N0cmluZygpLnRvVXBwZXJDYXNlKCl9PC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJncmlkLWl0ZW1cIj4kJHtib29raW5nLmNvc3RQZXJOaWdodC50b0ZpeGVkKDIpfTwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiZ3JpZC1pdGVtXCI+PGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJkZWxldGUtYm9va2luZy1idXR0b24gJHtib29raW5nLmlkfSAke3R5cGVvZiBib29raW5nLmlkfVwiIGlkPVwicm9vbS0ke2Jvb2tpbmcuaWR9XCI+REVMRVRFIEJPT0tJTkc8L2J1dHRvbj48L2Rpdj5cbiAgICAgIDwvZGl2PmBcbiAgICB9KS5qb2luKCcgJylcbiAgICB1cGRhdGVDdXN0b21lckJvb2tpbmdzLmluc2VydEFkamFjZW50SFRNTCgnYmVmb3JlZW5kJywgdG9kYXlzQm9va2luZ0luZm8pO1xuICB9XG59XG5cbmZ1bmN0aW9uIGRpc3BsYXlDdXN0b21lckJvb2tpbmdzU2VjdGlvbigpIHtcbiAgcmVmcmVzaEN1c3RvbWVyQnV0dG9uLmRpc2FibGVkID0gZmFsc2U7XG4gIHVwZGF0ZUN1c3RvbWVyQm9va2luZ3MuaW5uZXJIVE1MID0gYDxkaXYgY2xhc3M9XCJncmlkLWNvbnRhaW5lclwiIGlkPVwiY3VycmVudC1jdXN0b21lci1ib29raW5nc1wiPmA7XG4gIHZpZXdDdXN0b21lckJvb2tpbmdzQnV0dG9uLmRpc2FibGVkID0gdHJ1ZTtcbiAgc2VhcmNoQ3VzdG9tZXJzRm9yQm9va2luZ0J1dHRvbi5kaXNhYmxlZCA9IGZhbHNlO1xuICBtYW5hZ2VDdXN0b21lckJvb2tpbmdzLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xuICB2aWV3QXZhaWxhYmxlUm9vbXMuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG59XG5cbmZ1bmN0aW9uIGJvb2tBUm9vbShldmVudCkge1xuICBpZiAoZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnYm9vay1yb29tJykpIHtcbiAgICBsZXQgcm9vbU51bWJlciA9IGV2ZW50LnRhcmdldC5jbGFzc0xpc3RbMV07XG4gICAgbGV0IGNhbGVuZGFyRGF0ZSA9IG1hbmFnZXJCb29rUm9vbURhdGUudmFsdWU7XG4gICAgbGV0IGJvb2tpbmdEYXRlID0gY2FsZW5kYXJEYXRlLnNwbGl0KCctJykuam9pbignLycpO1xuICAgIGxldCBuZXdCb29raW5nID0gaG90ZWxTZXJ2aWNlLmFkZE5ld0Jvb2tpbmcodXNlcklELCBib29raW5nRGF0ZSwgcm9vbU51bWJlcik7XG4gICAgcG9zdE5ld0Jvb2tpbmcobmV3Qm9va2luZywgcm9vbU51bWJlcik7XG4gIH1cbn1cblxuZnVuY3Rpb24gcG9zdE5ld0Jvb2tpbmcobmV3Qm9va2luZywgcm9vbU51bWJlcikge1xuICBsZXQgb25TdWNjZXNzID0gKCkgPT4ge1xuICAgIGxldCBib29rZWRCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgYnV0dG9uLSR7cm9vbU51bWJlcn1gKVxuICAgIGJvb2tlZEJ1dHRvbi5pbm5lclRleHQgPSAnQk9PS0VEISc7XG4gICAgYm9va2VkQnV0dG9uLmRpc2FibGVkID0gdHJ1ZTtcbiAgICB1cGRhdGVCb29raW5nRGF0YSgpO1xuICB9XG4gIGFwaUNhbGxzLnBvc3REYXRhKG5ld0Jvb2tpbmcsIG9uU3VjY2Vzcyk7XG59XG5cbmZ1bmN0aW9uIGRlbGV0ZUJvb2tpbmcoZXZlbnQpIHtcbiAgbGV0IG9uU3VjY2VzcyA9ICgpID0+IHtcbiAgICB1cGRhdGVEZWxldGVkQm9va2luZ3MoZXZlbnQudGFyZ2V0LmNsYXNzTGlzdFsxXSk7XG4gIH1cbiAgbGV0IGRlbGV0ZUJvZHk7XG4gIGlmIChldmVudC50YXJnZXQuY2xhc3NMaXN0WzJdID09PSAnbnVtYmVyJykge1xuICAgIGRlbGV0ZUJvZHkgPSB7aWQ6IHBhcnNlSW50KGV2ZW50LnRhcmdldC5jbGFzc0xpc3RbMV0pfVxuICB9IGVsc2Uge1xuICAgIGRlbGV0ZUJvZHkgPSB7aWQ6IGV2ZW50LnRhcmdldC5jbGFzc0xpc3RbMV19O1xuICB9XG4gIGlmIChldmVudC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdkZWxldGUtYm9va2luZy1idXR0b24nKSkge1xuICAgIGFwaUNhbGxzLmRlbGV0ZURhdGEoZGVsZXRlQm9keSwgb25TdWNjZXNzKTtcbiAgICB1cGRhdGVCb29raW5nRGF0YSgpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZURlbGV0ZWRCb29raW5ncyhib29raW5nSUQpIHtcbiAgZmFkZU91dEVmZmVjdChib29raW5nSUQpO1xufVxuXG5mdW5jdGlvbiBmYWRlT3V0RWZmZWN0KGJvb2tpbmdJRCkge1xuICBsZXQgZmFkZVRhcmdldCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGJvb2tpbmdJRCk7XG4gIGxldCBmYWRlRWZmZWN0ID0gc2V0SW50ZXJ2YWwoZnVuY3Rpb24gKCkge1xuICAgIGlmICghZmFkZVRhcmdldC5zdHlsZS5vcGFjaXR5KSB7XG4gICAgICBmYWRlVGFyZ2V0LnN0eWxlLm9wYWNpdHkgPSAxO1xuICAgIH1cbiAgICBpZiAoZmFkZVRhcmdldC5zdHlsZS5vcGFjaXR5ID4gMCkge1xuICAgICAgZmFkZVRhcmdldC5zdHlsZS5vcGFjaXR5IC09IDAuMTtcbiAgICB9IGVsc2Uge1xuICAgICAgY2xlYXJJbnRlcnZhbChmYWRlRWZmZWN0KTtcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGJvb2tpbmdJRCkucmVtb3ZlKCk7XG4gICAgfVxuICB9LCAxMDApO1xufVxuXG5mdW5jdGlvbiBzaWduT3V0KCkge1xuICBzaWduT3V0QnV0dG9uLmRpc2FibGVkID0gdHJ1ZTtcbiAgY3VzdG9tZXJEaXJlY3RvcnlCdXR0b24uZGlzYWJsZWQgPSBmYWxzZTtcbiAgZ3JpZENvbHVtbi5pbm5lckhUTUwgPSAnJztcbiAgY3VzdG9tZXJOYW1lSW5wdXQudmFsdWUgPSAnJztcbiAgbWFuYWdlclZpZXcuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG4gIHZpZXdBdmFpbGFibGVSb29tcy5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcbiAgY3VzdG9tZXJCb29raW5nU2VhcmNoQmFyLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICBlbnRlckNyZWRlbnRpYWxzLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xuICB0b2RheUhvdGVsQm9va2luZ3MuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG4gIGhvbWVCdXR0b24uY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG4gIGN1c3RvbWVyRGlyZWN0b3J5QnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICBjdXN0b21lclZpZXcuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG4gIGNsZWFyRXJyb3JNZXNzYWdlKCk7XG4gIGJvb2tBUm9vbUJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcbiAgdXBjb21pbmdCb29raW5nc0J1dHRvbi5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcbiAgY3VzdG9tZXJIZWFkZXIuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG4gIGJvb2tpbmdIaXN0b3J5QnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==