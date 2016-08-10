'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (decl) {
    var argsArray = decl.value.split(' '),
        val = void 0;
    if (decl.prop === 'dotted-border-top' || decl.prop === 'dotted-border-bottom') {
        val = parseInt(argsArray[2]) + parseInt(argsArray[0]) + 'px ' + argsArray[1];
    } else {
        val = argsArray[0] + ' ' + (parseInt(argsArray[2]) + parseInt(argsArray[1])) + 'px';
    }
    return val;
};

;