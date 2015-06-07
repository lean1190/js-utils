// Declare the module
var utils = utils || (function () {
    'use strict';

    var helper = helper || {};

    // Check if the object has a property, if so returns true
    helper.isEmptyObject = function (object) {
        for (var property in object) {
            if (object.hasOwnProperty(property)) {
                return false;
            }
        }

        return true;
    };

    // Check if a variable is empty, null, undefined or blank .
    helper.isEmpty = function (variable) {
        return (variable === null || typeof variable === "undefined" || variable === {} || this.isEmptyObject(variable) || variable === "");
    };

    // Check if 2 strings are case insensitive equals
    helper.isStringInsensitiveEquals = function (firstString, secondString) {
        return firstString.toUpperCase() === secondString.toUpperCase();
    };

    // Cut the last character from a string
    helper.cutLastChar = function (string) {
        return string.slice(0, -1);
    };

    // Transform a request parameter json object to string
    // JSON format: {key : "value", key : "value"} ==> to String: key=value&key=value
    helper.paramsToString = function (paramsObject) {
        var stringParams = "";
        for (var property in paramsObject) {
            if (paramsObject.hasOwnProperty(property)) {
                stringParams += property + "=" + paramsObject[property] + "&";
            }
        }

        // Cut last & character
        return (this.cutLastChar(stringParams)).trim();
    };

    // Returns the extension from a filename, for example exampleImg.png
    helper.getFileExtension = function (fileName) {
        var extension = fileName.split('.');

        return extension[extension.length - 1];
    };

    return helper;
}());
