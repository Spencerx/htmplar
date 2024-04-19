"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _classnames = _interopRequireDefault(require("classnames"));
var _utils = require("./utils");
var _image = _interopRequireDefault(require("./image"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
// caption

const Caption = props => {
  const {
    className,
    children,
    medium,
    id,
    image,
    imagePlacement,
    title,
    valign,
    align
  } = props;
  const availableIn = (0, _utils.setMedium)(medium);
  const imageAlign = imagePlacement || 'top';
  const _id = id === '' ? `htmplar-caption-${(0, _utils.slugify)(title)}` : id;
  let textAlign;
  switch (imageAlign) {
    case 'left':
      textAlign = 'right';
      break;
    case 'right':
      textAlign = 'left';
      break;
    default:
      textAlign = 'top';
      break;
  }
  return /*#__PURE__*/_react.default.createElement("table", {
    id: _id,
    className: (0, _classnames.default)('htmplar-caption', className, availableIn),
    align: align,
    cellPadding: 0,
    cellSpacing: 0,
    border: "0"
  }, /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("td", {
    className: (0, _classnames.default)('htmplar-caption-inner'),
    valign: valign
  }, /*#__PURE__*/_react.default.createElement("table", {
    align: imageAlign,
    className: (0, _classnames.default)('htmplar-caption-image-block'),
    cellSpacing: 0,
    cellPadding: 0,
    border: "0"
  }, /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("td", {
    className: (0, _classnames.default)('htmplar-caption-image-container'),
    valign: valign
  }, /*#__PURE__*/_react.default.createElement(_image.default, {
    src: image,
    title: title
  })))), /*#__PURE__*/_react.default.createElement("table", {
    align: textAlign,
    className: (0, _classnames.default)('htmplar-caption-text-block'),
    cellPadding: 0,
    cellSpacing: 0,
    border: "0"
  }, /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("td", {
    className: (0, _classnames.default)('htmplar-caption-content'),
    valign: valign
  }, title ? /*#__PURE__*/_react.default.createElement("h2", {
    className: (0, _classnames.default)('htmplar-caption-title')
  }, title) : '', children))))));
};
Caption.defaultProps = {
  imagePlacement: 'top',
  align: 'left',
  valign: 'top',
  id: ''
};
Caption.propTypes = {
  className: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object]),
  id: _propTypes.default.string,
  title: _propTypes.default.string,
  medium: _propTypes.default.string,
  children: _propTypes.default.oneOfType([_propTypes.default.object, _propTypes.default.func, _propTypes.default.symbol, _propTypes.default.array, _propTypes.default.string]),
  image: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object]),
  imagePlacement: _propTypes.default.string,
  align: _propTypes.default.string,
  valign: _propTypes.default.string
};
var _default = exports.default = Caption;