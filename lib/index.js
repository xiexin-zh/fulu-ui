"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _dva = _interopRequireDefault(require("dva"));

var _history = require("history");

var _message = _interopRequireDefault(require("antd/lib/message"));

var _router = _interopRequireDefault(require("./router"));

require("./assets/css/common.less");

require("./assets/css/md.css");

// 导入编辑器的样式
window.router = (0, _history.createBrowserHistory)();
var app = (0, _dva["default"])({
  history: (0, _history.createBrowserHistory)(),
  onError: function onError(e) {
    _message["default"].error(e.message, 3);
  }
}); // app.model(home)

(function () {
  console.log('[HMR] inited with babel-plugin-dva-hmr');

  var router = require('./router');

  app.router(router["default"] || router);
  app.use({
    onHmr: function onHmr(render) {
      if (module.hot) {
        var renderNormally = render;

        var renderException = function renderException(error) {
          var RedBox = require('redbox-react');

          ReactDOM.render(React.createElement(RedBox, {
            error: error
          }), document.querySelector('#root'));
        };

        var newRender = function newRender(router) {
          try {
            renderNormally(router);
          } catch (error) {
            console.error('error', error);
            renderException(error);
          }
        };

        module.hot.accept('./router', function () {
          var router = require('./router');

          newRender(router["default"] || router);
        });
      }
    }
  });
})();

app.start('#app');