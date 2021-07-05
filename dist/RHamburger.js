"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/es.object.assign.js");

require("core-js/modules/web.dom-collections.iterator.js");

var _react = _interopRequireWildcard(require("react"));

var _styles = require("./styles");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function Hamburguer(_ref) {
  let props = Object.assign({}, _ref);
  const [isActive, setIsActive] = (0, _react.useState)(false);
  const [classActive, setClassActive] = (0, _react.useState)("");
  (0, _react.useEffect)(() => {
    props.state = isActive;
  }, [isActive]);

  const ToggleClass = () => {
    let state = !isActive;

    if (state) {
      console.log(state);
      setClassActive("is-active");
    } else {
      setClassActive("");
    }

    setIsActive(!isActive);
  };

  return /*#__PURE__*/_react.default.createElement(_styles.HamburgerContainer, {
    className: "".concat(props.type, " ").concat(classActive),
    type: "button",
    onClick: () => ToggleClass()
  }, /*#__PURE__*/_react.default.createElement(_styles.HamburgerBox, {
    className: "".concat(props.type)
  }, /*#__PURE__*/_react.default.createElement(_styles.HamburgerInner, {
    className: "".concat(props.type, " ").concat(classActive)
  })));
}

var _default = Hamburguer;
exports.default = _default;