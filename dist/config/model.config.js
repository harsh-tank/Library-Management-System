"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sequelize = exports.Sequelize = void 0;
var sequelize_1 = require("sequelize");
Object.defineProperty(exports, "Sequelize", { enumerable: true, get: function () { return sequelize_1.Sequelize; } });
var env = process.env.NODE_ENV || "development";
var config = require("../config/config")[env];
var sequelize = new sequelize_1.Sequelize(config.database, config.username, config.password, config);
exports.sequelize = sequelize;
