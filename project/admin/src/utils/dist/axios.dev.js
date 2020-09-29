"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.get = exports.post = void 0;

var _axios = _interopRequireDefault(require("axios"));

var _config = _interopRequireDefault(require("./config"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

console.log("config", _config["default"].baseUrl);

var api = _axios["default"].create({
  baseURL: _config["default"].baseUrl,
  timeout: 300000
}); // 添加请求拦截器


api.interceptors.request.use(function (config) {
  var userid = localStorage.getItem("userid") || "";
  config.headers["user"] = userid; // 在发送请求之前做些什么

  return config;
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error);
});

var post = function post(url, data) {
  var response;
  return regeneratorRuntime.async(function post$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(api.post(url, data)["catch"](function (error) {
            errorHeader(error);
          }));

        case 2:
          response = _context.sent;
          return _context.abrupt("return", responseHeader(response));

        case 4:
        case "end":
          return _context.stop();
      }
    }
  });
};

exports.post = post;

var get = function get(url, data) {
  var response;
  return regeneratorRuntime.async(function get$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return regeneratorRuntime.awrap(api.get(url, data)["catch"](function (error) {
            errorHeader(error);
          }));

        case 2:
          response = _context2.sent;
          return _context2.abrupt("return", responseHeader(response));

        case 4:
        case "end":
          return _context2.stop();
      }
    }
  });
};
/* 公共处理错误 */


exports.get = get;

var errorHeader = function errorHeader(error) {
  console.log("error", error);
  var errorMsg = error.response && error.response.data && error.response.data.message;
  console.log("///", errorMsg);
};
/* 公共处理返回体 */


var responseHeader = function responseHeader(response) {
  console.log("response", response);

  if (response && response.status === 200) {
    if (!response.data) {
      return {};
    }

    return response.data;
  }

  return null;
};