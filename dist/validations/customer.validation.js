"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerSchema = void 0;
var celebrate_1 = require("celebrate");
exports.CustomerSchema = {
    add: {
        body: celebrate_1.Joi.object({
            FirstName: celebrate_1.Joi.string()
                .required()
                .example('Harsh')
                .description('FirstName of Customer'),
            LastName: celebrate_1.Joi.string()
                .required()
                .example('Tank')
                .description('LastName of Customer'),
            Email: celebrate_1.Joi.string()
                .required()
                .email()
                .example('harsh@gmail.com')
                .description('email of Customer'),
            Password: celebrate_1.Joi.string()
                .required()
                //.regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/)
                .description('password of Customer'),
            Confirm_Password: celebrate_1.Joi.string()
                .required()
                //.regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/)
                .description('confirmPassword'),
            ProfileImage: celebrate_1.Joi.string()
                .description('Profile Image of  Customer'),
        })
    }
};
