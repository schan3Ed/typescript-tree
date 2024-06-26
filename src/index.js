"use strict";
exports.__esModule = true;
exports.Node = void 0;
var Node = /** @class */ (function () {
    function Node(name) {
        this.Key = name;
    }
    Node.prototype.addChild = function (child) {
        this.Children.push(child);
    };
    Node.prototype.removeChild = function (name) { };
    Node.prototype.find = function (name) {
        // DFS search
        var tobeVisit;
        tobeVisit.push(this);
        while (tobeVisit.length) {
            var current = tobeVisit.pop();
            console.log(current.Key);
            if (current.Key == name) {
                return current;
            }
            tobeVisit = current.Children.concat(tobeVisit);
        }
    };
    Node.prototype.exportToFile = function (fileName) { };
    Node.prototype.importFromFile = function (fileName) { };
    return Node;
}());
exports.Node = Node;
exports["default"] = Node;
