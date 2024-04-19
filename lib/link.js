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
// link

const Link = props => {
  const {
    href,
    label,
    id,
    alias,
    name,
    className,
    align,
    children,
    medium,
    allCaps
  } = props;
  const linkLabel = label || children;
  const availableIn = (0, _utils.setMedium)(medium);
  const _id = id === '' ? (0, _utils.slugify)(linkLabel) : id;
  return /*#__PURE__*/_react.default.createElement("table", {
    align: align,
    className: (0, _classnames.default)('htmplar-link', className, availableIn, {
      'htmplar-all-caps': allCaps
    }),
    border: "0",
    cellPadding: 0,
    cellSpacing: 0
  }, /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("td", null, /*#__PURE__*/_react.default.createElement("a", {
    href: href,
    id: _id,
    alias: alias,
    name: name
  }, linkLabel))));
};
Link.defaultProps = {
  align: 'left',
  medium: 'both',
  allCaps: false
};
Link.propTypes = {
  href: _propTypes.default.string.isRequired,
  label: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object]),
  id: _propTypes.default.string.isRequired,
  alias: _propTypes.default.string,
  name: _propTypes.default.string,
  medium: _propTypes.default.string,
  children: _propTypes.default.oneOfType([_propTypes.default.object, _propTypes.default.func, _propTypes.default.array, _propTypes.default.string]),
  align: _propTypes.default.string,
  className: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object]),
  allCaps: _propTypes.default.bool
};
var _default = exports.default = Link;