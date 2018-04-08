'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

var _MenuItemLink = require('./MenuItemLink');

var _MenuItemLink2 = _interopRequireDefault(_MenuItemLink);

var _MenuItemAnchor = require('./MenuItemAnchor');

var _MenuItemAnchor2 = _interopRequireDefault(_MenuItemAnchor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var NavBar = function (_React$Component) {
  _inherits(NavBar, _React$Component);

  function NavBar(props) {
    _classCallCheck(this, NavBar);

    var _this = _possibleConstructorReturn(this, (NavBar.__proto__ || Object.getPrototypeOf(NavBar)).call(this, props));

    _this.state = {};

    _this.toggleMenu = _this.toggleMenu.bind(_this);
    return _this;
  }

  _createClass(NavBar, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.setSpacerHeight();
    }
  }, {
    key: 'toggleMenu',
    value: function toggleMenu(e) {
      e.preventDefault();
      var height = (0, _jquery2.default)('.toggleable').height();
      if (height) {
        (0, _jquery2.default)('.toggleable').each(function (i) {
          (0, _jquery2.default)(this).animate({
            height: '0px'
          });
        });
        (0, _jquery2.default)('.menu-item').css('visibility', 'hidden');
        this.setSpacerHeight(-56, true);
      } else {
        (0, _jquery2.default)('.toggleable').each(function (i) {
          (0, _jquery2.default)(this).animate({
            height: '56px'
          });
        });
        (0, _jquery2.default)('.menu-item').css('visibility', 'visible');
        this.setSpacerHeight(56, true);
      }
    }
  }, {
    key: 'setSpacerHeight',
    value: function setSpacerHeight() {
      var adjust = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var animate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      var height = (0, _jquery2.default)('#nav').outerHeight() + adjust;
      if (animate) (0, _jquery2.default)('#nav-spacer').animate({
        height: height
      });else (0, _jquery2.default)('#nav-spacer').height(height);
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { style: this.props.style },
        _react2.default.createElement(
          'div',
          { className: 'header', id: 'nav' },
          _react2.default.createElement(
            'div',
            { className: 'row' },
            _react2.default.createElement(
              'button',
              {
                className: 'menu-btn',
                style: {
                  backgroundImage: 'url(' + this.props.menuBtnImg + ')'
                },
                type: 'button',
                onClick: this.toggleMenu
              },
              this.props.menuBtnText
            ),
            _react2.default.createElement(
              'div',
              { className: 'col-8 d-flex justify-content-center' },
              _react2.default.createElement(
                'a',
                { className: 'logo', href: this.props.titleTo || '/' },
                this.props.title
              )
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'toggleable' },
            _react2.default.createElement(
              'div',
              { className: 'toggleable menu' },
              _react2.default.createElement(
                'div',
                { className: 'toggleable row' },
                this.props.menuItems.map(function (item) {
                  return item.tag === 'anchor' ? _react2.default.createElement(_MenuItemAnchor2.default, _extends({ key: item.title }, item)) : _react2.default.createElement(_MenuItemLink2.default, _extends({ key: item.title }, item));
                })
              )
            )
          )
        ),
        _react2.default.createElement('div', {
          className: 'container', id: 'nav-spacer',
          style: { height: (this.props.spacer || '0') + 'px' }
        })
      );
    }
  }]);

  return NavBar;
}(_react2.default.Component);

;

exports.default = NavBar;