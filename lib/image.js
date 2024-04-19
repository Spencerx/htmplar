"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _classnames = _interopRequireDefault(require("classnames"));
var _utils = require("./utils");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
// image

const Image = props => {
  const {
    src,
    align,
    className,
    title,
    medium,
    id,
    width,
    height
  } = props;
  const availableIn = (0, _utils.setMedium)(medium);
  const _id = id === '' ? (0, _utils.createID)(props) : id;
  const imageSize = typeof src === 'object' ? '' : 'htmplar-image-all';
  return typeof src === 'object' ? Object.keys(src).map(type => {
    const url = src[type];
    return /*#__PURE__*/_react.default.createElement("span", {
      key: type,
      id: `${_id}-${type}`,
      className: (0, _classnames.default)('htmplar-image-container', `${className}-container`, `htmplar-image-container-${type}`)
    }, /*#__PURE__*/_react.default.createElement("img", {
      align: align,
      src: url,
      alt: title,
      width: width,
      height: height,
      className: (0, _classnames.default)('htmplar-image', className, `htmplar-image-${type}`)
    }));
  }) : /*#__PURE__*/_react.default.createElement("img", {
    id: _id,
    align: align,
    src: src,
    alt: title,
    width: width,
    height: height,
    className: (0, _classnames.default)('htmplar-image', className, imageSize, availableIn)
  });
};
Image.defaultProps = {
  align: 'center',
  medium: 'both',
  id: ''
};
Image.propTypes = {
  src: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object]).isRequired,
  title: _propTypes.default.string.isRequired,
  id: _propTypes.default.string,
  align: _propTypes.default.string,
  medium: _propTypes.default.string,
  width: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number]),
  height: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number]),
  className: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object])
};
var _default = exports.default = Image;