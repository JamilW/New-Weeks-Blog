exports.id = 200;
exports.ids = [200];
exports.modules = {

/***/ 67737:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.CommentCount = void 0;

var _react = _interopRequireDefault(__webpack_require__(18038));

var _propTypes = _interopRequireDefault(__webpack_require__(69232));

var _utils = __webpack_require__(20811);

var _constants = __webpack_require__(38764);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var queueResetCount = (0, _utils.debounce)(function () {
  if (window.DISQUSWIDGETS) window.DISQUSWIDGETS.getCount({
    reset: true
  });
}, 300, false); // eslint-disable-line no-magic-numbers

var CommentCount = /*#__PURE__*/function (_React$Component) {
  _inherits(CommentCount, _React$Component);

  var _super = _createSuper(CommentCount);

  function CommentCount() {
    _classCallCheck(this, CommentCount);

    return _super.apply(this, arguments);
  }

  _createClass(CommentCount, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.loadInstance();
    }
  }, {
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(nextProps) {
      if (this.props === nextProps) return false;
      return (0, _utils.shallowComparison)(this.props, nextProps);
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (this.props.shortname !== prevProps.shortname) this.cleanInstance();
      this.loadInstance();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.cleanInstance();
    }
  }, {
    key: "loadInstance",
    value: function loadInstance() {
      var doc = window.document;
      if (doc.getElementById(_constants.COMMENT_COUNT_SCRIPT_ID)) queueResetCount();else (0, _utils.insertScript)("https://".concat(this.props.shortname, ".disqus.com/count.js"), _constants.COMMENT_COUNT_SCRIPT_ID, doc.body);
    }
  }, {
    key: "cleanInstance",
    value: function cleanInstance() {
      var doc = window.document;
      (0, _utils.removeScript)(_constants.COMMENT_COUNT_SCRIPT_ID, doc.body); // count.js only reassigns this window object if it's undefined.

      window.DISQUSWIDGETS = undefined;
      (0, _utils.removeResources)();
    }
  }, {
    key: "render",
    value: function render() {
      // eslint-disable-next-line no-unused-vars
      var _this$props = this.props,
          shortname = _this$props.shortname,
          config = _this$props.config,
          children = _this$props.children,
          className = _this$props.className,
          rest = _objectWithoutProperties(_this$props, ["shortname", "config", "children", "className"]);

      var additionalClass = className ? " ".concat(className) : '';
      return /*#__PURE__*/_react["default"].createElement("span", _extends({}, rest, {
        className: "".concat(_constants.COMMENT_COUNT_CLASS).concat(additionalClass),
        "data-disqus-identifier": config.identifier,
        "data-disqus-url": config.url
      }), children);
    }
  }]);

  return CommentCount;
}(_react["default"].Component);

exports.CommentCount = CommentCount;
CommentCount.propTypes = {
  shortname: _propTypes["default"].string.isRequired,
  config: _propTypes["default"].shape({
    identifier: _propTypes["default"].string,
    url: _propTypes["default"].string,
    title: _propTypes["default"].string
  }).isRequired,
  className: _propTypes["default"].string,
  children: _propTypes["default"].node
};

/***/ }),

/***/ 83935:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.CommentEmbed = void 0;

var _react = _interopRequireDefault(__webpack_require__(18038));

var _propTypes = _interopRequireDefault(__webpack_require__(69232));

var _constants = __webpack_require__(38764);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var CommentEmbed = /*#__PURE__*/function (_React$Component) {
  _inherits(CommentEmbed, _React$Component);

  var _super = _createSuper(CommentEmbed);

  function CommentEmbed() {
    _classCallCheck(this, CommentEmbed);

    return _super.apply(this, arguments);
  }

  _createClass(CommentEmbed, [{
    key: "getSrc",
    value: function getSrc() {
      var radixBase = 36;
      var post = Number(this.props.commentId).toString(radixBase);
      var parentParam = this.props.showParentComment ? '1' : '0';
      var mediaParam = this.props.showMedia ? '1' : '0';
      return "https://embed.disqus.com/p/".concat(post, "?p=").concat(parentParam, "&m=").concat(mediaParam);
    }
  }, {
    key: "render",
    value: function render() {
      // eslint-disable-next-line no-unused-vars
      var _this$props = this.props,
          width = _this$props.width,
          height = _this$props.height,
          commentId = _this$props.commentId,
          showMedia = _this$props.showMedia,
          showParentComment = _this$props.showParentComment,
          rest = _objectWithoutProperties(_this$props, ["width", "height", "commentId", "showMedia", "showParentComment"]);

      return /*#__PURE__*/_react["default"].createElement("iframe", _extends({}, rest, {
        src: this.getSrc(),
        width: width,
        height: height,
        seamless: "seamless",
        scrolling: "no",
        frameBorder: "0"
      }));
    }
  }]);

  return CommentEmbed;
}(_react["default"].Component);

exports.CommentEmbed = CommentEmbed;
CommentEmbed.defaultProps = {
  showMedia: true,
  showParentComment: true,
  width: _constants.COMMENT_EMBED_WIDTH,
  height: _constants.COMMENT_EMBED_HEIGHT
};
CommentEmbed.propTypes = {
  commentId: _propTypes["default"].string.isRequired,
  showMedia: _propTypes["default"].bool,
  showParentComment: _propTypes["default"].bool,
  width: _propTypes["default"].number,
  height: _propTypes["default"].number,
  className: _propTypes["default"].string
};

/***/ }),

/***/ 42539:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.DiscussionEmbed = void 0;

var _react = _interopRequireDefault(__webpack_require__(18038));

var _propTypes = _interopRequireDefault(__webpack_require__(69232));

var _utils = __webpack_require__(20811);

var _constants = __webpack_require__(38764);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var DiscussionEmbed = /*#__PURE__*/function (_React$Component) {
  _inherits(DiscussionEmbed, _React$Component);

  var _super = _createSuper(DiscussionEmbed);

  function DiscussionEmbed() {
    _classCallCheck(this, DiscussionEmbed);

    return _super.apply(this, arguments);
  }

  _createClass(DiscussionEmbed, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (typeof window !== 'undefined' && window.disqus_shortname && window.disqus_shortname !== this.props.shortname) this.cleanInstance();
      this.loadInstance();
    }
  }, {
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(nextProps) {
      if (this.props === nextProps) return false;
      return (0, _utils.shallowComparison)(this.props, nextProps);
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(nextProps) {
      if (this.props.shortname !== nextProps.shortname) this.cleanInstance();
      this.loadInstance();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.cleanInstance();
    }
  }, {
    key: "loadInstance",
    value: function loadInstance() {
      var doc = window.document;

      if (window && window.DISQUS && doc.getElementById(_constants.EMBED_SCRIPT_ID)) {
        window.DISQUS.reset({
          reload: true,
          config: this.getDisqusConfig(this.props.config)
        });
      } else {
        window.disqus_config = this.getDisqusConfig(this.props.config);
        window.disqus_shortname = this.props.shortname;
        (0, _utils.insertScript)("https://".concat(this.props.shortname, ".disqus.com/embed.js"), _constants.EMBED_SCRIPT_ID, doc.body);
      }
    }
  }, {
    key: "cleanInstance",
    value: function cleanInstance() {
      var doc = window.document;
      (0, _utils.removeScript)(_constants.EMBED_SCRIPT_ID, doc.body);
      if (window && window.DISQUS) window.DISQUS.reset({});

      try {
        delete window.DISQUS;
      } catch (error) {
        window.DISQUS = undefined;
      }

      var disqusThread = doc.getElementById(_constants.THREAD_ID);

      if (disqusThread) {
        while (disqusThread.hasChildNodes()) {
          disqusThread.removeChild(disqusThread.firstChild);
        }
      }

      (0, _utils.removeResources)();
    }
  }, {
    key: "getDisqusConfig",
    value: function getDisqusConfig(config) {
      return function () {
        var _this = this;

        this.page.identifier = config.identifier;
        this.page.url = config.url;
        this.page.title = config.title;
        this.page.category_id = config.categoryID;
        this.page.remote_auth_s3 = config.remoteAuthS3;
        this.page.api_key = config.apiKey;
        if (config.sso) this.sso = config.sso;
        if (config.language) this.language = config.language;

        _constants.CALLBACKS.forEach(function (callbackName) {
          _this.callbacks[callbackName] = [config[callbackName]];
        });
      };
    }
  }, {
    key: "render",
    value: function render() {
      // eslint-disable-next-line no-unused-vars
      var _this$props = this.props,
          shortname = _this$props.shortname,
          config = _this$props.config,
          rest = _objectWithoutProperties(_this$props, ["shortname", "config"]);

      return /*#__PURE__*/_react["default"].createElement("div", _extends({}, rest, {
        id: _constants.THREAD_ID
      }));
    }
  }]);

  return DiscussionEmbed;
}(_react["default"].Component);

exports.DiscussionEmbed = DiscussionEmbed;
DiscussionEmbed.propTypes = {
  shortname: _propTypes["default"].string.isRequired,
  config: _propTypes["default"].shape({
    identifier: _propTypes["default"].string,
    url: _propTypes["default"].string,
    title: _propTypes["default"].string,
    language: _propTypes["default"].string,
    categoryID: _propTypes["default"].string,
    remoteAuthS3: _propTypes["default"].string,
    apiKey: _propTypes["default"].string,
    preData: _propTypes["default"].func,
    preInit: _propTypes["default"].func,
    onInit: _propTypes["default"].func,
    onReady: _propTypes["default"].func,
    afterRender: _propTypes["default"].func,
    preReset: _propTypes["default"].func,
    onIdentify: _propTypes["default"].func,
    beforeComment: _propTypes["default"].func,
    onNewComment: _propTypes["default"].func,
    onPaginate: _propTypes["default"].func,
    sso: _propTypes["default"].shape({
      name: _propTypes["default"].string,
      button: _propTypes["default"].string,
      icon: _propTypes["default"].string,
      url: _propTypes["default"].string,
      logout: _propTypes["default"].string,
      profile_url: _propTypes["default"].string,
      width: _propTypes["default"].string,
      height: _propTypes["default"].string
    })
  }).isRequired
};

/***/ }),

/***/ 12887:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.Recommendations = void 0;

var _react = _interopRequireDefault(__webpack_require__(18038));

var _propTypes = _interopRequireDefault(__webpack_require__(69232));

var _utils = __webpack_require__(20811);

