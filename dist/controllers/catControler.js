"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCategories = void 0;
const models_1 = __importDefault(require("../models"));
const getCategories = async (req, res, next) => {
    try {
        const topCategories = await models_1.default.category.findAll();
        return res.json(topCategories);
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({
            error: "Failed to fetch topCategories from database",
        });
    }
};
exports.getCategories = getCategories;
