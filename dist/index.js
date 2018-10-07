"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var INTERNAL_ASSERTION = {
    '==': function (a, b) {
        return a == b;
    },
    '===': function (a, b) {
        return a === b;
    },
    '!=': function (a, b) {
        return a != b;
    },
    '!==': function (a, b) {
        return a !== b;
    },
    '<': function (a, b) {
        return a < b;
    },
    '>': function (a, b) {
        return a > b;
    },
    '<=': function (a, b) {
        return a <= b;
    },
    '>=': function (a, b) {
        return a >= b;
    },
};
var Comparation;
(function (Comparation) {
    Comparation[Comparation["=="] = 0] = "==";
    Comparation[Comparation["==="] = 1] = "===";
    Comparation[Comparation["!="] = 2] = "!=";
    Comparation[Comparation["!=="] = 3] = "!==";
    Comparation[Comparation["<"] = 4] = "<";
    Comparation[Comparation[">"] = 5] = ">";
    Comparation[Comparation["<="] = 6] = "<=";
    Comparation[Comparation[">="] = 7] = ">=";
})(Comparation = exports.Comparation || (exports.Comparation = {}));
function assert(assertion) {
    if (typeof assertion === 'boolean') {
        return assertion;
    }
    else if (Array.isArray(assertion)) {
        var lvalue = assertion[0], op = assertion[1], rvalue = assertion[2];
        return INTERNAL_ASSERTION[op] && INTERNAL_ASSERTION[op](lvalue, rvalue);
    }
    return false;
}
exports.assert = assert;
function and() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return args.every(function (arg) { return assert(arg); });
}
exports.and = and;
function or() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return args.some(function (arg) { return assert(arg); });
}
exports.or = or;
function not(assertion) {
    return !assertion;
}
exports.not = not;
exports.default = {
    and: and,
    or: or,
    not: not,
    assert: assert
};
//# sourceMappingURL=index.js.map