var _constants = __webpack_require__(38764);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var Recommendations = /*#__PURE__*/function (_React$Component) {
  _inherits(Recommendations, _React$Component);

  var _super = _createSuper(Recommendations);

  function Recommendations() {
    _classCallCheck(this, Recommendations);

    return _super.apply(this, arguments);
  }

  _createClass(Recommendations, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.loadInstance();
    }
  }, {
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(nextProps) {
      if (this.props === nextProps) return false;
      return (0, _utils.shallowComparison)(this.props, nextProps);
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      this.loadInstance();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.cleanInstance();
    }
  }, {
    key: "getDisqusConfig",
    value: function getDisqusConfig(config) {
      return function () {
        this.page.identifier = config.identifier;
        this.page.url = config.url;
        this.page.title = config.title;
        this.language = config.language;
      };
    }
  }, {
    key: "loadInstance",
    value: function loadInstance() {
      if (typeof window !== 'undefined' && window.document) {
        window.disqus_config = this.getDisqusConfig(this.props.config);

        if (window.document.getElementById(_constants.RECOMMENDATIONS_SCRIPT_ID)) {
          this.reloadInstance();
        } else {
          (0, _utils.insertScript)("https://".concat(this.props.shortname, ".disqus.com/recommendations.js"), _constants.RECOMMENDATIONS_SCRIPT_ID, window.document.body);
        }
      }
    }
  }, {
    key: "reloadInstance",
    value: function reloadInstance() {
      if (window && window.DISQUS_RECOMMENDATIONS) {
        window.DISQUS_RECOMMENDATIONS.reset({
          reload: true
        });
      }
    }
  }, {
    key: "cleanInstance",
    value: function cleanInstance() {
      (0, _utils.removeScript)(_constants.RECOMMENDATIONS_SCRIPT_ID, window.document.body);

      try {
        delete window.DISQUS_RECOMMENDATIONS;
      } catch (error) {
        window.DISQUS_RECOMMENDATIONS = undefined;
      }

      var recommendations = window.document.getElementById(_constants.RECOMMENDATIONS_ID);

      if (recommendations) {
        while (recommendations.hasChildNodes()) {
          recommendations.removeChild(recommendations.firstChild);
        }
      }

      (0, _utils.removeResources)();
    }
  }, {
    key: "render",
    value: function render() {
      // eslint-disable-next-line no-unused-vars
      var _this$props = this.props,
          shortname = _this$props.shortname,
          config = _this$props.config,
          rest = _objectWithoutProperties(_this$props, ["shortname", "config"]);

      return /*#__PURE__*/_react["default"].createElement("div", _extends({}, rest, {
        id: _constants.RECOMMENDATIONS_ID
      }));
    }
  }]);

  return Recommendations;
}(_react["default"].Component);

exports.Recommendations = Recommendations;
Recommendations.propTypes = {
  shortname: _propTypes["default"].string.isRequired,
  config: _propTypes["default"].shape({
    identifier: _propTypes["default"].string,
    url: _propTypes["default"].string,
    title: _propTypes["default"].string,
    language: _propTypes["default"].string
  })
};

/***/ }),

/***/ 38764:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.CALLBACKS = exports.RECOMMENDATIONS_SCRIPT_ID = exports.RECOMMENDATIONS_ID = exports.COMMENT_EMBED_HEIGHT = exports.COMMENT_EMBED_WIDTH = exports.COMMENT_COUNT_SCRIPT_ID = exports.COMMENT_COUNT_CLASS = exports.EMBED_SCRIPT_ID = exports.THREAD_ID = void 0;
var THREAD_ID = 'disqus_thread';
exports.THREAD_ID = THREAD_ID;
var EMBED_SCRIPT_ID = 'dsq-embed-scr';
exports.EMBED_SCRIPT_ID = EMBED_SCRIPT_ID;
var COMMENT_COUNT_CLASS = 'disqus-comment-count';
exports.COMMENT_COUNT_CLASS = COMMENT_COUNT_CLASS;
var COMMENT_COUNT_SCRIPT_ID = 'dsq-count-scr';
exports.COMMENT_COUNT_SCRIPT_ID = COMMENT_COUNT_SCRIPT_ID;
var COMMENT_EMBED_WIDTH = 420;
exports.COMMENT_EMBED_WIDTH = COMMENT_EMBED_WIDTH;
var COMMENT_EMBED_HEIGHT = 320;
exports.COMMENT_EMBED_HEIGHT = COMMENT_EMBED_HEIGHT;
var RECOMMENDATIONS_ID = 'disqus_recommendations';
exports.RECOMMENDATIONS_ID = RECOMMENDATIONS_ID;
var RECOMMENDATIONS_SCRIPT_ID = 'dsq-recs-scr';
exports.RECOMMENDATIONS_SCRIPT_ID = RECOMMENDATIONS_SCRIPT_ID;
var CALLBACKS = ['preData', 'preInit', 'onInit', 'onReady', 'afterRender', 'preReset', 'onIdentify', 'beforeComment', 'onNewComment', 'onPaginate'];
exports.CALLBACKS = CALLBACKS;

/***/ }),

/***/ 79904:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
var __webpack_unused_export__;


__webpack_unused_export__ = ({
  value: true
});
__webpack_unused_export__ = ({
  enumerable: true,
  get: function get() {
    return _CommentCount.CommentCount;
  }
});
__webpack_unused_export__ = ({
  enumerable: true,
  get: function get() {
    return _CommentEmbed.CommentEmbed;
  }
});
__webpack_unused_export__ = ({
  enumerable: true,
  get: function get() {
    return _DiscussionEmbed.DiscussionEmbed;
  }
});
__webpack_unused_export__ = ({
  enumerable: true,
  get: function get() {
    return _Recommendations.Recommendations;
  }
});
exports.ZP = void 0;

var _CommentCount = __webpack_require__(67737);

var _CommentEmbed = __webpack_require__(83935);

var _DiscussionEmbed = __webpack_require__(42539);

var _Recommendations = __webpack_require__(12887);

var Disqus = {
  CommentCount: _CommentCount.CommentCount,
  CommentEmbed: _CommentEmbed.CommentEmbed,
  DiscussionEmbed: _DiscussionEmbed.DiscussionEmbed,
  Recommendations: _Recommendations.Recommendations
};
var _default = Disqus;
exports.ZP = _default;

/***/ }),

/***/ 20811:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.insertScript = insertScript;
exports.removeScript = removeScript;
exports.removeResources = removeResources;
exports.debounce = debounce;
exports.isReactElement = isReactElement;
exports.shallowComparison = shallowComparison;

var _react = _interopRequireDefault(__webpack_require__(18038));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function insertScript(src, id, parentElement) {
  var script = window.document.createElement('script');
  script.async = true;
  script.src = src;
  script.id = id;
  parentElement.appendChild(script);
  return script;
}

function removeScript(id, parentElement) {
  var script = window.document.getElementById(id);
  if (script) parentElement.removeChild(script);
}

function removeResources() {
  // Remove the bundles that the Disqus scripts add to prevent duplicated resources when navigating between pages
  var disqusResources = window.document.querySelectorAll( // eslint-disable-next-line max-len
  'link[href*="disquscdn.com/next/embed"], link[href*="disquscdn.com/next/recommendations"], link[href*="disqus.com/next/config.js"], script[src*="disquscdn.com/next/embed"], script[src*="disqus.com/count-data.js"], iframe[title="Disqus"]');
  disqusResources.forEach(function (el) {
    return el.remove();
  });
}

function debounce(func, wait, runOnFirstCall) {
  var timeout;
  return function () {
    var context = this; // eslint-disable-line consistent-this

    var args = arguments;

    var deferredExecution = function deferredExecution() {
      timeout = null;
      if (!runOnFirstCall) func.apply(context, args);
    };

    var callNow = runOnFirstCall && !timeout;
    window.clearTimeout(timeout);
    timeout = setTimeout(deferredExecution, wait);
    if (callNow) func.apply(context, args);
  };
}

function isReactElement(element) {
  if (_react["default"].isValidElement(element)) {
    return true;
  } else if (Array.isArray(element)) {
    return element.some(function (value) {
      return _react["default"].isValidElement(value);
    });
  }

  return false;
}

function shallowComparison(currentProps, nextProps) {
  // Perform a comparison of all props, excluding React Elements, to prevent unnecessary updates
  var propNames = new Set(Object.keys(currentProps), Object.keys(nextProps)); // eslint-disable-line no-undef

  var _iterator = _createForOfIteratorHelper(propNames),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var name = _step.value;

      if (_typeof(currentProps[name]) === 'object') {
        if (shallowComparison(currentProps[name], nextProps[name])) return true;
      } else if (currentProps[name] !== nextProps[name] && !isReactElement(currentProps[name])) {
        return true;
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  return false;
}

/***/ }),

