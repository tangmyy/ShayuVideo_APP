"use weex:vue";
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 171);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */,
/* 1 */
/*!***********************************************************************************!*\
  !*** C:/Users/TAOER/Desktop/ShayuVideo/ShayuVideoAPP/main.js?{"type":"appStyle"} ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("Vue.prototype.__$appStyle__ = {}\nVue.prototype.__merge_style && Vue.prototype.__merge_style(__webpack_require__(/*! ./App.vue?vue&type=style&index=0&lang=css */ 2).default,Vue.prototype.__$appStyle__)\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0EsMkRBQTJELG1CQUFPLENBQUMsa0RBQTJDIiwiZmlsZSI6IjEuanMiLCJzb3VyY2VzQ29udGVudCI6WyJWdWUucHJvdG90eXBlLl9fJGFwcFN0eWxlX18gPSB7fVxuVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlICYmIFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZShyZXF1aXJlKFwiLi9BcHAudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3NcIikuZGVmYXVsdCxWdWUucHJvdG90eXBlLl9fJGFwcFN0eWxlX18pXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///1\n");

/***/ }),
/* 2 */
/*!***********************************************************************************************!*\
  !*** C:/Users/TAOER/Desktop/ShayuVideo/ShayuVideoAPP/App.vue?vue&type=style&index=0&lang=css ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-0-1!./node_modules/postcss-loader/src??ref--10-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./App.vue?vue&type=style&index=0&lang=css */ 3);
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 3 */
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-0-1!./node_modules/postcss-loader/src??ref--10-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!C:/Users/TAOER/Desktop/ShayuVideo/ShayuVideoAPP/App.vue?vue&type=style&index=0&lang=css ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  ".activate-line": {
    "": {
      "backgroundColor": [
        "#ffffff",
        0,
        0,
        1
      ]
    }
  },
  "@VERSION": 2
}

/***/ }),
/* 4 */
/*!*******************************************************************!*\
  !*** ./node_modules/@dcloudio/uni-cli-shared/lib/uni-polyfill.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

if (typeof Promise !== 'undefined' && !Promise.prototype.finally) {
  Promise.prototype.finally = function (callback) {
    var promise = this.constructor;
    return this.then(function (value) {
      return promise.resolve(callback()).then(function () {
        return value;
      });
    }, function (reason) {
      return promise.resolve(callback()).then(function () {
        throw reason;
      });
    });
  };
}
if (typeof uni !== 'undefined' && uni && uni.requireGlobal) {
  var global = uni.requireGlobal();
  ArrayBuffer = global.ArrayBuffer;
  Int8Array = global.Int8Array;
  Uint8Array = global.Uint8Array;
  Uint8ClampedArray = global.Uint8ClampedArray;
  Int16Array = global.Int16Array;
  Uint16Array = global.Uint16Array;
  Int32Array = global.Int32Array;
  Uint32Array = global.Uint32Array;
  Float32Array = global.Float32Array;
  Float64Array = global.Float64Array;
  BigInt64Array = global.BigInt64Array;
  BigUint64Array = global.BigUint64Array;
}

/***/ }),
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */
/*!**********************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode, /* vue-cli only */
  components, // fixed by xxxxxx auto components
  renderjs // fixed by xxxxxx renderjs
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // fixed by xxxxxx auto components
  if (components) {
    if (!options.components) {
      options.components = {}
    }
    var hasOwn = Object.prototype.hasOwnProperty
    for (var name in components) {
      if (hasOwn.call(components, name) && !hasOwn.call(options.components, name)) {
        options.components[name] = components[name]
      }
    }
  }
  // fixed by xxxxxx renderjs
  if (renderjs) {
    if(typeof renderjs.beforeCreate === 'function'){
			renderjs.beforeCreate = [renderjs.beforeCreate]
		}
    (renderjs.beforeCreate || (renderjs.beforeCreate = [])).unshift(function() {
      this[renderjs.__module] = this
    });
    (options.mixins || (options.mixins = [])).push(renderjs)
  }

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */,
/* 45 */,
/* 46 */,
/* 47 */,
/* 48 */,
/* 49 */,
/* 50 */,
/* 51 */,
/* 52 */,
/* 53 */,
/* 54 */,
/* 55 */,
/* 56 */,
/* 57 */,
/* 58 */,
/* 59 */,
/* 60 */,
/* 61 */,
/* 62 */,
/* 63 */,
/* 64 */,
/* 65 */,
/* 66 */,
/* 67 */,
/* 68 */,
/* 69 */,
/* 70 */,
/* 71 */,
/* 72 */,
/* 73 */,
/* 74 */,
/* 75 */,
/* 76 */,
/* 77 */,
/* 78 */,
/* 79 */,
/* 80 */,
/* 81 */,
/* 82 */,
/* 83 */,
/* 84 */,
/* 85 */,
/* 86 */,
/* 87 */,
/* 88 */,
/* 89 */,
/* 90 */,
/* 91 */,
/* 92 */,
/* 93 */,
/* 94 */,
/* 95 */,
/* 96 */,
/* 97 */,
/* 98 */,
/* 99 */,
/* 100 */,
/* 101 */,
/* 102 */,
/* 103 */,
/* 104 */,
/* 105 */,
/* 106 */,
/* 107 */,
/* 108 */,
/* 109 */,
/* 110 */,
/* 111 */,
/* 112 */,
/* 113 */,
/* 114 */,
/* 115 */,
/* 116 */,
/* 117 */,
/* 118 */,
/* 119 */,
/* 120 */,
/* 121 */,
/* 122 */,
/* 123 */,
/* 124 */,
/* 125 */,
/* 126 */,
/* 127 */,
/* 128 */,
/* 129 */
/*!*********************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = formatLog;
exports.log = log;
function typof(v) {
  var s = Object.prototype.toString.call(v);
  return s.substring(8, s.length - 1);
}
function isDebugMode() {
  /* eslint-disable no-undef */
  return typeof __channelId__ === 'string' && __channelId__;
}
function jsonStringifyReplacer(k, p) {
  switch (typof(p)) {
    case 'Function':
      return 'function() { [native code] }';
    default:
      return p;
  }
}
function log(type) {
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }
  console[type].apply(console, args);
}
function formatLog() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }
  var type = args.shift();
  if (isDebugMode()) {
    args.push(args.pop().replace('at ', 'uni-app:///'));
    return console[type].apply(console, args);
  }
  var msgs = args.map(function (v) {
    var type = Object.prototype.toString.call(v).toLowerCase();
    if (type === '[object object]' || type === '[object array]') {
      try {
        v = '---BEGIN:JSON---' + JSON.stringify(v, jsonStringifyReplacer) + '---END:JSON---';
      } catch (e) {
        v = type;
      }
    } else {
      if (v === null) {
        v = '---NULL---';
      } else if (v === undefined) {
        v = '---UNDEFINED---';
      } else {
        var vType = typof(v).toUpperCase();
        if (vType === 'NUMBER' || vType === 'BOOLEAN') {
          v = '---BEGIN:' + vType + '---' + v + '---END:' + vType + '---';
        } else {
          v = String(v);
        }
      }
    }
    return v;
  });
  var msg = '';
  if (msgs.length > 1) {
    var lastMsg = msgs.pop();
    msg = msgs.join('---COMMA---');
    if (lastMsg.indexOf(' at ') === 0) {
      msg += lastMsg;
    } else {
      msg += '---COMMA---' + lastMsg;
    }
  } else {
    msg = msgs[0];
  }
  console[type](msg);
}

/***/ }),
/* 130 */
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}
module.exports = _interopRequireDefault, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 131 */
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/toConsumableArray.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithoutHoles = __webpack_require__(/*! ./arrayWithoutHoles.js */ 132);
var iterableToArray = __webpack_require__(/*! ./iterableToArray.js */ 134);
var unsupportedIterableToArray = __webpack_require__(/*! ./unsupportedIterableToArray.js */ 135);
var nonIterableSpread = __webpack_require__(/*! ./nonIterableSpread.js */ 136);
function _toConsumableArray(arr) {
  return arrayWithoutHoles(arr) || iterableToArray(arr) || unsupportedIterableToArray(arr) || nonIterableSpread();
}
module.exports = _toConsumableArray, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 132 */
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeToArray = __webpack_require__(/*! ./arrayLikeToArray.js */ 133);
function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return arrayLikeToArray(arr);
}
module.exports = _arrayWithoutHoles, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 133 */
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayLikeToArray.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }
  return arr2;
}
module.exports = _arrayLikeToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 134 */
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/iterableToArray.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
module.exports = _iterableToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 135 */
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeToArray = __webpack_require__(/*! ./arrayLikeToArray.js */ 133);
function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return arrayLikeToArray(o, minLen);
}
module.exports = _unsupportedIterableToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 136 */
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/nonIterableSpread.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
module.exports = _nonIterableSpread, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 137 */
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(o) {
  "@babel/helpers - typeof";

  return (module.exports = _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
    return typeof o;
  } : function (o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, module.exports.__esModule = true, module.exports["default"] = module.exports), _typeof(o);
}
module.exports = _typeof, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 138 */
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/defineProperty.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toPropertyKey = __webpack_require__(/*! ./toPropertyKey.js */ 139);
function _defineProperty(obj, key, value) {
  key = toPropertyKey(key);
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
module.exports = _defineProperty, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 139 */
/*!**************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/toPropertyKey.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ./typeof.js */ 137)["default"];
var toPrimitive = __webpack_require__(/*! ./toPrimitive.js */ 140);
function toPropertyKey(t) {
  var i = toPrimitive(t, "string");
  return "symbol" == _typeof(i) ? i : i + "";
}
module.exports = toPropertyKey, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 140 */
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/toPrimitive.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ./typeof.js */ 137)["default"];
function toPrimitive(t, r) {
  if ("object" != _typeof(t) || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != _typeof(i)) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
module.exports = toPrimitive, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 141 */,
/* 142 */
/*!******************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/uni-app-plus-nvue/dist/require-native-plugin.js ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = requireNativePlugin;
function requireNativePlugin(name) {
  return weex.requireModule(name);
}

/***/ }),
/* 143 */
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/classCallCheck.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
module.exports = _classCallCheck, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 144 */
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/createClass.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toPropertyKey = __webpack_require__(/*! ./toPropertyKey.js */ 139);
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, toPropertyKey(descriptor.key), descriptor);
  }
}
function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}
module.exports = _createClass, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 145 */,
/* 146 */,
/* 147 */,
/* 148 */,
/* 149 */,
/* 150 */,
/* 151 */,
/* 152 */,
/* 153 */,
/* 154 */,
/* 155 */,
/* 156 */,
/* 157 */,
/* 158 */,
/* 159 */,
/* 160 */,
/* 161 */,
/* 162 */,
/* 163 */,
/* 164 */,
/* 165 */,
/* 166 */,
/* 167 */,
/* 168 */,
/* 169 */,
/* 170 */,
/* 171 */
/*!****************************************************************************************************!*\
  !*** C:/Users/TAOER/Desktop/ShayuVideo/ShayuVideoAPP/main.js?{"page":"pages%2Fpublish%2Fpublish"} ***!
  \****************************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var uni_app_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uni-app-style */ 1);\n/* harmony import */ var uni_app_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(uni_app_style__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var uni_polyfill__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! uni-polyfill */ 4);\n/* harmony import */ var uni_polyfill__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(uni_polyfill__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _pages_publish_publish_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/publish/publish.nvue?mpType=page */ 172);\n\n        \n        \n        \n        \n        _pages_publish_publish_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_2__[\"default\"].mpType = 'page'\n        _pages_publish_publish_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_2__[\"default\"].route = 'pages/publish/publish'\n        _pages_publish_publish_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_2__[\"default\"].el = '#root'\n        new Vue(_pages_publish_publish_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_2__[\"default\"])\n        //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBRUEsUUFBOEI7QUFDOUIsUUFBNkI7QUFDN0IsUUFBa0U7QUFDbEUsUUFBUSwrRUFBRztBQUNYLFFBQVEsK0VBQUc7QUFDWCxRQUFRLCtFQUFHO0FBQ1gsZ0JBQWdCLCtFQUFHIiwiZmlsZSI6IjE3MS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgICAgICBcbiAgICAgICAgaW1wb3J0ICd1bmktYXBwLXN0eWxlJ1xuICAgICAgICBpbXBvcnQgJ3VuaS1wb2x5ZmlsbCdcbiAgICAgICAgaW1wb3J0IEFwcCBmcm9tICcuL3BhZ2VzL3B1Ymxpc2gvcHVibGlzaC5udnVlP21wVHlwZT1wYWdlJ1xuICAgICAgICBBcHAubXBUeXBlID0gJ3BhZ2UnXG4gICAgICAgIEFwcC5yb3V0ZSA9ICdwYWdlcy9wdWJsaXNoL3B1Ymxpc2gnXG4gICAgICAgIEFwcC5lbCA9ICcjcm9vdCdcbiAgICAgICAgbmV3IFZ1ZShBcHApXG4gICAgICAgICJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///171\n");

/***/ }),
/* 172 */
/*!**********************************************************************************************!*\
  !*** C:/Users/TAOER/Desktop/ShayuVideo/ShayuVideoAPP/pages/publish/publish.nvue?mpType=page ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _publish_nvue_vue_type_template_id_2835fff0_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./publish.nvue?vue&type=template&id=2835fff0&mpType=page */ 173);\n/* harmony import */ var _publish_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./publish.nvue?vue&type=script&lang=js&mpType=page */ 175);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _publish_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _publish_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 12);\n\nvar renderjs\n\n\nfunction injectStyles (context) {\n  \n  if(!this.options.style){\n          this.options.style = {}\n      }\n      if(Vue.prototype.__merge_style && Vue.prototype.__$appStyle__){\n        Vue.prototype.__merge_style(Vue.prototype.__$appStyle__, this.options.style)\n      }\n      if(Vue.prototype.__merge_style){\n                Vue.prototype.__merge_style(__webpack_require__(/*! ./publish.nvue?vue&type=style&index=0&lang=css&mpType=page */ 196).default, this.options.style)\n            }else{\n                Object.assign(this.options.style,__webpack_require__(/*! ./publish.nvue?vue&type=style&index=0&lang=css&mpType=page */ 196).default)\n            }\n\n}\n\n/* normalize component */\n\nvar component = Object(_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _publish_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _publish_nvue_vue_type_template_id_2835fff0_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _publish_nvue_vue_type_template_id_2835fff0_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  \"57a67414\",\n  false,\n  _publish_nvue_vue_type_template_id_2835fff0_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ninjectStyles.call(component)\ncomponent.options.__file = \"pages/publish/publish.nvue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBZ0k7QUFDaEk7QUFDdUU7QUFDTDtBQUNsRTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QyxtQkFBTyxDQUFDLHFFQUE0RDtBQUNoSCxhQUFhO0FBQ2IsaURBQWlELG1CQUFPLENBQUMscUVBQTREO0FBQ3JIOztBQUVBOztBQUVBO0FBQ3FLO0FBQ3JLLGdCQUFnQiwrS0FBVTtBQUMxQixFQUFFLHlGQUFNO0FBQ1IsRUFBRSw4RkFBTTtBQUNSLEVBQUUsdUdBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsa0dBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ0E7QUFDZSxnRiIsImZpbGUiOiIxNzIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucywgcmVjeWNsYWJsZVJlbmRlciwgY29tcG9uZW50cyB9IGZyb20gXCIuL3B1Ymxpc2gubnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0yODM1ZmZmMCZtcFR5cGU9cGFnZVwiXG52YXIgcmVuZGVyanNcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vcHVibGlzaC5udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJm1wVHlwZT1wYWdlXCJcbmV4cG9ydCAqIGZyb20gXCIuL3B1Ymxpc2gubnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiXG5mdW5jdGlvbiBpbmplY3RTdHlsZXMgKGNvbnRleHQpIHtcbiAgXG4gIGlmKCF0aGlzLm9wdGlvbnMuc3R5bGUpe1xuICAgICAgICAgIHRoaXMub3B0aW9ucy5zdHlsZSA9IHt9XG4gICAgICB9XG4gICAgICBpZihWdWUucHJvdG90eXBlLl9fbWVyZ2Vfc3R5bGUgJiYgVnVlLnByb3RvdHlwZS5fXyRhcHBTdHlsZV9fKXtcbiAgICAgICAgVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlKFZ1ZS5wcm90b3R5cGUuX18kYXBwU3R5bGVfXywgdGhpcy5vcHRpb25zLnN0eWxlKVxuICAgICAgfVxuICAgICAgaWYoVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlKXtcbiAgICAgICAgICAgICAgICBWdWUucHJvdG90eXBlLl9fbWVyZ2Vfc3R5bGUocmVxdWlyZShcIi4vcHVibGlzaC5udnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3MmbXBUeXBlPXBhZ2VcIikuZGVmYXVsdCwgdGhpcy5vcHRpb25zLnN0eWxlKVxuICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLm9wdGlvbnMuc3R5bGUscmVxdWlyZShcIi4vcHVibGlzaC5udnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3MmbXBUeXBlPXBhZ2VcIikuZGVmYXVsdClcbiAgICAgICAgICAgIH1cblxufVxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIUQ6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcdnVlLWxvYWRlclxcXFxsaWJcXFxccnVudGltZVxcXFxjb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgXCI1N2E2NzQxNFwiLFxuICBmYWxzZSxcbiAgY29tcG9uZW50cyxcbiAgcmVuZGVyanNcbilcblxuaW5qZWN0U3R5bGVzLmNhbGwoY29tcG9uZW50KVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJwYWdlcy9wdWJsaXNoL3B1Ymxpc2gubnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///172\n");

/***/ }),
/* 173 */
/*!****************************************************************************************************************************!*\
  !*** C:/Users/TAOER/Desktop/ShayuVideo/ShayuVideoAPP/pages/publish/publish.nvue?vue&type=template&id=2835fff0&mpType=page ***!
  \****************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_publish_nvue_vue_type_template_id_2835fff0_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./publish.nvue?vue&type=template&id=2835fff0&mpType=page */ 174);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_publish_nvue_vue_type_template_id_2835fff0_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_publish_nvue_vue_type_template_id_2835fff0_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_publish_nvue_vue_type_template_id_2835fff0_mpType_page__WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_publish_nvue_vue_type_template_id_2835fff0_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 174 */
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!C:/Users/TAOER/Desktop/ShayuVideo/ShayuVideoAPP/pages/publish/publish.nvue?vue&type=template&id=2835fff0&mpType=page ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "scroll-view",
    {
      staticStyle: { flexDirection: "column" },
      attrs: {
        scrollY: true,
        showScrollbar: true,
        enableBackToTop: true,
        bubble: "true",
      },
    },
    [
      _c("view", { staticClass: ["page"] }, [
        _vm.percentCompleted != 100
          ? _c(
              "view",
              {
                staticStyle: {
                  marginTop: "60rpx",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                },
              },
              [
                _c("progress", {
                  style: { screenWidth: _vm.screenWidth + "px" },
                  attrs: {
                    percent: _vm.percentCompleted,
                    strokeWidth: "3",
                    activeColor: "#ef274d",
                    backgroundColor: "#F1F1F1",
                  },
                }),
                _c(
                  "u-text",
                  {
                    staticStyle: {
                      color: "#F1F1F1",
                      fontSize: "16px",
                      textAlign: "center",
                      marginTop: "20px",
                    },
                    style: { screenWidth: _vm.screenWidth + "px" },
                    appendAsTree: true,
                    attrs: { append: "tree" },
                  },
                  [_vm._v("视频上传中~ 请耐心等待~~")]
                ),
                _c("u-image", {
                  staticStyle: {
                    width: "600rpx",
                    height: "600rpx",
                    alignSelf: "center",
                  },
                  attrs: {
                    mode: "aspectFit",
                    src: "../../static/images/loading-4.gif",
                  },
                }),
              ],
              1
            )
          : _vm._e(),
        _vm.percentCompleted == 100
          ? _c(
              "view",
              [
                _c("u-image", {
                  staticStyle: {
                    marginTop: "30px",
                    width: "360rpx",
                    height: "500rpx",
                    borderRadius: "10px",
                    marginLeft: "30rpx",
                    marginTop: "10px",
                  },
                  attrs: { src: _vm.tempCover, mode: "aspectFit" },
                }),
                _c(
                  "view",
                  {
                    staticClass: ["choose-cover"],
                    on: { click: _vm.chooseCover },
                  },
                  [
                    _c(
                      "u-text",
                      {
                        staticStyle: {
                          color: "#ffffff",
                          fontSize: "14px",
                          alignSelf: "center",
                        },
                        appendAsTree: true,
                        attrs: { append: "tree" },
                      },
                      [_vm._v("选择封面")]
                    ),
                  ]
                ),
                _c(
                  "view",
                  {
                    staticClass: ["preplay-wrapper"],
                    class: {
                      "btn-preplay": !_vm.preplayTouched,
                      "btn-preplay-touched": _vm.preplayTouched,
                    },
                    on: {
                      click: _vm.preview,
                      touchstart: _vm.touchstartPreplay,
                      touchend: _vm.touchendPreplay,
                    },
                  },
                  [
                    _c("u-image", {
                      staticStyle: {
                        width: "22rpx",
                        height: "22rpx",
                        alignSelf: "center",
                      },
                      attrs: { src: "../../static/images/btn-play.png" },
                    }),
                    _c(
                      "u-text",
                      {
                        staticStyle: {
                          color: "#e6e6e6",
                          fontSize: "14px",
                          alignSelf: "center",
                          marginLeft: "10rpx",
                        },
                        appendAsTree: true,
                        attrs: { append: "tree" },
                      },
                      [_vm._v("预览视频")]
                    ),
                  ],
                  1
                ),
                _c("u-textarea", {
                  staticClass: ["vlog-content"],
                  attrs: {
                    placeholderStyle: "color: #9798a0;",
                    placeholder:
                      "添加合适的标题与标签内容，例如：标题 #风景 #美食",
                    value: _vm.title,
                    model: _vm.title,
                    maxlength: "60",
                    confirmType: "done",
                  },
                  on: { input: _vm.typingContent },
                }),
                _vm.tags.length > 0
                  ? _c("view", { staticClass: ["tags-preview"] }, [
                      _c(
                        "u-text",
                        {
                          staticClass: ["tags-label"],
                          appendAsTree: true,
                          attrs: { append: "tree" },
                        },
                        [_vm._v("标签：")]
                      ),
                      _c(
                        "view",
                        { staticClass: ["tags-container"] },
                        _vm._l(_vm.tags, function (tag, index) {
                          return _c(
                            "view",
                            {
                              key: index,
                              staticClass: ["tag-item"],
                              on: {
                                click: function ($event) {
                                  _vm.removeTag(index)
                                },
                              },
                            },
                            [
                              _c(
                                "u-text",
                                {
                                  staticClass: ["tag-text"],
                                  appendAsTree: true,
                                  attrs: { append: "tree" },
                                },
                                [_vm._v("#" + _vm._s(tag))]
                              ),
                              _c(
                                "u-text",
                                {
                                  staticClass: ["tag-close"],
                                  appendAsTree: true,
                                  attrs: { append: "tree" },
                                },
                                [_vm._v("×")]
                              ),
                            ]
                          )
                        }),
                        0
                      ),
                    ])
                  : _vm._e(),
                _c(
                  "view",
                  {
                    class: {
                      "btn-publish": !_vm.publichTouched,
                      "btn-publish-touched": _vm.publichTouched,
                    },
                    staticStyle: {
                      marginTop: "30rpx",
                      height: "90rpx",
                      display: "flex",
                      justifyContent: "center",
                      borderRadius: "20px",
                    },
                    on: {
                      touchstart: _vm.touchstartPublich,
                      touchend: _vm.touchendPublich,
                      click: _vm.doPublich,
                    },
                  },
                  [
                    _c(
                      "u-text",
                      {
                        staticStyle: {
                          color: "#e6e6e6",
                          fontSize: "18px",
                          alignSelf: "center",
                          fontWeight: "500",
                        },
                        appendAsTree: true,
                        attrs: { append: "tree" },
                      },
                      [
                        _vm._v(
                          _vm._s(_vm.isEditMode ? "保存修改" : "发布 Vlog")
                        ),
                      ]
                    ),
                  ]
                ),
              ],
              1
            )
          : _vm._e(),
      ]),
    ]
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 175 */
/*!**********************************************************************************************************************!*\
  !*** C:/Users/TAOER/Desktop/ShayuVideo/ShayuVideoAPP/pages/publish/publish.nvue?vue&type=script&lang=js&mpType=page ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_publish_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib??ref--5-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--5-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./publish.nvue?vue&type=script&lang=js&mpType=page */ 176);\n/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_publish_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_publish_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_publish_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_publish_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_publish_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQWliLENBQWdCLDZkQUFHLEVBQUMiLCJmaWxlIjoiMTc1LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vZCBmcm9tIFwiLSFEOlxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxiYWJlbC1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzPz9yZWYtLTUtMCFEOlxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXJcXFxcaW5kZXguanM/P3JlZi0tNS0xIUQ6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcdnVlLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3B1Ymxpc2gubnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIUQ6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXGJhYmVsLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanM/P3JlZi0tNS0wIUQ6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlclxcXFxpbmRleC5qcz8/cmVmLS01LTEhRDpcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx2dWUtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vcHVibGlzaC5udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJm1wVHlwZT1wYWdlXCIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///175\n");

/***/ }),
/* 176 */
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--5-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--5-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!C:/Users/TAOER/Desktop/ShayuVideo/ShayuVideoAPP/pages/publish/publish.nvue?vue&type=script&lang=js&mpType=page ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(uniCloud, __f__) {\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\nvar system = uni.getSystemInfoSync();\nvar app = getApp();\nvar _default = {\n  data: function data() {\n    return {\n      publichTouched: false,\n      preplayTouched: false,\n      // tempCover: \"/static/face/face-arrow-1.png\",\n      tempFilePath: \"\",\n      videoUrl: \"\",\n      tempCover: \"\",\n      title: \"\",\n      width: 0,\n      height: 0,\n      percentCompleted: 0,\n      tags: [],\n      // 标签数组\n\n      // 编辑模式相关\n      isEditMode: false,\n      // 是否为编辑模式\n      editVlogId: \"\" // 编辑的视频ID\n    };\n  },\n  onLoad: function onLoad(params) {\n    var me = this;\n    this.statusBarHeight = system.statusBarHeight;\n    this.screenWidth = system.screenWidth;\n\n    // 检查是否为编辑模式\n    if (params.mode === 'edit' && params.vlogId) {\n      me.isEditMode = true;\n      me.editVlogId = params.vlogId;\n      me.percentCompleted = 100; // 编辑模式下直接显示编辑表单\n\n      // 动态设置导航栏标题\n      uni.setNavigationBarTitle({\n        title: '编辑视频'\n      });\n\n      // 获取视频详情并填充表单\n      me.fetchVlogDetail(params.vlogId);\n    } else {\n      // 处理时间格式\n      var formatDate = function formatDate(date) {\n        var year = date.getFullYear();\n        var month = (date.getMonth() + 1).toString().padStart(2, '0');\n        var day = date.getDate().toString().padStart(2, '0');\n        var hours = date.getHours().toString().padStart(2, '0');\n        var minutes = date.getMinutes().toString().padStart(2, '0');\n        var seconds = date.getSeconds().toString().padStart(2, '0');\n        return year + month + day + '_' + hours + minutes + seconds;\n      };\n      me.isEditMode = false;\n\n      // 动态设置导航栏标题（发布模式）\n      uni.setNavigationBarTitle({\n        title: '发布视频'\n      });\n\n      // 发布模式：上传视频\n\n      // 上个页面传过来的文件事件对象，其中包含了相册中选择的视频内容\n      var fileObjectEvent = JSON.parse(params.fileObjectEvent);\n      var time = formatDate(new Date());\n      var times = new Date().getTime();\n\n      // 获取用户名\n      var userInfo = getApp().getUserInfoSession();\n      var username = '';\n      if (userInfo && userInfo.nickname) {\n        // 清理用户名中的特殊字符，只保留字母、数字、中文、下划线\n        username = userInfo.nickname.replace(/[^a-zA-Z0-9\\u4e00-\\u9fa5_]/g, '');\n      }\n\n      // 文件名 = 用户名 + 时间 + 时间戳 + .mp4\n      var cloudPath = (username ? username + '_' : '') + time + '_' + times + '.mp4';\n      uniCloud.uploadFile({\n        filePath: fileObjectEvent.tempFilePath,\n        cloudPath: cloudPath,\n        onUploadProgress: function onUploadProgress(progressEvent) {\n          // 进度百分比\n          var percentCompleted = Math.round(progressEvent.loaded * 100 / progressEvent.total);\n          me.percentCompleted = percentCompleted;\n        },\n        success: function success(f) {\n          var videoUrlTemp = f.filePath;\n          var videoUrl = f.fileID;\n\n          // 获得视频参数\n          me.tempFilePath = videoUrlTemp;\n          me.videoUrl = videoUrl;\n          me.tempCover = videoUrl + \"?x-oss-process=video/snapshot,t_1,f_jpg,ar_auto\"; // 截帧\n          me.width = fileObjectEvent.width;\n          me.height = fileObjectEvent.height;\n        }\n      });\n    }\n  },\n  methods: {\n    // 获取视频详情（编辑模式使用）\n    fetchVlogDetail: function fetchVlogDetail(vlogId) {\n      var me = this;\n      var userId = getApp().getUserInfoSession().id;\n      var serverUrl = app.globalData.serverUrl;\n      uni.request({\n        method: \"GET\",\n        header: {\n          headerUserId: userId,\n          headerUserToken: app.getUserSessionToken()\n        },\n        url: serverUrl + \"/vlog/detail?userId=\" + userId + \"&vlogId=\" + vlogId,\n        success: function success(result) {\n          if (result.data.status == 200) {\n            var vlog = result.data.data;\n\n            // 调试日志：打印获取到的视频数据\n            __f__(\"log\", \"获取到的视频详情：\", vlog, \" at pages/publish/publish.nvue:380\");\n            __f__(\"log\", \"视频标题（content）：\", vlog.content, \" at pages/publish/publish.nvue:381\");\n            __f__(\"log\", \"视频标题（title）：\", vlog.title, \" at pages/publish/publish.nvue:382\");\n\n            // 填充表单数据\n            // 注意：后端返回的字段是 content，不是 title\n            me.videoUrl = vlog.url;\n            me.tempCover = vlog.cover;\n            me.title = vlog.content || vlog.title || \"\";\n            me.width = vlog.width || 0;\n            me.height = vlog.height || 0;\n\n            // 调试日志：确认赋值后的值\n            __f__(\"log\", \"赋值后的 title：\", me.title, \" at pages/publish/publish.nvue:393\");\n\n            // 解析标签\n            if (vlog.tag && vlog.tag.trim() !== '') {\n              // 标签可能是逗号分隔的字符串\n              var tagArray = vlog.tag.split(',').map(function (tag) {\n                return tag.trim();\n              }).filter(function (tag) {\n                return tag && tag.length > 0;\n              });\n              me.tags = tagArray;\n            } else {\n              me.tags = [];\n            }\n\n            // 如果标题中包含标签，需要重新解析标签（因为标签是从标题中解析的）\n            if (me.title && me.title.trim() !== '') {\n              // 使用 $nextTick 确保 DOM 更新后再解析标签\n              me.$nextTick(function () {\n                me.parseTags(me.title);\n                // 强制更新视图\n                me.$forceUpdate();\n              });\n            } else {\n              // 即使标题为空，也强制更新视图以确保 textarea 显示空值\n              me.$nextTick(function () {\n                me.$forceUpdate();\n              });\n            }\n          } else {\n            uni.showToast({\n              title: result.data.msg || \"获取视频详情失败\",\n              icon: \"none\",\n              duration: 3000\n            });\n            // 获取失败，返回上一页\n            setTimeout(function () {\n              uni.navigateBack();\n            }, 1500);\n          }\n        },\n        fail: function fail(err) {\n          __f__(\"error\", \"获取视频详情失败：\", err, \" at pages/publish/publish.nvue:435\");\n          uni.showToast({\n            title: \"网络错误，请重试\",\n            icon: \"none\",\n            duration: 3000\n          });\n          // 获取失败，返回上一页\n          setTimeout(function () {\n            uni.navigateBack();\n          }, 1500);\n        }\n      });\n    },\n    typingContent: function typingContent(e) {\n      var event = e;\n      var content = e.detail.value;\n      this.title = content;\n\n      // 实时解析标签：匹配 #标签 格式（#后面跟非空格字符，直到遇到空格或结尾）\n      this.parseTags(content);\n    },\n    // 解析文本中的标签\n    parseTags: function parseTags(content) {\n      var me = this;\n      var tags = [];\n      if (!content || content.trim() === '') {\n        me.tags = [];\n        return;\n      }\n\n      // 匹配 #标签 格式\n      // 正则说明：# 后面跟一个或多个非空格字符，直到遇到空格、换行或字符串结尾\n      var tagRegex = /#([^\\s#]+)/g;\n      var match;\n      var tagSet = new Set(); // 使用Set去重\n\n      while ((match = tagRegex.exec(content)) !== null) {\n        var tag = match[1].trim();\n        // 过滤空标签和过长的标签（限制20个字符）\n        if (tag && tag.length > 0 && tag.length <= 20) {\n          tagSet.add(tag);\n        }\n      }\n\n      // 转换为数组\n      me.tags = Array.from(tagSet);\n    },\n    // 删除标签\n    removeTag: function removeTag(index) {\n      var me = this;\n      var tagToRemove = me.tags[index];\n\n      // 从文本中移除该标签\n      if (tagToRemove) {\n        // 移除文本中对应的 #标签\n        var regex = new RegExp('#\\\\s*' + tagToRemove.replace(/[.*+?^${}()|[\\]\\\\]/g, '\\\\$&') + '\\\\s*', 'g');\n        me.title = me.title.replace(regex, '');\n\n        // 重新解析标签\n        me.parseTags(me.title);\n      }\n    },\n    doPublich: function doPublich() {\n      var me = this;\n      var userId = getApp().getUserInfoSession().id;\n\n      // 将标签数组转换为字符串，用逗号分隔（或根据后端需求调整格式）\n      var tagsStr = me.tags.join(',');\n\n      // 如果标签为空，设置为空字符串而不是undefined\n      if (!tagsStr || tagsStr.trim() === '') {\n        tagsStr = '';\n      }\n      var vlog = {\n        \"vlogerId\": userId,\n        \"url\": me.videoUrl,\n        \"cover\": me.tempCover,\n        \"title\": me.title,\n        \"width\": me.width,\n        \"height\": me.height,\n        \"tag\": tagsStr // 添加标签字段，确保字段名与后端BO对象一致\n      };\n\n      // 如果是编辑模式，添加视频ID\n      if (me.isEditMode) {\n        vlog.id = me.editVlogId;\n      }\n\n      // 调试日志：打印发送的数据\n      __f__(\"log\", \"准备\" + (me.isEditMode ? \"更新\" : \"发布\") + \"视频，数据：\", JSON.stringify(vlog), \" at pages/publish/publish.nvue:529\");\n\n      // 发布或更新视频\n      var serverUrl = app.globalData.serverUrl;\n      var requestUrl = me.isEditMode ? serverUrl + \"/vlog/update\" : serverUrl + \"/vlog/publish\";\n      var requestMethod = me.isEditMode ? \"PUT\" : \"POST\";\n      uni.request({\n        method: requestMethod,\n        header: {\n          \"Content-Type\": \"application/json\",\n          // 确保设置Content-Type\n          \"headerUserId\": userId,\n          \"headerUserToken\": app.getUserSessionToken()\n        },\n        url: requestUrl,\n        data: vlog,\n        success: function success(result) {\n          __f__(\"log\", (me.isEditMode ? \"更新\" : \"发布\") + \"视频响应：\", result, \" at pages/publish/publish.nvue:546\");\n          if (result.data.status == 200) {\n            uni.showToast({\n              title: me.isEditMode ? \"更新成功！\" : \"发布成功！\",\n              icon: \"none\"\n            });\n\n            // 编辑模式下，返回上一页（视频详情页）\n            if (me.isEditMode) {\n              uni.navigateBack({\n                delta: 1,\n                animationType: 'zoom-fade-in',\n                animationDuration: 1000\n              });\n            } else {\n              // 发布模式下，返回并切换到个人中心\n              uni.navigateBack({\n                delta: 1,\n                animationType: 'zoom-fade-in',\n                animationDuration: 1000\n              });\n              uni.switchTab({\n                url: \"../me/me\"\n              });\n            }\n          } else {\n            uni.showToast({\n              title: result.data.msg || (me.isEditMode ? \"更新失败\" : \"发布失败\"),\n              icon: \"none\",\n              duration: 3000\n            });\n          }\n        },\n        fail: function fail(err) {\n          __f__(\"error\", (me.isEditMode ? \"更新\" : \"发布\") + \"视频请求失败：\", err, \" at pages/publish/publish.nvue:583\");\n          uni.showToast({\n            title: \"网络错误，请重试\",\n            icon: \"none\",\n            duration: 3000\n          });\n        }\n      });\n    },\n    preview: function preview() {\n      uni.navigateTo({\n        url: \"/pages/publish/preview?videoUrl=\" + this.videoUrl + \"&width=\" + this.width + \"&height=\" + this.height,\n        animationType: 'slide-in-bottom',\n        animationDuration: 500\n      });\n    },\n    touchstartPreplay: function touchstartPreplay() {\n      this.preplayTouched = true;\n    },\n    touchendPreplay: function touchendPreplay() {\n      this.preplayTouched = false;\n    },\n    touchstartPublich: function touchstartPublich() {\n      this.publichTouched = true;\n    },\n    touchendPublich: function touchendPublich() {\n      this.publichTouched = false;\n    },\n    chooseCover: function chooseCover() {\n      var me = this;\n      var userId = getApp().getUserInfoSession().id;\n      uni.chooseImage({\n        count: 1,\n        sourceType: ['album'],\n        success: function success(e) {\n          me.tempCover = e.tempFilePaths[0];\n\n          // 上传封面\n          var serverUrl = app.globalData.serverUrl;\n          uni.uploadFile({\n            url: serverUrl + \"/file/uploadImage?userId=\" + userId,\n            name: \"file\",\n            filePath: me.tempCover,\n            success: function success(result) {\n              var res = JSON.parse(result.data);\n              if (res.status == 200) {\n                var imageUrl = res.data;\n                me.tempCover = imageUrl;\n              } else {\n                uni.showToast({\n                  title: result.data.msg,\n                  icon: \"none\",\n                  duration: 3000\n                });\n              }\n            }\n          });\n        }\n      });\n    }\n  }\n};\nexports.default = _default;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/uni-cloud/dist/index.js */ 177)[\"uniCloud\"], __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 129)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vcGFnZXMvcHVibGlzaC9wdWJsaXNoLm52dWUiXSwibmFtZXMiOlsiZGF0YSIsInB1YmxpY2hUb3VjaGVkIiwicHJlcGxheVRvdWNoZWQiLCJ0ZW1wRmlsZVBhdGgiLCJ2aWRlb1VybCIsInRlbXBDb3ZlciIsInRpdGxlIiwid2lkdGgiLCJoZWlnaHQiLCJwZXJjZW50Q29tcGxldGVkIiwidGFncyIsImlzRWRpdE1vZGUiLCJlZGl0VmxvZ0lkIiwib25Mb2FkIiwibWUiLCJ1bmkiLCJmb3JtYXREYXRlIiwidXNlcm5hbWUiLCJ1bmlDbG91ZCIsImZpbGVQYXRoIiwiY2xvdWRQYXRoIiwib25VcGxvYWRQcm9ncmVzcyIsInN1Y2Nlc3MiLCJtZXRob2RzIiwiZmV0Y2hWbG9nRGV0YWlsIiwibWV0aG9kIiwiaGVhZGVyIiwiaGVhZGVyVXNlcklkIiwiaGVhZGVyVXNlclRva2VuIiwidXJsIiwiaWNvbiIsImR1cmF0aW9uIiwic2V0VGltZW91dCIsImZhaWwiLCJ0eXBpbmdDb250ZW50IiwicGFyc2VUYWdzIiwidGFnU2V0IiwicmVtb3ZlVGFnIiwiZG9QdWJsaWNoIiwidGFnc1N0ciIsInZsb2ciLCJkZWx0YSIsImFuaW1hdGlvblR5cGUiLCJhbmltYXRpb25EdXJhdGlvbiIsInByZXZpZXciLCJ0b3VjaHN0YXJ0UHJlcGxheSIsInRvdWNoZW5kUHJlcGxheSIsInRvdWNoc3RhcnRQdWJsaWNoIiwidG91Y2hlbmRQdWJsaWNoIiwiY2hvb3NlQ292ZXIiLCJjb3VudCIsInNvdXJjZVR5cGUiLCJuYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW9RQTtBQUNBO0FBQUEsZUFDQTtFQUNBQTtJQUNBO01BQ0FDO01BQ0FDO01BQ0E7TUFDQUM7TUFDQUM7TUFDQUM7TUFDQUM7TUFDQUM7TUFDQUM7TUFFQUM7TUFDQUM7TUFBQTs7TUFFQTtNQUNBQztNQUFBO01BQ0FDO0lBQ0E7RUFDQTtFQUNBQztJQUNBO0lBQ0E7SUFDQTs7SUFFQTtJQUNBO01BQ0FDO01BQ0FBO01BQ0FBOztNQUVBO01BQ0FDO1FBQ0FUO01BQ0E7O01BRUE7TUFDQVE7SUFDQTtNQWFBO01BQUEsSUFDQUU7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtNQUNBO01BckJBRjs7TUFFQTtNQUNBQztRQUNBVDtNQUNBOztNQUVBOztNQUVBO01BQ0E7TUFZQTtNQUNBOztNQUVBO01BQ0E7TUFDQTtNQUNBO1FBQ0E7UUFDQVc7TUFDQTs7TUFFQTtNQUNBO01BRUFDO1FBQ0FDO1FBQ0FDO1FBQ0FDO1VBQ0E7VUFDQTtVQUNBUDtRQUNBO1FBQ0FRO1VBQ0E7VUFDQTs7VUFFQTtVQUNBUjtVQUNBQTtVQUNBQTtVQUNBQTtVQUNBQTtRQUNBO01BQ0E7SUFDQTtFQUNBO0VBQ0FTO0lBQ0E7SUFDQUM7TUFDQTtNQUNBO01BQ0E7TUFFQVQ7UUFDQVU7UUFDQUM7VUFDQUM7VUFDQUM7UUFDQTtRQUNBQztRQUNBUDtVQUNBO1lBQ0E7O1lBRUE7WUFDQTtZQUNBO1lBQ0E7O1lBRUE7WUFDQTtZQUNBUjtZQUNBQTtZQUNBQTtZQUNBQTtZQUNBQTs7WUFFQTtZQUNBOztZQUVBO1lBQ0E7Y0FDQTtjQUNBO2dCQUNBO2NBQ0E7Z0JBQ0E7Y0FDQTtjQUNBQTtZQUNBO2NBQ0FBO1lBQ0E7O1lBRUE7WUFDQTtjQUNBO2NBQ0FBO2dCQUNBQTtnQkFDQTtnQkFDQUE7Y0FDQTtZQUNBO2NBQ0E7Y0FDQUE7Z0JBQ0FBO2NBQ0E7WUFDQTtVQUNBO1lBQ0FDO2NBQ0FUO2NBQ0F3QjtjQUNBQztZQUNBO1lBQ0E7WUFDQUM7Y0FDQWpCO1lBQ0E7VUFDQTtRQUNBO1FBQ0FrQjtVQUNBO1VBQ0FsQjtZQUNBVDtZQUNBd0I7WUFDQUM7VUFDQTtVQUNBO1VBQ0FDO1lBQ0FqQjtVQUNBO1FBQ0E7TUFDQTtJQUNBO0lBRUFtQjtNQUNBO01BQ0E7TUFDQTs7TUFFQTtNQUNBO0lBQ0E7SUFFQTtJQUNBQztNQUNBO01BQ0E7TUFFQTtRQUNBckI7UUFDQTtNQUNBOztNQUVBO01BQ0E7TUFDQTtNQUNBO01BQ0E7O01BRUE7UUFDQTtRQUNBO1FBQ0E7VUFDQXNCO1FBQ0E7TUFDQTs7TUFFQTtNQUNBdEI7SUFDQTtJQUVBO0lBQ0F1QjtNQUNBO01BQ0E7O01BRUE7TUFDQTtRQUNBO1FBQ0E7UUFDQXZCOztRQUVBO1FBQ0FBO01BQ0E7SUFDQTtJQUNBd0I7TUFDQTtNQUNBOztNQUVBO01BQ0E7O01BRUE7TUFDQTtRQUNBQztNQUNBO01BRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtNQUNBOztNQUVBO01BQ0E7UUFDQUM7TUFDQTs7TUFFQTtNQUNBOztNQUVBO01BQ0E7TUFDQTtNQUNBO01BRUF6QjtRQUNBVTtRQUNBQztVQUNBO1VBQUE7VUFDQTtVQUNBO1FBQ0E7UUFDQUc7UUFDQTdCO1FBQ0FzQjtVQUNBO1VBRUE7WUFDQVA7Y0FDQVQ7Y0FDQXdCO1lBQ0E7O1lBRUE7WUFDQTtjQUNBZjtnQkFDQTBCO2dCQUNBQztnQkFDQUM7Y0FDQTtZQUNBO2NBQ0E7Y0FDQTVCO2dCQUNBMEI7Z0JBQ0FDO2dCQUNBQztjQUNBO2NBRUE1QjtnQkFDQWM7Y0FDQTtZQUNBO1VBQ0E7WUFDQWQ7Y0FDQVQ7Y0FDQXdCO2NBQ0FDO1lBQ0E7VUFDQTtRQUVBO1FBQ0FFO1VBQ0E7VUFDQWxCO1lBQ0FUO1lBQ0F3QjtZQUNBQztVQUNBO1FBQ0E7TUFDQTtJQUVBO0lBRUFhO01BQ0E3QjtRQUNBYyxnR0FDQTtRQUNBYTtRQUNBQztNQUNBO0lBQ0E7SUFFQUU7TUFDQTtJQUNBO0lBRUFDO01BQ0E7SUFDQTtJQUVBQztNQUNBO0lBQ0E7SUFFQUM7TUFDQTtJQUNBO0lBRUFDO01BQ0E7TUFDQTtNQUVBbEM7UUFDQW1DO1FBQ0FDO1FBQ0E3QjtVQUNBUjs7VUFFQTtVQUNBO1VBQ0FDO1lBQ0FjO1lBQ0F1QjtZQUNBakM7WUFDQUc7Y0FDQTtjQUNBO2dCQUNBO2dCQUNBUjtjQUNBO2dCQUNBQztrQkFDQVQ7a0JBQ0F3QjtrQkFDQUM7Z0JBQ0E7Y0FDQTtZQUNBO1VBQ0E7UUFDQTtNQUNBO0lBQ0E7RUFFQTtBQUNBO0FBQUEsMkIiLCJmaWxlIjoiMTc2LmpzIiwic291cmNlc0NvbnRlbnQiOlsiPHN0eWxlPlxuLnBhZ2Uge1xuXHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdGxlZnQ6IDA7XG5cdHJpZ2h0OiAwO1xuXHR0b3A6IDA7XG5cdGJvdHRvbTogMDtcblx0YmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDtcbn1cblx0XG4uaGVhZGVyIHtcblx0cG9zaXRpb246IGFic29sdXRlO1xuXHRsZWZ0OiAwO1xuXHRyaWdodDogMDtcblx0ZmxleC1kaXJlY3Rpb246IHJvdztcblx0aGVpZ2h0OiAxMDBycHg7XG5cdGxpbmUtaGVpZ2h0OiAxMDBycHg7XG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdHBhZGRpbmctbGVmdDogNDBycHg7XG5cdHBhZGRpbmctcmlnaHQ6IDQwcnB4O1xufVxuXG4uaGVhZGVyLWNlbnRlciB7XG5cdGZsZXg6IDE7XG5cdGZsZXgtZGlyZWN0aW9uOiByb3c7XG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uaGVhZGVyLWxlZnQsXG4uaGVhZGVyLXJpZ2h0IHtcblx0Y29sb3I6ICM5OTk7XG5cdGhlaWdodDogMTAwcnB4O1xuXHRsaW5lLWhlaWdodDogMTAwcnB4O1xuXHRhbGlnbi1pdGVtczogZmxleC1zdGFydDtcblx0anVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcblx0Zm9udC1mYW1pbHk6IGljb25mb250O1xufVxuXG4uaGVhZGVyLXJpZ2h0LXNlYXJjaCB7XG5cdGhlaWdodDogMTAwcnB4O1xuXHQvKiBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcblx0anVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDsgKi9cbn1cblxuLmhlYWRlci1pdGVtIHtcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0bWFyZ2luLWxlZnQ6IDZycHg7XG5cdG1hcmdpbi1yaWdodDogNnJweDtcbn1cblxuLmhlYWRlci1pdGVtLXRpdGxlIHtcblx0d2lkdGg6IDIwMHJweDtcblx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHRoZWlnaHQ6IDYwcnB4O1xuXHRsaW5lLWhlaWdodDogNjBycHg7XG5cdGNvbG9yOiAjRkZGRkZGO1xuXHRmb250LXNpemU6IDE4cHg7XG5cdGZvbnQtd2VpZ2h0OiA0MDA7XG59XG5cbi5oZWFkZXItcmVmcmVzaC10aXRsZSB7XG5cdHdpZHRoOiAzMDBycHg7XG5cdHRleHQtYWxpZ246IGNlbnRlcjtcblx0aGVpZ2h0OiA2MHJweDtcblx0bGluZS1oZWlnaHQ6IDYwcnB4O1xuXHRjb2xvcjogI0ZGRkZGRjtcblx0Zm9udC1zaXplOiAxNnB4O1xuXHRmb250LXdlaWdodDogNjAwO1xufVxuXG4uaGVhZGVyLWl0ZW0tbGluZSB7XG5cdGhlaWdodDogNXJweDtcblx0bGluZS1oZWlnaHQ6IDhycHg7XG5cdHdpZHRoOiA2MHJweDtcblx0Ym9yZGVyLXJhZGl1czogOHJweDtcbn1cblxuLnByZXBsYXktd3JhcHBlciB7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGZsZXgtZGlyZWN0aW9uOiByb3c7XG5cdGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXHRtYXJnaW4tdG9wOiAtOTBycHg7XG5cdG1hcmdpbi1sZWZ0OiAzMHJweDtcblx0Ym9yZGVyLXdpZHRoOiAxcHg7XG5cdC8qIGJvcmRlci1jb2xvcjogIzM0MzQzODsgKi9cblx0LyogYmFja2dyb3VuZC1jb2xvcjogIzBjMGMwYzsgKi9cblx0cGFkZGluZzogNnJweCAxNnJweDtcblx0d2lkdGg6IDIwMHJweDtcblx0Ym9yZGVyLXJhZGl1czogMjBycHg7XG59XG5cbi52bG9nLWNvbnRlbnQge1xuXHRtYXJnaW4tdG9wOiAzMHJweDtcblx0aGVpZ2h0OiAxMDBweDtcblx0Y29sb3I6ICNGRkZGRkY7XG5cdGZvbnQtc2l6ZTogMTZweDtcblx0YmFja2dyb3VuZC1jb2xvcjogIzBjMGMwYztcblx0cGFkZGluZy1sZWZ0OiAxMHB4O1xuXHRwYWRkaW5nLXRvcDogMTBweDtcblx0cGFkZGluZy1yaWdodDogMTBweDtcblx0cGFkZGluZy1ib3R0b206IDEwcHg7XG5cdGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG5cbi5idG4tcHJlcGxheSB7XG5cdGJhY2tncm91bmQtY29sb3I6ICMwYzBjMGM7XG5cdGJvcmRlci1jb2xvcjogIzM0MzQzODtcbn1cblxuLmJ0bi1wcmVwbGF5LXRvdWNoZWQge1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjNTQ1NDU2O1xuXHRib3JkZXItY29sb3I6ICMwMDAwMDA7XG59XG5cbi5idG4tcHVibGlzaCB7XG5cdGJhY2tncm91bmQtY29sb3I6ICNlZjI3NGQ7XG59XG5cbi5idG4tcHVibGlzaC10b3VjaGVkIHtcblx0YmFja2dyb3VuZC1jb2xvcjogI2RlNjk4MTtcbn1cblxuLmNob29zZS1jb3ZlciB7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cdGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXHR3aWR0aDogMzYwcnB4O1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwO1xuXHRvcGFjaXR5OiAwLjM7XG5cdGhlaWdodDogNTBweDtcblx0bWFyZ2luLWxlZnQ6IDMwcnB4O1xuXHRib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMTBweDtcblx0Ym9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMTBweDtcblx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHR0b3A6IC01MHB4O1xufVxuXG5cdC50YWdzLXByZXZpZXcge1xuXHRcdG1hcmdpbi10b3A6IDIwcnB4O1xuXHRcdG1hcmdpbi1sZWZ0OiAzMHJweDtcblx0XHRtYXJnaW4tcmlnaHQ6IDMwcnB4O1xuXHRcdGZsZXgtZGlyZWN0aW9uOiByb3c7XG5cdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0XHRmbGV4LXdyYXA6IHdyYXA7XG5cdH1cblxuXHQudGFncy1sYWJlbCB7XG5cdFx0Y29sb3I6ICM5Nzk4YTA7XG5cdFx0Zm9udC1zaXplOiAxNHB4O1xuXHRcdG1hcmdpbi1yaWdodDogMTBycHg7XG5cdH1cblxuXHQudGFncy1jb250YWluZXIge1xuXHRcdGZsZXgtZGlyZWN0aW9uOiByb3c7XG5cdFx0ZmxleC13cmFwOiB3cmFwO1xuXHRcdGZsZXg6IDE7XG5cdH1cblxuXHQudGFnLWl0ZW0ge1xuXHRcdGZsZXgtZGlyZWN0aW9uOiByb3c7XG5cdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjZWYyNzRkO1xuXHRcdGJvcmRlci1yYWRpdXM6IDIwcnB4O1xuXHRcdHBhZGRpbmc6IDhycHggMTZycHg7XG5cdFx0bWFyZ2luLXJpZ2h0OiAxMHJweDtcblx0XHRtYXJnaW4tYm90dG9tOiAxMHJweDtcblx0fVxuXG5cdC50YWctdGV4dCB7XG5cdFx0Y29sb3I6ICNGRkZGRkY7XG5cdFx0Zm9udC1zaXplOiAxMnB4O1xuXHRcdGZvbnQtd2VpZ2h0OiA1MDA7XG5cdH1cblxuXHQudGFnLWNsb3NlIHtcblx0XHRjb2xvcjogI0ZGRkZGRjtcblx0XHRmb250LXNpemU6IDE4cHg7XG5cdFx0Zm9udC13ZWlnaHQ6IGJvbGQ7XG5cdFx0bWFyZ2luLWxlZnQ6IDhycHg7XG5cdFx0bGluZS1oZWlnaHQ6IDE4cHg7XG5cdH1cbjwvc3R5bGU+XG5cbjx0ZW1wbGF0ZT5cblx0PHZpZXcgY2xhc3M9XCJwYWdlXCI+XG5cdFx0PCEtLSDov5nph4zmmK/nirbmgIHmoI8sIOavj+S4qumhtemdoumDvemcgOimgeacie+8jOebrueahOS4jeiuqemhtemdouimhueblueKtuaAgeagjyAtLT5cblx0XHQ8IS0tIDx2aWV3IDpzdHlsZT1cIntoZWlnaHQ6IHN0YXR1c0JhckhlaWdodCArICdweCd9XCI+PC92aWV3PlxuXHRcdDx2aWV3IGNsYXNzPVwiaGVhZGVyXCIgOnN0eWxlPVwie21hcmdpblRvcDpzdGF0dXNCYXJIZWlnaHQrJ3B4J31cIj5cblx0XHRcdDxpbWFnZSBjbGFzcz1cImhlYWRlci1yaWdodC1zZWFyY2hcIlxuXHRcdFx0XHRcdHNyYz1cIi4uLy4uL3N0YXRpYy9pbWFnZXMvaWNvbi1iYWNrLnBuZ1wiICBcblx0XHRcdFx0XHRzdHlsZT1cIndpZHRoOiA0MHJweDtoZWlnaHQ6IDQwcnB4O29wYWNpdHk6IDAuODtcIiBAY2xpY2s9XCJiYWNrKClcIi8+XHRcdFx0XG5cdFx0XHQ8dmlldyBjbGFzcz1cImhlYWRlci1jZW50ZXJcIj5cblx0XHRcdFx0PHZpZXcgY2xhc3M9XCJoZWFkZXItaXRlbVwiPlxuXHRcdFx0XHRcdDx0ZXh0IGNsYXNzPVwiaGVhZGVyLWl0ZW0tdGl0bGVcIj57e2lzRWRpdE1vZGUgPyAn57yW6L6R6KeG6aKRJyA6ICflj5HluIPop4bpopEnfX08L3RleHQ+XG5cdFx0XHRcdDwvdmlldz5cblx0XHRcdDwvdmlldz5cblx0XHRcdDxpbWFnZSBjbGFzcz1cImhlYWRlci1yaWdodC1zZWFyY2hcIiBcblx0XHRcdFx0XHRzcmM9XCIuLi8uLi9zdGF0aWMvaW1hZ2VzL2ljb24tc2VhcmNoLnBuZ1wiICBcblx0XHRcdFx0XHRzdHlsZT1cIndpZHRoOiA1MHJweDtoZWlnaHQ6IDUwcnB4O29wYWNpdHk6IDAuODtcIj5cblx0XHQ8L3ZpZXc+IC0tPlxuXHRcdFxuXHRcdDwhLS0g6L+b5bqm5p2hIC0tPlxuXHRcdDx2aWV3IHN0eWxlPVwibWFyZ2luVG9wOjYwcnB4O2Rpc3BsYXk6IGZsZXg7ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcIlxuXHRcdFx0di1pZj1cInBlcmNlbnRDb21wbGV0ZWQgIT0gMTAwXCI+XG5cdFx0XHQ8cHJvZ3Jlc3MgOnBlcmNlbnQ9XCJwZXJjZW50Q29tcGxldGVkXCIgc3Ryb2tlLXdpZHRoPVwiM1wiIGFjdGl2ZUNvbG9yPVwiI2VmMjc0ZFwiIGJhY2tncm91bmRDb2xvcj1cIiNGMUYxRjFcIlxuXHRcdFx0XHQ6c3R5bGU9XCJ7c2NyZWVuV2lkdGg6IHNjcmVlbldpZHRoICsgJ3B4J31cIiAvPlxuXHRcdFx0PHRleHQgc3R5bGU9XCJjb2xvcjogI0YxRjFGMTtmb250LXNpemU6IDE2cHg7dGV4dC1hbGlnbjogY2VudGVyO21hcmdpbi10b3A6IDIwcHg7XCJcblx0XHRcdFx0OnN0eWxlPVwie3NjcmVlbldpZHRoOiBzY3JlZW5XaWR0aCArICdweCd9XCI+6KeG6aKR5LiK5Lyg5LitfiDor7fogJDlv4PnrYnlvoV+fjwvdGV4dD5cblx0XHRcdDxpbWFnZSBtb2RlPVwiYXNwZWN0Rml0XCIgc3JjPVwiLi4vLi4vc3RhdGljL2ltYWdlcy9sb2FkaW5nLTQuZ2lmXCJcblx0XHRcdFx0c3R5bGU9XCJ3aWR0aDogNjAwcnB4O2hlaWdodDogNjAwcnB4O2FsaWduLXNlbGY6IGNlbnRlcjtcIj5cblx0XHQ8L3ZpZXc+XG5cdFx0XG5cdFx0XG5cdFx0PCEtLSDlj5HluIPkuLvkvZPlhoXlrrkgLS0+XG5cdFx0PHZpZXcgdi1pZj1cInBlcmNlbnRDb21wbGV0ZWQgPT0gMTAwXCI+XG5cdFx0XHQ8aW1hZ2UgOnNyYz1cInRlbXBDb3ZlclwiIG1vZGU9XCJhc3BlY3RGaXRcIlxuXHRcdFx0XHRzdHlsZT1cIm1hcmdpblRvcDogMzBweDt3aWR0aDogMzYwcnB4O2hlaWdodDogNTAwcnB4O2JvcmRlci1yYWRpdXM6IDEwcHg7bWFyZ2luLWxlZnQ6IDMwcnB4O21hcmdpbi10b3A6IDEwcHg7XCI+XG5cdFx0XHQ8L2ltYWdlPlxuXHRcdFx0XG5cdFx0XHQ8dmlldyBjbGFzcz1cImNob29zZS1jb3ZlclwiIEBjbGljaz1cImNob29zZUNvdmVyXCI+XG5cdFx0XHRcdDx0ZXh0IHN0eWxlPVwiY29sb3I6ICNmZmZmZmY7Zm9udC1zaXplOiAxNHB4O2FsaWduLXNlbGY6IGNlbnRlcjtcIj7pgInmi6nlsIHpnaI8L3RleHQ+XG5cdFx0XHQ8L3ZpZXc+XG5cdFx0XHRcblx0XHRcdDx2aWV3IGNsYXNzPVwicHJlcGxheS13cmFwcGVyXCIgXG5cdFx0XHRcdDpjbGFzcz1cInsnYnRuLXByZXBsYXknOiFwcmVwbGF5VG91Y2hlZCwgJ2J0bi1wcmVwbGF5LXRvdWNoZWQnOiBwcmVwbGF5VG91Y2hlZH1cIiBAY2xpY2s9XCJwcmV2aWV3XCJcblx0XHRcdFx0QHRvdWNoc3RhcnQ9XCJ0b3VjaHN0YXJ0UHJlcGxheVwiIEB0b3VjaGVuZD1cInRvdWNoZW5kUHJlcGxheVwiPlxuXHRcdFx0XHQ8aW1hZ2Ugc3JjPVwiLi4vLi4vc3RhdGljL2ltYWdlcy9idG4tcGxheS5wbmdcIiBzdHlsZT1cIndpZHRoOiAyMnJweDtoZWlnaHQ6IDIycnB4O2FsaWduLXNlbGY6IGNlbnRlcjtcIj5cblx0XHRcdFx0PC9pbWFnZT5cblx0XHRcdFx0PHRleHQgc3R5bGU9XCJjb2xvcjogI2U2ZTZlNjtmb250LXNpemU6IDE0cHg7YWxpZ24tc2VsZjogY2VudGVyO21hcmdpbi1sZWZ0OiAxMHJweDtcIj7pooTop4jop4bpopE8L3RleHQ+XG5cdFx0XHQ8L3ZpZXc+XG5cdFx0XHRcblx0XHRcdDwhLS0gOnN0eWxlPVwie3NjcmVlbldpZHRoOiBzY3JlZW5XaWR0aCAtIDE1MCArICdweCd9XCIgLS0+XG5cdFx0PHRleHRhcmVhIGNsYXNzPVwidmxvZy1jb250ZW50XCIgcGxhY2Vob2xkZXItc3R5bGU9XCJjb2xvcjogIzk3OThhMDtcIiBwbGFjZWhvbGRlcj1cIua3u+WKoOWQiOmAgueahOagh+mimOS4juagh+etvuWGheWuue+8jOS+i+Wmgu+8muagh+mimCAj6aOO5pmvICPnvo7po59cIiA6dmFsdWU9XCJ0aXRsZVwiIDptb2RlbD1cInRpdGxlXCIgbWF4bGVuZ3RoPVwiNjBcIiBAaW5wdXQ9XCJ0eXBpbmdDb250ZW50XCIgY29uZmlybS10eXBlPVwiZG9uZVwiPjwvdGV4dGFyZWE+XG5cblx0XHQ8IS0tIOagh+etvumihOiniOWMuuWfnyAtLT5cblx0XHQ8dmlldyB2LWlmPVwidGFncy5sZW5ndGggPiAwXCIgY2xhc3M9XCJ0YWdzLXByZXZpZXdcIj5cblx0XHRcdDx0ZXh0IGNsYXNzPVwidGFncy1sYWJlbFwiPuagh+etvu+8mjwvdGV4dD5cblx0XHRcdDx2aWV3IGNsYXNzPVwidGFncy1jb250YWluZXJcIj5cblx0XHRcdFx0PHZpZXcgdi1mb3I9XCIodGFnLCBpbmRleCkgaW4gdGFnc1wiIDprZXk9XCJpbmRleFwiIGNsYXNzPVwidGFnLWl0ZW1cIiBAY2xpY2s9XCJyZW1vdmVUYWcoaW5kZXgpXCI+XG5cdFx0XHRcdFx0PHRleHQgY2xhc3M9XCJ0YWctdGV4dFwiPiN7e3RhZ319PC90ZXh0PlxuXHRcdFx0XHRcdDx0ZXh0IGNsYXNzPVwidGFnLWNsb3NlXCI+w5c8L3RleHQ+XG5cdFx0XHRcdDwvdmlldz5cblx0XHRcdDwvdmlldz5cblx0XHQ8L3ZpZXc+XG5cdFx0XHRcblx0XHRcdDwhLS0gPHZpZXcgOnN0eWxlPVwie3NjcmVlbldpZHRoOiBzY3JlZW5XaWR0aCArICdweCd9XCIgc3R5bGU9XCJoZWlnaHQ6IDFycHg7YmFja2dyb3VuZC1jb2xvcjogIzM4M2E0NDttYXJnaW4tdG9wOiAyMHJweDtcIj48L3ZpZXc+IC0tPlxuXHRcdFx0XG5cdFx0XHQ8dmlldyA6Y2xhc3M9XCJ7J2J0bi1wdWJsaXNoJzohcHVibGljaFRvdWNoZWQsICdidG4tcHVibGlzaC10b3VjaGVkJzogcHVibGljaFRvdWNoZWR9XCIgXG5cdFx0XHRcdHN0eWxlPVwibWFyZ2luLXRvcDogMzBycHg7aGVpZ2h0OiA5MHJweDtkaXNwbGF5OiBmbGV4O2p1c3RpZnktY29udGVudDogY2VudGVyO2JvcmRlci1yYWRpdXM6IDIwcHg7XCJcblx0XHRcdFx0QHRvdWNoc3RhcnQ9XCJ0b3VjaHN0YXJ0UHVibGljaFwiIEB0b3VjaGVuZD1cInRvdWNoZW5kUHVibGljaFwiIEBjbGljaz1cImRvUHVibGljaFwiPlxuXHRcdFx0XHQ8dGV4dCBzdHlsZT1cImNvbG9yOiAjZTZlNmU2O2ZvbnQtc2l6ZTogMThweDthbGlnbi1zZWxmOiBjZW50ZXI7Zm9udC13ZWlnaHQ6IDUwMDtcIj57e2lzRWRpdE1vZGUgPyAn5L+d5a2Y5L+u5pS5JyA6ICflj5HluIMgVmxvZyd9fTwvdGV4dD5cblx0XHRcdDwvdmlldz5cblx0XHQ8L3ZpZXc+XG5cdFx0XG5cdFx0XG5cdDwvdmlldz5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5cdHZhciBzeXN0ZW0gPSB1bmkuZ2V0U3lzdGVtSW5mb1N5bmMoKTtcblx0dmFyIGFwcCA9IGdldEFwcCgpO1xuXHRleHBvcnQgZGVmYXVsdCB7XG5cdFx0ZGF0YSgpIHtcblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdHB1YmxpY2hUb3VjaGVkOiBmYWxzZSxcblx0XHRcdFx0cHJlcGxheVRvdWNoZWQ6IGZhbHNlLFxuXHRcdFx0XHQvLyB0ZW1wQ292ZXI6IFwiL3N0YXRpYy9mYWNlL2ZhY2UtYXJyb3ctMS5wbmdcIixcblx0XHRcdFx0dGVtcEZpbGVQYXRoOiBcIlwiLFxuXHRcdFx0XHR2aWRlb1VybDogXCJcIixcblx0XHRcdFx0dGVtcENvdmVyOiBcIlwiLFxuXHRcdFx0XHR0aXRsZTogXCJcIixcblx0XHRcdFx0d2lkdGg6IDAsXG5cdFx0XHRcdGhlaWdodDogMCxcblx0XHRcdFx0XG5cdFx0XHRcdHBlcmNlbnRDb21wbGV0ZWQ6IDAsXG5cdFx0XHRcdHRhZ3M6IFtdLCAvLyDmoIfnrb7mlbDnu4Rcblx0XHRcdFx0XG5cdFx0XHRcdC8vIOe8lui+keaooeW8j+ebuOWFs1xuXHRcdFx0XHRpc0VkaXRNb2RlOiBmYWxzZSwgLy8g5piv5ZCm5Li657yW6L6R5qih5byPXG5cdFx0XHRcdGVkaXRWbG9nSWQ6IFwiXCIsIC8vIOe8lui+keeahOinhumikUlEXG5cdFx0XHR9XG5cdFx0fSxcblx0XHRvbkxvYWQocGFyYW1zKSB7XG5cdFx0XHR2YXIgbWUgPSB0aGlzO1xuXHRcdFx0dGhpcy5zdGF0dXNCYXJIZWlnaHQgPSBzeXN0ZW0uc3RhdHVzQmFySGVpZ2h0O1xuXHRcdFx0dGhpcy5zY3JlZW5XaWR0aCA9IHN5c3RlbS5zY3JlZW5XaWR0aDtcblxuXHRcdFx0Ly8g5qOA5p+l5piv5ZCm5Li657yW6L6R5qih5byPXG5cdFx0XHRpZiAocGFyYW1zLm1vZGUgPT09ICdlZGl0JyAmJiBwYXJhbXMudmxvZ0lkKSB7XG5cdFx0XHRcdG1lLmlzRWRpdE1vZGUgPSB0cnVlO1xuXHRcdFx0XHRtZS5lZGl0VmxvZ0lkID0gcGFyYW1zLnZsb2dJZDtcblx0XHRcdFx0bWUucGVyY2VudENvbXBsZXRlZCA9IDEwMDsgLy8g57yW6L6R5qih5byP5LiL55u05o6l5pi+56S657yW6L6R6KGo5Y2VXG5cdFx0XHRcdFxuXHRcdFx0XHQvLyDliqjmgIHorr7nva7lr7zoiKrmoI/moIfpophcblx0XHRcdFx0dW5pLnNldE5hdmlnYXRpb25CYXJUaXRsZSh7XG5cdFx0XHRcdFx0dGl0bGU6ICfnvJbovpHop4bpopEnXG5cdFx0XHRcdH0pO1xuXHRcdFx0XHRcblx0XHRcdFx0Ly8g6I635Y+W6KeG6aKR6K+m5oOF5bm25aGr5YWF6KGo5Y2VXG5cdFx0XHRcdG1lLmZldGNoVmxvZ0RldGFpbChwYXJhbXMudmxvZ0lkKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdG1lLmlzRWRpdE1vZGUgPSBmYWxzZTtcblx0XHRcdFx0XG5cdFx0XHRcdC8vIOWKqOaAgeiuvue9ruWvvOiIquagj+agh+mimO+8iOWPkeW4g+aooeW8j++8iVxuXHRcdFx0XHR1bmkuc2V0TmF2aWdhdGlvbkJhclRpdGxlKHtcblx0XHRcdFx0XHR0aXRsZTogJ+WPkeW4g+inhumikSdcblx0XHRcdFx0fSk7XG5cdFx0XHRcdFxuXHRcdFx0XHQvLyDlj5HluIPmqKHlvI/vvJrkuIrkvKDop4bpopFcblx0XHRcdFxuXHRcdFx0Ly8g5LiK5Liq6aG16Z2i5Lyg6L+H5p2l55qE5paH5Lu25LqL5Lu25a+56LGh77yM5YW25Lit5YyF5ZCr5LqG55u45YaM5Lit6YCJ5oup55qE6KeG6aKR5YaF5a65XG5cdFx0XHR2YXIgZmlsZU9iamVjdEV2ZW50ID0gSlNPTi5wYXJzZShwYXJhbXMuZmlsZU9iamVjdEV2ZW50KTtcblx0XHRcdFx0XG5cdFx0XHRcdC8vIOWkhOeQhuaXtumXtOagvOW8j1xuXHRcdFx0XHRmdW5jdGlvbiBmb3JtYXREYXRlKGRhdGUpIHtcblx0XHRcdFx0ICAgIHZhciB5ZWFyID0gZGF0ZS5nZXRGdWxsWWVhcigpO1xuXHRcdFx0XHQgICAgdmFyIG1vbnRoID0gKGRhdGUuZ2V0TW9udGgoKSArIDEpLnRvU3RyaW5nKCkucGFkU3RhcnQoMiwgJzAnKTtcblx0XHRcdFx0ICAgIHZhciBkYXkgPSBkYXRlLmdldERhdGUoKS50b1N0cmluZygpLnBhZFN0YXJ0KDIsICcwJyk7XG5cdFx0XHRcdCAgICB2YXIgaG91cnMgPSBkYXRlLmdldEhvdXJzKCkudG9TdHJpbmcoKS5wYWRTdGFydCgyLCAnMCcpO1xuXHRcdFx0XHQgICAgdmFyIG1pbnV0ZXMgPSBkYXRlLmdldE1pbnV0ZXMoKS50b1N0cmluZygpLnBhZFN0YXJ0KDIsICcwJyk7XG5cdFx0XHRcdCAgICB2YXIgc2Vjb25kcyA9IGRhdGUuZ2V0U2Vjb25kcygpLnRvU3RyaW5nKCkucGFkU3RhcnQoMiwgJzAnKTtcblx0XHRcdFx0ICAgIHJldHVybiB5ZWFyICsgbW9udGggKyBkYXkgKyAnXycgKyBob3VycyArIG1pbnV0ZXMgKyBzZWNvbmRzO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHZhciB0aW1lID0gZm9ybWF0RGF0ZShuZXcgRGF0ZSgpKTtcblx0XHRcdHZhciB0aW1lcyA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuXHRcdFx0XHRcblx0XHRcdFx0Ly8g6I635Y+W55So5oi35ZCNXG5cdFx0XHRcdHZhciB1c2VySW5mbyA9IGdldEFwcCgpLmdldFVzZXJJbmZvU2Vzc2lvbigpO1xuXHRcdFx0XHR2YXIgdXNlcm5hbWUgPSAnJztcblx0XHRcdFx0aWYgKHVzZXJJbmZvICYmIHVzZXJJbmZvLm5pY2tuYW1lKSB7XG5cdFx0XHRcdFx0Ly8g5riF55CG55So5oi35ZCN5Lit55qE54m55q6K5a2X56ym77yM5Y+q5L+d55WZ5a2X5q+N44CB5pWw5a2X44CB5Lit5paH44CB5LiL5YiS57q/XG5cdFx0XHRcdFx0dXNlcm5hbWUgPSB1c2VySW5mby5uaWNrbmFtZS5yZXBsYWNlKC9bXmEtekEtWjAtOVxcdTRlMDAtXFx1OWZhNV9dL2csICcnKTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdC8vIOaWh+S7tuWQjSA9IOeUqOaIt+WQjSArIOaXtumXtCArIOaXtumXtOaIsyArIC5tcDRcblx0XHRcdFx0dmFyIGNsb3VkUGF0aCA9KHVzZXJuYW1lID8gdXNlcm5hbWUgKyAnXycgOiAnJykgK3RpbWUgKyAnXycgK3RpbWVzICsnLm1wNCc7XG5cblx0XHRcdHVuaUNsb3VkLnVwbG9hZEZpbGUoe1xuXHRcdFx0XHRmaWxlUGF0aDogZmlsZU9iamVjdEV2ZW50LnRlbXBGaWxlUGF0aCxcblx0XHRcdFx0XHRjbG91ZFBhdGg6IGNsb3VkUGF0aCxcblx0XHRcdFx0b25VcGxvYWRQcm9ncmVzcyhwcm9ncmVzc0V2ZW50KSB7XG5cdFx0XHRcdFx0Ly8g6L+b5bqm55m+5YiG5q+UXG5cdFx0XHRcdFx0dmFyIHBlcmNlbnRDb21wbGV0ZWQgPSBNYXRoLnJvdW5kKChwcm9ncmVzc0V2ZW50LmxvYWRlZCAqIDEwMCkgLyBwcm9ncmVzc0V2ZW50LnRvdGFsKTtcblx0XHRcdFx0XHRtZS5wZXJjZW50Q29tcGxldGVkID0gcGVyY2VudENvbXBsZXRlZDtcblx0XHRcdFx0fSxcblx0XHRcdFx0c3VjY2VzcyhmKSB7XG5cdFx0XHRcdFx0dmFyIHZpZGVvVXJsVGVtcCA9IGYuZmlsZVBhdGg7XG5cdFx0XHRcdFx0dmFyIHZpZGVvVXJsID0gZi5maWxlSUQ7XG5cblx0XHRcdFx0XHQvLyDojrflvpfop4bpopHlj4LmlbBcblx0XHRcdFx0XHRtZS50ZW1wRmlsZVBhdGggPSB2aWRlb1VybFRlbXA7XG5cdFx0XHRcdFx0bWUudmlkZW9VcmwgPSB2aWRlb1VybDtcblx0XHRcdFx0XHRcdG1lLnRlbXBDb3ZlciA9IHZpZGVvVXJsICsgXCI/eC1vc3MtcHJvY2Vzcz12aWRlby9zbmFwc2hvdCx0XzEsZl9qcGcsYXJfYXV0b1wiOyAvLyDmiKrluKdcblx0XHRcdFx0XHRtZS53aWR0aCA9IGZpbGVPYmplY3RFdmVudC53aWR0aDtcblx0XHRcdFx0XHRtZS5oZWlnaHQgPSBmaWxlT2JqZWN0RXZlbnQuaGVpZ2h0O1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblx0XHRcdH1cblx0XHR9LFxuXHRcdG1ldGhvZHM6IHtcblx0XHRcdC8vIOiOt+WPluinhumikeivpuaDhe+8iOe8lui+keaooeW8j+S9v+eUqO+8iVxuXHRcdFx0ZmV0Y2hWbG9nRGV0YWlsKHZsb2dJZCkge1xuXHRcdFx0XHR2YXIgbWUgPSB0aGlzO1xuXHRcdFx0XHR2YXIgdXNlcklkID0gZ2V0QXBwKCkuZ2V0VXNlckluZm9TZXNzaW9uKCkuaWQ7XG5cdFx0XHRcdHZhciBzZXJ2ZXJVcmwgPSBhcHAuZ2xvYmFsRGF0YS5zZXJ2ZXJVcmw7XG5cdFx0XHRcdFxuXHRcdFx0XHR1bmkucmVxdWVzdCh7XG5cdFx0XHRcdFx0bWV0aG9kOiBcIkdFVFwiLFxuXHRcdFx0XHRcdGhlYWRlcjoge1xuXHRcdFx0XHRcdFx0aGVhZGVyVXNlcklkOiB1c2VySWQsXG5cdFx0XHRcdFx0XHRoZWFkZXJVc2VyVG9rZW46IGFwcC5nZXRVc2VyU2Vzc2lvblRva2VuKClcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdHVybDogc2VydmVyVXJsICsgXCIvdmxvZy9kZXRhaWw/dXNlcklkPVwiICsgdXNlcklkICsgXCImdmxvZ0lkPVwiICsgdmxvZ0lkLFxuXHRcdFx0XHRcdHN1Y2Nlc3MocmVzdWx0KSB7XG5cdFx0XHRcdFx0XHRpZiAocmVzdWx0LmRhdGEuc3RhdHVzID09IDIwMCkge1xuXHRcdFx0XHRcdFx0XHR2YXIgdmxvZyA9IHJlc3VsdC5kYXRhLmRhdGE7XG5cdFx0XHRcdFx0XHRcdFxuXHRcdFx0XHRcdFx0XHQvLyDosIPor5Xml6Xlv5fvvJrmiZPljbDojrflj5bliLDnmoTop4bpopHmlbDmja5cblx0XHRcdFx0XHRcdFx0Y29uc29sZS5sb2coXCLojrflj5bliLDnmoTop4bpopHor6bmg4XvvJpcIiwgdmxvZyk7XG5cdFx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKFwi6KeG6aKR5qCH6aKY77yIY29udGVudO+8ie+8mlwiLCB2bG9nLmNvbnRlbnQpO1xuXHRcdFx0XHRcdFx0XHRjb25zb2xlLmxvZyhcIuinhumikeagh+mimO+8iHRpdGxl77yJ77yaXCIsIHZsb2cudGl0bGUpO1xuXHRcdFx0XHRcdFx0XHRcblx0XHRcdFx0XHRcdFx0Ly8g5aGr5YWF6KGo5Y2V5pWw5o2uXG5cdFx0XHRcdFx0XHRcdC8vIOazqOaEj++8muWQjuerr+i/lOWbnueahOWtl+auteaYryBjb250ZW5077yM5LiN5pivIHRpdGxlXG5cdFx0XHRcdFx0XHRcdG1lLnZpZGVvVXJsID0gdmxvZy51cmw7XG5cdFx0XHRcdFx0XHRcdG1lLnRlbXBDb3ZlciA9IHZsb2cuY292ZXI7XG5cdFx0XHRcdFx0XHRcdG1lLnRpdGxlID0gdmxvZy5jb250ZW50IHx8IHZsb2cudGl0bGUgfHwgXCJcIjtcblx0XHRcdFx0XHRcdFx0bWUud2lkdGggPSB2bG9nLndpZHRoIHx8IDA7XG5cdFx0XHRcdFx0XHRcdG1lLmhlaWdodCA9IHZsb2cuaGVpZ2h0IHx8IDA7XG5cdFx0XHRcdFx0XHRcdFxuXHRcdFx0XHRcdFx0XHQvLyDosIPor5Xml6Xlv5fvvJrnoa7orqTotYvlgLzlkI7nmoTlgLxcblx0XHRcdFx0XHRcdFx0Y29uc29sZS5sb2coXCLotYvlgLzlkI7nmoQgdGl0bGXvvJpcIiwgbWUudGl0bGUpO1xuXHRcdFx0XHRcdFx0XHRcblx0XHRcdFx0XHRcdFx0Ly8g6Kej5p6Q5qCH562+XG5cdFx0XHRcdFx0XHRcdGlmICh2bG9nLnRhZyAmJiB2bG9nLnRhZy50cmltKCkgIT09ICcnKSB7XG5cdFx0XHRcdFx0XHRcdFx0Ly8g5qCH562+5Y+v6IO95piv6YCX5Y+35YiG6ZqU55qE5a2X56ym5LiyXG5cdFx0XHRcdFx0XHRcdFx0dmFyIHRhZ0FycmF5ID0gdmxvZy50YWcuc3BsaXQoJywnKS5tYXAoZnVuY3Rpb24odGFnKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gdGFnLnRyaW0oKTtcblx0XHRcdFx0XHRcdFx0XHR9KS5maWx0ZXIoZnVuY3Rpb24odGFnKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gdGFnICYmIHRhZy5sZW5ndGggPiAwO1xuXHRcdFx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdFx0XHRcdG1lLnRhZ3MgPSB0YWdBcnJheTtcblx0XHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0XHRtZS50YWdzID0gW107XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XG5cdFx0XHRcdFx0XHRcdC8vIOWmguaenOagh+mimOS4reWMheWQq+agh+etvu+8jOmcgOimgemHjeaWsOino+aekOagh+etvu+8iOWboOS4uuagh+etvuaYr+S7juagh+mimOS4reino+aekOeahO+8iVxuXHRcdFx0XHRcdFx0XHRpZiAobWUudGl0bGUgJiYgbWUudGl0bGUudHJpbSgpICE9PSAnJykge1xuXHRcdFx0XHRcdFx0XHRcdC8vIOS9v+eUqCAkbmV4dFRpY2sg56Gu5L+dIERPTSDmm7TmlrDlkI7lho3op6PmnpDmoIfnrb5cblx0XHRcdFx0XHRcdFx0XHRtZS4kbmV4dFRpY2soZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRtZS5wYXJzZVRhZ3MobWUudGl0bGUpO1xuXHRcdFx0XHRcdFx0XHRcdFx0Ly8g5by65Yi25pu05paw6KeG5Zu+XG5cdFx0XHRcdFx0XHRcdFx0XHRtZS4kZm9yY2VVcGRhdGUoKTtcblx0XHRcdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0XHQvLyDljbPkvb/moIfpopjkuLrnqbrvvIzkuZ/lvLrliLbmm7TmlrDop4blm77ku6Xnoa7kv50gdGV4dGFyZWEg5pi+56S656m65YC8XG5cdFx0XHRcdFx0XHRcdFx0bWUuJG5leHRUaWNrKGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdFx0XHRcdFx0bWUuJGZvcmNlVXBkYXRlKCk7XG5cdFx0XHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdHVuaS5zaG93VG9hc3Qoe1xuXHRcdFx0XHRcdFx0XHRcdHRpdGxlOiByZXN1bHQuZGF0YS5tc2cgfHwgXCLojrflj5bop4bpopHor6bmg4XlpLHotKVcIixcblx0XHRcdFx0XHRcdFx0XHRpY29uOiBcIm5vbmVcIixcblx0XHRcdFx0XHRcdFx0XHRkdXJhdGlvbjogMzAwMFxuXHRcdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRcdFx0Ly8g6I635Y+W5aSx6LSl77yM6L+U5Zue5LiK5LiA6aG1XG5cdFx0XHRcdFx0XHRcdHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0XHRcdFx0dW5pLm5hdmlnYXRlQmFjaygpO1xuXHRcdFx0XHRcdFx0XHR9LCAxNTAwKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdGZhaWwoZXJyKSB7XG5cdFx0XHRcdFx0XHRjb25zb2xlLmVycm9yKFwi6I635Y+W6KeG6aKR6K+m5oOF5aSx6LSl77yaXCIsIGVycik7XG5cdFx0XHRcdFx0XHR1bmkuc2hvd1RvYXN0KHtcblx0XHRcdFx0XHRcdFx0dGl0bGU6IFwi572R57uc6ZSZ6K+v77yM6K+36YeN6K+VXCIsXG5cdFx0XHRcdFx0XHRcdGljb246IFwibm9uZVwiLFxuXHRcdFx0XHRcdFx0XHRkdXJhdGlvbjogMzAwMFxuXHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0XHQvLyDojrflj5blpLHotKXvvIzov5Tlm57kuIrkuIDpobVcblx0XHRcdFx0XHRcdHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0XHRcdHVuaS5uYXZpZ2F0ZUJhY2soKTtcblx0XHRcdFx0XHRcdH0sIDE1MDApO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSk7XG5cdFx0XHR9LFxuXHRcdFx0XG5cdFx0XHR0eXBpbmdDb250ZW50KGUpIHtcblx0XHRcdFx0dmFyIGV2ZW50ID0gZTtcblx0XHRcdFx0dmFyIGNvbnRlbnQgPSBlLmRldGFpbC52YWx1ZTtcblx0XHRcdFx0dGhpcy50aXRsZSA9IGNvbnRlbnQ7XG5cdFx0XHRcdFxuXHRcdFx0XHQvLyDlrp7ml7bop6PmnpDmoIfnrb7vvJrljLnphY0gI+agh+etviDmoLzlvI/vvIgj5ZCO6Z2i6Lef6Z2e56m65qC85a2X56ym77yM55u05Yiw6YGH5Yiw56m65qC85oiW57uT5bC+77yJXG5cdFx0XHRcdHRoaXMucGFyc2VUYWdzKGNvbnRlbnQpO1xuXHRcdFx0fSxcblx0XHRcdFxuXHRcdFx0Ly8g6Kej5p6Q5paH5pys5Lit55qE5qCH562+XG5cdFx0XHRwYXJzZVRhZ3MoY29udGVudCkge1xuXHRcdFx0XHR2YXIgbWUgPSB0aGlzO1xuXHRcdFx0XHR2YXIgdGFncyA9IFtdO1xuXHRcdFx0XHRcblx0XHRcdFx0aWYgKCFjb250ZW50IHx8IGNvbnRlbnQudHJpbSgpID09PSAnJykge1xuXHRcdFx0XHRcdG1lLnRhZ3MgPSBbXTtcblx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdH1cblx0XHRcdFx0XG5cdFx0XHRcdC8vIOWMuemFjSAj5qCH562+IOagvOW8j1xuXHRcdFx0XHQvLyDmraPliJnor7TmmI7vvJojIOWQjumdoui3n+S4gOS4quaIluWkmuS4qumdnuepuuagvOWtl+espu+8jOebtOWIsOmBh+WIsOepuuagvOOAgeaNouihjOaIluWtl+espuS4sue7k+WwvlxuXHRcdFx0XHR2YXIgdGFnUmVnZXggPSAvIyhbXlxccyNdKykvZztcblx0XHRcdFx0dmFyIG1hdGNoO1xuXHRcdFx0XHR2YXIgdGFnU2V0ID0gbmV3IFNldCgpOyAvLyDkvb/nlKhTZXTljrvph41cblx0XHRcdFx0XG5cdFx0XHRcdHdoaWxlICgobWF0Y2ggPSB0YWdSZWdleC5leGVjKGNvbnRlbnQpKSAhPT0gbnVsbCkge1xuXHRcdFx0XHRcdHZhciB0YWcgPSBtYXRjaFsxXS50cmltKCk7XG5cdFx0XHRcdFx0Ly8g6L+H5ruk56m65qCH562+5ZKM6L+H6ZW/55qE5qCH562+77yI6ZmQ5Yi2MjDkuKrlrZfnrKbvvIlcblx0XHRcdFx0XHRpZiAodGFnICYmIHRhZy5sZW5ndGggPiAwICYmIHRhZy5sZW5ndGggPD0gMjApIHtcblx0XHRcdFx0XHRcdHRhZ1NldC5hZGQodGFnKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdFx0XG5cdFx0XHRcdC8vIOi9rOaNouS4uuaVsOe7hFxuXHRcdFx0XHRtZS50YWdzID0gQXJyYXkuZnJvbSh0YWdTZXQpO1xuXHRcdFx0fSxcblx0XHRcdFxuXHRcdFx0Ly8g5Yig6Zmk5qCH562+XG5cdFx0XHRyZW1vdmVUYWcoaW5kZXgpIHtcblx0XHRcdFx0dmFyIG1lID0gdGhpcztcblx0XHRcdFx0dmFyIHRhZ1RvUmVtb3ZlID0gbWUudGFnc1tpbmRleF07XG5cdFx0XHRcdFxuXHRcdFx0XHQvLyDku47mlofmnKzkuK3np7vpmaTor6XmoIfnrb5cblx0XHRcdFx0aWYgKHRhZ1RvUmVtb3ZlKSB7XG5cdFx0XHRcdFx0Ly8g56e76Zmk5paH5pys5Lit5a+55bqU55qEICPmoIfnrb5cblx0XHRcdFx0XHR2YXIgcmVnZXggPSBuZXcgUmVnRXhwKCcjXFxcXHMqJyArIHRhZ1RvUmVtb3ZlLnJlcGxhY2UoL1suKis/XiR7fSgpfFtcXF1cXFxcXS9nLCAnXFxcXCQmJykgKyAnXFxcXHMqJywgJ2cnKTtcblx0XHRcdFx0XHRtZS50aXRsZSA9IG1lLnRpdGxlLnJlcGxhY2UocmVnZXgsICcnKTtcblx0XHRcdFx0XHRcblx0XHRcdFx0XHQvLyDph43mlrDop6PmnpDmoIfnrb5cblx0XHRcdFx0XHRtZS5wYXJzZVRhZ3MobWUudGl0bGUpO1xuXHRcdFx0XHR9XG5cdFx0XHR9LFxuXHRcdFx0ZG9QdWJsaWNoKCkge1xuXHRcdFx0XHR2YXIgbWUgPSB0aGlzO1xuXHRcdFx0XHR2YXIgdXNlcklkID0gZ2V0QXBwKCkuZ2V0VXNlckluZm9TZXNzaW9uKCkuaWQ7XG5cdFx0XHRcdFxuXHRcdFx0XHQvLyDlsIbmoIfnrb7mlbDnu4TovazmjaLkuLrlrZfnrKbkuLLvvIznlKjpgJflj7fliIbpmpTvvIjmiJbmoLnmja7lkI7nq6/pnIDmsYLosIPmlbTmoLzlvI/vvIlcblx0XHRcdFx0dmFyIHRhZ3NTdHIgPSBtZS50YWdzLmpvaW4oJywnKTtcblx0XHRcdFx0XG5cdFx0XHRcdC8vIOWmguaenOagh+etvuS4uuepuu+8jOiuvue9ruS4uuepuuWtl+espuS4suiAjOS4jeaYr3VuZGVmaW5lZFxuXHRcdFx0XHRpZiAoIXRhZ3NTdHIgfHwgdGFnc1N0ci50cmltKCkgPT09ICcnKSB7XG5cdFx0XHRcdFx0dGFnc1N0ciA9ICcnO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0dmFyIHZsb2cgPSB7XG5cdFx0XHRcdFx0XCJ2bG9nZXJJZFwiOiB1c2VySWQsXG5cdFx0XHRcdFx0XCJ1cmxcIjogbWUudmlkZW9VcmwsXG5cdFx0XHRcdFx0XCJjb3ZlclwiOiBtZS50ZW1wQ292ZXIsXG5cdFx0XHRcdFx0XCJ0aXRsZVwiOiBtZS50aXRsZSxcblx0XHRcdFx0XHRcIndpZHRoXCI6IG1lLndpZHRoLFxuXHRcdFx0XHRcdFwiaGVpZ2h0XCI6IG1lLmhlaWdodCxcblx0XHRcdFx0XHRcInRhZ1wiOiB0YWdzU3RyIC8vIOa3u+WKoOagh+etvuWtl+aute+8jOehruS/neWtl+auteWQjeS4juWQjuerr0JP5a+56LGh5LiA6Ie0XG5cdFx0XHRcdH07XG5cblx0XHRcdFx0Ly8g5aaC5p6c5piv57yW6L6R5qih5byP77yM5re75Yqg6KeG6aKRSURcblx0XHRcdFx0aWYgKG1lLmlzRWRpdE1vZGUpIHtcblx0XHRcdFx0XHR2bG9nLmlkID0gbWUuZWRpdFZsb2dJZDtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdC8vIOiwg+ivleaXpeW/l++8muaJk+WNsOWPkemAgeeahOaVsOaNrlxuXHRcdFx0XHRjb25zb2xlLmxvZyhcIuWHhuWkh1wiICsgKG1lLmlzRWRpdE1vZGUgPyBcIuabtOaWsFwiIDogXCLlj5HluINcIikgKyBcIuinhumike+8jOaVsOaNru+8mlwiLCBKU09OLnN0cmluZ2lmeSh2bG9nKSk7XG5cblx0XHRcdFx0Ly8g5Y+R5biD5oiW5pu05paw6KeG6aKRXG5cdFx0XHRcdHZhciBzZXJ2ZXJVcmwgPSBhcHAuZ2xvYmFsRGF0YS5zZXJ2ZXJVcmw7XG5cdFx0XHRcdHZhciByZXF1ZXN0VXJsID0gbWUuaXNFZGl0TW9kZSA/IHNlcnZlclVybCArIFwiL3Zsb2cvdXBkYXRlXCIgOiBzZXJ2ZXJVcmwgKyBcIi92bG9nL3B1Ymxpc2hcIjtcblx0XHRcdFx0dmFyIHJlcXVlc3RNZXRob2QgPSBtZS5pc0VkaXRNb2RlID8gXCJQVVRcIiA6IFwiUE9TVFwiO1xuXHRcdFx0XHRcblx0XHRcdFx0dW5pLnJlcXVlc3Qoe1xuXHRcdFx0XHRcdG1ldGhvZDogcmVxdWVzdE1ldGhvZCxcblx0XHRcdFx0XHRoZWFkZXI6IHtcblx0XHRcdFx0XHRcdFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLCAvLyDnoa7kv53orr7nva5Db250ZW50LVR5cGVcblx0XHRcdFx0XHRcdFwiaGVhZGVyVXNlcklkXCI6IHVzZXJJZCxcblx0XHRcdFx0XHRcdFwiaGVhZGVyVXNlclRva2VuXCI6IGFwcC5nZXRVc2VyU2Vzc2lvblRva2VuKClcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdHVybDogcmVxdWVzdFVybCxcblx0XHRcdFx0XHRkYXRhOiB2bG9nLFxuXHRcdFx0XHRcdHN1Y2Nlc3MocmVzdWx0KSB7XG5cdFx0XHRcdFx0XHRjb25zb2xlLmxvZygobWUuaXNFZGl0TW9kZSA/IFwi5pu05pawXCIgOiBcIuWPkeW4g1wiKSArIFwi6KeG6aKR5ZON5bqU77yaXCIsIHJlc3VsdCk7XG5cdFx0XHRcdFx0XHRcblx0XHRcdFx0XHRcdGlmIChyZXN1bHQuZGF0YS5zdGF0dXMgPT0gMjAwKSB7XG5cdFx0XHRcdFx0XHRcdHVuaS5zaG93VG9hc3Qoe1xuXHRcdFx0XHRcdFx0XHRcdHRpdGxlOiBtZS5pc0VkaXRNb2RlID8gXCLmm7TmlrDmiJDlip/vvIFcIiA6IFwi5Y+R5biD5oiQ5Yqf77yBXCIsXG5cdFx0XHRcdFx0XHRcdFx0aWNvbjogXCJub25lXCJcblx0XHRcdFx0XHRcdFx0fSlcblx0XHRcdFx0XHRcdFx0XG5cdFx0XHRcdFx0XHRcdC8vIOe8lui+keaooeW8j+S4i++8jOi/lOWbnuS4iuS4gOmhte+8iOinhumikeivpuaDhemhte+8iVxuXHRcdFx0XHRcdFx0XHRpZiAobWUuaXNFZGl0TW9kZSkge1xuXHRcdFx0XHRcdFx0XHRcdHVuaS5uYXZpZ2F0ZUJhY2soe1xuXHRcdFx0XHRcdFx0XHRcdFx0ZGVsdGE6IDEsXG5cdFx0XHRcdFx0XHRcdFx0XHRhbmltYXRpb25UeXBlOiAnem9vbS1mYWRlLWluJyxcblx0XHRcdFx0XHRcdFx0XHRcdGFuaW1hdGlvbkR1cmF0aW9uOiAxMDAwXG5cdFx0XHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdFx0Ly8g5Y+R5biD5qih5byP5LiL77yM6L+U5Zue5bm25YiH5o2i5Yiw5Liq5Lq65Lit5b+DXG5cdFx0XHRcdFx0XHRcdHVuaS5uYXZpZ2F0ZUJhY2soe1xuXHRcdFx0XHRcdFx0XHRcdGRlbHRhOiAxLFxuXHRcdFx0XHRcdFx0XHRcdGFuaW1hdGlvblR5cGU6ICd6b29tLWZhZGUtaW4nLFxuXHRcdFx0XHRcdFx0XHRcdGFuaW1hdGlvbkR1cmF0aW9uOiAxMDAwXG5cdFx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdFx0XHRcblx0XHRcdFx0XHRcdFx0dW5pLnN3aXRjaFRhYih7XG5cdFx0XHRcdFx0XHRcdFx0dXJsOiBcIi4uL21lL21lXCJcblx0XHRcdFx0XHRcdFx0fSlcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0dW5pLnNob3dUb2FzdCh7XG5cdFx0XHRcdFx0XHRcdFx0dGl0bGU6IHJlc3VsdC5kYXRhLm1zZyB8fCAobWUuaXNFZGl0TW9kZSA/IFwi5pu05paw5aSx6LSlXCIgOiBcIuWPkeW4g+Wksei0pVwiKSxcblx0XHRcdFx0XHRcdFx0XHRpY29uOiBcIm5vbmVcIixcblx0XHRcdFx0XHRcdFx0XHRkdXJhdGlvbjogMzAwMFxuXHRcdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0ZmFpbChlcnIpIHtcblx0XHRcdFx0XHRcdGNvbnNvbGUuZXJyb3IoKG1lLmlzRWRpdE1vZGUgPyBcIuabtOaWsFwiIDogXCLlj5HluINcIikgKyBcIuinhumikeivt+axguWksei0pe+8mlwiLCBlcnIpO1xuXHRcdFx0XHRcdFx0dW5pLnNob3dUb2FzdCh7XG5cdFx0XHRcdFx0XHRcdHRpdGxlOiBcIue9kee7nOmUmeivr++8jOivt+mHjeivlVwiLFxuXHRcdFx0XHRcdFx0XHRpY29uOiBcIm5vbmVcIixcblx0XHRcdFx0XHRcdFx0ZHVyYXRpb246IDMwMDBcblx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSk7XG5cdFx0XHRcdFxuXHRcdFx0fSxcblx0XHRcdFxuXHRcdFx0cHJldmlldygpIHtcblx0XHRcdFx0dW5pLm5hdmlnYXRlVG8oe1xuXHRcdFx0XHRcdHVybDogXCIvcGFnZXMvcHVibGlzaC9wcmV2aWV3P3ZpZGVvVXJsPVwiICsgdGhpcy52aWRlb1VybCArIFwiJndpZHRoPVwiICsgdGhpcy53aWR0aCArIFwiJmhlaWdodD1cIiArXG5cdFx0XHRcdFx0XHR0aGlzLmhlaWdodCxcblx0XHRcdFx0XHRhbmltYXRpb25UeXBlOiAnc2xpZGUtaW4tYm90dG9tJyxcblx0XHRcdFx0XHRhbmltYXRpb25EdXJhdGlvbjogNTAwXG5cdFx0XHRcdH0pXG5cdFx0XHR9LFxuXHRcdFx0XG5cdFx0XHR0b3VjaHN0YXJ0UHJlcGxheSgpIHtcblx0XHRcdFx0dGhpcy5wcmVwbGF5VG91Y2hlZCA9IHRydWU7XG5cdFx0XHR9LFxuXHRcdFx0XG5cdFx0XHR0b3VjaGVuZFByZXBsYXkoKSB7XG5cdFx0XHRcdHRoaXMucHJlcGxheVRvdWNoZWQgPSBmYWxzZTtcblx0XHRcdH0sXG5cdFx0XHRcblx0XHRcdHRvdWNoc3RhcnRQdWJsaWNoKCkge1xuXHRcdFx0XHR0aGlzLnB1YmxpY2hUb3VjaGVkID0gdHJ1ZTtcblx0XHRcdH0sXG5cdFx0XHRcblx0XHRcdHRvdWNoZW5kUHVibGljaCgpIHtcblx0XHRcdFx0dGhpcy5wdWJsaWNoVG91Y2hlZCA9IGZhbHNlO1xuXHRcdFx0fSxcblx0XHRcdFxuXHRcdFx0Y2hvb3NlQ292ZXIoKSB7XG5cdFx0XHRcdHZhciBtZSA9IHRoaXM7XG5cdFx0XHRcdHZhciB1c2VySWQgPSBnZXRBcHAoKS5nZXRVc2VySW5mb1Nlc3Npb24oKS5pZDtcblx0XHRcdFx0XG5cdFx0XHRcdHVuaS5jaG9vc2VJbWFnZSh7XG5cdFx0XHRcdFx0Y291bnQ6IDEsXG5cdFx0XHRcdFx0c291cmNlVHlwZTogWydhbGJ1bSddLFxuXHRcdFx0XHRcdHN1Y2Nlc3MoZSkge1xuXHRcdFx0XHRcdFx0bWUudGVtcENvdmVyID0gZS50ZW1wRmlsZVBhdGhzWzBdO1xuXHRcdFx0XHRcdFx0XG5cdFx0XHRcdFx0XHQvLyDkuIrkvKDlsIHpnaJcblx0XHRcdFx0XHRcdHZhciBzZXJ2ZXJVcmwgPSBhcHAuZ2xvYmFsRGF0YS5zZXJ2ZXJVcmw7XG5cdFx0XHRcdFx0XHR1bmkudXBsb2FkRmlsZSh7XG5cdFx0XHRcdFx0XHRcdHVybDogc2VydmVyVXJsICsgXCIvZmlsZS91cGxvYWRJbWFnZT91c2VySWQ9XCIgKyB1c2VySWQsXG5cdFx0XHRcdFx0XHRcdG5hbWU6IFwiZmlsZVwiLFxuXHRcdFx0XHRcdFx0XHRmaWxlUGF0aDogbWUudGVtcENvdmVyLFxuXHRcdFx0XHRcdFx0XHRzdWNjZXNzKHJlc3VsdCkge1xuXHRcdFx0XHRcdFx0XHRcdHZhciByZXMgPSBKU09OLnBhcnNlKHJlc3VsdC5kYXRhKTtcblx0XHRcdFx0XHRcdFx0XHRpZiAocmVzLnN0YXR1cyA9PSAyMDApIHtcblx0XHRcdFx0XHRcdFx0XHRcdHZhciBpbWFnZVVybCA9IHJlcy5kYXRhO1xuXHRcdFx0XHRcdFx0XHRcdFx0bWUudGVtcENvdmVyID0gaW1hZ2VVcmw7XG5cdFx0XHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0XHRcdHVuaS5zaG93VG9hc3Qoe1xuXHRcdFx0XHRcdFx0XHRcdFx0XHR0aXRsZTogcmVzdWx0LmRhdGEubXNnLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRpY29uOiBcIm5vbmVcIixcblx0XHRcdFx0XHRcdFx0XHRcdFx0ZHVyYXRpb246IDMwMDBcblx0XHRcdFx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fSlcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0pXG5cdFx0XHR9XG5cdFx0XHRcblx0XHR9XG5cdH1cbjwvc2NyaXB0PlxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///176\n");

/***/ }),
/* 177 */
/*!************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/uni-cloud/dist/index.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__webpack_provided_uni_dot_requireNativePlugin) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 130);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.uniCloud = exports.default = exports.UniCloudError = void 0;
var _regenerator = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/regenerator */ 178));
var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ 180));
var _slicedToArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ 181));
var _typeof2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/typeof */ 137));
var _toConsumableArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ 131));
var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ 185));
var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ 138));
var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ 186));
var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ 188));
var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ 189));
var _wrapNativeSuper2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/wrapNativeSuper */ 190));
var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ 143));
var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ 144));
var _pages = _interopRequireDefault(__webpack_require__(/*! @/pages.json */ 194));
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e35) { throw _e35; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e36) { didErr = true; err = _e36; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
"undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self && self;
function t(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
function n(e, t, n) {
  return e(n = {
    path: t,
    exports: {},
    require: function require(e, t) {
      return function () {
        throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs");
      }(null == t && n.path);
    }
  }, n.exports), n.exports;
}
var s = n(function (e, t) {
    var n;
    e.exports = (n = n || function (e, t) {
      var n = Object.create || function () {
          function e() {}
          return function (t) {
            var n;
            return e.prototype = t, n = new e(), e.prototype = null, n;
          };
        }(),
        s = {},
        r = s.lib = {},
        i = r.Base = {
          extend: function extend(e) {
            var t = n(this);
            return e && t.mixIn(e), t.hasOwnProperty("init") && this.init !== t.init || (t.init = function () {
              t.$super.init.apply(this, arguments);
            }), t.init.prototype = t, t.$super = this, t;
          },
          create: function create() {
            var e = this.extend();
            return e.init.apply(e, arguments), e;
          },
          init: function init() {},
          mixIn: function mixIn(e) {
            for (var t in e) {
              e.hasOwnProperty(t) && (this[t] = e[t]);
            }
            e.hasOwnProperty("toString") && (this.toString = e.toString);
          },
          clone: function clone() {
            return this.init.prototype.extend(this);
          }
        },
        o = r.WordArray = i.extend({
          init: function init(e, n) {
            e = this.words = e || [], this.sigBytes = n != t ? n : 4 * e.length;
          },
          toString: function toString(e) {
            return (e || c).stringify(this);
          },
          concat: function concat(e) {
            var t = this.words,
              n = e.words,
              s = this.sigBytes,
              r = e.sigBytes;
            if (this.clamp(), s % 4) for (var i = 0; i < r; i++) {
              var o = n[i >>> 2] >>> 24 - i % 4 * 8 & 255;
              t[s + i >>> 2] |= o << 24 - (s + i) % 4 * 8;
            } else for (i = 0; i < r; i += 4) {
              t[s + i >>> 2] = n[i >>> 2];
            }
            return this.sigBytes += r, this;
          },
          clamp: function clamp() {
            var t = this.words,
              n = this.sigBytes;
            t[n >>> 2] &= 4294967295 << 32 - n % 4 * 8, t.length = e.ceil(n / 4);
          },
          clone: function clone() {
            var e = i.clone.call(this);
            return e.words = this.words.slice(0), e;
          },
          random: function random(t) {
            for (var n, s = [], r = function r(t) {
                t = t;
                var n = 987654321,
                  s = 4294967295;
                return function () {
                  var r = ((n = 36969 * (65535 & n) + (n >> 16) & s) << 16) + (t = 18e3 * (65535 & t) + (t >> 16) & s) & s;
                  return r /= 4294967296, (r += .5) * (e.random() > .5 ? 1 : -1);
                };
              }, i = 0; i < t; i += 4) {
              var a = r(4294967296 * (n || e.random()));
              n = 987654071 * a(), s.push(4294967296 * a() | 0);
            }
            return new o.init(s, t);
          }
        }),
        a = s.enc = {},
        c = a.Hex = {
          stringify: function stringify(e) {
            for (var t = e.words, n = e.sigBytes, s = [], r = 0; r < n; r++) {
              var i = t[r >>> 2] >>> 24 - r % 4 * 8 & 255;
              s.push((i >>> 4).toString(16)), s.push((15 & i).toString(16));
            }
            return s.join("");
          },
          parse: function parse(e) {
            for (var t = e.length, n = [], s = 0; s < t; s += 2) {
              n[s >>> 3] |= parseInt(e.substr(s, 2), 16) << 24 - s % 8 * 4;
            }
            return new o.init(n, t / 2);
          }
        },
        u = a.Latin1 = {
          stringify: function stringify(e) {
            for (var t = e.words, n = e.sigBytes, s = [], r = 0; r < n; r++) {
              var i = t[r >>> 2] >>> 24 - r % 4 * 8 & 255;
              s.push(String.fromCharCode(i));
            }
            return s.join("");
          },
          parse: function parse(e) {
            for (var t = e.length, n = [], s = 0; s < t; s++) {
              n[s >>> 2] |= (255 & e.charCodeAt(s)) << 24 - s % 4 * 8;
            }
            return new o.init(n, t);
          }
        },
        l = a.Utf8 = {
          stringify: function stringify(e) {
            try {
              return decodeURIComponent(escape(u.stringify(e)));
            } catch (e) {
              throw new Error("Malformed UTF-8 data");
            }
          },
          parse: function parse(e) {
            return u.parse(unescape(encodeURIComponent(e)));
          }
        },
        h = r.BufferedBlockAlgorithm = i.extend({
          reset: function reset() {
            this._data = new o.init(), this._nDataBytes = 0;
          },
          _append: function _append(e) {
            "string" == typeof e && (e = l.parse(e)), this._data.concat(e), this._nDataBytes += e.sigBytes;
          },
          _process: function _process(t) {
            var n = this._data,
              s = n.words,
              r = n.sigBytes,
              i = this.blockSize,
              a = r / (4 * i),
              c = (a = t ? e.ceil(a) : e.max((0 | a) - this._minBufferSize, 0)) * i,
              u = e.min(4 * c, r);
            if (c) {
              for (var l = 0; l < c; l += i) {
                this._doProcessBlock(s, l);
              }
              var h = s.splice(0, c);
              n.sigBytes -= u;
            }
            return new o.init(h, u);
          },
          clone: function clone() {
            var e = i.clone.call(this);
            return e._data = this._data.clone(), e;
          },
          _minBufferSize: 0
        });
      r.Hasher = h.extend({
        cfg: i.extend(),
        init: function init(e) {
          this.cfg = this.cfg.extend(e), this.reset();
        },
        reset: function reset() {
          h.reset.call(this), this._doReset();
        },
        update: function update(e) {
          return this._append(e), this._process(), this;
        },
        finalize: function finalize(e) {
          return e && this._append(e), this._doFinalize();
        },
        blockSize: 16,
        _createHelper: function _createHelper(e) {
          return function (t, n) {
            return new e.init(n).finalize(t);
          };
        },
        _createHmacHelper: function _createHmacHelper(e) {
          return function (t, n) {
            return new d.HMAC.init(e, n).finalize(t);
          };
        }
      });
      var d = s.algo = {};
      return s;
    }(Math), n);
  }),
  r = s,
  i = (n(function (e, t) {
    var n;
    e.exports = (n = r, function (e) {
      var t = n,
        s = t.lib,
        r = s.WordArray,
        i = s.Hasher,
        o = t.algo,
        a = [];
      !function () {
        for (var t = 0; t < 64; t++) {
          a[t] = 4294967296 * e.abs(e.sin(t + 1)) | 0;
        }
      }();
      var c = o.MD5 = i.extend({
        _doReset: function _doReset() {
          this._hash = new r.init([1732584193, 4023233417, 2562383102, 271733878]);
        },
        _doProcessBlock: function _doProcessBlock(e, t) {
          for (var n = 0; n < 16; n++) {
            var s = t + n,
              r = e[s];
            e[s] = 16711935 & (r << 8 | r >>> 24) | 4278255360 & (r << 24 | r >>> 8);
          }
          var i = this._hash.words,
            o = e[t + 0],
            c = e[t + 1],
            p = e[t + 2],
            f = e[t + 3],
            g = e[t + 4],
            m = e[t + 5],
            y = e[t + 6],
            _ = e[t + 7],
            w = e[t + 8],
            v = e[t + 9],
            I = e[t + 10],
            S = e[t + 11],
            b = e[t + 12],
            k = e[t + 13],
            A = e[t + 14],
            T = e[t + 15],
            C = i[0],
            P = i[1],
            O = i[2],
            E = i[3];
          C = u(C, P, O, E, o, 7, a[0]), E = u(E, C, P, O, c, 12, a[1]), O = u(O, E, C, P, p, 17, a[2]), P = u(P, O, E, C, f, 22, a[3]), C = u(C, P, O, E, g, 7, a[4]), E = u(E, C, P, O, m, 12, a[5]), O = u(O, E, C, P, y, 17, a[6]), P = u(P, O, E, C, _, 22, a[7]), C = u(C, P, O, E, w, 7, a[8]), E = u(E, C, P, O, v, 12, a[9]), O = u(O, E, C, P, I, 17, a[10]), P = u(P, O, E, C, S, 22, a[11]), C = u(C, P, O, E, b, 7, a[12]), E = u(E, C, P, O, k, 12, a[13]), O = u(O, E, C, P, A, 17, a[14]), C = l(C, P = u(P, O, E, C, T, 22, a[15]), O, E, c, 5, a[16]), E = l(E, C, P, O, y, 9, a[17]), O = l(O, E, C, P, S, 14, a[18]), P = l(P, O, E, C, o, 20, a[19]), C = l(C, P, O, E, m, 5, a[20]), E = l(E, C, P, O, I, 9, a[21]), O = l(O, E, C, P, T, 14, a[22]), P = l(P, O, E, C, g, 20, a[23]), C = l(C, P, O, E, v, 5, a[24]), E = l(E, C, P, O, A, 9, a[25]), O = l(O, E, C, P, f, 14, a[26]), P = l(P, O, E, C, w, 20, a[27]), C = l(C, P, O, E, k, 5, a[28]), E = l(E, C, P, O, p, 9, a[29]), O = l(O, E, C, P, _, 14, a[30]), C = h(C, P = l(P, O, E, C, b, 20, a[31]), O, E, m, 4, a[32]), E = h(E, C, P, O, w, 11, a[33]), O = h(O, E, C, P, S, 16, a[34]), P = h(P, O, E, C, A, 23, a[35]), C = h(C, P, O, E, c, 4, a[36]), E = h(E, C, P, O, g, 11, a[37]), O = h(O, E, C, P, _, 16, a[38]), P = h(P, O, E, C, I, 23, a[39]), C = h(C, P, O, E, k, 4, a[40]), E = h(E, C, P, O, o, 11, a[41]), O = h(O, E, C, P, f, 16, a[42]), P = h(P, O, E, C, y, 23, a[43]), C = h(C, P, O, E, v, 4, a[44]), E = h(E, C, P, O, b, 11, a[45]), O = h(O, E, C, P, T, 16, a[46]), C = d(C, P = h(P, O, E, C, p, 23, a[47]), O, E, o, 6, a[48]), E = d(E, C, P, O, _, 10, a[49]), O = d(O, E, C, P, A, 15, a[50]), P = d(P, O, E, C, m, 21, a[51]), C = d(C, P, O, E, b, 6, a[52]), E = d(E, C, P, O, f, 10, a[53]), O = d(O, E, C, P, I, 15, a[54]), P = d(P, O, E, C, c, 21, a[55]), C = d(C, P, O, E, w, 6, a[56]), E = d(E, C, P, O, T, 10, a[57]), O = d(O, E, C, P, y, 15, a[58]), P = d(P, O, E, C, k, 21, a[59]), C = d(C, P, O, E, g, 6, a[60]), E = d(E, C, P, O, S, 10, a[61]), O = d(O, E, C, P, p, 15, a[62]), P = d(P, O, E, C, v, 21, a[63]), i[0] = i[0] + C | 0, i[1] = i[1] + P | 0, i[2] = i[2] + O | 0, i[3] = i[3] + E | 0;
        },
        _doFinalize: function _doFinalize() {
          var t = this._data,
            n = t.words,
            s = 8 * this._nDataBytes,
            r = 8 * t.sigBytes;
          n[r >>> 5] |= 128 << 24 - r % 32;
          var i = e.floor(s / 4294967296),
            o = s;
          n[15 + (r + 64 >>> 9 << 4)] = 16711935 & (i << 8 | i >>> 24) | 4278255360 & (i << 24 | i >>> 8), n[14 + (r + 64 >>> 9 << 4)] = 16711935 & (o << 8 | o >>> 24) | 4278255360 & (o << 24 | o >>> 8), t.sigBytes = 4 * (n.length + 1), this._process();
          for (var a = this._hash, c = a.words, u = 0; u < 4; u++) {
            var l = c[u];
            c[u] = 16711935 & (l << 8 | l >>> 24) | 4278255360 & (l << 24 | l >>> 8);
          }
          return a;
        },
        clone: function clone() {
          var e = i.clone.call(this);
          return e._hash = this._hash.clone(), e;
        }
      });
      function u(e, t, n, s, r, i, o) {
        var a = e + (t & n | ~t & s) + r + o;
        return (a << i | a >>> 32 - i) + t;
      }
      function l(e, t, n, s, r, i, o) {
        var a = e + (t & s | n & ~s) + r + o;
        return (a << i | a >>> 32 - i) + t;
      }
      function h(e, t, n, s, r, i, o) {
        var a = e + (t ^ n ^ s) + r + o;
        return (a << i | a >>> 32 - i) + t;
      }
      function d(e, t, n, s, r, i, o) {
        var a = e + (n ^ (t | ~s)) + r + o;
        return (a << i | a >>> 32 - i) + t;
      }
      t.MD5 = i._createHelper(c), t.HmacMD5 = i._createHmacHelper(c);
    }(Math), n.MD5);
  }), n(function (e, t) {
    var n;
    e.exports = (n = r, void function () {
      var e = n,
        t = e.lib.Base,
        s = e.enc.Utf8;
      e.algo.HMAC = t.extend({
        init: function init(e, t) {
          e = this._hasher = new e.init(), "string" == typeof t && (t = s.parse(t));
          var n = e.blockSize,
            r = 4 * n;
          t.sigBytes > r && (t = e.finalize(t)), t.clamp();
          for (var i = this._oKey = t.clone(), o = this._iKey = t.clone(), a = i.words, c = o.words, u = 0; u < n; u++) {
            a[u] ^= 1549556828, c[u] ^= 909522486;
          }
          i.sigBytes = o.sigBytes = r, this.reset();
        },
        reset: function reset() {
          var e = this._hasher;
          e.reset(), e.update(this._iKey);
        },
        update: function update(e) {
          return this._hasher.update(e), this;
        },
        finalize: function finalize(e) {
          var t = this._hasher,
            n = t.finalize(e);
          return t.reset(), t.finalize(this._oKey.clone().concat(n));
        }
      });
    }());
  }), n(function (e, t) {
    e.exports = r.HmacMD5;
  })),
  o = n(function (e, t) {
    e.exports = r.enc.Utf8;
  }),
  a = n(function (e, t) {
    var n;
    e.exports = (n = r, function () {
      var e = n,
        t = e.lib.WordArray;
      function s(e, n, s) {
        for (var r = [], i = 0, o = 0; o < n; o++) {
          if (o % 4) {
            var a = s[e.charCodeAt(o - 1)] << o % 4 * 2,
              c = s[e.charCodeAt(o)] >>> 6 - o % 4 * 2;
            r[i >>> 2] |= (a | c) << 24 - i % 4 * 8, i++;
          }
        }
        return t.create(r, i);
      }
      e.enc.Base64 = {
        stringify: function stringify(e) {
          var t = e.words,
            n = e.sigBytes,
            s = this._map;
          e.clamp();
          for (var r = [], i = 0; i < n; i += 3) {
            for (var o = (t[i >>> 2] >>> 24 - i % 4 * 8 & 255) << 16 | (t[i + 1 >>> 2] >>> 24 - (i + 1) % 4 * 8 & 255) << 8 | t[i + 2 >>> 2] >>> 24 - (i + 2) % 4 * 8 & 255, a = 0; a < 4 && i + .75 * a < n; a++) {
              r.push(s.charAt(o >>> 6 * (3 - a) & 63));
            }
          }
          var c = s.charAt(64);
          if (c) for (; r.length % 4;) {
            r.push(c);
          }
          return r.join("");
        },
        parse: function parse(e) {
          var t = e.length,
            n = this._map,
            r = this._reverseMap;
          if (!r) {
            r = this._reverseMap = [];
            for (var i = 0; i < n.length; i++) {
              r[n.charCodeAt(i)] = i;
            }
          }
          var o = n.charAt(64);
          if (o) {
            var a = e.indexOf(o);
            -1 !== a && (t = a);
          }
          return s(e, t, r);
        },
        _map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="
      };
    }(), n.enc.Base64);
  });
var c = "FUNCTION",
  u = "OBJECT",
  l = "CLIENT_DB",
  h = "pending",
  d = "fulfilled",
  p = "rejected";
function f(e) {
  return Object.prototype.toString.call(e).slice(8, -1).toLowerCase();
}
function g(e) {
  return "object" === f(e);
}
function m(e) {
  return "function" == typeof e;
}
function y(e) {
  return function () {
    try {
      return e.apply(e, arguments);
    } catch (e) {
      console.error(e);
    }
  };
}
var _ = "REJECTED",
  w = "NOT_PENDING";
var v = /*#__PURE__*/function () {
  function v() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      e = _ref.createPromise,
      _ref$retryRule = _ref.retryRule,
      t = _ref$retryRule === void 0 ? _ : _ref$retryRule;
    (0, _classCallCheck2.default)(this, v);
    this.createPromise = e, this.status = null, this.promise = null, this.retryRule = t;
  }
  (0, _createClass2.default)(v, [{
    key: "needRetry",
    get: function get() {
      if (!this.status) return !0;
      switch (this.retryRule) {
        case _:
          return this.status === p;
        case w:
          return this.status !== h;
      }
    }
  }, {
    key: "exec",
    value: function exec() {
      var _this = this;
      return this.needRetry ? (this.status = h, this.promise = this.createPromise().then(function (e) {
        return _this.status = d, Promise.resolve(e);
      }, function (e) {
        return _this.status = p, Promise.reject(e);
      }), this.promise) : this.promise;
    }
  }]);
  return v;
}();
function I(e) {
  return e && "string" == typeof e ? JSON.parse(e) : e;
}
var S = "development" === "development",
  b = "app-plus",
  k = "true" === false || !0 === false,
  A = I([]),
  T = "h5" === b ? "web" : "app-plus" === b || "app-harmony" === b ? "app" : b,
  C = I({"address":["127.0.0.1","26.56.156.58","172.20.10.8","192.168.107.1","192.168.3.1"],"servePort":7000,"debugPort":9000,"initialLaunchType":"local","skipFiles":["<node_internals>/**","D:/HBuilderX/plugins/unicloud/**/*.js"]}),
  P = I([{"provider":"aliyun","spaceName":"shayu","spaceId":"mp-e6f8891e-bc34-4d31-8c67-699d68be55b4","clientSecret":"L9b0/Ppd7c3hgLDc7hmzvA==","endpoint":"https://api.next.bspapp.com"}]) || [],
  O = true;
var E = "";
try {
  E = (__webpack_require__(/*! uni-stat-config */ 195).default || __webpack_require__(/*! uni-stat-config */ 195)).appid;
} catch (e) {}
var x,
  L = {};
function U(e) {
  var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var n, s;
  return n = L, s = e, Object.prototype.hasOwnProperty.call(n, s) || (L[e] = t), L[e];
}
function R() {
  return x || (x = function () {
    if ("undefined" != typeof globalThis) return globalThis;
    if ("undefined" != typeof self) return self;
    if ("undefined" != typeof window) return window;
    function e() {
      return this;
    }
    return void 0 !== e() ? e() : new Function("return this")();
  }(), x);
}
"app" === T && (L = uni._globalUniCloudObj ? uni._globalUniCloudObj : uni._globalUniCloudObj = {});
var N = ["invoke", "success", "fail", "complete"],
  D = U("_globalUniCloudInterceptor");
function M(e, t) {
  D[e] || (D[e] = {}), g(t) && Object.keys(t).forEach(function (n) {
    N.indexOf(n) > -1 && function (e, t, n) {
      var s = D[e][t];
      s || (s = D[e][t] = []), -1 === s.indexOf(n) && m(n) && s.push(n);
    }(e, n, t[n]);
  });
}
function q(e, t) {
  D[e] || (D[e] = {}), g(t) ? Object.keys(t).forEach(function (n) {
    N.indexOf(n) > -1 && function (e, t, n) {
      var s = D[e][t];
      if (!s) return;
      var r = s.indexOf(n);
      r > -1 && s.splice(r, 1);
    }(e, n, t[n]);
  }) : delete D[e];
}
function F(e, t) {
  return e && 0 !== e.length ? e.reduce(function (e, n) {
    return e.then(function () {
      return n(t);
    });
  }, Promise.resolve()) : Promise.resolve();
}
function K(e, t) {
  return D[e] && D[e][t] || [];
}
function j(e) {
  M("callObject", e);
}
var $ = U("_globalUniCloudListener"),
  B = "response",
  W = "needLogin",
  H = "refreshToken",
  J = "failover",
  z = "clientdb",
  V = "cloudfunction",
  G = "cloudobject";
function Q(e) {
  return $[e] || ($[e] = []), $[e];
}
function Y(e, t) {
  var n = Q(e);
  n.includes(t) || n.push(t);
}
function X(e, t) {
  var n = Q(e),
    s = n.indexOf(t);
  -1 !== s && n.splice(s, 1);
}
function Z(e, t) {
  var n = Q(e);
  for (var _e2 = 0; _e2 < n.length; _e2++) {
    (0, n[_e2])(t);
  }
}
var ee,
  te = !1;
function ne() {
  return ee || (ee = new Promise(function (e) {
    te && e(), function t() {
      if ("function" == typeof getCurrentPages) {
        var _t2 = getCurrentPages();
        _t2 && _t2[0] && (te = !0, e());
      }
      te || setTimeout(function () {
        t();
      }, 30);
    }();
  }), ee);
}
function se(e) {
  var t = {};
  for (var _n2 in e) {
    var _s2 = e[_n2];
    m(_s2) && (t[_n2] = y(_s2));
  }
  return t;
}
var re = /*#__PURE__*/function (_Error) {
  (0, _inherits2.default)(re, _Error);
  var _super = _createSuper(re);
  function re(e) {
    var _this2;
    (0, _classCallCheck2.default)(this, re);
    var t = e.message || e.errMsg || "unknown system error";
    _this2 = _super.call(this, t), _this2.errMsg = t, _this2.code = _this2.errCode = e.code || e.errCode || "SYSTEM_ERROR", _this2.errSubject = _this2.subject = e.subject || e.errSubject, _this2.cause = e.cause, _this2.requestId = e.requestId;
    return _this2;
  }
  (0, _createClass2.default)(re, [{
    key: "toJson",
    value: function toJson() {
      var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      if (!(e >= 10)) return e++, {
        errCode: this.errCode,
        errMsg: this.errMsg,
        errSubject: this.errSubject,
        cause: this.cause && this.cause.toJson ? this.cause.toJson(e) : this.cause
      };
    }
  }]);
  return re;
}( /*#__PURE__*/(0, _wrapNativeSuper2.default)(Error));
exports.UniCloudError = re;
var ie = {
  request: function request(e) {
    return uni.request(e);
  },
  uploadFile: function uploadFile(e) {
    return uni.uploadFile(e);
  },
  setStorageSync: function setStorageSync(e, t) {
    return uni.setStorageSync(e, t);
  },
  getStorageSync: function getStorageSync(e) {
    return uni.getStorageSync(e);
  },
  removeStorageSync: function removeStorageSync(e) {
    return uni.removeStorageSync(e);
  },
  clearStorageSync: function clearStorageSync() {
    return uni.clearStorageSync();
  },
  connectSocket: function connectSocket(e) {
    return uni.connectSocket(e);
  }
};
function oe() {
  return {
    token: ie.getStorageSync("uni_id_token") || ie.getStorageSync("uniIdToken"),
    tokenExpired: ie.getStorageSync("uni_id_token_expired")
  };
}
function ae() {
  var _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
    e = _ref2.token,
    t = _ref2.tokenExpired;
  e && ie.setStorageSync("uni_id_token", e), t && ie.setStorageSync("uni_id_token_expired", t);
}
var ce, ue;
function le() {
  return ce || (ce = "mp-weixin" === T && wx.canIUse("getAppBaseInfo") && wx.canIUse("getDeviceInfo") ? _objectSpread(_objectSpread({}, uni.getAppBaseInfo()), uni.getDeviceInfo()) : uni.getSystemInfoSync()), ce;
}
function he() {
  var e, t;
  try {
    if (uni.getLaunchOptionsSync) {
      if (uni.getLaunchOptionsSync.toString().indexOf("not yet implemented") > -1) return;
      var _uni$getLaunchOptions = uni.getLaunchOptionsSync(),
        _n3 = _uni$getLaunchOptions.scene,
        _s3 = _uni$getLaunchOptions.channel;
      e = _s3, t = _n3;
    }
  } catch (e) {}
  return {
    channel: e,
    scene: t
  };
}
var de = {};
function pe() {
  var e = uni.getLocale && uni.getLocale() || "en";
  if (ue) return _objectSpread(_objectSpread(_objectSpread({}, de), ue), {}, {
    locale: e,
    LOCALE: e
  });
  var t = le(),
    n = t.deviceId,
    s = t.osName,
    r = t.uniPlatform,
    i = t.appId,
    o = ["appId", "appLanguage", "appName", "appVersion", "appVersionCode", "appWgtVersion", "browserName", "browserVersion", "deviceBrand", "deviceId", "deviceModel", "deviceType", "osName", "osVersion", "romName", "romVersion", "ua", "hostName", "hostVersion", "uniPlatform", "uniRuntimeVersion", "uniRuntimeVersionCode", "uniCompilerVersion", "uniCompilerVersionCode"];
  for (var _e3 in t) {
    Object.hasOwnProperty.call(t, _e3) && -1 === o.indexOf(_e3) && delete t[_e3];
  }
  return ue = _objectSpread(_objectSpread({
    PLATFORM: r,
    OS: s,
    APPID: i,
    DEVICEID: n
  }, he()), t), _objectSpread(_objectSpread(_objectSpread({}, de), ue), {}, {
    locale: e,
    LOCALE: e
  });
}
var fe = {
  sign: function sign(e, t) {
    var n = "";
    return Object.keys(e).sort().forEach(function (t) {
      e[t] && (n = n + "&" + t + "=" + e[t]);
    }), n = n.slice(1), i(n, t).toString();
  },
  wrappedRequest: function wrappedRequest(e, t) {
    return new Promise(function (n, s) {
      t(Object.assign(e, {
        complete: function complete(e) {
          e || (e = {}), S && "web" === T && e.errMsg && 0 === e.errMsg.indexOf("request:fail") && console.warn("发布H5，需要在uniCloud后台操作，绑定安全域名，否则会因为跨域问题而无法访问。教程参考：https://uniapp.dcloud.io/uniCloud/quickstart?id=useinh5");
          var t = e.data && e.data.header && e.data.header["x-serverless-request-id"] || e.header && e.header["request-id"];
          if (!e.statusCode || e.statusCode >= 400) {
            var _n4 = e.data && e.data.error && e.data.error.code || "SYS_ERR",
              _r = e.data && e.data.error && e.data.error.message || e.errMsg || "request:fail";
            return s(new re({
              code: _n4,
              message: _r,
              requestId: t
            }));
          }
          var r = e.data;
          if (r.error) return s(new re({
            code: r.error.code,
            message: r.error.message,
            requestId: t
          }));
          r.result = r.data, r.requestId = t, delete r.data, n(r);
        }
      }));
    });
  },
  toBase64: function toBase64(e) {
    return a.stringify(o.parse(e));
  }
};
var ge = /*#__PURE__*/function () {
  function ge(e) {
    var _this3 = this;
    (0, _classCallCheck2.default)(this, ge);
    ["spaceId", "clientSecret"].forEach(function (t) {
      if (!Object.prototype.hasOwnProperty.call(e, t)) throw new Error("".concat(t, " required"));
    }), this.config = Object.assign({}, {
      endpoint: 0 === e.spaceId.indexOf("mp-") ? "https://api.next.bspapp.com" : "https://api.bspapp.com"
    }, e), this.config.provider = "aliyun", this.config.requestUrl = this.config.endpoint + "/client", this.config.envType = this.config.envType || "public", this.config.accessTokenKey = "access_token_" + this.config.spaceId, this.adapter = ie, this._getAccessTokenPromiseHub = new v({
      createPromise: function createPromise() {
        return _this3.requestAuth(_this3.setupRequest({
          method: "serverless.auth.user.anonymousAuthorize",
          params: "{}"
        }, "auth")).then(function (e) {
          if (!e.result || !e.result.accessToken) throw new re({
            code: "AUTH_FAILED",
            message: "获取accessToken失败"
          });
          _this3.setAccessToken(e.result.accessToken);
        });
      },
      retryRule: w
    });
  }
  (0, _createClass2.default)(ge, [{
    key: "hasAccessToken",
    get: function get() {
      return !!this.accessToken;
    }
  }, {
    key: "setAccessToken",
    value: function setAccessToken(e) {
      this.accessToken = e;
    }
  }, {
    key: "requestWrapped",
    value: function requestWrapped(e) {
      return fe.wrappedRequest(e, this.adapter.request);
    }
  }, {
    key: "requestAuth",
    value: function requestAuth(e) {
      return this.requestWrapped(e);
    }
  }, {
    key: "request",
    value: function request(e, t) {
      var _this4 = this;
      return Promise.resolve().then(function () {
        return _this4.hasAccessToken ? t ? _this4.requestWrapped(e) : _this4.requestWrapped(e).catch(function (t) {
          return new Promise(function (e, n) {
            !t || "GATEWAY_INVALID_TOKEN" !== t.code && "InvalidParameter.InvalidToken" !== t.code ? n(t) : e();
          }).then(function () {
            return _this4.getAccessToken();
          }).then(function () {
            var t = _this4.rebuildRequest(e);
            return _this4.request(t, !0);
          });
        }) : _this4.getAccessToken().then(function () {
          var t = _this4.rebuildRequest(e);
          return _this4.request(t, !0);
        });
      });
    }
  }, {
    key: "rebuildRequest",
    value: function rebuildRequest(e) {
      var t = Object.assign({}, e);
      return t.data.token = this.accessToken, t.header["x-basement-token"] = this.accessToken, t.header["x-serverless-sign"] = fe.sign(t.data, this.config.clientSecret), t;
    }
  }, {
    key: "setupRequest",
    value: function setupRequest(e, t) {
      var n = Object.assign({}, e, {
          spaceId: this.config.spaceId,
          timestamp: Date.now()
        }),
        s = {
          "Content-Type": "application/json"
        };
      return "auth" !== t && (n.token = this.accessToken, s["x-basement-token"] = this.accessToken), s["x-serverless-sign"] = fe.sign(n, this.config.clientSecret), {
        url: this.config.requestUrl,
        method: "POST",
        data: n,
        dataType: "json",
        header: s
      };
    }
  }, {
    key: "getAccessToken",
    value: function getAccessToken() {
      return this._getAccessTokenPromiseHub.exec();
    }
  }, {
    key: "authorize",
    value: function () {
      var _authorize = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee() {
        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this.getAccessToken();
              case 2:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));
      function authorize() {
        return _authorize.apply(this, arguments);
      }
      return authorize;
    }()
  }, {
    key: "callFunction",
    value: function callFunction(e) {
      var t = {
        method: "serverless.function.runtime.invoke",
        params: JSON.stringify({
          functionTarget: e.name,
          functionArgs: e.data || {}
        })
      };
      return this.request(_objectSpread(_objectSpread({}, this.setupRequest(t)), {}, {
        timeout: e.timeout
      }));
    }
  }, {
    key: "getOSSUploadOptionsFromPath",
    value: function getOSSUploadOptionsFromPath(e) {
      var t = {
        method: "serverless.file.resource.generateProximalSign",
        params: JSON.stringify(e)
      };
      return this.request(this.setupRequest(t));
    }
  }, {
    key: "uploadFileToOSS",
    value: function uploadFileToOSS(_ref3) {
      var _this5 = this;
      var e = _ref3.url,
        t = _ref3.formData,
        n = _ref3.name,
        s = _ref3.filePath,
        r = _ref3.fileType,
        i = _ref3.onUploadProgress;
      return new Promise(function (o, a) {
        var c = _this5.adapter.uploadFile({
          url: e,
          formData: t,
          name: n,
          filePath: s,
          fileType: r,
          header: {
            "X-OSS-server-side-encrpytion": "AES256"
          },
          success: function success(e) {
            e && e.statusCode < 400 ? o(e) : a(new re({
              code: "UPLOAD_FAILED",
              message: "文件上传失败"
            }));
          },
          fail: function fail(e) {
            a(new re({
              code: e.code || "UPLOAD_FAILED",
              message: e.message || e.errMsg || "文件上传失败"
            }));
          }
        });
        "function" == typeof i && c && "function" == typeof c.onProgressUpdate && c.onProgressUpdate(function (e) {
          i({
            loaded: e.totalBytesSent,
            total: e.totalBytesExpectedToSend
          });
        });
      });
    }
  }, {
    key: "reportOSSUpload",
    value: function reportOSSUpload(e) {
      var t = {
        method: "serverless.file.resource.report",
        params: JSON.stringify(e)
      };
      return this.request(this.setupRequest(t));
    }
  }, {
    key: "uploadFile",
    value: function () {
      var _uploadFile = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee2(_ref4) {
        var e, t, _ref4$fileType, n, _ref4$cloudPathAsReal, s, r, i, o, a, c, u, l, h, d, p, g, m, y, _, _e4, w;
        return _regenerator.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                e = _ref4.filePath, t = _ref4.cloudPath, _ref4$fileType = _ref4.fileType, n = _ref4$fileType === void 0 ? "image" : _ref4$fileType, _ref4$cloudPathAsReal = _ref4.cloudPathAsRealPath, s = _ref4$cloudPathAsReal === void 0 ? !1 : _ref4$cloudPathAsReal, r = _ref4.onUploadProgress, i = _ref4.config;
                if (!("string" !== f(t))) {
                  _context2.next = 3;
                  break;
                }
                throw new re({
                  code: "INVALID_PARAM",
                  message: "cloudPath必须为字符串类型"
                });
              case 3:
                if (t = t.trim()) {
                  _context2.next = 5;
                  break;
                }
                throw new re({
                  code: "INVALID_PARAM",
                  message: "cloudPath不可为空"
                });
              case 5:
                if (!/:\/\//.test(t)) {
                  _context2.next = 7;
                  break;
                }
                throw new re({
                  code: "INVALID_PARAM",
                  message: "cloudPath不合法"
                });
              case 7:
                o = i && i.envType || this.config.envType;
                if (!(s && ("/" !== t[0] && (t = "/" + t), t.indexOf("\\") > -1))) {
                  _context2.next = 10;
                  break;
                }
                throw new re({
                  code: "INVALID_PARAM",
                  message: "使用cloudPath作为路径时，cloudPath不可包含“\\”"
                });
              case 10:
                _context2.next = 12;
                return this.getOSSUploadOptionsFromPath({
                  env: o,
                  filename: s ? t.split("/").pop() : t,
                  fileId: s ? t : void 0
                });
              case 12:
                a = _context2.sent.result;
                c = "https://" + a.cdnDomain + "/" + a.ossPath;
                u = a.securityToken;
                l = a.accessKeyId;
                h = a.signature;
                d = a.host;
                p = a.ossPath;
                g = a.id;
                m = a.policy;
                y = a.ossCallbackUrl;
                _ = {
                  "Cache-Control": "max-age=2592000",
                  "Content-Disposition": "attachment",
                  OSSAccessKeyId: l,
                  Signature: h,
                  host: d,
                  id: g,
                  key: p,
                  policy: m,
                  success_action_status: 200
                };
                if (u && (_["x-oss-security-token"] = u), y) {
                  _e4 = JSON.stringify({
                    callbackUrl: y,
                    callbackBody: JSON.stringify({
                      fileId: g,
                      spaceId: this.config.spaceId
                    }),
                    callbackBodyType: "application/json"
                  });
                  _.callback = fe.toBase64(_e4);
                }
                w = {
                  url: "https://" + a.host,
                  formData: _,
                  fileName: "file",
                  name: "file",
                  filePath: e,
                  fileType: n
                };
                _context2.next = 27;
                return this.uploadFileToOSS(Object.assign({}, w, {
                  onUploadProgress: r
                }));
              case 27:
                if (!y) {
                  _context2.next = 29;
                  break;
                }
                return _context2.abrupt("return", {
                  success: !0,
                  filePath: e,
                  fileID: c
                });
              case 29:
                _context2.next = 31;
                return this.reportOSSUpload({
                  id: g
                });
              case 31:
                if (!_context2.sent.success) {
                  _context2.next = 33;
                  break;
                }
                return _context2.abrupt("return", {
                  success: !0,
                  filePath: e,
                  fileID: c
                });
              case 33:
                throw new re({
                  code: "UPLOAD_FAILED",
                  message: "文件上传失败"
                });
              case 34:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));
      function uploadFile(_x) {
        return _uploadFile.apply(this, arguments);
      }
      return uploadFile;
    }()
  }, {
    key: "getTempFileURL",
    value: function getTempFileURL() {
      var _this6 = this;
      var _ref5 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        e = _ref5.fileList;
      return new Promise(function (t, n) {
        Array.isArray(e) && 0 !== e.length || n(new re({
          code: "INVALID_PARAM",
          message: "fileList的元素必须是非空的字符串"
        })), _this6.getFileInfo({
          fileList: e
        }).then(function (n) {
          t({
            fileList: e.map(function (e, t) {
              var s = n.fileList[t];
              return {
                fileID: e,
                tempFileURL: s && s.url || e
              };
            })
          });
        });
      });
    }
  }, {
    key: "getFileInfo",
    value: function () {
      var _getFileInfo = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee3() {
        var _ref6,
          e,
          t,
          _args3 = arguments;
        return _regenerator.default.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _ref6 = _args3.length > 0 && _args3[0] !== undefined ? _args3[0] : {}, e = _ref6.fileList;
                if (!(!Array.isArray(e) || 0 === e.length)) {
                  _context3.next = 3;
                  break;
                }
                throw new re({
                  code: "INVALID_PARAM",
                  message: "fileList的元素必须是非空的字符串"
                });
              case 3:
                t = {
                  method: "serverless.file.resource.info",
                  params: JSON.stringify({
                    id: e.map(function (e) {
                      return e.split("?")[0];
                    }).join(",")
                  })
                };
                _context3.next = 6;
                return this.request(this.setupRequest(t));
              case 6:
                _context3.t0 = _context3.sent.result;
                return _context3.abrupt("return", {
                  fileList: _context3.t0
                });
              case 8:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));
      function getFileInfo() {
        return _getFileInfo.apply(this, arguments);
      }
      return getFileInfo;
    }()
  }]);
  return ge;
}();
var me = {
  init: function init(e) {
    var t = new ge(e),
      n = {
        signInAnonymously: function signInAnonymously() {
          return t.authorize();
        },
        getLoginState: function getLoginState() {
          return Promise.resolve(!1);
        }
      };
    return t.auth = function () {
      return n;
    }, t.customAuth = t.auth, t;
  }
};
var ye = "undefined" != typeof location && "http:" === location.protocol ? "http:" : "https:";
var _e;
!function (e) {
  e.local = "local", e.none = "none", e.session = "session";
}(_e || (_e = {}));
var we = function we() {},
  ve = n(function (e, t) {
    var n;
    e.exports = (n = r, function (e) {
      var t = n,
        s = t.lib,
        r = s.WordArray,
        i = s.Hasher,
        o = t.algo,
        a = [],
        c = [];
      !function () {
        function t(t) {
          for (var n = e.sqrt(t), s = 2; s <= n; s++) {
            if (!(t % s)) return !1;
          }
          return !0;
        }
        function n(e) {
          return 4294967296 * (e - (0 | e)) | 0;
        }
        for (var s = 2, r = 0; r < 64;) {
          t(s) && (r < 8 && (a[r] = n(e.pow(s, .5))), c[r] = n(e.pow(s, 1 / 3)), r++), s++;
        }
      }();
      var u = [],
        l = o.SHA256 = i.extend({
          _doReset: function _doReset() {
            this._hash = new r.init(a.slice(0));
          },
          _doProcessBlock: function _doProcessBlock(e, t) {
            for (var n = this._hash.words, s = n[0], r = n[1], i = n[2], o = n[3], a = n[4], l = n[5], h = n[6], d = n[7], p = 0; p < 64; p++) {
              if (p < 16) u[p] = 0 | e[t + p];else {
                var f = u[p - 15],
                  g = (f << 25 | f >>> 7) ^ (f << 14 | f >>> 18) ^ f >>> 3,
                  m = u[p - 2],
                  y = (m << 15 | m >>> 17) ^ (m << 13 | m >>> 19) ^ m >>> 10;
                u[p] = g + u[p - 7] + y + u[p - 16];
              }
              var _ = s & r ^ s & i ^ r & i,
                w = (s << 30 | s >>> 2) ^ (s << 19 | s >>> 13) ^ (s << 10 | s >>> 22),
                v = d + ((a << 26 | a >>> 6) ^ (a << 21 | a >>> 11) ^ (a << 7 | a >>> 25)) + (a & l ^ ~a & h) + c[p] + u[p];
              d = h, h = l, l = a, a = o + v | 0, o = i, i = r, r = s, s = v + (w + _) | 0;
            }
            n[0] = n[0] + s | 0, n[1] = n[1] + r | 0, n[2] = n[2] + i | 0, n[3] = n[3] + o | 0, n[4] = n[4] + a | 0, n[5] = n[5] + l | 0, n[6] = n[6] + h | 0, n[7] = n[7] + d | 0;
          },
          _doFinalize: function _doFinalize() {
            var t = this._data,
              n = t.words,
              s = 8 * this._nDataBytes,
              r = 8 * t.sigBytes;
            return n[r >>> 5] |= 128 << 24 - r % 32, n[14 + (r + 64 >>> 9 << 4)] = e.floor(s / 4294967296), n[15 + (r + 64 >>> 9 << 4)] = s, t.sigBytes = 4 * n.length, this._process(), this._hash;
          },
          clone: function clone() {
            var e = i.clone.call(this);
            return e._hash = this._hash.clone(), e;
          }
        });
      t.SHA256 = i._createHelper(l), t.HmacSHA256 = i._createHmacHelper(l);
    }(Math), n.SHA256);
  }),
  Ie = ve,
  Se = n(function (e, t) {
    e.exports = r.HmacSHA256;
  });
var be = function be() {
  var e;
  if (!Promise) {
    e = function e() {}, e.promise = {};
    var _t3 = function _t3() {
      throw new re({
        message: 'Your Node runtime does support ES6 Promises. Set "global.Promise" to your preferred implementation of promises.'
      });
    };
    return Object.defineProperty(e.promise, "then", {
      get: _t3
    }), Object.defineProperty(e.promise, "catch", {
      get: _t3
    }), e;
  }
  var t = new Promise(function (t, n) {
    e = function e(_e5, s) {
      return _e5 ? n(_e5) : t(s);
    };
  });
  return e.promise = t, e;
};
function ke(e) {
  return void 0 === e;
}
function Ae(e) {
  return "[object Null]" === Object.prototype.toString.call(e);
}
function Te() {
  var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
  return e.replace(/([\s\S]+)\s+(请前往云开发AI小助手查看问题：.*)/, "$1");
}
function Ce() {
  var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 32;
  var t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",
    n = t.length;
  var s = "";
  for (var _r2 = 0; _r2 < e; _r2++) {
    s += t.charAt(Math.floor(Math.random() * n));
  }
  return s;
}
var Pe;
function Oe(e) {
  var t = (n = e, "[object Array]" === Object.prototype.toString.call(n) ? e : [e]);
  var n;
  var _iterator = _createForOfIteratorHelper(t),
    _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var _e6 = _step.value;
      var _t4 = _e6.isMatch,
        _n5 = _e6.genAdapter,
        _s4 = _e6.runtime;
      if (_t4()) return {
        adapter: _n5(),
        runtime: _s4
      };
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
}
!function (e) {
  e.WEB = "web", e.WX_MP = "wx_mp";
}(Pe || (Pe = {}));
var Ee = {
    adapter: null,
    runtime: void 0
  },
  xe = ["anonymousUuidKey"];
var Le = /*#__PURE__*/function (_we) {
  (0, _inherits2.default)(Le, _we);
  var _super2 = _createSuper(Le);
  function Le() {
    var _this7;
    (0, _classCallCheck2.default)(this, Le);
    _this7 = _super2.call(this), Ee.adapter.root.tcbObject || (Ee.adapter.root.tcbObject = {});
    return _this7;
  }
  (0, _createClass2.default)(Le, [{
    key: "setItem",
    value: function setItem(e, t) {
      Ee.adapter.root.tcbObject[e] = t;
    }
  }, {
    key: "getItem",
    value: function getItem(e) {
      return Ee.adapter.root.tcbObject[e];
    }
  }, {
    key: "removeItem",
    value: function removeItem(e) {
      delete Ee.adapter.root.tcbObject[e];
    }
  }, {
    key: "clear",
    value: function clear() {
      delete Ee.adapter.root.tcbObject;
    }
  }]);
  return Le;
}(we);
function Ue(e, t) {
  switch (e) {
    case "local":
      return t.localStorage || new Le();
    case "none":
      return new Le();
    default:
      return t.sessionStorage || new Le();
  }
}
var Re = /*#__PURE__*/function () {
  function Re(e) {
    (0, _classCallCheck2.default)(this, Re);
    if (!this._storage) {
      this._persistence = Ee.adapter.primaryStorage || e.persistence, this._storage = Ue(this._persistence, Ee.adapter);
      var _t5 = "access_token_".concat(e.env),
        _n6 = "access_token_expire_".concat(e.env),
        _s5 = "refresh_token_".concat(e.env),
        _r3 = "anonymous_uuid_".concat(e.env),
        _i = "login_type_".concat(e.env),
        _o = "device_id",
        _a = "token_type_".concat(e.env),
        _c = "user_info_".concat(e.env);
      this.keys = {
        accessTokenKey: _t5,
        accessTokenExpireKey: _n6,
        refreshTokenKey: _s5,
        anonymousUuidKey: _r3,
        loginTypeKey: _i,
        userInfoKey: _c,
        deviceIdKey: _o,
        tokenTypeKey: _a
      };
    }
  }
  (0, _createClass2.default)(Re, [{
    key: "updatePersistence",
    value: function updatePersistence(e) {
      if (e === this._persistence) return;
      var t = "local" === this._persistence;
      this._persistence = e;
      var n = Ue(e, Ee.adapter);
      for (var _e7 in this.keys) {
        var _s6 = this.keys[_e7];
        if (t && xe.includes(_e7)) continue;
        var _r4 = this._storage.getItem(_s6);
        ke(_r4) || Ae(_r4) || (n.setItem(_s6, _r4), this._storage.removeItem(_s6));
      }
      this._storage = n;
    }
  }, {
    key: "setStore",
    value: function setStore(e, t, n) {
      if (!this._storage) return;
      var s = {
          version: n || "localCachev1",
          content: t
        },
        r = JSON.stringify(s);
      try {
        this._storage.setItem(e, r);
      } catch (e) {
        throw e;
      }
    }
  }, {
    key: "getStore",
    value: function getStore(e, t) {
      try {
        if (!this._storage) return;
      } catch (e) {
        return "";
      }
      t = t || "localCachev1";
      var n = this._storage.getItem(e);
      if (!n) return "";
      if (n.indexOf(t) >= 0) {
        return JSON.parse(n).content;
      }
      return "";
    }
  }, {
    key: "removeStore",
    value: function removeStore(e) {
      this._storage.removeItem(e);
    }
  }]);
  return Re;
}();
var Ne = {},
  De = {};
function Me(e) {
  return Ne[e];
}
var qe = /*#__PURE__*/(0, _createClass2.default)(function qe(e, t) {
  (0, _classCallCheck2.default)(this, qe);
  this.data = t || null, this.name = e;
});
var Fe = /*#__PURE__*/function (_qe) {
  (0, _inherits2.default)(Fe, _qe);
  var _super3 = _createSuper(Fe);
  function Fe(e, t) {
    var _this8;
    (0, _classCallCheck2.default)(this, Fe);
    _this8 = _super3.call(this, "error", {
      error: e,
      data: t
    }), _this8.error = e;
    return _this8;
  }
  return (0, _createClass2.default)(Fe);
}(qe);
var Ke = new ( /*#__PURE__*/function () {
  function _class() {
    (0, _classCallCheck2.default)(this, _class);
    this._listeners = {};
  }
  (0, _createClass2.default)(_class, [{
    key: "on",
    value: function on(e, t) {
      return function (e, t, n) {
        n[e] = n[e] || [], n[e].push(t);
      }(e, t, this._listeners), this;
    }
  }, {
    key: "off",
    value: function off(e, t) {
      return function (e, t, n) {
        if (n && n[e]) {
          var _s7 = n[e].indexOf(t);
          -1 !== _s7 && n[e].splice(_s7, 1);
        }
      }(e, t, this._listeners), this;
    }
  }, {
    key: "fire",
    value: function fire(e, t) {
      if (e instanceof Fe) return console.error(e.error), this;
      var n = "string" == typeof e ? new qe(e, t || {}) : e;
      var s = n.name;
      if (this._listens(s)) {
        n.target = this;
        var _e8 = this._listeners[s] ? (0, _toConsumableArray2.default)(this._listeners[s]) : [];
        var _iterator2 = _createForOfIteratorHelper(_e8),
          _step2;
        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            var _t6 = _step2.value;
            _t6.call(this, n);
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }
      }
      return this;
    }
  }, {
    key: "_listens",
    value: function _listens(e) {
      return this._listeners[e] && this._listeners[e].length > 0;
    }
  }]);
  return _class;
}())();
function je(e, t) {
  Ke.on(e, t);
}
function $e(e) {
  var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  Ke.fire(e, t);
}
function Be(e, t) {
  Ke.off(e, t);
}
var We = "loginStateChanged",
  He = "loginStateExpire",
  Je = "loginTypeChanged",
  ze = "anonymousConverted",
  Ve = "refreshAccessToken";
var Ge;
!function (e) {
  e.ANONYMOUS = "ANONYMOUS", e.WECHAT = "WECHAT", e.WECHAT_PUBLIC = "WECHAT-PUBLIC", e.WECHAT_OPEN = "WECHAT-OPEN", e.CUSTOM = "CUSTOM", e.EMAIL = "EMAIL", e.USERNAME = "USERNAME", e.NULL = "NULL";
}(Ge || (Ge = {}));
var Qe = /*#__PURE__*/function () {
  function Qe() {
    (0, _classCallCheck2.default)(this, Qe);
    this._fnPromiseMap = new Map();
  }
  (0, _createClass2.default)(Qe, [{
    key: "run",
    value: function () {
      var _run = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee5(e, t) {
        var _this9 = this;
        var n;
        return _regenerator.default.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                n = this._fnPromiseMap.get(e);
                return _context5.abrupt("return", (n || (n = new Promise( /*#__PURE__*/function () {
                  var _ref7 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee4(n, s) {
                    var _s8;
                    return _regenerator.default.wrap(function _callee4$(_context4) {
                      while (1) {
                        switch (_context4.prev = _context4.next) {
                          case 0:
                            _context4.prev = 0;
                            _context4.next = 3;
                            return _this9._runIdlePromise();
                          case 3:
                            _s8 = t();
                            _context4.t0 = n;
                            _context4.next = 7;
                            return _s8;
                          case 7:
                            _context4.t1 = _context4.sent;
                            (0, _context4.t0)(_context4.t1);
                            _context4.next = 14;
                            break;
                          case 11:
                            _context4.prev = 11;
                            _context4.t2 = _context4["catch"](0);
                            s(_context4.t2);
                          case 14:
                            _context4.prev = 14;
                            _this9._fnPromiseMap.delete(e);
                            return _context4.finish(14);
                          case 17:
                          case "end":
                            return _context4.stop();
                        }
                      }
                    }, _callee4, null, [[0, 11, 14, 17]]);
                  }));
                  return function (_x4, _x5) {
                    return _ref7.apply(this, arguments);
                  };
                }()), this._fnPromiseMap.set(e, n)), n));
              case 2:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));
      function run(_x2, _x3) {
        return _run.apply(this, arguments);
      }
      return run;
    }()
  }, {
    key: "_runIdlePromise",
    value: function _runIdlePromise() {
      return Promise.resolve();
    }
  }]);
  return Qe;
}();
var Ye = /*#__PURE__*/function () {
  function Ye(e) {
    (0, _classCallCheck2.default)(this, Ye);
    this._singlePromise = new Qe(), this._cache = Me(e.env), this._baseURL = "https://".concat(e.env, ".ap-shanghai.tcb-api.tencentcloudapi.com"), this._reqClass = new Ee.adapter.reqClass({
      timeout: e.timeout,
      timeoutMsg: "\u8BF7\u6C42\u5728".concat(e.timeout / 1e3, "s\u5185\u672A\u5B8C\u6210\uFF0C\u5DF2\u4E2D\u65AD"),
      restrictedMethods: ["post"]
    });
  }
  (0, _createClass2.default)(Ye, [{
    key: "_getDeviceId",
    value: function _getDeviceId() {
      if (this._deviceID) return this._deviceID;
      var e = this._cache.keys.deviceIdKey;
      var t = this._cache.getStore(e);
      return "string" == typeof t && t.length >= 16 && t.length <= 48 || (t = Ce(), this._cache.setStore(e, t)), this._deviceID = t, t;
    }
  }, {
    key: "_request",
    value: function () {
      var _request2 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee6(e, t) {
        var n,
          s,
          _e9,
          _t7,
          _n7,
          _args6 = arguments;
        return _regenerator.default.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                n = _args6.length > 2 && _args6[2] !== undefined ? _args6[2] : {};
                s = {
                  "x-request-id": Ce(),
                  "x-device-id": this._getDeviceId()
                };
                if (!n.withAccessToken) {
                  _context6.next = 9;
                  break;
                }
                _e9 = this._cache.keys.tokenTypeKey;
                _context6.next = 6;
                return this.getAccessToken();
              case 6:
                _t7 = _context6.sent;
                _n7 = this._cache.getStore(_e9);
                s.authorization = "".concat(_n7, " ").concat(_t7);
              case 9:
                return _context6.abrupt("return", this._reqClass["get" === n.method ? "get" : "post"]({
                  url: "".concat(this._baseURL).concat(e),
                  data: t,
                  headers: s
                }));
              case 10:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));
      function _request(_x6, _x7) {
        return _request2.apply(this, arguments);
      }
      return _request;
    }()
  }, {
    key: "_fetchAccessToken",
    value: function () {
      var _fetchAccessToken2 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee8() {
        var _this10 = this;
        var _this$_cache$keys, e, t, n, s, r, i, o, a, c;
        return _regenerator.default.wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                _this$_cache$keys = this._cache.keys, e = _this$_cache$keys.loginTypeKey, t = _this$_cache$keys.accessTokenKey, n = _this$_cache$keys.accessTokenExpireKey, s = _this$_cache$keys.tokenTypeKey, r = this._cache.getStore(e);
                if (!(r && r !== Ge.ANONYMOUS)) {
                  _context8.next = 3;
                  break;
                }
                throw new re({
                  code: "INVALID_OPERATION",
                  message: "非匿名登录不支持刷新 access token"
                });
              case 3:
                _context8.next = 5;
                return this._singlePromise.run("fetchAccessToken", /*#__PURE__*/(0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee7() {
                  return _regenerator.default.wrap(function _callee7$(_context7) {
                    while (1) {
                      switch (_context7.prev = _context7.next) {
                        case 0:
                          _context7.next = 2;
                          return _this10._request("/auth/v1/signin/anonymously", {}, {
                            method: "post"
                          });
                        case 2:
                          return _context7.abrupt("return", _context7.sent.data);
                        case 3:
                        case "end":
                          return _context7.stop();
                      }
                    }
                  }, _callee7);
                })));
              case 5:
                i = _context8.sent;
                o = i.access_token;
                a = i.expires_in;
                c = i.token_type;
                return _context8.abrupt("return", (this._cache.setStore(s, c), this._cache.setStore(t, o), this._cache.setStore(n, Date.now() + 1e3 * a), o));
              case 10:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8, this);
      }));
      function _fetchAccessToken() {
        return _fetchAccessToken2.apply(this, arguments);
      }
      return _fetchAccessToken;
    }()
  }, {
    key: "isAccessTokenExpired",
    value: function isAccessTokenExpired(e, t) {
      var n = !0;
      return e && t && (n = t < Date.now()), n;
    }
  }, {
    key: "getAccessToken",
    value: function () {
      var _getAccessToken = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee9() {
        var _this$_cache$keys2, e, t, n, s;
        return _regenerator.default.wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                _this$_cache$keys2 = this._cache.keys, e = _this$_cache$keys2.accessTokenKey, t = _this$_cache$keys2.accessTokenExpireKey, n = this._cache.getStore(e), s = this._cache.getStore(t);
                return _context9.abrupt("return", this.isAccessTokenExpired(n, s) ? this._fetchAccessToken() : n);
              case 2:
              case "end":
                return _context9.stop();
            }
          }
        }, _callee9, this);
      }));
      function getAccessToken() {
        return _getAccessToken.apply(this, arguments);
      }
      return getAccessToken;
    }()
  }, {
    key: "refreshAccessToken",
    value: function () {
      var _refreshAccessToken = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee10() {
        var _this$_cache$keys3, e, t, n;
        return _regenerator.default.wrap(function _callee10$(_context10) {
          while (1) {
            switch (_context10.prev = _context10.next) {
              case 0:
                _this$_cache$keys3 = this._cache.keys, e = _this$_cache$keys3.accessTokenKey, t = _this$_cache$keys3.accessTokenExpireKey, n = _this$_cache$keys3.loginTypeKey;
                return _context10.abrupt("return", (this._cache.removeStore(e), this._cache.removeStore(t), this._cache.setStore(n, Ge.ANONYMOUS), this.getAccessToken()));
              case 2:
              case "end":
                return _context10.stop();
            }
          }
        }, _callee10, this);
      }));
      function refreshAccessToken() {
        return _refreshAccessToken.apply(this, arguments);
      }
      return refreshAccessToken;
    }()
  }, {
    key: "getUserInfo",
    value: function () {
      var _getUserInfo = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee12() {
        var _this11 = this;
        return _regenerator.default.wrap(function _callee12$(_context12) {
          while (1) {
            switch (_context12.prev = _context12.next) {
              case 0:
                return _context12.abrupt("return", this._singlePromise.run("getUserInfo", /*#__PURE__*/(0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee11() {
                  return _regenerator.default.wrap(function _callee11$(_context11) {
                    while (1) {
                      switch (_context11.prev = _context11.next) {
                        case 0:
                          _context11.next = 2;
                          return _this11._request("/auth/v1/user/me", {}, {
                            withAccessToken: !0,
                            method: "get"
                          });
                        case 2:
                          return _context11.abrupt("return", _context11.sent.data);
                        case 3:
                        case "end":
                          return _context11.stop();
                      }
                    }
                  }, _callee11);
                }))));
              case 1:
              case "end":
                return _context12.stop();
            }
          }
        }, _callee12, this);
      }));
      function getUserInfo() {
        return _getUserInfo.apply(this, arguments);
      }
      return getUserInfo;
    }()
  }]);
  return Ye;
}();
var Xe = ["auth.getJwt", "auth.logout", "auth.signInWithTicket", "auth.signInAnonymously", "auth.signIn", "auth.fetchAccessTokenWithRefreshToken", "auth.signUpWithEmailAndPassword", "auth.activateEndUserMail", "auth.sendPasswordResetEmail", "auth.resetPasswordWithToken", "auth.isUsernameRegistered"],
  Ze = {
    "X-SDK-Version": "1.3.5"
  };
function et(e, t, n) {
  var s = e[t];
  e[t] = function (t) {
    var r = {},
      i = {};
    n.forEach(function (n) {
      var _n$call = n.call(e, t),
        s = _n$call.data,
        o = _n$call.headers;
      Object.assign(r, s), Object.assign(i, o);
    });
    var o = t.data;
    return o && function () {
      var e;
      if (e = o, "[object FormData]" !== Object.prototype.toString.call(e)) t.data = _objectSpread(_objectSpread({}, o), r);else for (var _e10 in r) {
        o.append(_e10, r[_e10]);
      }
    }(), t.headers = _objectSpread(_objectSpread({}, t.headers || {}), i), s.call(e, t);
  };
}
function tt() {
  var e = Math.random().toString(16).slice(2);
  return {
    data: {
      seqId: e
    },
    headers: _objectSpread(_objectSpread({}, Ze), {}, {
      "x-seqid": e
    })
  };
}
var nt = /*#__PURE__*/function () {
  function nt() {
    var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    (0, _classCallCheck2.default)(this, nt);
    var t;
    this.config = e, this._reqClass = new Ee.adapter.reqClass({
      timeout: this.config.timeout,
      timeoutMsg: "\u8BF7\u6C42\u5728".concat(this.config.timeout / 1e3, "s\u5185\u672A\u5B8C\u6210\uFF0C\u5DF2\u4E2D\u65AD"),
      restrictedMethods: ["post"]
    }), this._cache = Me(this.config.env), this._localCache = (t = this.config.env, De[t]), this.oauth = new Ye(this.config), et(this._reqClass, "post", [tt]), et(this._reqClass, "upload", [tt]), et(this._reqClass, "download", [tt]);
  }
  (0, _createClass2.default)(nt, [{
    key: "post",
    value: function () {
      var _post = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee13(e) {
        return _regenerator.default.wrap(function _callee13$(_context13) {
          while (1) {
            switch (_context13.prev = _context13.next) {
              case 0:
                _context13.next = 2;
                return this._reqClass.post(e);
              case 2:
                return _context13.abrupt("return", _context13.sent);
              case 3:
              case "end":
                return _context13.stop();
            }
          }
        }, _callee13, this);
      }));
      function post(_x8) {
        return _post.apply(this, arguments);
      }
      return post;
    }()
  }, {
    key: "upload",
    value: function () {
      var _upload = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee14(e) {
        return _regenerator.default.wrap(function _callee14$(_context14) {
          while (1) {
            switch (_context14.prev = _context14.next) {
              case 0:
                _context14.next = 2;
                return this._reqClass.upload(e);
              case 2:
                return _context14.abrupt("return", _context14.sent);
              case 3:
              case "end":
                return _context14.stop();
            }
          }
        }, _callee14, this);
      }));
      function upload(_x9) {
        return _upload.apply(this, arguments);
      }
      return upload;
    }()
  }, {
    key: "download",
    value: function () {
      var _download = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee15(e) {
        return _regenerator.default.wrap(function _callee15$(_context15) {
          while (1) {
            switch (_context15.prev = _context15.next) {
              case 0:
                _context15.next = 2;
                return this._reqClass.download(e);
              case 2:
                return _context15.abrupt("return", _context15.sent);
              case 3:
              case "end":
                return _context15.stop();
            }
          }
        }, _callee15, this);
      }));
      function download(_x10) {
        return _download.apply(this, arguments);
      }
      return download;
    }()
  }, {
    key: "refreshAccessToken",
    value: function () {
      var _refreshAccessToken2 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee16() {
        var e, t;
        return _regenerator.default.wrap(function _callee16$(_context16) {
          while (1) {
            switch (_context16.prev = _context16.next) {
              case 0:
                this._refreshAccessTokenPromise || (this._refreshAccessTokenPromise = this._refreshAccessToken());
                _context16.prev = 1;
                _context16.next = 4;
                return this._refreshAccessTokenPromise;
              case 4:
                e = _context16.sent;
                _context16.next = 10;
                break;
              case 7:
                _context16.prev = 7;
                _context16.t0 = _context16["catch"](1);
                t = _context16.t0;
              case 10:
                if (!(this._refreshAccessTokenPromise = null, this._shouldRefreshAccessTokenHook = null, t)) {
                  _context16.next = 12;
                  break;
                }
                throw t;
              case 12:
                return _context16.abrupt("return", e);
              case 13:
              case "end":
                return _context16.stop();
            }
          }
        }, _callee16, this, [[1, 7]]);
      }));
      function refreshAccessToken() {
        return _refreshAccessToken2.apply(this, arguments);
      }
      return refreshAccessToken;
    }()
  }, {
    key: "_refreshAccessToken",
    value: function () {
      var _refreshAccessToken3 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee17() {
        var _this$_cache$keys4, e, t, n, s, r, i, o, a, _e11, _e12, _t8, _s9;
        return _regenerator.default.wrap(function _callee17$(_context17) {
          while (1) {
            switch (_context17.prev = _context17.next) {
              case 0:
                _this$_cache$keys4 = this._cache.keys, e = _this$_cache$keys4.accessTokenKey, t = _this$_cache$keys4.accessTokenExpireKey, n = _this$_cache$keys4.refreshTokenKey, s = _this$_cache$keys4.loginTypeKey, r = _this$_cache$keys4.anonymousUuidKey;
                this._cache.removeStore(e), this._cache.removeStore(t);
                i = this._cache.getStore(n);
                if (i) {
                  _context17.next = 5;
                  break;
                }
                throw new re({
                  message: "未登录CloudBase"
                });
              case 5:
                o = {
                  refresh_token: i
                };
                _context17.next = 8;
                return this.request("auth.fetchAccessTokenWithRefreshToken", o);
              case 8:
                a = _context17.sent;
                if (!a.data.code) {
                  _context17.next = 21;
                  break;
                }
                _e11 = a.data.code;
                if (!("SIGN_PARAM_INVALID" === _e11 || "REFRESH_TOKEN_EXPIRED" === _e11 || "INVALID_REFRESH_TOKEN" === _e11)) {
                  _context17.next = 20;
                  break;
                }
                if (!(this._cache.getStore(s) === Ge.ANONYMOUS && "INVALID_REFRESH_TOKEN" === _e11)) {
                  _context17.next = 19;
                  break;
                }
                _e12 = this._cache.getStore(r);
                _t8 = this._cache.getStore(n);
                _context17.next = 17;
                return this.send("auth.signInAnonymously", {
                  anonymous_uuid: _e12,
                  refresh_token: _t8
                });
              case 17:
                _s9 = _context17.sent;
                return _context17.abrupt("return", (this.setRefreshToken(_s9.refresh_token), this._refreshAccessToken()));
              case 19:
                $e(He), this._cache.removeStore(n);
              case 20:
                throw new re({
                  code: a.data.code,
                  message: "\u5237\u65B0access token\u5931\u8D25\uFF1A".concat(a.data.code)
                });
              case 21:
                if (!a.data.access_token) {
                  _context17.next = 23;
                  break;
                }
                return _context17.abrupt("return", ($e(Ve), this._cache.setStore(e, a.data.access_token), this._cache.setStore(t, a.data.access_token_expire + Date.now()), {
                  accessToken: a.data.access_token,
                  accessTokenExpire: a.data.access_token_expire
                }));
              case 23:
                a.data.refresh_token && (this._cache.removeStore(n), this._cache.setStore(n, a.data.refresh_token), this._refreshAccessToken());
              case 24:
              case "end":
                return _context17.stop();
            }
          }
        }, _callee17, this);
      }));
      function _refreshAccessToken() {
        return _refreshAccessToken3.apply(this, arguments);
      }
      return _refreshAccessToken;
    }()
  }, {
    key: "getAccessToken",
    value: function () {
      var _getAccessToken2 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee18() {
        var _this$_cache$keys5, e, t, n, s, r, i;
        return _regenerator.default.wrap(function _callee18$(_context18) {
          while (1) {
            switch (_context18.prev = _context18.next) {
              case 0:
                _this$_cache$keys5 = this._cache.keys, e = _this$_cache$keys5.accessTokenKey, t = _this$_cache$keys5.accessTokenExpireKey, n = _this$_cache$keys5.refreshTokenKey;
                if (this._cache.getStore(n)) {
                  _context18.next = 3;
                  break;
                }
                throw new re({
                  message: "refresh token不存在，登录状态异常"
                });
              case 3:
                s = this._cache.getStore(e), r = this._cache.getStore(t), i = !0;
                _context18.t0 = this._shouldRefreshAccessTokenHook;
                if (!_context18.t0) {
                  _context18.next = 9;
                  break;
                }
                _context18.next = 8;
                return this._shouldRefreshAccessTokenHook(s, r);
              case 8:
                _context18.t0 = !_context18.sent;
              case 9:
                _context18.t1 = _context18.t0;
                if (!_context18.t1) {
                  _context18.next = 12;
                  break;
                }
                i = !1;
              case 12:
                return _context18.abrupt("return", (!s || !r || r < Date.now()) && i ? this.refreshAccessToken() : {
                  accessToken: s,
                  accessTokenExpire: r
                });
              case 13:
              case "end":
                return _context18.stop();
            }
          }
        }, _callee18, this);
      }));
      function getAccessToken() {
        return _getAccessToken2.apply(this, arguments);
      }
      return getAccessToken;
    }()
  }, {
    key: "request",
    value: function () {
      var _request3 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee19(e, t, n) {
        var s, r, i, o, _e13, _e14, a, c, u, l, h, d, p, f, g;
        return _regenerator.default.wrap(function _callee19$(_context19) {
          while (1) {
            switch (_context19.prev = _context19.next) {
              case 0:
                s = "x-tcb-trace_".concat(this.config.env);
                r = "application/x-www-form-urlencoded";
                i = _objectSpread({
                  action: e,
                  env: this.config.env,
                  dataVersion: "2019-08-16"
                }, t);
                _context19.t0 = -1 === Xe.indexOf(e);
                if (!_context19.t0) {
                  _context19.next = 9;
                  break;
                }
                this._cache.keys;
                _context19.next = 8;
                return this.oauth.getAccessToken();
              case 8:
                i.access_token = _context19.sent;
              case 9:
                if (!("storage.uploadFile" === e)) {
                  _context19.next = 15;
                  break;
                }
                o = new FormData();
                for (_e13 in o) {
                  o.hasOwnProperty(_e13) && void 0 !== o[_e13] && o.append(_e13, i[_e13]);
                }
                r = "multipart/form-data";
                _context19.next = 17;
                break;
              case 15:
                r = "application/json", o = {};
                for (_e14 in i) {
                  void 0 !== i[_e14] && (o[_e14] = i[_e14]);
                }
              case 17:
                a = {
                  headers: {
                    "content-type": r
                  }
                };
                n && n.timeout && (a.timeout = n.timeout), n && n.onUploadProgress && (a.onUploadProgress = n.onUploadProgress);
                c = this._localCache.getStore(s);
                c && (a.headers["X-TCB-Trace"] = c);
                u = t.parse, l = t.inQuery, h = t.search;
                d = {
                  env: this.config.env
                };
                u && (d.parse = !0), l && (d = _objectSpread(_objectSpread({}, l), d));
                p = function (e, t) {
                  var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
                  var s = /\?/.test(t);
                  var r = "";
                  for (var _e15 in n) {
                    "" === r ? !s && (t += "?") : r += "&", r += "".concat(_e15, "=").concat(encodeURIComponent(n[_e15]));
                  }
                  return /^http(s)?\:\/\//.test(t += r) ? t : "".concat(e).concat(t);
                }(ye, "//tcb-api.tencentcloudapi.com/web", d);
                h && (p += h);
                _context19.next = 28;
                return this.post(_objectSpread({
                  url: p,
                  data: o
                }, a));
              case 28:
                f = _context19.sent;
                g = f.header && f.header["x-tcb-trace"];
                if (!(g && this._localCache.setStore(s, g), 200 !== Number(f.status) && 200 !== Number(f.statusCode) || !f.data)) {
                  _context19.next = 32;
                  break;
                }
                throw new re({
                  code: "NETWORK_ERROR",
                  message: "network request error"
                });
              case 32:
                return _context19.abrupt("return", f);
              case 33:
              case "end":
                return _context19.stop();
            }
          }
        }, _callee19, this);
      }));
      function request(_x11, _x12, _x13) {
        return _request3.apply(this, arguments);
      }
      return request;
    }()
  }, {
    key: "send",
    value: function () {
      var _send = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee20(e) {
        var t,
          n,
          s,
          _s10,
          _args20 = arguments;
        return _regenerator.default.wrap(function _callee20$(_context20) {
          while (1) {
            switch (_context20.prev = _context20.next) {
              case 0:
                t = _args20.length > 1 && _args20[1] !== undefined ? _args20[1] : {};
                n = _args20.length > 2 && _args20[2] !== undefined ? _args20[2] : {};
                _context20.next = 4;
                return this.request(e, t, _objectSpread(_objectSpread({}, n), {}, {
                  onUploadProgress: t.onUploadProgress
                }));
              case 4:
                s = _context20.sent;
                if (!(("ACCESS_TOKEN_DISABLED" === s.data.code || "ACCESS_TOKEN_EXPIRED" === s.data.code) && -1 === Xe.indexOf(e))) {
                  _context20.next = 14;
                  break;
                }
                _context20.next = 8;
                return this.oauth.refreshAccessToken();
              case 8:
                _context20.next = 10;
                return this.request(e, t, _objectSpread(_objectSpread({}, n), {}, {
                  onUploadProgress: t.onUploadProgress
                }));
              case 10:
                _s10 = _context20.sent;
                if (!_s10.data.code) {
                  _context20.next = 13;
                  break;
                }
                throw new re({
                  code: _s10.data.code,
                  message: Te(_s10.data.message)
                });
              case 13:
                return _context20.abrupt("return", _s10.data);
              case 14:
                if (!s.data.code) {
                  _context20.next = 16;
                  break;
                }
                throw new re({
                  code: s.data.code,
                  message: Te(s.data.message)
                });
              case 16:
                return _context20.abrupt("return", s.data);
              case 17:
              case "end":
                return _context20.stop();
            }
          }
        }, _callee20, this);
      }));
      function send(_x14) {
        return _send.apply(this, arguments);
      }
      return send;
    }()
  }, {
    key: "setRefreshToken",
    value: function setRefreshToken(e) {
      var _this$_cache$keys6 = this._cache.keys,
        t = _this$_cache$keys6.accessTokenKey,
        n = _this$_cache$keys6.accessTokenExpireKey,
        s = _this$_cache$keys6.refreshTokenKey;
      this._cache.removeStore(t), this._cache.removeStore(n), this._cache.setStore(s, e);
    }
  }]);
  return nt;
}();
var st = {};
function rt(e) {
  return st[e];
}
var it = /*#__PURE__*/function () {
  function it(e) {
    (0, _classCallCheck2.default)(this, it);
    this.config = e, this._cache = Me(e.env), this._request = rt(e.env);
  }
  (0, _createClass2.default)(it, [{
    key: "setRefreshToken",
    value: function setRefreshToken(e) {
      var _this$_cache$keys7 = this._cache.keys,
        t = _this$_cache$keys7.accessTokenKey,
        n = _this$_cache$keys7.accessTokenExpireKey,
        s = _this$_cache$keys7.refreshTokenKey;
      this._cache.removeStore(t), this._cache.removeStore(n), this._cache.setStore(s, e);
    }
  }, {
    key: "setAccessToken",
    value: function setAccessToken(e, t) {
      var _this$_cache$keys8 = this._cache.keys,
        n = _this$_cache$keys8.accessTokenKey,
        s = _this$_cache$keys8.accessTokenExpireKey;
      this._cache.setStore(n, e), this._cache.setStore(s, t);
    }
  }, {
    key: "refreshUserInfo",
    value: function () {
      var _refreshUserInfo = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee21() {
        var _yield$this$_request$, e;
        return _regenerator.default.wrap(function _callee21$(_context21) {
          while (1) {
            switch (_context21.prev = _context21.next) {
              case 0:
                _context21.next = 2;
                return this._request.send("auth.getUserInfo", {});
              case 2:
                _yield$this$_request$ = _context21.sent;
                e = _yield$this$_request$.data;
                return _context21.abrupt("return", (this.setLocalUserInfo(e), e));
              case 5:
              case "end":
                return _context21.stop();
            }
          }
        }, _callee21, this);
      }));
      function refreshUserInfo() {
        return _refreshUserInfo.apply(this, arguments);
      }
      return refreshUserInfo;
    }()
  }, {
    key: "setLocalUserInfo",
    value: function setLocalUserInfo(e) {
      var t = this._cache.keys.userInfoKey;
      this._cache.setStore(t, e);
    }
  }]);
  return it;
}();
var ot = /*#__PURE__*/function () {
  function ot(e) {
    (0, _classCallCheck2.default)(this, ot);
    if (!e) throw new re({
      code: "PARAM_ERROR",
      message: "envId is not defined"
    });
    this._envId = e, this._cache = Me(this._envId), this._request = rt(this._envId), this.setUserInfo();
  }
  (0, _createClass2.default)(ot, [{
    key: "linkWithTicket",
    value: function linkWithTicket(e) {
      if ("string" != typeof e) throw new re({
        code: "PARAM_ERROR",
        message: "ticket must be string"
      });
      return this._request.send("auth.linkWithTicket", {
        ticket: e
      });
    }
  }, {
    key: "linkWithRedirect",
    value: function linkWithRedirect(e) {
      e.signInWithRedirect();
    }
  }, {
    key: "updatePassword",
    value: function updatePassword(e, t) {
      return this._request.send("auth.updatePassword", {
        oldPassword: t,
        newPassword: e
      });
    }
  }, {
    key: "updateEmail",
    value: function updateEmail(e) {
      return this._request.send("auth.updateEmail", {
        newEmail: e
      });
    }
  }, {
    key: "updateUsername",
    value: function updateUsername(e) {
      if ("string" != typeof e) throw new re({
        code: "PARAM_ERROR",
        message: "username must be a string"
      });
      return this._request.send("auth.updateUsername", {
        username: e
      });
    }
  }, {
    key: "getLinkedUidList",
    value: function () {
      var _getLinkedUidList = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee22() {
        var _yield$this$_request$2, e, t, n;
        return _regenerator.default.wrap(function _callee22$(_context22) {
          while (1) {
            switch (_context22.prev = _context22.next) {
              case 0:
                _context22.next = 2;
                return this._request.send("auth.getLinkedUidList", {});
              case 2:
                _yield$this$_request$2 = _context22.sent;
                e = _yield$this$_request$2.data;
                t = !1;
                n = e.users;
                return _context22.abrupt("return", (n.forEach(function (e) {
                  e.wxOpenId && e.wxPublicId && (t = !0);
                }), {
                  users: n,
                  hasPrimaryUid: t
                }));
              case 7:
              case "end":
                return _context22.stop();
            }
          }
        }, _callee22, this);
      }));
      function getLinkedUidList() {
        return _getLinkedUidList.apply(this, arguments);
      }
      return getLinkedUidList;
    }()
  }, {
    key: "setPrimaryUid",
    value: function setPrimaryUid(e) {
      return this._request.send("auth.setPrimaryUid", {
        uid: e
      });
    }
  }, {
    key: "unlink",
    value: function unlink(e) {
      return this._request.send("auth.unlink", {
        platform: e
      });
    }
  }, {
    key: "update",
    value: function () {
      var _update = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee23(e) {
        var t, n, s, r, i, o, _yield$this$_request$3, a;
        return _regenerator.default.wrap(function _callee23$(_context23) {
          while (1) {
            switch (_context23.prev = _context23.next) {
              case 0:
                t = e.nickName;
                n = e.gender;
                s = e.avatarUrl;
                r = e.province;
                i = e.country;
                o = e.city;
                _context23.next = 8;
                return this._request.send("auth.updateUserInfo", {
                  nickName: t,
                  gender: n,
                  avatarUrl: s,
                  province: r,
                  country: i,
                  city: o
                });
              case 8:
                _yield$this$_request$3 = _context23.sent;
                a = _yield$this$_request$3.data;
                this.setLocalUserInfo(a);
              case 11:
              case "end":
                return _context23.stop();
            }
          }
        }, _callee23, this);
      }));
      function update(_x15) {
        return _update.apply(this, arguments);
      }
      return update;
    }()
  }, {
    key: "refresh",
    value: function () {
      var _refresh = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee24() {
        var e;
        return _regenerator.default.wrap(function _callee24$(_context24) {
          while (1) {
            switch (_context24.prev = _context24.next) {
              case 0:
                _context24.next = 2;
                return this._request.oauth.getUserInfo();
              case 2:
                e = _context24.sent;
                return _context24.abrupt("return", (this.setLocalUserInfo(e), e));
              case 4:
              case "end":
                return _context24.stop();
            }
          }
        }, _callee24, this);
      }));
      function refresh() {
        return _refresh.apply(this, arguments);
      }
      return refresh;
    }()
  }, {
    key: "setUserInfo",
    value: function setUserInfo() {
      var _this12 = this;
      var e = this._cache.keys.userInfoKey,
        t = this._cache.getStore(e);
      ["uid", "loginType", "openid", "wxOpenId", "wxPublicId", "unionId", "qqMiniOpenId", "email", "hasPassword", "customUserId", "nickName", "gender", "avatarUrl"].forEach(function (e) {
        _this12[e] = t[e];
      }), this.location = {
        country: t.country,
        province: t.province,
        city: t.city
      };
    }
  }, {
    key: "setLocalUserInfo",
    value: function setLocalUserInfo(e) {
      var t = this._cache.keys.userInfoKey;
      this._cache.setStore(t, e), this.setUserInfo();
    }
  }]);
  return ot;
}();
var at = /*#__PURE__*/function () {
  function at(e) {
    (0, _classCallCheck2.default)(this, at);
    if (!e) throw new re({
      code: "PARAM_ERROR",
      message: "envId is not defined"
    });
    this._cache = Me(e);
    var _this$_cache$keys9 = this._cache.keys,
      t = _this$_cache$keys9.refreshTokenKey,
      n = _this$_cache$keys9.accessTokenKey,
      s = _this$_cache$keys9.accessTokenExpireKey,
      r = this._cache.getStore(t),
      i = this._cache.getStore(n),
      o = this._cache.getStore(s);
    this.credential = {
      refreshToken: r,
      accessToken: i,
      accessTokenExpire: o
    }, this.user = new ot(e);
  }
  (0, _createClass2.default)(at, [{
    key: "isAnonymousAuth",
    get: function get() {
      return this.loginType === Ge.ANONYMOUS;
    }
  }, {
    key: "isCustomAuth",
    get: function get() {
      return this.loginType === Ge.CUSTOM;
    }
  }, {
    key: "isWeixinAuth",
    get: function get() {
      return this.loginType === Ge.WECHAT || this.loginType === Ge.WECHAT_OPEN || this.loginType === Ge.WECHAT_PUBLIC;
    }
  }, {
    key: "loginType",
    get: function get() {
      return this._cache.getStore(this._cache.keys.loginTypeKey);
    }
  }]);
  return at;
}();
var ct = /*#__PURE__*/function (_it) {
  (0, _inherits2.default)(ct, _it);
  var _super4 = _createSuper(ct);
  function ct() {
    (0, _classCallCheck2.default)(this, ct);
    return _super4.apply(this, arguments);
  }
  (0, _createClass2.default)(ct, [{
    key: "signIn",
    value: function () {
      var _signIn = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee25() {
        var e;
        return _regenerator.default.wrap(function _callee25$(_context25) {
          while (1) {
            switch (_context25.prev = _context25.next) {
              case 0:
                this._cache.updatePersistence("local");
                _context25.next = 3;
                return this._request.oauth.getAccessToken();
              case 3:
                $e(We);
                $e(Je, {
                  env: this.config.env,
                  loginType: Ge.ANONYMOUS,
                  persistence: "local"
                });
                e = new at(this.config.env);
                _context25.next = 8;
                return e.user.refresh();
              case 8:
                return _context25.abrupt("return", e);
              case 9:
              case "end":
                return _context25.stop();
            }
          }
        }, _callee25, this);
      }));
      function signIn() {
        return _signIn.apply(this, arguments);
      }
      return signIn;
    }()
  }, {
    key: "linkAndRetrieveDataWithTicket",
    value: function () {
      var _linkAndRetrieveDataWithTicket = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee26(e) {
        var _this$_cache$keys10, t, n, s, r, i;
        return _regenerator.default.wrap(function _callee26$(_context26) {
          while (1) {
            switch (_context26.prev = _context26.next) {
              case 0:
                _this$_cache$keys10 = this._cache.keys;
                t = _this$_cache$keys10.anonymousUuidKey;
                n = _this$_cache$keys10.refreshTokenKey;
                s = this._cache.getStore(t);
                r = this._cache.getStore(n);
                _context26.next = 7;
                return this._request.send("auth.linkAndRetrieveDataWithTicket", {
                  anonymous_uuid: s,
                  refresh_token: r,
                  ticket: e
                });
              case 7:
                i = _context26.sent;
                if (!i.refresh_token) {
                  _context26.next = 16;
                  break;
                }
                this._clearAnonymousUUID();
                this.setRefreshToken(i.refresh_token);
                _context26.next = 13;
                return this._request.refreshAccessToken();
              case 13:
                $e(ze, {
                  env: this.config.env
                });
                $e(Je, {
                  loginType: Ge.CUSTOM,
                  persistence: "local"
                });
                return _context26.abrupt("return", {
                  credential: {
                    refreshToken: i.refresh_token
                  }
                });
              case 16:
                throw new re({
                  message: "匿名转化失败"
                });
              case 17:
              case "end":
                return _context26.stop();
            }
          }
        }, _callee26, this);
      }));
      function linkAndRetrieveDataWithTicket(_x16) {
        return _linkAndRetrieveDataWithTicket.apply(this, arguments);
      }
      return linkAndRetrieveDataWithTicket;
    }()
  }, {
    key: "_setAnonymousUUID",
    value: function _setAnonymousUUID(e) {
      var _this$_cache$keys11 = this._cache.keys,
        t = _this$_cache$keys11.anonymousUuidKey,
        n = _this$_cache$keys11.loginTypeKey;
      this._cache.removeStore(t), this._cache.setStore(t, e), this._cache.setStore(n, Ge.ANONYMOUS);
    }
  }, {
    key: "_clearAnonymousUUID",
    value: function _clearAnonymousUUID() {
      this._cache.removeStore(this._cache.keys.anonymousUuidKey);
    }
  }]);
  return ct;
}(it);
var ut = /*#__PURE__*/function (_it2) {
  (0, _inherits2.default)(ut, _it2);
  var _super5 = _createSuper(ut);
  function ut() {
    (0, _classCallCheck2.default)(this, ut);
    return _super5.apply(this, arguments);
  }
  (0, _createClass2.default)(ut, [{
    key: "signIn",
    value: function () {
      var _signIn2 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee27(e) {
        var t, n;
        return _regenerator.default.wrap(function _callee27$(_context27) {
          while (1) {
            switch (_context27.prev = _context27.next) {
              case 0:
                if (!("string" != typeof e)) {
                  _context27.next = 2;
                  break;
                }
                throw new re({
                  code: "PARAM_ERROR",
                  message: "ticket must be a string"
                });
              case 2:
                t = this._cache.keys.refreshTokenKey;
                _context27.next = 5;
                return this._request.send("auth.signInWithTicket", {
                  ticket: e,
                  refresh_token: this._cache.getStore(t) || ""
                });
              case 5:
                n = _context27.sent;
                if (!n.refresh_token) {
                  _context27.next = 15;
                  break;
                }
                this.setRefreshToken(n.refresh_token);
                _context27.next = 10;
                return this._request.refreshAccessToken();
              case 10:
                $e(We);
                $e(Je, {
                  env: this.config.env,
                  loginType: Ge.CUSTOM,
                  persistence: this.config.persistence
                });
                _context27.next = 14;
                return this.refreshUserInfo();
              case 14:
                return _context27.abrupt("return", new at(this.config.env));
              case 15:
                throw new re({
                  message: "自定义登录失败"
                });
              case 16:
              case "end":
                return _context27.stop();
            }
          }
        }, _callee27, this);
      }));
      function signIn(_x17) {
        return _signIn2.apply(this, arguments);
      }
      return signIn;
    }()
  }]);
  return ut;
}(it);
var lt = /*#__PURE__*/function (_it3) {
  (0, _inherits2.default)(lt, _it3);
  var _super6 = _createSuper(lt);
  function lt() {
    (0, _classCallCheck2.default)(this, lt);
    return _super6.apply(this, arguments);
  }
  (0, _createClass2.default)(lt, [{
    key: "signIn",
    value: function () {
      var _signIn3 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee28(e, t) {
        var n, s, r, i, o;
        return _regenerator.default.wrap(function _callee28$(_context28) {
          while (1) {
            switch (_context28.prev = _context28.next) {
              case 0:
                if (!("string" != typeof e)) {
                  _context28.next = 2;
                  break;
                }
                throw new re({
                  code: "PARAM_ERROR",
                  message: "email must be a string"
                });
              case 2:
                n = this._cache.keys.refreshTokenKey;
                _context28.next = 5;
                return this._request.send("auth.signIn", {
                  loginType: "EMAIL",
                  email: e,
                  password: t,
                  refresh_token: this._cache.getStore(n) || ""
                });
              case 5:
                s = _context28.sent;
                r = s.refresh_token;
                i = s.access_token;
                o = s.access_token_expire;
                if (!r) {
                  _context28.next = 22;
                  break;
                }
                this.setRefreshToken(r);
                if (!(i && o)) {
                  _context28.next = 15;
                  break;
                }
                this.setAccessToken(i, o);
                _context28.next = 17;
                break;
              case 15:
                _context28.next = 17;
                return this._request.refreshAccessToken();
              case 17:
                _context28.next = 19;
                return this.refreshUserInfo();
              case 19:
                $e(We);
                $e(Je, {
                  env: this.config.env,
                  loginType: Ge.EMAIL,
                  persistence: this.config.persistence
                });
                return _context28.abrupt("return", new at(this.config.env));
              case 22:
                throw s.code ? new re({
                  code: s.code,
                  message: "\u90AE\u7BB1\u767B\u5F55\u5931\u8D25: ".concat(s.message)
                }) : new re({
                  message: "邮箱登录失败"
                });
              case 23:
              case "end":
                return _context28.stop();
            }
          }
        }, _callee28, this);
      }));
      function signIn(_x18, _x19) {
        return _signIn3.apply(this, arguments);
      }
      return signIn;
    }()
  }, {
    key: "activate",
    value: function () {
      var _activate = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee29(e) {
        return _regenerator.default.wrap(function _callee29$(_context29) {
          while (1) {
            switch (_context29.prev = _context29.next) {
              case 0:
                return _context29.abrupt("return", this._request.send("auth.activateEndUserMail", {
                  token: e
                }));
              case 1:
              case "end":
                return _context29.stop();
            }
          }
        }, _callee29, this);
      }));
      function activate(_x20) {
        return _activate.apply(this, arguments);
      }
      return activate;
    }()
  }, {
    key: "resetPasswordWithToken",
    value: function () {
      var _resetPasswordWithToken = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee30(e, t) {
        return _regenerator.default.wrap(function _callee30$(_context30) {
          while (1) {
            switch (_context30.prev = _context30.next) {
              case 0:
                return _context30.abrupt("return", this._request.send("auth.resetPasswordWithToken", {
                  token: e,
                  newPassword: t
                }));
              case 1:
              case "end":
                return _context30.stop();
            }
          }
        }, _callee30, this);
      }));
      function resetPasswordWithToken(_x21, _x22) {
        return _resetPasswordWithToken.apply(this, arguments);
      }
      return resetPasswordWithToken;
    }()
  }]);
  return lt;
}(it);
var ht = /*#__PURE__*/function (_it4) {
  (0, _inherits2.default)(ht, _it4);
  var _super7 = _createSuper(ht);
  function ht() {
    (0, _classCallCheck2.default)(this, ht);
    return _super7.apply(this, arguments);
  }
  (0, _createClass2.default)(ht, [{
    key: "signIn",
    value: function () {
      var _signIn4 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee31(e, t) {
        var n, s, r, i, o;
        return _regenerator.default.wrap(function _callee31$(_context31) {
          while (1) {
            switch (_context31.prev = _context31.next) {
              case 0:
                if (!("string" != typeof e)) {
                  _context31.next = 2;
                  break;
                }
                throw new re({
                  code: "PARAM_ERROR",
                  message: "username must be a string"
                });
              case 2:
                "string" != typeof t && (t = "", console.warn("password is empty"));
                n = this._cache.keys.refreshTokenKey;
                _context31.next = 6;
                return this._request.send("auth.signIn", {
                  loginType: Ge.USERNAME,
                  username: e,
                  password: t,
                  refresh_token: this._cache.getStore(n) || ""
                });
              case 6:
                s = _context31.sent;
                r = s.refresh_token;
                i = s.access_token_expire;
                o = s.access_token;
                if (!r) {
                  _context31.next = 23;
                  break;
                }
                this.setRefreshToken(r);
                if (!(o && i)) {
                  _context31.next = 16;
                  break;
                }
                this.setAccessToken(o, i);
                _context31.next = 18;
                break;
              case 16:
                _context31.next = 18;
                return this._request.refreshAccessToken();
              case 18:
                _context31.next = 20;
                return this.refreshUserInfo();
              case 20:
                $e(We);
                $e(Je, {
                  env: this.config.env,
                  loginType: Ge.USERNAME,
                  persistence: this.config.persistence
                });
                return _context31.abrupt("return", new at(this.config.env));
              case 23:
                throw s.code ? new re({
                  code: s.code,
                  message: "\u7528\u6237\u540D\u5BC6\u7801\u767B\u5F55\u5931\u8D25: ".concat(s.message)
                }) : new re({
                  message: "用户名密码登录失败"
                });
              case 24:
              case "end":
                return _context31.stop();
            }
          }
        }, _callee31, this);
      }));
      function signIn(_x23, _x24) {
        return _signIn4.apply(this, arguments);
      }
      return signIn;
    }()
  }]);
  return ht;
}(it);
var dt = /*#__PURE__*/function () {
  function dt(e) {
    (0, _classCallCheck2.default)(this, dt);
    this.config = e, this._cache = Me(e.env), this._request = rt(e.env), this._onAnonymousConverted = this._onAnonymousConverted.bind(this), this._onLoginTypeChanged = this._onLoginTypeChanged.bind(this), je(Je, this._onLoginTypeChanged);
  }
  (0, _createClass2.default)(dt, [{
    key: "currentUser",
    get: function get() {
      var e = this.hasLoginState();
      return e && e.user || null;
    }
  }, {
    key: "loginType",
    get: function get() {
      return this._cache.getStore(this._cache.keys.loginTypeKey);
    }
  }, {
    key: "anonymousAuthProvider",
    value: function anonymousAuthProvider() {
      return new ct(this.config);
    }
  }, {
    key: "customAuthProvider",
    value: function customAuthProvider() {
      return new ut(this.config);
    }
  }, {
    key: "emailAuthProvider",
    value: function emailAuthProvider() {
      return new lt(this.config);
    }
  }, {
    key: "usernameAuthProvider",
    value: function usernameAuthProvider() {
      return new ht(this.config);
    }
  }, {
    key: "signInAnonymously",
    value: function () {
      var _signInAnonymously = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee32() {
        return _regenerator.default.wrap(function _callee32$(_context32) {
          while (1) {
            switch (_context32.prev = _context32.next) {
              case 0:
                return _context32.abrupt("return", new ct(this.config).signIn());
              case 1:
              case "end":
                return _context32.stop();
            }
          }
        }, _callee32, this);
      }));
      function signInAnonymously() {
        return _signInAnonymously.apply(this, arguments);
      }
      return signInAnonymously;
    }()
  }, {
    key: "signInWithEmailAndPassword",
    value: function () {
      var _signInWithEmailAndPassword = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee33(e, t) {
        return _regenerator.default.wrap(function _callee33$(_context33) {
          while (1) {
            switch (_context33.prev = _context33.next) {
              case 0:
                return _context33.abrupt("return", new lt(this.config).signIn(e, t));
              case 1:
              case "end":
                return _context33.stop();
            }
          }
        }, _callee33, this);
      }));
      function signInWithEmailAndPassword(_x25, _x26) {
        return _signInWithEmailAndPassword.apply(this, arguments);
      }
      return signInWithEmailAndPassword;
    }()
  }, {
    key: "signInWithUsernameAndPassword",
    value: function signInWithUsernameAndPassword(e, t) {
      return new ht(this.config).signIn(e, t);
    }
  }, {
    key: "linkAndRetrieveDataWithTicket",
    value: function () {
      var _linkAndRetrieveDataWithTicket2 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee34(e) {
        return _regenerator.default.wrap(function _callee34$(_context34) {
          while (1) {
            switch (_context34.prev = _context34.next) {
              case 0:
                this._anonymousAuthProvider || (this._anonymousAuthProvider = new ct(this.config)), je(ze, this._onAnonymousConverted);
                _context34.next = 3;
                return this._anonymousAuthProvider.linkAndRetrieveDataWithTicket(e);
              case 3:
                return _context34.abrupt("return", _context34.sent);
              case 4:
              case "end":
                return _context34.stop();
            }
          }
        }, _callee34, this);
      }));
      function linkAndRetrieveDataWithTicket(_x27) {
        return _linkAndRetrieveDataWithTicket2.apply(this, arguments);
      }
      return linkAndRetrieveDataWithTicket;
    }()
  }, {
    key: "signOut",
    value: function () {
      var _signOut = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee35() {
        var _this$_cache$keys12, e, t, n, s, r;
        return _regenerator.default.wrap(function _callee35$(_context35) {
          while (1) {
            switch (_context35.prev = _context35.next) {
              case 0:
                if (!(this.loginType === Ge.ANONYMOUS)) {
                  _context35.next = 2;
                  break;
                }
                throw new re({
                  message: "匿名用户不支持登出操作"
                });
              case 2:
                _this$_cache$keys12 = this._cache.keys, e = _this$_cache$keys12.refreshTokenKey, t = _this$_cache$keys12.accessTokenKey, n = _this$_cache$keys12.accessTokenExpireKey, s = this._cache.getStore(e);
                if (s) {
                  _context35.next = 5;
                  break;
                }
                return _context35.abrupt("return");
              case 5:
                _context35.next = 7;
                return this._request.send("auth.logout", {
                  refresh_token: s
                });
              case 7:
                r = _context35.sent;
                return _context35.abrupt("return", (this._cache.removeStore(e), this._cache.removeStore(t), this._cache.removeStore(n), $e(We), $e(Je, {
                  env: this.config.env,
                  loginType: Ge.NULL,
                  persistence: this.config.persistence
                }), r));
              case 9:
              case "end":
                return _context35.stop();
            }
          }
        }, _callee35, this);
      }));
      function signOut() {
        return _signOut.apply(this, arguments);
      }
      return signOut;
    }()
  }, {
    key: "signUpWithEmailAndPassword",
    value: function () {
      var _signUpWithEmailAndPassword = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee36(e, t) {
        return _regenerator.default.wrap(function _callee36$(_context36) {
          while (1) {
            switch (_context36.prev = _context36.next) {
              case 0:
                return _context36.abrupt("return", this._request.send("auth.signUpWithEmailAndPassword", {
                  email: e,
                  password: t
                }));
              case 1:
              case "end":
                return _context36.stop();
            }
          }
        }, _callee36, this);
      }));
      function signUpWithEmailAndPassword(_x28, _x29) {
        return _signUpWithEmailAndPassword.apply(this, arguments);
      }
      return signUpWithEmailAndPassword;
    }()
  }, {
    key: "sendPasswordResetEmail",
    value: function () {
      var _sendPasswordResetEmail = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee37(e) {
        return _regenerator.default.wrap(function _callee37$(_context37) {
          while (1) {
            switch (_context37.prev = _context37.next) {
              case 0:
                return _context37.abrupt("return", this._request.send("auth.sendPasswordResetEmail", {
                  email: e
                }));
              case 1:
              case "end":
                return _context37.stop();
            }
          }
        }, _callee37, this);
      }));
      function sendPasswordResetEmail(_x30) {
        return _sendPasswordResetEmail.apply(this, arguments);
      }
      return sendPasswordResetEmail;
    }()
  }, {
    key: "onLoginStateChanged",
    value: function onLoginStateChanged(e) {
      var _this13 = this;
      je(We, function () {
        var t = _this13.hasLoginState();
        e.call(_this13, t);
      });
      var t = this.hasLoginState();
      e.call(this, t);
    }
  }, {
    key: "onLoginStateExpired",
    value: function onLoginStateExpired(e) {
      je(He, e.bind(this));
    }
  }, {
    key: "onAccessTokenRefreshed",
    value: function onAccessTokenRefreshed(e) {
      je(Ve, e.bind(this));
    }
  }, {
    key: "onAnonymousConverted",
    value: function onAnonymousConverted(e) {
      je(ze, e.bind(this));
    }
  }, {
    key: "onLoginTypeChanged",
    value: function onLoginTypeChanged(e) {
      var _this14 = this;
      je(Je, function () {
        var t = _this14.hasLoginState();
        e.call(_this14, t);
      });
    }
  }, {
    key: "getAccessToken",
    value: function () {
      var _getAccessToken3 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee38() {
        return _regenerator.default.wrap(function _callee38$(_context38) {
          while (1) {
            switch (_context38.prev = _context38.next) {
              case 0:
                _context38.next = 2;
                return this._request.getAccessToken();
              case 2:
                _context38.t0 = _context38.sent.accessToken;
                _context38.t1 = this.config.env;
                return _context38.abrupt("return", {
                  accessToken: _context38.t0,
                  env: _context38.t1
                });
              case 5:
              case "end":
                return _context38.stop();
            }
          }
        }, _callee38, this);
      }));
      function getAccessToken() {
        return _getAccessToken3.apply(this, arguments);
      }
      return getAccessToken;
    }()
  }, {
    key: "hasLoginState",
    value: function hasLoginState() {
      var _this$_cache$keys13 = this._cache.keys,
        e = _this$_cache$keys13.accessTokenKey,
        t = _this$_cache$keys13.accessTokenExpireKey,
        n = this._cache.getStore(e),
        s = this._cache.getStore(t);
      return this._request.oauth.isAccessTokenExpired(n, s) ? null : new at(this.config.env);
    }
  }, {
    key: "isUsernameRegistered",
    value: function () {
      var _isUsernameRegistered = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee39(e) {
        var _yield$this$_request$4, t;
        return _regenerator.default.wrap(function _callee39$(_context39) {
          while (1) {
            switch (_context39.prev = _context39.next) {
              case 0:
                if (!("string" != typeof e)) {
                  _context39.next = 2;
                  break;
                }
                throw new re({
                  code: "PARAM_ERROR",
                  message: "username must be a string"
                });
              case 2:
                _context39.next = 4;
                return this._request.send("auth.isUsernameRegistered", {
                  username: e
                });
              case 4:
                _yield$this$_request$4 = _context39.sent;
                t = _yield$this$_request$4.data;
                return _context39.abrupt("return", t && t.isRegistered);
              case 7:
              case "end":
                return _context39.stop();
            }
          }
        }, _callee39, this);
      }));
      function isUsernameRegistered(_x31) {
        return _isUsernameRegistered.apply(this, arguments);
      }
      return isUsernameRegistered;
    }()
  }, {
    key: "getLoginState",
    value: function getLoginState() {
      return Promise.resolve(this.hasLoginState());
    }
  }, {
    key: "signInWithTicket",
    value: function () {
      var _signInWithTicket = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee40(e) {
        return _regenerator.default.wrap(function _callee40$(_context40) {
          while (1) {
            switch (_context40.prev = _context40.next) {
              case 0:
                return _context40.abrupt("return", new ut(this.config).signIn(e));
              case 1:
              case "end":
                return _context40.stop();
            }
          }
        }, _callee40, this);
      }));
      function signInWithTicket(_x32) {
        return _signInWithTicket.apply(this, arguments);
      }
      return signInWithTicket;
    }()
  }, {
    key: "shouldRefreshAccessToken",
    value: function shouldRefreshAccessToken(e) {
      this._request._shouldRefreshAccessTokenHook = e.bind(this);
    }
  }, {
    key: "getUserInfo",
    value: function getUserInfo() {
      return this._request.send("auth.getUserInfo", {}).then(function (e) {
        return e.code ? e : _objectSpread(_objectSpread({}, e.data), {}, {
          requestId: e.seqId
        });
      });
    }
  }, {
    key: "getAuthHeader",
    value: function getAuthHeader() {
      var _this$_cache$keys14 = this._cache.keys,
        e = _this$_cache$keys14.refreshTokenKey,
        t = _this$_cache$keys14.accessTokenKey,
        n = this._cache.getStore(e);
      return {
        "x-cloudbase-credentials": this._cache.getStore(t) + "/@@/" + n
      };
    }
  }, {
    key: "_onAnonymousConverted",
    value: function _onAnonymousConverted(e) {
      var t = e.data.env;
      t === this.config.env && this._cache.updatePersistence(this.config.persistence);
    }
  }, {
    key: "_onLoginTypeChanged",
    value: function _onLoginTypeChanged(e) {
      var _e$data = e.data,
        t = _e$data.loginType,
        n = _e$data.persistence,
        s = _e$data.env;
      s === this.config.env && (this._cache.updatePersistence(n), this._cache.setStore(this._cache.keys.loginTypeKey, t));
    }
  }]);
  return dt;
}();
var pt = function pt(e, t) {
    t = t || be();
    var n = rt(this.config.env),
      s = e.cloudPath,
      r = e.filePath,
      i = e.onUploadProgress,
      _e$fileType = e.fileType,
      o = _e$fileType === void 0 ? "image" : _e$fileType;
    return n.send("storage.getUploadMetadata", {
      path: s
    }).then(function (e) {
      var _e$data2 = e.data,
        a = _e$data2.url,
        c = _e$data2.authorization,
        u = _e$data2.token,
        l = _e$data2.fileId,
        h = _e$data2.cosFileId,
        d = e.requestId,
        p = {
          key: s,
          signature: c,
          "x-cos-meta-fileid": h,
          success_action_status: "201",
          "x-cos-security-token": u
        };
      n.upload({
        url: a,
        data: p,
        file: r,
        name: s,
        fileType: o,
        onUploadProgress: i
      }).then(function (e) {
        201 === e.statusCode ? t(null, {
          fileID: l,
          requestId: d
        }) : t(new re({
          code: "STORAGE_REQUEST_FAIL",
          message: "STORAGE_REQUEST_FAIL: ".concat(e.data)
        }));
      }).catch(function (e) {
        t(e);
      });
    }).catch(function (e) {
      t(e);
    }), t.promise;
  },
  ft = function ft(e, t) {
    t = t || be();
    var n = rt(this.config.env),
      s = e.cloudPath;
    return n.send("storage.getUploadMetadata", {
      path: s
    }).then(function (e) {
      t(null, e);
    }).catch(function (e) {
      t(e);
    }), t.promise;
  },
  gt = function gt(_ref10, t) {
    var e = _ref10.fileList;
    if (t = t || be(), !e || !Array.isArray(e)) return {
      code: "INVALID_PARAM",
      message: "fileList必须是非空的数组"
    };
    var _iterator3 = _createForOfIteratorHelper(e),
      _step3;
    try {
      for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
        var _t9 = _step3.value;
        if (!_t9 || "string" != typeof _t9) return {
          code: "INVALID_PARAM",
          message: "fileList的元素必须是非空的字符串"
        };
      }
    } catch (err) {
      _iterator3.e(err);
    } finally {
      _iterator3.f();
    }
    var n = {
      fileid_list: e
    };
    return rt(this.config.env).send("storage.batchDeleteFile", n).then(function (e) {
      e.code ? t(null, e) : t(null, {
        fileList: e.data.delete_list,
        requestId: e.requestId
      });
    }).catch(function (e) {
      t(e);
    }), t.promise;
  },
  mt = function mt(_ref11, t) {
    var e = _ref11.fileList;
    t = t || be(), e && Array.isArray(e) || t(null, {
      code: "INVALID_PARAM",
      message: "fileList必须是非空的数组"
    });
    var n = [];
    var _iterator4 = _createForOfIteratorHelper(e),
      _step4;
    try {
      for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
        var _s11 = _step4.value;
        "object" == (0, _typeof2.default)(_s11) ? (_s11.hasOwnProperty("fileID") && _s11.hasOwnProperty("maxAge") || t(null, {
          code: "INVALID_PARAM",
          message: "fileList的元素必须是包含fileID和maxAge的对象"
        }), n.push({
          fileid: _s11.fileID,
          max_age: _s11.maxAge
        })) : "string" == typeof _s11 ? n.push({
          fileid: _s11
        }) : t(null, {
          code: "INVALID_PARAM",
          message: "fileList的元素必须是字符串"
        });
      }
    } catch (err) {
      _iterator4.e(err);
    } finally {
      _iterator4.f();
    }
    var s = {
      file_list: n
    };
    return rt(this.config.env).send("storage.batchGetDownloadUrl", s).then(function (e) {
      e.code ? t(null, e) : t(null, {
        fileList: e.data.download_list,
        requestId: e.requestId
      });
    }).catch(function (e) {
      t(e);
    }), t.promise;
  },
  yt = /*#__PURE__*/function () {
    var _ref13 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee41(_ref12, t) {
      var e, n, s, r;
      return _regenerator.default.wrap(function _callee41$(_context41) {
        while (1) {
          switch (_context41.prev = _context41.next) {
            case 0:
              e = _ref12.fileID;
              _context41.next = 3;
              return mt.call(this, {
                fileList: [{
                  fileID: e,
                  maxAge: 600
                }]
              });
            case 3:
              n = _context41.sent.fileList[0];
              if (!("SUCCESS" !== n.code)) {
                _context41.next = 6;
                break;
              }
              return _context41.abrupt("return", t ? t(n) : new Promise(function (e) {
                e(n);
              }));
            case 6:
              s = rt(this.config.env);
              r = n.download_url;
              if (!(r = encodeURI(r), !t)) {
                _context41.next = 10;
                break;
              }
              return _context41.abrupt("return", s.download({
                url: r
              }));
            case 10:
              _context41.t0 = t;
              _context41.next = 13;
              return s.download({
                url: r
              });
            case 13:
              _context41.t1 = _context41.sent;
              (0, _context41.t0)(_context41.t1);
            case 15:
            case "end":
              return _context41.stop();
          }
        }
      }, _callee41, this);
    }));
    return function yt(_x33, _x34) {
      return _ref13.apply(this, arguments);
    };
  }(),
  _t = function _t(_ref14, o) {
    var e = _ref14.name,
      t = _ref14.data,
      n = _ref14.query,
      s = _ref14.parse,
      r = _ref14.search,
      i = _ref14.timeout;
    var a = o || be();
    var c;
    try {
      c = t ? JSON.stringify(t) : "";
    } catch (e) {
      return Promise.reject(e);
    }
    if (!e) return Promise.reject(new re({
      code: "PARAM_ERROR",
      message: "函数名不能为空"
    }));
    var u = {
      inQuery: n,
      parse: s,
      search: r,
      function_name: e,
      request_data: c
    };
    return rt(this.config.env).send("functions.invokeFunction", u, {
      timeout: i
    }).then(function (e) {
      if (e.code) a(null, e);else {
        var _t10 = e.data.response_data;
        if (s) a(null, {
          result: _t10,
          requestId: e.requestId
        });else try {
          _t10 = JSON.parse(e.data.response_data), a(null, {
            result: _t10,
            requestId: e.requestId
          });
        } catch (e) {
          a(new re({
            message: "response data must be json"
          }));
        }
      }
      return a.promise;
    }).catch(function (e) {
      a(e);
    }), a.promise;
  },
  wt = {
    timeout: 15e3,
    persistence: "session"
  },
  vt = {};
var It = /*#__PURE__*/function () {
  function It(e) {
    (0, _classCallCheck2.default)(this, It);
    this.config = e || this.config, this.authObj = void 0;
  }
  (0, _createClass2.default)(It, [{
    key: "init",
    value: function init(e) {
      switch (Ee.adapter || (this.requestClient = new Ee.adapter.reqClass({
        timeout: e.timeout || 5e3,
        timeoutMsg: "\u8BF7\u6C42\u5728".concat((e.timeout || 5e3) / 1e3, "s\u5185\u672A\u5B8C\u6210\uFF0C\u5DF2\u4E2D\u65AD")
      })), this.config = _objectSpread(_objectSpread({}, wt), e), !0) {
        case this.config.timeout > 6e5:
          console.warn("timeout大于可配置上限[10分钟]，已重置为上限数值"), this.config.timeout = 6e5;
          break;
        case this.config.timeout < 100:
          console.warn("timeout小于可配置下限[100ms]，已重置为下限数值"), this.config.timeout = 100;
      }
      return new It(this.config);
    }
  }, {
    key: "auth",
    value: function auth() {
      var _ref15 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        e = _ref15.persistence;
      if (this.authObj) return this.authObj;
      var t = e || Ee.adapter.primaryStorage || wt.persistence;
      var n;
      return t !== this.config.persistence && (this.config.persistence = t), function (e) {
        var t = e.env;
        Ne[t] = new Re(e), De[t] = new Re(_objectSpread(_objectSpread({}, e), {}, {
          persistence: "local"
        }));
      }(this.config), n = this.config, st[n.env] = new nt(n), this.authObj = new dt(this.config), this.authObj;
    }
  }, {
    key: "on",
    value: function on(e, t) {
      return je.apply(this, [e, t]);
    }
  }, {
    key: "off",
    value: function off(e, t) {
      return Be.apply(this, [e, t]);
    }
  }, {
    key: "callFunction",
    value: function callFunction(e, t) {
      return _t.apply(this, [e, t]);
    }
  }, {
    key: "deleteFile",
    value: function deleteFile(e, t) {
      return gt.apply(this, [e, t]);
    }
  }, {
    key: "getTempFileURL",
    value: function getTempFileURL(e, t) {
      return mt.apply(this, [e, t]);
    }
  }, {
    key: "downloadFile",
    value: function downloadFile(e, t) {
      return yt.apply(this, [e, t]);
    }
  }, {
    key: "uploadFile",
    value: function uploadFile(e, t) {
      return pt.apply(this, [e, t]);
    }
  }, {
    key: "getUploadMetadata",
    value: function getUploadMetadata(e, t) {
      return ft.apply(this, [e, t]);
    }
  }, {
    key: "registerExtension",
    value: function registerExtension(e) {
      vt[e.name] = e;
    }
  }, {
    key: "invokeExtension",
    value: function () {
      var _invokeExtension = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee42(e, t) {
        var n;
        return _regenerator.default.wrap(function _callee42$(_context42) {
          while (1) {
            switch (_context42.prev = _context42.next) {
              case 0:
                n = vt[e];
                if (n) {
                  _context42.next = 3;
                  break;
                }
                throw new re({
                  message: "\u6269\u5C55".concat(e, " \u5FC5\u987B\u5148\u6CE8\u518C")
                });
              case 3:
                _context42.next = 5;
                return n.invoke(t, this);
              case 5:
                return _context42.abrupt("return", _context42.sent);
              case 6:
              case "end":
                return _context42.stop();
            }
          }
        }, _callee42, this);
      }));
      function invokeExtension(_x35, _x36) {
        return _invokeExtension.apply(this, arguments);
      }
      return invokeExtension;
    }()
  }, {
    key: "useAdapters",
    value: function useAdapters(e) {
      var _ref16 = Oe(e) || {},
        t = _ref16.adapter,
        n = _ref16.runtime;
      t && (Ee.adapter = t), n && (Ee.runtime = n);
    }
  }]);
  return It;
}();
var St = new It();
function bt(e, t, n) {
  void 0 === n && (n = {});
  var s = /\?/.test(t),
    r = "";
  for (var i in n) {
    "" === r ? !s && (t += "?") : r += "&", r += i + "=" + encodeURIComponent(n[i]);
  }
  return /^http(s)?:\/\//.test(t += r) ? t : "" + e + t;
}
var kt = /*#__PURE__*/function () {
  function kt() {
    (0, _classCallCheck2.default)(this, kt);
  }
  (0, _createClass2.default)(kt, [{
    key: "get",
    value: function get(e) {
      var t = e.url,
        n = e.data,
        s = e.headers,
        r = e.timeout;
      return new Promise(function (e, i) {
        ie.request({
          url: bt("https:", t),
          data: n,
          method: "GET",
          header: s,
          timeout: r,
          success: function success(t) {
            e(t);
          },
          fail: function fail(e) {
            i(e);
          }
        });
      });
    }
  }, {
    key: "post",
    value: function post(e) {
      var t = e.url,
        n = e.data,
        s = e.headers,
        r = e.timeout;
      return new Promise(function (e, i) {
        ie.request({
          url: bt("https:", t),
          data: n,
          method: "POST",
          header: s,
          timeout: r,
          success: function success(t) {
            e(t);
          },
          fail: function fail(e) {
            i(e);
          }
        });
      });
    }
  }, {
    key: "upload",
    value: function upload(e) {
      return new Promise(function (t, n) {
        var s = e.url,
          r = e.file,
          i = e.data,
          o = e.headers,
          a = e.fileType,
          c = ie.uploadFile({
            url: bt("https:", s),
            name: "file",
            formData: Object.assign({}, i),
            filePath: r,
            fileType: a,
            header: o,
            success: function success(e) {
              var n = {
                statusCode: e.statusCode,
                data: e.data || {}
              };
              200 === e.statusCode && i.success_action_status && (n.statusCode = parseInt(i.success_action_status, 10)), t(n);
            },
            fail: function fail(e) {
              n(new Error(e.errMsg || "uploadFile:fail"));
            }
          });
        "function" == typeof e.onUploadProgress && c && "function" == typeof c.onProgressUpdate && c.onProgressUpdate(function (t) {
          e.onUploadProgress({
            loaded: t.totalBytesSent,
            total: t.totalBytesExpectedToSend
          });
        });
      });
    }
  }]);
  return kt;
}();
var At = {
  setItem: function setItem(e, t) {
    ie.setStorageSync(e, t);
  },
  getItem: function getItem(e) {
    return ie.getStorageSync(e);
  },
  removeItem: function removeItem(e) {
    ie.removeStorageSync(e);
  },
  clear: function clear() {
    ie.clearStorageSync();
  }
};
var Tt = {
  genAdapter: function genAdapter() {
    return {
      root: {},
      reqClass: kt,
      localStorage: At,
      primaryStorage: "local"
    };
  },
  isMatch: function isMatch() {
    return !0;
  },
  runtime: "uni_app"
};
St.useAdapters(Tt);
var Ct = St,
  Pt = Ct.init;
Ct.init = function (e) {
  e.env = e.spaceId;
  var t = Pt.call(this, e);
  t.config.provider = "tencent", t.config.spaceId = e.spaceId;
  var n = t.auth;
  return t.auth = function (e) {
    var t = n.call(this, e);
    return ["linkAndRetrieveDataWithTicket", "signInAnonymously", "signOut", "getAccessToken", "getLoginState", "signInWithTicket", "getUserInfo"].forEach(function (e) {
      var n;
      t[e] = (n = t[e], function (e) {
        e = e || {};
        var _se = se(e),
          t = _se.success,
          s = _se.fail,
          r = _se.complete;
        if (!(t || s || r)) return n.call(this, e);
        n.call(this, e).then(function (e) {
          t && t(e), r && r(e);
        }, function (e) {
          s && s(e), r && r(e);
        });
      }).bind(t);
    }), t;
  }, t.customAuth = t.auth, t;
};
var Ot = Ct;
function Et(_x37, _x38) {
  return _Et.apply(this, arguments);
}
function _Et() {
  _Et = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee68(e, t) {
    var n, _e31, s;
    return _regenerator.default.wrap(function _callee68$(_context68) {
      while (1) {
        switch (_context68.prev = _context68.next) {
          case 0:
            n = "http://".concat(e, ":").concat(t, "/system/ping");
            _context68.prev = 1;
            _context68.next = 4;
            return s = {
              url: n,
              timeout: 500
            }, new Promise(function (e, t) {
              ie.request(_objectSpread(_objectSpread({}, s), {}, {
                success: function success(t) {
                  e(t);
                },
                fail: function fail(e) {
                  t(e);
                }
              }));
            });
          case 4:
            _e31 = _context68.sent;
            return _context68.abrupt("return", !(!_e31.data || 0 !== _e31.data.code));
          case 8:
            _context68.prev = 8;
            _context68.t0 = _context68["catch"](1);
            return _context68.abrupt("return", !1);
          case 11:
          case "end":
            return _context68.stop();
        }
      }
    }, _callee68, null, [[1, 8]]);
  }));
  return _Et.apply(this, arguments);
}
function xt(_x39, _x40) {
  return _xt.apply(this, arguments);
}
function _xt() {
  _xt = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee69(e, t) {
    var n, s, _r11;
    return _regenerator.default.wrap(function _callee69$(_context69) {
      while (1) {
        switch (_context69.prev = _context69.next) {
          case 0:
            s = 0;
          case 1:
            if (!(s < e.length)) {
              _context69.next = 11;
              break;
            }
            _r11 = e[s];
            _context69.next = 5;
            return Et(_r11, t);
          case 5:
            if (!_context69.sent) {
              _context69.next = 8;
              break;
            }
            n = _r11;
            return _context69.abrupt("break", 11);
          case 8:
            s++;
            _context69.next = 1;
            break;
          case 11:
            return _context69.abrupt("return", {
              address: n,
              port: t
            });
          case 12:
          case "end":
            return _context69.stop();
        }
      }
    }, _callee69);
  }));
  return _xt.apply(this, arguments);
}
var Lt = {
  "serverless.file.resource.generateProximalSign": "storage/generate-proximal-sign",
  "serverless.file.resource.report": "storage/report",
  "serverless.file.resource.delete": "storage/delete",
  "serverless.file.resource.getTempFileURL": "storage/get-temp-file-url"
};
var Ut = /*#__PURE__*/function () {
  function Ut(e) {
    (0, _classCallCheck2.default)(this, Ut);
    if (["spaceId", "clientSecret"].forEach(function (t) {
      if (!Object.prototype.hasOwnProperty.call(e, t)) throw new Error("".concat(t, " required"));
    }), !e.endpoint) throw new Error("集群空间未配置ApiEndpoint，配置后需要重新关联服务空间后生效");
    this.config = Object.assign({}, e), this.config.provider = "dcloud", this.config.requestUrl = this.config.endpoint + "/client", this.config.envType = this.config.envType || "public", this.adapter = ie;
  }
  (0, _createClass2.default)(Ut, [{
    key: "request",
    value: function () {
      var _request4 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee43(e) {
        var _this15 = this;
        var t,
          n,
          _args43 = arguments;
        return _regenerator.default.wrap(function _callee43$(_context43) {
          while (1) {
            switch (_context43.prev = _context43.next) {
              case 0:
                t = _args43.length > 1 && _args43[1] !== undefined ? _args43[1] : !0;
                n = S && t;
                if (!n) {
                  _context43.next = 8;
                  break;
                }
                _context43.next = 5;
                return this.setupLocalRequest(e);
              case 5:
                _context43.t0 = _context43.sent;
                _context43.next = 9;
                break;
              case 8:
                _context43.t0 = this.setupRequest(e);
              case 9:
                e = _context43.t0;
                return _context43.abrupt("return", Promise.resolve().then(function () {
                  return n ? _this15.requestLocal(e) : fe.wrappedRequest(e, _this15.adapter.request);
                }));
              case 11:
              case "end":
                return _context43.stop();
            }
          }
        }, _callee43, this);
      }));
      function request(_x41) {
        return _request4.apply(this, arguments);
      }
      return request;
    }()
  }, {
    key: "requestLocal",
    value: function requestLocal(e) {
      var _this16 = this;
      return new Promise(function (t, n) {
        _this16.adapter.request(Object.assign(e, {
          complete: function complete(e) {
            if (e || (e = {}), !e.statusCode || e.statusCode >= 400) {
              var _t11 = e.data && e.data.code || "SYS_ERR",
                _s12 = e.data && e.data.message || "request:fail";
              return n(new re({
                code: _t11,
                message: _s12
              }));
            }
            t({
              success: !0,
              result: e.data
            });
          }
        }));
      });
    }
  }, {
    key: "setupRequest",
    value: function setupRequest(e) {
      var t = Object.assign({}, e, {
          spaceId: this.config.spaceId,
          timestamp: Date.now()
        }),
        n = {
          "Content-Type": "application/json"
        };
      n["x-serverless-sign"] = fe.sign(t, this.config.clientSecret);
      var s = pe();
      n["x-client-info"] = encodeURIComponent(JSON.stringify(s));
      var _oe = oe(),
        r = _oe.token;
      return n["x-client-token"] = r, {
        url: this.config.requestUrl,
        method: "POST",
        data: t,
        dataType: "json",
        header: JSON.parse(JSON.stringify(n))
      };
    }
  }, {
    key: "setupLocalRequest",
    value: function () {
      var _setupLocalRequest = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee44(e) {
        var t, _oe2, n, s, _ref17, r, i, _yield$xt, o;
        return _regenerator.default.wrap(function _callee44$(_context44) {
          while (1) {
            switch (_context44.prev = _context44.next) {
              case 0:
                t = pe();
                _oe2 = oe();
                n = _oe2.token;
                s = Object.assign({}, e, {
                  spaceId: this.config.spaceId,
                  timestamp: Date.now(),
                  clientInfo: t,
                  token: n
                });
                _ref17 = this.__dev__ && this.__dev__.debugInfo || {};
                r = _ref17.address;
                i = _ref17.servePort;
                _context44.next = 9;
                return xt(r, i);
              case 9:
                _yield$xt = _context44.sent;
                o = _yield$xt.address;
                return _context44.abrupt("return", {
                  url: "http://".concat(o, ":").concat(i, "/").concat(Lt[e.method]),
                  method: "POST",
                  data: s,
                  dataType: "json",
                  header: JSON.parse(JSON.stringify({
                    "Content-Type": "application/json"
                  }))
                });
              case 12:
              case "end":
                return _context44.stop();
            }
          }
        }, _callee44, this);
      }));
      function setupLocalRequest(_x42) {
        return _setupLocalRequest.apply(this, arguments);
      }
      return setupLocalRequest;
    }()
  }, {
    key: "callFunction",
    value: function callFunction(e) {
      var t = {
        method: "serverless.function.runtime.invoke",
        params: JSON.stringify({
          functionTarget: e.name,
          functionArgs: e.data || {}
        })
      };
      return this.request(t, !1);
    }
  }, {
    key: "getUploadFileOptions",
    value: function getUploadFileOptions(e) {
      var t = {
        method: "serverless.file.resource.generateProximalSign",
        params: JSON.stringify(e)
      };
      return this.request(t);
    }
  }, {
    key: "reportUploadFile",
    value: function reportUploadFile(e) {
      var t = {
        method: "serverless.file.resource.report",
        params: JSON.stringify(e)
      };
      return this.request(t);
    }
  }, {
    key: "uploadFile",
    value: function uploadFile(_ref18) {
      var _this17 = this;
      var e = _ref18.filePath,
        t = _ref18.cloudPath,
        _ref18$fileType = _ref18.fileType,
        n = _ref18$fileType === void 0 ? "image" : _ref18$fileType,
        s = _ref18.onUploadProgress;
      if (!t) throw new re({
        code: "CLOUDPATH_REQUIRED",
        message: "cloudPath不可为空"
      });
      var r;
      return this.getUploadFileOptions({
        cloudPath: t
      }).then(function (t) {
        var _t$result = t.result,
          i = _t$result.url,
          o = _t$result.formData,
          a = _t$result.name;
        return r = t.result.fileUrl, new Promise(function (t, r) {
          var c = _this17.adapter.uploadFile({
            url: i,
            formData: o,
            name: a,
            filePath: e,
            fileType: n,
            success: function success(e) {
              e && e.statusCode < 400 ? t(e) : r(new re({
                code: "UPLOAD_FAILED",
                message: "文件上传失败"
              }));
            },
            fail: function fail(e) {
              r(new re({
                code: e.code || "UPLOAD_FAILED",
                message: e.message || e.errMsg || "文件上传失败"
              }));
            }
          });
          "function" == typeof s && c && "function" == typeof c.onProgressUpdate && c.onProgressUpdate(function (e) {
            s({
              loaded: e.totalBytesSent,
              total: e.totalBytesExpectedToSend
            });
          });
        });
      }).then(function () {
        return _this17.reportUploadFile({
          cloudPath: t
        });
      }).then(function (t) {
        return new Promise(function (n, s) {
          t.success ? n({
            success: !0,
            filePath: e,
            fileID: r
          }) : s(new re({
            code: "UPLOAD_FAILED",
            message: "文件上传失败"
          }));
        });
      });
    }
  }, {
    key: "deleteFile",
    value: function deleteFile(_ref19) {
      var e = _ref19.fileList;
      var t = {
        method: "serverless.file.resource.delete",
        params: JSON.stringify({
          fileList: e
        })
      };
      return this.request(t).then(function (e) {
        if (e.success) return e.result;
        throw new re({
          code: "DELETE_FILE_FAILED",
          message: "删除文件失败"
        });
      });
    }
  }, {
    key: "getTempFileURL",
    value: function getTempFileURL() {
      var _ref20 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        e = _ref20.fileList,
        t = _ref20.maxAge;
      if (!Array.isArray(e) || 0 === e.length) throw new re({
        code: "INVALID_PARAM",
        message: "fileList的元素必须是非空的字符串"
      });
      var n = {
        method: "serverless.file.resource.getTempFileURL",
        params: JSON.stringify({
          fileList: e,
          maxAge: t
        })
      };
      return this.request(n).then(function (e) {
        if (e.success) return {
          fileList: e.result.fileList.map(function (e) {
            return {
              fileID: e.fileID,
              tempFileURL: e.tempFileURL
            };
          })
        };
        throw new re({
          code: "GET_TEMP_FILE_URL_FAILED",
          message: "获取临时文件链接失败"
        });
      });
    }
  }]);
  return Ut;
}();
var Rt = {
    init: function init(e) {
      var t = new Ut(e),
        n = {
          signInAnonymously: function signInAnonymously() {
            return Promise.resolve();
          },
          getLoginState: function getLoginState() {
            return Promise.resolve(!1);
          }
        };
      return t.auth = function () {
        return n;
      }, t.customAuth = t.auth, t;
    }
  },
  Nt = n(function (e, t) {
    e.exports = r.enc.Hex;
  });
function Dt() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (e) {
    var t = 16 * Math.random() | 0;
    return ("x" === e ? t : 3 & t | 8).toString(16);
  });
}
function Mt() {
  var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
  var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var n = t.data,
    s = t.functionName,
    r = t.method,
    i = t.headers,
    _t$signHeaderKeys = t.signHeaderKeys,
    o = _t$signHeaderKeys === void 0 ? [] : _t$signHeaderKeys,
    a = t.config,
    c = String(Date.now()),
    u = Dt(),
    l = Object.assign({}, i, {
      "x-from-app-id": a.spaceAppId,
      "x-from-env-id": a.spaceId,
      "x-to-env-id": a.spaceId,
      "x-from-instance-id": c,
      "x-from-function-name": s,
      "x-client-timestamp": c,
      "x-alipay-source": "client",
      "x-request-id": u,
      "x-alipay-callid": u,
      "x-trace-id": u
    }),
    h = ["x-from-app-id", "x-from-env-id", "x-to-env-id", "x-from-instance-id", "x-from-function-name", "x-client-timestamp"].concat(o),
    _ref21 = e.split("?") || [],
    _ref22 = (0, _slicedToArray2.default)(_ref21, 2),
    _ref22$ = _ref22[0],
    d = _ref22$ === void 0 ? "" : _ref22$,
    _ref22$2 = _ref22[1],
    p = _ref22$2 === void 0 ? "" : _ref22$2,
    f = function (e) {
      var t = e.signedHeaders.join(";"),
        n = e.signedHeaders.map(function (t) {
          return "".concat(t.toLowerCase(), ":").concat(e.headers[t], "\n");
        }).join(""),
        s = Ie(e.body).toString(Nt),
        r = "".concat(e.method.toUpperCase(), "\n").concat(e.path, "\n").concat(e.query, "\n").concat(n, "\n").concat(t, "\n").concat(s, "\n"),
        i = Ie(r).toString(Nt),
        o = "HMAC-SHA256\n".concat(e.timestamp, "\n").concat(i, "\n"),
        a = Se(o, e.secretKey).toString(Nt);
      return "HMAC-SHA256 Credential=".concat(e.secretId, ", SignedHeaders=").concat(t, ", Signature=").concat(a);
    }({
      path: d,
      query: p,
      method: r,
      headers: l,
      timestamp: c,
      body: JSON.stringify(n),
      secretId: a.accessKey,
      secretKey: a.secretKey,
      signedHeaders: h.sort()
    });
  return {
    url: "".concat(a.endpoint).concat(e),
    headers: Object.assign({}, l, {
      Authorization: f
    })
  };
}
function qt(_ref23) {
  var e = _ref23.url,
    t = _ref23.data,
    _ref23$method = _ref23.method,
    n = _ref23$method === void 0 ? "POST" : _ref23$method,
    _ref23$headers = _ref23.headers,
    s = _ref23$headers === void 0 ? {} : _ref23$headers,
    r = _ref23.timeout;
  return new Promise(function (i, o) {
    ie.request({
      url: e,
      method: n,
      data: "object" == (0, _typeof2.default)(t) ? JSON.stringify(t) : t,
      header: s,
      dataType: "json",
      timeout: r,
      complete: function complete() {
        var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        var t = s["x-trace-id"] || "";
        if (!e.statusCode || e.statusCode >= 400) {
          var _ref24 = e.data || {},
            _n8 = _ref24.message,
            _s13 = _ref24.errMsg,
            _r5 = _ref24.trace_id;
          return o(new re({
            code: "SYS_ERR",
            message: _n8 || _s13 || "request:fail",
            requestId: _r5 || t
          }));
        }
        i({
          status: e.statusCode,
          data: e.data,
          headers: e.header,
          requestId: t
        });
      }
    });
  });
}
function Ft(e, t) {
  var n = e.path,
    s = e.data,
    _e$method = e.method,
    r = _e$method === void 0 ? "GET" : _e$method,
    _Mt = Mt(n, {
      functionName: "",
      data: s,
      method: r,
      headers: {
        "x-alipay-cloud-mode": "oss",
        "x-data-api-type": "oss",
        "x-expire-timestamp": String(Date.now() + 6e4)
      },
      signHeaderKeys: ["x-data-api-type", "x-expire-timestamp"],
      config: t
    }),
    i = _Mt.url,
    o = _Mt.headers;
  return qt({
    url: i,
    data: s,
    method: r,
    headers: o
  }).then(function (e) {
    var t = e.data || {};
    if (!t.success) throw new re({
      code: e.errCode,
      message: e.errMsg,
      requestId: e.requestId
    });
    return t.data || {};
  }).catch(function (e) {
    throw new re({
      code: e.errCode,
      message: e.errMsg,
      requestId: e.requestId
    });
  });
}
function Kt() {
  var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
  var t = e.trim().replace(/^cloud:\/\//, ""),
    n = t.indexOf("/");
  if (n <= 0) throw new re({
    code: "INVALID_PARAM",
    message: "fileID不合法"
  });
  var s = t.substring(0, n),
    r = t.substring(n + 1);
  return s !== this.config.spaceId && console.warn("file ".concat(e, " does not belong to env ").concat(this.config.spaceId)), r;
}
function jt() {
  var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
  return "cloud://".concat(this.config.spaceId, "/").concat(e.replace(/^\/+/, ""));
}
var $t = /*#__PURE__*/function () {
  function $t(e) {
    (0, _classCallCheck2.default)(this, $t);
    this.config = e;
  }
  (0, _createClass2.default)($t, [{
    key: "signedURL",
    value: function signedURL(e) {
      var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var n = "/ws/function/".concat(e),
        s = this.config.wsEndpoint.replace(/^ws(s)?:\/\//, ""),
        r = Object.assign({}, t, {
          accessKeyId: this.config.accessKey,
          signatureNonce: Dt(),
          timestamp: "" + Date.now()
        }),
        i = [n, ["accessKeyId", "authorization", "signatureNonce", "timestamp"].sort().map(function (e) {
          return r[e] ? "".concat(e, "=").concat(r[e]) : null;
        }).filter(Boolean).join("&"), "host:".concat(s)].join("\n"),
        o = ["HMAC-SHA256", Ie(i).toString(Nt)].join("\n"),
        a = Se(o, this.config.secretKey).toString(Nt),
        c = Object.keys(r).map(function (e) {
          return "".concat(e, "=").concat(encodeURIComponent(r[e]));
        }).join("&");
      return "".concat(this.config.wsEndpoint).concat(n, "?").concat(c, "&signature=").concat(a);
    }
  }]);
  return $t;
}();
var Bt = /*#__PURE__*/function () {
  function Bt(e) {
    (0, _classCallCheck2.default)(this, Bt);
    this.config = e;
  }
  (0, _createClass2.default)(Bt, [{
    key: "signedURL",
    value: function signedURL(e) {
      var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var n = "/ws/sse/function/".concat(e),
        s = this.config.endpoint.replace(/^http(s)?:\/\//, ""),
        r = Object.assign({}, t, {
          accessKeyId: this.config.accessKey,
          signatureNonce: Dt(),
          timestamp: "" + Date.now()
        }),
        i = ["accessKeyId", "authorization", "signatureNonce", "timestamp"].sort().map(function (e) {
          return r[e] ? "".concat(e, "=").concat(r[e]) : null;
        }).filter(Boolean).join("&"),
        o = [n.replace("/ws", ""), i, "host:".concat(s)].join("\n"),
        a = ["HMAC-SHA256", Ie(o).toString(Nt)].join("\n"),
        c = Se(a, this.config.secretKey).toString(Nt),
        u = Object.keys(r).map(function (e) {
          return "".concat(e, "=").concat(encodeURIComponent(r[e]));
        }).join("&");
      return "".concat(this.config.endpoint).concat(n, "?").concat(u, "&signature=").concat(c);
    }
  }]);
  return Bt;
}();
var Wt = /*#__PURE__*/function () {
  function Wt(e) {
    (0, _classCallCheck2.default)(this, Wt);
    if (["spaceId", "spaceAppId", "accessKey", "secretKey"].forEach(function (t) {
      if (!Object.prototype.hasOwnProperty.call(e, t)) throw new Error("".concat(t, " required"));
    }), e.endpoint) {
      if ("string" != typeof e.endpoint) throw new Error("endpoint must be string");
      if (!/^https:\/\//.test(e.endpoint)) throw new Error("endpoint must start with https://");
      e.endpoint = e.endpoint.replace(/\/$/, "");
    }
    this.config = Object.assign({}, e, {
      endpoint: e.endpoint || "https://".concat(e.spaceId, ".api-hz.cloudbasefunction.cn"),
      wsEndpoint: e.wsEndpoint || "wss://".concat(e.spaceId, ".api-hz.cloudbasefunction.cn")
    }), this._websocket = new $t(this.config), this._sse = new Bt(this.config);
  }
  (0, _createClass2.default)(Wt, [{
    key: "callFunction",
    value: function callFunction(e) {
      return function (e, t) {
        var n = e.name,
          s = e.data,
          _e$async = e.async,
          r = _e$async === void 0 ? !1 : _e$async,
          i = e.timeout,
          o = "POST",
          a = {
            "x-to-function-name": n
          };
        r && (a["x-function-invoke-type"] = "async");
        var _Mt2 = Mt("/functions/invokeFunction", {
            functionName: n,
            data: s,
            method: o,
            headers: a,
            signHeaderKeys: ["x-to-function-name"],
            config: t
          }),
          c = _Mt2.url,
          u = _Mt2.headers;
        return qt({
          url: c,
          data: s,
          method: o,
          headers: u,
          timeout: i
        }).then(function (e) {
          var t = 0;
          if (r) {
            var _n9 = e.data || {};
            t = "200" === _n9.errCode ? 0 : _n9.errCode, e.data = _n9.data || {}, e.errMsg = _n9.errMsg;
          }
          if (0 !== t) throw new re({
            code: t,
            message: e.errMsg,
            requestId: e.requestId
          });
          return {
            errCode: t,
            success: 0 === t,
            requestId: e.requestId,
            result: e.data
          };
        }).catch(function (e) {
          throw new re({
            code: e.errCode,
            message: e.errMsg,
            requestId: e.requestId
          });
        });
      }(e, this.config);
    }
  }, {
    key: "uploadFileToOSS",
    value: function uploadFileToOSS(_ref25) {
      var e = _ref25.url,
        t = _ref25.filePath,
        n = _ref25.fileType,
        s = _ref25.formData,
        r = _ref25.onUploadProgress;
      return new Promise(function (i, o) {
        var a = ie.uploadFile({
          url: e,
          filePath: t,
          fileType: n,
          formData: s,
          name: "file",
          success: function success(e) {
            e && e.statusCode < 400 ? i(e) : o(new re({
              code: "UPLOAD_FAILED",
              message: "文件上传失败"
            }));
          },
          fail: function fail(e) {
            o(new re({
              code: e.code || "UPLOAD_FAILED",
              message: e.message || e.errMsg || "文件上传失败"
            }));
          }
        });
        "function" == typeof r && a && "function" == typeof a.onProgressUpdate && a.onProgressUpdate(function (e) {
          r({
            loaded: e.totalBytesSent,
            total: e.totalBytesExpectedToSend
          });
        });
      });
    }
  }, {
    key: "uploadFile",
    value: function () {
      var _uploadFile2 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee45(_ref26) {
        var e, _ref26$cloudPath, t, _ref26$fileType, n, s, r, i, o, a, c;
        return _regenerator.default.wrap(function _callee45$(_context45) {
          while (1) {
            switch (_context45.prev = _context45.next) {
              case 0:
                e = _ref26.filePath, _ref26$cloudPath = _ref26.cloudPath, t = _ref26$cloudPath === void 0 ? "" : _ref26$cloudPath, _ref26$fileType = _ref26.fileType, n = _ref26$fileType === void 0 ? "image" : _ref26$fileType, s = _ref26.onUploadProgress;
                if (!("string" !== f(t))) {
                  _context45.next = 3;
                  break;
                }
                throw new re({
                  code: "INVALID_PARAM",
                  message: "cloudPath必须为字符串类型"
                });
              case 3:
                if (t = t.trim()) {
                  _context45.next = 5;
                  break;
                }
                throw new re({
                  code: "INVALID_PARAM",
                  message: "cloudPath不可为空"
                });
              case 5:
                if (!/:\/\//.test(t)) {
                  _context45.next = 7;
                  break;
                }
                throw new re({
                  code: "INVALID_PARAM",
                  message: "cloudPath不合法"
                });
              case 7:
                _context45.next = 9;
                return Ft({
                  path: "/".concat(t.replace(/^\//, ""), "?post_url")
                }, this.config);
              case 9:
                r = _context45.sent;
                i = r.file_id;
                o = r.upload_url;
                a = r.form_data;
                c = a && a.reduce(function (e, t) {
                  return e[t.key] = t.value, e;
                }, {});
                return _context45.abrupt("return", this.uploadFileToOSS({
                  url: o,
                  filePath: e,
                  fileType: n,
                  formData: c,
                  onUploadProgress: s
                }).then(function () {
                  return {
                    fileID: i
                  };
                }));
              case 15:
              case "end":
                return _context45.stop();
            }
          }
        }, _callee45, this);
      }));
      function uploadFile(_x43) {
        return _uploadFile2.apply(this, arguments);
      }
      return uploadFile;
    }()
  }, {
    key: "getTempFileURL",
    value: function () {
      var _getTempFileURL = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee46(_ref27) {
        var _this18 = this;
        var e;
        return _regenerator.default.wrap(function _callee46$(_context46) {
          while (1) {
            switch (_context46.prev = _context46.next) {
              case 0:
                e = _ref27.fileList;
                return _context46.abrupt("return", new Promise(function (t, n) {
                  (!e || e.length < 0) && t({
                    code: "INVALID_PARAM",
                    message: "fileList不能为空数组"
                  }), e.length > 50 && t({
                    code: "INVALID_PARAM",
                    message: "fileList数组长度不能超过50"
                  });
                  var s = [];
                  var _iterator5 = _createForOfIteratorHelper(e),
                    _step5;
                  try {
                    for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
                      var _n10 = _step5.value;
                      var _e16 = void 0;
                      "string" !== f(_n10) && t({
                        code: "INVALID_PARAM",
                        message: "fileList的元素必须是非空的字符串"
                      });
                      try {
                        _e16 = Kt.call(_this18, _n10);
                      } catch (t) {
                        console.warn(t.errCode, t.errMsg), _e16 = _n10;
                      }
                      s.push({
                        file_id: _e16,
                        expire: 600
                      });
                    }
                  } catch (err) {
                    _iterator5.e(err);
                  } finally {
                    _iterator5.f();
                  }
                  Ft({
                    path: "/?download_url",
                    data: {
                      file_list: s
                    },
                    method: "POST"
                  }, _this18.config).then(function (e) {
                    var _e$file_list = e.file_list,
                      n = _e$file_list === void 0 ? [] : _e$file_list;
                    t({
                      fileList: n.map(function (e) {
                        return {
                          fileID: jt.call(_this18, e.file_id),
                          tempFileURL: e.download_url
                        };
                      })
                    });
                  }).catch(function (e) {
                    return n(e);
                  });
                }));
              case 2:
              case "end":
                return _context46.stop();
            }
          }
        }, _callee46);
      }));
      function getTempFileURL(_x44) {
        return _getTempFileURL.apply(this, arguments);
      }
      return getTempFileURL;
    }()
  }, {
    key: "connectWebSocket",
    value: function () {
      var _connectWebSocket = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee47(e) {
        var t, n;
        return _regenerator.default.wrap(function _callee47$(_context47) {
          while (1) {
            switch (_context47.prev = _context47.next) {
              case 0:
                t = e.name, n = e.query;
                return _context47.abrupt("return", ie.connectSocket({
                  url: this._websocket.signedURL(t, n),
                  complete: function complete() {}
                }));
              case 2:
              case "end":
                return _context47.stop();
            }
          }
        }, _callee47, this);
      }));
      function connectWebSocket(_x45) {
        return _connectWebSocket.apply(this, arguments);
      }
      return connectWebSocket;
    }()
  }, {
    key: "requestSSE",
    value: function requestSSE(e) {
      var t = e.name,
        n = e.data;
      return ie.request({
        method: "POST",
        url: this._sse.signedURL(t),
        data: n,
        header: {
          "content-type": "application/json"
        },
        dataType: "json"
      });
    }
  }]);
  return Wt;
}();
var Ht = {
  init: function init(e) {
    e.provider = "alipay";
    var t = new Wt(e);
    return t.auth = function () {
      return {
        signInAnonymously: function signInAnonymously() {
          return Promise.resolve();
        },
        getLoginState: function getLoginState() {
          return Promise.resolve(!0);
        }
      };
    }, t;
  }
};
function Jt(_ref28) {
  var e = _ref28.data;
  var t;
  t = pe();
  var n = JSON.parse(JSON.stringify(e || {}));
  if (Object.assign(n, {
    clientInfo: t
  }), !n.uniIdToken) {
    var _oe3 = oe(),
      _e17 = _oe3.token;
    _e17 && (n.uniIdToken = _e17);
  }
  return n;
}
var zt = {
  enable: !1,
  interval: 0,
  space: {}
};
var Vt = null,
  Gt = 0,
  Qt = !1;
function Yt() {
  return Array.isArray(P) && P.length ? P[0] : {};
}
function Xt(e) {
  return "".concat(e, "_").concat(Yt().spaceId || "default");
}
function Zt() {
  if (Vt) return Vt;
  try {
    var e = ie.getStorageSync(Xt("UNICLOUD_FAILOVER_CONFIG"));
    if (g(e)) return Vt = e, e;
  } catch (e) {}
  return null;
}
function en(e) {
  Gt = e;
  try {
    ie.setStorageSync(Xt("UNICLOUD_FAILOVER_LAST_REQUEST"), e);
  } catch (e) {}
}
function tn(e) {
  if (null === e || e < 0) return !1;
  if (0 === e) return !0;
  var t = function () {
    if (Gt) return Gt;
    try {
      var _e18 = ie.getStorageSync(Xt("UNICLOUD_FAILOVER_LAST_REQUEST"));
      if (_e18 && "number" == typeof _e18) return Gt = _e18, _e18;
    } catch (e) {}
    return 0;
  }();
  if (!t) return !0;
  return Date.now() - t >= e;
}
function nn() {
  return _nn.apply(this, arguments);
}
function _nn() {
  _nn = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee70() {
    var e, t, _e32, n, s, _s$enable, _r12, _s$interval, _i5, _s$space, _o4, _a3, _c3, _u;
    return _regenerator.default.wrap(function _callee70$(_context70) {
      while (1) {
        switch (_context70.prev = _context70.next) {
          case 0:
            e = Yt(), t = e.failoverEndpoint;
            if (t) {
              _context70.next = 3;
              break;
            }
            return _context70.abrupt("return", null);
          case 3:
            if (!Qt) {
              _context70.next = 5;
              break;
            }
            return _context70.abrupt("return", Zt());
          case 5:
            Qt = !0;
            _context70.prev = 6;
            _e32 = "".concat(t, "/.unicloud/failover-cfg.json");
            _context70.next = 10;
            return ie.request({
              url: _e32,
              method: "GET",
              dataType: "json",
              timeout: 5e3
            });
          case 10:
            n = _context70.sent;
            if (!(en(Date.now()), 200 !== n.statusCode || !g(n.data))) {
              _context70.next = 13;
              break;
            }
            return _context70.abrupt("return", null);
          case 13:
            s = _objectSpread(_objectSpread({}, zt), n.data), _s$enable = s.enable, _r12 = _s$enable === void 0 ? !1 : _s$enable, _s$interval = s.interval, _i5 = _s$interval === void 0 ? 0 : _s$interval, _s$space = s.space, _o4 = _s$space === void 0 ? {} : _s$space, _a3 = Zt(), _c3 = _a3 && _a3.enable, _u = function (e, t) {
              if (!e) return t.enable;
              if (e.enable !== t.enable) return !0;
              if (e.interval !== t.interval) return !0;
              if (t._lastModifiedAt && e._lastModifiedAt !== t._lastModifiedAt) return !0;
              if (JSON.stringify(e.space) !== JSON.stringify(t.space)) return !0;
              return !1;
            }(_a3, s);
            return _context70.abrupt("return", (function (e) {
              try {
                Vt = e, e && e.enable ? ie.setStorageSync(Xt("UNICLOUD_FAILOVER_CONFIG"), e) : (ie.removeStorageSync(Xt("UNICLOUD_FAILOVER_CONFIG")), ie.removeStorageSync(Xt("UNICLOUD_FAILOVER_LAST_REQUEST")));
              } catch (e) {}
            }({
              enable: _r12,
              interval: _i5,
              space: _o4,
              _lastModifiedAt: n.data._lastModifiedAt || Date.now()
            }), _u && Z(J, {
              isEnabled: _r12,
              hasStatusChanged: _c3 !== _r12,
              failoverSpace: _o4
            }), s));
          case 17:
            _context70.prev = 17;
            _context70.t0 = _context70["catch"](6);
            return _context70.abrupt("return", Zt());
          case 20:
            _context70.prev = 20;
            Qt = !1;
            return _context70.finish(20);
          case 23:
          case "end":
            return _context70.stop();
        }
      }
    }, _callee70, null, [[6, 17, 20, 23]]);
  }));
  return _nn.apply(this, arguments);
}
function sn() {
  return _sn.apply(this, arguments);
}
function _sn() {
  _sn = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee71() {
    var _this31 = this;
    var e,
      _this$__dev__,
      t,
      n,
      s,
      r,
      i,
      o,
      a,
      _args10 = arguments;
    return _regenerator.default.wrap(function _callee71$(_context71) {
      while (1) {
        switch (_context71.prev = _context71.next) {
          case 0:
            e = _args10.length > 0 && _args10[0] !== undefined ? _args10[0] : {};
            _context71.next = 3;
            return this.__dev__.initLocalNetwork();
          case 3:
            _this$__dev__ = this.__dev__, t = _this$__dev__.localAddress, n = _this$__dev__.localPort, s = Yt(), r = {
              aliyun: "aliyun",
              tencent: "tcb",
              alipay: "alipay",
              dcloud: "dcloud"
            }[s.provider], i = s.spaceId, o = "http://".concat(t, ":").concat(n, "/system/check-function"), a = "http://".concat(t, ":").concat(n, "/cloudfunctions/").concat(e.name);
            return _context71.abrupt("return", new Promise(function (t, n) {
              ie.request({
                method: "POST",
                url: o,
                data: {
                  name: e.name,
                  platform: T,
                  provider: r,
                  spaceId: i
                },
                timeout: 3e3,
                success: function success(e) {
                  t(e);
                },
                fail: function fail() {
                  t({
                    data: {
                      code: "NETWORK_ERROR",
                      message: "连接本地调试服务失败，请检查客户端是否和主机在同一局域网下，自动切换为已部署的云函数。"
                    }
                  });
                }
              });
            }).then(function () {
              var _ref68 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
                e = _ref68.data;
              var _ref69 = e || {},
                t = _ref69.code,
                n = _ref69.message;
              return {
                code: 0 === t ? 0 : t || "SYS_ERR",
                message: n || "SYS_ERR"
              };
            }).then(function (_ref70) {
              var t = _ref70.code,
                n = _ref70.message;
              if (0 !== t) {
                switch (t) {
                  case "MODULE_ENCRYPTED":
                    console.error("\u6B64\u4E91\u51FD\u6570\uFF08".concat(e.name, "\uFF09\u4F9D\u8D56\u52A0\u5BC6\u516C\u5171\u6A21\u5757\u4E0D\u53EF\u672C\u5730\u8C03\u8BD5\uFF0C\u81EA\u52A8\u5207\u6362\u4E3A\u4E91\u7AEF\u5DF2\u90E8\u7F72\u7684\u4E91\u51FD\u6570"));
                    break;
                  case "FUNCTION_ENCRYPTED":
                    console.error("\u6B64\u4E91\u51FD\u6570\uFF08".concat(e.name, "\uFF09\u5DF2\u52A0\u5BC6\u4E0D\u53EF\u672C\u5730\u8C03\u8BD5\uFF0C\u81EA\u52A8\u5207\u6362\u4E3A\u4E91\u7AEF\u5DF2\u90E8\u7F72\u7684\u4E91\u51FD\u6570"));
                    break;
                  case "ACTION_ENCRYPTED":
                    console.error(n || "需要访问加密的uni-clientDB-action，自动切换为云端环境");
                    break;
                  case "NETWORK_ERROR":
                    console.error(n || "连接本地调试服务失败，请检查客户端是否和主机在同一局域网下");
                    break;
                  case "SWITCH_TO_CLOUD":
                    break;
                  default:
                    {
                      var _e33 = "\u68C0\u6D4B\u672C\u5730\u8C03\u8BD5\u670D\u52A1\u51FA\u73B0\u9519\u8BEF\uFF1A".concat(n, "\uFF0C\u8BF7\u68C0\u67E5\u7F51\u7EDC\u73AF\u5883\u6216\u91CD\u542F\u5BA2\u6237\u7AEF\u518D\u8BD5");
                      throw console.error(_e33), new Error(_e33);
                    }
                }
                return _this31._callCloudFunction(e);
              }
              return new Promise(function (t, n) {
                var s = Jt.call(_this31, {
                  data: e.data
                });
                ie.request({
                  method: "POST",
                  url: a,
                  data: {
                    provider: r,
                    platform: T,
                    param: s
                  },
                  timeout: e.timeout,
                  success: function success() {
                    var _ref71 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
                      e = _ref71.statusCode,
                      s = _ref71.data;
                    return !e || e >= 400 ? n(new re({
                      code: s.code || "SYS_ERR",
                      message: s.message || "request:fail"
                    })) : t({
                      result: s
                    });
                  },
                  fail: function fail(e) {
                    n(new re({
                      code: e.code || e.errCode || "SYS_ERR",
                      message: e.message || e.errMsg || "request:fail"
                    }));
                  }
                });
              });
            }));
          case 5:
          case "end":
            return _context71.stop();
        }
      }
    }, _callee71, this);
  }));
  return _sn.apply(this, arguments);
}
var rn = [{
  rule: /fc_function_not_found|FUNCTION_NOT_FOUND/,
  content: "，云函数[{functionName}]在云端不存在，请检查此云函数名称是否正确以及该云函数是否已上传到服务空间",
  mode: "append"
}];
var on = /[\\^$.*+?()[\]{}|]/g,
  an = RegExp(on.source);
function cn(e, t, n) {
  return e.replace(new RegExp((s = t) && an.test(s) ? s.replace(on, "\\$&") : s, "g"), n);
  var s;
}
var un = "none",
  ln = "request",
  hn = "response",
  dn = "both",
  pn = {
    code: 2e4,
    message: "System error"
  },
  fn = {
    code: 20101,
    message: "Invalid client"
  },
  gn = {
    code: 20102,
    message: "Get encrypt key failed"
  },
  mn = {
    10001: "Secure network is not supported on current playground or unimpsdk",
    10003: "Config missing in current app. If the problem pesist, please contact DCloud.",
    10009: "Encrypt payload failed",
    10010: "Decrypt response failed"
  };
function yn(e) {
  var _ref29 = e || {},
    t = _ref29.errSubject,
    n = _ref29.subject,
    s = _ref29.errCode,
    r = _ref29.errMsg,
    i = _ref29.code,
    o = _ref29.message,
    a = _ref29.cause;
  return new re({
    subject: t || n || "uni-secure-network",
    code: s || i || pn.code,
    message: r || o,
    cause: a
  });
}
var _n = /*#__PURE__*/function () {
  function _n() {
    var _ref30 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      e = _ref30.secretType,
      t = _ref30.uniCloudIns;
    (0, _classCallCheck2.default)(this, _n);
    this.clientType = "", this.secretType = e || un, this.uniCloudIns = t;
    var _this$uniCloudIns$con = this.uniCloudIns.config,
      n = _this$uniCloudIns$con.provider,
      s = _this$uniCloudIns$con.spaceId;
    var r;
    this.provider = n, this.spaceId = s, this.scopedGlobalCache = (r = this.uniCloudIns, U("_globalUniCloudSecureNetworkCache__{spaceId}".replace("{spaceId}", r.config.spaceId)));
  }
  (0, _createClass2.default)(_n, [{
    key: "getSystemInfo",
    value: function getSystemInfo() {
      return this._systemInfo || (this._systemInfo = le()), this._systemInfo;
    }
  }, {
    key: "appId",
    get: function get() {
      return this.getSystemInfo().appId;
    }
  }, {
    key: "deviceId",
    get: function get() {
      return this.getSystemInfo().deviceId;
    }
  }, {
    key: "encryptData",
    value: function () {
      var _encryptData = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee48(e) {
        return _regenerator.default.wrap(function _callee48$(_context48) {
          while (1) {
            switch (_context48.prev = _context48.next) {
              case 0:
                return _context48.abrupt("return", this.secretType === un ? e : this.platformEncryptData(e));
              case 1:
              case "end":
                return _context48.stop();
            }
          }
        }, _callee48, this);
      }));
      function encryptData(_x46) {
        return _encryptData.apply(this, arguments);
      }
      return encryptData;
    }()
  }, {
    key: "decryptResult",
    value: function () {
      var _decryptResult = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee49(e) {
        var _ref31, t, n, s;
        return _regenerator.default.wrap(function _callee49$(_context49) {
          while (1) {
            switch (_context49.prev = _context49.next) {
              case 0:
                if (!(this.secretType === un)) {
                  _context49.next = 2;
                  break;
                }
                return _context49.abrupt("return", e);
              case 2:
                _ref31 = e || {}, t = _ref31.errCode, n = _ref31.errMsg, s = _ref31.content;
                return _context49.abrupt("return", t || !s ? e : this.secretType === ln ? s : this.platformDecryptResult(e));
              case 4:
              case "end":
                return _context49.stop();
            }
          }
        }, _callee49, this);
      }));
      function decryptResult(_x47) {
        return _decryptResult.apply(this, arguments);
      }
      return decryptResult;
    }()
  }, {
    key: "wrapVerifyClientCallFunction",
    value: function wrapVerifyClientCallFunction(e) {
      var t = this;
      return /*#__PURE__*/(0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee50() {
        var _ref33,
          n,
          _ref33$data,
          s,
          r,
          _args50 = arguments;
        return _regenerator.default.wrap(function _callee50$(_context50) {
          while (1) {
            switch (_context50.prev = _context50.next) {
              case 0:
                _ref33 = _args50.length > 0 && _args50[0] !== undefined ? _args50[0] : {}, n = _ref33.name, _ref33$data = _ref33.data, s = _ref33$data === void 0 ? {} : _ref33$data;
                _context50.next = 3;
                return t.prepare();
              case 3:
                _context50.next = 5;
                return t.platformGetSignOption();
              case 5:
                (s = JSON.parse(JSON.stringify(s)))._uniCloudOptions = _context50.sent;
                _context50.next = 8;
                return e({
                  name: n,
                  data: s
                });
              case 8:
                r = _context50.sent;
                _context50.t0 = t.isClientKeyNotFound(r);
                if (!_context50.t0) {
                  _context50.next = 19;
                  break;
                }
                _context50.next = 13;
                return t.prepare({
                  forceUpdate: !0
                });
              case 13:
                _context50.next = 15;
                return t.platformGetSignOption();
              case 15:
                s._uniCloudOptions = _context50.sent;
                _context50.next = 18;
                return e({
                  name: n,
                  data: s
                });
              case 18:
                r = _context50.sent;
              case 19:
                return _context50.abrupt("return", r);
              case 20:
              case "end":
                return _context50.stop();
            }
          }
        }, _callee50);
      }));
    }
  }, {
    key: "wrapEncryptDataCallFunction",
    value: function wrapEncryptDataCallFunction(e) {
      var t = this;
      return /*#__PURE__*/(0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee51() {
        var _ref35,
          n,
          _ref35$data,
          s,
          r,
          i,
          _r6,
          _args51 = arguments;
        return _regenerator.default.wrap(function _callee51$(_context51) {
          while (1) {
            switch (_context51.prev = _context51.next) {
              case 0:
                _ref35 = _args51.length > 0 && _args51[0] !== undefined ? _args51[0] : {}, n = _ref35.name, _ref35$data = _ref35.data, s = _ref35$data === void 0 ? {} : _ref35$data;
                _context51.next = 3;
                return t.prepare();
              case 3:
                _context51.next = 5;
                return t.encryptData(s);
              case 5:
                r = _context51.sent;
                _context51.next = 8;
                return e({
                  name: n,
                  data: r
                });
              case 8:
                i = _context51.sent;
                if (!t.isClientKeyNotFound(i)) {
                  _context51.next = 18;
                  break;
                }
                _context51.next = 12;
                return t.prepare({
                  forceUpdate: !0
                });
              case 12:
                _context51.next = 14;
                return t.encryptData(s);
              case 14:
                _r6 = _context51.sent;
                _context51.next = 17;
                return e({
                  name: n,
                  data: _r6
                });
              case 17:
                i = _context51.sent;
              case 18:
                _context51.next = 20;
                return t.decryptResult(i.result);
              case 20:
                i.result = _context51.sent;
                return _context51.abrupt("return", i);
              case 22:
              case "end":
                return _context51.stop();
            }
          }
        }, _callee51);
      }));
    }
  }]);
  return _n;
}();
/*! MIT License. Copyright 2015-2018 Richard Moore <me@ricmoo.com>. See LICENSE.txt. */
function wn(e) {
  return parseInt(e) === e;
}
function vn(e) {
  if (!wn(e.length)) return !1;
  for (var t = 0; t < e.length; t++) {
    if (!wn(e[t]) || e[t] < 0 || e[t] > 255) return !1;
  }
  return !0;
}
function In(e, t) {
  if (e.buffer && "Uint8Array" === e.name) return t && (e = e.slice ? e.slice() : Array.prototype.slice.call(e)), e;
  if (Array.isArray(e)) {
    if (!vn(e)) throw new Error("Array contains invalid value: " + e);
    return new Uint8Array(e);
  }
  if (wn(e.length) && vn(e)) return new Uint8Array(e);
  throw new Error("unsupported array-like object");
}
function Sn(e) {
  return new Uint8Array(e);
}
function bn(e, t, n, s, r) {
  null == s && null == r || (e = e.slice ? e.slice(s, r) : Array.prototype.slice.call(e, s, r)), t.set(e, n);
}
var kn,
  An = {
    toBytes: function toBytes(e) {
      var t = [],
        n = 0;
      for (e = encodeURI(e); n < e.length;) {
        var s = e.charCodeAt(n++);
        37 === s ? (t.push(parseInt(e.substr(n, 2), 16)), n += 2) : t.push(s);
      }
      return In(t);
    },
    fromBytes: function fromBytes(e) {
      for (var t = [], n = 0; n < e.length;) {
        var s = e[n];
        s < 128 ? (t.push(String.fromCharCode(s)), n++) : s > 191 && s < 224 ? (t.push(String.fromCharCode((31 & s) << 6 | 63 & e[n + 1])), n += 2) : (t.push(String.fromCharCode((15 & s) << 12 | (63 & e[n + 1]) << 6 | 63 & e[n + 2])), n += 3);
      }
      return t.join("");
    }
  },
  Tn = (kn = "0123456789abcdef", {
    toBytes: function toBytes(e) {
      for (var t = [], n = 0; n < e.length; n += 2) {
        t.push(parseInt(e.substr(n, 2), 16));
      }
      return t;
    },
    fromBytes: function fromBytes(e) {
      for (var t = [], n = 0; n < e.length; n++) {
        var s = e[n];
        t.push(kn[(240 & s) >> 4] + kn[15 & s]);
      }
      return t.join("");
    }
  }),
  Cn = {
    16: 10,
    24: 12,
    32: 14
  },
  Pn = [1, 2, 4, 8, 16, 32, 64, 128, 27, 54, 108, 216, 171, 77, 154, 47, 94, 188, 99, 198, 151, 53, 106, 212, 179, 125, 250, 239, 197, 145],
  On = [99, 124, 119, 123, 242, 107, 111, 197, 48, 1, 103, 43, 254, 215, 171, 118, 202, 130, 201, 125, 250, 89, 71, 240, 173, 212, 162, 175, 156, 164, 114, 192, 183, 253, 147, 38, 54, 63, 247, 204, 52, 165, 229, 241, 113, 216, 49, 21, 4, 199, 35, 195, 24, 150, 5, 154, 7, 18, 128, 226, 235, 39, 178, 117, 9, 131, 44, 26, 27, 110, 90, 160, 82, 59, 214, 179, 41, 227, 47, 132, 83, 209, 0, 237, 32, 252, 177, 91, 106, 203, 190, 57, 74, 76, 88, 207, 208, 239, 170, 251, 67, 77, 51, 133, 69, 249, 2, 127, 80, 60, 159, 168, 81, 163, 64, 143, 146, 157, 56, 245, 188, 182, 218, 33, 16, 255, 243, 210, 205, 12, 19, 236, 95, 151, 68, 23, 196, 167, 126, 61, 100, 93, 25, 115, 96, 129, 79, 220, 34, 42, 144, 136, 70, 238, 184, 20, 222, 94, 11, 219, 224, 50, 58, 10, 73, 6, 36, 92, 194, 211, 172, 98, 145, 149, 228, 121, 231, 200, 55, 109, 141, 213, 78, 169, 108, 86, 244, 234, 101, 122, 174, 8, 186, 120, 37, 46, 28, 166, 180, 198, 232, 221, 116, 31, 75, 189, 139, 138, 112, 62, 181, 102, 72, 3, 246, 14, 97, 53, 87, 185, 134, 193, 29, 158, 225, 248, 152, 17, 105, 217, 142, 148, 155, 30, 135, 233, 206, 85, 40, 223, 140, 161, 137, 13, 191, 230, 66, 104, 65, 153, 45, 15, 176, 84, 187, 22],
  En = [82, 9, 106, 213, 48, 54, 165, 56, 191, 64, 163, 158, 129, 243, 215, 251, 124, 227, 57, 130, 155, 47, 255, 135, 52, 142, 67, 68, 196, 222, 233, 203, 84, 123, 148, 50, 166, 194, 35, 61, 238, 76, 149, 11, 66, 250, 195, 78, 8, 46, 161, 102, 40, 217, 36, 178, 118, 91, 162, 73, 109, 139, 209, 37, 114, 248, 246, 100, 134, 104, 152, 22, 212, 164, 92, 204, 93, 101, 182, 146, 108, 112, 72, 80, 253, 237, 185, 218, 94, 21, 70, 87, 167, 141, 157, 132, 144, 216, 171, 0, 140, 188, 211, 10, 247, 228, 88, 5, 184, 179, 69, 6, 208, 44, 30, 143, 202, 63, 15, 2, 193, 175, 189, 3, 1, 19, 138, 107, 58, 145, 17, 65, 79, 103, 220, 234, 151, 242, 207, 206, 240, 180, 230, 115, 150, 172, 116, 34, 231, 173, 53, 133, 226, 249, 55, 232, 28, 117, 223, 110, 71, 241, 26, 113, 29, 41, 197, 137, 111, 183, 98, 14, 170, 24, 190, 27, 252, 86, 62, 75, 198, 210, 121, 32, 154, 219, 192, 254, 120, 205, 90, 244, 31, 221, 168, 51, 136, 7, 199, 49, 177, 18, 16, 89, 39, 128, 236, 95, 96, 81, 127, 169, 25, 181, 74, 13, 45, 229, 122, 159, 147, 201, 156, 239, 160, 224, 59, 77, 174, 42, 245, 176, 200, 235, 187, 60, 131, 83, 153, 97, 23, 43, 4, 126, 186, 119, 214, 38, 225, 105, 20, 99, 85, 33, 12, 125],
  xn = [3328402341, 4168907908, 4000806809, 4135287693, 4294111757, 3597364157, 3731845041, 2445657428, 1613770832, 33620227, 3462883241, 1445669757, 3892248089, 3050821474, 1303096294, 3967186586, 2412431941, 528646813, 2311702848, 4202528135, 4026202645, 2992200171, 2387036105, 4226871307, 1101901292, 3017069671, 1604494077, 1169141738, 597466303, 1403299063, 3832705686, 2613100635, 1974974402, 3791519004, 1033081774, 1277568618, 1815492186, 2118074177, 4126668546, 2211236943, 1748251740, 1369810420, 3521504564, 4193382664, 3799085459, 2883115123, 1647391059, 706024767, 134480908, 2512897874, 1176707941, 2646852446, 806885416, 932615841, 168101135, 798661301, 235341577, 605164086, 461406363, 3756188221, 3454790438, 1311188841, 2142417613, 3933566367, 302582043, 495158174, 1479289972, 874125870, 907746093, 3698224818, 3025820398, 1537253627, 2756858614, 1983593293, 3084310113, 2108928974, 1378429307, 3722699582, 1580150641, 327451799, 2790478837, 3117535592, 0, 3253595436, 1075847264, 3825007647, 2041688520, 3059440621, 3563743934, 2378943302, 1740553945, 1916352843, 2487896798, 2555137236, 2958579944, 2244988746, 3151024235, 3320835882, 1336584933, 3992714006, 2252555205, 2588757463, 1714631509, 293963156, 2319795663, 3925473552, 67240454, 4269768577, 2689618160, 2017213508, 631218106, 1269344483, 2723238387, 1571005438, 2151694528, 93294474, 1066570413, 563977660, 1882732616, 4059428100, 1673313503, 2008463041, 2950355573, 1109467491, 537923632, 3858759450, 4260623118, 3218264685, 2177748300, 403442708, 638784309, 3287084079, 3193921505, 899127202, 2286175436, 773265209, 2479146071, 1437050866, 4236148354, 2050833735, 3362022572, 3126681063, 840505643, 3866325909, 3227541664, 427917720, 2655997905, 2749160575, 1143087718, 1412049534, 999329963, 193497219, 2353415882, 3354324521, 1807268051, 672404540, 2816401017, 3160301282, 369822493, 2916866934, 3688947771, 1681011286, 1949973070, 336202270, 2454276571, 201721354, 1210328172, 3093060836, 2680341085, 3184776046, 1135389935, 3294782118, 965841320, 831886756, 3554993207, 4068047243, 3588745010, 2345191491, 1849112409, 3664604599, 26054028, 2983581028, 2622377682, 1235855840, 3630984372, 2891339514, 4092916743, 3488279077, 3395642799, 4101667470, 1202630377, 268961816, 1874508501, 4034427016, 1243948399, 1546530418, 941366308, 1470539505, 1941222599, 2546386513, 3421038627, 2715671932, 3899946140, 1042226977, 2521517021, 1639824860, 227249030, 260737669, 3765465232, 2084453954, 1907733956, 3429263018, 2420656344, 100860677, 4160157185, 470683154, 3261161891, 1781871967, 2924959737, 1773779408, 394692241, 2579611992, 974986535, 664706745, 3655459128, 3958962195, 731420851, 571543859, 3530123707, 2849626480, 126783113, 865375399, 765172662, 1008606754, 361203602, 3387549984, 2278477385, 2857719295, 1344809080, 2782912378, 59542671, 1503764984, 160008576, 437062935, 1707065306, 3622233649, 2218934982, 3496503480, 2185314755, 697932208, 1512910199, 504303377, 2075177163, 2824099068, 1841019862, 739644986],
  Ln = [2781242211, 2230877308, 2582542199, 2381740923, 234877682, 3184946027, 2984144751, 1418839493, 1348481072, 50462977, 2848876391, 2102799147, 434634494, 1656084439, 3863849899, 2599188086, 1167051466, 2636087938, 1082771913, 2281340285, 368048890, 3954334041, 3381544775, 201060592, 3963727277, 1739838676, 4250903202, 3930435503, 3206782108, 4149453988, 2531553906, 1536934080, 3262494647, 484572669, 2923271059, 1783375398, 1517041206, 1098792767, 49674231, 1334037708, 1550332980, 4098991525, 886171109, 150598129, 2481090929, 1940642008, 1398944049, 1059722517, 201851908, 1385547719, 1699095331, 1587397571, 674240536, 2704774806, 252314885, 3039795866, 151914247, 908333586, 2602270848, 1038082786, 651029483, 1766729511, 3447698098, 2682942837, 454166793, 2652734339, 1951935532, 775166490, 758520603, 3000790638, 4004797018, 4217086112, 4137964114, 1299594043, 1639438038, 3464344499, 2068982057, 1054729187, 1901997871, 2534638724, 4121318227, 1757008337, 0, 750906861, 1614815264, 535035132, 3363418545, 3988151131, 3201591914, 1183697867, 3647454910, 1265776953, 3734260298, 3566750796, 3903871064, 1250283471, 1807470800, 717615087, 3847203498, 384695291, 3313910595, 3617213773, 1432761139, 2484176261, 3481945413, 283769337, 100925954, 2180939647, 4037038160, 1148730428, 3123027871, 3813386408, 4087501137, 4267549603, 3229630528, 2315620239, 2906624658, 3156319645, 1215313976, 82966005, 3747855548, 3245848246, 1974459098, 1665278241, 807407632, 451280895, 251524083, 1841287890, 1283575245, 337120268, 891687699, 801369324, 3787349855, 2721421207, 3431482436, 959321879, 1469301956, 4065699751, 2197585534, 1199193405, 2898814052, 3887750493, 724703513, 2514908019, 2696962144, 2551808385, 3516813135, 2141445340, 1715741218, 2119445034, 2872807568, 2198571144, 3398190662, 700968686, 3547052216, 1009259540, 2041044702, 3803995742, 487983883, 1991105499, 1004265696, 1449407026, 1316239930, 504629770, 3683797321, 168560134, 1816667172, 3837287516, 1570751170, 1857934291, 4014189740, 2797888098, 2822345105, 2754712981, 936633572, 2347923833, 852879335, 1133234376, 1500395319, 3084545389, 2348912013, 1689376213, 3533459022, 3762923945, 3034082412, 4205598294, 133428468, 634383082, 2949277029, 2398386810, 3913789102, 403703816, 3580869306, 2297460856, 1867130149, 1918643758, 607656988, 4049053350, 3346248884, 1368901318, 600565992, 2090982877, 2632479860, 557719327, 3717614411, 3697393085, 2249034635, 2232388234, 2430627952, 1115438654, 3295786421, 2865522278, 3633334344, 84280067, 33027830, 303828494, 2747425121, 1600795957, 4188952407, 3496589753, 2434238086, 1486471617, 658119965, 3106381470, 953803233, 334231800, 3005978776, 857870609, 3151128937, 1890179545, 2298973838, 2805175444, 3056442267, 574365214, 2450884487, 550103529, 1233637070, 4289353045, 2018519080, 2057691103, 2399374476, 4166623649, 2148108681, 387583245, 3664101311, 836232934, 3330556482, 3100665960, 3280093505, 2955516313, 2002398509, 287182607, 3413881008, 4238890068, 3597515707, 975967766],
  Un = [1671808611, 2089089148, 2006576759, 2072901243, 4061003762, 1807603307, 1873927791, 3310653893, 810573872, 16974337, 1739181671, 729634347, 4263110654, 3613570519, 2883997099, 1989864566, 3393556426, 2191335298, 3376449993, 2106063485, 4195741690, 1508618841, 1204391495, 4027317232, 2917941677, 3563566036, 2734514082, 2951366063, 2629772188, 2767672228, 1922491506, 3227229120, 3082974647, 4246528509, 2477669779, 644500518, 911895606, 1061256767, 4144166391, 3427763148, 878471220, 2784252325, 3845444069, 4043897329, 1905517169, 3631459288, 827548209, 356461077, 67897348, 3344078279, 593839651, 3277757891, 405286936, 2527147926, 84871685, 2595565466, 118033927, 305538066, 2157648768, 3795705826, 3945188843, 661212711, 2999812018, 1973414517, 152769033, 2208177539, 745822252, 439235610, 455947803, 1857215598, 1525593178, 2700827552, 1391895634, 994932283, 3596728278, 3016654259, 695947817, 3812548067, 795958831, 2224493444, 1408607827, 3513301457, 0, 3979133421, 543178784, 4229948412, 2982705585, 1542305371, 1790891114, 3410398667, 3201918910, 961245753, 1256100938, 1289001036, 1491644504, 3477767631, 3496721360, 4012557807, 2867154858, 4212583931, 1137018435, 1305975373, 861234739, 2241073541, 1171229253, 4178635257, 33948674, 2139225727, 1357946960, 1011120188, 2679776671, 2833468328, 1374921297, 2751356323, 1086357568, 2408187279, 2460827538, 2646352285, 944271416, 4110742005, 3168756668, 3066132406, 3665145818, 560153121, 271589392, 4279952895, 4077846003, 3530407890, 3444343245, 202643468, 322250259, 3962553324, 1608629855, 2543990167, 1154254916, 389623319, 3294073796, 2817676711, 2122513534, 1028094525, 1689045092, 1575467613, 422261273, 1939203699, 1621147744, 2174228865, 1339137615, 3699352540, 577127458, 712922154, 2427141008, 2290289544, 1187679302, 3995715566, 3100863416, 339486740, 3732514782, 1591917662, 186455563, 3681988059, 3762019296, 844522546, 978220090, 169743370, 1239126601, 101321734, 611076132, 1558493276, 3260915650, 3547250131, 2901361580, 1655096418, 2443721105, 2510565781, 3828863972, 2039214713, 3878868455, 3359869896, 928607799, 1840765549, 2374762893, 3580146133, 1322425422, 2850048425, 1823791212, 1459268694, 4094161908, 3928346602, 1706019429, 2056189050, 2934523822, 135794696, 3134549946, 2022240376, 628050469, 779246638, 472135708, 2800834470, 3032970164, 3327236038, 3894660072, 3715932637, 1956440180, 522272287, 1272813131, 3185336765, 2340818315, 2323976074, 1888542832, 1044544574, 3049550261, 1722469478, 1222152264, 50660867, 4127324150, 236067854, 1638122081, 895445557, 1475980887, 3117443513, 2257655686, 3243809217, 489110045, 2662934430, 3778599393, 4162055160, 2561878936, 288563729, 1773916777, 3648039385, 2391345038, 2493985684, 2612407707, 505560094, 2274497927, 3911240169, 3460925390, 1442818645, 678973480, 3749357023, 2358182796, 2717407649, 2306869641, 219617805, 3218761151, 3862026214, 1120306242, 1756942440, 1103331905, 2578459033, 762796589, 252780047, 2966125488, 1425844308, 3151392187, 372911126],
  Rn = [1667474886, 2088535288, 2004326894, 2071694838, 4075949567, 1802223062, 1869591006, 3318043793, 808472672, 16843522, 1734846926, 724270422, 4278065639, 3621216949, 2880169549, 1987484396, 3402253711, 2189597983, 3385409673, 2105378810, 4210693615, 1499065266, 1195886990, 4042263547, 2913856577, 3570689971, 2728590687, 2947541573, 2627518243, 2762274643, 1920112356, 3233831835, 3082273397, 4261223649, 2475929149, 640051788, 909531756, 1061110142, 4160160501, 3435941763, 875846760, 2779116625, 3857003729, 4059105529, 1903268834, 3638064043, 825316194, 353713962, 67374088, 3351728789, 589522246, 3284360861, 404236336, 2526454071, 84217610, 2593830191, 117901582, 303183396, 2155911963, 3806477791, 3958056653, 656894286, 2998062463, 1970642922, 151591698, 2206440989, 741110872, 437923380, 454765878, 1852748508, 1515908788, 2694904667, 1381168804, 993742198, 3604373943, 3014905469, 690584402, 3823320797, 791638366, 2223281939, 1398011302, 3520161977, 0, 3991743681, 538992704, 4244381667, 2981218425, 1532751286, 1785380564, 3419096717, 3200178535, 960056178, 1246420628, 1280103576, 1482221744, 3486468741, 3503319995, 4025428677, 2863326543, 4227536621, 1128514950, 1296947098, 859002214, 2240123921, 1162203018, 4193849577, 33687044, 2139062782, 1347481760, 1010582648, 2678045221, 2829640523, 1364325282, 2745433693, 1077985408, 2408548869, 2459086143, 2644360225, 943212656, 4126475505, 3166494563, 3065430391, 3671750063, 555836226, 269496352, 4294908645, 4092792573, 3537006015, 3452783745, 202118168, 320025894, 3974901699, 1600119230, 2543297077, 1145359496, 387397934, 3301201811, 2812801621, 2122220284, 1027426170, 1684319432, 1566435258, 421079858, 1936954854, 1616945344, 2172753945, 1330631070, 3705438115, 572679748, 707427924, 2425400123, 2290647819, 1179044492, 4008585671, 3099120491, 336870440, 3739122087, 1583276732, 185277718, 3688593069, 3772791771, 842159716, 976899700, 168435220, 1229577106, 101059084, 606366792, 1549591736, 3267517855, 3553849021, 2897014595, 1650632388, 2442242105, 2509612081, 3840161747, 2038008818, 3890688725, 3368567691, 926374254, 1835907034, 2374863873, 3587531953, 1313788572, 2846482505, 1819063512, 1448540844, 4109633523, 3941213647, 1701162954, 2054852340, 2930698567, 134748176, 3132806511, 2021165296, 623210314, 774795868, 471606328, 2795958615, 3031746419, 3334885783, 3907527627, 3722280097, 1953799400, 522133822, 1263263126, 3183336545, 2341176845, 2324333839, 1886425312, 1044267644, 3048588401, 1718004428, 1212733584, 50529542, 4143317495, 235803164, 1633788866, 892690282, 1465383342, 3115962473, 2256965911, 3250673817, 488449850, 2661202215, 3789633753, 4177007595, 2560144171, 286339874, 1768537042, 3654906025, 2391705863, 2492770099, 2610673197, 505291324, 2273808917, 3924369609, 3469625735, 1431699370, 673740880, 3755965093, 2358021891, 2711746649, 2307489801, 218961690, 3217021541, 3873845719, 1111672452, 1751693520, 1094828930, 2576986153, 757954394, 252645662, 2964376443, 1414855848, 3149649517, 370555436],
  Nn = [1374988112, 2118214995, 437757123, 975658646, 1001089995, 530400753, 2902087851, 1273168787, 540080725, 2910219766, 2295101073, 4110568485, 1340463100, 3307916247, 641025152, 3043140495, 3736164937, 632953703, 1172967064, 1576976609, 3274667266, 2169303058, 2370213795, 1809054150, 59727847, 361929877, 3211623147, 2505202138, 3569255213, 1484005843, 1239443753, 2395588676, 1975683434, 4102977912, 2572697195, 666464733, 3202437046, 4035489047, 3374361702, 2110667444, 1675577880, 3843699074, 2538681184, 1649639237, 2976151520, 3144396420, 4269907996, 4178062228, 1883793496, 2403728665, 2497604743, 1383856311, 2876494627, 1917518562, 3810496343, 1716890410, 3001755655, 800440835, 2261089178, 3543599269, 807962610, 599762354, 33778362, 3977675356, 2328828971, 2809771154, 4077384432, 1315562145, 1708848333, 101039829, 3509871135, 3299278474, 875451293, 2733856160, 92987698, 2767645557, 193195065, 1080094634, 1584504582, 3178106961, 1042385657, 2531067453, 3711829422, 1306967366, 2438237621, 1908694277, 67556463, 1615861247, 429456164, 3602770327, 2302690252, 1742315127, 2968011453, 126454664, 3877198648, 2043211483, 2709260871, 2084704233, 4169408201, 0, 159417987, 841739592, 504459436, 1817866830, 4245618683, 260388950, 1034867998, 908933415, 168810852, 1750902305, 2606453969, 607530554, 202008497, 2472011535, 3035535058, 463180190, 2160117071, 1641816226, 1517767529, 470948374, 3801332234, 3231722213, 1008918595, 303765277, 235474187, 4069246893, 766945465, 337553864, 1475418501, 2943682380, 4003061179, 2743034109, 4144047775, 1551037884, 1147550661, 1543208500, 2336434550, 3408119516, 3069049960, 3102011747, 3610369226, 1113818384, 328671808, 2227573024, 2236228733, 3535486456, 2935566865, 3341394285, 496906059, 3702665459, 226906860, 2009195472, 733156972, 2842737049, 294930682, 1206477858, 2835123396, 2700099354, 1451044056, 573804783, 2269728455, 3644379585, 2362090238, 2564033334, 2801107407, 2776292904, 3669462566, 1068351396, 742039012, 1350078989, 1784663195, 1417561698, 4136440770, 2430122216, 775550814, 2193862645, 2673705150, 1775276924, 1876241833, 3475313331, 3366754619, 270040487, 3902563182, 3678124923, 3441850377, 1851332852, 3969562369, 2203032232, 3868552805, 2868897406, 566021896, 4011190502, 3135740889, 1248802510, 3936291284, 699432150, 832877231, 708780849, 3332740144, 899835584, 1951317047, 4236429990, 3767586992, 866637845, 4043610186, 1106041591, 2144161806, 395441711, 1984812685, 1139781709, 3433712980, 3835036895, 2664543715, 1282050075, 3240894392, 1181045119, 2640243204, 25965917, 4203181171, 4211818798, 3009879386, 2463879762, 3910161971, 1842759443, 2597806476, 933301370, 1509430414, 3943906441, 3467192302, 3076639029, 3776767469, 2051518780, 2631065433, 1441952575, 404016761, 1942435775, 1408749034, 1610459739, 3745345300, 2017778566, 3400528769, 3110650942, 941896748, 3265478751, 371049330, 3168937228, 675039627, 4279080257, 967311729, 135050206, 3635733660, 1683407248, 2076935265, 3576870512, 1215061108, 3501741890],
  Dn = [1347548327, 1400783205, 3273267108, 2520393566, 3409685355, 4045380933, 2880240216, 2471224067, 1428173050, 4138563181, 2441661558, 636813900, 4233094615, 3620022987, 2149987652, 2411029155, 1239331162, 1730525723, 2554718734, 3781033664, 46346101, 310463728, 2743944855, 3328955385, 3875770207, 2501218972, 3955191162, 3667219033, 768917123, 3545789473, 692707433, 1150208456, 1786102409, 2029293177, 1805211710, 3710368113, 3065962831, 401639597, 1724457132, 3028143674, 409198410, 2196052529, 1620529459, 1164071807, 3769721975, 2226875310, 486441376, 2499348523, 1483753576, 428819965, 2274680428, 3075636216, 598438867, 3799141122, 1474502543, 711349675, 129166120, 53458370, 2592523643, 2782082824, 4063242375, 2988687269, 3120694122, 1559041666, 730517276, 2460449204, 4042459122, 2706270690, 3446004468, 3573941694, 533804130, 2328143614, 2637442643, 2695033685, 839224033, 1973745387, 957055980, 2856345839, 106852767, 1371368976, 4181598602, 1033297158, 2933734917, 1179510461, 3046200461, 91341917, 1862534868, 4284502037, 605657339, 2547432937, 3431546947, 2003294622, 3182487618, 2282195339, 954669403, 3682191598, 1201765386, 3917234703, 3388507166, 0, 2198438022, 1211247597, 2887651696, 1315723890, 4227665663, 1443857720, 507358933, 657861945, 1678381017, 560487590, 3516619604, 975451694, 2970356327, 261314535, 3535072918, 2652609425, 1333838021, 2724322336, 1767536459, 370938394, 182621114, 3854606378, 1128014560, 487725847, 185469197, 2918353863, 3106780840, 3356761769, 2237133081, 1286567175, 3152976349, 4255350624, 2683765030, 3160175349, 3309594171, 878443390, 1988838185, 3704300486, 1756818940, 1673061617, 3403100636, 272786309, 1075025698, 545572369, 2105887268, 4174560061, 296679730, 1841768865, 1260232239, 4091327024, 3960309330, 3497509347, 1814803222, 2578018489, 4195456072, 575138148, 3299409036, 446754879, 3629546796, 4011996048, 3347532110, 3252238545, 4270639778, 915985419, 3483825537, 681933534, 651868046, 2755636671, 3828103837, 223377554, 2607439820, 1649704518, 3270937875, 3901806776, 1580087799, 4118987695, 3198115200, 2087309459, 2842678573, 3016697106, 1003007129, 2802849917, 1860738147, 2077965243, 164439672, 4100872472, 32283319, 2827177882, 1709610350, 2125135846, 136428751, 3874428392, 3652904859, 3460984630, 3572145929, 3593056380, 2939266226, 824852259, 818324884, 3224740454, 930369212, 2801566410, 2967507152, 355706840, 1257309336, 4148292826, 243256656, 790073846, 2373340630, 1296297904, 1422699085, 3756299780, 3818836405, 457992840, 3099667487, 2135319889, 77422314, 1560382517, 1945798516, 788204353, 1521706781, 1385356242, 870912086, 325965383, 2358957921, 2050466060, 2388260884, 2313884476, 4006521127, 901210569, 3990953189, 1014646705, 1503449823, 1062597235, 2031621326, 3212035895, 3931371469, 1533017514, 350174575, 2256028891, 2177544179, 1052338372, 741876788, 1606591296, 1914052035, 213705253, 2334669897, 1107234197, 1899603969, 3725069491, 2631447780, 2422494913, 1635502980, 1893020342, 1950903388, 1120974935],
  Mn = [2807058932, 1699970625, 2764249623, 1586903591, 1808481195, 1173430173, 1487645946, 59984867, 4199882800, 1844882806, 1989249228, 1277555970, 3623636965, 3419915562, 1149249077, 2744104290, 1514790577, 459744698, 244860394, 3235995134, 1963115311, 4027744588, 2544078150, 4190530515, 1608975247, 2627016082, 2062270317, 1507497298, 2200818878, 567498868, 1764313568, 3359936201, 2305455554, 2037970062, 1047239e3, 1910319033, 1337376481, 2904027272, 2892417312, 984907214, 1243112415, 830661914, 861968209, 2135253587, 2011214180, 2927934315, 2686254721, 731183368, 1750626376, 4246310725, 1820824798, 4172763771, 3542330227, 48394827, 2404901663, 2871682645, 671593195, 3254988725, 2073724613, 145085239, 2280796200, 2779915199, 1790575107, 2187128086, 472615631, 3029510009, 4075877127, 3802222185, 4107101658, 3201631749, 1646252340, 4270507174, 1402811438, 1436590835, 3778151818, 3950355702, 3963161475, 4020912224, 2667994737, 273792366, 2331590177, 104699613, 95345982, 3175501286, 2377486676, 1560637892, 3564045318, 369057872, 4213447064, 3919042237, 1137477952, 2658625497, 1119727848, 2340947849, 1530455833, 4007360968, 172466556, 266959938, 516552836, 0, 2256734592, 3980931627, 1890328081, 1917742170, 4294704398, 945164165, 3575528878, 958871085, 3647212047, 2787207260, 1423022939, 775562294, 1739656202, 3876557655, 2530391278, 2443058075, 3310321856, 547512796, 1265195639, 437656594, 3121275539, 719700128, 3762502690, 387781147, 218828297, 3350065803, 2830708150, 2848461854, 428169201, 122466165, 3720081049, 1627235199, 648017665, 4122762354, 1002783846, 2117360635, 695634755, 3336358691, 4234721005, 4049844452, 3704280881, 2232435299, 574624663, 287343814, 612205898, 1039717051, 840019705, 2708326185, 793451934, 821288114, 1391201670, 3822090177, 376187827, 3113855344, 1224348052, 1679968233, 2361698556, 1058709744, 752375421, 2431590963, 1321699145, 3519142200, 2734591178, 188127444, 2177869557, 3727205754, 2384911031, 3215212461, 2648976442, 2450346104, 3432737375, 1180849278, 331544205, 3102249176, 4150144569, 2952102595, 2159976285, 2474404304, 766078933, 313773861, 2570832044, 2108100632, 1668212892, 3145456443, 2013908262, 418672217, 3070356634, 2594734927, 1852171925, 3867060991, 3473416636, 3907448597, 2614737639, 919489135, 164948639, 2094410160, 2997825956, 590424639, 2486224549, 1723872674, 3157750862, 3399941250, 3501252752, 3625268135, 2555048196, 3673637356, 1343127501, 4130281361, 3599595085, 2957853679, 1297403050, 81781910, 3051593425, 2283490410, 532201772, 1367295589, 3926170974, 895287692, 1953757831, 1093597963, 492483431, 3528626907, 1446242576, 1192455638, 1636604631, 209336225, 344873464, 1015671571, 669961897, 3375740769, 3857572124, 2973530695, 3747192018, 1933530610, 3464042516, 935293895, 3454686199, 2858115069, 1863638845, 3683022916, 4085369519, 3292445032, 875313188, 1080017571, 3279033885, 621591778, 1233856572, 2504130317, 24197544, 3017672716, 3835484340, 3247465558, 2220981195, 3060847922, 1551124588, 1463996600],
  qn = [4104605777, 1097159550, 396673818, 660510266, 2875968315, 2638606623, 4200115116, 3808662347, 821712160, 1986918061, 3430322568, 38544885, 3856137295, 718002117, 893681702, 1654886325, 2975484382, 3122358053, 3926825029, 4274053469, 796197571, 1290801793, 1184342925, 3556361835, 2405426947, 2459735317, 1836772287, 1381620373, 3196267988, 1948373848, 3764988233, 3385345166, 3263785589, 2390325492, 1480485785, 3111247143, 3780097726, 2293045232, 548169417, 3459953789, 3746175075, 439452389, 1362321559, 1400849762, 1685577905, 1806599355, 2174754046, 137073913, 1214797936, 1174215055, 3731654548, 2079897426, 1943217067, 1258480242, 529487843, 1437280870, 3945269170, 3049390895, 3313212038, 923313619, 679998e3, 3215307299, 57326082, 377642221, 3474729866, 2041877159, 133361907, 1776460110, 3673476453, 96392454, 878845905, 2801699524, 777231668, 4082475170, 2330014213, 4142626212, 2213296395, 1626319424, 1906247262, 1846563261, 562755902, 3708173718, 1040559837, 3871163981, 1418573201, 3294430577, 114585348, 1343618912, 2566595609, 3186202582, 1078185097, 3651041127, 3896688048, 2307622919, 425408743, 3371096953, 2081048481, 1108339068, 2216610296, 0, 2156299017, 736970802, 292596766, 1517440620, 251657213, 2235061775, 2933202493, 758720310, 265905162, 1554391400, 1532285339, 908999204, 174567692, 1474760595, 4002861748, 2610011675, 3234156416, 3693126241, 2001430874, 303699484, 2478443234, 2687165888, 585122620, 454499602, 151849742, 2345119218, 3064510765, 514443284, 4044981591, 1963412655, 2581445614, 2137062819, 19308535, 1928707164, 1715193156, 4219352155, 1126790795, 600235211, 3992742070, 3841024952, 836553431, 1669664834, 2535604243, 3323011204, 1243905413, 3141400786, 4180808110, 698445255, 2653899549, 2989552604, 2253581325, 3252932727, 3004591147, 1891211689, 2487810577, 3915653703, 4237083816, 4030667424, 2100090966, 865136418, 1229899655, 953270745, 3399679628, 3557504664, 4118925222, 2061379749, 3079546586, 2915017791, 983426092, 2022837584, 1607244650, 2118541908, 2366882550, 3635996816, 972512814, 3283088770, 1568718495, 3499326569, 3576539503, 621982671, 2895723464, 410887952, 2623762152, 1002142683, 645401037, 1494807662, 2595684844, 1335535747, 2507040230, 4293295786, 3167684641, 367585007, 3885750714, 1865862730, 2668221674, 2960971305, 2763173681, 1059270954, 2777952454, 2724642869, 1320957812, 2194319100, 2429595872, 2815956275, 77089521, 3973773121, 3444575871, 2448830231, 1305906550, 4021308739, 2857194700, 2516901860, 3518358430, 1787304780, 740276417, 1699839814, 1592394909, 2352307457, 2272556026, 188821243, 1729977011, 3687994002, 274084841, 3594982253, 3613494426, 2701949495, 4162096729, 322734571, 2837966542, 1640576439, 484830689, 1202797690, 3537852828, 4067639125, 349075736, 3342319475, 4157467219, 4255800159, 1030690015, 1155237496, 2951971274, 1757691577, 607398968, 2738905026, 499347990, 3794078908, 1011452712, 227885567, 2818666809, 213114376, 3034881240, 1455525988, 3414450555, 850817237, 1817998408, 3092726480],
  Fn = [0, 235474187, 470948374, 303765277, 941896748, 908933415, 607530554, 708780849, 1883793496, 2118214995, 1817866830, 1649639237, 1215061108, 1181045119, 1417561698, 1517767529, 3767586992, 4003061179, 4236429990, 4069246893, 3635733660, 3602770327, 3299278474, 3400528769, 2430122216, 2664543715, 2362090238, 2193862645, 2835123396, 2801107407, 3035535058, 3135740889, 3678124923, 3576870512, 3341394285, 3374361702, 3810496343, 3977675356, 4279080257, 4043610186, 2876494627, 2776292904, 3076639029, 3110650942, 2472011535, 2640243204, 2403728665, 2169303058, 1001089995, 899835584, 666464733, 699432150, 59727847, 226906860, 530400753, 294930682, 1273168787, 1172967064, 1475418501, 1509430414, 1942435775, 2110667444, 1876241833, 1641816226, 2910219766, 2743034109, 2976151520, 3211623147, 2505202138, 2606453969, 2302690252, 2269728455, 3711829422, 3543599269, 3240894392, 3475313331, 3843699074, 3943906441, 4178062228, 4144047775, 1306967366, 1139781709, 1374988112, 1610459739, 1975683434, 2076935265, 1775276924, 1742315127, 1034867998, 866637845, 566021896, 800440835, 92987698, 193195065, 429456164, 395441711, 1984812685, 2017778566, 1784663195, 1683407248, 1315562145, 1080094634, 1383856311, 1551037884, 101039829, 135050206, 437757123, 337553864, 1042385657, 807962610, 573804783, 742039012, 2531067453, 2564033334, 2328828971, 2227573024, 2935566865, 2700099354, 3001755655, 3168937228, 3868552805, 3902563182, 4203181171, 4102977912, 3736164937, 3501741890, 3265478751, 3433712980, 1106041591, 1340463100, 1576976609, 1408749034, 2043211483, 2009195472, 1708848333, 1809054150, 832877231, 1068351396, 766945465, 599762354, 159417987, 126454664, 361929877, 463180190, 2709260871, 2943682380, 3178106961, 3009879386, 2572697195, 2538681184, 2236228733, 2336434550, 3509871135, 3745345300, 3441850377, 3274667266, 3910161971, 3877198648, 4110568485, 4211818798, 2597806476, 2497604743, 2261089178, 2295101073, 2733856160, 2902087851, 3202437046, 2968011453, 3936291284, 3835036895, 4136440770, 4169408201, 3535486456, 3702665459, 3467192302, 3231722213, 2051518780, 1951317047, 1716890410, 1750902305, 1113818384, 1282050075, 1584504582, 1350078989, 168810852, 67556463, 371049330, 404016761, 841739592, 1008918595, 775550814, 540080725, 3969562369, 3801332234, 4035489047, 4269907996, 3569255213, 3669462566, 3366754619, 3332740144, 2631065433, 2463879762, 2160117071, 2395588676, 2767645557, 2868897406, 3102011747, 3069049960, 202008497, 33778362, 270040487, 504459436, 875451293, 975658646, 675039627, 641025152, 2084704233, 1917518562, 1615861247, 1851332852, 1147550661, 1248802510, 1484005843, 1451044056, 933301370, 967311729, 733156972, 632953703, 260388950, 25965917, 328671808, 496906059, 1206477858, 1239443753, 1543208500, 1441952575, 2144161806, 1908694277, 1675577880, 1842759443, 3610369226, 3644379585, 3408119516, 3307916247, 4011190502, 3776767469, 4077384432, 4245618683, 2809771154, 2842737049, 3144396420, 3043140495, 2673705150, 2438237621, 2203032232, 2370213795],
  Kn = [0, 185469197, 370938394, 487725847, 741876788, 657861945, 975451694, 824852259, 1483753576, 1400783205, 1315723890, 1164071807, 1950903388, 2135319889, 1649704518, 1767536459, 2967507152, 3152976349, 2801566410, 2918353863, 2631447780, 2547432937, 2328143614, 2177544179, 3901806776, 3818836405, 4270639778, 4118987695, 3299409036, 3483825537, 3535072918, 3652904859, 2077965243, 1893020342, 1841768865, 1724457132, 1474502543, 1559041666, 1107234197, 1257309336, 598438867, 681933534, 901210569, 1052338372, 261314535, 77422314, 428819965, 310463728, 3409685355, 3224740454, 3710368113, 3593056380, 3875770207, 3960309330, 4045380933, 4195456072, 2471224067, 2554718734, 2237133081, 2388260884, 3212035895, 3028143674, 2842678573, 2724322336, 4138563181, 4255350624, 3769721975, 3955191162, 3667219033, 3516619604, 3431546947, 3347532110, 2933734917, 2782082824, 3099667487, 3016697106, 2196052529, 2313884476, 2499348523, 2683765030, 1179510461, 1296297904, 1347548327, 1533017514, 1786102409, 1635502980, 2087309459, 2003294622, 507358933, 355706840, 136428751, 53458370, 839224033, 957055980, 605657339, 790073846, 2373340630, 2256028891, 2607439820, 2422494913, 2706270690, 2856345839, 3075636216, 3160175349, 3573941694, 3725069491, 3273267108, 3356761769, 4181598602, 4063242375, 4011996048, 3828103837, 1033297158, 915985419, 730517276, 545572369, 296679730, 446754879, 129166120, 213705253, 1709610350, 1860738147, 1945798516, 2029293177, 1239331162, 1120974935, 1606591296, 1422699085, 4148292826, 4233094615, 3781033664, 3931371469, 3682191598, 3497509347, 3446004468, 3328955385, 2939266226, 2755636671, 3106780840, 2988687269, 2198438022, 2282195339, 2501218972, 2652609425, 1201765386, 1286567175, 1371368976, 1521706781, 1805211710, 1620529459, 2105887268, 1988838185, 533804130, 350174575, 164439672, 46346101, 870912086, 954669403, 636813900, 788204353, 2358957921, 2274680428, 2592523643, 2441661558, 2695033685, 2880240216, 3065962831, 3182487618, 3572145929, 3756299780, 3270937875, 3388507166, 4174560061, 4091327024, 4006521127, 3854606378, 1014646705, 930369212, 711349675, 560487590, 272786309, 457992840, 106852767, 223377554, 1678381017, 1862534868, 1914052035, 2031621326, 1211247597, 1128014560, 1580087799, 1428173050, 32283319, 182621114, 401639597, 486441376, 768917123, 651868046, 1003007129, 818324884, 1503449823, 1385356242, 1333838021, 1150208456, 1973745387, 2125135846, 1673061617, 1756818940, 2970356327, 3120694122, 2802849917, 2887651696, 2637442643, 2520393566, 2334669897, 2149987652, 3917234703, 3799141122, 4284502037, 4100872472, 3309594171, 3460984630, 3545789473, 3629546796, 2050466060, 1899603969, 1814803222, 1730525723, 1443857720, 1560382517, 1075025698, 1260232239, 575138148, 692707433, 878443390, 1062597235, 243256656, 91341917, 409198410, 325965383, 3403100636, 3252238545, 3704300486, 3620022987, 3874428392, 3990953189, 4042459122, 4227665663, 2460449204, 2578018489, 2226875310, 2411029155, 3198115200, 3046200461, 2827177882, 2743944855],
  jn = [0, 218828297, 437656594, 387781147, 875313188, 958871085, 775562294, 590424639, 1750626376, 1699970625, 1917742170, 2135253587, 1551124588, 1367295589, 1180849278, 1265195639, 3501252752, 3720081049, 3399941250, 3350065803, 3835484340, 3919042237, 4270507174, 4085369519, 3102249176, 3051593425, 2734591178, 2952102595, 2361698556, 2177869557, 2530391278, 2614737639, 3145456443, 3060847922, 2708326185, 2892417312, 2404901663, 2187128086, 2504130317, 2555048196, 3542330227, 3727205754, 3375740769, 3292445032, 3876557655, 3926170974, 4246310725, 4027744588, 1808481195, 1723872674, 1910319033, 2094410160, 1608975247, 1391201670, 1173430173, 1224348052, 59984867, 244860394, 428169201, 344873464, 935293895, 984907214, 766078933, 547512796, 1844882806, 1627235199, 2011214180, 2062270317, 1507497298, 1423022939, 1137477952, 1321699145, 95345982, 145085239, 532201772, 313773861, 830661914, 1015671571, 731183368, 648017665, 3175501286, 2957853679, 2807058932, 2858115069, 2305455554, 2220981195, 2474404304, 2658625497, 3575528878, 3625268135, 3473416636, 3254988725, 3778151818, 3963161475, 4213447064, 4130281361, 3599595085, 3683022916, 3432737375, 3247465558, 3802222185, 4020912224, 4172763771, 4122762354, 3201631749, 3017672716, 2764249623, 2848461854, 2331590177, 2280796200, 2431590963, 2648976442, 104699613, 188127444, 472615631, 287343814, 840019705, 1058709744, 671593195, 621591778, 1852171925, 1668212892, 1953757831, 2037970062, 1514790577, 1463996600, 1080017571, 1297403050, 3673637356, 3623636965, 3235995134, 3454686199, 4007360968, 3822090177, 4107101658, 4190530515, 2997825956, 3215212461, 2830708150, 2779915199, 2256734592, 2340947849, 2627016082, 2443058075, 172466556, 122466165, 273792366, 492483431, 1047239e3, 861968209, 612205898, 695634755, 1646252340, 1863638845, 2013908262, 1963115311, 1446242576, 1530455833, 1277555970, 1093597963, 1636604631, 1820824798, 2073724613, 1989249228, 1436590835, 1487645946, 1337376481, 1119727848, 164948639, 81781910, 331544205, 516552836, 1039717051, 821288114, 669961897, 719700128, 2973530695, 3157750862, 2871682645, 2787207260, 2232435299, 2283490410, 2667994737, 2450346104, 3647212047, 3564045318, 3279033885, 3464042516, 3980931627, 3762502690, 4150144569, 4199882800, 3070356634, 3121275539, 2904027272, 2686254721, 2200818878, 2384911031, 2570832044, 2486224549, 3747192018, 3528626907, 3310321856, 3359936201, 3950355702, 3867060991, 4049844452, 4234721005, 1739656202, 1790575107, 2108100632, 1890328081, 1402811438, 1586903591, 1233856572, 1149249077, 266959938, 48394827, 369057872, 418672217, 1002783846, 919489135, 567498868, 752375421, 209336225, 24197544, 376187827, 459744698, 945164165, 895287692, 574624663, 793451934, 1679968233, 1764313568, 2117360635, 1933530610, 1343127501, 1560637892, 1243112415, 1192455638, 3704280881, 3519142200, 3336358691, 3419915562, 3907448597, 3857572124, 4075877127, 4294704398, 3029510009, 3113855344, 2927934315, 2744104290, 2159976285, 2377486676, 2594734927, 2544078150],
  $n = [0, 151849742, 303699484, 454499602, 607398968, 758720310, 908999204, 1059270954, 1214797936, 1097159550, 1517440620, 1400849762, 1817998408, 1699839814, 2118541908, 2001430874, 2429595872, 2581445614, 2194319100, 2345119218, 3034881240, 3186202582, 2801699524, 2951971274, 3635996816, 3518358430, 3399679628, 3283088770, 4237083816, 4118925222, 4002861748, 3885750714, 1002142683, 850817237, 698445255, 548169417, 529487843, 377642221, 227885567, 77089521, 1943217067, 2061379749, 1640576439, 1757691577, 1474760595, 1592394909, 1174215055, 1290801793, 2875968315, 2724642869, 3111247143, 2960971305, 2405426947, 2253581325, 2638606623, 2487810577, 3808662347, 3926825029, 4044981591, 4162096729, 3342319475, 3459953789, 3576539503, 3693126241, 1986918061, 2137062819, 1685577905, 1836772287, 1381620373, 1532285339, 1078185097, 1229899655, 1040559837, 923313619, 740276417, 621982671, 439452389, 322734571, 137073913, 19308535, 3871163981, 4021308739, 4104605777, 4255800159, 3263785589, 3414450555, 3499326569, 3651041127, 2933202493, 2815956275, 3167684641, 3049390895, 2330014213, 2213296395, 2566595609, 2448830231, 1305906550, 1155237496, 1607244650, 1455525988, 1776460110, 1626319424, 2079897426, 1928707164, 96392454, 213114376, 396673818, 514443284, 562755902, 679998e3, 865136418, 983426092, 3708173718, 3557504664, 3474729866, 3323011204, 4180808110, 4030667424, 3945269170, 3794078908, 2507040230, 2623762152, 2272556026, 2390325492, 2975484382, 3092726480, 2738905026, 2857194700, 3973773121, 3856137295, 4274053469, 4157467219, 3371096953, 3252932727, 3673476453, 3556361835, 2763173681, 2915017791, 3064510765, 3215307299, 2156299017, 2307622919, 2459735317, 2610011675, 2081048481, 1963412655, 1846563261, 1729977011, 1480485785, 1362321559, 1243905413, 1126790795, 878845905, 1030690015, 645401037, 796197571, 274084841, 425408743, 38544885, 188821243, 3613494426, 3731654548, 3313212038, 3430322568, 4082475170, 4200115116, 3780097726, 3896688048, 2668221674, 2516901860, 2366882550, 2216610296, 3141400786, 2989552604, 2837966542, 2687165888, 1202797690, 1320957812, 1437280870, 1554391400, 1669664834, 1787304780, 1906247262, 2022837584, 265905162, 114585348, 499347990, 349075736, 736970802, 585122620, 972512814, 821712160, 2595684844, 2478443234, 2293045232, 2174754046, 3196267988, 3079546586, 2895723464, 2777952454, 3537852828, 3687994002, 3234156416, 3385345166, 4142626212, 4293295786, 3841024952, 3992742070, 174567692, 57326082, 410887952, 292596766, 777231668, 660510266, 1011452712, 893681702, 1108339068, 1258480242, 1343618912, 1494807662, 1715193156, 1865862730, 1948373848, 2100090966, 2701949495, 2818666809, 3004591147, 3122358053, 2235061775, 2352307457, 2535604243, 2653899549, 3915653703, 3764988233, 4219352155, 4067639125, 3444575871, 3294430577, 3746175075, 3594982253, 836553431, 953270745, 600235211, 718002117, 367585007, 484830689, 133361907, 251657213, 2041877159, 1891211689, 1806599355, 1654886325, 1568718495, 1418573201, 1335535747, 1184342925];
function Bn(e) {
  for (var t = [], n = 0; n < e.length; n += 4) {
    t.push(e[n] << 24 | e[n + 1] << 16 | e[n + 2] << 8 | e[n + 3]);
  }
  return t;
}
var Wn = /*#__PURE__*/function () {
  function Wn(e) {
    (0, _classCallCheck2.default)(this, Wn);
    if (!(this instanceof Wn)) throw Error("AES must be instanitated with `new`");
    Object.defineProperty(this, "key", {
      value: In(e, !0)
    }), this._prepare();
  }
  (0, _createClass2.default)(Wn, [{
    key: "_prepare",
    value: function _prepare() {
      var e = Cn[this.key.length];
      if (null == e) throw new Error("invalid key size (must be 16, 24 or 32 bytes)");
      this._Ke = [], this._Kd = [];
      for (var t = 0; t <= e; t++) {
        this._Ke.push([0, 0, 0, 0]), this._Kd.push([0, 0, 0, 0]);
      }
      var n,
        s = 4 * (e + 1),
        r = this.key.length / 4,
        i = Bn(this.key);
      for (t = 0; t < r; t++) {
        n = t >> 2, this._Ke[n][t % 4] = i[t], this._Kd[e - n][t % 4] = i[t];
      }
      for (var o, a = 0, c = r; c < s;) {
        if (o = i[r - 1], i[0] ^= On[o >> 16 & 255] << 24 ^ On[o >> 8 & 255] << 16 ^ On[255 & o] << 8 ^ On[o >> 24 & 255] ^ Pn[a] << 24, a += 1, 8 != r) for (t = 1; t < r; t++) {
          i[t] ^= i[t - 1];
        } else {
          for (t = 1; t < r / 2; t++) {
            i[t] ^= i[t - 1];
          }
          o = i[r / 2 - 1], i[r / 2] ^= On[255 & o] ^ On[o >> 8 & 255] << 8 ^ On[o >> 16 & 255] << 16 ^ On[o >> 24 & 255] << 24;
          for (t = r / 2 + 1; t < r; t++) {
            i[t] ^= i[t - 1];
          }
        }
        for (t = 0; t < r && c < s;) {
          u = c >> 2, l = c % 4, this._Ke[u][l] = i[t], this._Kd[e - u][l] = i[t++], c++;
        }
      }
      for (var u = 1; u < e; u++) {
        for (var l = 0; l < 4; l++) {
          o = this._Kd[u][l], this._Kd[u][l] = Fn[o >> 24 & 255] ^ Kn[o >> 16 & 255] ^ jn[o >> 8 & 255] ^ $n[255 & o];
        }
      }
    }
  }, {
    key: "encrypt",
    value: function encrypt(e) {
      if (16 != e.length) throw new Error("invalid plaintext size (must be 16 bytes)");
      for (var t = this._Ke.length - 1, n = [0, 0, 0, 0], s = Bn(e), r = 0; r < 4; r++) {
        s[r] ^= this._Ke[0][r];
      }
      for (var i = 1; i < t; i++) {
        for (r = 0; r < 4; r++) {
          n[r] = xn[s[r] >> 24 & 255] ^ Ln[s[(r + 1) % 4] >> 16 & 255] ^ Un[s[(r + 2) % 4] >> 8 & 255] ^ Rn[255 & s[(r + 3) % 4]] ^ this._Ke[i][r];
        }
        s = n.slice();
      }
      var o,
        a = Sn(16);
      for (r = 0; r < 4; r++) {
        o = this._Ke[t][r], a[4 * r] = 255 & (On[s[r] >> 24 & 255] ^ o >> 24), a[4 * r + 1] = 255 & (On[s[(r + 1) % 4] >> 16 & 255] ^ o >> 16), a[4 * r + 2] = 255 & (On[s[(r + 2) % 4] >> 8 & 255] ^ o >> 8), a[4 * r + 3] = 255 & (On[255 & s[(r + 3) % 4]] ^ o);
      }
      return a;
    }
  }, {
    key: "decrypt",
    value: function decrypt(e) {
      if (16 != e.length) throw new Error("invalid ciphertext size (must be 16 bytes)");
      for (var t = this._Kd.length - 1, n = [0, 0, 0, 0], s = Bn(e), r = 0; r < 4; r++) {
        s[r] ^= this._Kd[0][r];
      }
      for (var i = 1; i < t; i++) {
        for (r = 0; r < 4; r++) {
          n[r] = Nn[s[r] >> 24 & 255] ^ Dn[s[(r + 3) % 4] >> 16 & 255] ^ Mn[s[(r + 2) % 4] >> 8 & 255] ^ qn[255 & s[(r + 1) % 4]] ^ this._Kd[i][r];
        }
        s = n.slice();
      }
      var o,
        a = Sn(16);
      for (r = 0; r < 4; r++) {
        o = this._Kd[t][r], a[4 * r] = 255 & (En[s[r] >> 24 & 255] ^ o >> 24), a[4 * r + 1] = 255 & (En[s[(r + 3) % 4] >> 16 & 255] ^ o >> 16), a[4 * r + 2] = 255 & (En[s[(r + 2) % 4] >> 8 & 255] ^ o >> 8), a[4 * r + 3] = 255 & (En[255 & s[(r + 1) % 4]] ^ o);
      }
      return a;
    }
  }]);
  return Wn;
}();
var Hn = /*#__PURE__*/function () {
  function Hn(e) {
    (0, _classCallCheck2.default)(this, Hn);
    if (!(this instanceof Hn)) throw Error("AES must be instanitated with `new`");
    this.description = "Electronic Code Block", this.name = "ecb", this._aes = new Wn(e);
  }
  (0, _createClass2.default)(Hn, [{
    key: "encrypt",
    value: function encrypt(e) {
      if ((e = In(e)).length % 16 != 0) throw new Error("invalid plaintext size (must be multiple of 16 bytes)");
      for (var t = Sn(e.length), n = Sn(16), s = 0; s < e.length; s += 16) {
        bn(e, n, 0, s, s + 16), bn(n = this._aes.encrypt(n), t, s);
      }
      return t;
    }
  }, {
    key: "decrypt",
    value: function decrypt(e) {
      if ((e = In(e)).length % 16 != 0) throw new Error("invalid ciphertext size (must be multiple of 16 bytes)");
      for (var t = Sn(e.length), n = Sn(16), s = 0; s < e.length; s += 16) {
        bn(e, n, 0, s, s + 16), bn(n = this._aes.decrypt(n), t, s);
      }
      return t;
    }
  }]);
  return Hn;
}();
var Jn = /*#__PURE__*/function () {
  function Jn(e, t) {
    (0, _classCallCheck2.default)(this, Jn);
    if (!(this instanceof Jn)) throw Error("AES must be instanitated with `new`");
    if (this.description = "Cipher Block Chaining", this.name = "cbc", t) {
      if (16 != t.length) throw new Error("invalid initialation vector size (must be 16 bytes)");
    } else t = Sn(16);
    this._lastCipherblock = In(t, !0), this._aes = new Wn(e);
  }
  (0, _createClass2.default)(Jn, [{
    key: "encrypt",
    value: function encrypt(e) {
      if ((e = In(e)).length % 16 != 0) throw new Error("invalid plaintext size (must be multiple of 16 bytes)");
      for (var t = Sn(e.length), n = Sn(16), s = 0; s < e.length; s += 16) {
        bn(e, n, 0, s, s + 16);
        for (var r = 0; r < 16; r++) {
          n[r] ^= this._lastCipherblock[r];
        }
        this._lastCipherblock = this._aes.encrypt(n), bn(this._lastCipherblock, t, s);
      }
      return t;
    }
  }, {
    key: "decrypt",
    value: function decrypt(e) {
      if ((e = In(e)).length % 16 != 0) throw new Error("invalid ciphertext size (must be multiple of 16 bytes)");
      for (var t = Sn(e.length), n = Sn(16), s = 0; s < e.length; s += 16) {
        bn(e, n, 0, s, s + 16), n = this._aes.decrypt(n);
        for (var r = 0; r < 16; r++) {
          t[s + r] = n[r] ^ this._lastCipherblock[r];
        }
        bn(e, this._lastCipherblock, 0, s, s + 16);
      }
      return t;
    }
  }]);
  return Jn;
}();
var zn = /*#__PURE__*/function () {
  function zn(e, t, n) {
    (0, _classCallCheck2.default)(this, zn);
    if (!(this instanceof zn)) throw Error("AES must be instanitated with `new`");
    if (this.description = "Cipher Feedback", this.name = "cfb", t) {
      if (16 != t.length) throw new Error("invalid initialation vector size (must be 16 size)");
    } else t = Sn(16);
    n || (n = 1), this.segmentSize = n, this._shiftRegister = In(t, !0), this._aes = new Wn(e);
  }
  (0, _createClass2.default)(zn, [{
    key: "encrypt",
    value: function encrypt(e) {
      if (e.length % this.segmentSize != 0) throw new Error("invalid plaintext size (must be segmentSize bytes)");
      for (var t, n = In(e, !0), s = 0; s < n.length; s += this.segmentSize) {
        t = this._aes.encrypt(this._shiftRegister);
        for (var r = 0; r < this.segmentSize; r++) {
          n[s + r] ^= t[r];
        }
        bn(this._shiftRegister, this._shiftRegister, 0, this.segmentSize), bn(n, this._shiftRegister, 16 - this.segmentSize, s, s + this.segmentSize);
      }
      return n;
    }
  }, {
    key: "decrypt",
    value: function decrypt(e) {
      if (e.length % this.segmentSize != 0) throw new Error("invalid ciphertext size (must be segmentSize bytes)");
      for (var t, n = In(e, !0), s = 0; s < n.length; s += this.segmentSize) {
        t = this._aes.encrypt(this._shiftRegister);
        for (var r = 0; r < this.segmentSize; r++) {
          n[s + r] ^= t[r];
        }
        bn(this._shiftRegister, this._shiftRegister, 0, this.segmentSize), bn(e, this._shiftRegister, 16 - this.segmentSize, s, s + this.segmentSize);
      }
      return n;
    }
  }]);
  return zn;
}();
var Vn = /*#__PURE__*/function () {
  function Vn(e, t) {
    (0, _classCallCheck2.default)(this, Vn);
    if (!(this instanceof Vn)) throw Error("AES must be instanitated with `new`");
    if (this.description = "Output Feedback", this.name = "ofb", t) {
      if (16 != t.length) throw new Error("invalid initialation vector size (must be 16 bytes)");
    } else t = Sn(16);
    this._lastPrecipher = In(t, !0), this._lastPrecipherIndex = 16, this._aes = new Wn(e);
  }
  (0, _createClass2.default)(Vn, [{
    key: "encrypt",
    value: function encrypt(e) {
      for (var t = In(e, !0), n = 0; n < t.length; n++) {
        16 === this._lastPrecipherIndex && (this._lastPrecipher = this._aes.encrypt(this._lastPrecipher), this._lastPrecipherIndex = 0), t[n] ^= this._lastPrecipher[this._lastPrecipherIndex++];
      }
      return t;
    }
  }, {
    key: "decrypt",
    value: function decrypt(e) {
      return this.encrypt(e);
    }
  }]);
  return Vn;
}();
var Gn = /*#__PURE__*/function () {
  function Gn(e) {
    (0, _classCallCheck2.default)(this, Gn);
    if (!(this instanceof Gn)) throw Error("Counter must be instanitated with `new`");
    0 === e || e || (e = 1), "number" == typeof e ? (this._counter = Sn(16), this.setValue(e)) : this.setBytes(e);
  }
  (0, _createClass2.default)(Gn, [{
    key: "setValue",
    value: function setValue(e) {
      if ("number" != typeof e || parseInt(e) != e) throw new Error("invalid counter value (must be an integer)");
      if (e > Number.MAX_SAFE_INTEGER) throw new Error("integer value out of safe range");
      for (var t = 15; t >= 0; --t) {
        this._counter[t] = e % 256, e = parseInt(e / 256);
      }
    }
  }, {
    key: "setBytes",
    value: function setBytes(e) {
      if (16 != (e = In(e, !0)).length) throw new Error("invalid counter bytes size (must be 16 bytes)");
      this._counter = e;
    }
  }, {
    key: "increment",
    value: function increment() {
      for (var e = 15; e >= 0; e--) {
        if (255 !== this._counter[e]) {
          this._counter[e]++;
          break;
        }
        this._counter[e] = 0;
      }
    }
  }]);
  return Gn;
}();
var Qn = /*#__PURE__*/function () {
  function Qn(e, t) {
    (0, _classCallCheck2.default)(this, Qn);
    if (!(this instanceof Qn)) throw Error("AES must be instanitated with `new`");
    this.description = "Counter", this.name = "ctr", t instanceof Gn || (t = new Gn(t)), this._counter = t, this._remainingCounter = null, this._remainingCounterIndex = 16, this._aes = new Wn(e);
  }
  (0, _createClass2.default)(Qn, [{
    key: "encrypt",
    value: function encrypt(e) {
      for (var t = In(e, !0), n = 0; n < t.length; n++) {
        16 === this._remainingCounterIndex && (this._remainingCounter = this._aes.encrypt(this._counter._counter), this._remainingCounterIndex = 0, this._counter.increment()), t[n] ^= this._remainingCounter[this._remainingCounterIndex++];
      }
      return t;
    }
  }, {
    key: "decrypt",
    value: function decrypt(e) {
      return this.encrypt(e);
    }
  }]);
  return Qn;
}();
var Yn = {
  AES: Wn,
  Counter: Gn,
  ModeOfOperation: {
    ecb: Hn,
    cbc: Jn,
    cfb: zn,
    ofb: Vn,
    ctr: Qn
  },
  utils: {
    hex: Tn,
    utf8: An
  },
  padding: {
    pkcs7: {
      pad: function pad(e) {
        var t = 16 - (e = In(e, !0)).length % 16,
          n = Sn(e.length + t);
        bn(e, n);
        for (var s = e.length; s < n.length; s++) {
          n[s] = t;
        }
        return n;
      },
      strip: function strip(e) {
        if ((e = In(e, !0)).length < 16) throw new Error("PKCS#7 invalid length");
        var t = e[e.length - 1];
        if (t > 16) throw new Error("PKCS#7 padding byte out of range");
        for (var n = e.length - t, s = 0; s < t; s++) {
          if (e[n + s] !== t) throw new Error("PKCS#7 invalid padding byte");
        }
        var r = Sn(n);
        return bn(e, r, 0, 0, n), r;
      }
    }
  },
  _arrayTest: {
    coerceArray: In,
    createArray: Sn,
    copyArray: bn
  }
};
function Xn(e, t, n) {
  var s = new Uint8Array(uni.base64ToArrayBuffer(t)),
    r = Yn.utils.utf8.toBytes(n),
    i = Yn.utils.utf8.toBytes(e),
    o = new Yn.ModeOfOperation.cbc(s, r),
    a = Yn.padding.pkcs7.pad(i),
    c = o.encrypt(a);
  return uni.arrayBufferToBase64(c);
}
var Zn,
  es,
  ts = null;
var ns = /*#__PURE__*/function (_n11) {
  (0, _inherits2.default)(ns, _n11);
  var _super8 = _createSuper(ns);
  function ns(e) {
    var _this19;
    (0, _classCallCheck2.default)(this, ns);
    _this19 = _super8.call(this, e), _this19.clientType = "mp-weixin", _this19.userEncryptKey = null;
    return _this19;
  }
  (0, _createClass2.default)(ns, [{
    key: "isLogin",
    value: function isLogin() {
      return !!this.scopedGlobalCache.mpWeixinCode || !!this.scopedGlobalCache.mpWeixinOpenid;
    }
  }, {
    key: "prepare",
    value: function () {
      var _prepare2 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee52() {
        return _regenerator.default.wrap(function _callee52$(_context52) {
          while (1) {
            switch (_context52.prev = _context52.next) {
              case 0:
                if (this.isLogin()) {
                  _context52.next = 7;
                  break;
                }
                if (this.scopedGlobalCache.initPromise) {
                  _context52.next = 3;
                  break;
                }
                throw new Error("`uniCloud.initSecureNetworkByWeixin` has not yet been called");
              case 3:
                _context52.next = 5;
                return this.scopedGlobalCache.initPromise;
              case 5:
                if (this.isLogin()) {
                  _context52.next = 7;
                  break;
                }
                throw new Error("uniCloud.initSecureNetworkByWeixin` has not yet been called or successfully excuted");
              case 7:
              case "end":
                return _context52.stop();
            }
          }
        }, _callee52, this);
      }));
      function prepare() {
        return _prepare2.apply(this, arguments);
      }
      return prepare;
    }()
  }, {
    key: "getUserEncryptKey",
    value: function () {
      var _getUserEncryptKey = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee53() {
        var _this20 = this;
        var e;
        return _regenerator.default.wrap(function _callee53$(_context53) {
          while (1) {
            switch (_context53.prev = _context53.next) {
              case 0:
                if (!this.userEncryptKey) {
                  _context53.next = 2;
                  break;
                }
                return _context53.abrupt("return", this.userEncryptKey);
              case 2:
                if (!(ts && ts.expireTime)) {
                  _context53.next = 6;
                  break;
                }
                e = Date.now();
                if (!(ts.expireTime - e > 0)) {
                  _context53.next = 6;
                  break;
                }
                return _context53.abrupt("return", (this.userEncryptKey = ts, this.userEncryptKey));
              case 6:
                return _context53.abrupt("return", new Promise(function (e, t) {
                  uni.getUserCryptoManager().getLatestUserKey({
                    success: function success(t) {
                      ts = t, _this20.userEncryptKey = t, e(_this20.userEncryptKey);
                    },
                    fail: function fail(e) {
                      t(yn(_objectSpread(_objectSpread({}, gn), {}, {
                        cause: e
                      })));
                    }
                  });
                }));
              case 7:
              case "end":
                return _context53.stop();
            }
          }
        }, _callee53, this);
      }));
      function getUserEncryptKey() {
        return _getUserEncryptKey.apply(this, arguments);
      }
      return getUserEncryptKey;
    }()
  }, {
    key: "getWxAppId",
    value: function getWxAppId() {
      return wx.getAccountInfoSync().miniProgram.appId;
    }
  }, {
    key: "platformGetSignOption",
    value: function () {
      var _platformGetSignOption = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee54() {
        var _yield$this$getUserEn, e, t, n;
        return _regenerator.default.wrap(function _callee54$(_context54) {
          while (1) {
            switch (_context54.prev = _context54.next) {
              case 0:
                _context54.next = 2;
                return this.getUserEncryptKey();
              case 2:
                _yield$this$getUserEn = _context54.sent;
                e = _yield$this$getUserEn.encryptKey;
                t = _yield$this$getUserEn.iv;
                n = _yield$this$getUserEn.version;
                return _context54.abrupt("return", {
                  verifyClientSign: Xn(JSON.stringify({
                    data: JSON.stringify({}),
                    appId: this.appId,
                    deviceId: this.deviceId,
                    wxAppId: this.getWxAppId(),
                    simulator: "devtools" === le().platform,
                    timestamp: Date.now()
                  }), e, t),
                  encryptKeyId: n,
                  mpWeixinCode: this.scopedGlobalCache.mpWeixinCode,
                  mpWeixinOpenid: this.scopedGlobalCache.mpWeixinOpenid
                });
              case 7:
              case "end":
                return _context54.stop();
            }
          }
        }, _callee54, this);
      }));
      function platformGetSignOption() {
        return _platformGetSignOption.apply(this, arguments);
      }
      return platformGetSignOption;
    }()
  }, {
    key: "platformEncryptData",
    value: function () {
      var _platformEncryptData = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee55(e) {
        var _yield$this$getUserEn2, t, n, s, r;
        return _regenerator.default.wrap(function _callee55$(_context55) {
          while (1) {
            switch (_context55.prev = _context55.next) {
              case 0:
                _context55.next = 2;
                return this.getUserEncryptKey();
              case 2:
                _yield$this$getUserEn2 = _context55.sent;
                t = _yield$this$getUserEn2.encryptKey;
                n = _yield$this$getUserEn2.iv;
                s = _yield$this$getUserEn2.version;
                r = {
                  secretType: this.secretType,
                  encryptKeyId: s,
                  mpWeixinCode: this.scopedGlobalCache.mpWeixinCode,
                  mpWeixinOpenid: this.scopedGlobalCache.mpWeixinOpenid
                };
                return _context55.abrupt("return", this.secretType === hn ? {
                  content: e,
                  _uniCloudOptions: r
                } : {
                  content: Xn(JSON.stringify({
                    data: JSON.stringify(e),
                    appId: this.appId,
                    deviceId: this.deviceId,
                    wxAppId: this.getWxAppId(),
                    simulator: "devtools" === le().platform,
                    timestamp: Date.now()
                  }), t, n),
                  _uniCloudOptions: r
                });
              case 8:
              case "end":
                return _context55.stop();
            }
          }
        }, _callee55, this);
      }));
      function platformEncryptData(_x48) {
        return _platformEncryptData.apply(this, arguments);
      }
      return platformEncryptData;
    }()
  }, {
    key: "platformDecryptResult",
    value: function () {
      var _platformDecryptResult = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee56(e) {
        var t, _yield$this$getUserEn3, n, s;
        return _regenerator.default.wrap(function _callee56$(_context56) {
          while (1) {
            switch (_context56.prev = _context56.next) {
              case 0:
                t = e.content;
                _context56.next = 3;
                return this.getUserEncryptKey();
              case 3:
                _yield$this$getUserEn3 = _context56.sent;
                n = _yield$this$getUserEn3.encryptKey;
                s = _yield$this$getUserEn3.iv;
                return _context56.abrupt("return", JSON.parse(function (e, t, n) {
                  var s = new Uint8Array(uni.base64ToArrayBuffer(e)),
                    r = new Uint8Array(uni.base64ToArrayBuffer(t)),
                    i = Yn.utils.utf8.toBytes(n),
                    o = new Yn.ModeOfOperation.cbc(r, i),
                    a = Yn.padding.pkcs7.strip(o.decrypt(s));
                  return Yn.utils.utf8.fromBytes(a);
                }(t, n, s)));
              case 7:
              case "end":
                return _context56.stop();
            }
          }
        }, _callee56, this);
      }));
      function platformDecryptResult(_x49) {
        return _platformDecryptResult.apply(this, arguments);
      }
      return platformDecryptResult;
    }()
  }, {
    key: "isClientKeyNotFound",
    value: function isClientKeyNotFound() {
      return !1;
    }
  }]);
  return ns;
}(_n);
function ss(e) {
  var t = ["hasClientKey", "encryptGetClientKeyPayload", "setClientKey", "encrypt", "decrypt"],
    n = {};
  var _loop = function _loop(_s14) {
    var r = t[_s14];
    n[r] = function () {
      for (var _len = arguments.length, t = new Array(_len), _key = 0; _key < _len; _key++) {
        t[_key] = arguments[_key];
      }
      return new Promise(function (n, s) {
        "function" == typeof e[r] ? e[r].apply(e, t.concat([function () {
          var _ref36 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
            e = _ref36.type,
            t = _ref36.data,
            r = _ref36.errCode,
            i = _ref36.errMsg,
            o = _ref36.errSubject,
            a = _ref36.message;
          "success" === e ? n(t) : s(yn({
            errCode: r,
            errMsg: mn[r] || i || a,
            errSubject: o
          }));
        }])) : s(yn({
          message: "请检查manifest.json内是否开启安全网络模块，另外注意标准基座不支持安全网络模块"
        }));
      });
    };
  };
  for (var _s14 = 0; _s14 < t.length; _s14++) {
    _loop(_s14);
  }
  return n;
}
var rs = /*#__PURE__*/function (_n12) {
  (0, _inherits2.default)(rs, _n12);
  var _super9 = _createSuper(rs);
  function rs(e) {
    var _this21;
    (0, _classCallCheck2.default)(this, rs);
    _this21 = _super9.call(this, e), _this21.clientType = "app", _this21.appUtils = _objectSpread({}, ss(__webpack_provided_uni_dot_requireNativePlugin("plus"))), _this21.systemInfo = Zn || (Zn = le());
    return _this21;
  }
  (0, _createClass2.default)(rs, [{
    key: "hasClientKey",
    value: function () {
      var _hasClientKey = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee57() {
        return _regenerator.default.wrap(function _callee57$(_context57) {
          while (1) {
            switch (_context57.prev = _context57.next) {
              case 0:
                _context57.next = 2;
                return this.appUtils.hasClientKey({
                  provider: this.provider,
                  spaceId: this.spaceId
                });
              case 2:
                this._hasClientKey = _context57.sent;
                return _context57.abrupt("return", this._hasClientKey);
              case 4:
              case "end":
                return _context57.stop();
            }
          }
        }, _callee57, this);
      }));
      function hasClientKey() {
        return _hasClientKey.apply(this, arguments);
      }
      return hasClientKey;
    }()
  }, {
    key: "getAppClientKey",
    value: function () {
      var _getAppClientKey = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee58() {
        var _yield$this$appUtils$, e, t, n, s, r;
        return _regenerator.default.wrap(function _callee58$(_context58) {
          while (1) {
            switch (_context58.prev = _context58.next) {
              case 0:
                _context58.next = 2;
                return this.appUtils.encryptGetClientKeyPayload({
                  data: JSON.stringify({})
                });
              case 2:
                _yield$this$appUtils$ = _context58.sent;
                e = _yield$this$appUtils$.data;
                t = _yield$this$appUtils$.key;
                _context58.next = 7;
                return this.uniCloudIns.callFunction({
                  name: "DCloud-clientDB",
                  data: {
                    redirectTo: "encryption",
                    action: "getAppClientKey",
                    data: e,
                    key: t
                  }
                });
              case 7:
                _context58.t0 = _context58.sent.result;
                if (_context58.t0) {
                  _context58.next = 10;
                  break;
                }
                _context58.t0 = {};
              case 10:
                n = _context58.t0;
                if (!(0 !== n.errCode)) {
                  _context58.next = 13;
                  break;
                }
                throw function (e) {
                  return new re({
                    subject: e.errSubject || "uni-secure-network",
                    code: e.errCode || e.code || pn.code,
                    message: e.errMsg || e.message || pn.message
                  });
                }(n);
              case 13:
                s = n.clientKey, r = n.key;
                _context58.next = 16;
                return this.appUtils.setClientKey({
                  provider: this.provider,
                  spaceId: this.spaceId,
                  clientKey: s,
                  key: r
                });
              case 16:
              case "end":
                return _context58.stop();
            }
          }
        }, _callee58, this);
      }));
      function getAppClientKey() {
        return _getAppClientKey.apply(this, arguments);
      }
      return getAppClientKey;
    }()
  }, {
    key: "ensureClientKey",
    value: function () {
      var _ensureClientKey = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee59() {
        var _this22 = this;
        var _ref37,
          _ref37$forceUpdate,
          e,
          _args59 = arguments;
        return _regenerator.default.wrap(function _callee59$(_context59) {
          while (1) {
            switch (_context59.prev = _context59.next) {
              case 0:
                _ref37 = _args59.length > 0 && _args59[0] !== undefined ? _args59[0] : {}, _ref37$forceUpdate = _ref37.forceUpdate, e = _ref37$forceUpdate === void 0 ? !1 : _ref37$forceUpdate;
                _context59.t1 = !0;
                _context59.next = 4;
                return this.hasClientKey();
              case 4:
                _context59.t2 = _context59.sent;
                _context59.t0 = _context59.t1 !== _context59.t2;
                if (_context59.t0) {
                  _context59.next = 8;
                  break;
                }
                _context59.t0 = e;
              case 8:
                if (!_context59.t0) {
                  _context59.next = 10;
                  break;
                }
                return _context59.abrupt("return", (e && this.scopedGlobalCache.initPromise && this.scopedGlobalCache.initStatus === h || !e && this.scopedGlobalCache.initPromise && this.scopedGlobalCache.initStatus !== p || (this.scopedGlobalCache.initPromise = this.getAppClientKey(), this.scopedGlobalCache.initPromise.then(function (e) {
                  _this22.scopedGlobalCache.initStatus = d;
                }).catch(function (e) {
                  throw _this22.scopedGlobalCache.initStatus = p, e;
                }), this.scopedGlobalCache.initStatus = h), this.scopedGlobalCache.initPromise));
              case 10:
              case "end":
                return _context59.stop();
            }
          }
        }, _callee59, this);
      }));
      function ensureClientKey() {
        return _ensureClientKey.apply(this, arguments);
      }
      return ensureClientKey;
    }()
  }, {
    key: "prepare",
    value: function () {
      var _prepare3 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee60() {
        var _ref38,
          _ref38$forceUpdate,
          e,
          _args60 = arguments;
        return _regenerator.default.wrap(function _callee60$(_context60) {
          while (1) {
            switch (_context60.prev = _context60.next) {
              case 0:
                _ref38 = _args60.length > 0 && _args60[0] !== undefined ? _args60[0] : {}, _ref38$forceUpdate = _ref38.forceUpdate, e = _ref38$forceUpdate === void 0 ? !1 : _ref38$forceUpdate;
                _context60.next = 3;
                return this.ensureClientKey({
                  forceUpdate: e
                });
              case 3:
              case "end":
                return _context60.stop();
            }
          }
        }, _callee60, this);
      }));
      function prepare() {
        return _prepare3.apply(this, arguments);
      }
      return prepare;
    }()
  }, {
    key: "platformGetSignOption",
    value: function () {
      var _platformGetSignOption2 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee61() {
        var _yield$this$appUtils$2, e, t;
        return _regenerator.default.wrap(function _callee61$(_context61) {
          while (1) {
            switch (_context61.prev = _context61.next) {
              case 0:
                _context61.next = 2;
                return this.appUtils.encrypt({
                  provider: this.provider,
                  spaceId: this.spaceId,
                  data: JSON.stringify({})
                });
              case 2:
                _yield$this$appUtils$2 = _context61.sent;
                e = _yield$this$appUtils$2.data;
                t = _yield$this$appUtils$2.key;
                return _context61.abrupt("return", {
                  verifyClientSign: e,
                  encryptKeyId: t
                });
              case 6:
              case "end":
                return _context61.stop();
            }
          }
        }, _callee61, this);
      }));
      function platformGetSignOption() {
        return _platformGetSignOption2.apply(this, arguments);
      }
      return platformGetSignOption;
    }()
  }, {
    key: "platformEncryptData",
    value: function () {
      var _platformEncryptData2 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee62(e) {
        var _yield$this$appUtils$3, t, n, s;
        return _regenerator.default.wrap(function _callee62$(_context62) {
          while (1) {
            switch (_context62.prev = _context62.next) {
              case 0:
                _context62.next = 2;
                return this.appUtils.encrypt({
                  provider: this.provider,
                  spaceId: this.spaceId,
                  data: JSON.stringify(e)
                });
              case 2:
                _yield$this$appUtils$3 = _context62.sent;
                t = _yield$this$appUtils$3.data;
                n = _yield$this$appUtils$3.key;
                s = {
                  secretType: this.secretType,
                  encryptKeyId: n
                };
                return _context62.abrupt("return", this.secretType === hn ? {
                  content: e,
                  _uniCloudOptions: s
                } : {
                  content: t,
                  _uniCloudOptions: s
                });
              case 7:
              case "end":
                return _context62.stop();
            }
          }
        }, _callee62, this);
      }));
      function platformEncryptData(_x50) {
        return _platformEncryptData2.apply(this, arguments);
      }
      return platformEncryptData;
    }()
  }, {
    key: "platformDecryptResult",
    value: function () {
      var _platformDecryptResult2 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee63(e) {
        var t, _e$_uniCloudOptions, n, s, r;
        return _regenerator.default.wrap(function _callee63$(_context63) {
          while (1) {
            switch (_context63.prev = _context63.next) {
              case 0:
                t = e.content;
                _e$_uniCloudOptions = e._uniCloudOptions;
                n = _e$_uniCloudOptions === void 0 ? {} : _e$_uniCloudOptions;
                s = n.encryptKeyId;
                _context63.next = 6;
                return this.appUtils.decrypt({
                  provider: this.provider,
                  spaceId: this.spaceId,
                  data: t,
                  key: s
                });
              case 6:
                r = _context63.sent;
                return _context63.abrupt("return", JSON.parse(r.data));
              case 8:
              case "end":
                return _context63.stop();
            }
          }
        }, _callee63, this);
      }));
      function platformDecryptResult(_x51) {
        return _platformDecryptResult2.apply(this, arguments);
      }
      return platformDecryptResult;
    }()
  }, {
    key: "isClientKeyNotFound",
    value: function isClientKeyNotFound() {
      var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var t = e.result || {};
      return 70009 === t.errCode && "uni-secure-network" === t.errSubject;
    }
  }]);
  return rs;
}(_n);
function is() {
  var _ref39 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
    e = _ref39.secretType;
  return e === ln || e === hn || e === dn;
}
function os() {
  var _ref40 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
    e = _ref40.name,
    _ref40$data = _ref40.data,
    t = _ref40$data === void 0 ? {} : _ref40$data;
  return "app" === T && "DCloud-clientDB" === e && "encryption" === t.redirectTo && "getAppClientKey" === t.action;
}
function as() {
  var _ref41 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
    e = _ref41.provider,
    t = _ref41.spaceId,
    n = _ref41.functionName;
  var _le = le(),
    s = _le.appId,
    r = _le.uniPlatform,
    i = _le.osName;
  var o = r;
  "app" === r && (o = i);
  var a = function () {
    var _ref42 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      e = _ref42.provider,
      t = _ref42.spaceId;
    var n = A;
    if (!n) return {};
    e = function (e) {
      return "tencent" === e ? "tcb" : e;
    }(e);
    var s = n.find(function (n) {
      return n.provider === e && n.spaceId === t;
    });
    return s && s.config;
  }({
    provider: e,
    spaceId: t
  });
  if (!a || !a.accessControl || !a.accessControl.enable) return !1;
  var c = a.accessControl.function || {},
    u = Object.keys(c);
  if (0 === u.length) return !0;
  var l = function (e, t) {
    var n, s, r;
    for (var _i2 = 0; _i2 < e.length; _i2++) {
      var _o2 = e[_i2];
      _o2 !== t ? "*" !== _o2 ? _o2.split(",").map(function (e) {
        return e.trim();
      }).indexOf(t) > -1 && (s = _o2) : r = _o2 : n = _o2;
    }
    return n || s || r;
  }(u, n);
  if (!l) return !1;
  if ((c[l] || []).find(function () {
    var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return e.appId === s && (e.platform || "").toLowerCase() === o.toLowerCase();
  })) return !0;
  throw console.error("\u6B64\u5E94\u7528[appId: ".concat(s, ", platform: ").concat(o, "]\u4E0D\u5728\u4E91\u7AEF\u914D\u7F6E\u7684\u5141\u8BB8\u8BBF\u95EE\u7684\u5E94\u7528\u5217\u8868\u5185\uFF0C\u53C2\u8003\uFF1Ahttps://uniapp.dcloud.net.cn/uniCloud/secure-network.html#verify-client")), yn(fn);
}
function cs(_ref43) {
  var e = _ref43.functionName,
    t = _ref43.result,
    n = _ref43.logPvd;
  if (S && this.__dev__.debugLog && t && t.requestId) {
    var _s15 = JSON.stringify({
      spaceId: this.config.spaceId,
      functionName: e,
      requestId: t.requestId
    });
    console.log("[".concat(n, "-request]").concat(_s15, "[/").concat(n, "-request]"));
  }
}
function us(e) {
  var t = e.callFunction,
    n = function n(_n13) {
      var _this23 = this;
      var s = _n13.name;
      _n13.data = Jt.call(e, {
        data: _n13.data
      });
      var r = {
          aliyun: "aliyun",
          tencent: "tcb",
          tcb: "tcb",
          alipay: "alipay",
          dcloud: "dcloud"
        }[this.config.provider],
        i = is(_n13),
        o = os(_n13),
        a = i || o;
      return t.call(this, _n13).then(function (e) {
        return e.errCode = 0, !a && cs.call(_this23, {
          functionName: s,
          result: e,
          logPvd: r
        }), Promise.resolve(e);
      }, function (e) {
        return !a && cs.call(_this23, {
          functionName: s,
          result: e,
          logPvd: r
        }), e && e.message && (e.message = function () {
          var _ref44 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
            _ref44$message = _ref44.message,
            e = _ref44$message === void 0 ? "" : _ref44$message,
            _ref44$extraInfo = _ref44.extraInfo,
            t = _ref44$extraInfo === void 0 ? {} : _ref44$extraInfo,
            _ref44$formatter = _ref44.formatter,
            n = _ref44$formatter === void 0 ? [] : _ref44$formatter;
          for (var _s16 = 0; _s16 < n.length; _s16++) {
            var _n$_s = n[_s16],
              _r7 = _n$_s.rule,
              _i3 = _n$_s.content,
              _o3 = _n$_s.mode,
              _a2 = e.match(_r7);
            if (!_a2) continue;
            var _c2 = _i3;
            for (var _e19 = 1; _e19 < _a2.length; _e19++) {
              _c2 = cn(_c2, "{$".concat(_e19, "}"), _a2[_e19]);
            }
            for (var _e20 in t) {
              _c2 = cn(_c2, "{".concat(_e20, "}"), t[_e20]);
            }
            return "replace" === _o3 ? _c2 : e + _c2;
          }
          return e;
        }({
          message: "[".concat(_n13.name, "]: ").concat(e.message),
          formatter: rn,
          extraInfo: {
            functionName: s
          }
        })), Promise.reject(e);
      });
    };
  e.callFunction = function (t) {
    var _e$config = e.config,
      s = _e$config.provider,
      r = _e$config.spaceId,
      i = t.name;
    var o, a;
    if (t.data = t.data || {}, S && e.__dev__.debugInfo && !e.__dev__.debugInfo.forceRemote && P ? (e._callCloudFunction || (e._callCloudFunction = n, e._callLocalFunction = sn), o = sn) : o = n, o = o.bind(e), os(t)) a = n.call(e, t);else if (function (_ref45) {
      var e = _ref45.name,
        _ref45$data = _ref45.data,
        t = _ref45$data === void 0 ? {} : _ref45$data;
      return "mp-weixin" === T && "uni-id-co" === e && "secureNetworkHandshakeByWeixin" === t.method;
    }(t)) a = o.call(e, t);else if (is(t)) {
      a = new es({
        secretType: t.secretType,
        uniCloudIns: e
      }).wrapEncryptDataCallFunction(n.bind(e))(t);
    } else if (as({
      provider: s,
      spaceId: r,
      functionName: i
    })) {
      a = new es({
        secretType: t.secretType,
        uniCloudIns: e
      }).wrapVerifyClientCallFunction(n.bind(e))(t);
    } else a = o(t);
    return Object.defineProperty(a, "result", {
      get: function get() {
        return console.warn("当前返回结果为Promise类型，不可直接访问其result属性，详情请参考：https://uniapp.dcloud.net.cn/uniCloud/faq?id=promise"), {};
      }
    }), a.then(function (e) {
      return e;
    });
  };
}
es = "mp-weixin" !== T && "app" !== T ? /*#__PURE__*/function () {
  function _class2() {
    (0, _classCallCheck2.default)(this, _class2);
    throw yn({
      message: "Platform ".concat(T, " is not supported by secure network")
    });
  }
  return (0, _createClass2.default)(_class2);
}() : k ? "mp-weixin" === T ? ns : rs : /*#__PURE__*/function () {
  function _class3() {
    (0, _classCallCheck2.default)(this, _class3);
    throw yn({
      message: "Platform ".concat(T, " is not enabled, please check whether secure network module is enabled in your manifest.json")
    });
  }
  return (0, _createClass2.default)(_class3);
}();
var ls = Symbol("CLIENT_DB_INTERNAL");
function hs(e, t) {
  return e.then = "DoNotReturnProxyWithAFunctionNamedThen", e._internalType = ls, e.inspect = null, e.__ob__ = void 0, new Proxy(e, {
    get: function get(e, n, s) {
      if ("_uniClient" === n) return null;
      if ("symbol" == (0, _typeof2.default)(n)) return e[n];
      if (n in e || "string" != typeof n) {
        var _t12 = e[n];
        return "function" == typeof _t12 ? _t12.bind(e) : _t12;
      }
      return t.get(e, n, s);
    }
  });
}
function ds(e) {
  return {
    on: function on(t, n) {
      e[t] = e[t] || [], e[t].indexOf(n) > -1 || e[t].push(n);
    },
    off: function off(t, n) {
      e[t] = e[t] || [];
      var s = e[t].indexOf(n);
      -1 !== s && e[t].splice(s, 1);
    }
  };
}
var ps = ["db.Geo", "db.command", "command.aggregate"];
function fs(e, t) {
  return ps.indexOf("".concat(e, ".").concat(t)) > -1;
}
function gs(e) {
  switch (f(e)) {
    case "array":
      return e.map(function (e) {
        return gs(e);
      });
    case "object":
      return e._internalType === ls || Object.keys(e).forEach(function (t) {
        e[t] = gs(e[t]);
      }), e;
    case "regexp":
      return {
        $regexp: {
          source: e.source,
          flags: e.flags
        }
      };
    case "date":
      return {
        $date: e.toISOString()
      };
    default:
      return e;
  }
}
function ms(e) {
  return e && e.content && e.content.$method;
}
var ys = /*#__PURE__*/function () {
  function ys(e, t, n) {
    (0, _classCallCheck2.default)(this, ys);
    this.content = e, this.prevStage = t || null, this.udb = null, this._database = n;
  }
  (0, _createClass2.default)(ys, [{
    key: "toJSON",
    value: function toJSON() {
      var e = this;
      var t = [e.content];
      for (; e.prevStage;) {
        e = e.prevStage, t.push(e.content);
      }
      return {
        $db: t.reverse().map(function (e) {
          return {
            $method: e.$method,
            $param: gs(e.$param)
          };
        })
      };
    }
  }, {
    key: "toString",
    value: function toString() {
      return JSON.stringify(this.toJSON());
    }
  }, {
    key: "getAction",
    value: function getAction() {
      var e = this.toJSON().$db.find(function (e) {
        return "action" === e.$method;
      });
      return e && e.$param && e.$param[0];
    }
  }, {
    key: "getCommand",
    value: function getCommand() {
      return {
        $db: this.toJSON().$db.filter(function (e) {
          return "action" !== e.$method;
        })
      };
    }
  }, {
    key: "isAggregate",
    get: function get() {
      var e = this;
      for (; e;) {
        var t = ms(e),
          _n14 = ms(e.prevStage);
        if ("aggregate" === t && "collection" === _n14 || "pipeline" === t) return !0;
        e = e.prevStage;
      }
      return !1;
    }
  }, {
    key: "isCommand",
    get: function get() {
      var e = this;
      for (; e;) {
        if ("command" === ms(e)) return !0;
        e = e.prevStage;
      }
      return !1;
    }
  }, {
    key: "isAggregateCommand",
    get: function get() {
      var e = this;
      for (; e;) {
        var t = ms(e),
          _n15 = ms(e.prevStage);
        if ("aggregate" === t && "command" === _n15) return !0;
        e = e.prevStage;
      }
      return !1;
    }
  }, {
    key: "getNextStageFn",
    value: function getNextStageFn(e) {
      var t = this;
      return function () {
        return _s({
          $method: e,
          $param: gs(Array.from(arguments))
        }, t, t._database);
      };
    }
  }, {
    key: "count",
    get: function get() {
      return this.isAggregate ? this.getNextStageFn("count") : function () {
        return this._send("count", Array.from(arguments));
      };
    }
  }, {
    key: "remove",
    get: function get() {
      return this.isCommand ? this.getNextStageFn("remove") : function () {
        return this._send("remove", Array.from(arguments));
      };
    }
  }, {
    key: "get",
    value: function get() {
      return this._send("get", Array.from(arguments));
    }
  }, {
    key: "add",
    get: function get() {
      return this.isCommand ? this.getNextStageFn("add") : function () {
        return this._send("add", Array.from(arguments));
      };
    }
  }, {
    key: "update",
    value: function update() {
      return this._send("update", Array.from(arguments));
    }
  }, {
    key: "end",
    value: function end() {
      return this._send("end", Array.from(arguments));
    }
  }, {
    key: "set",
    get: function get() {
      return this.isCommand ? this.getNextStageFn("set") : function () {
        throw new Error("JQL禁止使用set方法");
      };
    }
  }, {
    key: "_send",
    value: function _send(e, t) {
      var n = this.getAction(),
        s = this.getCommand();
      if (s.$db.push({
        $method: e,
        $param: gs(t)
      }), S) {
        var _e21 = s.$db.find(function (e) {
            return "collection" === e.$method;
          }),
          _t13 = _e21 && _e21.$param;
        _t13 && 1 === _t13.length && "string" == typeof _e21.$param[0] && _e21.$param[0].indexOf(",") > -1 && console.warn("检测到使用JQL语法联表查询时，未使用getTemp先过滤主表数据，在主表数据量大的情况下可能会查询缓慢。\n- 如何优化请参考此文档：https://uniapp.dcloud.net.cn/uniCloud/jql?id=lookup-with-temp \n- 如果主表数据量很小请忽略此信息，项目发行时不会出现此提示。");
      }
      return this._database._callCloudFunction({
        action: n,
        command: s
      });
    }
  }]);
  return ys;
}();
function _s(e, t, n) {
  return hs(new ys(e, t, n), {
    get: function get(e, t) {
      var s = "db";
      return e && e.content && (s = e.content.$method), fs(s, t) ? _s({
        $method: t
      }, e, n) : function () {
        return _s({
          $method: t,
          $param: gs(Array.from(arguments))
        }, e, n);
      };
    }
  });
}
function ws(_ref46) {
  var e = _ref46.path,
    t = _ref46.method;
  return /*#__PURE__*/function () {
    function _class4() {
      (0, _classCallCheck2.default)(this, _class4);
      this.param = Array.from(arguments);
    }
    (0, _createClass2.default)(_class4, [{
      key: "toJSON",
      value: function toJSON() {
        return {
          $newDb: [].concat((0, _toConsumableArray2.default)(e.map(function (e) {
            return {
              $method: e
            };
          })), [{
            $method: t,
            $param: this.param
          }])
        };
      }
    }, {
      key: "toString",
      value: function toString() {
        return JSON.stringify(this.toJSON());
      }
    }]);
    return _class4;
  }();
}
function vs(e) {
  var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return hs(new e(t), {
    get: function get(e, t) {
      return fs("db", t) ? _s({
        $method: t
      }, null, e) : function () {
        return _s({
          $method: t,
          $param: gs(Array.from(arguments))
        }, null, e);
      };
    }
  });
}
var Is = /*#__PURE__*/function (_ref47) {
  (0, _inherits2.default)(Is, _ref47);
  var _super10 = _createSuper(Is);
  function Is() {
    (0, _classCallCheck2.default)(this, Is);
    return _super10.apply(this, arguments);
  }
  (0, _createClass2.default)(Is, [{
    key: "_parseResult",
    value: function _parseResult(e) {
      return this._isJQL ? e.result : e;
    }
  }, {
    key: "_callCloudFunction",
    value: function _callCloudFunction(_ref48) {
      var _this24 = this;
      var e = _ref48.action,
        t = _ref48.command,
        n = _ref48.multiCommand,
        s = _ref48.queryList;
      function r(e, t) {
        if (n && s) for (var _n16 = 0; _n16 < s.length; _n16++) {
          var _r8 = s[_n16];
          _r8.udb && "function" == typeof _r8.udb.setResult && (t ? _r8.udb.setResult(t) : _r8.udb.setResult(e.result.dataList[_n16]));
        }
      }
      var i = this,
        o = this._isJQL ? "databaseForJQL" : "database";
      function a(e) {
        return i._callback("error", [e]), F(K(o, "fail"), e).then(function () {
          return F(K(o, "complete"), e);
        }).then(function () {
          return r(null, e), Z(B, {
            type: z,
            content: e
          }), Promise.reject(e);
        });
      }
      var c = F(K(o, "invoke")),
        u = this._uniClient;
      return c.then(function () {
        return u.callFunction({
          name: "DCloud-clientDB",
          type: l,
          data: {
            action: e,
            command: t,
            multiCommand: n
          }
        });
      }).then(function (e) {
        var _e$result = e.result,
          t = _e$result.code,
          n = _e$result.message,
          s = _e$result.token,
          c = _e$result.tokenExpired,
          _e$result$systemInfo = _e$result.systemInfo,
          u = _e$result$systemInfo === void 0 ? [] : _e$result$systemInfo;
        if (u) for (var _e22 = 0; _e22 < u.length; _e22++) {
          var _u$_e = u[_e22],
            _t14 = _u$_e.level,
            _n17 = _u$_e.message,
            _s17 = _u$_e.detail,
            _r9 = console["app" === T && "warn" === _t14 ? "error" : _t14] || console.log;
          var _i4 = "[System Info]" + _n17;
          _s17 && (_i4 = "".concat(_i4, "\n\u8BE6\u7EC6\u4FE1\u606F\uFF1A").concat(_s17)), _r9(_i4);
        }
        if (t) {
          return a(new re({
            code: t,
            message: n,
            requestId: e.requestId
          }));
        }
        e.result.errCode = e.result.errCode || e.result.code, e.result.errMsg = e.result.errMsg || e.result.message, s && c && (ae({
          token: s,
          tokenExpired: c
        }), _this24._callbackAuth("refreshToken", [{
          token: s,
          tokenExpired: c
        }]), _this24._callback("refreshToken", [{
          token: s,
          tokenExpired: c
        }]), Z(H, {
          token: s,
          tokenExpired: c
        }));
        var l = [{
          prop: "affectedDocs",
          tips: "affectedDocs不再推荐使用，请使用inserted/deleted/updated/data.length替代"
        }, {
          prop: "code",
          tips: "code不再推荐使用，请使用errCode替代"
        }, {
          prop: "message",
          tips: "message不再推荐使用，请使用errMsg替代"
        }];
        var _loop2 = function _loop2(_t15) {
          var _l$_t = l[_t15],
            n = _l$_t.prop,
            s = _l$_t.tips;
          if (n in e.result) {
            var _t16 = e.result[n];
            Object.defineProperty(e.result, n, {
              get: function get() {
                return console.warn(s), _t16;
              }
            });
          }
        };
        for (var _t15 = 0; _t15 < l.length; _t15++) {
          _loop2(_t15);
        }
        return function (e) {
          return F(K(o, "success"), e).then(function () {
            return F(K(o, "complete"), e);
          }).then(function () {
            r(e, null);
            var t = i._parseResult(e);
            return Z(B, {
              type: z,
              content: t
            }), Promise.resolve(t);
          });
        }(e);
      }, function (e) {
        /fc_function_not_found|FUNCTION_NOT_FOUND/g.test(e.message) && console.warn("clientDB未初始化，请在web控制台保存一次schema以开启clientDB");
        return a(new re({
          code: e.code || "SYSTEM_ERROR",
          message: e.message,
          requestId: e.requestId
        }));
      });
    }
  }]);
  return Is;
}( /*#__PURE__*/function () {
  function _class5() {
    var _ref49 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref49$uniClient = _ref49.uniClient,
      e = _ref49$uniClient === void 0 ? {} : _ref49$uniClient,
      _ref49$isJQL = _ref49.isJQL,
      t = _ref49$isJQL === void 0 ? !1 : _ref49$isJQL;
    (0, _classCallCheck2.default)(this, _class5);
    this._uniClient = e, this._authCallBacks = {}, this._dbCallBacks = {}, e._isDefault && (this._dbCallBacks = U("_globalUniCloudDatabaseCallback")), t || (this.auth = ds(this._authCallBacks)), this._isJQL = t, Object.assign(this, ds(this._dbCallBacks)), this.env = hs({}, {
      get: function get(e, t) {
        return {
          $env: t
        };
      }
    }), this.Geo = hs({}, {
      get: function get(e, t) {
        return ws({
          path: ["Geo"],
          method: t
        });
      }
    }), this.serverDate = ws({
      path: [],
      method: "serverDate"
    }), this.RegExp = ws({
      path: [],
      method: "RegExp"
    });
  }
  (0, _createClass2.default)(_class5, [{
    key: "getCloudEnv",
    value: function getCloudEnv(e) {
      if ("string" != typeof e || !e.trim()) throw new Error("getCloudEnv参数错误");
      return {
        $env: e.replace("$cloudEnv_", "")
      };
    }
  }, {
    key: "_callback",
    value: function _callback(e, t) {
      var n = this._dbCallBacks;
      n[e] && n[e].forEach(function (e) {
        e.apply(void 0, (0, _toConsumableArray2.default)(t));
      });
    }
  }, {
    key: "_callbackAuth",
    value: function _callbackAuth(e, t) {
      var n = this._authCallBacks;
      n[e] && n[e].forEach(function (e) {
        e.apply(void 0, (0, _toConsumableArray2.default)(t));
      });
    }
  }, {
    key: "multiSend",
    value: function multiSend() {
      var e = Array.from(arguments),
        t = e.map(function (e) {
          var t = e.getAction(),
            n = e.getCommand();
          if ("getTemp" !== n.$db[n.$db.length - 1].$method) throw new Error("multiSend只支持子命令内使用getTemp");
          return {
            action: t,
            command: n
          };
        });
      return this._callCloudFunction({
        multiCommand: t,
        queryList: e
      });
    }
  }, {
    key: "startTransaction",
    value: function startTransaction() {
      throw new Error("JQL 事务仅支持在云端使用");
    }
  }, {
    key: "commit",
    value: function commit() {
      throw new Error("JQL 事务仅支持在云端使用");
    }
  }, {
    key: "rollback",
    value: function rollback() {
      throw new Error("JQL 事务仅支持在云端使用");
    }
  }]);
  return _class5;
}());
var Ss = "token无效，跳转登录页面",
  bs = "token过期，跳转登录页面",
  ks = {
    TOKEN_INVALID_TOKEN_EXPIRED: bs,
    TOKEN_INVALID_INVALID_CLIENTID: Ss,
    TOKEN_INVALID: Ss,
    TOKEN_INVALID_WRONG_TOKEN: Ss,
    TOKEN_INVALID_ANONYMOUS_USER: Ss
  },
  As = {
    "uni-id-token-expired": bs,
    "uni-id-check-token-failed": Ss,
    "uni-id-token-not-exist": Ss,
    "uni-id-check-device-feature-failed": Ss
  },
  Ts = _objectSpread(_objectSpread(_objectSpread({}, ks), As), {}, {
    default: "用户未登录或登录状态过期，自动跳转登录页面"
  });
function Cs(e, t) {
  var n = "";
  return n = e ? "".concat(e, "/").concat(t) : t, n.replace(/^\//, "");
}
function Ps() {
  var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
  var n = [],
    s = [];
  return e.forEach(function (e) {
    !0 === e.needLogin ? n.push(Cs(t, e.path)) : !1 === e.needLogin && s.push(Cs(t, e.path));
  }), {
    needLoginPage: n,
    notNeedLoginPage: s
  };
}
function Os(e) {
  return e.split("?")[0].replace(/^\//, "");
}
function Es() {
  return function (e) {
    var t = e && e.$page && e.$page.fullPath;
    return t ? ("/" !== t.charAt(0) && (t = "/" + t), t) : "";
  }(function () {
    var e = getCurrentPages();
    return e[e.length - 1];
  }());
}
function xs() {
  return Os(Es());
}
function Ls() {
  var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
  var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  if (!e) return !1;
  if (!(t && t.list && t.list.length)) return !1;
  var n = t.list,
    s = Os(e);
  return n.some(function (e) {
    return e.pagePath === s;
  });
}
var Us = !!_pages.default.uniIdRouter;
var _ref50 = function () {
    var _ref8 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _pages.default,
      _ref8$pages = _ref8.pages,
      t = _ref8$pages === void 0 ? [] : _ref8$pages,
      _ref8$subPackages = _ref8.subPackages,
      n = _ref8$subPackages === void 0 ? [] : _ref8$subPackages,
      _ref8$uniIdRouter = _ref8.uniIdRouter,
      s = _ref8$uniIdRouter === void 0 ? {} : _ref8$uniIdRouter,
      _ref8$tabBar = _ref8.tabBar,
      r = _ref8$tabBar === void 0 ? {} : _ref8$tabBar;
    var i = s.loginPage,
      _s$needLogin = s.needLogin,
      o = _s$needLogin === void 0 ? [] : _s$needLogin,
      _s$resToLogin = s.resToLogin,
      a = _s$resToLogin === void 0 ? !0 : _s$resToLogin,
      _Ps = Ps(t),
      c = _Ps.needLoginPage,
      u = _Ps.notNeedLoginPage,
      _ref9 = function () {
        var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
        var t = [],
          n = [];
        return e.forEach(function (e) {
          var s = e.root,
            _e$pages = e.pages,
            r = _e$pages === void 0 ? [] : _e$pages,
            _Ps2 = Ps(r, s),
            i = _Ps2.needLoginPage,
            o = _Ps2.notNeedLoginPage;
          t.push.apply(t, (0, _toConsumableArray2.default)(i)), n.push.apply(n, (0, _toConsumableArray2.default)(o));
        }), {
          needLoginPage: t,
          notNeedLoginPage: n
        };
      }(n),
      l = _ref9.needLoginPage,
      h = _ref9.notNeedLoginPage;
    return {
      loginPage: i,
      routerNeedLogin: o,
      resToLogin: a,
      needLoginPage: [].concat((0, _toConsumableArray2.default)(c), (0, _toConsumableArray2.default)(l)),
      notNeedLoginPage: [].concat((0, _toConsumableArray2.default)(u), (0, _toConsumableArray2.default)(h)),
      loginPageInTabBar: Ls(i, r)
    };
  }(),
  Rs = _ref50.loginPage,
  Ns = _ref50.routerNeedLogin,
  Ds = _ref50.resToLogin,
  Ms = _ref50.needLoginPage,
  qs = _ref50.notNeedLoginPage,
  Fs = _ref50.loginPageInTabBar;
if (Ms.indexOf(Rs) > -1) throw new Error("Login page [".concat(Rs, "] should not be \"needLogin\", please check your pages.json"));
function Ks(e) {
  var t = xs();
  if ("/" === e.charAt(0)) return e;
  var _e$split = e.split("?"),
    _e$split2 = (0, _slicedToArray2.default)(_e$split, 2),
    n = _e$split2[0],
    s = _e$split2[1],
    r = n.replace(/^\//, "").split("/"),
    i = t.split("/");
  i.pop();
  for (var _e23 = 0; _e23 < r.length; _e23++) {
    var _t17 = r[_e23];
    ".." === _t17 ? i.pop() : "." !== _t17 && i.push(_t17);
  }
  return "" === i[0] && i.shift(), "/" + i.join("/") + (s ? "?" + s : "");
}
function js(e, t) {
  return new RegExp(t).test(e);
}
function $s(_ref32) {
  var e = _ref32.redirect;
  var t = Os(e),
    n = Os(Rs);
  return xs() !== n && t !== n;
}
function Bs() {
  var _ref34 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
    e = _ref34.api,
    t = _ref34.redirect;
  if (!t || !$s({
    redirect: t
  })) return;
  var n = function (e, t) {
    return "/" !== e.charAt(0) && (e = "/" + e), t ? e.indexOf("?") > -1 ? e + "&uniIdRedirectUrl=".concat(encodeURIComponent(t)) : e + "?uniIdRedirectUrl=".concat(encodeURIComponent(t)) : e;
  }(Rs, t);
  Fs ? "navigateTo" !== e && "redirectTo" !== e || (e = "switchTab") : "switchTab" === e && (e = "navigateTo");
  var s = {
    navigateTo: uni.navigateTo,
    redirectTo: uni.redirectTo,
    switchTab: uni.switchTab,
    reLaunch: uni.reLaunch
  };
  setTimeout(function () {
    s[e]({
      url: n
    });
  }, 0);
}
function Ws() {
  var _ref51 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
    e = _ref51.url;
  var t = {
      abortLoginPageJump: !1,
      autoToLoginPage: !1
    },
    n = function () {
      var _oe4 = oe(),
        e = _oe4.token,
        t = _oe4.tokenExpired;
      var n;
      if (e) {
        if (t < Date.now()) {
          var _e24 = "uni-id-token-expired";
          n = {
            errCode: _e24,
            errMsg: Ts[_e24]
          };
        }
      } else {
        var _e25 = "uni-id-check-token-failed";
        n = {
          errCode: _e25,
          errMsg: Ts[_e25]
        };
      }
      return n;
    }();
  if (function (e) {
    var t = Os(Ks(e));
    return !(qs.indexOf(t) > -1) && (Ms.indexOf(t) > -1 || Ns.some(function (n) {
      return js(t, n) || js(e, n);
    }));
  }(e) && n) {
    n.uniIdRedirectUrl = e;
    if (Q(W).length > 0) return setTimeout(function () {
      Z(W, n);
    }, 0), t.abortLoginPageJump = !0, t;
    t.autoToLoginPage = !0;
  }
  return t;
}
function Hs() {
  var e = Es(),
    _Ws = Ws({
      url: e
    }),
    t = _Ws.abortLoginPageJump,
    n = _Ws.autoToLoginPage;
  t || n && Bs({
    api: "redirectTo",
    redirect: e
  });
}
function Js() {
  Hs();
  var e = ["navigateTo", "redirectTo", "reLaunch", "switchTab"];
  var _loop3 = function _loop3(_t18) {
    var n = e[_t18];
    uni.addInterceptor(n, {
      invoke: function invoke(e) {
        var _Ws2 = Ws({
            url: e.url
          }),
          t = _Ws2.abortLoginPageJump,
          s = _Ws2.autoToLoginPage;
        return t ? e : s ? (Bs({
          api: n,
          redirect: Ks(e.url)
        }), !1) : e;
      }
    }), "web" === T && window.addEventListener("popstate", function () {
      (0 === getCurrentPages().length ? (te = !1, ee = null, ne()) : Promise.resolve()).then(function () {
        Hs();
      });
    });
  };
  for (var _t18 = 0; _t18 < e.length; _t18++) {
    _loop3(_t18);
  }
}
function zs() {
  this.onResponse(function (e) {
    var t = e.type,
      n = e.content;
    var s = !1;
    switch (t) {
      case "cloudobject":
        s = function (e) {
          if ("object" != (0, _typeof2.default)(e)) return !1;
          var _ref52 = e || {},
            t = _ref52.errCode;
          return t in Ts;
        }(n);
        break;
      case "clientdb":
        s = function (e) {
          if ("object" != (0, _typeof2.default)(e)) return !1;
          var _ref53 = e || {},
            t = _ref53.errCode;
          return t in ks;
        }(n);
    }
    s && function () {
      var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var t = Q(W);
      ne().then(function () {
        var n = Es();
        if (n && $s({
          redirect: n
        })) return t.length > 0 ? Z(W, Object.assign({
          uniIdRedirectUrl: n
        }, e)) : void (Rs && Bs({
          api: "navigateTo",
          redirect: n
        }));
      });
    }(n);
  });
}
function Vs(e) {
  e.onNeedLogin = function (e) {
    Y(W, e);
  }, e.offNeedLogin = function (e) {
    X(W, e);
  }, Us && (U("_globalUniCloudStatus").needLoginInit || (U("_globalUniCloudStatus").needLoginInit = !0, ne().then(function () {
    Js.call(e);
  }), Ds && zs.call(e)));
}
function Gs(e) {
  e.onFailover = function (e) {
    Y(J, e);
  }, e.offFailover = function (e) {
    X(J, e);
  }, e.refreshFailoverConfig = function () {
    return e.config, en(0), nn();
  }, e.clearFailoverConfig = function () {
    !function () {
      Vt = null, Gt = 0;
      try {
        ie.removeStorageSync(Xt("UNICLOUD_FAILOVER_CONFIG")), ie.removeStorageSync(Xt("UNICLOUD_FAILOVER_LAST_REQUEST"));
      } catch (e) {}
    }();
  };
}
function Qs(e) {
  !function (e) {
    e.onResponse = function (e) {
      Y(B, e);
    }, e.offResponse = function (e) {
      X(B, e);
    };
  }(e), Vs(e), function (e) {
    e.onRefreshToken = function (e) {
      Y(H, e);
    }, e.offRefreshToken = function (e) {
      X(H, e);
    };
  }(e), Gs(e);
}
var Ys = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
  Xs = /^(?:[A-Za-z\d+/]{4})*?(?:[A-Za-z\d+/]{2}(?:==)?|[A-Za-z\d+/]{3}=?)?$/;
function Zs(e) {
  return decodeURIComponent(function (e) {
    if (e = String(e).replace(/[\t\n\f\r ]+/g, ""), !Xs.test(e)) throw new Error("Failed to execute 'atob' on 'Window': The string to be decoded is not correctly encoded.");
    var t;
    e += "==".slice(2 - (3 & e.length));
    for (var n, s, r = "", i = 0; i < e.length;) {
      t = Ys.indexOf(e.charAt(i++)) << 18 | Ys.indexOf(e.charAt(i++)) << 12 | (n = Ys.indexOf(e.charAt(i++))) << 6 | (s = Ys.indexOf(e.charAt(i++))), r += 64 === n ? String.fromCharCode(t >> 16 & 255) : 64 === s ? String.fromCharCode(t >> 16 & 255, t >> 8 & 255) : String.fromCharCode(t >> 16 & 255, t >> 8 & 255, 255 & t);
    }
    return r;
  }(e).split("").map(function (e) {
    return "%" + ("00" + e.charCodeAt(0).toString(16)).slice(-2);
  }).join(""));
}
function er() {
  var e = oe().token || "",
    t = e.split(".");
  if (!e || 3 !== t.length) return {
    uid: null,
    role: [],
    permission: [],
    tokenExpired: 0
  };
  var n;
  try {
    n = JSON.parse(Zs(t[1]));
  } catch (e) {
    throw new Error("获取当前用户信息出错，详细错误信息为：" + e.message);
  }
  return n.tokenExpired = 1e3 * n.exp, delete n.exp, delete n.iat, n;
}
var tr = n(function (e, t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var n = "chooseAndUploadFile:ok",
      s = "chooseAndUploadFile:fail";
    function r(e, t) {
      return e.tempFiles.forEach(function (e, n) {
        e.name || (e.name = e.path.substring(e.path.lastIndexOf("/") + 1)), t && (e.fileType = t), e.cloudPath = Date.now() + "_" + n + e.name.substring(e.name.lastIndexOf("."));
      }), e.tempFilePaths || (e.tempFilePaths = e.tempFiles.map(function (e) {
        return e.path;
      })), e;
    }
    function i(e, t, _ref54) {
      var s = _ref54.onChooseFile,
        r = _ref54.onUploadProgress;
      return t.then(function (e) {
        if (s) {
          var _t19 = s(e);
          if (void 0 !== _t19) return Promise.resolve(_t19).then(function (t) {
            return void 0 === t ? e : t;
          });
        }
        return e;
      }).then(function (t) {
        return !1 === t ? {
          errMsg: n,
          tempFilePaths: [],
          tempFiles: []
        } : function (e, t) {
          var s = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 5;
          var r = arguments.length > 3 ? arguments[3] : undefined;
          (t = Object.assign({}, t)).errMsg = n;
          var i = t.tempFiles,
            o = i.length;
          var a = 0;
          return new Promise(function (n) {
            for (; a < s;) {
              c();
            }
            function c() {
              var s = a++;
              if (s >= o) return void (!i.find(function (e) {
                return !e.url && !e.errMsg;
              }) && n(t));
              var u = i[s];
              e.uploadFile({
                provider: u.provider,
                filePath: u.path,
                cloudPath: u.cloudPath,
                fileType: u.fileType,
                cloudPathAsRealPath: u.cloudPathAsRealPath,
                onUploadProgress: function onUploadProgress(e) {
                  e.index = s, e.tempFile = u, e.tempFilePath = u.path, r && r(e);
                }
              }).then(function (e) {
                u.url = e.fileID, s < o && c();
              }).catch(function (e) {
                u.errMsg = e.errMsg || e.message, s < o && c();
              });
            }
          });
        }(e, t, 5, r);
      });
    }
    t.initChooseAndUploadFile = function (e) {
      return function () {
        var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
          type: "all"
        };
        return "image" === t.type ? i(e, function (e) {
          var t = e.count,
            n = e.sizeType,
            _e$sourceType = e.sourceType,
            i = _e$sourceType === void 0 ? ["album", "camera"] : _e$sourceType,
            o = e.extension;
          return new Promise(function (e, a) {
            uni.chooseImage({
              count: t,
              sizeType: n,
              sourceType: i,
              extension: o,
              success: function success(t) {
                e(r(t, "image"));
              },
              fail: function fail(e) {
                a({
                  errMsg: e.errMsg.replace("chooseImage:fail", s)
                });
              }
            });
          });
        }(t), t) : "video" === t.type ? i(e, function (e) {
          var t = e.camera,
            n = e.compressed,
            i = e.maxDuration,
            _e$sourceType2 = e.sourceType,
            o = _e$sourceType2 === void 0 ? ["album", "camera"] : _e$sourceType2,
            a = e.extension;
          return new Promise(function (e, c) {
            uni.chooseVideo({
              camera: t,
              compressed: n,
              maxDuration: i,
              sourceType: o,
              extension: a,
              success: function success(t) {
                var n = t.tempFilePath,
                  s = t.duration,
                  i = t.size,
                  o = t.height,
                  a = t.width;
                e(r({
                  errMsg: "chooseVideo:ok",
                  tempFilePaths: [n],
                  tempFiles: [{
                    name: t.tempFile && t.tempFile.name || "",
                    path: n,
                    size: i,
                    type: t.tempFile && t.tempFile.type || "",
                    width: a,
                    height: o,
                    duration: s,
                    fileType: "video",
                    cloudPath: ""
                  }]
                }, "video"));
              },
              fail: function fail(e) {
                c({
                  errMsg: e.errMsg.replace("chooseVideo:fail", s)
                });
              }
            });
          });
        }(t), t) : i(e, function (e) {
          var t = e.count,
            n = e.extension;
          return new Promise(function (e, i) {
            var o = uni.chooseFile;
            if ("undefined" != typeof wx && "function" == typeof wx.chooseMessageFile && (o = wx.chooseMessageFile), "function" != typeof o) return i({
              errMsg: s + " 请指定 type 类型，该平台仅支持选择 image 或 video。"
            });
            o({
              type: "all",
              count: t,
              extension: n,
              success: function success(t) {
                e(r(t));
              },
              fail: function fail(e) {
                i({
                  errMsg: e.errMsg.replace("chooseFile:fail", s)
                });
              }
            });
          });
        }(t), t);
      };
    };
  }),
  nr = t(tr);
var sr = "manual";
function rr(e) {
  return {
    props: {
      localdata: {
        type: Array,
        default: function _default() {
          return [];
        }
      },
      options: {
        type: [Object, Array],
        default: function _default() {
          return {};
        }
      },
      spaceInfo: {
        type: Object,
        default: function _default() {
          return {};
        }
      },
      collection: {
        type: [String, Array],
        default: ""
      },
      action: {
        type: String,
        default: ""
      },
      field: {
        type: String,
        default: ""
      },
      orderby: {
        type: String,
        default: ""
      },
      where: {
        type: [String, Object],
        default: ""
      },
      pageData: {
        type: String,
        default: "add"
      },
      pageCurrent: {
        type: Number,
        default: 1
      },
      pageSize: {
        type: Number,
        default: 20
      },
      getcount: {
        type: [Boolean, String],
        default: !1
      },
      gettree: {
        type: [Boolean, String],
        default: !1
      },
      gettreepath: {
        type: [Boolean, String],
        default: !1
      },
      startwith: {
        type: String,
        default: ""
      },
      limitlevel: {
        type: Number,
        default: 10
      },
      groupby: {
        type: String,
        default: ""
      },
      groupField: {
        type: String,
        default: ""
      },
      distinct: {
        type: [Boolean, String],
        default: !1
      },
      foreignKey: {
        type: String,
        default: ""
      },
      loadtime: {
        type: String,
        default: "auto"
      },
      manual: {
        type: Boolean,
        default: !1
      }
    },
    data: function data() {
      return {
        mixinDatacomLoading: !1,
        mixinDatacomHasMore: !1,
        mixinDatacomResData: [],
        mixinDatacomErrorMessage: "",
        mixinDatacomPage: {},
        mixinDatacomError: null
      };
    },
    created: function created() {
      var _this25 = this;
      this.mixinDatacomPage = {
        current: this.pageCurrent,
        size: this.pageSize,
        count: 0
      }, this.$watch(function () {
        var e = [];
        return ["pageCurrent", "pageSize", "localdata", "collection", "action", "field", "orderby", "where", "getont", "getcount", "gettree", "groupby", "groupField", "distinct"].forEach(function (t) {
          e.push(_this25[t]);
        }), e;
      }, function (e, t) {
        if (_this25.loadtime === sr) return;
        var n = !1;
        var s = [];
        for (var _r10 = 2; _r10 < e.length; _r10++) {
          e[_r10] !== t[_r10] && (s.push(e[_r10]), n = !0);
        }
        e[0] !== t[0] && (_this25.mixinDatacomPage.current = _this25.pageCurrent), _this25.mixinDatacomPage.size = _this25.pageSize, _this25.onMixinDatacomPropsChange(n, s);
      });
    },
    methods: {
      onMixinDatacomPropsChange: function onMixinDatacomPropsChange(e, t) {},
      mixinDatacomEasyGet: function mixinDatacomEasyGet() {
        var _this26 = this;
        var _ref55 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          _ref55$getone = _ref55.getone,
          e = _ref55$getone === void 0 ? !1 : _ref55$getone,
          t = _ref55.success,
          n = _ref55.fail;
        this.mixinDatacomLoading || (this.mixinDatacomLoading = !0, this.mixinDatacomErrorMessage = "", this.mixinDatacomError = null, this.mixinDatacomGet().then(function (n) {
          _this26.mixinDatacomLoading = !1;
          var _n$result = n.result,
            s = _n$result.data,
            r = _n$result.count;
          _this26.getcount && (_this26.mixinDatacomPage.count = r), _this26.mixinDatacomHasMore = s.length < _this26.pageSize;
          var i = e ? s.length ? s[0] : void 0 : s;
          _this26.mixinDatacomResData = i, t && t(i);
        }).catch(function (e) {
          _this26.mixinDatacomLoading = !1, _this26.mixinDatacomErrorMessage = e, _this26.mixinDatacomError = e, n && n(e);
        }));
      },
      mixinDatacomGet: function mixinDatacomGet() {
        var _n18;
        var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        var n;
        t = t || {}, n = "undefined" != typeof __uniX && __uniX ? e.databaseForJQL(this.spaceInfo) : e.database(this.spaceInfo);
        var s = t.action || this.action;
        s && (n = n.action(s));
        var r = t.collection || this.collection;
        n = Array.isArray(r) ? (_n18 = n).collection.apply(_n18, (0, _toConsumableArray2.default)(r)) : n.collection(r);
        var i = t.where || this.where;
        i && Object.keys(i).length && (n = n.where(i));
        var o = t.field || this.field;
        o && (n = n.field(o));
        var a = t.foreignKey || this.foreignKey;
        a && (n = n.foreignKey(a));
        var c = t.groupby || this.groupby;
        c && (n = n.groupBy(c));
        var u = t.groupField || this.groupField;
        u && (n = n.groupField(u));
        !0 === (void 0 !== t.distinct ? t.distinct : this.distinct) && (n = n.distinct());
        var l = t.orderby || this.orderby;
        l && (n = n.orderBy(l));
        var h = void 0 !== t.pageCurrent ? t.pageCurrent : this.mixinDatacomPage.current,
          d = void 0 !== t.pageSize ? t.pageSize : this.mixinDatacomPage.size,
          p = void 0 !== t.getcount ? t.getcount : this.getcount,
          f = void 0 !== t.gettree ? t.gettree : this.gettree,
          g = void 0 !== t.gettreepath ? t.gettreepath : this.gettreepath,
          m = {
            getCount: p
          },
          y = {
            limitLevel: void 0 !== t.limitlevel ? t.limitlevel : this.limitlevel,
            startWith: void 0 !== t.startwith ? t.startwith : this.startwith
          };
        return f && (m.getTree = y), g && (m.getTreePath = y), n = n.skip(d * (h - 1)).limit(d).get(m), n;
      }
    }
  };
}
function ir(e) {
  return function (t) {
    var n = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    n = function (e) {
      var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      return e.customUI = t.customUI || e.customUI, e.parseSystemError = t.parseSystemError || e.parseSystemError, Object.assign(e.loadingOptions, t.loadingOptions), Object.assign(e.errorOptions, t.errorOptions), "object" == (0, _typeof2.default)(t.secretMethods) && (e.secretMethods = t.secretMethods), e;
    }({
      customUI: !1,
      loadingOptions: {
        title: "加载中...",
        mask: !0
      },
      errorOptions: {
        type: "modal",
        retry: !1
      }
    }, n);
    var _n19 = n,
      s = _n19.customUI,
      r = _n19.loadingOptions,
      i = _n19.errorOptions,
      o = _n19.parseSystemError,
      a = !s;
    return new Proxy({}, {
      get: function get(s, c) {
        switch (c) {
          case "toString":
            return "[object UniCloudObject]";
          case "toJSON":
            return {};
        }
        return function () {
          var _ref56 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
            e = _ref56.fn,
            t = _ref56.interceptorName,
            n = _ref56.getCallbackArgs;
          return /*#__PURE__*/(0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee64() {
            var _len2,
              s,
              _key2,
              r,
              i,
              o,
              _args = arguments;
            return _regenerator.default.wrap(function _callee64$(_context64) {
              while (1) {
                switch (_context64.prev = _context64.next) {
                  case 0:
                    for (_len2 = _args.length, s = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
                      s[_key2] = _args[_key2];
                    }
                    r = n ? n({
                      params: s
                    }) : {};
                    _context64.prev = 2;
                    _context64.next = 5;
                    return F(K(t, "invoke"), _objectSpread({}, r));
                  case 5:
                    _context64.next = 7;
                    return e.apply(void 0, s);
                  case 7:
                    i = _context64.sent;
                    _context64.next = 10;
                    return F(K(t, "success"), _objectSpread(_objectSpread({}, r), {}, {
                      result: i
                    }));
                  case 10:
                    return _context64.abrupt("return", i);
                  case 13:
                    _context64.prev = 13;
                    _context64.t0 = _context64["catch"](2);
                    o = _context64.t0;
                    _context64.next = 18;
                    return F(K(t, "fail"), _objectSpread(_objectSpread({}, r), {}, {
                      error: o
                    }));
                  case 18:
                    throw o;
                  case 19:
                    _context64.prev = 19;
                    _context64.next = 22;
                    return F(K(t, "complete"), o ? _objectSpread(_objectSpread({}, r), {}, {
                      error: o
                    }) : _objectSpread(_objectSpread({}, r), {}, {
                      result: i
                    }));
                  case 22:
                    return _context64.finish(19);
                  case 23:
                  case "end":
                    return _context64.stop();
                }
              }
            }, _callee64, null, [[2, 13, 19, 23]]);
          }));
        }({
          fn: function () {
            var _s18 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee66() {
              var h,
                _len3,
                l,
                _key3,
                d,
                p,
                _ref58,
                f,
                g,
                m,
                y,
                _e26,
                _yield,
                _t20,
                _n20,
                _args4 = arguments;
              return _regenerator.default.wrap(function _callee66$(_context66) {
                while (1) {
                  switch (_context66.prev = _context66.next) {
                    case 0:
                      a && uni.showLoading({
                        title: r.title,
                        mask: r.mask
                      });
                      for (_len3 = _args4.length, l = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
                        l[_key3] = _args4[_key3];
                      }
                      d = {
                        name: t,
                        type: u,
                        data: {
                          method: c,
                          params: l
                        }
                      };
                      "object" == (0, _typeof2.default)(n.secretMethods) && function (e, t) {
                        var n = t.data.method,
                          s = e.secretMethods || {},
                          r = s[n] || s["*"];
                        r && (t.secretType = r);
                      }(n, d);
                      p = !1;
                      _context66.prev = 5;
                      _context66.next = 8;
                      return e.callFunction(d);
                    case 8:
                      h = _context66.sent;
                      _context66.next = 14;
                      break;
                    case 11:
                      _context66.prev = 11;
                      _context66.t0 = _context66["catch"](5);
                      p = !0, h = {
                        result: new re(_context66.t0)
                      };
                    case 14:
                      _ref58 = h.result || {}, f = _ref58.errSubject, g = _ref58.errCode, m = _ref58.errMsg, y = _ref58.newToken;
                      if (!(a && uni.hideLoading(), y && y.token && y.tokenExpired && (ae(y), Z(H, _objectSpread({}, y))), g)) {
                        _context66.next = 39;
                        break;
                      }
                      _e26 = m;
                      if (!(p && o)) {
                        _context66.next = 24;
                        break;
                      }
                      _context66.next = 20;
                      return o({
                        objectName: t,
                        methodName: c,
                        params: l,
                        errSubject: f,
                        errCode: g,
                        errMsg: m
                      });
                    case 20:
                      _context66.t1 = _context66.sent.errMsg;
                      if (_context66.t1) {
                        _context66.next = 23;
                        break;
                      }
                      _context66.t1 = m;
                    case 23:
                      _e26 = _context66.t1;
                    case 24:
                      if (!a) {
                        _context66.next = 37;
                        break;
                      }
                      if (!("toast" === i.type)) {
                        _context66.next = 29;
                        break;
                      }
                      uni.showToast({
                        title: _e26,
                        icon: "none"
                      });
                      _context66.next = 37;
                      break;
                    case 29:
                      if (!("modal" !== i.type)) {
                        _context66.next = 31;
                        break;
                      }
                      throw new Error("Invalid errorOptions.type: ".concat(i.type));
                    case 31:
                      _context66.next = 33;
                      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee65() {
                        var _ref60,
                          e,
                          t,
                          n,
                          s,
                          r,
                          _args2 = arguments;
                        return _regenerator.default.wrap(function _callee65$(_context65) {
                          while (1) {
                            switch (_context65.prev = _context65.next) {
                              case 0:
                                _ref60 = _args2.length > 0 && _args2[0] !== undefined ? _args2[0] : {}, e = _ref60.title, t = _ref60.content, n = _ref60.showCancel, s = _ref60.cancelText, r = _ref60.confirmText;
                                return _context65.abrupt("return", new Promise(function (i, o) {
                                  uni.showModal({
                                    title: e,
                                    content: t,
                                    showCancel: n,
                                    cancelText: s,
                                    confirmText: r,
                                    success: function success(e) {
                                      i(e);
                                    },
                                    fail: function fail() {
                                      i({
                                        confirm: !1,
                                        cancel: !0
                                      });
                                    }
                                  });
                                }));
                              case 2:
                              case "end":
                                return _context65.stop();
                            }
                          }
                        }, _callee65);
                      }))({
                        title: "提示",
                        content: _e26,
                        showCancel: i.retry,
                        cancelText: "取消",
                        confirmText: i.retry ? "重试" : "确定"
                      });
                    case 33:
                      _yield = _context66.sent;
                      _t20 = _yield.confirm;
                      if (!(i.retry && _t20)) {
                        _context66.next = 37;
                        break;
                      }
                      return _context66.abrupt("return", s.apply(void 0, l));
                    case 37:
                      _n20 = new re({
                        subject: f,
                        code: g,
                        message: m,
                        requestId: h.requestId
                      });
                      throw _n20.detail = h.result, Z(B, {
                        type: G,
                        content: _n20
                      }), _n20;
                    case 39:
                      return _context66.abrupt("return", (Z(B, {
                        type: G,
                        content: h.result
                      }), h.result));
                    case 40:
                    case "end":
                      return _context66.stop();
                  }
                }
              }, _callee66, null, [[5, 11]]);
            }));
            function s() {
              return _s18.apply(this, arguments);
            }
            return s;
          }(),
          interceptorName: "callObject",
          getCallbackArgs: function getCallbackArgs() {
            var _ref61 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
              e = _ref61.params;
            return {
              objectName: t,
              methodName: c,
              params: e
            };
          }
        });
      }
    });
  };
}
function or(e) {
  return U("_globalUniCloudSecureNetworkCache__{spaceId}".replace("{spaceId}", e.config.spaceId));
}
function ar() {
  return _ar.apply(this, arguments);
}
function _ar() {
  _ar = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee72() {
    var _ref72,
      e,
      _ref72$callLoginByWei,
      t,
      n,
      s,
      r,
      _args11 = arguments;
    return _regenerator.default.wrap(function _callee72$(_context72) {
      while (1) {
        switch (_context72.prev = _context72.next) {
          case 0:
            _ref72 = _args11.length > 0 && _args11[0] !== undefined ? _args11[0] : {}, e = _ref72.openid, _ref72$callLoginByWei = _ref72.callLoginByWeixin, t = _ref72$callLoginByWei === void 0 ? !1 : _ref72$callLoginByWei;
            n = or(this);
            if (!("mp-weixin" !== T)) {
              _context72.next = 4;
              break;
            }
            throw new Error("[SecureNetwork] API `initSecureNetworkByWeixin` is not supported on platform `".concat(T, "`"));
          case 4:
            if (!(e && t)) {
              _context72.next = 6;
              break;
            }
            throw new Error("[SecureNetwork] openid and callLoginByWeixin cannot be passed at the same time");
          case 6:
            if (!e) {
              _context72.next = 8;
              break;
            }
            return _context72.abrupt("return", (n.mpWeixinOpenid = e, {}));
          case 8:
            _context72.next = 10;
            return new Promise(function (e, t) {
              uni.login({
                success: function success(t) {
                  e(t.code);
                },
                fail: function fail(e) {
                  t(new Error(e.errMsg));
                }
              });
            });
          case 10:
            s = _context72.sent;
            r = this.importObject("uni-id-co", {
              customUI: !0
            });
            _context72.next = 14;
            return r.secureNetworkHandshakeByWeixin({
              code: s,
              callLoginByWeixin: t
            });
          case 14:
            n.mpWeixinCode = s;
            return _context72.abrupt("return", {
              code: s
            });
          case 16:
          case "end":
            return _context72.stop();
        }
      }
    }, _callee72, this);
  }));
  return _ar.apply(this, arguments);
}
function cr(_x52) {
  return _cr.apply(this, arguments);
}
function _cr() {
  _cr = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee73(e) {
    var t;
    return _regenerator.default.wrap(function _callee73$(_context73) {
      while (1) {
        switch (_context73.prev = _context73.next) {
          case 0:
            t = or(this);
            return _context73.abrupt("return", (t.initPromise || (t.initPromise = ar.call(this, e).then(function (e) {
              return e;
            }).catch(function (e) {
              throw delete t.initPromise, e;
            })), t.initPromise));
          case 2:
          case "end":
            return _context73.stop();
        }
      }
    }, _callee73, this);
  }));
  return _cr.apply(this, arguments);
}
function ur(e) {
  return function () {
    var _ref62 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      t = _ref62.openid,
      _ref62$callLoginByWei = _ref62.callLoginByWeixin,
      n = _ref62$callLoginByWei === void 0 ? !1 : _ref62$callLoginByWei;
    return cr.call(e, {
      openid: t,
      callLoginByWeixin: n
    });
  };
}
function lr(e) {
  !function (e) {
    de = e;
  }(e);
}
function hr(e) {
  var t = "mp-weixin" === T && wx.canIUse("getAppBaseInfo"),
    n = {
      getAppBaseInfo: t ? uni.getAppBaseInfo : uni.getSystemInfo,
      getPushClientId: uni.getPushClientId
    };
  return function (s) {
    return new Promise(function (r, i) {
      t && "getAppBaseInfo" === e ? r(n[e]()) : n[e](_objectSpread(_objectSpread({}, s), {}, {
        success: function success(e) {
          r(e);
        },
        fail: function fail(e) {
          i(e);
        }
      }));
    });
  };
}
var dr = /*#__PURE__*/function (_ref63) {
  (0, _inherits2.default)(dr, _ref63);
  var _super11 = _createSuper(dr);
  function dr() {
    var _this27;
    (0, _classCallCheck2.default)(this, dr);
    _this27 = _super11.call(this), _this27._uniPushMessageCallback = _this27._receivePushMessage.bind((0, _assertThisInitialized2.default)(_this27)), _this27._currentMessageId = -1, _this27._payloadQueue = [];
    return _this27;
  }
  (0, _createClass2.default)(dr, [{
    key: "init",
    value: function init() {
      var _this28 = this;
      return Promise.all([hr("getAppBaseInfo")(), hr("getPushClientId")()]).then(function () {
        var _ref64 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [],
          _ref65 = (0, _slicedToArray2.default)(_ref64, 2),
          _ref65$ = _ref65[0];
        _ref65$ = _ref65$ === void 0 ? {} : _ref65$;
        var e = _ref65$.appId,
          _ref65$2 = _ref65[1];
        _ref65$2 = _ref65$2 === void 0 ? {} : _ref65$2;
        var t = _ref65$2.cid;
        if (!e) throw new Error("Invalid appId, please check the manifest.json file");
        if (!t) throw new Error("Invalid push client id");
        _this28._appId = e, _this28._pushClientId = t, _this28._seqId = Date.now() + "-" + Math.floor(9e5 * Math.random() + 1e5), _this28.emit("open"), _this28._initMessageListener();
      }, function (e) {
        throw _this28.emit("error", e), _this28.close(), e;
      });
    }
  }, {
    key: "open",
    value: function () {
      var _open = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee67() {
        return _regenerator.default.wrap(function _callee67$(_context67) {
          while (1) {
            switch (_context67.prev = _context67.next) {
              case 0:
                return _context67.abrupt("return", this.init());
              case 1:
              case "end":
                return _context67.stop();
            }
          }
        }, _callee67, this);
      }));
      function open() {
        return _open.apply(this, arguments);
      }
      return open;
    }()
  }, {
    key: "_isUniCloudSSE",
    value: function _isUniCloudSSE(e) {
      if ("receive" !== e.type) return !1;
      var t = e && e.data && e.data.payload;
      return !(!t || "UNI_CLOUD_SSE" !== t.channel || t.seqId !== this._seqId);
    }
  }, {
    key: "_receivePushMessage",
    value: function _receivePushMessage(e) {
      if (!this._isUniCloudSSE(e)) return;
      var t = e && e.data && e.data.payload,
        n = t.action,
        s = t.messageId,
        r = t.message;
      this._payloadQueue.push({
        action: n,
        messageId: s,
        message: r
      }), this._consumMessage();
    }
  }, {
    key: "_consumMessage",
    value: function _consumMessage() {
      var _this29 = this;
      for (;;) {
        var _e27 = this._payloadQueue.find(function (e) {
          return e.messageId === _this29._currentMessageId + 1;
        });
        if (!_e27) break;
        this._currentMessageId++, this._parseMessagePayload(_e27);
      }
    }
  }, {
    key: "_parseMessagePayload",
    value: function _parseMessagePayload(e) {
      var t = e.action,
        n = e.messageId,
        s = e.message;
      "end" === t ? this._end({
        messageId: n,
        message: s
      }) : "message" === t && this._appendMessage({
        messageId: n,
        message: s
      });
    }
  }, {
    key: "_appendMessage",
    value: function _appendMessage() {
      var _ref66 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        e = _ref66.messageId,
        t = _ref66.message;
      this.emit("message", t);
    }
  }, {
    key: "_end",
    value: function _end() {
      var _ref67 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        e = _ref67.messageId,
        t = _ref67.message;
      this.emit("end", t), this.close();
    }
  }, {
    key: "_initMessageListener",
    value: function _initMessageListener() {
      uni.onPushMessage(this._uniPushMessageCallback);
    }
  }, {
    key: "_destroy",
    value: function _destroy() {
      uni.offPushMessage(this._uniPushMessageCallback);
    }
  }, {
    key: "toJSON",
    value: function toJSON() {
      return {
        appId: this._appId,
        pushClientId: this._pushClientId,
        seqId: this._seqId
      };
    }
  }, {
    key: "close",
    value: function close() {
      this._destroy(), this.emit("close");
    }
  }]);
  return dr;
}( /*#__PURE__*/function () {
  function _class6() {
    (0, _classCallCheck2.default)(this, _class6);
    this._callback = {};
  }
  (0, _createClass2.default)(_class6, [{
    key: "addListener",
    value: function addListener(e, t) {
      this._callback[e] || (this._callback[e] = []), this._callback[e].push(t);
    }
  }, {
    key: "on",
    value: function on(e, t) {
      return this.addListener(e, t);
    }
  }, {
    key: "removeListener",
    value: function removeListener(e, t) {
      if (!t) throw new Error('The "listener" argument must be of type function. Received undefined');
      var n = this._callback[e];
      if (!n) return;
      var s = function (e, t) {
        for (var _n21 = e.length - 1; _n21 >= 0; _n21--) {
          if (e[_n21] === t) return _n21;
        }
        return -1;
      }(n, t);
      n.splice(s, 1);
    }
  }, {
    key: "off",
    value: function off(e, t) {
      return this.removeListener(e, t);
    }
  }, {
    key: "removeAllListener",
    value: function removeAllListener(e) {
      delete this._callback[e];
    }
  }, {
    key: "emit",
    value: function emit(e) {
      var n = this._callback[e];
      for (var _len4 = arguments.length, t = new Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++) {
        t[_key4 - 1] = arguments[_key4];
      }
      if (n) for (var _e28 = 0; _e28 < n.length; _e28++) {
        n[_e28].apply(n, t);
      }
    }
  }]);
  return _class6;
}());
function pr(_x53) {
  return _pr.apply(this, arguments);
}
function _pr() {
  _pr = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee74(e) {
    var _le2, _e34, _t22, t, _t$debugInfo, n, s, _yield$xt2, r, i, o;
    return _regenerator.default.wrap(function _callee74$(_context74) {
      while (1) {
        switch (_context74.prev = _context74.next) {
          case 0:
            if (S) {
              _context74.next = 2;
              break;
            }
            return _context74.abrupt("return", Promise.resolve());
          case 2:
            if ("app" === T) {
              _le2 = le(), _e34 = _le2.osName, _t22 = _le2.osVersion;
              "ios" === _e34 && function (e) {
                if (!e || "string" != typeof e) return 0;
                var t = e.match(/^(\d+)./);
                return t && t[1] ? parseInt(t[1]) : 0;
              }(_t22) >= 14 && console.warn("iOS 14及以上版本连接uniCloud本地调试服务需要允许客户端查找并连接到本地网络上的设备（仅开发期间需要，发行后不需要）");
            }
            t = e.__dev__;
            if (t.debugInfo) {
              _context74.next = 6;
              break;
            }
            return _context74.abrupt("return");
          case 6:
            _t$debugInfo = t.debugInfo;
            n = _t$debugInfo.address;
            s = _t$debugInfo.servePort;
            _context74.next = 11;
            return xt(n, s);
          case 11:
            _yield$xt2 = _context74.sent;
            r = _yield$xt2.address;
            if (!r) {
              _context74.next = 15;
              break;
            }
            return _context74.abrupt("return", (t.localAddress = r, void (t.localPort = s)));
          case 15:
            i = console["app" === T ? "error" : "warn"];
            o = "";
            if (!("remote" === t.debugInfo.initialLaunchType ? (t.debugInfo.forceRemote = !0, o = "当前客户端和HBuilderX不在同一局域网下（或其他网络原因无法连接HBuilderX），uniCloud本地调试服务不对当前客户端生效。\n- 如果不使用uniCloud本地调试服务，请直接忽略此信息。\n- 如需使用uniCloud本地调试服务，请将客户端与主机连接到同一局域网下并重新运行到客户端。") : o = "无法连接uniCloud本地调试服务，请检查当前客户端是否与主机在同一局域网下。\n- 如需使用uniCloud本地调试服务，请将客户端与主机连接到同一局域网下并重新运行到客户端。", o += "\n- 如果在HBuilderX开启的状态下切换过网络环境，请重启HBuilderX后再试\n- 检查系统防火墙是否拦截了HBuilderX自带的nodejs\n- 检查是否错误的使用拦截器修改uni.request方法的参数", "web" === T && (o += "\n- 部分浏览器开启节流模式之后访问本地地址受限，请检查是否启用了节流模式"), 0 === T.indexOf("mp-") && (o += "\n- 小程序中如何使用uniCloud，请参考：https://uniapp.dcloud.net.cn/uniCloud/publish.html#useinmp"), !t.debugInfo.forceRemote)) {
              _context74.next = 19;
              break;
            }
            throw new Error(o);
          case 19:
            i(o);
          case 20:
          case "end":
            return _context74.stop();
        }
      }
    }, _callee74);
  }));
  return _pr.apply(this, arguments);
}
function fr(e) {
  e._initPromiseHub || (e._initPromiseHub = new v({
    createPromise: function createPromise() {
      var t = Promise.resolve();
      var n;
      n = 1, t = new Promise(function (e) {
        setTimeout(function () {
          e();
        }, n);
      });
      var s = e.auth();
      return t.then(function () {
        return s.getLoginState();
      }).then(function (e) {
        return e ? Promise.resolve() : s.signInAnonymously();
      });
    }
  }));
}
var gr = {
  tcb: Ot,
  tencent: Ot,
  aliyun: me,
  private: Rt,
  dcloud: Rt,
  alipay: Ht
};
var mr = new ( /*#__PURE__*/function () {
  function _class7() {
    (0, _classCallCheck2.default)(this, _class7);
  }
  (0, _createClass2.default)(_class7, [{
    key: "init",
    value: function init(e) {
      var t = {};
      var n = gr[e.provider];
      if (!n) throw new Error("未提供正确的provider参数");
      t = n.init(e), S && function (e) {
        if (!S) return;
        var t = {};
        e.__dev__ = t, t.debugLog = S && ("web" === T && navigator.userAgent.indexOf("HBuilderX") > 0 || "app" === T || "mp-harmony" === T);
        var n = C;
        n && !n.code && (t.debugInfo = n);
        var s = new v({
          createPromise: function createPromise() {
            return pr(e);
          }
        });
        t.initLocalNetwork = function () {
          return s.exec();
        };
      }(t), fr(t), us(t), function (e) {
        var t = e.uploadFile;
        e.uploadFile = function (e) {
          return t.call(this, e);
        };
      }(t), function (e) {
        e.database = function (t) {
          if (t && Object.keys(t).length > 0) return e.init(t).database();
          if (this._database) return this._database;
          var n = vs(Is, {
            uniClient: e
          });
          return this._database = n, n;
        }, e.databaseForJQL = function (t) {
          if (t && Object.keys(t).length > 0) return e.init(t).databaseForJQL();
          if (this._databaseForJQL) return this._databaseForJQL;
          var n = vs(Is, {
            uniClient: e,
            isJQL: !0
          });
          return this._databaseForJQL = n, n;
        };
      }(t), function (e) {
        e.getCurrentUserInfo = er, e.chooseAndUploadFile = nr.initChooseAndUploadFile(e), Object.assign(e, {
          get mixinDatacom() {
            return rr(e);
          }
        }), e.SSEChannel = dr, e.initSecureNetworkByWeixin = ur(e), e.setCustomClientInfo = lr, e.importObject = ir(e);
      }(t);
      return ["callFunction", "uploadFile", "deleteFile", "getTempFileURL", "downloadFile", "chooseAndUploadFile"].forEach(function (e) {
        if (!t[e]) return;
        var n = t[e];
        t[e] = function () {
          return n.apply(t, Array.from(arguments));
        }, t[e] = function (e, t) {
          return function (n) {
            var _this30 = this;
            var s = !1;
            if ("callFunction" === t) {
              var _e29 = n && n.type || c;
              s = _e29 !== c;
            }
            var r = "callFunction" === t && !s,
              i = this._initPromiseHub.exec();
            n = n || {};
            var _se2 = se(n),
              o = _se2.success,
              a = _se2.fail,
              u = _se2.complete,
              l = i.then(function () {
                return s ? Promise.resolve() : F(K(t, "invoke"), n);
              }).then(function () {
                return e.call(_this30, n);
              }).then(function (e) {
                return s ? Promise.resolve(e) : F(K(t, "success"), e).then(function () {
                  return F(K(t, "complete"), e);
                }).then(function () {
                  return r && Z(B, {
                    type: V,
                    content: e
                  }), Promise.resolve(e);
                });
              }, function (e) {
                return s ? Promise.reject(e) : F(K(t, "fail"), e).then(function () {
                  return F(K(t, "complete"), e);
                }).then(function () {
                  return Z(B, {
                    type: V,
                    content: e
                  }), Promise.reject(e);
                });
              });
            if (!(o || a || u)) return l;
            l.then(function (e) {
              o && o(e), u && u(e), r && Z(B, {
                type: V,
                content: e
              });
            }, function (e) {
              a && a(e), u && u(e), r && Z(B, {
                type: V,
                content: e
              });
            });
          };
        }(t[e], e).bind(t);
      }), t.init = this.init, t;
    }
  }]);
  return _class7;
}())();
exports.uniCloud = mr;
(function () {
  var e = Array.isArray(P) ? P.length : 0,
    t = function () {
      var e = Yt(),
        t = Zt();
      return t && t.enable && g(t.space) ? t.space : e;
    }();
  if (1 === e) exports.uniCloud = mr = mr.init(t), mr._isDefault = !0;else {
    var _t21 = ["database", "getCurrentUserInfo", "importObject"];
    var _n22;
    _n22 = e > 0 ? "应用有多个服务空间，请通过uniCloud.init方法指定要使用的服务空间" : O ? "应用未关联服务空间，请在uniCloud目录右键关联服务空间" : "uni-app cli项目内使用uniCloud需要使用HBuilderX的运行菜单运行项目，且需要在uniCloud目录关联服务空间", ["auth", "callFunction", "uploadFile", "deleteFile", "getTempFileURL", "downloadFile"].concat(_t21).forEach(function (e) {
      mr[e] = function () {
        if (console.error(_n22), -1 === _t21.indexOf(e)) return Promise.reject(new re({
          code: "SYS_ERR",
          message: _n22
        }));
        console.error(_n22);
      };
    });
  }
  if (Object.assign(mr, {
    get mixinDatacom() {
      return rr(mr);
    }
  }), Qs(mr), mr.addInterceptor = M, mr.removeInterceptor = q, mr.interceptObject = j, S && "web" === T && (window.uniCloud = mr), "app" === T && (uni.__uniCloud = mr), "app" === T || "web" === T) {
    var _e30 = R();
    _e30.uniCloud = mr, _e30.UniCloudError = re;
  }
  !function () {
    var _Yt = Yt(),
      e = _Yt.failoverEndpoint;
    if (!e) return;
    nn().catch(function (e) {
      console.error("请求故障切换配置失败：", e);
    });
    var t = {
      fail: function fail() {
        var e = Zt();
        tn(e && e.interval || 0) && nn().catch(function (e) {
          console.error("请求故障切换配置失败：", e);
        });
      }
    };
    M("callFunction", t), M("database", t), M("uploadFile", t);
  }();
})();
var yr = mr;
exports.default = yr;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/uni-app-plus-nvue/dist/require-native-plugin.js */ 142)["default"]))

/***/ }),
/* 178 */
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ 137);
// TODO(Babel 8): Remove this file.

var runtime = __webpack_require__(/*! ../helpers/regeneratorRuntime */ 179)();
module.exports = runtime;

// Copied from https://github.com/facebook/regenerator/blob/main/packages/runtime/runtime.js#L736=
try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  if ((typeof globalThis === "undefined" ? "undefined" : _typeof(globalThis)) === "object") {
    globalThis.regeneratorRuntime = runtime;
  } else {
    Function("r", "regeneratorRuntime = r")(runtime);
  }
}

/***/ }),
/* 179 */
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/regeneratorRuntime.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ./typeof.js */ 137)["default"];
function _regeneratorRuntime() {
  "use strict";

  /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
  module.exports = _regeneratorRuntime = function _regeneratorRuntime() {
    return e;
  }, module.exports.__esModule = true, module.exports["default"] = module.exports;
  var t,
    e = {},
    r = Object.prototype,
    n = r.hasOwnProperty,
    o = Object.defineProperty || function (t, e, r) {
      t[e] = r.value;
    },
    i = "function" == typeof Symbol ? Symbol : {},
    a = i.iterator || "@@iterator",
    c = i.asyncIterator || "@@asyncIterator",
    u = i.toStringTag || "@@toStringTag";
  function define(t, e, r) {
    return Object.defineProperty(t, e, {
      value: r,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }), t[e];
  }
  try {
    define({}, "");
  } catch (t) {
    define = function define(t, e, r) {
      return t[e] = r;
    };
  }
  function wrap(t, e, r, n) {
    var i = e && e.prototype instanceof Generator ? e : Generator,
      a = Object.create(i.prototype),
      c = new Context(n || []);
    return o(a, "_invoke", {
      value: makeInvokeMethod(t, r, c)
    }), a;
  }
  function tryCatch(t, e, r) {
    try {
      return {
        type: "normal",
        arg: t.call(e, r)
      };
    } catch (t) {
      return {
        type: "throw",
        arg: t
      };
    }
  }
  e.wrap = wrap;
  var h = "suspendedStart",
    l = "suspendedYield",
    f = "executing",
    s = "completed",
    y = {};
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}
  var p = {};
  define(p, a, function () {
    return this;
  });
  var d = Object.getPrototypeOf,
    v = d && d(d(values([])));
  v && v !== r && n.call(v, a) && (p = v);
  var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p);
  function defineIteratorMethods(t) {
    ["next", "throw", "return"].forEach(function (e) {
      define(t, e, function (t) {
        return this._invoke(e, t);
      });
    });
  }
  function AsyncIterator(t, e) {
    function invoke(r, o, i, a) {
      var c = tryCatch(t[r], t, o);
      if ("throw" !== c.type) {
        var u = c.arg,
          h = u.value;
        return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) {
          invoke("next", t, i, a);
        }, function (t) {
          invoke("throw", t, i, a);
        }) : e.resolve(h).then(function (t) {
          u.value = t, i(u);
        }, function (t) {
          return invoke("throw", t, i, a);
        });
      }
      a(c.arg);
    }
    var r;
    o(this, "_invoke", {
      value: function value(t, n) {
        function callInvokeWithMethodAndArg() {
          return new e(function (e, r) {
            invoke(t, n, e, r);
          });
        }
        return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
      }
    });
  }
  function makeInvokeMethod(e, r, n) {
    var o = h;
    return function (i, a) {
      if (o === f) throw Error("Generator is already running");
      if (o === s) {
        if ("throw" === i) throw a;
        return {
          value: t,
          done: !0
        };
      }
      for (n.method = i, n.arg = a;;) {
        var c = n.delegate;
        if (c) {
          var u = maybeInvokeDelegate(c, n);
          if (u) {
            if (u === y) continue;
            return u;
          }
        }
        if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) {
          if (o === h) throw o = s, n.arg;
          n.dispatchException(n.arg);
        } else "return" === n.method && n.abrupt("return", n.arg);
        o = f;
        var p = tryCatch(e, r, n);
        if ("normal" === p.type) {
          if (o = n.done ? s : l, p.arg === y) continue;
          return {
            value: p.arg,
            done: n.done
          };
        }
        "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg);
      }
    };
  }
  function maybeInvokeDelegate(e, r) {
    var n = r.method,
      o = e.iterator[n];
    if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y;
    var i = tryCatch(o, e.iterator, r.arg);
    if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y;
    var a = i.arg;
    return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y);
  }
  function pushTryEntry(t) {
    var e = {
      tryLoc: t[0]
    };
    1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e);
  }
  function resetTryEntry(t) {
    var e = t.completion || {};
    e.type = "normal", delete e.arg, t.completion = e;
  }
  function Context(t) {
    this.tryEntries = [{
      tryLoc: "root"
    }], t.forEach(pushTryEntry, this), this.reset(!0);
  }
  function values(e) {
    if (e || "" === e) {
      var r = e[a];
      if (r) return r.call(e);
      if ("function" == typeof e.next) return e;
      if (!isNaN(e.length)) {
        var o = -1,
          i = function next() {
            for (; ++o < e.length;) {
              if (n.call(e, o)) return next.value = e[o], next.done = !1, next;
            }
            return next.value = t, next.done = !0, next;
          };
        return i.next = i;
      }
    }
    throw new TypeError(_typeof(e) + " is not iterable");
  }
  return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", {
    value: GeneratorFunctionPrototype,
    configurable: !0
  }), o(GeneratorFunctionPrototype, "constructor", {
    value: GeneratorFunction,
    configurable: !0
  }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) {
    var e = "function" == typeof t && t.constructor;
    return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name));
  }, e.mark = function (t) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t;
  }, e.awrap = function (t) {
    return {
      __await: t
    };
  }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () {
    return this;
  }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) {
    void 0 === i && (i = Promise);
    var a = new AsyncIterator(wrap(t, r, n, o), i);
    return e.isGeneratorFunction(r) ? a : a.next().then(function (t) {
      return t.done ? t.value : a.next();
    });
  }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () {
    return this;
  }), define(g, "toString", function () {
    return "[object Generator]";
  }), e.keys = function (t) {
    var e = Object(t),
      r = [];
    for (var n in e) {
      r.push(n);
    }
    return r.reverse(), function next() {
      for (; r.length;) {
        var t = r.pop();
        if (t in e) return next.value = t, next.done = !1, next;
      }
      return next.done = !0, next;
    };
  }, e.values = values, Context.prototype = {
    constructor: Context,
    reset: function reset(e) {
      if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) {
        "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t);
      }
    },
    stop: function stop() {
      this.done = !0;
      var t = this.tryEntries[0].completion;
      if ("throw" === t.type) throw t.arg;
      return this.rval;
    },
    dispatchException: function dispatchException(e) {
      if (this.done) throw e;
      var r = this;
      function handle(n, o) {
        return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o;
      }
      for (var o = this.tryEntries.length - 1; o >= 0; --o) {
        var i = this.tryEntries[o],
          a = i.completion;
        if ("root" === i.tryLoc) return handle("end");
        if (i.tryLoc <= this.prev) {
          var c = n.call(i, "catchLoc"),
            u = n.call(i, "finallyLoc");
          if (c && u) {
            if (this.prev < i.catchLoc) return handle(i.catchLoc, !0);
            if (this.prev < i.finallyLoc) return handle(i.finallyLoc);
          } else if (c) {
            if (this.prev < i.catchLoc) return handle(i.catchLoc, !0);
          } else {
            if (!u) throw Error("try statement without catch or finally");
            if (this.prev < i.finallyLoc) return handle(i.finallyLoc);
          }
        }
      }
    },
    abrupt: function abrupt(t, e) {
      for (var r = this.tryEntries.length - 1; r >= 0; --r) {
        var o = this.tryEntries[r];
        if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
          var i = o;
          break;
        }
      }
      i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null);
      var a = i ? i.completion : {};
      return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a);
    },
    complete: function complete(t, e) {
      if ("throw" === t.type) throw t.arg;
      return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y;
    },
    finish: function finish(t) {
      for (var e = this.tryEntries.length - 1; e >= 0; --e) {
        var r = this.tryEntries[e];
        if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y;
      }
    },
    "catch": function _catch(t) {
      for (var e = this.tryEntries.length - 1; e >= 0; --e) {
        var r = this.tryEntries[e];
        if (r.tryLoc === t) {
          var n = r.completion;
          if ("throw" === n.type) {
            var o = n.arg;
            resetTryEntry(r);
          }
          return o;
        }
      }
      throw Error("illegal catch attempt");
    },
    delegateYield: function delegateYield(e, r, n) {
      return this.delegate = {
        iterator: values(e),
        resultName: r,
        nextLoc: n
      }, "next" === this.method && (this.arg = t), y;
    }
  }, e;
}
module.exports = _regeneratorRuntime, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 180 */
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/assertThisInitialized.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self;
}
module.exports = _assertThisInitialized, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 181 */
/*!**************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/slicedToArray.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithHoles = __webpack_require__(/*! ./arrayWithHoles.js */ 182);
var iterableToArrayLimit = __webpack_require__(/*! ./iterableToArrayLimit.js */ 183);
var unsupportedIterableToArray = __webpack_require__(/*! ./unsupportedIterableToArray.js */ 135);
var nonIterableRest = __webpack_require__(/*! ./nonIterableRest.js */ 184);
function _slicedToArray(arr, i) {
  return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || unsupportedIterableToArray(arr, i) || nonIterableRest();
}
module.exports = _slicedToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 182 */
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayWithHoles.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}
module.exports = _arrayWithHoles, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 183 */
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _iterableToArrayLimit(r, l) {
  var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (null != t) {
    var e,
      n,
      i,
      u,
      a = [],
      f = !0,
      o = !1;
    try {
      if (i = (t = t.call(r)).next, 0 === l) {
        if (Object(t) !== t) return;
        f = !1;
      } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0) {
        ;
      }
    } catch (r) {
      o = !0, n = r;
    } finally {
      try {
        if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return;
      } finally {
        if (o) throw n;
      }
    }
    return a;
  }
}
module.exports = _iterableToArrayLimit, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 184 */
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/nonIterableRest.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
module.exports = _nonIterableRest, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 185 */
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/asyncToGenerator.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }
  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}
function _asyncToGenerator(fn) {
  return function () {
    var self = this,
      args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);
      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }
      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }
      _next(undefined);
    });
  };
}
module.exports = _asyncToGenerator, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 186 */
/*!*********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/inherits.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf.js */ 187);
function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  Object.defineProperty(subClass, "prototype", {
    writable: false
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}
module.exports = _inherits, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 187 */
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/setPrototypeOf.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  }, module.exports.__esModule = true, module.exports["default"] = module.exports;
  return _setPrototypeOf(o, p);
}
module.exports = _setPrototypeOf, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 188 */
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ./typeof.js */ 137)["default"];
var assertThisInitialized = __webpack_require__(/*! ./assertThisInitialized.js */ 180);
function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }
  return assertThisInitialized(self);
}
module.exports = _possibleConstructorReturn, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 189 */
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/getPrototypeOf.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  }, module.exports.__esModule = true, module.exports["default"] = module.exports;
  return _getPrototypeOf(o);
}
module.exports = _getPrototypeOf, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 190 */
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/wrapNativeSuper.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getPrototypeOf = __webpack_require__(/*! ./getPrototypeOf.js */ 189);
var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf.js */ 187);
var isNativeFunction = __webpack_require__(/*! ./isNativeFunction.js */ 191);
var construct = __webpack_require__(/*! ./construct.js */ 192);
function _wrapNativeSuper(Class) {
  var _cache = typeof Map === "function" ? new Map() : undefined;
  module.exports = _wrapNativeSuper = function _wrapNativeSuper(Class) {
    if (Class === null || !isNativeFunction(Class)) return Class;
    if (typeof Class !== "function") {
      throw new TypeError("Super expression must either be null or a function");
    }
    if (typeof _cache !== "undefined") {
      if (_cache.has(Class)) return _cache.get(Class);
      _cache.set(Class, Wrapper);
    }
    function Wrapper() {
      return construct(Class, arguments, getPrototypeOf(this).constructor);
    }
    Wrapper.prototype = Object.create(Class.prototype, {
      constructor: {
        value: Wrapper,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    return setPrototypeOf(Wrapper, Class);
  }, module.exports.__esModule = true, module.exports["default"] = module.exports;
  return _wrapNativeSuper(Class);
}
module.exports = _wrapNativeSuper, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 191 */
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/isNativeFunction.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _isNativeFunction(fn) {
  try {
    return Function.toString.call(fn).indexOf("[native code]") !== -1;
  } catch (e) {
    return typeof fn === "function";
  }
}
module.exports = _isNativeFunction, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 192 */
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/construct.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf.js */ 187);
var isNativeReflectConstruct = __webpack_require__(/*! ./isNativeReflectConstruct.js */ 193);
function _construct(t, e, r) {
  if (isNativeReflectConstruct()) return Reflect.construct.apply(null, arguments);
  var o = [null];
  o.push.apply(o, e);
  var p = new (t.bind.apply(t, o))();
  return r && setPrototypeOf(p, r.prototype), p;
}
module.exports = _construct, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 193 */
/*!*************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/isNativeReflectConstruct.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _isNativeReflectConstruct() {
  try {
    var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch (t) {}
  return (module.exports = _isNativeReflectConstruct = function _isNativeReflectConstruct() {
    return !!t;
  }, module.exports.__esModule = true, module.exports["default"] = module.exports)();
}
module.exports = _isNativeReflectConstruct, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 194 */
/*!***********************************************************************************************!*\
  !*** C:/Users/TAOER/Desktop/ShayuVideo/ShayuVideoAPP/pages.json?{"type":"origin-pages-json"} ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"pages":[{"path":"pages/index/index","style":{"app-plus":{"titleNView":false},"enablePullDownRefresh":true},"nvue":true},{"path":"pages/friend/friend","style":{"app-plus":{"titleNView":false}},"nvue":true},{"path":"pages/vlog/vlog","style":{"app-plus":{"titleNView":false}},"nvue":true},{"path":"pages/publish/publish","style":{"navigationBarTitleText":"发布视频"},"nvue":true},{"path":"pages/me/me","style":{"app-plus":{"titleNView":false}},"nvue":true},{"path":"pages/me/vlogerInfo","style":{"app-plus":{"titleNView":false}},"nvue":true},{"path":"pages/message/message","style":{"navigationBarTitleText":"消息","navigationBarBackgroundColor":"#181b27"},"nvue":true},{"path":"pages/publish/preview","style":{"navigationBarTitleText":"预览视频","enablePullDownRefresh":false},"nvue":true},{"path":"pages/search/search","style":{"app-plus":{"titleNView":false}}},{"path":"pages/search/searchList","style":{"app-plus":{"titleNView":false}},"nvue":true},{"path":"pages/qrcode/qrcode","style":{"app-plus":{"titleNView":false,"navigationBarTextStyle":"black"}}},{"path":"pages/loginRegist/loginRegist","style":{"app-plus":{"titleNView":false,"navigationBarTextStyle":"black"}}},{"path":"pages/me/myBackImg","style":{"app-plus":{"titleNView":false}}},{"path":"pages/me/myFace","style":{"app-plus":{"titleNView":false}}},{"path":"pages/me/myInfo","style":{"navigationBarTitleText":"修改个人资料","navigationBarBackgroundColor":"#181b27"},"nvue":true},{"path":"pages/me/modifyNickname","style":{"navigationBarTitleText":"修改昵称","navigationBarTextStyle":"white","navigationBarBackgroundColor":"#181b27","app-plus":{"titleNView":{"buttons":[{"text":"保存","color":"#ef274d","width":"60px","fontSize":"15px","fontWeight":"bold"}]}}},"nvue":true},{"path":"pages/me/modifyVIdeoNum","style":{"navigationBarTitleText":"修改视频号","navigationBarTextStyle":"white","navigationBarBackgroundColor":"#181b27","app-plus":{"titleNView":{"buttons":[{"text":"保存","color":"#ef274d","width":"60px","fontSize":"15px","fontWeight":"bold"}]}}},"nvue":true},{"path":"pages/me/modifyDesc","style":{"navigationBarTitleText":"修改简介","navigationBarTextStyle":"white","navigationBarBackgroundColor":"#181b27","app-plus":{"titleNView":{"buttons":[{"text":"保存","color":"#ef274d","width":"60px","fontSize":"15px","fontWeight":"bold"}]}}},"nvue":true},{"path":"pages/me/modifySex","style":{"navigationBarTitleText":"修改性别","navigationBarTextStyle":"white","navigationBarBackgroundColor":"#181b27","app-plus":{"titleNView":{"buttons":[{"text":"保存","color":"#ef274d","width":"60px","fontSize":"15px","fontWeight":"bold"}]}}},"nvue":true},{"path":"pages/me/modifyBirthday","style":{"navigationBarTitleText":"修改生日","navigationBarTextStyle":"white","navigationBarBackgroundColor":"#181b27","app-plus":{"titleNView":{"buttons":[{"text":"保存","color":"#ef274d","width":"60px","fontSize":"15px","fontWeight":"bold"}]}}},"nvue":true},{"path":"pages/me/modifyLocation","style":{"navigationBarTitleText":"修改所在地","navigationBarTextStyle":"white","navigationBarBackgroundColor":"#181b27","app-plus":{"titleNView":{"buttons":[{"text":"保存","color":"#ef274d","width":"60px","fontSize":"15px","fontWeight":"bold"}]}}},"nvue":true},{"path":"pages/me/chooseProvince","style":{"navigationBarTitleText":"选择省份","navigationBarTextStyle":"white","navigationBarBackgroundColor":"#181b27"},"nvue":true},{"path":"pages/me/chooseCity","style":{"navigationBarTitleText":"选择地区","navigationBarTextStyle":"white","navigationBarBackgroundColor":"#181b27"},"nvue":true},{"path":"pages/me/settings","style":{"navigationBarTitleText":"设置","navigationBarTextStyle":"white","navigationBarBackgroundColor":"#181b27"},"nvue":true},{"path":"pages/me/myFans","style":{"navigationBarTitleText":"我的粉丝","navigationBarTextStyle":"white","navigationBarBackgroundColor":"#181b27"},"nvue":true},{"path":"pages/me/myFollows","style":{"navigationBarTitleText":"我的关注","navigationBarTextStyle":"white","navigationBarBackgroundColor":"#181b27"},"nvue":true}],"globalStyle":{"navigationBarBackgroundColor":"#000000","navigationBarTextStyle":"white","navigationBarTitleText":"uni-app","backgroundColor":"#000000"},"tabBar":{"color":"#999696","selectedColor":"#FFFFFF","borderStyle":"#1c1b1b","backgroundColor":"#0e0d0d","fontSize":"16px","list":[{"pagePath":"pages/index/index","text":"首页"},{"pagePath":"pages/friend/friend","text":"朋友"},{"pagePath":"pages/message/message","text":"消息"},{"pagePath":"pages/me/me","text":"我"}],"midButton":{"height":"38px","iconWidth":"40px","iconPath":"static/images/douyin.png"}},"nvue":{"pages":[{"path":"pages/me/myFollows.html","style":{"navigationBarTitleText":"我的关注","navigationBarTextStyle":"white","navigationBarBackgroundColor":"#181b27"}},{"path":"pages/me/myFans.html","style":{"navigationBarTitleText":"我的粉丝","navigationBarTextStyle":"white","navigationBarBackgroundColor":"#181b27"}},{"path":"pages/me/settings.html","style":{"navigationBarTitleText":"设置","navigationBarTextStyle":"white","navigationBarBackgroundColor":"#181b27"}},{"path":"pages/me/chooseCity.html","style":{"navigationBarTitleText":"选择地区","navigationBarTextStyle":"white","navigationBarBackgroundColor":"#181b27"}},{"path":"pages/me/chooseProvince.html","style":{"navigationBarTitleText":"选择省份","navigationBarTextStyle":"white","navigationBarBackgroundColor":"#181b27"}},{"path":"pages/me/modifyLocation.html","style":{"navigationBarTitleText":"修改所在地","navigationBarTextStyle":"white","navigationBarBackgroundColor":"#181b27","app-plus":{"titleNView":{"buttons":[{"text":"保存","color":"#ef274d","width":"60px","fontSize":"15px","fontWeight":"bold"}]}},"titleNView":{"buttons":[{"text":"保存","color":"#ef274d","width":"60px","fontSize":"15px","fontWeight":"bold"}]}}},{"path":"pages/me/modifyBirthday.html","style":{"navigationBarTitleText":"修改生日","navigationBarTextStyle":"white","navigationBarBackgroundColor":"#181b27","app-plus":{"titleNView":{"buttons":[{"text":"保存","color":"#ef274d","width":"60px","fontSize":"15px","fontWeight":"bold"}]}},"titleNView":{"buttons":[{"text":"保存","color":"#ef274d","width":"60px","fontSize":"15px","fontWeight":"bold"}]}}},{"path":"pages/me/modifySex.html","style":{"navigationBarTitleText":"修改性别","navigationBarTextStyle":"white","navigationBarBackgroundColor":"#181b27","app-plus":{"titleNView":{"buttons":[{"text":"保存","color":"#ef274d","width":"60px","fontSize":"15px","fontWeight":"bold"}]}},"titleNView":{"buttons":[{"text":"保存","color":"#ef274d","width":"60px","fontSize":"15px","fontWeight":"bold"}]}}},{"path":"pages/me/modifyDesc.html","style":{"navigationBarTitleText":"修改简介","navigationBarTextStyle":"white","navigationBarBackgroundColor":"#181b27","app-plus":{"titleNView":{"buttons":[{"text":"保存","color":"#ef274d","width":"60px","fontSize":"15px","fontWeight":"bold"}]}},"titleNView":{"buttons":[{"text":"保存","color":"#ef274d","width":"60px","fontSize":"15px","fontWeight":"bold"}]}}},{"path":"pages/me/modifyVIdeoNum.html","style":{"navigationBarTitleText":"修改视频号","navigationBarTextStyle":"white","navigationBarBackgroundColor":"#181b27","app-plus":{"titleNView":{"buttons":[{"text":"保存","color":"#ef274d","width":"60px","fontSize":"15px","fontWeight":"bold"}]}},"titleNView":{"buttons":[{"text":"保存","color":"#ef274d","width":"60px","fontSize":"15px","fontWeight":"bold"}]}}},{"path":"pages/me/modifyNickname.html","style":{"navigationBarTitleText":"修改昵称","navigationBarTextStyle":"white","navigationBarBackgroundColor":"#181b27","app-plus":{"titleNView":{"buttons":[{"text":"保存","color":"#ef274d","width":"60px","fontSize":"15px","fontWeight":"bold"}]}},"titleNView":{"buttons":[{"text":"保存","color":"#ef274d","width":"60px","fontSize":"15px","fontWeight":"bold"}]}}},{"path":"pages/me/myInfo.html","style":{"navigationBarTitleText":"修改个人资料","navigationBarBackgroundColor":"#181b27"}},{"path":"pages/search/searchList.html","style":{"app-plus":{"titleNView":false},"titleNView":false}},{"path":"pages/publish/preview.html","style":{"navigationBarTitleText":"预览视频","enablePullDownRefresh":false}},{"path":"pages/message/message.html","style":{"navigationBarTitleText":"消息","navigationBarBackgroundColor":"#181b27"}},{"path":"pages/me/vlogerInfo.html","style":{"app-plus":{"titleNView":false},"titleNView":false}},{"path":"pages/me/me.html","style":{"app-plus":{"titleNView":false},"titleNView":false}},{"path":"pages/publish/publish.html","style":{"navigationBarTitleText":"发布视频"}},{"path":"pages/vlog/vlog.html","style":{"app-plus":{"titleNView":false},"titleNView":false}},{"path":"pages/friend/friend.html","style":{"app-plus":{"titleNView":false},"titleNView":false}},{"path":"pages/index/index.html","style":{"app-plus":{"titleNView":false},"enablePullDownRefresh":true,"titleNView":false}}],"entryPagePath":"pages/index/index"}});

/***/ }),
/* 195 */
/*!**********************************************************************************!*\
  !*** C:/Users/TAOER/Desktop/ShayuVideo/ShayuVideoAPP/pages.json?{"type":"stat"} ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"appid":"__UNI__30883AF"});

/***/ }),
/* 196 */
/*!******************************************************************************************************************************!*\
  !*** C:/Users/TAOER/Desktop/ShayuVideo/ShayuVideoAPP/pages/publish/publish.nvue?vue&type=style&index=0&lang=css&mpType=page ***!
  \******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_publish_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-0-1!./node_modules/postcss-loader/src??ref--10-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./publish.nvue?vue&type=style&index=0&lang=css&mpType=page */ 197);
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_publish_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_publish_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_publish_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_publish_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_publish_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 197 */
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-0-1!./node_modules/postcss-loader/src??ref--10-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!C:/Users/TAOER/Desktop/ShayuVideo/ShayuVideoAPP/pages/publish/publish.nvue?vue&type=style&index=0&lang=css&mpType=page ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  ".page": {
    "": {
      "position": [
        "absolute",
        0,
        0,
        0
      ],
      "left": [
        0,
        0,
        0,
        0
      ],
      "right": [
        0,
        0,
        0,
        0
      ],
      "top": [
        0,
        0,
        0,
        0
      ],
      "bottom": [
        0,
        0,
        0,
        0
      ],
      "backgroundColor": [
        "#000000",
        0,
        0,
        0
      ]
    }
  },
  ".header": {
    "": {
      "position": [
        "absolute",
        0,
        0,
        1
      ],
      "left": [
        0,
        0,
        0,
        1
      ],
      "right": [
        0,
        0,
        0,
        1
      ],
      "flexDirection": [
        "row",
        0,
        0,
        1
      ],
      "height": [
        "100rpx",
        0,
        0,
        1
      ],
      "lineHeight": [
        "100rpx",
        0,
        0,
        1
      ],
      "alignItems": [
        "center",
        0,
        0,
        1
      ],
      "paddingLeft": [
        "40rpx",
        0,
        0,
        1
      ],
      "paddingRight": [
        "40rpx",
        0,
        0,
        1
      ]
    }
  },
  ".header-center": {
    "": {
      "flex": [
        1,
        0,
        0,
        2
      ],
      "flexDirection": [
        "row",
        0,
        0,
        2
      ],
      "alignItems": [
        "center",
        0,
        0,
        2
      ],
      "justifyContent": [
        "center",
        0,
        0,
        2
      ]
    }
  },
  ".header-left": {
    "": {
      "color": [
        "#999999",
        0,
        0,
        3
      ],
      "height": [
        "100rpx",
        0,
        0,
        3
      ],
      "lineHeight": [
        "100rpx",
        0,
        0,
        3
      ],
      "alignItems": [
        "flex-start",
        0,
        0,
        3
      ],
      "justifyContent": [
        "flex-end",
        0,
        0,
        3
      ],
      "fontFamily": [
        "iconfont",
        0,
        0,
        3
      ]
    }
  },
  ".header-right": {
    "": {
      "color": [
        "#999999",
        0,
        0,
        3
      ],
      "height": [
        "100rpx",
        0,
        0,
        3
      ],
      "lineHeight": [
        "100rpx",
        0,
        0,
        3
      ],
      "alignItems": [
        "flex-start",
        0,
        0,
        3
      ],
      "justifyContent": [
        "flex-end",
        0,
        0,
        3
      ],
      "fontFamily": [
        "iconfont",
        0,
        0,
        3
      ]
    }
  },
  ".header-right-search": {
    "": {
      "height": [
        "100rpx",
        0,
        0,
        4
      ]
    }
  },
  ".header-item": {
    "": {
      "alignItems": [
        "center",
        0,
        0,
        5
      ],
      "marginLeft": [
        "6rpx",
        0,
        0,
        5
      ],
      "marginRight": [
        "6rpx",
        0,
        0,
        5
      ]
    }
  },
  ".header-item-title": {
    "": {
      "width": [
        "200rpx",
        0,
        0,
        6
      ],
      "textAlign": [
        "center",
        0,
        0,
        6
      ],
      "height": [
        "60rpx",
        0,
        0,
        6
      ],
      "lineHeight": [
        "60rpx",
        0,
        0,
        6
      ],
      "color": [
        "#FFFFFF",
        0,
        0,
        6
      ],
      "fontSize": [
        "18",
        0,
        0,
        6
      ],
      "fontWeight": [
        "400",
        0,
        0,
        6
      ]
    }
  },
  ".header-refresh-title": {
    "": {
      "width": [
        "300rpx",
        0,
        0,
        7
      ],
      "textAlign": [
        "center",
        0,
        0,
        7
      ],
      "height": [
        "60rpx",
        0,
        0,
        7
      ],
      "lineHeight": [
        "60rpx",
        0,
        0,
        7
      ],
      "color": [
        "#FFFFFF",
        0,
        0,
        7
      ],
      "fontSize": [
        "16",
        0,
        0,
        7
      ],
      "fontWeight": [
        "600",
        0,
        0,
        7
      ]
    }
  },
  ".header-item-line": {
    "": {
      "height": [
        "5rpx",
        0,
        0,
        8
      ],
      "lineHeight": [
        "8rpx",
        0,
        0,
        8
      ],
      "width": [
        "60rpx",
        0,
        0,
        8
      ],
      "borderRadius": [
        "8rpx",
        0,
        0,
        8
      ]
    }
  },
  ".preplay-wrapper": {
    "": {
      "display": [
        "flex",
        0,
        0,
        9
      ],
      "flexDirection": [
        "row",
        0,
        0,
        9
      ],
      "justifyContent": [
        "center",
        0,
        0,
        9
      ],
      "marginTop": [
        "-90rpx",
        0,
        0,
        9
      ],
      "marginLeft": [
        "30rpx",
        0,
        0,
        9
      ],
      "borderWidth": [
        "1",
        0,
        0,
        9
      ],
      "paddingTop": [
        "6rpx",
        0,
        0,
        9
      ],
      "paddingRight": [
        "16rpx",
        0,
        0,
        9
      ],
      "paddingBottom": [
        "6rpx",
        0,
        0,
        9
      ],
      "paddingLeft": [
        "16rpx",
        0,
        0,
        9
      ],
      "width": [
        "200rpx",
        0,
        0,
        9
      ],
      "borderRadius": [
        "20rpx",
        0,
        0,
        9
      ]
    }
  },
  ".vlog-content": {
    "": {
      "marginTop": [
        "30rpx",
        0,
        0,
        10
      ],
      "height": [
        "100",
        0,
        0,
        10
      ],
      "color": [
        "#FFFFFF",
        0,
        0,
        10
      ],
      "fontSize": [
        "16",
        0,
        0,
        10
      ],
      "backgroundColor": [
        "#0c0c0c",
        0,
        0,
        10
      ],
      "paddingLeft": [
        "10",
        0,
        0,
        10
      ],
      "paddingTop": [
        "10",
        0,
        0,
        10
      ],
      "paddingRight": [
        "10",
        0,
        0,
        10
      ],
      "paddingBottom": [
        "10",
        0,
        0,
        10
      ],
      "borderRadius": [
        "10",
        0,
        0,
        10
      ]
    }
  },
  ".btn-preplay": {
    "": {
      "backgroundColor": [
        "#0c0c0c",
        0,
        0,
        11
      ],
      "borderColor": [
        "#343438",
        0,
        0,
        11
      ]
    }
  },
  ".btn-preplay-touched": {
    "": {
      "backgroundColor": [
        "#545456",
        0,
        0,
        12
      ],
      "borderColor": [
        "#000000",
        0,
        0,
        12
      ]
    }
  },
  ".btn-publish": {
    "": {
      "backgroundColor": [
        "#ef274d",
        0,
        0,
        13
      ]
    }
  },
  ".btn-publish-touched": {
    "": {
      "backgroundColor": [
        "#de6981",
        0,
        0,
        14
      ]
    }
  },
  ".choose-cover": {
    "": {
      "display": [
        "flex",
        0,
        0,
        15
      ],
      "flexDirection": [
        "column",
        0,
        0,
        15
      ],
      "justifyContent": [
        "center",
        0,
        0,
        15
      ],
      "width": [
        "360rpx",
        0,
        0,
        15
      ],
      "backgroundColor": [
        "#000000",
        0,
        0,
        15
      ],
      "opacity": [
        0.3,
        0,
        0,
        15
      ],
      "height": [
        "50",
        0,
        0,
        15
      ],
      "marginLeft": [
        "30rpx",
        0,
        0,
        15
      ],
      "borderBottomRightRadius": [
        "10",
        0,
        0,
        15
      ],
      "borderBottomLeftRadius": [
        "10",
        0,
        0,
        15
      ],
      "position": [
        "relative",
        0,
        0,
        15
      ],
      "top": [
        "-50",
        0,
        0,
        15
      ]
    }
  },
  ".tags-preview": {
    "": {
      "marginTop": [
        "20rpx",
        0,
        0,
        16
      ],
      "marginLeft": [
        "30rpx",
        0,
        0,
        16
      ],
      "marginRight": [
        "30rpx",
        0,
        0,
        16
      ],
      "flexDirection": [
        "row",
        0,
        0,
        16
      ],
      "alignItems": [
        "center",
        0,
        0,
        16
      ],
      "flexWrap": [
        "wrap",
        0,
        0,
        16
      ]
    }
  },
  ".tags-label": {
    "": {
      "color": [
        "#9798a0",
        0,
        0,
        17
      ],
      "fontSize": [
        "14",
        0,
        0,
        17
      ],
      "marginRight": [
        "10rpx",
        0,
        0,
        17
      ]
    }
  },
  ".tags-container": {
    "": {
      "flexDirection": [
        "row",
        0,
        0,
        18
      ],
      "flexWrap": [
        "wrap",
        0,
        0,
        18
      ],
      "flex": [
        1,
        0,
        0,
        18
      ]
    }
  },
  ".tag-item": {
    "": {
      "flexDirection": [
        "row",
        0,
        0,
        19
      ],
      "alignItems": [
        "center",
        0,
        0,
        19
      ],
      "backgroundColor": [
        "#ef274d",
        0,
        0,
        19
      ],
      "borderRadius": [
        "20rpx",
        0,
        0,
        19
      ],
      "paddingTop": [
        "8rpx",
        0,
        0,
        19
      ],
      "paddingRight": [
        "16rpx",
        0,
        0,
        19
      ],
      "paddingBottom": [
        "8rpx",
        0,
        0,
        19
      ],
      "paddingLeft": [
        "16rpx",
        0,
        0,
        19
      ],
      "marginRight": [
        "10rpx",
        0,
        0,
        19
      ],
      "marginBottom": [
        "10rpx",
        0,
        0,
        19
      ]
    }
  },
  ".tag-text": {
    "": {
      "color": [
        "#FFFFFF",
        0,
        0,
        20
      ],
      "fontSize": [
        "12",
        0,
        0,
        20
      ],
      "fontWeight": [
        "500",
        0,
        0,
        20
      ]
    }
  },
  ".tag-close": {
    "": {
      "color": [
        "#FFFFFF",
        0,
        0,
        21
      ],
      "fontSize": [
        "18",
        0,
        0,
        21
      ],
      "fontWeight": [
        "bold",
        0,
        0,
        21
      ],
      "marginLeft": [
        "8rpx",
        0,
        0,
        21
      ],
      "lineHeight": [
        "18",
        0,
        0,
        21
      ]
    }
  },
  "@VERSION": 2
}

/***/ })
/******/ ]);