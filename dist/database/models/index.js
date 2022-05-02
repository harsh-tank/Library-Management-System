"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var role_1 = __importDefault(require("./role"));
var user_1 = __importDefault(require("./user"));
var db = {};
var models = {
    modelsInitialization: function (sequelize, DataType) {
        db.Role = (0, role_1.default)(sequelize, DataType);
        db.User = (0, user_1.default)(sequelize, DataType);
        return db;
    }
};
exports.default = models;