/***/ 7649:
/***/ ((module, exports, __webpack_require__) => {

"use strict";
/* __next_internal_client_entry_do_not_use__  cjs */ 
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "default", ({
    enumerable: true,
    get: function() {
        return _default;
    }
}));
const _interop_require_default = __webpack_require__(95967);
const _interop_require_wildcard = __webpack_require__(41113);
const _react = /*#__PURE__*/ _interop_require_wildcard._(__webpack_require__(18038));
const _head = /*#__PURE__*/ _interop_require_default._(__webpack_require__(59040));
const _imageblursvg = __webpack_require__(64486);
const _imageconfig = __webpack_require__(35843);
const _imageconfigcontext = __webpack_require__(50744);
const _warnonce = __webpack_require__(40618);
const _imageloader = /*#__PURE__*/ _interop_require_default._(__webpack_require__(99552));
const configEnv = {"deviceSizes":[640,750,828,1080,1200,1920,2048,3840],"imageSizes":[16,32,48,64,96,128,256,384],"path":"/_next/image","loader":"default","dangerouslyAllowSVG":false,"unoptimized":false};
const allImgs = new Map();
let perfObserver;
if (true) {
    globalThis.__NEXT_IMAGE_IMPORTED = true;
}
const VALID_LOADING_VALUES = (/* unused pure expression or super */ null && ([
    "lazy",
    "eager",
    undefined
]));
function isStaticRequire(src) {
    return src.default !== undefined;
}
function isStaticImageData(src) {
    return src.src !== undefined;
}
function isStaticImport(src) {
    return typeof src === "object" && (isStaticRequire(src) || isStaticImageData(src));
}
function getWidths(param, width, sizes) {
    let { deviceSizes, allSizes } = param;
    if (sizes) {
        // Find all the "vw" percent sizes used in the sizes prop
        const viewportWidthRe = /(^|\s)(1?\d?\d)vw/g;
        const percentSizes = [];
        for(let match; match = viewportWidthRe.exec(sizes); match){
            percentSizes.push(parseInt(match[2]));
        }
        if (percentSizes.length) {
            const smallestRatio = Math.min(...percentSizes) * 0.01;
            return {
                widths: allSizes.filter((s)=>s >= deviceSizes[0] * smallestRatio),
                kind: "w"
            };
        }
        return {
            widths: allSizes,
            kind: "w"
        };
    }
    if (typeof width !== "number") {
        return {
            widths: deviceSizes,
            kind: "w"
        };
    }
    const widths = [
        ...new Set(// > are actually 3x in the green color, but only 1.5x in the red and
        // > blue colors. Showing a 3x resolution image in the app vs a 2x
        // > resolution image will be visually the same, though the 3x image
        // > takes significantly more data. Even true 3x resolution screens are
        // > wasteful as the human eye cannot see that level of detail without
        // > something like a magnifying glass.
        // https://blog.twitter.com/engineering/en_us/topics/infrastructure/2019/capping-image-fidelity-on-ultra-high-resolution-devices.html
        [
            width,
            width * 2 /*, width * 3*/ 
        ].map((w)=>allSizes.find((p)=>p >= w) || allSizes[allSizes.length - 1]))
    ];
    return {
        widths,
        kind: "x"
    };
}
function generateImgAttrs(param) {
    let { config, src, unoptimized, width, quality, sizes, loader } = param;
    if (unoptimized) {
        return {
            src,
            srcSet: undefined,
            sizes: undefined
        };
    }
    const { widths, kind } = getWidths(config, width, sizes);
    const last = widths.length - 1;
    return {
        sizes: !sizes && kind === "w" ? "100vw" : sizes,
        srcSet: widths.map((w, i)=>loader({
                config,
                src,
                quality,
                width: w
            }) + " " + (kind === "w" ? w : i + 1) + kind).join(", "),
        // It's intended to keep `src` the last attribute because React updates
        // attributes in order. If we keep `src` the first one, Safari will
        // immediately start to fetch `src`, before `sizes` and `srcSet` are even
        // updated by React. That causes multiple unnecessary requests if `srcSet`
        // and `sizes` are defined.
        // This bug cannot be reproduced in Chrome or Firefox.
        src: loader({
            config,
            src,
            quality,
            width: widths[last]
        })
    };
}
function getInt(x) {
    if (typeof x === "undefined") {
        return x;
    }
    if (typeof x === "number") {
        return Number.isFinite(x) ? x : NaN;
    }
    if (typeof x === "string" && /^[0-9]+$/.test(x)) {
        return parseInt(x, 10);
    }
    return NaN;
}
// See https://stackoverflow.com/q/39777833/266535 for why we use this ref
// handler instead of the img's onLoad attribute.
function handleLoading(img, src, placeholder, onLoadRef, onLoadingCompleteRef, setBlurComplete, unoptimized) {
    if (!img || img["data-loaded-src"] === src) {
        return;
    }
    img["data-loaded-src"] = src;
    const p = "decode" in img ? img.decode() : Promise.resolve();
    p.catch(()=>{}).then(()=>{
        if (!img.parentElement || !img.isConnected) {
            // Exit early in case of race condition:
            // - onload() is called
            // - decode() is called but incomplete
            // - unmount is called
            // - decode() completes
            return;
        }
        if (placeholder === "blur") {
            setBlurComplete(true);
        }
        if (onLoadRef == null ? void 0 : onLoadRef.current) {
            // Since we don't have the SyntheticEvent here,
            // we must create one with the same shape.
            // See https://reactjs.org/docs/events.html
            const event = new Event("load");
            Object.defineProperty(event, "target", {
                writable: false,
                value: img
            });
            let prevented = false;
            let stopped = false;
            onLoadRef.current({
                ...event,
                nativeEvent: event,
                currentTarget: img,
                target: img,
                isDefaultPrevented: ()=>prevented,
                isPropagationStopped: ()=>stopped,
                persist: ()=>{},
                preventDefault: ()=>{
                    prevented = true;
                    event.preventDefault();
                },
                stopPropagation: ()=>{
                    stopped = true;
                    event.stopPropagation();
                }
            });
        }
        if (onLoadingCompleteRef == null ? void 0 : onLoadingCompleteRef.current) {
            onLoadingCompleteRef.current(img);
        }
        if (false) {}
    });
}
function getDynamicProps(fetchPriority) {
    const [majorStr, minorStr] = _react.version.split(".");
    const major = parseInt(majorStr, 10);
    const minor = parseInt(minorStr, 10);
    if (major > 18 || major === 18 && minor >= 3) {
        // In React 18.3.0 or newer, we must use camelCase
        // prop to avoid "Warning: Invalid DOM property".
        // See https://github.com/facebook/react/pull/25927
        return {
            fetchPriority
        };
    }
    // In React 18.2.0 or older, we must use lowercase prop
    // to avoid "Warning: Invalid DOM property".
    return {
        fetchpriority: fetchPriority
    };
}
const ImageElement = /*#__PURE__*/ (0, _react.forwardRef)((param, forwardedRef)=>{
    let { imgAttributes, heightInt, widthInt, qualityInt, className, imgStyle, blurStyle, isLazy, fetchPriority, fill, placeholder, loading, srcString, config, unoptimized, loader, onLoadRef, onLoadingCompleteRef, setBlurComplete, setShowAltText, onLoad, onError, ...rest } = param;
    loading = isLazy ? "lazy" : loading;
    return /*#__PURE__*/ _react.default.createElement("img", {
        ...rest,
        ...getDynamicProps(fetchPriority),
        loading: loading,
        width: widthInt,
        height: heightInt,
        decoding: "async",
        "data-nimg": fill ? "fill" : "1",
        className: className,
        style: {
            ...imgStyle,
            ...blurStyle
        },
        ...imgAttributes,
        ref: (0, _react.useCallback)((img)=>{
            if (forwardedRef) {
                if (typeof forwardedRef === "function") forwardedRef(img);
                else if (typeof forwardedRef === "object") {
                    // @ts-ignore - .current is read only it's usually assigned by react internally
                    forwardedRef.current = img;
                }
            }
            if (!img) {
                return;
            }
            if (onError) {
                // If the image has an error before react hydrates, then the error is lost.
                // The workaround is to wait until the image is mounted which is after hydration,
                // then we set the src again to trigger the error handler (if there was an error).
                // eslint-disable-next-line no-self-assign
                img.src = img.src;
            }
            if (false) {}
            if (img.complete) {
                handleLoading(img, srcString, placeholder, onLoadRef, onLoadingCompleteRef, setBlurComplete, unoptimized);
            }
        }, [
            srcString,
            placeholder,
            onLoadRef,
            onLoadingCompleteRef,
            setBlurComplete,
            onError,
            unoptimized,
            forwardedRef
        ]),
        onLoad: (event)=>{
            const img = event.currentTarget;
            handleLoading(img, srcString, placeholder, onLoadRef, onLoadingCompleteRef, setBlurComplete, unoptimized);
        },
        onError: (event)=>{
            // if the real image fails to load, this will ensure "alt" is visible
            setShowAltText(true);
            if (placeholder === "blur") {
                // If the real image fails to load, this will still remove the placeholder.
                setBlurComplete(true);
            }
            if (onError) {
                onError(event);
            }
        }
    });
});
const Image = /*#__PURE__*/ (0, _react.forwardRef)((param, forwardedRef)=>{
    let { src, sizes, unoptimized = false, priority = false, loading, className, quality, width, height, fill, style, onLoad, onLoadingComplete, placeholder = "empty", blurDataURL, fetchPriority, layout, objectFit, objectPosition, lazyBoundary, lazyRoot, ...all } = param;
    const configContext = (0, _react.useContext)(_imageconfigcontext.ImageConfigContext);
    const config = (0, _react.useMemo)(()=>{
        const c = configEnv || configContext || _imageconfig.imageConfigDefault;
        const allSizes = [
            ...c.deviceSizes,
            ...c.imageSizes
        ].sort((a, b)=>a - b);
        const deviceSizes = c.deviceSizes.sort((a, b)=>a - b);
        return {
            ...c,
            allSizes,
            deviceSizes
        };
    }, [
        configContext
    ]);
    let rest = all;
    let loader = rest.loader || _imageloader.default;
    // Remove property so it's not spread on <img> element
    delete rest.loader;
    // This special value indicates that the user
    // didn't define a "loader" prop or "loader" config.
    const isDefaultLoader = "__next_img_default" in loader;
    if (isDefaultLoader) {
        if (config.loader === "custom") {
            throw new Error('Image with src "' + src + '" is missing "loader" prop.' + "\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader");
        }
    } else {
        // The user defined a "loader" prop or config.
        // Since the config object is internal only, we
        // must not pass it to the user-defined "loader".
        const customImageLoader = loader;
        loader = (obj)=>{
            const { config: _, ...opts } = obj;
            return customImageLoader(opts);
        };
    }
    if (layout) {
        if (layout === "fill") {
            fill = true;
        }
        const layoutToStyle = {
            intrinsic: {
                maxWidth: "100%",
                height: "auto"
            },
            responsive: {
                width: "100%",
                height: "auto"
            }
        };
        const layoutToSizes = {
            responsive: "100vw",
            fill: "100vw"
        };
        const layoutStyle = layoutToStyle[layout];
        if (layoutStyle) {
            style = {
                ...style,
                ...layoutStyle
            };
        }
        const layoutSizes = layoutToSizes[layout];
        if (layoutSizes && !sizes) {
            sizes = layoutSizes;
        }
    }
    let staticSrc = "";
    let widthInt = getInt(width);
    let heightInt = getInt(height);
    let blurWidth;
    let blurHeight;
    if (isStaticImport(src)) {
        const staticImageData = isStaticRequire(src) ? src.default : src;
        if (!staticImageData.src) {
            throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received " + JSON.stringify(staticImageData));
        }
        if (!staticImageData.height || !staticImageData.width) {
            throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received " + JSON.stringify(staticImageData));
        }
        blurWidth = staticImageData.blurWidth;
        blurHeight = staticImageData.blurHeight;
        blurDataURL = blurDataURL || staticImageData.blurDataURL;
        staticSrc = staticImageData.src;
        if (!fill) {
            if (!widthInt && !heightInt) {
                widthInt = staticImageData.width;
                heightInt = staticImageData.height;
            } else if (widthInt && !heightInt) {
                const ratio = widthInt / staticImageData.width;
                heightInt = Math.round(staticImageData.height * ratio);
            } else if (!widthInt && heightInt) {
                const ratio = heightInt / staticImageData.height;
                widthInt = Math.round(staticImageData.width * ratio);
            }
        }
    }
    src = typeof src === "string" ? src : staticSrc;
    let isLazy = !priority && (loading === "lazy" || typeof loading === "undefined");
    if (!src || src.startsWith("data:") || src.startsWith("blob:")) {
        // https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/Data_URIs
        unoptimized = true;
        isLazy = false;
    }
    if (config.unoptimized) {
        unoptimized = true;
    }
    if (isDefaultLoader && src.endsWith(".svg") && !config.dangerouslyAllowSVG) {
        // Special case to make svg serve as-is to avoid proxying
        // through the built-in Image Optimization API.
        unoptimized = true;
    }
    if (priority) {
        fetchPriority = "high";
    }
    const [blurComplete, setBlurComplete] = (0, _react.useState)(false);
    const [showAltText, setShowAltText] = (0, _react.useState)(false);
    const qualityInt = getInt(quality);
    if (false) {}
    const imgStyle = Object.assign(fill ? {
        position: "absolute",
        height: "100%",
        width: "100%",
        left: 0,
        top: 0,
        right: 0,
        bottom: 0,
        objectFit,
        objectPosition
    } : {}, showAltText ? {} : {
        color: "transparent"
    }, style);
    const blurStyle = placeholder === "blur" && blurDataURL && !blurComplete ? {
        backgroundSize: imgStyle.objectFit || "cover",
        backgroundPosition: imgStyle.objectPosition || "50% 50%",
        backgroundRepeat: "no-repeat",
        backgroundImage: 'url("data:image/svg+xml;charset=utf-8,' + (0, _imageblursvg.getImageBlurSvg)({
            widthInt,
            heightInt,
            blurWidth,
            blurHeight,
            blurDataURL,
            objectFit: imgStyle.objectFit
        }) + '")'
    } : {};
    if (false) {}
    const imgAttributes = generateImgAttrs({
        config,
        src,
        unoptimized,
        width: widthInt,
        quality: qualityInt,
        sizes,
        loader
    });
    let srcString = src;
    if (false) {}
    const onLoadRef = (0, _react.useRef)(onLoad);
    (0, _react.useEffect)(()=>{
        onLoadRef.current = onLoad;
    }, [
        onLoad
    ]);
    const onLoadingCompleteRef = (0, _react.useRef)(onLoadingComplete);
    (0, _react.useEffect)(()=>{
        onLoadingCompleteRef.current = onLoadingComplete;
    }, [
        onLoadingComplete
    ]);
    const imgElementArgs = {
        isLazy,
        imgAttributes,
        heightInt,
        widthInt,
        qualityInt,
        className,
        imgStyle,
        blurStyle,
        loading,
        config,
        fetchPriority,
        fill,
        unoptimized,
        placeholder,
        loader,
        srcString,
        onLoadRef,
        onLoadingCompleteRef,
        setBlurComplete,
        setShowAltText,
        ...rest
    };
    return /*#__PURE__*/ _react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/ _react.default.createElement(ImageElement, {
        ...imgElementArgs,
        ref: forwardedRef
    }), priority ? // for browsers that do not support `imagesrcset`, and in those cases
    // it would likely cause the incorrect image to be preloaded.
    //
    // https://html.spec.whatwg.org/multipage/semantics.html#attr-link-imagesrcset
    /*#__PURE__*/ _react.default.createElement(_head.default, null, /*#__PURE__*/ _react.default.createElement("link", {
        key: "__nimg-" + imgAttributes.src + imgAttributes.srcSet + imgAttributes.sizes,
        rel: "preload",
        as: "image",
        href: imgAttributes.srcSet ? undefined : imgAttributes.src,
        imageSrcSet: imgAttributes.srcSet,
        imageSizes: imgAttributes.sizes,
        crossOrigin: rest.crossOrigin,
        referrerPolicy: rest.referrerPolicy,
        ...getDynamicProps(fetchPriority)
    })) : null);
});
const _default = Image;
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=image.js.map


