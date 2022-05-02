"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var index_route_1 = __importDefault(require("./v1/index.route"));
var router = (0, express_1.Router)();
// v1 routes
router.use('/v1', index_route_1.default);
exports.default = router;
