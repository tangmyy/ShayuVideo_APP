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
/******/ 	return __webpack_require__(__webpack_require__.s = 236);
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
/* 123 */
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
/* 124 */,
/* 125 */,
/* 126 */,
/* 127 */,
/* 128 */,
/* 129 */,
/* 130 */,
/* 131 */,
/* 132 */,
/* 133 */,
/* 134 */,
/* 135 */,
/* 136 */,
/* 137 */,
/* 138 */,
/* 139 */,
/* 140 */,
/* 141 */,
/* 142 */,
/* 143 */,
/* 144 */,
/* 145 */,
/* 146 */,
/* 147 */,
/* 148 */,
/* 149 */
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
/* 150 */
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
/* 151 */,
/* 152 */
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
/* 153 */,
/* 154 */,
/* 155 */,
/* 156 */,
/* 157 */,
/* 158 */
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeToArray = __webpack_require__(/*! ./arrayLikeToArray.js */ 159);
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
/* 159 */
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
/* 160 */,
/* 161 */
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/toConsumableArray.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithoutHoles = __webpack_require__(/*! ./arrayWithoutHoles.js */ 162);
var iterableToArray = __webpack_require__(/*! ./iterableToArray.js */ 163);
var unsupportedIterableToArray = __webpack_require__(/*! ./unsupportedIterableToArray.js */ 158);
var nonIterableSpread = __webpack_require__(/*! ./nonIterableSpread.js */ 164);
function _toConsumableArray(arr) {
  return arrayWithoutHoles(arr) || iterableToArray(arr) || unsupportedIterableToArray(arr) || nonIterableSpread();
}
module.exports = _toConsumableArray, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 162 */
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeToArray = __webpack_require__(/*! ./arrayLikeToArray.js */ 159);
function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return arrayLikeToArray(arr);
}
module.exports = _arrayWithoutHoles, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 163 */
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
/* 164 */
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
/* 165 */,
/* 166 */
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/defineProperty.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toPropertyKey = __webpack_require__(/*! ./toPropertyKey.js */ 167);
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
/* 167 */
/*!**************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/toPropertyKey.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ./typeof.js */ 152)["default"];
var toPrimitive = __webpack_require__(/*! ./toPrimitive.js */ 168);
function toPropertyKey(t) {
  var i = toPrimitive(t, "string");
  return "symbol" == _typeof(i) ? i : i + "";
}
module.exports = toPropertyKey, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 168 */
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/toPrimitive.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ./typeof.js */ 152)["default"];
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
/* 169 */,
/* 170 */,
/* 171 */,
/* 172 */,
/* 173 */,
/* 174 */,
/* 175 */,
/* 176 */,
/* 177 */
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
/* 178 */
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/createClass.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toPropertyKey = __webpack_require__(/*! ./toPropertyKey.js */ 167);
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
/* 179 */,
/* 180 */,
/* 181 */,
/* 182 */,
/* 183 */,
/* 184 */,
/* 185 */,
/* 186 */,
/* 187 */,
/* 188 */,
/* 189 */,
/* 190 */,
/* 191 */,
/* 192 */
/*!****************************************************************************************************************!*\
  !*** C:/Users/TAOER/Desktop/ShayuVideo/ShayuVideoAPP/uni_modules/uni-popup/components/uni-popup/uni-popup.vue ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _uni_popup_vue_vue_type_template_id_7c43d41b_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./uni-popup.vue?vue&type=template&id=7c43d41b&scoped=true& */ 193);\n/* harmony import */ var _uni_popup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./uni-popup.vue?vue&type=script&lang=js& */ 201);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _uni_popup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _uni_popup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 12);\n\nvar renderjs\n\n\nfunction injectStyles (context) {\n  \n  if(!this.options.style){\n          this.options.style = {}\n      }\n      if(Vue.prototype.__merge_style && Vue.prototype.__$appStyle__){\n        Vue.prototype.__merge_style(Vue.prototype.__$appStyle__, this.options.style)\n      }\n      if(Vue.prototype.__merge_style){\n                Vue.prototype.__merge_style(__webpack_require__(/*! ./uni-popup.vue?vue&type=style&index=0&id=7c43d41b&lang=scss&scoped=true& */ 203).default, this.options.style)\n            }else{\n                Object.assign(this.options.style,__webpack_require__(/*! ./uni-popup.vue?vue&type=style&index=0&id=7c43d41b&lang=scss&scoped=true& */ 203).default)\n            }\n\n}\n\n/* normalize component */\n\nvar component = Object(_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _uni_popup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _uni_popup_vue_vue_type_template_id_7c43d41b_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _uni_popup_vue_vue_type_template_id_7c43d41b_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  \"7c43d41b\",\n  \"6e92c3e6\",\n  false,\n  _uni_popup_vue_vue_type_template_id_7c43d41b_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ninjectStyles.call(component)\ncomponent.options.__file = \"uni_modules/uni-popup/components/uni-popup/uni-popup.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBa0k7QUFDbEk7QUFDNkQ7QUFDTDtBQUN4RDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QyxtQkFBTyxDQUFDLG9GQUEyRTtBQUMvSCxhQUFhO0FBQ2IsaURBQWlELG1CQUFPLENBQUMsb0ZBQTJFO0FBQ3BJOztBQUVBOztBQUVBO0FBQ3FLO0FBQ3JLLGdCQUFnQiwrS0FBVTtBQUMxQixFQUFFLCtFQUFNO0FBQ1IsRUFBRSxnR0FBTTtBQUNSLEVBQUUseUdBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsb0dBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ0E7QUFDZSxnRiIsImZpbGUiOiIxOTIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucywgcmVjeWNsYWJsZVJlbmRlciwgY29tcG9uZW50cyB9IGZyb20gXCIuL3VuaS1wb3B1cC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9N2M0M2Q0MWImc2NvcGVkPXRydWUmXCJcbnZhciByZW5kZXJqc1xuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi91bmktcG9wdXAudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi91bmktcG9wdXAudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5mdW5jdGlvbiBpbmplY3RTdHlsZXMgKGNvbnRleHQpIHtcbiAgXG4gIGlmKCF0aGlzLm9wdGlvbnMuc3R5bGUpe1xuICAgICAgICAgIHRoaXMub3B0aW9ucy5zdHlsZSA9IHt9XG4gICAgICB9XG4gICAgICBpZihWdWUucHJvdG90eXBlLl9fbWVyZ2Vfc3R5bGUgJiYgVnVlLnByb3RvdHlwZS5fXyRhcHBTdHlsZV9fKXtcbiAgICAgICAgVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlKFZ1ZS5wcm90b3R5cGUuX18kYXBwU3R5bGVfXywgdGhpcy5vcHRpb25zLnN0eWxlKVxuICAgICAgfVxuICAgICAgaWYoVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlKXtcbiAgICAgICAgICAgICAgICBWdWUucHJvdG90eXBlLl9fbWVyZ2Vfc3R5bGUocmVxdWlyZShcIi4vdW5pLXBvcHVwLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTdjNDNkNDFiJmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIikuZGVmYXVsdCwgdGhpcy5vcHRpb25zLnN0eWxlKVxuICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLm9wdGlvbnMuc3R5bGUscmVxdWlyZShcIi4vdW5pLXBvcHVwLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTdjNDNkNDFiJmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIikuZGVmYXVsdClcbiAgICAgICAgICAgIH1cblxufVxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIUQ6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcdnVlLWxvYWRlclxcXFxsaWJcXFxccnVudGltZVxcXFxjb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgXCI3YzQzZDQxYlwiLFxuICBcIjZlOTJjM2U2XCIsXG4gIGZhbHNlLFxuICBjb21wb25lbnRzLFxuICByZW5kZXJqc1xuKVxuXG5pbmplY3RTdHlsZXMuY2FsbChjb21wb25lbnQpXG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInVuaV9tb2R1bGVzL3VuaS1wb3B1cC9jb21wb25lbnRzL3VuaS1wb3B1cC91bmktcG9wdXAudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///192\n");

/***/ }),
/* 193 */
/*!***********************************************************************************************************************************************************!*\
  !*** C:/Users/TAOER/Desktop/ShayuVideo/ShayuVideoAPP/uni_modules/uni-popup/components/uni-popup/uni-popup.vue?vue&type=template&id=7c43d41b&scoped=true& ***!
  \***********************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_popup_vue_vue_type_template_id_7c43d41b_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.recycle.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./uni-popup.vue?vue&type=template&id=7c43d41b&scoped=true& */ 194);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_popup_vue_vue_type_template_id_7c43d41b_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_popup_vue_vue_type_template_id_7c43d41b_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_popup_vue_vue_type_template_id_7c43d41b_scoped_true___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_popup_vue_vue_type_template_id_7c43d41b_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 194 */
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.recycle.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!C:/Users/TAOER/Desktop/ShayuVideo/ShayuVideoAPP/uni_modules/uni-popup/components/uni-popup/uni-popup.vue?vue&type=template&id=7c43d41b&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
try {
  components = {
    uniTransition:
      __webpack_require__(/*! @/uni_modules/uni-transition/components/uni-transition/uni-transition.vue */ 195)
        .default,
  }
} catch (e) {
  if (
    e.message.indexOf("Cannot find module") !== -1 &&
    e.message.indexOf(".vue") !== -1
  ) {
    console.error(e.message)
    console.error("1. 排查组件名称拼写是否正确")
    console.error(
      "2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"
    )
    console.error(
      "3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件"
    )
  } else {
    throw e
  }
}
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm.showPopup
    ? _c(
        "view",
        {
          staticClass: ["uni-popup"],
          class: [_vm.popupstyle, _vm.isDesktop ? "fixforpc-z-index" : ""],
          on: { touchmove: _vm.clear },
        },
        [
          _c(
            "view",
            { on: { touchstart: _vm.touchstart } },
            [
              _vm.maskShow
                ? _c("uni-transition", {
                    key: "1",
                    attrs: {
                      name: "mask",
                      modeClass: "fade",
                      styles: _vm.maskClass,
                      duration: _vm.duration,
                      show: _vm.showTrans,
                    },
                    on: { click: _vm.onTap },
                  })
                : _vm._e(),
              _c(
                "uni-transition",
                {
                  key: "2",
                  attrs: {
                    modeClass: _vm.ani,
                    name: "content",
                    styles: _vm.transClass,
                    duration: _vm.duration,
                    show: _vm.showTrans,
                  },
                  on: { click: _vm.onTap },
                },
                [
                  _c(
                    "view",
                    {
                      staticClass: ["uni-popup__wrapper"],
                      class: [_vm.popupstyle],
                      style: { backgroundColor: _vm.bg },
                      on: { click: _vm.clear },
                    },
                    [_vm._t("default")],
                    2
                  ),
                ]
              ),
            ],
            1
          ),
        ]
      )
    : _vm._e()
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 195 */
/*!*******************************************************************************************************************************!*\
  !*** C:/Users/TAOER/Desktop/ShayuVideo/ShayuVideoAPP/uni_modules/uni-transition/components/uni-transition/uni-transition.vue ***!
  \*******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _uni_transition_vue_vue_type_template_id_6369f8c4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./uni-transition.vue?vue&type=template&id=6369f8c4& */ 196);\n/* harmony import */ var _uni_transition_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./uni-transition.vue?vue&type=script&lang=js& */ 198);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _uni_transition_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _uni_transition_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 12);\n\nvar renderjs\n\n\nfunction injectStyles (context) {\n  \n  if(!this.options.style){\n          this.options.style = {}\n      }\n      if(Vue.prototype.__merge_style && Vue.prototype.__$appStyle__){\n        Vue.prototype.__merge_style(Vue.prototype.__$appStyle__, this.options.style)\n      }\n      \n}\n\n/* normalize component */\n\nvar component = Object(_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _uni_transition_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _uni_transition_vue_vue_type_template_id_6369f8c4___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _uni_transition_vue_vue_type_template_id_6369f8c4___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  \"d91a4828\",\n  false,\n  _uni_transition_vue_vue_type_template_id_6369f8c4___WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ninjectStyles.call(component)\ncomponent.options.__file = \"uni_modules/uni-transition/components/uni-transition/uni-transition.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBMkg7QUFDM0g7QUFDa0U7QUFDTDtBQUM3RDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDcUs7QUFDckssZ0JBQWdCLCtLQUFVO0FBQzFCLEVBQUUsb0ZBQU07QUFDUixFQUFFLHlGQUFNO0FBQ1IsRUFBRSxrR0FBZTtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRSw2RkFBVTtBQUNaO0FBQ0E7O0FBRUE7QUFDQTtBQUNlLGdGIiwiZmlsZSI6IjE5NS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zLCByZWN5Y2xhYmxlUmVuZGVyLCBjb21wb25lbnRzIH0gZnJvbSBcIi4vdW5pLXRyYW5zaXRpb24udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTYzNjlmOGM0JlwiXG52YXIgcmVuZGVyanNcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vdW5pLXRyYW5zaXRpb24udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi91bmktdHJhbnNpdGlvbi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmZ1bmN0aW9uIGluamVjdFN0eWxlcyAoY29udGV4dCkge1xuICBcbiAgaWYoIXRoaXMub3B0aW9ucy5zdHlsZSl7XG4gICAgICAgICAgdGhpcy5vcHRpb25zLnN0eWxlID0ge31cbiAgICAgIH1cbiAgICAgIGlmKFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZSAmJiBWdWUucHJvdG90eXBlLl9fJGFwcFN0eWxlX18pe1xuICAgICAgICBWdWUucHJvdG90eXBlLl9fbWVyZ2Vfc3R5bGUoVnVlLnByb3RvdHlwZS5fXyRhcHBTdHlsZV9fLCB0aGlzLm9wdGlvbnMuc3R5bGUpXG4gICAgICB9XG4gICAgICBcbn1cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiFEOlxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXHJ1bnRpbWVcXFxcY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIFwiZDkxYTQ4MjhcIixcbiAgZmFsc2UsXG4gIGNvbXBvbmVudHMsXG4gIHJlbmRlcmpzXG4pXG5cbmluamVjdFN0eWxlcy5jYWxsKGNvbXBvbmVudClcbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwidW5pX21vZHVsZXMvdW5pLXRyYW5zaXRpb24vY29tcG9uZW50cy91bmktdHJhbnNpdGlvbi91bmktdHJhbnNpdGlvbi52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///195\n");

/***/ }),
/* 196 */
/*!**************************************************************************************************************************************************************!*\
  !*** C:/Users/TAOER/Desktop/ShayuVideo/ShayuVideoAPP/uni_modules/uni-transition/components/uni-transition/uni-transition.vue?vue&type=template&id=6369f8c4& ***!
  \**************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_transition_vue_vue_type_template_id_6369f8c4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.recycle.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./uni-transition.vue?vue&type=template&id=6369f8c4& */ 197);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_transition_vue_vue_type_template_id_6369f8c4___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_transition_vue_vue_type_template_id_6369f8c4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_transition_vue_vue_type_template_id_6369f8c4___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_transition_vue_vue_type_template_id_6369f8c4___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 197 */
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.recycle.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!C:/Users/TAOER/Desktop/ShayuVideo/ShayuVideoAPP/uni_modules/uni-transition/components/uni-transition/uni-transition.vue?vue&type=template&id=6369f8c4& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
  return _vm.isShow
    ? _c(
        "view",
        {
          ref: "ani",
          class: _vm.customClass,
          style: _vm.transformStyles,
          attrs: { animation: _vm.animationData },
          on: { click: _vm.onClick },
        },
        [_vm._t("default")],
        2
      )
    : _vm._e()
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 198 */
/*!********************************************************************************************************************************************************!*\
  !*** C:/Users/TAOER/Desktop/ShayuVideo/ShayuVideoAPP/uni_modules/uni-transition/components/uni-transition/uni-transition.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_transition_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib??ref--5-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--5-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./uni-transition.vue?vue&type=script&lang=js& */ 199);\n/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_transition_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_transition_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_transition_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_transition_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_transition_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQTRhLENBQWdCLHdkQUFHLEVBQUMiLCJmaWxlIjoiMTk4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vZCBmcm9tIFwiLSFEOlxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxiYWJlbC1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzPz9yZWYtLTUtMCFEOlxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXJcXFxcaW5kZXguanM/P3JlZi0tNS0xIUQ6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcdnVlLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3VuaS10cmFuc2l0aW9uLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSFEOlxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxiYWJlbC1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzPz9yZWYtLTUtMCFEOlxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXJcXFxcaW5kZXguanM/P3JlZi0tNS0xIUQ6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcdnVlLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3VuaS10cmFuc2l0aW9uLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///198\n");

/***/ }),
/* 199 */
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--5-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--5-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!C:/Users/TAOER/Desktop/ShayuVideo/ShayuVideoAPP/uni_modules/uni-transition/components/uni-transition/uni-transition.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__f__) {\n\nvar _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 150);\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\nvar _toConsumableArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ 161));\nvar _typeof2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/typeof */ 152));\nvar _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ 166));\nvar _createAnimation = __webpack_require__(/*! ./createAnimation */ 200);\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }\n/**\n * Transition 过渡动画\n * @description 简单过渡动画组件\n * @tutorial https://ext.dcloud.net.cn/plugin?id=985\n * @property {Boolean} show = [false|true] 控制组件显示或隐藏\n * @property {Array|String} modeClass = [fade|slide-top|slide-right|slide-bottom|slide-left|zoom-in|zoom-out] 过渡动画类型\n *  @value fade 渐隐渐出过渡\n *  @value slide-top 由上至下过渡\n *  @value slide-right 由右至左过渡\n *  @value slide-bottom 由下至上过渡\n *  @value slide-left 由左至右过渡\n *  @value zoom-in 由小到大过渡\n *  @value zoom-out 由大到小过渡\n * @property {Number} duration 过渡动画持续时间\n * @property {Object} styles 组件样式，同 css 样式，注意带’-‘连接符的属性需要使用小驼峰写法如：`backgroundColor:red`\n */\nvar _default2 = {\n  name: 'uniTransition',\n  emits: ['click', 'change'],\n  props: {\n    show: {\n      type: Boolean,\n      default: false\n    },\n    modeClass: {\n      type: [Array, String],\n      default: function _default() {\n        return 'fade';\n      }\n    },\n    duration: {\n      type: Number,\n      default: 300\n    },\n    styles: {\n      type: Object,\n      default: function _default() {\n        return {};\n      }\n    },\n    customClass: {\n      type: String,\n      default: ''\n    }\n  },\n  data: function data() {\n    return {\n      isShow: false,\n      transform: '',\n      opacity: 1,\n      animationData: {},\n      durationTime: 300,\n      config: {}\n    };\n  },\n  watch: {\n    show: {\n      handler: function handler(newVal) {\n        if (newVal) {\n          this.open();\n        } else {\n          // 避免上来就执行 close,导致动画错乱\n          if (this.isShow) {\n            this.close();\n          }\n        }\n      },\n      immediate: true\n    }\n  },\n  computed: {\n    // 生成样式数据\n    stylesObject: function stylesObject() {\n      var styles = _objectSpread(_objectSpread({}, this.styles), {}, {\n        'transition-duration': this.duration / 1000 + 's'\n      });\n      var transform = '';\n      for (var i in styles) {\n        var line = this.toLine(i);\n        transform += line + ':' + styles[i] + ';';\n      }\n      return transform;\n    },\n    // 初始化动画条件\n    transformStyles: function transformStyles() {\n      return 'transform:' + this.transform + ';' + 'opacity:' + this.opacity + ';' + this.stylesObject;\n    }\n  },\n  created: function created() {\n    // 动画默认配置\n    this.config = {\n      duration: this.duration,\n      timingFunction: 'ease',\n      transformOrigin: '50% 50%',\n      delay: 0\n    };\n    this.durationTime = this.duration;\n  },\n  methods: {\n    /**\n     *  ref 触发 初始化动画\n     */\n    init: function init() {\n      var obj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};\n      if (obj.duration) {\n        this.durationTime = obj.duration;\n      }\n      this.animation = (0, _createAnimation.createAnimation)(Object.assign(this.config, obj));\n    },\n    /**\n     * 点击组件触发回调\n     */\n    onClick: function onClick() {\n      this.$emit('click', {\n        detail: this.isShow\n      });\n    },\n    /**\n     * ref 触发 动画分组\n     * @param {Object} obj\n     */\n    step: function step(obj) {\n      var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};\n      if (!this.animation) return;\n      for (var i in obj) {\n        try {\n          if ((0, _typeof2.default)(obj[i]) === 'object') {\n            var _this$animation;\n            (_this$animation = this.animation)[i].apply(_this$animation, (0, _toConsumableArray2.default)(obj[i]));\n          } else {\n            this.animation[i](obj[i]);\n          }\n        } catch (e) {\n          __f__(\"error\", \"\\u65B9\\u6CD5 \".concat(i, \" \\u4E0D\\u5B58\\u5728\"), \" at uni_modules/uni-transition/components/uni-transition/uni-transition.vue:139\");\n        }\n      }\n      this.animation.step(config);\n      return this;\n    },\n    /**\n     *  ref 触发 执行动画\n     */\n    run: function run(fn) {\n      if (!this.animation) return;\n      this.animation.run(fn);\n    },\n    // 开始过度动画\n    open: function open() {\n      var _this = this;\n      clearTimeout(this.timer);\n      this.transform = '';\n      this.isShow = true;\n      var _this$styleInit = this.styleInit(false),\n        opacity = _this$styleInit.opacity,\n        transform = _this$styleInit.transform;\n      if (typeof opacity !== 'undefined') {\n        this.opacity = opacity;\n      }\n      this.transform = transform;\n      // 确保动态样式已经生效后，执行动画，如果不加 nextTick ，会导致 wx 动画执行异常\n      this.$nextTick(function () {\n        // TODO 定时器保证动画完全执行，目前有些问题，后面会取消定时器\n        _this.timer = setTimeout(function () {\n          _this.animation = (0, _createAnimation.createAnimation)(_this.config, _this);\n          _this.tranfromInit(false).step();\n          _this.animation.run();\n          _this.$emit('change', {\n            detail: _this.isShow\n          });\n        }, 20);\n      });\n    },\n    // 关闭过度动画\n    close: function close(type) {\n      var _this2 = this;\n      if (!this.animation) return;\n      this.tranfromInit(true).step().run(function () {\n        _this2.isShow = false;\n        _this2.animationData = null;\n        _this2.animation = null;\n        var _this2$styleInit = _this2.styleInit(false),\n          opacity = _this2$styleInit.opacity,\n          transform = _this2$styleInit.transform;\n        _this2.opacity = opacity || 1;\n        _this2.transform = transform;\n        _this2.$emit('change', {\n          detail: _this2.isShow\n        });\n      });\n    },\n    // 处理动画开始前的默认样式\n    styleInit: function styleInit(type) {\n      var _this3 = this;\n      var styles = {\n        transform: ''\n      };\n      var buildStyle = function buildStyle(type, mode) {\n        if (mode === 'fade') {\n          styles.opacity = _this3.animationType(type)[mode];\n        } else {\n          styles.transform += _this3.animationType(type)[mode] + ' ';\n        }\n      };\n      if (typeof this.modeClass === 'string') {\n        buildStyle(type, this.modeClass);\n      } else {\n        this.modeClass.forEach(function (mode) {\n          buildStyle(type, mode);\n        });\n      }\n      return styles;\n    },\n    // 处理内置组合动画\n    tranfromInit: function tranfromInit(type) {\n      var _this4 = this;\n      var buildTranfrom = function buildTranfrom(type, mode) {\n        var aniNum = null;\n        if (mode === 'fade') {\n          aniNum = type ? 0 : 1;\n        } else {\n          aniNum = type ? '-100%' : '0';\n          if (mode === 'zoom-in') {\n            aniNum = type ? 0.8 : 1;\n          }\n          if (mode === 'zoom-out') {\n            aniNum = type ? 1.2 : 1;\n          }\n          if (mode === 'slide-right') {\n            aniNum = type ? '100%' : '0';\n          }\n          if (mode === 'slide-bottom') {\n            aniNum = type ? '100%' : '0';\n          }\n        }\n        _this4.animation[_this4.animationMode()[mode]](aniNum);\n      };\n      if (typeof this.modeClass === 'string') {\n        buildTranfrom(type, this.modeClass);\n      } else {\n        this.modeClass.forEach(function (mode) {\n          buildTranfrom(type, mode);\n        });\n      }\n      return this.animation;\n    },\n    animationType: function animationType(type) {\n      return {\n        fade: type ? 1 : 0,\n        'slide-top': \"translateY(\".concat(type ? '0' : '-100%', \")\"),\n        'slide-right': \"translateX(\".concat(type ? '0' : '100%', \")\"),\n        'slide-bottom': \"translateY(\".concat(type ? '0' : '100%', \")\"),\n        'slide-left': \"translateX(\".concat(type ? '0' : '-100%', \")\"),\n        'zoom-in': \"scaleX(\".concat(type ? 1 : 0.8, \") scaleY(\").concat(type ? 1 : 0.8, \")\"),\n        'zoom-out': \"scaleX(\".concat(type ? 1 : 1.2, \") scaleY(\").concat(type ? 1 : 1.2, \")\")\n      };\n    },\n    // 内置动画类型与实际动画对应字典\n    animationMode: function animationMode() {\n      return {\n        fade: 'opacity',\n        'slide-top': 'translateY',\n        'slide-right': 'translateX',\n        'slide-bottom': 'translateY',\n        'slide-left': 'translateX',\n        'zoom-in': 'scale',\n        'zoom-out': 'scale'\n      };\n    },\n    // 驼峰转中横线\n    toLine: function toLine(name) {\n      return name.replace(/([A-Z])/g, '-$1').toLowerCase();\n    }\n  }\n};\nexports.default = _default2;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 123)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vdW5pX21vZHVsZXMvdW5pLXRyYW5zaXRpb24vY29tcG9uZW50cy91bmktdHJhbnNpdGlvbi91bmktdHJhbnNpdGlvbi52dWUiXSwibmFtZXMiOlsibmFtZSIsImVtaXRzIiwicHJvcHMiLCJzaG93IiwidHlwZSIsImRlZmF1bHQiLCJtb2RlQ2xhc3MiLCJkdXJhdGlvbiIsInN0eWxlcyIsImN1c3RvbUNsYXNzIiwiZGF0YSIsImlzU2hvdyIsInRyYW5zZm9ybSIsIm9wYWNpdHkiLCJhbmltYXRpb25EYXRhIiwiZHVyYXRpb25UaW1lIiwiY29uZmlnIiwid2F0Y2giLCJoYW5kbGVyIiwiaW1tZWRpYXRlIiwiY29tcHV0ZWQiLCJzdHlsZXNPYmplY3QiLCJ0cmFuc2Zvcm1TdHlsZXMiLCJjcmVhdGVkIiwidGltaW5nRnVuY3Rpb24iLCJ0cmFuc2Zvcm1PcmlnaW4iLCJkZWxheSIsIm1ldGhvZHMiLCJpbml0Iiwib25DbGljayIsImRldGFpbCIsInN0ZXAiLCJydW4iLCJvcGVuIiwiY2xlYXJUaW1lb3V0IiwiY2xvc2UiLCJzdHlsZUluaXQiLCJidWlsZFN0eWxlIiwidHJhbmZyb21Jbml0IiwiYW5pTnVtIiwiYnVpbGRUcmFuZnJvbSIsImFuaW1hdGlvblR5cGUiLCJmYWRlIiwiYW5pbWF0aW9uTW9kZSIsInRvTGluZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUtBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBZkEsZ0JBZ0JBO0VBQ0FBO0VBQ0FDO0VBQ0FDO0lBQ0FDO01BQ0FDO01BQ0FDO0lBQ0E7SUFDQUM7TUFDQUY7TUFDQUM7UUFDQTtNQUNBO0lBQ0E7SUFDQUU7TUFDQUg7TUFDQUM7SUFDQTtJQUNBRztNQUNBSjtNQUNBQztRQUNBO01BQ0E7SUFDQTtJQUNBSTtNQUNBTDtNQUNBQztJQUNBO0VBQ0E7RUFDQUs7SUFDQTtNQUNBQztNQUNBQztNQUNBQztNQUNBQztNQUNBQztNQUNBQztJQUNBO0VBQ0E7RUFDQUM7SUFDQWQ7TUFDQWU7UUFDQTtVQUNBO1FBQ0E7VUFDQTtVQUNBO1lBQ0E7VUFDQTtRQUNBO01BQ0E7TUFDQUM7SUFDQTtFQUNBO0VBQ0FDO0lBQ0E7SUFDQUM7TUFDQSw2Q0FDQTtRQUNBO01BQUEsRUFDQTtNQUNBO01BQ0E7UUFDQTtRQUNBVDtNQUNBO01BQ0E7SUFDQTtJQUNBO0lBQ0FVO01BQ0E7SUFDQTtFQUNBO0VBQ0FDO0lBQ0E7SUFDQTtNQUNBaEI7TUFDQWlCO01BQ0FDO01BQ0FDO0lBQ0E7SUFDQTtFQUNBO0VBQ0FDO0lBQ0E7QUFDQTtBQUNBO0lBQ0FDO01BQUE7TUFDQTtRQUNBO01BQ0E7TUFDQTtJQUNBO0lBQ0E7QUFDQTtBQUNBO0lBQ0FDO01BQ0E7UUFDQUM7TUFDQTtJQUNBO0lBQ0E7QUFDQTtBQUNBO0FBQ0E7SUFDQUM7TUFBQTtNQUNBO01BQ0E7UUFDQTtVQUNBO1lBQUE7WUFDQTtVQUNBO1lBQ0E7VUFDQTtRQUNBO1VBQ0E7UUFDQTtNQUNBO01BQ0E7TUFDQTtJQUNBO0lBQ0E7QUFDQTtBQUNBO0lBQ0FDO01BQ0E7TUFDQTtJQUNBO0lBQ0E7SUFDQUM7TUFBQTtNQUNBQztNQUNBO01BQ0E7TUFDQTtRQUFBckI7UUFBQUQ7TUFDQTtRQUNBO01BQ0E7TUFDQTtNQUNBO01BQ0E7UUFDQTtRQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7WUFDQWtCO1VBQ0E7UUFDQTtNQUNBO0lBQ0E7SUFDQTtJQUNBSztNQUFBO01BQ0E7TUFDQSx3QkFDQUosT0FDQUM7UUFDQTtRQUNBO1FBQ0E7UUFDQTtVQUFBbkI7VUFBQUQ7UUFDQTtRQUNBO1FBQ0E7VUFDQWtCO1FBQ0E7TUFDQTtJQUNBO0lBQ0E7SUFDQU07TUFBQTtNQUNBO1FBQ0F4QjtNQUNBO01BQ0E7UUFDQTtVQUNBSjtRQUNBO1VBQ0FBO1FBQ0E7TUFDQTtNQUNBO1FBQ0E2QjtNQUNBO1FBQ0E7VUFDQUE7UUFDQTtNQUNBO01BQ0E7SUFDQTtJQUNBO0lBQ0FDO01BQUE7TUFDQTtRQUNBO1FBQ0E7VUFDQUM7UUFDQTtVQUNBQTtVQUNBO1lBQ0FBO1VBQ0E7VUFDQTtZQUNBQTtVQUNBO1VBQ0E7WUFDQUE7VUFDQTtVQUNBO1lBQ0FBO1VBQ0E7UUFDQTtRQUNBO01BQ0E7TUFDQTtRQUNBQztNQUNBO1FBQ0E7VUFDQUE7UUFDQTtNQUNBO01BRUE7SUFDQTtJQUNBQztNQUNBO1FBQ0FDO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO01BQ0E7SUFDQTtJQUNBO0lBQ0FDO01BQ0E7UUFDQUQ7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7TUFDQTtJQUNBO0lBQ0E7SUFDQUU7TUFDQTtJQUNBO0VBQ0E7QUFDQTtBQUFBLDRCIiwiZmlsZSI6IjE5OS5qcyIsInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cblx0PHZpZXcgdi1pZj1cImlzU2hvd1wiIHJlZj1cImFuaVwiIDphbmltYXRpb249XCJhbmltYXRpb25EYXRhXCIgOmNsYXNzPVwiY3VzdG9tQ2xhc3NcIiA6c3R5bGU9XCJ0cmFuc2Zvcm1TdHlsZXNcIiBAY2xpY2s9XCJvbkNsaWNrXCI+PHNsb3Q+PC9zbG90Pjwvdmlldz5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5pbXBvcnQgeyBjcmVhdGVBbmltYXRpb24gfSBmcm9tICcuL2NyZWF0ZUFuaW1hdGlvbidcblxuLyoqXG4gKiBUcmFuc2l0aW9uIOi/h+a4oeWKqOeUu1xuICogQGRlc2NyaXB0aW9uIOeugOWNlei/h+a4oeWKqOeUu+e7hOS7tlxuICogQHR1dG9yaWFsIGh0dHBzOi8vZXh0LmRjbG91ZC5uZXQuY24vcGx1Z2luP2lkPTk4NVxuICogQHByb3BlcnR5IHtCb29sZWFufSBzaG93ID0gW2ZhbHNlfHRydWVdIOaOp+WItue7hOS7tuaYvuekuuaIlumakOiXj1xuICogQHByb3BlcnR5IHtBcnJheXxTdHJpbmd9IG1vZGVDbGFzcyA9IFtmYWRlfHNsaWRlLXRvcHxzbGlkZS1yaWdodHxzbGlkZS1ib3R0b218c2xpZGUtbGVmdHx6b29tLWlufHpvb20tb3V0XSDov4fmuKHliqjnlLvnsbvlnotcbiAqICBAdmFsdWUgZmFkZSDmuJDpmpDmuJDlh7rov4fmuKFcbiAqICBAdmFsdWUgc2xpZGUtdG9wIOeUseS4iuiHs+S4i+i/h+a4oVxuICogIEB2YWx1ZSBzbGlkZS1yaWdodCDnlLHlj7Poh7Plt6bov4fmuKFcbiAqICBAdmFsdWUgc2xpZGUtYm90dG9tIOeUseS4i+iHs+S4iui/h+a4oVxuICogIEB2YWx1ZSBzbGlkZS1sZWZ0IOeUseW3puiHs+WPs+i/h+a4oVxuICogIEB2YWx1ZSB6b29tLWluIOeUseWwj+WIsOWkp+i/h+a4oVxuICogIEB2YWx1ZSB6b29tLW91dCDnlLHlpKfliLDlsI/ov4fmuKFcbiAqIEBwcm9wZXJ0eSB7TnVtYmVyfSBkdXJhdGlvbiDov4fmuKHliqjnlLvmjIHnu63ml7bpl7RcbiAqIEBwcm9wZXJ0eSB7T2JqZWN0fSBzdHlsZXMg57uE5Lu25qC35byP77yM5ZCMIGNzcyDmoLflvI/vvIzms6jmhI/luKbigJkt4oCY6L+e5o6l56ym55qE5bGe5oCn6ZyA6KaB5L2/55So5bCP6am85bOw5YaZ5rOV5aaC77yaYGJhY2tncm91bmRDb2xvcjpyZWRgXG4gKi9cbmV4cG9ydCBkZWZhdWx0IHtcblx0bmFtZTogJ3VuaVRyYW5zaXRpb24nLFxuXHRlbWl0czpbJ2NsaWNrJywnY2hhbmdlJ10sXG5cdHByb3BzOiB7XG5cdFx0c2hvdzoge1xuXHRcdFx0dHlwZTogQm9vbGVhbixcblx0XHRcdGRlZmF1bHQ6IGZhbHNlXG5cdFx0fSxcblx0XHRtb2RlQ2xhc3M6IHtcblx0XHRcdHR5cGU6IFtBcnJheSwgU3RyaW5nXSxcblx0XHRcdGRlZmF1bHQoKSB7XG5cdFx0XHRcdHJldHVybiAnZmFkZSdcblx0XHRcdH1cblx0XHR9LFxuXHRcdGR1cmF0aW9uOiB7XG5cdFx0XHR0eXBlOiBOdW1iZXIsXG5cdFx0XHRkZWZhdWx0OiAzMDBcblx0XHR9LFxuXHRcdHN0eWxlczoge1xuXHRcdFx0dHlwZTogT2JqZWN0LFxuXHRcdFx0ZGVmYXVsdCgpIHtcblx0XHRcdFx0cmV0dXJuIHt9XG5cdFx0XHR9XG5cdFx0fSxcblx0XHRjdXN0b21DbGFzczp7XG5cdFx0XHR0eXBlOiBTdHJpbmcsXG5cdFx0XHRkZWZhdWx0OiAnJ1xuXHRcdH1cblx0fSxcblx0ZGF0YSgpIHtcblx0XHRyZXR1cm4ge1xuXHRcdFx0aXNTaG93OiBmYWxzZSxcblx0XHRcdHRyYW5zZm9ybTogJycsXG5cdFx0XHRvcGFjaXR5OiAxLFxuXHRcdFx0YW5pbWF0aW9uRGF0YToge30sXG5cdFx0XHRkdXJhdGlvblRpbWU6IDMwMCxcblx0XHRcdGNvbmZpZzoge31cblx0XHR9XG5cdH0sXG5cdHdhdGNoOiB7XG5cdFx0c2hvdzoge1xuXHRcdFx0aGFuZGxlcihuZXdWYWwpIHtcblx0XHRcdFx0aWYgKG5ld1ZhbCkge1xuXHRcdFx0XHRcdHRoaXMub3BlbigpXG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0Ly8g6YG/5YWN5LiK5p2l5bCx5omn6KGMIGNsb3NlLOWvvOiHtOWKqOeUu+mUmeS5sVxuXHRcdFx0XHRcdGlmICh0aGlzLmlzU2hvdykge1xuXHRcdFx0XHRcdFx0dGhpcy5jbG9zZSgpXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9LFxuXHRcdFx0aW1tZWRpYXRlOiB0cnVlXG5cdFx0fVxuXHR9LFxuXHRjb21wdXRlZDoge1xuXHRcdC8vIOeUn+aIkOagt+W8j+aVsOaNrlxuXHRcdHN0eWxlc09iamVjdCgpIHtcblx0XHRcdGxldCBzdHlsZXMgPSB7XG5cdFx0XHRcdC4uLnRoaXMuc3R5bGVzLFxuXHRcdFx0XHQndHJhbnNpdGlvbi1kdXJhdGlvbic6IHRoaXMuZHVyYXRpb24gLyAxMDAwICsgJ3MnXG5cdFx0XHR9XG5cdFx0XHRsZXQgdHJhbnNmb3JtID0gJydcblx0XHRcdGZvciAobGV0IGkgaW4gc3R5bGVzKSB7XG5cdFx0XHRcdGxldCBsaW5lID0gdGhpcy50b0xpbmUoaSlcblx0XHRcdFx0dHJhbnNmb3JtICs9IGxpbmUgKyAnOicgKyBzdHlsZXNbaV0gKyAnOydcblx0XHRcdH1cblx0XHRcdHJldHVybiB0cmFuc2Zvcm1cblx0XHR9LFxuXHRcdC8vIOWIneWni+WMluWKqOeUu+adoeS7tlxuXHRcdHRyYW5zZm9ybVN0eWxlcygpIHtcblx0XHRcdHJldHVybiAndHJhbnNmb3JtOicgKyB0aGlzLnRyYW5zZm9ybSArICc7JyArICdvcGFjaXR5OicgKyB0aGlzLm9wYWNpdHkgKyAnOycgKyB0aGlzLnN0eWxlc09iamVjdFxuXHRcdH1cblx0fSxcblx0Y3JlYXRlZCgpIHtcblx0XHQvLyDliqjnlLvpu5jorqTphY3nva5cblx0XHR0aGlzLmNvbmZpZyA9IHtcblx0XHRcdGR1cmF0aW9uOiB0aGlzLmR1cmF0aW9uLFxuXHRcdFx0dGltaW5nRnVuY3Rpb246ICdlYXNlJyxcblx0XHRcdHRyYW5zZm9ybU9yaWdpbjogJzUwJSA1MCUnLFxuXHRcdFx0ZGVsYXk6IDBcblx0XHR9XG5cdFx0dGhpcy5kdXJhdGlvblRpbWUgPSB0aGlzLmR1cmF0aW9uXG5cdH0sXG5cdG1ldGhvZHM6IHtcblx0XHQvKipcblx0XHQgKiAgcmVmIOinpuWPkSDliJ3lp4vljJbliqjnlLtcblx0XHQgKi9cblx0XHRpbml0KG9iaiA9IHt9KSB7XG5cdFx0XHRpZiAob2JqLmR1cmF0aW9uKSB7XG5cdFx0XHRcdHRoaXMuZHVyYXRpb25UaW1lID0gb2JqLmR1cmF0aW9uXG5cdFx0XHR9XG5cdFx0XHR0aGlzLmFuaW1hdGlvbiA9IGNyZWF0ZUFuaW1hdGlvbihPYmplY3QuYXNzaWduKHRoaXMuY29uZmlnLCBvYmopKVxuXHRcdH0sXG5cdFx0LyoqXG5cdFx0ICog54K55Ye757uE5Lu26Kem5Y+R5Zue6LCDXG5cdFx0ICovXG5cdFx0b25DbGljaygpIHtcblx0XHRcdHRoaXMuJGVtaXQoJ2NsaWNrJywge1xuXHRcdFx0XHRkZXRhaWw6IHRoaXMuaXNTaG93XG5cdFx0XHR9KVxuXHRcdH0sXG5cdFx0LyoqXG5cdFx0ICogcmVmIOinpuWPkSDliqjnlLvliIbnu4Rcblx0XHQgKiBAcGFyYW0ge09iamVjdH0gb2JqXG5cdFx0ICovXG5cdFx0c3RlcChvYmosIGNvbmZpZyA9IHt9KSB7XG5cdFx0XHRpZiAoIXRoaXMuYW5pbWF0aW9uKSByZXR1cm5cblx0XHRcdGZvciAobGV0IGkgaW4gb2JqKSB7XG5cdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0aWYodHlwZW9mIG9ialtpXSA9PT0gJ29iamVjdCcpe1xuXHRcdFx0XHRcdFx0dGhpcy5hbmltYXRpb25baV0oLi4ub2JqW2ldKVxuXHRcdFx0XHRcdH1lbHNle1xuXHRcdFx0XHRcdFx0dGhpcy5hbmltYXRpb25baV0ob2JqW2ldKVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSBjYXRjaCAoZSkge1xuXHRcdFx0XHRcdGNvbnNvbGUuZXJyb3IoYOaWueazlSAke2l9IOS4jeWtmOWcqGApXG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdHRoaXMuYW5pbWF0aW9uLnN0ZXAoY29uZmlnKVxuXHRcdFx0cmV0dXJuIHRoaXNcblx0XHR9LFxuXHRcdC8qKlxuXHRcdCAqICByZWYg6Kem5Y+RIOaJp+ihjOWKqOeUu1xuXHRcdCAqL1xuXHRcdHJ1bihmbikge1xuXHRcdFx0aWYgKCF0aGlzLmFuaW1hdGlvbikgcmV0dXJuXG5cdFx0XHR0aGlzLmFuaW1hdGlvbi5ydW4oZm4pXG5cdFx0fSxcblx0XHQvLyDlvIDlp4vov4fluqbliqjnlLtcblx0XHRvcGVuKCkge1xuXHRcdFx0Y2xlYXJUaW1lb3V0KHRoaXMudGltZXIpXG5cdFx0XHR0aGlzLnRyYW5zZm9ybSA9ICcnXG5cdFx0XHR0aGlzLmlzU2hvdyA9IHRydWVcblx0XHRcdGxldCB7IG9wYWNpdHksIHRyYW5zZm9ybSB9ID0gdGhpcy5zdHlsZUluaXQoZmFsc2UpXG5cdFx0XHRpZiAodHlwZW9mIG9wYWNpdHkgIT09ICd1bmRlZmluZWQnKSB7XG5cdFx0XHRcdHRoaXMub3BhY2l0eSA9IG9wYWNpdHlcblx0XHRcdH1cblx0XHRcdHRoaXMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG5cdFx0XHQvLyDnoa7kv53liqjmgIHmoLflvI/lt7Lnu4/nlJ/mlYjlkI7vvIzmiafooYzliqjnlLvvvIzlpoLmnpzkuI3liqAgbmV4dFRpY2sg77yM5Lya5a+86Ie0IHd4IOWKqOeUu+aJp+ihjOW8guW4uFxuXHRcdFx0dGhpcy4kbmV4dFRpY2soKCkgPT4ge1xuXHRcdFx0XHQvLyBUT0RPIOWumuaXtuWZqOS/neivgeWKqOeUu+WujOWFqOaJp+ihjO+8jOebruWJjeacieS6m+mXrumimO+8jOWQjumdouS8muWPlua2iOWumuaXtuWZqFxuXHRcdFx0XHR0aGlzLnRpbWVyID0gc2V0VGltZW91dCgoKSA9PiB7XG5cdFx0XHRcdFx0dGhpcy5hbmltYXRpb24gPSBjcmVhdGVBbmltYXRpb24odGhpcy5jb25maWcsIHRoaXMpXG5cdFx0XHRcdFx0dGhpcy50cmFuZnJvbUluaXQoZmFsc2UpLnN0ZXAoKVxuXHRcdFx0XHRcdHRoaXMuYW5pbWF0aW9uLnJ1bigpXG5cdFx0XHRcdFx0dGhpcy4kZW1pdCgnY2hhbmdlJywge1xuXHRcdFx0XHRcdFx0ZGV0YWlsOiB0aGlzLmlzU2hvd1xuXHRcdFx0XHRcdH0pXG5cdFx0XHRcdH0sIDIwKVxuXHRcdFx0fSlcblx0XHR9LFxuXHRcdC8vIOWFs+mXrei/h+W6puWKqOeUu1xuXHRcdGNsb3NlKHR5cGUpIHtcblx0XHRcdGlmICghdGhpcy5hbmltYXRpb24pIHJldHVyblxuXHRcdFx0dGhpcy50cmFuZnJvbUluaXQodHJ1ZSlcblx0XHRcdFx0LnN0ZXAoKVxuXHRcdFx0XHQucnVuKCgpID0+IHtcblx0XHRcdFx0XHR0aGlzLmlzU2hvdyA9IGZhbHNlXG5cdFx0XHRcdFx0dGhpcy5hbmltYXRpb25EYXRhID0gbnVsbFxuXHRcdFx0XHRcdHRoaXMuYW5pbWF0aW9uID0gbnVsbFxuXHRcdFx0XHRcdGxldCB7IG9wYWNpdHksIHRyYW5zZm9ybSB9ID0gdGhpcy5zdHlsZUluaXQoZmFsc2UpXG5cdFx0XHRcdFx0dGhpcy5vcGFjaXR5ID0gb3BhY2l0eSB8fCAxXG5cdFx0XHRcdFx0dGhpcy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cblx0XHRcdFx0XHR0aGlzLiRlbWl0KCdjaGFuZ2UnLCB7XG5cdFx0XHRcdFx0XHRkZXRhaWw6IHRoaXMuaXNTaG93XG5cdFx0XHRcdFx0fSlcblx0XHRcdFx0fSlcblx0XHR9LFxuXHRcdC8vIOWkhOeQhuWKqOeUu+W8gOWni+WJjeeahOm7mOiupOagt+W8j1xuXHRcdHN0eWxlSW5pdCh0eXBlKSB7XG5cdFx0XHRsZXQgc3R5bGVzID0ge1xuXHRcdFx0XHR0cmFuc2Zvcm06ICcnXG5cdFx0XHR9XG5cdFx0XHRsZXQgYnVpbGRTdHlsZSA9ICh0eXBlLCBtb2RlKSA9PiB7XG5cdFx0XHRcdGlmIChtb2RlID09PSAnZmFkZScpIHtcblx0XHRcdFx0XHRzdHlsZXMub3BhY2l0eSA9IHRoaXMuYW5pbWF0aW9uVHlwZSh0eXBlKVttb2RlXVxuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHN0eWxlcy50cmFuc2Zvcm0gKz0gdGhpcy5hbmltYXRpb25UeXBlKHR5cGUpW21vZGVdICsgJyAnXG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdGlmICh0eXBlb2YgdGhpcy5tb2RlQ2xhc3MgPT09ICdzdHJpbmcnKSB7XG5cdFx0XHRcdGJ1aWxkU3R5bGUodHlwZSwgdGhpcy5tb2RlQ2xhc3MpXG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR0aGlzLm1vZGVDbGFzcy5mb3JFYWNoKG1vZGUgPT4ge1xuXHRcdFx0XHRcdGJ1aWxkU3R5bGUodHlwZSwgbW9kZSlcblx0XHRcdFx0fSlcblx0XHRcdH1cblx0XHRcdHJldHVybiBzdHlsZXNcblx0XHR9LFxuXHRcdC8vIOWkhOeQhuWGhee9rue7hOWQiOWKqOeUu1xuXHRcdHRyYW5mcm9tSW5pdCh0eXBlKSB7XG5cdFx0XHRsZXQgYnVpbGRUcmFuZnJvbSA9ICh0eXBlLCBtb2RlKSA9PiB7XG5cdFx0XHRcdGxldCBhbmlOdW0gPSBudWxsXG5cdFx0XHRcdGlmIChtb2RlID09PSAnZmFkZScpIHtcblx0XHRcdFx0XHRhbmlOdW0gPSB0eXBlID8gMCA6IDFcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRhbmlOdW0gPSB0eXBlID8gJy0xMDAlJyA6ICcwJ1xuXHRcdFx0XHRcdGlmIChtb2RlID09PSAnem9vbS1pbicpIHtcblx0XHRcdFx0XHRcdGFuaU51bSA9IHR5cGUgPyAwLjggOiAxXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGlmIChtb2RlID09PSAnem9vbS1vdXQnKSB7XG5cdFx0XHRcdFx0XHRhbmlOdW0gPSB0eXBlID8gMS4yIDogMVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRpZiAobW9kZSA9PT0gJ3NsaWRlLXJpZ2h0Jykge1xuXHRcdFx0XHRcdFx0YW5pTnVtID0gdHlwZSA/ICcxMDAlJyA6ICcwJ1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRpZiAobW9kZSA9PT0gJ3NsaWRlLWJvdHRvbScpIHtcblx0XHRcdFx0XHRcdGFuaU51bSA9IHR5cGUgPyAnMTAwJScgOiAnMCdcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdFx0dGhpcy5hbmltYXRpb25bdGhpcy5hbmltYXRpb25Nb2RlKClbbW9kZV1dKGFuaU51bSlcblx0XHRcdH1cblx0XHRcdGlmICh0eXBlb2YgdGhpcy5tb2RlQ2xhc3MgPT09ICdzdHJpbmcnKSB7XG5cdFx0XHRcdGJ1aWxkVHJhbmZyb20odHlwZSwgdGhpcy5tb2RlQ2xhc3MpXG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR0aGlzLm1vZGVDbGFzcy5mb3JFYWNoKG1vZGUgPT4ge1xuXHRcdFx0XHRcdGJ1aWxkVHJhbmZyb20odHlwZSwgbW9kZSlcblx0XHRcdFx0fSlcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIHRoaXMuYW5pbWF0aW9uXG5cdFx0fSxcblx0XHRhbmltYXRpb25UeXBlKHR5cGUpIHtcblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdGZhZGU6IHR5cGUgPyAxIDogMCxcblx0XHRcdFx0J3NsaWRlLXRvcCc6IGB0cmFuc2xhdGVZKCR7dHlwZSA/ICcwJyA6ICctMTAwJSd9KWAsXG5cdFx0XHRcdCdzbGlkZS1yaWdodCc6IGB0cmFuc2xhdGVYKCR7dHlwZSA/ICcwJyA6ICcxMDAlJ30pYCxcblx0XHRcdFx0J3NsaWRlLWJvdHRvbSc6IGB0cmFuc2xhdGVZKCR7dHlwZSA/ICcwJyA6ICcxMDAlJ30pYCxcblx0XHRcdFx0J3NsaWRlLWxlZnQnOiBgdHJhbnNsYXRlWCgke3R5cGUgPyAnMCcgOiAnLTEwMCUnfSlgLFxuXHRcdFx0XHQnem9vbS1pbic6IGBzY2FsZVgoJHt0eXBlID8gMSA6IDAuOH0pIHNjYWxlWSgke3R5cGUgPyAxIDogMC44fSlgLFxuXHRcdFx0XHQnem9vbS1vdXQnOiBgc2NhbGVYKCR7dHlwZSA/IDEgOiAxLjJ9KSBzY2FsZVkoJHt0eXBlID8gMSA6IDEuMn0pYFxuXHRcdFx0fVxuXHRcdH0sXG5cdFx0Ly8g5YaF572u5Yqo55S757G75Z6L5LiO5a6e6ZmF5Yqo55S75a+55bqU5a2X5YW4XG5cdFx0YW5pbWF0aW9uTW9kZSgpIHtcblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdGZhZGU6ICdvcGFjaXR5Jyxcblx0XHRcdFx0J3NsaWRlLXRvcCc6ICd0cmFuc2xhdGVZJyxcblx0XHRcdFx0J3NsaWRlLXJpZ2h0JzogJ3RyYW5zbGF0ZVgnLFxuXHRcdFx0XHQnc2xpZGUtYm90dG9tJzogJ3RyYW5zbGF0ZVknLFxuXHRcdFx0XHQnc2xpZGUtbGVmdCc6ICd0cmFuc2xhdGVYJyxcblx0XHRcdFx0J3pvb20taW4nOiAnc2NhbGUnLFxuXHRcdFx0XHQnem9vbS1vdXQnOiAnc2NhbGUnXG5cdFx0XHR9XG5cdFx0fSxcblx0XHQvLyDpqbzls7DovazkuK3mqKrnur9cblx0XHR0b0xpbmUobmFtZSkge1xuXHRcdFx0cmV0dXJuIG5hbWUucmVwbGFjZSgvKFtBLVpdKS9nLCAnLSQxJykudG9Mb3dlckNhc2UoKVxuXHRcdH1cblx0fVxufVxuPC9zY3JpcHQ+XG5cbjxzdHlsZT48L3N0eWxlPlxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///199\n");

/***/ }),
/* 200 */
/*!*******************************************************************************************************************************!*\
  !*** C:/Users/TAOER/Desktop/ShayuVideo/ShayuVideoAPP/uni_modules/uni-transition/components/uni-transition/createAnimation.js ***!
  \*******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__webpack_provided_uni_dot_requireNativePlugin) {\n\nvar _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 150);\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.createAnimation = createAnimation;\nvar _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ 166));\nvar _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ 177));\nvar _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ 178));\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }\n// const defaultOption = {\n// \tduration: 300,\n// \ttimingFunction: 'linear',\n// \tdelay: 0,\n// \ttransformOrigin: '50% 50% 0'\n// }\n\nvar nvueAnimation = __webpack_provided_uni_dot_requireNativePlugin('animation');\nvar MPAnimation = /*#__PURE__*/function () {\n  function MPAnimation(options, _this) {\n    (0, _classCallCheck2.default)(this, MPAnimation);\n    this.options = options;\n    this.animation = uni.createAnimation(options);\n    this.currentStepAnimates = {};\n    this.next = 0;\n    this.$ = _this;\n  }\n  (0, _createClass2.default)(MPAnimation, [{\n    key: \"_nvuePushAnimates\",\n    value: function _nvuePushAnimates(type, args) {\n      var aniObj = this.currentStepAnimates[this.next];\n      var styles = {};\n      if (!aniObj) {\n        styles = {\n          styles: {},\n          config: {}\n        };\n      } else {\n        styles = aniObj;\n      }\n      if (animateTypes1.includes(type)) {\n        if (!styles.styles.transform) {\n          styles.styles.transform = '';\n        }\n        var unit = '';\n        if (type === 'rotate') {\n          unit = 'deg';\n        }\n        styles.styles.transform += \"\".concat(type, \"(\").concat(args + unit, \") \");\n      } else {\n        styles.styles[type] = \"\".concat(args);\n      }\n      this.currentStepAnimates[this.next] = styles;\n    }\n  }, {\n    key: \"_animateRun\",\n    value: function _animateRun() {\n      var styles = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};\n      var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};\n      var ref = this.$.$refs['ani'].ref;\n      if (!ref) return;\n      return new Promise(function (resolve, reject) {\n        nvueAnimation.transition(ref, _objectSpread({\n          styles: styles\n        }, config), function (res) {\n          resolve();\n        });\n      });\n    }\n  }, {\n    key: \"_nvueNextAnimate\",\n    value: function _nvueNextAnimate(animates) {\n      var _this2 = this;\n      var step = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;\n      var fn = arguments.length > 2 ? arguments[2] : undefined;\n      var obj = animates[step];\n      if (obj) {\n        var styles = obj.styles,\n          config = obj.config;\n        this._animateRun(styles, config).then(function () {\n          step += 1;\n          _this2._nvueNextAnimate(animates, step, fn);\n        });\n      } else {\n        this.currentStepAnimates = {};\n        typeof fn === 'function' && fn();\n        this.isEnd = true;\n      }\n    }\n  }, {\n    key: \"step\",\n    value: function step() {\n      var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};\n      this.currentStepAnimates[this.next].config = Object.assign({}, this.options, config);\n      this.currentStepAnimates[this.next].styles.transformOrigin = this.currentStepAnimates[this.next].config.transformOrigin;\n      this.next++;\n      return this;\n    }\n  }, {\n    key: \"run\",\n    value: function run(fn) {\n      this.isEnd = false;\n      var ref = this.$.$refs['ani'] && this.$.$refs['ani'].ref;\n      if (!ref) return;\n      this._nvueNextAnimate(this.currentStepAnimates, 0, fn);\n      this.next = 0;\n    }\n  }]);\n  return MPAnimation;\n}();\nvar animateTypes1 = ['matrix', 'matrix3d', 'rotate', 'rotate3d', 'rotateX', 'rotateY', 'rotateZ', 'scale', 'scale3d', 'scaleX', 'scaleY', 'scaleZ', 'skew', 'skewX', 'skewY', 'translate', 'translate3d', 'translateX', 'translateY', 'translateZ'];\nvar animateTypes2 = ['opacity', 'backgroundColor'];\nvar animateTypes3 = ['width', 'height', 'left', 'right', 'top', 'bottom'];\nanimateTypes1.concat(animateTypes2, animateTypes3).forEach(function (type) {\n  MPAnimation.prototype[type] = function () {\n    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n    this._nvuePushAnimates(type, args);\n    return this;\n  };\n});\nfunction createAnimation(option, _this) {\n  if (!_this) return;\n  clearTimeout(_this.timer);\n  return new MPAnimation(option, _this);\n}\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/uni-app-plus-nvue/dist/require-native-plugin.js */ 149)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vdW5pX21vZHVsZXMvdW5pLXRyYW5zaXRpb24vY29tcG9uZW50cy91bmktdHJhbnNpdGlvbi9jcmVhdGVBbmltYXRpb24uanMiXSwibmFtZXMiOlsibnZ1ZUFuaW1hdGlvbiIsInVuaSIsIk1QQW5pbWF0aW9uIiwib3B0aW9ucyIsIl90aGlzIiwiYW5pbWF0aW9uIiwiY3JlYXRlQW5pbWF0aW9uIiwiY3VycmVudFN0ZXBBbmltYXRlcyIsIm5leHQiLCIkIiwidHlwZSIsImFyZ3MiLCJhbmlPYmoiLCJzdHlsZXMiLCJjb25maWciLCJhbmltYXRlVHlwZXMxIiwiaW5jbHVkZXMiLCJ0cmFuc2Zvcm0iLCJ1bml0IiwicmVmIiwiJHJlZnMiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsInRyYW5zaXRpb24iLCJyZXMiLCJhbmltYXRlcyIsInN0ZXAiLCJmbiIsIm9iaiIsIl9hbmltYXRlUnVuIiwidGhlbiIsIl9udnVlTmV4dEFuaW1hdGUiLCJpc0VuZCIsIk9iamVjdCIsImFzc2lnbiIsInRyYW5zZm9ybU9yaWdpbiIsImFuaW1hdGVUeXBlczIiLCJhbmltYXRlVHlwZXMzIiwiY29uY2F0IiwiZm9yRWFjaCIsInByb3RvdHlwZSIsIl9udnVlUHVzaEFuaW1hdGVzIiwib3B0aW9uIiwiY2xlYXJUaW1lb3V0IiwidGltZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxhQUFhLEdBQUdDLDhDQUF1QixDQUFDLFdBQVcsQ0FBQztBQUFBLElBRXBEQyxXQUFXO0VBQ2hCLHFCQUFZQyxPQUFPLEVBQUVDLEtBQUssRUFBRTtJQUFBO0lBQzNCLElBQUksQ0FBQ0QsT0FBTyxHQUFHQSxPQUFPO0lBQ3RCLElBQUksQ0FBQ0UsU0FBUyxHQUFHSixHQUFHLENBQUNLLGVBQWUsQ0FBQ0gsT0FBTyxDQUFDO0lBQzdDLElBQUksQ0FBQ0ksbUJBQW1CLEdBQUcsQ0FBQyxDQUFDO0lBQzdCLElBQUksQ0FBQ0MsSUFBSSxHQUFHLENBQUM7SUFDYixJQUFJLENBQUNDLENBQUMsR0FBR0wsS0FBSztFQUVmO0VBQUM7SUFBQTtJQUFBLE9BRUQsMkJBQWtCTSxJQUFJLEVBQUVDLElBQUksRUFBRTtNQUM3QixJQUFJQyxNQUFNLEdBQUcsSUFBSSxDQUFDTCxtQkFBbUIsQ0FBQyxJQUFJLENBQUNDLElBQUksQ0FBQztNQUNoRCxJQUFJSyxNQUFNLEdBQUcsQ0FBQyxDQUFDO01BQ2YsSUFBSSxDQUFDRCxNQUFNLEVBQUU7UUFDWkMsTUFBTSxHQUFHO1VBQ1JBLE1BQU0sRUFBRSxDQUFDLENBQUM7VUFDVkMsTUFBTSxFQUFFLENBQUM7UUFDVixDQUFDO01BQ0YsQ0FBQyxNQUFNO1FBQ05ELE1BQU0sR0FBR0QsTUFBTTtNQUNoQjtNQUNBLElBQUlHLGFBQWEsQ0FBQ0MsUUFBUSxDQUFDTixJQUFJLENBQUMsRUFBRTtRQUNqQyxJQUFJLENBQUNHLE1BQU0sQ0FBQ0EsTUFBTSxDQUFDSSxTQUFTLEVBQUU7VUFDN0JKLE1BQU0sQ0FBQ0EsTUFBTSxDQUFDSSxTQUFTLEdBQUcsRUFBRTtRQUM3QjtRQUNBLElBQUlDLElBQUksR0FBRyxFQUFFO1FBQ2IsSUFBR1IsSUFBSSxLQUFLLFFBQVEsRUFBQztVQUNwQlEsSUFBSSxHQUFHLEtBQUs7UUFDYjtRQUNBTCxNQUFNLENBQUNBLE1BQU0sQ0FBQ0ksU0FBUyxjQUFPUCxJQUFJLGNBQUlDLElBQUksR0FBQ08sSUFBSSxPQUFJO01BQ3BELENBQUMsTUFBTTtRQUNOTCxNQUFNLENBQUNBLE1BQU0sQ0FBQ0gsSUFBSSxDQUFDLGFBQU1DLElBQUksQ0FBRTtNQUNoQztNQUNBLElBQUksQ0FBQ0osbUJBQW1CLENBQUMsSUFBSSxDQUFDQyxJQUFJLENBQUMsR0FBR0ssTUFBTTtJQUM3QztFQUFDO0lBQUE7SUFBQSxPQUNELHVCQUFzQztNQUFBLElBQTFCQSxNQUFNLHVFQUFHLENBQUMsQ0FBQztNQUFBLElBQUVDLE1BQU0sdUVBQUcsQ0FBQyxDQUFDO01BQ25DLElBQUlLLEdBQUcsR0FBRyxJQUFJLENBQUNWLENBQUMsQ0FBQ1csS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDRCxHQUFHO01BQ2pDLElBQUksQ0FBQ0EsR0FBRyxFQUFFO01BQ1YsT0FBTyxJQUFJRSxPQUFPLENBQUMsVUFBQ0MsT0FBTyxFQUFFQyxNQUFNLEVBQUs7UUFDdkN2QixhQUFhLENBQUN3QixVQUFVLENBQUNMLEdBQUc7VUFDM0JOLE1BQU0sRUFBTkE7UUFBTSxHQUNIQyxNQUFNLEdBQ1AsVUFBQVcsR0FBRyxFQUFJO1VBQ1RILE9BQU8sRUFBRTtRQUNWLENBQUMsQ0FBQztNQUNILENBQUMsQ0FBQztJQUNIO0VBQUM7SUFBQTtJQUFBLE9BRUQsMEJBQWlCSSxRQUFRLEVBQWdCO01BQUE7TUFBQSxJQUFkQyxJQUFJLHVFQUFHLENBQUM7TUFBQSxJQUFFQyxFQUFFO01BQ3RDLElBQUlDLEdBQUcsR0FBR0gsUUFBUSxDQUFDQyxJQUFJLENBQUM7TUFDeEIsSUFBSUUsR0FBRyxFQUFFO1FBQ1IsSUFDQ2hCLE1BQU0sR0FFSGdCLEdBQUcsQ0FGTmhCLE1BQU07VUFDTkMsTUFBTSxHQUNIZSxHQUFHLENBRE5mLE1BQU07UUFFUCxJQUFJLENBQUNnQixXQUFXLENBQUNqQixNQUFNLEVBQUVDLE1BQU0sQ0FBQyxDQUFDaUIsSUFBSSxDQUFDLFlBQU07VUFDM0NKLElBQUksSUFBSSxDQUFDO1VBQ1QsTUFBSSxDQUFDSyxnQkFBZ0IsQ0FBQ04sUUFBUSxFQUFFQyxJQUFJLEVBQUVDLEVBQUUsQ0FBQztRQUMxQyxDQUFDLENBQUM7TUFDSCxDQUFDLE1BQU07UUFDTixJQUFJLENBQUNyQixtQkFBbUIsR0FBRyxDQUFDLENBQUM7UUFDN0IsT0FBT3FCLEVBQUUsS0FBSyxVQUFVLElBQUlBLEVBQUUsRUFBRTtRQUNoQyxJQUFJLENBQUNLLEtBQUssR0FBRyxJQUFJO01BQ2xCO0lBQ0Q7RUFBQztJQUFBO0lBQUEsT0FFRCxnQkFBa0I7TUFBQSxJQUFibkIsTUFBTSx1RUFBRyxDQUFDLENBQUM7TUFLZixJQUFJLENBQUNQLG1CQUFtQixDQUFDLElBQUksQ0FBQ0MsSUFBSSxDQUFDLENBQUNNLE1BQU0sR0FBR29CLE1BQU0sQ0FBQ0MsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQ2hDLE9BQU8sRUFBRVcsTUFBTSxDQUFDO01BQ3BGLElBQUksQ0FBQ1AsbUJBQW1CLENBQUMsSUFBSSxDQUFDQyxJQUFJLENBQUMsQ0FBQ0ssTUFBTSxDQUFDdUIsZUFBZSxHQUFHLElBQUksQ0FBQzdCLG1CQUFtQixDQUFDLElBQUksQ0FBQ0MsSUFBSSxDQUFDLENBQUNNLE1BQU0sQ0FBQ3NCLGVBQWU7TUFDdkgsSUFBSSxDQUFDNUIsSUFBSSxFQUFFO01BRVgsT0FBTyxJQUFJO0lBQ1o7RUFBQztJQUFBO0lBQUEsT0FFRCxhQUFJb0IsRUFBRSxFQUFFO01BUVAsSUFBSSxDQUFDSyxLQUFLLEdBQUcsS0FBSztNQUNsQixJQUFJZCxHQUFHLEdBQUcsSUFBSSxDQUFDVixDQUFDLENBQUNXLEtBQUssQ0FBQyxLQUFLLENBQUMsSUFBSSxJQUFJLENBQUNYLENBQUMsQ0FBQ1csS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDRCxHQUFHO01BQ3hELElBQUcsQ0FBQ0EsR0FBRyxFQUFFO01BQ1QsSUFBSSxDQUFDYSxnQkFBZ0IsQ0FBQyxJQUFJLENBQUN6QixtQkFBbUIsRUFBRSxDQUFDLEVBQUVxQixFQUFFLENBQUM7TUFDdEQsSUFBSSxDQUFDcEIsSUFBSSxHQUFHLENBQUM7SUFFZDtFQUFDO0VBQUE7QUFBQTtBQUlGLElBQU1PLGFBQWEsR0FBRyxDQUFDLFFBQVEsRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxPQUFPLEVBQUUsU0FBUyxFQUNySCxRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxXQUFXLEVBQUUsYUFBYSxFQUFFLFlBQVksRUFBRSxZQUFZLEVBQzlHLFlBQVksQ0FDWjtBQUNELElBQU1zQixhQUFhLEdBQUcsQ0FBQyxTQUFTLEVBQUUsaUJBQWlCLENBQUM7QUFDcEQsSUFBTUMsYUFBYSxHQUFHLENBQUMsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxRQUFRLENBQUM7QUFDM0V2QixhQUFhLENBQUN3QixNQUFNLENBQUNGLGFBQWEsRUFBRUMsYUFBYSxDQUFDLENBQUNFLE9BQU8sQ0FBQyxVQUFBOUIsSUFBSSxFQUFJO0VBQ2xFUixXQUFXLENBQUN1QyxTQUFTLENBQUMvQixJQUFJLENBQUMsR0FBRyxZQUFrQjtJQUFBLGtDQUFOQyxJQUFJO01BQUpBLElBQUk7SUFBQTtJQUs3QyxJQUFJLENBQUMrQixpQkFBaUIsQ0FBQ2hDLElBQUksRUFBRUMsSUFBSSxDQUFDO0lBRWxDLE9BQU8sSUFBSTtFQUNaLENBQUM7QUFDRixDQUFDLENBQUM7QUFFSyxTQUFTTCxlQUFlLENBQUNxQyxNQUFNLEVBQUV2QyxLQUFLLEVBQUU7RUFDOUMsSUFBRyxDQUFDQSxLQUFLLEVBQUU7RUFDWHdDLFlBQVksQ0FBQ3hDLEtBQUssQ0FBQ3lDLEtBQUssQ0FBQztFQUN6QixPQUFPLElBQUkzQyxXQUFXLENBQUN5QyxNQUFNLEVBQUV2QyxLQUFLLENBQUM7QUFDdEMsQyIsImZpbGUiOiIyMDAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBjb25zdCBkZWZhdWx0T3B0aW9uID0ge1xuLy8gXHRkdXJhdGlvbjogMzAwLFxuLy8gXHR0aW1pbmdGdW5jdGlvbjogJ2xpbmVhcicsXG4vLyBcdGRlbGF5OiAwLFxuLy8gXHR0cmFuc2Zvcm1PcmlnaW46ICc1MCUgNTAlIDAnXG4vLyB9XG5cbmNvbnN0IG52dWVBbmltYXRpb24gPSB1bmkucmVxdWlyZU5hdGl2ZVBsdWdpbignYW5pbWF0aW9uJylcblxuY2xhc3MgTVBBbmltYXRpb24ge1xuXHRjb25zdHJ1Y3RvcihvcHRpb25zLCBfdGhpcykge1xuXHRcdHRoaXMub3B0aW9ucyA9IG9wdGlvbnNcblx0XHR0aGlzLmFuaW1hdGlvbiA9IHVuaS5jcmVhdGVBbmltYXRpb24ob3B0aW9ucylcblx0XHR0aGlzLmN1cnJlbnRTdGVwQW5pbWF0ZXMgPSB7fVxuXHRcdHRoaXMubmV4dCA9IDBcblx0XHR0aGlzLiQgPSBfdGhpc1xuXG5cdH1cblxuXHRfbnZ1ZVB1c2hBbmltYXRlcyh0eXBlLCBhcmdzKSB7XG5cdFx0bGV0IGFuaU9iaiA9IHRoaXMuY3VycmVudFN0ZXBBbmltYXRlc1t0aGlzLm5leHRdXG5cdFx0bGV0IHN0eWxlcyA9IHt9XG5cdFx0aWYgKCFhbmlPYmopIHtcblx0XHRcdHN0eWxlcyA9IHtcblx0XHRcdFx0c3R5bGVzOiB7fSxcblx0XHRcdFx0Y29uZmlnOiB7fVxuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHRzdHlsZXMgPSBhbmlPYmpcblx0XHR9XG5cdFx0aWYgKGFuaW1hdGVUeXBlczEuaW5jbHVkZXModHlwZSkpIHtcblx0XHRcdGlmICghc3R5bGVzLnN0eWxlcy50cmFuc2Zvcm0pIHtcblx0XHRcdFx0c3R5bGVzLnN0eWxlcy50cmFuc2Zvcm0gPSAnJ1xuXHRcdFx0fVxuXHRcdFx0bGV0IHVuaXQgPSAnJ1xuXHRcdFx0aWYodHlwZSA9PT0gJ3JvdGF0ZScpe1xuXHRcdFx0XHR1bml0ID0gJ2RlZydcblx0XHRcdH1cblx0XHRcdHN0eWxlcy5zdHlsZXMudHJhbnNmb3JtICs9IGAke3R5cGV9KCR7YXJncyt1bml0fSkgYFxuXHRcdH0gZWxzZSB7XG5cdFx0XHRzdHlsZXMuc3R5bGVzW3R5cGVdID0gYCR7YXJnc31gXG5cdFx0fVxuXHRcdHRoaXMuY3VycmVudFN0ZXBBbmltYXRlc1t0aGlzLm5leHRdID0gc3R5bGVzXG5cdH1cblx0X2FuaW1hdGVSdW4oc3R5bGVzID0ge30sIGNvbmZpZyA9IHt9KSB7XG5cdFx0bGV0IHJlZiA9IHRoaXMuJC4kcmVmc1snYW5pJ10ucmVmXG5cdFx0aWYgKCFyZWYpIHJldHVyblxuXHRcdHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG5cdFx0XHRudnVlQW5pbWF0aW9uLnRyYW5zaXRpb24ocmVmLCB7XG5cdFx0XHRcdHN0eWxlcyxcblx0XHRcdFx0Li4uY29uZmlnXG5cdFx0XHR9LCByZXMgPT4ge1xuXHRcdFx0XHRyZXNvbHZlKClcblx0XHRcdH0pXG5cdFx0fSlcblx0fVxuXG5cdF9udnVlTmV4dEFuaW1hdGUoYW5pbWF0ZXMsIHN0ZXAgPSAwLCBmbikge1xuXHRcdGxldCBvYmogPSBhbmltYXRlc1tzdGVwXVxuXHRcdGlmIChvYmopIHtcblx0XHRcdGxldCB7XG5cdFx0XHRcdHN0eWxlcyxcblx0XHRcdFx0Y29uZmlnXG5cdFx0XHR9ID0gb2JqXG5cdFx0XHR0aGlzLl9hbmltYXRlUnVuKHN0eWxlcywgY29uZmlnKS50aGVuKCgpID0+IHtcblx0XHRcdFx0c3RlcCArPSAxXG5cdFx0XHRcdHRoaXMuX252dWVOZXh0QW5pbWF0ZShhbmltYXRlcywgc3RlcCwgZm4pXG5cdFx0XHR9KVxuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLmN1cnJlbnRTdGVwQW5pbWF0ZXMgPSB7fVxuXHRcdFx0dHlwZW9mIGZuID09PSAnZnVuY3Rpb24nICYmIGZuKClcblx0XHRcdHRoaXMuaXNFbmQgPSB0cnVlXG5cdFx0fVxuXHR9XG5cblx0c3RlcChjb25maWcgPSB7fSkge1xuXG5cblxuXG5cdFx0dGhpcy5jdXJyZW50U3RlcEFuaW1hdGVzW3RoaXMubmV4dF0uY29uZmlnID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5vcHRpb25zLCBjb25maWcpXG5cdFx0dGhpcy5jdXJyZW50U3RlcEFuaW1hdGVzW3RoaXMubmV4dF0uc3R5bGVzLnRyYW5zZm9ybU9yaWdpbiA9IHRoaXMuY3VycmVudFN0ZXBBbmltYXRlc1t0aGlzLm5leHRdLmNvbmZpZy50cmFuc2Zvcm1PcmlnaW5cblx0XHR0aGlzLm5leHQrK1xuXG5cdFx0cmV0dXJuIHRoaXNcblx0fVxuXG5cdHJ1bihmbikge1xuXG5cblxuXG5cblxuXG5cdFx0dGhpcy5pc0VuZCA9IGZhbHNlXG5cdFx0bGV0IHJlZiA9IHRoaXMuJC4kcmVmc1snYW5pJ10gJiYgdGhpcy4kLiRyZWZzWydhbmknXS5yZWZcblx0XHRpZighcmVmKSByZXR1cm5cblx0XHR0aGlzLl9udnVlTmV4dEFuaW1hdGUodGhpcy5jdXJyZW50U3RlcEFuaW1hdGVzLCAwLCBmbilcblx0XHR0aGlzLm5leHQgPSAwXG5cblx0fVxufVxuXG5cbmNvbnN0IGFuaW1hdGVUeXBlczEgPSBbJ21hdHJpeCcsICdtYXRyaXgzZCcsICdyb3RhdGUnLCAncm90YXRlM2QnLCAncm90YXRlWCcsICdyb3RhdGVZJywgJ3JvdGF0ZVonLCAnc2NhbGUnLCAnc2NhbGUzZCcsXG5cdCdzY2FsZVgnLCAnc2NhbGVZJywgJ3NjYWxlWicsICdza2V3JywgJ3NrZXdYJywgJ3NrZXdZJywgJ3RyYW5zbGF0ZScsICd0cmFuc2xhdGUzZCcsICd0cmFuc2xhdGVYJywgJ3RyYW5zbGF0ZVknLFxuXHQndHJhbnNsYXRlWidcbl1cbmNvbnN0IGFuaW1hdGVUeXBlczIgPSBbJ29wYWNpdHknLCAnYmFja2dyb3VuZENvbG9yJ11cbmNvbnN0IGFuaW1hdGVUeXBlczMgPSBbJ3dpZHRoJywgJ2hlaWdodCcsICdsZWZ0JywgJ3JpZ2h0JywgJ3RvcCcsICdib3R0b20nXVxuYW5pbWF0ZVR5cGVzMS5jb25jYXQoYW5pbWF0ZVR5cGVzMiwgYW5pbWF0ZVR5cGVzMykuZm9yRWFjaCh0eXBlID0+IHtcblx0TVBBbmltYXRpb24ucHJvdG90eXBlW3R5cGVdID0gZnVuY3Rpb24oLi4uYXJncykge1xuXG5cblxuXG5cdFx0dGhpcy5fbnZ1ZVB1c2hBbmltYXRlcyh0eXBlLCBhcmdzKVxuXG5cdFx0cmV0dXJuIHRoaXNcblx0fVxufSlcblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUFuaW1hdGlvbihvcHRpb24sIF90aGlzKSB7XG5cdGlmKCFfdGhpcykgcmV0dXJuXG5cdGNsZWFyVGltZW91dChfdGhpcy50aW1lcilcblx0cmV0dXJuIG5ldyBNUEFuaW1hdGlvbihvcHRpb24sIF90aGlzKVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///200\n");

/***/ }),
/* 201 */
/*!*****************************************************************************************************************************************!*\
  !*** C:/Users/TAOER/Desktop/ShayuVideo/ShayuVideoAPP/uni_modules/uni-popup/components/uni-popup/uni-popup.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_popup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib??ref--5-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--5-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./uni-popup.vue?vue&type=script&lang=js& */ 202);\n/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_popup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_popup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_popup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_popup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_popup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXVhLENBQWdCLG1kQUFHLEVBQUMiLCJmaWxlIjoiMjAxLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vZCBmcm9tIFwiLSFEOlxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxiYWJlbC1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzPz9yZWYtLTUtMCFEOlxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXJcXFxcaW5kZXguanM/P3JlZi0tNS0xIUQ6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcdnVlLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3VuaS1wb3B1cC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hRDpcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcYmFiZWwtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcz8/cmVmLS01LTAhRDpcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyXFxcXGluZGV4LmpzPz9yZWYtLTUtMSFEOlxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi91bmktcG9wdXAudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///201\n");

/***/ }),
/* 202 */
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--5-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--5-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!C:/Users/TAOER/Desktop/ShayuVideo/ShayuVideoAPP/uni_modules/uni-popup/components/uni-popup/uni-popup.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__f__) {\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n/**\n * PopUp 弹出层\n * @description 弹出层组件，为了解决遮罩弹层的问题\n * @tutorial https://ext.dcloud.net.cn/plugin?id=329\n * @property {String} type = [top|center|bottom|left|right|message|dialog|share] 弹出方式\n * \t@value top 顶部弹出\n * \t@value center 中间弹出\n * \t@value bottom 底部弹出\n * \t@value left\t\t左侧弹出\n * \t@value right  右侧弹出\n * \t@value message 消息提示\n * \t@value dialog 对话框\n * \t@value share 底部分享示例\n * @property {Boolean} animation = [ture|false] 是否开启动画\n * @property {Boolean} maskClick = [ture|false] 蒙版点击是否关闭弹窗\n * @property {String}  backgroundColor \t\t\t\t\t主窗口背景色\n * @property {Boolean} safeArea\t\t\t\t\t\t\t\t\t是否适配底部安全区\n * @event {Function} change 打开关闭弹窗触发，e={show: false}\n */\nvar _default = {\n  name: 'uniPopup',\n  components: {},\n  emits: ['change', 'maskClick'],\n  props: {\n    // 开启动画\n    animation: {\n      type: Boolean,\n      default: true\n    },\n    // 弹出层类型，可选值，top: 顶部弹出层；bottom：底部弹出层；center：全屏弹出层\n    // message: 消息提示 ; dialog : 对话框\n    type: {\n      type: String,\n      default: 'center'\n    },\n    // maskClick\n    maskClick: {\n      type: Boolean,\n      default: true\n    },\n    backgroundColor: {\n      type: String,\n      default: 'none'\n    },\n    safeArea: {\n      type: Boolean,\n      default: true\n    }\n  },\n  watch: {\n    /**\n     * 监听type类型\n     */\n    type: {\n      handler: function handler(type) {\n        if (!this.config[type]) return;\n        this[this.config[type]](true);\n      },\n      immediate: true\n    },\n    isDesktop: {\n      handler: function handler(newVal) {\n        if (!this.config[newVal]) return;\n        this[this.config[this.type]](true);\n      },\n      immediate: true\n    },\n    /**\n     * 监听遮罩是否可点击\n     * @param {Object} val\n     */\n    maskClick: {\n      handler: function handler(val) {\n        this.mkclick = val;\n      },\n      immediate: true\n    }\n  },\n  data: function data() {\n    return {\n      duration: 300,\n      ani: [],\n      showPopup: false,\n      showTrans: false,\n      popupWidth: 0,\n      popupHeight: 0,\n      config: {\n        top: 'top',\n        bottom: 'bottom',\n        center: 'center',\n        left: 'left',\n        right: 'right',\n        message: 'top',\n        dialog: 'center',\n        share: 'bottom',\n        comment: 'bottom'\n      },\n      maskClass: {\n        position: 'fixed',\n        bottom: 0,\n        top: 0,\n        left: 0,\n        right: 0,\n        backgroundColor: 'rgba(0, 0, 0, 0.4)'\n      },\n      transClass: {\n        position: 'fixed',\n        left: 0,\n        right: 0\n      },\n      maskShow: true,\n      mkclick: true,\n      popupstyle: this.isDesktop ? 'fixforpc-top' : 'top'\n    };\n  },\n  computed: {\n    isDesktop: function isDesktop() {\n      return this.popupWidth >= 500 && this.popupHeight >= 500;\n    },\n    bg: function bg() {\n      if (this.backgroundColor === '' || this.backgroundColor === 'none') {\n        return 'transparent';\n      }\n      return this.backgroundColor;\n    }\n  },\n  mounted: function mounted() {\n    var _this = this;\n    var fixSize = function fixSize() {\n      var _uni$getSystemInfoSyn = uni.getSystemInfoSync(),\n        windowWidth = _uni$getSystemInfoSyn.windowWidth,\n        windowHeight = _uni$getSystemInfoSyn.windowHeight,\n        windowTop = _uni$getSystemInfoSyn.windowTop,\n        safeAreaInsets = _uni$getSystemInfoSyn.safeAreaInsets;\n      _this.popupWidth = windowWidth;\n      _this.popupHeight = windowHeight + windowTop;\n      // 是否适配底部安全区\n      if (_this.safeArea) {\n        _this.safeAreaInsets = safeAreaInsets;\n      } else {\n        _this.safeAreaInsets = 0;\n      }\n    };\n    fixSize();\n  },\n  created: function created() {\n    this.mkclick = this.maskClick;\n    if (this.animation) {\n      this.duration = 300;\n    } else {\n      this.duration = 0;\n    }\n    // TODO 处理 message 组件生命周期异常的问题\n    this.messageChild = null;\n    // TODO 解决头条冒泡的问题\n    this.clearPropagation = false;\n  },\n  methods: {\n    /**\n     * 公用方法，不显示遮罩层\n     */\n    closeMask: function closeMask() {\n      this.maskShow = false;\n    },\n    /**\n     * 公用方法，遮罩层禁止点击\n     */\n    disableMask: function disableMask() {\n      this.mkclick = false;\n    },\n    // TODO nvue 取消冒泡\n    clear: function clear(e) {\n      this.clearPropagation = true;\n    },\n    open: function open(direction) {\n      var innerType = ['top', 'center', 'bottom', 'left', 'right', 'message', 'dialog', 'share', 'comment'];\n      if (!(direction && innerType.indexOf(direction) !== -1)) {\n        direction = this.type;\n      }\n      if (!this.config[direction]) {\n        __f__(\"error\", '缺少类型：', direction, \" at uni_modules/uni-popup/components/uni-popup/uni-popup.vue:211\");\n        return;\n      }\n      this[this.config[direction]]();\n      this.$emit('change', {\n        show: true,\n        type: direction\n      });\n    },\n    close: function close(type) {\n      var _this2 = this;\n      this.showTrans = false;\n      this.$emit('change', {\n        show: false,\n        type: this.type\n      });\n      clearTimeout(this.timer);\n      // // 自定义关闭事件\n      // this.customOpen && this.customClose()\n      this.timer = setTimeout(function () {\n        _this2.showPopup = false;\n      }, 300);\n    },\n    // TODO 处理冒泡事件，头条的冒泡事件有问题 ，先这样兼容\n    touchstart: function touchstart() {\n      this.clearPropagation = false;\n    },\n    onTap: function onTap() {\n      if (this.clearPropagation) {\n        // fix by mehaotian 兼容 nvue\n        this.clearPropagation = false;\n        return;\n      }\n      this.$emit('maskClick');\n      if (!this.mkclick) return;\n      this.close();\n      // console.log(\"点击遮罩\");\n      uni.showTabBar({\n        animation: true\n      });\n    },\n    /**\n     * 顶部弹出样式处理\n     */\n    top: function top(type) {\n      var _this3 = this;\n      this.popupstyle = this.isDesktop ? 'fixforpc-top' : 'top';\n      this.ani = ['slide-top'];\n      this.transClass = {\n        position: 'fixed',\n        left: 0,\n        right: 0,\n        backgroundColor: this.bg\n      };\n      // TODO 兼容 type 属性 ，后续会废弃\n      if (type) return;\n      this.showPopup = true;\n      this.showTrans = true;\n      this.$nextTick(function () {\n        if (_this3.messageChild && _this3.type === 'message') {\n          _this3.messageChild.timerClose();\n        }\n      });\n    },\n    /**\n     * 底部弹出样式处理\n     */\n    bottom: function bottom(type) {\n      this.popupstyle = 'bottom';\n      this.ani = ['slide-bottom'];\n      this.transClass = {\n        position: 'fixed',\n        left: 0,\n        right: 0,\n        bottom: 0,\n        paddingBottom: this.safeAreaInsets && this.safeAreaInsets.bottom || 0,\n        backgroundColor: this.bg\n      };\n      // TODO 兼容 type 属性 ，后续会废弃\n      if (type) return;\n      this.showPopup = true;\n      this.showTrans = true;\n    },\n    /**\n     * 中间弹出样式处理\n     */\n    center: function center(type) {\n      this.popupstyle = 'center';\n      this.ani = ['zoom-out', 'fade'];\n      this.transClass = {\n        position: 'fixed',\n        bottom: 0,\n        left: 0,\n        right: 0,\n        top: 0,\n        justifyContent: 'center',\n        alignItems: 'center'\n      };\n      // TODO 兼容 type 属性 ，后续会废弃\n      if (type) return;\n      this.showPopup = true;\n      this.showTrans = true;\n    },\n    left: function left(type) {\n      this.popupstyle = 'left';\n      this.ani = ['slide-left'];\n      this.transClass = {\n        position: 'fixed',\n        left: 0,\n        bottom: 0,\n        top: 0,\n        backgroundColor: this.bg\n      };\n      // TODO 兼容 type 属性 ，后续会废弃\n      if (type) return;\n      this.showPopup = true;\n      this.showTrans = true;\n    },\n    right: function right(type) {\n      this.popupstyle = 'right';\n      this.ani = ['slide-right'];\n      this.transClass = {\n        position: 'fixed',\n        bottom: 0,\n        right: 0,\n        top: 0,\n        backgroundColor: this.bg\n      };\n      // TODO 兼容 type 属性 ，后续会废弃\n      if (type) return;\n      this.showPopup = true;\n      this.showTrans = true;\n    }\n  }\n};\nexports.default = _default;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 123)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vdW5pX21vZHVsZXMvdW5pLXBvcHVwL2NvbXBvbmVudHMvdW5pLXBvcHVwL3VuaS1wb3B1cC52dWUiXSwibmFtZXMiOlsibmFtZSIsImNvbXBvbmVudHMiLCJlbWl0cyIsInByb3BzIiwiYW5pbWF0aW9uIiwidHlwZSIsImRlZmF1bHQiLCJtYXNrQ2xpY2siLCJiYWNrZ3JvdW5kQ29sb3IiLCJzYWZlQXJlYSIsIndhdGNoIiwiaGFuZGxlciIsImltbWVkaWF0ZSIsImlzRGVza3RvcCIsImRhdGEiLCJkdXJhdGlvbiIsImFuaSIsInNob3dQb3B1cCIsInNob3dUcmFucyIsInBvcHVwV2lkdGgiLCJwb3B1cEhlaWdodCIsImNvbmZpZyIsInRvcCIsImJvdHRvbSIsImNlbnRlciIsImxlZnQiLCJyaWdodCIsIm1lc3NhZ2UiLCJkaWFsb2ciLCJzaGFyZSIsImNvbW1lbnQiLCJtYXNrQ2xhc3MiLCJwb3NpdGlvbiIsInRyYW5zQ2xhc3MiLCJtYXNrU2hvdyIsIm1rY2xpY2siLCJwb3B1cHN0eWxlIiwiY29tcHV0ZWQiLCJiZyIsIm1vdW50ZWQiLCJ3aW5kb3dXaWR0aCIsIndpbmRvd0hlaWdodCIsIndpbmRvd1RvcCIsInNhZmVBcmVhSW5zZXRzIiwiZml4U2l6ZSIsImNyZWF0ZWQiLCJtZXRob2RzIiwiY2xvc2VNYXNrIiwiZGlzYWJsZU1hc2siLCJjbGVhciIsIm9wZW4iLCJkaXJlY3Rpb24iLCJzaG93IiwiY2xvc2UiLCJjbGVhclRpbWVvdXQiLCJ0b3VjaHN0YXJ0Iiwib25UYXAiLCJ1bmkiLCJwYWRkaW5nQm90dG9tIiwianVzdGlmeUNvbnRlbnQiLCJhbGlnbkl0ZW1zIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW1CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWxCQSxlQW9CQTtFQUNBQTtFQUNBQyxhQUlBO0VBQ0FDO0VBQ0FDO0lBQ0E7SUFDQUM7TUFDQUM7TUFDQUM7SUFDQTtJQUNBO0lBQ0E7SUFDQUQ7TUFDQUE7TUFDQUM7SUFDQTtJQUNBO0lBQ0FDO01BQ0FGO01BQ0FDO0lBQ0E7SUFDQUU7TUFDQUg7TUFDQUM7SUFDQTtJQUNBRztNQUNBSjtNQUNBQztJQUNBO0VBQ0E7RUFFQUk7SUFDQTtBQUNBO0FBQ0E7SUFDQUw7TUFDQU07UUFDQTtRQUNBO01BQ0E7TUFDQUM7SUFDQTtJQUNBQztNQUNBRjtRQUNBO1FBQ0E7TUFDQTtNQUNBQztJQUNBO0lBQ0E7QUFDQTtBQUNBO0FBQ0E7SUFDQUw7TUFDQUk7UUFDQTtNQUNBO01BQ0FDO0lBQ0E7RUFDQTtFQUNBRTtJQUNBO01BQ0FDO01BQ0FDO01BQ0FDO01BQ0FDO01BQ0FDO01BQ0FDO01BQ0FDO1FBQ0FDO1FBQ0FDO1FBQ0FDO1FBQ0FDO1FBQ0FDO1FBQ0FDO1FBQ0FDO1FBQ0FDO1FBQ0FDO01BQ0E7TUFDQUM7UUFDQUM7UUFDQVQ7UUFDQUQ7UUFDQUc7UUFDQUM7UUFDQWxCO01BQ0E7TUFDQXlCO1FBQ0FEO1FBQ0FQO1FBQ0FDO01BQ0E7TUFDQVE7TUFDQUM7TUFDQUM7SUFDQTtFQUNBO0VBQ0FDO0lBQ0F4QjtNQUNBO0lBQ0E7SUFDQXlCO01BQ0E7UUFDQTtNQUNBO01BQ0E7SUFDQTtFQUNBO0VBQ0FDO0lBQUE7SUFDQTtNQUNBO1FBQUFDO1FBQUFDO1FBQUFDO1FBQUFDO01BQ0E7TUFDQTtNQUNBO01BQ0E7UUFDQTtNQUNBO1FBQ0E7TUFDQTtJQUNBO0lBQ0FDO0VBT0E7RUFDQUM7SUFDQTtJQUNBO01BQ0E7SUFDQTtNQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtFQUNBO0VBQ0FDO0lBQ0E7QUFDQTtBQUNBO0lBQ0FDO01BQ0E7SUFDQTtJQUNBO0FBQ0E7QUFDQTtJQUNBQztNQUNBO0lBQ0E7SUFDQTtJQUNBQztNQUlBO0lBQ0E7SUFFQUM7TUFDQTtNQUNBO1FBQ0FDO01BQ0E7TUFDQTtRQUNBO1FBQ0E7TUFDQTtNQUNBO01BQ0E7UUFDQUM7UUFDQS9DO01BQ0E7SUFDQTtJQUNBZ0Q7TUFBQTtNQUNBO01BQ0E7UUFDQUQ7UUFDQS9DO01BQ0E7TUFDQWlEO01BQ0E7TUFDQTtNQUNBO1FBQ0E7TUFDQTtJQUNBO0lBQ0E7SUFDQUM7TUFDQTtJQUNBO0lBRUFDO01BQ0E7UUFDQTtRQUNBO1FBQ0E7TUFDQTtNQUNBO01BQ0E7TUFDQTtNQUNBO01BQ0FDO1FBQ0FyRDtNQUNBO0lBQ0E7SUFDQTtBQUNBO0FBQ0E7SUFDQWtCO01BQUE7TUFDQTtNQUNBO01BQ0E7UUFDQVU7UUFDQVA7UUFDQUM7UUFDQWxCO01BQ0E7TUFDQTtNQUNBO01BQ0E7TUFDQTtNQUNBO1FBQ0E7VUFDQTtRQUNBO01BQ0E7SUFDQTtJQUNBO0FBQ0E7QUFDQTtJQUNBZTtNQUNBO01BQ0E7TUFFQTtRQUNBUztRQUNBUDtRQUNBQztRQUNBSDtRQUNBbUM7UUFDQWxEO01BQ0E7TUFDQTtNQUNBO01BQ0E7TUFDQTtJQUNBO0lBQ0E7QUFDQTtBQUNBO0lBQ0FnQjtNQUNBO01BQ0E7TUFDQTtRQUNBUTtRQUtBVDtRQUNBRTtRQUNBQztRQUNBSjtRQUNBcUM7UUFDQUM7TUFDQTtNQUNBO01BQ0E7TUFDQTtNQUNBO0lBQ0E7SUFDQW5DO01BQ0E7TUFDQTtNQUNBO1FBQ0FPO1FBQ0FQO1FBQ0FGO1FBQ0FEO1FBQ0FkO01BS0E7TUFDQTtNQUNBO01BQ0E7TUFDQTtJQUNBO0lBQ0FrQjtNQUNBO01BQ0E7TUFDQTtRQUNBTTtRQUNBVDtRQUNBRztRQUNBSjtRQUNBZDtNQUtBO01BQ0E7TUFDQTtNQUNBO01BQ0E7SUFDQTtFQUNBO0FBQ0E7QUFBQSwyQiIsImZpbGUiOiIyMDIuanMiLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG5cdDx2aWV3IHYtaWY9XCJzaG93UG9wdXBcIiBjbGFzcz1cInVuaS1wb3B1cFwiIDpjbGFzcz1cIltwb3B1cHN0eWxlLCBpc0Rlc2t0b3AgPyAnZml4Zm9ycGMtei1pbmRleCcgOiAnJ11cIiBAdG91Y2htb3ZlLnN0b3AucHJldmVudD1cImNsZWFyXCI+XG5cdFx0PHZpZXcgQHRvdWNoc3RhcnQ9XCJ0b3VjaHN0YXJ0XCIgPlxuXHRcdFx0PHVuaS10cmFuc2l0aW9uIGtleT1cIjFcIiB2LWlmPVwibWFza1Nob3dcIiBuYW1lPVwibWFza1wiIG1vZGUtY2xhc3M9XCJmYWRlXCIgOnN0eWxlcz1cIm1hc2tDbGFzc1wiIDpkdXJhdGlvbj1cImR1cmF0aW9uXCIgOnNob3c9XCJzaG93VHJhbnNcIiBAY2xpY2s9XCJvblRhcFwiIC8+XG5cdFx0XHQ8dW5pLXRyYW5zaXRpb24ga2V5PVwiMlwiIDptb2RlLWNsYXNzPVwiYW5pXCIgbmFtZT1cImNvbnRlbnRcIiA6c3R5bGVzPVwidHJhbnNDbGFzc1wiIDpkdXJhdGlvbj1cImR1cmF0aW9uXCIgOnNob3c9XCJzaG93VHJhbnNcIiBAY2xpY2s9XCJvblRhcFwiPlxuXHRcdFx0XHQ8dmlldyBjbGFzcz1cInVuaS1wb3B1cF9fd3JhcHBlclwiIDpzdHlsZT1cInsgYmFja2dyb3VuZENvbG9yOiBiZyB9XCIgOmNsYXNzPVwiW3BvcHVwc3R5bGVdXCIgQGNsaWNrPVwiY2xlYXJcIj48c2xvdCAvPjwvdmlldz5cblx0XHRcdDwvdW5pLXRyYW5zaXRpb24+XG5cdFx0PC92aWV3PlxuXHRcdDwhLS0gI2lmZGVmIEg1IC0tPlxuXHRcdDxrZXlwcmVzcyB2LWlmPVwibWFza1Nob3dcIiBAZXNjPVwib25UYXBcIiAvPlxuXHRcdDwhLS0gI2VuZGlmIC0tPlxuXHQ8L3ZpZXc+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuLy8gI2lmZGVmIEg1XG5pbXBvcnQga2V5cHJlc3MgZnJvbSAnLi9rZXlwcmVzcy5qcydcbi8vICNlbmRpZlxuXG4vKipcbiAqIFBvcFVwIOW8ueWHuuWxglxuICogQGRlc2NyaXB0aW9uIOW8ueWHuuWxgue7hOS7tu+8jOS4uuS6huino+WGs+mBrue9qeW8ueWxgueahOmXrumimFxuICogQHR1dG9yaWFsIGh0dHBzOi8vZXh0LmRjbG91ZC5uZXQuY24vcGx1Z2luP2lkPTMyOVxuICogQHByb3BlcnR5IHtTdHJpbmd9IHR5cGUgPSBbdG9wfGNlbnRlcnxib3R0b218bGVmdHxyaWdodHxtZXNzYWdlfGRpYWxvZ3xzaGFyZV0g5by55Ye65pa55byPXG4gKiBcdEB2YWx1ZSB0b3Ag6aG26YOo5by55Ye6XG4gKiBcdEB2YWx1ZSBjZW50ZXIg5Lit6Ze05by55Ye6XG4gKiBcdEB2YWx1ZSBib3R0b20g5bqV6YOo5by55Ye6XG4gKiBcdEB2YWx1ZSBsZWZ0XHRcdOW3puS+p+W8ueWHulxuICogXHRAdmFsdWUgcmlnaHQgIOWPs+S+p+W8ueWHulxuICogXHRAdmFsdWUgbWVzc2FnZSDmtojmga/mj5DnpLpcbiAqIFx0QHZhbHVlIGRpYWxvZyDlr7nor53moYZcbiAqIFx0QHZhbHVlIHNoYXJlIOW6lemDqOWIhuS6q+ekuuS+i1xuICogQHByb3BlcnR5IHtCb29sZWFufSBhbmltYXRpb24gPSBbdHVyZXxmYWxzZV0g5piv5ZCm5byA5ZCv5Yqo55S7XG4gKiBAcHJvcGVydHkge0Jvb2xlYW59IG1hc2tDbGljayA9IFt0dXJlfGZhbHNlXSDokpnniYjngrnlh7vmmK/lkKblhbPpl63lvLnnqpdcbiAqIEBwcm9wZXJ0eSB7U3RyaW5nfSAgYmFja2dyb3VuZENvbG9yIFx0XHRcdFx0XHTkuLvnqpflj6Pog4zmma/oibJcbiAqIEBwcm9wZXJ0eSB7Qm9vbGVhbn0gc2FmZUFyZWFcdFx0XHRcdFx0XHRcdFx0XHTmmK/lkKbpgILphY3lupXpg6jlronlhajljLpcbiAqIEBldmVudCB7RnVuY3Rpb259IGNoYW5nZSDmiZPlvIDlhbPpl63lvLnnqpfop6blj5HvvIxlPXtzaG93OiBmYWxzZX1cbiAqL1xuXG5leHBvcnQgZGVmYXVsdCB7XG5cdG5hbWU6ICd1bmlQb3B1cCcsXG5cdGNvbXBvbmVudHM6IHtcblx0XHQvLyAjaWZkZWYgSDVcblx0XHRrZXlwcmVzc1xuXHRcdC8vICNlbmRpZlxuXHR9LFxuXHRlbWl0czpbJ2NoYW5nZScsJ21hc2tDbGljayddLFxuXHRwcm9wczoge1xuXHRcdC8vIOW8gOWQr+WKqOeUu1xuXHRcdGFuaW1hdGlvbjoge1xuXHRcdFx0dHlwZTogQm9vbGVhbixcblx0XHRcdGRlZmF1bHQ6IHRydWVcblx0XHR9LFxuXHRcdC8vIOW8ueWHuuWxguexu+Wei++8jOWPr+mAieWAvO+8jHRvcDog6aG26YOo5by55Ye65bGC77ybYm90dG9t77ya5bqV6YOo5by55Ye65bGC77ybY2VudGVy77ya5YWo5bGP5by55Ye65bGCXG5cdFx0Ly8gbWVzc2FnZTog5raI5oGv5o+Q56S6IDsgZGlhbG9nIDog5a+56K+d5qGGXG5cdFx0dHlwZToge1xuXHRcdFx0dHlwZTogU3RyaW5nLFxuXHRcdFx0ZGVmYXVsdDogJ2NlbnRlcidcblx0XHR9LFxuXHRcdC8vIG1hc2tDbGlja1xuXHRcdG1hc2tDbGljazoge1xuXHRcdFx0dHlwZTogQm9vbGVhbixcblx0XHRcdGRlZmF1bHQ6IHRydWVcblx0XHR9LFxuXHRcdGJhY2tncm91bmRDb2xvcjoge1xuXHRcdFx0dHlwZTogU3RyaW5nLFxuXHRcdFx0ZGVmYXVsdDogJ25vbmUnXG5cdFx0fSxcblx0XHRzYWZlQXJlYTp7XG5cdFx0XHR0eXBlOiBCb29sZWFuLFxuXHRcdFx0ZGVmYXVsdDogdHJ1ZVxuXHRcdH1cblx0fSxcblxuXHR3YXRjaDoge1xuXHRcdC8qKlxuXHRcdCAqIOebkeWQrHR5cGXnsbvlnotcblx0XHQgKi9cblx0XHR0eXBlOiB7XG5cdFx0XHRoYW5kbGVyOiBmdW5jdGlvbih0eXBlKSB7XG5cdFx0XHRcdGlmICghdGhpcy5jb25maWdbdHlwZV0pIHJldHVyblxuXHRcdFx0XHR0aGlzW3RoaXMuY29uZmlnW3R5cGVdXSh0cnVlKVxuXHRcdFx0fSxcblx0XHRcdGltbWVkaWF0ZTogdHJ1ZVxuXHRcdH0sXG5cdFx0aXNEZXNrdG9wOiB7XG5cdFx0XHRoYW5kbGVyOiBmdW5jdGlvbihuZXdWYWwpIHtcblx0XHRcdFx0aWYgKCF0aGlzLmNvbmZpZ1tuZXdWYWxdKSByZXR1cm5cblx0XHRcdFx0dGhpc1t0aGlzLmNvbmZpZ1t0aGlzLnR5cGVdXSh0cnVlKVxuXHRcdFx0fSxcblx0XHRcdGltbWVkaWF0ZTogdHJ1ZVxuXHRcdH0sXG5cdFx0LyoqXG5cdFx0ICog55uR5ZCs6YGu572p5piv5ZCm5Y+v54K55Ye7XG5cdFx0ICogQHBhcmFtIHtPYmplY3R9IHZhbFxuXHRcdCAqL1xuXHRcdG1hc2tDbGljazoge1xuXHRcdFx0aGFuZGxlcjogZnVuY3Rpb24odmFsKSB7XG5cdFx0XHRcdHRoaXMubWtjbGljayA9IHZhbFxuXHRcdFx0fSxcblx0XHRcdGltbWVkaWF0ZTogdHJ1ZVxuXHRcdH1cblx0fSxcblx0ZGF0YSgpIHtcblx0XHRyZXR1cm4ge1xuXHRcdFx0ZHVyYXRpb246IDMwMCxcblx0XHRcdGFuaTogW10sXG5cdFx0XHRzaG93UG9wdXA6IGZhbHNlLFxuXHRcdFx0c2hvd1RyYW5zOiBmYWxzZSxcblx0XHRcdHBvcHVwV2lkdGg6IDAsXG5cdFx0XHRwb3B1cEhlaWdodDogMCxcblx0XHRcdGNvbmZpZzoge1xuXHRcdFx0XHR0b3A6ICd0b3AnLFxuXHRcdFx0XHRib3R0b206ICdib3R0b20nLFxuXHRcdFx0XHRjZW50ZXI6ICdjZW50ZXInLFxuXHRcdFx0XHRsZWZ0OiAnbGVmdCcsXG5cdFx0XHRcdHJpZ2h0OiAncmlnaHQnLFxuXHRcdFx0XHRtZXNzYWdlOiAndG9wJyxcblx0XHRcdFx0ZGlhbG9nOiAnY2VudGVyJyxcblx0XHRcdFx0c2hhcmU6ICdib3R0b20nLFxuXHRcdFx0XHRjb21tZW50OiAnYm90dG9tJ1xuXHRcdFx0fSxcblx0XHRcdG1hc2tDbGFzczoge1xuXHRcdFx0XHRwb3NpdGlvbjogJ2ZpeGVkJyxcblx0XHRcdFx0Ym90dG9tOiAwLFxuXHRcdFx0XHR0b3A6IDAsXG5cdFx0XHRcdGxlZnQ6IDAsXG5cdFx0XHRcdHJpZ2h0OiAwLFxuXHRcdFx0XHRiYWNrZ3JvdW5kQ29sb3I6ICdyZ2JhKDAsIDAsIDAsIDAuNCknXG5cdFx0XHR9LFxuXHRcdFx0dHJhbnNDbGFzczoge1xuXHRcdFx0XHRwb3NpdGlvbjogJ2ZpeGVkJyxcblx0XHRcdFx0bGVmdDogMCxcblx0XHRcdFx0cmlnaHQ6IDBcblx0XHRcdH0sXG5cdFx0XHRtYXNrU2hvdzogdHJ1ZSxcblx0XHRcdG1rY2xpY2s6IHRydWUsXG5cdFx0XHRwb3B1cHN0eWxlOiB0aGlzLmlzRGVza3RvcCA/ICdmaXhmb3JwYy10b3AnIDogJ3RvcCdcblx0XHR9XG5cdH0sXG5cdGNvbXB1dGVkOiB7XG5cdFx0aXNEZXNrdG9wKCkge1xuXHRcdFx0cmV0dXJuIHRoaXMucG9wdXBXaWR0aCA+PSA1MDAgJiYgdGhpcy5wb3B1cEhlaWdodCA+PSA1MDBcblx0XHR9LFxuXHRcdGJnKCkge1xuXHRcdFx0aWYgKHRoaXMuYmFja2dyb3VuZENvbG9yID09PSAnJyB8fCB0aGlzLmJhY2tncm91bmRDb2xvciA9PT0gJ25vbmUnKSB7XG5cdFx0XHRcdHJldHVybiAndHJhbnNwYXJlbnQnXG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gdGhpcy5iYWNrZ3JvdW5kQ29sb3Jcblx0XHR9XG5cdH0sXG5cdG1vdW50ZWQoKSB7XG5cdFx0Y29uc3QgZml4U2l6ZSA9ICgpID0+IHtcblx0XHRcdGNvbnN0IHsgd2luZG93V2lkdGgsIHdpbmRvd0hlaWdodCwgd2luZG93VG9wLCBzYWZlQXJlYUluc2V0cyB9ID0gdW5pLmdldFN5c3RlbUluZm9TeW5jKClcblx0XHRcdHRoaXMucG9wdXBXaWR0aCA9IHdpbmRvd1dpZHRoXG5cdFx0XHR0aGlzLnBvcHVwSGVpZ2h0ID0gd2luZG93SGVpZ2h0ICsgd2luZG93VG9wXG5cdFx0XHQvLyDmmK/lkKbpgILphY3lupXpg6jlronlhajljLpcblx0XHRcdGlmKHRoaXMuc2FmZUFyZWEpe1xuXHRcdFx0XHR0aGlzLnNhZmVBcmVhSW5zZXRzID0gc2FmZUFyZWFJbnNldHNcblx0XHRcdH1lbHNle1xuXHRcdFx0XHR0aGlzLnNhZmVBcmVhSW5zZXRzID0gMFxuXHRcdFx0fVxuXHRcdH1cblx0XHRmaXhTaXplKClcblx0XHQvLyAjaWZkZWYgSDVcblx0XHQvLyB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgZml4U2l6ZSlcblx0XHQvLyB0aGlzLiRvbmNlKCdob29rOmJlZm9yZURlc3Ryb3knLCAoKSA9PiB7XG5cdFx0Ly8gXHR3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgZml4U2l6ZSlcblx0XHQvLyB9KVxuXHRcdC8vICNlbmRpZlxuXHR9LFxuXHRjcmVhdGVkKCkge1xuXHRcdHRoaXMubWtjbGljayA9IHRoaXMubWFza0NsaWNrXG5cdFx0aWYgKHRoaXMuYW5pbWF0aW9uKSB7XG5cdFx0XHR0aGlzLmR1cmF0aW9uID0gMzAwXG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMuZHVyYXRpb24gPSAwXG5cdFx0fVxuXHRcdC8vIFRPRE8g5aSE55CGIG1lc3NhZ2Ug57uE5Lu255Sf5ZG95ZGo5pyf5byC5bi455qE6Zeu6aKYXG5cdFx0dGhpcy5tZXNzYWdlQ2hpbGQgPSBudWxsXG5cdFx0Ly8gVE9ETyDop6PlhrPlpLTmnaHlhpLms6HnmoTpl67pophcblx0XHR0aGlzLmNsZWFyUHJvcGFnYXRpb24gPSBmYWxzZVxuXHR9LFxuXHRtZXRob2RzOiB7XG5cdFx0LyoqXG5cdFx0ICog5YWs55So5pa55rOV77yM5LiN5pi+56S66YGu572p5bGCXG5cdFx0ICovXG5cdFx0Y2xvc2VNYXNrKCkge1xuXHRcdFx0dGhpcy5tYXNrU2hvdyA9IGZhbHNlXG5cdFx0fSxcblx0XHQvKipcblx0XHQgKiDlhaznlKjmlrnms5XvvIzpga7nvanlsYLnpoHmraLngrnlh7tcblx0XHQgKi9cblx0XHRkaXNhYmxlTWFzaygpIHtcblx0XHRcdHRoaXMubWtjbGljayA9IGZhbHNlXG5cdFx0fSxcblx0XHQvLyBUT0RPIG52dWUg5Y+W5raI5YaS5rOhXG5cdFx0Y2xlYXIoZSkge1xuXHRcdFx0Ly8gI2lmbmRlZiBBUFAtTlZVRVxuXHRcdFx0ZS5zdG9wUHJvcGFnYXRpb24oKVxuXHRcdFx0Ly8gI2VuZGlmXG5cdFx0XHR0aGlzLmNsZWFyUHJvcGFnYXRpb24gPSB0cnVlXG5cdFx0fSxcblxuXHRcdG9wZW4oZGlyZWN0aW9uKSB7XG5cdFx0XHRsZXQgaW5uZXJUeXBlID0gWyd0b3AnLCAnY2VudGVyJywgJ2JvdHRvbScsICdsZWZ0JywgJ3JpZ2h0JywgJ21lc3NhZ2UnLCAnZGlhbG9nJywgJ3NoYXJlJywgJ2NvbW1lbnQnXVxuXHRcdFx0aWYgKCEoZGlyZWN0aW9uICYmIGlubmVyVHlwZS5pbmRleE9mKGRpcmVjdGlvbikgIT09IC0xKSkge1xuXHRcdFx0XHRkaXJlY3Rpb24gPSB0aGlzLnR5cGVcblx0XHRcdH1cblx0XHRcdGlmICghdGhpcy5jb25maWdbZGlyZWN0aW9uXSkge1xuXHRcdFx0XHRjb25zb2xlLmVycm9yKCfnvLrlsJHnsbvlnovvvJonLCBkaXJlY3Rpb24pXG5cdFx0XHRcdHJldHVyblxuXHRcdFx0fVxuXHRcdFx0dGhpc1t0aGlzLmNvbmZpZ1tkaXJlY3Rpb25dXSgpXG5cdFx0XHR0aGlzLiRlbWl0KCdjaGFuZ2UnLCB7XG5cdFx0XHRcdHNob3c6IHRydWUsXG5cdFx0XHRcdHR5cGU6IGRpcmVjdGlvblxuXHRcdFx0fSlcblx0XHR9LFxuXHRcdGNsb3NlKHR5cGUpIHtcblx0XHRcdHRoaXMuc2hvd1RyYW5zID0gZmFsc2Vcblx0XHRcdHRoaXMuJGVtaXQoJ2NoYW5nZScsIHtcblx0XHRcdFx0c2hvdzogZmFsc2UsXG5cdFx0XHRcdHR5cGU6IHRoaXMudHlwZVxuXHRcdFx0fSlcblx0XHRcdGNsZWFyVGltZW91dCh0aGlzLnRpbWVyKVxuXHRcdFx0Ly8gLy8g6Ieq5a6a5LmJ5YWz6Zet5LqL5Lu2XG5cdFx0XHQvLyB0aGlzLmN1c3RvbU9wZW4gJiYgdGhpcy5jdXN0b21DbG9zZSgpXG5cdFx0XHR0aGlzLnRpbWVyID0gc2V0VGltZW91dCgoKSA9PiB7XG5cdFx0XHRcdHRoaXMuc2hvd1BvcHVwID0gZmFsc2Vcblx0XHRcdH0sIDMwMClcblx0XHR9LFxuXHRcdC8vIFRPRE8g5aSE55CG5YaS5rOh5LqL5Lu277yM5aS05p2h55qE5YaS5rOh5LqL5Lu25pyJ6Zeu6aKYIO+8jOWFiOi/meagt+WFvOWuuVxuXHRcdHRvdWNoc3RhcnQoKXtcblx0XHRcdHRoaXMuY2xlYXJQcm9wYWdhdGlvbiA9IGZhbHNlXG5cdFx0fSxcblxuXHRcdG9uVGFwKCkge1xuXHRcdFx0aWYgKHRoaXMuY2xlYXJQcm9wYWdhdGlvbikge1xuXHRcdFx0XHQvLyBmaXggYnkgbWVoYW90aWFuIOWFvOWuuSBudnVlXG5cdFx0XHRcdHRoaXMuY2xlYXJQcm9wYWdhdGlvbiA9IGZhbHNlXG5cdFx0XHRcdHJldHVyblxuXHRcdFx0fVxuXHRcdFx0dGhpcy4kZW1pdCgnbWFza0NsaWNrJylcblx0XHRcdGlmICghdGhpcy5ta2NsaWNrKSByZXR1cm5cblx0XHRcdHRoaXMuY2xvc2UoKTtcblx0XHRcdC8vIGNvbnNvbGUubG9nKFwi54K55Ye76YGu572pXCIpO1xuXHRcdFx0dW5pLnNob3dUYWJCYXIoe1xuXHRcdFx0XHRhbmltYXRpb246IHRydWVcblx0XHRcdH0pXG5cdFx0fSxcblx0XHQvKipcblx0XHQgKiDpobbpg6jlvLnlh7rmoLflvI/lpITnkIZcblx0XHQgKi9cblx0XHR0b3AodHlwZSkge1xuXHRcdFx0dGhpcy5wb3B1cHN0eWxlID0gdGhpcy5pc0Rlc2t0b3AgPyAnZml4Zm9ycGMtdG9wJyA6ICd0b3AnXG5cdFx0XHR0aGlzLmFuaSA9IFsnc2xpZGUtdG9wJ11cblx0XHRcdHRoaXMudHJhbnNDbGFzcyA9IHtcblx0XHRcdFx0cG9zaXRpb246ICdmaXhlZCcsXG5cdFx0XHRcdGxlZnQ6IDAsXG5cdFx0XHRcdHJpZ2h0OiAwLFxuXHRcdFx0XHRiYWNrZ3JvdW5kQ29sb3I6IHRoaXMuYmdcblx0XHRcdH1cblx0XHRcdC8vIFRPRE8g5YW85a65IHR5cGUg5bGe5oCnIO+8jOWQjue7reS8muW6n+W8g1xuXHRcdFx0aWYgKHR5cGUpIHJldHVyblxuXHRcdFx0dGhpcy5zaG93UG9wdXAgPSB0cnVlXG5cdFx0XHR0aGlzLnNob3dUcmFucyA9IHRydWVcblx0XHRcdHRoaXMuJG5leHRUaWNrKCgpID0+IHtcblx0XHRcdFx0aWYgKHRoaXMubWVzc2FnZUNoaWxkICYmIHRoaXMudHlwZSA9PT0gJ21lc3NhZ2UnKSB7XG5cdFx0XHRcdFx0dGhpcy5tZXNzYWdlQ2hpbGQudGltZXJDbG9zZSgpXG5cdFx0XHRcdH1cblx0XHRcdH0pXG5cdFx0fSxcblx0XHQvKipcblx0XHQgKiDlupXpg6jlvLnlh7rmoLflvI/lpITnkIZcblx0XHQgKi9cblx0XHRib3R0b20odHlwZSkge1xuXHRcdFx0dGhpcy5wb3B1cHN0eWxlID0gJ2JvdHRvbSdcblx0XHRcdHRoaXMuYW5pID0gWydzbGlkZS1ib3R0b20nXVxuXG5cdFx0XHR0aGlzLnRyYW5zQ2xhc3MgPSB7XG5cdFx0XHRcdHBvc2l0aW9uOiAnZml4ZWQnLFxuXHRcdFx0XHRsZWZ0OiAwLFxuXHRcdFx0XHRyaWdodDogMCxcblx0XHRcdFx0Ym90dG9tOiAwLFxuXHRcdFx0XHRwYWRkaW5nQm90dG9tOiAodGhpcy5zYWZlQXJlYUluc2V0cyAmJiB0aGlzLnNhZmVBcmVhSW5zZXRzLmJvdHRvbSkgfHwgMCxcblx0XHRcdFx0YmFja2dyb3VuZENvbG9yOiB0aGlzLmJnXG5cdFx0XHR9XG5cdFx0XHQvLyBUT0RPIOWFvOWuuSB0eXBlIOWxnuaApyDvvIzlkI7nu63kvJrlup/lvINcblx0XHRcdGlmICh0eXBlKSByZXR1cm5cblx0XHRcdHRoaXMuc2hvd1BvcHVwID0gdHJ1ZVxuXHRcdFx0dGhpcy5zaG93VHJhbnMgPSB0cnVlXG5cdFx0fSxcblx0XHQvKipcblx0XHQgKiDkuK3pl7TlvLnlh7rmoLflvI/lpITnkIZcblx0XHQgKi9cblx0XHRjZW50ZXIodHlwZSkge1xuXHRcdFx0dGhpcy5wb3B1cHN0eWxlID0gJ2NlbnRlcidcblx0XHRcdHRoaXMuYW5pID0gWyd6b29tLW91dCcsICdmYWRlJ11cblx0XHRcdHRoaXMudHJhbnNDbGFzcyA9IHtcblx0XHRcdFx0cG9zaXRpb246ICdmaXhlZCcsXG5cdFx0XHRcdC8qICNpZm5kZWYgQVBQLU5WVUUgKi9cblx0XHRcdFx0ZGlzcGxheTogJ2ZsZXgnLFxuXHRcdFx0XHRmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcblx0XHRcdFx0LyogI2VuZGlmICovXG5cdFx0XHRcdGJvdHRvbTogMCxcblx0XHRcdFx0bGVmdDogMCxcblx0XHRcdFx0cmlnaHQ6IDAsXG5cdFx0XHRcdHRvcDogMCxcblx0XHRcdFx0anVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxuXHRcdFx0XHRhbGlnbkl0ZW1zOiAnY2VudGVyJ1xuXHRcdFx0fVxuXHRcdFx0Ly8gVE9ETyDlhbzlrrkgdHlwZSDlsZ7mgKcg77yM5ZCO57ut5Lya5bqf5byDXG5cdFx0XHRpZiAodHlwZSkgcmV0dXJuXG5cdFx0XHR0aGlzLnNob3dQb3B1cCA9IHRydWVcblx0XHRcdHRoaXMuc2hvd1RyYW5zID0gdHJ1ZVxuXHRcdH0sXG5cdFx0bGVmdCh0eXBlKSB7XG5cdFx0XHR0aGlzLnBvcHVwc3R5bGUgPSAnbGVmdCdcblx0XHRcdHRoaXMuYW5pID0gWydzbGlkZS1sZWZ0J11cblx0XHRcdHRoaXMudHJhbnNDbGFzcyA9IHtcblx0XHRcdFx0cG9zaXRpb246ICdmaXhlZCcsXG5cdFx0XHRcdGxlZnQ6IDAsXG5cdFx0XHRcdGJvdHRvbTogMCxcblx0XHRcdFx0dG9wOiAwLFxuXHRcdFx0XHRiYWNrZ3JvdW5kQ29sb3I6IHRoaXMuYmcsXG5cdFx0XHRcdC8qICNpZm5kZWYgQVBQLU5WVUUgKi9cblx0XHRcdFx0ZGlzcGxheTogJ2ZsZXgnLFxuXHRcdFx0XHRmbGV4RGlyZWN0aW9uOiAnY29sdW1uJ1xuXHRcdFx0XHQvKiAjZW5kaWYgKi9cblx0XHRcdH1cblx0XHRcdC8vIFRPRE8g5YW85a65IHR5cGUg5bGe5oCnIO+8jOWQjue7reS8muW6n+W8g1xuXHRcdFx0aWYgKHR5cGUpIHJldHVyblxuXHRcdFx0dGhpcy5zaG93UG9wdXAgPSB0cnVlXG5cdFx0XHR0aGlzLnNob3dUcmFucyA9IHRydWVcblx0XHR9LFxuXHRcdHJpZ2h0KHR5cGUpIHtcblx0XHRcdHRoaXMucG9wdXBzdHlsZSA9ICdyaWdodCdcblx0XHRcdHRoaXMuYW5pID0gWydzbGlkZS1yaWdodCddXG5cdFx0XHR0aGlzLnRyYW5zQ2xhc3MgPSB7XG5cdFx0XHRcdHBvc2l0aW9uOiAnZml4ZWQnLFxuXHRcdFx0XHRib3R0b206IDAsXG5cdFx0XHRcdHJpZ2h0OiAwLFxuXHRcdFx0XHR0b3A6IDAsXG5cdFx0XHRcdGJhY2tncm91bmRDb2xvcjogdGhpcy5iZyxcblx0XHRcdFx0LyogI2lmbmRlZiBBUFAtTlZVRSAqL1xuXHRcdFx0XHRkaXNwbGF5OiAnZmxleCcsXG5cdFx0XHRcdGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nXG5cdFx0XHRcdC8qICNlbmRpZiAqL1xuXHRcdFx0fVxuXHRcdFx0Ly8gVE9ETyDlhbzlrrkgdHlwZSDlsZ7mgKcg77yM5ZCO57ut5Lya5bqf5byDXG5cdFx0XHRpZiAodHlwZSkgcmV0dXJuXG5cdFx0XHR0aGlzLnNob3dQb3B1cCA9IHRydWVcblx0XHRcdHRoaXMuc2hvd1RyYW5zID0gdHJ1ZVxuXHRcdH1cblx0fVxufVxuPC9zY3JpcHQ+XG48c3R5bGUgbGFuZz1cInNjc3NcIiBzY29wZWQ+XG4udW5pLXBvcHVwIHtcblx0cG9zaXRpb246IGZpeGVkO1xuXHQvKiAjaWZuZGVmIEFQUC1OVlVFICovXG5cdHotaW5kZXg6IDk5O1xuXHQvKiAjZW5kaWYgKi9cblx0Ji50b3AsXG5cdCYubGVmdCxcblx0Ji5yaWdodCB7XG5cdFx0LyogI2lmZGVmIEg1ICovXG5cdFx0dG9wOiB2YXIoLS13aW5kb3ctdG9wKTtcblx0XHQvKiAjZW5kaWYgKi9cblx0XHQvKiAjaWZuZGVmIEg1ICovXG5cdFx0dG9wOiAwO1xuXHRcdC8qICNlbmRpZiAqL1xuXHR9XG5cdC51bmktcG9wdXBfX3dyYXBwZXIge1xuXHRcdC8qICNpZm5kZWYgQVBQLU5WVUUgKi9cblx0XHRkaXNwbGF5OiBibG9jaztcblx0XHQvKiAjZW5kaWYgKi9cblx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdFx0LyogaXBob25leCDnrYnlronlhajljLrorr7nva7vvIzlupXpg6jlronlhajljLrpgILphY0gKi9cblx0XHQvKiAjaWZuZGVmIEFQUC1OVlVFICovXG5cdFx0Ly8gcGFkZGluZy1ib3R0b206IGNvbnN0YW50KHNhZmUtYXJlYS1pbnNldC1ib3R0b20pO1xuXHRcdC8vIHBhZGRpbmctYm90dG9tOiBlbnYoc2FmZS1hcmVhLWluc2V0LWJvdHRvbSk7XG5cdFx0LyogI2VuZGlmICovXG5cdFx0Ji5sZWZ0LFxuXHRcdCYucmlnaHQge1xuXHRcdFx0LyogI2lmbmRlZiBINSAqL1xuXHRcdFx0cGFkZGluZy10b3A6IDA7XG5cdFx0XHQvKiAjZW5kaWYgKi9cblx0XHRcdGZsZXg6IDE7XG5cdFx0fVxuXHR9XG59XG5cbi5maXhmb3JwYy16LWluZGV4IHtcblx0LyogI2lmbmRlZiBBUFAtTlZVRSAqL1xuXHR6LWluZGV4OiA5OTk7XG5cdC8qICNlbmRpZiAqL1xufVxuXG4uZml4Zm9ycGMtdG9wIHtcblx0dG9wOiAwO1xufVxuPC9zdHlsZT5cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///202\n");

/***/ }),
/* 203 */
/*!**************************************************************************************************************************************************************************!*\
  !*** C:/Users/TAOER/Desktop/ShayuVideo/ShayuVideoAPP/uni_modules/uni-popup/components/uni-popup/uni-popup.vue?vue&type=style&index=0&id=7c43d41b&lang=scss&scoped=true& ***!
  \**************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_oneOf_0_1_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_11_oneOf_0_2_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_11_oneOf_0_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_oneOf_0_4_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_popup_vue_vue_type_style_index_0_id_7c43d41b_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--11-oneOf-0-1!./node_modules/postcss-loader/src??ref--11-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??ref--11-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--11-oneOf-0-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./uni-popup.vue?vue&type=style&index=0&id=7c43d41b&lang=scss&scoped=true& */ 204);
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_oneOf_0_1_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_11_oneOf_0_2_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_11_oneOf_0_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_oneOf_0_4_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_popup_vue_vue_type_style_index_0_id_7c43d41b_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_oneOf_0_1_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_11_oneOf_0_2_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_11_oneOf_0_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_oneOf_0_4_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_popup_vue_vue_type_style_index_0_id_7c43d41b_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_oneOf_0_1_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_11_oneOf_0_2_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_11_oneOf_0_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_oneOf_0_4_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_popup_vue_vue_type_style_index_0_id_7c43d41b_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_oneOf_0_1_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_11_oneOf_0_2_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_11_oneOf_0_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_oneOf_0_4_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_popup_vue_vue_type_style_index_0_id_7c43d41b_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_oneOf_0_1_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_11_oneOf_0_2_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_11_oneOf_0_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_oneOf_0_4_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_popup_vue_vue_type_style_index_0_id_7c43d41b_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 204 */
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--11-oneOf-0-1!./node_modules/postcss-loader/src??ref--11-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??ref--11-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--11-oneOf-0-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!C:/Users/TAOER/Desktop/ShayuVideo/ShayuVideoAPP/uni_modules/uni-popup/components/uni-popup/uni-popup.vue?vue&type=style&index=0&id=7c43d41b&lang=scss&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  ".uni-popup": {
    "": {
      "position": [
        "fixed",
        0,
        0,
        16
      ]
    },
    ".top": {
      "top": [
        0,
        0,
        1,
        17
      ]
    },
    ".left": {
      "top": [
        0,
        0,
        1,
        17
      ]
    },
    ".right": {
      "top": [
        0,
        0,
        1,
        17
      ]
    }
  },
  ".uni-popup__wrapper": {
    ".uni-popup ": {
      "position": [
        "relative",
        0,
        1,
        18
      ]
    },
    ".uni-popup .left": {
      "paddingTop": [
        0,
        0,
        2,
        19
      ],
      "flex": [
        1,
        0,
        2,
        19
      ]
    },
    ".uni-popup .right": {
      "paddingTop": [
        0,
        0,
        2,
        19
      ],
      "flex": [
        1,
        0,
        2,
        19
      ]
    }
  },
  ".fixforpc-top": {
    "": {
      "top": [
        0,
        0,
        0,
        20
      ]
    }
  },
  "@VERSION": 2
}

/***/ }),
/* 205 */
/*!**********************************************************************************************************************************!*\
  !*** C:/Users/TAOER/Desktop/ShayuVideo/ShayuVideoAPP/uni_modules/uni-popup/components/uni-popup-comments/uni-popup-comments.vue ***!
  \**********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _uni_popup_comments_vue_vue_type_template_id_9da5e18a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./uni-popup-comments.vue?vue&type=template&id=9da5e18a&scoped=true& */ 206);\n/* harmony import */ var _uni_popup_comments_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./uni-popup-comments.vue?vue&type=script&lang=js& */ 208);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _uni_popup_comments_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _uni_popup_comments_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 12);\n\nvar renderjs\n\n\nfunction injectStyles (context) {\n  \n  if(!this.options.style){\n          this.options.style = {}\n      }\n      if(Vue.prototype.__merge_style && Vue.prototype.__$appStyle__){\n        Vue.prototype.__merge_style(Vue.prototype.__$appStyle__, this.options.style)\n      }\n      if(Vue.prototype.__merge_style){\n                Vue.prototype.__merge_style(__webpack_require__(/*! ./uni-popup-comments.vue?vue&type=style&index=0&id=9da5e18a&lang=scss&scoped=true& */ 211).default, this.options.style)\n            }else{\n                Object.assign(this.options.style,__webpack_require__(/*! ./uni-popup-comments.vue?vue&type=style&index=0&id=9da5e18a&lang=scss&scoped=true& */ 211).default)\n            }\nif(Vue.prototype.__merge_style){\n                Vue.prototype.__merge_style(__webpack_require__(/*! ./uni-popup-comments.vue?vue&type=style&index=1&lang=css& */ 213).default, this.options.style)\n            }else{\n                Object.assign(this.options.style,__webpack_require__(/*! ./uni-popup-comments.vue?vue&type=style&index=1&lang=css& */ 213).default)\n            }\n\n}\n\n/* normalize component */\n\nvar component = Object(_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _uni_popup_comments_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _uni_popup_comments_vue_vue_type_template_id_9da5e18a_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _uni_popup_comments_vue_vue_type_template_id_9da5e18a_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  \"9da5e18a\",\n  \"5da69232\",\n  false,\n  _uni_popup_comments_vue_vue_type_template_id_9da5e18a_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ninjectStyles.call(component)\ncomponent.options.__file = \"uni_modules/uni-popup/components/uni-popup-comments/uni-popup-comments.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBMkk7QUFDM0k7QUFDc0U7QUFDTDtBQUNqRTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QyxtQkFBTyxDQUFDLDZGQUFvRjtBQUN4SSxhQUFhO0FBQ2IsaURBQWlELG1CQUFPLENBQUMsNkZBQW9GO0FBQzdJO0FBQ0E7QUFDQSw0Q0FBNEMsbUJBQU8sQ0FBQyxvRUFBMkQ7QUFDL0csYUFBYTtBQUNiLGlEQUFpRCxtQkFBTyxDQUFDLG9FQUEyRDtBQUNwSDs7QUFFQTs7QUFFQTtBQUNxSztBQUNySyxnQkFBZ0IsK0tBQVU7QUFDMUIsRUFBRSx3RkFBTTtBQUNSLEVBQUUseUdBQU07QUFDUixFQUFFLGtIQUFlO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFLDZHQUFVO0FBQ1o7QUFDQTs7QUFFQTtBQUNBO0FBQ2UsZ0YiLCJmaWxlIjoiMjA1LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMsIHJlY3ljbGFibGVSZW5kZXIsIGNvbXBvbmVudHMgfSBmcm9tIFwiLi91bmktcG9wdXAtY29tbWVudHMudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTlkYTVlMThhJnNjb3BlZD10cnVlJlwiXG52YXIgcmVuZGVyanNcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vdW5pLXBvcHVwLWNvbW1lbnRzLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vdW5pLXBvcHVwLWNvbW1lbnRzLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZnVuY3Rpb24gaW5qZWN0U3R5bGVzIChjb250ZXh0KSB7XG4gIFxuICBpZighdGhpcy5vcHRpb25zLnN0eWxlKXtcbiAgICAgICAgICB0aGlzLm9wdGlvbnMuc3R5bGUgPSB7fVxuICAgICAgfVxuICAgICAgaWYoVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlICYmIFZ1ZS5wcm90b3R5cGUuX18kYXBwU3R5bGVfXyl7XG4gICAgICAgIFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZShWdWUucHJvdG90eXBlLl9fJGFwcFN0eWxlX18sIHRoaXMub3B0aW9ucy5zdHlsZSlcbiAgICAgIH1cbiAgICAgIGlmKFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZSl7XG4gICAgICAgICAgICAgICAgVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlKHJlcXVpcmUoXCIuL3VuaS1wb3B1cC1jb21tZW50cy52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD05ZGE1ZTE4YSZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCIpLmRlZmF1bHQsIHRoaXMub3B0aW9ucy5zdHlsZSlcbiAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgIE9iamVjdC5hc3NpZ24odGhpcy5vcHRpb25zLnN0eWxlLHJlcXVpcmUoXCIuL3VuaS1wb3B1cC1jb21tZW50cy52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD05ZGE1ZTE4YSZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCIpLmRlZmF1bHQpXG4gICAgICAgICAgICB9XG5pZihWdWUucHJvdG90eXBlLl9fbWVyZ2Vfc3R5bGUpe1xuICAgICAgICAgICAgICAgIFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZShyZXF1aXJlKFwiLi91bmktcG9wdXAtY29tbWVudHMudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTEmbGFuZz1jc3MmXCIpLmRlZmF1bHQsIHRoaXMub3B0aW9ucy5zdHlsZSlcbiAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgIE9iamVjdC5hc3NpZ24odGhpcy5vcHRpb25zLnN0eWxlLHJlcXVpcmUoXCIuL3VuaS1wb3B1cC1jb21tZW50cy52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MSZsYW5nPWNzcyZcIikuZGVmYXVsdClcbiAgICAgICAgICAgIH1cblxufVxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIUQ6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcdnVlLWxvYWRlclxcXFxsaWJcXFxccnVudGltZVxcXFxjb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgXCI5ZGE1ZTE4YVwiLFxuICBcIjVkYTY5MjMyXCIsXG4gIGZhbHNlLFxuICBjb21wb25lbnRzLFxuICByZW5kZXJqc1xuKVxuXG5pbmplY3RTdHlsZXMuY2FsbChjb21wb25lbnQpXG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInVuaV9tb2R1bGVzL3VuaS1wb3B1cC9jb21wb25lbnRzL3VuaS1wb3B1cC1jb21tZW50cy91bmktcG9wdXAtY29tbWVudHMudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///205\n");

/***/ }),
/* 206 */
/*!*****************************************************************************************************************************************************************************!*\
  !*** C:/Users/TAOER/Desktop/ShayuVideo/ShayuVideoAPP/uni_modules/uni-popup/components/uni-popup-comments/uni-popup-comments.vue?vue&type=template&id=9da5e18a&scoped=true& ***!
  \*****************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_popup_comments_vue_vue_type_template_id_9da5e18a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.recycle.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./uni-popup-comments.vue?vue&type=template&id=9da5e18a&scoped=true& */ 207);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_popup_comments_vue_vue_type_template_id_9da5e18a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_popup_comments_vue_vue_type_template_id_9da5e18a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_popup_comments_vue_vue_type_template_id_9da5e18a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_popup_comments_vue_vue_type_template_id_9da5e18a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 207 */
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.recycle.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!C:/Users/TAOER/Desktop/ShayuVideo/ShayuVideoAPP/uni_modules/uni-popup/components/uni-popup-comments/uni-popup-comments.vue?vue&type=template&id=9da5e18a&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
try {
  components = {
    uniPopup:
      __webpack_require__(/*! @/uni_modules/uni-popup/components/uni-popup/uni-popup.vue */ 192)
        .default,
  }
} catch (e) {
  if (
    e.message.indexOf("Cannot find module") !== -1 &&
    e.message.indexOf(".vue") !== -1
  ) {
    console.error(e.message)
    console.error("1. 排查组件名称拼写是否正确")
    console.error(
      "2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"
    )
    console.error(
      "3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件"
    )
  } else {
    throw e
  }
}
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "view",
    { staticClass: ["uni-popup-share"] },
    [
      _c(
        "view",
        { staticClass: ["uni-share-title"] },
        [
          _c("u-image", {
            staticClass: ["icon-close-left"],
            attrs: { src: "/static/images/icon-close.png" },
          }),
          _c(
            "u-text",
            {
              staticClass: ["uni-share-title-text"],
              appendAsTree: true,
              attrs: { append: "tree" },
            },
            [
              _vm._v(
                _vm._s(_vm.getGraceNumber(_vm.thisVlogTotalComentCounts)) +
                  "条评论"
              ),
            ]
          ),
          _c("u-image", {
            staticClass: ["icon-close-right"],
            attrs: { src: "/static/images/icon-close.png" },
            on: { click: _vm.close },
          }),
        ],
        1
      ),
      _c("view", { staticClass: ["uni-share-content"] }, [
        _c(
          "view",
          { staticStyle: { height: "800rpx" } },
          [
            _c(
              "scroll-view",
              {
                staticClass: ["all-comments"],
                style: { width: _vm.screenWidth + "px" },
                attrs: {
                  scrollY: "true",
                  lowerThreshold: "150",
                  scrollTop: _vm.scrollTop,
                },
                on: { scrolltolower: _vm.loadMore },
              },
              [
                _vm._l(_vm.commentList, function (commentContent, index) {
                  return _c(
                    "view",
                    {
                      key: index,
                      class: { active: index == _vm.activeIndex },
                      attrs: { dataIndex: index },
                      on: {
                        touchstart: function ($event) {
                          _vm.touchstartComment(index)
                        },
                        touchend: function ($event) {
                          _vm.touchendComment()
                        },
                        longpress: function ($event) {
                          _vm.deleteComment(
                            commentContent.commentUserId,
                            commentContent.commentId
                          )
                        },
                      },
                    },
                    [
                      _c(
                        "view",
                        {
                          staticClass: ["comments-wrapper"],
                          staticStyle: {
                            marginLeft: "16rpx",
                            marginTop: "16rpx",
                            marginRight: "16rpx",
                          },
                        },
                        [
                          _c(
                            "view",
                            { staticClass: ["comments-wrapper-sub-up"] },
                            [
                              _c(
                                "view",
                                { staticClass: ["vlogger-wrapper"] },
                                [
                                  _c("u-image", {
                                    staticClass: ["img-face"],
                                    attrs: {
                                      src: commentContent.commentUserFace,
                                    },
                                  }),
                                  _c(
                                    "view",
                                    {
                                      staticStyle: {
                                        marginLeft: "10px",
                                        width: "456rpx",
                                      },
                                    },
                                    [
                                      _c(
                                        "view",
                                        {
                                          staticStyle: {
                                            display: "flex",
                                            flexDirection: "row",
                                          },
                                        },
                                        [
                                          _c(
                                            "u-text",
                                            {
                                              staticStyle: {
                                                fontSize: "30rpx",
                                                color: "#878585",
                                                alignSelf: "center",
                                              },
                                              appendAsTree: true,
                                              attrs: { append: "tree" },
                                            },
                                            [
                                              _vm._v(
                                                _vm._s(
                                                  commentContent.commentUserNickname
                                                )
                                              ),
                                            ]
                                          ),
                                          commentContent.vlogerId ==
                                          _vm.thisVlogerId
                                            ? _c(
                                                "view",
                                                {
                                                  staticClass: ["tag-writer"],
                                                  staticStyle: {
                                                    alignSelf: "center",
                                                  },
                                                },
                                                [
                                                  _c(
                                                    "u-text",
                                                    {
                                                      staticClass: [
                                                        "writer-words",
                                                      ],
                                                      staticStyle: {
                                                        alignSelf: "center",
                                                      },
                                                      appendAsTree: true,
                                                      attrs: { append: "tree" },
                                                    },
                                                    [_vm._v("作者")]
                                                  ),
                                                ]
                                              )
                                            : _vm._e(),
                                          commentContent.replyedUserNickname !=
                                            null &&
                                          commentContent.replyedUserNickname !=
                                            ""
                                            ? _c("u-image", {
                                                staticStyle: {
                                                  opacity: "0.8",
                                                  width: "40rpx",
                                                  height: "40rpx",
                                                  marginLeft: "16rpx",
                                                  marginRight: "10rpx",
                                                  alignSelf: "center",
                                                },
                                                attrs: {
                                                  src: "/static/images/icon-right-arrow3.png",
                                                },
                                              })
                                            : _vm._e(),
                                          commentContent.replyedUserNickname !=
                                            null &&
                                          commentContent.replyedUserNickname !=
                                            ""
                                            ? _c(
                                                "u-text",
                                                {
                                                  staticStyle: {
                                                    fontSize: "30rpx",
                                                    color: "#878585",
                                                    alignSelf: "center",
                                                  },
                                                  appendAsTree: true,
                                                  attrs: { append: "tree" },
                                                },
                                                [
                                                  _vm._v(
                                                    _vm._s(
                                                      commentContent.replyedUserNickname
                                                    )
                                                  ),
                                                ]
                                              )
                                            : _vm._e(),
                                        ],
                                        1
                                      ),
                                      _c(
                                        "u-text",
                                        {
                                          staticStyle: {
                                            fontSize: "32rpx",
                                            color: "#ffffff",
                                            marginTop: "2px",
                                          },
                                          appendAsTree: true,
                                          attrs: { append: "tree" },
                                        },
                                        [_vm._v(_vm._s(commentContent.content))]
                                      ),
                                    ]
                                  ),
                                ],
                                1
                              ),
                              _c(
                                "view",
                                {
                                  staticStyle: {
                                    display: "flex",
                                    flexDirection: "column",
                                    width: "26px",
                                  },
                                },
                                [
                                  commentContent.isLike == 1
                                    ? _c("u-image", {
                                        staticClass: ["like-or-not"],
                                        staticStyle: { alignSelf: "center" },
                                        attrs: {
                                          src: "/static/images/icon-comment-like.png",
                                        },
                                        on: {
                                          click: function ($event) {
                                            _vm.unlike(
                                              commentContent.commentUserId,
                                              commentContent.commentId,
                                              index
                                            )
                                          },
                                        },
                                      })
                                    : _vm._e(),
                                  commentContent.isLike == 0
                                    ? _c("u-image", {
                                        staticClass: ["like-or-not"],
                                        staticStyle: { alignSelf: "center" },
                                        attrs: {
                                          src: "/static/images/icon-comment-unlike.png",
                                        },
                                        on: {
                                          click: function ($event) {
                                            _vm.like(
                                              commentContent.commentUserId,
                                              commentContent.commentId,
                                              index
                                            )
                                          },
                                        },
                                      })
                                    : _vm._e(),
                                  _c(
                                    "u-text",
                                    {
                                      staticStyle: {
                                        fontSize: "22rpx",
                                        color: "#878585",
                                        alignSelf: "center",
                                      },
                                      appendAsTree: true,
                                      attrs: { append: "tree" },
                                    },
                                    [
                                      _vm._v(
                                        _vm._s(
                                          _vm.getGraceNumber(
                                            commentContent.likeCounts
                                          )
                                        )
                                      ),
                                    ]
                                  ),
                                ],
                                1
                              ),
                            ]
                          ),
                          _c(
                            "view",
                            { staticClass: ["comments-wrapper-sub-down"] },
                            [
                              _c("u-image", {
                                staticClass: ["img-face"],
                                staticStyle: { opacity: "0" },
                                attrs: { src: "/static/face/face-arrow-1.png" },
                              }),
                              _c(
                                "u-text",
                                {
                                  staticStyle: {
                                    fontSize: "30rpx",
                                    color: "#878585",
                                    marginLeft: "10px",
                                  },
                                  appendAsTree: true,
                                  attrs: { append: "tree" },
                                },
                                [
                                  _vm._v(
                                    _vm._s(
                                      _vm.getGraceDateBeforeNow(
                                        commentContent.createTime
                                      )
                                    )
                                  ),
                                ]
                              ),
                              _c(
                                "u-text",
                                {
                                  staticStyle: {
                                    fontSize: "30rpx",
                                    color: "#878585",
                                    marginLeft: "20px",
                                  },
                                  appendAsTree: true,
                                  attrs: { append: "tree" },
                                  on: {
                                    click: function ($event) {
                                      _vm.replyComment(
                                        commentContent.commentId,
                                        commentContent.commentUserNickname
                                      )
                                    },
                                  },
                                },
                                [_vm._v("回复")]
                              ),
                              commentContent.commentUserId !== _vm.loginUserId
                                ? _c(
                                    "u-text",
                                    {
                                      staticStyle: {
                                        fontSize: "30rpx",
                                        color: "#878585",
                                        marginLeft: "20px",
                                      },
                                      appendAsTree: true,
                                      attrs: { append: "tree" },
                                      on: {
                                        click: function ($event) {
                                          _vm.showReportDialog(
                                            commentContent.commentId
                                          )
                                        },
                                      },
                                    },
                                    [_vm._v("举报")]
                                  )
                                : _vm._e(),
                            ],
                            1
                          ),
                        ]
                      ),
                    ]
                  )
                }),
                _c(
                  "view",
                  {
                    staticStyle: {
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "center",
                      marginTop: "50rpx",
                      height: "100rpx",
                    },
                  },
                  [
                    _c(
                      "u-text",
                      {
                        staticStyle: { color: "#444446", fontSize: "13px" },
                        appendAsTree: true,
                        attrs: { append: "tree" },
                      },
                      [_vm._v(_vm._s(_vm.bottomTxt))]
                    ),
                  ]
                ),
              ],
              2
            ),
          ],
          1
        ),
        _c(
          "view",
          {
            staticClass: ["comment-wrapper"],
            class: {
              commentWrapperBlack: _vm.commentWrapperBlack,
              commentWrapperWhite: _vm.commentWrapperWhite,
            },
          },
          [
            _c("u-input", {
              staticClass: ["comment-box"],
              class: {
                commentBoxBlack: _vm.commentBoxBlack,
                commentBoxWhite: _vm.commentBoxWhite,
              },
              style: { width: _vm.screenWidth - 70 + "px" },
              attrs: {
                placeholderClass: "comment-box-placeholder",
                placeholder: _vm.placeholder,
                cursorSpacing: "10px",
                confirmType: "done",
                focus: _vm.commentFocus,
                value: _vm.currentComment,
              },
              on: {
                focus: _vm.typingComment,
                blur: _vm.noTypingComment,
                input: function ($event) {
                  _vm.currentComment = $event.detail.value
                },
              },
            }),
            _c(
              "view",
              {
                staticStyle: {
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                },
              },
              [
                _c("u-image", {
                  staticClass: ["icon-comment"],
                  attrs: { src: "/static/images/icon-comment.png" },
                  on: {
                    click: function ($event) {
                      _vm.doCommentPublish()
                    },
                  },
                }),
              ],
              1
            ),
          ],
          1
        ),
      ]),
      _c(
        "uni-popup",
        { ref: "reportPopup", attrs: { type: "center", maskClick: false } },
        [
          _c(
            "view",
            {
              staticClass: ["report-dialog"],
              staticStyle: {
                width: "680rpx",
                backgroundColor: "#1a1a1a",
                borderRadius: "20rpx",
                padding: "40rpx",
              },
              on: { click: function ($event) {} },
            },
            [
              _c(
                "view",
                { staticClass: ["report-title"] },
                [
                  _c(
                    "u-text",
                    {
                      staticClass: ["report-title-text"],
                      appendAsTree: true,
                      attrs: { append: "tree" },
                    },
                    [_vm._v("举报评论")]
                  ),
                  _c("u-image", {
                    staticClass: ["report-close-icon"],
                    attrs: { src: "/static/images/icon-close.png" },
                    on: { click: _vm.closeReportDialog },
                  }),
                ],
                1
              ),
              _c("view", { staticClass: ["report-content"] }, [
                _c(
                  "view",
                  { staticClass: ["report-item"] },
                  [
                    _c(
                      "u-text",
                      {
                        staticClass: ["report-label"],
                        appendAsTree: true,
                        attrs: { append: "tree" },
                      },
                      [_vm._v("举报原因：")]
                    ),
                    _c(
                      "picker",
                      {
                        attrs: {
                          mode: "selector",
                          range: _vm.reportReasons,
                          value: _vm.selectedReasonIndex,
                        },
                        on: { change: _vm.onReasonChange },
                      },
                      [
                        _c(
                          "view",
                          {
                            staticClass: ["report-picker"],
                            on: { click: function ($event) {} },
                          },
                          [
                            _c(
                              "u-text",
                              {
                                class:
                                  _vm.selectedReasonIndex >= 0
                                    ? "report-picker-text"
                                    : "report-picker-placeholder",
                                appendAsTree: true,
                                attrs: { append: "tree" },
                              },
                              [
                                _vm._v(
                                  _vm._s(
                                    _vm.selectedReasonIndex >= 0
                                      ? _vm.reportReasons[
                                          _vm.selectedReasonIndex
                                        ]
                                      : "请选择举报原因"
                                  )
                                ),
                              ]
                            ),
                            _c(
                              "u-text",
                              {
                                staticClass: ["report-picker-arrow"],
                                appendAsTree: true,
                                attrs: { append: "tree" },
                              },
                              [_vm._v("▼")]
                            ),
                          ]
                        ),
                      ]
                    ),
                  ],
                  1
                ),
                _c(
                  "view",
                  { staticClass: ["report-item"] },
                  [
                    _c(
                      "u-text",
                      {
                        staticClass: ["report-label"],
                        appendAsTree: true,
                        attrs: { append: "tree" },
                      },
                      [_vm._v("详细描述：")]
                    ),
                    _c("u-textarea", {
                      staticClass: ["report-textarea"],
                      staticStyle: {
                        width: "100%",
                        backgroundColor: "#2a2a2a",
                        borderRadius: "10rpx",
                        padding: "20rpx",
                        fontSize: "28rpx",
                        color: "#ffffff",
                        marginBottom: "10rpx",
                      },
                      attrs: {
                        placeholder: "请详细描述举报原因（选填，最多500字）",
                        placeholderStyle: "color: #999999",
                        maxlength: "500",
                        value: _vm.reportDescription,
                      },
                      on: {
                        input: function ($event) {
                          _vm.reportDescription = $event.detail.value
                        },
                      },
                    }),
                    _c(
                      "u-text",
                      {
                        staticClass: ["report-char-count"],
                        appendAsTree: true,
                        attrs: { append: "tree" },
                      },
                      [_vm._v(_vm._s(_vm.reportDescription.length) + "/500")]
                    ),
                  ],
                  1
                ),
              ]),
              _c("view", { staticClass: ["report-buttons"] }, [
                _c(
                  "view",
                  {
                    staticClass: ["report-btn", "report-btn-cancel"],
                    on: { click: _vm.closeReportDialog },
                  },
                  [
                    _c(
                      "u-text",
                      {
                        staticClass: ["report-btn-text"],
                        appendAsTree: true,
                        attrs: { append: "tree" },
                      },
                      [_vm._v("取消")]
                    ),
                  ]
                ),
                _c(
                  "view",
                  {
                    staticClass: ["report-btn", "report-btn-submit"],
                    on: { click: _vm.submitReport },
                  },
                  [
                    _c(
                      "u-text",
                      {
                        staticClass: ["report-btn-text"],
                        appendAsTree: true,
                        attrs: { append: "tree" },
                      },
                      [_vm._v("提交")]
                    ),
                  ]
                ),
              ]),
            ]
          ),
        ]
      ),
    ],
    1
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 208 */
/*!***********************************************************************************************************************************************************!*\
  !*** C:/Users/TAOER/Desktop/ShayuVideo/ShayuVideoAPP/uni_modules/uni-popup/components/uni-popup-comments/uni-popup-comments.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_popup_comments_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib??ref--5-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--5-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./uni-popup-comments.vue?vue&type=script&lang=js& */ 209);\n/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_popup_comments_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_popup_comments_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_popup_comments_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_popup_comments_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_popup_comments_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQWdiLENBQWdCLDRkQUFHLEVBQUMiLCJmaWxlIjoiMjA4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vZCBmcm9tIFwiLSFEOlxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxiYWJlbC1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzPz9yZWYtLTUtMCFEOlxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXJcXFxcaW5kZXguanM/P3JlZi0tNS0xIUQ6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcdnVlLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3VuaS1wb3B1cC1jb21tZW50cy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hRDpcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcYmFiZWwtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcz8/cmVmLS01LTAhRDpcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyXFxcXGluZGV4LmpzPz9yZWYtLTUtMSFEOlxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi91bmktcG9wdXAtY29tbWVudHMudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///208\n");

/***/ }),
/* 209 */
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--5-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--5-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!C:/Users/TAOER/Desktop/ShayuVideo/ShayuVideoAPP/uni_modules/uni-popup/components/uni-popup-comments/uni-popup-comments.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__f__) {\n\nvar _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 150);\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\nvar _popup = _interopRequireDefault(__webpack_require__(/*! ../uni-popup/popup.js */ 210));\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\nvar app = getApp();\nvar _default = {\n  name: \"UniPopupShare\",\n  mixins: [_popup.default],\n  emits: [\"select\"],\n  props: {\n    title: {\n      type: String,\n      default: \"分享到\"\n    },\n    beforeClose: {\n      type: Boolean,\n      default: false\n    },\n    thisVlogerId: {\n      type: String,\n      default: \"\"\n    },\n    thisVlogId: {\n      type: String,\n      default: \"\"\n    }\n  },\n  data: function data() {\n    return {\n      commentWrapperBlack: true,\n      commentWrapperWhite: false,\n      commentBoxBlack: true,\n      commentBoxWhite: false,\n      // commentWrapperBlack: false,\n      // commentWrapperWhite: true,\n      // commentBoxBlack: false,\n      // commentBoxWhite: true,\n      screenWidth: uni.getSystemInfoSync().screenWidth,\n      currentComment: \"\",\n      scrollTop: 0,\n      old: {\n        scrollTop: 0\n      },\n      // commentTouched: false,\n      activeIndex: -1,\n      bottomTxt: \"暂时没有更多了\",\n      placeholder: \"善语结良缘,恶语伤人心~\",\n      commentFocus: false,\n      thisFatherCommentId: \"0\",\n      // 用于标识当前的回复是否有父id，还是仅仅只是普通评论\n\n      thisVlogTotalComentCounts: 0,\n      loginUserId: \"\",\n      page: 0,\n      totalPage: 0,\n      commentCounts: 88,\n      commentList: [],\n      // 举报相关\n      currentReportCommentId: \"\",\n      // 当前要举报的评论ID\n      reportReasons: [\"垃圾信息\", \"色情低俗\", \"违法违规\", \"人身攻击\", \"其他\"],\n      selectedReasonIndex: -1,\n      // 选中的举报原因索引\n      reportDescription: \"\" // 举报详细描述\n    };\n  },\n  created: function created() {\n    __f__(\"log\", \"comment...created...thisVlogId = \" + this.thisVlogId, \" at uni_modules/uni-popup/components/uni-popup-comments/uni-popup-comments.vue:721\");\n    var me = this;\n    var myUserInfo = getApp().getUserInfoSession();\n    var userId = \"\";\n    if (myUserInfo != null) {\n      userId = myUserInfo.id;\n    }\n    me.loginUserId = userId;\n    this.freshCommentCounts();\n    this.doCommentPagingList(this.page + 1, true);\n  },\n  methods: {\n    freshCommentCounts: function freshCommentCounts() {\n      var me = this;\n      var vlogId = me.thisVlogId;\n      var serverUrl = app.globalData.serverUrl;\n      uni.request({\n        method: \"GET\",\n        url: serverUrl + \"/comment/counts?vlogId=\" + vlogId,\n        success: function success(result) {\n          __f__(\"log\", result, \" at uni_modules/uni-popup/components/uni-popup-comments/uni-popup-comments.vue:744\");\n          if (result.data.status == 200) {\n            me.thisVlogTotalComentCounts = result.data.data;\n          } else {\n            me.thisVlogTotalComentCounts = 0;\n          }\n          if (me.thisVlogTotalComentCounts == 0) {\n            me.bottomTxt = \"抢一个沙发吧~\";\n          } else {\n            me.bottomTxt = \"暂时没有更多啦\";\n          }\n        }\n      });\n    },\n    unlike: function unlike(commentUserId, commentId, index) {\n      var me = this;\n      var serverUrl = app.globalData.serverUrl;\n      uni.request({\n        method: \"POST\",\n        header: {\n          headerUserId: me.loginUserId,\n          headerUserToken: app.getUserSessionToken()\n        },\n        url: serverUrl + \"/comment/unlike?userId=\" + me.loginUserId + \"&commentId=\" + commentId,\n        success: function success(result) {\n          __f__(\"log\", result, \" at uni_modules/uni-popup/components/uni-popup-comments/uni-popup-comments.vue:778\");\n          if (result.data.status == 200) {\n            me.reLikeCommentList(index, 0);\n            me.reCountsCommentList(index, -1);\n          } else {\n            uni.showToast({\n              title: result.data.msg,\n              icon: \"none\",\n              duration: 3000\n            });\n          }\n        }\n      });\n    },\n    like: function like(commentUserId, commentId, index) {\n      var me = this;\n      var myUserInfo = getApp().getUserInfoSession();\n      if (myUserInfo == null) {\n        uni.showTabBar({\n          animation: false\n        });\n        uni.showToast({\n          duration: 3000,\n          title: \"请登录~\",\n          icon: \"none\"\n        });\n        uni.navigateTo({\n          url: \"../loginRegist/loginRegist\",\n          animationType: \"slide-in-bottom\"\n        });\n        return;\n      }\n      var serverUrl = app.globalData.serverUrl;\n      uni.request({\n        method: \"POST\",\n        header: {\n          headerUserId: me.loginUserId,\n          headerUserToken: app.getUserSessionToken()\n        },\n        url: serverUrl + \"/comment/like?userId=\" + me.loginUserId + \"&commentId=\" + commentId,\n        success: function success(result) {\n          __f__(\"log\", result, \" at uni_modules/uni-popup/components/uni-popup-comments/uni-popup-comments.vue:828\");\n          if (result.data.status == 200) {\n            me.reLikeCommentList(index, 1);\n            me.reCountsCommentList(index, 1);\n          } else {\n            uni.showToast({\n              title: result.data.msg,\n              icon: \"none\",\n              duration: 3000\n            });\n          }\n        }\n      });\n    },\n    reCountsCommentList: function reCountsCommentList(index, number) {\n      var me = this;\n      var commentList = me.commentList;\n      commentList[index].likeCounts = commentList[index].likeCounts + number;\n      commentList.splice(index, 1, commentList[index]);\n      me.commentList = commentList;\n    },\n    reLikeCommentList: function reLikeCommentList(index, isLike) {\n      var me = this;\n      var commentList = me.commentList;\n      commentList[index].isLike = isLike;\n      commentList.splice(index, 1, commentList[index]);\n      me.commentList = commentList;\n    },\n    deleteComment: function deleteComment(commentUserId, commentId) {\n      var me = this;\n      var vlogId = me.thisVlogId;\n      // console.log(\"deleteComment...deleteComment=\" + commentId);\n      // 判断如果当前登陆者userId和评论的留言者id不同，不能删除\n      if (commentUserId != me.loginUserId) {\n        return;\n      }\n      uni.showModal({\n        title: \"提示\",\n        content: \"确认删除评论吗？\",\n        success: function success(res) {\n          if (res.confirm) {\n            // console.log('用户点击确定');\n            var serverUrl = app.globalData.serverUrl;\n            uni.request({\n              method: \"DELETE\",\n              header: {\n                headerUserId: commentUserId,\n                headerUserToken: app.getUserSessionToken()\n              },\n              url: serverUrl + \"/comment/delete?commentUserId=\" + commentUserId + \"&commentId=\" + commentId + \"&vlogId=\" + vlogId,\n              success: function success(result) {\n                __f__(\"log\", result, \" at uni_modules/uni-popup/components/uni-popup-comments/uni-popup-comments.vue:895\");\n                if (result.data.status == 200) {\n                  me.doCommentPagingList(1, true);\n                } else {\n                  uni.showToast({\n                    title: result.data.msg,\n                    icon: \"none\",\n                    duration: 3000\n                  });\n                }\n                me.freshCommentCounts();\n              }\n            });\n          } else if (res.cancel) {\n            // console.log('用户点击取消');\n          }\n        }\n      });\n    },\n    loadMore: function loadMore() {\n      if (this.page == this.totalPage) {\n        return;\n      }\n      this.doCommentPagingList(this.page + 1, false);\n    },\n    // 分页查询评论列表\n    doCommentPagingList: function doCommentPagingList(page, needClearList) {\n      // 查询首页短视频列表\n      var me = this;\n      me.page = page;\n      var vlogId = me.thisVlogId;\n      // console.log(vlogId);\n      var serverUrl = app.globalData.serverUrl;\n      uni.request({\n        method: \"GET\",\n        url: serverUrl + \"/comment/list?vlogId=\" + vlogId + \"&userId=\" + me.loginUserId + \"&page=\" + page + \"&pageSize=10\",\n        success: function success(result) {\n          __f__(\"log\", result, \" at uni_modules/uni-popup/components/uni-popup-comments/uni-popup-comments.vue:941\");\n          if (result.data.status == 200) {\n            var commentList = result.data.data.rows;\n            var totalPage = result.data.data.total;\n            // console.log(commentList);\n\n            if (needClearList) {\n              me.commentList = [];\n            }\n            me.commentList = me.commentList.concat(commentList);\n            me.totalPage = totalPage;\n          } else {\n            uni.showToast({\n              title: result.data.msg,\n              icon: \"none\",\n              duration: 3000\n            });\n          }\n        }\n      });\n    },\n    // 获得焦点，改变底部文本框颜色\n    typingComment: function typingComment() {\n      this.commentWrapperBlack = false;\n      this.commentWrapperWhite = true;\n      this.commentBoxBlack = false;\n      this.commentBoxWhite = true;\n\n      // console.log(this.thisFatherCommentId);\n    },\n    // 失去焦点，改变底部文本框颜色\n    noTypingComment: function noTypingComment() {\n      this.commentWrapperBlack = true;\n      this.commentWrapperWhite = false;\n      this.commentBoxBlack = true;\n      this.commentBoxWhite = false;\n      this.thisFatherCommentId = \"0\"; // 恢复默认的回复fatherId为“0”\n      this.commentFocus = false;\n      this.placeholder = \"爱评论的人都是天使~\";\n    },\n    // 回复他人的评论\n    replyComment: function replyComment(commentId, commentUserNickname) {\n      this.thisFatherCommentId = commentId;\n      this.commentFocus = true;\n      this.placeholder = \"回复 @\" + commentUserNickname;\n      // this.typingComment();\n    },\n    // 发布留言\n    doCommentPublish: function doCommentPublish() {\n      var me = this;\n      var myUserInfo = getApp().getUserInfoSession();\n      if (myUserInfo == null) {\n        uni.showTabBar({\n          animation: false\n        });\n        uni.showToast({\n          duration: 3000,\n          title: \"请登录~\",\n          icon: \"none\"\n        });\n        uni.navigateTo({\n          url: \"../loginRegist/loginRegist\",\n          animationType: \"slide-in-bottom\"\n        });\n        return;\n      }\n      if (me.currentComment == null || me.currentComment == \"\" || me.currentComment == undefined) {\n        uni.showToast({\n          title: \"请填入您的评论~\",\n          mask: true,\n          position: \"bottom\"\n        });\n        return;\n      }\n      if (me.currentComment.length > 50) {\n        uni.showToast({\n          title: \"评论字数限制50以内噢~\",\n          mask: true,\n          position: \"bottom\"\n        });\n        return;\n      }\n      var userId = myUserInfo.id;\n      var serverUrl = app.globalData.serverUrl;\n      var pendingCommentObject = {\n        vlogId: me.thisVlogId,\n        vlogerId: me.thisVlogerId,\n        fatherCommentId: me.thisFatherCommentId,\n        commentUserId: userId,\n        content: me.currentComment\n      };\n      uni.request({\n        method: \"POST\",\n        header: {\n          headerUserId: userId,\n          headerUserToken: app.getUserSessionToken()\n        },\n        url: serverUrl + \"/comment/create\",\n        data: pendingCommentObject,\n        success: function success(result) {\n          __f__(\"log\", result, \" at uni_modules/uni-popup/components/uni-popup-comments/uni-popup-comments.vue:1056\");\n          if (result.data.status == 200) {\n            var newCommentObject = result.data.data;\n            newCommentObject.commentId = newCommentObject.id;\n            newCommentObject.commentUserNickname = myUserInfo.nickname;\n            newCommentObject.commentUserFace = myUserInfo.face;\n            newCommentObject.isLike = 0;\n            // newCommentObject.isOwner = 0;\n            // if (me.thisVlogerId == userId) {\n            // \tnewCommentObject.isOwner = 1;\n            // }\n\n            me.doCommentPagingList(1, true);\n\n            // 评论/回复完毕后，回复thisFatherCommentId为“0”\n            me.thisFatherCommentId = \"0\";\n\n            // 把新评论添加到第一个位置，弱一致性，不需要从数据库里再去取\n            me.commentList.unshift(newCommentObject);\n            // 清空文本框\n            me.currentComment = \"\";\n            // 隐藏键盘\n            uni.hideKeyboard();\n            // 底部变色\n            me.noTypingComment();\n\n            // 把滚动list到第一个位置\n            me.scrollTop = me.scrollTop + 1;\n            me.$nextTick(function () {\n              me.scrollTop = 0; //赋值为0即代表返回顶部\n            });\n          } else {\n            uni.showToast({\n              title: result.data.msg,\n              icon: \"none\",\n              duration: 3000\n            });\n          }\n          me.freshCommentCounts();\n        }\n      });\n    },\n    // 把超过1000或10000的数字调整，比如1.3k/6.8w\n    getGraceNumber: function getGraceNumber(num) {\n      return getApp().graceNumber(num);\n    },\n    // 时间显示 刚刚/xx小时前/...\n    getGraceDateBeforeNow: function getGraceDateBeforeNow(dateTimeStr) {\n      var date = app.dateFormat(\"YYYY-mm-dd\", new Date(dateTimeStr));\n      // console.log(date);\n      return getApp().getDateBeforeNow(date);\n    },\n    /**\n     * 选择内容\n     */\n    select: function select(item, index) {\n      this.$emit(\"select\", {\n        item: item,\n        index: index\n      });\n      this.close();\n    },\n    /**\n     * 关闭窗口\n     */\n    close: function close() {\n      if (this.beforeClose) return;\n      this.popup.close();\n      uni.showTabBar({\n        animation: true\n      });\n    },\n    touchstartComment: function touchstartComment(index) {\n      // this.commentTouched = true;\n      this.activeIndex = index;\n    },\n    touchendComment: function touchendComment() {\n      // this.commentTouched = false;\n      this.activeIndex = -1;\n    },\n    // 显示举报弹窗\n    showReportDialog: function showReportDialog(commentId) {\n      var me = this;\n\n      // 检查是否登录\n      var myUserInfo = getApp().getUserInfoSession();\n      if (myUserInfo == null) {\n        uni.showTabBar({\n          animation: false\n        });\n        uni.showToast({\n          duration: 3000,\n          title: \"请登录~\",\n          icon: \"none\"\n        });\n        uni.navigateTo({\n          url: \"../loginRegist/loginRegist\",\n          animationType: \"slide-in-bottom\"\n        });\n        return;\n      }\n      me.currentReportCommentId = commentId;\n      me.selectedReasonIndex = -1;\n      me.reportDescription = \"\";\n      me.$refs.reportPopup.open();\n    },\n    // 关闭举报弹窗\n    closeReportDialog: function closeReportDialog() {\n      this.$refs.reportPopup.close();\n      this.currentReportCommentId = \"\";\n      this.selectedReasonIndex = -1;\n      this.reportDescription = \"\";\n    },\n    // 选择举报原因\n    onReasonChange: function onReasonChange(e) {\n      this.selectedReasonIndex = e.detail.value;\n    },\n    // 提交举报\n    submitReport: function submitReport() {\n      var me = this;\n\n      // 验证举报原因\n      if (me.selectedReasonIndex < 0) {\n        uni.showToast({\n          title: \"请选择举报原因\",\n          icon: \"none\",\n          duration: 2000\n        });\n        return;\n      }\n      var myUserInfo = getApp().getUserInfoSession();\n      if (myUserInfo == null) {\n        uni.showToast({\n          title: \"请登录~\",\n          icon: \"none\",\n          duration: 3000\n        });\n        return;\n      }\n      var reporterId = myUserInfo.id;\n      var reason = me.reportReasons[me.selectedReasonIndex];\n      var description = me.reportDescription || \"\";\n\n      // 构建举报数据\n      var reportData = {\n        reportType: \"2\",\n        // 2表示评论\n        targetId: me.currentReportCommentId,\n        reason: reason,\n        description: description,\n        reporterId: reporterId\n      };\n      __f__(\"log\", \"提交举报数据：\", reportData, \" at uni_modules/uni-popup/components/uni-popup-comments/uni-popup-comments.vue:1219\");\n      var serverUrl = app.globalData.serverUrl;\n      uni.request({\n        method: \"POST\",\n        header: {\n          \"Content-Type\": \"application/json\",\n          headerUserId: reporterId,\n          headerUserToken: app.getUserSessionToken()\n        },\n        url: serverUrl + \"/report/comment\",\n        data: reportData,\n        success: function success(result) {\n          __f__(\"log\", \"举报响应：\", result, \" at uni_modules/uni-popup/components/uni-popup-comments/uni-popup-comments.vue:1232\");\n          if (result.data.status == 200) {\n            uni.showToast({\n              title: \"举报成功!\",\n              icon: \"success\",\n              duration: 2000\n            });\n            me.closeReportDialog();\n          } else {\n            uni.showToast({\n              title: result.data.msg || \"举报失败，请重试\",\n              icon: \"none\",\n              duration: 3000\n            });\n          }\n        },\n        fail: function fail(err) {\n          __f__(\"error\", \"举报请求失败：\", err, \" at uni_modules/uni-popup/components/uni-popup-comments/uni-popup-comments.vue:1250\");\n          uni.showToast({\n            title: \"网络错误，请重试\",\n            icon: \"none\",\n            duration: 3000\n          });\n        }\n      });\n    }\n  }\n};\nexports.default = _default;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 123)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vdW5pX21vZHVsZXMvdW5pLXBvcHVwL2NvbXBvbmVudHMvdW5pLXBvcHVwLWNvbW1lbnRzL3VuaS1wb3B1cC1jb21tZW50cy52dWUiXSwibmFtZXMiOlsibmFtZSIsIm1peGlucyIsImVtaXRzIiwicHJvcHMiLCJ0aXRsZSIsInR5cGUiLCJkZWZhdWx0IiwiYmVmb3JlQ2xvc2UiLCJ0aGlzVmxvZ2VySWQiLCJ0aGlzVmxvZ0lkIiwiZGF0YSIsImNvbW1lbnRXcmFwcGVyQmxhY2siLCJjb21tZW50V3JhcHBlcldoaXRlIiwiY29tbWVudEJveEJsYWNrIiwiY29tbWVudEJveFdoaXRlIiwic2NyZWVuV2lkdGgiLCJjdXJyZW50Q29tbWVudCIsInNjcm9sbFRvcCIsIm9sZCIsImFjdGl2ZUluZGV4IiwiYm90dG9tVHh0IiwicGxhY2Vob2xkZXIiLCJjb21tZW50Rm9jdXMiLCJ0aGlzRmF0aGVyQ29tbWVudElkIiwidGhpc1Zsb2dUb3RhbENvbWVudENvdW50cyIsImxvZ2luVXNlcklkIiwicGFnZSIsInRvdGFsUGFnZSIsImNvbW1lbnRDb3VudHMiLCJjb21tZW50TGlzdCIsImN1cnJlbnRSZXBvcnRDb21tZW50SWQiLCJyZXBvcnRSZWFzb25zIiwic2VsZWN0ZWRSZWFzb25JbmRleCIsInJlcG9ydERlc2NyaXB0aW9uIiwiY3JlYXRlZCIsInVzZXJJZCIsIm1lIiwibWV0aG9kcyIsImZyZXNoQ29tbWVudENvdW50cyIsInVuaSIsIm1ldGhvZCIsInVybCIsInN1Y2Nlc3MiLCJ1bmxpa2UiLCJoZWFkZXIiLCJoZWFkZXJVc2VySWQiLCJoZWFkZXJVc2VyVG9rZW4iLCJzZXJ2ZXJVcmwiLCJjb21tZW50SWQiLCJpY29uIiwiZHVyYXRpb24iLCJsaWtlIiwiYW5pbWF0aW9uIiwiYW5pbWF0aW9uVHlwZSIsInJlQ291bnRzQ29tbWVudExpc3QiLCJyZUxpa2VDb21tZW50TGlzdCIsImRlbGV0ZUNvbW1lbnQiLCJjb250ZW50IiwiY29tbWVudFVzZXJJZCIsInZsb2dJZCIsImxvYWRNb3JlIiwiZG9Db21tZW50UGFnaW5nTGlzdCIsInR5cGluZ0NvbW1lbnQiLCJub1R5cGluZ0NvbW1lbnQiLCJyZXBseUNvbW1lbnQiLCJkb0NvbW1lbnRQdWJsaXNoIiwibWFzayIsInBvc2l0aW9uIiwidmxvZ2VySWQiLCJmYXRoZXJDb21tZW50SWQiLCJuZXdDb21tZW50T2JqZWN0IiwiZ2V0R3JhY2VOdW1iZXIiLCJnZXRHcmFjZURhdGVCZWZvcmVOb3ciLCJzZWxlY3QiLCJpdGVtIiwiaW5kZXgiLCJjbG9zZSIsInRvdWNoc3RhcnRDb21tZW50IiwidG91Y2hlbmRDb21tZW50Iiwic2hvd1JlcG9ydERpYWxvZyIsImNsb3NlUmVwb3J0RGlhbG9nIiwib25SZWFzb25DaGFuZ2UiLCJzdWJtaXRSZXBvcnQiLCJyZXBvcnRUeXBlIiwidGFyZ2V0SWQiLCJyZWFzb24iLCJkZXNjcmlwdGlvbiIsInJlcG9ydGVySWQiLCJmYWlsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBaXBCQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBREE7QUFBQSxlQUVBO0VBQ0FBO0VBQ0FDO0VBQ0FDO0VBQ0FDO0lBQ0FDO01BQ0FDO01BQ0FDO0lBQ0E7SUFDQUM7TUFDQUY7TUFDQUM7SUFDQTtJQUNBRTtNQUNBSDtNQUNBQztJQUNBO0lBQ0FHO01BQ0FKO01BQ0FDO0lBQ0E7RUFDQTtFQUNBSTtJQUNBO01BQ0FDO01BQ0FDO01BQ0FDO01BQ0FDO01BQ0E7TUFDQTtNQUNBO01BQ0E7TUFDQUM7TUFDQUM7TUFDQUM7TUFDQUM7UUFDQUQ7TUFDQTtNQUVBO01BQ0FFO01BRUFDO01BQ0FDO01BQ0FDO01BQ0FDO01BQUE7O01BRUFDO01BQ0FDO01BQ0FDO01BQ0FDO01BQ0FDO01BQ0FDO01BRUE7TUFDQUM7TUFBQTtNQUNBQztNQUNBQztNQUFBO01BQ0FDO0lBQ0E7RUFDQTtFQUNBQztJQUNBO0lBRUE7SUFDQTtJQUNBO0lBQ0E7TUFDQUM7SUFDQTtJQUNBQztJQUVBO0lBQ0E7RUFDQTtFQUNBQztJQUNBQztNQUNBO01BQ0E7TUFFQTtNQUNBQztRQUNBQztRQUNBQztRQUNBQztVQUNBO1VBRUE7WUFDQU47VUFDQTtZQUNBQTtVQUNBO1VBRUE7WUFDQUE7VUFDQTtZQUNBQTtVQUNBO1FBQ0E7TUFDQTtJQUNBO0lBRUFPO01BQ0E7TUFFQTtNQUNBSjtRQUNBQztRQUNBSTtVQUNBQztVQUNBQztRQUNBO1FBQ0FMLEtBQ0FNLFlBQ0EsNEJBQ0FYLGlCQUNBLGdCQUNBWTtRQUNBTjtVQUNBO1VBRUE7WUFDQU47WUFDQUE7VUFDQTtZQUNBRztjQUNBbkM7Y0FDQTZDO2NBQ0FDO1lBQ0E7VUFDQTtRQUNBO01BQ0E7SUFDQTtJQUVBQztNQUNBO01BRUE7TUFDQTtRQUNBWjtVQUNBYTtRQUNBO1FBQ0FiO1VBQ0FXO1VBQ0E5QztVQUNBNkM7UUFDQTtRQUNBVjtVQUNBRTtVQUNBWTtRQUNBO1FBQ0E7TUFDQTtNQUVBO01BQ0FkO1FBQ0FDO1FBQ0FJO1VBQ0FDO1VBQ0FDO1FBQ0E7UUFDQUwsS0FDQU0sWUFDQSwwQkFDQVgsaUJBQ0EsZ0JBQ0FZO1FBQ0FOO1VBQ0E7VUFFQTtZQUNBTjtZQUNBQTtVQUNBO1lBQ0FHO2NBQ0FuQztjQUNBNkM7Y0FDQUM7WUFDQTtVQUNBO1FBQ0E7TUFDQTtJQUNBO0lBRUFJO01BQ0E7TUFDQTtNQUVBekI7TUFDQUE7TUFFQU87SUFDQTtJQUVBbUI7TUFDQTtNQUNBO01BRUExQjtNQUNBQTtNQUVBTztJQUNBO0lBRUFvQjtNQUNBO01BQ0E7TUFDQTtNQUNBO01BQ0E7UUFDQTtNQUNBO01BRUFqQjtRQUNBbkM7UUFDQXFEO1FBQ0FmO1VBQ0E7WUFDQTtZQUNBO1lBQ0FIO2NBQ0FDO2NBQ0FJO2dCQUNBQztnQkFDQUM7Y0FDQTtjQUNBTCxLQUNBTSxZQUNBLG1DQUNBVyxnQkFDQSxnQkFDQVYsWUFDQSxhQUNBVztjQUNBakI7Z0JBQ0E7Z0JBRUE7a0JBQ0FOO2dCQUNBO2tCQUNBRztvQkFDQW5DO29CQUNBNkM7b0JBQ0FDO2tCQUNBO2dCQUNBO2dCQUNBZDtjQUNBO1lBQ0E7VUFDQTtZQUNBO1VBQUE7UUFFQTtNQUNBO0lBQ0E7SUFDQXdCO01BQ0E7UUFDQTtNQUNBO01BQ0E7SUFDQTtJQUNBO0lBQ0FDO01BQ0E7TUFDQTtNQUNBekI7TUFDQTtNQUNBO01BQ0E7TUFDQUc7UUFDQUM7UUFDQUMsS0FDQU0sWUFDQSwwQkFDQVksU0FDQSxhQUNBdkIsaUJBQ0EsV0FDQVYsT0FDQTtRQUNBZ0I7VUFDQTtVQUVBO1lBQ0E7WUFDQTtZQUNBOztZQUVBO2NBQ0FOO1lBQ0E7WUFDQUE7WUFDQUE7VUFDQTtZQUNBRztjQUNBbkM7Y0FDQTZDO2NBQ0FDO1lBQ0E7VUFDQTtRQUNBO01BQ0E7SUFDQTtJQUVBO0lBQ0FZO01BQ0E7TUFDQTtNQUNBO01BQ0E7O01BRUE7SUFDQTtJQUNBO0lBQ0FDO01BQ0E7TUFDQTtNQUNBO01BQ0E7TUFFQTtNQUNBO01BQ0E7SUFDQTtJQUVBO0lBQ0FDO01BQ0E7TUFDQTtNQUNBO01BQ0E7SUFDQTtJQUVBO0lBQ0FDO01BQ0E7TUFFQTtNQUNBO1FBQ0ExQjtVQUNBYTtRQUNBO1FBQ0FiO1VBQ0FXO1VBQ0E5QztVQUNBNkM7UUFDQTtRQUNBVjtVQUNBRTtVQUNBWTtRQUNBO1FBQ0E7TUFDQTtNQUVBLElBQ0FqQiw2QkFDQUEsMkJBQ0FBLGdDQUNBO1FBQ0FHO1VBQ0FuQztVQUNBOEQ7VUFDQUM7UUFDQTtRQUNBO01BQ0E7TUFFQTtRQUNBNUI7VUFDQW5DO1VBQ0E4RDtVQUNBQztRQUNBO1FBQ0E7TUFDQTtNQUVBO01BQ0E7TUFFQTtRQUNBUjtRQUNBUztRQUNBQztRQUNBWDtRQUNBRDtNQUNBO01BRUFsQjtRQUNBQztRQUNBSTtVQUNBQztVQUNBQztRQUNBO1FBQ0FMO1FBQ0EvQjtRQUNBZ0M7VUFDQTtVQUVBO1lBQ0E7WUFDQTRCO1lBQ0FBO1lBQ0FBO1lBQ0FBO1lBQ0E7WUFDQTtZQUNBO1lBQ0E7O1lBRUFsQzs7WUFFQTtZQUNBQTs7WUFFQTtZQUNBQTtZQUNBO1lBQ0FBO1lBQ0E7WUFDQUc7WUFDQTtZQUNBSDs7WUFFQTtZQUNBQTtZQUNBQTtjQUNBQTtZQUNBO1VBQ0E7WUFDQUc7Y0FDQW5DO2NBQ0E2QztjQUNBQztZQUNBO1VBQ0E7VUFFQWQ7UUFDQTtNQUNBO0lBQ0E7SUFDQTtJQUNBbUM7TUFDQTtJQUNBO0lBQ0E7SUFDQUM7TUFDQTtNQUNBO01BQ0E7SUFDQTtJQUVBO0FBQ0E7QUFDQTtJQUNBQztNQUNBO1FBQ0FDO1FBQ0FDO01BQ0E7TUFDQTtJQUNBO0lBQ0E7QUFDQTtBQUNBO0lBQ0FDO01BQ0E7TUFDQTtNQUNBckM7UUFDQWE7TUFDQTtJQUNBO0lBRUF5QjtNQUNBO01BQ0E7SUFDQTtJQUNBQztNQUNBO01BQ0E7SUFDQTtJQUVBO0lBQ0FDO01BQ0E7O01BRUE7TUFDQTtNQUNBO1FBQ0F4QztVQUNBYTtRQUNBO1FBQ0FiO1VBQ0FXO1VBQ0E5QztVQUNBNkM7UUFDQTtRQUNBVjtVQUNBRTtVQUNBWTtRQUNBO1FBQ0E7TUFDQTtNQUVBakI7TUFDQUE7TUFDQUE7TUFDQUE7SUFDQTtJQUVBO0lBQ0E0QztNQUNBO01BQ0E7TUFDQTtNQUNBO0lBQ0E7SUFFQTtJQUNBQztNQUNBO0lBQ0E7SUFFQTtJQUNBQztNQUNBOztNQUVBO01BQ0E7UUFDQTNDO1VBQ0FuQztVQUNBNkM7VUFDQUM7UUFDQTtRQUNBO01BQ0E7TUFFQTtNQUNBO1FBQ0FYO1VBQ0FuQztVQUNBNkM7VUFDQUM7UUFDQTtRQUNBO01BQ0E7TUFFQTtNQUNBO01BQ0E7O01BRUE7TUFDQTtRQUNBaUM7UUFBQTtRQUNBQztRQUNBQztRQUNBQztRQUNBQztNQUNBO01BRUE7TUFFQTtNQUNBaEQ7UUFDQUM7UUFDQUk7VUFDQTtVQUNBQztVQUNBQztRQUNBO1FBQ0FMO1FBQ0EvQjtRQUNBZ0M7VUFDQTtVQUVBO1lBQ0FIO2NBQ0FuQztjQUNBNkM7Y0FDQUM7WUFDQTtZQUNBZDtVQUNBO1lBQ0FHO2NBQ0FuQztjQUNBNkM7Y0FDQUM7WUFDQTtVQUNBO1FBQ0E7UUFDQXNDO1VBQ0E7VUFDQWpEO1lBQ0FuQztZQUNBNkM7WUFDQUM7VUFDQTtRQUNBO01BQ0E7SUFDQTtFQUNBO0FBQ0E7QUFBQSwyQiIsImZpbGUiOiIyMDkuanMiLCJzb3VyY2VzQ29udGVudCI6WyI8c3R5bGUgbGFuZz1cInNjc3NcIiBzY29wZWQ+XG4udW5pLXBvcHVwLXNoYXJlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE4MTcxNztcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTZycHg7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxNnJweDtcbn1cbi51bmktc2hhcmUtdGl0bGUge1xuICAvKiAjaWZuZGVmIEFQUC1OVlVFICovXG4gIGRpc3BsYXk6IGZsZXg7XG4gIC8qICNlbmRpZiAqL1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGhlaWdodDogNDBweDtcbn1cbi51bmktc2hhcmUtdGl0bGUtdGV4dCB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG4udW5pLXNoYXJlLWNvbnRlbnQge1xuICAvKiAjaWZuZGVmIEFQUC1OVlVFICovXG4gIGRpc3BsYXk6IGZsZXg7XG4gIC8qICNlbmRpZiAqL1xuICAvLyBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAvLyBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgLy8gcGFkZGluZy10b3A6IDEwcHg7XG59XG5cbi51bmktc2hhcmUtY29udGVudC1ib3gge1xuICAvKiAjaWZuZGVmIEFQUC1OVlVFICovXG4gIGRpc3BsYXk6IGZsZXg7XG4gIC8qICNlbmRpZiAqL1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIHdpZHRoOiAzNjBweDtcbn1cblxuLnVuaS1zaGFyZS1jb250ZW50LWl0ZW0ge1xuICB3aWR0aDogOTBweDtcbiAgLyogI2lmbmRlZiBBUFAtTlZVRSAqL1xuICBkaXNwbGF5OiBmbGV4O1xuICAvKiAjZW5kaWYgKi9cbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHBhZGRpbmc6IDEwcHggMDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLnVuaS1zaGFyZS1jb250ZW50LWl0ZW06YWN0aXZlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjVmNTtcbn1cblxuLnVuaS1zaGFyZS1pbWFnZSB7XG4gIHdpZHRoOiAzMHB4O1xuICBoZWlnaHQ6IDMwcHg7XG59XG5cbi51bmktc2hhcmUtdGV4dCB7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY29sb3I6ICMzYjQxNDQ7XG59XG5cbi51bmktc2hhcmUtYnV0dG9uLWJveCB7XG4gIC8qICNpZm5kZWYgQVBQLU5WVUUgKi9cbiAgZGlzcGxheTogZmxleDtcbiAgLyogI2VuZGlmICovXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIHBhZGRpbmc6IDEwcHggMTVweDtcbn1cblxuLnVuaS1zaGFyZS1idXR0b24ge1xuICBmbGV4OiAxO1xuICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICBjb2xvcjogIzY2NjtcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuXG4udW5pLXNoYXJlLWJ1dHRvbjo6YWZ0ZXIge1xuICBib3JkZXItcmFkaXVzOiA1MHB4O1xufVxuXG4uaWNvbi1jbG9zZS1sZWZ0IHtcbiAgd2lkdGg6IDIwcnB4O1xuICBoZWlnaHQ6IDIwcnB4O1xuICBtYXJnaW4tbGVmdDogMzBycHg7XG4gIG9wYWNpdHk6IDA7XG59XG4uaWNvbi1jbG9zZS1yaWdodCB7XG4gIHdpZHRoOiAyMnJweDtcbiAgaGVpZ2h0OiAyMnJweDtcbiAgbWFyZ2luLXJpZ2h0OiAzMHJweDtcbn1cblxuLmNvbW1lbnQtd3JhcHBlciB7XG4gIC8vIGhlaWdodDogNDBweDtcbiAgcGFkZGluZzogMTBweCAxMHB4IDEwcHggMTBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG59XG4uY29tbWVudFdyYXBwZXJCbGFjayB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwZTBkMGQ7XG59XG4uY29tbWVudFdyYXBwZXJXaGl0ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG59XG4uY29tbWVudC1ib3gge1xuICBmb250LXNpemU6IDE1cHg7XG4gIGhlaWdodDogNDBweDtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgcGFkZGluZzogMCAxOHB4IDAgMThweDtcbn1cbi5jb21tZW50Qm94QmxhY2sge1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE1MTUxNTtcbn1cbi5jb21tZW50Qm94V2hpdGUge1xuICBjb2xvcjogIzAwMDAwMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YyZjJmNTtcbn1cbi5jb21tZW50LWJveC1wbGFjZWhvbGRlciB7XG4gIGZvbnQtc2l6ZTogMTVweDtcbn1cbi5pY29uLWNvbW1lbnQge1xuICB3aWR0aDogMzBweDtcbiAgaGVpZ2h0OiAzMHB4O1xufVxuXG4uYWxsLWNvbW1lbnRzIHtcbiAgaGVpZ2h0OiA4MDBycHg7XG4gIC8vIHBhZGRpbmc6IDE2cnB4IDMwcnB4O1xufVxuLmltZy1mYWNlIHtcbiAgd2lkdGg6IDgwcnB4O1xuICBoZWlnaHQ6IDgwcnB4O1xuICBib3JkZXItcmFkaXVzOiAxMDBycHg7XG59XG4ubGlrZS1vci1ub3Qge1xuICBtYXJnaW4tdG9wOiAxNnB4O1xuICB3aWR0aDogNTBycHg7XG4gIGhlaWdodDogNTBycHg7XG59XG4uY29tbWVudHMtd3JhcHBlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG4uY29tbWVudHMtd3JhcHBlci1zdWItdXAge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG4uY29tbWVudHMtd3JhcHBlci1zdWItZG93biB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIG1hcmdpbi10b3A6IDJweDtcbn1cbi52bG9nZ2VyLXdyYXBwZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xufVxuLnRhZy13cml0ZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YwMmE1MDtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICB3aWR0aDogMzBweDtcbiAgaGVpZ2h0OiAxNnB4O1xuICBtYXJnaW4tbGVmdDogMnB4O1xufVxuLndyaXRlci13b3JkcyB7XG4gIGZvbnQtc2l6ZTogMjZycHg7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5zaW5nbGUtY29tbWVudC1ib3gge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTgxNzE3O1xufVxuLnNpbmdsZS1jb21tZW50LWJveC10b3VjaGVkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIwMjAyMDtcbn1cbi5hY3RpdmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjAyMDIwO1xufVxuXG4vKiDkuL7miqXlvLnnqpfmoLflvI8gKi9cbi5yZXBvcnQtZGlhbG9nIHtcbiAgd2lkdGg6IDY4MHJweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFhMWExYTtcbiAgYm9yZGVyLXJhZGl1czogMjBycHg7XG4gIHBhZGRpbmc6IDQwcnB4O1xufVxuXG4ucmVwb3J0LXRpdGxlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW4tYm90dG9tOiA0MHJweDtcbn1cblxuLnJlcG9ydC10aXRsZS10ZXh0IHtcbiAgZm9udC1zaXplOiAzNnJweDtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbi5yZXBvcnQtY2xvc2UtaWNvbiB7XG4gIHdpZHRoOiA0MHJweDtcbiAgaGVpZ2h0OiA0MHJweDtcbiAgb3BhY2l0eTogMC44O1xufVxuXG4ucmVwb3J0LWNvbnRlbnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4ucmVwb3J0LWl0ZW0ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBtYXJnaW4tYm90dG9tOiAzMHJweDtcbn1cblxuLnJlcG9ydC1sYWJlbCB7XG4gIGZvbnQtc2l6ZTogMjhycHg7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBtYXJnaW4tYm90dG9tOiAyMHJweDtcbn1cblxuLnJlcG9ydC1waWNrZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyYTJhMmE7XG4gIGJvcmRlci1yYWRpdXM6IDEwcnB4O1xuICBwYWRkaW5nOiAyMHJweDtcbiAgLyogI2lmbmRlZiBBUFAtUExVUy1OVlVFICovXG4gIG1pbi1oZWlnaHQ6IDgwcnB4O1xuICAvKiAjZW5kaWYgKi9cbiAgLyogI2lmZGVmIEFQUC1QTFVTLU5WVUUgKi9cbiAgaGVpZ2h0OiA4MHJweDtcbiAgLyogI2VuZGlmICovXG59XG5cbi5yZXBvcnQtcGlja2VyLXRleHQge1xuICBmb250LXNpemU6IDI4cnB4O1xuICBjb2xvcjogI2ZmZmZmZjtcbn1cblxuLnJlcG9ydC1waWNrZXItcGxhY2Vob2xkZXIge1xuICBmb250LXNpemU6IDI4cnB4O1xuICBjb2xvcjogIzk5OTk5OTtcbn1cblxuLnJlcG9ydC1waWNrZXItYXJyb3cge1xuICBmb250LXNpemU6IDI0cnB4O1xuICBjb2xvcjogIzk5OTk5OTtcbn1cblxuLnJlcG9ydC10ZXh0YXJlYSB7XG4gIHdpZHRoOiAxMDAlO1xuICAvKiAjaWZuZGVmIEFQUC1QTFVTLU5WVUUgKi9cbiAgbWluLWhlaWdodDogMjUwcnB4O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAvKiAjZW5kaWYgKi9cbiAgLyogI2lmZGVmIEFQUC1QTFVTLU5WVUUgKi9cbiAgaGVpZ2h0OiAyNTBycHg7XG4gIC8qICNlbmRpZiAqL1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmEyYTJhO1xuICBib3JkZXItcmFkaXVzOiAxMHJweDtcbiAgcGFkZGluZzogMjBycHg7XG4gIGZvbnQtc2l6ZTogMjhycHg7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBtYXJnaW4tYm90dG9tOiAxMHJweDtcbn1cblxuLnJlcG9ydC1jaGFyLWNvdW50IHtcbiAgZm9udC1zaXplOiAyNHJweDtcbiAgY29sb3I6ICM5OTk5OTk7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuXG4ucmVwb3J0LWJ1dHRvbnMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIG1hcmdpbi10b3A6IDQwcnB4O1xufVxuXG4ucmVwb3J0LWJ0biB7XG4gIGZsZXg6IDE7XG4gIGhlaWdodDogODBycHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcnB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luOiAwIDEwcnB4O1xufVxuXG4ucmVwb3J0LWJ0bi1jYW5jZWwge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2EzYTNhO1xufVxuXG4ucmVwb3J0LWJ0bi1zdWJtaXQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWYyNzRkO1xufVxuXG4ucmVwb3J0LWJ0bi10ZXh0IHtcbiAgZm9udC1zaXplOiAzMnJweDtcbiAgY29sb3I6ICNmZmZmZmY7XG59XG48L3N0eWxlPlxuXG48IS0tIOS4vuaKpeW8ueeql+agt+W8jyAtIOS4jeS9v+eUqHNjb3BlZOS7peehruS/neagt+W8j+iDveW6lOeUqOWIsHVuaS1wb3B1cOaPkuanveWGheWuuSAtLT5cbjxzdHlsZT5cbi5yZXBvcnQtZGlhbG9nIHtcbiAgd2lkdGg6IDY4MHJweCAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWExYTFhO1xuICBib3JkZXItcmFkaXVzOiAyMHJweDtcbiAgcGFkZGluZzogNDBycHg7XG59XG5cbi5yZXBvcnQtdGV4dGFyZWEge1xuICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICAvKiAjaWZuZGVmIEFQUC1QTFVTLU5WVUUgKi9cbiAgbWluLWhlaWdodDogMjUwcnB4ICFpbXBvcnRhbnQ7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIC8qICNlbmRpZiAqL1xuICAvKiAjaWZkZWYgQVBQLVBMVVMtTlZVRSAqL1xuICBoZWlnaHQ6IDI1MHJweDtcbiAgLyogI2VuZGlmICovXG4gIGJhY2tncm91bmQtY29sb3I6ICMyYTJhMmE7XG4gIGJvcmRlci1yYWRpdXM6IDEwcnB4O1xuICBwYWRkaW5nOiAyMHJweDtcbiAgZm9udC1zaXplOiAyOHJweDtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIG1hcmdpbi1ib3R0b206IDEwcnB4O1xufVxuPC9zdHlsZT5cblxuPHRlbXBsYXRlPlxuICA8dmlldyBjbGFzcz1cInVuaS1wb3B1cC1zaGFyZVwiPlxuICAgIDx2aWV3IGNsYXNzPVwidW5pLXNoYXJlLXRpdGxlXCI+XG4gICAgICA8aW1hZ2VcbiAgICAgICAgc3JjPVwiL3N0YXRpYy9pbWFnZXMvaWNvbi1jbG9zZS5wbmdcIlxuICAgICAgICBjbGFzcz1cImljb24tY2xvc2UtbGVmdFwiXG4gICAgICA+PC9pbWFnZT5cbiAgICAgIDx0ZXh0IGNsYXNzPVwidW5pLXNoYXJlLXRpdGxlLXRleHRcIlxuICAgICAgICA+e3sgZ2V0R3JhY2VOdW1iZXIodGhpc1Zsb2dUb3RhbENvbWVudENvdW50cykgfX3mnaHor4Torro8L3RleHRcbiAgICAgID5cbiAgICAgIDxpbWFnZVxuICAgICAgICBzcmM9XCIvc3RhdGljL2ltYWdlcy9pY29uLWNsb3NlLnBuZ1wiXG4gICAgICAgIGNsYXNzPVwiaWNvbi1jbG9zZS1yaWdodFwiXG4gICAgICAgIEBjbGljaz1cImNsb3NlXCJcbiAgICAgID48L2ltYWdlPlxuICAgIDwvdmlldz5cbiAgICA8dmlldyBjbGFzcz1cInVuaS1zaGFyZS1jb250ZW50XCI+XG4gICAgICA8IS0tIDx2aWV3IGNsYXNzPVwidW5pLXNoYXJlLWNvbnRlbnQtYm94XCI+IC0tPlxuICAgICAgPHZpZXcgY2xhc3M9XCJcIiBzdHlsZT1cImhlaWdodDogODAwcnB4XCJcbiAgICAgICAgPjwhLS0gYmFja2dyb3VuZC1jb2xvcjogIzAwNzdBQTsgLS0+XG4gICAgICAgIDxzY3JvbGwtdmlld1xuICAgICAgICAgIGNsYXNzPVwiYWxsLWNvbW1lbnRzXCJcbiAgICAgICAgICA6c3R5bGU9XCJ7IHdpZHRoOiBzY3JlZW5XaWR0aCArICdweCcgfVwiXG4gICAgICAgICAgc2Nyb2xsLXk9XCJ0cnVlXCJcbiAgICAgICAgICBsb3dlci10aHJlc2hvbGQ9XCIxNTBcIlxuICAgICAgICAgIEBzY3JvbGx0b2xvd2VyPVwibG9hZE1vcmVcIlxuICAgICAgICAgIDpzY3JvbGwtdG9wPVwic2Nyb2xsVG9wXCJcbiAgICAgICAgPlxuICAgICAgICAgIDx2aWV3XG4gICAgICAgICAgICB2LWZvcj1cIihjb21tZW50Q29udGVudCwgaW5kZXgpIGluIGNvbW1lbnRMaXN0XCJcbiAgICAgICAgICAgIDprZXk9XCJpbmRleFwiXG4gICAgICAgICAgICA6ZGF0YS1pbmRleD1cImluZGV4XCJcbiAgICAgICAgICAgIDpjbGFzcz1cInsgYWN0aXZlOiBpbmRleCA9PSBhY3RpdmVJbmRleCB9XCJcbiAgICAgICAgICAgIEB0b3VjaHN0YXJ0PVwidG91Y2hzdGFydENvbW1lbnQoaW5kZXgpXCJcbiAgICAgICAgICAgIEB0b3VjaGVuZD1cInRvdWNoZW5kQ29tbWVudCgpXCJcbiAgICAgICAgICAgIEBsb25ncHJlc3M9XCJcbiAgICAgICAgICAgICAgZGVsZXRlQ29tbWVudChcbiAgICAgICAgICAgICAgICBjb21tZW50Q29udGVudC5jb21tZW50VXNlcklkLFxuICAgICAgICAgICAgICAgIGNvbW1lbnRDb250ZW50LmNvbW1lbnRJZFxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICBcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDx2aWV3XG4gICAgICAgICAgICAgIGNsYXNzPVwiY29tbWVudHMtd3JhcHBlclwiXG4gICAgICAgICAgICAgIHN0eWxlPVwibWFyZ2luLWxlZnQ6IDE2cnB4OyBtYXJnaW4tdG9wOiAxNnJweDsgbWFyZ2luLXJpZ2h0OiAxNnJweFwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDx2aWV3IGNsYXNzPVwiY29tbWVudHMtd3JhcHBlci1zdWItdXBcIj5cbiAgICAgICAgICAgICAgICA8dmlldyBjbGFzcz1cInZsb2dnZXItd3JhcHBlclwiPlxuICAgICAgICAgICAgICAgICAgPGltYWdlXG4gICAgICAgICAgICAgICAgICAgIDpzcmM9XCJjb21tZW50Q29udGVudC5jb21tZW50VXNlckZhY2VcIlxuICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImltZy1mYWNlXCJcbiAgICAgICAgICAgICAgICAgID48L2ltYWdlPlxuICAgICAgICAgICAgICAgICAgPHZpZXcgc3R5bGU9XCJtYXJnaW4tbGVmdDogMTBweDsgd2lkdGg6IDQ1NnJweFwiPlxuICAgICAgICAgICAgICAgICAgICA8dmlldyBzdHlsZT1cImRpc3BsYXk6IGZsZXg7IGZsZXgtZGlyZWN0aW9uOiByb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8dGV4dFxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAzMHJweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICM4Nzg1ODU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICA+e3sgY29tbWVudENvbnRlbnQuY29tbWVudFVzZXJOaWNrbmFtZSB9fTwvdGV4dFxuICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICA8dmlld1xuICAgICAgICAgICAgICAgICAgICAgICAgdi1pZj1cImNvbW1lbnRDb250ZW50LnZsb2dlcklkID09IHRoaXNWbG9nZXJJZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cInRhZy13cml0ZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9XCJhbGlnbi1zZWxmOiBjZW50ZXJcIlxuICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZXh0IGNsYXNzPVwid3JpdGVyLXdvcmRzXCIgc3R5bGU9XCJhbGlnbi1zZWxmOiBjZW50ZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICA+5L2c6ICFPC90ZXh0XG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgPC92aWV3PlxuXG4gICAgICAgICAgICAgICAgICAgICAgPGltYWdlXG4gICAgICAgICAgICAgICAgICAgICAgICB2LWlmPVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNvbW1lbnRDb250ZW50LnJlcGx5ZWRVc2VyTmlja25hbWUgIT0gbnVsbCAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICBjb21tZW50Q29udGVudC5yZXBseWVkVXNlck5pY2tuYW1lICE9ICcnXG4gICAgICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgc3JjPVwiL3N0YXRpYy9pbWFnZXMvaWNvbi1yaWdodC1hcnJvdzMucG5nXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDAuODtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDQwcnB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDQwcnB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMTZycHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTBycHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgPjwvaW1hZ2U+XG4gICAgICAgICAgICAgICAgICAgICAgPHRleHRcbiAgICAgICAgICAgICAgICAgICAgICAgIHYtaWY9XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY29tbWVudENvbnRlbnQucmVwbHllZFVzZXJOaWNrbmFtZSAhPSBudWxsICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNvbW1lbnRDb250ZW50LnJlcGx5ZWRVc2VyTmlja25hbWUgIT0gJydcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDMwcnB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzg3ODU4NTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgID57eyBjb21tZW50Q29udGVudC5yZXBseWVkVXNlck5pY2tuYW1lIH19PC90ZXh0XG4gICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8L3ZpZXc+XG4gICAgICAgICAgICAgICAgICAgIDx0ZXh0XG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU9XCJmb250LXNpemU6IDMycnB4OyBjb2xvcjogI2ZmZmZmZjsgbWFyZ2luLXRvcDogMnB4XCJcbiAgICAgICAgICAgICAgICAgICAgICA+e3sgY29tbWVudENvbnRlbnQuY29udGVudCB9fTwvdGV4dFxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8L3ZpZXc+XG4gICAgICAgICAgICAgICAgPC92aWV3PlxuICAgICAgICAgICAgICAgIDx2aWV3XG4gICAgICAgICAgICAgICAgICBzdHlsZT1cImRpc3BsYXk6IGZsZXg7IGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47IHdpZHRoOiAyNnB4XCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8aW1hZ2VcbiAgICAgICAgICAgICAgICAgICAgdi1pZj1cImNvbW1lbnRDb250ZW50LmlzTGlrZSA9PSAxXCJcbiAgICAgICAgICAgICAgICAgICAgc3JjPVwiL3N0YXRpYy9pbWFnZXMvaWNvbi1jb21tZW50LWxpa2UucG5nXCJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJsaWtlLW9yLW5vdFwiXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPVwiYWxpZ24tc2VsZjogY2VudGVyXCJcbiAgICAgICAgICAgICAgICAgICAgQGNsaWNrPVwiXG4gICAgICAgICAgICAgICAgICAgICAgdW5saWtlKFxuICAgICAgICAgICAgICAgICAgICAgICAgY29tbWVudENvbnRlbnQuY29tbWVudFVzZXJJZCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbW1lbnRDb250ZW50LmNvbW1lbnRJZCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGluZGV4XG4gICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgPjwvaW1hZ2U+XG4gICAgICAgICAgICAgICAgICA8aW1hZ2VcbiAgICAgICAgICAgICAgICAgICAgdi1pZj1cImNvbW1lbnRDb250ZW50LmlzTGlrZSA9PSAwXCJcbiAgICAgICAgICAgICAgICAgICAgc3JjPVwiL3N0YXRpYy9pbWFnZXMvaWNvbi1jb21tZW50LXVubGlrZS5wbmdcIlxuICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImxpa2Utb3Itbm90XCJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9XCJhbGlnbi1zZWxmOiBjZW50ZXJcIlxuICAgICAgICAgICAgICAgICAgICBAY2xpY2s9XCJcbiAgICAgICAgICAgICAgICAgICAgICBsaWtlKFxuICAgICAgICAgICAgICAgICAgICAgICAgY29tbWVudENvbnRlbnQuY29tbWVudFVzZXJJZCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbW1lbnRDb250ZW50LmNvbW1lbnRJZCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGluZGV4XG4gICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgPjwvaW1hZ2U+XG4gICAgICAgICAgICAgICAgICA8dGV4dFxuICAgICAgICAgICAgICAgICAgICBzdHlsZT1cImZvbnQtc2l6ZTogMjJycHg7IGNvbG9yOiAjODc4NTg1OyBhbGlnbi1zZWxmOiBjZW50ZXJcIlxuICAgICAgICAgICAgICAgICAgICA+e3sgZ2V0R3JhY2VOdW1iZXIoY29tbWVudENvbnRlbnQubGlrZUNvdW50cykgfX08L3RleHRcbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8L3ZpZXc+XG4gICAgICAgICAgICAgIDwvdmlldz5cbiAgICAgICAgICAgICAgPHZpZXcgY2xhc3M9XCJjb21tZW50cy13cmFwcGVyLXN1Yi1kb3duXCI+XG4gICAgICAgICAgICAgICAgPGltYWdlXG4gICAgICAgICAgICAgICAgICBzcmM9XCIvc3RhdGljL2ZhY2UvZmFjZS1hcnJvdy0xLnBuZ1wiXG4gICAgICAgICAgICAgICAgICBjbGFzcz1cImltZy1mYWNlXCJcbiAgICAgICAgICAgICAgICAgIHN0eWxlPVwib3BhY2l0eTogMFwiXG4gICAgICAgICAgICAgICAgPjwvaW1hZ2U+XG4gICAgICAgICAgICAgICAgPHRleHRcbiAgICAgICAgICAgICAgICAgIHN0eWxlPVwiZm9udC1zaXplOiAzMHJweDsgY29sb3I6ICM4Nzg1ODU7IG1hcmdpbi1sZWZ0OiAxMHB4XCJcbiAgICAgICAgICAgICAgICAgID57eyBnZXRHcmFjZURhdGVCZWZvcmVOb3coY29tbWVudENvbnRlbnQuY3JlYXRlVGltZSkgfX08L3RleHRcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPHRleHRcbiAgICAgICAgICAgICAgICAgIHN0eWxlPVwiZm9udC1zaXplOiAzMHJweDsgY29sb3I6ICM4Nzg1ODU7IG1hcmdpbi1sZWZ0OiAyMHB4XCJcbiAgICAgICAgICAgICAgICAgIEBjbGljaz1cIlxuICAgICAgICAgICAgICAgICAgICByZXBseUNvbW1lbnQoXG4gICAgICAgICAgICAgICAgICAgICAgY29tbWVudENvbnRlbnQuY29tbWVudElkLFxuICAgICAgICAgICAgICAgICAgICAgIGNvbW1lbnRDb250ZW50LmNvbW1lbnRVc2VyTmlja25hbWVcbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgID7lm57lpI08L3RleHRcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPCEtLSDlj6rmnInkuI3mmK/oh6rlt7HnmoTor4TorrrmiY3mmL7npLrkuL7miqXmjInpkq4gLS0+XG4gICAgICAgICAgICAgICAgPHRleHRcbiAgICAgICAgICAgICAgICAgIHYtaWY9XCJjb21tZW50Q29udGVudC5jb21tZW50VXNlcklkICE9PSBsb2dpblVzZXJJZFwiXG4gICAgICAgICAgICAgICAgICBzdHlsZT1cImZvbnQtc2l6ZTogMzBycHg7IGNvbG9yOiAjODc4NTg1OyBtYXJnaW4tbGVmdDogMjBweFwiXG4gICAgICAgICAgICAgICAgICBAY2xpY2s9XCJzaG93UmVwb3J0RGlhbG9nKGNvbW1lbnRDb250ZW50LmNvbW1lbnRJZClcIlxuICAgICAgICAgICAgICAgICAgPuS4vuaKpTwvdGV4dFxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPC92aWV3PlxuICAgICAgICAgICAgPC92aWV3PlxuICAgICAgICAgIDwvdmlldz5cblxuICAgICAgICAgIDwhLS0gVE9ETzog5Yik5pat5oC76K+E6K665pWw5ZKM5b2T5YmNbGlzdOS4reaVsOmHj+aYr+WQpuS4gOiHtO+8jOWmguaenOS4gOiHtO+8jOWImeaYvueEtuWIsOW6leS6hiAtLT5cbiAgICAgICAgICA8dmlld1xuICAgICAgICAgICAgc3R5bGU9XCJcbiAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICAgIG1hcmdpbi10b3A6IDUwcnB4O1xuICAgICAgICAgICAgICBoZWlnaHQ6IDEwMHJweDtcbiAgICAgICAgICAgIFwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPHRleHQgc3R5bGU9XCJjb2xvcjogIzQ0NDQ0NjsgZm9udC1zaXplOiAxM3B4XCI+e3sgYm90dG9tVHh0IH19PC90ZXh0PlxuICAgICAgICAgIDwvdmlldz5cbiAgICAgICAgPC9zY3JvbGwtdmlldz5cbiAgICAgIDwvdmlldz5cblxuICAgICAgPCEtLSDor4TorrrovpPlhaXmoYYgLS0+XG4gICAgICA8dmlld1xuICAgICAgICBjbGFzcz1cImNvbW1lbnQtd3JhcHBlclwiXG4gICAgICAgIDpjbGFzcz1cIntcbiAgICAgICAgICBjb21tZW50V3JhcHBlckJsYWNrOiBjb21tZW50V3JhcHBlckJsYWNrLFxuICAgICAgICAgIGNvbW1lbnRXcmFwcGVyV2hpdGU6IGNvbW1lbnRXcmFwcGVyV2hpdGUsXG4gICAgICAgIH1cIlxuICAgICAgPlxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICBjbGFzcz1cImNvbW1lbnQtYm94XCJcbiAgICAgICAgICA6Y2xhc3M9XCJ7XG4gICAgICAgICAgICBjb21tZW50Qm94QmxhY2s6IGNvbW1lbnRCb3hCbGFjayxcbiAgICAgICAgICAgIGNvbW1lbnRCb3hXaGl0ZTogY29tbWVudEJveFdoaXRlLFxuICAgICAgICAgIH1cIlxuICAgICAgICAgIHBsYWNlaG9sZGVyLWNsYXNzPVwiY29tbWVudC1ib3gtcGxhY2Vob2xkZXJcIlxuICAgICAgICAgIDpzdHlsZT1cInsgd2lkdGg6IHNjcmVlbldpZHRoIC0gNzAgKyAncHgnIH1cIlxuICAgICAgICAgIDpwbGFjZWhvbGRlcj1cInBsYWNlaG9sZGVyXCJcbiAgICAgICAgICBjdXJzb3Itc3BhY2luZz1cIjEwcHhcIlxuICAgICAgICAgIHYtbW9kZWw9XCJjdXJyZW50Q29tbWVudFwiXG4gICAgICAgICAgY29uZmlybS10eXBlPVwiZG9uZVwiXG4gICAgICAgICAgOmZvY3VzPVwiY29tbWVudEZvY3VzXCJcbiAgICAgICAgICBAZm9jdXM9XCJ0eXBpbmdDb21tZW50XCJcbiAgICAgICAgICBAYmx1cj1cIm5vVHlwaW5nQ29tbWVudFwiXG4gICAgICAgIC8+XG4gICAgICAgIDwhLS0gQGNvbmZpcm09XCJkb0NvbW1lbnRQdWJsaXNoXCIgLS0+XG4gICAgICAgIDx2aWV3XG4gICAgICAgICAgc3R5bGU9XCJkaXNwbGF5OiBmbGV4OyBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlclwiXG4gICAgICAgID5cbiAgICAgICAgICA8aW1hZ2VcbiAgICAgICAgICAgIHNyYz1cIi9zdGF0aWMvaW1hZ2VzL2ljb24tY29tbWVudC5wbmdcIlxuICAgICAgICAgICAgY2xhc3M9XCJpY29uLWNvbW1lbnRcIlxuICAgICAgICAgICAgQGNsaWNrPVwiZG9Db21tZW50UHVibGlzaCgpXCJcbiAgICAgICAgICA+PC9pbWFnZT5cbiAgICAgICAgPC92aWV3PlxuICAgICAgPC92aWV3PlxuICAgIDwvdmlldz5cblxuICAgIDwhLS0g5Li+5oql5by556qXIC0tPlxuICAgIDx1bmktcG9wdXAgcmVmPVwicmVwb3J0UG9wdXBcIiB0eXBlPVwiY2VudGVyXCIgOm1hc2stY2xpY2s9XCJmYWxzZVwiPlxuICAgICAgPHZpZXdcbiAgICAgICAgY2xhc3M9XCJyZXBvcnQtZGlhbG9nXCJcbiAgICAgICAgc3R5bGU9XCJcbiAgICAgICAgICB3aWR0aDogNjgwcnB4O1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMxYTFhMWE7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMjBycHg7XG4gICAgICAgICAgcGFkZGluZzogNDBycHg7XG4gICAgICAgIFwiXG4gICAgICAgIEBjbGljay5zdG9wXG4gICAgICA+XG4gICAgICAgIDx2aWV3IGNsYXNzPVwicmVwb3J0LXRpdGxlXCI+XG4gICAgICAgICAgPHRleHQgY2xhc3M9XCJyZXBvcnQtdGl0bGUtdGV4dFwiPuS4vuaKpeivhOiuujwvdGV4dD5cbiAgICAgICAgICA8aW1hZ2VcbiAgICAgICAgICAgIHNyYz1cIi9zdGF0aWMvaW1hZ2VzL2ljb24tY2xvc2UucG5nXCJcbiAgICAgICAgICAgIGNsYXNzPVwicmVwb3J0LWNsb3NlLWljb25cIlxuICAgICAgICAgICAgQGNsaWNrPVwiY2xvc2VSZXBvcnREaWFsb2dcIlxuICAgICAgICAgID48L2ltYWdlPlxuICAgICAgICA8L3ZpZXc+XG4gICAgICAgIDx2aWV3IGNsYXNzPVwicmVwb3J0LWNvbnRlbnRcIj5cbiAgICAgICAgICA8dmlldyBjbGFzcz1cInJlcG9ydC1pdGVtXCI+XG4gICAgICAgICAgICA8dGV4dCBjbGFzcz1cInJlcG9ydC1sYWJlbFwiPuS4vuaKpeWOn+WboO+8mjwvdGV4dD5cbiAgICAgICAgICAgIDxwaWNrZXJcbiAgICAgICAgICAgICAgbW9kZT1cInNlbGVjdG9yXCJcbiAgICAgICAgICAgICAgOnJhbmdlPVwicmVwb3J0UmVhc29uc1wiXG4gICAgICAgICAgICAgIDp2YWx1ZT1cInNlbGVjdGVkUmVhc29uSW5kZXhcIlxuICAgICAgICAgICAgICBAY2hhbmdlPVwib25SZWFzb25DaGFuZ2VcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8dmlldyBjbGFzcz1cInJlcG9ydC1waWNrZXJcIiBAY2xpY2suc3RvcD5cbiAgICAgICAgICAgICAgICA8dGV4dFxuICAgICAgICAgICAgICAgICAgOmNsYXNzPVwiXG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkUmVhc29uSW5kZXggPj0gMFxuICAgICAgICAgICAgICAgICAgICAgID8gJ3JlcG9ydC1waWNrZXItdGV4dCdcbiAgICAgICAgICAgICAgICAgICAgICA6ICdyZXBvcnQtcGlja2VyLXBsYWNlaG9sZGVyJ1xuICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICB7e1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZFJlYXNvbkluZGV4ID49IDBcbiAgICAgICAgICAgICAgICAgICAgICA/IHJlcG9ydFJlYXNvbnNbc2VsZWN0ZWRSZWFzb25JbmRleF1cbiAgICAgICAgICAgICAgICAgICAgICA6IFwi6K+36YCJ5oup5Li+5oql5Y6f5ZugXCJcbiAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgPC90ZXh0PlxuICAgICAgICAgICAgICAgIDx0ZXh0IGNsYXNzPVwicmVwb3J0LXBpY2tlci1hcnJvd1wiPuKWvDwvdGV4dD5cbiAgICAgICAgICAgICAgPC92aWV3PlxuICAgICAgICAgICAgPC9waWNrZXI+XG4gICAgICAgICAgPC92aWV3PlxuICAgICAgICAgIDx2aWV3IGNsYXNzPVwicmVwb3J0LWl0ZW1cIj5cbiAgICAgICAgICAgIDx0ZXh0IGNsYXNzPVwicmVwb3J0LWxhYmVsXCI+6K+m57uG5o+P6L+w77yaPC90ZXh0PlxuICAgICAgICAgICAgPHRleHRhcmVhXG4gICAgICAgICAgICAgIGNsYXNzPVwicmVwb3J0LXRleHRhcmVhXCJcbiAgICAgICAgICAgICAgc3R5bGU9XCJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmEyYTJhO1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcnB4O1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDIwcnB4O1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjhycHg7XG4gICAgICAgICAgICAgICAgY29sb3I6ICNmZmZmZmY7XG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBycHg7XG4gICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwi6K+36K+m57uG5o+P6L+w5Li+5oql5Y6f5Zug77yI6YCJ5aGr77yM5pyA5aSaNTAw5a2X77yJXCJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXItc3R5bGU9XCJjb2xvcjogIzk5OTk5OVwiXG4gICAgICAgICAgICAgIHYtbW9kZWw9XCJyZXBvcnREZXNjcmlwdGlvblwiXG4gICAgICAgICAgICAgIG1heGxlbmd0aD1cIjUwMFwiXG4gICAgICAgICAgICA+PC90ZXh0YXJlYT5cbiAgICAgICAgICAgIDx0ZXh0IGNsYXNzPVwicmVwb3J0LWNoYXItY291bnRcIlxuICAgICAgICAgICAgICA+e3sgcmVwb3J0RGVzY3JpcHRpb24ubGVuZ3RoIH19LzUwMDwvdGV4dFxuICAgICAgICAgICAgPlxuICAgICAgICAgIDwvdmlldz5cbiAgICAgICAgPC92aWV3PlxuICAgICAgICA8dmlldyBjbGFzcz1cInJlcG9ydC1idXR0b25zXCI+XG4gICAgICAgICAgPHZpZXcgY2xhc3M9XCJyZXBvcnQtYnRuIHJlcG9ydC1idG4tY2FuY2VsXCIgQGNsaWNrPVwiY2xvc2VSZXBvcnREaWFsb2dcIj5cbiAgICAgICAgICAgIDx0ZXh0IGNsYXNzPVwicmVwb3J0LWJ0bi10ZXh0XCI+5Y+W5raIPC90ZXh0PlxuICAgICAgICAgIDwvdmlldz5cbiAgICAgICAgICA8dmlldyBjbGFzcz1cInJlcG9ydC1idG4gcmVwb3J0LWJ0bi1zdWJtaXRcIiBAY2xpY2s9XCJzdWJtaXRSZXBvcnRcIj5cbiAgICAgICAgICAgIDx0ZXh0IGNsYXNzPVwicmVwb3J0LWJ0bi10ZXh0XCI+5o+Q5LqkPC90ZXh0PlxuICAgICAgICAgIDwvdmlldz5cbiAgICAgICAgPC92aWV3PlxuICAgICAgPC92aWV3PlxuICAgIDwvdW5pLXBvcHVwPlxuICA8L3ZpZXc+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxudmFyIGFwcCA9IGdldEFwcCgpO1xuaW1wb3J0IHBvcHVwIGZyb20gXCIuLi91bmktcG9wdXAvcG9wdXAuanNcIjtcbmV4cG9ydCBkZWZhdWx0IHtcbiAgbmFtZTogXCJVbmlQb3B1cFNoYXJlXCIsXG4gIG1peGluczogW3BvcHVwXSxcbiAgZW1pdHM6IFtcInNlbGVjdFwiXSxcbiAgcHJvcHM6IHtcbiAgICB0aXRsZToge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgZGVmYXVsdDogXCLliIbkuqvliLBcIixcbiAgICB9LFxuICAgIGJlZm9yZUNsb3NlOiB7XG4gICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgZGVmYXVsdDogZmFsc2UsXG4gICAgfSxcbiAgICB0aGlzVmxvZ2VySWQ6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIGRlZmF1bHQ6IFwiXCIsXG4gICAgfSxcbiAgICB0aGlzVmxvZ0lkOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICBkZWZhdWx0OiBcIlwiLFxuICAgIH0sXG4gIH0sXG4gIGRhdGEoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGNvbW1lbnRXcmFwcGVyQmxhY2s6IHRydWUsXG4gICAgICBjb21tZW50V3JhcHBlcldoaXRlOiBmYWxzZSxcbiAgICAgIGNvbW1lbnRCb3hCbGFjazogdHJ1ZSxcbiAgICAgIGNvbW1lbnRCb3hXaGl0ZTogZmFsc2UsXG4gICAgICAvLyBjb21tZW50V3JhcHBlckJsYWNrOiBmYWxzZSxcbiAgICAgIC8vIGNvbW1lbnRXcmFwcGVyV2hpdGU6IHRydWUsXG4gICAgICAvLyBjb21tZW50Qm94QmxhY2s6IGZhbHNlLFxuICAgICAgLy8gY29tbWVudEJveFdoaXRlOiB0cnVlLFxuICAgICAgc2NyZWVuV2lkdGg6IHVuaS5nZXRTeXN0ZW1JbmZvU3luYygpLnNjcmVlbldpZHRoLFxuICAgICAgY3VycmVudENvbW1lbnQ6IFwiXCIsXG4gICAgICBzY3JvbGxUb3A6IDAsXG4gICAgICBvbGQ6IHtcbiAgICAgICAgc2Nyb2xsVG9wOiAwLFxuICAgICAgfSxcblxuICAgICAgLy8gY29tbWVudFRvdWNoZWQ6IGZhbHNlLFxuICAgICAgYWN0aXZlSW5kZXg6IC0xLFxuXG4gICAgICBib3R0b21UeHQ6IFwi5pqC5pe25rKh5pyJ5pu05aSa5LqGXCIsXG4gICAgICBwbGFjZWhvbGRlcjogXCLlloTor63nu5Poia/nvJgs5oG26K+t5Lyk5Lq65b+DflwiLFxuICAgICAgY29tbWVudEZvY3VzOiBmYWxzZSxcbiAgICAgIHRoaXNGYXRoZXJDb21tZW50SWQ6IFwiMFwiLCAvLyDnlKjkuo7moIfor4blvZPliY3nmoTlm57lpI3mmK/lkKbmnInniLZpZO+8jOi/mOaYr+S7heS7heWPquaYr+aZrumAmuivhOiuulxuXG4gICAgICB0aGlzVmxvZ1RvdGFsQ29tZW50Q291bnRzOiAwLFxuICAgICAgbG9naW5Vc2VySWQ6IFwiXCIsXG4gICAgICBwYWdlOiAwLFxuICAgICAgdG90YWxQYWdlOiAwLFxuICAgICAgY29tbWVudENvdW50czogODgsXG4gICAgICBjb21tZW50TGlzdDogW10sXG5cbiAgICAgIC8vIOS4vuaKpeebuOWFs1xuICAgICAgY3VycmVudFJlcG9ydENvbW1lbnRJZDogXCJcIiwgLy8g5b2T5YmN6KaB5Li+5oql55qE6K+E6K66SURcbiAgICAgIHJlcG9ydFJlYXNvbnM6IFtcIuWeg+WcvuS/oeaBr1wiLCBcIuiJsuaDheS9juS/l1wiLCBcIui/neazlei/neinhFwiLCBcIuS6uui6q+aUu+WHu1wiLCBcIuWFtuS7llwiXSxcbiAgICAgIHNlbGVjdGVkUmVhc29uSW5kZXg6IC0xLCAvLyDpgInkuK3nmoTkuL7miqXljp/lm6DntKLlvJVcbiAgICAgIHJlcG9ydERlc2NyaXB0aW9uOiBcIlwiLCAvLyDkuL7miqXor6bnu4bmj4/ov7BcbiAgICB9O1xuICB9LFxuICBjcmVhdGVkKCkge1xuICAgIGNvbnNvbGUubG9nKFwiY29tbWVudC4uLmNyZWF0ZWQuLi50aGlzVmxvZ0lkID0gXCIgKyB0aGlzLnRoaXNWbG9nSWQpO1xuXG4gICAgdmFyIG1lID0gdGhpcztcbiAgICB2YXIgbXlVc2VySW5mbyA9IGdldEFwcCgpLmdldFVzZXJJbmZvU2Vzc2lvbigpO1xuICAgIHZhciB1c2VySWQgPSBcIlwiO1xuICAgIGlmIChteVVzZXJJbmZvICE9IG51bGwpIHtcbiAgICAgIHVzZXJJZCA9IG15VXNlckluZm8uaWQ7XG4gICAgfVxuICAgIG1lLmxvZ2luVXNlcklkID0gdXNlcklkO1xuXG4gICAgdGhpcy5mcmVzaENvbW1lbnRDb3VudHMoKTtcbiAgICB0aGlzLmRvQ29tbWVudFBhZ2luZ0xpc3QodGhpcy5wYWdlICsgMSwgdHJ1ZSk7XG4gIH0sXG4gIG1ldGhvZHM6IHtcbiAgICBmcmVzaENvbW1lbnRDb3VudHMoKSB7XG4gICAgICB2YXIgbWUgPSB0aGlzO1xuICAgICAgdmFyIHZsb2dJZCA9IG1lLnRoaXNWbG9nSWQ7XG5cbiAgICAgIHZhciBzZXJ2ZXJVcmwgPSBhcHAuZ2xvYmFsRGF0YS5zZXJ2ZXJVcmw7XG4gICAgICB1bmkucmVxdWVzdCh7XG4gICAgICAgIG1ldGhvZDogXCJHRVRcIixcbiAgICAgICAgdXJsOiBzZXJ2ZXJVcmwgKyBcIi9jb21tZW50L2NvdW50cz92bG9nSWQ9XCIgKyB2bG9nSWQsXG4gICAgICAgIHN1Y2Nlc3MocmVzdWx0KSB7XG4gICAgICAgICAgY29uc29sZS5sb2cocmVzdWx0KTtcblxuICAgICAgICAgIGlmIChyZXN1bHQuZGF0YS5zdGF0dXMgPT0gMjAwKSB7XG4gICAgICAgICAgICBtZS50aGlzVmxvZ1RvdGFsQ29tZW50Q291bnRzID0gcmVzdWx0LmRhdGEuZGF0YTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbWUudGhpc1Zsb2dUb3RhbENvbWVudENvdW50cyA9IDA7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKG1lLnRoaXNWbG9nVG90YWxDb21lbnRDb3VudHMgPT0gMCkge1xuICAgICAgICAgICAgbWUuYm90dG9tVHh0ID0gXCLmiqLkuIDkuKrmspnlj5HlkKd+XCI7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG1lLmJvdHRvbVR4dCA9IFwi5pqC5pe25rKh5pyJ5pu05aSa5ZWmXCI7XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgfSk7XG4gICAgfSxcblxuICAgIHVubGlrZShjb21tZW50VXNlcklkLCBjb21tZW50SWQsIGluZGV4KSB7XG4gICAgICB2YXIgbWUgPSB0aGlzO1xuXG4gICAgICB2YXIgc2VydmVyVXJsID0gYXBwLmdsb2JhbERhdGEuc2VydmVyVXJsO1xuICAgICAgdW5pLnJlcXVlc3Qoe1xuICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgICBoZWFkZXI6IHtcbiAgICAgICAgICBoZWFkZXJVc2VySWQ6IG1lLmxvZ2luVXNlcklkLFxuICAgICAgICAgIGhlYWRlclVzZXJUb2tlbjogYXBwLmdldFVzZXJTZXNzaW9uVG9rZW4oKSxcbiAgICAgICAgfSxcbiAgICAgICAgdXJsOlxuICAgICAgICAgIHNlcnZlclVybCArXG4gICAgICAgICAgXCIvY29tbWVudC91bmxpa2U/dXNlcklkPVwiICtcbiAgICAgICAgICBtZS5sb2dpblVzZXJJZCArXG4gICAgICAgICAgXCImY29tbWVudElkPVwiICtcbiAgICAgICAgICBjb21tZW50SWQsXG4gICAgICAgIHN1Y2Nlc3MocmVzdWx0KSB7XG4gICAgICAgICAgY29uc29sZS5sb2cocmVzdWx0KTtcblxuICAgICAgICAgIGlmIChyZXN1bHQuZGF0YS5zdGF0dXMgPT0gMjAwKSB7XG4gICAgICAgICAgICBtZS5yZUxpa2VDb21tZW50TGlzdChpbmRleCwgMCk7XG4gICAgICAgICAgICBtZS5yZUNvdW50c0NvbW1lbnRMaXN0KGluZGV4LCAtMSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHVuaS5zaG93VG9hc3Qoe1xuICAgICAgICAgICAgICB0aXRsZTogcmVzdWx0LmRhdGEubXNnLFxuICAgICAgICAgICAgICBpY29uOiBcIm5vbmVcIixcbiAgICAgICAgICAgICAgZHVyYXRpb246IDMwMDAsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICB9KTtcbiAgICB9LFxuXG4gICAgbGlrZShjb21tZW50VXNlcklkLCBjb21tZW50SWQsIGluZGV4KSB7XG4gICAgICB2YXIgbWUgPSB0aGlzO1xuXG4gICAgICB2YXIgbXlVc2VySW5mbyA9IGdldEFwcCgpLmdldFVzZXJJbmZvU2Vzc2lvbigpO1xuICAgICAgaWYgKG15VXNlckluZm8gPT0gbnVsbCkge1xuICAgICAgICB1bmkuc2hvd1RhYkJhcih7XG4gICAgICAgICAgYW5pbWF0aW9uOiBmYWxzZSxcbiAgICAgICAgfSk7XG4gICAgICAgIHVuaS5zaG93VG9hc3Qoe1xuICAgICAgICAgIGR1cmF0aW9uOiAzMDAwLFxuICAgICAgICAgIHRpdGxlOiBcIuivt+eZu+W9lX5cIixcbiAgICAgICAgICBpY29uOiBcIm5vbmVcIixcbiAgICAgICAgfSk7XG4gICAgICAgIHVuaS5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgICB1cmw6IFwiLi4vbG9naW5SZWdpc3QvbG9naW5SZWdpc3RcIixcbiAgICAgICAgICBhbmltYXRpb25UeXBlOiBcInNsaWRlLWluLWJvdHRvbVwiLFxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB2YXIgc2VydmVyVXJsID0gYXBwLmdsb2JhbERhdGEuc2VydmVyVXJsO1xuICAgICAgdW5pLnJlcXVlc3Qoe1xuICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgICBoZWFkZXI6IHtcbiAgICAgICAgICBoZWFkZXJVc2VySWQ6IG1lLmxvZ2luVXNlcklkLFxuICAgICAgICAgIGhlYWRlclVzZXJUb2tlbjogYXBwLmdldFVzZXJTZXNzaW9uVG9rZW4oKSxcbiAgICAgICAgfSxcbiAgICAgICAgdXJsOlxuICAgICAgICAgIHNlcnZlclVybCArXG4gICAgICAgICAgXCIvY29tbWVudC9saWtlP3VzZXJJZD1cIiArXG4gICAgICAgICAgbWUubG9naW5Vc2VySWQgK1xuICAgICAgICAgIFwiJmNvbW1lbnRJZD1cIiArXG4gICAgICAgICAgY29tbWVudElkLFxuICAgICAgICBzdWNjZXNzKHJlc3VsdCkge1xuICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdCk7XG5cbiAgICAgICAgICBpZiAocmVzdWx0LmRhdGEuc3RhdHVzID09IDIwMCkge1xuICAgICAgICAgICAgbWUucmVMaWtlQ29tbWVudExpc3QoaW5kZXgsIDEpO1xuICAgICAgICAgICAgbWUucmVDb3VudHNDb21tZW50TGlzdChpbmRleCwgMSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHVuaS5zaG93VG9hc3Qoe1xuICAgICAgICAgICAgICB0aXRsZTogcmVzdWx0LmRhdGEubXNnLFxuICAgICAgICAgICAgICBpY29uOiBcIm5vbmVcIixcbiAgICAgICAgICAgICAgZHVyYXRpb246IDMwMDAsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICB9KTtcbiAgICB9LFxuXG4gICAgcmVDb3VudHNDb21tZW50TGlzdChpbmRleCwgbnVtYmVyKSB7XG4gICAgICB2YXIgbWUgPSB0aGlzO1xuICAgICAgdmFyIGNvbW1lbnRMaXN0ID0gbWUuY29tbWVudExpc3Q7XG5cbiAgICAgIGNvbW1lbnRMaXN0W2luZGV4XS5saWtlQ291bnRzID0gY29tbWVudExpc3RbaW5kZXhdLmxpa2VDb3VudHMgKyBudW1iZXI7XG4gICAgICBjb21tZW50TGlzdC5zcGxpY2UoaW5kZXgsIDEsIGNvbW1lbnRMaXN0W2luZGV4XSk7XG5cbiAgICAgIG1lLmNvbW1lbnRMaXN0ID0gY29tbWVudExpc3Q7XG4gICAgfSxcblxuICAgIHJlTGlrZUNvbW1lbnRMaXN0KGluZGV4LCBpc0xpa2UpIHtcbiAgICAgIHZhciBtZSA9IHRoaXM7XG4gICAgICB2YXIgY29tbWVudExpc3QgPSBtZS5jb21tZW50TGlzdDtcblxuICAgICAgY29tbWVudExpc3RbaW5kZXhdLmlzTGlrZSA9IGlzTGlrZTtcbiAgICAgIGNvbW1lbnRMaXN0LnNwbGljZShpbmRleCwgMSwgY29tbWVudExpc3RbaW5kZXhdKTtcblxuICAgICAgbWUuY29tbWVudExpc3QgPSBjb21tZW50TGlzdDtcbiAgICB9LFxuXG4gICAgZGVsZXRlQ29tbWVudChjb21tZW50VXNlcklkLCBjb21tZW50SWQpIHtcbiAgICAgIHZhciBtZSA9IHRoaXM7XG4gICAgICB2YXIgdmxvZ0lkID0gbWUudGhpc1Zsb2dJZDtcbiAgICAgIC8vIGNvbnNvbGUubG9nKFwiZGVsZXRlQ29tbWVudC4uLmRlbGV0ZUNvbW1lbnQ9XCIgKyBjb21tZW50SWQpO1xuICAgICAgLy8g5Yik5pat5aaC5p6c5b2T5YmN55m76ZmG6ICFdXNlcklk5ZKM6K+E6K6655qE55WZ6KiA6ICFaWTkuI3lkIzvvIzkuI3og73liKDpmaRcbiAgICAgIGlmIChjb21tZW50VXNlcklkICE9IG1lLmxvZ2luVXNlcklkKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdW5pLnNob3dNb2RhbCh7XG4gICAgICAgIHRpdGxlOiBcIuaPkOekulwiLFxuICAgICAgICBjb250ZW50OiBcIuehruiupOWIoOmZpOivhOiuuuWQl++8n1wiLFxuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzKSB7XG4gICAgICAgICAgaWYgKHJlcy5jb25maXJtKSB7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZygn55So5oi354K55Ye756Gu5a6aJyk7XG4gICAgICAgICAgICB2YXIgc2VydmVyVXJsID0gYXBwLmdsb2JhbERhdGEuc2VydmVyVXJsO1xuICAgICAgICAgICAgdW5pLnJlcXVlc3Qoe1xuICAgICAgICAgICAgICBtZXRob2Q6IFwiREVMRVRFXCIsXG4gICAgICAgICAgICAgIGhlYWRlcjoge1xuICAgICAgICAgICAgICAgIGhlYWRlclVzZXJJZDogY29tbWVudFVzZXJJZCxcbiAgICAgICAgICAgICAgICBoZWFkZXJVc2VyVG9rZW46IGFwcC5nZXRVc2VyU2Vzc2lvblRva2VuKCksXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHVybDpcbiAgICAgICAgICAgICAgICBzZXJ2ZXJVcmwgK1xuICAgICAgICAgICAgICAgIFwiL2NvbW1lbnQvZGVsZXRlP2NvbW1lbnRVc2VySWQ9XCIgK1xuICAgICAgICAgICAgICAgIGNvbW1lbnRVc2VySWQgK1xuICAgICAgICAgICAgICAgIFwiJmNvbW1lbnRJZD1cIiArXG4gICAgICAgICAgICAgICAgY29tbWVudElkICtcbiAgICAgICAgICAgICAgICBcIiZ2bG9nSWQ9XCIgK1xuICAgICAgICAgICAgICAgIHZsb2dJZCxcbiAgICAgICAgICAgICAgc3VjY2VzcyhyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHQpO1xuXG4gICAgICAgICAgICAgICAgaWYgKHJlc3VsdC5kYXRhLnN0YXR1cyA9PSAyMDApIHtcbiAgICAgICAgICAgICAgICAgIG1lLmRvQ29tbWVudFBhZ2luZ0xpc3QoMSwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgIHVuaS5zaG93VG9hc3Qoe1xuICAgICAgICAgICAgICAgICAgICB0aXRsZTogcmVzdWx0LmRhdGEubXNnLFxuICAgICAgICAgICAgICAgICAgICBpY29uOiBcIm5vbmVcIixcbiAgICAgICAgICAgICAgICAgICAgZHVyYXRpb246IDMwMDAsXG4gICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbWUuZnJlc2hDb21tZW50Q291bnRzKCk7XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9IGVsc2UgaWYgKHJlcy5jYW5jZWwpIHtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCfnlKjmiLfngrnlh7vlj5bmtognKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICB9KTtcbiAgICB9LFxuICAgIGxvYWRNb3JlKCkge1xuICAgICAgaWYgKHRoaXMucGFnZSA9PSB0aGlzLnRvdGFsUGFnZSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICB0aGlzLmRvQ29tbWVudFBhZ2luZ0xpc3QodGhpcy5wYWdlICsgMSwgZmFsc2UpO1xuICAgIH0sXG4gICAgLy8g5YiG6aG15p+l6K+i6K+E6K665YiX6KGoXG4gICAgZG9Db21tZW50UGFnaW5nTGlzdChwYWdlLCBuZWVkQ2xlYXJMaXN0KSB7XG4gICAgICAvLyDmn6Xor6LpppbpobXnn63op4bpopHliJfooahcbiAgICAgIHZhciBtZSA9IHRoaXM7XG4gICAgICBtZS5wYWdlID0gcGFnZTtcbiAgICAgIHZhciB2bG9nSWQgPSBtZS50aGlzVmxvZ0lkO1xuICAgICAgLy8gY29uc29sZS5sb2codmxvZ0lkKTtcbiAgICAgIHZhciBzZXJ2ZXJVcmwgPSBhcHAuZ2xvYmFsRGF0YS5zZXJ2ZXJVcmw7XG4gICAgICB1bmkucmVxdWVzdCh7XG4gICAgICAgIG1ldGhvZDogXCJHRVRcIixcbiAgICAgICAgdXJsOlxuICAgICAgICAgIHNlcnZlclVybCArXG4gICAgICAgICAgXCIvY29tbWVudC9saXN0P3Zsb2dJZD1cIiArXG4gICAgICAgICAgdmxvZ0lkICtcbiAgICAgICAgICBcIiZ1c2VySWQ9XCIgK1xuICAgICAgICAgIG1lLmxvZ2luVXNlcklkICtcbiAgICAgICAgICBcIiZwYWdlPVwiICtcbiAgICAgICAgICBwYWdlICtcbiAgICAgICAgICBcIiZwYWdlU2l6ZT0xMFwiLFxuICAgICAgICBzdWNjZXNzKHJlc3VsdCkge1xuICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdCk7XG5cbiAgICAgICAgICBpZiAocmVzdWx0LmRhdGEuc3RhdHVzID09IDIwMCkge1xuICAgICAgICAgICAgdmFyIGNvbW1lbnRMaXN0ID0gcmVzdWx0LmRhdGEuZGF0YS5yb3dzO1xuICAgICAgICAgICAgdmFyIHRvdGFsUGFnZSA9IHJlc3VsdC5kYXRhLmRhdGEudG90YWw7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhjb21tZW50TGlzdCk7XG5cbiAgICAgICAgICAgIGlmIChuZWVkQ2xlYXJMaXN0KSB7XG4gICAgICAgICAgICAgIG1lLmNvbW1lbnRMaXN0ID0gW107XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBtZS5jb21tZW50TGlzdCA9IG1lLmNvbW1lbnRMaXN0LmNvbmNhdChjb21tZW50TGlzdCk7XG4gICAgICAgICAgICBtZS50b3RhbFBhZ2UgPSB0b3RhbFBhZ2U7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHVuaS5zaG93VG9hc3Qoe1xuICAgICAgICAgICAgICB0aXRsZTogcmVzdWx0LmRhdGEubXNnLFxuICAgICAgICAgICAgICBpY29uOiBcIm5vbmVcIixcbiAgICAgICAgICAgICAgZHVyYXRpb246IDMwMDAsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICB9KTtcbiAgICB9LFxuXG4gICAgLy8g6I635b6X54Sm54K577yM5pS55Y+Y5bqV6YOo5paH5pys5qGG6aKc6ImyXG4gICAgdHlwaW5nQ29tbWVudCgpIHtcbiAgICAgIHRoaXMuY29tbWVudFdyYXBwZXJCbGFjayA9IGZhbHNlO1xuICAgICAgdGhpcy5jb21tZW50V3JhcHBlcldoaXRlID0gdHJ1ZTtcbiAgICAgIHRoaXMuY29tbWVudEJveEJsYWNrID0gZmFsc2U7XG4gICAgICB0aGlzLmNvbW1lbnRCb3hXaGl0ZSA9IHRydWU7XG5cbiAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMudGhpc0ZhdGhlckNvbW1lbnRJZCk7XG4gICAgfSxcbiAgICAvLyDlpLHljrvnhKbngrnvvIzmlLnlj5jlupXpg6jmlofmnKzmoYbpopzoibJcbiAgICBub1R5cGluZ0NvbW1lbnQoKSB7XG4gICAgICB0aGlzLmNvbW1lbnRXcmFwcGVyQmxhY2sgPSB0cnVlO1xuICAgICAgdGhpcy5jb21tZW50V3JhcHBlcldoaXRlID0gZmFsc2U7XG4gICAgICB0aGlzLmNvbW1lbnRCb3hCbGFjayA9IHRydWU7XG4gICAgICB0aGlzLmNvbW1lbnRCb3hXaGl0ZSA9IGZhbHNlO1xuXG4gICAgICB0aGlzLnRoaXNGYXRoZXJDb21tZW50SWQgPSBcIjBcIjsgLy8g5oGi5aSN6buY6K6k55qE5Zue5aSNZmF0aGVySWTkuLrigJww4oCdXG4gICAgICB0aGlzLmNvbW1lbnRGb2N1cyA9IGZhbHNlO1xuICAgICAgdGhpcy5wbGFjZWhvbGRlciA9IFwi54ix6K+E6K6655qE5Lq66YO95piv5aSp5L2/flwiO1xuICAgIH0sXG5cbiAgICAvLyDlm57lpI3ku5bkurrnmoTor4TorrpcbiAgICByZXBseUNvbW1lbnQoY29tbWVudElkLCBjb21tZW50VXNlck5pY2tuYW1lKSB7XG4gICAgICB0aGlzLnRoaXNGYXRoZXJDb21tZW50SWQgPSBjb21tZW50SWQ7XG4gICAgICB0aGlzLmNvbW1lbnRGb2N1cyA9IHRydWU7XG4gICAgICB0aGlzLnBsYWNlaG9sZGVyID0gXCLlm57lpI0gQFwiICsgY29tbWVudFVzZXJOaWNrbmFtZTtcbiAgICAgIC8vIHRoaXMudHlwaW5nQ29tbWVudCgpO1xuICAgIH0sXG5cbiAgICAvLyDlj5HluIPnlZnoqIBcbiAgICBkb0NvbW1lbnRQdWJsaXNoKCkge1xuICAgICAgdmFyIG1lID0gdGhpcztcblxuICAgICAgdmFyIG15VXNlckluZm8gPSBnZXRBcHAoKS5nZXRVc2VySW5mb1Nlc3Npb24oKTtcbiAgICAgIGlmIChteVVzZXJJbmZvID09IG51bGwpIHtcbiAgICAgICAgdW5pLnNob3dUYWJCYXIoe1xuICAgICAgICAgIGFuaW1hdGlvbjogZmFsc2UsXG4gICAgICAgIH0pO1xuICAgICAgICB1bmkuc2hvd1RvYXN0KHtcbiAgICAgICAgICBkdXJhdGlvbjogMzAwMCxcbiAgICAgICAgICB0aXRsZTogXCLor7fnmbvlvZV+XCIsXG4gICAgICAgICAgaWNvbjogXCJub25lXCIsXG4gICAgICAgIH0pO1xuICAgICAgICB1bmkubmF2aWdhdGVUbyh7XG4gICAgICAgICAgdXJsOiBcIi4uL2xvZ2luUmVnaXN0L2xvZ2luUmVnaXN0XCIsXG4gICAgICAgICAgYW5pbWF0aW9uVHlwZTogXCJzbGlkZS1pbi1ib3R0b21cIixcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaWYgKFxuICAgICAgICBtZS5jdXJyZW50Q29tbWVudCA9PSBudWxsIHx8XG4gICAgICAgIG1lLmN1cnJlbnRDb21tZW50ID09IFwiXCIgfHxcbiAgICAgICAgbWUuY3VycmVudENvbW1lbnQgPT0gdW5kZWZpbmVkXG4gICAgICApIHtcbiAgICAgICAgdW5pLnNob3dUb2FzdCh7XG4gICAgICAgICAgdGl0bGU6IFwi6K+35aGr5YWl5oKo55qE6K+E6K66flwiLFxuICAgICAgICAgIG1hc2s6IHRydWUsXG4gICAgICAgICAgcG9zaXRpb246IFwiYm90dG9tXCIsXG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGlmIChtZS5jdXJyZW50Q29tbWVudC5sZW5ndGggPiA1MCkge1xuICAgICAgICB1bmkuc2hvd1RvYXN0KHtcbiAgICAgICAgICB0aXRsZTogXCLor4TorrrlrZfmlbDpmZDliLY1MOS7peWGheWZon5cIixcbiAgICAgICAgICBtYXNrOiB0cnVlLFxuICAgICAgICAgIHBvc2l0aW9uOiBcImJvdHRvbVwiLFxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB2YXIgdXNlcklkID0gbXlVc2VySW5mby5pZDtcbiAgICAgIHZhciBzZXJ2ZXJVcmwgPSBhcHAuZ2xvYmFsRGF0YS5zZXJ2ZXJVcmw7XG5cbiAgICAgIHZhciBwZW5kaW5nQ29tbWVudE9iamVjdCA9IHtcbiAgICAgICAgdmxvZ0lkOiBtZS50aGlzVmxvZ0lkLFxuICAgICAgICB2bG9nZXJJZDogbWUudGhpc1Zsb2dlcklkLFxuICAgICAgICBmYXRoZXJDb21tZW50SWQ6IG1lLnRoaXNGYXRoZXJDb21tZW50SWQsXG4gICAgICAgIGNvbW1lbnRVc2VySWQ6IHVzZXJJZCxcbiAgICAgICAgY29udGVudDogbWUuY3VycmVudENvbW1lbnQsXG4gICAgICB9O1xuXG4gICAgICB1bmkucmVxdWVzdCh7XG4gICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICAgIGhlYWRlcjoge1xuICAgICAgICAgIGhlYWRlclVzZXJJZDogdXNlcklkLFxuICAgICAgICAgIGhlYWRlclVzZXJUb2tlbjogYXBwLmdldFVzZXJTZXNzaW9uVG9rZW4oKSxcbiAgICAgICAgfSxcbiAgICAgICAgdXJsOiBzZXJ2ZXJVcmwgKyBcIi9jb21tZW50L2NyZWF0ZVwiLFxuICAgICAgICBkYXRhOiBwZW5kaW5nQ29tbWVudE9iamVjdCxcbiAgICAgICAgc3VjY2VzcyhyZXN1bHQpIHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHQpO1xuXG4gICAgICAgICAgaWYgKHJlc3VsdC5kYXRhLnN0YXR1cyA9PSAyMDApIHtcbiAgICAgICAgICAgIHZhciBuZXdDb21tZW50T2JqZWN0ID0gcmVzdWx0LmRhdGEuZGF0YTtcbiAgICAgICAgICAgIG5ld0NvbW1lbnRPYmplY3QuY29tbWVudElkID0gbmV3Q29tbWVudE9iamVjdC5pZDtcbiAgICAgICAgICAgIG5ld0NvbW1lbnRPYmplY3QuY29tbWVudFVzZXJOaWNrbmFtZSA9IG15VXNlckluZm8ubmlja25hbWU7XG4gICAgICAgICAgICBuZXdDb21tZW50T2JqZWN0LmNvbW1lbnRVc2VyRmFjZSA9IG15VXNlckluZm8uZmFjZTtcbiAgICAgICAgICAgIG5ld0NvbW1lbnRPYmplY3QuaXNMaWtlID0gMDtcbiAgICAgICAgICAgIC8vIG5ld0NvbW1lbnRPYmplY3QuaXNPd25lciA9IDA7XG4gICAgICAgICAgICAvLyBpZiAobWUudGhpc1Zsb2dlcklkID09IHVzZXJJZCkge1xuICAgICAgICAgICAgLy8gXHRuZXdDb21tZW50T2JqZWN0LmlzT3duZXIgPSAxO1xuICAgICAgICAgICAgLy8gfVxuXG4gICAgICAgICAgICBtZS5kb0NvbW1lbnRQYWdpbmdMaXN0KDEsIHRydWUpO1xuXG4gICAgICAgICAgICAvLyDor4Torrov5Zue5aSN5a6M5q+V5ZCO77yM5Zue5aSNdGhpc0ZhdGhlckNvbW1lbnRJZOS4uuKAnDDigJ1cbiAgICAgICAgICAgIG1lLnRoaXNGYXRoZXJDb21tZW50SWQgPSBcIjBcIjtcblxuICAgICAgICAgICAgLy8g5oqK5paw6K+E6K665re75Yqg5Yiw56ys5LiA5Liq5L2N572u77yM5byx5LiA6Ie05oCn77yM5LiN6ZyA6KaB5LuO5pWw5o2u5bqT6YeM5YaN5Y675Y+WXG4gICAgICAgICAgICBtZS5jb21tZW50TGlzdC51bnNoaWZ0KG5ld0NvbW1lbnRPYmplY3QpO1xuICAgICAgICAgICAgLy8g5riF56m65paH5pys5qGGXG4gICAgICAgICAgICBtZS5jdXJyZW50Q29tbWVudCA9IFwiXCI7XG4gICAgICAgICAgICAvLyDpmpDol4/plK7nm5hcbiAgICAgICAgICAgIHVuaS5oaWRlS2V5Ym9hcmQoKTtcbiAgICAgICAgICAgIC8vIOW6lemDqOWPmOiJslxuICAgICAgICAgICAgbWUubm9UeXBpbmdDb21tZW50KCk7XG5cbiAgICAgICAgICAgIC8vIOaKiua7muWKqGxpc3TliLDnrKzkuIDkuKrkvY3nva5cbiAgICAgICAgICAgIG1lLnNjcm9sbFRvcCA9IG1lLnNjcm9sbFRvcCArIDE7XG4gICAgICAgICAgICBtZS4kbmV4dFRpY2soKCkgPT4ge1xuICAgICAgICAgICAgICBtZS5zY3JvbGxUb3AgPSAwOyAvL+i1i+WAvOS4ujDljbPku6Pooajov5Tlm57pobbpg6hcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB1bmkuc2hvd1RvYXN0KHtcbiAgICAgICAgICAgICAgdGl0bGU6IHJlc3VsdC5kYXRhLm1zZyxcbiAgICAgICAgICAgICAgaWNvbjogXCJub25lXCIsXG4gICAgICAgICAgICAgIGR1cmF0aW9uOiAzMDAwLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgbWUuZnJlc2hDb21tZW50Q291bnRzKCk7XG4gICAgICAgIH0sXG4gICAgICB9KTtcbiAgICB9LFxuICAgIC8vIOaKiui2hei/hzEwMDDmiJYxMDAwMOeahOaVsOWtl+iwg+aVtO+8jOavlOWmgjEuM2svNi44d1xuICAgIGdldEdyYWNlTnVtYmVyKG51bSkge1xuICAgICAgcmV0dXJuIGdldEFwcCgpLmdyYWNlTnVtYmVyKG51bSk7XG4gICAgfSxcbiAgICAvLyDml7bpl7TmmL7npLog5Yia5YiaL3h45bCP5pe25YmNLy4uLlxuICAgIGdldEdyYWNlRGF0ZUJlZm9yZU5vdyhkYXRlVGltZVN0cikge1xuICAgICAgdmFyIGRhdGUgPSBhcHAuZGF0ZUZvcm1hdChcIllZWVktbW0tZGRcIiwgbmV3IERhdGUoZGF0ZVRpbWVTdHIpKTtcbiAgICAgIC8vIGNvbnNvbGUubG9nKGRhdGUpO1xuICAgICAgcmV0dXJuIGdldEFwcCgpLmdldERhdGVCZWZvcmVOb3coZGF0ZSk7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIOmAieaLqeWGheWuuVxuICAgICAqL1xuICAgIHNlbGVjdChpdGVtLCBpbmRleCkge1xuICAgICAgdGhpcy4kZW1pdChcInNlbGVjdFwiLCB7XG4gICAgICAgIGl0ZW0sXG4gICAgICAgIGluZGV4LFxuICAgICAgfSk7XG4gICAgICB0aGlzLmNsb3NlKCk7XG4gICAgfSxcbiAgICAvKipcbiAgICAgKiDlhbPpl63nqpflj6NcbiAgICAgKi9cbiAgICBjbG9zZSgpIHtcbiAgICAgIGlmICh0aGlzLmJlZm9yZUNsb3NlKSByZXR1cm47XG4gICAgICB0aGlzLnBvcHVwLmNsb3NlKCk7XG4gICAgICB1bmkuc2hvd1RhYkJhcih7XG4gICAgICAgIGFuaW1hdGlvbjogdHJ1ZSxcbiAgICAgIH0pO1xuICAgIH0sXG5cbiAgICB0b3VjaHN0YXJ0Q29tbWVudChpbmRleCkge1xuICAgICAgLy8gdGhpcy5jb21tZW50VG91Y2hlZCA9IHRydWU7XG4gICAgICB0aGlzLmFjdGl2ZUluZGV4ID0gaW5kZXg7XG4gICAgfSxcbiAgICB0b3VjaGVuZENvbW1lbnQoKSB7XG4gICAgICAvLyB0aGlzLmNvbW1lbnRUb3VjaGVkID0gZmFsc2U7XG4gICAgICB0aGlzLmFjdGl2ZUluZGV4ID0gLTE7XG4gICAgfSxcblxuICAgIC8vIOaYvuekuuS4vuaKpeW8ueeql1xuICAgIHNob3dSZXBvcnREaWFsb2coY29tbWVudElkKSB7XG4gICAgICB2YXIgbWUgPSB0aGlzO1xuXG4gICAgICAvLyDmo4Dmn6XmmK/lkKbnmbvlvZVcbiAgICAgIHZhciBteVVzZXJJbmZvID0gZ2V0QXBwKCkuZ2V0VXNlckluZm9TZXNzaW9uKCk7XG4gICAgICBpZiAobXlVc2VySW5mbyA9PSBudWxsKSB7XG4gICAgICAgIHVuaS5zaG93VGFiQmFyKHtcbiAgICAgICAgICBhbmltYXRpb246IGZhbHNlLFxuICAgICAgICB9KTtcbiAgICAgICAgdW5pLnNob3dUb2FzdCh7XG4gICAgICAgICAgZHVyYXRpb246IDMwMDAsXG4gICAgICAgICAgdGl0bGU6IFwi6K+355m75b2VflwiLFxuICAgICAgICAgIGljb246IFwibm9uZVwiLFxuICAgICAgICB9KTtcbiAgICAgICAgdW5pLm5hdmlnYXRlVG8oe1xuICAgICAgICAgIHVybDogXCIuLi9sb2dpblJlZ2lzdC9sb2dpblJlZ2lzdFwiLFxuICAgICAgICAgIGFuaW1hdGlvblR5cGU6IFwic2xpZGUtaW4tYm90dG9tXCIsXG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIG1lLmN1cnJlbnRSZXBvcnRDb21tZW50SWQgPSBjb21tZW50SWQ7XG4gICAgICBtZS5zZWxlY3RlZFJlYXNvbkluZGV4ID0gLTE7XG4gICAgICBtZS5yZXBvcnREZXNjcmlwdGlvbiA9IFwiXCI7XG4gICAgICBtZS4kcmVmcy5yZXBvcnRQb3B1cC5vcGVuKCk7XG4gICAgfSxcblxuICAgIC8vIOWFs+mXreS4vuaKpeW8ueeql1xuICAgIGNsb3NlUmVwb3J0RGlhbG9nKCkge1xuICAgICAgdGhpcy4kcmVmcy5yZXBvcnRQb3B1cC5jbG9zZSgpO1xuICAgICAgdGhpcy5jdXJyZW50UmVwb3J0Q29tbWVudElkID0gXCJcIjtcbiAgICAgIHRoaXMuc2VsZWN0ZWRSZWFzb25JbmRleCA9IC0xO1xuICAgICAgdGhpcy5yZXBvcnREZXNjcmlwdGlvbiA9IFwiXCI7XG4gICAgfSxcblxuICAgIC8vIOmAieaLqeS4vuaKpeWOn+WboFxuICAgIG9uUmVhc29uQ2hhbmdlKGUpIHtcbiAgICAgIHRoaXMuc2VsZWN0ZWRSZWFzb25JbmRleCA9IGUuZGV0YWlsLnZhbHVlO1xuICAgIH0sXG5cbiAgICAvLyDmj5DkuqTkuL7miqVcbiAgICBzdWJtaXRSZXBvcnQoKSB7XG4gICAgICB2YXIgbWUgPSB0aGlzO1xuXG4gICAgICAvLyDpqozor4HkuL7miqXljp/lm6BcbiAgICAgIGlmIChtZS5zZWxlY3RlZFJlYXNvbkluZGV4IDwgMCkge1xuICAgICAgICB1bmkuc2hvd1RvYXN0KHtcbiAgICAgICAgICB0aXRsZTogXCLor7fpgInmi6nkuL7miqXljp/lm6BcIixcbiAgICAgICAgICBpY29uOiBcIm5vbmVcIixcbiAgICAgICAgICBkdXJhdGlvbjogMjAwMCxcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdmFyIG15VXNlckluZm8gPSBnZXRBcHAoKS5nZXRVc2VySW5mb1Nlc3Npb24oKTtcbiAgICAgIGlmIChteVVzZXJJbmZvID09IG51bGwpIHtcbiAgICAgICAgdW5pLnNob3dUb2FzdCh7XG4gICAgICAgICAgdGl0bGU6IFwi6K+355m75b2VflwiLFxuICAgICAgICAgIGljb246IFwibm9uZVwiLFxuICAgICAgICAgIGR1cmF0aW9uOiAzMDAwLFxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB2YXIgcmVwb3J0ZXJJZCA9IG15VXNlckluZm8uaWQ7XG4gICAgICB2YXIgcmVhc29uID0gbWUucmVwb3J0UmVhc29uc1ttZS5zZWxlY3RlZFJlYXNvbkluZGV4XTtcbiAgICAgIHZhciBkZXNjcmlwdGlvbiA9IG1lLnJlcG9ydERlc2NyaXB0aW9uIHx8IFwiXCI7XG5cbiAgICAgIC8vIOaehOW7uuS4vuaKpeaVsOaNrlxuICAgICAgdmFyIHJlcG9ydERhdGEgPSB7XG4gICAgICAgIHJlcG9ydFR5cGU6IFwiMlwiLCAvLyAy6KGo56S66K+E6K66XG4gICAgICAgIHRhcmdldElkOiBtZS5jdXJyZW50UmVwb3J0Q29tbWVudElkLFxuICAgICAgICByZWFzb246IHJlYXNvbixcbiAgICAgICAgZGVzY3JpcHRpb246IGRlc2NyaXB0aW9uLFxuICAgICAgICByZXBvcnRlcklkOiByZXBvcnRlcklkLFxuICAgICAgfTtcblxuICAgICAgY29uc29sZS5sb2coXCLmj5DkuqTkuL7miqXmlbDmja7vvJpcIiwgcmVwb3J0RGF0YSk7XG5cbiAgICAgIHZhciBzZXJ2ZXJVcmwgPSBhcHAuZ2xvYmFsRGF0YS5zZXJ2ZXJVcmw7XG4gICAgICB1bmkucmVxdWVzdCh7XG4gICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICAgIGhlYWRlcjoge1xuICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgICAgICAgIGhlYWRlclVzZXJJZDogcmVwb3J0ZXJJZCxcbiAgICAgICAgICBoZWFkZXJVc2VyVG9rZW46IGFwcC5nZXRVc2VyU2Vzc2lvblRva2VuKCksXG4gICAgICAgIH0sXG4gICAgICAgIHVybDogc2VydmVyVXJsICsgXCIvcmVwb3J0L2NvbW1lbnRcIixcbiAgICAgICAgZGF0YTogcmVwb3J0RGF0YSxcbiAgICAgICAgc3VjY2VzcyhyZXN1bHQpIHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhcIuS4vuaKpeWTjeW6lO+8mlwiLCByZXN1bHQpO1xuXG4gICAgICAgICAgaWYgKHJlc3VsdC5kYXRhLnN0YXR1cyA9PSAyMDApIHtcbiAgICAgICAgICAgIHVuaS5zaG93VG9hc3Qoe1xuICAgICAgICAgICAgICB0aXRsZTogXCLkuL7miqXmiJDlip8hXCIsXG4gICAgICAgICAgICAgIGljb246IFwic3VjY2Vzc1wiLFxuICAgICAgICAgICAgICBkdXJhdGlvbjogMjAwMCxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgbWUuY2xvc2VSZXBvcnREaWFsb2coKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdW5pLnNob3dUb2FzdCh7XG4gICAgICAgICAgICAgIHRpdGxlOiByZXN1bHQuZGF0YS5tc2cgfHwgXCLkuL7miqXlpLHotKXvvIzor7fph43or5VcIixcbiAgICAgICAgICAgICAgaWNvbjogXCJub25lXCIsXG4gICAgICAgICAgICAgIGR1cmF0aW9uOiAzMDAwLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBmYWlsKGVycikge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCLkuL7miqXor7fmsYLlpLHotKXvvJpcIiwgZXJyKTtcbiAgICAgICAgICB1bmkuc2hvd1RvYXN0KHtcbiAgICAgICAgICAgIHRpdGxlOiBcIue9kee7nOmUmeivr++8jOivt+mHjeivlVwiLFxuICAgICAgICAgICAgaWNvbjogXCJub25lXCIsXG4gICAgICAgICAgICBkdXJhdGlvbjogMzAwMCxcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSxcbiAgICAgIH0pO1xuICAgIH0sXG4gIH0sXG59O1xuPC9zY3JpcHQ+XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///209\n");

/***/ }),
/* 210 */
/*!***********************************************************************************************************!*\
  !*** C:/Users/TAOER/Desktop/ShayuVideo/ShayuVideoAPP/uni_modules/uni-popup/components/uni-popup/popup.js ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\nvar _default = {\n  data: function data() {\n    return {};\n  },\n  created: function created() {\n    this.popup = this.getParent();\n  },\n  methods: {\n    /**\n     * 获取父元素实例\n     */\n    getParent: function getParent() {\n      var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'uniPopup';\n      var parent = this.$parent;\n      var parentName = parent.$options.name;\n      while (parentName !== name) {\n        parent = parent.$parent;\n        if (!parent) return false;\n        parentName = parent.$options.name;\n      }\n      return parent;\n    }\n  }\n};\nexports.default = _default;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vdW5pX21vZHVsZXMvdW5pLXBvcHVwL2NvbXBvbmVudHMvdW5pLXBvcHVwL3BvcHVwLmpzIl0sIm5hbWVzIjpbImRhdGEiLCJjcmVhdGVkIiwicG9wdXAiLCJnZXRQYXJlbnQiLCJtZXRob2RzIiwibmFtZSIsInBhcmVudCIsIiRwYXJlbnQiLCJwYXJlbnROYW1lIiwiJG9wdGlvbnMiXSwibWFwcGluZ3MiOiI7Ozs7OztlQUNlO0VBQ2RBLElBQUksa0JBQUc7SUFDTixPQUFPLENBRVAsQ0FBQztFQUNGLENBQUM7RUFDREMsT0FBTyxxQkFBRTtJQUNSLElBQUksQ0FBQ0MsS0FBSyxHQUFHLElBQUksQ0FBQ0MsU0FBUyxFQUFFO0VBQzlCLENBQUM7RUFDREMsT0FBTyxFQUFDO0lBQ1A7QUFDRjtBQUNBO0lBQ0VELFNBQVMsdUJBQW9CO01BQUEsSUFBbkJFLElBQUksdUVBQUcsVUFBVTtNQUMxQixJQUFJQyxNQUFNLEdBQUcsSUFBSSxDQUFDQyxPQUFPO01BQ3pCLElBQUlDLFVBQVUsR0FBR0YsTUFBTSxDQUFDRyxRQUFRLENBQUNKLElBQUk7TUFDckMsT0FBT0csVUFBVSxLQUFLSCxJQUFJLEVBQUU7UUFDM0JDLE1BQU0sR0FBR0EsTUFBTSxDQUFDQyxPQUFPO1FBQ3ZCLElBQUksQ0FBQ0QsTUFBTSxFQUFFLE9BQU8sS0FBSztRQUN6QkUsVUFBVSxHQUFHRixNQUFNLENBQUNHLFFBQVEsQ0FBQ0osSUFBSTtNQUNsQztNQUNBLE9BQU9DLE1BQU07SUFDZDtFQUNEO0FBQ0QsQ0FBQztBQUFBIiwiZmlsZSI6IjIxMC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuZXhwb3J0IGRlZmF1bHQge1xuXHRkYXRhKCkge1xuXHRcdHJldHVybiB7XG5cdFx0XHRcblx0XHR9XG5cdH0sXG5cdGNyZWF0ZWQoKXtcblx0XHR0aGlzLnBvcHVwID0gdGhpcy5nZXRQYXJlbnQoKVxuXHR9LFxuXHRtZXRob2RzOntcblx0XHQvKipcblx0XHQgKiDojrflj5bniLblhYPntKDlrp7kvotcblx0XHQgKi9cblx0XHRnZXRQYXJlbnQobmFtZSA9ICd1bmlQb3B1cCcpIHtcblx0XHRcdGxldCBwYXJlbnQgPSB0aGlzLiRwYXJlbnQ7XG5cdFx0XHRsZXQgcGFyZW50TmFtZSA9IHBhcmVudC4kb3B0aW9ucy5uYW1lO1xuXHRcdFx0d2hpbGUgKHBhcmVudE5hbWUgIT09IG5hbWUpIHtcblx0XHRcdFx0cGFyZW50ID0gcGFyZW50LiRwYXJlbnQ7XG5cdFx0XHRcdGlmICghcGFyZW50KSByZXR1cm4gZmFsc2Vcblx0XHRcdFx0cGFyZW50TmFtZSA9IHBhcmVudC4kb3B0aW9ucy5uYW1lO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIHBhcmVudDtcblx0XHR9LFxuXHR9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///210\n");

/***/ }),
/* 211 */
/*!********************************************************************************************************************************************************************************************!*\
  !*** C:/Users/TAOER/Desktop/ShayuVideo/ShayuVideoAPP/uni_modules/uni-popup/components/uni-popup-comments/uni-popup-comments.vue?vue&type=style&index=0&id=9da5e18a&lang=scss&scoped=true& ***!
  \********************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_oneOf_0_1_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_11_oneOf_0_2_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_11_oneOf_0_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_oneOf_0_4_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_popup_comments_vue_vue_type_style_index_0_id_9da5e18a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--11-oneOf-0-1!./node_modules/postcss-loader/src??ref--11-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??ref--11-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--11-oneOf-0-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./uni-popup-comments.vue?vue&type=style&index=0&id=9da5e18a&lang=scss&scoped=true& */ 212);
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_oneOf_0_1_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_11_oneOf_0_2_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_11_oneOf_0_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_oneOf_0_4_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_popup_comments_vue_vue_type_style_index_0_id_9da5e18a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_oneOf_0_1_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_11_oneOf_0_2_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_11_oneOf_0_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_oneOf_0_4_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_popup_comments_vue_vue_type_style_index_0_id_9da5e18a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_oneOf_0_1_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_11_oneOf_0_2_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_11_oneOf_0_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_oneOf_0_4_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_popup_comments_vue_vue_type_style_index_0_id_9da5e18a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_oneOf_0_1_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_11_oneOf_0_2_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_11_oneOf_0_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_oneOf_0_4_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_popup_comments_vue_vue_type_style_index_0_id_9da5e18a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_oneOf_0_1_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_11_oneOf_0_2_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_11_oneOf_0_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_oneOf_0_4_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_popup_comments_vue_vue_type_style_index_0_id_9da5e18a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 212 */
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--11-oneOf-0-1!./node_modules/postcss-loader/src??ref--11-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??ref--11-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--11-oneOf-0-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!C:/Users/TAOER/Desktop/ShayuVideo/ShayuVideoAPP/uni_modules/uni-popup/components/uni-popup-comments/uni-popup-comments.vue?vue&type=style&index=0&id=9da5e18a&lang=scss&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  ".uni-popup-share": {
    "": {
      "backgroundColor": [
        "#181717",
        0,
        0,
        16
      ],
      "borderTopLeftRadius": [
        "16rpx",
        0,
        0,
        16
      ],
      "borderTopRightRadius": [
        "16rpx",
        0,
        0,
        16
      ]
    }
  },
  ".uni-share-title": {
    "": {
      "flexDirection": [
        "row",
        0,
        0,
        17
      ],
      "alignItems": [
        "center",
        0,
        0,
        17
      ],
      "justifyContent": [
        "space-between",
        0,
        0,
        17
      ],
      "height": [
        "40",
        0,
        0,
        17
      ]
    }
  },
  ".uni-share-title-text": {
    "": {
      "fontSize": [
        "12",
        0,
        0,
        18
      ],
      "color": [
        "#ffffff",
        0,
        0,
        18
      ],
      "fontWeight": [
        "500",
        0,
        0,
        18
      ]
    }
  },
  ".uni-share-content": {
    "": {
      "flexDirection": [
        "column",
        0,
        0,
        19
      ]
    }
  },
  ".uni-share-content-box": {
    "": {
      "flexDirection": [
        "row",
        0,
        0,
        20
      ],
      "flexWrap": [
        "wrap",
        0,
        0,
        20
      ],
      "width": [
        "360",
        0,
        0,
        20
      ]
    }
  },
  ".uni-share-content-item": {
    "": {
      "width": [
        "90",
        0,
        0,
        21
      ],
      "flexDirection": [
        "column",
        0,
        0,
        21
      ],
      "justifyContent": [
        "center",
        0,
        0,
        21
      ],
      "paddingTop": [
        "10",
        0,
        0,
        21
      ],
      "paddingRight": [
        0,
        0,
        0,
        21
      ],
      "paddingBottom": [
        "10",
        0,
        0,
        21
      ],
      "paddingLeft": [
        0,
        0,
        0,
        21
      ],
      "alignItems": [
        "center",
        0,
        0,
        21
      ],
      "backgroundColor:active": [
        "#f5f5f5",
        0,
        0,
        22
      ]
    }
  },
  ".uni-share-image": {
    "": {
      "width": [
        "30",
        0,
        0,
        23
      ],
      "height": [
        "30",
        0,
        0,
        23
      ]
    }
  },
  ".uni-share-text": {
    "": {
      "marginTop": [
        "10",
        0,
        0,
        24
      ],
      "fontSize": [
        "14",
        0,
        0,
        24
      ],
      "color": [
        "#3b4144",
        0,
        0,
        24
      ]
    }
  },
  ".uni-share-button-box": {
    "": {
      "flexDirection": [
        "row",
        0,
        0,
        25
      ],
      "paddingTop": [
        "10",
        0,
        0,
        25
      ],
      "paddingRight": [
        "15",
        0,
        0,
        25
      ],
      "paddingBottom": [
        "10",
        0,
        0,
        25
      ],
      "paddingLeft": [
        "15",
        0,
        0,
        25
      ]
    }
  },
  ".uni-share-button": {
    "": {
      "flex": [
        1,
        0,
        0,
        26
      ],
      "borderRadius": [
        "50",
        0,
        0,
        26
      ],
      "color": [
        "#666666",
        0,
        0,
        26
      ],
      "fontSize": [
        "16",
        0,
        0,
        26
      ],
      "borderRadius::after": [
        "50",
        0,
        0,
        27
      ]
    }
  },
  ".icon-close-left": {
    "": {
      "width": [
        "20rpx",
        0,
        0,
        28
      ],
      "height": [
        "20rpx",
        0,
        0,
        28
      ],
      "marginLeft": [
        "30rpx",
        0,
        0,
        28
      ],
      "opacity": [
        0,
        0,
        0,
        28
      ]
    }
  },
  ".icon-close-right": {
    "": {
      "width": [
        "22rpx",
        0,
        0,
        29
      ],
      "height": [
        "22rpx",
        0,
        0,
        29
      ],
      "marginRight": [
        "30rpx",
        0,
        0,
        29
      ]
    }
  },
  ".comment-wrapper": {
    "": {
      "paddingTop": [
        "10",
        0,
        0,
        30
      ],
      "paddingRight": [
        "10",
        0,
        0,
        30
      ],
      "paddingBottom": [
        "10",
        0,
        0,
        30
      ],
      "paddingLeft": [
        "10",
        0,
        0,
        30
      ],
      "display": [
        "flex",
        0,
        0,
        30
      ],
      "flexDirection": [
        "row",
        0,
        0,
        30
      ],
      "justifyContent": [
        "space-around",
        0,
        0,
        30
      ]
    }
  },
  ".commentWrapperBlack": {
    "": {
      "backgroundColor": [
        "#0e0d0d",
        0,
        0,
        31
      ]
    }
  },
  ".commentWrapperWhite": {
    "": {
      "backgroundColor": [
        "#ffffff",
        0,
        0,
        32
      ]
    }
  },
  ".comment-box": {
    "": {
      "fontSize": [
        "15",
        0,
        0,
        33
      ],
      "height": [
        "40",
        0,
        0,
        33
      ],
      "borderRadius": [
        "20",
        0,
        0,
        33
      ],
      "paddingTop": [
        0,
        0,
        0,
        33
      ],
      "paddingRight": [
        "18",
        0,
        0,
        33
      ],
      "paddingBottom": [
        0,
        0,
        0,
        33
      ],
      "paddingLeft": [
        "18",
        0,
        0,
        33
      ]
    }
  },
  ".commentBoxBlack": {
    "": {
      "color": [
        "#ffffff",
        0,
        0,
        34
      ],
      "backgroundColor": [
        "#151515",
        0,
        0,
        34
      ]
    }
  },
  ".commentBoxWhite": {
    "": {
      "color": [
        "#000000",
        0,
        0,
        35
      ],
      "backgroundColor": [
        "#f2f2f5",
        0,
        0,
        35
      ]
    }
  },
  ".comment-box-placeholder": {
    "": {
      "fontSize": [
        "15",
        0,
        0,
        36
      ]
    }
  },
  ".icon-comment": {
    "": {
      "width": [
        "30",
        0,
        0,
        37
      ],
      "height": [
        "30",
        0,
        0,
        37
      ]
    }
  },
  ".all-comments": {
    "": {
      "height": [
        "800rpx",
        0,
        0,
        38
      ]
    }
  },
  ".img-face": {
    "": {
      "width": [
        "80rpx",
        0,
        0,
        39
      ],
      "height": [
        "80rpx",
        0,
        0,
        39
      ],
      "borderRadius": [
        "100rpx",
        0,
        0,
        39
      ]
    }
  },
  ".like-or-not": {
    "": {
      "marginTop": [
        "16",
        0,
        0,
        40
      ],
      "width": [
        "50rpx",
        0,
        0,
        40
      ],
      "height": [
        "50rpx",
        0,
        0,
        40
      ]
    }
  },
  ".comments-wrapper": {
    "": {
      "display": [
        "flex",
        0,
        0,
        41
      ],
      "flexDirection": [
        "column",
        0,
        0,
        41
      ]
    }
  },
  ".comments-wrapper-sub-up": {
    "": {
      "display": [
        "flex",
        0,
        0,
        42
      ],
      "flexDirection": [
        "row",
        0,
        0,
        42
      ],
      "justifyContent": [
        "space-between",
        0,
        0,
        42
      ]
    }
  },
  ".comments-wrapper-sub-down": {
    "": {
      "display": [
        "flex",
        0,
        0,
        43
      ],
      "flexDirection": [
        "row",
        0,
        0,
        43
      ],
      "marginTop": [
        "2",
        0,
        0,
        43
      ]
    }
  },
  ".vlogger-wrapper": {
    "": {
      "display": [
        "flex",
        0,
        0,
        44
      ],
      "flexDirection": [
        "row",
        0,
        0,
        44
      ]
    }
  },
  ".tag-writer": {
    "": {
      "display": [
        "flex",
        0,
        0,
        45
      ],
      "flexDirection": [
        "column",
        0,
        0,
        45
      ],
      "justifyContent": [
        "center",
        0,
        0,
        45
      ],
      "backgroundColor": [
        "#f02a50",
        0,
        0,
        45
      ],
      "borderRadius": [
        "3",
        0,
        0,
        45
      ],
      "width": [
        "30",
        0,
        0,
        45
      ],
      "height": [
        "16",
        0,
        0,
        45
      ],
      "marginLeft": [
        "2",
        0,
        0,
        45
      ]
    }
  },
  ".writer-words": {
    "": {
      "fontSize": [
        "26rpx",
        0,
        0,
        46
      ],
      "color": [
        "#ffffff",
        0,
        0,
        46
      ],
      "textAlign": [
        "center",
        0,
        0,
        46
      ]
    }
  },
  ".single-comment-box": {
    "": {
      "backgroundColor": [
        "#181717",
        0,
        0,
        47
      ]
    }
  },
  ".single-comment-box-touched": {
    "": {
      "backgroundColor": [
        "#202020",
        0,
        0,
        48
      ]
    }
  },
  ".active": {
    "": {
      "backgroundColor": [
        "#202020",
        0,
        0,
        49
      ]
    }
  },
  ".report-dialog": {
    "": {
      "width": [
        "680rpx",
        0,
        0,
        51
      ],
      "backgroundColor": [
        "#1a1a1a",
        0,
        0,
        51
      ],
      "borderRadius": [
        "20rpx",
        0,
        0,
        51
      ],
      "paddingTop": [
        "40rpx",
        0,
        0,
        51
      ],
      "paddingRight": [
        "40rpx",
        0,
        0,
        51
      ],
      "paddingBottom": [
        "40rpx",
        0,
        0,
        51
      ],
      "paddingLeft": [
        "40rpx",
        0,
        0,
        51
      ]
    }
  },
  ".report-title": {
    "": {
      "display": [
        "flex",
        0,
        0,
        52
      ],
      "flexDirection": [
        "row",
        0,
        0,
        52
      ],
      "justifyContent": [
        "space-between",
        0,
        0,
        52
      ],
      "alignItems": [
        "center",
        0,
        0,
        52
      ],
      "marginBottom": [
        "40rpx",
        0,
        0,
        52
      ]
    }
  },
  ".report-title-text": {
    "": {
      "fontSize": [
        "36rpx",
        0,
        0,
        53
      ],
      "color": [
        "#ffffff",
        0,
        0,
        53
      ],
      "fontWeight": [
        "600",
        0,
        0,
        53
      ]
    }
  },
  ".report-close-icon": {
    "": {
      "width": [
        "40rpx",
        0,
        0,
        54
      ],
      "height": [
        "40rpx",
        0,
        0,
        54
      ],
      "opacity": [
        0.8,
        0,
        0,
        54
      ]
    }
  },
  ".report-content": {
    "": {
      "display": [
        "flex",
        0,
        0,
        55
      ],
      "flexDirection": [
        "column",
        0,
        0,
        55
      ]
    }
  },
  ".report-item": {
    "": {
      "display": [
        "flex",
        0,
        0,
        56
      ],
      "flexDirection": [
        "column",
        0,
        0,
        56
      ],
      "marginBottom": [
        "30rpx",
        0,
        0,
        56
      ]
    }
  },
  ".report-label": {
    "": {
      "fontSize": [
        "28rpx",
        0,
        0,
        57
      ],
      "color": [
        "#ffffff",
        0,
        0,
        57
      ],
      "marginBottom": [
        "20rpx",
        0,
        0,
        57
      ]
    }
  },
  ".report-picker": {
    "": {
      "display": [
        "flex",
        0,
        0,
        58
      ],
      "flexDirection": [
        "row",
        0,
        0,
        58
      ],
      "justifyContent": [
        "space-between",
        0,
        0,
        58
      ],
      "alignItems": [
        "center",
        0,
        0,
        58
      ],
      "backgroundColor": [
        "#2a2a2a",
        0,
        0,
        58
      ],
      "borderRadius": [
        "10rpx",
        0,
        0,
        58
      ],
      "paddingTop": [
        "20rpx",
        0,
        0,
        58
      ],
      "paddingRight": [
        "20rpx",
        0,
        0,
        58
      ],
      "paddingBottom": [
        "20rpx",
        0,
        0,
        58
      ],
      "paddingLeft": [
        "20rpx",
        0,
        0,
        58
      ],
      "height": [
        "80rpx",
        0,
        0,
        58
      ]
    }
  },
  ".report-picker-text": {
    "": {
      "fontSize": [
        "28rpx",
        0,
        0,
        59
      ],
      "color": [
        "#ffffff",
        0,
        0,
        59
      ]
    }
  },
  ".report-picker-placeholder": {
    "": {
      "fontSize": [
        "28rpx",
        0,
        0,
        60
      ],
      "color": [
        "#999999",
        0,
        0,
        60
      ]
    }
  },
  ".report-picker-arrow": {
    "": {
      "fontSize": [
        "24rpx",
        0,
        0,
        61
      ],
      "color": [
        "#999999",
        0,
        0,
        61
      ]
    }
  },
  ".report-textarea": {
    "": {
      "width": [
        100,
        0,
        0,
        62
      ],
      "height": [
        "250rpx",
        0,
        0,
        62
      ],
      "backgroundColor": [
        "#2a2a2a",
        0,
        0,
        62
      ],
      "borderRadius": [
        "10rpx",
        0,
        0,
        62
      ],
      "paddingTop": [
        "20rpx",
        0,
        0,
        62
      ],
      "paddingRight": [
        "20rpx",
        0,
        0,
        62
      ],
      "paddingBottom": [
        "20rpx",
        0,
        0,
        62
      ],
      "paddingLeft": [
        "20rpx",
        0,
        0,
        62
      ],
      "fontSize": [
        "28rpx",
        0,
        0,
        62
      ],
      "color": [
        "#ffffff",
        0,
        0,
        62
      ],
      "marginBottom": [
        "10rpx",
        0,
        0,
        62
      ]
    }
  },
  ".report-char-count": {
    "": {
      "fontSize": [
        "24rpx",
        0,
        0,
        63
      ],
      "color": [
        "#999999",
        0,
        0,
        63
      ],
      "textAlign": [
        "right",
        0,
        0,
        63
      ]
    }
  },
  ".report-buttons": {
    "": {
      "display": [
        "flex",
        0,
        0,
        64
      ],
      "flexDirection": [
        "row",
        0,
        0,
        64
      ],
      "justifyContent": [
        "space-between",
        0,
        0,
        64
      ],
      "marginTop": [
        "40rpx",
        0,
        0,
        64
      ]
    }
  },
  ".report-btn": {
    "": {
      "flex": [
        1,
        0,
        0,
        65
      ],
      "height": [
        "80rpx",
        0,
        0,
        65
      ],
      "borderRadius": [
        "10rpx",
        0,
        0,
        65
      ],
      "display": [
        "flex",
        0,
        0,
        65
      ],
      "flexDirection": [
        "row",
        0,
        0,
        65
      ],
      "justifyContent": [
        "center",
        0,
        0,
        65
      ],
      "alignItems": [
        "center",
        0,
        0,
        65
      ],
      "marginTop": [
        0,
        0,
        0,
        65
      ],
      "marginRight": [
        "10rpx",
        0,
        0,
        65
      ],
      "marginBottom": [
        0,
        0,
        0,
        65
      ],
      "marginLeft": [
        "10rpx",
        0,
        0,
        65
      ]
    }
  },
  ".report-btn-cancel": {
    "": {
      "backgroundColor": [
        "#3a3a3a",
        0,
        0,
        66
      ]
    }
  },
  ".report-btn-submit": {
    "": {
      "backgroundColor": [
        "#ef274d",
        0,
        0,
        67
      ]
    }
  },
  ".report-btn-text": {
    "": {
      "fontSize": [
        "32rpx",
        0,
        0,
        68
      ],
      "color": [
        "#ffffff",
        0,
        0,
        68
      ]
    }
  },
  "@VERSION": 2
}

/***/ }),
/* 213 */
/*!*******************************************************************************************************************************************************************!*\
  !*** C:/Users/TAOER/Desktop/ShayuVideo/ShayuVideoAPP/uni_modules/uni-popup/components/uni-popup-comments/uni-popup-comments.vue?vue&type=style&index=1&lang=css& ***!
  \*******************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_popup_comments_vue_vue_type_style_index_1_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-0-1!./node_modules/postcss-loader/src??ref--10-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./uni-popup-comments.vue?vue&type=style&index=1&lang=css& */ 214);
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_popup_comments_vue_vue_type_style_index_1_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_popup_comments_vue_vue_type_style_index_1_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_popup_comments_vue_vue_type_style_index_1_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_popup_comments_vue_vue_type_style_index_1_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_popup_comments_vue_vue_type_style_index_1_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 214 */
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-0-1!./node_modules/postcss-loader/src??ref--10-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!C:/Users/TAOER/Desktop/ShayuVideo/ShayuVideoAPP/uni_modules/uni-popup/components/uni-popup-comments/uni-popup-comments.vue?vue&type=style&index=1&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  ".report-dialog": {
    "": {
      "width": [
        "680rpx",
        1,
        0,
        0
      ],
      "backgroundColor": [
        "#1a1a1a",
        0,
        0,
        0
      ],
      "borderRadius": [
        "20rpx",
        0,
        0,
        0
      ],
      "paddingTop": [
        "40rpx",
        0,
        0,
        0
      ],
      "paddingRight": [
        "40rpx",
        0,
        0,
        0
      ],
      "paddingBottom": [
        "40rpx",
        0,
        0,
        0
      ],
      "paddingLeft": [
        "40rpx",
        0,
        0,
        0
      ]
    }
  },
  ".report-textarea": {
    "": {
      "width": [
        100,
        1,
        0,
        1
      ],
      "height": [
        "250rpx",
        0,
        0,
        1
      ],
      "backgroundColor": [
        "#2a2a2a",
        0,
        0,
        1
      ],
      "borderRadius": [
        "10rpx",
        0,
        0,
        1
      ],
      "paddingTop": [
        "20rpx",
        0,
        0,
        1
      ],
      "paddingRight": [
        "20rpx",
        0,
        0,
        1
      ],
      "paddingBottom": [
        "20rpx",
        0,
        0,
        1
      ],
      "paddingLeft": [
        "20rpx",
        0,
        0,
        1
      ],
      "fontSize": [
        "28rpx",
        0,
        0,
        1
      ],
      "color": [
        "#ffffff",
        0,
        0,
        1
      ],
      "marginBottom": [
        "10rpx",
        0,
        0,
        1
      ]
    }
  },
  "@VERSION": 2
}

/***/ }),
/* 215 */
/*!****************************************************************************************************************************!*\
  !*** C:/Users/TAOER/Desktop/ShayuVideo/ShayuVideoAPP/uni_modules/uni-popup/components/uni-popup-share/uni-popup-share.vue ***!
  \****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _uni_popup_share_vue_vue_type_template_id_0485c93f___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./uni-popup-share.vue?vue&type=template&id=0485c93f& */ 216);\n/* harmony import */ var _uni_popup_share_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./uni-popup-share.vue?vue&type=script&lang=js& */ 218);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _uni_popup_share_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _uni_popup_share_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 12);\n\nvar renderjs\n\n\nfunction injectStyles (context) {\n  \n  if(!this.options.style){\n          this.options.style = {}\n      }\n      if(Vue.prototype.__merge_style && Vue.prototype.__$appStyle__){\n        Vue.prototype.__merge_style(Vue.prototype.__$appStyle__, this.options.style)\n      }\n      if(Vue.prototype.__merge_style){\n                Vue.prototype.__merge_style(__webpack_require__(/*! ./uni-popup-share.vue?vue&type=style&index=0&lang=css& */ 220).default, this.options.style)\n            }else{\n                Object.assign(this.options.style,__webpack_require__(/*! ./uni-popup-share.vue?vue&type=style&index=0&lang=css& */ 220).default)\n            }\n\n}\n\n/* normalize component */\n\nvar component = Object(_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _uni_popup_share_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _uni_popup_share_vue_vue_type_template_id_0485c93f___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _uni_popup_share_vue_vue_type_template_id_0485c93f___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  \"1ba36b1e\",\n  false,\n  _uni_popup_share_vue_vue_type_template_id_0485c93f___WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ninjectStyles.call(component)\ncomponent.options.__file = \"uni_modules/uni-popup/components/uni-popup-share/uni-popup-share.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBNEg7QUFDNUg7QUFDbUU7QUFDTDtBQUM5RDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QyxtQkFBTyxDQUFDLGlFQUF3RDtBQUM1RyxhQUFhO0FBQ2IsaURBQWlELG1CQUFPLENBQUMsaUVBQXdEO0FBQ2pIOztBQUVBOztBQUVBO0FBQ3FLO0FBQ3JLLGdCQUFnQiwrS0FBVTtBQUMxQixFQUFFLHFGQUFNO0FBQ1IsRUFBRSwwRkFBTTtBQUNSLEVBQUUsbUdBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsOEZBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ0E7QUFDZSxnRiIsImZpbGUiOiIyMTUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucywgcmVjeWNsYWJsZVJlbmRlciwgY29tcG9uZW50cyB9IGZyb20gXCIuL3VuaS1wb3B1cC1zaGFyZS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MDQ4NWM5M2YmXCJcbnZhciByZW5kZXJqc1xuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi91bmktcG9wdXAtc2hhcmUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi91bmktcG9wdXAtc2hhcmUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5mdW5jdGlvbiBpbmplY3RTdHlsZXMgKGNvbnRleHQpIHtcbiAgXG4gIGlmKCF0aGlzLm9wdGlvbnMuc3R5bGUpe1xuICAgICAgICAgIHRoaXMub3B0aW9ucy5zdHlsZSA9IHt9XG4gICAgICB9XG4gICAgICBpZihWdWUucHJvdG90eXBlLl9fbWVyZ2Vfc3R5bGUgJiYgVnVlLnByb3RvdHlwZS5fXyRhcHBTdHlsZV9fKXtcbiAgICAgICAgVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlKFZ1ZS5wcm90b3R5cGUuX18kYXBwU3R5bGVfXywgdGhpcy5vcHRpb25zLnN0eWxlKVxuICAgICAgfVxuICAgICAgaWYoVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlKXtcbiAgICAgICAgICAgICAgICBWdWUucHJvdG90eXBlLl9fbWVyZ2Vfc3R5bGUocmVxdWlyZShcIi4vdW5pLXBvcHVwLXNoYXJlLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9Y3NzJlwiKS5kZWZhdWx0LCB0aGlzLm9wdGlvbnMuc3R5bGUpXG4gICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICBPYmplY3QuYXNzaWduKHRoaXMub3B0aW9ucy5zdHlsZSxyZXF1aXJlKFwiLi91bmktcG9wdXAtc2hhcmUudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3MmXCIpLmRlZmF1bHQpXG4gICAgICAgICAgICB9XG5cbn1cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiFEOlxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXHJ1bnRpbWVcXFxcY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIFwiMWJhMzZiMWVcIixcbiAgZmFsc2UsXG4gIGNvbXBvbmVudHMsXG4gIHJlbmRlcmpzXG4pXG5cbmluamVjdFN0eWxlcy5jYWxsKGNvbXBvbmVudClcbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwidW5pX21vZHVsZXMvdW5pLXBvcHVwL2NvbXBvbmVudHMvdW5pLXBvcHVwLXNoYXJlL3VuaS1wb3B1cC1zaGFyZS52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///215\n");

/***/ }),
/* 216 */
/*!***********************************************************************************************************************************************************!*\
  !*** C:/Users/TAOER/Desktop/ShayuVideo/ShayuVideoAPP/uni_modules/uni-popup/components/uni-popup-share/uni-popup-share.vue?vue&type=template&id=0485c93f& ***!
  \***********************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_popup_share_vue_vue_type_template_id_0485c93f___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.recycle.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./uni-popup-share.vue?vue&type=template&id=0485c93f& */ 217);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_popup_share_vue_vue_type_template_id_0485c93f___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_popup_share_vue_vue_type_template_id_0485c93f___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_popup_share_vue_vue_type_template_id_0485c93f___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_popup_share_vue_vue_type_template_id_0485c93f___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 217 */
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.recycle.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!C:/Users/TAOER/Desktop/ShayuVideo/ShayuVideoAPP/uni_modules/uni-popup/components/uni-popup-share/uni-popup-share.vue?vue&type=template&id=0485c93f& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
try {
  components = {
    uniPopup:
      __webpack_require__(/*! @/uni_modules/uni-popup/components/uni-popup/uni-popup.vue */ 192)
        .default,
  }
} catch (e) {
  if (
    e.message.indexOf("Cannot find module") !== -1 &&
    e.message.indexOf(".vue") !== -1
  ) {
    console.error(e.message)
    console.error("1. 排查组件名称拼写是否正确")
    console.error(
      "2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"
    )
    console.error(
      "3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件"
    )
  } else {
    throw e
  }
}
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "view",
    { staticClass: ["page"] },
    [
      _c("view", { staticClass: ["all-box"] }, [
        _c(
          "view",
          {
            staticClass: ["share-item"],
            on: {
              click: function ($event) {
                _vm.downloadVlog()
              },
            },
          },
          [
            _c(
              "view",
              {
                staticClass: ["icon-wrapper"],
                staticStyle: { alignSelf: "center" },
              },
              [
                _c("u-image", {
                  staticClass: ["icon-image"],
                  staticStyle: { alignSelf: "center" },
                  attrs: { src: "/static/images/icon-download.png" },
                }),
              ],
              1
            ),
            _c(
              "u-text",
              {
                staticClass: ["icon-tag-text"],
                staticStyle: { alignSelf: "center" },
                appendAsTree: true,
                attrs: { append: "tree" },
              },
              [_vm._v("保存到相册")]
            ),
          ]
        ),
        _c(
          "view",
          {
            staticClass: ["share-item"],
            on: {
              click: function ($event) {
                _vm.copyLink()
              },
            },
          },
          [
            _c(
              "view",
              {
                staticClass: ["icon-wrapper"],
                staticStyle: { alignSelf: "center" },
              },
              [
                _c("u-image", {
                  staticClass: ["icon-image"],
                  staticStyle: { alignSelf: "center" },
                  attrs: { src: "/static/images/icon-copy.png" },
                }),
              ],
              1
            ),
            _c(
              "u-text",
              {
                staticClass: ["icon-tag-text"],
                staticStyle: { alignSelf: "center" },
                appendAsTree: true,
                attrs: { append: "tree" },
              },
              [_vm._v("复制链接")]
            ),
          ]
        ),
        _c(
          "view",
          {
            staticClass: ["share-item"],
            on: {
              click: function ($event) {
                _vm.gotoQRCode()
              },
            },
          },
          [
            _c(
              "view",
              {
                staticClass: ["icon-wrapper"],
                staticStyle: { alignSelf: "center" },
              },
              [
                _c("u-image", {
                  staticClass: ["icon-image"],
                  staticStyle: { alignSelf: "center" },
                  attrs: { src: "/static/images/icon-qrcode.png" },
                }),
              ],
              1
            ),
            _c(
              "u-text",
              {
                staticClass: ["icon-tag-text"],
                staticStyle: { alignSelf: "center" },
                appendAsTree: true,
                attrs: { append: "tree" },
              },
              [_vm._v("二维码")]
            ),
          ]
        ),
        _vm.thisVlogerId != _vm.userId && _vm.isPrivate == 0
          ? _c(
              "view",
              {
                staticClass: ["share-item"],
                on: {
                  click: function ($event) {
                    _vm.showReportDialog()
                  },
                },
              },
              [
                _c(
                  "view",
                  {
                    staticClass: ["icon-wrapper"],
                    staticStyle: { alignSelf: "center" },
                  },
                  [
                    _c("u-image", {
                      staticClass: ["icon-image"],
                      staticStyle: { alignSelf: "center" },
                      attrs: { src: "/static/images/icon-delete.png" },
                    }),
                  ],
                  1
                ),
                _c(
                  "u-text",
                  {
                    staticClass: ["icon-tag-text"],
                    staticStyle: { alignSelf: "center" },
                    appendAsTree: true,
                    attrs: { append: "tree" },
                  },
                  [_vm._v("举报")]
                ),
              ]
            )
          : _vm._e(),
        _vm.thisVlogerId == _vm.userId && _vm.isPrivate == 0
          ? _c(
              "view",
              {
                staticClass: ["share-item"],
                on: {
                  click: function ($event) {
                    _vm.changeVlogToPrivate()
                  },
                },
              },
              [
                _c(
                  "view",
                  {
                    staticClass: ["icon-wrapper"],
                    staticStyle: { alignSelf: "center" },
                  },
                  [
                    _c("u-image", {
                      staticClass: ["icon-image"],
                      staticStyle: { alignSelf: "center" },
                      attrs: { src: "/static/images/icon-private.png" },
                    }),
                  ],
                  1
                ),
                _c(
                  "u-text",
                  {
                    staticClass: ["icon-tag-text"],
                    staticStyle: { alignSelf: "center" },
                    appendAsTree: true,
                    attrs: { append: "tree" },
                  },
                  [_vm._v("转为私密")]
                ),
              ]
            )
          : _vm._e(),
        _vm.thisVlogerId == _vm.userId && _vm.isPrivate == 1
          ? _c(
              "view",
              {
                staticClass: ["share-item"],
                on: {
                  click: function ($event) {
                    _vm.changeVlogToPublic()
                  },
                },
              },
              [
                _c(
                  "view",
                  {
                    staticClass: ["icon-wrapper"],
                    staticStyle: { alignSelf: "center" },
                  },
                  [
                    _c("u-image", {
                      staticClass: ["icon-image"],
                      staticStyle: { alignSelf: "center" },
                      attrs: { src: "/static/images/icon-private.png" },
                    }),
                  ],
                  1
                ),
                _c(
                  "u-text",
                  {
                    staticClass: ["icon-tag-text"],
                    staticStyle: { alignSelf: "center" },
                    appendAsTree: true,
                    attrs: { append: "tree" },
                  },
                  [_vm._v("转为公开")]
                ),
              ]
            )
          : _vm._e(),
      ]),
      _c("view", { staticStyle: { padding: "0 20rpx" } }, [
        _c(
          "view",
          {
            class: {
              "btn-cancel": !_vm.cancelTouched,
              "btn-cancel-touched": _vm.cancelTouched,
            },
            staticStyle: {
              height: "50px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              borderWidth: "1rpx",
              borderRadius: "10px",
            },
            on: {
              click: _vm.close,
              touchstart: _vm.touchstartCancel,
              touchend: _vm.touchendCancel,
            },
          },
          [
            _c(
              "u-text",
              {
                staticStyle: {
                  color: "#ffffff",
                  fontSize: "16px",
                  alignSelf: "center",
                  alignSelf: "center",
                },
                appendAsTree: true,
                attrs: { append: "tree" },
              },
              [_vm._v("取消")]
            ),
          ]
        ),
      ]),
      _c(
        "uni-popup",
        { ref: "reportPopup", attrs: { type: "center", maskClick: false } },
        [
          _c(
            "view",
            {
              staticClass: ["report-dialog"],
              staticStyle: {
                width: "680rpx",
                backgroundColor: "#1a1a1a",
                borderRadius: "20rpx",
                padding: "40rpx",
              },
              on: { click: function ($event) {} },
            },
            [
              _c(
                "view",
                { staticClass: ["report-title"] },
                [
                  _c(
                    "u-text",
                    {
                      staticClass: ["report-title-text"],
                      appendAsTree: true,
                      attrs: { append: "tree" },
                    },
                    [_vm._v("举报视频")]
                  ),
                  _c("u-image", {
                    staticClass: ["report-close-icon"],
                    attrs: { src: "/static/images/icon-close.png" },
                    on: { click: _vm.closeReportDialog },
                  }),
                ],
                1
              ),
              _c("view", { staticClass: ["report-content"] }, [
                _c(
                  "view",
                  { staticClass: ["report-item"] },
                  [
                    _c(
                      "u-text",
                      {
                        staticClass: ["report-label"],
                        appendAsTree: true,
                        attrs: { append: "tree" },
                      },
                      [_vm._v("举报原因：")]
                    ),
                    _c(
                      "picker",
                      {
                        attrs: {
                          mode: "selector",
                          range: _vm.reportReasons,
                          value: _vm.selectedReasonIndex,
                        },
                        on: { change: _vm.onReasonChange },
                      },
                      [
                        _c(
                          "view",
                          {
                            staticClass: ["report-picker"],
                            on: { click: function ($event) {} },
                          },
                          [
                            _c(
                              "u-text",
                              {
                                class:
                                  _vm.selectedReasonIndex >= 0
                                    ? "report-picker-text"
                                    : "report-picker-placeholder",
                                appendAsTree: true,
                                attrs: { append: "tree" },
                              },
                              [
                                _vm._v(
                                  _vm._s(
                                    _vm.selectedReasonIndex >= 0
                                      ? _vm.reportReasons[
                                          _vm.selectedReasonIndex
                                        ]
                                      : "请选择举报原因"
                                  )
                                ),
                              ]
                            ),
                            _c(
                              "u-text",
                              {
                                staticClass: ["report-picker-arrow"],
                                appendAsTree: true,
                                attrs: { append: "tree" },
                              },
                              [_vm._v("▼")]
                            ),
                          ]
                        ),
                      ]
                    ),
                  ],
                  1
                ),
                _c(
                  "view",
                  { staticClass: ["report-item"] },
                  [
                    _c(
                      "u-text",
                      {
                        staticClass: ["report-label"],
                        appendAsTree: true,
                        attrs: { append: "tree" },
                      },
                      [_vm._v("详细描述：")]
                    ),
                    _c("u-textarea", {
                      staticClass: ["report-textarea"],
                      staticStyle: {
                        width: "100%",
                        backgroundColor: "#2a2a2a",
                        borderRadius: "10rpx",
                        padding: "20rpx",
                        fontSize: "28rpx",
                        color: "#ffffff",
                        marginBottom: "10rpx",
                      },
                      attrs: {
                        placeholder: "请详细描述举报原因（选填，最多500字）",
                        placeholderStyle: "color: #999999",
                        maxlength: "500",
                        value: _vm.reportDescription,
                      },
                      on: {
                        input: function ($event) {
                          _vm.reportDescription = $event.detail.value
                        },
                      },
                    }),
                    _c(
                      "u-text",
                      {
                        staticClass: ["report-char-count"],
                        appendAsTree: true,
                        attrs: { append: "tree" },
                      },
                      [_vm._v(_vm._s(_vm.reportDescription.length) + "/500")]
                    ),
                  ],
                  1
                ),
              ]),
              _c("view", { staticClass: ["report-buttons"] }, [
                _c(
                  "view",
                  {
                    staticClass: ["report-btn", "report-btn-cancel"],
                    on: { click: _vm.closeReportDialog },
                  },
                  [
                    _c(
                      "u-text",
                      {
                        staticClass: ["report-btn-text"],
                        appendAsTree: true,
                        attrs: { append: "tree" },
                      },
                      [_vm._v("取消")]
                    ),
                  ]
                ),
                _c(
                  "view",
                  {
                    staticClass: ["report-btn", "report-btn-submit"],
                    on: { click: _vm.submitReport },
                  },
                  [
                    _c(
                      "u-text",
                      {
                        staticClass: ["report-btn-text"],
                        appendAsTree: true,
                        attrs: { append: "tree" },
                      },
                      [_vm._v("提交")]
                    ),
                  ]
                ),
              ]),
            ]
          ),
        ]
      ),
    ],
    1
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 218 */
/*!*****************************************************************************************************************************************************!*\
  !*** C:/Users/TAOER/Desktop/ShayuVideo/ShayuVideoAPP/uni_modules/uni-popup/components/uni-popup-share/uni-popup-share.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_popup_share_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib??ref--5-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--5-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./uni-popup-share.vue?vue&type=script&lang=js& */ 219);\n/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_popup_share_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_popup_share_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_popup_share_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_popup_share_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_popup_share_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQTZhLENBQWdCLHlkQUFHLEVBQUMiLCJmaWxlIjoiMjE4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vZCBmcm9tIFwiLSFEOlxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxiYWJlbC1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzPz9yZWYtLTUtMCFEOlxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXJcXFxcaW5kZXguanM/P3JlZi0tNS0xIUQ6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcdnVlLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3VuaS1wb3B1cC1zaGFyZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hRDpcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcYmFiZWwtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcz8/cmVmLS01LTAhRDpcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyXFxcXGluZGV4LmpzPz9yZWYtLTUtMSFEOlxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi91bmktcG9wdXAtc2hhcmUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///218\n");

/***/ }),
/* 219 */
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--5-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--5-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!C:/Users/TAOER/Desktop/ShayuVideo/ShayuVideoAPP/uni_modules/uni-popup/components/uni-popup-share/uni-popup-share.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__f__) {\n\nvar _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 150);\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\nvar _popup = _interopRequireDefault(__webpack_require__(/*! ../uni-popup/popup.js */ 210));\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\nvar app = getApp();\nvar _default = {\n  name: \"UniPopupShare\",\n  mixins: [_popup.default],\n  emits: [\"select\"],\n  props: {\n    title: {\n      type: String,\n      default: \"\"\n    },\n    beforeClose: {\n      type: Boolean,\n      default: false\n    },\n    thisVlogerId: {\n      type: String,\n      default: \"\"\n    },\n    thisVlogId: {\n      type: String,\n      default: \"\"\n    },\n    vlogUrl: {\n      type: String,\n      default: \"\"\n    },\n    isPrivate: {\n      type: Number,\n      default: 0\n    }\n  },\n  data: function data() {\n    return {\n      userId: \"\",\n      cancelTouched: false,\n      // 举报相关\n      reportReasons: [\"垃圾信息\", \"色情低俗\", \"违法违规\", \"人身攻击\", \"其他\"],\n      selectedReasonIndex: -1,\n      // 选中的举报原因索引\n      reportDescription: \"\" // 举报详细描述\n    };\n  },\n  created: function created() {\n    var userId = getApp().getUserInfoSession().id;\n    this.userId = userId;\n  },\n  methods: {\n    /**\n     * 选择内容\n     */\n    select: function select(item, index) {\n      this.$emit(\"select\", {\n        item: item,\n        index: index\n      });\n      this.close();\n    },\n    /**\n     * 关闭窗口\n     */\n    close: function close() {\n      if (this.beforeClose) return;\n      this.popup.close();\n      uni.showTabBar({\n        animation: true\n      });\n    },\n    touchstartCancel: function touchstartCancel() {\n      this.cancelTouched = true;\n    },\n    touchendCancel: function touchendCancel() {\n      this.cancelTouched = false;\n    },\n    downloadVlog: function downloadVlog() {\n      __f__(\"log\", \"downloadVlog...thisVlogId = \" + this.vlogUrl, \" at uni_modules/uni-popup/components/uni-popup-share/uni-popup-share.vue:458\");\n      uni.showLoading();\n      uni.downloadFile({\n        url: this.vlogUrl,\n        success: function success(res) {\n          if (res.statusCode === 200) {\n            __f__(\"log\", \"下载成功\", \" at uni_modules/uni-popup/components/uni-popup-share/uni-popup-share.vue:464\");\n            uni.saveVideoToPhotosAlbum({\n              filePath: res.tempFilePath,\n              success: function success() {\n                __f__(\"log\", \"save success\", \" at uni_modules/uni-popup/components/uni-popup-share/uni-popup-share.vue:468\");\n                uni.hideLoading();\n                uni.showToast({\n                  title: \"保存成功~！\",\n                  duration: 5000\n                });\n              }\n            });\n          }\n        }\n      });\n    },\n    copyLink: function copyLink() {\n      uni.setClipboardData({\n        data: this.vlogUrl,\n        success: function success() {\n          uni.showToast({\n            //提示\n            title: \"复制成功\"\n          });\n        }\n      });\n    },\n    gotoQRCode: function gotoQRCode() {\n      uni.navigateTo({\n        url: \"/pages/qrcode/qrcode?vlogId=\" + this.thisVlogId\n      });\n    },\n    changeVlogToPublic: function changeVlogToPublic() {\n      var vlogId = this.thisVlogId;\n      var me = this;\n      var userId = getApp().getUserInfoSession().id;\n      var serverUrl = app.globalData.serverUrl;\n      uni.request({\n        method: \"POST\",\n        header: {\n          headerUserId: userId,\n          headerUserToken: app.getUserSessionToken()\n        },\n        url: serverUrl + \"/vlog/changeToPublic?userId=\" + userId + \"&vlogId=\" + vlogId,\n        success: function success(result) {\n          __f__(\"log\", result, \" at uni_modules/uni-popup/components/uni-popup-share/uni-popup-share.vue:517\");\n          if (result.data.status == 200) {\n            uni.showToast({\n              title: \"设置完毕~\"\n            });\n          }\n        }\n      });\n    },\n    changeVlogToPrivate: function changeVlogToPrivate() {\n      var vlogId = this.thisVlogId;\n      var me = this;\n      var userId = getApp().getUserInfoSession().id;\n      var serverUrl = app.globalData.serverUrl;\n      uni.request({\n        method: \"POST\",\n        header: {\n          headerUserId: userId,\n          headerUserToken: app.getUserSessionToken()\n        },\n        url: serverUrl + \"/vlog/changeToPrivate?userId=\" + userId + \"&vlogId=\" + vlogId,\n        success: function success(result) {\n          __f__(\"log\", result, \" at uni_modules/uni-popup/components/uni-popup-share/uni-popup-share.vue:546\");\n          if (result.data.status == 200) {\n            uni.showToast({\n              title: \"设置完毕~\"\n            });\n          }\n        }\n      });\n    },\n    // 显示举报弹窗\n    showReportDialog: function showReportDialog() {\n      var me = this;\n\n      // 检查是否登录\n      var myUserInfo = getApp().getUserInfoSession();\n      if (myUserInfo == null) {\n        uni.showTabBar({\n          animation: false\n        });\n        uni.showToast({\n          duration: 3000,\n          title: \"请登录~\",\n          icon: \"none\"\n        });\n        uni.navigateTo({\n          url: \"../loginRegist/loginRegist\",\n          animationType: \"slide-in-bottom\"\n        });\n        return;\n      }\n      me.selectedReasonIndex = -1;\n      me.reportDescription = \"\";\n      me.$refs.reportPopup.open();\n    },\n    // 关闭举报弹窗\n    closeReportDialog: function closeReportDialog() {\n      this.$refs.reportPopup.close();\n      this.selectedReasonIndex = -1;\n      this.reportDescription = \"\";\n    },\n    // 选择举报原因\n    onReasonChange: function onReasonChange(e) {\n      this.selectedReasonIndex = e.detail.value;\n    },\n    // 提交举报\n    submitReport: function submitReport() {\n      var me = this;\n\n      // 验证举报原因\n      if (me.selectedReasonIndex < 0) {\n        uni.showToast({\n          title: \"请选择举报原因\",\n          icon: \"none\",\n          duration: 2000\n        });\n        return;\n      }\n      var myUserInfo = getApp().getUserInfoSession();\n      if (myUserInfo == null) {\n        uni.showToast({\n          title: \"请登录~\",\n          icon: \"none\",\n          duration: 3000\n        });\n        return;\n      }\n      var reporterId = myUserInfo.id;\n      var reason = me.reportReasons[me.selectedReasonIndex];\n      var description = me.reportDescription || \"\";\n\n      // 构建举报数据\n      var reportData = {\n        reportType: \"1\",\n        // 1表示视频\n        targetId: me.thisVlogId,\n        reason: reason,\n        description: description,\n        reporterId: reporterId\n      };\n      __f__(\"log\", \"提交举报数据：\", reportData, \" at uni_modules/uni-popup/components/uni-popup-share/uni-popup-share.vue:633\");\n      var serverUrl = app.globalData.serverUrl;\n      uni.request({\n        method: \"POST\",\n        header: {\n          \"Content-Type\": \"application/json\",\n          headerUserId: reporterId,\n          headerUserToken: app.getUserSessionToken()\n        },\n        url: serverUrl + \"/report/vlog\",\n        data: reportData,\n        success: function success(result) {\n          __f__(\"log\", \"举报响应：\", result, \" at uni_modules/uni-popup/components/uni-popup-share/uni-popup-share.vue:646\");\n          if (result.data.status == 200) {\n            uni.showToast({\n              title: \"举报成功!\",\n              icon: \"success\",\n              duration: 2000\n            });\n            me.closeReportDialog();\n            // 关闭分享弹窗\n            me.close();\n          } else {\n            uni.showToast({\n              title: result.data.msg || \"举报失败，请重试\",\n              icon: \"none\",\n              duration: 3000\n            });\n          }\n        },\n        fail: function fail(err) {\n          __f__(\"error\", \"举报请求失败：\", err, \" at uni_modules/uni-popup/components/uni-popup-share/uni-popup-share.vue:666\");\n          uni.showToast({\n            title: \"网络错误，请重试\",\n            icon: \"none\",\n            duration: 3000\n          });\n        }\n      });\n    }\n  }\n};\nexports.default = _default;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 123)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vdW5pX21vZHVsZXMvdW5pLXBvcHVwL2NvbXBvbmVudHMvdW5pLXBvcHVwLXNoYXJlL3VuaS1wb3B1cC1zaGFyZS52dWUiXSwibmFtZXMiOlsibmFtZSIsIm1peGlucyIsImVtaXRzIiwicHJvcHMiLCJ0aXRsZSIsInR5cGUiLCJkZWZhdWx0IiwiYmVmb3JlQ2xvc2UiLCJ0aGlzVmxvZ2VySWQiLCJ0aGlzVmxvZ0lkIiwidmxvZ1VybCIsImlzUHJpdmF0ZSIsImRhdGEiLCJ1c2VySWQiLCJjYW5jZWxUb3VjaGVkIiwicmVwb3J0UmVhc29ucyIsInNlbGVjdGVkUmVhc29uSW5kZXgiLCJyZXBvcnREZXNjcmlwdGlvbiIsImNyZWF0ZWQiLCJtZXRob2RzIiwic2VsZWN0IiwiaXRlbSIsImluZGV4IiwiY2xvc2UiLCJ1bmkiLCJhbmltYXRpb24iLCJ0b3VjaHN0YXJ0Q2FuY2VsIiwidG91Y2hlbmRDYW5jZWwiLCJkb3dubG9hZFZsb2ciLCJ1cmwiLCJzdWNjZXNzIiwiZmlsZVBhdGgiLCJkdXJhdGlvbiIsImNvcHlMaW5rIiwiZ290b1FSQ29kZSIsImNoYW5nZVZsb2dUb1B1YmxpYyIsIm1ldGhvZCIsImhlYWRlciIsImhlYWRlclVzZXJJZCIsImhlYWRlclVzZXJUb2tlbiIsInNlcnZlclVybCIsInZsb2dJZCIsImNoYW5nZVZsb2dUb1ByaXZhdGUiLCJzaG93UmVwb3J0RGlhbG9nIiwiaWNvbiIsImFuaW1hdGlvblR5cGUiLCJtZSIsImNsb3NlUmVwb3J0RGlhbG9nIiwib25SZWFzb25DaGFuZ2UiLCJzdWJtaXRSZXBvcnQiLCJyZXBvcnRUeXBlIiwidGFyZ2V0SWQiLCJyZWFzb24iLCJkZXNjcmlwdGlvbiIsInJlcG9ydGVySWQiLCJmYWlsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBNFhBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQURBO0FBQUEsZUFFQTtFQUNBQTtFQUNBQztFQUNBQztFQUNBQztJQUNBQztNQUNBQztNQUNBQztJQUNBO0lBQ0FDO01BQ0FGO01BQ0FDO0lBQ0E7SUFDQUU7TUFDQUg7TUFDQUM7SUFDQTtJQUNBRztNQUNBSjtNQUNBQztJQUNBO0lBQ0FJO01BQ0FMO01BQ0FDO0lBQ0E7SUFDQUs7TUFDQU47TUFDQUM7SUFDQTtFQUNBO0VBQ0FNO0lBQ0E7TUFDQUM7TUFDQUM7TUFFQTtNQUNBQztNQUNBQztNQUFBO01BQ0FDO0lBQ0E7RUFDQTtFQUNBQztJQUNBO0lBQ0E7RUFDQTtFQUNBQztJQUNBO0FBQ0E7QUFDQTtJQUNBQztNQUNBO1FBQ0FDO1FBQ0FDO01BQ0E7TUFDQTtJQUNBO0lBQ0E7QUFDQTtBQUNBO0lBQ0FDO01BQ0E7TUFDQTtNQUNBQztRQUNBQztNQUNBO0lBQ0E7SUFFQUM7TUFDQTtJQUNBO0lBRUFDO01BQ0E7SUFDQTtJQUVBQztNQUNBO01BQ0FKO01BQ0FBO1FBQ0FLO1FBQ0FDO1VBQ0E7WUFDQTtZQUNBTjtjQUNBTztjQUNBRDtnQkFDQTtnQkFDQU47Z0JBQ0FBO2tCQUNBcEI7a0JBQ0E0QjtnQkFDQTtjQUNBO1lBQ0E7VUFDQTtRQUNBO01BQ0E7SUFDQTtJQUVBQztNQUNBVDtRQUNBWjtRQUNBa0I7VUFDQU47WUFDQTtZQUNBcEI7VUFDQTtRQUNBO01BQ0E7SUFDQTtJQUVBOEI7TUFDQVY7UUFDQUs7TUFDQTtJQUNBO0lBRUFNO01BQ0E7TUFDQTtNQUNBO01BQ0E7TUFDQVg7UUFDQVk7UUFDQUM7VUFDQUM7VUFDQUM7UUFDQTtRQUNBVixLQUNBVyxZQUNBLGlDQUNBM0IsU0FDQSxhQUNBNEI7UUFDQVg7VUFDQTtVQUVBO1lBQ0FOO2NBQ0FwQjtZQUNBO1VBQ0E7UUFDQTtNQUNBO0lBQ0E7SUFFQXNDO01BQ0E7TUFDQTtNQUNBO01BQ0E7TUFDQWxCO1FBQ0FZO1FBQ0FDO1VBQ0FDO1VBQ0FDO1FBQ0E7UUFDQVYsS0FDQVcsWUFDQSxrQ0FDQTNCLFNBQ0EsYUFDQTRCO1FBQ0FYO1VBQ0E7VUFFQTtZQUNBTjtjQUNBcEI7WUFDQTtVQUNBO1FBQ0E7TUFDQTtJQUNBO0lBRUE7SUFDQXVDO01BQ0E7O01BRUE7TUFDQTtNQUNBO1FBQ0FuQjtVQUNBQztRQUNBO1FBQ0FEO1VBQ0FRO1VBQ0E1QjtVQUNBd0M7UUFDQTtRQUNBcEI7VUFDQUs7VUFDQWdCO1FBQ0E7UUFDQTtNQUNBO01BRUFDO01BQ0FBO01BQ0FBO0lBQ0E7SUFFQTtJQUNBQztNQUNBO01BQ0E7TUFDQTtJQUNBO0lBRUE7SUFDQUM7TUFDQTtJQUNBO0lBRUE7SUFDQUM7TUFDQTs7TUFFQTtNQUNBO1FBQ0F6QjtVQUNBcEI7VUFDQXdDO1VBQ0FaO1FBQ0E7UUFDQTtNQUNBO01BRUE7TUFDQTtRQUNBUjtVQUNBcEI7VUFDQXdDO1VBQ0FaO1FBQ0E7UUFDQTtNQUNBO01BRUE7TUFDQTtNQUNBOztNQUVBO01BQ0E7UUFDQWtCO1FBQUE7UUFDQUM7UUFDQUM7UUFDQUM7UUFDQUM7TUFDQTtNQUVBO01BRUE7TUFDQTlCO1FBQ0FZO1FBQ0FDO1VBQ0E7VUFDQUM7VUFDQUM7UUFDQTtRQUNBVjtRQUNBakI7UUFDQWtCO1VBQ0E7VUFFQTtZQUNBTjtjQUNBcEI7Y0FDQXdDO2NBQ0FaO1lBQ0E7WUFDQWM7WUFDQTtZQUNBQTtVQUNBO1lBQ0F0QjtjQUNBcEI7Y0FDQXdDO2NBQ0FaO1lBQ0E7VUFDQTtRQUNBO1FBQ0F1QjtVQUNBO1VBQ0EvQjtZQUNBcEI7WUFDQXdDO1lBQ0FaO1VBQ0E7UUFDQTtNQUNBO0lBQ0E7RUFDQTtBQUNBO0FBQUEsMkIiLCJmaWxlIjoiMjE5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiPHN0eWxlPlxuLnBhZ2Uge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwO1xuICBvcGFjaXR5OiAwLjk7XG59XG5cbi5idG4tY2FuY2VsIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFkMWQxZTtcbiAgYm9yZGVyLWNvbG9yOiAjM2EzYTNkO1xufVxuLmJ0bi1jYW5jZWwtdG91Y2hlZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM1MTUxNTY7XG4gIGJvcmRlci1jb2xvcjogIzJiMmIyZjtcbn1cbi5hbGwtYm94IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gIGhlaWdodDogMjgwcnB4O1xufVxuLnNoYXJlLWl0ZW0ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBtYXJnaW4tdG9wOiA2MHJweDtcbn1cbi5pY29uLXdyYXBwZXIge1xuICB3aWR0aDogMTIwcnB4O1xuICBoZWlnaHQ6IDEyMHJweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM0MzQzNztcbiAgYm9yZGVyLXJhZGl1czogMTAwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBvcGFjaXR5OiAwLjg7XG59XG4uaWNvbi1pbWFnZSB7XG4gIHdpZHRoOiA2MHJweDtcbiAgaGVpZ2h0OiA2MHJweDtcbn1cbi5pY29uLXRhZy10ZXh0IHtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbWFyZ2luLXRvcDogMTBycHg7XG59XG5cbi8qIOS4vuaKpeW8ueeql+agt+W8jyAqL1xuLnJlcG9ydC1kaWFsb2cge1xuICB3aWR0aDogNjgwcnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWExYTFhO1xuICBib3JkZXItcmFkaXVzOiAyMHJweDtcbiAgcGFkZGluZzogNDBycHg7XG59XG5cbi5yZXBvcnQtdGl0bGUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbi1ib3R0b206IDQwcnB4O1xufVxuXG4ucmVwb3J0LXRpdGxlLXRleHQge1xuICBmb250LXNpemU6IDM2cnB4O1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuLnJlcG9ydC1jbG9zZS1pY29uIHtcbiAgd2lkdGg6IDQwcnB4O1xuICBoZWlnaHQ6IDQwcnB4O1xuICBvcGFjaXR5OiAwLjg7XG59XG5cbi5yZXBvcnQtY29udGVudCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbi5yZXBvcnQtaXRlbSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIG1hcmdpbi1ib3R0b206IDMwcnB4O1xufVxuXG4ucmVwb3J0LWxhYmVsIHtcbiAgZm9udC1zaXplOiAyOHJweDtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIG1hcmdpbi1ib3R0b206IDIwcnB4O1xufVxuXG4ucmVwb3J0LXBpY2tlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzJhMmEyYTtcbiAgYm9yZGVyLXJhZGl1czogMTBycHg7XG4gIHBhZGRpbmc6IDIwcnB4O1xuICAvKiAjaWZuZGVmIEFQUC1QTFVTLU5WVUUgKi9cbiAgbWluLWhlaWdodDogODBycHg7XG4gIC8qICNlbmRpZiAqL1xuICAvKiAjaWZkZWYgQVBQLVBMVVMtTlZVRSAqL1xuICBoZWlnaHQ6IDgwcnB4O1xuICAvKiAjZW5kaWYgKi9cbn1cblxuLnJlcG9ydC1waWNrZXItdGV4dCB7XG4gIGZvbnQtc2l6ZTogMjhycHg7XG4gIGNvbG9yOiAjZmZmZmZmO1xufVxuXG4ucmVwb3J0LXBpY2tlci1wbGFjZWhvbGRlciB7XG4gIGZvbnQtc2l6ZTogMjhycHg7XG4gIGNvbG9yOiAjOTk5OTk5O1xufVxuXG4ucmVwb3J0LXBpY2tlci1hcnJvdyB7XG4gIGZvbnQtc2l6ZTogMjRycHg7XG4gIGNvbG9yOiAjOTk5OTk5O1xufVxuXG4ucmVwb3J0LXRleHRhcmVhIHtcbiAgd2lkdGg6IDEwMCU7XG4gIC8qICNpZm5kZWYgQVBQLVBMVVMtTlZVRSAqL1xuICBtaW4taGVpZ2h0OiAyNTBycHg7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIC8qICNlbmRpZiAqL1xuICAvKiAjaWZkZWYgQVBQLVBMVVMtTlZVRSAqL1xuICBoZWlnaHQ6IDI1MHJweDtcbiAgLyogI2VuZGlmICovXG4gIGJhY2tncm91bmQtY29sb3I6ICMyYTJhMmE7XG4gIGJvcmRlci1yYWRpdXM6IDEwcnB4O1xuICBwYWRkaW5nOiAyMHJweDtcbiAgZm9udC1zaXplOiAyOHJweDtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIG1hcmdpbi1ib3R0b206IDEwcnB4O1xufVxuXG4ucmVwb3J0LWNoYXItY291bnQge1xuICBmb250LXNpemU6IDI0cnB4O1xuICBjb2xvcjogIzk5OTk5OTtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG5cbi5yZXBvcnQtYnV0dG9ucyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgbWFyZ2luLXRvcDogNDBycHg7XG59XG5cbi5yZXBvcnQtYnRuIHtcbiAgZmxleDogMTtcbiAgaGVpZ2h0OiA4MHJweDtcbiAgYm9yZGVyLXJhZGl1czogMTBycHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW46IDAgMTBycHg7XG59XG5cbi5yZXBvcnQtYnRuLWNhbmNlbCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzYTNhM2E7XG59XG5cbi5yZXBvcnQtYnRuLXN1Ym1pdCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlZjI3NGQ7XG59XG5cbi5yZXBvcnQtYnRuLXRleHQge1xuICBmb250LXNpemU6IDMycnB4O1xuICBjb2xvcjogI2ZmZmZmZjtcbn1cbjwvc3R5bGU+XG5cbjx0ZW1wbGF0ZT5cbiAgPHZpZXcgY2xhc3M9XCJwYWdlXCI+XG4gICAgPHZpZXcgY2xhc3M9XCJhbGwtYm94XCI+XG4gICAgICA8dmlldyBjbGFzcz1cInNoYXJlLWl0ZW1cIiBAY2xpY2s9XCJkb3dubG9hZFZsb2coKVwiPlxuICAgICAgICA8dmlldyBjbGFzcz1cImljb24td3JhcHBlclwiIHN0eWxlPVwiYWxpZ24tc2VsZjogY2VudGVyXCI+XG4gICAgICAgICAgPGltYWdlXG4gICAgICAgICAgICBjbGFzcz1cImljb24taW1hZ2VcIlxuICAgICAgICAgICAgc3JjPVwiL3N0YXRpYy9pbWFnZXMvaWNvbi1kb3dubG9hZC5wbmdcIlxuICAgICAgICAgICAgc3R5bGU9XCJhbGlnbi1zZWxmOiBjZW50ZXJcIlxuICAgICAgICAgID48L2ltYWdlPlxuICAgICAgICA8L3ZpZXc+XG4gICAgICAgIDx0ZXh0IGNsYXNzPVwiaWNvbi10YWctdGV4dFwiIHN0eWxlPVwiYWxpZ24tc2VsZjogY2VudGVyXCI+5L+d5a2Y5Yiw55u45YaMPC90ZXh0PlxuICAgICAgPC92aWV3PlxuXG4gICAgICA8dmlldyBjbGFzcz1cInNoYXJlLWl0ZW1cIiBAY2xpY2s9XCJjb3B5TGluaygpXCI+XG4gICAgICAgIDx2aWV3IGNsYXNzPVwiaWNvbi13cmFwcGVyXCIgc3R5bGU9XCJhbGlnbi1zZWxmOiBjZW50ZXJcIj5cbiAgICAgICAgICA8aW1hZ2VcbiAgICAgICAgICAgIGNsYXNzPVwiaWNvbi1pbWFnZVwiXG4gICAgICAgICAgICBzcmM9XCIvc3RhdGljL2ltYWdlcy9pY29uLWNvcHkucG5nXCJcbiAgICAgICAgICAgIHN0eWxlPVwiYWxpZ24tc2VsZjogY2VudGVyXCJcbiAgICAgICAgICA+PC9pbWFnZT5cbiAgICAgICAgPC92aWV3PlxuICAgICAgICA8dGV4dCBjbGFzcz1cImljb24tdGFnLXRleHRcIiBzdHlsZT1cImFsaWduLXNlbGY6IGNlbnRlclwiPuWkjeWItumTvuaOpTwvdGV4dD5cbiAgICAgIDwvdmlldz5cblxuICAgICAgPHZpZXcgY2xhc3M9XCJzaGFyZS1pdGVtXCIgQGNsaWNrPVwiZ290b1FSQ29kZSgpXCI+XG4gICAgICAgIDx2aWV3IGNsYXNzPVwiaWNvbi13cmFwcGVyXCIgc3R5bGU9XCJhbGlnbi1zZWxmOiBjZW50ZXJcIj5cbiAgICAgICAgICA8aW1hZ2VcbiAgICAgICAgICAgIGNsYXNzPVwiaWNvbi1pbWFnZVwiXG4gICAgICAgICAgICBzcmM9XCIvc3RhdGljL2ltYWdlcy9pY29uLXFyY29kZS5wbmdcIlxuICAgICAgICAgICAgc3R5bGU9XCJhbGlnbi1zZWxmOiBjZW50ZXJcIlxuICAgICAgICAgID48L2ltYWdlPlxuICAgICAgICA8L3ZpZXc+XG4gICAgICAgIDx0ZXh0IGNsYXNzPVwiaWNvbi10YWctdGV4dFwiIHN0eWxlPVwiYWxpZ24tc2VsZjogY2VudGVyXCI+5LqM57u056CBPC90ZXh0PlxuICAgICAgPC92aWV3PlxuXG4gICAgICA8IS0tIOWIpOaWreaIkeiHquW3seeahOinhumikeS4jeaYvuekuui/meS4quaMiemSriAtLT5cbiAgICAgIDx2aWV3XG4gICAgICAgIHYtaWY9XCJ0aGlzVmxvZ2VySWQgIT0gdXNlcklkICYmIGlzUHJpdmF0ZSA9PSAwXCJcbiAgICAgICAgY2xhc3M9XCJzaGFyZS1pdGVtXCJcbiAgICAgICAgQGNsaWNrPVwic2hvd1JlcG9ydERpYWxvZygpXCJcbiAgICAgID5cbiAgICAgICAgPHZpZXcgY2xhc3M9XCJpY29uLXdyYXBwZXJcIiBzdHlsZT1cImFsaWduLXNlbGY6IGNlbnRlclwiPlxuICAgICAgICAgIDxpbWFnZVxuICAgICAgICAgICAgY2xhc3M9XCJpY29uLWltYWdlXCJcbiAgICAgICAgICAgIHNyYz1cIi9zdGF0aWMvaW1hZ2VzL2ljb24tZGVsZXRlLnBuZ1wiXG4gICAgICAgICAgICBzdHlsZT1cImFsaWduLXNlbGY6IGNlbnRlclwiXG4gICAgICAgICAgPjwvaW1hZ2U+XG4gICAgICAgIDwvdmlldz5cbiAgICAgICAgPHRleHQgY2xhc3M9XCJpY29uLXRhZy10ZXh0XCIgc3R5bGU9XCJhbGlnbi1zZWxmOiBjZW50ZXJcIj7kuL7miqU8L3RleHQ+XG4gICAgICA8L3ZpZXc+XG5cbiAgICAgIDwhLS0g5Yik5pat5Y+q5pyJ5oiR6Ieq5bex5omN6IO95pi+56S66L+Z5Liq5oyJ6ZKuIC0tPlxuICAgICAgPHZpZXdcbiAgICAgICAgdi1pZj1cInRoaXNWbG9nZXJJZCA9PSB1c2VySWQgJiYgaXNQcml2YXRlID09IDBcIlxuICAgICAgICBjbGFzcz1cInNoYXJlLWl0ZW1cIlxuICAgICAgICBAY2xpY2s9XCJjaGFuZ2VWbG9nVG9Qcml2YXRlKClcIlxuICAgICAgPlxuICAgICAgICA8dmlldyBjbGFzcz1cImljb24td3JhcHBlclwiIHN0eWxlPVwiYWxpZ24tc2VsZjogY2VudGVyXCI+XG4gICAgICAgICAgPGltYWdlXG4gICAgICAgICAgICBjbGFzcz1cImljb24taW1hZ2VcIlxuICAgICAgICAgICAgc3JjPVwiL3N0YXRpYy9pbWFnZXMvaWNvbi1wcml2YXRlLnBuZ1wiXG4gICAgICAgICAgICBzdHlsZT1cImFsaWduLXNlbGY6IGNlbnRlclwiXG4gICAgICAgICAgPjwvaW1hZ2U+XG4gICAgICAgIDwvdmlldz5cbiAgICAgICAgPHRleHQgY2xhc3M9XCJpY29uLXRhZy10ZXh0XCIgc3R5bGU9XCJhbGlnbi1zZWxmOiBjZW50ZXJcIj7ovazkuLrnp4Hlr4Y8L3RleHQ+XG4gICAgICA8L3ZpZXc+XG4gICAgICA8dmlld1xuICAgICAgICB2LWlmPVwidGhpc1Zsb2dlcklkID09IHVzZXJJZCAmJiBpc1ByaXZhdGUgPT0gMVwiXG4gICAgICAgIGNsYXNzPVwic2hhcmUtaXRlbVwiXG4gICAgICAgIEBjbGljaz1cImNoYW5nZVZsb2dUb1B1YmxpYygpXCJcbiAgICAgID5cbiAgICAgICAgPHZpZXcgY2xhc3M9XCJpY29uLXdyYXBwZXJcIiBzdHlsZT1cImFsaWduLXNlbGY6IGNlbnRlclwiPlxuICAgICAgICAgIDxpbWFnZVxuICAgICAgICAgICAgY2xhc3M9XCJpY29uLWltYWdlXCJcbiAgICAgICAgICAgIHNyYz1cIi9zdGF0aWMvaW1hZ2VzL2ljb24tcHJpdmF0ZS5wbmdcIlxuICAgICAgICAgICAgc3R5bGU9XCJhbGlnbi1zZWxmOiBjZW50ZXJcIlxuICAgICAgICAgID48L2ltYWdlPlxuICAgICAgICA8L3ZpZXc+XG4gICAgICAgIDx0ZXh0IGNsYXNzPVwiaWNvbi10YWctdGV4dFwiIHN0eWxlPVwiYWxpZ24tc2VsZjogY2VudGVyXCI+6L2s5Li65YWs5byAPC90ZXh0PlxuICAgICAgPC92aWV3PlxuICAgIDwvdmlldz5cblxuICAgIDx2aWV3IGNsYXNzPVwiXCIgc3R5bGU9XCJwYWRkaW5nOiAwIDIwcnB4XCI+XG4gICAgICA8IS0tIDpjbGFzcz1cInsnYnRuLXByZXBsYXknOiFwcmVwbGF5VG91Y2hlZCwgJ2J0bi1wcmVwbGF5LXRvdWNoZWQnOiBwcmVwbGF5VG91Y2hlZH1cIlxuXHRcdFx0QGNsaWNrPVwicHJldmlld1wiXG5cdFx0XHRAdG91Y2hzdGFydD1cInRvdWNoc3RhcnRQcmVwbGF5XCIgXG5cdFx0XHRAdG91Y2hlbmQ9XCJ0b3VjaGVuZFByZXBsYXlcIiAtLT5cblxuICAgICAgPHZpZXdcbiAgICAgICAgOmNsYXNzPVwie1xuICAgICAgICAgICdidG4tY2FuY2VsJzogIWNhbmNlbFRvdWNoZWQsXG4gICAgICAgICAgJ2J0bi1jYW5jZWwtdG91Y2hlZCc6IGNhbmNlbFRvdWNoZWQsXG4gICAgICAgIH1cIlxuICAgICAgICBAY2xpY2s9XCJjbG9zZVwiXG4gICAgICAgIEB0b3VjaHN0YXJ0PVwidG91Y2hzdGFydENhbmNlbFwiXG4gICAgICAgIEB0b3VjaGVuZD1cInRvdWNoZW5kQ2FuY2VsXCJcbiAgICAgICAgc3R5bGU9XCJcbiAgICAgICAgICBoZWlnaHQ6IDUwcHg7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgIGJvcmRlci13aWR0aDogMXJweDtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgICAgICBcIlxuICAgICAgPlxuICAgICAgICA8dGV4dFxuICAgICAgICAgIGNsYXNzPVwiXCJcbiAgICAgICAgICBzdHlsZT1cIlxuICAgICAgICAgICAgY29sb3I6ICNmZmZmZmY7XG4gICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gICAgICAgICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gICAgICAgICAgXCJcbiAgICAgICAgICA+5Y+W5raIPC90ZXh0XG4gICAgICAgID5cbiAgICAgIDwvdmlldz5cbiAgICA8L3ZpZXc+XG5cbiAgICA8IS0tIOS4vuaKpeinhumikeW8ueeqlyAtLT5cbiAgICA8dW5pLXBvcHVwIHJlZj1cInJlcG9ydFBvcHVwXCIgdHlwZT1cImNlbnRlclwiIDptYXNrLWNsaWNrPVwiZmFsc2VcIj5cbiAgICAgIDx2aWV3XG4gICAgICAgIGNsYXNzPVwicmVwb3J0LWRpYWxvZ1wiXG4gICAgICAgIHN0eWxlPVwiXG4gICAgICAgICAgd2lkdGg6IDY4MHJweDtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWExYTFhO1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDIwcnB4O1xuICAgICAgICAgIHBhZGRpbmc6IDQwcnB4O1xuICAgICAgICBcIlxuICAgICAgICBAY2xpY2suc3RvcFxuICAgICAgPlxuICAgICAgICA8dmlldyBjbGFzcz1cInJlcG9ydC10aXRsZVwiPlxuICAgICAgICAgIDx0ZXh0IGNsYXNzPVwicmVwb3J0LXRpdGxlLXRleHRcIj7kuL7miqXop4bpopE8L3RleHQ+XG4gICAgICAgICAgPGltYWdlXG4gICAgICAgICAgICBzcmM9XCIvc3RhdGljL2ltYWdlcy9pY29uLWNsb3NlLnBuZ1wiXG4gICAgICAgICAgICBjbGFzcz1cInJlcG9ydC1jbG9zZS1pY29uXCJcbiAgICAgICAgICAgIEBjbGljaz1cImNsb3NlUmVwb3J0RGlhbG9nXCJcbiAgICAgICAgICA+PC9pbWFnZT5cbiAgICAgICAgPC92aWV3PlxuICAgICAgICA8dmlldyBjbGFzcz1cInJlcG9ydC1jb250ZW50XCI+XG4gICAgICAgICAgPHZpZXcgY2xhc3M9XCJyZXBvcnQtaXRlbVwiPlxuICAgICAgICAgICAgPHRleHQgY2xhc3M9XCJyZXBvcnQtbGFiZWxcIj7kuL7miqXljp/lm6DvvJo8L3RleHQ+XG4gICAgICAgICAgICA8cGlja2VyXG4gICAgICAgICAgICAgIG1vZGU9XCJzZWxlY3RvclwiXG4gICAgICAgICAgICAgIDpyYW5nZT1cInJlcG9ydFJlYXNvbnNcIlxuICAgICAgICAgICAgICA6dmFsdWU9XCJzZWxlY3RlZFJlYXNvbkluZGV4XCJcbiAgICAgICAgICAgICAgQGNoYW5nZT1cIm9uUmVhc29uQ2hhbmdlXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPHZpZXcgY2xhc3M9XCJyZXBvcnQtcGlja2VyXCIgQGNsaWNrLnN0b3A+XG4gICAgICAgICAgICAgICAgPHRleHRcbiAgICAgICAgICAgICAgICAgIDpjbGFzcz1cIlxuICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZFJlYXNvbkluZGV4ID49IDBcbiAgICAgICAgICAgICAgICAgICAgICA/ICdyZXBvcnQtcGlja2VyLXRleHQnXG4gICAgICAgICAgICAgICAgICAgICAgOiAncmVwb3J0LXBpY2tlci1wbGFjZWhvbGRlcidcbiAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAge3tcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRSZWFzb25JbmRleCA+PSAwXG4gICAgICAgICAgICAgICAgICAgICAgPyByZXBvcnRSZWFzb25zW3NlbGVjdGVkUmVhc29uSW5kZXhdXG4gICAgICAgICAgICAgICAgICAgICAgOiBcIuivt+mAieaLqeS4vuaKpeWOn+WboFwiXG4gICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgIDwvdGV4dD5cbiAgICAgICAgICAgICAgICA8dGV4dCBjbGFzcz1cInJlcG9ydC1waWNrZXItYXJyb3dcIj7ilrw8L3RleHQ+XG4gICAgICAgICAgICAgIDwvdmlldz5cbiAgICAgICAgICAgIDwvcGlja2VyPlxuICAgICAgICAgIDwvdmlldz5cbiAgICAgICAgICA8dmlldyBjbGFzcz1cInJlcG9ydC1pdGVtXCI+XG4gICAgICAgICAgICA8dGV4dCBjbGFzcz1cInJlcG9ydC1sYWJlbFwiPuivpue7huaPj+i/sO+8mjwvdGV4dD5cbiAgICAgICAgICAgIDx0ZXh0YXJlYVxuICAgICAgICAgICAgICBjbGFzcz1cInJlcG9ydC10ZXh0YXJlYVwiXG4gICAgICAgICAgICAgIHN0eWxlPVwiXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzJhMmEyYTtcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHJweDtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAyMHJweDtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDI4cnB4O1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwcnB4O1xuICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIuivt+ivpue7huaPj+i/sOS4vuaKpeWOn+WboO+8iOmAieWhq++8jOacgOWkmjUwMOWtl++8iVwiXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyLXN0eWxlPVwiY29sb3I6ICM5OTk5OTlcIlxuICAgICAgICAgICAgICB2LW1vZGVsPVwicmVwb3J0RGVzY3JpcHRpb25cIlxuICAgICAgICAgICAgICBtYXhsZW5ndGg9XCI1MDBcIlxuICAgICAgICAgICAgPjwvdGV4dGFyZWE+XG4gICAgICAgICAgICA8dGV4dCBjbGFzcz1cInJlcG9ydC1jaGFyLWNvdW50XCJcbiAgICAgICAgICAgICAgPnt7IHJlcG9ydERlc2NyaXB0aW9uLmxlbmd0aCB9fS81MDA8L3RleHRcbiAgICAgICAgICAgID5cbiAgICAgICAgICA8L3ZpZXc+XG4gICAgICAgIDwvdmlldz5cbiAgICAgICAgPHZpZXcgY2xhc3M9XCJyZXBvcnQtYnV0dG9uc1wiPlxuICAgICAgICAgIDx2aWV3IGNsYXNzPVwicmVwb3J0LWJ0biByZXBvcnQtYnRuLWNhbmNlbFwiIEBjbGljaz1cImNsb3NlUmVwb3J0RGlhbG9nXCI+XG4gICAgICAgICAgICA8dGV4dCBjbGFzcz1cInJlcG9ydC1idG4tdGV4dFwiPuWPlua2iDwvdGV4dD5cbiAgICAgICAgICA8L3ZpZXc+XG4gICAgICAgICAgPHZpZXcgY2xhc3M9XCJyZXBvcnQtYnRuIHJlcG9ydC1idG4tc3VibWl0XCIgQGNsaWNrPVwic3VibWl0UmVwb3J0XCI+XG4gICAgICAgICAgICA8dGV4dCBjbGFzcz1cInJlcG9ydC1idG4tdGV4dFwiPuaPkOS6pDwvdGV4dD5cbiAgICAgICAgICA8L3ZpZXc+XG4gICAgICAgIDwvdmlldz5cbiAgICAgIDwvdmlldz5cbiAgICA8L3VuaS1wb3B1cD5cbiAgPC92aWV3PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbnZhciBhcHAgPSBnZXRBcHAoKTtcbmltcG9ydCBwb3B1cCBmcm9tIFwiLi4vdW5pLXBvcHVwL3BvcHVwLmpzXCI7XG5leHBvcnQgZGVmYXVsdCB7XG4gIG5hbWU6IFwiVW5pUG9wdXBTaGFyZVwiLFxuICBtaXhpbnM6IFtwb3B1cF0sXG4gIGVtaXRzOiBbXCJzZWxlY3RcIl0sXG4gIHByb3BzOiB7XG4gICAgdGl0bGU6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIGRlZmF1bHQ6IFwiXCIsXG4gICAgfSxcbiAgICBiZWZvcmVDbG9zZToge1xuICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgIGRlZmF1bHQ6IGZhbHNlLFxuICAgIH0sXG4gICAgdGhpc1Zsb2dlcklkOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICBkZWZhdWx0OiBcIlwiLFxuICAgIH0sXG4gICAgdGhpc1Zsb2dJZDoge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgZGVmYXVsdDogXCJcIixcbiAgICB9LFxuICAgIHZsb2dVcmw6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIGRlZmF1bHQ6IFwiXCIsXG4gICAgfSxcbiAgICBpc1ByaXZhdGU6IHtcbiAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgIGRlZmF1bHQ6IDAsXG4gICAgfSxcbiAgfSxcbiAgZGF0YSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXNlcklkOiBcIlwiLFxuICAgICAgY2FuY2VsVG91Y2hlZDogZmFsc2UsXG5cbiAgICAgIC8vIOS4vuaKpeebuOWFs1xuICAgICAgcmVwb3J0UmVhc29uczogW1wi5Z6D5Zy+5L+h5oGvXCIsIFwi6Imy5oOF5L2O5L+XXCIsIFwi6L+d5rOV6L+d6KeEXCIsIFwi5Lq66Lqr5pS75Ye7XCIsIFwi5YW25LuWXCJdLFxuICAgICAgc2VsZWN0ZWRSZWFzb25JbmRleDogLTEsIC8vIOmAieS4reeahOS4vuaKpeWOn+WboOe0ouW8lVxuICAgICAgcmVwb3J0RGVzY3JpcHRpb246IFwiXCIsIC8vIOS4vuaKpeivpue7huaPj+i/sFxuICAgIH07XG4gIH0sXG4gIGNyZWF0ZWQoKSB7XG4gICAgdmFyIHVzZXJJZCA9IGdldEFwcCgpLmdldFVzZXJJbmZvU2Vzc2lvbigpLmlkO1xuICAgIHRoaXMudXNlcklkID0gdXNlcklkO1xuICB9LFxuICBtZXRob2RzOiB7XG4gICAgLyoqXG4gICAgICog6YCJ5oup5YaF5a65XG4gICAgICovXG4gICAgc2VsZWN0KGl0ZW0sIGluZGV4KSB7XG4gICAgICB0aGlzLiRlbWl0KFwic2VsZWN0XCIsIHtcbiAgICAgICAgaXRlbSxcbiAgICAgICAgaW5kZXgsXG4gICAgICB9KTtcbiAgICAgIHRoaXMuY2xvc2UoKTtcbiAgICB9LFxuICAgIC8qKlxuICAgICAqIOWFs+mXreeql+WPo1xuICAgICAqL1xuICAgIGNsb3NlKCkge1xuICAgICAgaWYgKHRoaXMuYmVmb3JlQ2xvc2UpIHJldHVybjtcbiAgICAgIHRoaXMucG9wdXAuY2xvc2UoKTtcbiAgICAgIHVuaS5zaG93VGFiQmFyKHtcbiAgICAgICAgYW5pbWF0aW9uOiB0cnVlLFxuICAgICAgfSk7XG4gICAgfSxcblxuICAgIHRvdWNoc3RhcnRDYW5jZWwoKSB7XG4gICAgICB0aGlzLmNhbmNlbFRvdWNoZWQgPSB0cnVlO1xuICAgIH0sXG5cbiAgICB0b3VjaGVuZENhbmNlbCgpIHtcbiAgICAgIHRoaXMuY2FuY2VsVG91Y2hlZCA9IGZhbHNlO1xuICAgIH0sXG5cbiAgICBkb3dubG9hZFZsb2coKSB7XG4gICAgICBjb25zb2xlLmxvZyhcImRvd25sb2FkVmxvZy4uLnRoaXNWbG9nSWQgPSBcIiArIHRoaXMudmxvZ1VybCk7XG4gICAgICB1bmkuc2hvd0xvYWRpbmcoKTtcbiAgICAgIHVuaS5kb3dubG9hZEZpbGUoe1xuICAgICAgICB1cmw6IHRoaXMudmxvZ1VybCxcbiAgICAgICAgc3VjY2VzczogKHJlcykgPT4ge1xuICAgICAgICAgIGlmIChyZXMuc3RhdHVzQ29kZSA9PT0gMjAwKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIuS4i+i9veaIkOWKn1wiKTtcbiAgICAgICAgICAgIHVuaS5zYXZlVmlkZW9Ub1Bob3Rvc0FsYnVtKHtcbiAgICAgICAgICAgICAgZmlsZVBhdGg6IHJlcy50ZW1wRmlsZVBhdGgsXG4gICAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInNhdmUgc3VjY2Vzc1wiKTtcbiAgICAgICAgICAgICAgICB1bmkuaGlkZUxvYWRpbmcoKTtcbiAgICAgICAgICAgICAgICB1bmkuc2hvd1RvYXN0KHtcbiAgICAgICAgICAgICAgICAgIHRpdGxlOiBcIuS/neWtmOaIkOWKn37vvIFcIixcbiAgICAgICAgICAgICAgICAgIGR1cmF0aW9uOiA1MDAwLFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgfSk7XG4gICAgfSxcblxuICAgIGNvcHlMaW5rKCkge1xuICAgICAgdW5pLnNldENsaXBib2FyZERhdGEoe1xuICAgICAgICBkYXRhOiB0aGlzLnZsb2dVcmwsXG4gICAgICAgIHN1Y2Nlc3M6ICgpID0+IHtcbiAgICAgICAgICB1bmkuc2hvd1RvYXN0KHtcbiAgICAgICAgICAgIC8v5o+Q56S6XG4gICAgICAgICAgICB0aXRsZTogXCLlpI3liLbmiJDlip9cIixcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSxcbiAgICAgIH0pO1xuICAgIH0sXG5cbiAgICBnb3RvUVJDb2RlKCkge1xuICAgICAgdW5pLm5hdmlnYXRlVG8oe1xuICAgICAgICB1cmw6IFwiL3BhZ2VzL3FyY29kZS9xcmNvZGU/dmxvZ0lkPVwiICsgdGhpcy50aGlzVmxvZ0lkLFxuICAgICAgfSk7XG4gICAgfSxcblxuICAgIGNoYW5nZVZsb2dUb1B1YmxpYygpIHtcbiAgICAgIHZhciB2bG9nSWQgPSB0aGlzLnRoaXNWbG9nSWQ7XG4gICAgICB2YXIgbWUgPSB0aGlzO1xuICAgICAgdmFyIHVzZXJJZCA9IGdldEFwcCgpLmdldFVzZXJJbmZvU2Vzc2lvbigpLmlkO1xuICAgICAgdmFyIHNlcnZlclVybCA9IGFwcC5nbG9iYWxEYXRhLnNlcnZlclVybDtcbiAgICAgIHVuaS5yZXF1ZXN0KHtcbiAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgICAgaGVhZGVyOiB7XG4gICAgICAgICAgaGVhZGVyVXNlcklkOiB1c2VySWQsXG4gICAgICAgICAgaGVhZGVyVXNlclRva2VuOiBhcHAuZ2V0VXNlclNlc3Npb25Ub2tlbigpLFxuICAgICAgICB9LFxuICAgICAgICB1cmw6XG4gICAgICAgICAgc2VydmVyVXJsICtcbiAgICAgICAgICBcIi92bG9nL2NoYW5nZVRvUHVibGljP3VzZXJJZD1cIiArXG4gICAgICAgICAgdXNlcklkICtcbiAgICAgICAgICBcIiZ2bG9nSWQ9XCIgK1xuICAgICAgICAgIHZsb2dJZCxcbiAgICAgICAgc3VjY2VzcyhyZXN1bHQpIHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHQpO1xuXG4gICAgICAgICAgaWYgKHJlc3VsdC5kYXRhLnN0YXR1cyA9PSAyMDApIHtcbiAgICAgICAgICAgIHVuaS5zaG93VG9hc3Qoe1xuICAgICAgICAgICAgICB0aXRsZTogXCLorr7nva7lrozmr5V+XCIsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICB9KTtcbiAgICB9LFxuXG4gICAgY2hhbmdlVmxvZ1RvUHJpdmF0ZSgpIHtcbiAgICAgIHZhciB2bG9nSWQgPSB0aGlzLnRoaXNWbG9nSWQ7XG4gICAgICB2YXIgbWUgPSB0aGlzO1xuICAgICAgdmFyIHVzZXJJZCA9IGdldEFwcCgpLmdldFVzZXJJbmZvU2Vzc2lvbigpLmlkO1xuICAgICAgdmFyIHNlcnZlclVybCA9IGFwcC5nbG9iYWxEYXRhLnNlcnZlclVybDtcbiAgICAgIHVuaS5yZXF1ZXN0KHtcbiAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgICAgaGVhZGVyOiB7XG4gICAgICAgICAgaGVhZGVyVXNlcklkOiB1c2VySWQsXG4gICAgICAgICAgaGVhZGVyVXNlclRva2VuOiBhcHAuZ2V0VXNlclNlc3Npb25Ub2tlbigpLFxuICAgICAgICB9LFxuICAgICAgICB1cmw6XG4gICAgICAgICAgc2VydmVyVXJsICtcbiAgICAgICAgICBcIi92bG9nL2NoYW5nZVRvUHJpdmF0ZT91c2VySWQ9XCIgK1xuICAgICAgICAgIHVzZXJJZCArXG4gICAgICAgICAgXCImdmxvZ0lkPVwiICtcbiAgICAgICAgICB2bG9nSWQsXG4gICAgICAgIHN1Y2Nlc3MocmVzdWx0KSB7XG4gICAgICAgICAgY29uc29sZS5sb2cocmVzdWx0KTtcblxuICAgICAgICAgIGlmIChyZXN1bHQuZGF0YS5zdGF0dXMgPT0gMjAwKSB7XG4gICAgICAgICAgICB1bmkuc2hvd1RvYXN0KHtcbiAgICAgICAgICAgICAgdGl0bGU6IFwi6K6+572u5a6M5q+VflwiLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgfSk7XG4gICAgfSxcblxuICAgIC8vIOaYvuekuuS4vuaKpeW8ueeql1xuICAgIHNob3dSZXBvcnREaWFsb2coKSB7XG4gICAgICB2YXIgbWUgPSB0aGlzO1xuXG4gICAgICAvLyDmo4Dmn6XmmK/lkKbnmbvlvZVcbiAgICAgIHZhciBteVVzZXJJbmZvID0gZ2V0QXBwKCkuZ2V0VXNlckluZm9TZXNzaW9uKCk7XG4gICAgICBpZiAobXlVc2VySW5mbyA9PSBudWxsKSB7XG4gICAgICAgIHVuaS5zaG93VGFiQmFyKHtcbiAgICAgICAgICBhbmltYXRpb246IGZhbHNlLFxuICAgICAgICB9KTtcbiAgICAgICAgdW5pLnNob3dUb2FzdCh7XG4gICAgICAgICAgZHVyYXRpb246IDMwMDAsXG4gICAgICAgICAgdGl0bGU6IFwi6K+355m75b2VflwiLFxuICAgICAgICAgIGljb246IFwibm9uZVwiLFxuICAgICAgICB9KTtcbiAgICAgICAgdW5pLm5hdmlnYXRlVG8oe1xuICAgICAgICAgIHVybDogXCIuLi9sb2dpblJlZ2lzdC9sb2dpblJlZ2lzdFwiLFxuICAgICAgICAgIGFuaW1hdGlvblR5cGU6IFwic2xpZGUtaW4tYm90dG9tXCIsXG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIG1lLnNlbGVjdGVkUmVhc29uSW5kZXggPSAtMTtcbiAgICAgIG1lLnJlcG9ydERlc2NyaXB0aW9uID0gXCJcIjtcbiAgICAgIG1lLiRyZWZzLnJlcG9ydFBvcHVwLm9wZW4oKTtcbiAgICB9LFxuXG4gICAgLy8g5YWz6Zet5Li+5oql5by556qXXG4gICAgY2xvc2VSZXBvcnREaWFsb2coKSB7XG4gICAgICB0aGlzLiRyZWZzLnJlcG9ydFBvcHVwLmNsb3NlKCk7XG4gICAgICB0aGlzLnNlbGVjdGVkUmVhc29uSW5kZXggPSAtMTtcbiAgICAgIHRoaXMucmVwb3J0RGVzY3JpcHRpb24gPSBcIlwiO1xuICAgIH0sXG5cbiAgICAvLyDpgInmi6nkuL7miqXljp/lm6BcbiAgICBvblJlYXNvbkNoYW5nZShlKSB7XG4gICAgICB0aGlzLnNlbGVjdGVkUmVhc29uSW5kZXggPSBlLmRldGFpbC52YWx1ZTtcbiAgICB9LFxuXG4gICAgLy8g5o+Q5Lqk5Li+5oqlXG4gICAgc3VibWl0UmVwb3J0KCkge1xuICAgICAgdmFyIG1lID0gdGhpcztcblxuICAgICAgLy8g6aqM6K+B5Li+5oql5Y6f5ZugXG4gICAgICBpZiAobWUuc2VsZWN0ZWRSZWFzb25JbmRleCA8IDApIHtcbiAgICAgICAgdW5pLnNob3dUb2FzdCh7XG4gICAgICAgICAgdGl0bGU6IFwi6K+36YCJ5oup5Li+5oql5Y6f5ZugXCIsXG4gICAgICAgICAgaWNvbjogXCJub25lXCIsXG4gICAgICAgICAgZHVyYXRpb246IDIwMDAsXG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHZhciBteVVzZXJJbmZvID0gZ2V0QXBwKCkuZ2V0VXNlckluZm9TZXNzaW9uKCk7XG4gICAgICBpZiAobXlVc2VySW5mbyA9PSBudWxsKSB7XG4gICAgICAgIHVuaS5zaG93VG9hc3Qoe1xuICAgICAgICAgIHRpdGxlOiBcIuivt+eZu+W9lX5cIixcbiAgICAgICAgICBpY29uOiBcIm5vbmVcIixcbiAgICAgICAgICBkdXJhdGlvbjogMzAwMCxcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdmFyIHJlcG9ydGVySWQgPSBteVVzZXJJbmZvLmlkO1xuICAgICAgdmFyIHJlYXNvbiA9IG1lLnJlcG9ydFJlYXNvbnNbbWUuc2VsZWN0ZWRSZWFzb25JbmRleF07XG4gICAgICB2YXIgZGVzY3JpcHRpb24gPSBtZS5yZXBvcnREZXNjcmlwdGlvbiB8fCBcIlwiO1xuXG4gICAgICAvLyDmnoTlu7rkuL7miqXmlbDmja5cbiAgICAgIHZhciByZXBvcnREYXRhID0ge1xuICAgICAgICByZXBvcnRUeXBlOiBcIjFcIiwgLy8gMeihqOekuuinhumikVxuICAgICAgICB0YXJnZXRJZDogbWUudGhpc1Zsb2dJZCxcbiAgICAgICAgcmVhc29uOiByZWFzb24sXG4gICAgICAgIGRlc2NyaXB0aW9uOiBkZXNjcmlwdGlvbixcbiAgICAgICAgcmVwb3J0ZXJJZDogcmVwb3J0ZXJJZCxcbiAgICAgIH07XG5cbiAgICAgIGNvbnNvbGUubG9nKFwi5o+Q5Lqk5Li+5oql5pWw5o2u77yaXCIsIHJlcG9ydERhdGEpO1xuXG4gICAgICB2YXIgc2VydmVyVXJsID0gYXBwLmdsb2JhbERhdGEuc2VydmVyVXJsO1xuICAgICAgdW5pLnJlcXVlc3Qoe1xuICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgICBoZWFkZXI6IHtcbiAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgICAgICBoZWFkZXJVc2VySWQ6IHJlcG9ydGVySWQsXG4gICAgICAgICAgaGVhZGVyVXNlclRva2VuOiBhcHAuZ2V0VXNlclNlc3Npb25Ub2tlbigpLFxuICAgICAgICB9LFxuICAgICAgICB1cmw6IHNlcnZlclVybCArIFwiL3JlcG9ydC92bG9nXCIsXG4gICAgICAgIGRhdGE6IHJlcG9ydERhdGEsXG4gICAgICAgIHN1Y2Nlc3MocmVzdWx0KSB7XG4gICAgICAgICAgY29uc29sZS5sb2coXCLkuL7miqXlk43lupTvvJpcIiwgcmVzdWx0KTtcblxuICAgICAgICAgIGlmIChyZXN1bHQuZGF0YS5zdGF0dXMgPT0gMjAwKSB7XG4gICAgICAgICAgICB1bmkuc2hvd1RvYXN0KHtcbiAgICAgICAgICAgICAgdGl0bGU6IFwi5Li+5oql5oiQ5YqfIVwiLFxuICAgICAgICAgICAgICBpY29uOiBcInN1Y2Nlc3NcIixcbiAgICAgICAgICAgICAgZHVyYXRpb246IDIwMDAsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIG1lLmNsb3NlUmVwb3J0RGlhbG9nKCk7XG4gICAgICAgICAgICAvLyDlhbPpl63liIbkuqvlvLnnqpdcbiAgICAgICAgICAgIG1lLmNsb3NlKCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHVuaS5zaG93VG9hc3Qoe1xuICAgICAgICAgICAgICB0aXRsZTogcmVzdWx0LmRhdGEubXNnIHx8IFwi5Li+5oql5aSx6LSl77yM6K+36YeN6K+VXCIsXG4gICAgICAgICAgICAgIGljb246IFwibm9uZVwiLFxuICAgICAgICAgICAgICBkdXJhdGlvbjogMzAwMCxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgZmFpbChlcnIpIHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKFwi5Li+5oql6K+35rGC5aSx6LSl77yaXCIsIGVycik7XG4gICAgICAgICAgdW5pLnNob3dUb2FzdCh7XG4gICAgICAgICAgICB0aXRsZTogXCLnvZHnu5zplJnor6/vvIzor7fph43or5VcIixcbiAgICAgICAgICAgIGljb246IFwibm9uZVwiLFxuICAgICAgICAgICAgZHVyYXRpb246IDMwMDAsXG4gICAgICAgICAgfSk7XG4gICAgICAgIH0sXG4gICAgICB9KTtcbiAgICB9LFxuICB9LFxufTtcbjwvc2NyaXB0PlxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///219\n");

/***/ }),
/* 220 */
/*!*************************************************************************************************************************************************************!*\
  !*** C:/Users/TAOER/Desktop/ShayuVideo/ShayuVideoAPP/uni_modules/uni-popup/components/uni-popup-share/uni-popup-share.vue?vue&type=style&index=0&lang=css& ***!
  \*************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_popup_share_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-0-1!./node_modules/postcss-loader/src??ref--10-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./uni-popup-share.vue?vue&type=style&index=0&lang=css& */ 221);
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_popup_share_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_popup_share_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_popup_share_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_popup_share_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_popup_share_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 221 */
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-0-1!./node_modules/postcss-loader/src??ref--10-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!C:/Users/TAOER/Desktop/ShayuVideo/ShayuVideoAPP/uni_modules/uni-popup/components/uni-popup-share/uni-popup-share.vue?vue&type=style&index=0&lang=css& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  ".page": {
    "": {
      "backgroundColor": [
        "#000000",
        0,
        0,
        0
      ],
      "opacity": [
        0.9,
        0,
        0,
        0
      ]
    }
  },
  ".btn-cancel": {
    "": {
      "backgroundColor": [
        "#1d1d1e",
        0,
        0,
        1
      ],
      "borderColor": [
        "#3a3a3d",
        0,
        0,
        1
      ]
    }
  },
  ".btn-cancel-touched": {
    "": {
      "backgroundColor": [
        "#515156",
        0,
        0,
        2
      ],
      "borderColor": [
        "#2b2b2f",
        0,
        0,
        2
      ]
    }
  },
  ".all-box": {
    "": {
      "display": [
        "flex",
        0,
        0,
        3
      ],
      "flexDirection": [
        "row",
        0,
        0,
        3
      ],
      "justifyContent": [
        "space-around",
        0,
        0,
        3
      ],
      "height": [
        "280rpx",
        0,
        0,
        3
      ]
    }
  },
  ".share-item": {
    "": {
      "display": [
        "flex",
        0,
        0,
        4
      ],
      "flexDirection": [
        "column",
        0,
        0,
        4
      ],
      "marginTop": [
        "60rpx",
        0,
        0,
        4
      ]
    }
  },
  ".icon-wrapper": {
    "": {
      "width": [
        "120rpx",
        0,
        0,
        5
      ],
      "height": [
        "120rpx",
        0,
        0,
        5
      ],
      "backgroundColor": [
        "#343437",
        0,
        0,
        5
      ],
      "borderRadius": [
        "100",
        0,
        0,
        5
      ],
      "display": [
        "flex",
        0,
        0,
        5
      ],
      "flexDirection": [
        "row",
        0,
        0,
        5
      ],
      "justifyContent": [
        "center",
        0,
        0,
        5
      ],
      "opacity": [
        0.8,
        0,
        0,
        5
      ]
    }
  },
  ".icon-image": {
    "": {
      "width": [
        "60rpx",
        0,
        0,
        6
      ],
      "height": [
        "60rpx",
        0,
        0,
        6
      ]
    }
  },
  ".icon-tag-text": {
    "": {
      "color": [
        "#ffffff",
        0,
        0,
        7
      ],
      "fontSize": [
        "14",
        0,
        0,
        7
      ],
      "marginTop": [
        "10rpx",
        0,
        0,
        7
      ]
    }
  },
  ".report-dialog": {
    "": {
      "width": [
        "680rpx",
        0,
        0,
        9
      ],
      "backgroundColor": [
        "#1a1a1a",
        0,
        0,
        9
      ],
      "borderRadius": [
        "20rpx",
        0,
        0,
        9
      ],
      "paddingTop": [
        "40rpx",
        0,
        0,
        9
      ],
      "paddingRight": [
        "40rpx",
        0,
        0,
        9
      ],
      "paddingBottom": [
        "40rpx",
        0,
        0,
        9
      ],
      "paddingLeft": [
        "40rpx",
        0,
        0,
        9
      ]
    }
  },
  ".report-title": {
    "": {
      "display": [
        "flex",
        0,
        0,
        10
      ],
      "flexDirection": [
        "row",
        0,
        0,
        10
      ],
      "justifyContent": [
        "space-between",
        0,
        0,
        10
      ],
      "alignItems": [
        "center",
        0,
        0,
        10
      ],
      "marginBottom": [
        "40rpx",
        0,
        0,
        10
      ]
    }
  },
  ".report-title-text": {
    "": {
      "fontSize": [
        "36rpx",
        0,
        0,
        11
      ],
      "color": [
        "#ffffff",
        0,
        0,
        11
      ],
      "fontWeight": [
        "600",
        0,
        0,
        11
      ]
    }
  },
  ".report-close-icon": {
    "": {
      "width": [
        "40rpx",
        0,
        0,
        12
      ],
      "height": [
        "40rpx",
        0,
        0,
        12
      ],
      "opacity": [
        0.8,
        0,
        0,
        12
      ]
    }
  },
  ".report-content": {
    "": {
      "display": [
        "flex",
        0,
        0,
        13
      ],
      "flexDirection": [
        "column",
        0,
        0,
        13
      ]
    }
  },
  ".report-item": {
    "": {
      "display": [
        "flex",
        0,
        0,
        14
      ],
      "flexDirection": [
        "column",
        0,
        0,
        14
      ],
      "marginBottom": [
        "30rpx",
        0,
        0,
        14
      ]
    }
  },
  ".report-label": {
    "": {
      "fontSize": [
        "28rpx",
        0,
        0,
        15
      ],
      "color": [
        "#ffffff",
        0,
        0,
        15
      ],
      "marginBottom": [
        "20rpx",
        0,
        0,
        15
      ]
    }
  },
  ".report-picker": {
    "": {
      "display": [
        "flex",
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
      "justifyContent": [
        "space-between",
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
      "backgroundColor": [
        "#2a2a2a",
        0,
        0,
        16
      ],
      "borderRadius": [
        "10rpx",
        0,
        0,
        16
      ],
      "paddingTop": [
        "20rpx",
        0,
        0,
        16
      ],
      "paddingRight": [
        "20rpx",
        0,
        0,
        16
      ],
      "paddingBottom": [
        "20rpx",
        0,
        0,
        16
      ],
      "paddingLeft": [
        "20rpx",
        0,
        0,
        16
      ],
      "height": [
        "80rpx",
        0,
        0,
        16
      ]
    }
  },
  ".report-picker-text": {
    "": {
      "fontSize": [
        "28rpx",
        0,
        0,
        17
      ],
      "color": [
        "#ffffff",
        0,
        0,
        17
      ]
    }
  },
  ".report-picker-placeholder": {
    "": {
      "fontSize": [
        "28rpx",
        0,
        0,
        18
      ],
      "color": [
        "#999999",
        0,
        0,
        18
      ]
    }
  },
  ".report-picker-arrow": {
    "": {
      "fontSize": [
        "24rpx",
        0,
        0,
        19
      ],
      "color": [
        "#999999",
        0,
        0,
        19
      ]
    }
  },
  ".report-textarea": {
    "": {
      "width": [
        100,
        0,
        0,
        20
      ],
      "height": [
        "250rpx",
        0,
        0,
        20
      ],
      "backgroundColor": [
        "#2a2a2a",
        0,
        0,
        20
      ],
      "borderRadius": [
        "10rpx",
        0,
        0,
        20
      ],
      "paddingTop": [
        "20rpx",
        0,
        0,
        20
      ],
      "paddingRight": [
        "20rpx",
        0,
        0,
        20
      ],
      "paddingBottom": [
        "20rpx",
        0,
        0,
        20
      ],
      "paddingLeft": [
        "20rpx",
        0,
        0,
        20
      ],
      "fontSize": [
        "28rpx",
        0,
        0,
        20
      ],
      "color": [
        "#ffffff",
        0,
        0,
        20
      ],
      "marginBottom": [
        "10rpx",
        0,
        0,
        20
      ]
    }
  },
  ".report-char-count": {
    "": {
      "fontSize": [
        "24rpx",
        0,
        0,
        21
      ],
      "color": [
        "#999999",
        0,
        0,
        21
      ],
      "textAlign": [
        "right",
        0,
        0,
        21
      ]
    }
  },
  ".report-buttons": {
    "": {
      "display": [
        "flex",
        0,
        0,
        22
      ],
      "flexDirection": [
        "row",
        0,
        0,
        22
      ],
      "justifyContent": [
        "space-between",
        0,
        0,
        22
      ],
      "marginTop": [
        "40rpx",
        0,
        0,
        22
      ]
    }
  },
  ".report-btn": {
    "": {
      "flex": [
        1,
        0,
        0,
        23
      ],
      "height": [
        "80rpx",
        0,
        0,
        23
      ],
      "borderRadius": [
        "10rpx",
        0,
        0,
        23
      ],
      "display": [
        "flex",
        0,
        0,
        23
      ],
      "flexDirection": [
        "row",
        0,
        0,
        23
      ],
      "justifyContent": [
        "center",
        0,
        0,
        23
      ],
      "alignItems": [
        "center",
        0,
        0,
        23
      ],
      "marginTop": [
        0,
        0,
        0,
        23
      ],
      "marginRight": [
        "10rpx",
        0,
        0,
        23
      ],
      "marginBottom": [
        0,
        0,
        0,
        23
      ],
      "marginLeft": [
        "10rpx",
        0,
        0,
        23
      ]
    }
  },
  ".report-btn-cancel": {
    "": {
      "backgroundColor": [
        "#3a3a3a",
        0,
        0,
        24
      ]
    }
  },
  ".report-btn-submit": {
    "": {
      "backgroundColor": [
        "#ef274d",
        0,
        0,
        25
      ]
    }
  },
  ".report-btn-text": {
    "": {
      "fontSize": [
        "32rpx",
        0,
        0,
        26
      ],
      "color": [
        "#ffffff",
        0,
        0,
        26
      ]
    }
  },
  "@VERSION": 2
}

/***/ }),
/* 222 */,
/* 223 */,
/* 224 */,
/* 225 */,
/* 226 */,
/* 227 */,
/* 228 */,
/* 229 */,
/* 230 */,
/* 231 */,
/* 232 */,
/* 233 */,
/* 234 */,
/* 235 */,
/* 236 */
/*!************************************************************************************************!*\
  !*** C:/Users/TAOER/Desktop/ShayuVideo/ShayuVideoAPP/main.js?{"page":"pages%2Findex%2Findex"} ***!
  \************************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var uni_app_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uni-app-style */ 1);\n/* harmony import */ var uni_app_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(uni_app_style__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var uni_polyfill__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! uni-polyfill */ 4);\n/* harmony import */ var uni_polyfill__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(uni_polyfill__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _pages_index_index_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/index/index.nvue?mpType=page */ 237);\n\n        \n        \n        \n        \n        _pages_index_index_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_2__[\"default\"].mpType = 'page'\n        _pages_index_index_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_2__[\"default\"].route = 'pages/index/index'\n        _pages_index_index_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_2__[\"default\"].el = '#root'\n        new Vue(_pages_index_index_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_2__[\"default\"])\n        //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBRUEsUUFBOEI7QUFDOUIsUUFBNkI7QUFDN0IsUUFBOEQ7QUFDOUQsUUFBUSwyRUFBRztBQUNYLFFBQVEsMkVBQUc7QUFDWCxRQUFRLDJFQUFHO0FBQ1gsZ0JBQWdCLDJFQUFHIiwiZmlsZSI6IjIzNi5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgICAgICBcbiAgICAgICAgaW1wb3J0ICd1bmktYXBwLXN0eWxlJ1xuICAgICAgICBpbXBvcnQgJ3VuaS1wb2x5ZmlsbCdcbiAgICAgICAgaW1wb3J0IEFwcCBmcm9tICcuL3BhZ2VzL2luZGV4L2luZGV4Lm52dWU/bXBUeXBlPXBhZ2UnXG4gICAgICAgIEFwcC5tcFR5cGUgPSAncGFnZSdcbiAgICAgICAgQXBwLnJvdXRlID0gJ3BhZ2VzL2luZGV4L2luZGV4J1xuICAgICAgICBBcHAuZWwgPSAnI3Jvb3QnXG4gICAgICAgIG5ldyBWdWUoQXBwKVxuICAgICAgICAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///236\n");

/***/ }),
/* 237 */
/*!******************************************************************************************!*\
  !*** C:/Users/TAOER/Desktop/ShayuVideo/ShayuVideoAPP/pages/index/index.nvue?mpType=page ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _index_nvue_vue_type_template_id_7b909402_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.nvue?vue&type=template&id=7b909402&scoped=true&mpType=page */ 238);\n/* harmony import */ var _index_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.nvue?vue&type=script&lang=js&mpType=page */ 240);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _index_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _index_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 12);\n\nvar renderjs\n\n\nfunction injectStyles (context) {\n  \n  if(!this.options.style){\n          this.options.style = {}\n      }\n      if(Vue.prototype.__merge_style && Vue.prototype.__$appStyle__){\n        Vue.prototype.__merge_style(Vue.prototype.__$appStyle__, this.options.style)\n      }\n      if(Vue.prototype.__merge_style){\n                Vue.prototype.__merge_style(__webpack_require__(/*! ./index.nvue?vue&type=style&index=0&id=7b909402&scoped=true&lang=css&mpType=page */ 256).default, this.options.style)\n            }else{\n                Object.assign(this.options.style,__webpack_require__(/*! ./index.nvue?vue&type=style&index=0&id=7b909402&scoped=true&lang=css&mpType=page */ 256).default)\n            }\n\n}\n\n/* normalize component */\n\nvar component = Object(_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _index_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _index_nvue_vue_type_template_id_7b909402_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _index_nvue_vue_type_template_id_7b909402_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  \"7b909402\",\n  \"78bab6ce\",\n  false,\n  _index_nvue_vue_type_template_id_7b909402_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ninjectStyles.call(component)\ncomponent.options.__file = \"pages/index/index.nvue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBMEk7QUFDMUk7QUFDcUU7QUFDTDtBQUNoRTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QyxtQkFBTyxDQUFDLDJGQUFrRjtBQUN0SSxhQUFhO0FBQ2IsaURBQWlELG1CQUFPLENBQUMsMkZBQWtGO0FBQzNJOztBQUVBOztBQUVBO0FBQ3FLO0FBQ3JLLGdCQUFnQiwrS0FBVTtBQUMxQixFQUFFLHVGQUFNO0FBQ1IsRUFBRSx3R0FBTTtBQUNSLEVBQUUsaUhBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsNEdBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ0E7QUFDZSxnRiIsImZpbGUiOiIyMzcuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucywgcmVjeWNsYWJsZVJlbmRlciwgY29tcG9uZW50cyB9IGZyb20gXCIuL2luZGV4Lm52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9N2I5MDk0MDImc2NvcGVkPXRydWUmbXBUeXBlPXBhZ2VcIlxudmFyIHJlbmRlcmpzXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL2luZGV4Lm52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmbXBUeXBlPXBhZ2VcIlxuZXhwb3J0ICogZnJvbSBcIi4vaW5kZXgubnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiXG5mdW5jdGlvbiBpbmplY3RTdHlsZXMgKGNvbnRleHQpIHtcbiAgXG4gIGlmKCF0aGlzLm9wdGlvbnMuc3R5bGUpe1xuICAgICAgICAgIHRoaXMub3B0aW9ucy5zdHlsZSA9IHt9XG4gICAgICB9XG4gICAgICBpZihWdWUucHJvdG90eXBlLl9fbWVyZ2Vfc3R5bGUgJiYgVnVlLnByb3RvdHlwZS5fXyRhcHBTdHlsZV9fKXtcbiAgICAgICAgVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlKFZ1ZS5wcm90b3R5cGUuX18kYXBwU3R5bGVfXywgdGhpcy5vcHRpb25zLnN0eWxlKVxuICAgICAgfVxuICAgICAgaWYoVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlKXtcbiAgICAgICAgICAgICAgICBWdWUucHJvdG90eXBlLl9fbWVyZ2Vfc3R5bGUocmVxdWlyZShcIi4vaW5kZXgubnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTdiOTA5NDAyJnNjb3BlZD10cnVlJmxhbmc9Y3NzJm1wVHlwZT1wYWdlXCIpLmRlZmF1bHQsIHRoaXMub3B0aW9ucy5zdHlsZSlcbiAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgIE9iamVjdC5hc3NpZ24odGhpcy5vcHRpb25zLnN0eWxlLHJlcXVpcmUoXCIuL2luZGV4Lm52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD03YjkwOTQwMiZzY29wZWQ9dHJ1ZSZsYW5nPWNzcyZtcFR5cGU9cGFnZVwiKS5kZWZhdWx0KVxuICAgICAgICAgICAgfVxuXG59XG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhRDpcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx2dWUtbG9hZGVyXFxcXGxpYlxcXFxydW50aW1lXFxcXGNvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBcIjdiOTA5NDAyXCIsXG4gIFwiNzhiYWI2Y2VcIixcbiAgZmFsc2UsXG4gIGNvbXBvbmVudHMsXG4gIHJlbmRlcmpzXG4pXG5cbmluamVjdFN0eWxlcy5jYWxsKGNvbXBvbmVudClcbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicGFnZXMvaW5kZXgvaW5kZXgubnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///237\n");

/***/ }),
/* 238 */
/*!************************************************************************************************************************************!*\
  !*** C:/Users/TAOER/Desktop/ShayuVideo/ShayuVideoAPP/pages/index/index.nvue?vue&type=template&id=7b909402&scoped=true&mpType=page ***!
  \************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_nvue_vue_type_template_id_7b909402_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./index.nvue?vue&type=template&id=7b909402&scoped=true&mpType=page */ 239);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_nvue_vue_type_template_id_7b909402_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_nvue_vue_type_template_id_7b909402_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_nvue_vue_type_template_id_7b909402_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_nvue_vue_type_template_id_7b909402_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 239 */
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!C:/Users/TAOER/Desktop/ShayuVideo/ShayuVideoAPP/pages/index/index.nvue?vue&type=template&id=7b909402&scoped=true&mpType=page ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
      _c(
        "view",
        { staticClass: ["page"] },
        [
          _c(
            "swiper",
            {
              style: { height: _vm.screenHeight + "px" },
              attrs: { current: _vm.curIndex },
              on: { change: _vm.changeTopTab },
            },
            [
              _c("swiper-item", [
                _c(
                  "view",
                  {
                    staticClass: ["near-by"],
                    style: { height: _vm.screenHeight + "px" },
                  },
                  [
                    _c(
                      "u-text",
                      {
                        staticClass: ["warn-info"],
                        appendAsTree: true,
                        attrs: { append: "tree" },
                      },
                      [_vm._v("暂未开放，敬请期待！")]
                    ),
                  ]
                ),
              ]),
              _c(
                "swiper-item",
                [
                  _vm.myUserInfo == null
                    ? _c(
                        "view",
                        {
                          staticClass: ["my-follow"],
                          style: { height: _vm.screenHeight + "px" },
                        },
                        [
                          _c(
                            "u-text",
                            {
                              staticClass: ["warn-info"],
                              appendAsTree: true,
                              attrs: { append: "tree" },
                            },
                            [_vm._v("请登录后查看！")]
                          ),
                        ]
                      )
                    : _vm._e(),
                  _c("video-follow-comp", {
                    ref: "videoFollowComp",
                    attrs: {
                      screenHeight: _vm.screenHeight,
                      playFollowStatus: _vm.playFollowStatus,
                      videoList: _vm.videoList,
                      refreshList: _vm.refreshList,
                      pagingList: _vm.pagingList,
                    },
                    on: {
                      showLoading: _vm.showLoading,
                      hideLoading: _vm.hideLoading,
                      letFollowVideoPause: _vm.letFollowVideoPause,
                      displayVideoPaging: _vm.displayVideoPaging,
                    },
                  }),
                ],
                1
              ),
              _c(
                "swiper-item",
                [
                  _c("video-comp", {
                    ref: "videoComp",
                    attrs: {
                      screenHeight: _vm.screenHeight,
                      playStatus: _vm.playStatus,
                      videoList: _vm.videoList,
                      refreshList: _vm.refreshList,
                      pagingList: _vm.pagingList,
                    },
                    on: {
                      showLoading: _vm.showLoading,
                      hideLoading: _vm.hideLoading,
                      displayVideoPaging: _vm.displayVideoPaging,
                    },
                  }),
                ],
                1
              ),
            ],
            1
          ),
          !_vm.isLoading
            ? _c(
                "view",
                {
                  staticClass: ["header"],
                  style: { marginTop: _vm.statusBarHeight + "px" },
                },
                [
                  _c("u-text", {
                    staticClass: ["header-left"],
                    appendAsTree: true,
                    attrs: { append: "tree" },
                  }),
                  _c("view", { staticClass: ["header-center"] }, [
                    _c(
                      "view",
                      {
                        staticClass: ["header-item"],
                        on: {
                          click: function ($event) {
                            _vm.tapFollow(0)
                          },
                        },
                      },
                      [
                        _c(
                          "u-text",
                          {
                            staticClass: ["header-item-title"],
                            appendAsTree: true,
                            attrs: { append: "tree" },
                          },
                          [_vm._v("附近")]
                        ),
                        _c("view", {
                          staticClass: ["header-item-line"],
                          class: { "activate-line": _vm.curIndex === 0 },
                        }),
                      ]
                    ),
                    _c(
                      "view",
                      {
                        staticClass: ["header-item"],
                        on: {
                          click: function ($event) {
                            _vm.tapFollow(1)
                          },
                        },
                      },
                      [
                        _c(
                          "u-text",
                          {
                            staticClass: ["header-item-title"],
                            appendAsTree: true,
                            attrs: { append: "tree" },
                          },
                          [_vm._v("关注")]
                        ),
                        _c("view", {
                          staticClass: ["header-item-line"],
                          class: { "activate-line": _vm.curIndex === 1 },
                        }),
                      ]
                    ),
                    _c(
                      "view",
                      {
                        staticClass: ["header-item"],
                        on: {
                          click: function ($event) {
                            _vm.tapFollow(2)
                          },
                        },
                      },
                      [
                        _c(
                          "u-text",
                          {
                            staticClass: ["header-item-title"],
                            appendAsTree: true,
                            attrs: { append: "tree" },
                          },
                          [_vm._v("推荐")]
                        ),
                        _c("view", {
                          staticClass: ["header-item-line"],
                          class: { "activate-line": _vm.curIndex === 2 },
                        }),
                      ]
                    ),
                  ]),
                  _c("u-image", {
                    staticClass: ["header-right-search", "normal-img"],
                    attrs: { src: "../../static/images/icon-search.png" },
                    on: { click: _vm.goSearch },
                  }),
                ],
                1
              )
            : _vm._e(),
          _vm.isLoading
            ? _c(
                "view",
                {
                  staticClass: ["header"],
                  style: { marginTop: _vm.statusBarHeight + "px" },
                },
                [
                  _c("u-text", {
                    staticClass: ["header-left"],
                    appendAsTree: true,
                    attrs: { append: "tree" },
                  }),
                  _c("view", { staticClass: ["header-center"] }, [
                    _c("view", { staticClass: ["header-item"] }, [
                      _c(
                        "u-text",
                        {
                          staticClass: ["header-refresh-title"],
                          appendAsTree: true,
                          attrs: { append: "tree" },
                        },
                        [_vm._v("下拉刷新视频")]
                      ),
                    ]),
                  ]),
                  _c("u-image", {
                    staticClass: ["header-right-search", "normal-img"],
                    attrs: { src: "../../static/images/loading.gif" },
                  }),
                ],
                1
              )
            : _vm._e(),
        ],
        1
      ),
    ]
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 240 */
/*!******************************************************************************************************************!*\
  !*** C:/Users/TAOER/Desktop/ShayuVideo/ShayuVideoAPP/pages/index/index.nvue?vue&type=script&lang=js&mpType=page ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib??ref--5-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--5-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./index.nvue?vue&type=script&lang=js&mpType=page */ 241);\n/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQSthLENBQWdCLDJkQUFHLEVBQUMiLCJmaWxlIjoiMjQwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vZCBmcm9tIFwiLSFEOlxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxiYWJlbC1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzPz9yZWYtLTUtMCFEOlxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXJcXFxcaW5kZXguanM/P3JlZi0tNS0xIUQ6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcdnVlLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2luZGV4Lm52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmbXBUeXBlPXBhZ2VcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSFEOlxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxiYWJlbC1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzPz9yZWYtLTUtMCFEOlxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXJcXFxcaW5kZXguanM/P3JlZi0tNS0xIUQ6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcdnVlLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2luZGV4Lm52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmbXBUeXBlPXBhZ2VcIiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///240\n");

/***/ }),
/* 241 */
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--5-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--5-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!C:/Users/TAOER/Desktop/ShayuVideo/ShayuVideoAPP/pages/index/index.nvue?vue&type=script&lang=js&mpType=page ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 150);\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\nvar _videoComp = _interopRequireDefault(__webpack_require__(/*! @/components/videoComp.vue */ 242));\nvar _videoFollowComp = _interopRequireDefault(__webpack_require__(/*! @/components/videoFollowComp.vue */ 249));\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\nvar system = uni.getSystemInfoSync();\nvar app = getApp();\n// import uniHeader from '@/components/header';\n// import uniFooter from '@/components/footer';\n// import uniSwiper from '@/components/swiper';\nvar _default = {\n  components: {\n    // uniHeader,\n    // uniFooter,\n    // uniSwiper,\n    videoComp: _videoComp.default,\n    videoFollowComp: _videoFollowComp.default\n  },\n  data: function data() {\n    return {\n      isLoading: false,\n      statusBarHeight: system.statusBarHeight,\n      screenHeight: system.screenHeight,\n      // screenHeight: system.safeArea.bottom,// - 50,\n      curIndex: 2,\n      playStatus: false,\n      playFollowStatus: false,\n      // videoList: getApp().getDefaultVlogList(),\t\t\t// 首页一开始查询所得的默认视频列表\n      videoList: [],\n      // 首页一开始查询所得的默认视频列表\n      refreshList: [],\n      // 下拉刷新后获得的新的列表\n      pagingList: [],\n      // 分页list\n      refresh: 0 // 从me页面传来的refresh，用于退出登录后重新刷新当前页的视频\n    };\n  },\n  onLoad: function onLoad() {\n    var have = plus.navigator.hasNotchInScreen(); // 判断是否有下巴\n  },\n\n  onTabItemTap: function onTabItemTap(e) {\n    var tabIndex = e.index;\n    // this.playStatus = tabIndex === 0 ? true : false;\n\n    // 切换视频要做暂停或播放的判断\n    var me = this;\n    if (tabIndex == 0) {\n      // 虚位以待\n    } else if (tabIndex == 1) {\n      me.playStatus = false;\n      me.playFollowStatus = true;\n    } else if (tabIndex == 2) {\n      me.playStatus = true;\n      me.playFollowStatus = false;\n    }\n  },\n  onShow: function onShow() {\n    var me = this;\n    var myUserInfo = app.getUserInfoSession();\n    this.myUserInfo = myUserInfo;\n\n    // 如果当前没有list，则relaunch\n    if (this.$refs.videoComp != undefined) {\n      var playerList = this.$refs.videoComp.playerList;\n      if (playerList != undefined && playerList.length == 0) {\n        this.$refs.videoComp.displayVideoPaging(1, true);\n      }\n    }\n\n    // 判断如果当前是tab为1或2，则播放，否则不播放\n    if (me.curIndex == 0) {\n      // 虚位以待\n    } else if (me.curIndex == 1) {\n      me.playFollowStatus = true;\n    } else if (me.curIndex == 2) {\n      me.playStatus = true;\n    }\n\n    // onShow的时候，关注的话，则重新刷一下list\n    var justFollowVlogerId = uni.getStorageSync(\"justFollowVlogerId\");\n    if (!app.isStrEmpty(justFollowVlogerId)) {\n      this.$refs.videoComp.reFollowPlayList(justFollowVlogerId);\n      uni.setStorageSync(\"justFollowVlogerId\", \"\");\n    }\n    // 取消关注也要重新刷一下list\n    var justCancelVlogerId = uni.getStorageSync(\"justCancelVlogerId\");\n    if (!app.isStrEmpty(justCancelVlogerId)) {\n      this.$refs.videoComp.reCancelPlayList(justCancelVlogerId);\n      uni.setStorageSync(\"justCancelVlogerId\", \"\");\n    }\n  },\n  onHide: function onHide() {\n    var me = this;\n    // 显示和隐藏，需要判断根据不同tab做暂停或者隐藏\n    if (me.curIndex == 0) {\n      // 虚位以待\n    } else if (me.curIndex == 1) {\n      me.playFollowStatus = false;\n    } else if (me.curIndex == 2) {\n      me.playStatus = false;\n    }\n  },\n  // 当前页下拉刷新\n  onPullDownRefresh: function onPullDownRefresh() {\n    var me = this;\n\n    // 下拉刷新判断，如果是不同tab，那么组件中刷新的请求也不同\n    if (me.curIndex == 0) {\n      // 虚位以待\n    } else if (me.curIndex == 1) {\n      this.$refs.videoFollowComp.displayVideoPaging(1, true);\n    } else if (me.curIndex == 2) {\n      this.$refs.videoComp.displayVideoPaging(1, true);\n    }\n  },\n  methods: {\n    // 前往搜索页面\n    goSearch: function goSearch() {\n      uni.navigateTo({\n        url: \"/pages/search/search\"\n      });\n    },\n    // 左滑右滑选项卡改变选中状态\n    changeTopTab: function changeTopTab(e) {\n      var current = e.detail.current;\n      this.curIndex = current;\n      this.playFollowStatus = this.curIndex === 1 ? true : false;\n      this.playStatus = this.curIndex === 2 ? true : false;\n    },\n    // 点击头部选项卡，切换页面\n    tapFollow: function tapFollow(current) {\n      this.curIndex = current;\n      this.playFollowStatus = this.curIndex === 1 ? true : false;\n      this.playStatus = this.curIndex === 2 ? true : false;\n    },\n    // 下拉刷新，改变head的字样显示\n    showLoading: function showLoading() {\n      this.isLoading = true;\n    },\n    hideLoading: function hideLoading() {\n      this.isLoading = false;\n    },\n    letFollowVideoPause: function letFollowVideoPause() {\n      this.playFollowStatus = false;\n    }\n  }\n};\nexports.default = _default;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vcGFnZXMvaW5kZXgvaW5kZXgubnZ1ZSJdLCJuYW1lcyI6WyJjb21wb25lbnRzIiwidmlkZW9Db21wIiwidmlkZW9Gb2xsb3dDb21wIiwiZGF0YSIsImlzTG9hZGluZyIsInN0YXR1c0JhckhlaWdodCIsInNjcmVlbkhlaWdodCIsImN1ckluZGV4IiwicGxheVN0YXR1cyIsInBsYXlGb2xsb3dTdGF0dXMiLCJ2aWRlb0xpc3QiLCJyZWZyZXNoTGlzdCIsInBhZ2luZ0xpc3QiLCJyZWZyZXNoIiwib25Mb2FkIiwib25UYWJJdGVtVGFwIiwibWUiLCJvblNob3ciLCJ1bmkiLCJvbkhpZGUiLCJvblB1bGxEb3duUmVmcmVzaCIsIm1ldGhvZHMiLCJnb1NlYXJjaCIsInVybCIsImNoYW5nZVRvcFRhYiIsInRhcEZvbGxvdyIsInNob3dMb2FkaW5nIiwiaGlkZUxvYWRpbmciLCJsZXRGb2xsb3dWaWRlb1BhdXNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBMkxBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU5BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQSxlQUdBO0VBQ0FBO0lBQ0E7SUFDQTtJQUNBO0lBQ0FDO0lBQ0FDO0VBQ0E7RUFDQUM7SUFDQTtNQUNBQztNQUVBQztNQUNBQztNQUNBO01BQ0FDO01BQ0FDO01BQ0FDO01BRUE7TUFDQUM7TUFBQTtNQUNBQztNQUFBO01BQ0FDO01BQUE7TUFDQUM7SUFFQTtFQUNBO0VBQ0FDO0lBQ0E7RUFDQTs7RUFDQUM7SUFDQTtJQUNBOztJQUVBO0lBQ0E7SUFDQTtNQUNBO0lBQUEsQ0FDQTtNQUNBQztNQUNBQTtJQUNBO01BQ0FBO01BQ0FBO0lBQ0E7RUFDQTtFQUNBQztJQUNBO0lBRUE7SUFDQTs7SUFHQTtJQUNBO01BQ0E7TUFDQTtRQUNBO01BQ0E7SUFDQTs7SUFHQTtJQUNBO01BQ0E7SUFBQSxDQUNBO01BQ0FEO0lBQ0E7TUFDQUE7SUFDQTs7SUFFQTtJQUNBO0lBQ0E7TUFDQTtNQUNBRTtJQUNBO0lBQ0E7SUFDQTtJQUNBO01BQ0E7TUFDQUE7SUFDQTtFQUVBO0VBQ0FDO0lBQ0E7SUFDQTtJQUNBO01BQ0E7SUFBQSxDQUNBO01BQ0FIO0lBQ0E7TUFDQUE7SUFDQTtFQUNBO0VBQ0E7RUFDQUk7SUFDQTs7SUFFQTtJQUNBO01BQ0E7SUFBQSxDQUNBO01BQ0E7SUFDQTtNQUNBO0lBQ0E7RUFFQTtFQUNBQztJQUNBO0lBQ0FDO01BQ0FKO1FBQ0FLO01BQ0E7SUFDQTtJQUVBO0lBQ0FDO01BQ0E7TUFDQTtNQUNBO01BQ0E7SUFDQTtJQUNBO0lBQ0FDO01BQ0E7TUFDQTtNQUNBO0lBQ0E7SUFFQTtJQUNBQztNQUNBO0lBQ0E7SUFDQUM7TUFDQTtJQUNBO0lBQ0FDO01BQ0E7SUFDQTtFQUNBO0FBQ0E7QUFBQSIsImZpbGUiOiIyNDEuanMiLCJzb3VyY2VzQ29udGVudCI6WyI8c3R5bGUgc2NvcGVkPlxyXG5cdC8qIGluZGV4IHN0YXJ0ICovXHJcblx0LnBhZ2Uge1xyXG5cdFx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdFx0bGVmdDogMDtcclxuXHRcdHJpZ2h0OiAwO1xyXG5cdFx0dG9wOiAwO1xyXG5cdFx0Ym90dG9tOiAwO1xyXG5cdFx0YmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDtcclxuXHR9XHJcblx0LyogaW5kZXggZW5kICovXHJcblx0XHJcblx0Lyog6aG26YOo6YCJ6aG55Y2hIHN0YXJ0ICovXHJcblx0LmhlYWRlciB7XHJcblx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0XHRsZWZ0OiAwO1xyXG5cdFx0cmlnaHQ6IDA7XHJcblx0XHRmbGV4LWRpcmVjdGlvbjogcm93O1xyXG5cdFx0aGVpZ2h0OiAxMDBycHg7XHJcblx0XHRsaW5lLWhlaWdodDogMTAwcnB4O1xyXG5cdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRcdHBhZGRpbmctbGVmdDogNDBycHg7XHJcblx0XHRwYWRkaW5nLXJpZ2h0OiA0MHJweDtcclxuXHR9XHJcblx0XHJcblx0LmhlYWRlci1jZW50ZXIge1xyXG5cdFx0ZmxleDogMTtcclxuXHRcdGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblx0fVxyXG5cdFxyXG5cdC5oZWFkZXItbGVmdCxcclxuXHQuaGVhZGVyLXJpZ2h0IHtcclxuXHRcdGNvbG9yOiAjOTk5O1xyXG5cdFx0aGVpZ2h0OiAxMDBycHg7XHJcblx0XHRsaW5lLWhlaWdodDogMTAwcnB4O1xyXG5cdFx0YWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG5cdFx0Zm9udC1mYW1pbHk6IGljb25mb250O1xyXG5cdH1cclxuXHRcclxuXHQuaGVhZGVyLXJpZ2h0LXNlYXJjaCB7XHJcblx0XHRoZWlnaHQ6IDEwMHJweDtcclxuXHRcdC8qIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG5cdFx0anVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDsgKi9cclxuXHR9XHJcblx0XHJcblx0LmhlYWRlci1pdGVtIHtcclxuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0XHRtYXJnaW4tbGVmdDogNnJweDtcclxuXHRcdG1hcmdpbi1yaWdodDogNnJweDtcclxuXHR9XHJcblx0XHJcblx0LmhlYWRlci1pdGVtLXRpdGxlIHtcclxuXHRcdHdpZHRoOiAxMjBycHg7XHJcblx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0XHRoZWlnaHQ6IDYwcnB4O1xyXG5cdFx0bGluZS1oZWlnaHQ6IDYwcnB4O1xyXG5cdFx0Y29sb3I6ICNGRkZGRkY7XHJcblx0XHRmb250LXNpemU6IDE2cHg7XHJcblx0XHRmb250LXdlaWdodDogNjAwO1xyXG5cdH1cclxuXHQuaGVhZGVyLXJlZnJlc2gtdGl0bGUge1xyXG5cdFx0d2lkdGg6IDMwMHJweDtcclxuXHRcdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHRcdGhlaWdodDogNjBycHg7XHJcblx0XHRsaW5lLWhlaWdodDogNjBycHg7XHJcblx0XHRjb2xvcjogI0ZGRkZGRjtcclxuXHRcdGZvbnQtc2l6ZTogMTZweDtcclxuXHRcdGZvbnQtd2VpZ2h0OiA2MDA7XHJcblx0fVxyXG5cdC5oZWFkZXItaXRlbS1saW5lIHtcclxuXHRcdGhlaWdodDogNXJweDtcclxuXHRcdGxpbmUtaGVpZ2h0OiA4cnB4O1xyXG5cdFx0d2lkdGg6IDYwcnB4O1xyXG5cdFx0Ym9yZGVyLXJhZGl1czogOHJweDtcclxuXHR9XHJcblx0Lyog6aG26YOo6YCJ6aG55Y2hIGVuZCAqL1xyXG5cdFxyXG5cdC8qIOmAiemhueWNoei9ruaSree7hOS7tiBzdGFydCAqL1xyXG5cdC5teS1zd2lwZXIge1xyXG5cdFx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdFx0bGVmdDogMDtcclxuXHRcdHJpZ2h0OiAwO1xyXG5cdFx0dG9wOiAwO1xyXG5cdFx0Ym90dG9tOiAwO1xyXG5cdH1cclxuXHQubmVhci1ieSB7XHJcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwO1xyXG5cdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cdH1cclxuXHQubXktZm9sbG93IHtcclxuXHRcdGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA7XHJcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblx0fVxyXG5cdC8qIOmAiemhueWNoei9ruaSree7hOS7tiBlbmQgKi9cclxuXHQud2Fybi1pbmZvIHtcclxuXHRcdGNvbG9yOiAjRkZGRkZGO1xyXG5cdFx0Zm9udC1zaXplOiAzNnJweDtcclxuXHRcdGZvbnQtd2VpZ2h0OiA2MDA7XHJcblx0fVxyXG5cdC5ub3JtYWwtaW1nIHtcclxuXHRcdHdpZHRoOiA1MHJweDtcclxuXHRcdGhlaWdodDogNTBycHg7XHJcblx0XHRvcGFjaXR5OiAwLjg7XHJcblx0fVxyXG48L3N0eWxlPlxyXG48dGVtcGxhdGU+XHJcblx0PHZpZXcgY2xhc3M9XCJwYWdlXCI+XHJcblx0XHQ8IS0tIOW3puS4reWPs+eahOS4ieS4qumhtemdouWIh+aNou+8jOS+neasoeaYr++8mumZhOi/kSAtIOWFs+azqCAtIOaOqOiNkCAtLT5cclxuXHRcdDxzd2lwZXIgc3R5bGU9XCJteS1zd2lwZXJcIiA6c3R5bGU9XCJ7aGVpZ2h0OiBzY3JlZW5IZWlnaHQgKyAncHgnfVwiIDpjdXJyZW50PVwiY3VySW5kZXhcIiBAY2hhbmdlPVwiY2hhbmdlVG9wVGFiXCI+XHJcblx0XHRcdDxzd2lwZXItaXRlbT5cclxuXHRcdFx0XHQ8dmlldyBjbGFzcz1cIm5lYXItYnlcIiA6c3R5bGU9XCJ7aGVpZ2h0OiBzY3JlZW5IZWlnaHQrJ3B4J31cIj5cclxuXHRcdFx0XHRcdDx0ZXh0IGNsYXNzPVwid2Fybi1pbmZvXCI+5pqC5pyq5byA5pS+77yM5pWs6K+35pyf5b6F77yBPC90ZXh0PlxyXG5cdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0PC9zd2lwZXItaXRlbT5cclxuXHRcdFx0PHN3aXBlci1pdGVtPlxyXG5cdFx0XHRcdDx2aWV3IHYtaWY9XCJteVVzZXJJbmZvID09IG51bGxcIiBjbGFzcz1cIm15LWZvbGxvd1wiIDpzdHlsZT1cIntoZWlnaHQ6IHNjcmVlbkhlaWdodCsncHgnfVwiPlxyXG5cdFx0XHRcdFx0PHRleHQgY2xhc3M9XCJ3YXJuLWluZm9cIj7or7fnmbvlvZXlkI7mn6XnnIvvvIE8L3RleHQ+XHJcblx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0PHZpZGVvLWZvbGxvdy1jb21wXHJcblx0XHRcdFx0XHRcdHJlZj1cInZpZGVvRm9sbG93Q29tcFwiXHJcblx0XHRcdFx0XHRcdDpzY3JlZW5IZWlnaHQ9XCJzY3JlZW5IZWlnaHRcIiBcclxuXHRcdFx0XHRcdFx0OnBsYXlGb2xsb3dTdGF0dXM9XCJwbGF5Rm9sbG93U3RhdHVzXCIgXHJcblx0XHRcdFx0XHRcdDp2aWRlb0xpc3Q9XCJ2aWRlb0xpc3RcIlxyXG5cdFx0XHRcdFx0XHQ6cmVmcmVzaExpc3Q9XCJyZWZyZXNoTGlzdFwiXHJcblx0XHRcdFx0XHRcdDpwYWdpbmdMaXN0PVwicGFnaW5nTGlzdFwiXHJcblx0XHRcdFx0XHRcdEBzaG93TG9hZGluZz1cInNob3dMb2FkaW5nXCJcclxuXHRcdFx0XHRcdFx0QGhpZGVMb2FkaW5nPVwiaGlkZUxvYWRpbmdcIlxyXG5cdFx0XHRcdFx0XHRAbGV0Rm9sbG93VmlkZW9QYXVzZT1cImxldEZvbGxvd1ZpZGVvUGF1c2VcIlxyXG5cdFx0XHRcdFx0XHRAZGlzcGxheVZpZGVvUGFnaW5nPVwiZGlzcGxheVZpZGVvUGFnaW5nXCI+PC92aWRlby1mb2xsb3ctY29tcD5cclxuXHRcdFx0PC9zd2lwZXItaXRlbT5cclxuXHRcdFx0PHN3aXBlci1pdGVtPlxyXG5cdFx0XHRcdFx0PHZpZGVvLWNvbXBcclxuXHRcdFx0XHRcdFx0cmVmPVwidmlkZW9Db21wXCJcclxuXHRcdFx0XHRcdFx0OnNjcmVlbkhlaWdodD1cInNjcmVlbkhlaWdodFwiIFxyXG5cdFx0XHRcdFx0XHQ6cGxheVN0YXR1cz1cInBsYXlTdGF0dXNcIiBcclxuXHRcdFx0XHRcdFx0OnZpZGVvTGlzdD1cInZpZGVvTGlzdFwiXHJcblx0XHRcdFx0XHRcdDpyZWZyZXNoTGlzdD1cInJlZnJlc2hMaXN0XCJcclxuXHRcdFx0XHRcdFx0OnBhZ2luZ0xpc3Q9XCJwYWdpbmdMaXN0XCJcclxuXHRcdFx0XHRcdFx0QHNob3dMb2FkaW5nPVwic2hvd0xvYWRpbmdcIlxyXG5cdFx0XHRcdFx0XHRAaGlkZUxvYWRpbmc9XCJoaWRlTG9hZGluZ1wiXHJcblx0XHRcdFx0XHRcdEBkaXNwbGF5VmlkZW9QYWdpbmc9XCJkaXNwbGF5VmlkZW9QYWdpbmdcIj48L3ZpZGVvLWNvbXA+XHJcblx0XHRcdDwvc3dpcGVyLWl0ZW0+XHJcblx0XHQ8L3N3aXBlcj5cclxuXHRcdFxyXG5cdFx0PHZpZXcgY2xhc3M9XCJoZWFkZXJcIiA6c3R5bGU9XCJ7bWFyZ2luVG9wOnN0YXR1c0JhckhlaWdodCsncHgnfVwiIHYtaWY9XCIhaXNMb2FkaW5nXCI+XHJcblx0XHRcdDx0ZXh0IGNsYXNzPVwiaGVhZGVyLWxlZnRcIj48L3RleHQ+XHJcblx0XHRcdDx2aWV3IGNsYXNzPVwiaGVhZGVyLWNlbnRlclwiPlxyXG5cdFx0XHRcdDx2aWV3IGNsYXNzPVwiaGVhZGVyLWl0ZW1cIiBAY2xpY2s9XCJ0YXBGb2xsb3coMClcIj5cclxuXHRcdFx0XHRcdDx0ZXh0IGNsYXNzPVwiaGVhZGVyLWl0ZW0tdGl0bGVcIj7pmYTov5E8L3RleHQ+XHJcblx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImhlYWRlci1pdGVtLWxpbmVcIiA6Y2xhc3M9XCJ7J2FjdGl2YXRlLWxpbmUnOiBjdXJJbmRleCA9PT0gMH1cIj48L3ZpZXc+XHJcblx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdDx2aWV3IGNsYXNzPVwiaGVhZGVyLWl0ZW1cIiBAY2xpY2s9XCJ0YXBGb2xsb3coMSlcIj5cclxuXHRcdFx0XHRcdDx0ZXh0IGNsYXNzPVwiaGVhZGVyLWl0ZW0tdGl0bGVcIj7lhbPms6g8L3RleHQ+XHJcblx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImhlYWRlci1pdGVtLWxpbmVcIiA6Y2xhc3M9XCJ7J2FjdGl2YXRlLWxpbmUnOiBjdXJJbmRleCA9PT0gMX1cIj48L3ZpZXc+XHJcblx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdDx2aWV3IGNsYXNzPVwiaGVhZGVyLWl0ZW1cIiBAY2xpY2s9XCJ0YXBGb2xsb3coMilcIj5cclxuXHRcdFx0XHRcdDx0ZXh0IGNsYXNzPVwiaGVhZGVyLWl0ZW0tdGl0bGVcIj7mjqjojZA8L3RleHQ+XHJcblx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImhlYWRlci1pdGVtLWxpbmVcIiA6Y2xhc3M9XCJ7J2FjdGl2YXRlLWxpbmUnOiBjdXJJbmRleCA9PT0gMn1cIj48L3ZpZXc+XHJcblx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdDxpbWFnZSBjbGFzcz1cImhlYWRlci1yaWdodC1zZWFyY2ggbm9ybWFsLWltZ1wiIHNyYz1cIi4uLy4uL3N0YXRpYy9pbWFnZXMvaWNvbi1zZWFyY2gucG5nXCIgQGNsaWNrPVwiZ29TZWFyY2hcIj5cclxuXHRcdDwvdmlldz5cclxuXHRcdFxyXG5cdFx0PHZpZXcgY2xhc3M9XCJoZWFkZXJcIiA6c3R5bGU9XCJ7bWFyZ2luVG9wOnN0YXR1c0JhckhlaWdodCsncHgnfVwiIHYtaWY9XCJpc0xvYWRpbmdcIj5cclxuXHRcdFx0PHRleHQgY2xhc3M9XCJoZWFkZXItbGVmdFwiPjwvdGV4dD5cclxuXHRcdFx0PHZpZXcgY2xhc3M9XCJoZWFkZXItY2VudGVyXCI+XHJcblx0XHRcdFx0PHZpZXcgY2xhc3M9XCJoZWFkZXItaXRlbVwiPlxyXG5cdFx0XHRcdFx0PHRleHQgY2xhc3M9XCJoZWFkZXItcmVmcmVzaC10aXRsZVwiPuS4i+aLieWIt+aWsOinhumikTwvdGV4dD5cclxuXHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdDwvdmlldz5cclxuXHRcdFx0PGltYWdlIGNsYXNzPVwiaGVhZGVyLXJpZ2h0LXNlYXJjaCBub3JtYWwtaW1nXCIgc3JjPVwiLi4vLi4vc3RhdGljL2ltYWdlcy9sb2FkaW5nLmdpZlwiPlxyXG5cdFx0PC92aWV3PlxyXG5cdFx0PCEtLSDpobbpg6jliIfmjaLnmoTlr7zoiKogZW5kIC0tPlxyXG5cdFx0XHJcblx0PC92aWV3PlxyXG48L3RlbXBsYXRlPlxyXG48c2NyaXB0PlxyXG5cdHZhciBzeXN0ZW0gPSB1bmkuZ2V0U3lzdGVtSW5mb1N5bmMoKTtcclxuXHR2YXIgYXBwID0gZ2V0QXBwKCk7XHJcblx0Ly8gaW1wb3J0IHVuaUhlYWRlciBmcm9tICdAL2NvbXBvbmVudHMvaGVhZGVyJztcclxuXHQvLyBpbXBvcnQgdW5pRm9vdGVyIGZyb20gJ0AvY29tcG9uZW50cy9mb290ZXInO1xyXG5cdC8vIGltcG9ydCB1bmlTd2lwZXIgZnJvbSAnQC9jb21wb25lbnRzL3N3aXBlcic7XHJcblx0aW1wb3J0IHZpZGVvQ29tcCBmcm9tICdAL2NvbXBvbmVudHMvdmlkZW9Db21wLnZ1ZSc7XHJcblx0aW1wb3J0IHZpZGVvRm9sbG93Q29tcCBmcm9tICdAL2NvbXBvbmVudHMvdmlkZW9Gb2xsb3dDb21wLnZ1ZSc7XHJcblx0ZXhwb3J0IGRlZmF1bHQge1xyXG5cdFx0Y29tcG9uZW50czoge1xyXG5cdFx0XHQvLyB1bmlIZWFkZXIsXHJcblx0XHRcdC8vIHVuaUZvb3RlcixcclxuXHRcdFx0Ly8gdW5pU3dpcGVyLFxyXG5cdFx0XHR2aWRlb0NvbXAsXHJcblx0XHRcdHZpZGVvRm9sbG93Q29tcFxyXG5cdFx0fSxcclxuXHRcdGRhdGEoKSB7XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0aXNMb2FkaW5nOiBmYWxzZSxcclxuXHRcdFx0XHRcclxuXHRcdFx0XHRzdGF0dXNCYXJIZWlnaHQ6IHN5c3RlbS5zdGF0dXNCYXJIZWlnaHQsXHJcblx0XHRcdFx0c2NyZWVuSGVpZ2h0OiBzeXN0ZW0uc2NyZWVuSGVpZ2h0LFxyXG5cdFx0XHRcdC8vIHNjcmVlbkhlaWdodDogc3lzdGVtLnNhZmVBcmVhLmJvdHRvbSwvLyAtIDUwLFxyXG5cdFx0XHRcdGN1ckluZGV4OiAyLFxyXG5cdFx0XHRcdHBsYXlTdGF0dXM6IGZhbHNlLFxyXG5cdFx0XHRcdHBsYXlGb2xsb3dTdGF0dXM6IGZhbHNlLFxyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdC8vIHZpZGVvTGlzdDogZ2V0QXBwKCkuZ2V0RGVmYXVsdFZsb2dMaXN0KCksXHRcdFx0Ly8g6aaW6aG15LiA5byA5aeL5p+l6K+i5omA5b6X55qE6buY6K6k6KeG6aKR5YiX6KGoXHJcblx0XHRcdFx0dmlkZW9MaXN0OiBbXSxcdFx0XHQvLyDpppbpobXkuIDlvIDlp4vmn6Xor6LmiYDlvpfnmoTpu5jorqTop4bpopHliJfooahcclxuXHRcdFx0XHRyZWZyZXNoTGlzdDogW10sXHRcdFx0Ly8g5LiL5ouJ5Yi35paw5ZCO6I635b6X55qE5paw55qE5YiX6KGoXHJcblx0XHRcdFx0cGFnaW5nTGlzdDogW10sXHRcdFx0XHQvLyDliIbpobVsaXN0XHJcblx0XHRcdFx0cmVmcmVzaDogMCxcdFx0XHRcdFx0Ly8g5LuObWXpobXpnaLkvKDmnaXnmoRyZWZyZXNo77yM55So5LqO6YCA5Ye655m75b2V5ZCO6YeN5paw5Yi35paw5b2T5YmN6aG155qE6KeG6aKRXHJcblx0XHRcdFx0XHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblx0XHRvbkxvYWQoKSB7XHJcblx0XHRcdHZhciBoYXZlID0gcGx1cy5uYXZpZ2F0b3IuaGFzTm90Y2hJblNjcmVlbigpO1x0Ly8g5Yik5pat5piv5ZCm5pyJ5LiL5be0XHJcblx0XHR9LFxyXG5cdFx0b25UYWJJdGVtVGFwIDogZnVuY3Rpb24oZSkge1xyXG5cdFx0XHR2YXIgdGFiSW5kZXggPSBlLmluZGV4O1xyXG5cdFx0XHQvLyB0aGlzLnBsYXlTdGF0dXMgPSB0YWJJbmRleCA9PT0gMCA/IHRydWUgOiBmYWxzZTtcclxuXHRcdFx0XHJcblx0XHRcdC8vIOWIh+aNouinhumikeimgeWBmuaaguWBnOaIluaSreaUvueahOWIpOaWrVxyXG5cdFx0XHR2YXIgbWUgPSB0aGlzO1xyXG5cdFx0XHRpZiAodGFiSW5kZXggPT0gMCkge1xyXG5cdFx0XHRcdC8vIOiZmuS9jeS7peW+hVxyXG5cdFx0XHR9IGVsc2UgaWYgKHRhYkluZGV4ID09IDEpIHtcclxuXHRcdFx0XHRtZS5wbGF5U3RhdHVzID0gZmFsc2U7XHJcblx0XHRcdFx0bWUucGxheUZvbGxvd1N0YXR1cyA9IHRydWU7XHJcblx0XHRcdH0gZWxzZSBpZiAodGFiSW5kZXggPT0gMikge1xyXG5cdFx0XHRcdG1lLnBsYXlTdGF0dXMgPSB0cnVlO1xyXG5cdFx0XHRcdG1lLnBsYXlGb2xsb3dTdGF0dXMgPSBmYWxzZTtcclxuXHRcdFx0fVxyXG5cdFx0fSxcclxuXHRcdG9uU2hvdygpIHtcclxuXHRcdFx0dmFyIG1lID0gdGhpcztcclxuXHRcdFx0XHJcblx0XHRcdHZhciBteVVzZXJJbmZvID0gYXBwLmdldFVzZXJJbmZvU2Vzc2lvbigpO1xyXG5cdFx0XHR0aGlzLm15VXNlckluZm8gPSBteVVzZXJJbmZvO1xyXG5cdFx0XHRcclxuXHRcdFx0XHJcblx0XHRcdC8vIOWmguaenOW9k+WJjeayoeaciWxpc3TvvIzliJlyZWxhdW5jaFxyXG5cdFx0XHRpZiAodGhpcy4kcmVmcy52aWRlb0NvbXAgIT0gdW5kZWZpbmVkKSB7XHJcblx0XHRcdFx0dmFyIHBsYXllckxpc3QgPSB0aGlzLiRyZWZzLnZpZGVvQ29tcC5wbGF5ZXJMaXN0O1xyXG5cdFx0XHRcdGlmIChwbGF5ZXJMaXN0ICE9IHVuZGVmaW5lZCAmJiBwbGF5ZXJMaXN0Lmxlbmd0aCA9PSAwKSB7XHJcblx0XHRcdFx0XHR0aGlzLiRyZWZzLnZpZGVvQ29tcC5kaXNwbGF5VmlkZW9QYWdpbmcoMSwgdHJ1ZSk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHRcdFxyXG5cdFx0XHRcclxuXHRcdFx0Ly8g5Yik5pat5aaC5p6c5b2T5YmN5pivdGFi5Li6MeaIljLvvIzliJnmkq3mlL7vvIzlkKbliJnkuI3mkq3mlL5cclxuXHRcdFx0aWYgKG1lLmN1ckluZGV4ID09IDApIHtcclxuXHRcdFx0XHQvLyDomZrkvY3ku6XlvoVcclxuXHRcdFx0fSBlbHNlIGlmIChtZS5jdXJJbmRleCA9PSAxKSB7XHJcblx0XHRcdFx0bWUucGxheUZvbGxvd1N0YXR1cyA9IHRydWU7XHJcblx0XHRcdH0gZWxzZSBpZiAobWUuY3VySW5kZXggPT0gMikge1xyXG5cdFx0XHRcdG1lLnBsYXlTdGF0dXMgPSB0cnVlO1xyXG5cdFx0XHR9XHJcblx0XHRcdFxyXG5cdFx0XHQvLyBvblNob3fnmoTml7blgJnvvIzlhbPms6jnmoTor53vvIzliJnph43mlrDliLfkuIDkuItsaXN0XHJcblx0XHRcdHZhciBqdXN0Rm9sbG93VmxvZ2VySWQgPSB1bmkuZ2V0U3RvcmFnZVN5bmMoXCJqdXN0Rm9sbG93VmxvZ2VySWRcIik7XHJcblx0XHRcdGlmICghYXBwLmlzU3RyRW1wdHkoanVzdEZvbGxvd1Zsb2dlcklkKSkge1xyXG5cdFx0XHRcdHRoaXMuJHJlZnMudmlkZW9Db21wLnJlRm9sbG93UGxheUxpc3QoanVzdEZvbGxvd1Zsb2dlcklkKTtcclxuXHRcdFx0XHR1bmkuc2V0U3RvcmFnZVN5bmMoXCJqdXN0Rm9sbG93VmxvZ2VySWRcIiwgXCJcIik7XHJcblx0XHRcdH1cclxuXHRcdFx0Ly8g5Y+W5raI5YWz5rOo5Lmf6KaB6YeN5paw5Yi35LiA5LiLbGlzdFxyXG5cdFx0XHR2YXIganVzdENhbmNlbFZsb2dlcklkID0gdW5pLmdldFN0b3JhZ2VTeW5jKFwianVzdENhbmNlbFZsb2dlcklkXCIpO1xyXG5cdFx0XHRpZiAoIWFwcC5pc1N0ckVtcHR5KGp1c3RDYW5jZWxWbG9nZXJJZCkpIHtcclxuXHRcdFx0XHR0aGlzLiRyZWZzLnZpZGVvQ29tcC5yZUNhbmNlbFBsYXlMaXN0KGp1c3RDYW5jZWxWbG9nZXJJZCk7XHJcblx0XHRcdFx0dW5pLnNldFN0b3JhZ2VTeW5jKFwianVzdENhbmNlbFZsb2dlcklkXCIsIFwiXCIpO1xyXG5cdFx0XHR9XHJcblx0XHRcdFxyXG5cdFx0fSxcclxuXHRcdG9uSGlkZSgpIHtcclxuXHRcdFx0dmFyIG1lID0gdGhpcztcclxuXHRcdFx0Ly8g5pi+56S65ZKM6ZqQ6JeP77yM6ZyA6KaB5Yik5pat5qC55o2u5LiN5ZCMdGFi5YGa5pqC5YGc5oiW6ICF6ZqQ6JePXHJcblx0XHRcdGlmIChtZS5jdXJJbmRleCA9PSAwKSB7XHJcblx0XHRcdFx0Ly8g6Jma5L2N5Lul5b6FXHJcblx0XHRcdH0gZWxzZSBpZiAobWUuY3VySW5kZXggPT0gMSkge1xyXG5cdFx0XHRcdG1lLnBsYXlGb2xsb3dTdGF0dXMgPSBmYWxzZTtcclxuXHRcdFx0fSBlbHNlIGlmIChtZS5jdXJJbmRleCA9PSAyKSB7XHJcblx0XHRcdFx0bWUucGxheVN0YXR1cyA9IGZhbHNlO1xyXG5cdFx0XHR9XHJcblx0XHR9LFxyXG5cdFx0Ly8g5b2T5YmN6aG15LiL5ouJ5Yi35pawXHJcblx0XHRvblB1bGxEb3duUmVmcmVzaCgpIHtcclxuXHRcdFx0dmFyIG1lID0gdGhpcztcclxuXHRcdFx0XHJcblx0XHRcdC8vIOS4i+aLieWIt+aWsOWIpOaWre+8jOWmguaenOaYr+S4jeWQjHRhYu+8jOmCo+S5iOe7hOS7tuS4reWIt+aWsOeahOivt+axguS5n+S4jeWQjFxyXG5cdFx0XHRpZiAobWUuY3VySW5kZXggPT0gMCkge1xyXG5cdFx0XHRcdC8vIOiZmuS9jeS7peW+hVxyXG5cdFx0XHR9IGVsc2UgaWYgKG1lLmN1ckluZGV4ID09IDEpIHtcclxuXHRcdFx0XHR0aGlzLiRyZWZzLnZpZGVvRm9sbG93Q29tcC5kaXNwbGF5VmlkZW9QYWdpbmcoMSwgdHJ1ZSk7XHJcblx0XHRcdH0gZWxzZSBpZiAobWUuY3VySW5kZXggPT0gMikge1xyXG5cdFx0XHRcdHRoaXMuJHJlZnMudmlkZW9Db21wLmRpc3BsYXlWaWRlb1BhZ2luZygxLCB0cnVlKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRcclxuXHRcdH0sXHJcblx0XHRtZXRob2RzOiB7XHJcblx0XHRcdC8vIOWJjeW+gOaQnOe0oumhtemdolxyXG5cdFx0XHRnb1NlYXJjaCgpIHtcclxuXHRcdFx0XHR1bmkubmF2aWdhdGVUbyh7XHJcblx0XHRcdFx0XHR1cmw6IFwiL3BhZ2VzL3NlYXJjaC9zZWFyY2hcIlxyXG5cdFx0XHRcdH0pXHJcblx0XHRcdH0sXHJcblx0XHRcdFxyXG5cdFx0XHQvLyDlt6bmu5Hlj7Pmu5HpgInpobnljaHmlLnlj5jpgInkuK3nirbmgIFcclxuXHRcdFx0Y2hhbmdlVG9wVGFiOiBmdW5jdGlvbihlKSB7XHJcblx0XHRcdFx0dmFyIGN1cnJlbnQgPSBlLmRldGFpbC5jdXJyZW50O1xyXG5cdFx0XHRcdHRoaXMuY3VySW5kZXggPSBjdXJyZW50O1xyXG5cdFx0XHRcdHRoaXMucGxheUZvbGxvd1N0YXR1cyA9IHRoaXMuY3VySW5kZXggPT09IDEgPyB0cnVlIDogZmFsc2U7XHJcblx0XHRcdFx0dGhpcy5wbGF5U3RhdHVzID0gdGhpcy5jdXJJbmRleCA9PT0gMiA/IHRydWUgOiBmYWxzZTtcclxuXHRcdFx0fSxcclxuXHRcdFx0Ly8g54K55Ye75aS06YOo6YCJ6aG55Y2h77yM5YiH5o2i6aG16Z2iXHJcblx0XHRcdHRhcEZvbGxvdzogZnVuY3Rpb24oY3VycmVudCkge1xyXG5cdFx0XHRcdHRoaXMuY3VySW5kZXggPSBjdXJyZW50O1xyXG5cdFx0XHRcdHRoaXMucGxheUZvbGxvd1N0YXR1cyA9IHRoaXMuY3VySW5kZXggPT09IDEgPyB0cnVlIDogZmFsc2U7XHJcblx0XHRcdFx0dGhpcy5wbGF5U3RhdHVzID0gdGhpcy5jdXJJbmRleCA9PT0gMiA/IHRydWUgOiBmYWxzZTtcclxuXHRcdFx0fSxcclxuXHRcdFx0XHJcblx0XHRcdC8vIOS4i+aLieWIt+aWsO+8jOaUueWPmGhlYWTnmoTlrZfmoLfmmL7npLpcclxuXHRcdFx0c2hvd0xvYWRpbmcoKSB7XHJcblx0XHRcdFx0dGhpcy5pc0xvYWRpbmcgPSB0cnVlO1xyXG5cdFx0XHR9LFxyXG5cdFx0XHRoaWRlTG9hZGluZygpIHtcclxuXHRcdFx0XHR0aGlzLmlzTG9hZGluZyA9IGZhbHNlO1xyXG5cdFx0XHR9LFxyXG5cdFx0XHRsZXRGb2xsb3dWaWRlb1BhdXNlKCkge1xyXG5cdFx0XHRcdHRoaXMucGxheUZvbGxvd1N0YXR1cyA9IGZhbHNlO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG48L3NjcmlwdD5cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///241\n");

/***/ }),
/* 242 */
/*!********************************************************************************!*\
  !*** C:/Users/TAOER/Desktop/ShayuVideo/ShayuVideoAPP/components/videoComp.vue ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _videoComp_vue_vue_type_template_id_3067027f___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./videoComp.vue?vue&type=template&id=3067027f& */ 243);\n/* harmony import */ var _videoComp_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./videoComp.vue?vue&type=script&lang=js& */ 245);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _videoComp_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _videoComp_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 12);\n\nvar renderjs\n\n\nfunction injectStyles (context) {\n  \n  if(!this.options.style){\n          this.options.style = {}\n      }\n      if(Vue.prototype.__merge_style && Vue.prototype.__$appStyle__){\n        Vue.prototype.__merge_style(Vue.prototype.__$appStyle__, this.options.style)\n      }\n      if(Vue.prototype.__merge_style){\n                Vue.prototype.__merge_style(__webpack_require__(/*! ./videoComp.vue?vue&type=style&index=0&lang=css& */ 247).default, this.options.style)\n            }else{\n                Object.assign(this.options.style,__webpack_require__(/*! ./videoComp.vue?vue&type=style&index=0&lang=css& */ 247).default)\n            }\n\n}\n\n/* normalize component */\n\nvar component = Object(_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _videoComp_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _videoComp_vue_vue_type_template_id_3067027f___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _videoComp_vue_vue_type_template_id_3067027f___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  \"180d11a4\",\n  false,\n  _videoComp_vue_vue_type_template_id_3067027f___WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ninjectStyles.call(component)\ncomponent.options.__file = \"components/videoComp.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBc0g7QUFDdEg7QUFDNkQ7QUFDTDtBQUN4RDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QyxtQkFBTyxDQUFDLDJEQUFrRDtBQUN0RyxhQUFhO0FBQ2IsaURBQWlELG1CQUFPLENBQUMsMkRBQWtEO0FBQzNHOztBQUVBOztBQUVBO0FBQ3FLO0FBQ3JLLGdCQUFnQiwrS0FBVTtBQUMxQixFQUFFLCtFQUFNO0FBQ1IsRUFBRSxvRkFBTTtBQUNSLEVBQUUsNkZBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsd0ZBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ0E7QUFDZSxnRiIsImZpbGUiOiIyNDIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucywgcmVjeWNsYWJsZVJlbmRlciwgY29tcG9uZW50cyB9IGZyb20gXCIuL3ZpZGVvQ29tcC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MzA2NzAyN2YmXCJcbnZhciByZW5kZXJqc1xuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi92aWRlb0NvbXAudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi92aWRlb0NvbXAudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5mdW5jdGlvbiBpbmplY3RTdHlsZXMgKGNvbnRleHQpIHtcbiAgXG4gIGlmKCF0aGlzLm9wdGlvbnMuc3R5bGUpe1xuICAgICAgICAgIHRoaXMub3B0aW9ucy5zdHlsZSA9IHt9XG4gICAgICB9XG4gICAgICBpZihWdWUucHJvdG90eXBlLl9fbWVyZ2Vfc3R5bGUgJiYgVnVlLnByb3RvdHlwZS5fXyRhcHBTdHlsZV9fKXtcbiAgICAgICAgVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlKFZ1ZS5wcm90b3R5cGUuX18kYXBwU3R5bGVfXywgdGhpcy5vcHRpb25zLnN0eWxlKVxuICAgICAgfVxuICAgICAgaWYoVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlKXtcbiAgICAgICAgICAgICAgICBWdWUucHJvdG90eXBlLl9fbWVyZ2Vfc3R5bGUocmVxdWlyZShcIi4vdmlkZW9Db21wLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9Y3NzJlwiKS5kZWZhdWx0LCB0aGlzLm9wdGlvbnMuc3R5bGUpXG4gICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICBPYmplY3QuYXNzaWduKHRoaXMub3B0aW9ucy5zdHlsZSxyZXF1aXJlKFwiLi92aWRlb0NvbXAudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3MmXCIpLmRlZmF1bHQpXG4gICAgICAgICAgICB9XG5cbn1cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiFEOlxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXHJ1bnRpbWVcXFxcY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIFwiMTgwZDExYTRcIixcbiAgZmFsc2UsXG4gIGNvbXBvbmVudHMsXG4gIHJlbmRlcmpzXG4pXG5cbmluamVjdFN0eWxlcy5jYWxsKGNvbXBvbmVudClcbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiY29tcG9uZW50cy92aWRlb0NvbXAudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///242\n");

/***/ }),
/* 243 */
/*!***************************************************************************************************************!*\
  !*** C:/Users/TAOER/Desktop/ShayuVideo/ShayuVideoAPP/components/videoComp.vue?vue&type=template&id=3067027f& ***!
  \***************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_videoComp_vue_vue_type_template_id_3067027f___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.recycle.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./videoComp.vue?vue&type=template&id=3067027f& */ 244);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_videoComp_vue_vue_type_template_id_3067027f___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_videoComp_vue_vue_type_template_id_3067027f___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_videoComp_vue_vue_type_template_id_3067027f___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_videoComp_vue_vue_type_template_id_3067027f___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 244 */
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.recycle.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!C:/Users/TAOER/Desktop/ShayuVideo/ShayuVideoAPP/components/videoComp.vue?vue&type=template&id=3067027f& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
try {
  components = {
    uniPopup:
      __webpack_require__(/*! @/uni_modules/uni-popup/components/uni-popup/uni-popup.vue */ 192)
        .default,
    uniPopupComments:
      __webpack_require__(/*! @/uni_modules/uni-popup/components/uni-popup-comments/uni-popup-comments.vue */ 205)
        .default,
    uniPopupShare:
      __webpack_require__(/*! @/uni_modules/uni-popup/components/uni-popup-share/uni-popup-share.vue */ 215)
        .default,
  }
} catch (e) {
  if (
    e.message.indexOf("Cannot find module") !== -1 &&
    e.message.indexOf(".vue") !== -1
  ) {
    console.error(e.message)
    console.error("1. 排查组件名称拼写是否正确")
    console.error(
      "2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"
    )
    console.error(
      "3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件"
    )
  } else {
    throw e
  }
}
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("view", { staticStyle: { flex: "1" } }, [
    _c(
      "list",
      {
        attrs: { pagingEnabled: true, showScrollbar: false, scrollable: true },
        on: { scroll: _vm.listScroll, scrollend: _vm.scroll },
      },
      [
        _c(
          "refresh",
          {
            attrs: { display: _vm.refreshing ? "show" : "hide" },
            on: { pullingdown: _vm.onpullingdown, refresh: _vm.onrefresh },
          },
          [
            _c("u-text", {
              staticClass: ["refresh-info-txt"],
              appendAsTree: true,
              attrs: { append: "tree" },
            }),
            _c("loading-indicator"),
          ]
        ),
        _vm._l(_vm.playerList, function (item, index) {
          return _c(
            "cell",
            {
              key: index,
              style: { height: _vm.screenHeight + "px" },
              appendAsTree: true,
              attrs: { recycle: false, dataIndex: index, append: "tree" },
            },
            [
              _vm.playerCur === index
                ? _c("u-video", {
                    ref: "myVideo",
                    refInFor: true,
                    staticStyle: { width: "750rpx" },
                    style: { height: _vm.screenHeight + "px" },
                    attrs: {
                      id: "myVideo",
                      objectFit: item.width >= item.height ? "contain" : "fill",
                      src: item.url,
                      controls: false,
                      enableProgressGesture: false,
                      loop: true,
                      autoplay: true,
                      showLoading: "true",
                    },
                    on: {
                      click: _vm.playOrPause,
                      play: _vm.onplay,
                      error: _vm.onerror,
                      timeupdate: _vm.timeupdate,
                    },
                  })
                : _vm._e(),
              !item.play
                ? _c("u-image", {
                    staticStyle: { width: "750rpx", filter: "blur(10px)" },
                    style: { height: _vm.screenHeight + "px" },
                    attrs: {
                      lazyLoad: true,
                      fadeShow: false,
                      src: item.cover,
                      mode:
                        item.width >= item.height ? "aspectFit" : "scaleToFill",
                    },
                  })
                : _vm._e(),
              _c("view", { staticClass: ["publish-info-box"] }, [
                _c("view", {}, [
                  _c(
                    "u-text",
                    {
                      staticClass: ["publish-info-vloger-name"],
                      appendAsTree: true,
                      attrs: { append: "tree" },
                    },
                    [_vm._v("@" + _vm._s(item.vlogerName))]
                  ),
                  _c(
                    "u-text",
                    {
                      staticClass: ["publish-info-content"],
                      appendAsTree: true,
                      attrs: { append: "tree" },
                    },
                    [_vm._v(_vm._s(item.content))]
                  ),
                  _c(
                    "view",
                    { staticClass: ["publish-info-music-box"] },
                    [
                      _c("u-image", {
                        staticClass: ["icon-fire"],
                        attrs: { src: "/static/images/icon-fire.png" },
                      }),
                      _c(
                        "u-text",
                        {
                          staticClass: ["muisc-words"],
                          appendAsTree: true,
                          attrs: { append: "tree" },
                        },
                        [_vm._v(_vm._s(item.vlogerName) + "的原声创作")]
                      ),
                    ],
                    1
                  ),
                ]),
                _c(
                  "view",
                  { staticStyle: { flexDirection: "row" } },
                  [
                    !_vm.isIOS
                      ? _c("u-image", {
                          staticClass: ["play-cd"],
                          staticStyle: { width: "120rpx", height: "120rpx" },
                          attrs: { src: "/static/images/icon-cd.png" },
                        })
                      : _vm._e(),
                    _vm.isIOS
                      ? _c("u-image", {
                          staticClass: ["play-cd"],
                          attrs: { src: "/static/images/cd-play-5.gif" },
                        })
                      : _vm._e(),
                  ],
                  1
                ),
              ]),
              _c(
                "view",
                { staticClass: ["operation-box"] },
                [
                  _c(
                    "view",
                    { staticClass: ["operation-face-box"] },
                    [
                      _c("u-image", {
                        staticClass: ["user-face"],
                        attrs: { src: item.vlogerFace },
                        on: {
                          click: function ($event) {
                            _vm.goUserInfoSeeSee(item.vlogerId)
                          },
                        },
                      }),
                    ],
                    1
                  ),
                  !item.doIFollowVloger && _vm.userId != _vm.thisVlogerId
                    ? _c("u-image", {
                        staticClass: ["follow-me"],
                        attrs: { src: "/static/images/icon-follow.png" },
                        on: {
                          click: function ($event) {
                            _vm.followMe(item.vlogerId)
                          },
                        },
                      })
                    : _vm._e(),
                  _c(
                    "view",
                    { staticClass: ["like-box"] },
                    [
                      !item.doILikeThisVlog
                        ? _c("u-image", {
                            staticClass: ["icon"],
                            attrs: { src: "/static/images/icon-unlike.png" },
                            on: {
                              click: function ($event) {
                                _vm.likeOrDislikeVlog(1)
                              },
                            },
                          })
                        : _vm._e(),
                      item.doILikeThisVlog
                        ? _c("u-image", {
                            staticClass: ["icon"],
                            attrs: { src: "/static/images/icon-like.png" },
                            on: {
                              click: function ($event) {
                                _vm.likeOrDislikeVlog(0)
                              },
                            },
                          })
                        : _vm._e(),
                      _c(
                        "u-text",
                        {
                          staticClass: ["some-counts"],
                          appendAsTree: true,
                          attrs: { append: "tree" },
                        },
                        [_vm._v(_vm._s(_vm.getGraceNumber(item.likeCounts)))]
                      ),
                    ],
                    1
                  ),
                  _c(
                    "view",
                    { staticClass: ["comment-and-share-box"] },
                    [
                      _c("u-image", {
                        staticClass: ["icon"],
                        attrs: { src: "/static/images/icon-comments.png" },
                        on: { click: _vm.commentToggle },
                      }),
                      _c(
                        "u-text",
                        {
                          staticClass: ["some-counts"],
                          appendAsTree: true,
                          attrs: { append: "tree" },
                        },
                        [
                          _vm._v(
                            _vm._s(
                              _vm.getGraceNumber(_vm.thisVlogTotalComentCounts)
                            )
                          ),
                        ]
                      ),
                    ],
                    1
                  ),
                  _c(
                    "view",
                    { staticClass: ["comment-and-share-box"] },
                    [
                      _c("u-image", {
                        staticClass: ["icon"],
                        attrs: { src: "/static/images/icon-share.png" },
                        on: { click: _vm.shareToggle },
                      }),
                      _c(
                        "u-text",
                        {
                          staticClass: ["some-counts"],
                          appendAsTree: true,
                          attrs: { append: "tree" },
                        },
                        [_vm._v("分享")]
                      ),
                    ],
                    1
                  ),
                ],
                1
              ),
            ],
            1
          )
        }),
      ],
      2
    ),
    _c(
      "view",
      [
        _c(
          "uni-popup",
          { ref: "comment", attrs: { type: "comment" } },
          [
            _c("uni-popup-comments", {
              attrs: {
                thisVlogerId: _vm.thisVlogerId,
                thisVlogId: _vm.thisVlogId,
              },
            }),
          ],
          1
        ),
        _c(
          "uni-popup",
          { ref: "share", attrs: { backgroundColor: "#fff", type: "share" } },
          [
            _c("uni-popup-share", {
              attrs: {
                thisVlogerId: _vm.thisVlogerId,
                thisVlogId: _vm.thisVlogId,
                vlogUrl: _vm.thisVlog.url,
                isPrivate: _vm.thisVlog.isPrivate,
              },
            }),
          ],
          1
        ),
      ],
      1
    ),
  ])
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 245 */
/*!*********************************************************************************************************!*\
  !*** C:/Users/TAOER/Desktop/ShayuVideo/ShayuVideoAPP/components/videoComp.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_videoComp_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib??ref--5-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--5-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./videoComp.vue?vue&type=script&lang=js& */ 246);\n/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_videoComp_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_videoComp_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_videoComp_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_videoComp_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_videoComp_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXVhLENBQWdCLG1kQUFHLEVBQUMiLCJmaWxlIjoiMjQ1LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vZCBmcm9tIFwiLSFEOlxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxiYWJlbC1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzPz9yZWYtLTUtMCFEOlxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXJcXFxcaW5kZXguanM/P3JlZi0tNS0xIUQ6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcdnVlLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3ZpZGVvQ29tcC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hRDpcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcYmFiZWwtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcz8/cmVmLS01LTAhRDpcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyXFxcXGluZGV4LmpzPz9yZWYtLTUtMSFEOlxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi92aWRlb0NvbXAudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///245\n");

/***/ }),
/* 246 */
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--5-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--5-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!C:/Users/TAOER/Desktop/ShayuVideo/ShayuVideoAPP/components/videoComp.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\nvar app = getApp();\nvar _default = {\n  props: {\n    screenHeight: {\n      default: 0\n    },\n    src: {\n      default: false\n    },\n    playStatus: {\n      default: false\n    },\n    videoList: {\n      default: []\n    },\n    refreshList: {\n      default: []\n    },\n    pagingList: {\n      default: []\n    }\n  },\n  data: function data() {\n    return {\n      thisVlog: {},\n      // 当前的短视频对象\n      thisVlogId: \"\",\n      // 当前的短视频主键id\n      thisVlogerId: \"\",\n      // 当前的短视频博主的主键id\n      userId: \"\",\n      // 当前用户id\n\n      refreshing: false,\n      showRefreshLoading: \"hide\",\n      playerCur: 0,\n      page: 0,\n      totalPage: 0,\n      playerList: this.videoList,\n      thisVlogTotalComentCounts: 0,\n      videoContext: {},\n      currentIndex: 0,\n      contentOffsetY: 0,\n      times: new Date().getTime(),\n      objectFit: \"fill\",\n      isIOS: uni.getSystemInfoSync().platform == \"ios\"\n    };\n  },\n  created: function created() {\n    // 1. 判断设备平台，设置视频显示模式\n    // iOS平台视频播放有特殊处理，非iOS平台（如Android）使用\"cover\"模式\n    // 确保视频填充整个容器，可能会有裁剪\n    if (!this.isIOS) {\n      this.objectFit = \"cover\";\n    }\n    // 2. 获取当前登录用户信息\n    var myUserInfo = getApp().getUserInfoSession();\n    if (myUserInfo != null) {\n      this.userId = getApp().getUserInfoSession().id;\n    }\n    // 查询首页短视频列表\n    this.displayVideoPaging(this.page + 1, true);\n    // 5. 创建视频上下文对象\n    // 创建一个与页面中视频组件绑定的上下文对象\n    // 'myVideo'是视频组件的id，通过这个上下文可以控制视频的播放、暂停等操作\n    var videoContext = uni.createVideoContext('myVideo');\n    this.videoContext = videoContext;\n    // 注意：这里使用的是uni-app的uni.createVideoContext API\n    // 它会返回一个视频上下文对象，可以调用play()、pause()、seek()等方法\n    // 实现对视频播放的精确控制\n  },\n\n  watch: {\n    refreshList: function refreshList(value) {\n      var me = this;\n      var newList = value;\n      if (newList != null && newList != undefined && newList.length > 0) {\n        me.playerList = newList;\n      }\n\n      // 重置\n      this.playerCur = 0;\n      this.currentIndex = 0;\n      this.contentOffsetY = 0;\n    },\n    playStatus: function playStatus(val) {\n      var me = this;\n      if (!val) {\n        me.videoContext.pause();\n      } else {\n        me.videoContext.play();\n      }\n    }\n  },\n  methods: {\n    // 把超过1000或10000的数字调整，比如1.3k/6.8w\n    getGraceNumber: function getGraceNumber(num) {\n      return getApp().graceNumber(num);\n    },\n    freshCommentCounts: function freshCommentCounts() {\n      var me = this;\n      var serverUrl = app.globalData.serverUrl;\n      var currentIndex = me.playerCur;\n      var vlog = me.playerList[currentIndex];\n      var vlogId = vlog.vlogId;\n      var serverUrl = app.globalData.serverUrl;\n      uni.request({\n        method: \"GET\",\n        url: serverUrl + \"/comment/counts?vlogId=\" + vlogId,\n        success: function success(result) {\n          if (result.data.status == 200) {\n            me.thisVlogTotalComentCounts = result.data.data;\n          } else {\n            me.thisVlogTotalComentCounts = 0;\n          }\n        }\n      });\n    },\n    likeOrDislikeVlog: function likeOrDislikeVlog(isLike) {\n      var me = this;\n      if (isLike == 1) {\n        // 喜欢/点赞视频\n\n        var myUserInfo = getApp().getUserInfoSession();\n        if (myUserInfo == null) {\n          uni.showToast({\n            duration: 3000,\n            title: \"请登录~\",\n            icon: \"none\"\n          });\n          uni.navigateTo({\n            url: \"../loginRegist/loginRegist\",\n            animationType: \"slide-in-bottom\",\n            success: function success() {\n              me.loginWords = \"请登录\";\n            }\n          });\n          return;\n        }\n        var userId = getApp().getUserInfoSession().id;\n        var serverUrl = app.globalData.serverUrl;\n        var currentIndex = me.playerCur;\n        var vlog = me.playerList[currentIndex];\n        uni.request({\n          method: \"POST\",\n          header: {\n            headerUserId: userId,\n            headerUserToken: app.getUserSessionToken()\n          },\n          url: serverUrl + \"/vlog/like?userId=\" + userId + \"&vlogerId=\" + vlog.vlogerId + \"&vlogId=\" + vlog.vlogId,\n          success: function success(result) {\n            if (result.data.status == 200) {\n              me.reLikePlayList(vlog.vlogId);\n              me.refreshVlogCounts();\n            } else {\n              uni.showToast({\n                title: result.data.msg,\n                icon: \"none\",\n                duration: 3000\n              });\n            }\n          }\n        });\n      } else if (isLike == 0) {\n        // 取消喜欢/点赞视频\n\n        var myUserInfo = getApp().getUserInfoSession();\n        if (myUserInfo == null) {\n          uni.showToast({\n            duration: 3000,\n            title: \"请登录~\",\n            icon: \"none\"\n          });\n          uni.navigateTo({\n            url: \"../loginRegist/loginRegist\",\n            animationType: \"slide-in-bottom\",\n            success: function success() {\n              me.loginWords = \"请登录\";\n            }\n          });\n          return;\n        }\n        var userId = getApp().getUserInfoSession().id;\n        var serverUrl = app.globalData.serverUrl;\n        var currentIndex = me.playerCur;\n        var vlog = me.playerList[currentIndex];\n        uni.request({\n          method: \"POST\",\n          header: {\n            headerUserId: userId,\n            headerUserToken: app.getUserSessionToken()\n          },\n          url: serverUrl + \"/vlog/unlike?userId=\" + userId + \"&vlogerId=\" + vlog.vlogerId + \"&vlogId=\" + vlog.vlogId,\n          success: function success(result) {\n            if (result.data.status == 200) {\n              me.reDislikePlayList(vlog.vlogId);\n              me.refreshVlogCounts();\n            } else {\n              uni.showToast({\n                title: result.data.msg,\n                icon: \"none\",\n                duration: 3000\n              });\n            }\n          }\n        });\n      }\n    },\n    // 喜欢/点赞的list重新设置\n    reLikePlayList: function reLikePlayList(vlogId) {\n      var me = this;\n      var playerList = me.playerList;\n\n      // 关注以后，循环当前playerList，修改对应粉丝关系的doIFollowVloger改为true\n      for (var i = 0; i < playerList.length; i++) {\n        var vlog = playerList[i];\n        if (vlog.vlogId == vlogId) {\n          vlog.doILikeThisVlog = true;\n          playerList.splice(i, 1, vlog);\n        }\n      }\n      me.playerList = playerList;\n    },\n    reDislikePlayList: function reDislikePlayList(vlogId) {\n      var me = this;\n      var playerList = me.playerList;\n\n      // 关注以后，循环当前playerList，修改对应粉丝关系的doIFollowVloger改为true\n      for (var i = 0; i < playerList.length; i++) {\n        var vlog = playerList[i];\n        if (vlog.vlogId == vlogId) {\n          vlog.doILikeThisVlog = false;\n          playerList.splice(i, 1, vlog);\n        }\n      }\n      me.playerList = playerList;\n    },\n    // 关注后的list重新设置\n    reFollowPlayList: function reFollowPlayList(vlogerId) {\n      var me = this;\n      var playerList = me.playerList;\n      // 关注以后，循环当前playerList，修改对应粉丝关系的doIFollowVloger改为true\n      for (var i = 0; i < playerList.length; i++) {\n        var vlog = playerList[i];\n        if (vlog.vlogerId == vlogerId) {\n          vlog.doIFollowVloger = true;\n          playerList.splice(i, 1, vlog);\n        }\n      }\n      me.playerList = playerList;\n    },\n    // 取关后的list重新设置\n    reCancelPlayList: function reCancelPlayList(vlogerId) {\n      var me = this;\n      var playerList = me.playerList;\n      // 取注以后，循环当前playerList，修改对应粉丝关系的doIFollowVloger改为false\n      for (var i = 0; i < playerList.length; i++) {\n        var vlog = playerList[i];\n        if (vlog.vlogerId == vlogerId) {\n          vlog.doIFollowVloger = false;\n          playerList.splice(i, 1, vlog);\n        }\n      }\n      me.playerList = playerList;\n    },\n    // 关注博主\n    followMe: function followMe(vlogerId) {\n      var me = this;\n      var myUserInfo = getApp().getUserInfoSession();\n      if (myUserInfo == null) {\n        uni.showToast({\n          duration: 3000,\n          title: \"请登录~\",\n          icon: \"none\"\n        });\n        uni.navigateTo({\n          url: \"../loginRegist/loginRegist\",\n          animationType: \"slide-in-bottom\",\n          success: function success() {\n            me.loginWords = \"请登录\";\n          }\n        });\n        return;\n      }\n      var userId = getApp().getUserInfoSession().id;\n      var serverUrl = app.globalData.serverUrl;\n      uni.request({\n        method: \"POST\",\n        header: {\n          headerUserId: userId,\n          headerUserToken: app.getUserSessionToken()\n        },\n        url: serverUrl + \"/fans/follow?myId=\" + userId + \"&vlogerId=\" + vlogerId,\n        success: function success(result) {\n          if (result.data.status == 200) {\n            me.reFollowPlayList(vlogerId);\n          } else {\n            uni.showToast({\n              title: result.data.msg,\n              icon: \"none\",\n              duration: 3000\n            });\n          }\n        }\n      });\n    },\n    goUserInfoSeeSee: function goUserInfoSeeSee(userId) {\n      uni.setStorageSync(\"userPageId\", userId);\n      uni.navigateTo({\n        url: \"/pages/me/vlogerInfo?userPageId=\" + userId\n      });\n    },\n    listScroll: function listScroll(e) {\n      if (e.contentOffset.y > 0) {\n        this.$emit(\"showLoading\");\n      }\n    },\n    downloadVlog: function downloadVlog() {\n      var me = this;\n      var serverUrl = app.globalData.serverUrl;\n      var currentIndex = me.playerCur;\n      var vlog = me.playerList[currentIndex];\n      var pendingLength = vlog.url;\n    },\n    copyLink: function copyLink() {\n      var me = me;\n    },\n    showQRCode: function showQRCode() {\n      var me = me;\n    },\n    changeVlogToPrivate: function changeVlogToPrivate() {\n      var me = me;\n    },\n    // 下拉刷新的过程中，改变头部tab显示的字样\n    onpullingdown: function onpullingdown(e) {},\n    onrefresh: function onrefresh(e) {\n      var _this = this;\n      this.refreshing = true;\n      setTimeout(function () {\n        _this.refreshing = false;\n        _this.$emit(\"hideLoading\");\n        _this.refreshText = '↓ Pull To Refresh';\n      }, 300);\n\n      // 通过list组件的下拉刷新触发当前所在页面的下拉刷新\n      uni.startPullDownRefresh();\n    },\n    onplay: function onplay(e) {\n      if (uni.getSystemInfoSync().platform == 'ios') {\n        this.doplay(0.1);\n      }\n    },\n    onerror: function onerror(err) {},\n    timeupdate: function timeupdate(e) {\n      if (e.detail.currentTime > 0.2) {\n        this.doplay(e.detail.currentTime);\n      }\n    },\n    playOrPause: function playOrPause() {\n      var me = this;\n      var playStatus = this.playStatus;\n      if (!playStatus) {\n        me.videoContext.pause();\n      } else {\n        me.videoContext.play();\n      }\n      this.playStatus = !playStatus;\n    },\n    scroll: function scroll(e) {\n      var originalIndex = this.currentIndex;\n      var isNext = false;\n      if (e.contentOffset.y < this.contentOffsetY) {\n        isNext = true;\n      }\n      this.contentOffsetY = e.contentOffset.y;\n      var num = this.playerList.length;\n      this.currentIndex = Math.round(Math.abs(this.contentOffsetY) / (e.contentSize.height / num));\n      this.onchange(this.currentIndex);\n      this.times = new Date().getTime();\n      // 判断如果视频列表总长度-当前下标，少于3个，则开始分页查询后续的视频，并且追加到现有list中\n      if (this.playerList.length - this.currentIndex < 3) {\n        // 如果要分页的page和总数totalPage相等，则没有更多\n        if (this.page == this.totalPage) {\n          return;\n        }\n        this.displayVideoPaging(this.page + 1, false);\n      }\n    },\n    // 分页查询新的list，并且追加到现有list中\n    displayVideoPaging: function displayVideoPaging(page, needClearList) {\n      // 查询首页短视频列表\n      var me = this;\n      var myUserInfo = getApp().getUserInfoSession();\n      var userId = \"\";\n      if (myUserInfo != null) {\n        userId = myUserInfo.id;\n      }\n      var serverUrl = app.globalData.serverUrl;\n      uni.request({\n        method: \"GET\",\n        url: serverUrl + \"/vlog/indexList?userId=\" + userId + \"&page=\" + page + \"&pageSize=10\",\n        success: function success(result) {\n          if (result.data.status == 200) {\n            var vlogList = result.data.data.rows;\n            var totalPage = result.data.data.total;\n            // me.playerList = vlogList;\n            if (needClearList) {\n              me.playerList = [];\n            }\n            me.playerList = me.playerList.concat(vlogList);\n            me.page = page;\n            me.totalPage = totalPage;\n            if (needClearList) {\n              me.setThisVlogInfo();\n              me.freshCommentCounts();\n            }\n          } else {\n            uni.showToast({\n              title: result.data.msg,\n              icon: \"none\",\n              duration: 3000\n            });\n          }\n        },\n        complete: function complete() {\n          uni.stopPullDownRefresh();\n        }\n      });\n    },\n    doplay: function doplay(time) {\n      if (time > 0) {\n        this.playerList[this.playerCur].play = true;\n      }\n    },\n    onchange: function onchange(index) {\n      if (index != this.playerCur) {\n        this.playerList[this.playerCur].play = false;\n        this.playerCur = index;\n      }\n      this.refreshVlogCounts();\n      this.setThisVlogInfo();\n      this.freshCommentCounts();\n    },\n    // 设置当前vlog的信息\n    setThisVlogInfo: function setThisVlogInfo() {\n      var me = this;\n      var serverUrl = app.globalData.serverUrl;\n      var currentIndex = me.playerCur;\n      var vlog = me.playerList[currentIndex];\n      this.thisVlog = vlog;\n      this.thisVlogId = vlog.vlogId;\n      this.thisVlogerId = vlog.vlogerId;\n    },\n    refreshVlogCounts: function refreshVlogCounts() {\n      // 查询当前点赞数，重新赋值给当前视频\n      var me = this;\n      var serverUrl = app.globalData.serverUrl;\n      var currentIndex = me.playerCur;\n      var vlog = me.playerList[currentIndex];\n      uni.request({\n        method: \"POST\",\n        url: serverUrl + \"/vlog/totalLikedCounts?vlogId=\" + vlog.vlogId,\n        success: function success(result) {\n          if (result.data.status == 200) {\n            var counts = result.data.data;\n            me.reChangeVlogLikedCountsInPlayList(vlog.vlogId, counts);\n          }\n        }\n      });\n    },\n    reChangeVlogLikedCountsInPlayList: function reChangeVlogLikedCountsInPlayList(vlogId, counts) {\n      var me = this;\n      var playerList = me.playerList;\n\n      // 关注以后，循环当前playerList，修改对应粉丝关系的doIFollowVloger改为true\n      for (var i = 0; i < playerList.length; i++) {\n        var vlog = playerList[i];\n        if (vlog.vlogId == vlogId) {\n          vlog.likeCounts = counts;\n          playerList.splice(i, 1, vlog);\n        }\n      }\n      me.playerList = playerList;\n    },\n    commentToggle: function commentToggle() {\n      this.$refs.comment.open();\n      uni.hideTabBar({\n        animation: true\n      });\n    },\n    shareToggle: function shareToggle() {\n      this.$refs.share.open();\n      uni.hideTabBar({\n        animation: true\n      });\n    }\n  }\n};\nexports.default = _default;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vY29tcG9uZW50cy92aWRlb0NvbXAudnVlIl0sIm5hbWVzIjpbInByb3BzIiwic2NyZWVuSGVpZ2h0IiwiZGVmYXVsdCIsInNyYyIsInBsYXlTdGF0dXMiLCJ2aWRlb0xpc3QiLCJyZWZyZXNoTGlzdCIsInBhZ2luZ0xpc3QiLCJkYXRhIiwidGhpc1Zsb2ciLCJ0aGlzVmxvZ0lkIiwidGhpc1Zsb2dlcklkIiwidXNlcklkIiwicmVmcmVzaGluZyIsInNob3dSZWZyZXNoTG9hZGluZyIsInBsYXllckN1ciIsInBhZ2UiLCJ0b3RhbFBhZ2UiLCJwbGF5ZXJMaXN0IiwidGhpc1Zsb2dUb3RhbENvbWVudENvdW50cyIsInZpZGVvQ29udGV4dCIsImN1cnJlbnRJbmRleCIsImNvbnRlbnRPZmZzZXRZIiwidGltZXMiLCJvYmplY3RGaXQiLCJpc0lPUyIsImNyZWF0ZWQiLCJ3YXRjaCIsIm1lIiwibWV0aG9kcyIsImdldEdyYWNlTnVtYmVyIiwiZnJlc2hDb21tZW50Q291bnRzIiwidW5pIiwibWV0aG9kIiwidXJsIiwic3VjY2VzcyIsImxpa2VPckRpc2xpa2VWbG9nIiwiZHVyYXRpb24iLCJ0aXRsZSIsImljb24iLCJhbmltYXRpb25UeXBlIiwiaGVhZGVyIiwiaGVhZGVyVXNlcklkIiwiaGVhZGVyVXNlclRva2VuIiwicmVMaWtlUGxheUxpc3QiLCJ2bG9nIiwicmVEaXNsaWtlUGxheUxpc3QiLCJyZUZvbGxvd1BsYXlMaXN0IiwicmVDYW5jZWxQbGF5TGlzdCIsImZvbGxvd01lIiwiZ29Vc2VySW5mb1NlZVNlZSIsImxpc3RTY3JvbGwiLCJkb3dubG9hZFZsb2ciLCJjb3B5TGluayIsInNob3dRUkNvZGUiLCJjaGFuZ2VWbG9nVG9Qcml2YXRlIiwib25wdWxsaW5nZG93biIsIm9ucmVmcmVzaCIsInNldFRpbWVvdXQiLCJvbnBsYXkiLCJvbmVycm9yIiwidGltZXVwZGF0ZSIsInBsYXlPclBhdXNlIiwic2Nyb2xsIiwiaXNOZXh0IiwiZGlzcGxheVZpZGVvUGFnaW5nIiwiY29tcGxldGUiLCJkb3BsYXkiLCJvbmNoYW5nZSIsInNldFRoaXNWbG9nSW5mbyIsInJlZnJlc2hWbG9nQ291bnRzIiwicmVDaGFuZ2VWbG9nTGlrZWRDb3VudHNJblBsYXlMaXN0IiwiY29tbWVudFRvZ2dsZSIsImFuaW1hdGlvbiIsInNoYXJlVG9nZ2xlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBc05BO0FBQUEsZUFDQTtFQUNBQTtJQUNBQztNQUNBQztJQUNBO0lBQ0FDO01BQ0FEO0lBQ0E7SUFDQUU7TUFDQUY7SUFDQTtJQUNBRztNQUNBSDtJQUNBO0lBQ0FJO01BQ0FKO0lBQ0E7SUFDQUs7TUFDQUw7SUFDQTtFQUNBO0VBQ0FNO0lBQ0E7TUFDQUM7TUFBQTtNQUNBQztNQUFBO01BQ0FDO01BQUE7TUFDQUM7TUFBQTs7TUFHQUM7TUFDQUM7TUFFQUM7TUFDQUM7TUFDQUM7TUFDQUM7TUFDQUM7TUFFQUM7TUFFQUM7TUFDQUM7TUFFQUM7TUFFQUM7TUFDQUM7SUFDQTtFQUNBO0VBQ0FDO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7TUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO01BQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0VBQ0E7O0VBQ0FDO0lBQ0FyQjtNQUNBO01BQ0E7TUFDQTtRQUNBc0I7TUFDQTs7TUFFQTtNQUNBO01BQ0E7TUFDQTtJQUNBO0lBRUF4QjtNQUNBO01BRUE7UUFDQXdCO01BQ0E7UUFDQUE7TUFDQTtJQUNBO0VBQ0E7RUFDQUM7SUFDQTtJQUNBQztNQUNBO0lBQ0E7SUFDQUM7TUFDQTtNQUNBO01BQ0E7TUFDQTtNQUNBO01BRUE7TUFDQUM7UUFDQUM7UUFDQUM7UUFDQUM7VUFFQTtZQUNBUDtVQUNBO1lBQ0FBO1VBQ0E7UUFDQTtNQUNBO0lBQ0E7SUFDQVE7TUFDQTtNQUNBO1FBQ0E7O1FBRUE7UUFDQTtVQUNBSjtZQUNBSztZQUNBQztZQUNBQztVQUNBO1VBQ0FQO1lBQ0FFO1lBQ0FNO1lBQ0FMO2NBQ0FQO1lBQ0E7VUFDQTtVQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUVBSTtVQUNBQztVQUNBUTtZQUNBQztZQUNBQztVQUNBO1VBQ0FUO1VBQ0FDO1lBRUE7Y0FDQVA7Y0FDQUE7WUFDQTtjQUNBSTtnQkFDQU07Z0JBQ0FDO2dCQUNBRjtjQUNBO1lBQ0E7VUFDQTtRQUNBO01BRUE7UUFDQTs7UUFFQTtRQUNBO1VBQ0FMO1lBQ0FLO1lBQ0FDO1lBQ0FDO1VBQ0E7VUFDQVA7WUFDQUU7WUFDQU07WUFDQUw7Y0FDQVA7WUFDQTtVQUNBO1VBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBRUFJO1VBQ0FDO1VBQ0FRO1lBQ0FDO1lBQ0FDO1VBQ0E7VUFDQVQ7VUFDQUM7WUFFQTtjQUNBUDtjQUNBQTtZQUNBO2NBQ0FJO2dCQUNBTTtnQkFDQUM7Z0JBQ0FGO2NBQ0E7WUFDQTtVQUNBO1FBQ0E7TUFFQTtJQUNBO0lBRUE7SUFDQU87TUFDQTtNQUNBOztNQUVBO01BQ0E7UUFDQTtRQUNBO1VBQ0FDO1VBQ0EzQjtRQUNBO01BQ0E7TUFDQVU7SUFDQTtJQUNBa0I7TUFDQTtNQUNBOztNQUVBO01BQ0E7UUFDQTtRQUNBO1VBQ0FEO1VBQ0EzQjtRQUNBO01BQ0E7TUFDQVU7SUFDQTtJQUVBO0lBQ0FtQjtNQUNBO01BQ0E7TUFDQTtNQUNBO1FBQ0E7UUFDQTtVQUNBRjtVQUNBM0I7UUFDQTtNQUNBO01BQ0FVO0lBQ0E7SUFDQTtJQUNBb0I7TUFDQTtNQUNBO01BQ0E7TUFDQTtRQUNBO1FBQ0E7VUFDQUg7VUFDQTNCO1FBQ0E7TUFDQTtNQUNBVTtJQUNBO0lBR0E7SUFDQXFCO01BQ0E7TUFDQTtNQUNBO1FBQ0FqQjtVQUNBSztVQUNBQztVQUNBQztRQUNBO1FBRUFQO1VBQ0FFO1VBQ0FNO1VBQ0FMO1lBQ0FQO1VBQ0E7UUFDQTtRQUVBO01BQ0E7TUFDQTtNQUNBO01BQ0FJO1FBQ0FDO1FBQ0FRO1VBQ0FDO1VBQ0FDO1FBQ0E7UUFDQVQ7UUFDQUM7VUFFQTtZQUNBUDtVQUNBO1lBQ0FJO2NBQ0FNO2NBQ0FDO2NBQ0FGO1lBQ0E7VUFDQTtRQUNBO01BQ0E7SUFFQTtJQUVBYTtNQUNBbEI7TUFDQUE7UUFDQUU7TUFDQTtJQUNBO0lBRUFpQjtNQUNBO1FBQ0E7TUFDQTtJQUNBO0lBRUFDO01BQ0E7TUFDQTtNQUNBO01BQ0E7TUFDQTtJQUNBO0lBRUFDO01BQ0E7SUFDQTtJQUVBQztNQUNBO0lBQ0E7SUFFQUM7TUFDQTtJQUNBO0lBRUE7SUFDQUMsMENBQ0E7SUFDQUM7TUFBQTtNQUNBO01BQ0FDO1FBQ0E7UUFDQTtRQUNBO01BQ0E7O01BRUE7TUFDQTFCO0lBQ0E7SUFFQTJCO01BQ0E7UUFDQTtNQUNBO0lBQ0E7SUFDQUMsZ0NBQ0E7SUFDQUM7TUFDQTtRQUNBO01BQ0E7SUFDQTtJQUVBQztNQUNBO01BQ0E7TUFFQTtRQUNBbEM7TUFDQTtRQUNBQTtNQUNBO01BQ0E7SUFDQTtJQUdBbUM7TUFDQTtNQUNBO01BQ0E7UUFDQUM7TUFDQTtNQUNBO01BRUE7TUFFQTtNQUNBO01BRUE7TUFDQTtNQUNBO1FBQ0E7UUFDQTtVQUNBO1FBQ0E7UUFDQTtNQUNBO0lBRUE7SUFFQTtJQUNBQztNQUNBO01BQ0E7TUFDQTtNQUNBO01BQ0E7UUFDQXJEO01BQ0E7TUFDQTtNQUNBb0I7UUFDQUM7UUFDQUM7UUFDQUM7VUFFQTtZQUNBO1lBQ0E7WUFDQTtZQUNBO2NBQ0FQO1lBQ0E7WUFDQUE7WUFDQUE7WUFDQUE7WUFFQTtjQUNBQTtjQUNBQTtZQUNBO1VBQ0E7WUFDQUk7Y0FDQU07Y0FDQUM7Y0FDQUY7WUFDQTtVQUNBO1FBRUE7UUFDQTZCO1VBQ0FsQztRQUNBO01BQ0E7SUFDQTtJQUVBbUM7TUFDQTtRQUNBO01BQ0E7SUFDQTtJQUNBQztNQUNBO1FBQ0E7UUFDQTtNQUNBO01BRUE7TUFDQTtNQUNBO0lBQ0E7SUFFQTtJQUNBQztNQUNBO01BQ0E7TUFDQTtNQUNBO01BQ0E7TUFDQTtNQUNBO0lBQ0E7SUFFQUM7TUFDQTtNQUNBO01BQ0E7TUFDQTtNQUNBO01BQ0F0QztRQUNBQztRQUNBQztRQUNBQztVQUNBO1lBQ0E7WUFDQVA7VUFDQTtRQUNBO01BQ0E7SUFDQTtJQUVBMkM7TUFDQTtNQUNBOztNQUVBO01BQ0E7UUFDQTtRQUNBO1VBQ0ExQjtVQUNBM0I7UUFDQTtNQUNBO01BQ0FVO0lBQ0E7SUFFQTRDO01BQ0E7TUFDQXhDO1FBQ0F5QztNQUNBO0lBQ0E7SUFDQUM7TUFDQTtNQUNBMUM7UUFDQXlDO01BQ0E7SUFDQTtFQUNBO0FBQ0E7QUFBQSIsImZpbGUiOiIyNDYuanMiLCJzb3VyY2VzQ29udGVudCI6WyI8c3R5bGU+XHJcblx0Lmljb24ge1xyXG5cdFx0d2lkdGg6IDgwcnB4O1xyXG5cdFx0aGVpZ2h0OiA4MHJweDtcclxuXHRcdG9wYWNpdHk6IDAuOTtcclxuXHR9XHJcblx0XHJcblx0LnVzZXItZmFjZSB7XHJcblx0XHR3aWR0aDogMTAwcnB4O1xyXG5cdFx0aGVpZ2h0OiAxMDBycHg7XHJcblx0XHRib3JkZXItcmFkaXVzOiAxMDBycHg7XHJcblx0fVxyXG5cdFxyXG5cdC5wbGF5LWNkIHtcclxuXHRcdHdpZHRoOiAxNTBycHg7XHJcblx0XHRoZWlnaHQ6IDE1MHJweDtcclxuXHRcdG9wYWNpdHk6IDAuODtcclxuXHR9XHJcblx0LnJlZnJlc2gtaW5mby10eHQge1xyXG5cdFx0Y29sb3I6ICNGMUYxRjE7XHJcblx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0XHRmb250LXNpemU6IDEycHg7XHJcblx0fVxyXG5cdC5wdWJsaXNoLWluZm8tYm94IHtcclxuXHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRcdGJvdHRvbTogMjAwcnB4O1xyXG5cdFx0bGVmdDogMDtcclxuXHRcdHJpZ2h0OiAwO1xyXG5cdFx0cGFkZGluZy1sZWZ0OiAyMHJweDtcclxuXHRcdHBhZGRpbmctcmlnaHQ6IDIwcnB4OyBcclxuXHRcdGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdH1cclxuXHQucHVibGlzaC1pbmZvLXZsb2dlci1uYW1lIHtcclxuXHRcdGNvbG9yOiAjRkZGRkZGO1xyXG5cdFx0Zm9udC1zaXplOiA0MHJweDtcclxuXHRcdGZvbnQtd2VpZ2h0OiA2MDA7XHJcblx0XHRwYWRkaW5nOiAxMHJweDtcclxuXHR9XHJcblx0LnB1Ymxpc2gtaW5mby1tdXNpYy1ib3gge1xyXG5cdFx0ZmxleC1kaXJlY3Rpb246IHJvdztcclxuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0fVxyXG5cdC5wdWJsaXNoLWluZm8tY29udGVudCB7XHJcblx0XHRjb2xvcjogI0ZGRkZGRjtcclxuXHRcdGZvbnQtc2l6ZTogMjhycHg7XHJcblx0XHRmb250LXdlaWdodDogNDAwO1xyXG5cdFx0cGFkZGluZzogMTBycHg7XHJcblx0XHRsaW5lczogNTtcclxuXHRcdHdpZHRoOiA1MjBycHg7XHJcblx0XHR0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuXHR9XHJcblx0Lmljb24tZmlyZSB7XHJcblx0XHR3aWR0aDogMzZycHg7XHJcblx0XHRoZWlnaHQ6IDM2cnB4O1xyXG5cdH1cclxuXHQubXVpc2Mtd29yZHMge1xyXG5cdFx0Y29sb3I6ICNGRkZGRkY7XHJcblx0XHRmb250LXNpemU6IDI4cnB4O1xyXG5cdFx0cGFkZGluZzogMTBycHg7XHJcblx0XHR3aWR0aDo0MDBycHg7XHJcblx0fVxyXG5cdC5zb21lLWNvdW50cyB7XHJcblx0XHRmb250LXNpemU6MjRycHg7XHJcblx0XHRmb250LXdlaWdodDogNTAwO1xyXG5cdFx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdFx0Y29sb3I6ICNGRkZGRkY7XHJcblx0XHRtYXJnaW4tdG9wOiAycnB4O1xyXG5cdH1cclxuXHQub3BlcmF0aW9uLWJveCB7XHJcblx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0XHR0b3A6IDA7XHJcblx0XHRib3R0b206IDA7IFxyXG5cdFx0cmlnaHQ6IDA7XHJcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblx0XHRwYWRkaW5nLXJpZ2h0OiAyMHJweDtcclxuXHR9XHJcblx0Lm9wZXJhdGlvbi1mYWNlLWJveCB7XHJcblx0XHRib3JkZXItcmFkaXVzOiAxMDBycHg7XHJcblx0XHRib3JkZXItY29sb3I6ICNGRkZGRkY7XHJcblx0XHRib3JkZXItd2lkdGg6IDNycHg7XHJcblx0fVxyXG5cdC5mb2xsb3ctbWUge1xyXG5cdFx0d2lkdGg6IDQwcnB4O1xyXG5cdFx0aGVpZ2h0OiA0MHJweDtcclxuXHRcdGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcblx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0XHR0b3A6IC0yMHJweDtcclxuXHR9XHJcblx0Lmxpa2UtYm94IHtcclxuXHRcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdFx0bWFyZ2luLXRvcDogMzBycHg7XHJcblx0fVxyXG5cdC5jb21tZW50LWFuZC1zaGFyZS1ib3gge1xyXG5cdFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0XHRtYXJnaW4tdG9wOiA0NXJweDtcclxuXHR9XHJcbjwvc3R5bGU+XHJcblxyXG48dGVtcGxhdGU+XHJcblx0PHZpZXcgc3R5bGU9XCJmbGV4OiAxO1wiPlxyXG5cdFx0PCEtLSDmjqjojZDop4bpopHmtYEgLS0+XHJcblx0XHQ8IS0tIDx1bmktbGlzdCBAY2hhbmdlPVwib25jaGFuZ2VcIiA6bnVtPVwicGxheWVyTGlzdC5sZW5ndGhcIj4gLS0+XHJcblx0XHQ8bGlzdCA6cGFnaW5nRW5hYmxlZD1cInRydWVcIiA6c2hvdy1zY3JvbGxiYXI9XCJmYWxzZVwiIEBzY3JvbGw9XCJsaXN0U2Nyb2xsXCIgQHNjcm9sbGVuZD1cInNjcm9sbFwiIDpzY3JvbGxhYmxlPVwidHJ1ZVwiID5cdFxyXG5cdFx0XHQ8cmVmcmVzaCBAcHVsbGluZ2Rvd249XCJvbnB1bGxpbmdkb3duXCIgQHJlZnJlc2g9XCJvbnJlZnJlc2hcIiA6ZGlzcGxheT1cInJlZnJlc2hpbmcgPyAnc2hvdycgOiAnaGlkZSdcIj5cclxuXHRcdFx0ICA8dGV4dCBjbGFzcz1cInJlZnJlc2gtaW5mby10eHRcIj48L3RleHQ+XHJcblx0XHRcdCAgPGxvYWRpbmctaW5kaWNhdG9yPjwvbG9hZGluZy1pbmRpY2F0b3I+XHJcblx0XHRcdDwvcmVmcmVzaD5cclxuXHRcdFx0PGNlbGwgOnJlY3ljbGU9XCJmYWxzZVwiIFxyXG5cdFx0XHRcdHYtZm9yPVwiKGl0ZW0sIGluZGV4KSBpbiBwbGF5ZXJMaXN0XCIgXHJcblx0XHRcdFx0OmtleT1cImluZGV4XCIgXHJcblx0XHRcdFx0OmRhdGEtaW5kZXg9XCJpbmRleFwiIFxyXG5cdFx0XHRcdDpzdHlsZT1cInsnaGVpZ2h0Jzogc2NyZWVuSGVpZ2h0ICsgJ3B4J31cIj5cclxuXHRcdFx0XHQ8IS0tIDx1bmktdmlkZW8gOnNyYz1cIml0ZW0udXJsXCIgOnBsYXlTdGF0dXM9XCJwbGF5U3RhdHVzXCIgOnNjcmVlbkhlaWdodD1cInNjcmVlbkhlaWdodFwiIHYtaWY9XCJwbGF5ZXJDdXIgPT09IGluZGV4XCIgQHBsYXk9XCJvbnBsYXlcIj48L3VuaS12aWRlbz4gLS0+XHJcblx0XHRcdFx0PHZpZGVvIFxyXG5cdFx0XHRcdFx0cmVmPVwibXlWaWRlb1wiIFxyXG5cdFx0XHRcdFx0aWQ9XCJteVZpZGVvXCIgXHJcblx0XHRcdFx0XHQ6b2JqZWN0LWZpdD1cIml0ZW0ud2lkdGggPj0gaXRlbS5oZWlnaHQgPyAnY29udGFpbicgOiAnZmlsbCdcIiBcclxuXHRcdFx0XHRcdDpzcmM9XCJpdGVtLnVybFwiIFxyXG5cdFx0XHRcdFx0OmNvbnRyb2xzPVwiZmFsc2VcIlxyXG5cdFx0XHRcdFx0OmVuYWJsZS1wcm9ncmVzcy1nZXN0dXJlPVwiZmFsc2VcIlxyXG5cdFx0XHRcdFx0IHYtaWY9XCJwbGF5ZXJDdXIgPT09IGluZGV4XCJcclxuXHRcdFx0XHRcdGxvb3AgXHJcblx0XHRcdFx0XHRhdXRvcGxheSBcclxuXHRcdFx0XHRcdHNob3ctbG9hZGluZz1cInRydWVcIlxyXG5cdFx0XHRcdFx0c3R5bGU9XCJ3aWR0aDogNzUwcnB4O1wiIFxyXG5cdFx0XHRcdFx0OnN0eWxlPVwie2hlaWdodDogc2NyZWVuSGVpZ2h0ICsgJ3B4J31cIiBcclxuXHRcdFx0XHRcdEBjbGljaz1cInBsYXlPclBhdXNlXCJcclxuXHRcdFx0XHRcdEBwbGF5PVwib25wbGF5XCIgXHJcblx0XHRcdFx0XHRAZXJyb3I9XCJvbmVycm9yXCIgXHJcblx0XHRcdFx0XHRAdGltZXVwZGF0ZT1cInRpbWV1cGRhdGVcIj48L3ZpZGVvPlxyXG5cdFx0XHRcdDxpbWFnZSBcclxuXHRcdFx0XHRcdDpsYXp5LWxvYWQ9XCJ0cnVlXCIgXHJcblx0XHRcdFx0XHQ6ZmFkZS1zaG93PVwiZmFsc2VcIiBcclxuXHRcdFx0XHRcdHYtaWY9XCIhaXRlbS5wbGF5XCIgXHJcblx0XHRcdFx0XHQ6c3JjPVwiaXRlbS5jb3ZlclwiIFxyXG5cdFx0XHRcdFx0Om1vZGU9XCJpdGVtLndpZHRoID49IGl0ZW0uaGVpZ2h0ID8gJ2FzcGVjdEZpdCcgOiAnc2NhbGVUb0ZpbGwnXCIgXHJcblx0XHRcdFx0XHRzdHlsZT1cIndpZHRoOiA3NTBycHg7IGZpbHRlcjogYmx1cigxMHB4KTtcIlxyXG5cdFx0XHRcdFx0OnN0eWxlPVwie2hlaWdodDogc2NyZWVuSGVpZ2h0KyAncHgnfVwiPjwvaW1hZ2U+XHJcblx0XHRcdFx0PCEtLTxpbWFnZSA6bGF6eS1sb2FkPVwidHJ1ZVwiIDpmYWRlLXNob3c9XCJmYWxzZVwiIHYtaWY9XCIhaXRlbS5wbGF5XCIgOnNyYz1cIml0ZW0uY292ZXJcIiBtb2RlPVwiXCIgc3R5bGU9XCJ3aWR0aDogNzUwcnB4O3Bvc2l0aW9uOmFic29sdXRlO2xlZnQ6IDA7cmlnaHQ6IDA7dG9wOiAwO2JvdHRvbTogMDsgZmlsdGVyOiBibHVyKDEwcHgpO1wiIDpzdHlsZT1cIntoZWlnaHQ6IHNjcmVlbkhlaWdodCsgJ3B4J31cIj48L2ltYWdlPi0tPlxyXG5cdFx0XHRcdDx2aWV3IGNsYXNzPVwicHVibGlzaC1pbmZvLWJveFwiPlxyXG5cdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJcIj5cclxuXHRcdFx0XHRcdFx0PHRleHQgY2xhc3M9XCJwdWJsaXNoLWluZm8tdmxvZ2VyLW5hbWVcIj5Ae3tpdGVtLnZsb2dlck5hbWV9fTwvdGV4dD5cclxuXHRcdFx0XHRcdFx0PHRleHQgY2xhc3M9XCJwdWJsaXNoLWluZm8tY29udGVudFwiPnt7aXRlbS5jb250ZW50fX08L3RleHQ+XHJcblx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwicHVibGlzaC1pbmZvLW11c2ljLWJveFwiPlxyXG5cdFx0XHRcdFx0XHRcdDxpbWFnZSBzcmM9XCIvc3RhdGljL2ltYWdlcy9pY29uLWZpcmUucG5nXCIgY2xhc3M9XCJpY29uLWZpcmVcIj48L2ltYWdlPlxyXG5cdFx0XHRcdFx0XHRcdDx0ZXh0IGNsYXNzPVwibXVpc2Mtd29yZHNcIj57e2l0ZW0udmxvZ2VyTmFtZX1955qE5Y6f5aOw5Yib5L2cPC90ZXh0PlxyXG5cdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cIlwiIHN0eWxlPVwiZmxleC1kaXJlY3Rpb246IHJvdztcIj5cclxuXHRcdFx0XHRcdFx0PCEtLSA8aW1hZ2Ugc3JjPVwiL3N0YXRpYy9pbWFnZXMvY2QtcGxheS00LmdpZlwiXHJcblx0XHRcdFx0XHRcdFx0XHRzdHlsZT1cIndpZHRoOiAxNTBycHg7aGVpZ2h0OiAxNTBycHg7b3BhY2l0eTogMC44O1wiPjwvaW1hZ2U+IC0tPlxyXG5cdFx0XHRcdFx0XHQ8aW1hZ2Ugdi1pZj1cIiFpc0lPU1wiIHNyYz1cIi9zdGF0aWMvaW1hZ2VzL2ljb24tY2QucG5nXCJcclxuXHRcdFx0XHRcdFx0XHRcdGNsYXNzPVwicGxheS1jZFwiIHN0eWxlPVwid2lkdGg6IDEyMHJweDtoZWlnaHQ6IDEyMHJweDtcIj48L2ltYWdlPlxyXG5cdFx0XHRcdFx0XHQ8aW1hZ2Ugdi1pZj1cImlzSU9TXCIgOnNyYz1cIicvc3RhdGljL2ltYWdlcy9jZC1wbGF5LTUuZ2lmJ1wiXHJcblx0XHRcdFx0XHRcdFx0XHRjbGFzcz1cInBsYXktY2RcIj48L2ltYWdlPlxyXG5cdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHQ8IS0tIOinhumikeWxleekuuWPs+S+p+eahOaTjeS9nOaMiemSru+8jOWktOWDjyAtIOeCuei1niAtIOivhOiuuiAtIOi9rOWPkSAtLT5cclxuXHRcdFx0XHQ8dmlldyBjbGFzcz1cIm9wZXJhdGlvbi1ib3hcIj5cclxuXHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwib3BlcmF0aW9uLWZhY2UtYm94XCI+XHJcblx0XHRcdFx0XHRcdDxpbWFnZSA6c3JjPVwiaXRlbS52bG9nZXJGYWNlXCIgY2xhc3M9XCJ1c2VyLWZhY2VcIiBAY2xpY2s9XCJnb1VzZXJJbmZvU2VlU2VlKGl0ZW0udmxvZ2VySWQpXCI+PC9pbWFnZT5cclxuXHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdDxpbWFnZSB2LWlmPVwiIWl0ZW0uZG9JRm9sbG93VmxvZ2VyICYmIHVzZXJJZCAhPSB0aGlzVmxvZ2VySWRcIiBcclxuXHRcdFx0XHRcdFx0c3JjPVwiL3N0YXRpYy9pbWFnZXMvaWNvbi1mb2xsb3cucG5nXCIgXHJcblx0XHRcdFx0XHRcdEBjbGljaz1cImZvbGxvd01lKGl0ZW0udmxvZ2VySWQpXCIgXHJcblx0XHRcdFx0XHRcdGNsYXNzPVwiZm9sbG93LW1lXCI+PC9pbWFnZT5cclxuXHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwibGlrZS1ib3hcIj5cclxuXHRcdFx0XHRcdFx0PGltYWdlIHYtaWY9XCIhaXRlbS5kb0lMaWtlVGhpc1Zsb2dcIiBcclxuXHRcdFx0XHRcdFx0XHRzcmM9XCIvc3RhdGljL2ltYWdlcy9pY29uLXVubGlrZS5wbmdcIlxyXG5cdFx0XHRcdFx0XHRcdEBjbGljaz1cImxpa2VPckRpc2xpa2VWbG9nKDEpXCJcclxuXHRcdFx0XHRcdFx0XHRjbGFzcz1cImljb25cIj48L2ltYWdlPlxyXG5cdFx0XHRcdFx0XHQ8aW1hZ2Ugdi1pZj1cIml0ZW0uZG9JTGlrZVRoaXNWbG9nXCIgXHJcblx0XHRcdFx0XHRcdFx0c3JjPVwiL3N0YXRpYy9pbWFnZXMvaWNvbi1saWtlLnBuZ1wiIFxyXG5cdFx0XHRcdFx0XHRcdEBjbGljaz1cImxpa2VPckRpc2xpa2VWbG9nKDApXCJcclxuXHRcdFx0XHRcdFx0XHRjbGFzcz1cImljb25cIj48L2ltYWdlPlxyXG5cdFx0XHRcdFx0XHQ8dGV4dCBjbGFzcz1cInNvbWUtY291bnRzXCI+e3tnZXRHcmFjZU51bWJlcihpdGVtLmxpa2VDb3VudHMpfX08L3RleHQ+XHJcblx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImNvbW1lbnQtYW5kLXNoYXJlLWJveFwiPlxyXG5cdFx0XHRcdFx0XHQ8aW1hZ2Ugc3JjPVwiL3N0YXRpYy9pbWFnZXMvaWNvbi1jb21tZW50cy5wbmdcIiBAY2xpY2s9XCJjb21tZW50VG9nZ2xlXCIgY2xhc3M9XCJpY29uXCI+PC9pbWFnZT5cclxuXHRcdFx0XHRcdFx0PCEtLSA8dGV4dCBjbGFzcz1cInNvbWUtY291bnRzXCI+e3tpdGVtLmNvbW1lbnRzQ291bnRzfX08L3RleHQ+IC0tPlxyXG5cdFx0XHRcdFx0XHQ8dGV4dCBjbGFzcz1cInNvbWUtY291bnRzXCI+e3tnZXRHcmFjZU51bWJlcih0aGlzVmxvZ1RvdGFsQ29tZW50Q291bnRzKX19PC90ZXh0PlxyXG5cdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJjb21tZW50LWFuZC1zaGFyZS1ib3hcIj5cclxuXHRcdFx0XHRcdFx0PGltYWdlIHNyYz1cIi9zdGF0aWMvaW1hZ2VzL2ljb24tc2hhcmUucG5nXCIgQGNsaWNrPVwic2hhcmVUb2dnbGVcIiBjbGFzcz1cImljb25cIj48L2ltYWdlPlxyXG5cdFx0XHRcdFx0XHQ8dGV4dCBjbGFzcz1cInNvbWUtY291bnRzXCI+5YiG5LqrPC90ZXh0PlxyXG5cdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0PC9jZWxsPlxyXG5cdFx0PC9saXN0PlxyXG5cdFx0PCEtLSA8L3VuaS1saXN0PiAtLT5cclxuXHRcdFxyXG5cdFx0PHZpZXc+XHJcblx0XHRcdDwhLS0g5bqV6YOo56qX5Y+jcG9wdXAgLS0+XHJcblx0XHRcdDx1bmktcG9wdXAgcmVmPVwiY29tbWVudFwiIHR5cGU9XCJjb21tZW50XCI+XHJcblx0XHRcdFx0PHVuaS1wb3B1cC1jb21tZW50cyA6dGhpc1Zsb2dlcklkPVwidGhpc1Zsb2dlcklkXCIgOnRoaXNWbG9nSWQ9XCJ0aGlzVmxvZ0lkXCI+PC91bmktcG9wdXAtY29tbWVudHM+XHJcblx0XHRcdDwvdW5pLXBvcHVwPlxyXG5cdFx0XHQ8dW5pLXBvcHVwIHJlZj1cInNoYXJlXCIgYmFja2dyb3VuZC1jb2xvcj1cIiNmZmZcIiB0eXBlPVwic2hhcmVcIj5cclxuXHRcdFx0XHQ8dW5pLXBvcHVwLXNoYXJlIFxyXG5cdFx0XHRcdFx0OnRoaXNWbG9nZXJJZD1cInRoaXNWbG9nZXJJZFwiIFxyXG5cdFx0XHRcdFx0OnRoaXNWbG9nSWQ9XCJ0aGlzVmxvZ0lkXCIgXHJcblx0XHRcdFx0XHQ6dmxvZ1VybD1cInRoaXNWbG9nLnVybFwiXHJcblx0XHRcdFx0XHQ6aXNQcml2YXRlPVwidGhpc1Zsb2cuaXNQcml2YXRlXCJcclxuXHRcdFx0XHRcdD48L3VuaS1wb3B1cC1zaGFyZT5cclxuXHRcdFx0PC91bmktcG9wdXA+XHJcblx0XHQ8L3ZpZXc+XHJcblx0PC92aWV3PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuXHR2YXIgYXBwID0gZ2V0QXBwKCk7XHJcblx0ZXhwb3J0IGRlZmF1bHQge1xyXG5cdFx0cHJvcHM6IHtcclxuXHRcdFx0c2NyZWVuSGVpZ2h0OiB7XHJcblx0XHRcdFx0ZGVmYXVsdDogMFxyXG5cdFx0XHR9LFxyXG5cdFx0XHRzcmM6IHtcclxuXHRcdFx0XHRkZWZhdWx0OiBmYWxzZVxyXG5cdFx0XHR9LFxyXG5cdFx0XHRwbGF5U3RhdHVzOiB7XHJcblx0XHRcdFx0ZGVmYXVsdDogZmFsc2VcclxuXHRcdFx0fSxcclxuXHRcdFx0dmlkZW9MaXN0OiB7XHJcblx0XHRcdFx0ZGVmYXVsdDogW11cclxuXHRcdFx0fSxcclxuXHRcdFx0cmVmcmVzaExpc3Q6IHtcclxuXHRcdFx0XHRkZWZhdWx0OiBbXVxyXG5cdFx0XHR9LFxyXG5cdFx0XHRwYWdpbmdMaXN0OiB7XHJcblx0XHRcdFx0ZGVmYXVsdDogW11cclxuXHRcdFx0fVxyXG5cdFx0fSxcclxuXHRcdGRhdGEoKSB7XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0dGhpc1Zsb2c6IHt9LFx0XHRcdC8vIOW9k+WJjeeahOefreinhumikeWvueixoVxyXG5cdFx0XHRcdHRoaXNWbG9nSWQ6IFwiXCIsXHRcdFx0Ly8g5b2T5YmN55qE55+t6KeG6aKR5Li76ZSuaWRcclxuXHRcdFx0XHR0aGlzVmxvZ2VySWQ6IFwiXCIsXHRcdC8vIOW9k+WJjeeahOefreinhumikeWNmuS4u+eahOS4u+mUrmlkXHJcblx0XHRcdFx0dXNlcklkOiBcIlwiLFx0XHRcdFx0Ly8g5b2T5YmN55So5oi3aWRcclxuXHRcdFx0XHRcclxuXHRcdFx0XHRcclxuXHRcdFx0XHRyZWZyZXNoaW5nOiBmYWxzZSxcclxuXHRcdFx0XHRzaG93UmVmcmVzaExvYWRpbmc6IFwiaGlkZVwiLFxyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdHBsYXllckN1cjogMCxcclxuXHRcdFx0XHRwYWdlOiAwLFxyXG5cdFx0XHRcdHRvdGFsUGFnZTogMCxcclxuXHRcdFx0XHRwbGF5ZXJMaXN0OiB0aGlzLnZpZGVvTGlzdCxcclxuXHRcdFx0XHR0aGlzVmxvZ1RvdGFsQ29tZW50Q291bnRzOiAwLFxyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdHZpZGVvQ29udGV4dDoge30sXHJcblx0XHRcdFx0XHJcblx0XHRcdFx0Y3VycmVudEluZGV4OiAwLFxyXG5cdFx0XHRcdGNvbnRlbnRPZmZzZXRZOiAwLFxyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdHRpbWVzOiBuZXcgRGF0ZSgpLmdldFRpbWUoKSxcclxuXHRcdFx0XHRcclxuXHRcdFx0XHRvYmplY3RGaXQ6IFwiZmlsbFwiLFxyXG5cdFx0XHRcdGlzSU9TOiB1bmkuZ2V0U3lzdGVtSW5mb1N5bmMoKS5wbGF0Zm9ybSA9PSBcImlvc1wiXHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblx0XHRjcmVhdGVkKCkge1xyXG5cdFx0XHQvLyAxLiDliKTmlq3orr7lpIflubPlj7DvvIzorr7nva7op4bpopHmmL7npLrmqKHlvI9cclxuXHRcdFx0Ly8gaU9T5bmz5Y+w6KeG6aKR5pKt5pS+5pyJ54m55q6K5aSE55CG77yM6Z2eaU9T5bmz5Y+w77yI5aaCQW5kcm9pZO+8ieS9v+eUqFwiY292ZXJcIuaooeW8j1xyXG5cdFx0XHQvLyDnoa7kv53op4bpopHloavlhYXmlbTkuKrlrrnlmajvvIzlj6/og73kvJrmnInoo4HliapcclxuXHRcdFx0aWYoIXRoaXMuaXNJT1MpIHtcclxuXHRcdFx0XHR0aGlzLm9iamVjdEZpdCA9IFwiY292ZXJcIjtcclxuXHRcdFx0fVxyXG5cdFx0XHQvLyAyLiDojrflj5blvZPliY3nmbvlvZXnlKjmiLfkv6Hmga9cclxuXHRcdFx0dmFyIG15VXNlckluZm8gPSBnZXRBcHAoKS5nZXRVc2VySW5mb1Nlc3Npb24oKTtcclxuXHRcdFx0aWYgKG15VXNlckluZm8gIT0gbnVsbCkge1xyXG5cdFx0XHRcdHRoaXMudXNlcklkID0gZ2V0QXBwKCkuZ2V0VXNlckluZm9TZXNzaW9uKCkuaWQ7XHJcblx0XHRcdH1cclxuXHRcdFx0Ly8g5p+l6K+i6aaW6aG155+t6KeG6aKR5YiX6KGoXHJcblx0XHRcdHRoaXMuZGlzcGxheVZpZGVvUGFnaW5nKHRoaXMucGFnZSArIDEsIHRydWUpO1xyXG5cdFx0XHQvLyA1LiDliJvlu7rop4bpopHkuIrkuIvmloflr7nosaFcclxuXHRcdFx0Ly8g5Yib5bu65LiA5Liq5LiO6aG16Z2i5Lit6KeG6aKR57uE5Lu257uR5a6a55qE5LiK5LiL5paH5a+56LGhXHJcblx0XHRcdC8vICdteVZpZGVvJ+aYr+inhumikee7hOS7tueahGlk77yM6YCa6L+H6L+Z5Liq5LiK5LiL5paH5Y+v5Lul5o6n5Yi26KeG6aKR55qE5pKt5pS+44CB5pqC5YGc562J5pON5L2cXHJcblx0XHRcdHZhciB2aWRlb0NvbnRleHQgPSB1bmkuY3JlYXRlVmlkZW9Db250ZXh0KCdteVZpZGVvJyk7XHJcblx0XHRcdHRoaXMudmlkZW9Db250ZXh0ID0gdmlkZW9Db250ZXh0O1xyXG5cdFx0XHQvLyDms6jmhI/vvJrov5nph4zkvb/nlKjnmoTmmK91bmktYXBw55qEdW5pLmNyZWF0ZVZpZGVvQ29udGV4dCBBUElcclxuXHRcdFx0Ly8g5a6D5Lya6L+U5Zue5LiA5Liq6KeG6aKR5LiK5LiL5paH5a+56LGh77yM5Y+v5Lul6LCD55SocGxheSgp44CBcGF1c2UoKeOAgXNlZWsoKeetieaWueazlVxyXG5cdFx0XHQvLyDlrp7njrDlr7nop4bpopHmkq3mlL7nmoTnsr7noa7mjqfliLZcclxuXHRcdH0sXHJcblx0XHR3YXRjaDoge1xyXG5cdFx0XHRyZWZyZXNoTGlzdCh2YWx1ZSkge1xyXG5cdFx0XHRcdHZhciBtZSA9IHRoaXM7XHJcblx0XHRcdFx0dmFyIG5ld0xpc3QgPSB2YWx1ZTtcclxuXHRcdFx0XHRpZiAobmV3TGlzdCAhPSBudWxsICYmIG5ld0xpc3QgIT0gdW5kZWZpbmVkICYmIG5ld0xpc3QubGVuZ3RoID4gMCkge1xyXG5cdFx0XHRcdFx0bWUucGxheWVyTGlzdCA9IG5ld0xpc3Q7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdC8vIOmHjee9rlxyXG5cdFx0XHRcdHRoaXMucGxheWVyQ3VyID0gMDtcclxuXHRcdFx0XHR0aGlzLmN1cnJlbnRJbmRleCA9IDA7XHJcblx0XHRcdFx0dGhpcy5jb250ZW50T2Zmc2V0WSA9MDtcclxuXHRcdFx0fSxcclxuXHRcdFx0XHJcblx0XHRcdHBsYXlTdGF0dXM6IGZ1bmN0aW9uKHZhbCkge1xyXG5cdFx0XHRcdHZhciBtZSA9IHRoaXM7XHJcblx0XHRcdFx0XHJcblx0XHRcdFx0aWYgKCF2YWwpIHtcclxuXHRcdFx0XHRcdG1lLnZpZGVvQ29udGV4dC5wYXVzZSgpO1xyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRtZS52aWRlb0NvbnRleHQucGxheSgpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fSxcclxuXHRcdG1ldGhvZHM6IHtcclxuXHRcdFx0Ly8g5oqK6LaF6L+HMTAwMOaIljEwMDAw55qE5pWw5a2X6LCD5pW077yM5q+U5aaCMS4zay82Ljh3XHJcblx0XHRcdGdldEdyYWNlTnVtYmVyKG51bSkge1xyXG5cdFx0XHRcdHJldHVybiBnZXRBcHAoKS5ncmFjZU51bWJlcihudW0pO1xyXG5cdFx0XHR9LFxyXG5cdFx0XHRmcmVzaENvbW1lbnRDb3VudHMoKSB7XHJcblx0XHRcdFx0dmFyIG1lID0gdGhpcztcclxuXHRcdFx0XHR2YXIgc2VydmVyVXJsID0gYXBwLmdsb2JhbERhdGEuc2VydmVyVXJsO1xyXG5cdFx0XHRcdHZhciBjdXJyZW50SW5kZXggPSBtZS5wbGF5ZXJDdXI7XHJcblx0XHRcdFx0dmFyIHZsb2cgPSBtZS5wbGF5ZXJMaXN0W2N1cnJlbnRJbmRleF07XHJcblx0XHRcdFx0dmFyIHZsb2dJZCA9IHZsb2cudmxvZ0lkO1xyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdHZhciBzZXJ2ZXJVcmwgPSBhcHAuZ2xvYmFsRGF0YS5zZXJ2ZXJVcmw7XHJcblx0XHRcdFx0dW5pLnJlcXVlc3Qoe1xyXG5cdFx0XHRcdFx0bWV0aG9kOiBcIkdFVFwiLFxyXG5cdFx0XHRcdFx0dXJsOiBzZXJ2ZXJVcmwgKyBcIi9jb21tZW50L2NvdW50cz92bG9nSWQ9XCIgKyB2bG9nSWQsXHJcblx0XHRcdFx0XHRzdWNjZXNzKHJlc3VsdCkge1xyXG5cdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0aWYgKHJlc3VsdC5kYXRhLnN0YXR1cyA9PSAyMDApIHtcclxuXHRcdFx0XHRcdFx0XHRtZS50aGlzVmxvZ1RvdGFsQ29tZW50Q291bnRzID0gcmVzdWx0LmRhdGEuZGF0YTtcclxuXHRcdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0XHRtZS50aGlzVmxvZ1RvdGFsQ29tZW50Q291bnRzID0gMDtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9LFxyXG5cdFx0XHRsaWtlT3JEaXNsaWtlVmxvZyhpc0xpa2UpIHtcclxuXHRcdFx0XHR2YXIgbWUgPSB0aGlzO1xyXG5cdFx0XHRcdGlmIChpc0xpa2UgPT0gMSkge1xyXG5cdFx0XHRcdFx0Ly8g5Zac5qyiL+eCuei1nuinhumikVxyXG5cdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdHZhciBteVVzZXJJbmZvID0gZ2V0QXBwKCkuZ2V0VXNlckluZm9TZXNzaW9uKCk7XHJcblx0XHRcdFx0XHRpZiAobXlVc2VySW5mbyA9PSBudWxsKSB7XHJcblx0XHRcdFx0XHRcdHVuaS5zaG93VG9hc3Qoe1xyXG5cdFx0XHRcdFx0XHRcdGR1cmF0aW9uOiAzMDAwLFxyXG5cdFx0XHRcdFx0XHRcdHRpdGxlOiBcIuivt+eZu+W9lX5cIixcclxuXHRcdFx0XHRcdFx0XHRpY29uOiBcIm5vbmVcIlxyXG5cdFx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHRcdFx0dW5pLm5hdmlnYXRlVG8oe1xyXG5cdFx0XHRcdFx0XHRcdHVybDogXCIuLi9sb2dpblJlZ2lzdC9sb2dpblJlZ2lzdFwiLFxyXG5cdFx0XHRcdFx0XHRcdGFuaW1hdGlvblR5cGU6IFwic2xpZGUtaW4tYm90dG9tXCIsXHJcblx0XHRcdFx0XHRcdFx0c3VjY2VzcygpIHtcclxuXHRcdFx0XHRcdFx0XHRcdG1lLmxvZ2luV29yZHMgPSBcIuivt+eZu+W9lVwiXHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHRcdFx0cmV0dXJuO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0dmFyIHVzZXJJZCA9IGdldEFwcCgpLmdldFVzZXJJbmZvU2Vzc2lvbigpLmlkO1xyXG5cdFx0XHRcdFx0dmFyIHNlcnZlclVybCA9IGFwcC5nbG9iYWxEYXRhLnNlcnZlclVybDtcclxuXHRcdFx0XHRcdHZhciBjdXJyZW50SW5kZXggPSBtZS5wbGF5ZXJDdXI7XHJcblx0XHRcdFx0XHR2YXIgdmxvZyA9IG1lLnBsYXllckxpc3RbY3VycmVudEluZGV4XTtcclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0dW5pLnJlcXVlc3Qoe1xyXG5cdFx0XHRcdFx0XHRtZXRob2Q6IFwiUE9TVFwiLFxyXG5cdFx0XHRcdFx0XHRoZWFkZXI6IHtcclxuXHRcdFx0XHRcdFx0XHRoZWFkZXJVc2VySWQ6IHVzZXJJZCxcclxuXHRcdFx0XHRcdFx0XHRoZWFkZXJVc2VyVG9rZW46IGFwcC5nZXRVc2VyU2Vzc2lvblRva2VuKClcclxuXHRcdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdFx0dXJsOiBzZXJ2ZXJVcmwgKyBcIi92bG9nL2xpa2U/dXNlcklkPVwiICsgdXNlcklkICsgXCImdmxvZ2VySWQ9XCIgKyB2bG9nLnZsb2dlcklkICsgXCImdmxvZ0lkPVwiICsgdmxvZy52bG9nSWQsXHJcblx0XHRcdFx0XHRcdHN1Y2Nlc3MocmVzdWx0KSB7XHJcblx0XHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdFx0aWYgKHJlc3VsdC5kYXRhLnN0YXR1cyA9PSAyMDApIHtcclxuXHRcdFx0XHRcdFx0XHRcdG1lLnJlTGlrZVBsYXlMaXN0KHZsb2cudmxvZ0lkKTtcclxuXHRcdFx0XHRcdFx0XHRcdG1lLnJlZnJlc2hWbG9nQ291bnRzKCk7XHJcblx0XHRcdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0XHRcdHVuaS5zaG93VG9hc3Qoe1xyXG5cdFx0XHRcdFx0XHRcdFx0XHR0aXRsZTogcmVzdWx0LmRhdGEubXNnLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRpY29uOiBcIm5vbmVcIixcclxuXHRcdFx0XHRcdFx0XHRcdFx0ZHVyYXRpb246IDMwMDBcclxuXHRcdFx0XHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHR9IGVsc2UgaWYgKGlzTGlrZSA9PSAwKSB7XHJcblx0XHRcdFx0XHQvLyDlj5bmtojllpzmrKIv54K56LWe6KeG6aKRXHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdHZhciBteVVzZXJJbmZvID0gZ2V0QXBwKCkuZ2V0VXNlckluZm9TZXNzaW9uKCk7XHJcblx0XHRcdFx0XHRpZiAobXlVc2VySW5mbyA9PSBudWxsKSB7XHJcblx0XHRcdFx0XHRcdHVuaS5zaG93VG9hc3Qoe1xyXG5cdFx0XHRcdFx0XHRcdGR1cmF0aW9uOiAzMDAwLFxyXG5cdFx0XHRcdFx0XHRcdHRpdGxlOiBcIuivt+eZu+W9lX5cIixcclxuXHRcdFx0XHRcdFx0XHRpY29uOiBcIm5vbmVcIlxyXG5cdFx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHRcdFx0dW5pLm5hdmlnYXRlVG8oe1xyXG5cdFx0XHRcdFx0XHRcdHVybDogXCIuLi9sb2dpblJlZ2lzdC9sb2dpblJlZ2lzdFwiLFxyXG5cdFx0XHRcdFx0XHRcdGFuaW1hdGlvblR5cGU6IFwic2xpZGUtaW4tYm90dG9tXCIsXHJcblx0XHRcdFx0XHRcdFx0c3VjY2VzcygpIHtcclxuXHRcdFx0XHRcdFx0XHRcdG1lLmxvZ2luV29yZHMgPSBcIuivt+eZu+W9lVwiXHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHRcdFx0cmV0dXJuO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0dmFyIHVzZXJJZCA9IGdldEFwcCgpLmdldFVzZXJJbmZvU2Vzc2lvbigpLmlkO1xyXG5cdFx0XHRcdFx0dmFyIHNlcnZlclVybCA9IGFwcC5nbG9iYWxEYXRhLnNlcnZlclVybDtcclxuXHRcdFx0XHRcdHZhciBjdXJyZW50SW5kZXggPSBtZS5wbGF5ZXJDdXI7XHJcblx0XHRcdFx0XHR2YXIgdmxvZyA9IG1lLnBsYXllckxpc3RbY3VycmVudEluZGV4XTtcclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0dW5pLnJlcXVlc3Qoe1xyXG5cdFx0XHRcdFx0XHRtZXRob2Q6IFwiUE9TVFwiLFxyXG5cdFx0XHRcdFx0XHRoZWFkZXI6IHtcclxuXHRcdFx0XHRcdFx0XHRoZWFkZXJVc2VySWQ6IHVzZXJJZCxcclxuXHRcdFx0XHRcdFx0XHRoZWFkZXJVc2VyVG9rZW46IGFwcC5nZXRVc2VyU2Vzc2lvblRva2VuKClcclxuXHRcdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdFx0dXJsOiBzZXJ2ZXJVcmwgKyBcIi92bG9nL3VubGlrZT91c2VySWQ9XCIgKyB1c2VySWQgKyBcIiZ2bG9nZXJJZD1cIiArIHZsb2cudmxvZ2VySWQgKyBcIiZ2bG9nSWQ9XCIgKyB2bG9nLnZsb2dJZCxcclxuXHRcdFx0XHRcdFx0c3VjY2VzcyhyZXN1bHQpIHtcclxuXHRcdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0XHRpZiAocmVzdWx0LmRhdGEuc3RhdHVzID09IDIwMCkge1xyXG5cdFx0XHRcdFx0XHRcdFx0bWUucmVEaXNsaWtlUGxheUxpc3QodmxvZy52bG9nSWQpO1xyXG5cdFx0XHRcdFx0XHRcdFx0bWUucmVmcmVzaFZsb2dDb3VudHMoKTtcclxuXHRcdFx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRcdFx0dW5pLnNob3dUb2FzdCh7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHRpdGxlOiByZXN1bHQuZGF0YS5tc2csXHJcblx0XHRcdFx0XHRcdFx0XHRcdGljb246IFwibm9uZVwiLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRkdXJhdGlvbjogMzAwMFxyXG5cdFx0XHRcdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSxcclxuXHRcdFx0XHJcblx0XHRcdC8vIOWWnOasoi/ngrnotZ7nmoRsaXN06YeN5paw6K6+572uXHJcblx0XHRcdHJlTGlrZVBsYXlMaXN0KHZsb2dJZCkge1xyXG5cdFx0XHRcdHZhciBtZSA9IHRoaXM7XHJcblx0XHRcdFx0dmFyIHBsYXllckxpc3QgPSBtZS5wbGF5ZXJMaXN0O1xyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdC8vIOWFs+azqOS7peWQju+8jOW+queOr+W9k+WJjXBsYXllckxpc3TvvIzkv67mlLnlr7nlupTnsonkuJ3lhbPns7vnmoRkb0lGb2xsb3dWbG9nZXLmlLnkuLp0cnVlXHJcblx0XHRcdFx0Zm9yICh2YXIgaSA9IDAgOyBpIDwgcGxheWVyTGlzdC5sZW5ndGggOyBpICsrKSB7XHJcblx0XHRcdFx0XHR2YXIgdmxvZyA9IHBsYXllckxpc3RbaV07XHJcblx0XHRcdFx0XHRpZiAodmxvZy52bG9nSWQgPT0gdmxvZ0lkKSB7XHJcblx0XHRcdFx0XHRcdHZsb2cuZG9JTGlrZVRoaXNWbG9nID0gdHJ1ZTtcclxuXHRcdFx0XHRcdFx0cGxheWVyTGlzdC5zcGxpY2UoaSwxLCB2bG9nKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0bWUucGxheWVyTGlzdCA9IHBsYXllckxpc3Q7XHJcblx0XHRcdH0sXHJcblx0XHRcdHJlRGlzbGlrZVBsYXlMaXN0KHZsb2dJZCkge1xyXG5cdFx0XHRcdHZhciBtZSA9IHRoaXM7XHJcblx0XHRcdFx0dmFyIHBsYXllckxpc3QgPSBtZS5wbGF5ZXJMaXN0O1xyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdC8vIOWFs+azqOS7peWQju+8jOW+queOr+W9k+WJjXBsYXllckxpc3TvvIzkv67mlLnlr7nlupTnsonkuJ3lhbPns7vnmoRkb0lGb2xsb3dWbG9nZXLmlLnkuLp0cnVlXHJcblx0XHRcdFx0Zm9yICh2YXIgaSA9IDAgOyBpIDwgcGxheWVyTGlzdC5sZW5ndGggOyBpICsrKSB7XHJcblx0XHRcdFx0XHR2YXIgdmxvZyA9IHBsYXllckxpc3RbaV07XHJcblx0XHRcdFx0XHRpZiAodmxvZy52bG9nSWQgPT0gdmxvZ0lkKSB7XHJcblx0XHRcdFx0XHRcdHZsb2cuZG9JTGlrZVRoaXNWbG9nID0gZmFsc2U7XHJcblx0XHRcdFx0XHRcdHBsYXllckxpc3Quc3BsaWNlKGksMSwgdmxvZyk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdG1lLnBsYXllckxpc3QgPSBwbGF5ZXJMaXN0O1xyXG5cdFx0XHR9LFxyXG5cdFx0XHRcclxuXHRcdFx0Ly8g5YWz5rOo5ZCO55qEbGlzdOmHjeaWsOiuvue9rlxyXG5cdFx0XHRyZUZvbGxvd1BsYXlMaXN0KHZsb2dlcklkKSB7XHJcblx0XHRcdFx0dmFyIG1lID0gdGhpcztcclxuXHRcdFx0XHR2YXIgcGxheWVyTGlzdCA9IG1lLnBsYXllckxpc3Q7XHJcblx0XHRcdFx0Ly8g5YWz5rOo5Lul5ZCO77yM5b6q546v5b2T5YmNcGxheWVyTGlzdO+8jOS/ruaUueWvueW6lOeyieS4neWFs+ezu+eahGRvSUZvbGxvd1Zsb2dlcuaUueS4unRydWVcclxuXHRcdFx0XHRmb3IgKHZhciBpID0gMCA7IGkgPCBwbGF5ZXJMaXN0Lmxlbmd0aCA7IGkgKyspIHtcclxuXHRcdFx0XHRcdHZhciB2bG9nID0gcGxheWVyTGlzdFtpXTtcclxuXHRcdFx0XHRcdGlmICh2bG9nLnZsb2dlcklkID09IHZsb2dlcklkKSB7XHJcblx0XHRcdFx0XHRcdHZsb2cuZG9JRm9sbG93VmxvZ2VyID0gdHJ1ZTtcclxuXHRcdFx0XHRcdFx0cGxheWVyTGlzdC5zcGxpY2UoaSwxLCB2bG9nKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0bWUucGxheWVyTGlzdCA9IHBsYXllckxpc3Q7XHJcblx0XHRcdH0sXHJcblx0XHRcdC8vIOWPluWFs+WQjueahGxpc3Tph43mlrDorr7nva5cclxuXHRcdFx0cmVDYW5jZWxQbGF5TGlzdCh2bG9nZXJJZCkge1xyXG5cdFx0XHRcdHZhciBtZSA9IHRoaXM7XHJcblx0XHRcdFx0dmFyIHBsYXllckxpc3QgPSBtZS5wbGF5ZXJMaXN0O1xyXG5cdFx0XHRcdC8vIOWPluazqOS7peWQju+8jOW+queOr+W9k+WJjXBsYXllckxpc3TvvIzkv67mlLnlr7nlupTnsonkuJ3lhbPns7vnmoRkb0lGb2xsb3dWbG9nZXLmlLnkuLpmYWxzZVxyXG5cdFx0XHRcdGZvciAodmFyIGkgPSAwIDsgaSA8IHBsYXllckxpc3QubGVuZ3RoIDsgaSArKykge1xyXG5cdFx0XHRcdFx0dmFyIHZsb2cgPSBwbGF5ZXJMaXN0W2ldO1xyXG5cdFx0XHRcdFx0aWYgKHZsb2cudmxvZ2VySWQgPT0gdmxvZ2VySWQpIHtcclxuXHRcdFx0XHRcdFx0dmxvZy5kb0lGb2xsb3dWbG9nZXIgPSBmYWxzZTtcclxuXHRcdFx0XHRcdFx0cGxheWVyTGlzdC5zcGxpY2UoaSwxLCB2bG9nKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0bWUucGxheWVyTGlzdCA9IHBsYXllckxpc3Q7XHJcblx0XHRcdH0sXHJcblx0XHRcdFxyXG5cdFx0XHRcclxuXHRcdFx0Ly8g5YWz5rOo5Y2a5Li7XHJcblx0XHRcdGZvbGxvd01lKHZsb2dlcklkKSB7XHJcblx0XHRcdFx0dmFyIG1lID0gdGhpcztcclxuXHRcdFx0XHR2YXIgbXlVc2VySW5mbyA9IGdldEFwcCgpLmdldFVzZXJJbmZvU2Vzc2lvbigpO1xyXG5cdFx0XHRcdGlmIChteVVzZXJJbmZvID09IG51bGwpIHtcclxuXHRcdFx0XHRcdHVuaS5zaG93VG9hc3Qoe1xyXG5cdFx0XHRcdFx0XHRkdXJhdGlvbjogMzAwMCxcclxuXHRcdFx0XHRcdFx0dGl0bGU6IFwi6K+355m75b2VflwiLFxyXG5cdFx0XHRcdFx0XHRpY29uOiBcIm5vbmVcIlxyXG5cdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdHVuaS5uYXZpZ2F0ZVRvKHtcclxuXHRcdFx0XHRcdFx0dXJsOiBcIi4uL2xvZ2luUmVnaXN0L2xvZ2luUmVnaXN0XCIsXHJcblx0XHRcdFx0XHRcdGFuaW1hdGlvblR5cGU6IFwic2xpZGUtaW4tYm90dG9tXCIsXHJcblx0XHRcdFx0XHRcdHN1Y2Nlc3MoKSB7XHJcblx0XHRcdFx0XHRcdFx0bWUubG9naW5Xb3JkcyA9IFwi6K+355m75b2VXCJcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdHJldHVybjtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0dmFyIHVzZXJJZCA9IGdldEFwcCgpLmdldFVzZXJJbmZvU2Vzc2lvbigpLmlkO1xyXG5cdFx0XHRcdHZhciBzZXJ2ZXJVcmwgPSBhcHAuZ2xvYmFsRGF0YS5zZXJ2ZXJVcmw7XHJcblx0XHRcdFx0dW5pLnJlcXVlc3Qoe1xyXG5cdFx0XHRcdFx0bWV0aG9kOiBcIlBPU1RcIixcclxuXHRcdFx0XHRcdGhlYWRlcjoge1xyXG5cdFx0XHRcdFx0XHRoZWFkZXJVc2VySWQ6IHVzZXJJZCxcclxuXHRcdFx0XHRcdFx0aGVhZGVyVXNlclRva2VuOiBhcHAuZ2V0VXNlclNlc3Npb25Ub2tlbigpXHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0dXJsOiBzZXJ2ZXJVcmwgKyBcIi9mYW5zL2ZvbGxvdz9teUlkPVwiICsgdXNlcklkICsgXCImdmxvZ2VySWQ9XCIgKyB2bG9nZXJJZCxcclxuXHRcdFx0XHRcdHN1Y2Nlc3MocmVzdWx0KSB7XHJcblx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHRpZiAocmVzdWx0LmRhdGEuc3RhdHVzID09IDIwMCkge1xyXG5cdFx0XHRcdFx0XHRcdG1lLnJlRm9sbG93UGxheUxpc3QodmxvZ2VySWQpO1xyXG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRcdHVuaS5zaG93VG9hc3Qoe1xyXG5cdFx0XHRcdFx0XHRcdFx0dGl0bGU6IHJlc3VsdC5kYXRhLm1zZyxcclxuXHRcdFx0XHRcdFx0XHRcdGljb246IFwibm9uZVwiLFxyXG5cdFx0XHRcdFx0XHRcdFx0ZHVyYXRpb246IDMwMDBcclxuXHRcdFx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFxyXG5cdFx0XHR9LFxyXG5cdFx0XHRcclxuXHRcdFx0Z29Vc2VySW5mb1NlZVNlZSh1c2VySWQpIHtcclxuXHRcdFx0XHR1bmkuc2V0U3RvcmFnZVN5bmMoXCJ1c2VyUGFnZUlkXCIsIHVzZXJJZCk7XHJcblx0XHRcdFx0dW5pLm5hdmlnYXRlVG8oe1xyXG5cdFx0XHRcdFx0dXJsOiBcIi9wYWdlcy9tZS92bG9nZXJJbmZvP3VzZXJQYWdlSWQ9XCIgKyB1c2VySWRcclxuXHRcdFx0XHR9KVxyXG5cdFx0XHR9LFxyXG5cdFx0XHRcclxuXHRcdFx0bGlzdFNjcm9sbChlKSB7XHJcblx0XHRcdFx0aWYoZS5jb250ZW50T2Zmc2V0LnkgPiAwKSB7XHJcblx0XHRcdFx0XHR0aGlzLiRlbWl0KFwic2hvd0xvYWRpbmdcIik7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9LFxyXG5cdFx0XHRcclxuXHRcdFx0ZG93bmxvYWRWbG9nKCkge1xyXG5cdFx0XHRcdHZhciBtZSA9IHRoaXM7XHJcblx0XHRcdFx0dmFyIHNlcnZlclVybCA9IGFwcC5nbG9iYWxEYXRhLnNlcnZlclVybDtcclxuXHRcdFx0XHR2YXIgY3VycmVudEluZGV4ID0gbWUucGxheWVyQ3VyO1xyXG5cdFx0XHRcdHZhciB2bG9nID0gbWUucGxheWVyTGlzdFtjdXJyZW50SW5kZXhdO1xyXG5cdFx0XHRcdHZhciBwZW5kaW5nTGVuZ3RoID0gdmxvZy51cmw7XHJcblx0XHRcdH0sXHJcblx0XHRcdFxyXG5cdFx0XHRjb3B5TGluaygpIHtcclxuXHRcdFx0XHR2YXIgbWUgPSBtZTtcclxuXHRcdFx0fSxcclxuXHRcdFx0XHJcblx0XHRcdHNob3dRUkNvZGUoKSB7XHJcblx0XHRcdFx0dmFyIG1lID0gbWU7XHJcblx0XHRcdH0sXHJcblx0XHRcdFxyXG5cdFx0XHRjaGFuZ2VWbG9nVG9Qcml2YXRlKCkge1xyXG5cdFx0XHRcdHZhciBtZSA9IG1lO1xyXG5cdFx0XHR9LFxyXG5cdFx0XHRcdFx0XHRcclxuXHRcdFx0Ly8g5LiL5ouJ5Yi35paw55qE6L+H56iL5Lit77yM5pS55Y+Y5aS06YOodGFi5pi+56S655qE5a2X5qC3XHJcblx0XHRcdG9ucHVsbGluZ2Rvd24oZSkge1xyXG5cdFx0XHR9LFxyXG5cdFx0XHRvbnJlZnJlc2goZSkge1xyXG5cdFx0XHRcdHRoaXMucmVmcmVzaGluZyA9IHRydWU7XHJcblx0XHRcdFx0c2V0VGltZW91dCgoKSA9PiB7XHJcblx0XHRcdFx0XHR0aGlzLnJlZnJlc2hpbmcgPSBmYWxzZTtcclxuXHRcdFx0XHRcdHRoaXMuJGVtaXQoXCJoaWRlTG9hZGluZ1wiKTtcclxuXHRcdFx0XHRcdHRoaXMucmVmcmVzaFRleHQgPSAn4oaTIFB1bGwgVG8gUmVmcmVzaCdcclxuXHRcdFx0XHR9LCAzMDApXHJcblx0XHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0Ly8g6YCa6L+HbGlzdOe7hOS7tueahOS4i+aLieWIt+aWsOinpuWPkeW9k+WJjeaJgOWcqOmhtemdoueahOS4i+aLieWIt+aWsFxyXG5cdFx0XHRcdHVuaS5zdGFydFB1bGxEb3duUmVmcmVzaCgpO1xyXG5cdFx0XHR9LFxyXG5cdFx0XHRcclxuXHRcdFx0b25wbGF5OiBmdW5jdGlvbihlKSB7XHJcblx0XHRcdFx0aWYgKHVuaS5nZXRTeXN0ZW1JbmZvU3luYygpLnBsYXRmb3JtID09ICdpb3MnKSB7XHJcblx0XHRcdFx0XHR0aGlzLmRvcGxheSgwLjEpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSxcclxuXHRcdFx0b25lcnJvcjogZnVuY3Rpb24oZXJyKSB7XHJcblx0XHRcdH0sXHJcblx0XHRcdHRpbWV1cGRhdGU6IGZ1bmN0aW9uKGUpIHtcclxuXHRcdFx0XHRpZiAoZS5kZXRhaWwuY3VycmVudFRpbWUgPiAwLjIpIHtcclxuXHRcdFx0XHRcdHRoaXMuZG9wbGF5KGUuZGV0YWlsLmN1cnJlbnRUaW1lKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0sXHJcblx0XHRcdFxyXG5cdFx0XHRwbGF5T3JQYXVzZSgpIHtcclxuXHRcdFx0XHR2YXIgbWUgPSB0aGlzO1xyXG5cdFx0XHRcdHZhciBwbGF5U3RhdHVzID0gdGhpcy5wbGF5U3RhdHVzO1xyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdGlmICghcGxheVN0YXR1cykge1xyXG5cdFx0XHRcdFx0bWUudmlkZW9Db250ZXh0LnBhdXNlKCk7XHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdG1lLnZpZGVvQ29udGV4dC5wbGF5KCk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdHRoaXMucGxheVN0YXR1cyA9ICFwbGF5U3RhdHVzO1xyXG5cdFx0XHR9LFxyXG5cdFx0XHRcclxuXHRcdFx0XHJcblx0XHRcdHNjcm9sbDogZnVuY3Rpb24oZSkge1xyXG5cdFx0XHRcdGxldCBvcmlnaW5hbEluZGV4ID0gdGhpcy5jdXJyZW50SW5kZXg7XHJcblx0XHRcdFx0bGV0IGlzTmV4dCA9IGZhbHNlO1xyXG5cdFx0XHRcdGlmIChlLmNvbnRlbnRPZmZzZXQueSA8IHRoaXMuY29udGVudE9mZnNldFkpIHtcclxuXHRcdFx0XHRcdGlzTmV4dCA9IHRydWU7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdHRoaXMuY29udGVudE9mZnNldFkgPSBlLmNvbnRlbnRPZmZzZXQueTtcclxuXHRcdFx0XHRcclxuXHRcdFx0XHR2YXIgbnVtID0gdGhpcy5wbGF5ZXJMaXN0Lmxlbmd0aDtcclxuXHRcdFx0XHRcclxuXHRcdFx0XHR0aGlzLmN1cnJlbnRJbmRleCA9IE1hdGgucm91bmQoTWF0aC5hYnModGhpcy5jb250ZW50T2Zmc2V0WSkgLyAoZS5jb250ZW50U2l6ZS5oZWlnaHQgLyBudW0pKTtcclxuXHRcdFx0XHR0aGlzLm9uY2hhbmdlKHRoaXMuY3VycmVudEluZGV4KTtcclxuXHRcdFx0XHRcclxuXHRcdFx0XHR0aGlzLnRpbWVzID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XHJcblx0XHRcdFx0Ly8g5Yik5pat5aaC5p6c6KeG6aKR5YiX6KGo5oC76ZW/5bqmLeW9k+WJjeS4i+agh++8jOWwkeS6jjPkuKrvvIzliJnlvIDlp4vliIbpobXmn6Xor6LlkI7nu63nmoTop4bpopHvvIzlubbkuJTov73liqDliLDnjrDmnIlsaXN05LitXHJcblx0XHRcdFx0aWYgKCh0aGlzLnBsYXllckxpc3QubGVuZ3RoIC0gdGhpcy5jdXJyZW50SW5kZXgpIDwgMykge1xyXG5cdFx0XHRcdFx0Ly8g5aaC5p6c6KaB5YiG6aG155qEcGFnZeWSjOaAu+aVsHRvdGFsUGFnZeebuOetie+8jOWImeayoeacieabtOWkmlxyXG5cdFx0XHRcdFx0aWYgKHRoaXMucGFnZSA9PSB0aGlzLnRvdGFsUGFnZSkge1xyXG5cdFx0XHRcdFx0XHRyZXR1cm47XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR0aGlzLmRpc3BsYXlWaWRlb1BhZ2luZyh0aGlzLnBhZ2UgKyAxLCBmYWxzZSk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdFxyXG5cdFx0XHR9LFxyXG5cdFx0XHRcclxuXHRcdFx0Ly8g5YiG6aG15p+l6K+i5paw55qEbGlzdO+8jOW5tuS4lOi/veWKoOWIsOeOsOaciWxpc3TkuK1cclxuXHRcdFx0ZGlzcGxheVZpZGVvUGFnaW5nKHBhZ2UsIG5lZWRDbGVhckxpc3QpIHtcclxuXHRcdFx0XHQvLyDmn6Xor6LpppbpobXnn63op4bpopHliJfooahcclxuXHRcdFx0XHR2YXIgbWUgPSB0aGlzO1xyXG5cdFx0XHRcdHZhciBteVVzZXJJbmZvID0gZ2V0QXBwKCkuZ2V0VXNlckluZm9TZXNzaW9uKCk7XHJcblx0XHRcdFx0dmFyIHVzZXJJZCA9IFwiXCI7XHJcblx0XHRcdFx0aWYgKG15VXNlckluZm8gIT0gbnVsbCkge1xyXG5cdFx0XHRcdFx0dXNlcklkID0gbXlVc2VySW5mby5pZDtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0dmFyIHNlcnZlclVybCA9IGFwcC5nbG9iYWxEYXRhLnNlcnZlclVybDtcclxuXHRcdFx0XHR1bmkucmVxdWVzdCh7XHJcblx0XHRcdFx0XHRtZXRob2Q6IFwiR0VUXCIsXHJcblx0XHRcdFx0XHR1cmw6IHNlcnZlclVybCArIFwiL3Zsb2cvaW5kZXhMaXN0P3VzZXJJZD1cIiArIHVzZXJJZCArIFwiJnBhZ2U9XCIgKyBwYWdlICsgXCImcGFnZVNpemU9MTBcIixcclxuXHRcdFx0XHRcdHN1Y2Nlc3MocmVzdWx0KSB7XHJcblx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHRpZiAocmVzdWx0LmRhdGEuc3RhdHVzID09IDIwMCkge1xyXG5cdFx0XHRcdFx0XHRcdHZhciB2bG9nTGlzdCA9IHJlc3VsdC5kYXRhLmRhdGEucm93cztcclxuXHRcdFx0XHRcdFx0XHR2YXIgdG90YWxQYWdlID0gcmVzdWx0LmRhdGEuZGF0YS50b3RhbDtcclxuXHRcdFx0XHRcdFx0XHQvLyBtZS5wbGF5ZXJMaXN0ID0gdmxvZ0xpc3Q7XHJcblx0XHRcdFx0XHRcdFx0aWYgKG5lZWRDbGVhckxpc3QpIHtcclxuXHRcdFx0XHRcdFx0XHRcdG1lLnBsYXllckxpc3QgPSBbXTtcclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0bWUucGxheWVyTGlzdCA9IG1lLnBsYXllckxpc3QuY29uY2F0KHZsb2dMaXN0KTtcclxuXHRcdFx0XHRcdFx0XHRtZS5wYWdlID0gcGFnZTtcclxuXHRcdFx0XHRcdFx0XHRtZS50b3RhbFBhZ2UgPSB0b3RhbFBhZ2U7XHJcblx0XHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdFx0aWYgKG5lZWRDbGVhckxpc3QpIHtcclxuXHRcdFx0XHRcdFx0XHRcdG1lLnNldFRoaXNWbG9nSW5mbygpO1xyXG5cdFx0XHRcdFx0XHRcdFx0bWUuZnJlc2hDb21tZW50Q291bnRzKCk7XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRcdHVuaS5zaG93VG9hc3Qoe1xyXG5cdFx0XHRcdFx0XHRcdFx0dGl0bGU6IHJlc3VsdC5kYXRhLm1zZyxcclxuXHRcdFx0XHRcdFx0XHRcdGljb246IFwibm9uZVwiLFxyXG5cdFx0XHRcdFx0XHRcdFx0ZHVyYXRpb246IDMwMDBcclxuXHRcdFx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRjb21wbGV0ZSgpIHtcclxuXHRcdFx0XHRcdFx0dW5pLnN0b3BQdWxsRG93blJlZnJlc2goKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fSxcclxuXHRcdFx0XHJcblx0XHRcdGRvcGxheTogZnVuY3Rpb24odGltZSkge1xyXG5cdFx0XHRcdGlmICh0aW1lID4gMCkge1xyXG5cdFx0XHRcdFx0dGhpcy5wbGF5ZXJMaXN0W3RoaXMucGxheWVyQ3VyXS5wbGF5ID0gdHJ1ZTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0sXHJcblx0XHRcdG9uY2hhbmdlOiBmdW5jdGlvbihpbmRleCkge1xyXG5cdFx0XHRcdGlmIChpbmRleCAhPSB0aGlzLnBsYXllckN1cikge1xyXG5cdFx0XHRcdFx0dGhpcy5wbGF5ZXJMaXN0W3RoaXMucGxheWVyQ3VyXS5wbGF5ID0gZmFsc2U7XHJcblx0XHRcdFx0XHR0aGlzLnBsYXllckN1ciA9IGluZGV4O1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRcclxuXHRcdFx0XHR0aGlzLnJlZnJlc2hWbG9nQ291bnRzKCk7XHJcblx0XHRcdFx0dGhpcy5zZXRUaGlzVmxvZ0luZm8oKTtcclxuXHRcdFx0XHR0aGlzLmZyZXNoQ29tbWVudENvdW50cygpO1xyXG5cdFx0XHR9LFxyXG5cdFx0XHRcclxuXHRcdFx0Ly8g6K6+572u5b2T5YmNdmxvZ+eahOS/oeaBr1xyXG5cdFx0XHRzZXRUaGlzVmxvZ0luZm8oKSB7XHJcblx0XHRcdFx0dmFyIG1lID0gdGhpcztcclxuXHRcdFx0XHR2YXIgc2VydmVyVXJsID0gYXBwLmdsb2JhbERhdGEuc2VydmVyVXJsO1xyXG5cdFx0XHRcdHZhciBjdXJyZW50SW5kZXggPSBtZS5wbGF5ZXJDdXI7XHJcblx0XHRcdFx0dmFyIHZsb2cgPSBtZS5wbGF5ZXJMaXN0W2N1cnJlbnRJbmRleF07XHJcblx0XHRcdFx0dGhpcy50aGlzVmxvZyA9IHZsb2c7XHJcblx0XHRcdFx0dGhpcy50aGlzVmxvZ0lkID0gdmxvZy52bG9nSWQ7XHJcblx0XHRcdFx0dGhpcy50aGlzVmxvZ2VySWQgPSB2bG9nLnZsb2dlcklkO1xyXG5cdFx0XHR9LFxyXG5cdFx0XHRcclxuXHRcdFx0cmVmcmVzaFZsb2dDb3VudHMoKSB7XHJcblx0XHRcdFx0Ly8g5p+l6K+i5b2T5YmN54K56LWe5pWw77yM6YeN5paw6LWL5YC857uZ5b2T5YmN6KeG6aKRXHJcblx0XHRcdFx0dmFyIG1lID0gdGhpcztcclxuXHRcdFx0XHR2YXIgc2VydmVyVXJsID0gYXBwLmdsb2JhbERhdGEuc2VydmVyVXJsO1xyXG5cdFx0XHRcdHZhciBjdXJyZW50SW5kZXggPSBtZS5wbGF5ZXJDdXI7XHJcblx0XHRcdFx0dmFyIHZsb2cgPSBtZS5wbGF5ZXJMaXN0W2N1cnJlbnRJbmRleF07XHJcblx0XHRcdFx0dW5pLnJlcXVlc3Qoe1xyXG5cdFx0XHRcdFx0bWV0aG9kOiBcIlBPU1RcIixcclxuXHRcdFx0XHRcdHVybDogc2VydmVyVXJsICsgXCIvdmxvZy90b3RhbExpa2VkQ291bnRzP3Zsb2dJZD1cIiArIHZsb2cudmxvZ0lkLFxyXG5cdFx0XHRcdFx0c3VjY2VzcyhyZXN1bHQpIHtcclxuXHRcdFx0XHRcdFx0aWYgKHJlc3VsdC5kYXRhLnN0YXR1cyA9PSAyMDApIHtcclxuXHRcdFx0XHRcdFx0XHR2YXIgY291bnRzID0gcmVzdWx0LmRhdGEuZGF0YTtcclxuXHRcdFx0XHRcdFx0XHRtZS5yZUNoYW5nZVZsb2dMaWtlZENvdW50c0luUGxheUxpc3QodmxvZy52bG9nSWQsIGNvdW50cyk7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fSxcclxuXHRcdFx0XHJcblx0XHRcdHJlQ2hhbmdlVmxvZ0xpa2VkQ291bnRzSW5QbGF5TGlzdCh2bG9nSWQsIGNvdW50cykge1xyXG5cdFx0XHRcdHZhciBtZSA9IHRoaXM7XHJcblx0XHRcdFx0dmFyIHBsYXllckxpc3QgPSBtZS5wbGF5ZXJMaXN0O1xyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdC8vIOWFs+azqOS7peWQju+8jOW+queOr+W9k+WJjXBsYXllckxpc3TvvIzkv67mlLnlr7nlupTnsonkuJ3lhbPns7vnmoRkb0lGb2xsb3dWbG9nZXLmlLnkuLp0cnVlXHJcblx0XHRcdFx0Zm9yICh2YXIgaSA9IDAgOyBpIDwgcGxheWVyTGlzdC5sZW5ndGggOyBpICsrKSB7XHJcblx0XHRcdFx0XHR2YXIgdmxvZyA9IHBsYXllckxpc3RbaV07XHJcblx0XHRcdFx0XHRpZiAodmxvZy52bG9nSWQgPT0gdmxvZ0lkKSB7XHJcblx0XHRcdFx0XHRcdHZsb2cubGlrZUNvdW50cyA9IGNvdW50cztcclxuXHRcdFx0XHRcdFx0cGxheWVyTGlzdC5zcGxpY2UoaSwxLCB2bG9nKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0bWUucGxheWVyTGlzdCA9IHBsYXllckxpc3Q7XHJcblx0XHRcdH0sXHJcblx0XHRcdFxyXG5cdFx0XHRjb21tZW50VG9nZ2xlKCkge1xyXG5cdFx0XHRcdHRoaXMuJHJlZnMuY29tbWVudC5vcGVuKCk7XHJcblx0XHRcdFx0dW5pLmhpZGVUYWJCYXIoe1xyXG5cdFx0XHRcdFx0YW5pbWF0aW9uOiB0cnVlXHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdH0sXHJcblx0XHRcdHNoYXJlVG9nZ2xlKCkge1xyXG5cdFx0XHRcdHRoaXMuJHJlZnMuc2hhcmUub3BlbigpO1xyXG5cdFx0XHRcdHVuaS5oaWRlVGFiQmFyKHtcclxuXHRcdFx0XHRcdGFuaW1hdGlvbjogdHJ1ZVxyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG48L3NjcmlwdD5cclxuXHJcblxyXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///246\n");

/***/ }),
/* 247 */
/*!*****************************************************************************************************************!*\
  !*** C:/Users/TAOER/Desktop/ShayuVideo/ShayuVideoAPP/components/videoComp.vue?vue&type=style&index=0&lang=css& ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_videoComp_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-0-1!./node_modules/postcss-loader/src??ref--10-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./videoComp.vue?vue&type=style&index=0&lang=css& */ 248);
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_videoComp_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_videoComp_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_videoComp_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_videoComp_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_videoComp_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 248 */
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-0-1!./node_modules/postcss-loader/src??ref--10-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!C:/Users/TAOER/Desktop/ShayuVideo/ShayuVideoAPP/components/videoComp.vue?vue&type=style&index=0&lang=css& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  ".icon": {
    "": {
      "width": [
        "80rpx",
        0,
        0,
        0
      ],
      "height": [
        "80rpx",
        0,
        0,
        0
      ],
      "opacity": [
        0.9,
        0,
        0,
        0
      ]
    }
  },
  ".user-face": {
    "": {
      "width": [
        "100rpx",
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
      "borderRadius": [
        "100rpx",
        0,
        0,
        1
      ]
    }
  },
  ".play-cd": {
    "": {
      "width": [
        "150rpx",
        0,
        0,
        2
      ],
      "height": [
        "150rpx",
        0,
        0,
        2
      ],
      "opacity": [
        0.8,
        0,
        0,
        2
      ]
    }
  },
  ".refresh-info-txt": {
    "": {
      "color": [
        "#F1F1F1",
        0,
        0,
        3
      ],
      "textAlign": [
        "center",
        0,
        0,
        3
      ],
      "fontSize": [
        "12",
        0,
        0,
        3
      ]
    }
  },
  ".publish-info-box": {
    "": {
      "position": [
        "absolute",
        0,
        0,
        4
      ],
      "bottom": [
        "200rpx",
        0,
        0,
        4
      ],
      "left": [
        0,
        0,
        0,
        4
      ],
      "right": [
        0,
        0,
        0,
        4
      ],
      "paddingLeft": [
        "20rpx",
        0,
        0,
        4
      ],
      "paddingRight": [
        "20rpx",
        0,
        0,
        4
      ],
      "flexDirection": [
        "row",
        0,
        0,
        4
      ],
      "justifyContent": [
        "space-between",
        0,
        0,
        4
      ],
      "alignItems": [
        "center",
        0,
        0,
        4
      ]
    }
  },
  ".publish-info-vloger-name": {
    "": {
      "color": [
        "#FFFFFF",
        0,
        0,
        5
      ],
      "fontSize": [
        "40rpx",
        0,
        0,
        5
      ],
      "fontWeight": [
        "600",
        0,
        0,
        5
      ],
      "paddingTop": [
        "10rpx",
        0,
        0,
        5
      ],
      "paddingRight": [
        "10rpx",
        0,
        0,
        5
      ],
      "paddingBottom": [
        "10rpx",
        0,
        0,
        5
      ],
      "paddingLeft": [
        "10rpx",
        0,
        0,
        5
      ]
    }
  },
  ".publish-info-music-box": {
    "": {
      "flexDirection": [
        "row",
        0,
        0,
        6
      ],
      "alignItems": [
        "center",
        0,
        0,
        6
      ]
    }
  },
  ".publish-info-content": {
    "": {
      "color": [
        "#FFFFFF",
        0,
        0,
        7
      ],
      "fontSize": [
        "28rpx",
        0,
        0,
        7
      ],
      "fontWeight": [
        "400",
        0,
        0,
        7
      ],
      "paddingTop": [
        "10rpx",
        0,
        0,
        7
      ],
      "paddingRight": [
        "10rpx",
        0,
        0,
        7
      ],
      "paddingBottom": [
        "10rpx",
        0,
        0,
        7
      ],
      "paddingLeft": [
        "10rpx",
        0,
        0,
        7
      ],
      "lines": [
        5,
        0,
        0,
        7
      ],
      "width": [
        "520rpx",
        0,
        0,
        7
      ],
      "textOverflow": [
        "ellipsis",
        0,
        0,
        7
      ]
    }
  },
  ".icon-fire": {
    "": {
      "width": [
        "36rpx",
        0,
        0,
        8
      ],
      "height": [
        "36rpx",
        0,
        0,
        8
      ]
    }
  },
  ".muisc-words": {
    "": {
      "color": [
        "#FFFFFF",
        0,
        0,
        9
      ],
      "fontSize": [
        "28rpx",
        0,
        0,
        9
      ],
      "paddingTop": [
        "10rpx",
        0,
        0,
        9
      ],
      "paddingRight": [
        "10rpx",
        0,
        0,
        9
      ],
      "paddingBottom": [
        "10rpx",
        0,
        0,
        9
      ],
      "paddingLeft": [
        "10rpx",
        0,
        0,
        9
      ],
      "width": [
        "400rpx",
        0,
        0,
        9
      ]
    }
  },
  ".some-counts": {
    "": {
      "fontSize": [
        "24rpx",
        0,
        0,
        10
      ],
      "fontWeight": [
        "500",
        0,
        0,
        10
      ],
      "textAlign": [
        "center",
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
      "marginTop": [
        "2rpx",
        0,
        0,
        10
      ]
    }
  },
  ".operation-box": {
    "": {
      "position": [
        "absolute",
        0,
        0,
        11
      ],
      "top": [
        0,
        0,
        0,
        11
      ],
      "bottom": [
        0,
        0,
        0,
        11
      ],
      "right": [
        0,
        0,
        0,
        11
      ],
      "alignItems": [
        "center",
        0,
        0,
        11
      ],
      "justifyContent": [
        "center",
        0,
        0,
        11
      ],
      "paddingRight": [
        "20rpx",
        0,
        0,
        11
      ]
    }
  },
  ".operation-face-box": {
    "": {
      "borderRadius": [
        "100rpx",
        0,
        0,
        12
      ],
      "borderColor": [
        "#FFFFFF",
        0,
        0,
        12
      ],
      "borderWidth": [
        "3rpx",
        0,
        0,
        12
      ]
    }
  },
  ".follow-me": {
    "": {
      "width": [
        "40rpx",
        0,
        0,
        13
      ],
      "height": [
        "40rpx",
        0,
        0,
        13
      ],
      "borderRadius": [
        "10",
        0,
        0,
        13
      ],
      "position": [
        "relative",
        0,
        0,
        13
      ],
      "top": [
        "-20rpx",
        0,
        0,
        13
      ]
    }
  },
  ".like-box": {
    "": {
      "flexDirection": [
        "column",
        0,
        0,
        14
      ],
      "alignItems": [
        "center",
        0,
        0,
        14
      ],
      "marginTop": [
        "30rpx",
        0,
        0,
        14
      ]
    }
  },
  ".comment-and-share-box": {
    "": {
      "flexDirection": [
        "column",
        0,
        0,
        15
      ],
      "alignItems": [
        "center",
        0,
        0,
        15
      ],
      "marginTop": [
        "45rpx",
        0,
        0,
        15
      ]
    }
  },
  "@VERSION": 2
}

/***/ }),
/* 249 */
/*!**************************************************************************************!*\
  !*** C:/Users/TAOER/Desktop/ShayuVideo/ShayuVideoAPP/components/videoFollowComp.vue ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _videoFollowComp_vue_vue_type_template_id_7e58bf50___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./videoFollowComp.vue?vue&type=template&id=7e58bf50& */ 250);\n/* harmony import */ var _videoFollowComp_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./videoFollowComp.vue?vue&type=script&lang=js& */ 252);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _videoFollowComp_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _videoFollowComp_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 12);\n\nvar renderjs\n\n\nfunction injectStyles (context) {\n  \n  if(!this.options.style){\n          this.options.style = {}\n      }\n      if(Vue.prototype.__merge_style && Vue.prototype.__$appStyle__){\n        Vue.prototype.__merge_style(Vue.prototype.__$appStyle__, this.options.style)\n      }\n      if(Vue.prototype.__merge_style){\n                Vue.prototype.__merge_style(__webpack_require__(/*! ./videoFollowComp.vue?vue&type=style&index=0&lang=css& */ 254).default, this.options.style)\n            }else{\n                Object.assign(this.options.style,__webpack_require__(/*! ./videoFollowComp.vue?vue&type=style&index=0&lang=css& */ 254).default)\n            }\n\n}\n\n/* normalize component */\n\nvar component = Object(_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _videoFollowComp_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _videoFollowComp_vue_vue_type_template_id_7e58bf50___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _videoFollowComp_vue_vue_type_template_id_7e58bf50___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  \"9783c296\",\n  false,\n  _videoFollowComp_vue_vue_type_template_id_7e58bf50___WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ninjectStyles.call(component)\ncomponent.options.__file = \"components/videoFollowComp.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBNEg7QUFDNUg7QUFDbUU7QUFDTDtBQUM5RDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QyxtQkFBTyxDQUFDLGlFQUF3RDtBQUM1RyxhQUFhO0FBQ2IsaURBQWlELG1CQUFPLENBQUMsaUVBQXdEO0FBQ2pIOztBQUVBOztBQUVBO0FBQ3FLO0FBQ3JLLGdCQUFnQiwrS0FBVTtBQUMxQixFQUFFLHFGQUFNO0FBQ1IsRUFBRSwwRkFBTTtBQUNSLEVBQUUsbUdBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsOEZBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ0E7QUFDZSxnRiIsImZpbGUiOiIyNDkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucywgcmVjeWNsYWJsZVJlbmRlciwgY29tcG9uZW50cyB9IGZyb20gXCIuL3ZpZGVvRm9sbG93Q29tcC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9N2U1OGJmNTAmXCJcbnZhciByZW5kZXJqc1xuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi92aWRlb0ZvbGxvd0NvbXAudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi92aWRlb0ZvbGxvd0NvbXAudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5mdW5jdGlvbiBpbmplY3RTdHlsZXMgKGNvbnRleHQpIHtcbiAgXG4gIGlmKCF0aGlzLm9wdGlvbnMuc3R5bGUpe1xuICAgICAgICAgIHRoaXMub3B0aW9ucy5zdHlsZSA9IHt9XG4gICAgICB9XG4gICAgICBpZihWdWUucHJvdG90eXBlLl9fbWVyZ2Vfc3R5bGUgJiYgVnVlLnByb3RvdHlwZS5fXyRhcHBTdHlsZV9fKXtcbiAgICAgICAgVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlKFZ1ZS5wcm90b3R5cGUuX18kYXBwU3R5bGVfXywgdGhpcy5vcHRpb25zLnN0eWxlKVxuICAgICAgfVxuICAgICAgaWYoVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlKXtcbiAgICAgICAgICAgICAgICBWdWUucHJvdG90eXBlLl9fbWVyZ2Vfc3R5bGUocmVxdWlyZShcIi4vdmlkZW9Gb2xsb3dDb21wLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9Y3NzJlwiKS5kZWZhdWx0LCB0aGlzLm9wdGlvbnMuc3R5bGUpXG4gICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICBPYmplY3QuYXNzaWduKHRoaXMub3B0aW9ucy5zdHlsZSxyZXF1aXJlKFwiLi92aWRlb0ZvbGxvd0NvbXAudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3MmXCIpLmRlZmF1bHQpXG4gICAgICAgICAgICB9XG5cbn1cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiFEOlxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXHJ1bnRpbWVcXFxcY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIFwiOTc4M2MyOTZcIixcbiAgZmFsc2UsXG4gIGNvbXBvbmVudHMsXG4gIHJlbmRlcmpzXG4pXG5cbmluamVjdFN0eWxlcy5jYWxsKGNvbXBvbmVudClcbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiY29tcG9uZW50cy92aWRlb0ZvbGxvd0NvbXAudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///249\n");

/***/ }),
/* 250 */
/*!*********************************************************************************************************************!*\
  !*** C:/Users/TAOER/Desktop/ShayuVideo/ShayuVideoAPP/components/videoFollowComp.vue?vue&type=template&id=7e58bf50& ***!
  \*********************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_videoFollowComp_vue_vue_type_template_id_7e58bf50___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.recycle.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./videoFollowComp.vue?vue&type=template&id=7e58bf50& */ 251);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_videoFollowComp_vue_vue_type_template_id_7e58bf50___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_videoFollowComp_vue_vue_type_template_id_7e58bf50___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_videoFollowComp_vue_vue_type_template_id_7e58bf50___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_videoFollowComp_vue_vue_type_template_id_7e58bf50___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 251 */
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.recycle.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!C:/Users/TAOER/Desktop/ShayuVideo/ShayuVideoAPP/components/videoFollowComp.vue?vue&type=template&id=7e58bf50& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
try {
  components = {
    uniPopup:
      __webpack_require__(/*! @/uni_modules/uni-popup/components/uni-popup/uni-popup.vue */ 192)
        .default,
    uniPopupComments:
      __webpack_require__(/*! @/uni_modules/uni-popup/components/uni-popup-comments/uni-popup-comments.vue */ 205)
        .default,
    uniPopupShare:
      __webpack_require__(/*! @/uni_modules/uni-popup/components/uni-popup-share/uni-popup-share.vue */ 215)
        .default,
  }
} catch (e) {
  if (
    e.message.indexOf("Cannot find module") !== -1 &&
    e.message.indexOf(".vue") !== -1
  ) {
    console.error(e.message)
    console.error("1. 排查组件名称拼写是否正确")
    console.error(
      "2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"
    )
    console.error(
      "3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件"
    )
  } else {
    throw e
  }
}
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("view", { staticStyle: { flex: "1" } }, [
    _c(
      "list",
      {
        attrs: { pagingEnabled: true, showScrollbar: false, scrollable: true },
        on: { scroll: _vm.listScroll, scrollend: _vm.scroll },
      },
      [
        _c(
          "refresh",
          {
            attrs: { display: _vm.refreshing ? "show" : "hide" },
            on: { pullingdown: _vm.onpullingdown, refresh: _vm.onrefresh },
          },
          [
            _c("u-text", {
              staticClass: ["refresh-info-txt"],
              appendAsTree: true,
              attrs: { append: "tree" },
            }),
            _c("loading-indicator"),
          ]
        ),
        _vm._l(_vm.playerList, function (item, index) {
          return _c(
            "cell",
            {
              key: index,
              style: { height: _vm.screenHeight + "px" },
              appendAsTree: true,
              attrs: { recycle: false, dataIndex: index, append: "tree" },
            },
            [
              _vm.playerCur === index
                ? _c("u-video", {
                    ref: "myFollowVideo",
                    refInFor: true,
                    staticStyle: { width: "750rpx" },
                    style: { height: _vm.screenHeight + "px" },
                    attrs: {
                      id: "myFollowVideo",
                      objectFit: item.width >= item.height ? "contain" : "fill",
                      src: item.url,
                      controls: false,
                      enableProgressGesture: false,
                      loop: true,
                      autoplay: true,
                      showLoading: "true",
                    },
                    on: {
                      click: _vm.playOrPause,
                      play: _vm.onplay,
                      error: _vm.onerror,
                      timeupdate: _vm.timeupdate,
                    },
                  })
                : _vm._e(),
              !item.play
                ? _c("u-image", {
                    staticStyle: { width: "750rpx", filter: "blur(10px)" },
                    style: { height: _vm.screenHeight + "px" },
                    attrs: {
                      lazyLoad: true,
                      fadeShow: false,
                      src: item.cover,
                      mode:
                        item.width >= item.height ? "aspectFit" : "scaleToFill",
                    },
                  })
                : _vm._e(),
              _c("view", { staticClass: ["publish-info-box"] }, [
                _c("view", {}, [
                  _c(
                    "u-text",
                    {
                      staticClass: ["publish-info-vloger-name"],
                      appendAsTree: true,
                      attrs: { append: "tree" },
                    },
                    [_vm._v("@" + _vm._s(item.vlogerName))]
                  ),
                  _c(
                    "u-text",
                    {
                      staticClass: ["publish-info-content"],
                      appendAsTree: true,
                      attrs: { append: "tree" },
                    },
                    [_vm._v(_vm._s(item.content))]
                  ),
                  _c(
                    "view",
                    { staticClass: ["publish-info-music-box"] },
                    [
                      _c("u-image", {
                        staticClass: ["icon-fire"],
                        attrs: { src: "/static/images/icon-fire.png" },
                      }),
                      _c(
                        "u-text",
                        {
                          staticClass: ["muisc-words"],
                          appendAsTree: true,
                          attrs: { append: "tree" },
                        },
                        [_vm._v(_vm._s(item.vlogerName) + "的原声创作")]
                      ),
                    ],
                    1
                  ),
                ]),
                _c(
                  "view",
                  { staticStyle: { flexDirection: "row" } },
                  [
                    !_vm.isIOS
                      ? _c("u-image", {
                          staticClass: ["play-cd"],
                          staticStyle: { width: "120rpx", height: "120rpx" },
                          attrs: { src: "/static/images/icon-cd.png" },
                        })
                      : _vm._e(),
                    _vm.isIOS
                      ? _c("u-image", {
                          staticClass: ["play-cd"],
                          attrs: {
                            src:
                              "https://imooc-news.oss-cn-shanghai.aliyuncs.com/image/cd-play-4.gif?time=" +
                              _vm.times,
                          },
                        })
                      : _vm._e(),
                  ],
                  1
                ),
              ]),
              _c(
                "view",
                { staticClass: ["operation-box"] },
                [
                  _c(
                    "view",
                    { staticClass: ["operation-face-box"] },
                    [
                      _c("u-image", {
                        staticClass: ["user-face"],
                        attrs: { src: item.vlogerFace },
                        on: {
                          click: function ($event) {
                            _vm.goUserInfoSeeSee(item.vlogerId)
                          },
                        },
                      }),
                    ],
                    1
                  ),
                  !item.doIFollowVloger
                    ? _c("u-image", {
                        staticClass: ["follow-me"],
                        attrs: { src: "/static/images/icon-follow.png" },
                        on: {
                          click: function ($event) {
                            _vm.followMe(item.vlogerId)
                          },
                        },
                      })
                    : _vm._e(),
                  _c(
                    "view",
                    { staticClass: ["like-box"] },
                    [
                      !item.doILikeThisVlog
                        ? _c("u-image", {
                            staticClass: ["icon"],
                            attrs: { src: "/static/images/icon-unlike.png" },
                            on: {
                              click: function ($event) {
                                _vm.likeOrDislikeVlog(1)
                              },
                            },
                          })
                        : _vm._e(),
                      item.doILikeThisVlog
                        ? _c("u-image", {
                            staticClass: ["icon"],
                            attrs: { src: "/static/images/icon-like.png" },
                            on: {
                              click: function ($event) {
                                _vm.likeOrDislikeVlog(0)
                              },
                            },
                          })
                        : _vm._e(),
                      _c(
                        "u-text",
                        {
                          staticClass: ["some-counts"],
                          appendAsTree: true,
                          attrs: { append: "tree" },
                        },
                        [_vm._v(_vm._s(_vm.getGraceNumber(item.likeCounts)))]
                      ),
                    ],
                    1
                  ),
                  _c(
                    "view",
                    { staticClass: ["comment-and-share-box"] },
                    [
                      _c("u-image", {
                        staticClass: ["icon"],
                        attrs: { src: "/static/images/icon-comments.png" },
                        on: { click: _vm.commentToggle },
                      }),
                      _c(
                        "u-text",
                        {
                          staticClass: ["some-counts"],
                          appendAsTree: true,
                          attrs: { append: "tree" },
                        },
                        [
                          _vm._v(
                            _vm._s(
                              _vm.getGraceNumber(_vm.thisVlogTotalComentCounts)
                            )
                          ),
                        ]
                      ),
                    ],
                    1
                  ),
                  _c(
                    "view",
                    { staticClass: ["comment-and-share-box"] },
                    [
                      _c("u-image", {
                        staticClass: ["icon"],
                        attrs: { src: "/static/images/icon-share.png" },
                        on: { click: _vm.shareToggle },
                      }),
                      _c(
                        "u-text",
                        {
                          staticClass: ["some-counts"],
                          appendAsTree: true,
                          attrs: { append: "tree" },
                        },
                        [_vm._v("分享")]
                      ),
                    ],
                    1
                  ),
                ],
                1
              ),
            ],
            1
          )
        }),
      ],
      2
    ),
    _vm.thisVlog != null && _vm.thisVlog != {}
      ? _c(
          "view",
          [
            _c(
              "uni-popup",
              { ref: "comment", attrs: { type: "comment" } },
              [
                _c("uni-popup-comments", {
                  attrs: {
                    thisVlogerId: _vm.thisVlogerId,
                    thisVlogId: _vm.thisVlogId,
                  },
                }),
              ],
              1
            ),
            _c(
              "uni-popup",
              {
                ref: "share",
                attrs: { backgroundColor: "#fff", type: "share" },
              },
              [
                _c("uni-popup-share", {
                  attrs: {
                    thisVlogerId: _vm.thisVlogerId,
                    thisVlogId: _vm.thisVlogId,
                    vlogUrl: _vm.thisVlog.url,
                    isPrivate: _vm.thisVlog.isPrivate,
                  },
                }),
              ],
              1
            ),
          ],
          1
        )
      : _vm._e(),
  ])
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 252 */
/*!***************************************************************************************************************!*\
  !*** C:/Users/TAOER/Desktop/ShayuVideo/ShayuVideoAPP/components/videoFollowComp.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_videoFollowComp_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib??ref--5-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--5-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./videoFollowComp.vue?vue&type=script&lang=js& */ 253);\n/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_videoFollowComp_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_videoFollowComp_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_videoFollowComp_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_videoFollowComp_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_videoFollowComp_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQTZhLENBQWdCLHlkQUFHLEVBQUMiLCJmaWxlIjoiMjUyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vZCBmcm9tIFwiLSFEOlxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxiYWJlbC1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzPz9yZWYtLTUtMCFEOlxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXJcXFxcaW5kZXguanM/P3JlZi0tNS0xIUQ6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcdnVlLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3ZpZGVvRm9sbG93Q29tcC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hRDpcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcYmFiZWwtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcz8/cmVmLS01LTAhRDpcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyXFxcXGluZGV4LmpzPz9yZWYtLTUtMSFEOlxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi92aWRlb0ZvbGxvd0NvbXAudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///252\n");

/***/ }),
/* 253 */
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--5-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--5-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!C:/Users/TAOER/Desktop/ShayuVideo/ShayuVideoAPP/components/videoFollowComp.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\nvar app = getApp();\nvar _default = {\n  props: {\n    screenHeight: {\n      default: 0\n    },\n    src: {\n      default: false\n    },\n    playFollowStatus: {\n      default: false\n    },\n    playStatus: {\n      default: false\n    },\n    videoList: {\n      default: []\n    },\n    refreshList: {\n      default: []\n    },\n    pagingList: {\n      default: []\n    }\n  },\n  data: function data() {\n    return {\n      thisVlog: {},\n      // 当前的短视频对象\n      thisVlogId: \"\",\n      // 当前的短视频主键id\n      thisVlogerId: \"\",\n      // 当前的短视频博主的主键id\n\n      refreshing: false,\n      showRefreshLoading: \"hide\",\n      playerCur: 0,\n      page: 0,\n      totalPage: 0,\n      playerList: this.videoList,\n      thisVlogTotalComentCounts: 0,\n      videoContext: {},\n      currentIndex: 0,\n      contentOffsetY: 0,\n      times: new Date().getTime(),\n      objectFit: \"fill\",\n      isIOS: uni.getSystemInfoSync().platform == \"ios\"\n    };\n  },\n  created: function created() {\n    if (!this.isIOS) {\n      this.objectFit = \"cover\";\n    }\n\n    // 查询首页短视频列表\n    this.displayVideoPaging(this.page + 1, true);\n    var videoContext = uni.createVideoContext('myFollowVideo');\n    this.videoContext = videoContext;\n  },\n  watch: {\n    refreshList: function refreshList(value) {\n      var me = this;\n      var newList = value;\n      if (newList != null && newList != undefined && newList.length > 0) {\n        me.playerList = newList;\n      }\n\n      // 重置\n      this.playerCur = 0;\n      this.currentIndex = 0;\n      this.contentOffsetY = 0;\n    },\n    playFollowStatus: function playFollowStatus(val) {\n      var me = this;\n      if (!val) {\n        me.videoContext.pause();\n      } else {\n        me.videoContext.play();\n      }\n    }\n  },\n  methods: {\n    // 把超过1000或10000的数字调整，比如1.3k/6.8w\n    getGraceNumber: function getGraceNumber(num) {\n      return getApp().graceNumber(num);\n    },\n    freshCommentCounts: function freshCommentCounts() {\n      var me = this;\n      var userId = getApp().getUserInfoSession().id;\n      var serverUrl = app.globalData.serverUrl;\n      if (me.playerList == null || me.playerList == undefined || me.playerList.length == 0) {\n        return;\n      }\n      var currentIndex = me.playerCur;\n      var vlog = me.playerList[currentIndex];\n      var vlogId = vlog.vlogId;\n      var serverUrl = app.globalData.serverUrl;\n      uni.request({\n        method: \"GET\",\n        url: serverUrl + \"/comment/counts?vlogId=\" + vlogId,\n        success: function success(result) {\n          if (result.data.status == 200) {\n            me.thisVlogTotalComentCounts = result.data.data;\n          } else {\n            me.thisVlogTotalComentCounts = 0;\n          }\n        }\n      });\n    },\n    likeOrDislikeVlog: function likeOrDislikeVlog(isLike) {\n      var me = this;\n      if (isLike == 1) {\n        // 喜欢/点赞视频\n\n        var myUserInfo = getApp().getUserInfoSession();\n        if (myUserInfo == null) {\n          uni.showToast({\n            duration: 3000,\n            title: \"请登录~\",\n            icon: \"none\"\n          });\n          uni.navigateTo({\n            url: \"../loginRegist/loginRegist\",\n            animationType: \"slide-in-bottom\",\n            success: function success() {\n              me.loginWords = \"请登录\";\n            }\n          });\n          return;\n        }\n        var userId = getApp().getUserInfoSession().id;\n        var serverUrl = app.globalData.serverUrl;\n        var currentIndex = me.playerCur;\n        var vlog = me.playerList[currentIndex];\n        uni.request({\n          method: \"POST\",\n          header: {\n            headerUserId: userId,\n            headerUserToken: app.getUserSessionToken()\n          },\n          url: serverUrl + \"/vlog/like?userId=\" + userId + \"&vlogerId=\" + vlog.vlogerId + \"&vlogId=\" + vlog.vlogId,\n          success: function success(result) {\n            if (result.data.status == 200) {\n              me.reLikePlayList(vlog.vlogId);\n              me.refreshVlogCounts();\n            } else {\n              uni.showToast({\n                title: result.data.msg,\n                icon: \"none\",\n                duration: 3000\n              });\n            }\n          }\n        });\n      } else if (isLike == 0) {\n        // 取消喜欢/点赞视频\n\n        var myUserInfo = getApp().getUserInfoSession();\n        if (myUserInfo == null) {\n          uni.showToast({\n            duration: 3000,\n            title: \"请登录~\",\n            icon: \"none\"\n          });\n          uni.navigateTo({\n            url: \"../loginRegist/loginRegist\",\n            animationType: \"slide-in-bottom\",\n            success: function success() {\n              me.loginWords = \"请登录\";\n            }\n          });\n          return;\n        }\n        var userId = getApp().getUserInfoSession().id;\n        var serverUrl = app.globalData.serverUrl;\n        var currentIndex = me.playerCur;\n        var vlog = me.playerList[currentIndex];\n        uni.request({\n          method: \"POST\",\n          header: {\n            headerUserId: userId,\n            headerUserToken: app.getUserSessionToken()\n          },\n          url: serverUrl + \"/vlog/unlike?userId=\" + userId + \"&vlogerId=\" + vlog.vlogerId + \"&vlogId=\" + vlog.vlogId,\n          success: function success(result) {\n            if (result.data.status == 200) {\n              me.reDislikePlayList(vlog.vlogId);\n              me.refreshVlogCounts();\n            } else {\n              uni.showToast({\n                title: result.data.msg,\n                icon: \"none\",\n                duration: 3000\n              });\n            }\n          }\n        });\n      }\n    },\n    // 喜欢/点赞的list重新设置\n    reLikePlayList: function reLikePlayList(vlogId) {\n      var me = this;\n      var playerList = me.playerList;\n      // 关注以后，循环当前playerList，修改对应粉丝关系的doIFollowVloger改为true\n      for (var i = 0; i < playerList.length; i++) {\n        var vlog = playerList[i];\n        if (vlog.vlogId == vlogId) {\n          vlog.doILikeThisVlog = true;\n          playerList.splice(i, 1, vlog);\n        }\n      }\n      me.playerList = playerList;\n    },\n    reDislikePlayList: function reDislikePlayList(vlogId) {\n      var me = this;\n      var playerList = me.playerList;\n      // 关注以后，循环当前playerList，修改对应粉丝关系的doIFollowVloger改为true\n      for (var i = 0; i < playerList.length; i++) {\n        var vlog = playerList[i];\n        if (vlog.vlogId == vlogId) {\n          vlog.doILikeThisVlog = false;\n          playerList.splice(i, 1, vlog);\n        }\n      }\n      me.playerList = playerList;\n    },\n    // 关注后的list重新设置\n    reFollowPlayList: function reFollowPlayList(vlogerId) {\n      var me = this;\n      var playerList = me.playerList;\n\n      // 关注以后，循环当前playerList，修改对应粉丝关系的doIFollowVloger改为true\n      for (var i = 0; i < playerList.length; i++) {\n        var vlog = playerList[i];\n        if (vlog.vlogerId == vlogerId) {\n          vlog.doIFollowVloger = true;\n          playerList.splice(i, 1, vlog);\n        }\n      }\n      me.playerList = playerList;\n    },\n    // 取关后的list重新设置\n    reCancelPlayList: function reCancelPlayList(vlogerId) {\n      var me = this;\n      var playerList = me.playerList;\n\n      // 关注以后，循环当前playerList，修改对应粉丝关系的doIFollowVloger改为true\n      for (var i = 0; i < playerList.length; i++) {\n        var vlog = playerList[i];\n        if (vlog.vlogerId == vlogerId) {\n          vlog.doIFollowVloger = false;\n          playerList.splice(i, 1, vlog);\n        }\n      }\n      me.playerList = playerList;\n    },\n    // 关注博主\n    followMe: function followMe(vlogerId) {\n      var me = this;\n      var myUserInfo = getApp().getUserInfoSession();\n      if (myUserInfo == null) {\n        uni.showToast({\n          duration: 3000,\n          title: \"请登录~\",\n          icon: \"none\"\n        });\n        uni.navigateTo({\n          url: \"../loginRegist/loginRegist\",\n          animationType: \"slide-in-bottom\",\n          success: function success() {\n            me.loginWords = \"请登录\";\n          }\n        });\n        return;\n      }\n      var userId = getApp().getUserInfoSession().id;\n      var serverUrl = app.globalData.serverUrl;\n      uni.request({\n        method: \"POST\",\n        header: {\n          headerUserId: userId,\n          headerUserToken: app.getUserSessionToken()\n        },\n        url: serverUrl + \"/fans/follow?myId=\" + userId + \"&vlogerId=\" + vlogerId,\n        success: function success(result) {\n          if (result.data.status == 200) {\n            me.reFollowPlayList(vlogerId);\n          } else {\n            uni.showToast({\n              title: result.data.msg,\n              icon: \"none\",\n              duration: 3000\n            });\n          }\n        }\n      });\n    },\n    goUserInfoSeeSee: function goUserInfoSeeSee(userId) {\n      uni.setStorageSync(\"userPageId\", userId);\n      uni.navigateTo({\n        url: \"/pages/me/vlogerInfo?userPageId=\" + userId\n      });\n    },\n    listScroll: function listScroll(e) {\n      if (e.contentOffset.y > 0) {\n        this.$emit(\"showLoading\");\n      }\n    },\n    downloadVlog: function downloadVlog() {\n      var me = this;\n      var serverUrl = app.globalData.serverUrl;\n      var currentIndex = me.playerCur;\n      var vlog = me.playerList[currentIndex];\n      var pendingLength = vlog.url;\n    },\n    copyLink: function copyLink() {\n      var me = me;\n    },\n    showQRCode: function showQRCode() {\n      var me = me;\n    },\n    changeVlogToPrivate: function changeVlogToPrivate() {\n      var me = me;\n    },\n    onrefresh: function onrefresh(e) {\n      var _this = this;\n      this.refreshing = true;\n      setTimeout(function () {\n        _this.refreshing = false;\n        _this.$emit(\"hideLoading\");\n        _this.refreshText = '↓ Pull To Refresh';\n      }, 300);\n\n      // 通过list组件的下拉刷新触发当前所在页面的下拉刷新\n      uni.startPullDownRefresh();\n    },\n    onplay: function onplay(e) {\n      if (uni.getSystemInfoSync().platform == 'ios') {\n        // this.$emit(\"play\", 0.1);\n        this.doplay(0.1);\n      }\n    },\n    onerror: function onerror(err) {},\n    timeupdate: function timeupdate(e) {\n      if (e.detail.currentTime > 0.2) {\n        // this.$emit(\"play\", e.detail.currentTime);\n        this.doplay(e.detail.currentTime);\n      }\n    },\n    playOrPause: function playOrPause() {\n      var me = this;\n      var playFollowStatus = this.playFollowStatus;\n      if (!playFollowStatus) {\n        me.videoContext.pause();\n      } else {\n        me.videoContext.play();\n      }\n      this.playFollowStatus = !playFollowStatus;\n    },\n    scroll: function scroll(e) {\n      var originalIndex = this.currentIndex;\n      var isNext = false;\n      if (e.contentOffset.y < this.contentOffsetY) {\n        isNext = true;\n      }\n      this.contentOffsetY = e.contentOffset.y;\n      var num = this.playerList.length;\n      this.currentIndex = Math.round(Math.abs(this.contentOffsetY) / (e.contentSize.height / num));\n      this.onchange(this.currentIndex);\n      this.times = new Date().getTime();\n\n      // 判断如果视频列表总长度-当前下标，少于3个，则开始分页查询后续的视频，并且追加到现有list中\n      if (this.playerList.length - this.currentIndex < 3) {\n        // 如果要分页的page和总数totalPage相等，则没有更多\n        if (this.page == this.totalPage) {\n          return;\n        }\n        this.displayVideoPaging(this.page + 1, false);\n      }\n    },\n    // 分页查询新的list，并且追加到现有list中\n    displayVideoPaging: function displayVideoPaging(page, needClearList) {\n      // 查询首页短视频列表\n      var me = this;\n      var myUserInfo = getApp().getUserInfoSession();\n      var userId = \"\";\n      if (myUserInfo != null) {\n        userId = myUserInfo.id;\n      } else {\n        return;\n      }\n      var serverUrl = app.globalData.serverUrl;\n      uni.request({\n        method: \"GET\",\n        header: {\n          headerUserId: userId,\n          headerUserToken: app.getUserSessionToken()\n        },\n        url: serverUrl + \"/vlog/followList?myId=\" + userId + \"&page=\" + page + \"&pageSize=10\",\n        success: function success(result) {\n          if (result.data.status == 200) {\n            var vlogList = result.data.data.rows;\n            var totalPage = result.data.data.total;\n            if (needClearList) {\n              me.playerList = [];\n            }\n            me.playerList = me.playerList.concat(vlogList);\n            me.page = page;\n            me.totalPage = totalPage;\n            if (needClearList) {\n              me.setThisVlogInfo();\n              me.freshCommentCounts();\n            }\n            me.doTimer();\n          } else {\n            uni.showToast({\n              title: result.data.msg,\n              icon: \"none\",\n              duration: 3000\n            });\n          }\n        },\n        complete: function complete() {\n          // me.doTimer();\n        }\n      });\n    },\n    doTimer: function doTimer() {\n      var me = this;\n      var t = setTimeout(function () {\n        if (me.playerList != null && me.playerList != undefined && me.playerList.length > 0) {\n          me.videoContext.pause();\n          me.playFollowStatus = false;\n        }\n      }, 3000);\n    },\n    doplay: function doplay(time) {\n      if (time > 0) {\n        this.playerList[this.playerCur].play = true;\n      }\n    },\n    onchange: function onchange(index) {\n      if (index != this.playerCur) {\n        this.playerList[this.playerCur].play = false;\n        this.playerCur = index;\n      }\n      this.refreshVlogCounts();\n      this.setThisVlogInfo();\n      this.freshCommentCounts();\n    },\n    // 设置当前vlog的信息\n    setThisVlogInfo: function setThisVlogInfo() {\n      var me = this;\n      var serverUrl = app.globalData.serverUrl;\n      if (me.playerList != null && me.playerList != undefined && me.playerList.length > 0) {\n        var currentIndex = me.playerCur;\n        var vlog = me.playerList[currentIndex];\n        this.thisVlog = vlog;\n        this.thisVlogId = vlog.vlogId;\n        this.thisVlogerId = vlog.vlogerId;\n      }\n    },\n    refreshVlogCounts: function refreshVlogCounts() {\n      // 查询当前点赞数，重新赋值给当前视频\n      var me = this;\n      var serverUrl = app.globalData.serverUrl;\n      var currentIndex = me.playerCur;\n      var vlog = me.playerList[currentIndex];\n      uni.request({\n        method: \"POST\",\n        url: serverUrl + \"/vlog/totalLikedCounts?vlogId=\" + vlog.vlogId,\n        success: function success(result) {\n          if (result.data.status == 200) {\n            var counts = result.data.data;\n            me.reChangeVlogLikedCountsInPlayList(vlog.vlogId, counts);\n          }\n        }\n      });\n    },\n    reChangeVlogLikedCountsInPlayList: function reChangeVlogLikedCountsInPlayList(vlogId, counts) {\n      var me = this;\n      var playerList = me.playerList;\n      // 关注以后，循环当前playerList，修改对应粉丝关系的doIFollowVloger改为true\n      for (var i = 0; i < playerList.length; i++) {\n        var vlog = playerList[i];\n        if (vlog.vlogId == vlogId) {\n          vlog.likeCounts = counts;\n          playerList.splice(i, 1, vlog);\n        }\n      }\n      me.playerList = playerList;\n    },\n    commentToggle: function commentToggle() {\n      this.$refs.comment.open();\n      uni.hideTabBar({\n        animation: true\n      });\n    },\n    shareToggle: function shareToggle() {\n      this.$refs.share.open();\n      uni.hideTabBar({\n        animation: true\n      });\n    }\n  }\n};\nexports.default = _default;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vY29tcG9uZW50cy92aWRlb0ZvbGxvd0NvbXAudnVlIl0sIm5hbWVzIjpbInByb3BzIiwic2NyZWVuSGVpZ2h0IiwiZGVmYXVsdCIsInNyYyIsInBsYXlGb2xsb3dTdGF0dXMiLCJwbGF5U3RhdHVzIiwidmlkZW9MaXN0IiwicmVmcmVzaExpc3QiLCJwYWdpbmdMaXN0IiwiZGF0YSIsInRoaXNWbG9nIiwidGhpc1Zsb2dJZCIsInRoaXNWbG9nZXJJZCIsInJlZnJlc2hpbmciLCJzaG93UmVmcmVzaExvYWRpbmciLCJwbGF5ZXJDdXIiLCJwYWdlIiwidG90YWxQYWdlIiwicGxheWVyTGlzdCIsInRoaXNWbG9nVG90YWxDb21lbnRDb3VudHMiLCJ2aWRlb0NvbnRleHQiLCJjdXJyZW50SW5kZXgiLCJjb250ZW50T2Zmc2V0WSIsInRpbWVzIiwib2JqZWN0Rml0IiwiaXNJT1MiLCJjcmVhdGVkIiwid2F0Y2giLCJtZSIsIm1ldGhvZHMiLCJnZXRHcmFjZU51bWJlciIsImZyZXNoQ29tbWVudENvdW50cyIsInVuaSIsIm1ldGhvZCIsInVybCIsInN1Y2Nlc3MiLCJsaWtlT3JEaXNsaWtlVmxvZyIsImR1cmF0aW9uIiwidGl0bGUiLCJpY29uIiwiYW5pbWF0aW9uVHlwZSIsImhlYWRlciIsImhlYWRlclVzZXJJZCIsImhlYWRlclVzZXJUb2tlbiIsInJlTGlrZVBsYXlMaXN0IiwidmxvZyIsInJlRGlzbGlrZVBsYXlMaXN0IiwicmVGb2xsb3dQbGF5TGlzdCIsInJlQ2FuY2VsUGxheUxpc3QiLCJmb2xsb3dNZSIsImdvVXNlckluZm9TZWVTZWUiLCJsaXN0U2Nyb2xsIiwiZG93bmxvYWRWbG9nIiwiY29weUxpbmsiLCJzaG93UVJDb2RlIiwiY2hhbmdlVmxvZ1RvUHJpdmF0ZSIsIm9ucmVmcmVzaCIsInNldFRpbWVvdXQiLCJvbnBsYXkiLCJvbmVycm9yIiwidGltZXVwZGF0ZSIsInBsYXlPclBhdXNlIiwic2Nyb2xsIiwiaXNOZXh0IiwiZGlzcGxheVZpZGVvUGFnaW5nIiwidXNlcklkIiwiY29tcGxldGUiLCJkb1RpbWVyIiwiZG9wbGF5Iiwib25jaGFuZ2UiLCJzZXRUaGlzVmxvZ0luZm8iLCJyZWZyZXNoVmxvZ0NvdW50cyIsInJlQ2hhbmdlVmxvZ0xpa2VkQ291bnRzSW5QbGF5TGlzdCIsImNvbW1lbnRUb2dnbGUiLCJhbmltYXRpb24iLCJzaGFyZVRvZ2dsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXNOQTtBQUFBLGVBQ0E7RUFDQUE7SUFDQUM7TUFDQUM7SUFDQTtJQUNBQztNQUNBRDtJQUNBO0lBQ0FFO01BQ0FGO0lBQ0E7SUFDQUc7TUFDQUg7SUFDQTtJQUNBSTtNQUNBSjtJQUNBO0lBQ0FLO01BQ0FMO0lBQ0E7SUFDQU07TUFDQU47SUFDQTtFQUNBO0VBQ0FPO0lBQ0E7TUFDQUM7TUFBQTtNQUNBQztNQUFBO01BQ0FDO01BQUE7O01BRUFDO01BQ0FDO01BRUFDO01BQ0FDO01BQ0FDO01BQ0FDO01BQ0FDO01BRUFDO01BRUFDO01BQ0FDO01BRUFDO01BRUFDO01BQ0FDO0lBQ0E7RUFDQTtFQUNBQztJQUNBO01BQ0E7SUFDQTs7SUFFQTtJQUNBO0lBRUE7SUFDQTtFQUNBO0VBQ0FDO0lBQ0FwQjtNQUNBO01BQ0E7TUFDQTtRQUNBcUI7TUFDQTs7TUFFQTtNQUNBO01BQ0E7TUFDQTtJQUNBO0lBRUF4QjtNQUNBO01BRUE7UUFDQXdCO01BQ0E7UUFDQUE7TUFDQTtJQUNBO0VBQ0E7RUFDQUM7SUFDQTtJQUNBQztNQUNBO0lBQ0E7SUFDQUM7TUFDQTtNQUNBO01BQ0E7TUFHQTtRQUNBO01BQ0E7TUFDQTtNQUNBO01BQ0E7TUFFQTtNQUNBQztRQUNBQztRQUNBQztRQUNBQztVQUVBO1lBQ0FQO1VBQ0E7WUFDQUE7VUFDQTtRQUNBO01BQ0E7SUFDQTtJQUNBUTtNQUNBO01BQ0E7UUFDQTs7UUFFQTtRQUNBO1VBQ0FKO1lBQ0FLO1lBQ0FDO1lBQ0FDO1VBQ0E7VUFDQVA7WUFDQUU7WUFDQU07WUFDQUw7Y0FDQVA7WUFDQTtVQUNBO1VBQ0E7UUFDQTtRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBRUFJO1VBQ0FDO1VBQ0FRO1lBQ0FDO1lBQ0FDO1VBQ0E7VUFDQVQ7VUFDQUM7WUFFQTtjQUNBUDtjQUNBQTtZQUNBO2NBQ0FJO2dCQUNBTTtnQkFDQUM7Z0JBQ0FGO2NBQ0E7WUFDQTtVQUNBO1FBQ0E7TUFFQTtRQUNBOztRQUVBO1FBQ0E7VUFDQUw7WUFDQUs7WUFDQUM7WUFDQUM7VUFDQTtVQUNBUDtZQUNBRTtZQUNBTTtZQUNBTDtjQUNBUDtZQUNBO1VBQ0E7VUFDQTtRQUNBO1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFFQUk7VUFDQUM7VUFDQVE7WUFDQUM7WUFDQUM7VUFDQTtVQUNBVDtVQUNBQztZQUVBO2NBQ0FQO2NBQ0FBO1lBQ0E7Y0FDQUk7Z0JBQ0FNO2dCQUNBQztnQkFDQUY7Y0FDQTtZQUNBO1VBQ0E7UUFDQTtNQUVBO0lBQ0E7SUFFQTtJQUNBTztNQUNBO01BQ0E7TUFDQTtNQUNBO1FBQ0E7UUFDQTtVQUNBQztVQUNBM0I7UUFDQTtNQUNBO01BQ0FVO0lBQ0E7SUFDQWtCO01BQ0E7TUFDQTtNQUNBO01BQ0E7UUFDQTtRQUNBO1VBQ0FEO1VBQ0EzQjtRQUNBO01BQ0E7TUFDQVU7SUFDQTtJQUVBO0lBQ0FtQjtNQUNBO01BQ0E7O01BRUE7TUFDQTtRQUNBO1FBQ0E7VUFDQUY7VUFDQTNCO1FBQ0E7TUFDQTtNQUNBVTtJQUNBO0lBQ0E7SUFDQW9CO01BQ0E7TUFDQTs7TUFFQTtNQUNBO1FBQ0E7UUFDQTtVQUNBSDtVQUNBM0I7UUFDQTtNQUNBO01BQ0FVO0lBQ0E7SUFHQTtJQUNBcUI7TUFDQTtNQUNBO01BQ0E7UUFDQWpCO1VBQ0FLO1VBQ0FDO1VBQ0FDO1FBQ0E7UUFFQVA7VUFDQUU7VUFDQU07VUFDQUw7WUFDQVA7VUFDQTtRQUNBO1FBRUE7TUFDQTtNQUVBO01BQ0E7TUFDQUk7UUFDQUM7UUFDQVE7VUFDQUM7VUFDQUM7UUFDQTtRQUNBVDtRQUNBQztVQUVBO1lBQ0FQO1VBQ0E7WUFDQUk7Y0FDQU07Y0FDQUM7Y0FDQUY7WUFDQTtVQUNBO1FBQ0E7TUFDQTtJQUVBO0lBRUFhO01BQ0FsQjtNQUNBQTtRQUNBRTtNQUNBO0lBQ0E7SUFFQWlCO01BQ0E7UUFDQTtNQUNBO0lBQ0E7SUFFQUM7TUFFQTtNQUNBO01BQ0E7TUFDQTtNQUNBO0lBRUE7SUFFQUM7TUFDQTtJQUNBO0lBRUFDO01BQ0E7SUFDQTtJQUVBQztNQUNBO0lBQ0E7SUFFQUM7TUFBQTtNQUNBO01BQ0FDO1FBQ0E7UUFDQTtRQUNBO01BQ0E7O01BRUE7TUFDQXpCO0lBQ0E7SUFFQTBCO01BQ0E7UUFDQTtRQUNBO01BQ0E7SUFDQTtJQUNBQyxnQ0FDQTtJQUNBQztNQUNBO1FBQ0E7UUFDQTtNQUNBO0lBQ0E7SUFFQUM7TUFDQTtNQUNBO01BRUE7UUFDQWpDO01BQ0E7UUFDQUE7TUFDQTtNQUNBO0lBQ0E7SUFHQWtDO01BQ0E7TUFDQTtNQUNBO1FBQ0FDO01BQ0E7TUFDQTtNQUVBO01BRUE7TUFDQTtNQUVBOztNQUVBO01BQ0E7UUFDQTtRQUNBO1VBQ0E7UUFDQTtRQUNBO01BQ0E7SUFFQTtJQUVBO0lBQ0FDO01BRUE7TUFDQTtNQUNBO01BQ0E7TUFDQTtRQUNBQztNQUNBO1FBQ0E7TUFDQTtNQUNBO01BQ0FqQztRQUNBQztRQUNBUTtVQUNBQztVQUNBQztRQUNBO1FBQ0FUO1FBQ0FDO1VBRUE7WUFDQTtZQUNBO1lBQ0E7Y0FDQVA7WUFDQTtZQUNBQTtZQUNBQTtZQUNBQTtZQUVBO2NBQ0FBO2NBQ0FBO1lBQ0E7WUFDQUE7VUFDQTtZQUNBSTtjQUNBTTtjQUNBQztjQUNBRjtZQUNBO1VBQ0E7UUFFQTtRQUNBNkI7VUFDQTtRQUFBO01BRUE7SUFDQTtJQUVBQztNQUNBO01BQ0E7UUFFQTtVQUNBdkM7VUFDQUE7UUFDQTtNQUNBO0lBQ0E7SUFFQXdDO01BQ0E7UUFDQTtNQUNBO0lBQ0E7SUFDQUM7TUFDQTtRQUNBO1FBQ0E7TUFDQTtNQUVBO01BQ0E7TUFDQTtJQUNBO0lBRUE7SUFDQUM7TUFDQTtNQUNBO01BRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO01BQ0E7SUFDQTtJQUVBQztNQUNBO01BQ0E7TUFDQTtNQUNBO01BQ0E7TUFDQXZDO1FBQ0FDO1FBQ0FDO1FBQ0FDO1VBQ0E7WUFDQTtZQUNBUDtVQUNBO1FBQ0E7TUFDQTtJQUNBO0lBRUE0QztNQUNBO01BQ0E7TUFDQTtNQUNBO1FBQ0E7UUFDQTtVQUNBM0I7VUFDQTNCO1FBQ0E7TUFDQTtNQUNBVTtJQUNBO0lBRUE2QztNQUNBO01BQ0F6QztRQUNBMEM7TUFDQTtJQUNBO0lBQ0FDO01BQ0E7TUFDQTNDO1FBQ0EwQztNQUNBO0lBQ0E7RUFDQTtBQUNBO0FBQUEiLCJmaWxlIjoiMjUzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiPHN0eWxlPlxyXG5cdC5pY29uIHtcclxuXHRcdHdpZHRoOiA4MHJweDtcclxuXHRcdGhlaWdodDogODBycHg7XHJcblx0XHRvcGFjaXR5OiAwLjk7XHJcblx0fVxyXG5cdFxyXG5cdC51c2VyLWZhY2Uge1xyXG5cdFx0d2lkdGg6IDEwMHJweDtcclxuXHRcdGhlaWdodDogMTAwcnB4O1xyXG5cdFx0Ym9yZGVyLXJhZGl1czogMTAwcnB4O1xyXG5cdH1cclxuXHRcclxuXHQucGxheS1jZCB7XHJcblx0XHR3aWR0aDogMTUwcnB4O1xyXG5cdFx0aGVpZ2h0OiAxNTBycHg7XHJcblx0XHRvcGFjaXR5OiAwLjg7XHJcblx0fVxyXG5cdC5yZWZyZXNoLWluZm8tdHh0IHtcclxuXHRcdGNvbG9yOiAjRjFGMUYxO1xyXG5cdFx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdFx0Zm9udC1zaXplOiAxMnB4O1xyXG5cdH1cclxuXHQucHVibGlzaC1pbmZvLWJveCB7XHJcblx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0XHRib3R0b206IDIwMHJweDtcclxuXHRcdGxlZnQ6IDA7XHJcblx0XHRyaWdodDogMDtcclxuXHRcdHBhZGRpbmctbGVmdDogMjBycHg7XHJcblx0XHRwYWRkaW5nLXJpZ2h0OiAyMHJweDsgXHJcblx0XHRmbGV4LWRpcmVjdGlvbjogcm93O1xyXG5cdFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG5cdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHR9XHJcblx0LnB1Ymxpc2gtaW5mby12bG9nZXItbmFtZSB7XHJcblx0XHRjb2xvcjogI0ZGRkZGRjtcclxuXHRcdGZvbnQtc2l6ZTogNDBycHg7XHJcblx0XHRmb250LXdlaWdodDogNjAwO1xyXG5cdFx0cGFkZGluZzogMTBycHg7XHJcblx0fVxyXG5cdC5wdWJsaXNoLWluZm8tbXVzaWMtYm94IHtcclxuXHRcdGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdH1cclxuXHQucHVibGlzaC1pbmZvLWNvbnRlbnQge1xyXG5cdFx0Y29sb3I6ICNGRkZGRkY7XHJcblx0XHRmb250LXNpemU6IDI4cnB4O1xyXG5cdFx0Zm9udC13ZWlnaHQ6IDQwMDtcclxuXHRcdHBhZGRpbmc6IDEwcnB4O1xyXG5cdFx0bGluZXM6IDU7XHJcblx0XHR3aWR0aDogNTIwcnB4O1xyXG5cdFx0dGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcblx0fVxyXG5cdC5pY29uLWZpcmUge1xyXG5cdFx0d2lkdGg6IDM2cnB4O1xyXG5cdFx0aGVpZ2h0OiAzNnJweDtcclxuXHR9XHJcblx0Lm11aXNjLXdvcmRzIHtcclxuXHRcdGNvbG9yOiAjRkZGRkZGO1xyXG5cdFx0Zm9udC1zaXplOiAyOHJweDtcclxuXHRcdHBhZGRpbmc6IDEwcnB4O1xyXG5cdFx0d2lkdGg6NDAwcnB4O1xyXG5cdH1cclxuXHQuc29tZS1jb3VudHMge1xyXG5cdFx0Zm9udC1zaXplOjI0cnB4O1xyXG5cdFx0Zm9udC13ZWlnaHQ6IDUwMDtcclxuXHRcdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHRcdGNvbG9yOiAjRkZGRkZGO1xyXG5cdFx0bWFyZ2luLXRvcDogMnJweDtcclxuXHR9XHJcblx0Lm9wZXJhdGlvbi1ib3gge1xyXG5cdFx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdFx0dG9wOiAwO1xyXG5cdFx0Ym90dG9tOiAwOyBcclxuXHRcdHJpZ2h0OiAwO1xyXG5cdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cdFx0cGFkZGluZy1yaWdodDogMjBycHg7XHJcblx0fVxyXG5cdC5vcGVyYXRpb24tZmFjZS1ib3gge1xyXG5cdFx0Ym9yZGVyLXJhZGl1czogMTAwcnB4O1xyXG5cdFx0Ym9yZGVyLWNvbG9yOiAjRkZGRkZGO1xyXG5cdFx0Ym9yZGVyLXdpZHRoOiAzcnB4O1xyXG5cdH1cclxuXHQuZm9sbG93LW1lIHtcclxuXHRcdHdpZHRoOiA0MHJweDtcclxuXHRcdGhlaWdodDogNDBycHg7XHJcblx0XHRib3JkZXItcmFkaXVzOiAxMHB4O1xyXG5cdFx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cdFx0dG9wOiAtMjBycHg7XHJcblx0fVxyXG5cdC5saWtlLWJveCB7XHJcblx0XHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRcdG1hcmdpbi10b3A6IDMwcnB4O1xyXG5cdH1cclxuXHQuY29tbWVudC1hbmQtc2hhcmUtYm94IHtcclxuXHRcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdFx0bWFyZ2luLXRvcDogNDVycHg7XHJcblx0fVxyXG48L3N0eWxlPlxyXG5cclxuPHRlbXBsYXRlPlxyXG5cdDx2aWV3IHN0eWxlPVwiZmxleDogMTtcIj5cclxuXHRcdDwhLS0g5YWz5rOo6KeG6aKR5rWBIC0tPlxyXG5cdFx0PCEtLSA8dW5pLWxpc3QgQGNoYW5nZT1cIm9uY2hhbmdlXCIgOm51bT1cInBsYXllckxpc3QubGVuZ3RoXCI+IC0tPlxyXG5cdFx0PGxpc3QgOnBhZ2luZ0VuYWJsZWQ9XCJ0cnVlXCIgOnNob3ctc2Nyb2xsYmFyPVwiZmFsc2VcIiBAc2Nyb2xsPVwibGlzdFNjcm9sbFwiIEBzY3JvbGxlbmQ9XCJzY3JvbGxcIiA6c2Nyb2xsYWJsZT1cInRydWVcIiA+XHRcclxuXHRcdFx0PHJlZnJlc2ggQHB1bGxpbmdkb3duPVwib25wdWxsaW5nZG93blwiIEByZWZyZXNoPVwib25yZWZyZXNoXCIgOmRpc3BsYXk9XCJyZWZyZXNoaW5nID8gJ3Nob3cnIDogJ2hpZGUnXCI+XHJcblx0XHRcdCAgPHRleHQgY2xhc3M9XCJyZWZyZXNoLWluZm8tdHh0XCI+PC90ZXh0PlxyXG5cdFx0XHQgIDxsb2FkaW5nLWluZGljYXRvcj48L2xvYWRpbmctaW5kaWNhdG9yPlxyXG5cdFx0XHQ8L3JlZnJlc2g+XHJcblx0XHRcdDxjZWxsIDpyZWN5Y2xlPVwiZmFsc2VcIiBcclxuXHRcdFx0XHR2LWZvcj1cIihpdGVtLCBpbmRleCkgaW4gcGxheWVyTGlzdFwiIFxyXG5cdFx0XHRcdDprZXk9XCJpbmRleFwiIFxyXG5cdFx0XHRcdDpkYXRhLWluZGV4PVwiaW5kZXhcIiBcclxuXHRcdFx0XHQ6c3R5bGU9XCJ7J2hlaWdodCc6IHNjcmVlbkhlaWdodCArICdweCd9XCI+XHJcblx0XHRcdFx0PCEtLSA8dW5pLXZpZGVvIDpzcmM9XCJpdGVtLnVybFwiIDpwbGF5U3RhdHVzPVwicGxheVN0YXR1c1wiIDpzY3JlZW5IZWlnaHQ9XCJzY3JlZW5IZWlnaHRcIiB2LWlmPVwicGxheWVyQ3VyID09PSBpbmRleFwiIEBwbGF5PVwib25wbGF5XCI+PC91bmktdmlkZW8+IC0tPlxyXG5cdFx0XHRcdDx2aWRlbyBcclxuXHRcdFx0XHRcdHJlZj1cIm15Rm9sbG93VmlkZW9cIiBcclxuXHRcdFx0XHRcdGlkPVwibXlGb2xsb3dWaWRlb1wiIFxyXG5cdFx0XHRcdFx0Om9iamVjdC1maXQ9XCJpdGVtLndpZHRoID49IGl0ZW0uaGVpZ2h0ID8gJ2NvbnRhaW4nIDogJ2ZpbGwnXCIgXHJcblx0XHRcdFx0XHQ6c3JjPVwiaXRlbS51cmxcIiBcclxuXHRcdFx0XHRcdDpjb250cm9scz1cImZhbHNlXCJcclxuXHRcdFx0XHRcdDplbmFibGUtcHJvZ3Jlc3MtZ2VzdHVyZT1cImZhbHNlXCJcclxuXHRcdFx0XHRcdCB2LWlmPVwicGxheWVyQ3VyID09PSBpbmRleFwiXHJcblx0XHRcdFx0XHRsb29wIFxyXG5cdFx0XHRcdFx0YXV0b3BsYXlcclxuXHRcdFx0XHRcdHNob3ctbG9hZGluZz1cInRydWVcIlxyXG5cdFx0XHRcdFx0c3R5bGU9XCJ3aWR0aDogNzUwcnB4O1wiIFxyXG5cdFx0XHRcdFx0OnN0eWxlPVwie2hlaWdodDogc2NyZWVuSGVpZ2h0ICsgJ3B4J31cIiBcclxuXHRcdFx0XHRcdEBjbGljaz1cInBsYXlPclBhdXNlXCJcclxuXHRcdFx0XHRcdEBwbGF5PVwib25wbGF5XCIgXHJcblx0XHRcdFx0XHRAZXJyb3I9XCJvbmVycm9yXCIgXHJcblx0XHRcdFx0XHRAdGltZXVwZGF0ZT1cInRpbWV1cGRhdGVcIj48L3ZpZGVvPlxyXG5cdFx0XHRcdDxpbWFnZSBcclxuXHRcdFx0XHRcdDpsYXp5LWxvYWQ9XCJ0cnVlXCIgXHJcblx0XHRcdFx0XHQ6ZmFkZS1zaG93PVwiZmFsc2VcIiBcclxuXHRcdFx0XHRcdHYtaWY9XCIhaXRlbS5wbGF5XCIgXHJcblx0XHRcdFx0XHQ6c3JjPVwiaXRlbS5jb3ZlclwiIFxyXG5cdFx0XHRcdFx0Om1vZGU9XCJpdGVtLndpZHRoID49IGl0ZW0uaGVpZ2h0ID8gJ2FzcGVjdEZpdCcgOiAnc2NhbGVUb0ZpbGwnXCIgXHJcblx0XHRcdFx0XHRzdHlsZT1cIndpZHRoOiA3NTBycHg7IGZpbHRlcjogYmx1cigxMHB4KTtcIlxyXG5cdFx0XHRcdFx0OnN0eWxlPVwie2hlaWdodDogc2NyZWVuSGVpZ2h0KyAncHgnfVwiPjwvaW1hZ2U+XHJcblx0XHRcdFx0PCEtLTxpbWFnZSA6bGF6eS1sb2FkPVwidHJ1ZVwiIDpmYWRlLXNob3c9XCJmYWxzZVwiIHYtaWY9XCIhaXRlbS5wbGF5XCIgOnNyYz1cIml0ZW0uY292ZXJcIiBtb2RlPVwiXCIgc3R5bGU9XCJ3aWR0aDogNzUwcnB4O3Bvc2l0aW9uOmFic29sdXRlO2xlZnQ6IDA7cmlnaHQ6IDA7dG9wOiAwO2JvdHRvbTogMDsgZmlsdGVyOiBibHVyKDEwcHgpO1wiIDpzdHlsZT1cIntoZWlnaHQ6IHNjcmVlbkhlaWdodCsgJ3B4J31cIj48L2ltYWdlPi0tPlxyXG5cdFx0XHRcdDx2aWV3IGNsYXNzPVwicHVibGlzaC1pbmZvLWJveFwiPlxyXG5cdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJcIj5cclxuXHRcdFx0XHRcdFx0PHRleHQgY2xhc3M9XCJwdWJsaXNoLWluZm8tdmxvZ2VyLW5hbWVcIj5Ae3tpdGVtLnZsb2dlck5hbWV9fTwvdGV4dD5cclxuXHRcdFx0XHRcdFx0PHRleHQgY2xhc3M9XCJwdWJsaXNoLWluZm8tY29udGVudFwiPnt7aXRlbS5jb250ZW50fX08L3RleHQ+XHJcblx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwicHVibGlzaC1pbmZvLW11c2ljLWJveFwiPlxyXG5cdFx0XHRcdFx0XHRcdDxpbWFnZSBzcmM9XCIvc3RhdGljL2ltYWdlcy9pY29uLWZpcmUucG5nXCIgY2xhc3M9XCJpY29uLWZpcmVcIj48L2ltYWdlPlxyXG5cdFx0XHRcdFx0XHRcdDx0ZXh0IGNsYXNzPVwibXVpc2Mtd29yZHNcIj57e2l0ZW0udmxvZ2VyTmFtZX1955qE5Y6f5aOw5Yib5L2cPC90ZXh0PlxyXG5cdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cIlwiIHN0eWxlPVwiZmxleC1kaXJlY3Rpb246IHJvdztcIj5cclxuXHRcdFx0XHRcdFx0PCEtLSA8aW1hZ2Ugc3JjPVwiL3N0YXRpYy9pbWFnZXMvY2QtcGxheS00LmdpZlwiXHJcblx0XHRcdFx0XHRcdFx0XHRzdHlsZT1cIndpZHRoOiAxNTBycHg7aGVpZ2h0OiAxNTBycHg7b3BhY2l0eTogMC44O1wiPjwvaW1hZ2U+IC0tPlxyXG5cdFx0XHRcdFx0XHQ8aW1hZ2Ugdi1pZj1cIiFpc0lPU1wiIHNyYz1cIi9zdGF0aWMvaW1hZ2VzL2ljb24tY2QucG5nXCJcclxuXHRcdFx0XHRcdFx0XHRcdGNsYXNzPVwicGxheS1jZFwiIHN0eWxlPVwid2lkdGg6IDEyMHJweDtoZWlnaHQ6IDEyMHJweDtcIj48L2ltYWdlPlxyXG5cdFx0XHRcdFx0XHQ8aW1hZ2Ugdi1pZj1cImlzSU9TXCIgOnNyYz1cIidodHRwczovL2ltb29jLW5ld3Mub3NzLWNuLXNoYW5naGFpLmFsaXl1bmNzLmNvbS9pbWFnZS9jZC1wbGF5LTQuZ2lmP3RpbWU9Jyt0aW1lc1wiIFxyXG5cdFx0XHRcdFx0XHRcdFx0Y2xhc3M9XCJwbGF5LWNkXCI+PC9pbWFnZT5cclxuXHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0PCEtLSDop4bpopHlsZXnpLrlj7PkvqfnmoTmk43kvZzmjInpkq7vvIzlpLTlg48gLSDngrnotZ4gLSDor4TorrogLSDovazlj5EgLS0+XHJcblx0XHRcdFx0PHZpZXcgY2xhc3M9XCJvcGVyYXRpb24tYm94XCI+XHJcblx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cIm9wZXJhdGlvbi1mYWNlLWJveFwiPlxyXG5cdFx0XHRcdFx0XHQ8aW1hZ2UgOnNyYz1cIml0ZW0udmxvZ2VyRmFjZVwiIGNsYXNzPVwidXNlci1mYWNlXCIgQGNsaWNrPVwiZ29Vc2VySW5mb1NlZVNlZShpdGVtLnZsb2dlcklkKVwiPjwvaW1hZ2U+XHJcblx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHQ8aW1hZ2Ugdi1pZj1cIiFpdGVtLmRvSUZvbGxvd1Zsb2dlclwiIFxyXG5cdFx0XHRcdFx0XHRzcmM9XCIvc3RhdGljL2ltYWdlcy9pY29uLWZvbGxvdy5wbmdcIiBcclxuXHRcdFx0XHRcdFx0QGNsaWNrPVwiZm9sbG93TWUoaXRlbS52bG9nZXJJZClcIiBcclxuXHRcdFx0XHRcdFx0Y2xhc3M9XCJmb2xsb3ctbWVcIj48L2ltYWdlPlxyXG5cdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJsaWtlLWJveFwiPlxyXG5cdFx0XHRcdFx0XHQ8aW1hZ2Ugdi1pZj1cIiFpdGVtLmRvSUxpa2VUaGlzVmxvZ1wiIFxyXG5cdFx0XHRcdFx0XHRcdHNyYz1cIi9zdGF0aWMvaW1hZ2VzL2ljb24tdW5saWtlLnBuZ1wiXHJcblx0XHRcdFx0XHRcdFx0QGNsaWNrPVwibGlrZU9yRGlzbGlrZVZsb2coMSlcIlxyXG5cdFx0XHRcdFx0XHRcdGNsYXNzPVwiaWNvblwiPjwvaW1hZ2U+XHJcblx0XHRcdFx0XHRcdDxpbWFnZSB2LWlmPVwiaXRlbS5kb0lMaWtlVGhpc1Zsb2dcIiBcclxuXHRcdFx0XHRcdFx0XHRzcmM9XCIvc3RhdGljL2ltYWdlcy9pY29uLWxpa2UucG5nXCIgXHJcblx0XHRcdFx0XHRcdFx0QGNsaWNrPVwibGlrZU9yRGlzbGlrZVZsb2coMClcIlxyXG5cdFx0XHRcdFx0XHRcdGNsYXNzPVwiaWNvblwiPjwvaW1hZ2U+XHJcblx0XHRcdFx0XHRcdDx0ZXh0IGNsYXNzPVwic29tZS1jb3VudHNcIj57e2dldEdyYWNlTnVtYmVyKGl0ZW0ubGlrZUNvdW50cyl9fTwvdGV4dD5cclxuXHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiY29tbWVudC1hbmQtc2hhcmUtYm94XCI+XHJcblx0XHRcdFx0XHRcdDxpbWFnZSBzcmM9XCIvc3RhdGljL2ltYWdlcy9pY29uLWNvbW1lbnRzLnBuZ1wiIEBjbGljaz1cImNvbW1lbnRUb2dnbGVcIiBjbGFzcz1cImljb25cIj48L2ltYWdlPlxyXG5cdFx0XHRcdFx0XHQ8IS0tIDx0ZXh0IGNsYXNzPVwic29tZS1jb3VudHNcIj57e2l0ZW0uY29tbWVudHNDb3VudHN9fTwvdGV4dD4gLS0+XHJcblx0XHRcdFx0XHRcdDx0ZXh0IGNsYXNzPVwic29tZS1jb3VudHNcIj57e2dldEdyYWNlTnVtYmVyKHRoaXNWbG9nVG90YWxDb21lbnRDb3VudHMpfX08L3RleHQ+XHJcblx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImNvbW1lbnQtYW5kLXNoYXJlLWJveFwiPlxyXG5cdFx0XHRcdFx0XHQ8aW1hZ2Ugc3JjPVwiL3N0YXRpYy9pbWFnZXMvaWNvbi1zaGFyZS5wbmdcIiBAY2xpY2s9XCJzaGFyZVRvZ2dsZVwiIGNsYXNzPVwiaWNvblwiPjwvaW1hZ2U+XHJcblx0XHRcdFx0XHRcdDx0ZXh0IGNsYXNzPVwic29tZS1jb3VudHNcIj7liIbkuqs8L3RleHQ+XHJcblx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHQ8L2NlbGw+XHJcblx0XHQ8L2xpc3Q+XHJcblx0XHQ8IS0tIDwvdW5pLWxpc3Q+IC0tPlxyXG5cdFx0XHJcblx0XHQ8dmlldyB2LWlmPVwidGhpc1Zsb2cgIT0gbnVsbCAmJiB0aGlzVmxvZyAhPSB7fVwiPlxyXG5cdFx0XHQ8IS0tIOW6lemDqOivhOiuuueql+WPo3BvcHVwIC0tPlxyXG5cdFx0XHQ8dW5pLXBvcHVwIHJlZj1cImNvbW1lbnRcIiB0eXBlPVwiY29tbWVudFwiPlxyXG5cdFx0XHRcdDx1bmktcG9wdXAtY29tbWVudHMgOnRoaXNWbG9nZXJJZD1cInRoaXNWbG9nZXJJZFwiIDp0aGlzVmxvZ0lkPVwidGhpc1Zsb2dJZFwiPjwvdW5pLXBvcHVwLWNvbW1lbnRzPlxyXG5cdFx0XHQ8L3VuaS1wb3B1cD5cclxuXHRcdFx0PHVuaS1wb3B1cCByZWY9XCJzaGFyZVwiIGJhY2tncm91bmQtY29sb3I9XCIjZmZmXCIgdHlwZT1cInNoYXJlXCI+XHJcblx0XHRcdFx0PHVuaS1wb3B1cC1zaGFyZVxyXG5cdFx0XHRcdFx0OnRoaXNWbG9nZXJJZD1cInRoaXNWbG9nZXJJZFwiIFxyXG5cdFx0XHRcdFx0OnRoaXNWbG9nSWQ9XCJ0aGlzVmxvZ0lkXCIgXHJcblx0XHRcdFx0XHQ6dmxvZ1VybD1cInRoaXNWbG9nLnVybFwiXHJcblx0XHRcdFx0XHQ6aXNQcml2YXRlPVwidGhpc1Zsb2cuaXNQcml2YXRlXCJcclxuXHRcdFx0XHRcdD48L3VuaS1wb3B1cC1zaGFyZT5cclxuXHRcdFx0PC91bmktcG9wdXA+XHJcblx0XHQ8L3ZpZXc+XHJcblx0PC92aWV3PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuXHR2YXIgYXBwID0gZ2V0QXBwKCk7XHJcblx0ZXhwb3J0IGRlZmF1bHQge1xyXG5cdFx0cHJvcHM6IHtcclxuXHRcdFx0c2NyZWVuSGVpZ2h0OiB7XHJcblx0XHRcdFx0ZGVmYXVsdDogMFxyXG5cdFx0XHR9LFxyXG5cdFx0XHRzcmM6IHtcclxuXHRcdFx0XHRkZWZhdWx0OiBmYWxzZVxyXG5cdFx0XHR9LFxyXG5cdFx0XHRwbGF5Rm9sbG93U3RhdHVzOiB7XHJcblx0XHRcdFx0ZGVmYXVsdDogZmFsc2VcclxuXHRcdFx0fSxcclxuXHRcdFx0cGxheVN0YXR1czoge1xyXG5cdFx0XHRcdGRlZmF1bHQ6IGZhbHNlXHJcblx0XHRcdH0sXHJcblx0XHRcdHZpZGVvTGlzdDoge1xyXG5cdFx0XHRcdGRlZmF1bHQ6IFtdXHJcblx0XHRcdH0sXHJcblx0XHRcdHJlZnJlc2hMaXN0OiB7XHJcblx0XHRcdFx0ZGVmYXVsdDogW11cclxuXHRcdFx0fSxcclxuXHRcdFx0cGFnaW5nTGlzdDoge1xyXG5cdFx0XHRcdGRlZmF1bHQ6IFtdXHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblx0XHRkYXRhKCkge1xyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdHRoaXNWbG9nOiB7fSxcdFx0XHQvLyDlvZPliY3nmoTnn63op4bpopHlr7nosaFcclxuXHRcdFx0XHR0aGlzVmxvZ0lkOiBcIlwiLFx0XHRcdC8vIOW9k+WJjeeahOefreinhumikeS4u+mUrmlkXHJcblx0XHRcdFx0dGhpc1Zsb2dlcklkOiBcIlwiLFx0XHQvLyDlvZPliY3nmoTnn63op4bpopHljZrkuLvnmoTkuLvplK5pZFxyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdHJlZnJlc2hpbmc6IGZhbHNlLFxyXG5cdFx0XHRcdHNob3dSZWZyZXNoTG9hZGluZzogXCJoaWRlXCIsXHJcblx0XHRcdFx0XHJcblx0XHRcdFx0cGxheWVyQ3VyOiAwLFxyXG5cdFx0XHRcdHBhZ2U6IDAsXHJcblx0XHRcdFx0dG90YWxQYWdlOiAwLFxyXG5cdFx0XHRcdHBsYXllckxpc3Q6IHRoaXMudmlkZW9MaXN0LFxyXG5cdFx0XHRcdHRoaXNWbG9nVG90YWxDb21lbnRDb3VudHM6IDAsXHJcblx0XHRcdFx0XHJcblx0XHRcdFx0dmlkZW9Db250ZXh0OiB7fSxcclxuXHRcdFx0XHRcclxuXHRcdFx0XHRjdXJyZW50SW5kZXg6IDAsXHJcblx0XHRcdFx0Y29udGVudE9mZnNldFk6IDAsXHJcblx0XHRcdFx0XHJcblx0XHRcdFx0dGltZXM6IG5ldyBEYXRlKCkuZ2V0VGltZSgpLFxyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdG9iamVjdEZpdDogXCJmaWxsXCIsXHJcblx0XHRcdFx0aXNJT1M6IHVuaS5nZXRTeXN0ZW1JbmZvU3luYygpLnBsYXRmb3JtID09IFwiaW9zXCJcclxuXHRcdFx0fVxyXG5cdFx0fSxcclxuXHRcdGNyZWF0ZWQoKSB7XHJcblx0XHRcdGlmKCF0aGlzLmlzSU9TKSB7XHJcblx0XHRcdFx0dGhpcy5vYmplY3RGaXQgPSBcImNvdmVyXCI7XHJcblx0XHRcdH1cclxuXHRcdFx0XHJcblx0XHRcdC8vIOafpeivoummlumhteefreinhumikeWIl+ihqFxyXG5cdFx0XHR0aGlzLmRpc3BsYXlWaWRlb1BhZ2luZyh0aGlzLnBhZ2UgKyAxLCB0cnVlKTtcclxuXHRcdFx0XHJcblx0XHRcdHZhciB2aWRlb0NvbnRleHQgPSB1bmkuY3JlYXRlVmlkZW9Db250ZXh0KCdteUZvbGxvd1ZpZGVvJyk7XHJcblx0XHRcdHRoaXMudmlkZW9Db250ZXh0ID0gdmlkZW9Db250ZXh0O1xyXG5cdFx0fSxcclxuXHRcdHdhdGNoOiB7XHJcblx0XHRcdHJlZnJlc2hMaXN0KHZhbHVlKSB7XHJcblx0XHRcdFx0dmFyIG1lID0gdGhpcztcclxuXHRcdFx0XHR2YXIgbmV3TGlzdCA9IHZhbHVlO1xyXG5cdFx0XHRcdGlmIChuZXdMaXN0ICE9IG51bGwgJiYgbmV3TGlzdCAhPSB1bmRlZmluZWQgJiYgbmV3TGlzdC5sZW5ndGggPiAwKSB7XHJcblx0XHRcdFx0XHRtZS5wbGF5ZXJMaXN0ID0gbmV3TGlzdDtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0XHJcblx0XHRcdFx0Ly8g6YeN572uXHJcblx0XHRcdFx0dGhpcy5wbGF5ZXJDdXIgPSAwO1xyXG5cdFx0XHRcdHRoaXMuY3VycmVudEluZGV4ID0gMDtcclxuXHRcdFx0XHR0aGlzLmNvbnRlbnRPZmZzZXRZID0wO1xyXG5cdFx0XHR9LFxyXG5cdFx0XHRcclxuXHRcdFx0cGxheUZvbGxvd1N0YXR1czogZnVuY3Rpb24odmFsKSB7XHJcblx0XHRcdFx0dmFyIG1lID0gdGhpcztcclxuXHRcdFx0XHRcclxuXHRcdFx0XHRpZiAoIXZhbCkge1xyXG5cdFx0XHRcdFx0bWUudmlkZW9Db250ZXh0LnBhdXNlKCk7XHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdG1lLnZpZGVvQ29udGV4dC5wbGF5KCk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9LFxyXG5cdFx0bWV0aG9kczoge1xyXG5cdFx0XHQvLyDmiorotoXov4cxMDAw5oiWMTAwMDDnmoTmlbDlrZfosIPmlbTvvIzmr5TlpoIxLjNrLzYuOHdcclxuXHRcdFx0Z2V0R3JhY2VOdW1iZXIobnVtKSB7XHJcblx0XHRcdFx0cmV0dXJuIGdldEFwcCgpLmdyYWNlTnVtYmVyKG51bSk7XHJcblx0XHRcdH0sXHJcblx0XHRcdGZyZXNoQ29tbWVudENvdW50cygpIHtcclxuXHRcdFx0XHR2YXIgbWUgPSB0aGlzO1xyXG5cdFx0XHRcdHZhciB1c2VySWQgPSBnZXRBcHAoKS5nZXRVc2VySW5mb1Nlc3Npb24oKS5pZDtcclxuXHRcdFx0XHR2YXIgc2VydmVyVXJsID0gYXBwLmdsb2JhbERhdGEuc2VydmVyVXJsO1xyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdGlmIChtZS5wbGF5ZXJMaXN0ID09IG51bGwgfHwgbWUucGxheWVyTGlzdCA9PSB1bmRlZmluZWQgfHwgbWUucGxheWVyTGlzdC5sZW5ndGggPT0gMCkge1xyXG5cdFx0XHRcdFx0cmV0dXJuO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHR2YXIgY3VycmVudEluZGV4ID0gbWUucGxheWVyQ3VyO1xyXG5cdFx0XHRcdHZhciB2bG9nID0gbWUucGxheWVyTGlzdFtjdXJyZW50SW5kZXhdO1xyXG5cdFx0XHRcdHZhciB2bG9nSWQgPSB2bG9nLnZsb2dJZDtcclxuXHRcdFx0XHRcclxuXHRcdFx0XHR2YXIgc2VydmVyVXJsID0gYXBwLmdsb2JhbERhdGEuc2VydmVyVXJsO1xyXG5cdFx0XHRcdHVuaS5yZXF1ZXN0KHtcclxuXHRcdFx0XHRcdG1ldGhvZDogXCJHRVRcIixcclxuXHRcdFx0XHRcdHVybDogc2VydmVyVXJsICsgXCIvY29tbWVudC9jb3VudHM/dmxvZ0lkPVwiICsgdmxvZ0lkLFxyXG5cdFx0XHRcdFx0c3VjY2VzcyhyZXN1bHQpIHtcclxuXHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdGlmIChyZXN1bHQuZGF0YS5zdGF0dXMgPT0gMjAwKSB7XHJcblx0XHRcdFx0XHRcdFx0bWUudGhpc1Zsb2dUb3RhbENvbWVudENvdW50cyA9IHJlc3VsdC5kYXRhLmRhdGE7XHJcblx0XHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdFx0bWUudGhpc1Zsb2dUb3RhbENvbWVudENvdW50cyA9IDA7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fSxcclxuXHRcdFx0bGlrZU9yRGlzbGlrZVZsb2coaXNMaWtlKSB7XHJcblx0XHRcdFx0dmFyIG1lID0gdGhpcztcclxuXHRcdFx0XHRpZiAoaXNMaWtlID09IDEpIHtcclxuXHRcdFx0XHRcdC8vIOWWnOasoi/ngrnotZ7op4bpopFcclxuXHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHR2YXIgbXlVc2VySW5mbyA9IGdldEFwcCgpLmdldFVzZXJJbmZvU2Vzc2lvbigpO1xyXG5cdFx0XHRcdFx0aWYgKG15VXNlckluZm8gPT0gbnVsbCkge1xyXG5cdFx0XHRcdFx0XHR1bmkuc2hvd1RvYXN0KHtcclxuXHRcdFx0XHRcdFx0XHRkdXJhdGlvbjogMzAwMCxcclxuXHRcdFx0XHRcdFx0XHR0aXRsZTogXCLor7fnmbvlvZV+XCIsXHJcblx0XHRcdFx0XHRcdFx0aWNvbjogXCJub25lXCJcclxuXHRcdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHRcdHVuaS5uYXZpZ2F0ZVRvKHtcclxuXHRcdFx0XHRcdFx0XHR1cmw6IFwiLi4vbG9naW5SZWdpc3QvbG9naW5SZWdpc3RcIixcclxuXHRcdFx0XHRcdFx0XHRhbmltYXRpb25UeXBlOiBcInNsaWRlLWluLWJvdHRvbVwiLFxyXG5cdFx0XHRcdFx0XHRcdHN1Y2Nlc3MoKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRtZS5sb2dpbldvcmRzID0gXCLor7fnmbvlvZVcIlxyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHRcdHJldHVybjtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0dmFyIHVzZXJJZCA9IGdldEFwcCgpLmdldFVzZXJJbmZvU2Vzc2lvbigpLmlkO1xyXG5cdFx0XHRcdFx0dmFyIHNlcnZlclVybCA9IGFwcC5nbG9iYWxEYXRhLnNlcnZlclVybDtcclxuXHRcdFx0XHRcdHZhciBjdXJyZW50SW5kZXggPSBtZS5wbGF5ZXJDdXI7XHJcblx0XHRcdFx0XHR2YXIgdmxvZyA9IG1lLnBsYXllckxpc3RbY3VycmVudEluZGV4XTtcclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0dW5pLnJlcXVlc3Qoe1xyXG5cdFx0XHRcdFx0XHRtZXRob2Q6IFwiUE9TVFwiLFxyXG5cdFx0XHRcdFx0XHRoZWFkZXI6IHtcclxuXHRcdFx0XHRcdFx0XHRoZWFkZXJVc2VySWQ6IHVzZXJJZCxcclxuXHRcdFx0XHRcdFx0XHRoZWFkZXJVc2VyVG9rZW46IGFwcC5nZXRVc2VyU2Vzc2lvblRva2VuKClcclxuXHRcdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdFx0dXJsOiBzZXJ2ZXJVcmwgKyBcIi92bG9nL2xpa2U/dXNlcklkPVwiICsgdXNlcklkICsgXCImdmxvZ2VySWQ9XCIgKyB2bG9nLnZsb2dlcklkICsgXCImdmxvZ0lkPVwiICsgdmxvZy52bG9nSWQsXHJcblx0XHRcdFx0XHRcdHN1Y2Nlc3MocmVzdWx0KSB7XHJcblx0XHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdFx0aWYgKHJlc3VsdC5kYXRhLnN0YXR1cyA9PSAyMDApIHtcclxuXHRcdFx0XHRcdFx0XHRcdG1lLnJlTGlrZVBsYXlMaXN0KHZsb2cudmxvZ0lkKTtcclxuXHRcdFx0XHRcdFx0XHRcdG1lLnJlZnJlc2hWbG9nQ291bnRzKCk7XHJcblx0XHRcdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0XHRcdHVuaS5zaG93VG9hc3Qoe1xyXG5cdFx0XHRcdFx0XHRcdFx0XHR0aXRsZTogcmVzdWx0LmRhdGEubXNnLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRpY29uOiBcIm5vbmVcIixcclxuXHRcdFx0XHRcdFx0XHRcdFx0ZHVyYXRpb246IDMwMDBcclxuXHRcdFx0XHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHR9IGVsc2UgaWYgKGlzTGlrZSA9PSAwKSB7XHJcblx0XHRcdFx0XHQvLyDlj5bmtojllpzmrKIv54K56LWe6KeG6aKRXHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdHZhciBteVVzZXJJbmZvID0gZ2V0QXBwKCkuZ2V0VXNlckluZm9TZXNzaW9uKCk7XHJcblx0XHRcdFx0XHRpZiAobXlVc2VySW5mbyA9PSBudWxsKSB7XHJcblx0XHRcdFx0XHRcdHVuaS5zaG93VG9hc3Qoe1xyXG5cdFx0XHRcdFx0XHRcdGR1cmF0aW9uOiAzMDAwLFxyXG5cdFx0XHRcdFx0XHRcdHRpdGxlOiBcIuivt+eZu+W9lX5cIixcclxuXHRcdFx0XHRcdFx0XHRpY29uOiBcIm5vbmVcIlxyXG5cdFx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHRcdFx0dW5pLm5hdmlnYXRlVG8oe1xyXG5cdFx0XHRcdFx0XHRcdHVybDogXCIuLi9sb2dpblJlZ2lzdC9sb2dpblJlZ2lzdFwiLFxyXG5cdFx0XHRcdFx0XHRcdGFuaW1hdGlvblR5cGU6IFwic2xpZGUtaW4tYm90dG9tXCIsXHJcblx0XHRcdFx0XHRcdFx0c3VjY2VzcygpIHtcclxuXHRcdFx0XHRcdFx0XHRcdG1lLmxvZ2luV29yZHMgPSBcIuivt+eZu+W9lVwiXHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHRcdFx0cmV0dXJuO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0XHR2YXIgdXNlcklkID0gZ2V0QXBwKCkuZ2V0VXNlckluZm9TZXNzaW9uKCkuaWQ7XHJcblx0XHRcdFx0XHR2YXIgc2VydmVyVXJsID0gYXBwLmdsb2JhbERhdGEuc2VydmVyVXJsO1xyXG5cdFx0XHRcdFx0dmFyIGN1cnJlbnRJbmRleCA9IG1lLnBsYXllckN1cjtcclxuXHRcdFx0XHRcdHZhciB2bG9nID0gbWUucGxheWVyTGlzdFtjdXJyZW50SW5kZXhdO1xyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0XHR1bmkucmVxdWVzdCh7XHJcblx0XHRcdFx0XHRcdG1ldGhvZDogXCJQT1NUXCIsXHJcblx0XHRcdFx0XHRcdGhlYWRlcjoge1xyXG5cdFx0XHRcdFx0XHRcdGhlYWRlclVzZXJJZDogdXNlcklkLFxyXG5cdFx0XHRcdFx0XHRcdGhlYWRlclVzZXJUb2tlbjogYXBwLmdldFVzZXJTZXNzaW9uVG9rZW4oKVxyXG5cdFx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0XHR1cmw6IHNlcnZlclVybCArIFwiL3Zsb2cvdW5saWtlP3VzZXJJZD1cIiArIHVzZXJJZCArIFwiJnZsb2dlcklkPVwiICsgdmxvZy52bG9nZXJJZCArIFwiJnZsb2dJZD1cIiArIHZsb2cudmxvZ0lkLFxyXG5cdFx0XHRcdFx0XHRzdWNjZXNzKHJlc3VsdCkge1xyXG5cdFx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHRcdGlmIChyZXN1bHQuZGF0YS5zdGF0dXMgPT0gMjAwKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRtZS5yZURpc2xpa2VQbGF5TGlzdCh2bG9nLnZsb2dJZCk7XHJcblx0XHRcdFx0XHRcdFx0XHRtZS5yZWZyZXNoVmxvZ0NvdW50cygpO1xyXG5cdFx0XHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdFx0XHR1bmkuc2hvd1RvYXN0KHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0dGl0bGU6IHJlc3VsdC5kYXRhLm1zZyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0aWNvbjogXCJub25lXCIsXHJcblx0XHRcdFx0XHRcdFx0XHRcdGR1cmF0aW9uOiAzMDAwXHJcblx0XHRcdFx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9LFxyXG5cdFx0XHRcclxuXHRcdFx0Ly8g5Zac5qyiL+eCuei1nueahGxpc3Tph43mlrDorr7nva5cclxuXHRcdFx0cmVMaWtlUGxheUxpc3QodmxvZ0lkKSB7XHJcblx0XHRcdFx0dmFyIG1lID0gdGhpcztcclxuXHRcdFx0XHR2YXIgcGxheWVyTGlzdCA9IG1lLnBsYXllckxpc3Q7XHJcblx0XHRcdFx0Ly8g5YWz5rOo5Lul5ZCO77yM5b6q546v5b2T5YmNcGxheWVyTGlzdO+8jOS/ruaUueWvueW6lOeyieS4neWFs+ezu+eahGRvSUZvbGxvd1Zsb2dlcuaUueS4unRydWVcclxuXHRcdFx0XHRmb3IgKHZhciBpID0gMCA7IGkgPCBwbGF5ZXJMaXN0Lmxlbmd0aCA7IGkgKyspIHtcclxuXHRcdFx0XHRcdHZhciB2bG9nID0gcGxheWVyTGlzdFtpXTtcclxuXHRcdFx0XHRcdGlmICh2bG9nLnZsb2dJZCA9PSB2bG9nSWQpIHtcclxuXHRcdFx0XHRcdFx0dmxvZy5kb0lMaWtlVGhpc1Zsb2cgPSB0cnVlO1xyXG5cdFx0XHRcdFx0XHRwbGF5ZXJMaXN0LnNwbGljZShpLDEsIHZsb2cpO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRtZS5wbGF5ZXJMaXN0ID0gcGxheWVyTGlzdDtcclxuXHRcdFx0fSxcclxuXHRcdFx0cmVEaXNsaWtlUGxheUxpc3QodmxvZ0lkKSB7XHJcblx0XHRcdFx0dmFyIG1lID0gdGhpcztcclxuXHRcdFx0XHR2YXIgcGxheWVyTGlzdCA9IG1lLnBsYXllckxpc3Q7XHJcblx0XHRcdFx0Ly8g5YWz5rOo5Lul5ZCO77yM5b6q546v5b2T5YmNcGxheWVyTGlzdO+8jOS/ruaUueWvueW6lOeyieS4neWFs+ezu+eahGRvSUZvbGxvd1Zsb2dlcuaUueS4unRydWVcclxuXHRcdFx0XHRmb3IgKHZhciBpID0gMCA7IGkgPCBwbGF5ZXJMaXN0Lmxlbmd0aCA7IGkgKyspIHtcclxuXHRcdFx0XHRcdHZhciB2bG9nID0gcGxheWVyTGlzdFtpXTtcclxuXHRcdFx0XHRcdGlmICh2bG9nLnZsb2dJZCA9PSB2bG9nSWQpIHtcclxuXHRcdFx0XHRcdFx0dmxvZy5kb0lMaWtlVGhpc1Zsb2cgPSBmYWxzZTtcclxuXHRcdFx0XHRcdFx0cGxheWVyTGlzdC5zcGxpY2UoaSwxLCB2bG9nKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0bWUucGxheWVyTGlzdCA9IHBsYXllckxpc3Q7XHJcblx0XHRcdH0sXHJcblx0XHRcdFxyXG5cdFx0XHQvLyDlhbPms6jlkI7nmoRsaXN06YeN5paw6K6+572uXHJcblx0XHRcdHJlRm9sbG93UGxheUxpc3QodmxvZ2VySWQpIHtcclxuXHRcdFx0XHR2YXIgbWUgPSB0aGlzO1xyXG5cdFx0XHRcdHZhciBwbGF5ZXJMaXN0ID0gbWUucGxheWVyTGlzdDtcclxuXHRcdFx0XHRcclxuXHRcdFx0XHQvLyDlhbPms6jku6XlkI7vvIzlvqrnjq/lvZPliY1wbGF5ZXJMaXN077yM5L+u5pS55a+55bqU57KJ5Lid5YWz57O755qEZG9JRm9sbG93VmxvZ2Vy5pS55Li6dHJ1ZVxyXG5cdFx0XHRcdGZvciAodmFyIGkgPSAwIDsgaSA8IHBsYXllckxpc3QubGVuZ3RoIDsgaSArKykge1xyXG5cdFx0XHRcdFx0dmFyIHZsb2cgPSBwbGF5ZXJMaXN0W2ldO1xyXG5cdFx0XHRcdFx0aWYgKHZsb2cudmxvZ2VySWQgPT0gdmxvZ2VySWQpIHtcclxuXHRcdFx0XHRcdFx0dmxvZy5kb0lGb2xsb3dWbG9nZXIgPSB0cnVlO1xyXG5cdFx0XHRcdFx0XHRwbGF5ZXJMaXN0LnNwbGljZShpLDEsIHZsb2cpO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRtZS5wbGF5ZXJMaXN0ID0gcGxheWVyTGlzdDtcclxuXHRcdFx0fSxcclxuXHRcdFx0Ly8g5Y+W5YWz5ZCO55qEbGlzdOmHjeaWsOiuvue9rlxyXG5cdFx0XHRyZUNhbmNlbFBsYXlMaXN0KHZsb2dlcklkKSB7XHJcblx0XHRcdFx0dmFyIG1lID0gdGhpcztcclxuXHRcdFx0XHR2YXIgcGxheWVyTGlzdCA9IG1lLnBsYXllckxpc3Q7XHJcblx0XHRcdFx0XHJcblx0XHRcdFx0Ly8g5YWz5rOo5Lul5ZCO77yM5b6q546v5b2T5YmNcGxheWVyTGlzdO+8jOS/ruaUueWvueW6lOeyieS4neWFs+ezu+eahGRvSUZvbGxvd1Zsb2dlcuaUueS4unRydWVcclxuXHRcdFx0XHRmb3IgKHZhciBpID0gMCA7IGkgPCBwbGF5ZXJMaXN0Lmxlbmd0aCA7IGkgKyspIHtcclxuXHRcdFx0XHRcdHZhciB2bG9nID0gcGxheWVyTGlzdFtpXTtcclxuXHRcdFx0XHRcdGlmICh2bG9nLnZsb2dlcklkID09IHZsb2dlcklkKSB7XHJcblx0XHRcdFx0XHRcdHZsb2cuZG9JRm9sbG93VmxvZ2VyID0gZmFsc2U7XHJcblx0XHRcdFx0XHRcdHBsYXllckxpc3Quc3BsaWNlKGksMSwgdmxvZyk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdG1lLnBsYXllckxpc3QgPSBwbGF5ZXJMaXN0O1xyXG5cdFx0XHR9LFxyXG5cdFx0XHRcclxuXHRcdFx0XHJcblx0XHRcdC8vIOWFs+azqOWNmuS4u1xyXG5cdFx0XHRmb2xsb3dNZSh2bG9nZXJJZCkge1xyXG5cdFx0XHRcdHZhciBtZSA9IHRoaXM7XHJcblx0XHRcdFx0dmFyIG15VXNlckluZm8gPSBnZXRBcHAoKS5nZXRVc2VySW5mb1Nlc3Npb24oKTtcclxuXHRcdFx0XHRpZiAobXlVc2VySW5mbyA9PSBudWxsKSB7XHJcblx0XHRcdFx0XHR1bmkuc2hvd1RvYXN0KHtcclxuXHRcdFx0XHRcdFx0ZHVyYXRpb246IDMwMDAsXHJcblx0XHRcdFx0XHRcdHRpdGxlOiBcIuivt+eZu+W9lX5cIixcclxuXHRcdFx0XHRcdFx0aWNvbjogXCJub25lXCJcclxuXHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0XHR1bmkubmF2aWdhdGVUbyh7XHJcblx0XHRcdFx0XHRcdHVybDogXCIuLi9sb2dpblJlZ2lzdC9sb2dpblJlZ2lzdFwiLFxyXG5cdFx0XHRcdFx0XHRhbmltYXRpb25UeXBlOiBcInNsaWRlLWluLWJvdHRvbVwiLFxyXG5cdFx0XHRcdFx0XHRzdWNjZXNzKCkge1xyXG5cdFx0XHRcdFx0XHRcdG1lLmxvZ2luV29yZHMgPSBcIuivt+eZu+W9lVwiXHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRyZXR1cm47XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdHZhciB1c2VySWQgPSBnZXRBcHAoKS5nZXRVc2VySW5mb1Nlc3Npb24oKS5pZDtcclxuXHRcdFx0XHR2YXIgc2VydmVyVXJsID0gYXBwLmdsb2JhbERhdGEuc2VydmVyVXJsO1xyXG5cdFx0XHRcdHVuaS5yZXF1ZXN0KHtcclxuXHRcdFx0XHRcdG1ldGhvZDogXCJQT1NUXCIsXHJcblx0XHRcdFx0XHRoZWFkZXI6IHtcclxuXHRcdFx0XHRcdFx0aGVhZGVyVXNlcklkOiB1c2VySWQsXHJcblx0XHRcdFx0XHRcdGhlYWRlclVzZXJUb2tlbjogYXBwLmdldFVzZXJTZXNzaW9uVG9rZW4oKVxyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdHVybDogc2VydmVyVXJsICsgXCIvZmFucy9mb2xsb3c/bXlJZD1cIiArIHVzZXJJZCArIFwiJnZsb2dlcklkPVwiICsgdmxvZ2VySWQsXHJcblx0XHRcdFx0XHRzdWNjZXNzKHJlc3VsdCkge1xyXG5cdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0aWYgKHJlc3VsdC5kYXRhLnN0YXR1cyA9PSAyMDApIHtcclxuXHRcdFx0XHRcdFx0XHRtZS5yZUZvbGxvd1BsYXlMaXN0KHZsb2dlcklkKTtcclxuXHRcdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0XHR1bmkuc2hvd1RvYXN0KHtcclxuXHRcdFx0XHRcdFx0XHRcdHRpdGxlOiByZXN1bHQuZGF0YS5tc2csXHJcblx0XHRcdFx0XHRcdFx0XHRpY29uOiBcIm5vbmVcIixcclxuXHRcdFx0XHRcdFx0XHRcdGR1cmF0aW9uOiAzMDAwXHJcblx0XHRcdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0XHRcclxuXHRcdFx0fSxcclxuXHRcdFx0XHJcblx0XHRcdGdvVXNlckluZm9TZWVTZWUodXNlcklkKSB7XHJcblx0XHRcdFx0dW5pLnNldFN0b3JhZ2VTeW5jKFwidXNlclBhZ2VJZFwiLCB1c2VySWQpO1xyXG5cdFx0XHRcdHVuaS5uYXZpZ2F0ZVRvKHtcclxuXHRcdFx0XHRcdHVybDogXCIvcGFnZXMvbWUvdmxvZ2VySW5mbz91c2VyUGFnZUlkPVwiICsgdXNlcklkXHJcblx0XHRcdFx0fSlcclxuXHRcdFx0fSxcclxuXHRcdFx0XHJcblx0XHRcdGxpc3RTY3JvbGwoZSkge1xyXG5cdFx0XHRcdGlmKGUuY29udGVudE9mZnNldC55ID4gMCkge1xyXG5cdFx0XHRcdFx0dGhpcy4kZW1pdChcInNob3dMb2FkaW5nXCIpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSxcclxuXHRcdFx0XHJcblx0XHRcdGRvd25sb2FkVmxvZygpIHtcclxuXHRcdFx0XHRcclxuXHRcdFx0XHR2YXIgbWUgPSB0aGlzO1xyXG5cdFx0XHRcdHZhciBzZXJ2ZXJVcmwgPSBhcHAuZ2xvYmFsRGF0YS5zZXJ2ZXJVcmw7XHJcblx0XHRcdFx0dmFyIGN1cnJlbnRJbmRleCA9IG1lLnBsYXllckN1cjtcclxuXHRcdFx0XHR2YXIgdmxvZyA9IG1lLnBsYXllckxpc3RbY3VycmVudEluZGV4XTtcclxuXHRcdFx0XHR2YXIgcGVuZGluZ0xlbmd0aCA9IHZsb2cudXJsO1xyXG5cdFx0XHRcdFxyXG5cdFx0XHR9LFxyXG5cdFx0XHRcclxuXHRcdFx0Y29weUxpbmsoKSB7XHJcblx0XHRcdFx0dmFyIG1lID0gbWU7XHJcblx0XHRcdH0sXHJcblx0XHRcdFxyXG5cdFx0XHRzaG93UVJDb2RlKCkge1xyXG5cdFx0XHRcdHZhciBtZSA9IG1lO1xyXG5cdFx0XHR9LFxyXG5cdFx0XHRcclxuXHRcdFx0Y2hhbmdlVmxvZ1RvUHJpdmF0ZSgpIHtcclxuXHRcdFx0XHR2YXIgbWUgPSBtZTtcclxuXHRcdFx0fSxcclxuXHRcdFx0XHRcdFx0XHJcblx0XHRcdG9ucmVmcmVzaChlKSB7XHJcblx0XHRcdFx0dGhpcy5yZWZyZXNoaW5nID0gdHJ1ZTtcclxuXHRcdFx0XHRzZXRUaW1lb3V0KCgpID0+IHtcclxuXHRcdFx0XHRcdHRoaXMucmVmcmVzaGluZyA9IGZhbHNlO1xyXG5cdFx0XHRcdFx0dGhpcy4kZW1pdChcImhpZGVMb2FkaW5nXCIpO1xyXG5cdFx0XHRcdFx0dGhpcy5yZWZyZXNoVGV4dCA9ICfihpMgUHVsbCBUbyBSZWZyZXNoJ1xyXG5cdFx0XHRcdH0sIDMwMClcclxuXHRcdFx0XHRcdFx0XHRcclxuXHRcdFx0XHQvLyDpgJrov4dsaXN057uE5Lu255qE5LiL5ouJ5Yi35paw6Kem5Y+R5b2T5YmN5omA5Zyo6aG16Z2i55qE5LiL5ouJ5Yi35pawXHJcblx0XHRcdFx0dW5pLnN0YXJ0UHVsbERvd25SZWZyZXNoKCk7XHJcblx0XHRcdH0sXHJcblx0XHRcdFxyXG5cdFx0XHRvbnBsYXk6IGZ1bmN0aW9uKGUpIHtcclxuXHRcdFx0XHRpZiAodW5pLmdldFN5c3RlbUluZm9TeW5jKCkucGxhdGZvcm0gPT0gJ2lvcycpIHtcclxuXHRcdFx0XHRcdC8vIHRoaXMuJGVtaXQoXCJwbGF5XCIsIDAuMSk7XHJcblx0XHRcdFx0XHR0aGlzLmRvcGxheSgwLjEpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSxcclxuXHRcdFx0b25lcnJvcjogZnVuY3Rpb24oZXJyKSB7XHJcblx0XHRcdH0sXHJcblx0XHRcdHRpbWV1cGRhdGU6IGZ1bmN0aW9uKGUpIHtcclxuXHRcdFx0XHRpZiAoZS5kZXRhaWwuY3VycmVudFRpbWUgPiAwLjIpIHtcclxuXHRcdFx0XHRcdC8vIHRoaXMuJGVtaXQoXCJwbGF5XCIsIGUuZGV0YWlsLmN1cnJlbnRUaW1lKTtcclxuXHRcdFx0XHRcdHRoaXMuZG9wbGF5KGUuZGV0YWlsLmN1cnJlbnRUaW1lKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0sXHJcblx0XHRcdFxyXG5cdFx0XHRwbGF5T3JQYXVzZSgpIHtcclxuXHRcdFx0XHR2YXIgbWUgPSB0aGlzO1xyXG5cdFx0XHRcdHZhciBwbGF5Rm9sbG93U3RhdHVzID0gdGhpcy5wbGF5Rm9sbG93U3RhdHVzO1xyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdGlmICghcGxheUZvbGxvd1N0YXR1cykge1xyXG5cdFx0XHRcdFx0bWUudmlkZW9Db250ZXh0LnBhdXNlKCk7XHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdG1lLnZpZGVvQ29udGV4dC5wbGF5KCk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdHRoaXMucGxheUZvbGxvd1N0YXR1cyA9ICFwbGF5Rm9sbG93U3RhdHVzO1xyXG5cdFx0XHR9LFxyXG5cdFx0XHRcclxuXHRcdFx0XHJcblx0XHRcdHNjcm9sbDogZnVuY3Rpb24oZSkge1xyXG5cdFx0XHRcdGxldCBvcmlnaW5hbEluZGV4ID0gdGhpcy5jdXJyZW50SW5kZXg7XHJcblx0XHRcdFx0bGV0IGlzTmV4dCA9IGZhbHNlO1xyXG5cdFx0XHRcdGlmIChlLmNvbnRlbnRPZmZzZXQueSA8IHRoaXMuY29udGVudE9mZnNldFkpIHtcclxuXHRcdFx0XHRcdGlzTmV4dCA9IHRydWU7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdHRoaXMuY29udGVudE9mZnNldFkgPSBlLmNvbnRlbnRPZmZzZXQueTtcclxuXHRcdFx0XHRcclxuXHRcdFx0XHR2YXIgbnVtID0gdGhpcy5wbGF5ZXJMaXN0Lmxlbmd0aDtcclxuXHRcdFx0XHRcclxuXHRcdFx0XHR0aGlzLmN1cnJlbnRJbmRleCA9IE1hdGgucm91bmQoTWF0aC5hYnModGhpcy5jb250ZW50T2Zmc2V0WSkgLyAoZS5jb250ZW50U2l6ZS5oZWlnaHQgLyBudW0pKTtcclxuXHRcdFx0XHR0aGlzLm9uY2hhbmdlKHRoaXMuY3VycmVudEluZGV4KTtcclxuXHRcdFx0XHRcclxuXHRcdFx0XHR0aGlzLnRpbWVzID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XHJcblx0XHRcdFx0XHJcblx0XHRcdFx0Ly8g5Yik5pat5aaC5p6c6KeG6aKR5YiX6KGo5oC76ZW/5bqmLeW9k+WJjeS4i+agh++8jOWwkeS6jjPkuKrvvIzliJnlvIDlp4vliIbpobXmn6Xor6LlkI7nu63nmoTop4bpopHvvIzlubbkuJTov73liqDliLDnjrDmnIlsaXN05LitXHJcblx0XHRcdFx0aWYgKCh0aGlzLnBsYXllckxpc3QubGVuZ3RoIC0gdGhpcy5jdXJyZW50SW5kZXgpIDwgMykge1xyXG5cdFx0XHRcdFx0Ly8g5aaC5p6c6KaB5YiG6aG155qEcGFnZeWSjOaAu+aVsHRvdGFsUGFnZeebuOetie+8jOWImeayoeacieabtOWkmlxyXG5cdFx0XHRcdFx0aWYgKHRoaXMucGFnZSA9PSB0aGlzLnRvdGFsUGFnZSkge1xyXG5cdFx0XHRcdFx0XHRyZXR1cm47XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR0aGlzLmRpc3BsYXlWaWRlb1BhZ2luZyh0aGlzLnBhZ2UgKyAxLCBmYWxzZSk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdFxyXG5cdFx0XHR9LFxyXG5cdFx0XHRcclxuXHRcdFx0Ly8g5YiG6aG15p+l6K+i5paw55qEbGlzdO+8jOW5tuS4lOi/veWKoOWIsOeOsOaciWxpc3TkuK1cclxuXHRcdFx0ZGlzcGxheVZpZGVvUGFnaW5nKHBhZ2UsIG5lZWRDbGVhckxpc3QpIHtcclxuXHRcdFx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdC8vIOafpeivoummlumhteefreinhumikeWIl+ihqFxyXG5cdFx0XHRcdHZhciBtZSA9IHRoaXM7XHJcblx0XHRcdFx0dmFyIG15VXNlckluZm8gPSBnZXRBcHAoKS5nZXRVc2VySW5mb1Nlc3Npb24oKTtcclxuXHRcdFx0XHR2YXIgdXNlcklkID0gXCJcIjtcclxuXHRcdFx0XHRpZiAobXlVc2VySW5mbyAhPSBudWxsKSB7XHJcblx0XHRcdFx0XHR1c2VySWQgPSBteVVzZXJJbmZvLmlkO1xyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRyZXR1cm47XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdHZhciBzZXJ2ZXJVcmwgPSBhcHAuZ2xvYmFsRGF0YS5zZXJ2ZXJVcmw7XHJcblx0XHRcdFx0dW5pLnJlcXVlc3Qoe1xyXG5cdFx0XHRcdFx0bWV0aG9kOiBcIkdFVFwiLFxyXG5cdFx0XHRcdFx0aGVhZGVyOiB7XHJcblx0XHRcdFx0XHRcdGhlYWRlclVzZXJJZDogdXNlcklkLFxyXG5cdFx0XHRcdFx0XHRoZWFkZXJVc2VyVG9rZW46IGFwcC5nZXRVc2VyU2Vzc2lvblRva2VuKClcclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHR1cmw6IHNlcnZlclVybCArIFwiL3Zsb2cvZm9sbG93TGlzdD9teUlkPVwiICsgdXNlcklkICsgXCImcGFnZT1cIiArIHBhZ2UgKyBcIiZwYWdlU2l6ZT0xMFwiLFxyXG5cdFx0XHRcdFx0c3VjY2VzcyhyZXN1bHQpIHtcclxuXHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdGlmIChyZXN1bHQuZGF0YS5zdGF0dXMgPT0gMjAwKSB7XHJcblx0XHRcdFx0XHRcdFx0dmFyIHZsb2dMaXN0ID0gcmVzdWx0LmRhdGEuZGF0YS5yb3dzO1xyXG5cdFx0XHRcdFx0XHRcdHZhciB0b3RhbFBhZ2UgPSByZXN1bHQuZGF0YS5kYXRhLnRvdGFsO1xyXG5cdFx0XHRcdFx0XHRcdGlmIChuZWVkQ2xlYXJMaXN0KSB7XHJcblx0XHRcdFx0XHRcdFx0XHRtZS5wbGF5ZXJMaXN0ID0gW107XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdG1lLnBsYXllckxpc3QgPSBtZS5wbGF5ZXJMaXN0LmNvbmNhdCh2bG9nTGlzdCk7XHJcblx0XHRcdFx0XHRcdFx0bWUucGFnZSA9IHBhZ2U7XHJcblx0XHRcdFx0XHRcdFx0bWUudG90YWxQYWdlID0gdG90YWxQYWdlO1xyXG5cdFx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHRcdGlmIChuZWVkQ2xlYXJMaXN0KSB7XHJcblx0XHRcdFx0XHRcdFx0XHRtZS5zZXRUaGlzVmxvZ0luZm8oKTtcclxuXHRcdFx0XHRcdFx0XHRcdG1lLmZyZXNoQ29tbWVudENvdW50cygpO1xyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRtZS5kb1RpbWVyKCk7XHJcblx0XHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdFx0dW5pLnNob3dUb2FzdCh7XHJcblx0XHRcdFx0XHRcdFx0XHR0aXRsZTogcmVzdWx0LmRhdGEubXNnLFxyXG5cdFx0XHRcdFx0XHRcdFx0aWNvbjogXCJub25lXCIsXHJcblx0XHRcdFx0XHRcdFx0XHRkdXJhdGlvbjogMzAwMFxyXG5cdFx0XHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdGNvbXBsZXRlKCkge1xyXG5cdFx0XHRcdFx0XHQvLyBtZS5kb1RpbWVyKCk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdH0sXHJcblx0XHRcdFxyXG5cdFx0XHRkb1RpbWVyKCkge1xyXG5cdFx0XHRcdHZhciBtZSA9IHRoaXM7XHJcblx0XHRcdFx0dmFyIHQgPSBzZXRUaW1lb3V0KCgpID0+IHsgXHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdGlmIChtZS5wbGF5ZXJMaXN0ICE9IG51bGwgJiYgbWUucGxheWVyTGlzdCAhPSB1bmRlZmluZWQgJiYgbWUucGxheWVyTGlzdC5sZW5ndGggPiAwKSB7XHJcblx0XHRcdFx0XHRcdG1lLnZpZGVvQ29udGV4dC5wYXVzZSgpO1xyXG5cdFx0XHRcdFx0XHRtZS5wbGF5Rm9sbG93U3RhdHVzID0gZmFsc2U7XHJcblx0XHRcdFx0XHR9IFxyXG5cdFx0XHRcdH0sIDMwMDApXHJcblx0XHRcdH0sXHJcblx0XHRcdFxyXG5cdFx0XHRkb3BsYXk6IGZ1bmN0aW9uKHRpbWUpIHtcclxuXHRcdFx0XHRpZiAodGltZSA+IDApIHtcclxuXHRcdFx0XHRcdHRoaXMucGxheWVyTGlzdFt0aGlzLnBsYXllckN1cl0ucGxheSA9IHRydWU7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9LFxyXG5cdFx0XHRvbmNoYW5nZTogZnVuY3Rpb24oaW5kZXgpIHtcclxuXHRcdFx0XHRpZiAoaW5kZXggIT0gdGhpcy5wbGF5ZXJDdXIpIHtcclxuXHRcdFx0XHRcdHRoaXMucGxheWVyTGlzdFt0aGlzLnBsYXllckN1cl0ucGxheSA9IGZhbHNlO1xyXG5cdFx0XHRcdFx0dGhpcy5wbGF5ZXJDdXIgPSBpbmRleDtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0XHJcblx0XHRcdFx0dGhpcy5yZWZyZXNoVmxvZ0NvdW50cygpO1xyXG5cdFx0XHRcdHRoaXMuc2V0VGhpc1Zsb2dJbmZvKCk7XHJcblx0XHRcdFx0dGhpcy5mcmVzaENvbW1lbnRDb3VudHMoKTtcclxuXHRcdFx0fSxcclxuXHRcdFx0XHJcblx0XHRcdC8vIOiuvue9ruW9k+WJjXZsb2fnmoTkv6Hmga9cclxuXHRcdFx0c2V0VGhpc1Zsb2dJbmZvKCkge1xyXG5cdFx0XHRcdHZhciBtZSA9IHRoaXM7XHJcblx0XHRcdFx0dmFyIHNlcnZlclVybCA9IGFwcC5nbG9iYWxEYXRhLnNlcnZlclVybDtcclxuXHRcdFx0XHRcclxuXHRcdFx0XHRpZiAobWUucGxheWVyTGlzdCAhPSBudWxsICYmIG1lLnBsYXllckxpc3QgIT0gdW5kZWZpbmVkICYmIG1lLnBsYXllckxpc3QubGVuZ3RoID4gMCkge1xyXG5cdFx0XHRcdFx0dmFyIGN1cnJlbnRJbmRleCA9IG1lLnBsYXllckN1cjtcclxuXHRcdFx0XHRcdHZhciB2bG9nID0gbWUucGxheWVyTGlzdFtjdXJyZW50SW5kZXhdO1xyXG5cdFx0XHRcdFx0dGhpcy50aGlzVmxvZyA9IHZsb2c7XHJcblx0XHRcdFx0XHR0aGlzLnRoaXNWbG9nSWQgPSB2bG9nLnZsb2dJZDtcclxuXHRcdFx0XHRcdHRoaXMudGhpc1Zsb2dlcklkID0gdmxvZy52bG9nZXJJZDtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0sXHJcblx0XHRcdFxyXG5cdFx0XHRyZWZyZXNoVmxvZ0NvdW50cygpIHtcclxuXHRcdFx0XHQvLyDmn6Xor6LlvZPliY3ngrnotZ7mlbDvvIzph43mlrDotYvlgLznu5nlvZPliY3op4bpopFcclxuXHRcdFx0XHR2YXIgbWUgPSB0aGlzO1xyXG5cdFx0XHRcdHZhciBzZXJ2ZXJVcmwgPSBhcHAuZ2xvYmFsRGF0YS5zZXJ2ZXJVcmw7XHJcblx0XHRcdFx0dmFyIGN1cnJlbnRJbmRleCA9IG1lLnBsYXllckN1cjtcclxuXHRcdFx0XHR2YXIgdmxvZyA9IG1lLnBsYXllckxpc3RbY3VycmVudEluZGV4XTtcclxuXHRcdFx0XHR1bmkucmVxdWVzdCh7XHJcblx0XHRcdFx0XHRtZXRob2Q6IFwiUE9TVFwiLFxyXG5cdFx0XHRcdFx0dXJsOiBzZXJ2ZXJVcmwgKyBcIi92bG9nL3RvdGFsTGlrZWRDb3VudHM/dmxvZ0lkPVwiICsgdmxvZy52bG9nSWQsXHJcblx0XHRcdFx0XHRzdWNjZXNzKHJlc3VsdCkge1xyXG5cdFx0XHRcdFx0XHRpZiAocmVzdWx0LmRhdGEuc3RhdHVzID09IDIwMCkge1xyXG5cdFx0XHRcdFx0XHRcdHZhciBjb3VudHMgPSByZXN1bHQuZGF0YS5kYXRhO1xyXG5cdFx0XHRcdFx0XHRcdG1lLnJlQ2hhbmdlVmxvZ0xpa2VkQ291bnRzSW5QbGF5TGlzdCh2bG9nLnZsb2dJZCwgY291bnRzKTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9LFxyXG5cdFx0XHRcclxuXHRcdFx0cmVDaGFuZ2VWbG9nTGlrZWRDb3VudHNJblBsYXlMaXN0KHZsb2dJZCwgY291bnRzKSB7XHJcblx0XHRcdFx0dmFyIG1lID0gdGhpcztcclxuXHRcdFx0XHR2YXIgcGxheWVyTGlzdCA9IG1lLnBsYXllckxpc3Q7XHJcblx0XHRcdFx0Ly8g5YWz5rOo5Lul5ZCO77yM5b6q546v5b2T5YmNcGxheWVyTGlzdO+8jOS/ruaUueWvueW6lOeyieS4neWFs+ezu+eahGRvSUZvbGxvd1Zsb2dlcuaUueS4unRydWVcclxuXHRcdFx0XHRmb3IgKHZhciBpID0gMCA7IGkgPCBwbGF5ZXJMaXN0Lmxlbmd0aCA7IGkgKyspIHtcclxuXHRcdFx0XHRcdHZhciB2bG9nID0gcGxheWVyTGlzdFtpXTtcclxuXHRcdFx0XHRcdGlmICh2bG9nLnZsb2dJZCA9PSB2bG9nSWQpIHtcclxuXHRcdFx0XHRcdFx0dmxvZy5saWtlQ291bnRzID0gY291bnRzO1xyXG5cdFx0XHRcdFx0XHRwbGF5ZXJMaXN0LnNwbGljZShpLDEsIHZsb2cpO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRtZS5wbGF5ZXJMaXN0ID0gcGxheWVyTGlzdDtcclxuXHRcdFx0fSxcclxuXHRcdFx0XHJcblx0XHRcdGNvbW1lbnRUb2dnbGUoKSB7XHJcblx0XHRcdFx0dGhpcy4kcmVmcy5jb21tZW50Lm9wZW4oKTtcclxuXHRcdFx0XHR1bmkuaGlkZVRhYkJhcih7XHJcblx0XHRcdFx0XHRhbmltYXRpb246IHRydWVcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fSxcclxuXHRcdFx0c2hhcmVUb2dnbGUoKSB7XHJcblx0XHRcdFx0dGhpcy4kcmVmcy5zaGFyZS5vcGVuKCk7XHJcblx0XHRcdFx0dW5pLmhpZGVUYWJCYXIoe1xyXG5cdFx0XHRcdFx0YW5pbWF0aW9uOiB0cnVlXHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcbjwvc2NyaXB0PlxyXG5cclxuXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///253\n");

/***/ }),
/* 254 */
/*!***********************************************************************************************************************!*\
  !*** C:/Users/TAOER/Desktop/ShayuVideo/ShayuVideoAPP/components/videoFollowComp.vue?vue&type=style&index=0&lang=css& ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_videoFollowComp_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-0-1!./node_modules/postcss-loader/src??ref--10-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./videoFollowComp.vue?vue&type=style&index=0&lang=css& */ 255);
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_videoFollowComp_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_videoFollowComp_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_videoFollowComp_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_videoFollowComp_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_videoFollowComp_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 255 */
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-0-1!./node_modules/postcss-loader/src??ref--10-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!C:/Users/TAOER/Desktop/ShayuVideo/ShayuVideoAPP/components/videoFollowComp.vue?vue&type=style&index=0&lang=css& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  ".icon": {
    "": {
      "width": [
        "80rpx",
        0,
        0,
        0
      ],
      "height": [
        "80rpx",
        0,
        0,
        0
      ],
      "opacity": [
        0.9,
        0,
        0,
        0
      ]
    }
  },
  ".user-face": {
    "": {
      "width": [
        "100rpx",
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
      "borderRadius": [
        "100rpx",
        0,
        0,
        1
      ]
    }
  },
  ".play-cd": {
    "": {
      "width": [
        "150rpx",
        0,
        0,
        2
      ],
      "height": [
        "150rpx",
        0,
        0,
        2
      ],
      "opacity": [
        0.8,
        0,
        0,
        2
      ]
    }
  },
  ".refresh-info-txt": {
    "": {
      "color": [
        "#F1F1F1",
        0,
        0,
        3
      ],
      "textAlign": [
        "center",
        0,
        0,
        3
      ],
      "fontSize": [
        "12",
        0,
        0,
        3
      ]
    }
  },
  ".publish-info-box": {
    "": {
      "position": [
        "absolute",
        0,
        0,
        4
      ],
      "bottom": [
        "200rpx",
        0,
        0,
        4
      ],
      "left": [
        0,
        0,
        0,
        4
      ],
      "right": [
        0,
        0,
        0,
        4
      ],
      "paddingLeft": [
        "20rpx",
        0,
        0,
        4
      ],
      "paddingRight": [
        "20rpx",
        0,
        0,
        4
      ],
      "flexDirection": [
        "row",
        0,
        0,
        4
      ],
      "justifyContent": [
        "space-between",
        0,
        0,
        4
      ],
      "alignItems": [
        "center",
        0,
        0,
        4
      ]
    }
  },
  ".publish-info-vloger-name": {
    "": {
      "color": [
        "#FFFFFF",
        0,
        0,
        5
      ],
      "fontSize": [
        "40rpx",
        0,
        0,
        5
      ],
      "fontWeight": [
        "600",
        0,
        0,
        5
      ],
      "paddingTop": [
        "10rpx",
        0,
        0,
        5
      ],
      "paddingRight": [
        "10rpx",
        0,
        0,
        5
      ],
      "paddingBottom": [
        "10rpx",
        0,
        0,
        5
      ],
      "paddingLeft": [
        "10rpx",
        0,
        0,
        5
      ]
    }
  },
  ".publish-info-music-box": {
    "": {
      "flexDirection": [
        "row",
        0,
        0,
        6
      ],
      "alignItems": [
        "center",
        0,
        0,
        6
      ]
    }
  },
  ".publish-info-content": {
    "": {
      "color": [
        "#FFFFFF",
        0,
        0,
        7
      ],
      "fontSize": [
        "28rpx",
        0,
        0,
        7
      ],
      "fontWeight": [
        "400",
        0,
        0,
        7
      ],
      "paddingTop": [
        "10rpx",
        0,
        0,
        7
      ],
      "paddingRight": [
        "10rpx",
        0,
        0,
        7
      ],
      "paddingBottom": [
        "10rpx",
        0,
        0,
        7
      ],
      "paddingLeft": [
        "10rpx",
        0,
        0,
        7
      ],
      "lines": [
        5,
        0,
        0,
        7
      ],
      "width": [
        "520rpx",
        0,
        0,
        7
      ],
      "textOverflow": [
        "ellipsis",
        0,
        0,
        7
      ]
    }
  },
  ".icon-fire": {
    "": {
      "width": [
        "36rpx",
        0,
        0,
        8
      ],
      "height": [
        "36rpx",
        0,
        0,
        8
      ]
    }
  },
  ".muisc-words": {
    "": {
      "color": [
        "#FFFFFF",
        0,
        0,
        9
      ],
      "fontSize": [
        "28rpx",
        0,
        0,
        9
      ],
      "paddingTop": [
        "10rpx",
        0,
        0,
        9
      ],
      "paddingRight": [
        "10rpx",
        0,
        0,
        9
      ],
      "paddingBottom": [
        "10rpx",
        0,
        0,
        9
      ],
      "paddingLeft": [
        "10rpx",
        0,
        0,
        9
      ],
      "width": [
        "400rpx",
        0,
        0,
        9
      ]
    }
  },
  ".some-counts": {
    "": {
      "fontSize": [
        "24rpx",
        0,
        0,
        10
      ],
      "fontWeight": [
        "500",
        0,
        0,
        10
      ],
      "textAlign": [
        "center",
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
      "marginTop": [
        "2rpx",
        0,
        0,
        10
      ]
    }
  },
  ".operation-box": {
    "": {
      "position": [
        "absolute",
        0,
        0,
        11
      ],
      "top": [
        0,
        0,
        0,
        11
      ],
      "bottom": [
        0,
        0,
        0,
        11
      ],
      "right": [
        0,
        0,
        0,
        11
      ],
      "alignItems": [
        "center",
        0,
        0,
        11
      ],
      "justifyContent": [
        "center",
        0,
        0,
        11
      ],
      "paddingRight": [
        "20rpx",
        0,
        0,
        11
      ]
    }
  },
  ".operation-face-box": {
    "": {
      "borderRadius": [
        "100rpx",
        0,
        0,
        12
      ],
      "borderColor": [
        "#FFFFFF",
        0,
        0,
        12
      ],
      "borderWidth": [
        "3rpx",
        0,
        0,
        12
      ]
    }
  },
  ".follow-me": {
    "": {
      "width": [
        "40rpx",
        0,
        0,
        13
      ],
      "height": [
        "40rpx",
        0,
        0,
        13
      ],
      "borderRadius": [
        "10",
        0,
        0,
        13
      ],
      "position": [
        "relative",
        0,
        0,
        13
      ],
      "top": [
        "-20rpx",
        0,
        0,
        13
      ]
    }
  },
  ".like-box": {
    "": {
      "flexDirection": [
        "column",
        0,
        0,
        14
      ],
      "alignItems": [
        "center",
        0,
        0,
        14
      ],
      "marginTop": [
        "30rpx",
        0,
        0,
        14
      ]
    }
  },
  ".comment-and-share-box": {
    "": {
      "flexDirection": [
        "column",
        0,
        0,
        15
      ],
      "alignItems": [
        "center",
        0,
        0,
        15
      ],
      "marginTop": [
        "45rpx",
        0,
        0,
        15
      ]
    }
  },
  "@VERSION": 2
}

/***/ }),
/* 256 */
/*!**************************************************************************************************************************************************!*\
  !*** C:/Users/TAOER/Desktop/ShayuVideo/ShayuVideoAPP/pages/index/index.nvue?vue&type=style&index=0&id=7b909402&scoped=true&lang=css&mpType=page ***!
  \**************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_nvue_vue_type_style_index_0_id_7b909402_scoped_true_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-0-1!./node_modules/postcss-loader/src??ref--10-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./index.nvue?vue&type=style&index=0&id=7b909402&scoped=true&lang=css&mpType=page */ 257);
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_nvue_vue_type_style_index_0_id_7b909402_scoped_true_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_nvue_vue_type_style_index_0_id_7b909402_scoped_true_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_nvue_vue_type_style_index_0_id_7b909402_scoped_true_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_nvue_vue_type_style_index_0_id_7b909402_scoped_true_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_nvue_vue_type_style_index_0_id_7b909402_scoped_true_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 257 */
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-0-1!./node_modules/postcss-loader/src??ref--10-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!C:/Users/TAOER/Desktop/ShayuVideo/ShayuVideoAPP/pages/index/index.nvue?vue&type=style&index=0&id=7b909402&scoped=true&lang=css&mpType=page ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  ".page": {
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
      "top": [
        0,
        0,
        0,
        1
      ],
      "bottom": [
        0,
        0,
        0,
        1
      ],
      "backgroundColor": [
        "#000000",
        0,
        0,
        1
      ]
    }
  },
  ".header": {
    "": {
      "position": [
        "absolute",
        0,
        0,
        4
      ],
      "left": [
        0,
        0,
        0,
        4
      ],
      "right": [
        0,
        0,
        0,
        4
      ],
      "flexDirection": [
        "row",
        0,
        0,
        4
      ],
      "height": [
        "100rpx",
        0,
        0,
        4
      ],
      "lineHeight": [
        "100rpx",
        0,
        0,
        4
      ],
      "alignItems": [
        "center",
        0,
        0,
        4
      ],
      "paddingLeft": [
        "40rpx",
        0,
        0,
        4
      ],
      "paddingRight": [
        "40rpx",
        0,
        0,
        4
      ]
    }
  },
  ".header-center": {
    "": {
      "flex": [
        1,
        0,
        0,
        5
      ],
      "flexDirection": [
        "row",
        0,
        0,
        5
      ],
      "alignItems": [
        "center",
        0,
        0,
        5
      ],
      "justifyContent": [
        "center",
        0,
        0,
        5
      ]
    }
  },
  ".header-left": {
    "": {
      "color": [
        "#999999",
        0,
        0,
        6
      ],
      "height": [
        "100rpx",
        0,
        0,
        6
      ],
      "lineHeight": [
        "100rpx",
        0,
        0,
        6
      ],
      "alignItems": [
        "flex-start",
        0,
        0,
        6
      ],
      "justifyContent": [
        "flex-end",
        0,
        0,
        6
      ],
      "fontFamily": [
        "iconfont",
        0,
        0,
        6
      ]
    }
  },
  ".header-right": {
    "": {
      "color": [
        "#999999",
        0,
        0,
        6
      ],
      "height": [
        "100rpx",
        0,
        0,
        6
      ],
      "lineHeight": [
        "100rpx",
        0,
        0,
        6
      ],
      "alignItems": [
        "flex-start",
        0,
        0,
        6
      ],
      "justifyContent": [
        "flex-end",
        0,
        0,
        6
      ],
      "fontFamily": [
        "iconfont",
        0,
        0,
        6
      ]
    }
  },
  ".header-right-search": {
    "": {
      "height": [
        "100rpx",
        0,
        0,
        7
      ]
    }
  },
  ".header-item": {
    "": {
      "alignItems": [
        "center",
        0,
        0,
        8
      ],
      "marginLeft": [
        "6rpx",
        0,
        0,
        8
      ],
      "marginRight": [
        "6rpx",
        0,
        0,
        8
      ]
    }
  },
  ".header-item-title": {
    "": {
      "width": [
        "120rpx",
        0,
        0,
        9
      ],
      "textAlign": [
        "center",
        0,
        0,
        9
      ],
      "height": [
        "60rpx",
        0,
        0,
        9
      ],
      "lineHeight": [
        "60rpx",
        0,
        0,
        9
      ],
      "color": [
        "#FFFFFF",
        0,
        0,
        9
      ],
      "fontSize": [
        "16",
        0,
        0,
        9
      ],
      "fontWeight": [
        "600",
        0,
        0,
        9
      ]
    }
  },
  ".header-refresh-title": {
    "": {
      "width": [
        "300rpx",
        0,
        0,
        10
      ],
      "textAlign": [
        "center",
        0,
        0,
        10
      ],
      "height": [
        "60rpx",
        0,
        0,
        10
      ],
      "lineHeight": [
        "60rpx",
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
      "fontWeight": [
        "600",
        0,
        0,
        10
      ]
    }
  },
  ".header-item-line": {
    "": {
      "height": [
        "5rpx",
        0,
        0,
        11
      ],
      "lineHeight": [
        "8rpx",
        0,
        0,
        11
      ],
      "width": [
        "60rpx",
        0,
        0,
        11
      ],
      "borderRadius": [
        "8rpx",
        0,
        0,
        11
      ]
    }
  },
  ".my-swiper": {
    "": {
      "position": [
        "absolute",
        0,
        0,
        14
      ],
      "left": [
        0,
        0,
        0,
        14
      ],
      "right": [
        0,
        0,
        0,
        14
      ],
      "top": [
        0,
        0,
        0,
        14
      ],
      "bottom": [
        0,
        0,
        0,
        14
      ]
    }
  },
  ".near-by": {
    "": {
      "backgroundColor": [
        "#000000",
        0,
        0,
        15
      ],
      "alignItems": [
        "center",
        0,
        0,
        15
      ],
      "justifyContent": [
        "center",
        0,
        0,
        15
      ]
    }
  },
  ".my-follow": {
    "": {
      "backgroundColor": [
        "#000000",
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
      "justifyContent": [
        "center",
        0,
        0,
        16
      ]
    }
  },
  ".warn-info": {
    "": {
      "color": [
        "#FFFFFF",
        0,
        0,
        18
      ],
      "fontSize": [
        "36rpx",
        0,
        0,
        18
      ],
      "fontWeight": [
        "600",
        0,
        0,
        18
      ]
    }
  },
  ".normal-img": {
    "": {
      "width": [
        "50rpx",
        0,
        0,
        19
      ],
      "height": [
        "50rpx",
        0,
        0,
        19
      ],
      "opacity": [
        0.8,
        0,
        0,
        19
      ]
    }
  },
  "@VERSION": 2
}

/***/ })
/******/ ]);