/***/ }),

/***/ 59040:
/***/ ((module, exports, __webpack_require__) => {

"use strict";
/* __next_internal_client_entry_do_not_use__  cjs */ 
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
0 && (0);
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    defaultHead: function() {
        return defaultHead;
    },
    default: function() {
        return _default;
    }
});
const _interop_require_default = __webpack_require__(95967);
const _interop_require_wildcard = __webpack_require__(41113);
const _react = /*#__PURE__*/ _interop_require_wildcard._(__webpack_require__(18038));
const _sideeffect = /*#__PURE__*/ _interop_require_default._(__webpack_require__(82470));
const _ampcontext = __webpack_require__(53918);
const _headmanagercontext = __webpack_require__(92796);
const _ampmode = __webpack_require__(45732);
const _warnonce = __webpack_require__(40618);
function defaultHead(inAmpMode) {
    if (inAmpMode === void 0) inAmpMode = false;
    const head = [
        /*#__PURE__*/ _react.default.createElement("meta", {
            charSet: "utf-8"
        })
    ];
    if (!inAmpMode) {
        head.push(/*#__PURE__*/ _react.default.createElement("meta", {
            name: "viewport",
            content: "width=device-width"
        }));
    }
    return head;
}
function onlyReactElement(list, child) {
    // React children can be "string" or "number" in this case we ignore them for backwards compat
    if (typeof child === "string" || typeof child === "number") {
        return list;
    }
    // Adds support for React.Fragment
    if (child.type === _react.default.Fragment) {
        return list.concat(_react.default.Children.toArray(child.props.children).reduce((fragmentList, fragmentChild)=>{
            if (typeof fragmentChild === "string" || typeof fragmentChild === "number") {
                return fragmentList;
            }
            return fragmentList.concat(fragmentChild);
        }, []));
    }
    return list.concat(child);
}
const METATYPES = [
    "name",
    "httpEquiv",
    "charSet",
    "itemProp"
];
/*
 returns a function for filtering head child elements
 which shouldn't be duplicated, like <title/>
 Also adds support for deduplicated `key` properties
*/ function unique() {
    const keys = new Set();
    const tags = new Set();
    const metaTypes = new Set();
    const metaCategories = {};
    return (h)=>{
        let isUnique = true;
        let hasKey = false;
        if (h.key && typeof h.key !== "number" && h.key.indexOf("$") > 0) {
            hasKey = true;
            const key = h.key.slice(h.key.indexOf("$") + 1);
            if (keys.has(key)) {
                isUnique = false;
            } else {
                keys.add(key);
            }
        }
        // eslint-disable-next-line default-case
        switch(h.type){
            case "title":
            case "base":
                if (tags.has(h.type)) {
                    isUnique = false;
                } else {
                    tags.add(h.type);
                }
                break;
            case "meta":
                for(let i = 0, len = METATYPES.length; i < len; i++){
                    const metatype = METATYPES[i];
                    if (!h.props.hasOwnProperty(metatype)) continue;
                    if (metatype === "charSet") {
                        if (metaTypes.has(metatype)) {
                            isUnique = false;
                        } else {
                            metaTypes.add(metatype);
                        }
                    } else {
                        const category = h.props[metatype];
                        const categories = metaCategories[metatype] || new Set();
                        if ((metatype !== "name" || !hasKey) && categories.has(category)) {
                            isUnique = false;
                        } else {
                            categories.add(category);
                            metaCategories[metatype] = categories;
                        }
                    }
                }
                break;
        }
        return isUnique;
    };
}
/**
 *
 * @param headChildrenElements List of children of <Head>
 */ function reduceComponents(headChildrenElements, props) {
    const { inAmpMode } = props;
    return headChildrenElements.reduce(onlyReactElement, []).reverse().concat(defaultHead(inAmpMode).reverse()).filter(unique()).reverse().map((c, i)=>{
        const key = c.key || i;
        if ( true && !inAmpMode) {
            if (c.type === "link" && c.props["href"] && // TODO(prateekbh@): Replace this with const from `constants` when the tree shaking works.
            [
                "https://fonts.googleapis.com/css",
                "https://use.typekit.net/"
            ].some((url)=>c.props["href"].startsWith(url))) {
                const newProps = {
                    ...c.props || {}
                };
                newProps["data-href"] = newProps["href"];
                newProps["href"] = undefined;
                // Add this attribute to make it easy to identify optimized tags
                newProps["data-optimized-fonts"] = true;
                return /*#__PURE__*/ _react.default.cloneElement(c, newProps);
            }
        }
        if (false) {}
        return /*#__PURE__*/ _react.default.cloneElement(c, {
            key
        });
    });
}
/**
 * This component injects elements to `<head>` of your page.
 * To avoid duplicated `tags` in `<head>` you can use the `key` property, which will make sure every tag is only rendered once.
 */ function Head(param) {
    let { children } = param;
    const ampState = (0, _react.useContext)(_ampcontext.AmpStateContext);
    const headManager = (0, _react.useContext)(_headmanagercontext.HeadManagerContext);
    return /*#__PURE__*/ _react.default.createElement(_sideeffect.default, {
        reduceComponentsToState: reduceComponents,
        headManager: headManager,
        inAmpMode: (0, _ampmode.isInAmpMode)(ampState)
    }, children);
}
const _default = Head;
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=head.js.map


/***/ }),

/***/ 6660:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  YI: () => (/* binding */ PortableText)
});

// UNUSED EXPORTS: defaultComponents, mergeComponents, toPlainText

