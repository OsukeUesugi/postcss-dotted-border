'use strict';

var _postcss = require('postcss');

var _postcss2 = _interopRequireDefault(_postcss);

var _getGradient = require('./getGradient.js');

var _getGradient2 = _interopRequireDefault(_getGradient);

var _getBgSize = require('./getBgSize.js');

var _getBgSize2 = _interopRequireDefault(_getBgSize);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = _postcss2.default.plugin('postcss-dotted-border', function () {

    // Work with options here


    return function (css) {

        css.walkDecls(/^dotted-border/, function (decl) {
            var gradient = (0, _getGradient2.default)(decl),
                bgSize = (0, _getBgSize2.default)(decl);

            decl.cloneBefore({
                prop: 'background-image',
                value: gradient
            });
            decl.cloneBefore({
                prop: 'background-size',
                value: bgSize
            });

            switch (decl.prop) {
                case 'dotted-border-top':
                    decl.cloneBefore({
                        prop: 'background-position',
                        value: 'top'
                    });
                    decl.cloneBefore({
                        prop: 'background-repeat',
                        value: 'repeat-x'
                    });
                    break;
                case 'dotted-border-right':
                    decl.cloneBefore({
                        prop: 'background-position',
                        value: 'right'
                    });
                    decl.cloneBefore({
                        prop: 'background-repeat',
                        value: 'repeat-y'
                    });
                    break;
                case 'dotted-border-bottom':
                    decl.cloneBefore({
                        prop: 'background-position',
                        value: 'bottom'
                    });
                    decl.cloneBefore({
                        prop: 'background-repeat',
                        value: 'repeat-x'
                    });
                    break;
                case 'dotted-border-left':
                    decl.cloneBefore({
                        prop: 'background-position',
                        value: 'left'
                    });
                    decl.cloneBefore({
                        prop: 'background-repeat',
                        value: 'repeat-y'
                    });
                    break;
                default:
                    return 'dotted-border is undefined';
            }
            decl.remove();
        });
    };
});