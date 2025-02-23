/*! arc-sw.js – Deobfuscated version */
(function(modules) {
    var installedModules = {};
    function __webpack_require__(moduleId) {
      if (installedModules[moduleId])
        return installedModules[moduleId].exports;
      var module = installedModules[moduleId] = {
        i: moduleId,
        l: false,
        exports: {}
      };
      modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
      module.l = true;
      return module.exports;
    }
    __webpack_require__.m = modules;
    __webpack_require__.c = installedModules;
    __webpack_require__.d = function(exports, name, getter) {
      if (!__webpack_require__.o(exports, name))
        Object.defineProperty(exports, name, { enumerable: true, get: getter });
    };
    __webpack_require__.r = function(exports) {
      if (typeof Symbol !== "undefined" && Symbol.toStringTag)
        Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
      Object.defineProperty(exports, "__esModule", { value: true });
    };
    __webpack_require__.t = function(value, mode) {
      if (mode & 1) value = __webpack_require__(value);
      if (mode & 8) return value;
      if ((mode & 4) && typeof value === "object" && value && value.__esModule)
        return value;
      var ns = Object.create(null);
      __webpack_require__.r(ns);
      Object.defineProperty(ns, "default", { enumerable: true, value: value });
      if (mode & 2 && typeof value != "string")
        for (var key in value)
          __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
      return ns;
    };
    __webpack_require__.n = function(module) {
      var getter = module && module.__esModule ?
        function() { return module["default"]; } :
        function() { return module; };
      __webpack_require__.d(getter, "a", getter);
      return getter;
    };
    __webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
    __webpack_require__.p = "";
    return __webpack_require__(__webpack_require__.s = 100);
  })({
    100: function(module, exports, __webpack_require__) {
      "use strict";
      __webpack_require__.r(exports);
      var config = __webpack_require__(3);
      if (typeof ServiceWorkerGlobalScope !== "undefined") {
        var swUrl = "https://arc.io" + config.k;
        importScripts(swUrl);
      } else if (typeof SharedWorkerGlobalScope !== "undefined") {
        var sharedUrl = "https://arc.io" + config.i;
        importScripts(sharedUrl);
      } else if (typeof DedicatedWorkerGlobalScope !== "undefined") {
        var dedicatedUrl = "https://arc.io" + config.b;
        importScripts(dedicatedUrl);
      }
    },
    3: function(module, exports, __webpack_require__) {
      "use strict";
      __webpack_require__.d(exports, "a", function() { return formats; });
      __webpack_require__.d(exports, "f", function() { return messageTypes; });
      __webpack_require__.d(exports, "j", function() { return workerType; });
      __webpack_require__.d(exports, "i", function() { return sharedWorkerScript; });
      __webpack_require__.d(exports, "b", function() { return dedicatedWorkerScript; });
      __webpack_require__.d(exports, "k", function() { return coreScript; });
      __webpack_require__.d(exports, "c", function() { return arcSwDb; });
      __webpack_require__.d(exports, "d", function() { return keyValStore; });
      __webpack_require__.d(exports, "e", function() { return cacheSize; });
      __webpack_require__.d(exports, "g", function() { return propertySessionUrl; });
      __webpack_require__.d(exports, "h", function() { return mailboxUrl; });
      var formats = {
        images: ["bmp", "jpeg", "jpg", "ttf", "pict", "svg", "webp", "eps", "svgz", "gif", "png", "ico", "tif", "tiff", "bpg"],
        video: ["mp4", "3gp", "webm", "mkv", "flv", "f4v", "f4p", "f4bogv", "drc", "avi", "mov", "qt", "wmv", "amv", "mpg", "mp2", "mpeg", "mpe", "m2v", "m4v", "3g2", "gifv", "mpv"],
        audio: ["mid", "midi", "aac", "aiff", "flac", "m4a", "m4p", "mp3", "ogg", "oga", "mogg", "opus", "ra", "rm", "wav", "webm", "f4a", "pat"],
        documents: ["pdf", "ps", "doc", "docx", "ppt", "pptx", "xls", "otf", "xlsx"],
        other: ["swf"]
      };
      var prefix = "arc:";
      var messageTypes = {
        COMLINK_INIT: prefix + "comlink:init",
        NODE_ID: prefix + ":nodeId",
        CDN_CONFIG: prefix + "cdn:config",
        P2P_CLIENT_READY: prefix + "cdn:ready",
        STORED_FIDS: prefix + "cdn:storedFids",
        SW_HEALTH_CHECK: prefix + "cdn:healthCheck",
        WIDGET_CONFIG: prefix + "widget:config",
        WIDGET_INIT: prefix + "widget:init",
        WIDGET_UI_LOAD: prefix + "widget:load",
        BROKER_LOAD: prefix + "broker:load",
        RENDER_FILE: prefix + "inlay:renderFile",
        FILE_RENDERED: prefix + "inlay:fileRendered"
      };
      var workerType = "serviceWorker";
      var sharedWorkerScript = "/" + "shared-worker" + ".js";
      var dedicatedWorkerScript = "/" + "dedicated-worker" + ".js";
      var coreScript = "/" + "arc-sw-core" + ".js";
      var arcSwFilename = "arc-sw" + ".js";
      var arcSwDb = ("/" + arcSwFilename, "/" + "arc-sw", "arc-db");
      var keyValStore = "key-val-store";
      var cacheSize = 2 ** 17;
      var propertySessionUrl = "https://overmind.arc.io" + "/api/propertySession";
      var mailboxUrl = "https://warden.arc.io" + "/mailbox/propertySession";
    }
  });
  