;// CONCATENATED MODULE: ./node_modules/@portabletext/toolkit/dist/index.js
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        enumerableOnly && (symbols = symbols.filter(function(sym) {
            return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        })), keys.push.apply(keys, symbols);
    }
    return keys;
}
function _objectSpread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = null != arguments[i] ? arguments[i] : {};
        i % 2 ? ownKeys(Object(source), !0).forEach(function(key) {
            _defineProperty(target, key, source[key]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
function _defineProperty(obj, key, value) {
    key = _toPropertyKey(key);
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
function _toPropertyKey(arg) {
    var key = _toPrimitive(arg, "string");
    return typeof key === "symbol" ? key : String(key);
}
function _toPrimitive(input, hint) {
    if (typeof input !== "object" || input === null) return input;
    var prim = input[Symbol.toPrimitive];
    if (prim !== undefined) {
        var res = prim.call(input, hint || "default");
        if (typeof res !== "object") return res;
        throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (hint === "string" ? String : Number)(input);
}
function isPortableTextSpan(node) {
    return node._type === "span" && "text" in node && typeof node.text === "string" && (typeof node.marks === "undefined" || Array.isArray(node.marks) && node.marks.every((mark)=>typeof mark === "string"));
}
function isPortableTextBlock(node) {
    return(// A block doesn't _have_ to be named 'block' - to differentiate between
    // allowed child types and marks, one might name them differently
    typeof node._type === "string" && // Toolkit-types like nested spans are @-prefixed
    node._type[0] !== "@" && // `markDefs` isn't _required_ per say, but if it's there, it needs to be an array
    (!("markDefs" in node) || !node.markDefs || Array.isArray(node.markDefs) && // Every mark definition needs to have an `_key` to be mappable in child spans
    node.markDefs.every((def)=>typeof def._key === "string")) && // `children` is required and needs to be an array
    "children" in node && Array.isArray(node.children) && // All children are objects with `_type` (usually spans, but can contain other stuff)
    node.children.every((child)=>typeof child === "object" && "_type" in child));
}
function isPortableTextListItemBlock(block) {
    return isPortableTextBlock(block) && "listItem" in block && typeof block.listItem === "string" && (typeof block.level === "undefined" || typeof block.level === "number");
}
function isPortableTextToolkitList(block) {
    return block._type === "@list";
}
function isPortableTextToolkitSpan(span) {
    return span._type === "@span";
}
function isPortableTextToolkitTextNode(node) {
    return node._type === "@text";
}
const knownDecorators = [
    "strong",
    "em",
    "code",
    "underline",
    "strike-through"
];
function sortMarksByOccurences(span, index, blockChildren) {
    if (!isPortableTextSpan(span) || !span.marks) {
        return [];
    }
    if (!span.marks.length) {
        return [];
    }
    const marks = span.marks.slice();
    const occurences = {};
    marks.forEach((mark)=>{
        occurences[mark] = 1;
        for(let siblingIndex = index + 1; siblingIndex < blockChildren.length; siblingIndex++){
            const sibling = blockChildren[siblingIndex];
            if (sibling && isPortableTextSpan(sibling) && Array.isArray(sibling.marks) && sibling.marks.indexOf(mark) !== -1) {
                occurences[mark]++;
            } else {
                break;
            }
        }
    });
    return marks.sort((markA, markB)=>sortMarks(occurences, markA, markB));
}
function sortMarks(occurences, markA, markB) {
    const aOccurences = occurences[markA];
    const bOccurences = occurences[markB];
    if (aOccurences !== bOccurences) {
        return bOccurences - aOccurences;
    }
    const aKnownPos = knownDecorators.indexOf(markA);
    const bKnownPos = knownDecorators.indexOf(markB);
    if (aKnownPos !== bKnownPos) {
        return aKnownPos - bKnownPos;
    }
    return markA.localeCompare(markB);
}
function buildMarksTree(block) {
    var _a;
    const { children, markDefs = [] } = block;
    if (!children || !children.length) {
        return [];
    }
    const sortedMarks = children.map(sortMarksByOccurences);
    const rootNode = {
        _type: "@span",
        children: [],
        markType: "<unknown>"
    };
    let nodeStack = [
        rootNode
    ];
    for(let i = 0; i < children.length; i++){
        const span = children[i];
        if (!span) {
            continue;
        }
        const marksNeeded = sortedMarks[i] || [];
        let pos = 1;
        if (nodeStack.length > 1) {
            for(pos; pos < nodeStack.length; pos++){
                const mark = ((_a = nodeStack[pos]) == null ? void 0 : _a.markKey) || "";
                const index = marksNeeded.indexOf(mark);
                if (index === -1) {
                    break;
                }
                marksNeeded.splice(index, 1);
            }
        }
        nodeStack = nodeStack.slice(0, pos);
        let currentNode = nodeStack[nodeStack.length - 1];
        if (!currentNode) {
            continue;
        }
        for (const markKey of marksNeeded){
            const markDef = markDefs.find((def)=>def._key === markKey);
            const markType = markDef ? markDef._type : markKey;
            const node = {
                _type: "@span",
                _key: span._key,
                children: [],
                markDef,
                markType,
                markKey
            };
            currentNode.children.push(node);
            nodeStack.push(node);
            currentNode = node;
        }
        if (isPortableTextSpan(span)) {
            const lines = span.text.split("\n");
            for(let line = lines.length; line-- > 1;){
                lines.splice(line, 0, "\n");
            }
            currentNode.children = currentNode.children.concat(lines.map((text)=>({
                    _type: "@text",
                    text
                })));
        } else {
            currentNode.children = currentNode.children.concat(span);
        }
    }
    return rootNode.children;
}
function nestLists(blocks, mode) {
    const tree = [];
    let currentList;
    for(let i = 0; i < blocks.length; i++){
        const block = blocks[i];
        if (!block) {
            continue;
        }
        if (!isPortableTextListItemBlock(block)) {
            tree.push(block);
            currentList = void 0;
            continue;
        }
        if (!currentList) {
            currentList = listFromBlock(block, i, mode);
            tree.push(currentList);
            continue;
        }
        if (blockMatchesList(block, currentList)) {
            currentList.children.push(block);
            continue;
        }
        if ((block.level || 1) > currentList.level) {
            const newList = listFromBlock(block, i, mode);
            if (mode === "html") {
                const lastListItem = currentList.children[currentList.children.length - 1];
                const newLastChild = _objectSpread(_objectSpread({}, lastListItem), {}, {
                    children: [
                        ...lastListItem.children,
                        newList
                    ]
                });
                currentList.children[currentList.children.length - 1] = newLastChild;
            } else {
                currentList.children.push(newList);
            }
            currentList = newList;
            continue;
        }
        if ((block.level || 1) < currentList.level) {
            const matchingBranch = tree[tree.length - 1];
            const match = matchingBranch && findListMatching(matchingBranch, block);
            if (match) {
                currentList = match;
                currentList.children.push(block);
                continue;
            }
            currentList = listFromBlock(block, i, mode);
            tree.push(currentList);
            continue;
        }
        if (block.listItem !== currentList.listItem) {
            const matchingBranch = tree[tree.length - 1];
            const match = matchingBranch && findListMatching(matchingBranch, {
                level: block.level || 1
            });
            if (match && match.listItem === block.listItem) {
                currentList = match;
                currentList.children.push(block);
                continue;
            } else {
                currentList = listFromBlock(block, i, mode);
                tree.push(currentList);
                continue;
            }
        }
        console.warn("Unknown state encountered for block", block);
        tree.push(block);
    }
    return tree;
}
function blockMatchesList(block, list) {
    return (block.level || 1) === list.level && block.listItem === list.listItem;
}
function listFromBlock(block, index, mode) {
    return {
        _type: "@list",
        _key: "".concat(block._key || "".concat(index), "-parent"),
        mode,
        level: block.level || 1,
        listItem: block.listItem,
        children: [
            block
        ]
    };
}
function findListMatching(rootNode, matching) {
    const level = matching.level || 1;
    const style = matching.listItem || "normal";
    const filterOnType = typeof matching.listItem === "string";
    if (isPortableTextToolkitList(rootNode) && (rootNode.level || 1) === level && filterOnType && (rootNode.listItem || "normal") === style) {
        return rootNode;
    }
    if (!("children" in rootNode)) {
        return void 0;
    }
    const node = rootNode.children[rootNode.children.length - 1];
    return node && !isPortableTextSpan(node) ? findListMatching(node, matching) : void 0;
}
const leadingSpace = /^\s/;
const trailingSpace = /^\s/;
function toPlainText(block) {
    const blocks = Array.isArray(block) ? block : [
        block
    ];
    let text = "";
    blocks.forEach((current, index)=>{
        if (!isPortableTextBlock(current)) {
            return;
        }
        let pad = false;
        current.children.forEach((span)=>{
            if (isPortableTextSpan(span)) {
                text += pad && text && !trailingSpace.test(text) && !leadingSpace.test(span.text) ? " " : "";
                text += span.text;
                pad = false;
            } else {
                pad = true;
            }
        });
        if (index !== blocks.length - 1) {
            text += "\n\n";
        }
    });
    return text;
}
function spanToPlainText(span) {
    let text = "";
    span.children.forEach((current)=>{
        if (isPortableTextToolkitTextNode(current)) {
            text += current.text;
        } else if (isPortableTextToolkitSpan(current)) {
            text += spanToPlainText(current);
        }
    });
    return text;
}
const LIST_NEST_MODE_HTML = "html";
const LIST_NEST_MODE_DIRECT = "direct";
 //# sourceMappingURL=index.js.map

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/react/react.shared-subset.js
var react_shared_subset = __webpack_require__(7887);
;// CONCATENATED MODULE: ./node_modules/@portabletext/react/dist/react-portable-text.esm.js
const _excluded = [
    "block",
    "list",
    "listItem",
    "marks",
    "types"
], _excluded2 = [
    "listItem"
], _excluded3 = [
    "_key"
];
function react_portable_text_esm_ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        enumerableOnly && (symbols = symbols.filter(function(sym) {
            return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        })), keys.push.apply(keys, symbols);
    }
    return keys;
}
function react_portable_text_esm_objectSpread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = null != arguments[i] ? arguments[i] : {};
        i % 2 ? react_portable_text_esm_ownKeys(Object(source), !0).forEach(function(key) {
            react_portable_text_esm_defineProperty(target, key, source[key]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : react_portable_text_esm_ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
function react_portable_text_esm_defineProperty(obj, key, value) {
    key = react_portable_text_esm_toPropertyKey(key);
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
function react_portable_text_esm_toPropertyKey(arg) {
    var key = react_portable_text_esm_toPrimitive(arg, "string");
    return typeof key === "symbol" ? key : String(key);
}
function react_portable_text_esm_toPrimitive(input, hint) {
    if (typeof input !== "object" || input === null) return input;
    var prim = input[Symbol.toPrimitive];
    if (prim !== undefined) {
        var res = prim.call(input, hint || "default");
        if (typeof res !== "object") return res;
        throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (hint === "string" ? String : Number)(input);
}
function _objectWithoutProperties(source, excluded) {
    if (source == null) return {};
    var target = _objectWithoutPropertiesLoose(source, excluded);
    var key, i;
    if (Object.getOwnPropertySymbols) {
        var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
        for(i = 0; i < sourceSymbolKeys.length; i++){
            key = sourceSymbolKeys[i];
            if (excluded.indexOf(key) >= 0) continue;
            if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
            target[key] = source[key];
        }
    }
    return target;
}
function _objectWithoutPropertiesLoose(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;
    for(i = 0; i < sourceKeys.length; i++){
        key = sourceKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        target[key] = source[key];
    }
    return target;
}




function mergeComponents(parent, overrides) {
    const { block, list, listItem, marks, types } = overrides, rest = _objectWithoutProperties(overrides, _excluded);
    return react_portable_text_esm_objectSpread(react_portable_text_esm_objectSpread({}, parent), {}, {
        block: mergeDeeply(parent, overrides, "block"),
        list: mergeDeeply(parent, overrides, "list"),
        listItem: mergeDeeply(parent, overrides, "listItem"),
        marks: mergeDeeply(parent, overrides, "marks"),
        types: mergeDeeply(parent, overrides, "types")
    }, rest);
}
function mergeDeeply(parent, overrides, key) {
    const override = overrides[key];
    const parentVal = parent[key];
    if (typeof override === "function") {
        return override;
    }
    if (override && typeof parentVal === "function") {
        return override;
    }
    if (override) {
        return react_portable_text_esm_objectSpread(react_portable_text_esm_objectSpread({}, parentVal), override);
    }
    return parentVal;
}
const react_portable_text_esm_link = (_ref)=>{
    let { children, value } = _ref;
    return /* @__PURE__ */ (0,jsx_runtime_.jsx)("a", {
        href: value == null ? void 0 : value.href,
        children
    });
};
const underlineStyle = {
    textDecoration: "underline"
};
const defaultMarks = {
    em: (_ref2)=>{
        let { children } = _ref2;
        return /* @__PURE__ */ (0,jsx_runtime_.jsx)("em", {
            children
        });
    },
    strong: (_ref3)=>{
        let { children } = _ref3;
        return /* @__PURE__ */ (0,jsx_runtime_.jsx)("strong", {
            children
        });
    },
    code: (_ref4)=>{
        let { children } = _ref4;
        return /* @__PURE__ */ (0,jsx_runtime_.jsx)("code", {
            children
        });
    },
    underline: (_ref5)=>{
        let { children } = _ref5;
        return /* @__PURE__ */ (0,jsx_runtime_.jsx)("span", {
            style: underlineStyle,
            children
        });
    },
    "strike-through": (_ref6)=>{
        let { children } = _ref6;
        return /* @__PURE__ */ (0,jsx_runtime_.jsx)("del", {
            children
        });
    },
    link: react_portable_text_esm_link
};
const defaultLists = {
    number: (_ref7)=>{
        let { children } = _ref7;
        return /* @__PURE__ */ (0,jsx_runtime_.jsx)("ol", {
            children
        });
    },
    bullet: (_ref8)=>{
        let { children } = _ref8;
        return /* @__PURE__ */ (0,jsx_runtime_.jsx)("ul", {
            children
        });
    }
};
const DefaultListItem = (_ref9)=>{
    let { children } = _ref9;
    return /* @__PURE__ */ (0,jsx_runtime_.jsx)("li", {
        children
    });
};
const getTemplate = (type, prop)=>"[@portabletext/react] Unknown ".concat(type, ", specify a component for it in the `components.").concat(prop, "` prop");
const unknownTypeWarning = (typeName)=>getTemplate('block type "'.concat(typeName, '"'), "types");
const unknownMarkWarning = (markType)=>getTemplate('mark type "'.concat(markType, '"'), "marks");
const unknownBlockStyleWarning = (blockStyle)=>getTemplate('block style "'.concat(blockStyle, '"'), "block");
const unknownListStyleWarning = (listStyle)=>getTemplate('list style "'.concat(listStyle, '"'), "list");
const unknownListItemStyleWarning = (listStyle)=>getTemplate('list item style "'.concat(listStyle, '"'), "listItem");
function printWarning(message) {
    console.warn(message);
}
const react_portable_text_esm_hidden = {
    display: "none"
};
const DefaultUnknownType = (_ref10)=>{
    let { value, isInline } = _ref10;
    const warning = unknownTypeWarning(value._type);
    return isInline ? /* @__PURE__ */ (0,jsx_runtime_.jsx)("span", {
        style: react_portable_text_esm_hidden,
        children: warning
    }) : /* @__PURE__ */ (0,jsx_runtime_.jsx)("div", {
        style: react_portable_text_esm_hidden,
        children: warning
    });
};
const DefaultUnknownMark = (_ref11)=>{
    let { markType, children } = _ref11;
    return /* @__PURE__ */ (0,jsx_runtime_.jsx)("span", {
        className: "unknown__pt__mark__".concat(markType),
        children
    });
};
const DefaultUnknownBlockStyle = (_ref12)=>{
    let { children } = _ref12;
    return /* @__PURE__ */ (0,jsx_runtime_.jsx)("p", {
        children
    });
};
const DefaultUnknownList = (_ref13)=>{
    let { children } = _ref13;
    return /* @__PURE__ */ (0,jsx_runtime_.jsx)("ul", {
        children
    });
};
const DefaultUnknownListItem = (_ref14)=>{
    let { children } = _ref14;
    return /* @__PURE__ */ (0,jsx_runtime_.jsx)("li", {
        children
    });
};
const DefaultHardBreak = ()=>/* @__PURE__ */ (0,jsx_runtime_.jsx)("br", {});
const defaultBlockStyles = {
    normal: (_ref15)=>{
        let { children } = _ref15;
        return /* @__PURE__ */ (0,jsx_runtime_.jsx)("p", {
            children
        });
    },
    blockquote: (_ref16)=>{
        let { children } = _ref16;
        return /* @__PURE__ */ (0,jsx_runtime_.jsx)("blockquote", {
            children
        });
    },
    h1: (_ref17)=>{
        let { children } = _ref17;
        return /* @__PURE__ */ (0,jsx_runtime_.jsx)("h1", {
            children
        });
    },
    h2: (_ref18)=>{
        let { children } = _ref18;
        return /* @__PURE__ */ (0,jsx_runtime_.jsx)("h2", {
            children
        });
    },
    h3: (_ref19)=>{
        let { children } = _ref19;
        return /* @__PURE__ */ (0,jsx_runtime_.jsx)("h3", {
            children
        });
    },
    h4: (_ref20)=>{
        let { children } = _ref20;
        return /* @__PURE__ */ (0,jsx_runtime_.jsx)("h4", {
            children
        });
    },
    h5: (_ref21)=>{
        let { children } = _ref21;
        return /* @__PURE__ */ (0,jsx_runtime_.jsx)("h5", {
            children
        });
    },
    h6: (_ref22)=>{
        let { children } = _ref22;
        return /* @__PURE__ */ (0,jsx_runtime_.jsx)("h6", {
            children
        });
    }
};
const defaultComponents = {
    types: {},
    block: defaultBlockStyles,
    marks: defaultMarks,
    list: defaultLists,
    listItem: DefaultListItem,
    hardBreak: DefaultHardBreak,
    unknownType: DefaultUnknownType,
    unknownMark: DefaultUnknownMark,
    unknownList: DefaultUnknownList,
    unknownListItem: DefaultUnknownListItem,
    unknownBlockStyle: DefaultUnknownBlockStyle
};
function PortableText(_ref23) {
    let { value: input, components: componentOverrides, listNestingMode, onMissingComponent: missingComponentHandler = printWarning } = _ref23;
    const handleMissingComponent = missingComponentHandler || noop;
    const blocks = Array.isArray(input) ? input : [
        input
    ];
    const nested = nestLists(blocks, listNestingMode || LIST_NEST_MODE_HTML);
    const components = (0,react_shared_subset.useMemo)(()=>{
        return componentOverrides ? mergeComponents(defaultComponents, componentOverrides) : defaultComponents;
    }, [
        componentOverrides
    ]);
    const renderNode = (0,react_shared_subset.useMemo)(()=>getNodeRenderer(components, handleMissingComponent), [
        components,
        handleMissingComponent
    ]);
    const rendered = nested.map((node, index)=>renderNode({
            node,
            index,
            isInline: false,
            renderNode
        }));
    return /* @__PURE__ */ (0,jsx_runtime_.jsx)(jsx_runtime_.Fragment, {
        children: rendered
    });
}
const getNodeRenderer = (components, handleMissingComponent)=>{
    function renderNode(options) {
        const { node, index, isInline } = options;
        const key = node._key || "node-".concat(index);
        if (isPortableTextToolkitList(node)) {
            return renderList(node, index, key);
        }
        if (isPortableTextListItemBlock(node)) {
            return renderListItem(node, index, key);
        }
        if (isPortableTextToolkitSpan(node)) {
            return renderSpan(node, index, key);
        }
        if (hasCustomComponentForNode(node)) {
            return renderCustomBlock(node, index, key, isInline);
        }
        if (isPortableTextBlock(node)) {
            return renderBlock(node, index, key, isInline);
        }
        if (isPortableTextToolkitTextNode(node)) {
            return renderText(node, key);
        }
        return renderUnknownType(node, index, key, isInline);
    }
    function hasCustomComponentForNode(node) {
        return node._type in components.types;
    }
    function renderListItem(node, index, key) {
        const tree = serializeBlock({
            node,
            index,
            isInline: false,
            renderNode
        });
        const renderer = components.listItem;
        const handler = typeof renderer === "function" ? renderer : renderer[node.listItem];
        const Li = handler || components.unknownListItem;
        if (Li === components.unknownListItem) {
            const style = node.listItem || "bullet";
            handleMissingComponent(unknownListItemStyleWarning(style), {
                type: style,
                nodeType: "listItemStyle"
            });
        }
        let children = tree.children;
        if (node.style && node.style !== "normal") {
            const { listItem } = node, blockNode = _objectWithoutProperties(node, _excluded2);
            children = renderNode({
                node: blockNode,
                index,
                isInline: false,
                renderNode
            });
        }
        return /* @__PURE__ */ (0,jsx_runtime_.jsx)(Li, {
            value: node,
            index,
            isInline: false,
            renderNode,
            children
        }, key);
    }
    function renderList(node, index, key) {
        const children = node.children.map((child, childIndex)=>renderNode({
                node: child._key ? child : react_portable_text_esm_objectSpread(react_portable_text_esm_objectSpread({}, child), {}, {
                    _key: "li-".concat(index, "-").concat(childIndex)
                }),
                index: childIndex,
                isInline: false,
                renderNode
            }));
        const component = components.list;
        const handler = typeof component === "function" ? component : component[node.listItem];
        const List = handler || components.unknownList;
        if (List === components.unknownList) {
            const style = node.listItem || "bullet";
            handleMissingComponent(unknownListStyleWarning(style), {
                nodeType: "listStyle",
                type: style
            });
        }
        return /* @__PURE__ */ (0,jsx_runtime_.jsx)(List, {
            value: node,
            index,
            isInline: false,
            renderNode,
            children
        }, key);
    }
    function renderSpan(node, _index, key) {
        const { markDef, markType, markKey } = node;
        const Span = components.marks[markType] || components.unknownMark;
        const children = node.children.map((child, childIndex)=>renderNode({
                node: child,
                index: childIndex,
                isInline: true,
                renderNode
            }));
        if (Span === components.unknownMark) {
            handleMissingComponent(unknownMarkWarning(markType), {
                nodeType: "mark",
                type: markType
            });
        }
        return /* @__PURE__ */ (0,jsx_runtime_.jsx)(Span, {
            text: spanToPlainText(node),
            value: markDef,
            markType,
            markKey,
            renderNode,
            children
        }, key);
    }
    function renderBlock(node, index, key, isInline) {
        const _serializeBlock = serializeBlock({
            node,
            index,
            isInline,
            renderNode
        }), { _key } = _serializeBlock, props = _objectWithoutProperties(_serializeBlock, _excluded3);
        const style = props.node.style || "normal";
        const handler = typeof components.block === "function" ? components.block : components.block[style];
        const Block = handler || components.unknownBlockStyle;
        if (Block === components.unknownBlockStyle) {
            handleMissingComponent(unknownBlockStyleWarning(style), {
                nodeType: "blockStyle",
                type: style
            });
        }
        return /* @__PURE__ */ (0,jsx_runtime_.jsx)(Block, react_portable_text_esm_objectSpread(react_portable_text_esm_objectSpread({}, props), {}, {
            value: props.node,
            renderNode
        }), key);
    }
    function renderText(node, key) {
        if (node.text === "\n") {
            const HardBreak = components.hardBreak;
            return HardBreak ? /* @__PURE__ */ (0,jsx_runtime_.jsx)(HardBreak, {}, key) : "\n";
        }
        return node.text;
    }
    function renderUnknownType(node, index, key, isInline) {
        const nodeOptions = {
            value: node,
            isInline,
            index,
            renderNode
        };
        handleMissingComponent(unknownTypeWarning(node._type), {
            nodeType: "block",
            type: node._type
        });
        const UnknownType = components.unknownType;
        return /* @__PURE__ */ (0,jsx_runtime_.jsx)(UnknownType, react_portable_text_esm_objectSpread({}, nodeOptions), key);
    }
    function renderCustomBlock(node, index, key, isInline) {
        const nodeOptions = {
            value: node,
            isInline,
            index,
            renderNode
        };
        const Node = components.types[node._type];
        return Node ? /* @__PURE__ */ (0,jsx_runtime_.jsx)(Node, react_portable_text_esm_objectSpread({}, nodeOptions), key) : null;
    }
    return renderNode;
};
function serializeBlock(options) {
    const { node, index, isInline, renderNode } = options;
    const tree = buildMarksTree(node);
    const children = tree.map((child, i)=>renderNode({
            node: child,
            isInline: true,
            index: i,
            renderNode
        }));
    return {
        _key: node._key || "block-".concat(index),
        children,
        index,
        isInline,
        node
    };
}
function noop() {}
 //# sourceMappingURL=react-portable-text.esm.js.map


/***/ }),

/***/ 67507:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

var __assign = (void 0) && (void 0).__assign || function() {
    __assign = Object.assign || function(t) {
        for(var s, i = 1, n = arguments.length; i < n; i++){
            s = arguments[i];
            for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __createBinding = (void 0) && (void 0).__createBinding || (Object.create ? function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, {
        enumerable: true,
        get: function() {
            return m[k];
        }
    });
} : function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});
var __setModuleDefault = (void 0) && (void 0).__setModuleDefault || (Object.create ? function(o, v) {
    Object.defineProperty(o, "default", {
        enumerable: true,
        value: v
    });
} : function(o, v) {
    o["default"] = v;
});
var __importStar = (void 0) && (void 0).__importStar || function(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) {
        for(var k in mod)if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    }
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.ImageUrlBuilder = void 0;
var urlForImage_1 = __importStar(__webpack_require__(51726));
var validFits = [
    "clip",
    "crop",
    "fill",
    "fillmax",
    "max",
    "scale",
    "min"
];
var validCrops = [
    "top",
    "bottom",
    "left",
    "right",
    "center",
    "focalpoint",
    "entropy"
];
var validAutoModes = [
    "format"
];
function isSanityModernClientLike(client) {
    return client && "config" in client ? typeof client.config === "function" : false;
}
function isSanityClientLike(client) {
    return client && "clientConfig" in client ? typeof client.clientConfig === "object" : false;
}
function rewriteSpecName(key) {
    var specs = urlForImage_1.SPEC_NAME_TO_URL_NAME_MAPPINGS;
    for(var _i = 0, specs_1 = specs; _i < specs_1.length; _i++){
        var entry = specs_1[_i];
        var specName = entry[0], param = entry[1];
        if (key === specName || key === param) {
            return specName;
        }
    }
    return key;
}
function urlBuilder(options) {
    // Did we get a modernish client?
    if (isSanityModernClientLike(options)) {
        // Inherit config from client
        var _a = options.config(), apiUrl = _a.apiHost, projectId = _a.projectId, dataset = _a.dataset;
        var apiHost = apiUrl || "https://api.sanity.io";
        return new ImageUrlBuilder(null, {
            baseUrl: apiHost.replace(/^https:\/\/api\./, "https://cdn."),
            projectId: projectId,
            dataset: dataset
        });
    }
    // Did we get a SanityClient?
    var client = options;
    if (isSanityClientLike(client)) {
        // Inherit config from client
        var _b = client.clientConfig, apiUrl = _b.apiHost, projectId = _b.projectId, dataset = _b.dataset;
        var apiHost = apiUrl || "https://api.sanity.io";
        return new ImageUrlBuilder(null, {
            baseUrl: apiHost.replace(/^https:\/\/api\./, "https://cdn."),
            projectId: projectId,
            dataset: dataset
        });
    }
    // Or just accept the options as given
    return new ImageUrlBuilder(null, options);
}
exports["default"] = urlBuilder;
var ImageUrlBuilder = /** @class */ function() {
    function ImageUrlBuilder(parent, options) {
        this.options = parent ? __assign(__assign({}, parent.options || {}), options || {}) : __assign({}, options || {}); // Copy options
    }
    ImageUrlBuilder.prototype.withOptions = function(options) {
        var baseUrl = options.baseUrl || this.options.baseUrl;
        var newOptions = {
            baseUrl: baseUrl
        };
        for(var key in options){
            if (options.hasOwnProperty(key)) {
                var specKey = rewriteSpecName(key);
                newOptions[specKey] = options[key];
            }
        }
        return new ImageUrlBuilder(this, __assign({
            baseUrl: baseUrl
        }, newOptions));
    };
    // The image to be represented. Accepts a Sanity 'image'-document, 'asset'-document or
    // _id of asset. To get the benefit of automatic hot-spot/crop integration with the content
    // studio, the 'image'-document must be provided.
    ImageUrlBuilder.prototype.image = function(source) {
        return this.withOptions({
            source: source
        });
    };
    // Specify the dataset
    ImageUrlBuilder.prototype.dataset = function(dataset) {
        return this.withOptions({
            dataset: dataset
        });
    };
    // Specify the projectId
    ImageUrlBuilder.prototype.projectId = function(projectId) {
        return this.withOptions({
            projectId: projectId
        });
    };
    // Specify background color
    ImageUrlBuilder.prototype.bg = function(bg) {
        return this.withOptions({
            bg: bg
        });
    };
    // Set DPR scaling factor
    ImageUrlBuilder.prototype.dpr = function(dpr) {
        // A DPR of 1 is the default - so only include it if we have a different value
        return this.withOptions(dpr && dpr !== 1 ? {
            dpr: dpr
        } : {});
    };
    // Specify the width of the image in pixels
    ImageUrlBuilder.prototype.width = function(width) {
        return this.withOptions({
            width: width
        });
    };
    // Specify the height of the image in pixels
    ImageUrlBuilder.prototype.height = function(height) {
        return this.withOptions({
            height: height
        });
    };
    // Specify focal point in fraction of image dimensions. Each component 0.0-1.0
    ImageUrlBuilder.prototype.focalPoint = function(x, y) {
        return this.withOptions({
            focalPoint: {
                x: x,
                y: y
            }
        });
    };
    ImageUrlBuilder.prototype.maxWidth = function(maxWidth) {
        return this.withOptions({
            maxWidth: maxWidth
        });
    };
    ImageUrlBuilder.prototype.minWidth = function(minWidth) {
        return this.withOptions({
            minWidth: minWidth
        });
    };
    ImageUrlBuilder.prototype.maxHeight = function(maxHeight) {
        return this.withOptions({
            maxHeight: maxHeight
        });
    };
    ImageUrlBuilder.prototype.minHeight = function(minHeight) {
        return this.withOptions({
            minHeight: minHeight
        });
    };
    // Specify width and height in pixels
    ImageUrlBuilder.prototype.size = function(width, height) {
        return this.withOptions({
            width: width,
            height: height
        });
    };
    // Specify blur between 0 and 100
    ImageUrlBuilder.prototype.blur = function(blur) {
        return this.withOptions({
            blur: blur
        });
    };
    ImageUrlBuilder.prototype.sharpen = function(sharpen) {
        return this.withOptions({
            sharpen: sharpen
        });
    };
    // Specify the desired rectangle of the image
    ImageUrlBuilder.prototype.rect = function(left, top, width, height) {
        return this.withOptions({
            rect: {
                left: left,
                top: top,
                width: width,
                height: height
            }
        });
    };
    // Specify the image format of the image. 'jpg', 'pjpg', 'png', 'webp'
    ImageUrlBuilder.prototype.format = function(format) {
        return this.withOptions({
            format: format
        });
    };
    ImageUrlBuilder.prototype.invert = function(invert) {
        return this.withOptions({
            invert: invert
        });
    };
    // Rotation in degrees 0, 90, 180, 270
    ImageUrlBuilder.prototype.orientation = function(orientation) {
        return this.withOptions({
            orientation: orientation
        });
    };
    // Compression quality 0-100
    ImageUrlBuilder.prototype.quality = function(quality) {
        return this.withOptions({
            quality: quality
        });
    };
    // Make it a download link. Parameter is default filename.
    ImageUrlBuilder.prototype.forceDownload = function(download) {
        return this.withOptions({
            download: download
        });
    };
    // Flip image horizontally
    ImageUrlBuilder.prototype.flipHorizontal = function() {
        return this.withOptions({
            flipHorizontal: true
        });
    };
    // Flip image vertically
    ImageUrlBuilder.prototype.flipVertical = function() {
        return this.withOptions({
            flipVertical: true
        });
    };
    // Ignore crop/hotspot from image record, even when present
    ImageUrlBuilder.prototype.ignoreImageParams = function() {
        return this.withOptions({
            ignoreImageParams: true
        });
    };
    ImageUrlBuilder.prototype.fit = function(value) {
        if (validFits.indexOf(value) === -1) {
            throw new Error('Invalid fit mode "'.concat(value, '"'));
        }
        return this.withOptions({
            fit: value
        });
    };
    ImageUrlBuilder.prototype.crop = function(value) {
        if (validCrops.indexOf(value) === -1) {
            throw new Error('Invalid crop mode "'.concat(value, '"'));
        }
        return this.withOptions({
            crop: value
        });
    };
    // Saturation
    ImageUrlBuilder.prototype.saturation = function(saturation) {
        return this.withOptions({
            saturation: saturation
        });
    };
    ImageUrlBuilder.prototype.auto = function(value) {
        if (validAutoModes.indexOf(value) === -1) {
            throw new Error('Invalid auto mode "'.concat(value, '"'));
        }
        return this.withOptions({
            auto: value
        });
    };
    // Specify the number of pixels to pad the image
    ImageUrlBuilder.prototype.pad = function(pad) {
        return this.withOptions({
            pad: pad
        });
    };
    // Gets the url based on the submitted parameters
    ImageUrlBuilder.prototype.url = function() {
        return (0, urlForImage_1.default)(this.options);
    };
    // Alias for url()
    ImageUrlBuilder.prototype.toString = function() {
        return this.url();
    };
    return ImageUrlBuilder;
}();
exports.ImageUrlBuilder = ImageUrlBuilder; //# sourceMappingURL=builder.js.map


/***/ }),

/***/ 96473:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var __importDefault = (void 0) && (void 0).__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : {
        "default": mod
    };
};
var builder_1 = __importDefault(__webpack_require__(67507));
module.exports = builder_1.default; //# sourceMappingURL=index.js.map


/***/ }),

/***/ 90806:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
var example = "image-Tb9Ew8CXIwaY6R1kjMvI0uRR-2000x3000-jpg";
function parseAssetId(ref) {
    var _a = ref.split("-"), id = _a[1], dimensionString = _a[2], format = _a[3];
    if (!id || !dimensionString || !format) {
        throw new Error("Malformed asset _ref '".concat(ref, "'. Expected an id like \"").concat(example, '".'));
    }
    var _b = dimensionString.split("x"), imgWidthStr = _b[0], imgHeightStr = _b[1];
    var width = +imgWidthStr;
    var height = +imgHeightStr;
    var isValidAssetId = isFinite(width) && isFinite(height);
    if (!isValidAssetId) {
        throw new Error("Malformed asset _ref '".concat(ref, "'. Expected an id like \"").concat(example, '".'));
    }
    return {
        id: id,
        width: width,
        height: height,
        format: format
    };
}
exports["default"] = parseAssetId; //# sourceMappingURL=parseAssetId.js.map


/***/ }),

