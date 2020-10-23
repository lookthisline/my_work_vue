"use strict";
exports.__esModule = true;
var vuex_1 = require("vuex");
var state_1 = require("./state");
var getters_1 = require("./getters");
var mutations_1 = require("./mutations");
var actions_1 = require("./actions");
exports["default"] = vuex_1.createStore({ state: state_1["default"], getters: getters_1["default"], mutations: mutations_1["default"], actions: actions_1["default"] });
