'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SpotifyAuth = function (_React$Component) {
  _inherits(SpotifyAuth, _React$Component);

  function SpotifyAuth(props) {
    _classCallCheck(this, SpotifyAuth);

    var _this = _possibleConstructorReturn(this, (SpotifyAuth.__proto__ || Object.getPrototypeOf(SpotifyAuth)).call(this, props));

    _this.state = {
      tokenData: null
    };
    return _this;
  }

  _createClass(SpotifyAuth, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      this.authLogic();
    }
  }, {
    key: 'authLogic',
    value: function authLogic() {
      var params = this.props.location.search.slice(1).split('&').map(function (param) {
        return param.split('=');
      }).reduce(function (memo, tuple) {
        memo[tuple[0]] = tuple[1];
        return memo;
      }, {});

      if (this.state.tokenData) {
        return;
      } else if (params.code || this.state.code) {
        this.getToken(params.code);
      } else {
        this.getCode();
      }
    }
  }, {
    key: 'getToken',
    value: function getToken(code) {
      var _this2 = this;

      _axios2.default.get('/spotify/auth/token?code=' + code).then(function (_ref) {
        var data = _ref.data;

        //this.props.onTokenData(data);
        _this2.setState({ tokenData: data });
      }).catch(function (e) {
        return null;
      });
    }
  }, {
    key: 'getCode',
    value: function getCode() {
      _axios2.default.get('/spotify/auth').then(function (_ref2) {
        var data = _ref2.data;

        //console.log(data)
        window.location.href = data;
      }).catch(function (e) {
        return null;
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        console.log(this.state.tokenData)
      );
    }
  }]);

  return SpotifyAuth;
}(_react2.default.Component);

;

exports.default = SpotifyAuth;