"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HamburgerInner = exports.HamburgerBox = exports.HamburgerContainer = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _templateObject, _templateObject2, _templateObject3;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

const HamburgerContainer = _styledComponents.default.button(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  padding: 15px 15px;\n  display: inline-block;\n  cursor: pointer;\n  transition-property: opacity, filter;\n  transition-duration: 0.15s;\n  transition-timing-function: linear;\n  font: inherit;\n  color: inherit;\n  text-transform: none;\n  background-color: transparent;\n  border: 0;\n  margin: 0;\n  overflow: visible;\n\n  &:hover {\n    opacity: 0.7;\n  }\n\n  &.is-active:hover {\n    opacity: 0.7;\n  }\n\n  &.is-active {\n    .hamburguer-inner,\n    .hamburguer-inner::after,\n    .hamburguer-inner::before {\n      background-color: #000;\n    }\n  }\n"])));

exports.HamburgerContainer = HamburgerContainer;

const HamburgerBox = _styledComponents.default.span(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  width: 40px;\n  height: 24px;\n  display: inline-block;\n  position: relative;\n\n  &.hamburger--3dx {\n    perspective: 80px;\n  }\n"])));

exports.HamburgerBox = HamburgerBox;

const HamburgerInner = _styledComponents.default.span(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  display: block;\n  top: 50%;\n  margin-top: -2px;\n  width: 40px;\n  height: 4px;\n  background-color: #000;\n  border-radius: 4px;\n  position: absolute;\n  transition-property: transform;\n  transition-duration: 0.15s;\n  transition-timing-function: ease;\n\n  &::before {\n    content: \"\";\n    display: block;\n    width: 40px;\n    height: 4px;\n    background-color: #000;\n    border-radius: 4px;\n    position: absolute;\n    transition-property: transform;\n    transition-duration: 0.15s;\n    transition-timing-function: ease;\n    top: -10px;\n  }\n\n  &::after {\n    content: \"\";\n    display: block;\n    width: 40px;\n    height: 4px;\n    background-color: #000;\n    border-radius: 4px;\n    position: absolute;\n    transition-property: transform;\n    transition-duration: 0.15s;\n    transition-timing-function: ease;\n    bottom: -10px;\n  }\n\n  &.hamburger--3dx {\n    transition: transform 0.15s cubic-bezier(0.645, 0.045, 0.355, 1),\n      background-color 0s 0.1s cubic-bezier(0.645, 0.045, 0.355, 1);\n\n    &::after {\n      transition: transform 0s 0.1s cubic-bezier(0.645, 0.045, 0.355, 1);\n    }\n\n    &::before {\n      transition: transform 0s 0.1s cubic-bezier(0.645, 0.045, 0.355, 1);\n    }\n\n    &.is-active {\n      background-color: transparent !important;\n      transform: rotateY(180deg);\n\n      &::after {\n        transform: translate3d(0, -10px, 0) rotate(-45deg);\n      }\n\n      &::before {\n        transform: translate3d(0, 10px, 0) rotate(45deg);\n      }\n    }\n  }\n"])));

exports.HamburgerInner = HamburgerInner;