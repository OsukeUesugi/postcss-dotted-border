'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (decl) {
    var argsArray = decl.value.split(' '),
        val = void 0;

    if (decl.prop === 'dotted-border-top' || decl.prop === 'dotted-border-bottom') {
        val = 'linear-gradient(to right, ' + argsArray[3] + ', ' + argsArray[3] + ' ' + argsArray[0] + ', transparent ' + argsArray[0] + ', transparent ' + argsArray[2] + ')';
    } else {
        val = 'linear-gradient(to bottom, ' + argsArray[3] + ', ' + argsArray[3] + ' ' + argsArray[0] + ', transparent ' + argsArray[0] + ', transparent ' + argsArray[2] + ')';
    }
    return val;
};

module.exports = exports['default'];