/***/ 62783:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

var __assign = (void 0) && (void 0).__assign || function() {
    __assign = Object.assign || function(t) {
        for(var s, i = 1, n = arguments.length; i < n; i++){
            s = arguments[i];
            for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
var isRef = function(src) {
    var source = src;
    return source ? typeof source._ref === "string" : false;
};
var isAsset = function(src) {
    var source = src;
    return source ? typeof source._id === "string" : false;
};
var isAssetStub = function(src) {
    var source = src;
    return source && source.asset ? typeof source.asset.url === "string" : false;
};
// Convert an asset-id, asset or image to an image record suitable for processing
// eslint-disable-next-line complexity
function parseSource(source) {
    if (!source) {
        return null;
    }
    var image;
    if (typeof source === "string" && isUrl(source)) {
        // Someone passed an existing image url?
        image = {
            asset: {
                _ref: urlToId(source)
            }
        };
    } else if (typeof source === "string") {
        // Just an asset id
        image = {
            asset: {
                _ref: source
            }
        };
    } else if (isRef(source)) {
        // We just got passed an asset directly
        image = {
            asset: source
        };
    } else if (isAsset(source)) {
        // If we were passed an image asset document
        image = {
            asset: {
                _ref: source._id || ""
            }
        };
    } else if (isAssetStub(source)) {
        // If we were passed a partial asset (`url`, but no `_id`)
        image = {
            asset: {
                _ref: urlToId(source.asset.url)
            }
        };
    } else if (typeof source.asset === "object") {
        // Probably an actual image with materialized asset
        image = __assign({}, source);
    } else {
        // We got something that does not look like an image, or it is an image
        // that currently isn't sporting an asset.
        return null;
    }
    var img = source;
    if (img.crop) {
        image.crop = img.crop;
    }
    if (img.hotspot) {
        image.hotspot = img.hotspot;
    }
    return applyDefaults(image);
}
exports["default"] = parseSource;
function isUrl(url) {
    return /^https?:\/\//.test("".concat(url));
}
function urlToId(url) {
    var parts = url.split("/").slice(-1);
    return "image-".concat(parts[0]).replace(/\.([a-z]+)$/, "-$1");
}
// Mock crop and hotspot if image lacks it
function applyDefaults(image) {
    if (image.crop && image.hotspot) {
        return image;
    }
    // We need to pad in default values for crop or hotspot
    var result = __assign({}, image);
    if (!result.crop) {
        result.crop = {
            left: 0,
            top: 0,
            bottom: 0,
            right: 0
        };
    }
    if (!result.hotspot) {
        result.hotspot = {
            x: 0.5,
            y: 0.5,
            height: 1.0,
            width: 1.0
        };
    }
    return result;
} //# sourceMappingURL=parseSource.js.map


/***/ }),

/***/ 51726:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

var __assign = (void 0) && (void 0).__assign || function() {
    __assign = Object.assign || function(t) {
        for(var s, i = 1, n = arguments.length; i < n; i++){
            s = arguments[i];
            for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (void 0) && (void 0).__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : {
        "default": mod
    };
};
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.parseSource = exports.SPEC_NAME_TO_URL_NAME_MAPPINGS = void 0;
var parseAssetId_1 = __importDefault(__webpack_require__(90806));
var parseSource_1 = __importDefault(__webpack_require__(62783));
exports.parseSource = parseSource_1.default;
exports.SPEC_NAME_TO_URL_NAME_MAPPINGS = [
    [
        "width",
        "w"
    ],
    [
        "height",
        "h"
    ],
    [
        "format",
        "fm"
    ],
    [
        "download",
        "dl"
    ],
    [
        "blur",
        "blur"
    ],
    [
        "sharpen",
        "sharp"
    ],
    [
        "invert",
        "invert"
    ],
    [
        "orientation",
        "or"
    ],
    [
        "minHeight",
        "min-h"
    ],
    [
        "maxHeight",
        "max-h"
    ],
    [
        "minWidth",
        "min-w"
    ],
    [
        "maxWidth",
        "max-w"
    ],
    [
        "quality",
        "q"
    ],
    [
        "fit",
        "fit"
    ],
    [
        "crop",
        "crop"
    ],
    [
        "saturation",
        "sat"
    ],
    [
        "auto",
        "auto"
    ],
    [
        "dpr",
        "dpr"
    ],
    [
        "pad",
        "pad"
    ]
];
function urlForImage(options) {
    var spec = __assign({}, options || {});
    var source = spec.source;
    delete spec.source;
    var image = (0, parseSource_1.default)(source);
    if (!image) {
        throw new Error("Unable to resolve image URL from source (".concat(JSON.stringify(source), ")"));
    }
    var id = image.asset._ref || image.asset._id || "";
    var asset = (0, parseAssetId_1.default)(id);
    // Compute crop rect in terms of pixel coordinates in the raw source image
    var cropLeft = Math.round(image.crop.left * asset.width);
    var cropTop = Math.round(image.crop.top * asset.height);
    var crop = {
        left: cropLeft,
        top: cropTop,
        width: Math.round(asset.width - image.crop.right * asset.width - cropLeft),
        height: Math.round(asset.height - image.crop.bottom * asset.height - cropTop)
    };
    // Compute hot spot rect in terms of pixel coordinates
    var hotSpotVerticalRadius = image.hotspot.height * asset.height / 2;
    var hotSpotHorizontalRadius = image.hotspot.width * asset.width / 2;
    var hotSpotCenterX = image.hotspot.x * asset.width;
    var hotSpotCenterY = image.hotspot.y * asset.height;
    var hotspot = {
        left: hotSpotCenterX - hotSpotHorizontalRadius,
        top: hotSpotCenterY - hotSpotVerticalRadius,
        right: hotSpotCenterX + hotSpotHorizontalRadius,
        bottom: hotSpotCenterY + hotSpotVerticalRadius
    };
    // If irrelevant, or if we are requested to: don't perform crop/fit based on
    // the crop/hotspot.
    if (!(spec.rect || spec.focalPoint || spec.ignoreImageParams || spec.crop)) {
        spec = __assign(__assign({}, spec), fit({
            crop: crop,
            hotspot: hotspot
        }, spec));
    }
    return specToImageUrl(__assign(__assign({}, spec), {
        asset: asset
    }));
}
exports["default"] = urlForImage;
// eslint-disable-next-line complexity
function specToImageUrl(spec) {
    var cdnUrl = (spec.baseUrl || "https://cdn.sanity.io").replace(/\/+$/, "");
    var filename = "".concat(spec.asset.id, "-").concat(spec.asset.width, "x").concat(spec.asset.height, ".").concat(spec.asset.format);
    var baseUrl = "".concat(cdnUrl, "/images/").concat(spec.projectId, "/").concat(spec.dataset, "/").concat(filename);
    var params = [];
    if (spec.rect) {
        // Only bother url with a crop if it actually crops anything
        var _a = spec.rect, left = _a.left, top_1 = _a.top, width = _a.width, height = _a.height;
        var isEffectiveCrop = left !== 0 || top_1 !== 0 || height !== spec.asset.height || width !== spec.asset.width;
        if (isEffectiveCrop) {
            params.push("rect=".concat(left, ",").concat(top_1, ",").concat(width, ",").concat(height));
        }
    }
    if (spec.bg) {
        params.push("bg=".concat(spec.bg));
    }
    if (spec.focalPoint) {
        params.push("fp-x=".concat(spec.focalPoint.x));
        params.push("fp-y=".concat(spec.focalPoint.y));
    }
    var flip = [
        spec.flipHorizontal && "h",
        spec.flipVertical && "v"
    ].filter(Boolean).join("");
    if (flip) {
        params.push("flip=".concat(flip));
    }
    // Map from spec name to url param name, and allow using the actual param name as an alternative
    exports.SPEC_NAME_TO_URL_NAME_MAPPINGS.forEach(function(mapping) {
        var specName = mapping[0], param = mapping[1];
        if (typeof spec[specName] !== "undefined") {
            params.push("".concat(param, "=").concat(encodeURIComponent(spec[specName])));
        } else if (typeof spec[param] !== "undefined") {
            params.push("".concat(param, "=").concat(encodeURIComponent(spec[param])));
        }
    });
    if (params.length === 0) {
        return baseUrl;
    }
    return "".concat(baseUrl, "?").concat(params.join("&"));
}
function fit(source, spec) {
    var cropRect;
    var imgWidth = spec.width;
    var imgHeight = spec.height;
    // If we are not constraining the aspect ratio, we'll just use the whole crop
    if (!(imgWidth && imgHeight)) {
        return {
            width: imgWidth,
            height: imgHeight,
            rect: source.crop
        };
    }
    var crop = source.crop;
    var hotspot = source.hotspot;
    // If we are here, that means aspect ratio is locked and fitting will be a bit harder
    var desiredAspectRatio = imgWidth / imgHeight;
    var cropAspectRatio = crop.width / crop.height;
    if (cropAspectRatio > desiredAspectRatio) {
        // The crop is wider than the desired aspect ratio. That means we are cutting from the sides
        var height = Math.round(crop.height);
        var width = Math.round(height * desiredAspectRatio);
        var top_2 = Math.max(0, Math.round(crop.top));
        // Center output horizontally over hotspot
        var hotspotXCenter = Math.round((hotspot.right - hotspot.left) / 2 + hotspot.left);
        var left = Math.max(0, Math.round(hotspotXCenter - width / 2));
        // Keep output within crop
        if (left < crop.left) {
            left = crop.left;
        } else if (left + width > crop.left + crop.width) {
            left = crop.left + crop.width - width;
        }
        cropRect = {
            left: left,
            top: top_2,
            width: width,
            height: height
        };
    } else {
        // The crop is taller than the desired ratio, we are cutting from top and bottom
        var width = crop.width;
        var height = Math.round(width / desiredAspectRatio);
        var left = Math.max(0, Math.round(crop.left));
        // Center output vertically over hotspot
        var hotspotYCenter = Math.round((hotspot.bottom - hotspot.top) / 2 + hotspot.top);
        var top_3 = Math.max(0, Math.round(hotspotYCenter - height / 2));
        // Keep output rect within crop
        if (top_3 < crop.top) {
            top_3 = crop.top;
        } else if (top_3 + height > crop.top + crop.height) {
            top_3 = crop.top + crop.height - height;
        }
        cropRect = {
            left: left,
            top: top_3,
            width: width,
            height: height
        };
    }
    return {
        width: imgWidth,
        height: imgHeight,
        rect: cropRect
    };
} //# sourceMappingURL=urlForImage.js.map


/***/ }),

/***/ 69560:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/* __next_internal_client_entry_do_not_use__  cjs */ 
const { createProxy } = __webpack_require__(21313);
module.exports = createProxy("C:\\Users\\jamil\\New-Weeks-Blog\\new-weeks-blog\\node_modules\\next\\dist\\client\\image.js");
 //# sourceMappingURL=image.js.map


/***/ }),

/***/ 10993:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

module.exports = __webpack_require__(69560);


/***/ }),

/***/ 75830:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = __webpack_require__(95284);

function emptyFunction() {}
function emptyFunctionWithReset() {}
emptyFunctionWithReset.resetWarningCache = emptyFunction;

module.exports = function() {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret) {
      // It is still safe when called from React.
      return;
    }
    var err = new Error(
      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
      'Use PropTypes.checkPropTypes() to call them. ' +
      'Read more at http://fb.me/use-check-prop-types'
    );
    err.name = 'Invariant Violation';
    throw err;
  };
  shim.isRequired = shim;
  function getShim() {
    return shim;
  };
  // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  var ReactPropTypes = {
    array: shim,
    bigint: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,

    any: shim,
    arrayOf: getShim,
    element: shim,
    elementType: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim,

    checkPropTypes: emptyFunctionWithReset,
    resetWarningCache: emptyFunction
  };

  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),

/***/ 69232:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (false) { var throwOnDirectAccess, ReactIs; } else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = __webpack_require__(75830)();
}


/***/ }),

/***/ 95284:
/***/ ((module) => {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ })

};
;